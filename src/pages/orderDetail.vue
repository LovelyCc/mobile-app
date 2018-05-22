<template>
  <div style="background-color: #efefef;">
    <van-nav-bar
      title="订单详情"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      style="border-bottom: 1px solid #eee; background-color: #f50;color: #fff;"
    />
    <div class="main">
      <div class="list">
        <div class="title">
          订单明细
        </div>
        <div class="item" v-for="(item,index) in list">
          <div class="item-left">
            <img :src="item.img" alt="">
            <span class="name">{{item.name}}</span>
          </div>
          <div class="item-right">
            <span>x{{item.num}}</span>
            <span class="price">￥{{item.price}}</span>
          </div>
        </div>
        <div class="money">
          实付：￥<span>{{money}}</span>
        </div>
      </div>
      <div class="info">
        <div class="title">订单信息</div>
        <div class="order-num row">
          <span class="text">订单号</span>
          <span>{{orderNum}}</span>
        </div>
        <div class="time row">
          <span class="text">下单时间</span>
          <span>{{orderTime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { NavBar } from 'vant'
  import $http from '../axios/http'
  export default {
    name: "orderDetail",
    data() {
      return {
        list: [],
        orderTime: '',
        money: '',
        orderNum: ''
      }
    },
    components: {
      [NavBar.name]: NavBar
    },

    methods: {
      onClickLeft() {
        this.$router.goBack();
      },

      // 获取订单详情
      getDetail() {
        $http({
          url: 'http://api/getDetails',
          method: 'GET'
        },{
          id: this.$route.query.id
        }).then((res) => {
          console.log(res)
          this.list = res.data.detail.list;
          this.money = res.data.detail.money;
          this.orderTime = res.data.detail.time;
          this.orderNum = res.data.detail.orderNum;
        },(err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getDetail()
    }
  }
</script>

<style scoped lang="less">
  .main {
    padding: 10px;
    margin-top: 44px;
    color: #333;
    .list {
      padding: 10px;
      background-color: #fff;
      .title {
        font-size: 17px;
        font-weight: 600;
        height: 50px;
        line-height: 43px;
        border-bottom: 1px solid #efefef;
      }
      .item {
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: space-between;
        .item-left {
          display: flex;
          align-items: center;
          img{
            width: 40px;
            margin-right: 15px;
          }
        }
        .item-right {
          display: flex;
          align-items: center;
          font-size: 14px;
          .price {
            font-size: 17px;
            font-weight: 500;
            display: inline-block;
            width: 60px;
            text-align: right;
          }
        }
      }
      .money {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid #efefef;
        span{
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
    .info{
      width: 100%;
      padding: 10px;
      background-color: #fff;
      margin-top: 10px;
      .title {
        font-size: 17px;
        font-weight: 600;
        height: 50px;
        line-height: 43px;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-top: 1px solid #efefef;
        font-size: 15px;
        color: #666;
        .text {
          color: #333;
          font-weight: 500;
        }
      }

    }
  }
</style>
