<template>
  <div class="process-container">
    <div>
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <el-input
            v-model="filterForm.key"
            placeholder="请输入关键字搜索项目"
            style="width: 200px"
            size="small"
          />
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column type="index" width="50" label="序号" :index="indexMethod" />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">工程名称</template>
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;padding:0 10px">
            {{ scope.row.td1 }}
            <br />
          </div>
          <div style="text-align:left;padding:0 10px">{{ scope.row.td2 }}</div>
        </template>
      </el-table-column>
      <!-- <el-table-column type="index" width="100px" label="版次" :index="indexMethod" /> -->

      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">上报日期<br/>受理日期</template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.td4 }}
            <br />
          </div>
          <div>{{ scope.row.td5 }}</div>
        </template>
      </el-table-column>
      <!-- <el-table-column label="审查意见" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <label v-if="scope.row.td6===1" type="success" style="width:90%" disable-transitions>无</label>

           <label v-if="scope.row.td6===2" type="success" style="width:90%" disable-transitions>有</label>
        </template>
      </el-table-column>-->
      <!-- <el-table-column label="复查意见" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <label v-if="scope.row.td6===1" type="success" style="width:90%" disable-transitions>无</label>

           <label v-if="scope.row.td6===2" type="success" style="width:90%" disable-transitions>无</label>
        </template>
      </el-table-column>-->
      <el-table-column label="状态" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.td6===1" type="success">审查完成</el-tag>
          <label v-if="scope.row.td6===2" type="success" style="width:90%" disable-transitions />
        </template>
      </el-table-column>
      <!-- <el-table-column label="审查结果" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
           <label v-if="scope.row.td6===1" type="success" style="width:90%" disable-transitions>通过</label>

           <label v-if="scope.row.td6===2" type="success" style="width:90%" disable-transitions>未通过</label>
        </template>
      </el-table-column>-->
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <a v-if="scope.row.td6===1" class="a" @click="dialogView=true">查看</a>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <div class="left">
        共 {{ total }} 条记录， 当前为 {{ displayLength * (page - 1) + 1 }} -
        {{
        Math.min(
        displayLength * (page - 1) + displayLength,
        displayLength * (page - 1) + list.length
        )
        }}
        条
      </div>
      <div class="right">
        <el-select :value="displayLength" size="small" @change="handleSizeChange">
          <el-option
            v-for="item in [10, 20, 50]"
            :key="item"
            :label="item"
            :value="item"
            size="small"
          />
        </el-select>
        <span>条/页</span>
        <el-button icon="el-icon-arrow-left" size="mini" :disabled="page === 1" @click="prevPage" />
        <el-select :value="page" size="small" @change="pageCurrentChange">
          <el-option v-for="item in pageArr" :key="item" :label="item" :value="item" />
        </el-select>
        <el-button
          icon="el-icon-arrow-right"
          size="mini"
          :disabled="page === maxPage"
          @click="nextPage"
        />
      </div>
    </div>
    <el-dialog title="详情" :visible.sync="dialogView">
      <div class="commentsMain">
        <el-form
          ref="form"
          class="el-form"
          style="line-height:75px;font-size:16px"
          :model="form"
          label-width="80px"
        >
          <el-form-item label="意见类型">
            <el-select v-model="form.region" disabled>
              <el-option label="意见类型1" value="1" />
              <el-option label="意见类型2" value="2" />
            </el-select>
          </el-form-item>
          <br />
          <el-form-item label="时间">
            <input class="explorationInputStyle" v-model="form.timer" disabled />
          </el-form-item>
          <br />
          <el-form-item label="页码">
            <input class="explorationInputStyle" v-model="form.pageNum" disabled />
          </el-form-item>
          <br />
          <el-form-item label="审查意见">
            <el-input v-model="form1.desc" type="textarea" :rows="4" disabled />
          </el-form-item>
          <br />
          <el-form-item label="回复说明">
            <el-input v-model="form.date2" type="textarea" :rows="4" />
          </el-form-item>
          <br />
          <el-form-item>
            <span style="text-align:right;width:100%;">
              <el-button
                size="small"
                style="margin-bottom:10px;background-color:#0086C2;width:100px;color:white"
                @click="dialogView=false"
              >确定</el-button>
            </span>
            <span style="text-align:right;width:100%;">
              <el-button
                size="small"
                style="margin-bottom:10px;margin-left:50px;background-color:white;width:100px"
                @click="dialogView=false"
              >取消</el-button>
            </span>
          </el-form-item>
          <br />
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import Handle from "./handle";
import { getUserList, deleteUser } from "../../api/user";
import comments from "./comments.vue";
export default {
  name: "Process",
  components: {
    comments
  },
  data() {
    return {
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,
      dialogView: false,
      displayLength: 10,
      total: 0,
      form1: {
        pageNum: "23",
        region: "意见类型1",
        timer: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc:
          "申请人相信，经过修改，已经完全克服了第一次审查意见通知书中关于新颖性、创造性及不清楚的问题，并克服了形式缺陷，符合专利法、实施细则以及审查指南的相关规定，请审查员在修改文本的基础上授权本发明的专利权"
      },
      list: [
        {
          td1: "五金配件技术改造项目-1期",
          td2: "2017-510681-41-03-1655130-010 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: 1
        },
        {
          td1: "五金配件技术改造项目",
          td2: "2017-510681-41-03-1655130-006 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: 2
        }
      ],
      listLoading: false,
      filterForm: {},
      wxScope: window.Scope,
      role: window.ROLE,
      dialogFormVisible: false,
      form: {
        option3: "1",
        option6: "1",
        option7: "1",
        option10: []
      },
      dialogApproveFormVisible: false,
      approveList: [
        {
          td1: 1,
          td2: "787901178",
          td3: "成都圣图建设工程咨询有限公司",
          td4: "顾女士  18000000000",
          td5: 0
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["name"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // const that = this
      // that.listLoading = true
      // getUserList({
      //     pageIndex: that.page,
      //     pageSize: that.displayLength,
      //     ...that.filterForm
      // }).then(res => {
      //     that.list = res.data
      //     that.total = res.total
      //     that.maxPage = Math.ceil(that.total / that.displayLength)
      //     that.pageArr = window.fp.range(1)(that.maxPage + 1)
      //     that.listLoading = false
      // })
    },
    indexMethod(index) {
      return (this.page - 1) * this.displayLength + index + 1;
    },
    handleSizeChange(val) {
      this.displayLength = val;
      this.page = 1;
      this.fetchData();
    },
    pageCurrentChange(val) {
      this.page = val;
      this.fetchData();
    },
    prevPage() {
      this.page -= 1;
      this.fetchData();
    },
    nextPage() {
      this.page += 1;
      this.fetchData();
    },
    clean() {
      this.filterForm = {};
      this.fetchData();
    },
    add() {
      this.$router.push({ path: "userEdit" });
    },
    edit(item) {
      this.$router.push({ path: "userEdit", query: { id: item.dnUserId } });
    },
    view(item) {
      this.$router.push({ path: "detail", query: { id: item.dnUserId } });
    },
    handle() {
      alert(this.status);
      this.status = "已受理";
      alert(this.status);

      this.$router.push({ path: "handleProcess" });
    },
    check() {
      this.$router.push({ path: "checkDetail" });
    },
    deleteConfirm(item) {
      this.$confirm("删除此工程 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // deleteUser(item.dnUserId).then(res => {
        //     this.$message({
        //       message: '删除成功',
        //       type: 'success'
        //     });
        //     this.fetchData()
        // })
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.a {
  color: deepskyblue;
}
.process {
  &-container {
    margin: 20px 0;
    .operate-button {
      width: 24px;
      height: 24px;
      padding: 4px;
      margin-left: 8px;
    }
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
<style lang="scss">
@import "../../styles/common2.scss";
</style>