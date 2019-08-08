<template>
  <div class="user">
      <div class="user-header"><img :src="baseUrl + user.icon"></div>
      <div class="user-body">
        <span class="user-name">昵称</span>
        <span>|</span>
        <span class="user-logout" @click="logout">注销</span>
      </div>
        <ul class="user-list">
          <li>我的足迹<i>></i></li>
          <li>我的收藏<i>></i></li>
          <li>我的信息<i>></i></li>
          <li>我的设置<i>></i></li>
        </ul>
  </div>
</template>

<script>
import router from "../plugins/router";
export default {
  name:"user",
  data(){
    return {
      user:{},
    }
  },
  beforeRouteEnter(to,from,next){
    axios({
      url:"http://localhost:3000/api/user"
    }).then(
      res=>{
        // console.log(res.data.err,12334,"res.data.err");
        if(res.data.err===1){
          next(_this=>_this.user=res.data.data)
          console.log("dfdsfsf" );
           
        }else{
          // this.$router.push('/login')//cuo
          router.push('/login')
            
          // next('/login')
        }
      }
    )
  },
    methods:{
      logout(){
        axios({
          url:"http://localhost:3000/api/logout",
          method:'delete'
        }).then(
          res=>res.data.err===0&&this.$router.push('/login')
        )
      }
    }
}
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
  .user .user-header{
    width:1.6rem;
    height:1.6rem;
    margin:0 auto;
    margin-top:.8rem;

  }
  .user .user-header img{
    width:1.6rem;
    height:1.6rem;
    border-radius:.8rem;
  }
  .user .user-body{
    text-align:center;
  }
    
  .user span{
    font:.3rem/.6rem "";
  }
  .user  .user-list{
    margin-top:1rem;
  }
  .user  .user-list li{
    width:6rem;
    height:.8rem;
    font:.3rem/.8rem "";
    border-top:1px solid #000;
    margin:0 auto;
    color:#000;
  }
    .user  .user-list li i{
      font:.3rem/.8rem "";
      float:right;
    }
</style>

