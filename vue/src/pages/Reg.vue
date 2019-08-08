<template>
    <div class="reg">
        <h3>注册</h3>
        <input type="file" ref="f1">
        <div class="reg-msg">
            <input type="text" class="reg-name" placeholder="用户名" v-model="username">
            <input type="text" class="reg-pas" placeholder="密码" v-model="password">
        </div>

        <router-link 
        to="/login"
        >
        <span class="deng">用户登录</span>
        </router-link>


       
        <input type="button" class="reg-btn" value="注册" @click="reg">
       
    </div>
</template>
<script>
export default {
      data(){
    return {
      username:'',
      password:'',
      mess:''
    }
  },
  methods:{
    reg(){
      let formData = new FormData();
      formData.append('username',this.username)
      formData.append('password',this.password)
      formData.append('icon',this.$refs.f1.files[0])
      // formData.append('nikename','不传了')

      axios({
        url:'http://localhost:3000/api/reg',
        method:'post',
        data:formData
      }).then(
        res => res.data.err===0 ? this.$router.push('/login') : this.mess = res.data.msg
      )

    }
  }
}
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
    .reg h3{
        width:100%;
        height:2rem;
        text-align:center;
        font:.6rem/2rem "";
    
    }
    .reg input{
        width:4rem;
        height:.6rem;
        border:1px solid #000;
        margin:.2rem 1.1rem;
        font:.3rem/.6rem "";
    }
    .reg .deng{
        font:.26rem/.6rem "";
        margin:.2rem 2.4rem;
    }
    .reg-btn{
        width:2rem;
        height:.8rem;
        background:brown;
        border:none;
        color:#fff;
    }
</style>
