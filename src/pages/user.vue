<template>
	<div style="background-color: #efefef; height: 100%;">
    <div class="header">
      <div class="touxiang">
        <img src="../assets/touxiang.jpg" alt="">
      </div>
      <div class="username">用户名</div>
    </div>
    <router-link class="order" to="/orderList" tag="div">
      <span class="title">订单</span>
      <van-icon class="enter-icon" name="arrow" />
    </router-link>
	</div>
</template>

<script>
  import { Icon } from 'vant'
	export default {
		name: "user",
		data() {
			return {

			}
		},
    components: {
		  [Icon.name]: Icon
    }
	}
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    height: 120px;
    padding: 30px 30px;
    /*background: url("../assets/background.jpg") no-repeat;
    background-size: 100%;*/
    background: linear-gradient(to top, #fff , #f1c9b4);
    .touxiang{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .username{
  float: left;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
  }
  }

  .order{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    background-color: #fff;
    line-height: 50px;
    padding: 0 20px;
    .title{
      float: left;
    }
    .enter-icon{
      float: right;
      line-height: 50px;
    }
  }
</style>
