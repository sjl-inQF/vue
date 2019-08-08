<template>
    <div class="login">
        <h3>登录</h3>
        <div class="login-msg">
            <input type="text" class="login-name" placeholder="用户名" v-model="username">
            <input type="text" class="login-pas" placeholder="密码" v-model="password">
        </div>
        <router-link
        to="/reg"
        >
        <span class="zhu">用户注册</span>
        <div class="mess">{{mess}}</div>
        </router-link>

       
        <input type="button" class="login-btn" value="登录" @click="login">
     
    </div>
</template>
<script>

export default {
    data(){
        return {
            username:"",
            password:"",
            mess:"",
        }
    },
    methods:{
        login(){
            axios({
                url:"http://localhost:3000/api/login",
                method:"post",
                data:{
                    username:this.username,
                    password:this.password
                    }
            }).then(
                res=>{
                   
                    if(res.data.err===0){
                         console.log('1', )
                         this.mess=res.data.msg
                        this.$router.push('/user')
                        
                    }else{
                        this.mess=res.data.msg
                    }
                }
            )
        }
    }
}
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
    .login h3{
        width:100%;
        height:2rem;
        text-align:center;
        font:.6rem/2rem "";
    
    }
    .login input{
        width:4rem;
        height:.6rem;
        border:1px solid #000;
        margin:.2rem 1.1rem;
        font:.3rem/.6rem "";
    }
    .login .zhu{
        font:.26rem/.6rem "";
        margin:.2rem 2.4rem;
    }
    .login .mess{
         font:.26rem/.6rem "";
        margin:.2rem 2.4rem;
    }
    .login-btn{
        width:2rem;
        height:.8rem;
        background:brown;
        border:none;
        color:#fff;
    }
</style>
