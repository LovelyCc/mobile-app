<template>
	<div style="background-color: #fff;">
    <div class="top">推荐</div>
    <p class="title">
      <img src="../assets/tuijian.png" alt="">
      为你推荐
    </p>
    <div style="margin-bottom: 50px;">
      <div class="list">
        <div class="item" v-for="(item,index) in list">
          <img :src="item.img" alt="">
          <p class="tuijian-title">{{item.name}}</p>
          <p class="price">￥<span>{{item.price}}</span></p>
        </div>
      </div>
      <!--<van-row style="margin-bottom: 15px;" class="list">
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
      </van-row>-->
    </div>
	</div>
</template>

<script>
	export default {
		name: "commend",
		data() {
			return {
			  list: [
          {
            name: '上汤小菠菜',
            img: 'https://fuss10.elemecdn.com/c/73/bf86d0f695a8ed204664d76df2b0cjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '22'
          },
          {
            name: '荷塘小炒',
            img: 'https://fuss10.elemecdn.com/e/62/e080f9cca1e9324c9d44bf129d004jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '24'
          },
          {
            name: '宫保鸡丁',
            img: 'https://fuss10.elemecdn.com/2/ef/189e556345c8f1231049ef85bff8cjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '26'
          },
          {
            name: '五香牛肉',
            img: 'https://fuss10.elemecdn.com/b/d6/8c1dbd77da592651438cace80b48ejpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '30'
          },
          {
            name: '淮南牛肉锅',
            img: 'https://fuss10.elemecdn.com/2/0a/8442341ebb4c884b8579b941f1adajpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '46'
          },
          {
            name: '沙律牛排',
            img: 'https://fuss10.elemecdn.com/0/a1/cc67e4d769591a87d39f0bd773169jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '32'
          },
          {
            name: '川香红烧牛肉',
            img: 'https://fuss10.elemecdn.com/8/94/0fa13aa93545b09c8f03854b040a2jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '46'
          },
          {
            name: '上汤小菠菜',
            img: 'https://fuss10.elemecdn.com/c/73/bf86d0f695a8ed204664d76df2b0cjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '22'
          },
          {
            name: '荷塘小炒',
            img: 'https://fuss10.elemecdn.com/e/62/e080f9cca1e9324c9d44bf129d004jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '24'
          },
          {
            name: '清炒虾仁',
            img: 'https://fuss10.elemecdn.com/0/e4/25ada405c9c4188e40a2a08a9dc4bjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85',
            price: '68'
          }
        ]

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
