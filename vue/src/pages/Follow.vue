<template>
<div id="case">
  <!-- <Goods :goods="goods"   dataName="follow" titleName="goods"></Goods> -->
  <!-- <Lie   :lie="lie"     dataName="follow" titleName="lie"></Lie> -->
    <div class="goods-list">
		<div><img src="../assets/img/goods1.png"></div>
		<div><img src="../assets/img/goods2.png"></div>
		<div><img src="../assets/img/goods3.png"></div>
		<div><img src="../assets/img/goods4.png"></div>
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
  <Less  :list="list" dataName="home"></Less>
</div>
</template>
<script>
// import Goods from "@/components/Goods"
// import Lie from "@/components/Lie"
import Less from "@/components/Less"
export default {
    name:"home",
    // props:['list','dataName'],
   	 data(){
         return {
  
            dataName:[],
            list:{},
       
            }
        },
    mounted(){
		axios({
            url:"http://localhost:3000/api/home"
        }).then(
            res=>this.list=res.data.data
        );
    
         
    },
    components:{Less}
 
}
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
#case{padding:0.4rem 0 .4rem;}
#case .goods-list{
	width:100%;
	height:2rem;
    margin-bottom:.08rem;
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
</style>


