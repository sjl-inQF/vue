<template>
<div class="footer">
	<ul>
        <router-link
            tag="li"
            to="/home"
        >
        <a href="javascript:;"><i class="i1"></i><span>首页</span></a>
        </router-link>
    	
        <router-link
            tag="li"
            to="/follow"
        >
        <a href="javascript:;"><i class="i2"></i><span>寻宝</span></a>
        </router-link>
    </ul>
 <ul>
     <router-link
        tag="li"
        to="/user"
     >
      <a href="javascript:;"><i class="i3"></i><span>我的</span></a>
     </router-link>
     <router-link
     tag="li"
     to="/column"
     >
        <a href="javascript:;"><i class="i4"></i><span>购物车</span></a>
     </router-link>
 </ul>
    	
    
    <p></p>
</div>
</template>
<script>



</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
.footer{width:6.4rem;background:#fff;border-top:.01rem solid rgba(0,0,0,.15);height:.87rem;position:fixed;bottom:0;left:0;right:0;
		display:flex;justify-content:space-between;
}	
.footer ul{display:flex;justify-content:space-between;width:1.85rem;margin-top:.10rem;padding:0 0.5rem;}

.footer ul li a{display:block;}	
.footer ul li a i{display:block;width:.32rem;height:.32rem;background:url(../assets/img/2.png) no-repeat;background-size:.64rem 1.28rem;margin:0 auto;}	
.footer ul li a i.i1{background-position:-.32rem 0;}
.footer ul li a i.i2{background-position:0 -.32rem;}
.footer ul li a i.i3{background-position:0 -.64rem;}
.footer ul li a i.i4{background-position:0 -.96rem;}
.footer ul li a i.i1:active{background-position:-.32rem 0;}
.footer ul li a i.i2:active{background-position:-.32rem -.32rem;}
.footer ul li a i.i3:active{background-position:-.32rem -.64rem;}
.footer ul li a i.i4:active{background-position:-.32rem -.96rem;}


.footer ul li span{display:block;font:.24rem/.45rem "";color:#13be4b;}	
	
	
.footer p{width:1.01rem;height:1.01rem;position:absolute;left:0;right:0;bottom:0;margin:auto;border:.02rem solid #999;
	border-radius:50%;background: #fff url(../assets/img/3.png) no-repeat center;
}	
</style>
