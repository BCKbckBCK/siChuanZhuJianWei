
export default {
  name: 'Handle',
  data () {
    return {
      status: '111'
    }
  },
  methods: {
    queRen () {
      this.$confirm('确认办理工程?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({ path: 'examineprocess', query: { id: this.$route.query.id }})
      });
    },
    fanHui () {
      this.$router.push({ path: 'examineprocess' })
    },
    fanHui1 () {
      this.$router.push({ path: 'dispassProcess' })
    }
  }
}

