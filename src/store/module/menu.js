const state = {
    menuItems:{}
}

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations = {
    setMenuItems(state,data){
        state.menuItems = data
    },
    //将匹配的对象，在数组中删除
    removeMenuItems(state,data){
        state.menuItems.splice(state.menuItems.indexOf(data),1)
    },
    //将新添加的pizza Push到menuItems属性中
    pushToMenuItems(state,data){
        state.menuItems.push(data)
    }
}

const actions = {

}

export default{
    state,
    getters,
    mutations,
    actions
}