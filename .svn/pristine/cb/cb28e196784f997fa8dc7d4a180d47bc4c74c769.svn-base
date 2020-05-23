<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">人员信息</span>
      <el-table
        v-loading="listLoading"
        :data="personnelList"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="index" width="108" label :index="indexMethod">
          <template slot-scope="scope">
            <div v-if="scope.row.ecode!=2">{{ scope.row.type}}</div>
            <el-button v-if="scope.row.ecode==2" type="text" @click="addNewPerson()">+</el-button>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" width="150px">
          <template slot="header">姓名</template>
          <template slot-scope="scope">
            <input class="workRecordInput" v-model="scope.row.name" />
          </template>
        </el-table-column>
        <el-table-column label="性别" :show-overflow-tooltip="true" width="50">
          <template slot-scope="scope">
            <input class="workRecordInput" v-model="scope.row.sex" />
            <!-- <span>{{ scope.row.sex }}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="电话" :show-overflow-tooltip="true" width="155">
          <template slot-scope="scope">
            <input
              class="workRecordInput"
              oninput="value=value.replace(/[^\d]/g,'')"
              v-model="scope.row.phone"
            />
            <!-- <span>{{ scope.row.phone }}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="身份证" width="200">
          <template slot-scope="scope">
            <input
              class="workRecordInput"
              oninput="value=value.replace(/[^\d]/g,'')"
              v-model="scope.row.idCard"
            />
            <!-- <span>{{ scope.row.idCard }}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="专业" :show-overflow-tooltip="true" width="100">
          <template slot-scope="scope">
            <input class="workRecordInput" v-model="scope.row.major" />
            <!-- <span>{{ scope.row.major }}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="执行注册证类型" :show-overflow-tooltip="true" width="155">
          <template slot-scope="scope">
            <input class="workRecordInput" v-model="scope.row.performRegisterType" />
            <!-- <span>{{ scope.row.performRegisterType }}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="执行注册证编号" :show-overflow-tooltip="true" width="180">
          <template slot-scope="scope">
            <input
              class="workRecordInput"
              oninput="value=value.replace(/[^\d]/g,'')"
              v-model="scope.row.performRegisterCode"
            />
            <!-- <span>{{ scope.row.performRegisterCode }}</span> -->
          </template>
        </el-table-column>
        <el-table-column label="操作" :show-overflow-tooltip="true" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="deleteConfirm(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span style="text-align:right;width:100%;display:block;margin-top:10px">
        <el-button type="primary" style="margin:0" size="small" @click="addPersonPost()">
          保存
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
        <el-button style="margin:0" size="small" @click="goBack()">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  addPersonInfo,
  deletePersonInfo,
  doAddList
} from "../../api/personInfo.js";
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
      newPersonList: [],
      personnelList: [
        {
          id: "15c26782a3ef4dc391893fcf090dd11b",
          createTime: 1587631067709,
          updateTime: 1587631067709,
          name: "詹天佑",
          sex: "男",
          phone: "15696354563",
          idCard: "123133",
          major: "地质专业",
          performRegisterType: "国家一级注册",
          performRegisterCode: "ICP23133",
          type: "项目负责人",
          ecode: "23133"
        },
        {
          type: "项目负责人",
          name: "王五",
          sex: "男",
          phone: "11111111111",
          idCard: "12321321412412312",
          major: "土木工程",
          performRegisterCode: "1232132141",
          performRegisterType: "土木工程",
          ecode: "1"
        }
      ],
      personListLength: null,
      listLoading: false,
      filterForm: {},
      wxScope: window.Scope,
      role: window.ROLE,
      dialogFormVisible: false,
      addTab: {
        type: "plusSign",
        name: "",
        sex: "",
        phone: "",
        idCard: "",
        major: "",
        performRegisterCode: "",
        performRegisterType: "",
        ecode: "2"
      },
      form: {
        option3: "1",
        option6: "1",
        option7: "1",
        option10: []
      },
      dialogApproveFormVisible: false,
      timer: null
    };
  },
  computed: {
    ...mapGetters(["name"]),
    ecode() {
      return this.$store.state.app.ecode;
    }
  },
  mounted() {
    this.fetchData();
    this.plusTab();
    this.NewDate();
  },
  methods: {
    NewDate: function() {
      Date.prototype.Format = function(fmt) {
        var o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "H+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          S: this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
        return fmt;
      };
      //调用：
      this.timer = new Date().Format("yyyy-MM-dd HH:mm:ss");
    },
    plusTab() {
      this.personnelList = this.$store.state.app.personnelList;
      if (
        this.personnelList[this.personnelList.length - 1].type !== "plusSign"
      ) {
        this.personnelList.push(this.addTab);
      } else {
        return;
      }
    },
    addPersonPost() {
      if (this.newPersonList.length == 1) {
        addPersonInfo(this.newPersonList[0])
          .then(result => {
            console.log(result);
            this.$message({
              message: "增加成功",
              type: "success"
            });
          })
          .catch(error => {
            console.log("error" + error);
          });
      } else if(this.newPersonList.length > 1){
        doAddList(this.newPersonList)
          .then(result => {
            console.log(result);
            this.$message({
              message: "增加成功",
              type: "success"
            });
          })
          .catch(error => {
            console.log("error" + error);
          });
      }else{
          this.$message({
              message: "你没有增加新的人员哦",
              type: "error"
            });
        return
      }
    },
    addNewPerson() {
      let arrLength = this.personnelList.length - 1;
      const newPerson = {
        type: "项目负责人",
        name: "王五",
        sex: "男",
        phone: "11111111111",
        idCard: "12321321412412312",
        major: "土木工程",
        performRegisterCode: "1232132141",
        performRegisterType: "土木工程",
        ecode: this.ecode,
        createTime: "2020-04-24 05:26:35.367",
        updateTime: "2020-04-24 05:26:35.367"
      };
      this.newPersonList.push(newPerson);
      this.personnelList.splice(arrLength, 0, newPerson);
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
    deleteUser(index) {
      this.list.splice(index, 1);
    },
    deleteConfirm(index) {
      this.$confirm("删除此工程 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        deletePersonInfo({ personnelId: "0" })
          .then(res => {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            // this.fetchData()
          })
          .catch(error => {
            console.log("error" + error);
          });
      });
    },
    goBack() {
      this.$router.replace({ path: "/exploration/Exploration" });
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
        border-bottom: 4px solid #2c3447;
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
