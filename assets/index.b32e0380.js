import{_ as le}from"./index.056cf7da.js";import{b as ce}from"./index.10fcb9a3.js";const de=Symbol(),X=Object.getPrototypeOf,F=new WeakMap,ue=e=>e&&(F.has(e)?F.get(e):X(e)===Object.prototype||X(e)===Array.prototype),pe=e=>ue(e)&&e[de]||null,Y=(e,t=!0)=>{F.set(e,t)},J=e=>typeof e=="object"&&e!==null,C=new WeakMap,B=new WeakSet,fe=(e=Object.is,t=(o,h)=>new Proxy(o,h),s=o=>J(o)&&!B.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,h,I=r)=>{const w=l.get(o);if(w?.[0]===h)return w[1];const b=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return Y(b,!0),l.set(o,[h,b]),Reflect.ownKeys(o).forEach(U=>{if(Object.getOwnPropertyDescriptor(b,U))return;const O=Reflect.get(o,U),M={value:O,enumerable:!0,configurable:!0};if(B.has(O))Y(O,!1);else if(O instanceof Promise)delete M.value,M.get=()=>I(O);else if(C.has(O)){const[y,z]=C.get(O);M.value=c(y,z(),I)}Object.defineProperty(b,U,M)}),b},m=new WeakMap,p=[1,1],W=o=>{if(!J(o))throw new Error("object required");const h=m.get(o);if(h)return h;let I=p[0];const w=new Set,b=(a,i=++p[0])=>{I!==i&&(I=i,w.forEach(n=>n(a,i)))};let U=p[1];const O=(a=++p[1])=>(U!==a&&!w.size&&(U=a,y.forEach(([i])=>{const n=i[1](a);n>I&&(I=n)})),I),M=a=>(i,n)=>{const g=[...i];g[1]=[a,...g[1]],b(g,n)},y=new Map,z=(a,i)=>{if(w.size){const n=i[3](M(a));y.set(a,[i,n])}else y.set(a,[i])},Q=a=>{var i;const n=y.get(a);n&&(y.delete(a),(i=n[1])==null||i.call(n))},ie=a=>(w.add(a),w.size===1&&y.forEach(([n,g],_)=>{const T=n[3](M(_));y.set(_,[n,T])}),()=>{w.delete(a),w.size===0&&y.forEach(([n,g],_)=>{g&&(g(),y.set(_,[n]))})}),H=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(H,{deleteProperty(a,i){const n=Reflect.get(a,i);Q(i);const g=Reflect.deleteProperty(a,i);return g&&b(["delete",[i],n]),g},set(a,i,n,g){const _=Reflect.has(a,i),T=Reflect.get(a,i,g);if(_&&(e(T,n)||m.has(n)&&e(T,m.get(n))))return!0;Q(i),J(n)&&(n=pe(n)||n);let $=n;if(n instanceof Promise)n.then(A=>{n.status="fulfilled",n.value=A,b(["resolve",[i],A])}).catch(A=>{n.status="rejected",n.reason=A,b(["reject",[i],A])});else{!C.has(n)&&s(n)&&($=W(n));const A=!B.has($)&&C.get($);A&&z(i,A)}return Reflect.set(a,i,$,g),b(["set",[i],n,T]),!0}});m.set(o,V);const ae=[H,O,c,ie];return C.set(V,ae),Reflect.ownKeys(o).forEach(a=>{const i=Object.getOwnPropertyDescriptor(o,a);"value"in i&&(V[a]=o[a],delete i.value,delete i.writable),Object.defineProperty(H,a,i)}),V})=>[W,C,B,e,t,s,r,l,c,m,p],[me]=fe();function D(e={}){return me(e)}function S(e,t,s){const r=C.get(e);let l;const c=[],m=r[3];let p=!1;const o=m(h=>{if(c.push(h),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,p&&t(c.splice(0))}))});return p=!0,()=>{p=!1,o()}}function ge(e,t){const s=C.get(e),[r,l,c]=s;return c(r,l(),t)}const d=D({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),re={state:d,subscribe(e){return S(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return f.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)},setModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(f.WCM_VERSION,"2.5.4")},getWalletRouterData(){var e;const t=(e=re.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},he=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=D({enabled:he,userSessionId:"",events:[],connectedWalletId:void 0}),we={state:u,subscribe(e){return S(u.events,()=>e(ge(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},E=D({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),v={state:E,subscribe(e){return S(E,()=>e(E))},setChains(e){E.chains=e},setWalletConnectUri(e){E.walletConnectUri=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setIsAuth(e){E.isAuth=e}},x=D({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:x,subscribe(e){return S(x,()=>e(x))},setConfig(e){var t,s;we.initialize(),v.setChains(e.chains),v.setIsAuth(Boolean(e.enableAuthMode)),v.setIsCustomMobile(Boolean((t=e.mobileWallets)==null?void 0:t.length)),v.setIsCustomDesktop(Boolean((s=e.desktopWallets)==null?void 0:s.length)),f.setModalVersionInStorage(),Object.assign(x,e)}},G="https://explorer-api.walletconnect.com";async function K(e,t){const s=new URL(e,G);return s.searchParams.append("projectId",N.state.projectId),Object.entries(t).forEach(([r,l])=>{l&&s.searchParams.append(r,String(l))}),(await fetch(s)).json()}const j={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}`}};var be=Object.defineProperty,Z=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ee=(e,t,s)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ie=(e,t)=>{for(var s in t||(t={}))ye.call(t,s)&&ee(e,s,t[s]);if(Z)for(var s of Z(t))ve.call(t,s)&&ee(e,s,t[s]);return e};const te=f.isMobile(),L=D({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Pe={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(f.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await j.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const p=e.indexOf(c.id),W=e.indexOf(m.id);return p-W}),L.recomendedWallets=l}else{const{chains:s,isAuth:r}=v.state,l=s?.join(","),c=f.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:p}=te?await j.getMobileListings(m):await j.getDesktopListings(m);L.recomendedWallets=Object.values(p)}return L.recomendedWallets},async getWallets(e){const t=Ie({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=L;if(r==="ALL")return L.wallets;t.search||(l.length?t.excludedIds=l.map(I=>I.id).join(","):f.isArray(s)&&(t.excludedIds=s.join(","))),f.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),v.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:p,total:W}=te?await j.getMobileListings(t):await j.getDesktopListings(t),o=Object.values(p),h=m?"search":"wallets";return L[h]={listings:[...L[h].listings,...o],total:W,page:c??1},{listings:o,total:W}},getWalletImageUrl(e){return j.getWalletImageUrl(e)},getAssetImageUrl(e){return j.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},R=D({open:!1}),q={state:R,subscribe(e){return S(R,()=>e(R))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=v.state;if(v.setWalletConnectUri(e?.uri),v.setChains(e?.chains),re.reset("ConnectWallet"),s&&r)R.open=!0,t();else{const l=setInterval(()=>{const c=v.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),R.open=!0,t())},200)}})},close(){R.open=!1}};var Ee=Object.defineProperty,se=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Le.call(t,s)&&oe(e,s,t[s]);if(se)for(var s of se(t))Oe.call(t,s)&&oe(e,s,t[s]);return e};function Ae(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const k=D({themeMode:Ae()?"dark":"light"}),ne={state:k,subscribe(e){return S(k,()=>e(k))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(k.themeMode=t),s&&(k.themeVariables=We({},s))}},P=D({open:!1,message:"",variant:"success"}),Se={state:P,subscribe(e){return S(P,()=>e(P))},openToast(e,t){P.open=!0,P.message=e,P.variant=t},closeToast(){P.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=ce.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class Ce{constructor(t){this.openModal=q.open,this.closeModal=q.close,this.subscribeModal=q.subscribe,this.setTheme=ne.setThemeConfig,ne.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await le(()=>import("./index.70eeae4c.js"),["assets/index.70eeae4c.js","assets/index.056cf7da.js","assets/index.374aca6f.css","assets/index.10fcb9a3.js"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),v.setIsUiLoaded(!0)}}}var Ue=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ce},Symbol.toStringTag,{value:"Module"}));export{we as $,N as C,Pe as G,re as N,q as Q,ne as X,Se as Y,Ue as a,v as c,f as i};
