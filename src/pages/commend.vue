<template>
	<div style="background-color: #fff;">
    <div class="top">推荐</div>
    <p class="title">
      <img src="../assets/tuijian.png" alt="">
      为你推荐
    </p>
    <div style="margin-bottom: 50px;">
      <div class="list">
        <div class="item" v-for="(item,index) in list" @click="goMenu(item.id, item.category)">
          <img :src="item.picPath" alt="">
          <p class="tuijian-title">{{item.name}}</p>
          <p class="price">￥<span>{{item.price}}</span></p>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import $http from '../axios/http'
	export default {
		name: "commend",
		data() {
			return {
			  list: []

			}
		},
    methods: {
		  // 获取推荐列表
		  getMenu() {
		    $http({
          url: '/restaurant/menu/tuijian',
          method: 'post'
        },{
          userId: localStorage.getItem("wrct_userid")
        }).then((res) => {
          console.log(res, "推荐");
          this.list = res.data.menus;
        },(err) => {
          console.log(err)
        })
      },

      // 点击跳转到菜单
      goMenu(id,category) {
		    this.$router.push({path: '/menu', query: {id: id, category: category}})
      }
    },
    mounted() {
      this.getMenu();
    }
	}
</script>

<style scoped lang="less">
  .top {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f50;
    font-size: 18px;
    color: #fff;
    padding-left: 20px;
  }
  .title{
    font-family: 微软雅黑;
    margin: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    img{
      vertical-align: middle;
      width: 40px;
      position: relative;
      bottom: 2px;
    }
  }

  .list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    padding: 0 10px;
    .item{
      width: 49%;
      margin-bottom: 10px;
      img{
        width: 100%;
        height: 120px;
      }
      p{
        margin: 0;
        padding-left: 10px;
      }
      .tuijian-title{
        font-size: 16px;
        margin: 2px 0 3px 0;
      }
      .price{
        color: #f40;
        font-size: 14px;
        span{
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }

</style>
