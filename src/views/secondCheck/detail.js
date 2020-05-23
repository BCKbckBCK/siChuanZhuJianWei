import {
    mapGetters
} from 'vuex'
export default {
    name: 'Detail',
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    mounted () {
        this.fetchData()
    },
    methods: {
        fetchData () {
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
        goBack () {
           
            this.$router.push({ path: 'secondCheckProcess' })
          
        }
    }
}
