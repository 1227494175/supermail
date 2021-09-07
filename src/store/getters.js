export default {
    //这个类似于计算属性
    filterAge(state){
        return state.students.filter(stu => stu.age >18)
    },
    //如果带有参数就需要返回一个方法
    diyAge(state){
        // return function (age){
        //     return state.students.filter(stu => stu.age > age)
        // }
        return age => state.students.filter(stu => stu.age > age)

    }
}