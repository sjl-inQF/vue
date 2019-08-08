<template>
  <div id="app">
    <Loading v-show="$root.$data.bLoading"></Loading>
    <Header v-show="$root.$data.bNav"></Header>
    <router-view></router-view>
    <Footer v-show="$root.$data.bFoot"></Footer>
 

  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import Loading from './components/Loading'

export default {
  name: 'app',
    watch:{
    $route:{
      handler({path}){
        console.log('app',path)
        //home/follow/column true true
        //user/ false true
        //login/reg/detail false false

        if(/home|follow|column/.test(path)){
          this.$root.$data.bNav=true;
          this.$root.$data.bFoot=true;
        }
        if(/user/.test(path)){
          this.$root.$data.bNav=false;
          this.$root.$data.bFoot=true;
        }
        if(/login|reg|detail/.test(path)){
          this.$root.$data.bNav=false;
          this.$root.$data.bFoot=false;
        }

      },
      immediate:true
    }
  },
  components:{
  Loading, Header,Footer
  }
}
</script>


