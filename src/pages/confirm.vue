<template>
    <div style="background-color: #eee;">
      <van-nav-bar
        title="确认订单"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="border-bottom: 1px solid #eee"
      />
      <div class="footer">
        <div class="button">提交订单</div>
        <div class="money">
          合计<span> ￥ {{totalPrice}}</span>
        </div>
      </div>

      <div style="margin-bottom: 50px; margin-top: 46px;">
        <van-cell-swipe :right-width="75"
                        v-for="(item, index) in cartList"
                        :key="index"
                        class="item"
                        :on-close="onClose">
          <div class="img-box">
            <img :src='item.path' alt="">
          </div>
          <div style="float: right; width: 75%; height: 100%; padding: 10px 5px;">
            <h3>{{item.name}} <span>￥{{item.price}}</span></h3>
            <div class="bottom">

              <p style="float: right; margin-right: 10px">
                <span style="margin-right: 10px; color: #666; font-size: 13px">x</span>
                <span class="reduce" @click="reduceNum(index)">-</span>
                {{item.num}}
                <span class="add" @click="addNum(index)">+</span>
              </p>
            </div>
          </div>
          <span slot="right" class="slot" @click="clickDel(index)">删除</span>
        </van-cell-swipe>
      </div>
    </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
    export default {
        name: "conform",
      data() {
        return {
          delIndex: ''
        }
      },
      methods: {
        onClickLeft() {
          this.$router.goBack();
        },

        clickDel(index) {
          this.delIndex = index;
        },

        // 点击删除
        onClose(clickPosition, instance) {
          switch (clickPosition) {
            case 'left':
              break;
            case 'cell':
              break;
            case 'outside':
              instance.close();
              break;
            case 'right':
              this.$dialog.confirm({
                message: '确定删除吗？'
              }).then(() => {
                this.reduceOne(this.delIndex);
                instance.close();
              },() => {
                instance.close();
              });
              break;
          }
        },

        //点击加号
        addNum(index) {
          this.updateCart(this.cartList[index]);
        },

        // 点击减号
        reduceNum(index) {
          if (this.cartList[index].num > 1) {
            this.reduceCart(this.cartList[index].name);
          } else {

          }
        },
        ...mapMutations(['addToCart', 'updateCart', 'reduceCart', 'reduceOne'])
      },
      computed: {
        ...mapGetters(['totalPrice', 'totalNum']),
        ...mapState({
          cartList: state=>state.goodsList
        })
      }
    }
</script>

<style scoped lang="less">
.footer{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 9;
  .button {
    float: right;
    width: 25%;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 17px;
    background-color: #f50;
  }
  .money{
    float: right;
    width: 75%;
    height: 100%;
    text-align: right;
    line-height: 50px;
    padding-right: 20px;
    font-size: 14px;
    color: #666;
    span{
      color: #000;
      font-weight: 600;
      font-size: 16px;
    }
  }
}
.item{
  height: 85px;
  overflow: hidden;
  background-color: #fff;
  .slot{
    display: block;
    width: 75px;
    text-align: center;
    color: #fff;
    line-height: 85px;
    background-color: #f44;
    font-size: 15px;
  }
  .img-box{
    float: left;
    width: 25%;
    text-align: center;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 5px;
    img{
      height: 100%;
    }
  }
  h3{
    font-weight: normal;
    font-size: 17px;
    margin-top: 5px;
    span{
      font-size: 15px;
      float: right;
      margin-right: 8%;
      font-weight: 600;
    }
  }
  .bottom{
    width: 100%;
    margin-top: 5px;
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
