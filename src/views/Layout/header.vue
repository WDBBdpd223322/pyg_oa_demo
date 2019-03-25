<template>
  <el-row class="header">
    <el-col :span="2">
      <el-button
        class="collapse"
        type="info"
        icon="el-icon-sort"
        size="mini"
        @click.prevent="collapse"></el-button>
    </el-col>
    <el-col :span="20">
      <h1>品 优 购 后 台 管 理 系 统</h1>
    </el-col>
    <el-col :span="2">
      <el-button size="mini" round>退出</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello Vue!'
    }
  },
  methods: {
    collapse () {
      this.$emit('collapse')
    }
  }
}
</script>

<style scoped>
.header {
  height: 60px;
}

.el-col {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.collapse {
  transform: rotate(90deg);
  height: 40px;
}
</style>
