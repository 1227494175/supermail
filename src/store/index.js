import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)

//
const state = {
    count: 1000,
    students: [
        {'name':'huangkun1','age':18},
        {'name':'huangkun2','age':28},
        {'name':'huangkun3','age':38},
    ]
}


const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        a: moduleA
    }
})

export default store

// 笔记：
// state 存放数据
// mutations 是类似methods ，处理的是同步方法， 提交采用commit
// getters 类似计算属性
// actions 用于处理异步方法， 搭配Promise使用，提交蚕蛹dispatch
// modules 数据都存放在state里面数据很多很杂乱，可以进行数据分模块存放

