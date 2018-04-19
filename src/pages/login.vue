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
			</van-cell-group>
			<van-button
				style="margin-top: 20px; height: 45px; line-height: 45px;"
				size="large"
				type="primary"
				:loading="loading"
				@click="checkLogin()"
				>登录
			</van-button>
			<p>
				<router-link class="register" to="/register" tag="span">立即注册</router-link>
				<router-link class="forgetPwd" to="/forgetPwd" tag="span">忘记密码</router-link>
			</p>
		</div>

	</div>
</template>

<script>
	export default{
		name: 'login',
		data() {
			return{
				username: '',
				password: '',
				loading: false
			}
		},
		methods: {
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
				}
			},
			login() {
				this.Axios.post("http://api/login", {
					username: this.username,
					password: this.password
				}).then((res) => {
					console.log(res);
					localStorage.setItem("wrct-username",res.data.username);
					this.goTo("/commend")
				},(err) => {
					console.log(err)
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
	background: url('../assets/bg-login.jpg') no-repeat 100%;
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
