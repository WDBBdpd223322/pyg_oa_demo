<template>
  <el-dialog
    title="分配用户角色"
    :visible.sync="userRoleDialog"
    @close="userRoleForm = { rid: '' }; tmpRid = 0">
    <el-form :model="userRoleForm">
      <el-form-item label="用户名">
        <el-input disabled v-model="userRoleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户角色">
        <el-select v-model="userRoleForm.rid" placeholder="请选择">
          <el-option
            v-for="item in rolesList"
            :key="item.id"
            :label="item.roleName"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="userRoleDialog = false">取 消</el-button>
      <el-button type="primary" @click="roleUser">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { getRolesList } from '@/api/roles'
import { roleUser } from '@/api/users'
export default {
  name: 'UserRole',
  data () {
    return {
      userRoleDialog: false,
      userRoleForm: {
        rid: ''
      },
      rolesList: [],
      tmpRid: 0
    }
  },
  methods: {
    async showRoleDialog (id, username,rolename) {
      this.userRoleForm.id = id
      this.userRoleForm.username = username
      const { data, meta: { status } } = await getRolesList()
      if (status === 200) {
        this.rolesList = data
        data.forEach(item => item.roleName === rolename && (this.userRoleForm.rid = this.tmpRid = item.id))
        this.userRoleDialog = true
      }
    },
    async roleUser () {
      if (!this.userRoleForm.rid || this.userRoleForm.rid === this.tmpRid) {
        this.$message.info('您没有更改用户角色')
      } else {
        const { meta: { status, msg } } = await roleUser(this.userRoleForm.id, this.userRoleForm.rid)
        if (status === 200) {
          this.$message.success(msg)
          this.$emit('role-success')
          this.userRoleForm = { rid: '' }
          this.tmpRid = 0
        }
      }
      this.userRoleDialog = false
    }
  }
}
</script>

<style scoped>

</style>
