import { mapGetters } from "vuex";
import { getList } from "@/api/engineeringController";
import { getSysUser } from "../../utils/laborRouter";

export default {
    name: "Examined",
    data() {
        return {
            companyCode: getSysUser("companyCode"),
            userType: getSysUser("userType"),
            userId: getSysUser("userId"),
            searchContent: null,
            pageArr: [1],
            page: 1,
            maxPage: 1,
            displayLength: 10,
            total: 0,
            list: [{
                td1: "五金配件技术改造项目",
                td2: "2017-510681-41-03-1655130-006 中型",
                td3: "0",
                td4: "2020-04-15",
                td5: "2020-04-15",
                td6: 2
            }],
            listLoading: false,
            text: ""
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
            data.companyCode = this.companyCode;
            data.listType = "002";
            data.pageNum = this.pageNum;
            data.pageSize = this.maxPage;
            data.search = this.searchContent;
            data.userId = this.userId;
            data.userType = this.userType;
            getList(data)
                .then(result => {
                    console.log(result)
                    this.list = result.data.list;
                })
                .catch(error => {
                    console.log("error" + error);
                });
        },
        goBack() {
            this.$router.push({ path: "process" });
        },
        view(item) {
            this.$router.push({ path: "certificate", query: { id: item.dnUserId } });
        },
        search() {
            if (this.text) {
                // console.log()
                return this.list.filter(
                    item =>
                    item.ename.indexOf(this.text) > -1 || item.ecode.indexOf(this.text) > -1
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