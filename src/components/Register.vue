<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../../src/assets/person.png" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
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
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input
                            type="password"
                            class="form-control"
                            v-model.trim="confirmPassword"
                            >
                        </div>
                        <button class="btn btn-block btn-success">注册</button>
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
            confirmPassword:''
        }
    },
    methods:{
        onSubmit(){
            if(this.username!=='' && this.password!==''){
                if(this.password===this.confirmPassword ) {
                    const formData = {
                        username:this.username,
                        password:this.password
                    }
                    axios.post('/regist',formData)
                        .then(res =>this.$router.push({name:'loginLink'}))
                }else{
                    alert('两次密码不一致！')
                }
            }else{
                alert("用户名密码不能为空！")
            }
        }
    }
}
</script>