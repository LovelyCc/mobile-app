<template>
	<div>
    <div class="header">
      菜单
    </div>
    <div style="margin-top: 44px;">
      <div class="sidebar">
        <ul>
          <li v-for="(item,index) in classes" @click="getMenu(index)" :class="{'active': item.key == active}">{{item.name}}</li>
        </ul>
      </div>
      <div style="position: relative;float: right; width: 75%">
        <div v-for="(item, index) in menu" class="item">
          <div class="img-box">
            <img :src='item.path' alt="">
          </div>
          <div style="float: right; width: 75%; height: 100%; padding: 10px 5px;">
            <h3>{{item.name}}</h3>
            <div class="bottom">
              <span class="price">
                ￥{{item.price}}
              </span>
              <p style="float: right; margin-right: 10px" v-if="item.num > 0">
                <span class="reduce" @click="reduceNum(index)">-</span>
                {{item.num}}
                <span class="add" @click="addNum(index)">+</span>
              </p>
              <p style="float: right; margin-right: 10px" v-if="item.num == 0">
                <img src="../assets/cart.png" alt="" style="width: 26px;height: 26px;" @click="addGoods(index)">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart" v-if="totalNum >= 1">
      <span class="text-span">
        合计：
        <span>
          {{totalPrice}}
        </span>
        元
      </span>
      <div class="button" @click="confirmOrder()">
        去结算 >
        <span>{{totalNum}}</span>
      </div>
    </div>
	</div>
</template>

<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import $http from '../axios/http'
  export default {
    name: "List",
    data() {
      return {
        active: 0,
        classes: [
          {
            name: '饮料/水',
            key: 0
          },
          {
            name: '牛奶/酸奶',
            key: 1
          },
          {
            name: '热饮',
            key: 2
          },
          {
            name: '休闲零食',
            key: 3
          },
          {
            name: '方便面',
            key: 4
          },
          {
            name: '日用品',
            key: 5
          },
        ],
        menu: [
          {
            name: '娃哈哈',
            path: require('../assets/wahaha.jpg'),
            price: '1.5',
            num: 0,
            id: 1
          },
          {
            name: '雪碧',
            path: require('../assets/xuebi.jpg'),
            price: '3',
            num: 0,
            id: 2
          },
          {
            name: '水晶葡萄',
            path: require('../assets/aaa.jpg'),
            price: '5',
            num: 0,
            id: 3
          }
        ]
      }
    },
    methods: {

      // 切换分类
      getMenu(index) {
        this.active = index
      },

      // 点击购物车图片
      addGoods(index) {
        this.menu[index].num = 1;
        this.addToCart(this.menu[index]);
      },

      //点击加号
      addNum(index) {
        this.updateCart(this.menu[index]);
      },

      // 点击减号
      reduceNum(index) {
        if (this.menu[index].num > 1) {
        } else {
          this.menu[index].num = 0;
        }
        this.reduceCart(this.menu[index].name);
      },

      // 点击确认订单
      confirmOrder() {
        this.$router.push("/confirm")
      },

      // 获取菜单
      getMenuAll() {
        $http({
          url: 'restaurant/menu/all',
          method: 'get'
        }).then(res => {
          console.log(res,"菜单")
        },err => {
          console.log(err, "菜单")
        })
      },

      // 保证购物车中的菜和菜单中显示的数量一致
      confirmNum() {
        this.cartList.forEach((item) => {
          this.menu.forEach((item1) => {
            if(item.id == item1.id) {
              item1.num = item.num
            }
          })
        })
      },

      ...mapMutations(['addToCart', 'updateCart', 'reduceCart'])
    },
    computed: {
      ...mapGetters(['totalPrice', 'totalNum']),
      ...mapState({
        cartList: state=>state.goodsList
      })
    },
    mounted() {
      // this.getMenuAll()
      this.confirmNum()
    }
  };
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    z-index: 1;
    /*border-bottom: 1px solid #eee;*/
    background-color: #f50;
    color: #fff;
    text-align: center;
    line-height: 44px;
  }
  .sidebar{
    float: left;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    align-content:stretch;
    width: 25%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    background-color: #f7f7f7;
    padding-top: 44px;
    ul{
      list-style: none;
      text-align: center;
      li{
        color: #555;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        border-right: 1px solid #eee;
      }
      .active {
        color: #f50;
        font-weight: bold;
        border-left: 3px solid #f50;
        background-color: #fff;
      }
    }
  }
  .item{
    height: 100px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    .img-box{
      float: left;
      width: 25%;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      padding: 10px 5px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    h3{
      font-weight: normal;
      font-size: 16px;
      margin-top: 10px;
    }
    .bottom{
      width: 100%;
      margin-top: 13px;
      .price {
        color: #f50;
        font-weight: 600;

      }
      .reduce, .add{
         display: inline-block;
         width: 20px;
         height: 20px;
         text-align: center;
         line-height: 16px;
         border: 1px solid #f50;
         border-radius: 50%;
       }
      .reduce {
        color: #f50;
      }
      .add{
        color: #fff;
        background-color: #f50;
      }
    }

  }
  .cart {
    width: 100%;
    height: 60px;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 50px;
    z-index: 2;
    background-color: #fff;
    padding-left: 30%;
    line-height: 60px;
    .text-span {
      font-size: 16px;
      span{
        font-weight: 600;
        font-size: 22px;
      }
    }
    .button{
      border: 1px solid #f50;
      color: #f50;
      width: 100px;
      height: 35px;
      position: absolute;
      right: 7%;
      top: 22%;
      line-height: 33px;
      text-align: center;
      border-radius: 5px;
      span{
        position: absolute;
        top: -13px;
        right: -13px;
        display: block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        font-size: 14px;
        border-radius: 50%;
        background-color: #f50;
        color: #fff;
      }
    }
  }
</style>
