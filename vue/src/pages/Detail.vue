<template>
    <div class="detail" >
        <div class="back">
            <i onclick="window.history.go(-1)">返回</i>
        </div>
        <div class="banneri" v-if="detail.detail">
            <img :src="`${baseUrl}${detail.detail.auth_icon.img1}`">
        </div>
        <div class="detail-describe" v-if="detail.detail">
            <p>{{detail.title}}</p>
            <span>￥{{detail.detail.price}}</span>
        </div>
        <div class="detail-comit">
           请选择颜色尺码 
        </div>
        <div class="choose-color">
            <span>颜色：</span><i>红色</i><i>黑色</i><i>黄色</i><i>绿色</i><br>
            <span>尺码：</span><i>36</i><i>37</i><i>38</i><i>39</i><br>
            <span>我要买：</span><s>-</s><input type="text"  class="put" placeholder="1"><s>+</s>
        </div>
        <div class="house">
            <img src="../assets/img/1.jpg"> <span class="house-name">小花坊</span><a class="house-follow">+关注</a>
     
        </div>
        <div class="detail-foot">
            <ul>
                <li>店铺</li>
                <li>客服</li>
                <li>收藏</li>
                <li class="car">加入购物车</li>
                <router-link to="/column">
                <li class="buy">立即购买</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name:"detail",
   
    data(){
        return {
            detail:{},
        }
    },

    created(){
        let id=this.$route.params.id;
        let dataName=this.$route.query.dataName;
        
        axios({
            url:`http://localhost:3000/api/${dataName}/${id}`
        }).then(
            // res=>console.log(res.data)
            res=>{this.detail=res.data.data
            // console.log(this.detail)
            }
        );

    },
   
}
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}

body{
    background:whitesmoke
}

.detail{
    position:relative;

}
.back{
    position:absolute;
    top:0;
    left:0;
    z-index:99;
    width:.8rem;
    height:.8rem;
    background:rgba(0,0,0,0.5);
    border-radius:.4rem;
    text-align:center;
    
}
.back i{
    font:.3rem/.8rem "";
    font-weight:900;
    color:#fff;

}
.banneri{
    width:100%;
}
.banneri img{
    width:6.4rem;
    height:6rem;
}
.detail-describe{
    width:100%;
    height:2rem;
    /* background:skyblue; */
}

.detail-describe p{
    margin-left:.2rem;
    font:.3rem/.5rem "";
}
.detail-describe span{
    margin-left:.2rem;
    font:.5rem/.5rem "";
    color:red;
}
.detail-comit{
    width:100%;
    height:.8rem;
    background:bisque;
      height:100%;
    font:.3rem/.6rem ""; 

}
.choose-color span{
    font:.26rem/.6rem "";
}
.choose-color i{
       font:.26rem/.6rem "";
       border:1px solid #000;
       margin-right:.08rem;
}
.choose-color  s{
    border:1px solid #ccc;
    font:.24rem/.6rem "";
 text-align:center;
}
.choose-color .put{
    width:.6rem;
    height:.6rem;
    border:1px solid #000;
    margin:0 .08rem;
    text-align:center;
}
.house{
    width:100%;
    height:2rem;
    margin-top:.6rem;
    background:bisque;
}
.house img{
    border-radius:.6rem;
    width:1.2rem;
    height:1.2rem;
}
.house .house-name{
    font:.3rem/.6rem "";
    
}
.house .house-follow{
    float:right;
    width:1.4rem;
    height:.6rem;
    color:red;
    font:.3rem/.6rem "";
    border:1px solid red;
    text-align:center;
}
.detail-foot{
    width:100%;
    height:.8rem;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    background:#ccc;
}

.detail-foot ul li{
    float:left;
    height:.8rem;
    font:.3rem/.8rem "";
    text-align:center;
    padding:0 .19rem;
    
}

.detail-foot .car{
    background:pink;
    color:red;

}
.detail-foot .buy{
    background:#ff55ee;
     color:red;
}

</style>


