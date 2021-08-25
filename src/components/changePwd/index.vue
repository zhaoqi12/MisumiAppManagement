<template>
  <transition name = "bounce">
    <div class="changePwdBox">
      <div class="title">
        <span>修改密码</span>
        <i @click="canaleChange" class="el-icon-close changePwdClose"></i>
      </div>
      <div class="main">
        <div>
          <p><span style="color: red">*</span>&nbsp;原密码：</p>
          <el-input placeholder="请输入原密码" :type="passwordTypeNew" v-model="inputOldValue"></el-input>
          <span v-show="inputOldValue" class="show-pwd" @click="showPwd(1)">
            <svg-icon :icon-class="passwordTypeNew === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </div>
        <div>
          <p><span style="color: red">*</span>&nbsp;新密码：</p>
          <el-input placeholder="请输入新密码" :type="passwordTypeOld" v-model="inputNewValue"></el-input>
          <span v-show="inputNewValue" class="show-pwd" @click="showPwd(2)">
            <svg-icon :icon-class="passwordTypeOld === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </div>
        <div>
          <p><span style="color: red">*</span>&nbsp;确认新密码：</p>
          <el-input placeholder="请再次输入新密码" :type="passwordTypeConfirm" v-model="inputConfirmValue"></el-input>
          <span v-show="inputConfirmValue" class="show-pwd" @click="showPwd(3)">
            <svg-icon :icon-class="passwordTypeConfirm === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </div>
      </div>
      <div class="btnBox">
        <el-button @click="canaleChange">取消</el-button>
        <el-button @click="okChange" type="primary">确定</el-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { Message } from 'element-ui'
import { changePwd } from '@/api/user'
export default {
  data() {
    return {
      inputOldValue: '',
      inputNewValue: '',
      inputConfirmValue: '',
      passwordTypeNew: 'password',
      passwordTypeOld: 'password',
      passwordTypeConfirm: 'password'
    }
  },
  methods: {
    canaleChange() {
      this.$store.dispatch('app/showChangePwdPopUp', false);
      this.inputOldValue = '';
      this.inputNewValue = '';
      this.inputConfirmValue = '';
    },
    showPwd(index) {
      if (index === 1) {
        if (this.passwordTypeNew === 'password') {
          this.passwordTypeNew = ''
        } else {
          this.passwordTypeNew = 'password'
        }
      } else if (index === 2) {
        if (this.passwordTypeOld === 'password') {
          this.passwordTypeOld = ''
        } else {
          this.passwordTypeOld = 'password'
        }
      } else {
        if (this.passwordTypeConfirm === 'password') {
          this.passwordTypeConfirm = ''
        } else {
          this.passwordTypeConfirm = 'password'
        }
      }
    },
    okChange() {
      if (this.inputNewValue === this.inputConfirmValue) {
        changePwd({
          "oldPassword": this.inputOldValue,
          "newPassword": this.inputNewValue,
          "confirmNewPassword": this.inputConfirmValue,
        }).then(res => {
          console.log(res)
          Message({
            message: res.message,
            type: 'success',
            duration: 3000
          })
          if (res.code == 0) {
            setTimeout(() => {
              location.reload()
            }, 1000)
          }
        })
      } else {
        Message({
          message: '确认密码输入不符',
          type: 'error',
          duration: 3000
        })
      }
    }
  }
}
</script>

<style lang="scss" >
  .changePwdBox {
    width: 400px;
    height: 400px;
    box-shadow: 0 0 5px #000;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .changePwdClose {
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
    }
    .title {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      background-color: rgba($color: #ccc, $alpha: 0.4);
      span {
        font-weight: bold;
        color: rgb(77, 73, 73);
      }
    }
    .main {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 10px 0 22px 40px;
      p {
        margin: 12px 0;
      }
      .el-input {
        width: 250px;
      }
      input {
        width: 250px;
      }
    }
    .btnBox {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 60%;
    }
    .show-pwd {
      position: relative;
      left: -25px;
      color: #9b9b9b;
    }
  }
</style>