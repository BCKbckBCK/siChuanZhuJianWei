import { mapGetters } from "vuex";
import { acceptance } from "../../api/processController";
import { list } from "@/api/explorationPart";
import store from "../../store";
import { getSysUser } from "../../utils/laborRouter";

// import {
//     getUserList, deleteUser
// } from '../../api/user'
export default {
    name: "Process",
    filters: {
        dateFilter(val) {
            let DateNow = new Date(val);
            let year = DateNow.getFullYear();
            let month = DateNow.getMonth() + 1;
            let day = DateNow.getDate();
            let hour = DateNow.getHours();
            return (val = year + "年" + month + "月" + day + "日" + hour + "时");
        }
    },
    data() {
        return {
            laborView: false,
            Decimal: window.Decimal,
            pageArr: [1],
            pageNum: 1,
            maxPage: 10,
            displayLength: 10,
            list: [],
            frontList: [],
            laborUnitList: [{
                    td1: "12312423423666235123",
                    td2: "13344444444",
                    td3: "0",
                    td4: "A劳务机构",
                    td5: "2020-04-15",
                    td6: 1,
                    ecode: "2"
                },
                {
                    td1: "12312423423666235123",
                    td2: "13344444444",
                    td3: "0",
                    td4: "B劳务机构",
                    td5: "2020-04-15",
                    td6: 2,
                    ecode: "2"
                },
                {
                    td1: "12312423423666235123",
                    td2: "13344444444",
                    td3: "0",
                    td4: "C劳务机构",
                    td5: "2020-04-15",
                    td6: 3,
                    ecode: "2"
                }
            ],
            listLoading: false,
            filterForm: {},
            text: "",
            wxScope: window.Scope,
            role: window.ROLE,
            dialogFormVisible: false,
            form: {
                option3: "1",
                option6: "1",
                option7: "1",
                option10: []
            },
            total: null,
            dialogApproveFormVisible: false,
            approveList: [{
                td1: 1,
                td2: "787901178",
                td3: "成都圣图建设工程咨询有限公司",
                td4: "顾女士  18000000000",
                td5: 0
            }]
        };
    },
    computed: {
        ...mapGetters(["name"])
    },
    watch: {
        pageNum(val) {
            this.getProjList();
        },
        maxPage(val) {
            this.getProjList();
        },

    },
    mounted() {
        this.getProjList();

    },
    methods: {
        getProjList() {
            this.listLoading = true;
            let data = {};
            data.companyCode = getSysUser("companyCode");
            data.listType = "001";
            data.pageNum = this.pageNum;
            data.pageSize = this.displayLength;
            data.userId = getSysUser("userId");
            data.userType = getSysUser("userType");

            list(data)
                .then(result => {

                    this.list = result.data.list;
                    // console.log(this.list[0].ecode, this.list[1].ecode)
                    this.total = result.data.total;
                    this.listLoading = false;
                    this.search();
                    console.log(this.list)
                })
                .catch(error => {
                    console.log("error" + error);
                });
        },
        dispatch() {
            this.laborView = !this.laborView;
        },
        search(e) {
            if (this.text) {
                let rs = this.list.filter(
                    item =>
                    item.ename.indexOf(this.text) > -1
                );
                console.log('rs', rs);
                this.frontList = rs;
            } else {
                this.frontList = this.list;
            }
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
            console.log(item)
            store.dispatch("app/toggleEcode", this.list[item].ecode);
            this.$router.push({
                path: "ExplorationDetail",
                query: {
                    id: item.dnUserId,
                    projectCode: this.list[item].ecode
                }
            });
        },
        oprate(item) {
            this.$confirm("确认是否受理?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                acceptance(item.ecode)
                    .then(result => {
                        console.log(result);
                        item.td6 = 1;
                    })
                    .catch(error => {
                        console.log("error" + error);
                    });
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