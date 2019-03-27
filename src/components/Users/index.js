import * as Users from '@/api/users'
import Pagination from '@/components/Custom/Pagination'
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
      total: 10
    }
  },
  methods: {
    async getUserList () {
      const { data, meta: { status } } = await Users.getUserList(this.userListInfo)
      if (status === 200) {
        this.userList = data.users
        this.total = data.total
      }
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
    Pagination
  },
  created () {
    this.getUserList()
  }
}
