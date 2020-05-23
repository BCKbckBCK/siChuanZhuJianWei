import { mapGetters } from "vuex";
import store from "../../store";
import basicInfo from "./basicProjectInfo.vue";
import { chooseDrawingOrgan } from "../../api/drawingController";
import { doSearch, getList } from "../../api/engineeringController";
import { revokeCheck, submitReview } from "../../api/processController";
import { getSysUser } from "../../utils/laborRouter";
import { contractDetail } from "@/api/construct";
export default {
  name: "Process",
  data() {
    return {
      text: null,
      companyCode: getSysUser("companyCode"),
      userId: getSysUser("userId"),
      userType: getSysUser("userType"),
      targetEcode: null,
      basicProInfo: false,
      Decimal: window.Decimal,
      pageArr: [1],
      pageNum: 1,
      maxPage: 10,
      displayLength: 10,
      total: 0,
      searchContent: "",
      list: [],
      multipleSelection: [],
      listLoading: false,
      filterForm: {},
      wxScope: window.Scope,
      role: window.ROLE,
      dialogFormVisible: false,
      dialogtip: false,
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
          code: "787901178",
          td3: "成都圣图建设工程咨询有限公司",
          td4: "顾女士  18000000000",
          amount: 0
        }
      ],
      formInline: {
        code: ""
      },
      total: null,
      dialogcancel: false,
      row: {},
      dialogupload: false,
      rowupload: {},
      timer: null
    };
  },
  computed: {
    ...mapGetters(["name"]),
    searchResult() {
      if (this.text) {
        return this.list.filter(
          item =>
            item.td1.indexOf(this.text) > -1 || item.td2.indexOf(this.ipt) > -1
        );
      } else {
        return this.list;
      }
    }
  },
  mounted() {
    this.init();
  },
  components: {
    basicInfo
  },
  watch: {
    text(val) {
      if (typeof val === "string") {
        if (val.trim().length !== 0) {
          console.info("before this.debounce");

          this.debounce(this.searchProj, 1000);
        }
      }
    },
    pageNum(val) {
      this.getProjList();
    },
    maxPage(val) {
      this.getProjList();
    }
  },
  methods: {
    init() {
      this.getProjList();
      this.fetchData();
    },
    handleSizeChange(val) {
      console.log("!!!s" + val);
    },
    handleCurrentChange() {
      console.log("!!!s" + val);
    },
    getProjList() {
      let data = {};

      data.companyCode = this.companyCode;
      data.listType = "001";
      data.pageNum = this.pageNum;
      data.pageSize = this.maxPage;
      data.search = this.searchContent;
      data.userId = this.userId;
      data.userType = this.userType;
      this.listLoading = true;
      getList(data)
        .then(result => {
          console.log(result);
          if (result.data == null) {
            this.listLoading = false;
            return;
          }
          this.list = result.data.list;
          let _this = this;
          for (let i = 0; i < this.list.length; i++) {
            _this.list[i].updateTime = this.dateFilter(
              _this.list[i].updateTime
            );
            _this.list[i].createTime = this.dateFilter(
              _this.list[i].createTime
            );
            console.log(_this.list[i].createTime, _this.list[i].updateTime);
          }
          this.total = result.data.total;
          this.listLoading = false;
        })
        .catch(error => {
          console.log("error" + error);
        });
    },
    dateFilter(val) {
      let DateNow = new Date(val);
      let year = DateNow.getFullYear();
      let month = DateNow.getMonth() + 1;
      let day = DateNow.getDate();
      let hour = DateNow.getHours();
      return (val = year + "年" + month + "月" + day + "日" + hour + "时");
    },
    debounce(fn, wait) {
      if (this.text !== null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(fn, wait);
    },
    searchProj() {
      console.log("searchProj");

      let data = {};
      data.pageNum = this.pageNum;
      data.pageSize = this.maxPage;
      data.search = this.text;
      doSearch(data)
        .then(result => {
          this.list = result.data.list;

          console.log("doSearch", result);

          let _this = this;
          for (let i = 0; i < this.list.length; i++) {
            _this.list[i].updateTime = this.dateFilter(
              _this.list[i].updateTime
            );
            _this.list[i].createTime = this.dateFilter(
              _this.list[i].createTime
            );
          }
        })
        .catch(error => {
          console.log("error" + error);
        });
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    getProEcode(index) {
      this.targetEcode = this.list[index].ecode;
      this.dialogApproveFormVisible = !this.dialogApproveFormVisible;
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
    view(index) {
      store.dispatch("app/toggleEcode", this.list[index].ecode);
      sessionStorage.setItem("userEcode", this.list[index].ecode);
      this.$router.push({
        path: "detail",
        query: {
          projectCode: this.list[index].ecode
        }
      });
    },
    look(item) {
      // console.log(item);
      this.$router.push({ path: "detail" });
    },
    upload(item) {
      this.rowupload = item;
      this.dialogupload = true;
    },
    revoke(item) {
      this.row = item;
      console.log(this.row);
      this.dialogcancel = true;
    },
    newAuditPlan() {
      this.$router.push({ path: "auditPlan" });
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
    submitDrawingCon() {
      let data = {};
      data.ecode = this.targetEcode;
      data.amount = this.multipleSelection[0].amount;
      data.code = "111";
      chooseDrawingOrgan(data)
        .then(result => {
          this.dialogtip = !this.dialogtip;
          console.log(result);
        })
        .catch(error => {
          console.log("error" + error);
        });
    },
    confirm() {
      this.dialogApproveFormVisible = false;
      this.basicProInfo = true;
    },
    cancel() {
      this.dialogApproveFormVisible = true;
      this.basicProInfo = false;
      this.dialogtip = false;
    },
    dialogTipView() {
      this.dialogtip = true;
      this.basicProInfo = false;
    },
    comfirmrevoke(item) {
      this.$confirm("确认是否撤销?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        revokeCheck(item.ecode)
          .then(result => {
            console.log(result);
            item.td6 = 2;
          })
          .catch(error => {
            console.log("error" + error);
          });
      });
    },
    comfirmupload() {
      this.rowupload.td6 = 2;
      this.dialogupload = false;
    }
  }
};
