import{_ as c,a as m,u as g}from"./api.affbf177.js";import{h as f,i as h,o as p,a as $,b as e,t as o,r as w,f as n,u as y,c as b,w as r,j as x,k}from"./entry.056bb0bb.js";const v={class:"font-weight-bold pull-right text-[18px]"},B={class:"mb-6"},C={class:"font-light my-5 block text-right text-[12px] text-gray-900 dark:text-gray-300"},A={class:"my-1 font-light"},L={class:"font-light"},N={class:"font-weight-light mt-5 w-full text-right text-[10px]"},S=f({__name:"NtmLoginBox",setup(u){var s,i;const l=(i=(s=h())==null?void 0:s.digimarket)==null?void 0:i.title;return(t,a)=>(p(),$("div",null,[e("h1",v,o(t.$t("login","Login")),1),e("div",null,[e("div",B,[e("div",C,[e("p",A,o(t.$t("hello","Hello")),1),e("p",L,o(t.$t("welocme","welcome")),1)]),w(t.$slots,"default",{},()=>[n(c),n(m)]),e("button",{onClick:a[0]||(a[0]=_=>t.$emit("action",t.credential)),class:"btn-primary w-full mt-5 py-3.5"},o(t.$t("ntm.login_title","Login")),1),e("p",N,o(t.$t("ntm.terms_and_conditions",{title:t.$t(y(l))})),1)])])]))}}),D={__name:"login",setup(u){async function l(s){g().then(i=>{k().push("./verify")})}return(s,i)=>{const t=c,a=m,_=S,d=x;return p(),b(d,{name:"ntm-auth"},{default:r(()=>[n(_,{onAction:l},{default:r(()=>[n(t,{mobile:""}),n(a,{password:""})]),_:1})]),_:1})}}};export{D as default};