export const checkEmail = (rule, value, callback) => {
  const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/
  if (!value) return callback()
  setTimeout(() => {
    if (mailReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的邮箱格式'))
    }
  }, 100)
}

export const checkMobile = (rule, value, callback) => {
  const mailReg = /^\d{11}$/
  if (!value) return callback()
  setTimeout(() => {
    if (mailReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的手机号码'))
    }
  }, 100)
}

export const checkRepeatPass = function (rule, value, callback) {
  if (!value) return callback(new Error('请再次输入密码'))
  if (value !== this.userAddForm.password) return callback(new Error('两次密码不一致'))
  callback()
}
