(this["webpackJsonphabit-project"]=this["webpackJsonphabit-project"]||[]).push([[0],{11:function(t,e,n){"use strict";e.a={Authentification:"/",Loginization:"/login",Registration:"/registr",Profile:"/profile",HabitsList:"/profile/habitList",HabitProfile:"/profile/habitList/:id"}},12:function(t,e,n){"use strict";e.a={ADD:"ADD_Habbit",UPDATE:"UPDATE_Habbit",REMOVE:"REMOVE_Habbit",ADD_USER:"ADD_USER",UPDATE_USER:"UPDATE_USER"}},18:function(t,e,n){"use strict";var a=n(12),o=n(34);e.a={addHabbit:function(t){var e=t.title,n=t.comment,r=t.color,c=t.remind,i=t.repeat;return{type:a.a.ADD,payload:{id:Object(o.a)(),title:e,comment:n,repeat:i,color:r,remind:c,progress:0}}},updateHabbit:function(t,e,n,o,r){return{type:a.a.UPDATE,payload:{title:t,comment:e,repeat:r,color:n,remind:o,progress:0}}},removeHabbit:function(t){return{type:a.a.REMOVE,payload:{id:t}}},addUser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"name",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"876543";return{type:a.a.ADD,payload:{id:Object(o.a)(),name:t,phone:e}}},updateUser:function(t){return{type:a.a.UPDATE,payload:{}}}}},20:function(t,e,n){"use strict";var a=n(19),o=n(22),r=n(12),c=[{email:"dslfjslkfj@gmail.com",id:1,name:"Mango",phone:309039994,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeS9qhRY8m3uQ5fNWdIKzjj_Cjb2O7JLAmA&usqp=CAU",habits:[{id:1,title:"pol",comment:"no",repeat:"every day",color:"#FF7E00",remind:!1,progress:"10%"}]}],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case r.a.ADD:return[].concat(Object(o.a)(t),[a]);case r.a.UPDATE:case r.a.REMOVE:return t.filter((function(t){return t.id!==a.id}));default:return t}},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case r.a.ADD_USER:return[].concat(Object(o.a)(t),[a]);case r.a.UPDATE_USER:return t.filter((function(t){return t.id!==a.id}));default:return t}},l=Object(a.b)({habbits:i,user:s}),d=Object(a.c)(l);e.a=d},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(4),o=n(5),r=n(7),c=n(6),i=n(1),s=n(0),l=n(30),d=n.n(l),u=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).closeModal=function(e){"Escape"===e.code&&t.props.modalToggle()},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){return Object(i.jsx)("div",{className:d.a.overlay,id:"overlay",children:Object(i.jsx)("div",{className:d.a.modal,children:this.props.children})})}}]),n}(s.Component)},27:function(t,e,n){"use strict";var a=n(23),o=n(4),r=n(5),c=n(7),i=n(6),s=n(1),l=n(0),d=n(36),u=n.n(d),h=n(34),b=n(16),j=n(18),p=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={title:"",comment:"",repeat:"",color:"",remind:!1},t.closeId=null,t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.title,o=n.comment,r=n.color,c=n.repeat,i=n.remind,s={id:Object(h.a)(),comment:o,color:r,title:a,repeat:c,remind:i,startDate:Date.now(),progress:t.toSetProgress(Date.now())};t.props.addHabit(s),t.setState({title:"",comment:"",repeat:"",color:"#FF7E00",remind:!1}),alert("\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),t.closeId=setTimeout(t.props.modalToggle,1e3)},t.handleChange=function(e){var n=e.target;t.setState(Object(a.a)({},n.name,"checbox"===n.type?n.checked:n.value))},t.toSetProgress=function(t){var e=Date.now();return Math.round(100*(e-t)/18144e5)},t}return Object(r.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.closeId)}},{key:"render",value:function(){var t=this.state,e=t.title,n=t.comment,a=t.repeat,o=t.color,r=t.remind;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{action:"",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{className:u.a.header,style:{backgroundColor:this.state.color},children:[Object(s.jsx)("button",{type:"button",onClick:this.props.modalToggle,children:"Close"}),Object(s.jsx)("h2",{children:"\u041d\u043e\u0432\u0430\u044f \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430"}),Object(s.jsx)("label",{htmlFor:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(s.jsx)("input",{type:"text",name:"title",value:e,onChange:this.handleChange})]}),Object(s.jsx)("label",{htmlFor:"comment",children:" \u041c\u043e\u0442\u0438\u0432\u0438\u0440\u0443\u0439 \u0441\u0435\u0431\u044f "}),Object(s.jsx)("input",{type:"textarea",name:"comment",value:n,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"repeat",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c"}),Object(s.jsxs)("select",{name:"repeat",value:a,id:"",onChange:this.handleChange,children:[Object(s.jsx)("option",{value:"24",children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u27a4"}),Object(s.jsx)("option",{value:"1",children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0441 \u27a4"}),Object(s.jsx)("option",{value:"2",children:"\u041a\u0430\u0436\u0434\u044b\u0435 \u0434\u0432\u0430 \u0447\u0430\u0441\u0430 \u27a4"})]}),Object(s.jsx)("label",{htmlFor:"color",children:"\u0426\u0432\u0435\u0442"}),Object(s.jsx)("input",{type:"color",name:"color",value:o,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"remind",children:"\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435"}),Object(s.jsx)("input",{type:"checkbox",name:"remind",checked:r,onChange:this.handleChange}),Object(s.jsx)("button",{type:"submit",onSubmit:this.handleSubmit,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})}}]),n}(l.Component),m={addHabit:j.a};e.a=Object(b.b)(m)(p)},30:function(t,e,n){t.exports={overlay:"Modal_overlay__2CTox",modal:"Modal_modal__3nFDO",isHidden:"Modal_isHidden__3Gr49"}},36:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var a=n(4),o=n(5),r=n(7),c=n(6),i=n(1),s=n(0),l=n(14),d=n(26),u=n(27),h=n(11),b=n(18),j=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).toDelete=function(){console.log(t.props.id),Object(b.a)(t.props.id)},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)(l.c,{to:h.a.HabitsList,children:"\u041d\u0430\u0437\u0430\u0434"}),Object(i.jsx)("h2",{children:"Title"}),Object(i.jsx)("button",{type:"button",children:"\u041f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(i.jsx)("div",{children:this.props.showModal&&Object(i.jsx)(d.a,{modalToggle:this.props.modalToggle,children:Object(i.jsx)(u.a,{modalToggle:this.props.modalToggle,toAddHabit:this.toAddHabit})})}),Object(i.jsx)(l.c,{to:h.a.HabitsList,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0430\u0439\u043b"})]})}}]),n}(s.Component)},45:function(t,e,n){},46:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n(0),r=n(24),c=n.n(r),i=(n(45),n(15)),s=n(4),l=n(5),d=n(7),u=n(6),h=(n(46),n(22)),b=function(t){var e=t.title,n=t.progress;return Object(a.jsxs)("li",{children:[Object(a.jsx)("h3",{children:e}),Object(a.jsxs)("div",{children:[n,"%"]})]})},j=n(26),p=n(27),m=n(14),O=n(11),g=Object(o.createContext)(),f={email:"dslfjslkfj@gmail.com",id:1,name:"Mango",phone:309039994,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeS9qhRY8m3uQ5fNWdIKzjj_Cjb2O7JLAmA&usqp=CAU",habits:[{id:1,title:"pol",comment:"no",repeat:"every day",color:"#FF7E00",remind:!1,progress:"10%"}]},v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleLogin=function(){t.setState({user:f,isLogin:!0})},t.handleLogOut=function(){t.setState({user:null,isLogin:!1})},t.state={user:f,isLogin:!1,handleLogin:t.handleLogin,handleLogOut:t.handleLogOut},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(g.Provider,{value:this.state,children:this.props.children})})}}]),n}(o.Component);v.Consumer=g.Consumer;var x=v,y=n(16),D=n(20),A=n(18),C=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={habits:[{id:"",title:"\u0437\u0430\u0440\u044f\u0434\u043a\u0430",startDate:"",progress:""}]},t.toAddHabit=function(e){t.setState((function(t){return{habits:[].concat(Object(h.a)(t.habits),[e])}}))},t.toChangeProgress=function(e){t.setState((function(n){var a=n.habits.find((function(t){return t.id===e}));return a.progress=t.toSetProgress(a.startDate),a}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("state"))||[];this.setState({habits:t})}},{key:"componentDidUpdate",value:function(t,e){e!==this.state&&localStorage.setItem("state",JSON.stringify(this.state.habits))}},{key:"render",value:function(){D.a.getState().habits;console.log(D.a);var t=D.a.getState();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("div",{children:"My accaunt"}),Object(a.jsx)("img",{src:t.avatar,alt:t.name}),Object(a.jsx)(m.b,{to:"/",className:"link",children:"\u041d\u0430\u0437\u0430\u0434"})]}),this.props.showModal&&Object(a.jsx)(j.a,{modalToggle:this.props.modalToggle,children:Object(a.jsx)(p.a,{modalToggle:this.props.modalToggle,toAddHabit:this.toAddHabit})}),Object(a.jsx)("div",{children:" \u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c "}),Object(a.jsx)("h1",{children:"\u041c\u043e\u0438 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438"}),t.habits.length?Object(a.jsx)("ul",{children:t.habits.map((function(t){return Object(a.jsx)(m.b,{to:"".concat(O.a.HabitsList,"/").concat(t.id),children:Object(a.jsx)(b,{progress:"",title:t.title,id:t.id})},t.id)}))}):Object(a.jsx)("p",{children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u0447\u0435\u043a..."}),Object(a.jsx)("button",{type:"button",onClick:this.props.modalToggle,children:"+"})]})}}]),n}(o.Component),S={removeHabbit:A.a},T=Object(y.b)((function(t){return{habbits:t.habits}}),S)(C),k=n(3),E=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={error:!1},t}return Object(l.a)(n,[{key:"componentDidCatch",value:function(t,e){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(a.jsx)("h2",{children:"OOPS!"}):this.props.children}}]),n}(o.Component),w=n(38),L=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,57))})),M=Object(o.lazy)((function(){return n.e(6).then(n.bind(null,58))})),H=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,59))})),U=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,60))})),F=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={showModal:!1,users:[]},t.modalToggle=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t,e){}},{key:"render",value:function(){var t=this,e=this.state.showModal;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(x,{children:Object(a.jsx)(E,{children:Object(a.jsxs)(o.Suspense,{fallback:Object(a.jsx)("h1",{children:"Load"}),children:[Object(a.jsx)(k.a,{path:O.a.Authentification,exact:!0,component:L}),Object(a.jsx)(k.a,{path:O.a.Loginization,exact:!0,component:H}),Object(a.jsx)(k.a,{path:O.a.Registration,exact:!0,component:M}),Object(a.jsx)(k.a,{path:O.a.Profile,exact:!0,component:U}),Object(a.jsx)(k.a,{path:O.a.HabitsList,exact:!0,render:function(n){return Object(a.jsx)(T,Object(i.a)(Object(i.a)({},n),{},{modalToggle:t.modalToggle,showModal:e}))}}),Object(a.jsx)(k.a,{path:O.a.HabitProfile,exact:!0,render:function(n){return Object(a.jsx)(w.default,Object(i.a)(Object(i.a)({},n),{},{modalToggle:t.modalToggle,showModal:e}))}})]})})})})}}]),n}(o.Component),P=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,61)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),o(t),r(t),c(t)}))};c.a.render(Object(a.jsx)(y.a,{store:D.a,children:Object(a.jsx)(m.a,{children:Object(a.jsx)(F,{})})}),document.getElementById("root")),P()}},[[52,1,2]]]);
//# sourceMappingURL=main.eb3e4a35.chunk.js.map