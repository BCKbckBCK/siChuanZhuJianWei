import {
    mapGetters
} from 'vuex'
import Handle from './handle'
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

            displayLength: 10,
            total: 0,

            list: [{
                td1: '五金配件技术改造项目-1期',
                td2: '2017-510681-41-03-1655130-010 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1
            }, {
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
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
    
    
    methods: {
        appoint (item) {
            this.$router.push({ path: 'dispassCheck', query: { id: 3}})
        },
        prevPage(){},
        pageCurrentChange(){},
        nextPage(){},
    }
}
