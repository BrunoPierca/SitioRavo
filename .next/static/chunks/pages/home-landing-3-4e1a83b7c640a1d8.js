(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{184:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home-landing-3",function(){return i(9330)}])},4902:function(e,s){"use strict";s.Z=function(){var e,s=document.querySelectorAll(".gallery"),i=document.querySelector(".filtering"),t=document.querySelectorAll(".filtering");if(s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})})),i){i.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var i=s.target.getAttribute("data-filter");i=i,e.arrange({filter:i})}}));for(var a=function(e){e.addEventListener("click",(function(s){matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))}))},n=0,r=t.length;n<r;n++){a(t[n])}}}},8028:function(e,s,i){"use strict";var t=i(5893),a=i(7294);function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function l(e,s){for(var i=0;i<s.length;i++){var t=s[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,s,i){return s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,s){return!s||"object"!==u(s)&&"function"!==typeof s?n(e):s}function m(e,s){return(m=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var u=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,t=o(e);if(s){var a=o(this).constructor;i=Reflect.construct(t,arguments,a)}else i=t.apply(this,arguments);return d(this,i)}}var p=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&m(e,s)}(u,e);var s,i,o,d=h(u);function u(){var e;return r(this,u),c(n(e=d.apply(this,arguments)),"target",a.createRef()),c(n(e),"split",(function(){e.target.current&&Splitting({target:e.target.current})})),c(n(e),"componentDidMount",e.split),c(n(e),"componentDidUpdate",e.split),e}return s=u,(i=[{key:"render",value:function(){return(0,t.jsx)("div",{ref:this.target,children:this.props.children})}}])&&l(s.prototype,i),o&&l(s,o),u}(a.Component);s.Z=p},9330:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return W}});var t=i(5893),a=i(7294),n=i(9008),r=i.n(n),l=i(3138),c=i(1874),o=i(9408),d=i(4051),m=i.n(d),u=i(1664),h=i.n(u),p=i(6868),x=i.n(p),g=i(5241);function f(e,s,i,t,a,n,r){try{var l=e[n](r),c=l.value}catch(o){return void i(o)}l.done?s(c):Promise.resolve(c).then(t,a)}var j={fullScreen:!1,particles:{number:{value:40,density:{enable:!0,value_area:800}},color:{value:["#ff5e57","#409fff","#50E3C2","#E86363"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:8,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:7,direction:"top",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},v=function(){(0,a.useEffect)((function(){var e=document.querySelector("header.full-height .bg-img");e.style.backgroundImage="url(".concat(e.getAttribute("data-background"),")")}),[]);var e=function(){var e,s=(e=m().mark((function e(s){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.R)(s);case 2:case"end":return e.stop()}}),e)})),function(){var s=this,i=arguments;return new Promise((function(t,a){var n=e.apply(s,i);function r(e){f(n,t,a,r,l,"next",e)}function l(e){f(n,t,a,r,l,"throw",e)}r(void 0)}))});return function(e){return s.apply(this,arguments)}}();return(0,t.jsxs)("header",{className:"full-height rshp valign",children:[(0,t.jsx)("div",{className:"front bg-img","data-background":"img/slider/shape.png"}),(0,t.jsx)("div",{className:"container ontop",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-6 valign",children:(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("div",{className:"sub-head radius mb-10",children:(0,t.jsx)("span",{children:"Amazing design services"})}),(0,t.jsx)("h1",{className:"fw-800 fz-45",children:"Digital marketing & business solutions."}),(0,t.jsx)("p",{children:"Our designers stay ahead to provide engaging and user-friendly website designs to make your business stand out."}),(0,t.jsx)("div",{className:"mt-40 flex",children:(0,t.jsx)("div",{children:(0,t.jsx)(h(),{href:"/services-creative",children:(0,t.jsxs)("a",{className:"butn butn-md gr-purple-red-bg text-light radius-30",children:[(0,t.jsx)("span",{className:"text slide-up",children:"Our Services"}),(0,t.jsx)("span",{className:"text slide-down",children:"Our Services"})]})})})})]})})})}),(0,t.jsx)(x(),{id:"particles-js",init:e,options:j})]})},b=i(8352),N=i(8028),w=JSON.parse('[{"image":"img/brands/01-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/02-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/03-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/04-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/05-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/06-brands.svg","title":"www.Ravo.com"}]'),y=function(e){var s=e.slides;return(0,t.jsx)("section",{className:"clients-carsouel shad up",children:(0,t.jsx)("div",{className:"container radius-15",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-sm-2 sm-hide",children:(0,t.jsxs)("div",{className:"item flex",children:[(0,t.jsx)("div",{className:"icon-flex mr-20",children:(0,t.jsxs)("h2",{className:"fz-40",children:["30 ",(0,t.jsx)("span",{children:"K"})]})}),(0,t.jsx)("div",{className:"cont-flex valign",children:(0,t.jsx)("div",{children:(0,t.jsxs)("span",{className:"text-left fz-13 fw-500",children:["Happy ",(0,t.jsx)("br",{})," Customers"]})})})]})}),(0,t.jsx)("div",{className:"col-sm-10 valign",children:(0,t.jsx)(b.tq,{id:"content-carousel-container-unq-2",className:"swiper-container",slidesPerView:s?5:4,spaceBetween:0,speed:1e3,loop:!0,breakpoints:{0:{slidesPerView:3},640:{slidesPerView:3},768:{slidesPerView:3},1024:{slidesPerView:s?5:4}},children:w.map((function(e,s){return(0,t.jsx)(b.o5,{children:(0,t.jsx)("div",{className:"item",children:(0,t.jsxs)("div",{className:"img",children:[(0,t.jsx)("img",{src:e.image,alt:""}),(0,t.jsx)(N.Z,{children:(0,t.jsx)("a",{href:"#0",className:"link","data-splitting":!0,children:e.title})})]})})},s)}))})})]})})})},k=JSON.parse('[{"icon":"pe-7s-arc","title":"Effective strategy","details":"No coding skills required to customize and create unique looks."},{"icon":"pe-7s-paint-bucket","title":"Customer satisfaction","details":"No coding skills required to customize and create unique looks."},{"icon":"pe-7s-vector","title":"Powerfull customize","details":"No coding skills required to customize and create unique looks."}]'),S=function(){return(0,t.jsx)("section",{className:"services section-padding pt-60",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:k.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item flex",children:[(0,t.jsx)("div",{className:"icon-flex mr-20",children:(0,t.jsxs)("div",{className:"fz-40 bg-shape icon",children:[(0,t.jsx)("span",{className:"icon-font ".concat(e.icon," gr-purple-red-text")}),(0,t.jsx)("div",{className:"svg-shape",children:(0,t.jsx)("svg",{viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"100%",children:(0,t.jsx)("path",{d:"M450.5,328Q436,406,359,419.5Q282,433,210,439Q138,445,88,386Q38,327,51,254.5Q64,182,104.5,124.5Q145,67,214,63.5Q283,60,343.5,90.5Q404,121,434.5,185.5Q465,250,450.5,328Z",fill:"#fafafa"})})})]})}),(0,t.jsxs)("div",{className:"cont-flex",children:[(0,t.jsx)("h6",{className:"mb-10 fw-700",children:e.title}),(0,t.jsx)("p",{className:"fz-14",children:e.details}),(0,t.jsx)(h(),{href:"/services-creative",children:(0,t.jsxs)("a",{className:"more-arow mt-20",children:[(0,t.jsx)(N.Z,{children:(0,t.jsx)("span",{className:"sp-hover","data-splitting":!0,children:"Know more"})}),(0,t.jsx)("i",{className:"pe-7s-angle-right"})]})})]})]})},s)}))})})})},_=i(1239),z=(i(4877),function(){var e=(0,a.useState)(!1),s=e[0],i=e[1];return(0,t.jsxs)("section",{className:"section-padding pt-0",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 valign",children:(0,t.jsxs)("div",{className:"intro-two-img full-width md-mb50",children:[(0,t.jsx)("div",{className:"img1",children:(0,t.jsx)("img",{src:"img/about/th2.jpg",alt:""})}),(0,t.jsxs)("div",{className:"img2",children:[(0,t.jsx)("img",{src:"img/about/th3.jpg",alt:""}),(0,t.jsx)("div",{className:"play-button",children:(0,t.jsxs)("a",{href:"https://youtu.be/AzwC6umvd1s",className:"btn vid",onClick:function(e){e.preventDefault(),i(!0)},children:[(0,t.jsx)("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:(0,t.jsx)("circle",{className:"circle",cx:"50",cy:"50",r:"48",stroke:"white",strokeWidth:"2",fill:"none"})}),(0,t.jsx)("i",{className:"fas fa-play"})]})})]}),(0,t.jsxs)("div",{className:"award-icon",children:[(0,t.jsx)("div",{className:"star mb-20",children:(0,t.jsxs)("div",{className:"img",children:[(0,t.jsx)("img",{src:"img/waves/star.png",alt:""}),(0,t.jsx)("span",{className:"icon pe-7s-medal"})]})}),(0,t.jsx)("h6",{children:"100%"}),(0,t.jsx)("p",{children:"verified"})]})]})}),(0,t.jsx)("div",{className:"col-lg-6 valign",children:(0,t.jsxs)("div",{className:"content pl-50",children:[(0,t.jsx)("div",{className:"sub-head radius fz-12 ls2 text-u mb-10",children:(0,t.jsx)("span",{children:"Highly expertise"})}),(0,t.jsxs)("h2",{className:"mb-20 fw-800",children:["We design brand, ",(0,t.jsx)("span",{className:"gr-purple-red-text",children:"digital experience"}),"."]}),(0,t.jsx)("p",{children:"Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium hendrerit ultricies."}),(0,t.jsxs)("ul",{className:"check-list rest mt-20",children:[(0,t.jsxs)("li",{className:"mb-10",children:[(0,t.jsx)("span",{className:"icon bg-gray mr-20",children:(0,t.jsx)("i",{className:"fas fa-check"})}),"Advanced customization theme options"]}),(0,t.jsxs)("li",{className:"mb-10",children:[(0,t.jsx)("span",{className:"icon bg-gray mr-20",children:(0,t.jsx)("i",{className:"fas fa-check"})}),"Manage and share your workspace"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon bg-gray mr-20",children:(0,t.jsx)("i",{className:"fas fa-check"})}),"Powerful theme for creatives designer"]})]}),(0,t.jsx)(h(),{href:"/about-creative",children:(0,t.jsxs)("a",{className:"butn butn-md gr-purple-red-bg text-light radius-30 mt-30",children:[(0,t.jsx)("span",{className:"text slide-up",children:"About Us"}),(0,t.jsx)("span",{className:"text slide-down",children:"About Us"})]})})]})})]})}),(0,t.jsx)(_.Z,{channel:"youtube",autoplay:!0,isOpen:s,videoId:"AzwC6umvd1s",onClose:function(){return i(!1)}})]})}),C=i(9453),A=i(4902),O=JSON.parse('{"u":[{"name":"All","operator":"*"},{"name":"Branding","operator":".brand"},{"name":"Mobile App","operator":".web"},{"name":"Creative","operator":".graphic"}],"W":[{"url":"img/portfolio/1/1.jpg","type":"Web Design","title":"Creative art work","filter":"graphic"},{"url":"img/portfolio/1/2.jpg","type":"Web Design","title":"Photo Retouching","filter":"web"},{"url":"img/portfolio/1/3.jpg","type":"Web Design","title":"Artboard Studio","filter":"brand"},{"url":"img/portfolio/1/5.jpg","type":"Web Design","title":"Create by creatives","filter":"web"},{"url":"img/portfolio/1/4.jpg","type":"Web Design","title":"Digital art works","filter":"graphic"},{"url":"img/portfolio/1/6.jpg","type":"Web Design","title":"Modern workspace","filter":"brand"}]}'),P=function(){return(0,a.useEffect)((function(){setTimeout((function(){(0,A.Z)()}),500)}),[]),(0,t.jsxs)("section",{className:"portfolio section-padding bg-gray",children:[(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"row mb-80",children:[(0,t.jsx)("div",{className:"col-lg-5",children:(0,t.jsxs)("div",{className:"simple-head",children:[(0,t.jsx)("div",{children:(0,t.jsx)("h6",{className:"sub-head radius mb-20",children:(0,t.jsx)("span",{className:"fz-12 ls2 text-u",children:"Showcases"})})}),(0,t.jsx)("h2",{className:"fz-40 fw-800 gr-purple-red-text inline",children:"Recent Projects."})]})}),(0,t.jsx)("div",{className:"col-lg-7 d-flex justify-content-end",children:(0,t.jsx)("div",{className:"filtering text-center d-flex align-items-end",children:(0,t.jsx)("div",{className:"filter",children:O.u.map((function(e,s){return(0,t.jsx)("span",{"data-filter":e.operator,className:"".concat(0===s?"active":""),children:e.name},s)}))})})})]}),(0,t.jsx)("div",{className:"gallery min-30",children:(0,t.jsx)("div",{className:"row",children:O.W.map((function(e,s){return(0,t.jsxs)("div",{className:"col-lg-4 col-md-6 items ".concat(e.filter," wow fadeInUp"),"data-wow-delay":".4s",children:[(0,t.jsx)("div",{className:"item-img",children:(0,t.jsx)(h(),{href:"/project-details",children:(0,t.jsxs)("a",{className:"imago wow",children:[(0,t.jsx)("img",{src:e.url,alt:"image"}),(0,t.jsx)("div",{className:"item-img-overlay gr-purple-red-bg",children:(0,t.jsx)("i",{className:"fas fa-arrow-right icon text-light fz-20"})})]})})}),(0,t.jsxs)("div",{className:"cont mt-30 text-center",children:[(0,t.jsx)("h6",{className:"fw-700 fz-17 mb-5",children:e.title}),(0,t.jsx)("p",{className:"fw-500",children:e.type})]})]},s)}))})})]}),(0,t.jsx)("div",{className:"curve-cls bottom",children:(0,t.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 500 250",enableBackground:"new 0 0 500 250",xmlSpace:"preserve",preserveAspectRatio:"none",children:(0,t.jsx)("path",{fill:"#fff",d:"M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"})})})]})},E=JSON.parse('{"I":{"A0":5,"e9":100,"rC":["img/testimonials/c1.jpg","img/testimonials/c2.jpg","img/testimonials/c3.jpg"]},"K":[{"value":"255K","title":"Total Projects","class":"one"},{"value":"255K","title":"Total Projects","class":"two"},{"value":"255K","title":"Total Projects","class":"three"}]}'),R=function(){return(0,t.jsx)("section",{className:"section-padding",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-5 valign",children:(0,t.jsxs)("div",{className:"content md-mb50",children:[(0,t.jsx)("div",{className:"sub-head radius fz-12 ls2 text-u mb-10",children:(0,t.jsx)("span",{children:"Highly expertise"})}),(0,t.jsxs)("h2",{className:"mb-20 fw-800",children:["The hundred of ",(0,t.jsx)("span",{className:"gr-purple-red-text",children:"completed works still counting"})]}),(0,t.jsx)("p",{children:"Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium hendrerit ultricies."}),(0,t.jsxs)("div",{className:"clients-rate-img flex mt-40",children:[(0,t.jsx)("div",{className:"imgs valign",children:E.I.rC.map((function(e,s){return(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e,alt:""})},s)}))}),(0,t.jsxs)("div",{className:"text",children:[(0,t.jsxs)("h6",{children:[(0,t.jsxs)("span",{children:[E.I.e9,"%"]}),(0,t.jsx)("span",{className:"rate-star fz-10 ms-1",children:Array(E.I.A0).fill().map((function(e,s){return(0,t.jsx)("i",{className:"fas fa-star"},s)}))})]}),(0,t.jsx)("span",{className:"fz-13",children:"Positive Feedback"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("div",{className:"crv-status text-center",children:E.K.map((function(e,s){return(0,t.jsx)("div",{className:"st-".concat(e.class," item valign"),children:(0,t.jsxs)("div",{className:"cont full-width",children:[(0,t.jsx)("h4",{children:e.value}),(0,t.jsx)("span",{children:e.title})]})},s)}))})})})]})})})},q=JSON.parse('[{"comment":"I just love their design for all stunning details. You must know what can you do for a project before taking it, but with prohub, the sky is the limit.","author":{"name":"Henry Cavill","avatar":"img/testimonials/1.jpg","position":"Envato Customer"}},{"comment":"I just love their design for all stunning details. You must know what can you do for a project before taking it, but with prohub, the sky is the limit.","author":{"name":"Henry Cavill","avatar":"img/testimonials/1.jpg","position":"Envato Customer"}},{"comment":"I just love their design for all stunning details. You must know what can you do for a project before taking it, but with prohub, the sky is the limit.","author":{"name":"Henry Cavill","avatar":"img/testimonials/1.jpg","position":"Envato Customer"}}]'),I=function(){return(0,t.jsx)("section",{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"testim-box-shape bg-img",style:{backgroundImage:"url('img/testimonials/bg.jpg')"},children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-7 offset-lg-5",children:(0,t.jsx)("div",{className:"testim-crve",children:(0,t.jsx)(b.tq,{id:"content-carousel-container-unq-4",className:"swiper-container",slidesPerView:1,spaceBetween:0,speed:1e3,loop:!0,children:q.map((function(e,s){return(0,t.jsx)(b.o5,{children:(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("span",{className:"qoute-icon",children:(0,t.jsx)("i",{className:"fas fa-quote-left"})}),(0,t.jsx)("div",{className:"text",children:(0,t.jsx)("p",{className:"fw-400 text-i",children:e.comment})}),(0,t.jsxs)("div",{className:"cont mt-30",children:[(0,t.jsx)("div",{className:"img-flex",children:(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e.author.avatar,alt:""})})}),(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("h6",{className:"fw-700",children:e.author.name}),(0,t.jsx)("span",{children:e.author.position})]})]})]})},s)}))})})})}),(0,t.jsx)("div",{className:"back-shape bg-img",style:{backgroundImage:"url('img/testimonials/testim-shape2.png')"}})]})})})},T=JSON.parse('[{"image":"img/blog/8.jpg","tag":"Trending","author":"Mila Kunis","date":"14 sep 2021","title":"Discover how Flowbase can help you build better."},{"image":"img/blog/9.jpg","tag":"Trending","author":"Mila Kunis","date":"14 sep 2021","title":"Customisation means you can totally the design."},{"image":"img/blog/10.jpg","tag":"Trending","author":"Mila Kunis","date":"14 sep 2021","title":"Analytics to help understand customers."}]'),D=function(e){var s=e.grblue;return(0,t.jsx)("section",{className:"blog-grid section-padding",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"row mb-100",children:[(0,t.jsx)("div",{className:"col-md-7",children:(0,t.jsxs)("div",{className:"simple-head",children:[(0,t.jsx)("h6",{className:"sub-head radius mb-20",children:(0,t.jsx)("span",{className:"fz-12 ls2 text-u",children:"articles"})}),(0,t.jsx)("div",{children:(0,t.jsx)("h2",{className:"fz-40 ".concat(s?"fw-700":"fw-800 gr-purple-red-text inline"),children:"Latest News"})})]})}),(0,t.jsx)("div",{className:"col-md-5 justify-content-end valign",children:(0,t.jsx)("div",{className:"s-title valign ml-auto",children:(0,t.jsxs)("h6",{children:[(0,t.jsx)("a",{href:"blog-grid-modern.html",children:"Read all news"}),(0,t.jsx)("i",{className:"icon fz-20 pe-7s-angle-right"})]})})})]}),(0,t.jsx)("div",{className:"row",children:T.map((function(e,i){return(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item box-shadow crv",children:[(0,t.jsxs)("div",{className:"img",children:[(0,t.jsx)("img",{src:e.image,alt:""}),(0,t.jsx)("div",{className:"tags",children:(0,t.jsx)(h(),{href:"/blog-grid-clean",children:(0,t.jsx)("a",{children:e.tag})})})]}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"author",children:(0,t.jsx)("span",{children:e.author})}),(0,t.jsx)("div",{className:"date",children:(0,t.jsx)("span",{className:"".concat(s?"gr-blue-text":"gr-purple-red-text"),children:e.date})})]}),(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h5",{className:"fw-700 fz-18",children:(0,t.jsx)(h(),{href:"/blog-post",children:(0,t.jsx)("a",{children:e.title})})})})]})]})},i)}))})]})})},M=i(6964);function Z(e,s){(null==s||s>e.length)&&(s=e.length);for(var i=0,t=new Array(s);i<s;i++)t[i]=e[i];return t}function K(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return Z(e,s);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Z(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(){return(0,a.useEffect)((function(){var e;document.body.classList.add("land-demo2");(e=document.body.classList).remove.apply(e,K(["index-bus1","index-corporate","index-restaurant","index-arch","index-freelancer","cr-agency","index-main","mobile-app","gr-orange-bg","nft-market"]))}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:"Ravo - Digital Studio"})}),(0,t.jsxs)(l.Z,{defaultLogoTheme:"dark",children:[(0,t.jsx)(c.Z,{}),(0,t.jsx)(o.Z,{}),(0,t.jsx)(v,{}),(0,t.jsx)(y,{}),(0,t.jsx)(S,{}),(0,t.jsx)(z,{}),(0,t.jsx)(C.Z,{}),(0,t.jsx)(P,{}),(0,t.jsx)(R,{}),(0,t.jsx)(I,{}),(0,t.jsx)(D,{}),(0,t.jsx)(M.Z,{footerClass:"pb-40",type:"purple-red"})]})]})}}},function(e){e.O(0,[1664,8352,8627,5,1197,188,9774,2888,179],(function(){return s=184,e(e.s=s);var s}));var s=e.O();_N_E=s}]);