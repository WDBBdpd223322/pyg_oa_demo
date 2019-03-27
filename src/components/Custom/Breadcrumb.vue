<template>
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ levelTwo }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ levelThree }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: ['levelTwo', 'levelThree']
}
</script>

<style scoped>

</style>
