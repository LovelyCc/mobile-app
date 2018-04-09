<template>
	<div>
	  <div class="hello">
	    <van-tabbar v-model="active">
			  <van-tabbar-item icon="shop">标签</van-tabbar-item>
			  <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
			  <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
			  <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
			</van-tabbar>
	  </div>
	  <van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名" />
</van-cell-group>
	  <div class="box">
	  	<h1 class="title">hello</h1>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 0,
      value: 'aaa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
	width: 80%;
	height: 200px;
	margin: 0 auto;
	background-color: #ccc;
	.title{
		color: #f00;
	}
}
</style>
