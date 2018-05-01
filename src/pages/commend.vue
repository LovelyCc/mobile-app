<template>
	<div style="background-color: #fff;">
    <div class="top">推荐</div>
    <p class="title">
      <img src="../assets/tuijian.png" alt="">
      为你推荐
    </p>
    <div style="margin-bottom: 50px;">
      <van-row style="margin-bottom: 15px;">
        <van-col offset="1" span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
        <van-col span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
      </van-row>
      <van-row style="margin-bottom: 15px">
        <van-col offset="1" span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
        <van-col span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
      </van-row>
      <van-row style="margin-bottom: 15px">
        <van-col offset="1" span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
        <van-col span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
      </van-row>
      <van-row style="margin-bottom: 15px">
        <van-col offset="1" span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
        <van-col span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
      </van-row>
      <van-row style="margin-bottom: 15px">
        <van-col offset="1" span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
        <van-col span="11">
          <div class="tuijian-menu">
            <img src="../assets/timg.jpg" alt="">
            <p class="tuijian-title">扬州炒饭</p>
            <p class="price">￥<span>38.8</span></p>
          </div>
        </van-col>
      </van-row>
    </div>
	</div>
</template>

<script>
	export default {
		name: "commend",
		data() {
			return {

			}
		},
    methods: {
		  getMenu() {
        this.Axios.get('/api/restapi/shopping/v2/menu',{
          params: {
            "restaurant_id": "161277900",
            "terminal": 'web'
          }
        })
          .then(res=> {
            console.log(res)
          },err => {
            console.log(err)
          })
      }
    },
    mounted() {
      // this.getMenu();
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
    font-family: "微软雅黑";
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
  .tuijian-menu{
    border: 1px solid #ccc;
    padding: 0 0 10px 0;
    background-color: #fff;
    img{
      width: 100%;
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
</style>
