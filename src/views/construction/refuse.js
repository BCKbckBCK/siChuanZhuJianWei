import { mapGetters } from "vuex";
import { getList } from "@/api/engineeringController";
import { getSysUser } from "@/utils/laborRouter";
export default {
    name: "Refuse",
    data() {
        return {
            pageNum: 10,
            pageArr: [1],
            page: 1,
            maxPage: 1,
            displayLength: 10,
            total: 0,
            list: [
                // {
                //     td1: "五金配件技术改造项目",
                //     td2: "2017-510681-41-03-1655130-006 中型",
                //     td3: "0",
                //     td4: "2020-04-15",
                //     td5: "2020-04-15",
                //     td6: 1
                // },
                // {
                //     td1: "五金配件技术改造项目",
                //     td2: "2017-510681-41-03-1655130-006 中型",
                //     td3: "0",
                //     td4: "2020-04-15",
                //     td5: "2020-04-15",
                //     td6: 2
                // }
            ],
            listLoading: false,
            filterForm: {},
            dialogView: false,
            dialogApproveFormVisible: false,
            text: "",
            approveList: [{
                td1: 1,
                td2: "787901178",
                td3: "成都圣图建设工程咨询有限公司",
                td4: "顾女士  18000000000",
                td5: 0
            }],
            dialogtip: false,
            formInline: {
                code: "",
            }
        };
    },
    computed: {
        ...mapGetters(["name"])
    },
    mounted() {
        this.getProjList();
    },
    methods: {
        getProjList() {
            let data = {};
            data.companyCode = getSysUser("companyCode");
            data.listType = "003";
            data.pageNum = this.pageNum;
            data.pageSize = this.maxPage;
            data.userId = getSysUser("userId");
            data.userType = getSysUser("userType");
            getList(data)
                .then(result => {
                    console.log(result)
                    this.list = result.data.list;
                })
                .catch(error => {
                    console.log("error" + error);
                });
        },
        certain() {
            this.$router.push({ path: "process" });
        },
        goBack() {
            this.$router.push({ path: "process" });
        },
        view(item) {
            this.dialogView = true;
        },
        again(item) {
            console.log(item);
            if (item.td6 === 2) {
                this.$router.push({ path: "/construction/codecheck" });
            }
            if (item.td6 === 1) {
                this.$router.push({ path: "/construction/lookimg" });
            }
        },
        handleedit(item) {
            this.$router.push({ path: "/construction/auditPlan" });
        },
        search() {
            if (this.text) {
                console.log(e)
                return this.list.filter(
                    item =>
                    item.td1.indexOf(this.text) > -1 || item.td2.indexOf(this.ipt) > -1
                );
            } else {
                return this.list;
            }
        },
        indexMethod(index) {
            return (this.page - 1) * this.displayLength + index + 1;
        },
        fetchData() {},
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
        }
    }
};