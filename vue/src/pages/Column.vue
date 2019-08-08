<template>
    <div class="car">
        <div class="car-name">
            <i class="car-back" onclick="window.history.go(-1)">返回</i>
            <span class="shopcar">购物车</span>
        </div>
    
          <div class="car-list">
                <div class="car-list-e">
                  <div class="namei">如风美妆</div>
                  <img src="../assets/img/goods1.png">
                  <sapn class="des">韩国本土 雪花秀套装 水乳两件套 三件套</sapn>
                  <p>$23</p>
                  <i>-</i>
                  <input type="text" class="add" placeholder="1">
                  <i>+</i>
                </div>
          </div>
            <div class="delete" >删除</div>
      <!-- <div class="car-list">
                <div class="car-list-e">
                  <div class="namei">如风美妆</div>
                  <img src="../assets/img/goods1.png">
                  <sapn class="des">韩国本土 雪花秀套装 水乳两件套 三件套</sapn>
                  <p>$23</p>
                  <i>-</i><input type="text" class="add" placeholder="1"><i>+</i>
                </div>
          </div>
            <div class="delete">删除</div> -->
       

    
   
    </div>
</template>
<script>

export default {
  
}
</script>
<style scoped>
@charset "utf-8";
html{font-size:15.625vw;}
.car-name{
    width:100%;
    height:1rem;
    background:cadetblue;
    text-align:center;
    position:relative;
}
.car-name .car-back{
    position:absolute;
    left:0;
    top:0.16rem;
    width:.6rem;
    height:.6rem;
    text-align:center;
    font:.26rem/.6rem "";
    background:rgba(0, 0, 0, 0.5);
    border-radius:.3rem;
    color:#fff;
}
.car-name .shopcar{
    font:.3rem/.8rem "";
}
.car-list{
    width:6rem;
    height:3rem;
    margin:0 auto;
    border-bottom:1px solid #ccc;
}
.car-list .car-list-e {
    width:6rem;
    height:3rem;
    
}
.car-list-e .namei{
    font:.4rem/.8rem "";
}
.car-list-e img{
    width:1.3rem;
    height:1.3rem;
}
.car-list-e  .des{
    width:4rem;
    height:1.3rem;
    font:.26rem/.8rem "";
    margin-left:.04rem;
}
.car-list-e p{
     font:.26rem/.8rem "";
     color:red;
     display:inline-block;
     margin-right:4rem;
}
.car-list-e i{
    width:.6rem;
    height:.6rem;
    text-align: center;
    border:1px solid #ccc;
}
.car-list-e  .add{
    width:.6rem;
    height:.4rem;
    border:1px solid #000;
    text-align: center;
    margin:0 .08rem;
}
.car .delete{
    text-align:center;
    display:block;
    width:80%;
    height:.6rem;
    font:.3rem/.6rem "";
    margin:.2rem auto;
    background:#ccc;
}
</style>
