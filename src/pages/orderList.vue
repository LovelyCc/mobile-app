<template>
	<div style="background-color: #eee;">
    <van-nav-bar
      title="订单"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      style="border-bottom: 1px solid #eee; background-color: #f50;color: #fff;"
    />
    <div class="list">
      <div class="item"  v-for="(item,index) in orderList">
        <div class="item-left">
          <img :src="item.image" alt="">
        </div>
        <div class="item-right">
          <div class="time">
            <span>{{item.time}}</span>
          <van-icon name="arrow" class="icon" @click="goDetails(item.id)"></van-icon>
          </div>
          <div class="detail">
            <span class="food">{{item.food}}等商品</span>
            <span class="money">￥{{item.money}}</span>
          </div>
          <div class="btn">
            <button v-if="!item.isEvaluate" @click="showModel(item.id)">去评价</button>
            <span class="tip" v-if="item.isEvaluate">已评价</span>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show">
      <p class="title">评价</p>
      <van-rate v-model="value" :size="22" color="#f50" />
      <van-button type="primary" bottom-action class="submit" @click="submit">确定</van-button>
    </van-popup>

	</div>
</template>

<script>
  import { NavBar,Rate,Icon,Popup,Button,Toast } from 'vant'
  import $http from '../axios/http.js'
	export default {
		name: "orderList",
		data() {
			return {
        orderList: [

        ],
        show: false,
        value: 5,
        orderId: ''
			}
		},
    components:{
      [NavBar.name]: NavBar,
      [Rate.name]: Rate,
      [Icon.name]: Icon,
      [Popup.name]: Popup,
      [Button.name]: Button,
      [Toast.name]: Toast
    },
    methods: {
      onClickLeft() {
        this.$router.goBack();
      },

      // 进入订单明细
      goDetails(index) {
        this.$router.push({path: '/orderDetail', query: {id: index}})
      },

      // 获取订单列表
      getOrder() {
        $http({
          url: '/restaurant/order/all',
          method: 'post'
        },{
          userId: localStorage.getItem("wrct_userid")
        }).then((res) => {
          console.log(res,"order")
          let arr = []
         res.data.orders.forEach((item, index, self) => {
          let obj = {};
          obj.id = item.id;
          obj.money = item.price;
          obj.time = this.initTime(item.orderTime);
          obj.isEvaluate = item.commented;
          obj.image = res.data.menus[index].picPath;
          obj.food = res.data.menus[index].name;
          arr.push(obj);
        })
          this.orderList = arr;
        },(err) => {
          console.log(err, 'orderList')
        })
      },

      // 初始化时间
      initTime(str) {
        let time = new Date(str);
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let hours = time.getHours();
        let min = time.getMinutes();
        let second = time.getSeconds();
        if(month < 10) {
          month = "" + "0" + month
        }
        if(day < 10) {
          day = "" + "0" + day
        }
        if(hours < 10) {
          hours = "" + "0" + hours
        }
        if(min < 10) {
          min = "" + "0" + min
        }
        if(second < 10) {
          second = "" + "0" + second
        }

        var res = year + '-' + month + '-' + day + " " + hours + ':' + min + ':' + second;
        return res
      },

      // 点击评价弹出模态框
      showModel(index) {
        this.orderId = index;
        this.show = true;
      },

      // 点击评价
      submit() {
        $http({
          url: '/restaurant/comment/add',
          method: 'POST'
        },{
          orderId: this.orderId,
          content: this.value,
          userId: localStorage.getItem("wrct_userid")
        }).then((res) => {
          console.log(res,"评价")
          this.show = false;
          if(res.data.status == 0) {
            Toast.success('评价成功');
            this.getOrder();
          }
        }, (err) => {
          console.log(err,"评价失败")
        })
      }
    },
    mounted() {
		  this.getOrder();
    }
	}
</script>

<style scoped lang="less">
  .list{
    width: 100%;
    margin-top: 46px;
    .item{
      display: flex;
      width: 100%;
      height: 125px;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      padding: 20px;
      .item-left {
        width: 20%;
        padding: 0 15px 0 0;
        img{
          width: 100%;
        }
      }
      .item-right {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .time {
          font-size: 13px;
          color: #ccc;
          overflow: hidden;
          clear: both;
          .icon {
            float: right;
            color: #333;
          }
        }
        .detail {
          color: #333;
          font-size: 15px;
          display: flex;
          justify-content: space-between;
          .money {
            font-weight: 500;
          }
        }
        .btn{
          overflow: hidden;
          clear: both;
          button {
            background: none;
            color: #f50;
            border: 1px solid #f50;
            border-radius: 3px;
            font-size: 13px;
            padding: 3px;
            float: right;
          }
          .tip {
            float: right;
            font-size: 14px;
          }
        }
      }
    }
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
  .submit{
    height: 44px;
    line-height: 44px;
  }
</style>
