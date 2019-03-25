import Aside from '@/views/Layout/aside'
import Header from '@/views/Layout/header'
import Main from '@/views/Layout/main'
export default {
  name: 'home',
  data () {
    return {
      msg: '首页',
      isCollapse: false
    }
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
    }
  },
  components: {
    Aside,
    Header,
    Main
  }
}
