<template>
  <div id="app">
    <router-view></router-view>
    <tabBar>
      <tabBarItem path="/home">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5009130.jpg" slot="tab-img">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5009130.jpg" slot="tab-img-active">
        <div slot="tab-title">首页</div>
      </tabBarItem>
      <tabBarItem path="/category" activeColor="blue">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5009118.jpg" slot="tab-img">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5009130.jpg" slot="tab-img-active">
        <div slot="tab-title">分类</div>
      </tabBarItem>
      <tabBarItem path="/cart" activeColor="blue">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5009086.jpg" slot="tab-img">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5009130.jpg" slot="tab-img-active">
        <div slot="tab-title">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile" activeColor="blue">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5008976.jpg" slot="tab-img">
        <img src="https://i.52112.com/icon/jpg/256/20210507/117704/5009130.jpg" slot="tab-img-active">
        <div slot="tab-title">我的</div>
      </tabBarItem>
    </tabBar>
  </div>
</template>

<script>
import tabBar from "./components/tab/tabBar";
import tabBarItem from "./components/tab/tabBarItem";

export default {
  name: 'app',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>
