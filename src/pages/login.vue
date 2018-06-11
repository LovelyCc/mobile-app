<template>
  <div id="login">
		<div class="container">
      <div v-show="!isFace">
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
        </van-cell-group>
        <van-button bottom-action style="margin-top: 20px; height: 45px; line-height: 45px;"
                    size="large"
                    type="primary"
                    :loading="loading"
                    @click="checkLogin()">登陆</van-button>
      </div>
      <div v-show="isFace" class="face">
        <img src="../assets/face.png" @click="photos()" alt="">
        <div class="loading-login" v-if="isShowFace">
          <van-loading color="white" class="loading-con"/>
        </div>
      </div>
			<p>
        <span @click="isFace = !isFace">
          <span v-show="isFace">用户名密码登录</span>
          <span v-show="!isFace">人脸识别登录</span>
        </span>

				<router-link class="register" to="/register" tag="span">立即注册</router-link>
			</p>
		</div>

	</div>
</template>

<script>
  import html_plus from '../plusready.js'
  import $http from '../axios/http.js'
  import { Cell, CellGroup, Field, Button, Loading } from 'vant'
	export default{
		name: 'login',
		data() {
			return{
				username: '',
				password: '',
				loading: false,
        isFace: false,
        img_path: '',
        isShowFace: false
			}
		},
    components:{
      [Button.name]: Button,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Loading.name]: Loading
    },
		methods: {
		  photos() {
		    this.isShowFace = true;
        html_plus.captureImage();
        setTimeout(() => {
          this.img_path = html_plus.img_path;
          console.log(this.img_path,"nihaosa")
          html_plus.uploadImg(this.img_path, {
            url: 'http://192.168.43.125:8080/restaurant/user/facelogin'
          })
          setTimeout(() => {
            let ress = JSON.parse(localStorage.getItem("wrct_reg"));
            this.isShowFace = false;
            if(ress.status >= 10) {
              localStorage.setItem("wrct_username", ress.userName);
              localStorage.setItem("wrct_userid", ress.userId);
              this.goTo("/commend")
            }else if(ress.status == -1){
              this.$toast('人脸不匹配！');
            }
          }, 4000)
        },8000)
      },

			checkLogin() {
				if(this.username == '' || this.password == ''){
					this.$toast('用户名和密码不能为空~');
				}else {
					this.loading = true;
					this.login();
				}
			},
			login() {
				$http({
          url: '/restaurant/user/login',
          method: 'post'
        },{
          userName: this.username,
          password: this.password
        }).then(res => {
          console.log(res,"登录")
          this.loading = false;
          if(res.data.status == 0) {
            localStorage.setItem("wrct_username", res.data.userName);
            localStorage.setItem("wrct_userid", res.data.userId);
            this.goTo("/commend")
          }else {
            this.$toast('用户名或密码错误~');
          }
        },err => {
          console.log(err, "登录")
          this.loading = false;
          this.$toast('网络出现错误~');
        })
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
			color: #333;
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

  .face {
    height: 153px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .loading-login {
    width: 80px;
    height: 80px;
    background-color: rgba(0,0,0,0);
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    .loading-con {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

</style>
