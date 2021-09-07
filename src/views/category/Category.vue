<template>
  <div>
    <h2>分类</h2>
    <h2>我修改了一些东西</h2>
  </div>
</template>

<script>
import {request} from "../../network/request";

export default {
  name: "Category",
  created() {
    request({
      url: '/test',
    }).then(res => {
      console.log(res);
    }).catch(err =>{
          console.log(err);
        })
  }
}
</script>

<style scoped>

</style>