import {
    mapGetters
} from 'vuex'
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
            value: 'true',
            contractText: '',
            promiseText: '',
            website: ''
        }
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    mounted() {
        this.fetchData()
        this.website = this.$store.state.app.website;
    },
    methods: {
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
        goBack() {
            this.$router.replace({ path: "/dispatch/workingProj" });
            // if (sessionStorage.getItem('sysUserId') === 'admin0') {
            //     if (Number(sessionStorage.getItem('bianji')) === 1) {
            //         this.$router.replace({ path: '/construction/refuse' });
            //         sessionStorage.removeItem('bianji')
            //     } else {
            //         this.$router.replace({ path: '/construction/process' });
            //     }
            // } else if (sessionStorage.getItem('sysUserId') === 'admin1') {
            //     return this.$router.replace({ path: '/construction/Exploration' })
            // }
        }
    }
}
