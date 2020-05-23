<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">人员信息</span>
      <el-table
        v-loading="listLoading"
        :data="list"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="index" width="108" label :index="indexMethod">
          <template slot-scope="scope">
            <div v-if="!scope.row.rd6==1">{{ scope.row.td0 }}</div>
            <el-button v-if="scope.row.td6===2" type="text" @click="addNewPerson()">+</el-button>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" width="150px">
          <template slot="header">姓名</template>
          <template slot-scope="scope">
            <div style="text-align:left;font-weight:100;padding:0 10px">
              {{ scope.row.td1 }}
              <br />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="性别" :show-overflow-tooltip="true" width="50">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="电话" :show-overflow-tooltip="true" width="155">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="身份证" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="专业" :show-overflow-tooltip="true" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="执行注册证类型" :show-overflow-tooltip="true" width="155">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="执行注册证编号" :show-overflow-tooltip="true" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" :show-overflow-tooltip="true" width="100">
          <template slot-scope="scope">
            <el-button v-if="scope.row.td6===1" type="text" @click="view(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span style="text-align:right;width:100%;display:block;margin-top:10px">
        <el-button size="small" style="margin-bottom:10px" @click="goBack">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import {
//     getUserList, deleteUser
// } from '../../api/user'
export default {
  name: "Personal",
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
          td0: "项目负责人",
          td1: "",
          td2: "",
          td3: "",
          td4: "",
          td5: "",
          td6: 1
        },
        {
          td0: "主要参与人员",
          td1: "",
          td2: "",
          td3: "",
          td4: "",
          td5: "",
          td6: 1
        },
        {
          td0: "",
          td1: "",
          td2: "",
          td3: "",
          td4: "",
          td5: "",
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
    addNewPerson() {
      const newPerson = {
        td0: "主要参与人员",
        td1: "",
        td2: "",
        td3: "",
        td4: "",
        td5: "",
        td6: 1
      };
      this.list.splice(2, 0, newPerson);
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
    },
    goBack() {
      
            this.$router.push({ path: 'secondCheckProcess' })
           
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common2.scss";

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
