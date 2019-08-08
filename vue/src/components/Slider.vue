<template>
<div class="banner">
  <!--  -->
  <ul class="clearfix">
    <router-link
     v-for="(item,index) of banner"
     :key="item._id"
      tag="li"
      :to="'/detail/'+item._id +'?dataName=banner'" 
    >
    <img :src="baseUrl+item.banner">
    <div class="text-box"><p>{{index+1}}{{item.title}}</p></div>
    </router-link>

    <!-- <router-link
      tag="li"
      to="/detail/2"
    >
    <img src="../assets/img/14.jpg">
    <div class="text-box">
    <p>运动库，清仓大甩卖</p>
    </div>
    </router-link> -->

    
    <!-- <router-link
      tag="li"
      to="/detail/3"
    >
   <img src="../assets/img/15.jpg"><div class="text-box"><p>弹性运动服，低价甩卖</p></div>
    </router-link> -->
  </ul>
</div>
</template>
<script>
import Swipe from "swipe";
import $ from "jquery";
  export default{
    props:["banner","dataName"],
    updated(){
      new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
    },
  }
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
.banner{
  margin-top:0.06rem;
	width:6.4rem;
	height:6rem;
  position:relative;
	overflow: hidden;
  
}
.banner ul li{
  width:6.4rem;
  height:6rem;
  float:left;
  position:relative;
}
.banner ul li img{
  display:block;
  width:100%;
  height:100%;
}
.banner ul li .text-box{
  width:5.8rem; 
  padding:0 0.3rem;
  height:1.24rem; 
  position:absolute; 
  left:0; 
  bottom:0; 
  color:#fff; 
  background:rgba(0,0,0,0.5);
  }
  .banner ul li .text-box p{
    font:.5rem/1.24rem "";
  }
</style>

