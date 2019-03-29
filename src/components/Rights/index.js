import { getRightsList } from '@/api/rights'
export default {
  name: 'Rights',
  data () {
    return {
      rightsList: [],
      rightsListLoading: true
    }
  },
  methods: {
    async getRightsList () {
      this.rightsListLoading = true
      const { data, meta: { status } } = await getRightsList('list')
      setTimeout(() => {
        if (status === 200) this.rightsList = data
        this.rightsListLoading = false
      }, 500)
    }
  },
  created () {
    this.getRightsList()
  }
}
