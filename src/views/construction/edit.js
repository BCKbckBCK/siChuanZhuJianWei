import {
  mapGetters
} from 'vuex'
export default {
  name: 'Edit',
  data () {
    return {
      contractInfo: {
        range: '',
        request: '',
        yesNo: ''
      }
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
      this.$router.push({ path: 'refuse' })
    }
  }
}
