export default {
    updateAge(context){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('updateAges')
                // resolve('修改成功')
                reject('修改失败')
            },3000)
        })
    }
}