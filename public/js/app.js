webpackJsonp([1],{100:function(e,t){},101:function(e,t){},102:function(e,t){},104:function(e,t,n){n(102);var s=n(6)(n(76),n(112),"data-v-f5d779a8",null);e.exports=s.exports},105:function(e,t,n){n(101);var s=n(6)(n(77),n(111),"data-v-7e1223ac",null);e.exports=s.exports},106:function(e,t,n){n(99);var s=n(6)(n(78),n(109),"data-v-32c40211",null);e.exports=s.exports},107:function(e,t,n){n(98);var s=n(6)(n(79),n(108),"data-v-24937077",null);e.exports=s.exports},108:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg"},[n("el-row",{staticClass:"row-bg",attrs:{type:"flex",align:"middle"}},[n("el-col",{attrs:{md:{offset:7,span:10},sm:{offset:6,span:12},xs:{offset:2,span:20}}},[n("el-card",{staticClass:"card card-login"},[n("el-tooltip",{staticClass:"item",attrs:{content:"Informe um email válido!",placement:"top-start"}},[n("el-input",{staticClass:"inputs",class:{warning:!e.emailV,success:e.emailV},attrs:{id:"emailInput",placeholder:"Usuário",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),n("el-input",{staticClass:"inputs",class:{warning:!e.passwordV,success:e.passwordV},attrs:{id:"passwordInput",type:"password",placeholder:"Senha"},on:{enter:function(t){e.request()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("div",{staticClass:"buttons"},[n("el-button",{attrs:{size:"small",type:"danger"}},[e._v("Cancelar")]),e._v(" "),n("el-button",{attrs:{size:"large",type:"success"},on:{click:function(t){e.request()}}},[e._v("Entrar")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},109:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n    To dentro do Pedido\n")])},staticRenderFns:[]}},110:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{class:{items:!0,"silver-bg":!0}},[n("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0}},[n("div",{staticClass:"item",on:{click:function(t){e.display(e.menu.op1.link,t)}}},[n("i",{staticClass:"material-icons"},[e._v(e._s(e.menu.op1.icon))]),n("p",[e._v(e._s(e.menu.op1.texto))])])]),e._v(" "),n("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(t){e.display(e.menu.op2.link)}}},[n("div",{staticClass:"item",on:{click:function(t){e.display(e.menu.op2.link,t)}}},[n("i",{staticClass:"material-icons"},[e._v(e._s(e.menu.op2.icon))]),n("p",[e._v(e._s(e.menu.op2.texto))])])]),e._v(" "),n("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(t){e.display(e.menu.op3.link)}}},[n("div",{staticClass:"item",on:{click:function(t){e.display(e.menu.op3.link,t)}}},[n("i",{staticClass:"material-icons"},[e._v(e._s(e.menu.op3.icon))]),n("p",[e._v(e._s(e.menu.op3.texto))])])])],1)},staticRenderFns:[]}},112:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home dark-white-bg"},[n("el-row",{class:{home:!0,"dark-white-bg":!0}},[n("el-col",{class:{menu:!0,"light-gray-bg":!0},attrs:{span:4}},[n(e.menu,{tag:"component",attrs:{nivel:e.nivel},on:{opcao:e.principal}})],1),e._v(" "),n("el-col",{class:{content:!0},attrs:{span:20}},[n(e.opcao,{tag:"component"})],1)],1)],1)},staticRenderFns:[]}},30:function(e,t,n){"use strict";var s=n(3),a=n(113),i=n(104),o=n.n(i),c=n(107),l=n.n(c);s.default.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Login",component:l.a},{path:"/home",name:"Home",component:o.a}]})},33:function(e,t){},34:function(e,t,n){n(100);var s=n(6)(n(75),n(110),null,null);e.exports=s.exports},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(105),a=n.n(s),i=n(106),o=n.n(i);t.default={data:function(){return{menu:a.a,nivel:window.sessionStorage.getItem("nivel"),opcao:""}},methods:{principal:function(e){switch(e[0]){case"pedidos":this.opcao=o.a;break;case"estoque":case"opcoes":case"lanches":case"refeicao":this.opcao=""}}},components:{Menu:a.a,Pedidos:o.a}}},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["nivel"],data:function(){return{menu:"",cantina:{op1:{texto:"PEDIDOS",link:"pedidos",icon:"receipt"},op2:{texto:"ESTOQUE",link:"estoque",icon:"store_mall_directory"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}},pais:{op1:{texto:"LANCHES",link:"lanches",icon:"local_pizza"},op2:{texto:"REFEIÇÃO",link:"refeicao",icon:"restaurant"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}}}},methods:{display:function(e,t){var n=t.target;"div"!==t.target.localName&&(n=t.target.parentElement);var s=document.getElementsByClassName("light-black-bg");[].forEach.call(s,function(e){e.classList.remove("light-black-bg")}),n.classList.add("light-black-bg"),this.$emit("opcao",[e])}},created:function(){2==this.nivel?this.menu=this.pais:3==this.nivel?this.menu=this.cantina:this.menu="n tem nada"}}},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(56),a=n.n(s);t.default={data:function(){return{email:"",password:"",emailV:"",passwordV:""}},watch:{email:function(e){var t=e.indexOf("@"),n=e.lastIndexOf(".");t<1||n<t+2||n+2>=e.length?this.emailV=!1:this.emailV=!0},password:function(e){this.password.length?this.passwordV=!0:this.passwordV=!1}},methods:{checkEntry:function(){this.emailV?this.password.length?console.log("EMAIL E SENHA VÁLIDOS"):console.log("SENHA EM BRANCO"):console.log("EMAIL INVÁLIDO")},accessGranted:function(e){window.sessionStorage.setItem("nivel",e),this.$router.push("home")},serverError:function(){},invalidUser:function(){},logon:function(e){switch(e){case-1:this.serverError();break;case 0:this.invalidUser();break;default:this.accessGranted(e)}},request:function(){var e=this.email,t=this.password,n=this.logon;a.a.post("api/login",{email:e,password:t}).then(function(e){n(e.data.nivel)}).catch(function(e){console.log("ERRO: "),console.log(e),n(-1)})}},mounted:function(){window.sessionStorage.setItem("nivel",0)}}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),a=n(34),i=n.n(a),o=n(30),c=n(31),l=n.n(c),r=n(33),u=(n.n(r),n(32)),p=n.n(u);s.default.use(l.a,{locale:p.a}),s.default.config.productionTip=!1,new s.default({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},98:function(e,t){},99:function(e,t){}},[80]);
//# sourceMappingURL=app.js.map