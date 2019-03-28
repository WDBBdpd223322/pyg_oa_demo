import * as Users from '@/api/users'
import Pagination from '@/components/Custom/Pagination'
import UserAdd from '@/components/Custom/UserAdd'
import UserEdit from '@/components/Custom/UserEdit'
import UserRole from '@/components/Custom/UserRole'
export default {
  name: 'Users',
  data () {
    return {
      userList: [],
      userListInfo: {
        pagenum: 1,
        pagesize: 2,
        query: ''
      },
      total: 10,
      userListLoading: true
    }
  },
  methods: {
    async getUserList () {
      this.userListLoading = true
      const { data, meta: { status } } = await Users.getUserList(this.userListInfo)
      if (status === 200) {
        if (this.userListInfo.pagenum !== 1 && data.users.length === 0) {
          this.userListInfo.pagenum--
          return this.getUserList()
        }
        setTimeout(() => {
          this.userList = data.users
          this.total = data.total
          this.userListLoading = false
        }, 300)
      }
    },
    async changeState (id, state) {
      const { meta: { status, msg } } = await Users.changeState(id, !state)
      if (status === 200) {
        this.$message.success(msg)
        this.getUserList()
      }
    },
    userDestroy (uId, username) {
      const ce = this.$createElement
      this.$confirm(ce('p', null, [
        ce('span', '次操作讲永久删除 '),
        ce('h1', { style: 'display: inline;' }, username),
        ce('span', ' 用户，是否继续？')
      ]), '确认删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const { meta: { status, msg } } = await Users.destroyUser(uId)
        if (status === 200) {
          this.$message.success(msg)
          this.getUserList()
        }
      }).catch(() => this.$message.info('已取消删除'))
    }
  },
  watch: {
    userListInfo: {
      handler () {
        this.getUserList()
      },
      deep: true
    }
  },
  computed: {
    query: {
      get () {
        return this.userListInfo.query
      },
      set (val) {
        this.userListInfo.query = val
        this.userListInfo.pagenum = 1
      }
    }
  },
  components: {
    Pagination,
    UserAdd,
    UserEdit,
    UserRole
  },
  created () {
    this.getUserList()
  }
}
