(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(e,t,i){},284:function(e,t,i){"use strict";var s=i(202);i.n(s).a},289:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i(204),l=i.n(a);i(225);s.default.prototype.$ELEMENT={size:"small",zIndex:3e3},s.default.use(l.a);var n={data:function(){return{avatars:"hero.png",title:"林锦泽",description:"世间所有不愉快，都是由当事者能力不足所导致的。<br/>所以，变强吧。",catalog:[{name:"Uni组件库",link:"https://linjinze999.github.io/uni/"},{name:"Gerrit运维",link:"/gerrit/"},{name:"vue-llplatform",link:"https://linjinze999.github.io/vue-llplatform/"}],skills:[{name:"Javascript",percentage:80},{name:"Vue",percentage:80},{name:"React",percentage:65},{name:"Nodejs",percentage:70},{name:"Docker",percentage:80},{name:"Python/Django",percentage:75},{name:"Java/SpringMVC",percentage:60},{name:"C++",percentage:50}],skill_large_size:120,skill_small_size:80,experience:[{title:"滴滴出行",description:"使用Avalon MVVM框架开发前端WEB网页。"},{title:"TP-LINK",description:"使用Django开发部门DevOps网站。维护Gerrit、Jenkins等CI/CD系统及其Docker容器化。Vue前端web网站。"},{title:"腾讯音乐",description:"移动端开发..."}],my_home_qr:"/assets/img/home-qr.png",my_home_text:"Email © linjinze999@163.com"}}},r=(i(284),i(0)),c=Object(r.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{staticClass:"is-vertical"},[i("div",{staticClass:"my-page main"},[i("el-card",{staticClass:"main-card"},[i("h1",{attrs:{align:"center"}},[i("img",{staticClass:"logo-img",attrs:{src:e.avatars}})]),i("h3",{attrs:{align:"center"}},[e._v(e._s(e.title))]),i("p",{attrs:{align:"center"},domProps:{innerHTML:e._s(e.description)}}),i("div",{staticClass:"categories"},e._l(e.catalog,function(t){return i("a",{key:t.link,attrs:{href:t.link}},[i("el-button",{attrs:{type:"success",round:"",size:"small"}},[e._v(e._s(t.name))])],1)}))])],1),i("div",{staticClass:"my-page skill"},[i("div",{staticClass:"title"},[i("i",{staticClass:"el-icon-loading",staticStyle:{"margin-right":"20px"}}),e._v("\n      技能概览\n      "),i("i",{staticClass:"el-icon-loading",staticStyle:{"margin-left":"20px"}})]),i("div",{staticClass:"skill-large"},e._l(Math.ceil(e.skills.length/4),function(t){return i("el-row",{key:"skill"+t},e._l(e.skills.slice(4*(t-1),4*(t-1)+4),function(s){return i("el-col",{key:t+"-"+JSON.stringify(s),attrs:{span:6}},[i("el-progress",{attrs:{type:"circle",percentage:s.percentage,width:e.skill_large_size}}),i("p",[e._v(e._s(s.name))])],1)}))})),i("div",{staticClass:"skill-small"},e._l(Math.ceil(e.skills.length/4),function(t){return i("el-row",{key:"skill_sm"+t},e._l(e.skills.slice(4*(t-1),4*(t-1)+4),function(s){return i("el-col",{key:t+"-"+JSON.stringify(s),attrs:{span:6}},[i("el-progress",{attrs:{type:"circle",percentage:s.percentage,width:e.skill_small_size}}),i("p",[e._v(e._s(s.name))])],1)}))}))]),i("div",{staticClass:"my-page experience"},[i("div",{staticClass:"title"},[i("i",{staticClass:"el-icon-loading",staticStyle:{"margin-right":"20px"}}),e._v("\n      工作经历\n      "),i("i",{staticClass:"el-icon-loading",staticStyle:{"margin-left":"20px"}})]),i("div",{staticClass:"experience-content"},[i("el-steps",{attrs:{direction:"vertical",active:e.experience.length-1,"finish-status":"success"}},[e._l(e.experience,function(e){return i("el-step",{key:e.title,attrs:{title:e.title,description:e.description,icon:"el-icon-location-outline"}})}),i("el-step",{attrs:{title:"未完待续",icon:"el-icon-location-outline"}})],2)],1)]),i("div",{staticClass:"my-page contact"},[i("h4",[e._v("个人主页")]),i("p",[i("img",{attrs:{src:e.my_home_qr}})]),i("p",[e._v(e._s(e.my_home_text))])])])},[],!1,null,"1a36bb2e",null);t.default=c.exports}}]);