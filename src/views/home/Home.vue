<template>
  <div>
    <h2>首页</h2>
    <h2>-----------------演示modules里面的模块内容-----------</h2>
<!--    <h2>{{$store.state.a.message}}</h2>-->
    <h2>{{$store.getters.modifyName}}</h2>
    <button @click="ybName">异步修改</button>
    <button @click="xgName">修改名字</button>
    <h2>-------------------------------------------------</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="addAnyNum(5)">add</button>
    <button @click="addObje">addObje</button>
    <h2>{{$store.getters.filterAge}}</h2>
    <h2>{{$store.getters.diyAge(28)}}</h2>
    <button @click="xgAge">action异步操作</button>
    <hr>
    <button @click="add">+</button><button @click="sub">-</button>
  </div>

</template>

<script>


export default {
  name: "Home",
  data(){
    return {
      stu: {'name':'test','age':55}
    }
  },
  methods:{
    add(){
      this.$store.commit('addNum')
    },
    sub(){
      this.$store.commit('subNum')
    },
    // addAnyNum(count) {
    //   this.$store.commit('addCount', count)
    // },
    //playload风格
    addAnyNum(count) {
      this.$store.commit({
        type: 'addCount',
        count,
      })
    },
    addObje() {
      this.$store.commit('addStu', this.stu)
    },
    xgAge(){
      this.$store.dispatch('updateAge').then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    xgName(){
      this.$store.commit('aupdateName')
    },
    ybName(){
      this.$store.dispatch('axName').then(
          () => {
            console.log('成功！');
          }
      )
    }

  }
}
</script>

<style scoped>

</style>