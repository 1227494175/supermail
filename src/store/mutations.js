export default {
    //这个类似于menthods方法
    addNum(state){
        state.count++
    },
    subNum(state){
        state.count--
    },
    //如果有参数的情况
    // addCount(state, count){
    //     state.count += count
    // },
    //playload风格
    addCount(state, playload){
        state.count += playload.count
    },
    addStu(state, stu){
        state.students.push(stu)
    },
    updateAges(state){
        state.students[0].age = 2000
    }
}