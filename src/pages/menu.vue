<template>
	<div style="height: 100%">
    <van-nav-bar title="菜单"/>
    <div class="sidebar">
      <ul>
        <li v-for="(item,index) in classes" @click="getMenu(index)" :class="{'active': item.key == active}">{{item.name}}</li>
      </ul>
    </div>
	</div>
</template>

<script>
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
        ]
			}
		},
    methods: {
		  getMenu(index) {
		    this.active = index
      }
    }
	}
</script>

<style scoped lang="less">
  .sidebar{
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    align-content:stretch;
    width: 96px;
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
</style>
