<template>
  <div class="process-container">
    <el-button @click="dialogView = !dialogView">click me</el-button>

    <el-dialog title="意见单" :visible.sync="dialogView">
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <span>项目名称：</span>
          {{projectName}}
          <br />
          <span>工程编号：</span>
          {{projectNumber}}
          <br />
          <span>意见内容：</span>
          <br />
        </el-form-item>
        <el-table
          v-loading="listLoading"
          :data="list"
          border
          element-loading-text="Loading"
          highlight-current-row
          style="margin-top:20px;line-height:48px"
        >
          <el-table-column type="index" width="50" label="序号" :index="indexMethod" />
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">意见类型</template>
            <template slot-scope="scope"></template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">页码</template>
          </el-table-column>
          <el-table-column label="日期" :show-overflow-tooltip="true" width="100">
            <template slot-scope="scope"></template>
          </el-table-column>
          <el-table-column label="审查意见">
            <template slot-scope="scope"></template>
          </el-table-column>
        </el-table>
        <br />
        <div class="leftSgin">
          <el-form-item>
            <span>审查人：</span>
            {{projectName}}
            <br />
            <span>核查人：</span>
            {{projectNumber}}
            <br />
            <span>日期：</span>
            {{projectNumber}}
            <br />
          </el-form-item>
        </div>
        <div style="clear:both"></div>
        <div style="width:100%">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </div>

        <br />
      </el-form>
    </el-dialog>
  </div>
</template>
<script src="./Exploration.js"></script>
<style lang="scss" scoped>
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
.leftSgin{
    float: right;
}
</style>



<script>
import { mapGetters } from "vuex";
export default {
  name: "investigate",
  data() {
    return {
      dialogView: false,
      projectname: "五金配件",
      projectnumber: "2017-510681-41-03-1655130-010",
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
      this.$router.push(`/construction/viewDetail?id=${item}&number=${data}`);
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
