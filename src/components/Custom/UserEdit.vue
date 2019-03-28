<template>
  <el-dialog
    title="添加用户"
    :visible.sync="userEditDialog"
    @close="$refs.userEdit.resetFields()">
    <el-form
      class="demo-ruleForm"
      :model="userEditForm"
      ref="userEdit"
      :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userEditForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userEditForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repeatPass">
        <el-input v-model="userEditForm.repeatPass" autocomplete="off"></el-input>
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
      <el-button type="primary" @click="addUser">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { checkEmail, checkMobile, checkRepeatPass } from '@/utils/check'
export default {
  name: 'UserEdit',
  data () {
    return {
      userEditDialog: false,
      userEditForm: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 8, message: '用户名长度为 2 - 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度为 6 - 16 个字符', trigger: 'blur' }
        ],
        repeatPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度为 6 - 16 个字符', trigger: 'blur' },
          { validator: checkRepeatPass.bind(this), trigger: 'blur' }
        ],
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
    addUser () {
      this.$refs.userEdit.validate(valid => {
        if (!valid) return this.$message.error('请完整填写表单')
        console.log('准备添加用户')
      })
    }
  }
}
</script>

<style scoped>

</style>
