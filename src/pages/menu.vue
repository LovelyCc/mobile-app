<template>
	<div style="height: 100%">
    <van-nav-bar title="菜单"/>
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
      <p>{{totalPrice}}</p>
    </div>
	</div>
</template>

<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
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
            price: '2',
            num: 0
          },
          {
            name: '雪碧',
            path: require('../assets/xuebi.jpg'),
            price: '3',
            num: 0
          },
          {
            name: '水晶葡萄',
            path: require('../assets/aaa.jpg'),
            price: '5',
            num: 0
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
        // this.menu[index].num++;
        this.updateCart(this.menu[index]);
      },

      // 点击减号
      reduceNum(index) {
		    if(this.menu[index].num > 1){
          // this.menu[index].num--;
        }else {
          this.menu[index].num = 0;
        }
        this.reduceCart(this.menu[index].name);
      },

      ...mapMutations(['addToCart','updateCart','reduceCart'])
    },
    computed: {
      ...mapGetters(['totalPrice'])
    }
	}
</script>

<style scoped lang="less">
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
    z-index: -1;
    background-color: #f7f7f7;
    padding-top: 46px;
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
</style>
