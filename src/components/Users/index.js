import * as Users from '@/api/users'
import Pagination from '@/components/Custom/Pagination'
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
