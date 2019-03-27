import * as Users from '@/api/users'
export default {
  name: 'Users',
  data () {
    return {
      userList: [],
      userListInfo: {
        pagenum: 1,
        pagesize: 10,
        query: ''
      }
    }
  },
  methods: {
    async getUserList () {
      const { data, meta: { status } } = await Users.getUserList(this.userListInfo)
      if (status === 200) {
        this.userList = data.users
        console.log(data.users[0])
      }
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  created () {
    this.getUserList()
  }
}
