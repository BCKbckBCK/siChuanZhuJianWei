import {
    mapGetters
} from 'vuex'
import {
    getUserList, deleteUser
} from '../../api/user'
export default {
    name: 'UserList',
    data () {
        return {
            Decimal: window.Decimal,
            pageArr: [1],
            page: 1,
            maxPage: 1,
            displayLength: 10,
            total: 0,
            list: [],
            listLoading: false,
            filterForm: {},
            wxScope: window.Scope,
            role: window.ROLE
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
            const that = this
            that.listLoading = true
            getUserList({
                pageIndex: that.page,
                pageSize: that.displayLength,
                ...that.filterForm
            }).then(res => {
                that.list = res.data
                that.total = res.total
                that.maxPage = Math.ceil(that.total / that.displayLength)
                that.pageArr = window.fp.range(1)(that.maxPage + 1)
                that.listLoading = false
            })
        },
        indexMethod (index) {
            return (this.page - 1) * this.displayLength + index + 1;
        },
        handleSizeChange (val) {
            this.displayLength = val
            this.page = 1
            this.fetchData()
        },
        pageCurrentChange (val) {
            this.page = val
            this.fetchData()
        },
        prevPage () {
            this.page -= 1
            this.fetchData()
        },
        nextPage () {
            this.page += 1
            this.fetchData()
        },
        clean () {
            this.filterForm = {}
            this.fetchData()
        },
        add () {
            this.$router.push({ path: 'userEdit' })
        },
        edit (item) {
            this.$router.push({ path: 'userEdit', query: { id: item.dnUserId }})
        },
        deleteConfirm (item) {
            this.$confirm('删除此用户 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                deleteUser(item.dnUserId).then(res => {
                    this.$message({
                      message: '删除成功',
                      type: 'success'
                    });
                    this.fetchData()
                })
              });
        }
    }
}
