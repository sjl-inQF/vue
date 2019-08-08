<template>
<div id="case">
	<h3>hot热卖专区</h3>
<ul>
		<router-link 
		v-for="(item,index) of list" 
		tag="li"
		:key="item._id"
		:to="`/detail/${item._id}?dataName=${dataName}`">
    	<a href="javascript:;"><img :src="baseUrl+item.list_img"><p>{{index+1}}.{{item.title}}</p></a>
		</router-link>

	<!-- <li>
		<router-link to="/detail/2">
    	<a href="javascript:;"><img src="../assets/img/12.jpg"><p>{{index+1}}.{{item.title2}}</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/3">
    	<a href="#"><img src="../assets/img/6.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/4">
    	<a href="#"><img src="../assets/img/7.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/5">
    	<a href="#"><img src="../assets/img/9.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/6">
    	<a href="#"><img src="../assets/img/10.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li> -->
</ul>
	<h3>女装</h3>
<ul>
	<li>
		<router-link to="/detail/7">
    	<a href="#"><img src="../assets/img/17.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/8">
    	<a href="#"><img src="../assets/img/18.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/9">
    	<a href="#"><img src="../assets/img/19.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/10">
    	<a href="#"><img src="../assets/img/20.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/11">
    	<a href="#"><img src="../assets/img/21.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/12">
    	<a href="#"><img src="../assets/img/22.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
</ul>
<h3>男装</h3>
<ul>
	<li>
		<router-link to="/detail/13">
    	<a href="#"><img src="../assets/img/23.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
		<router-link to="/detail/14">
    	<a href="#"><img src="../assets/img/24.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
		</router-link>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/25.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/26.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/27.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/28.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p></a>
    </li>
</ul>


</div>
</template>


<script>
	export default{
		props:['list','dataName']
	}
</script>

<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
#case{padding:0.59rem 0 .88rem;}
#case h3{
	width:100%;
	height:.6rem;
	font:.4rem/.6rem "";
	font-weight:900;
	text-align:center;
}
#case ul {display:flex;justify-content:space-between;flex-wrap:wrap;}
#case ul li{width:3.13rem;border:.01rem solid #e5e5e5;margin:.05rem 0;}
#case ul li a{display:block;}	
#case ul li a img{display:block;width:3.13rem;height:3.13rem;border-bottom:.01rem solid #e5e5e5;}
#case ul li a p{font:.24rem/.58rem "";color:#333;margin-left:.2rem;width:2.34rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}

</style>

