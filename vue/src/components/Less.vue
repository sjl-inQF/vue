<template>
 <div id="case">
    <ul>
		<router-link
			v-for="item of list"
			tag="li"
			:key="item._id"
			:to="`/detail/${item._id}?dataName=${dataName}`"
			> 	
			<a href="javascript:;">
				<img :src="baseUrl+item.list_img">
				<p>{{item.title}}</p>
				<p class="p1">￥{{item.detail.price}}</p>
			</a>
			</router-link>
   	</ul>
</div>


</template>
<script>
export default {
	name:"list",
	props:["list","dataName"]
}
</script>
<style scoped>
#case ul {display:flex;justify-content:space-between;flex-wrap:wrap;}
#case ul li{width:3.13rem;border:.01rem solid #e5e5e5;margin:.05rem 0;}
#case ul li a{display:block;}	
#case ul li a img{display:block;width:3.13rem;height:3.13rem;border-bottom:.01rem solid #e5e5e5;}
#case ul li a .p1{
    color:red;
}
#case ul li a p{font:.24rem/.58rem "";color:#333;margin-left:.2rem;width:2.34rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
</style>
</style>

