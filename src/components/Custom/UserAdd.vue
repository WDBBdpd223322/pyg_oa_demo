<template>
  <el-dialog
    title="添加用户"
    :visible.sync="userAddDialog"
    @close="$refs.userAdd.resetFields()">
    <el-form
      class="demo-ruleForm"
      :model="userAddForm"
      ref="userAdd"
      :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userAddForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userAddForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repeatPass">
        <el-input v-model="userAddForm.repeatPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="mobile">
        <el-input v-model="userAddForm.mobile" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="userAddForm.email" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="userAddDialog = false">取 消</el-button>
      <el-button type="primary" @click="addUser">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { checkEmail, checkMobile, checkRepeatPass } from '@/utils/check'
import { addUser } from '@/api/users'
export default {
  name: 'UserAdd',
  data () {
    return {
      userAddDialog: false,
      userAddForm: {},
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
      this.$refs.userAdd.validate(async valid => {
        if (!valid) return this.$message.error('请完整填写表单')
        const { meta: { status, msg } } = await addUser(this.userAddForm)
        if (status === 201) {
          this.$message.success(msg)
          this.userAddDialog = false
          this.$emit('add-success')
        }

        if (status === 400) {
          this.$message.error(msg)
          this.userAddForm.username = ''
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
