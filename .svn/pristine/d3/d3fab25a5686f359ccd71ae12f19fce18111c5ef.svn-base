import {
    mapGetters
} from 'vuex'
// import Handle from './handle'
import {
    getUserList, deleteUser
} from '../../api/user'
export default {
    name: 'Process',
    data() {
        return {
            Decimal: window.Decimal,
            pageArr: [1],
            page: 1,
            maxPage: 1,

            displayLength: 10,
            total: 0,
            dialogView: false,
            list: [{
                td1: '五金配件技术改造项目-1期',
                td2: '2017-510681-41-03-1655130-010 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1,
                list: [
                    {
                        td0: "测试放孔",
                        td1: "数量",
                        td2: null,
                        td3: "孔",
                        td4: 1,
                        td5: 2,
                        td6: 1
                    },
                    {
                        td0: "测试放孔",
                        td1: "钻孔测量",
                        td2: null,
                        td3: "张",
                        td4: 1,
                        td5: 2,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻孔数量",
                        td2: null,
                        td3: "个",
                        td4: 2,
                        td5: 1,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻孔进尺",
                        td2: null,
                        td3: "米",
                        td4: 3,
                        td5: 2,
                        td6: 2
                    },

                    {
                        td0: "机械钻探",
                        td1: "岩心照片",
                        td2: null,
                        td3: "张",
                        td4: 1,
                        td5: 3,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻探班报表",
                        td2: null,
                        td3: "张",
                        td4: 3,
                        td5: 2,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻探野外记录表",
                        td2: null,
                        td3: "张",
                        td4: 4,
                        td5: 5,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "试验孔数",
                        td2: null,
                        td3: "孔",
                        td4: 2,
                        td5: 5,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "抽水试验表",
                        td2: null,
                        td3: "张",
                        td4: 1,
                        td5: 3,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "恢复试验表",
                        td2: null,
                        td3: "张",
                        td4: 4,
                        td5: 1,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "注水试验表",
                        td2: null,
                        td3: "张",
                        td4: 4,
                        td5: 4,
                        td6: 2
                    }
                ],
            }, {
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 2,
                list: [
                    {
                        td0: "测试放孔",
                        td1: "数量",
                        td2: null,
                        td3: "孔",
                        td4: null,
                        td5: null,
                        td6: 1
                    },
                    {
                        td0: "测试放孔",
                        td1: "钻孔测量",
                        td2: null,
                        td3: "张",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻孔数量",
                        td2: null,
                        td3: "个",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻孔进尺",
                        td2: null,
                        td3: "米",
                        td4: null,
                        td5: null,
                        td6: 2
                    },

                    {
                        td0: "机械钻探",
                        td1: "岩心照片",
                        td2: null,
                        td3: "张",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻探班报表",
                        td2: null,
                        td3: "张",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "机械钻探",
                        td1: "钻探野外记录表",
                        td2: null,
                        td3: "张",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "试验孔数",
                        td2: null,
                        td3: "孔",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "抽水试验表",
                        td2: null,
                        td3: "张",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "恢复试验表",
                        td2: null,
                        td3: "张",
                        td4: null,
                        td5: null,
                        td6: 2
                    },
                    {
                        td0: "水文测试  ",
                        td1: "注水试验表",
                        td2: null,
                        td3: "张",
                        td4: null,
                        td5: null,
                        td6: 2
                    }
                ],
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
    mounted() {
        this.getRouteStatus()
        this.fetchData()
    },
    methods: {
        getRouteStatus(){
            if(this.$route.path == "/dispatch/rejectProj" ){
                let userID = this.$route.query.id
                let userStatus = this.$route.query.status
                this.list[userID-1].td6 = userStatus
            }
            return
            
        },
        search() { },
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
            console.log(item);
            this.$router.push({ path: 'dispatchRecord', query: { data: item.list,id:2 } })
        },
        handle() {
            alert(this.status)
            this.status = '已受理'
            alert(this.status)

            this.$router.push({ path: 'handleProcess' })
        },
        // check () {

        //     this.$router.push({ path: 'checkDetail' })
        // },
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
        }
    }
}
