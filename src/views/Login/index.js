export default {
  name: 'login',
  data () {
    return {
      msg: '登陆页面',
      loginForm: {},
      rules: {
        username: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  }
}
