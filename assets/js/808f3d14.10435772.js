"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,f=m["".concat(o,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},l="**Numtrip Blog**",s={permalink:"/EF-Informatik/Numtrip",editUrl:"https://github.com/Gerhard-69/EF-Informatik/tree/main/blog/Numtrip.md",source:"@site/blog/Numtrip.md",title:"**Numtrip Blog**",description:"Numtrip ist ein Denkspiel das \xe4hnlichkeiten dem sehr popul\xe4ren Spiel 2048 hat. Das Feld besteht auf gleich viel Reihen und Zeilen. Die Felder sind gef\xfcllt zuf\xe4lligen geraden Zahlen. Man kann ein Feld ausw\xe4hlen, wenn ein anligendes Feld mit der selben Zahl gef\xfcllt werden diese und die mit diesem Feld anliegende Verbunden. Das ausgew\xe4hlte feld wird verdoppelt. Das ganze geht so bis man 1024 erreicht hat.",date:"2023-01-27T14:45:26.000Z",formattedDate:"27. Januar 2023",tags:[],readingTime:.78,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Datenstruktur",permalink:"/EF-Informatik/Datenstruktur"},nextItem:{title:"Top-Down-Entwurf",permalink:"/EF-Informatik/Top-Down-Entwurf"}},o={authorsImageUrls:[]},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ziel-des-spiels"},"Ziel des Spiels"),(0,i.kt)("p",null,"Numtrip ist ein Denkspiel das \xe4hnlichkeiten dem sehr popul\xe4ren Spiel 2048 hat. Das Feld besteht auf gleich viel Reihen und Zeilen. Die Felder sind gef\xfcllt zuf\xe4lligen geraden Zahlen. Man kann ein Feld ausw\xe4hlen, wenn ein anligendes Feld mit der selben Zahl gef\xfcllt werden diese und die mit diesem Feld anliegende Verbunden. Das ausgew\xe4hlte feld wird verdoppelt. Das ganze geht so bis man 1024 erreicht hat."),(0,i.kt)("h1",{id:"umsetzung-des-spiels"},"Umsetzung des Spiels"),(0,i.kt)("h1",{id:"gr\xf6sste-herrausforderung"},"Gr\xf6sste Herrausforderung"),(0,i.kt)("p",null,"Ich bin beim Programmieren sehr oft auf Probleme gestossen die ich mal mehr mal weniger elegant gel\xf6st habe. Ein Problem auf das ich immer wieder gestossen bin hat sich in meiner feldverschiebung definition abgespielt. Diese hat zwar immer funktioniert aber nie ganz, da ich nie smart genug war mehrere senarien zu testen und sie dann nur f\xfcr einen speziellen fall funktioniert hat. Also musste ich immer wieder zu der Definition zur\xfcckkehren um mir erneut gedanken dazu zu machen. "),(0,i.kt)("h1",{id:"tipps"},"Tipps"))}d.isMDXComponent=!0}}]);