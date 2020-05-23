import { mapGetters } from "vuex";
import store from "../../store";
import { doEditContract } from "../../api/explorationPart";
import { contractDetail } from "@/api/construct";
export default {
  name: "Detail",
  data() {
    return {
      options: [
        {
          value: "1",
          label: "是"
        },
        {
          value: "0",
          label: "否"
        }
      ],
      contractContent: "xxxxxxxxx",
      contractPromise: "xxxxxxxxxxxx",
      whetherConcavoConvex: 0,
      eContractContent: {
        id: "ba4fe1dff0ae4ce084e2fdc0c493a60b",
        createTime: 1587631067707,
        updateTime: 1587631067707,
        examineType: "房屋建筑工程",
        projectLocation: "上海市浦东新区",
        lepCode: "L00001",
        lupCode: "LU00001",
        constructionUnit: "111110",
        constructionType: "消防",
        constructionUseType: "消防",
        contractAmount: null,
        whetherConcavoConvex: "",
        contractContent: null,
        contractPromise: null,
        ecode: "23133",
        pid: "3fd90101e9934a18b58d465b893caedb",
        ptype: "商品房土地建设",
        pname: "接口创建工程",
        paddress: "上海市浦东新区祖冲之路110号",
        ecid: null
      },
      projectCode: this.$route.query.projectCode
    };
  },
  computed: {
    ...mapGetters(["name"]),
    ecode() {
      if (this.$store.state.app.ecode) {
        return this.$store.state.app.ecode;
      } else {
        return sessionStorage.getItem("userEcode");
      }
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    trueOrFalseSelect(val) {
      if (val == 1) {
        return "是";
      } else if (val == 0) {
        return "否";
      }
      return;
    },
    fetchData() {
      let data = {};
      data.projectCode = this.projectCode;
      contractDetail(data).then(res => {
        //console.log(res);

        this.eContractContent = res.data;
      });
    },
    goBack() {
      this.$router.push({ path: "process" });
    },
    saveWorkingDetailContarct() {
      let data = {};
      data.contractContent = this.eContractContent.contractContent;
      data.contractPromise = this.eContractContent.contractPromise;
      data.ecode = this.eContractContent.ecode;
      data.whetherConcavoConvex = this.eContractContent.whetherConcavoConvex;
      doEditContract(data)
        .then(result => {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          console.log(result);
        })
        .catch(error => {
          console.log("Error" + error);
        });
    }
  }
};
