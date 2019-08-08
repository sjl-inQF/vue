<template>
    <div class="home">
        <Slider :banner="banner" dataName="home"></Slider>
        <List :list="list" dataName="home"></List>
    </div>
</template>
<script>
import Slider from "@/components/Slider"
import List from "@/components/List"
export default {
     name:"home",
        data(){
            return {
                list:{},
                banner:{},
            }
        },
        components:{Slider,List},
       
        
        mounted(){
            axios({
                url:"http://localhost:3000/api/home",
                params:{_page:1,_limit:10}
            }).then(
                // res=>console.log(res.data)
               res=>{this.list=res.data.data}
            )



             axios({
                url:"http://localhost:3000/api/banner",
                params:{_page:1,_limit:3}
            }).then(
               res=>this.banner=res.data.data
            )

        }


     // mounted(){
        //     setTimeout(()=>{
        //         document.documentElement.scrollTop=1000
        //     },0)
        // },
}

</script>
<style scoped>

</style>


