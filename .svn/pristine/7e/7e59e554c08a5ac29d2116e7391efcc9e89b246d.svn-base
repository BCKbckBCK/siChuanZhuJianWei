<template>
  <div class="processDetail-container">
    <section style="margin-left:20px;margin-top:20px;">
      <input type="text" />
      <button class="gradientButton" type="submit">查询</button>
    </section>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <!-- 序号 -->
      <el-table-column type="index" prop="num" width="80" label="序号"/>
      <!-- 项目名称基本情况 -->
      <el-table-column prop="qk"  label="">
          <template slot="header">
          项目名称
          <br />基本情况
        </template>
        <template>
          <div style="text-align:left;font-weight:600;line-height:50px">狮驼镇工程项目</div>
          <div style="text-align:left;">20204.15.6516.515151313</div>
        </template>
          </el-table-column>
      <!-- 上报日期受理日期 -->
      <el-table-column prop="time"  width="150" label="时间">
          <template slot="header">
          上报日期
          <br/>受理日期
        </template>
        <template>
          <div style="font-size:16px;line-height:50px">2020.4.15</div>
          <div style="font-size:16px">2020.4.18</div>
        </template>
          </el-table-column>
      <!-- 进度状态 -->
      <el-table-column prop="suggest" label="进度状态"  width="150"></el-table-column>
      <!-- 操作 -->
      <el-table-column prop="operate"  width="150" label="操作">
          <template>
          <el-button type="text" @click="goagaincheck()">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
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
          num: "97",
          qk: "狮驼镇绿化",
          time: "2020.4.5",
          suggest: "待回复",
          check: "-",
          status: "待终审",
          result: "-",
          operate:"查看"
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
      goagaincheck(){
          this.$router.push("/againcheck/againcheck")
      },

    // savePdfImg(item) {
    //   this.dialogView = false;
    //   this.list[1].td6 = !this.list[1].td6;
    // },
    goBack() {
      this.$router.replace({ path: "/exploration/Exploration" });
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common2.scss";
// @import "../../styles/common4.scss";
.el-table_9_column_43 .cell div {
    text-align: center;
}
.gradientButton {
    width: 170px!important;
    height: 40px!important;
    color: #ffffff;
    font-size: 16px!important;
    margin-left: 20px!important;
    background-color: #3784C2!important;
    border: 0;
}
input {
    width: 370px!important;
    height: 40px!important;
}
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
.el-table td th {
  padding: 10px !important;
  box-sizing: border-box;
}
.el-table div{
  height: 35px !important;
  padding-left: 10px;
  text-align: bottom;
  color: #45484B;
}
.el-table .el-table_1_column_2 div:first-child{
  line-height: 52px!important;
  font-size: 16px!important;
  color: #555;
}
.el-table div:nth-last-child(1){
  line-height: 22px;
  font-size: 12.8px;
  color: #555;
}
</style>
