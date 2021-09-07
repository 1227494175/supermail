<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-title"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'deepPink'
    }
  },
  data(){
    return{
      // isActive: false
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    height: 49px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }


</style>