import {
    mapGetters
} from 'vuex'
export default {
    name: 'Codecheck',
    data() {
        return {
            formInline: {
                code: ''
            },
            contractInfo: {
                range: '',
                request: '',
                yesNo: ''
            },
            ISshow: false,
            list: [{
                td1: '新建',
                td2: '2020-04-08',
                td3: '2017-510681-41-03-1655130-020',
                td4: '五金配件技术改造项目'
            }],
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

    },
    methods: {
        onSubmit() {
            this.ISshow = true
        },
        goBack() {
            this.$router.push({ path: 'refuse' })
        },
        confirm() {
            this.$router.push({ path: 'process' })
        }
    }
}