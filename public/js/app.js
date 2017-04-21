webpackJsonp([1],Array(31).concat([function(t,e,a){"use strict";var i=a(3),o=a(154),s=a(125),n=a.n(s),l=a(138),c=a.n(l);i.default.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Login",component:c.a},{path:"/home",name:"Home",component:n.a}]})},function(t,e,a){"use strict";var i=a(3),o=a(156),s=a.n(o);i.default.use(s.a);var n={listaPedidos:[],listaRefeicao:[],filhosPedidos:[],filhosRefeicao:[],listaPedidosFormatted:[]},l={getListaPedidos:function(t){return t.listaPedidos},getListaRefeicao:function(t){return t.listaRefeicao},getFilhosPedidos:function(t){return t.filhosPedidos},getFilhosRefeicao:function(t){return t.filhosRefeicao},getListaPedidosFormatted:function(t){return t.listaPedidosFormatted}},c={addListaPedidos:function(t,e){t.commit("addListaPedidos",e)},removeListaPedidos:function(t,e){console.log("item ",e),t.commit("removeListaPedidos",e)},addListaRefeicao:function(t,e){t.commit("addListaRefeicao",e)},removeListaRefeicao:function(t,e){t.commit("removeListaRefeicao",e)},changeFilhosPedidos:function(t,e){t.commit("changeFilhosPedidos",e)},changeFilhosRefeicao:function(t,e){t.commit("changeFilhosRefeicao",e)},listaPedidosFormatted:function(t,e){t.commit("listaPedidosFormatted",e)}},r={addListaPedidos:function(t,e){t.listaPedidos.unshift(e)},removeListaPedidos:function(t,e){var a=t.listaPedidos.indexOf(e);a!=-1&&t.listaPedidos.splice(a,1)},addListaRefeicao:function(t,e){t.listaRefeicao.unshift(e)},removeListaRefeicao:function(t,e){var a=t.listaRefeicao.indexOf(e);a!=-1&&t.listaRefeicao.splice(a,1)},changeFilhosPedidos:function(t,e){t.filhosPedidos=e},changeFilhosRefeicao:function(t,e){t.filhosRefeicao=e},listaPedidosFormatted:function(t,e){t.listaPedidosFormatted=e}};e.a=new s.a.Store({state:n,getters:l,actions:c,mutations:r})},,,function(t,e){},function(t,e,a){a(121);var i=a(2)(a(76),a(151),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(131),o=a.n(i),s=a(132),n=a.n(s),l=a(126),c=a.n(l),r=a(133),u=a.n(r);e.default={data:function(){return{menu:o.a,nivel:window.sessionStorage.getItem("nivel"),opcao:""}},methods:{principal:function(t){switch(t[0]){case"pedidos":this.opcao=n.a;break;case"estoque":case"opcoes":this.opcao="";break;case"lanches":this.opcao=c.a;break;case"refeicao":this.opcao=u.a}}},components:{Menu:o.a,Pedidos:n.a,Lanches:c.a,Refeicao:u.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(127),o=a.n(i),s=a(128),n=a.n(s),l=a(129),c=a.n(l),r=a(130),u=a.n(r),d=a(10),p=a.n(d);e.default={data:function(){return{active:0,size:85,lanches:"",outros:""}},computed:{steps:function(){return"Step"+(this.active+1)}},mounted:function(){this.request()},methods:{next:function(){this.active++>3&&(this.active=0)},back:function(){this.active--<1&&(this.active=0)},sendPedidos:function(){var t=this.$store.getters.getListaPedidosFormatted,e=t[0],a=t[1],i=t[2];p.a.post("api/cantina/pedido/create",{user:window.sessionStorage.getItem("user"),aluno_id:e,list:a,final_price:i}).then(function(t){console.log("enviado com resposta"),console.log(t)}).catch(function(t){console.log("error: "),console.log(t)})},request:function(){var t=this;p.a.post("api/responsavel/lanches").then(function(e){var a=e.data;t.lanches=a.lanches,t.outros=a.outros}).catch(function(t){console.log("error"),console.log(t)})}},components:{Step1:o.a,Step2:n.a,Step3:c.a,Step4:u.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{listaFilhos:["filho1","filho2","filho3"],filhosCheck:[]}},watch:{filhosCheck:function(){this.$store.dispatch("changeFilhosPedidos",this.filhosCheck)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["lanches"],data:function(){return{tableData:[],value:"",qtde:0,loading:!1,elQtde:!1,elProd:!1}},methods:{add:function(){if(this.value)if(this.elProd=!1,this.qtde){var t={id:this.value.id,produto:this.value.name,qtde:this.qtde,unit:this.value.price};this.tableData.unshift(t),this.$store.dispatch("addListaPedidos",t),this.elQtde=!1}else this.$notify({title:"Aviso",message:"Quantidade inválida!",type:"warning"}),this.elQtde=!0;else this.$notify({title:"Aviso",message:"Nenhum produto selecionado!",type:"warning"}),this.elProd=!0},apagarItem:function(t,e,a){var i=this;this.$confirm("Deseja apagar este lanche?","Aviso",{confirmButtonText:"Sim",cancelButtonText:"Não",type:"warning"}).then(function(){i.$message({type:"info",message:"Produto apagado"});var e=i.tableData.indexOf(t);i.$store.dispatch("removeListaPedidos",i.tableData[e]),i.tableData.splice(e,1)}).catch(function(){i.$message({type:"info",message:"Produto não apagado"})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["outros"],data:function(){return{tableData:[],value:"",qtde:0,loading:!1,elQtde:!1,elProd:!1}},methods:{add:function(){if(this.value)if(this.elProd=!1,this.qtde){var t={produto:this.value.name,qtde:this.qtde,unit:this.value.price};this.tableData.unshift(t),this.$store.dispatch("addListaPedidos",t),this.elQtde=!1}else this.$notify({title:"Aviso",message:"Quantidade inválida!",type:"warning"}),this.elQtde=!0;else this.$notify({title:"Aviso",message:"Nenhum produto selecionado!",type:"warning"}),this.elProd=!0},apagarItem:function(t,e,a){var i=this;this.$confirm("Deseja apagar este lanche?","Aviso",{confirmButtonText:"Sim",cancelButtonText:"Não",type:"warning"}).then(function(){i.$message({type:"info",message:"Produto apagado"});var e=i.tableData.indexOf(t);i.$store.dispatch("removeListaPedidos",i.tableData[e]),i.tableData.splice(e,1)}).catch(function(){i.$message({type:"info",message:"Produto não apagado"})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData:this.$store.getters.getListaPedidos,fullPrice:""}},watch:{tableData:function(){this.fullPrice=this.calculateFullPrice()}},mounted:function(){this.fullPrice=this.calculateFullPrice(),this.enviarPedido()},methods:{calculateFullPrice:function(){var t=this.tableData,e=0;return t.forEach(function(t){e+=t.unit*t.qtde}),e},enviarPedido:function(){var t=[];t.push(this.$store.getters.getFilhosPedidos),t.push(this.tableData),t.push(this.fullPrice),this.$store.dispatch("listaPedidosFormatted",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["nivel"],data:function(){return{menu:"",cantina:{op1:{texto:"PEDIDOS",link:"pedidos",icon:"receipt"},op2:{texto:"ESTOQUE",link:"estoque",icon:"store_mall_directory"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}},pais:{op1:{texto:"LANCHES",link:"lanches",icon:"local_pizza"},op2:{texto:"REFEIÇÃO",link:"refeicao",icon:"restaurant"},op3:{texto:"OPÇÕES",link:"opcoes",icon:"settings"}}}},methods:{display:function(t,e){var a=e.target;"div"!==e.target.localName&&(a=e.target.parentElement);var i=document.getElementsByClassName("light-black-bg");[].forEach.call(i,function(t){t.classList.remove("light-black-bg")}),a.classList.add("light-black-bg"),this.$emit("opcao",[t])}},created:function(){2==this.nivel?this.menu=this.pais:3==this.nivel?this.menu=this.cantina:this.menu="n tem nada"}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(134),o=a.n(i),s=a(135),n=a.n(s),l=a(136),c=a.n(l),r=a(137),u=a.n(r),d=a(10),p=a.n(d);e.default={data:function(){return{active:0,size:85,refeicao:"",outros:""}},computed:{steps:function(){return"Step"+(this.active+1)}},mounted:function(){this.request()},methods:{next:function(){this.active++>3&&(this.active=0)},back:function(){this.active--<1&&(this.active=0)},sendPedidos:function(){p.a.post("api/cantina/pedido/create",{pedido:this.$store.getters.getListaPedidosFormatted}).then(function(t){console.log("enviado com resposta"),console.log(t)}).catch(function(t){console.log("error: "),console.log(t)})},request:function(){var t=this;p.a.post("api/responsavel/lanches").then(function(e){var a=e.data;t.lanches=a.lanches,t.outros=a.outros}).catch(function(t){console.log("error"),console.log(t)})}},components:{Step1:o.a,Step2:n.a,Step3:c.a,Step4:u.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{listaFilhos:["filho1","filho2","filho3"],filhosCheck:[]}},watch:{filhosCheck:function(){this.$store.dispatch("changeFilhosPedidos",this.filhosCheck)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData:[],qtde:0,elQtde:!1,info:"",refeicao:{id:"01",name:"Refeição comum",price:"10.00"}}},methods:{add:function(){if(this.qtde){var t=void 0;t=this.info.length>0;var e={id:this.refeicao.id,produto:this.refeicao.name,qtde:this.qtde,unit:this.refeicao.price,info:t};this.tableData.unshift(e),e.info=this.info,this.$store.dispatch("addListaRefeicao",e),this.elQtde=!1}else this.$notify({title:"Aviso",message:"Quantidade inválida!",type:"warning"}),this.elQtde=!0},apagarItem:function(t,e,a){var i=this;this.$confirm("Deseja apagar este lanche?","Aviso",{confirmButtonText:"Sim",cancelButtonText:"Não",type:"warning"}).then(function(){i.$message({type:"info",message:"Produto apagado"});var e=i.tableData.indexOf(t);i.$store.dispatch("removeListaRefeicao",i.tableData[e]),i.tableData.splice(e,1)}).catch(function(){i.$message({type:"info",message:"Produto não apagado"})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["outros"],data:function(){return{tableData:[],value:"",qtde:0,loading:!1,elQtde:!1,elProd:!1}},methods:{add:function(){if(this.value)if(this.elProd=!1,this.qtde){var t={produto:this.value.name,qtde:this.qtde,unit:this.value.price};this.tableData.unshift(t),this.$store.dispatch("addListaPedidos",t),this.elQtde=!1}else this.$notify({title:"Aviso",message:"Quantidade inválida!",type:"warning"}),this.elQtde=!0;else this.$notify({title:"Aviso",message:"Nenhum produto selecionado!",type:"warning"}),this.elProd=!0},apagarItem:function(t,e,a){var i=this;this.$confirm("Deseja apagar este lanche?","Aviso",{confirmButtonText:"Sim",cancelButtonText:"Não",type:"warning"}).then(function(){i.$message({type:"info",message:"Produto apagado"});var e=i.tableData.indexOf(t);i.$store.dispatch("removeListaPedidos",i.tableData[e]),i.tableData.splice(e,1)}).catch(function(){i.$message({type:"info",message:"Produto não apagado"})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData:this.$store.getters.getListaPedidos,fullPrice:""}},watch:{tableData:function(){this.fullPrice=this.calculateFullPrice()}},mounted:function(){this.fullPrice=this.calculateFullPrice(),this.enviarPedido()},methods:{calculateFullPrice:function(){var t=this.tableData,e=0;return t.forEach(function(t){e+=t.unit*t.qtde}),e},enviarPedido:function(){var t=[];t.push(window.sessionStorage.getItem("user")),t.push(this.$store.getters.getFilhosPedidos),t.push(this.tableData),t.push(this.fullPrice),this.$store.dispatch("listaPedidosFormatted",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(10),o=a.n(i);e.default={data:function(){return{email:"",password:"",emailV:"",passwordV:""}},watch:{email:function(t){var e=t.indexOf("@"),a=t.lastIndexOf(".");e<1||a<e+2||a+2>=t.length?this.emailV=!1:this.emailV=!0},password:function(t){this.password.length?this.passwordV=!0:this.passwordV=!1}},methods:{checkEntry:function(){this.emailV?this.password.length?console.log("EMAIL E SENHA VÁLIDOS"):console.log("SENHA EM BRANCO"):console.log("EMAIL INVÁLIDO")},accessGranted:function(t,e){window.sessionStorage.setItem("nivel",t),window.sessionStorage.setItem("user",e),this.$router.push("home")},serverError:function(){},invalidUser:function(){},logon:function(t,e){switch(t){case-1:this.serverError();break;case 0:this.invalidUser();break;default:this.accessGranted(t,e)}},request:function(){var t=this.email,e=this.password,a=this.logon;o.a.post("api/login",{email:t,password:e}).then(function(t){a(t.data.nivel,t.data.user)}).catch(function(t){console.log("ERRO: "),console.log(t),a(-1)})}},mounted:function(){window.sessionStorage.setItem("nivel",0)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3),o=a(36),s=a.n(o),n=a(31),l=a(33),c=a.n(l),r=a(32),u=a(35),d=(a.n(u),a(34)),p=a.n(d);i.default.use(c.a,{locale:p.a}),i.default.config.productionTip=!1,new i.default({el:"#app",router:n.a,store:r.a,template:"<App/>",components:{App:s.a}})},,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){a(123);var i=a(2)(a(77),a(153),"data-v-f5d779a8",null);t.exports=i.exports},function(t,e,a){a(110);var i=a(2)(a(78),a(140),"data-v-2bf9322f",null);t.exports=i.exports},function(t,e,a){a(117);var i=a(2)(a(79),a(147),"data-v-4405a1e5",null);t.exports=i.exports},function(t,e,a){a(118);var i=a(2)(a(80),a(148),"data-v-4413b966",null);t.exports=i.exports},function(t,e,a){a(119);var i=a(2)(a(81),a(149),"data-v-4421d0e7",null);t.exports=i.exports},function(t,e,a){a(120);var i=a(2)(a(82),a(150),"data-v-442fe868",null);t.exports=i.exports},function(t,e,a){a(122);var i=a(2)(a(83),a(152),"data-v-7e1223ac",null);t.exports=i.exports},function(t,e,a){a(111);var i=a(2)(a(84),a(141),"data-v-32c40211",null);t.exports=i.exports},function(t,e,a){a(116);var i=a(2)(a(85),a(146),"data-v-3df7d247",null);t.exports=i.exports},function(t,e,a){a(112);var i=a(2)(a(86),a(142),"data-v-3a21cffd",null);t.exports=i.exports},function(t,e,a){a(113);var i=a(2)(a(87),a(143),"data-v-3a2fe77e",null);t.exports=i.exports},function(t,e,a){a(114);var i=a(2)(a(88),a(144),"data-v-3a3dfeff",null);t.exports=i.exports},function(t,e,a){a(115);var i=a(2)(a(89),a(145),"data-v-3a4c1680",null);t.exports=i.exports},function(t,e,a){a(109);var i=a(2)(a(90),a(139),"data-v-24937077",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",align:"middle"}},[a("el-col",{attrs:{md:{offset:7,span:10},sm:{offset:6,span:12},xs:{offset:2,span:20}}},[a("el-card",{staticClass:"card card-login"},[a("el-tooltip",{staticClass:"item",attrs:{content:"Informe um email válido!",placement:"top-start"}},[a("el-input",{staticClass:"inputs",class:{warning:!t.emailV,success:t.emailV},attrs:{id:"emailInput",placeholder:"Usuário",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),a("el-input",{staticClass:"inputs",class:{warning:!t.passwordV,success:t.passwordV},attrs:{id:"passwordInput",type:"password",placeholder:"Senha"},on:{enter:function(e){t.request()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("div",{staticClass:"buttons"},[a("el-button",{attrs:{size:"small",type:"danger"}},[t._v("Cancelar")]),t._v(" "),a("el-button",{attrs:{size:"large",type:"success"},on:{click:function(e){t.request()}}},[t._v("Entrar")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-row",{class:{"row-bg":!0},attrs:{type:"flex"}},[a("el-steps",{attrs:{space:t.size,center:!0,"align-center":!0,active:t.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"Intro"}}),t._v(" "),a("el-step",{attrs:{title:"Lanche"}}),t._v(" "),a("el-step",{attrs:{title:"Outros"}}),t._v(" "),a("el-step",{attrs:{title:"Confirmar"}})],1),t._v(" "),a("keep-alive",[a(t.steps,{tag:"component",staticClass:"step",attrs:{lanches:t.lanches,outros:t.outros}})],1),t._v(" "),a("el-col",[a("div",{staticClass:"buttons"},[a("el-button",{class:{btnLanches:!0},on:{click:t.back}},[t._v("Voltar")]),t._v(" "),3!=t.active?a("el-button",{class:{btnLanches:!0,"blue-bg":!0},attrs:{type:"primary"},on:{click:t.next}},[t._v("Continuar")]):a("el-button",{class:{btnLanches:!0,"blue-bg":!0},attrs:{type:"success"},on:{click:t.sendPedidos}},[t._v("Concluir")])],1)])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    To dentro do Pedido\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{staticClass:"intro"},[a("el-row",{staticClass:"title",attrs:{type:"flex"}},[a("el-col",[t._v("Introdução")])],1),t._v(" "),a("el-row",{staticClass:"info",attrs:{type:"flex"}},[a("el-col",[t._v("Para realizar o pedido da refeição para seu filho, é simples:")]),t._v(" "),a("el-col",[t._v("1. Você informa a quantidade e digita os detalhes do prato.")]),t._v(" "),a("el-col",[t._v("2. Você pode selecionar outro tipo de produto e a quantidade.")]),t._v(" "),a("el-col",[t._v("3. Você visualiza tudo o que selecionou com o preço total.")]),t._v(" "),a("el-col",[t._v("Clique em finalizar, ou utilize a opção de voltar para alterar algum produto.")]),t._v(" "),a("el-col",[a("el-checkbox-group",{model:{value:t.filhosCheck,callback:function(e){t.filhosCheck=e},expression:"filhosCheck"}},t._l(t.listaFilhos,function(e){return a("el-checkbox",{attrs:{label:e}},[t._v(t._s(e))])}))],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step2"},[a("el-col",[a("el-input-number",{class:{inputs:!0,warning:t.elQtde},attrs:{min:0,max:10},model:{value:t.qtde,callback:function(e){t.qtde=e},expression:"qtde"}})],1),t._v(" "),a("el-col",[a("el-input",{class:{inputs:!0,textarea:!0},attrs:{type:"textarea",rows:2,placeholder:"Digite informações adicionais"},model:{value:t.info,callback:function(e){t.info=e},expression:"info"}})],1),t._v(" "),a("el-col",[a("el-button",{attrs:{type:"success"},on:{click:t.add}},[t._v("Adicionar")])],1),t._v(" "),a("el-col",[a("el-table",{attrs:{height:"150",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"info",label:"Info",width:"80",align:"left"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step3"},[a("el-col",[a("el-select",{class:{inputs:!0,warning:t.elProd},attrs:{id:"select",placeholder:"Escolha",loading:t.loading},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.outros,function(t){return a("el-option",{attrs:{label:t.name,id:"o"+t.id,value:t}})}))],1),t._v(" "),a("el-col",[a("el-input-number",{class:{inputs:!0,warning:t.elQtde},attrs:{min:0,max:10},model:{value:t.qtde,callback:function(e){t.qtde=e},expression:"qtde"}})],1),t._v(" "),a("el-col",[a("el-button",{attrs:{type:"success"},on:{click:t.add}},[t._v("Adicionar")])],1),t._v(" "),a("el-col",[a("el-table",{attrs:{height:"150",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",[a("el-table",{attrs:{height:"250",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1),t._v(" "),a("h3",{staticClass:"fullPrice"},[t._v("Preço total: R$ "+t._s(t.fullPrice))])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-row",{class:{"row-bg":!0},attrs:{type:"flex"}},[a("el-steps",{attrs:{space:t.size,center:!0,"align-center":!0,active:t.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"Intro"}}),t._v(" "),a("el-step",{attrs:{title:"Refeição"}}),t._v(" "),a("el-step",{attrs:{title:"Outros"}}),t._v(" "),a("el-step",{attrs:{title:"Confirmar"}})],1),t._v(" "),a("keep-alive",[a(t.steps,{tag:"component",staticClass:"step",attrs:{refeicao:t.refeicao,outros:t.outros}})],1),t._v(" "),a("el-col",[a("div",{staticClass:"buttons"},[a("el-button",{class:{btnRefeicao:!0},on:{click:t.back}},[t._v("Voltar")]),t._v(" "),3!=t.active?a("el-button",{class:{btnRefeicao:!0,"blue-bg":!0},attrs:{type:"primary"},on:{click:t.next}},[t._v("Continuar")]):a("el-button",{class:{btnRefeicao:!0,"blue-bg":!0},attrs:{type:"success"},on:{click:t.sendPedidos}},[t._v("Concluir")])],1)])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{staticClass:"intro"},[a("el-row",{staticClass:"title",attrs:{type:"flex"}},[a("el-col",[t._v("Introdução")])],1),t._v(" "),a("el-row",{staticClass:"info",attrs:{type:"flex"}},[a("el-col",[t._v("Para realizar o pedido do lanche para seu filho, é simples:")]),t._v(" "),a("el-col",[t._v("1. Você seleciona qual o produto e indica a quantidade.")]),t._v(" "),a("el-col",[t._v("2. Você pode selecionar outro tipo de produto e a quantidade.")]),t._v(" "),a("el-col",[t._v("3. Você visualiza tudo o que selecionou com o preço total.")]),t._v(" "),a("el-col",[t._v("Clique em finalizar, ou utilize a opção de voltar para alterar algum produto.")]),t._v(" "),a("el-col",[a("el-checkbox-group",{model:{value:t.filhosCheck,callback:function(e){t.filhosCheck=e},expression:"filhosCheck"}},t._l(t.listaFilhos,function(e){return a("el-checkbox",{attrs:{label:e}},[t._v(t._s(e))])}))],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step2"},[a("el-col",[a("el-select",{class:{inputs:!0,warning:t.elProd},attrs:{id:"select",placeholder:"Escolha",loading:t.loading},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.lanches,function(t){return a("el-option",{attrs:{label:t.name,id:"p"+t.id,value:t}})}))],1),t._v(" "),a("el-col",[a("el-input-number",{class:{inputs:!0,warning:t.elQtde},attrs:{min:0,max:10},model:{value:t.qtde,callback:function(e){t.qtde=e},expression:"qtde"}})],1),t._v(" "),a("el-col",[a("el-button",{attrs:{type:"success"},on:{click:t.add}},[t._v("Adicionar")])],1),t._v(" "),a("el-col",[a("el-table",{attrs:{height:"150",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step3"},[a("el-col",[a("el-select",{class:{inputs:!0,warning:t.elProd},attrs:{id:"select",placeholder:"Escolha",loading:t.loading},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.outros,function(t){return a("el-option",{attrs:{label:t.name,id:"o"+t.id,value:t}})}))],1),t._v(" "),a("el-col",[a("el-input-number",{class:{inputs:!0,warning:t.elQtde},attrs:{min:0,max:10},model:{value:t.qtde,callback:function(e){t.qtde=e},expression:"qtde"}})],1),t._v(" "),a("el-col",[a("el-button",{attrs:{type:"success"},on:{click:t.add}},[t._v("Adicionar")])],1),t._v(" "),a("el-col",[a("el-table",{attrs:{height:"150",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",[a("el-table",{attrs:{height:"250",border:"",data:t.tableData},on:{"row-click":t.apagarItem}},[a("el-table-column",{attrs:{prop:"produto",label:"Produto",width:"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"qtde",label:"Qtde",width:"80",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"PU",width:"80",align:"right"}})],1),t._v(" "),a("h3",{staticClass:"fullPrice"},[t._v("Preço total: R$ "+t._s(t.fullPrice))])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{class:{items:!0,"silver-bg":!0}},[a("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0}},[a("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op1.link,e)}}},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op1.icon))]),a("p",[t._v(t._s(t.menu.op1.texto))])])]),t._v(" "),a("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(e){t.display(t.menu.op2.link)}}},[a("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op2.link,e)}}},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op2.icon))]),a("p",[t._v(t._s(t.menu.op2.texto))])])]),t._v(" "),a("el-col",{class:{item:!0,"silver-bg":!0,"xs-light-black-bg-h":!0,"light-gray":!0},on:{click:function(e){t.display(t.menu.op3.link)}}},[a("div",{staticClass:"item",on:{click:function(e){t.display(t.menu.op3.link,e)}}},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.menu.op3.icon))]),a("p",[t._v(t._s(t.menu.op3.texto))])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home dark-white-bg"},[a("el-row",{class:{home:!0,"dark-white-bg":!0}},[a("el-col",{class:{menu:!0,"light-gray-bg":!0},attrs:{span:4}},[a(t.menu,{tag:"component",attrs:{nivel:t.nivel},on:{opcao:t.principal}})],1),t._v(" "),a("el-col",{class:{content:!0},attrs:{span:20}},[a(t.opcao,{tag:"component"})],1)],1)],1)},staticRenderFns:[]}}]),[91]);
//# sourceMappingURL=app.js.map