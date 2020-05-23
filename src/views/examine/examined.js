import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'Examined',
    data () {
        return {
          pageArr: [1],
          page: 1,
          maxPage: 1,
          displayLength: 10,
          total: 0,
          list: [{
              td1: '五金配件技术改造项目',
              td2: '2017-510681-41-03-1655130-006 中型',
              td3: '0',
              td4: '2020-04-15',
              td5: '2020-04-15',
              td6: 2
          }],
          listLoading: false,
          filterForm: {}
        }
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    mounted () {
    },
    methods: {
        goBack () {
            this.$router.push({ path: 'process' })
        },
        view (item) {
          this.$router.push({ path: 'detailProcess'})
        },
        search () {
  
        },
        indexMethod (index) {
          return (this.page - 1) * this.displayLength + index + 1;
        },
        fetchData () {},
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
        }
    }
  }
  