"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={},l="Lernjournal",s={permalink:"/EF-Informatik/2022/12/02/Lernjournal Numtrip",editUrl:"https://github.com/Gerhard-69/EF-Informatik/tree/main/blog/2022-12-02-Lernjournal Numtrip.md",source:"@site/blog/2022-12-02-Lernjournal Numtrip.md",title:"Lernjournal",description:"Wir haben einem das Spielfeld in dem schauen m\xfcssen, dass zwei oder drei stellige Zahlen zentriert sind und das wir nach einem Spielzug das Feld wieder auff\xfcllen. (Visuelles)",date:"2022-12-02T00:00:00.000Z",formattedDate:"2. Dezember 2022",tags:[],readingTime:1.18,hasTruncateMarker:!1,authors:[],frontMatter:{}},o={authorsImageUrls:[]},u=[],c={toc:u};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(9541).Z,width:"2016",height:"1512"})),(0,i.kt)("p",null,"Wir haben einem das Spielfeld in dem schauen m\xfcssen, dass zwei oder drei stellige Zahlen zentriert sind und das wir nach einem Spielzug das Feld wieder auff\xfcllen. (Visuelles)"),(0,i.kt)("p",null,"Im Spielzweig passiert alles was man w\xe4hrend dem spielen nicht sieht also ob der Spielzug g\xfcltig ist, ob das Spiel gestartet wurde und wieviele Punkte der Spieler hat mit einem dementsprechenden Spielende."),(0,i.kt)("p",null,"Ich habe im Numtrip jetzt eine Spielereingabe und die darauf folgende Ausgabe programmiert. Das sieht ungef\xe4hr so aus:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1890).Z,width:"809",height:"361"})),(0,i.kt)("p",null,"Sieht vielleicht nicht \xfcbersichtlich aus und ist auch nicht gerade die k\xfcrzeste Code daf\xfcr funktioniert er gut. Die while-Schleife sorgt daf\xfcr, dass man beliebig viele Spielz\xfcge machen kann. Dann mit dem Input frage ich nach dem Feld. Damit ich mit der Eingabe weiterarbeiten kann wandle ich sie in einen Integer um. Da die erste Stelle in der Matrix bei 0:0 ist ich aber sie mit 1-5 angeschrieben habe muss ich jetzt noch -1 von der Eingabe rechnen. Zum Schluss nur noch das ausgew\xe4hlt Feld in der Matrix leeren und das Ergebnis neue Spielfeld anzeigen."),(0,i.kt)("p",null,"02.12.22\nIch habe einen Grossteil der Zeit damit verbracht die \xdcberprufung der Benutzereingabe zu programmieren, daf\xfcr funktioniert sie jetzt auch wie geplant. Den rest der Zeit habe ich versucht die n\xe4chste Aufgabe zu l\xf6sen die ich nicht wirklich verstanden habe. Valentin hat von einer anderen Seite eine andere und besser erkl\xe4rte L\xf6sung gefunden die bei mir aber noch nicht ganz richtig funktioniert."))}d.isMDXComponent=!0},1890:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Numtrip spielereingabe-b2620a4f0789971dcc7bdd3139ca635e.PNG"},9541:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/TopDown Numtrip-bf482b41ab1db54c5de628f2a955df52.png"}}]);