import {
    mapGetters
} from 'vuex'
import store from '../../store'

export default {
    name: 'Detail',
    data() {
        return {
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
                whetherConcavoConvex: 1,
                contractContent: null,
                contractPromise: null,
                ecode: "23133",
                pid: "3fd90101e9934a18b58d465b893caedb",
                ptype: "商品房土地建设",
                pname: "接口创建工程",
                paddress: "上海市浦东新区祖冲之路110号",
                ecid: null,
            },
        }
    },
    computed: {
        ...mapGetters([
            'name'
        ]),
        ecode() {
            return this.$store.state.app.ecode;
        },
    },
    mounted() {
        this.fetchData()
        this.eContractContent = this.$store.state.app.econtract
    },
    methods: {
        fetchData() {
            getWorkingDetail(this.ecode).then(result => {
                console.log(result);
                store.dispatch('app/toggleEcontract', result.data.econtract)
                store.dispatch('app/toggleReportList', result.data.fileReportList)
                store.dispatch('app/toggleOperationsList', result.data.siteOperationsList)
                store.dispatch('app/togglePersonnelList', result.data.personnelList)
            }).catch(error => {
                console.log("error" + error);
            })
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
        goBack() {
            if (this.$route.query.id == 2) {
                this.$router.push({ path: 'examineprocess' })
            }
            else if (this.$route.query.id == 1) {
                this.$router.push({ path: 'compeleteProcess' })
            }
            else if (this.$route.query.id == 3) {
                this.$router.push({ path: 'dispassProcess' })
            }
            else {
                this.$router.push({ path: 'examineuser' })
            }
        }
    }
}
