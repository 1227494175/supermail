export default {
    state: {
        message: 'hello'
    },
    mutations: {
        aupdateName(state) {
            state.message = 'lisi'
        },
        upName(state){
            state.message = 'wangwu'
        }
    },
    //多了个rootState参数，可以获取父亲的参数
    getters: {
        modifyName(state,getters,rootState){
            console.log(rootState);
            return state.message += '111'
        }
    },
    actions: {
        axName(context){
            console.log(context);
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                    context.commit('upName')
                    resolve()
                }, 1000)
            })
        }
    }
}