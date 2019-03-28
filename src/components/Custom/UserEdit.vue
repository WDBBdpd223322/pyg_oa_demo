<template>
  <el-dialog
    title="编辑用户"
    :visible.sync="userEditDialog">
    <el-form
      class="demo-ruleForm"
      :model="userEditForm"
      ref="userEdit"
      :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input disabled v-model="userEditForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="mobile">
        <el-input v-model="userEditForm.mobile" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="userEditForm.email" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="userEditDialog = false">取 消</el-button>
      <el-button type="primary" @click="editUser">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { checkEmail, checkMobile } from '@/utils/check'
import { getUserInfoById, editUser } from '@/api/users'
export default {
  name: 'UserEdit',
  data () {
    return {
      userEditDialog: false,
      userEditForm: {},
      rules: {
        mobile: [
          { validator: checkMobile, trigger: 'blur' }
        ],
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async showEditDialog (id) {
      const { data, meta: { status } } = await getUserInfoById(id)
      if (status === 200) {
        this.userEditForm = data
        this.userEditDialog = true
      }
    },
    editUser () {
      this.$refs.userEdit.validate(async valid => {
        if (!valid) return this.$message.error('请完整填写表单')
        const { meta: { status, msg } } = await editUser(this.userEditForm.id, this.userEditForm)
        if (status === 200) {
          this.$message.success(msg)
          this.$emit('edit-success')
          this.userEditDialog = false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
