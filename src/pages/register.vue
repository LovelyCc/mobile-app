<template>
  <div id="login">
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="username"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
        <van-field
          v-model="rePwd"
          type="password"
          placeholder="请再次输入密码"
        />
      </van-cell-group>
      <van-button bottom-action style="margin-top: 20px; height: 45px; line-height: 45px;"
                  size="large"
                  type="primary"
                  :loading="loading"
                  @click="clickSubmit()">注册</van-button>
      <p>
        <span class="register" @click="goLogin">已有账号？去登陆</span>
      </p>
    </div>
  </div>
</template>

<script>

  import $http from '../axios/http.js'
  export default{
    name: 'register',
    data() {
      return{
        username: '',
        password: '',
        rePwd: '',
        loading: false
      }
    },
    methods: {
      checkUsername() {
        if(!this.username || this.username== '') {
          this.$toast('用户名不能为空~');
          return false;
        }else {
          let reg = /^[a-zA-Z0-9_]{6,}$/;
          if(!reg.test(this.username)) {
            this.$toast('用户名格式不对~');
            return false;
          }else {
            return true;
          }
        }
      },

      checkpwd() {
        if(!this.password || this.password== '') {
          this.$toast('密码不能为空~');
          return false;
        }else {
          let reg = /^\S{6,16}$/;
          if(!reg.test(this.password)) {
            this.$toast('密码格式不对~');
            return false;
          }else {
            return true;
          }
        }
      },

      checkRePwd() {
        if(!this.rePwd || this.rePwd == '') {
          this.$toast('重复密码不能为空~');
          return false;
        }else {
          if(this.rePwd != this.password) {
            this.$toast('两次输入密码不一致~');
            return false;
          }else {
            return true;
          }
        }
      },

      clickSubmit() {
        if(this.checkUsername() && this.checkpwd() && this.checkRePwd()) {
          console.log("注册")
        }else {

        }
      },

      goLogin() {
        this.$router.goBack();
      }
    }
  }
</script>

<style scoped lang="less">
  #login{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/login-bg.jpeg') no-repeat 100%;
    background-size: cover;
    .container{
      width: 80%;
      height: auto;
      margin: 45% auto 0;
      p{
        margin: 10px auto 0;
        color: #fff;
        font-size: 13px;
        .register{
          float: right;
        }
        .forgetPwd{
          float: left;
        }
      }
    }
  }

</style>
