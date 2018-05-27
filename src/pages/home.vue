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
        let str = this.$router.history.current.fullPath;
        if(str.indexOf('user') != -1) {
          this.active = 2
        }else if(str.indexOf('menu') != -1) {
          this.active = 1
        }else if(str.indexOf('commend') != -1) {
          this.active = 0
        }
      }
    },
    mounted() {
		  this.reComputed()
    },

    updated() {
      this.reComputed()
    }
	}
</script>

<style>
</style>
