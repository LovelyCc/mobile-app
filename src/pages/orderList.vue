<template>
	<div style="background-color: #eee;">
    <van-nav-bar
      title="订单"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      style="border-bottom: 1px solid #eee"
    />
	</div>
</template>

<script>
	export default {
		name: "orderList",
		data() {
			return {

			}
		},
    methods: {
      onClickLeft() {
        this.$router.goBack();
      },
    }
	}
</script>

<style>
</style>
