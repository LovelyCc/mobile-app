<template>
	<div>
    <van-tabbar style="background-color: #fff; z-index: 1" v-model="active">
      <van-tabbar-item icon="shop" to="/commend">
        <span>推荐</span>
      </van-tabbar-item>
      <van-tabbar-item icon="chat" to="/menu">菜单</van-tabbar-item>
      <van-tabbar-item icon="records" to="/user">我的</van-tabbar-item>
    </van-tabbar>
    <transition

    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {
        active: 0,
        icon: {
          normal: '//img.yzcdn.cn/1.png',
          active: '//img.yzcdn.cn/2.png'
        }
			}
		}
	}
</script>

<style>
</style>
