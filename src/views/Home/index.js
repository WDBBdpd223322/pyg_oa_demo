import Aside from '@/views/Layout/aside'
import Header from '@/views/Layout/header'
import Main from '@/views/Layout/main'
export default {
  name: 'Home',
  data () {
    return {
      msg: '首页',
      isCollapse: false,
      routePath: ''
    }
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
    },
    getRoutePath () {
      this.routePath = this.$route.path
    }
  },
  components: {
    Aside,
    Header,
    Main
  },
  updated () {
    this.getRoutePath()
  },
  created () {
    this.getRoutePath()
  }
}
