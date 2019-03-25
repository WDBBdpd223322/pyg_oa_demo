<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    :unique-opened="true"
    :collapse="isCollapse"
    :collapse-transition="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">用户相关</span>
      </template>
      <el-menu-item index="1-1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户列表</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">权限相关</span>
      </template>
      <el-menu-item index="2-1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">权限列表</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
    data() {
      return {}
    },
    props: ['isCollapse']
  }
</script>

<style scoped>
.aside {
  height: 100%;
}

.el-menu {
  border-right: none;
}

</style>
