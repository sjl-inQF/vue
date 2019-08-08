import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);


import Home from "../pages/Home.vue";
import Error from "../pages/Error.vue";
import Column from "../pages/Column.vue";
import Follow from "../pages/Follow.vue";
import User from "../pages/User.vue";
import Login from "../pages/Login.vue";
import Reg from "../pages/Reg.vue";
import Detail from "../pages/Detail.vue";
let routes=[
    {name:"home",path:"/home",component:Home},
    {name:"follow",path:"/follow",component:Follow},
    {path:"/column",component:Column},
    {name:"user",path:"/user",component:User},
    {path:"/login",component:Login},
    {path:"/reg",component:Reg},
    {name:"detail",path:"/detail/:id",component:Detail},
    {path:"/",redirect:'/home'},
    {path:"*",component:Error},
]


let router=new VueRouter({routes});
export default router;