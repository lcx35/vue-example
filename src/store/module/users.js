const state = {
    usertoken:null,
    currentUser:null,
    isLogin:false
}

const getters = {
    User:state => state.currentUser,
    Token:state => state.usertoken,
    Login(state){
        if(!state.isLogin){
            state.isLogin=sessionStorage.getItem('isLogin')
            state.currentUser=sessionStorage.getItem('currentUser')
            state.usertoken=sessionStorage.getItem('usertoken')
        }
        return state.isLogin
    }
}

const mutations = {
    userStatus(state,user){
        if(user){
            sessionStorage.setItem("currentUser", user);
            sessionStorage.setItem("isLogin",true); 
            state.currentUser = user
            state.isLogin = true
        }else{
            state.currentUser = null
            state.isLogin = false
        }
    },
    userToken(state,token){
        if(token){
            sessionStorage.setItem("usertoken",token);
            state.usertoken = token
        }else{
            state.usertoken = null
        }
    },
    quit(state,isLogin){
        if(isLogin===false){
            sessionStorage.removeItem("currentUser")
            sessionStorage.removeItem("isLogin")
            sessionStorage.removeItem("usertoken")
            state.currentUser = null
            state.isLogin = false
            state.usertoken = null
        }
    }
}

const actions = {
    setUser({commit},user){
        commit("userStatus",user)
    },
    quit({commit},isLogin){
        commit("quit",isLogin)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}