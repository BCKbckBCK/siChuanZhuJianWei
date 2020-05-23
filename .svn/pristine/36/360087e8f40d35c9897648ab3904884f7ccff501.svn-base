<template>
  <div class="process-container">
    <div>
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <input
            class="explorationInputStyle"
            v-model="filterForm.key"
            placeholder="搜索项目统一代码或项目名"
            size="small"
          />
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:10px" @click="search" type="primary">搜索</el-button>
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
        <template slot="header">
          项目名称
          <br />基本情况
        </template>
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;padding:0 10px">
            {{ scope.row.td1 }}
            <br />
          </div>
          <div style="text-align:left;padding:0 10px">{{ scope.row.td2 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">
          上报日期
          <br />受理日期
        </template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.td4 }}
            <br />
          </div>
          <div>{{ scope.row.td5 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="进度状态" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.td6===1" type="primary" style="width:90%" disable-transitions>待审查</el-tag>
          <el-tag v-if="scope.row.td6===2" type="primary" style="width:90%" disable-transitions>待回复</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.td6===1"
            type="text"
            @click="view(scope.row.td1,scope.row.td2)"
          >查看</el-button>
          <el-button
            v-if="scope.row.td6===2"
            type="text"
            @click="view(scope.row.td1,scope.row.td2)"
          >查看</el-button>
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

    <el-dialog title="提交审核" :visible.sync="dialogApproveFormVisible">
      <el-table
        v-loading="listLoading"
        :data="approveList"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="机构代码" :show-overflow-tooltip="true" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.td2 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="机构名称" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" :show-overflow-tooltip="true" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.td4 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审图金额（万元）" :show-overflow-tooltip="true" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.td5" size="mini" style="width:80px;" type="number" />万元
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogApproveFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./Exploration.js"></script>
<style lang="scss" scoped>
@import "../../styles/common2.scss";
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



<script>
import { mapGetters } from "vuex";
export default {
  name: "investigate",
  data() {
    return {
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      list: [
        {
          td1: "五金配件",
          td2: "2017-510681-41-03-1655130-010 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: 1
        },
        {
          td1: "五金配件",
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
    search() {},
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
    view(item, data) {
      this.$router.push({
        path: "viewDetail",
        query: { id: item, number: data }
      });
      // this.$router.push("viewDetail");
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
.processDetail {
  &-container {
    margin: 20px 0;
    .detail {
      margin: 40px 0;
      .title {
        border-bottom: 2px solid #2c3447;
        display: block;
        font-size: 1.5em;
        line-height: 2em;
        font-weight: bold;
        color: #2c3447;
      }
      ul {
        list-style-type: none;
        padding: 20px 10px;
        margin: 0px;
        .li-left {
          font-size: 1em;
          line-height: 4em;
          font-weight: bold;
          color: #2c3447;
          width: 200px;
          display: inline-block;
        }
        .li-right {
          font-size: 1em;
          line-height: 4em;
          font-weight: bold;
          color: #999999;
        }
      }
    }
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
