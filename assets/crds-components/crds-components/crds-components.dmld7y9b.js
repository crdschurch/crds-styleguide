/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='crds-components']"));
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)g.push(arguments[r]);for(;g.length>0;){let t=g.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)g.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&g.push(r);t.class=g.join(" "),g.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],k):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",i={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},a=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.i||1===o.i&&!t.u.s)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.p.head;if(n.s)if(1===o.i)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let l=t.m.get(e);if(l||t.m.set(e,l={}),!l[s]){let t;{t=r.content.cloneNode(!0),l[s]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},f=e=>null!=e,u=e=>e.toLowerCase(),p=(e,t,n,o,l,i)=>{if("class"!==n||i)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!i&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?v(t,n,l):"ref"!==n&&(v(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",u(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS("http://www.w3.org/1999/xlink",u(t),n):e.setAttribute(t,n))})(t,n,l):(i||e.u.j(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=u(n)in t?u(n.substring(2)):u(n[2])+n.substring(3),l?l!==o&&e.u.C(t,n,l):e.u.W(t,n);else if(o!==l){const e=m(o),n=m(l),i=e.filter(e=>!n.includes(e)),s=m(t.className).filter(e=>!i.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},m=e=>null==e||""===e?[]:e.trim().split(/\s+/),v=(e,t,n)=>{try{e[t]=n}catch(e){}},b=(e,t,n,o,l)=>{const s=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||i,a=n.vattrs||i;for(l in r)a&&null!=a[l]||null==r[l]||p(e,s,l,r[l],void 0,o,n.l);for(l in a)l in r&&a[l]===("value"===l||"checked"===l?s[l]:r[l])||p(e,s,l,r[l],a[l],o,n.l)};let y=!1;const M=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{M(e,t)}))},$=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(m))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},m=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(m):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},g=[],k={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},j=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{N:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={S:n[1],O:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},a),i:s,R:r?r.map(C):void 0}},C=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),W=(e,t)=>f(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,N=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>S(e,t,n)):e.queue.tick(()=>S(e,t,n)))},S=async(e,n,l,i,s,r)=>{if(e.F.delete(n),!e.U.has(n)){if(!(s=e.Z.get(n))){if((r=e.G.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{S(e,n,l)});if(s=T(e,n,e.J.get(n),l))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.K(t,3,n)}}((e,n,l,i)=>{try{const s=n.V.host,r=n.V.encapsulation,a="shadow"===r&&e.u.s;let c,f=l;if(a&&(f=l.shadowRoot),!l["s-rn"]){e.X(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.Y(l,t(o,!0)),"scoped"===r&&e.u.Y(l,t(o)))}if(i.render||i.hostData||s||c){e._=!0;const t=i.render&&i.render();let n;e._=!1;const s=o(null,n,t),c=e.ee.get(l)||{};c.o=f,e.ee.set(l,e.render(l,c,s,a,r))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e._=!1,e.K(t,8,l,!0)}})(e,e.M(n),n,s),n["s-init"]()}},E=(e,t,n,o,l,i,s,r,a)=>{if(t.type||t.state){const c=e.te.get(n);t.state||(!t.attr||void 0!==c[l]&&""!==c[l]||(r=i&&i.ne)&&f(a=r[t.attr])&&(c[l]=W(t.type,a)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=W(t.type,n[l])),"mode"!==l&&delete n[l])),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),A(o,l,function c(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&(t.state||t.mutable)&&O(e,o,l,n,s)})}},O=(e,t,n,o,l,i,s)=>{(s=e.te.get(t))||e.te.set(t,s={}),o!==s[n]&&(s[n]=o,e.Z.get(t)&&!e._&&t["s-rn"]&&N(e,t,l))},A=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},T=(e,t,n,o,l,i,s,r)=>{try{l=new(i=e.M(t).V),((e,t,n,o,l,i)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{E(e,s,n,o,t,l,i)})})(e,i,t,l,n,o);try{if(s=e.le.get(t)){for(r=0;r<s.length;r+=2)l[s[r]](s[r+1]);e.le.delete(t)}}catch(n){e.K(n,2,t)}}catch(n){l={},e.K(n,7,t,!0)}return e.Z.set(t,l),l},R=(e,t,n,o,l,i)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.ie.length&&!e.P.size)for(;i=e.ie.shift();)i()},L=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.S&&A(n,t,function n(){return(e.te.get(this)||{})[t]},function n(i){O(e,this,t,W(l.A,i),o)})})},D=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.se.has(n)||(e.se.set(n,!0),function o(e,t){const n=e.M(t);n.R&&n.R.forEach(n=>{n.q||e.u.C(t,n.L,function o(e,t,n,l){return o=>{(l=e.Z.get(t))?l[n](o):((l=e.le.get(t)||[]).push(n,o),e.le.set(t,l))}}(e,t,n.D),n.I,n.B)})}(e,n)),e.U.delete(n),e.re.has(n)||(e.ae=!0,e.P.add(n),e.re.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.ce(n);)if(e.fe(n)){e.ue.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.pe(n)),n["s-cr"]||e.de(n,"ssrv")||e.s&&1===t.i||(n["s-cr"]=e.me(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.ve(n)[0])),1===t.i&&e.s&&!n.shadowRoot&&e.be(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(i=>{(l=t.g[i].N)&&(o.ne[l]=e.de(n,l))}),o))(e.u,t,n)),e.he(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.ye&&((e,t)=>{for(;t;){if(!e.we(t))return 9!==e.Me(t);t=e.we(t)}})(e.u,t)&&(e.U.set(t,!0),R(e,t),M(e.ee.get(t),!0),e.u.W(t),e.se.delete(t),[e.G,e.$e,e.J].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i)=>{if(e.Z.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.ue.set(t,!0),e.ge.has(t)||(e.ge.set(t,!0),t["s-ld"]=void 0,e.u.Y(t,n));try{M(e.ee.get(t)),(i=e.$e.get(t))&&(i.forEach(e=>e(t)),e.$e.delete(t))}catch(n){e.K(n,4,t)}R(e,t)}})(e,this,o)},n.forceUpdate=function(){N(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[u(n)];l&&(t[l]=o)})(e,this,t,o)}}L(e,o,n,l)}};((e,t,n,i,r,c,p)=>{const d=n.performance,m={html:{}},v=n[e]=n[e]||{},h=((e,t,n)=>{const o=new WeakMap,l={p:n,s:!!n.documentElement.attachShadow,ke:!1,Me:e=>e.nodeType,je:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),me:e=>n.createTextNode(e),We:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),Ne:e=>e.remove(),Se:(e,t)=>e.appendChild(t),Y:(e,t)=>{e.classList.add(t)},ve:e=>e.childNodes,we:e=>e.parentNode,xe:e=>e.nextSibling,Ee:e=>e.previousSibling,Oe:e=>u(e.nodeName),Ae:e=>e.textContent,Te:(e,t)=>e.textContent=t,de:(e,t)=>e.getAttribute(t),Re:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),j:(e,t)=>e.hasAttribute(t),pe:t=>t.getAttribute("mode")||(e.Context||{}).mode,Le:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.ce(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,C:(t,n,i,r,a,c,f,u,p)=>{let d=t,m=i,v=o.get(t);p=n,v&&v[p]&&v[p](),"string"==typeof c?d=l.Le(t,c):"object"==typeof c?d=c:(u=n.split(":")).length>1&&(d=l.Le(t,u[0]),n=u[1]),d&&((u=n.split(".")).length>1&&(n=u[0],m=(e=>{e.keyCode===s[u[1]]&&i(e)})),f=l.ke?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,m,f),v||o.set(t,v={}),v[p]=(()=>{d&&e.rel(d,n,m,f),v[p]=null}))},W:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},De:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),ce:(e,t)=>(t=l.we(e))&&11===l.Me(t)?t.host:t,qe:(e,t,n,o)=>e.setAttributeNS(t,n,o),be:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>l.ke=!0}))}catch(e){}return l})(v,n,i),w=h.p.documentElement,M=n["s-defined"]=n["s-defined"]||{},g=(e,t)=>{n.customElements.get(e.t)||(D(k,m[e.t]=e,t.prototype,c,d),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},k={u:h,Be:g,M:e=>m[h.Oe(e)],Ie:e=>t[e],isClient:!0,fe:e=>!(!M[h.Oe(e)]&&!k.M(e)),K:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=$(v,n),he:(e,t)=>{{const n=e.T,o=!h.s;let i=r+n+(o?".sc":"")+".entry.js";import(i).then(n=>{try{e.V=n[(e=>u(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.je("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.Se(e.p.head,o)}}}(h,e,e.i,e.V.style,e.V.styleMode),N(k,t,d)}catch(t){console.error(t),e.V=class{}}},e=>console.error(e,i))}},_:!1,H:!1,ye:!1,X:a,G:new WeakMap,m:new WeakMap,re:new WeakMap,se:new WeakMap,ge:new WeakMap,ue:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,$e:new WeakMap,le:new WeakMap,ee:new WeakMap,te:new WeakMap,P:new Set,ie:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=i,t.resourcesUrl=t.publicPath=r,t.enableListener=((e,t,n,o,l)=>(function i(e,t,n,o,l,s){if(t){const i=e.oe.get(t),r=e.M(i);if(r&&r.R)if(o){const o=r.R.find(e=>e.L===n);o&&e.u.C(i,n,e=>t[o.D](e),o.I,void 0===s?o.B:!!s,l)}else e.u.W(i,n)}})(k,e,t,n,o,l)),v.h=o,v.Context=t,v.onReady=(()=>new Promise(e=>k.queue.write(()=>k.P.size?k.ie.push(e):e()))),k.render=((e,t)=>{let n,o,l,i,s,r,a;const c=(l,p,d,m,v,h,w,M,$)=>{if(M=p.vchildren[d],n||(i=!0,"slot"===M.vtag&&(o&&t.Y(m,o+"-s"),M.vchildren?M.Pe=!0:M.Fe=!0)),f(M.vtext))M.o=t.me(M.vtext);else if(M.Fe)M.o=t.me("");else{if(h=M.o=y||"svg"===M.vtag?t.Ce("http://www.w3.org/2000/svg",M.vtag):t.je(M.Pe?"slot-fb":M.vtag),e.fe(h)&&e.ue.delete(a),y="svg"===M.vtag||"foreignObject"!==M.vtag&&y,b(e,null,M,y),f(o)&&h["s-si"]!==o&&t.Y(h,h["s-si"]=o),M.vchildren)for(v=0;v<M.vchildren.length;++v)(w=c(l,M,v,h))&&t.Se(h,w);"svg"===M.vtag&&(y=!1)}return M.o["s-hn"]=r,(M.Pe||M.Fe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=l&&l.vchildren&&l.vchildren[d])&&$.vtag===M.vtag&&l.o&&u(l.o)),M.o},u=(n,o,l,s)=>{e.ye=!0;const a=t.ve(n);for(l=a.length-1;l>=0;l--)(s=a[l])["s-hn"]!==r&&s["s-ol"]&&(t.Ne(s),t.v(h(s),s,v(s)),t.Ne(s["s-ol"]),s["s-ol"]=null,i=!0),o&&u(s,o);e.ye=!1},p=(e,n,o,l,i,s,a,u)=>{const p=e["s-cr"];for((a=p&&t.we(p)||e).shadowRoot&&t.Oe(a)===r&&(a=a.shadowRoot);i<=s;++i)l[i]&&(u=f(l[i].vtext)?t.me(l[i].vtext):c(null,o,i,e))&&(l[i].o=u,t.v(a,u,v(n)))},d=(e,n,o,i)=>{for(;n<=o;++n)f(e[n])&&(i=e[n].o,l=!0,i["s-ol"]?t.Ne(i["s-ol"]):u(i,!0),t.Ne(i))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),v=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.we(e["s-ol"]?e["s-ol"]:e),w=(n,o,l)=>{const i=o.o=n.o,s=n.vchildren,r=o.vchildren;y=o.o&&f(t.ce(o.o))&&void 0!==o.o.ownerSVGElement,y="svg"===o.vtag||"foreignObject"!==o.vtag&&y,f(o.vtext)?(l=i["s-cr"])?t.Te(t.we(l),o.vtext):n.vtext!==o.vtext&&t.Te(i,o.vtext):("slot"!==o.vtag&&b(e,n,o,y),f(s)&&f(r)?((e,n,o,l,i,s,r,a)=>{let b=0,y=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,j=l[0],C=l[k];for(;b<=M&&y<=k;)if(null==$)$=n[++b];else if(null==g)g=n[--M];else if(null==j)j=l[++y];else if(null==C)C=l[--k];else if(m($,j))w($,j),$=n[++b],j=l[++y];else if(m(g,C))w(g,C),g=n[--M],C=l[--k];else if(m($,C))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.we($.o)),w($,C),t.v(e,$.o,t.xe(g.o)),$=n[++b],C=l[--k];else if(m(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.we(g.o)),w(g,j),t.v(e,g.o,$.o),g=n[--M],j=l[++y];else{for(i=null,s=b;s<=M;++s)if(n[s]&&f(n[s].vkey)&&n[s].vkey===j.vkey){i=s;break}f(i)?((a=n[i]).vtag!==j.vtag?r=c(n&&n[y],o,i,e):(w(a,j),n[i]=void 0,r=a.o),j=l[++y]):(r=c(n&&n[y],o,y,e),j=l[++y]),r&&t.v(h($.o),r,v($.o))}b>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,y,k):y>k&&d(n,b,M)})(i,s,o,r):f(r)?(f(n.vtext)&&t.Te(i,""),p(i,null,o,r,0,r.length-1)):f(s)&&d(s,0,s.length-1)),y&&"svg"===o.vtag&&(y=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.ve(e)).length;l<i;l++)if(n=o[l],1===t.Me(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.Me(o[s]),""!==r){if(1===a&&r===t.de(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Ae(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,i,s,r,a,c,f,u)=>{for(s=0,r=(n=t.ve(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(i=o["s-cr"]))for(c=t.ve(t.we(i)),f=o["s-sn"],a=c.length-1;a>=0;a--)(i=c[a])["s-cn"]||i["s-nr"]||i["s-hn"]===o["s-hn"]||((3===(u=t.Me(i))||8===u)&&""===f||1===u&&null===t.de(i,"slot")&&""===f||1===u&&t.de(i,"slot")===f)&&($.some(e=>e.He===i)||(l=!0,i["s-sn"]=f,$.push({Qe:o,He:i})));1===t.Me(o)&&g(o)}};return(c,f,u,p,d,m,v,b,h,y,k,j)=>{if(a=c,r=t.Oe(a),s=a["s-cr"],n=p,o=a["s-sc"],i=l=!1,w(f,u),i){for(g(u.o),v=0;v<$.length;v++)(b=$[v]).He["s-ol"]||((h=t.me(""))["s-nr"]=b.He,t.v(t.we(b.He),b.He["s-ol"]=h,b.He));for(e.ye=!0,v=0;v<$.length;v++){for(b=$[v],k=t.we(b.Qe),j=t.xe(b.Qe),h=b.He["s-ol"];h=t.Ee(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===b.He["s-sn"]&&k===t.we(y)&&(y=t.xe(y))&&y&&!y["s-nr"]){j=y;break}(!j&&k!==t.we(b.He)||t.xe(b.He)!==j)&&b.He!==j&&(t.Ne(b.He),t.v(k,b.He,j))}e.ye=!1}return l&&M(u.o),$.length=0,u}})(k,h),w["s-ld"]=[],w["s-rn"]=!0,w["s-init"]=(()=>{k.ue.set(w,v.loaded=k.H=!0),h.De(n,"appload",{detail:{namespace:e}})}),p.map(j).forEach(e=>g(e,class extends HTMLElement{})),k.ae||w["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.ue.has(t))n(t);else{const o=e.$e.get(t)||[];o.push(n),e.$e.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})(k,v,n,n["s-apps"],n["s-cr"]),v.initialized=!0,k})(n,x,w,d,r,h,c);
})(window,document,{},"CrdsComponents","hydrated",[["give-nav","8cbkhre1",1,[["giveNavIsShowing",1,0,"give-nav-is-showing",4]],1,[["click","handleClick"]]],["global-nav","8cbkhre1",1,[["authenticated",16],["config",1],["env",1,0,1,2],["giveNavIsShowing",1,0,"give-nav-is-showing",4],["href",1,0,1,2],["mainNavIsShowing",1,0,"main-nav-is-showing",4],["navClickHandler",1],["profileNavIsShowing",1,0,"profile-nav-is-showing",4]],1],["heart-button","uejmidy6",1,[["_likes",16],["count",2,0,1,8],["id",1,0,1,2],["isLiked",2,0,"is-liked",4],["key",1,0,1,2]],1],["nav-ctas","8cbkhre1",1,[["active",1,0,1,2],["href",1,0,1,2]],1],["nav-section","8cbkhre1",1,[["activeSection",2,0,"active-section",1],["id",1,0,1,2],["isActive",1,0,"is-active",4],["onActivate",1,0,"on-activate",1]]],["nav-section-subnav","8cbkhre1",1,[["active",2,0,1,2],["id",1,0,1,2],["onBack",1]]],["profile-nav","8cbkhre1",1,[["config",1,0,1,1],["currentUser",1,0,"current-user",1],["onSignOut",1],["profileNavIsShowing",1,0,"profile-nav-is-showing",4]],1,[["click","handleClick"]]],["shared-footer","2x1foecn",1,[["data",16],["env",1,0,1,2],["src",1,0,1,2]],1],["shared-header","8cbkhre1",1,[["active",16],["data",16],["env",1,0,1,2],["giveNavIsShowing",16],["mainNavIsShowing",16],["profileNavIsShowing",16],["src",1,0,1,2]],1,[["window:click","handleScroll"]]],["snail-trail","yzjtfrsy",1,[["data",16],["env",1,0,1,2],["name",1,0,1,2],["src",1,0,1,2]],1]]);