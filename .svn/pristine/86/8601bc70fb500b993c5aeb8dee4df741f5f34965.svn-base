import {
    mapGetters
} from 'vuex'
import {
    getUserDetailInfo, addUser, editUser
} from '../../api/user'
export default {
    name: 'UserEdit',
    data () {
        // 验证活动名称的函数
        const validatePassword = (rule, value, callback) => {
            const reg = /^[a-zA-Z0-9]{6,15}$/
            if (this.filterForm.dnUserId && this.filterForm.dnUserId !== '') {
                if (this.filterForm.password !== '' && !reg.test(this.filterForm.password)) {
                    callback(new Error(' '));
                } else {
                    callback();
                }
            } else {
                if (!this.filterForm.password || this.filterForm.password === '' || !reg.test(this.filterForm.password)) {
                    callback(new Error(' '));
                } else {
                    callback();
                }
            }
        };
        return {
            Decimal: window.Decimal,
            listLoading: false,
            filterForm: {},
            role: window.ROLE,
            feedbackIds: [],
            feedbackAllList: [],
            rules: {
                username: [
                  { required: true, message: ' ', trigger: 'blur' },
                  { pattern: /^1\d{10}$/, message: ' ', trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword }
                ],
                realName: [
                  { required: true, message: ' ', trigger: 'blur' }
                ],
                company: [
                  { required: true, message: ' ', trigger: 'blur' }
                ],
                roleId: [
                  { required: true, message: ' ', trigger: 'blur' }
                ]
              }
        }
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    mounted () {
        if (this.$route.query.id) {
            this.filterForm.dnUserId = this.$route.query.id
            this.fetchData()
        }
    },
    methods: {
        fetchData () {
            const that = this
            getUserDetailInfo(that.filterForm.dnUserId).then(res => {
                that.filterForm = res.data.userInfo
                that.feedbackIds = res.data.feedbackIds
            })
        },
        back () {
            this.$router.go(-1);// 返回上一层
        },
        save () {
            this.$refs['filterForm'].validate((valid) => {
              if (valid) {
                  const data = { userInfo: this.filterForm, feedbackIds: this.feedbackIds, password: this.filterForm.password }
                  if (this.filterForm.dnUserId && this.filterForm.dnUserId !== '') {
                    // 编辑
                    editUser(data).then(res => {
                        this.$message({
                          message: '保存成功',
                          type: 'success'
                        });
                        this.$router.go(-1);// 返回上一层
                    })
                  } else {
                    // 添加
                    addUser(data).then(res => {
                        this.$message({
                          message: '保存成功',
                          type: 'success'
                        });
                        this.$router.go(-1);// 返回上一层
                    })
                  }
              } else {
                return false;
              }
            });
        }
    }
}
