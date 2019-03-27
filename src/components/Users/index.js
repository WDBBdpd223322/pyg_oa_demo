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
    },
    pageChange (page) {
      this.userListInfo.pagenum = page
      this.getUserList()
    },
    sizeChange (size) {
      this.userListInfo.pagesize = size
      this.getUserList()
    }
  },
  components: {
    Pagination
  },
  created () {
    this.getUserList()
  }
}
