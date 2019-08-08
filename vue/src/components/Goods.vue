<template>
<div id="case">
	<!-- <div class="goods-list">
			<router-link
			v-for="item of goods"
			:key="item._id"
			tag="div"
			:to="`/detail/${item._id}?dataName=${dataName}&&${titleName}`"
			>
			<img :src="baseUrl+item.img_list">
			</router-link>
	
	</div> -->
	<div class="goods-list">
		<img src="../assets/img/goods1.png">
		<img src="../assets/img/goods2.png">
		<img src="../assets/img/goods3.png">
		<img src="../assets/img/goods4.png">
	</div>
	<div class="goods-lie">
		<router-link to="/detail">
		<div><img src="../assets/img/goods5.jpg"><span>女装</span></div>
		<div><img src="../assets/img/goods6.jpg"><span>男装</span></div>
		<div><img src="../assets/img/goods7.jpg"><span>hot</span></div>
		<div><img src="../assets/img/goods8.jpg"><span>运动鞋</span></div>
		<div><img src="../assets/img/goods9.jpg"><span>休闲鞋</span></div>
		</router-link>
	</div>
</div>



<!-- <ul>
	<li>
		<router-link
		to="/detail/3"
		>
    	<a href="javascript:;"><img src="../assets/img/13.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p><p class="p1">￥299</p></a>
		</router-link>
    </li>
	<li>
		<router-link
		to="/detail/4"
		>
    	<a href="javascript:;"><img src="../assets/img/14.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p><p class="p1">499</p></a>
		</router-link>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/15.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p><p class="p1">￥399</p></a>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/16.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p><p class="p1">￥199</p></a>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/13.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p><p class="p1">￥99</p></a>
    </li>
	<li>
    	<a href="#"><img src="../assets/img/14.jpg"><p>电脑是哦阿凡达欧赔无法收代理费</p><p class="p1">￥599</p></a>
    </li>
	
</ul> -->



</template>
<script>
export default {
	name:"goods",
	// props:["goods","dataName","titleName"]
}
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}

#case{padding:0.4rem 0 .4rem;}
#case .goods-list{
	width:100%;
	height:2rem;
}
#case .goods-list div{
	width:1.6rem;
	height:2rem;
	float:left;
	text-align:center;

}

#case .goods-list div img{
	width:1.4rem;
	height:2rem;
		border-radius:.2rem;
}
#case .goods-lie{
	width:100%;
	height:2rem;
	background:skyblue;
}
#case .goods-lie div{
	width:1.1rem;
	height:1.9rem;
	float:left;
margin:0.04rem .09rem;
}
#case .goods-lie div img{
	width:1rem;
	height:1rem;
	border-radius:.5rem;
}
#case .goods-lie div span{
	display:inline-block;
	width:1rem;
	height:.8rem;
	text-align:center;
	font:.3rem/.8rem "";
}

/* #case ul {display:flex;justify-content:space-between;flex-wrap:wrap;}
#case ul li{width:3.13rem;border:.01rem solid #e5e5e5;margin:.05rem 0;}
#case ul li a{display:block;}	
#case ul li a img{display:block;width:3.13rem;height:3.13rem;border-bottom:.01rem solid #e5e5e5;}
#case ul li a .p1{
    color:red;
}
#case ul li a p{font:.24rem/.58rem "";color:#333;margin-left:.2rem;width:2.34rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;} */
</style>


