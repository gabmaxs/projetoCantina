webpackJsonp([1],Array(30).concat([function(t,e,n){"use strict";var s=n(3),a=n(133),o=n(114),i=n.n(o),c=n(122),r=n.n(c);s.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Login",component:r.a},{path:"/home",name:"Home",component:i.a}]})},,,function(t,e){},function(t,e,n){n(110);var s=n(4)(n(75),n(130),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(120),a=n.n(s),o=n(121),i=n.n(o),c=n(115),r=n.n(c);e.default={data:function(){return{menu:a.a,nivel:window.sessionStorage.getItem("nivel"),opcao:""}},methods:{principal:function(t){switch(t[0]){case"pedidos":this.opcao=i.a;break;case"estoque":case"opcoes":this.opcao="";break;case"lanches":this.opcao=r.a;break;case"refeicao":this.opcao=""}}},components:{Menu:a.a,Pedidos:i.a,Lanches:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(116),a=n.n(s),o=n(117),i=n.n(o),c=n(118),r=n.n(c),l=n(119),u=n.n(l);e.default={data:function(){return{active:0,size:125}},computed:{steps:function(){return"Step"+(this.active+1)}},methods:{next:function(){this.active++>3&&(this.active=0)},back:function(){this.active--<1&&(this.active=0)}},components:{Step1:a.a,Step2:i.a,Step3:r.a,Step4:u.a}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["nivel"],data:function(){return{menu:"",cantina:{op1:{texto:"PEDIDOS",link:"pedidos",icon:"receipt"},op2:{texto:"ESTOQUE",link:"estoque",icon:"store_mall_directory"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}},pais:{op1:{texto:"LANCHES",link:"lanches",icon:"local_pizza"},op2:{texto:"REFEIÇÃO",link:"refeicao",icon:"restaurant"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}}}},methods:{display:function(t,e){var n=e.target;"div"!==e.target.localName&&(n=e.target.parentElement);var s=document.getElementsByClassName("light-black-bg");[].forEach.call(s,function(t){t.classList.remove("light-black-bg")}),n.classList.add("light-black-bg"),this.$emit("opcao",[t])}},created:function(){2==this.nivel?this.menu=this.pais:3==this.nivel?this.menu=this.cantina:this.menu="n tem nada"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(56),a=n.n(s);e.default={data:function(){return{email:"",password:"",emailV:"",passwordV:""}},watch:{email:function(t){var e=t.indexOf("@"),n=t.lastIndexOf(".");e<1||n<e+2||n+2>=t.length?this.emailV=!1:this.emailV=!0},password:function(t){this.password.length?this.passwordV=!0:this.passwordV=!1}},methods:{checkEntry:function(){this.emailV?this.password.length?console.log("EMAIL E SENHA VÁLIDOS"):console.log("SENHA EM BRANCO"):console.log("EMAIL INVÁLIDO")},accessGranted:function(t){window.sessionStorage.setItem("nivel",t),this.$router.push("home")},serverError:function(){},invalidUser:function(){},logon:function(t){switch(t){case-1:this.serverError();break;case 0:this.invalidUser();break;default:this.accessGranted(t)}},request:function(){var t=this.email,e=this.password,n=this.logon;a.a.post("api/login",{email:t,password:e}).then(function(t){n(t.data.nivel)}).catch(function(t){console.log("ERRO: "),console.log(t),n(-1)})}},mounted:function(){window.sessionStorage.setItem("nivel",0)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),a=n(34),o=n.n(a),i=n(30),c=n(31),r=n.n(c),l=n(33),u=(n.n(l),n(32)),p=n.n(u);s.default.use(r.a,{locale:p.a}),s.default.config.productionTip=!1,new s.default({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(112);var s=n(4)(n(76),n(132),"data-v-f5d779a8",null);t.exports=s.exports},function(t,e,n){n(104);var s=n(4)(n(77),n(124),"data-v-2bf9322f",null);t.exports=s.exports},function(t,e,n){n(106);var s=n(4)(n(78),n(126),"data-v-4405a1e5",null);t.exports=s.exports},function(t,e,n){n(107);var s=n(4)(n(79),n(127),"data-v-4413b966",null);t.exports=s.exports},function(t,e,n){n(108);var s=n(4)(n(80),n(128),"data-v-4421d0e7",null);t.exports=s.exports},function(t,e,n){n(109);var s=n(4)(n(81),n(129),"data-v-442fe868",null);t.exports=s.exports},function(t,e,n){n(111);var s=n(4)(n(82),n(131),"data-v-7e1223ac",null);t.exports=s.exports},function(t,e,n){n(105);var s=n(4)(n(83),n(125),"data-v-32c40211",null);t.exports=s.exports},function(t,e,n){n(103);var s=n(4)(n(84),n(123),"data-v-24937077",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("el-row",{staticClass:"row-bg",attrs:{type:"flex",align:"middle"}},[n("el-col",{attrs:{md:{offset:7,span:10},sm:{offset:6,span:12},xs:{offset:2,span:20}}},[n("el-card",{staticClass:"card card-login"},[n("el-tooltip",{staticClass:"item",attrs:{content:"Informe um email válido!",placement:"top-start"}},[n("el-input",{staticClass:"inputs",class:{warning:!t.emailV,success:t.emailV},attrs:{id:"emailInput",placeholder:"Usuário",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("el-input",{staticClass:"inputs",class:{warning:!t.passwordV,success:t.passwordV},attrs:{id:"passwordInput",type:"password",placeholder:"Senha"},on:{enter:function(e){t.request()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("div",{staticClass:"buttons"},[n("el-button",{attrs:{size:"small",type:"danger"}},[t._v("Cancelar")]),t._v(" "),n("el-button",{attrs:{size:"large",type:"success"},on:{click:function(e){t.request()}}},[t._v("Entrar")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("el-row",{class:{"row-bg":!0},attrs:{type:"flex"}},[n("el-steps",{class:{stepper:!0},attrs:{direction:"vertical",space:t.size,active:t.active,"finish-status":"success"}},[n("el-step",{attrs:{title:"Intro"}}),t._v(" "),n("el-step",{attrs:{title:"Lanche"}}),t._v(" "),n("el-step",{attrs:{title:"Outros"}}),t._v(" "),n("el-step",{attrs:{title:"Confirmar"}})],1),t._v(" "),n(t.steps,{tag:"component"}),t._v(" "),n("el-col",[n("div",[n("el-button",{class:{btnLanches:!0},on:{click:t.back}},[t._v("Voltar")]),t._v(" "),n("el-button",{class:{btnLanches:!0,"blue-bg":!0},on:{click:t.next}},[t._v("Continuar")])],1)])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    To dentro do Pedido\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-col",{staticClass:"intro"},[n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{offset:6}},[t._v("Introdução")])],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",[t._v("OI okvcvjkcjkcjk kjfisjkjsk jks kkkkkaoskasajks aks aska sja ksjaks jak jsak jaks jskaj ")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\nEsse é o 2\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\nto no 3\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    Finalização\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{class:{items:!0,"silver-bg":!0}},[n("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0}},[n("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op1.link,e)}}},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op1.icon))]),n("p",[t._v(t._s(t.menu.op1.texto))])])]),t._v(" "),n("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(e){t.display(t.menu.op2.link)}}},[n("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op2.link,e)}}},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op2.icon))]),n("p",[t._v(t._s(t.menu.op2.texto))])])]),t._v(" "),n("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(e){t.display(t.menu.op3.link)}}},[n("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op3.link,e)}}},[n("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op3.icon))]),n("p",[t._v(t._s(t.menu.op3.texto))])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home dark-white-bg"},[n("el-row",{class:{home:!0,"dark-white-bg":!0}},[n("el-col",{class:{menu:!0,"light-gray-bg":!0},attrs:{span:4}},[n(t.menu,{tag:"component",attrs:{nivel:t.nivel},on:{opcao:t.principal}})],1),t._v(" "),n("el-col",{class:{content:!0},attrs:{span:20}},[n(t.opcao,{tag:"component"})],1)],1)],1)},staticRenderFns:[]}}]),[85]);
//# sourceMappingURL=app.js.map