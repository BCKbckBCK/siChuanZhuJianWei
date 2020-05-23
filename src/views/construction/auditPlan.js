import store from "../../store";
import { mapGetters } from "vuex";
import {
  codeVerify,
  doAdd,
  getExplorationLabor,
  chooseCompany,
  checkContract
} from "../../api/engineeringController";
import { chooseDrawingOrgan } from "../../api/drawingController";
import { getSysUser } from "../../utils/laborRouter";

export default {
  name: "AuditPlan",
  data() {
    return {
      contractCheck: false,
      projectCode: "",
      proName: "",
      proAmount: "",
      userType: getSysUser("userType"),
      userId: getSysUser("userId"),
      projectSelection: null,
      multipleSelection: null,
      formInline: {
        code: getSysUser("companyCode")
      },
      contractInfo: {
        range: "",
        request: "",
        yesNo: ""
      },
      ISshow: false,
      list: [],
      nowTime: null,
      listLoading: false,
      dialogApproveFormVisible: false,
      pageNo: "1",
      approveList: []
    };
  },
  computed: {
    ...mapGetters(["name"])
  },
  mounted() {
    this.getNowTime();
  },
  filters: {
    getProjectStateName(state) {
      let stateName = "";
      state = parseInt(state);
      switch (state) {
        case -1:
          stateName = "未办理";
          break;
        case 0:
          stateName = "待接受委托";
          break;
        case 1:
          stateName = "已接受委托";
          break;
        case 2:
          stateName = "未受理委派";
          break;
        case 3:
          stateName = "已受理委派";
          break;
        case 4:
          stateName = "报告上传";
          break;
        case 5:
          stateName = "未受理";
          break;
        case 6:
          stateName = "已受理";
          break;
        case 7:
          stateName = "待审查";
          break;
        case 8:
          stateName = "待复核";
          break;
        case 9:
          stateName = "待终审";
          break;
        case 10:
          stateName = "待回复";
          break;
        case 11:
          stateName = "审查通过";
          break;
        case 12:
          stateName = "完成审图";
          break;
        case 13:
          stateName = "退回补正";
          break;
        case 14:
          stateName = "不予受理";
          break;
        case 15:
          stateName = "拒绝委托";
          break;
        case 16:
          stateName = "已回复";
          break;
        case 17:
          stateName = "拒绝委派";
          break;
      }
      return stateName;
    }
  },
  methods: {
    dialogApprove() {
      checkContract(this.projectCode).then(res => {
        if (res.code == "OK") {
          this.approveList.length = 0;
          this.approveList.push(res.data);

          this.contractCheck = true;
          this.dialogApproveFormVisible = true;
          this.toggleSelection([this.approveList[0]]);
        } else {
          let data = {};
          data.pageNo = this.pageNo;
          getExplorationLabor(data)
            .then(result => {
              this.approveList = result.data.list;
              this.dialogApproveFormVisible = true;
              this.toggleSelection([this.approveList[0]]);
            })
            .catch(error => {
              console.log("error" + error);
            });
        }
      });
    },
    toggleSelection(rows) {
      this.$nextTick(() => {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multab.toggleRowSelection(row);
          });
        } else {
          this.$refs.multab.clearSelection();
        }
      });
    },
    getNowTime() {
      let timestamp = new Date().getTime();
      this.nowTime = timestamp;
    },
    onSubmit() {
      codeVerify(this.formInline.code)
        .then(result => {
          this.list = result.data;
          this.ISshow = true;
          if (!!result.data == true) {
            this.proName = this.list[0].ename;
            this.proAmount = this.list[0].ename;
          }
        })
        .catch(error => {
          console.log("erroe" + error);
        });
    },
    goBack() {
      this.$router.push({ path: "process" });
    },
    confirm() {
      let data = {};
      data.companyCode = this.multipleSelection[0].deptCode;
      data.projectCode = this.projectCode;
      data.contractAmount = this.multipleSelection[0].contractAmount;
      data.userId = this.userId;
      data.userType = this.userType;

      chooseCompany(data)
        .then(result => {
          this.$message({
            message: "选择成功",
            type: "success"
          });
          this.$router.push({ path: "/construction/process" });
        })
        .catch(error => {
          console.log("error" + error);
        });

      let from = {};
      from.basicSituation = "this.list[0].basicSituation";
      from.acceptDate = this.nowTime;
      from.updataTime = this.list[0].updataTime;
      from.reportDate = this.nowTime;
      from.createTime = this.list[0].createTime;
      from.id = "this.list[0].id";
      from.areaId = this.list[0].areaId;
      from.constructionUnit = this.list[0].constructionUnit;
      from.laborUnit = this.approveList[0].td3;
      from.surveyUnit = this.approveList[0].td3;
      from.drawingUnit = this.approveList[0].td3;
      from.amount = this.approveList[0].amount;
      from.ecode = this.list[0].ecode + 1;
      from.ename = this.list[0].ename;
      from.estate = this.list[0].estate;
      from.escale = this.list[0].escale;

      // doAdd(from).then(result => {
      //   console.log("success" + result);
      //   this.$router.push({ path: "process" });
      // });
    },
    handleCurrentChange(val) {
      console.log("handleCurrentChange", val);
      this.projectCode = val.projectCode;
    },
    handleSelectionChange(val) {
      console.log("handleSelectionChange", val);
      this.multipleSelection = val;
    }
  }
};
