var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function l(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){return null==t?"":t}const i="undefined"!=typeof window;let a=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const _=new Set;let k,w=0;function A(t,e,n,o,s,l,c,r=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*l(t);a+=100*t+`%{${c(o,1-o)}}\n`}const u=a+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=t.ownerDocument;_.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(g("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${d} ${o}ms linear ${s}ms 1 both`,w+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),w-=s,w||u(()=>{w||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function E(t){k=t}const S=[],F=[],M=[],O=[],T=Promise.resolve();let I=!1;function N(t){M.push(t)}let j=!1;const B=new Set;function R(){if(!j){j=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];E(e),z(e.$$)}for(E(null),S.length=0;F.length;)F.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];B.has(e)||(B.add(e),e())}M.length=0}while(S.length);for(;O.length;)O.pop()();I=!1,j=!1,B.clear()}}function z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let L;function P(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const W=new Set;let q;function D(){q={r:0,c:[],p:q}}function J(){q.r||s(q.c),q=q.p}function G(t,e){t&&t.i&&(W.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),q.c.push(()=>{W.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const K={duration:0};function Q(n,o,c,r){let i=o(n,c),h=r?0:1,p=null,m=null,g=null;function b(){g&&C(n,g)}function v(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:l=0,duration:c=300,easing:r=e,tick:$=t,css:x}=i||K,y={start:a()+l,b:o};o||(y.group=q,q.r+=1),p?m=y:(x&&(b(),g=A(n,h,o,c,l,r,x)),o&&$(0,1),p=v(y,c),N(()=>P(n,o,"start")),function(t){let e;0===d.size&&u(f),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(m&&t>m.start&&(p=v(m,c),m=null,P(n,p.b,"start"),x&&(b(),g=A(n,h,p.b,p.duration,0,r,i.css))),p)if(t>=p.end)$(h=p.b,1-h),P(n,p.b,"end"),m||(p.b?b():--p.group.r||s(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;h=p.a+p.d*r(e/p.duration),$(h,1-h)}return!(!p&&!m)}))}return{run(t){l(i)?(L||(L=Promise.resolve(),L.then(()=>{L=null})),L).then(()=>{i=i(),$(t)}):$(t)},end(){b(),p=m=null}}}function U(t,e){H(t,1,1,()=>{e.delete(t.key)})}function V(t,e){-1===t.$$.dirty[0]&&(S.push(t),I||(I=!0,T.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,c,r,i,a,u,d=[-1]){const f=k;E(e);const h=c.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=r?r(e,h,(t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),g&&V(e,t)),n}):[],p.update(),g=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();c.intro&&G(e.$$.fragment),function(t,e,o){const{fragment:c,on_mount:r,on_destroy:i,after_update:a}=t.$$;c&&c.m(e,o),N(()=>{const e=r.map(n).filter(l);i?i.push(...e):s(e),t.$$.on_mount=[]}),a.forEach(N)}(e,c.target,c.anchor),R()}E(f)}function Y(t){const e=t-1;return e*e*e+1}function Z(t,{delay:e=0,duration:n=400,easing:o=Y}){const s=getComputedStyle(t),l=+s.opacity,c=parseFloat(s.height),r=parseFloat(s.paddingTop),i=parseFloat(s.paddingBottom),a=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),f=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*l};height: ${t*c}px;padding-top: ${t*r}px;padding-bottom: ${t*i}px;margin-top: ${t*a}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function tt(t,e,n){const o=t.slice();return o[13]=e[n],o[14]=e,o[15]=n,o}function et(t){let e,n,o,s,l,c,i,a,u,d,f,_,k,w,A,C,E,S,F,M,O,T,I,N,j,B,R,z,L,P,W,q,K,Q,V,X=[],Y=new Map,Z=1===t[5]?"item":"items",et=t[3];const ot=t=>t[13].id;for(let e=0;e<et.length;e+=1){let n=tt(t,et,e),o=ot(n);Y.set(o,X[e]=nt(o,n))}return{c(){e=g("section"),n=g("ul");for(let t=0;t<X.length;t+=1)X[t].c();o=v(),s=g("section"),l=g("button"),c=b("Clear completed"),a=v(),u=g("ul"),d=g("li"),f=g("a"),_=b("All"),A=v(),C=g("li"),E=g("a"),S=b("Active"),O=v(),T=g("li"),I=g("a"),N=b("Completed"),R=v(),z=g("p"),L=b(t[5]),P=v(),W=b(Z),q=b(" remaining"),x(n,"class","todo-list svelte-s9fbh5"),x(l,"class",i="removeCompletedItems "+(t[4]?"":"visibilityCollapse")+" svelte-s9fbh5"),x(f,"href",k="#/"+t[0].All),x(f,"class",w=r(t[2]==t[0].All?"checked":"")+" svelte-s9fbh5"),x(E,"href",F="#/"+t[0].Active),x(E,"class",M=r(t[2]==t[0].Active?"checked":"")+" svelte-s9fbh5"),x(I,"href",j="#/"+t[0].Completed),x(I,"class",B=r(t[2]==t[0].Completed?"checked":"")+" svelte-s9fbh5"),x(u,"class","filter svelte-s9fbh5"),x(z,"class","todo-count"),x(s,"class","todo-footer svelte-s9fbh5"),x(e,"class","todo-body svelte-s9fbh5")},m(r,i){p(r,e,i),h(e,n);for(let t=0;t<X.length;t+=1)X[t].m(n,null);h(e,o),h(e,s),h(s,l),h(l,c),h(s,a),h(s,u),h(u,d),h(d,f),h(f,_),h(u,A),h(u,C),h(C,E),h(E,S),h(u,O),h(u,T),h(T,I),h(I,N),h(s,R),h(s,z),h(z,L),h(z,P),h(z,W),h(z,q),K=!0,Q||(V=$(l,"click",t[7]),Q=!0)},p(t,e){if(264&e){const o=t[3];D(),X=function(t,e,n,o,s,l,c,r,i,a,u,d){let f=t.length,h=l.length,p=f;const m={};for(;p--;)m[t[p].key]=p;const g=[],b=new Map,v=new Map;for(p=h;p--;){const t=d(s,l,p),r=n(t);let i=c.get(r);i?o&&i.p(t,e):(i=a(r,t),i.c()),b.set(r,g[p]=i),r in m&&v.set(r,Math.abs(p-m[r]))}const $=new Set,x=new Set;function y(t){G(t,1),t.m(r,u),c.set(t.key,t),u=t.first,h--}for(;f&&h;){const e=g[h-1],n=t[f-1],o=e.key,s=n.key;e===n?(u=e.first,f--,h--):b.has(s)?!c.has(o)||$.has(o)?y(e):x.has(s)?f--:v.get(o)>v.get(s)?(x.add(o),y(e)):($.add(s),f--):(i(n,c),f--)}for(;f--;){const e=t[f];b.has(e.key)||i(e,c)}for(;h;)y(g[h-1]);return g}(X,e,ot,1,t,o,Y,n,U,nt,null,tt),J()}(!K||16&e&&i!==(i="removeCompletedItems "+(t[4]?"":"visibilityCollapse")+" svelte-s9fbh5"))&&x(l,"class",i),(!K||1&e&&k!==(k="#/"+t[0].All))&&x(f,"href",k),(!K||5&e&&w!==(w=r(t[2]==t[0].All?"checked":"")+" svelte-s9fbh5"))&&x(f,"class",w),(!K||1&e&&F!==(F="#/"+t[0].Active))&&x(E,"href",F),(!K||5&e&&M!==(M=r(t[2]==t[0].Active?"checked":"")+" svelte-s9fbh5"))&&x(E,"class",M),(!K||1&e&&j!==(j="#/"+t[0].Completed))&&x(I,"href",j),(!K||5&e&&B!==(B=r(t[2]==t[0].Completed?"checked":"")+" svelte-s9fbh5"))&&x(I,"class",B),(!K||32&e)&&y(L,t[5]),(!K||32&e)&&Z!==(Z=1===t[5]?"item":"items")&&y(W,Z)},i(t){if(!K){for(let t=0;t<et.length;t+=1)G(X[t]);K=!0}},o(t){for(let t=0;t<X.length;t+=1)H(X[t]);K=!1},d(t){t&&m(e);for(let t=0;t<X.length;t+=1)X[t].d();Q=!1,V()}}}function nt(t,e){let n,o,l,c,r,i,a,u,d,f,_,k,w,A=e[13].description+"";function C(){e[9].call(o,e[14],e[15])}function E(...t){return e[10](e[15],...t)}return{key:t,first:null,c(){n=g("li"),o=g("input"),l=v(),c=g("p"),r=b(A),i=v(),a=g("button"),a.textContent="×",u=v(),x(o,"class","completeToggle svelte-s9fbh5"),x(o,"type","checkbox"),x(c,"class","description svelte-s9fbh5"),x(a,"class","removeItem svelte-s9fbh5"),x(n,"class",d="todo-item "+(e[13].completed?"completed":"")+" svelte-s9fbh5"),this.first=n},m(t,s){p(t,n,s),h(n,o),o.checked=e[13].completed,h(n,l),h(n,c),h(c,r),h(n,i),h(n,a),h(n,u),_=!0,k||(w=[$(o,"change",C),$(a,"click",E)],k=!0)},p(t,s){e=t,8&s&&(o.checked=e[13].completed),(!_||8&s)&&A!==(A=e[13].description+"")&&y(r,A),(!_||8&s&&d!==(d="todo-item "+(e[13].completed?"completed":"")+" svelte-s9fbh5"))&&x(n,"class",d)},i(t){_||(N(()=>{f||(f=Q(n,Z,{},!0)),f.run(1)}),_=!0)},o(t){f||(f=Q(n,Z,{},!1)),f.run(0),_=!1},d(t){t&&m(n),t&&f&&f.end(),k=!1,s(w)}}}function ot(t){let e,n,o,s,l,c,r,i,a,u,d,f=t[1].length>0&&et(t);return{c(){e=g("h1"),e.textContent="todos",n=v(),o=g("section"),s=g("section"),l=g("div"),c=v(),r=g("input"),i=v(),f&&f.c(),x(e,"class","svelte-s9fbh5"),x(l,"class","empty svelte-s9fbh5"),x(r,"class","todo-input svelte-s9fbh5"),x(r,"placeholder","What needs to be done?"),r.autofocus=!0,x(r,"size","22"),x(s,"class","todo-header svelte-s9fbh5"),x(o,"class","todo-app svelte-s9fbh5")},m(m,g){p(m,e,g),p(m,n,g),p(m,o,g),h(o,s),h(s,l),h(s,c),h(s,r),h(o,i),f&&f.m(o,null),a=!0,r.focus(),u||(d=$(r,"keydown",t[6]),u=!0)},p(t,[e]){t[1].length>0?f?(f.p(t,e),2&e&&G(f,1)):(f=et(t),f.c(),G(f,1),f.m(o,null)):f&&(D(),H(f,1,1,()=>{f=null}),J())},i(t){a||(G(f),a=!0)},o(t){H(f),a=!1},d(t){t&&m(e),t&&m(n),t&&m(o),f&&f.d(),u=!1,d()}}}function st(t,e,n){var o;let s;!function(t){t.All="",t.Active="active",t.Completed="completed"}(o||(o={}));let l=o.All;try{s=JSON.parse(localStorage.getItem("todos-svelte"))||[]}catch(t){s=[]}function c(){const t=window.location.hash;t==="#/"+o.Active?n(2,l=o.Active):t==="#/"+o.Completed?n(2,l=o.Completed):n(2,l=o.All)}function r(t){n(1,s=[...s.slice(0,t),...s.slice(t+1)])}window.addEventListener("hashchange",c),c();let i,a,u;return t.$$.update=()=>{if(7&t.$$.dirty&&n(3,i=l===o.Active?s.filter(t=>!t.completed):l===o.Completed?s.filter(t=>t.completed):s),2&t.$$.dirty&&n(4,a=s.filter(t=>t.completed).length),18&t.$$.dirty&&n(5,u=s.length-a),2&t.$$.dirty)try{localStorage.setItem("todos-svelte",JSON.stringify(s))}catch(t){}},[o,s,l,i,a,u,function(t){const e=t.key,o=t.target.value.trim();var l;"Enter"==e&&""!==o&&(l={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})),description:o,completed:!1},n(1,s=[...s,l]),t.target.value="")},function(){n(1,s=s.filter(t=>!t.completed))},r,function(t,e){t[e].completed=this.checked,n(3,i),n(2,l),n(0,o),n(1,s)},t=>r(t)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),X(this,t,st,ot,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
