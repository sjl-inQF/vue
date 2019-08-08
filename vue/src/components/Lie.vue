<template>
<div id="case">
    <div class="goods-lie">
		<router-link 
		v-for="item of lie"
		tag="div"
		:key="item._id"
	
		:to="{name:'detail',params:{id:item._id},query:{dataName:'follow',titleName:'lie'}}"
		>
			<!-- :to="`/detail/${item._id}?dataName=${dataName}&&${titleName}`" -->
		<img :src="baseUrl+item.list_img"><span>{{item.title}}</span>
		<!-- <div><img src="../assets/img/goods6.jpg"><span>男装</span></div>
		<div><img src="../assets/img/goods7.jpg"><span>hot</span></div>
		<div><img src="../assets/img/goods8.jpg"><span>运动鞋</span></div>
		<div><img src="../assets/img/goods9.jpg"><span>休闲鞋</span></div> -->
		</router-link>
	</div>
</div>
</template>
<script>
export default {
	name:"lie",
	props:["lie","dataName","titleName"]
}
</script>
<style>
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
</style>

