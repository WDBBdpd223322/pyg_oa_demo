// import check from '@/utils/check'
import { userLogin } from '@/api/login'
import { setToken } from '@/utils/auth'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {},
      rules: {
        username: [
          { required: true, message: '请填写邮箱', trigger: 'blur' }
          // { validator: check.checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['loginForm'].validate(valid => {
        if (!valid) return
        this.login()
      })
    },
    async login () {
      const { data, meta: { status } } = await userLogin(this.loginForm)
      if (status === 200) {
        setToken(data.token)
        const redirect = this.$router.currentRoute.query.redirect || '/'
        this.$router.push(redirect)
      }
    }
  }
}
