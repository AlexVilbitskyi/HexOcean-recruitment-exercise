(this["webpackJsonphex-ocean-recruitment-exercise"]=this["webpackJsonphex-ocean-recruitment-exercise"]||[]).push([[0],{263:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(31),i=n.n(r),s=n(41),o=n(318),l=n(308),u=n(19),j=n(316),d=Object(u.b)({form:j.a}),b=Object(u.c)(d),m=n(103),p=n.n(m),h=n(134),O=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://frosty-wood-6558.getsandbox.com:443/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){window.alert("Success:",e)})).catch((function(e){window.alert("Error:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(43),f=n(82),v=n(312),g=n(311),y=n(322),w=n(309),_=n(314),z=n(319),S=n(320),C=n(315),T=n(317),k=n(321),D=n(310);var E=function(e){var t={};return["name","preparation_time","type","no_of_slices","diameter","spiciness_scale","slices_of_bread"].forEach((function(n){e[n]||(t[n]="Required")})),e.preparation_time&&e.preparation_time.length<8&&(t.preparation_time='Enter time in format "hh:mm:ss"'),t},F=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,""),n=t.slice(0,2),a=t.slice(2,4),c=t.slice(4,6);switch(t.length){case 1:return"".concat(n);case 2:return"".concat(n,":");case 3:return"".concat(n,":").concat(a);case 4:return a>59&&(a=59),"".concat(n,":").concat(a,":");default:return a>59&&(a=59),c>59&&(c=59),"".concat(n,":").concat(a,":").concat(c)}},N=function(e){return e?e.replace(/[^\d]/g,""):e},J=function(e){return e&&e<0?0:e},W=n(2),B=["input","meta"],H=["input","meta"],P=["input","meta","children"],R=Object(D.a)((function(e){return{root:{marginTop:"100px",padding:e.spacing(3),borderRadius:e.spacing(.5),background:"white","& > *":{margin:e.spacing(1.5)}},buttonClear:{float:"right"}}})),q=function(e){var t=e.input,n=e.meta,a=n.touched,c=n.error,r=Object(f.a)(e,B);return Object(W.jsx)(w.a,Object(x.a)(Object(x.a)({variant:"standard",helperText:a&&c,error:a&&c,fullWidth:!0},t),r))},I=function(e){var t=e.input,n=e.meta,a=n.touched,c=n.error,r=Object(f.a)(e,H);return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(_.a,Object(x.a)(Object(x.a)({},t),r)),Object(W.jsx)(z.a,{error:a&&c,children:a&&c})]})},L=function(e){var t=e.input,n=e.meta,a=n.touched,c=n.error,r=e.children,i=Object(f.a)(e,P);return Object(W.jsx)(w.a,Object(x.a)(Object(x.a)(Object(x.a)({variant:"standard",helperText:a&&c,error:a&&c,fullWidth:!0,select:!0,onChange:function(e){return t.onChange(e)}},t),i),{},{children:r}))},M=function(e){var t=e.handleSubmit,n=e.pristine,a=e.reset,c=e.submitting,r=e.dishType,i=R();return Object(W.jsx)(S.a,{component:"main",maxWidth:"xs",children:Object(W.jsxs)("form",{className:i.root,onSubmit:t,children:[Object(W.jsx)("div",{children:Object(W.jsx)(v.a,{name:"name",component:q,label:"Dish name"})}),Object(W.jsx)("div",{children:Object(W.jsx)(v.a,{name:"preparation_time",component:q,label:"Preparation time",placeholder:"hh:mm:ss",normalize:F})}),Object(W.jsx)("div",{children:Object(W.jsxs)(v.a,{name:"type",label:"Dish type",component:L,children:[Object(W.jsx)(C.a,{value:"pizza",children:"pizza"}),Object(W.jsx)(C.a,{value:"soup",children:"soup"}),Object(W.jsx)(C.a,{value:"sandwich",children:"sandwich"})]})}),function(){switch(r){case"pizza":return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("div",{children:Object(W.jsx)(v.a,{name:"no_of_slices",component:q,label:"Number of slices",type:"number",normalize:N})}),Object(W.jsx)("div",{children:Object(W.jsx)(v.a,{name:"diameter",component:q,label:"Diameter",type:"number",normalize:J})})]});case"soup":return Object(W.jsxs)("div",{children:[Object(W.jsx)(T.a,{gutterBottom:!0,children:"Spiciness scale"}),Object(W.jsx)(v.a,{name:"spiciness_scale",component:I,valueLabelDisplay:"auto",step:1,marks:!0,min:0,max:10})]});case"sandwich":return Object(W.jsx)("div",{children:Object(W.jsx)(v.a,{name:"slices_of_bread",component:q,label:"Slices of bread",type:"number",normalize:N})});default:return null}}(),Object(W.jsxs)("div",{children:[Object(W.jsx)(k.a,{variant:"contained",color:"primary",disabled:n||c,type:"submit",children:"Submit"}),Object(W.jsx)(k.a,{variant:"contained",color:"primary",disabled:n||c,onClick:a,className:i.buttonClear,children:"Clear Values"})]})]})})};M=Object(g.a)({form:"HexOceanForm",validate:E})(M);var V=Object(y.a)("HexOceanForm"),A=M=Object(s.b)((function(e){return{dishType:V(e,"type")}}))(M),G=n(140),K=Object(G.a)({spacing:8});n(263);i.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(s.a,{store:b,children:Object(W.jsxs)(o.a,{theme:K,children:[Object(W.jsx)(l.a,{}),Object(W.jsx)(A,{onSubmit:O})]})})}),document.getElementById("root"))}},[[264,1,2]]]);
//# sourceMappingURL=main.30aa3f5c.chunk.js.map