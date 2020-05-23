import { mapGetters } from 'vuex'
import { getWorkingDetail, saveWorkRecord } from '../../api/workingProj'
export default {
    name: 'Detail',
    value: 0,
    data() {
        return {
            contractContent: "xxxxxxxxx",
            contractPromise: "xxxxxxxxxxxx",
            whetherConcavoConvex: 0
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
        console.log(this.ecode);
        this.fetchData()
    },
    methods: {
        fetchData() {
            // getWorkingDetail({ eCode: this.ecode }).then(result => {
            //     console.log(result);
            // }).catch(error => {
            //     console.log("error" + error);
            // })
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
        lastStep() {
            this.$emit("cancel");
        },
        dialogTipView(){
            this.$emit("dialogTipView")
        }
    }
}