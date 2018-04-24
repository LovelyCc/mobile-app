import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsList: []
  },
  mutations: {

    // 加入购物车（之前没有）
    addToCart(state,data) {
      state.goodsList.unshift(data);
    },

    // 加入购物车（之前有）
    updateCart(state,data) {
      state.goodsList.forEach((item,index,self) => {
        if(item.name == data.name){
          item.num++;
          return;
        }
      })
    },

    // 从购物车减少
    reduceCart(state,name) {
      state.goodsList.forEach((item,index,self) => {
        if(item.name == name){
          if(item.num <= 1) {
            let index = self.indexOf(item);
            self.splice(index, 1);
          }else {
            item.num--;
          }
        }
      })
    },

    // 清空购物车
    clearCart(state) {
      state.goodsList = [];
    }
  },
  getters: {

    // 总价
    totalPrice: state => {
      let sum = 0;
      state.goodsList.forEach((item) => {
        sum += parseInt(item.price) * parseInt(item.num);
      })
      return sum;
    }
  }
})
