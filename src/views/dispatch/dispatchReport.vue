<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">工程勘察报告</span>
    </div>
    <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
      <el-form-item>
        <input
          v-model="filterForm.key"
          class="explorationInputStyle"
          placeholder="搜索项目统一代码或项目名"
          style="width: 200px"
          size="small"
        />
      </el-form-item>
      <el-form-item>
        <el-button style="margin-left:10px" type="primary" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>
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
        <template slot="header">文件名</template>
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;padding:0 10px">
            {{ scope.row.td1 }}
            <br />
          </div>
          <div style="text-align:left;padding:0 10px">{{ scope.row.td2 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">更新时间</template>
        <template slot-scope="scope">
          <div>{{ scope.row.td5 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="进度状态" :show-overflow-tooltip="true" width="200">
        <template slot-scope="scope">
          <el-button type="text" :disabled="!scope.row.td6" @click="pdfImgView= !pdfImgView">查看</el-button>
          <el-button type="text" :disabled="scope.row.td6" @click="dialogView=!dialogView">添加</el-button>
          <el-button type="text" :disabled="!scope.row.td6" @click="again(scope.row)">删除</el-button>
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
    <el-dialog title="添加文件" :visible.sync="dialogView">
      <span>选择你要添加的文件</span>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card">
        <i class="el-icon-plus" />
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogView = false">取 消</el-button>
        <el-button type="primary" @click="savePdfImg">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看文件" :visible.sync="pdfImgView" width="80%">
      <div>
        <img :src="pdfImageUrl" type style=" width:100%" />
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="pdfImgView=!pdfImgView">取 消</el-button>
        <el-button type="primary" @click="pdfImgView=!pdfImgView">确 定</el-button>
      </div>
    </el-dialog>
    <span style="text-align:right;width:100%;display:block">
      <div style="padding-top:10px">
        <el-button size="small" style="margin-bottom:10px" @click="goBack">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </div>
    </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import {
//     getUserList, deleteUser
// } from '../../api/user'
export default {
  name: "Process",
  data() {
    return {
      pdfImageUrl: require("../../assets/timg.png"),
      pdfImgView: false,
      checkDislay: false,
      dialogView: false,
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      list: [
        {
          td0: "项目负责人",
          td1: "五金配件",
          td2: "2017-510681-41-03-1655130-010 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: true
        },
        {
          td0: "项目负责人",
          td1: "五金配件",
          td2: "2017-510681-41-03-1655130-006 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: false
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
    savePdfImg(item) {
      this.dialogView = false;
      this.list[1].td6 = !this.list[1].td6;
    },
    goBack() {
      this.$router.replace({ path: "/dispatch/workingProj" });
    },
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
      this.$router.replace({ path: "/exploration/Exploration" });
      // if (sessionStorage.getItem('sysUserId') === 'admin0') {
      //     if (Number(sessionStorage.getItem('bianji')) === 1) {
      //         this.$router.replace({ path: '/construction/refuse' });
      //         sessionStorage.removeItem('bianji')
      //     } else {
      //         this.$router.replace({ path: '/construction/process' });
      //     }
      // } else if (sessionStorage.getItem('sysUserId') === 'admin1') {
      //     return this.$router.replace({ path: '/construction/Exploration' })
      // }
    },
    view(item) {
      this.$router.push({
        path: "ExplorationDetail",
        query: { id: item.dnUserId }
      });
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
@import "../../styles/index.scss";
.processDetail {
  &-container {
    margin: 20px 0;
    .detail {
      margin: 40px 0;
      .title {
        border-bottom: 4px solid black;
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
