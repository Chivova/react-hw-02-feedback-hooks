(this["webpackJsonpreact-hw-02-feedback-hooks"]=this["webpackJsonpreact-hw-02-feedback-hooks"]||[]).push([[0],{12:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),i=a.n(n),r=(a(12),a(4)),o=a(3),b=a.n(o),d=a(0);function l(e){var t=e.onLeaveFeedback;return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("button",{className:b.a.btn,type:"button",name:"good",onClick:t,children:"Good"}),Object(d.jsx)("button",{className:b.a.btn,type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(d.jsx)("button",{className:b.a.btn,type:"button",name:"bad",onClick:t,children:"Bad"})]})}var j=a(2),u=a.n(j);function h(e){var t=e.good,a=void 0===t?0:t,s=e.neutral,n=void 0===s?0:s,i=e.bad,r=void 0===i?0:i,o=e.totalFeedback,b=void 0===o?0:o,l=e.positiveFeedbackPercentage,j=void 0===l?0:l;return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)("ul",{className:u.a.statisticsList,children:[Object(d.jsxs)("li",{className:u.a.statisticsItem,children:["Good: ",a]}),Object(d.jsxs)("li",{className:u.a.statisticsItem,children:["Neutral: ",n]}),Object(d.jsxs)("li",{className:u.a.statisticsItem,children:["Bad: ",r]})]}),Object(d.jsxs)("p",{className:u.a.totalFeedbackText,children:["Total: ",b]}),Object(d.jsxs)("p",{className:u.a.perFeedbackText,children:["Positive feedback: ",j,"%"]})]})}var x=a(6),O=a.n(x);function k(e){var t=e.title,a=e.children;return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("h1",{children:t}),a]})}function m(e){var t=e.message;return Object(d.jsx)("h2",{children:t})}k.protoType={title:O.a.string.isRequired,children:O.a.node.isRequired};a(16);function f(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),i=Object(r.a)(n,2),o=i[0],b=i[1],j=Object(c.useState)(0),u=Object(r.a)(j,2),x=u[0],O=u[1],f=function(){return a+o+x};return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(k,{title:"Please leave feedback",children:Object(d.jsx)(l,{onLeaveFeedback:function(e){switch(e.currentTarget.name){case"good":s((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}})}),f()?Object(d.jsx)(k,{title:"Statistics",children:Object(d.jsx)(h,{good:a,neutral:o,bad:x,totalFeedback:f(),positiveFeedbackPercentage:function(){var e=f();return Math.round(a/e*100)}()})}):Object(d.jsx)(m,{message:"No feedback given"})]})}i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={statisticsList:"Statistics_statisticsList__3G1N4",statisticsItem:"Statistics_statisticsItem__K6iB_",totalFeedbackText:"Statistics_totalFeedbackText__qReAf",perFeedbackText:"Statistics_perFeedbackText__bobYi"}},3:function(e,t,a){e.exports={btn:"FeedbackOptions_btn__2soxC"}}},[[17,1,2]]]);
//# sourceMappingURL=main.152600e1.chunk.js.map