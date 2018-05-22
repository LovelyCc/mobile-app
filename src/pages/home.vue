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
  import { Tabbar, TabbarItem } from 'vant'
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
		},
    components:{
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    methods: {
		  // 判断当前路由
      reComputed() {
        switch (this.$router.history.current.fullPath) {
          case '/user':
            this.active = 2
                break;
          case '/menu':
            this.active = 1
                break;
          case '/commend':
            this.active = 0
                break;
        }
      }
    },
    mounted() {
		  this.reComputed()
    }
	}
</script>

<style>
</style>
