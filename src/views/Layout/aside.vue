<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    :router="true"
    :unique-opened="true"
    :default-active="routePath"
    :collapse="isCollapse"
    :collapse-transition="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </template>
      <el-menu-item index="/users">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户列表</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">权限管理</span>
      </template>
      <el-menu-item index="/roles">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">角色列表</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/rights">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">权限列表</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </template>
      <el-menu-item index="/goods">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">商品列表</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/params">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">分类参数</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/categories">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">商品分类</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </template>
      <el-menu-item index="/orders">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">订单列表</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">数据统计</span>
      </template>
      <el-menu-item index="/reports">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">数据报表</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {}
  },
  props: ['isCollapse', 'routePath']
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
