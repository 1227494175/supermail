<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar"
}
</script>

<style scoped>
  @import "../../assets/css/base.css";
  .tab-bar {
    display: flex;
    text-align: center;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>