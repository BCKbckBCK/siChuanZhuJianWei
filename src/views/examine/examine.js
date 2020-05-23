import {
    mapGetters
} from 'vuex'
import { test } from "../../api/test";

export default {
    name: 'Process',
    data() {
        return {
            Decimal: window.Decimal,
            pageArr: [1],
            page: 1,
            maxPage: 1,
            displayLength: 10,
            compeleted: true,
            total: 0,
            list: [{
                td0: 1,
                td00: 6,
                td1: '五金配件技术改造项目-1期',
                td2: '2017-510681-41-03-1655130-010 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1,
                ecode: '123',
            }, {
                td00: 7,
                td0: 2,
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1,
                ecode: '123',
            }, {
                td00: 8,
                td0: 3,
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1,
                ecode: '123',
            }, {
                td00: 9,
                td0: 4,
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1,
                ecode: '123',
            }, {
                td00: 10,
                td0: 5,
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1,
                ecode: '123',
            },
            {
                td00: 10,
                td0: 5,
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 4,
                ecode: '123',
            }
            ],
            listLoading: false,
            filterForm: {},
            wxScope: window.Scope,
            role: window.ROLE,
            dialogFormVisible: false,

            dialogtip: false,
            form: {
                option3: '1',
                option6: '1',
                option7: '1',
                option10: []
            },
            dialogApproveFormVisible: false,
            dialogApproveFormVisible1: false,
            approveList: [{
                td1: 1,
                td2: '787901178',
                td3: '成都圣图建设工程咨询有限公司',
                td4: '顾女士  18000000000',
                td5: 0,
                td6: 1
            }],
            formInline: {
                code: ''
            },
            dialogcancel: false,
            row: {},
            dialogupload: false,
            rowupload: {}
        }
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    mounted() {
        this.fetchData()
        if (this.$route.query.id) {
            const _tmp = this.list.find(x => x.td0.toString() === this.$route.query.id.toString())
            const _tmp1 =this.$route.query.id.toString()
            if (_tmp) {
                _tmp.td6 = 2
            }
            if (_tmp1) {
                _tmp1.td6 = 3
            }
        }
    },
    methods: {
        qualification(){
            this.$router.push({path:'qualified'})
        },
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
        indexMethod(index) {
            return (this.page - 1) * this.displayLength + index + 1;
        },
        handleSizeChange(val) {
            this.displayLength = val
            this.page = 1
            this.fetchData()
        },
        pageCurrentChange(val) {
            this.page = val
            this.fetchData()
        },
        prevPage() {
            this.page -= 1
            this.fetchData()
        },
        nextPage() {
            this.page += 1
            this.fetchData()
        },
        clean() {
            this.filterForm = {}
            this.fetchData()
        },
        add() {
            this.$router.push({ path: 'userEdit' })
        },
        edit(item) {
            this.$router.push({ path: 'userEdit', query: { id: item.dnUserId } })
        },
        view(item) {
            this.$router.push({ path: 'detailProcess', query: { id: 2 } })
        },
        view1(item) {
            this.$router.push({ path: 'detailProcess111', query: { id: item.dnUserId } })
        },
        look(item) {
            this.$router.push({ path: 'detail', query: { id: item.dnUserId } })
        },
        upload(item) {
            this.rowupload = item
            this.dialogupload = true
        },
        revoke(item) {
            this.dialogFormVisible = true;

            this.row = item
            console.log(this.row)
            this.row.td6 = 2
        },
        newAuditPlan() {
            this.$router.push({ path: 'auditPlan' })
        },
        deleteConfirm(item) {
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
        },
        confirm() {
            this.dialogApproveFormVisible = false
            this.dialogtip = true
        },
        cancel() {
            this.dialogApproveFormVisible = true
            this.dialogtip = false
        },
        comfirmrevoke() {
            this.row.td6 = 2
            this.dialogcancel = false
        },
        comfirmupload() {
            this.rowupload.td6 = 2
            this.dialogupload = false
        },
        oprate(item) {
            this.$router.push({ path: 'handleProcess', query: { id: item.td0 } })
        },
        appoint(item) {
            this.$router.push({ path: 'taskAppoint', query: { ecode: item.ecode } })
        }
    }
}
