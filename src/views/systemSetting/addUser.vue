<template>
  <div class="userContainer">
    <div class="userheader">
      <div>新增用户</div>
      <div><i>*</i>为必填项</div>
    </div>
    <div>基础信息</div>
    <el-form :model="addForm" :rules="rules" ref="addFormRules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="登录账号" prop="account">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="用户姓名" prop="username">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="用户角色" prop="userrole">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="所属部门" prop="department">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="small">提交</el-button>
    <el-button size="small">重置</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addForm: {
        formData: {
          account: '',
          username: '',
          password: '',
          userrole: '',
          department: '',
          phone: ''
        }
      },
      addFormRules: {
        account: [
          { required: true, message: '请输入账户名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        userrole: [
          { required: true, message: '请输入用户角色', trigger: 'blur' }
        ],
        department: [
          { required: true, message: '请输入您的所属部门', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入您的电话号码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.proles {
  margin: 15px 0;
}
.userheader {
    border-bottom: 1px solid #e9e9e9;
}
</style>
