<template>
  <div class="process-container">
    <div class="detail">
      <span class="title">工程勘察报告</span>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column :show-overflow-tooltip="true" prop="name"></el-table-column>
      <el-table-column type="index" width="100px" label="版次" prop="banci" :index="indexMethod" />
      <el-table-column :show-overflow-tooltip="true" width="200" label="时间" la prop="time"></el-table-column>
      <el-table-column label="审查意见" :show-overflow-tooltip="true" width="100" prop="sc"></el-table-column>
      <el-table-column label="审核意见" :show-overflow-tooltip="true" width="100" prop="sh"></el-table-column>
      <el-table-column label="状态" :show-overflow-tooltip="true" width="100" prop="zt"></el-table-column>
      <el-table-column label="审查结果" :show-overflow-tooltip="true" width="100" prop="jg"></el-table-column>

      <el-table-column label="操作" width="200" prop="cz" @click="goto()"></el-table-column>
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Process",
  data() {
    return {
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,

      indexRouter: null,
      displayLength: 10,
      total: 0,

      list: [
        {
          name: "项目001勘察报告",
          banci: "002",
          time: "",
          sc: "无",
          sh: "-",
          zt: "已回复",
          jg: "未通过",
          cz: "查看"
        },
        {
          name: "项目001勘察报告",
          banci: "002",
          time: "",
          sc: "无",
          sh: "-",
          zt: "已回复",
          jg: "未通过",
          cz: "查看"
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
    goto() {
      this.$router.push();
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
      this.$router.push({ path: "userEdit", query: { id: item.dnUserId } });
    },
    view(item) {
      this.$router.push({
        path: "detailProcess",
        query: { id: item.dnUserId }
      });
    },
    checkDetail(item) {
      this.$router.push({ path: "checkDetail", query: { id: item.td0 } });
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
@import "../../styles/common1.scss";
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
}
.input121212 {
  padding: 4px;
  width: 16em;
  height: 30px;
}
.a {
  color: deepskyblue;
  margin-left: 10px;
}
.a:hover {
  color: blue;
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
.el-table .el-table-column:last-child {
  cursor: pointer;
  color: lightblue;
}
</style>