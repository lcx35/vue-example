<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../../src/assets/person.png" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input
                            type="email"
                            class="form-control"
                            v-model.trim="username"
                            >
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input
                            type="password"
                            class="form-control"
                            v-model.trim="password"
                            >
                        </div>
                        <button class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            username:'',
            password:'',
            token: ''
        }
    },
    computed:{
 
    },
    methods:{
        onSubmit(){
           if(this.username!=='' && this.password!=='') {
                const formData = {
                    username:this.username,
                    password:this.password
                }
                axios.post('/login',formData)
                    .then(res =>{
                        //console.log(res)
                        if(res.data.status===1){
                            //console.log(res.data.token)
                            //console.log(res.headers.token)
                            this.$store.dispatch("setUser",formData.username)
                            this.$store.commit("userToken",res.headers.token)
                            alert('登录成功')
                            this.$router.push({name:'homeLink'})
                        }else{
                            this.$store.dispatch("setUser",null,'')
                            alert('登录失败')
                        }
                    })
            }else{
                alert('用户名密码不能为空！')
            }
        }
    }
}
</script>