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
        <!--<h3 @click="photos()">拍照</h3>-->
        <img src="../assets/face.png" @click="photos()" alt="">
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
  import { Cell, CellGroup, Field, Button } from 'vant'
	export default{
		name: 'login',
		data() {
			return{
				username: '',
				password: '',
				loading: false,
        isFace: false
			}
		},
    components:{
      [Button.name]: Button,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field
    },
		methods: {
		  photos() {
        var img_path = html_plus.captureImage();
        html_plus.uploadImg(img_path);
      },

			checkLogin() {
				if(this.username == '' || this.password == ''){
					this.$toast('用户名和密码不能为空~');
				}else {
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
						if(this.username == 'hrrm' && this.password == '123456'){
							this.login();
						}else{
							this.$toast('用户名或密码不正确');
						}
					},1000)

					/*this.login()*/
				}
			},
			login() {
				$http({
          url: '/restaurant/user/login',
          method: 'get'
        },{
          userName: this.username,
          password: this.password
        }).then(res => {
          console.log(res,"登录")
          this.loading = false;
          localStorage.setItem("wrct-username", this.username)
          this.goTo("/commend")
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
  }

</style>
