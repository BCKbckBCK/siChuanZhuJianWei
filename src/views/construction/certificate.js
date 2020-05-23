import {
    mapGetters
} from 'vuex'
export default {
    name: 'Certificate',
    data() {
        return {
            cerbook: require("../../assets/document.png")
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
        goBack() {
            this.$router.push({ path: 'examined' })
        },
        down() {

        }
    }
}