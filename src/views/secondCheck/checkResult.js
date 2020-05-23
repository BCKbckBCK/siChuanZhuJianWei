import {
    mapGetters
} from 'vuex'

import {
    getUserList, deleteUser
} from '../../api/user'
export default {
    name: 'Process',
    data () {
        return {
            Decimal: window.Decimal,
            pageArr: [1],
            page: 1,
            maxPage: 1,
            
           indexRouter:this.$route.query.id.toString(),
           
            displayLength: 10,
            total: 0,
           
            list: [{
                td0:1,
                td1: '五金配件技术改造项目-1期',
                td2: '2017-510681-41-03-1655130-010 中型',
                td3: '0',
                td4: '2020-4-5',
                td5: '2020-4-5',
                td6: 1
            }],
            listLoading: false,
            filterForm: {},
            wxScope: window.Scope,
            role: window.ROLE,
            dialogFormVisible: false,
            form: {
                option3: '1',
                option6: '1',
                option7: '1',
                option10: []
            },
            dialogApproveFormVisible: false,
            approveList: [{
                td1: 1,
                td2: '787901178',
                td3: '成都圣图建设工程咨询有限公司',
                td4: '顾女士  18000000000',
                td5: 0
            }]
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
        goBack(){
            if(this.$route.query.id==1){
                this.$router.push({ path: 'secondCheckProcess' })}
                if(this.$route.query.id==2){
                    this.$router.push({ path: 'secondCompeleteProcess' })}
                   
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
        view (item) {
            this.$router.push({ path: 'detailProcess', query: { id: item.dnUserId }})
        },
        checkDetail(item){
           
            this.$router.push({ path: 'checkDetail',query: { id: item.td0}})
        },
       
       
      
        deleteConfirm (item) {
            this.$confirm('删除此工程 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
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
}
