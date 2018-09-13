import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu'
import users from './module/users'


Vue.use(Vuex)

export const store = new Vuex.Store({
    // state:{
    //     //设置属性
    // },
    // getters:{
    //     //获取属性状态
    // },
    // mutations:{
    //     //改变属性的状态
    // },
    // actions:{
    //     //应用mutations
    // },
    modules:{
        menu,
        users,
        status
    }

})