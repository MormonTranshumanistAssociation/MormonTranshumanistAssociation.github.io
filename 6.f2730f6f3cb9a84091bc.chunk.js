webpackJsonp([6],{"./app/components/Columns/index.js":function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js");t.d(e,"c",function(){return p}),t.d(e,"a",function(){return c});var a=o(["\n  text-align: left;\n  padding: 1rem 2rem;\n"],["\n  text-align: left;\n  padding: 1rem 2rem;\n"]),i=o(["\n  width: 384px;\n  text-align: left;\n  padding: 1rem 2rem;\n"],["\n  width: 384px;\n  text-align: left;\n  padding: 1rem 2rem;\n"]),s=o(["\n  max-width: 500px;\n  text-align: left;\n  padding: 1rem 2rem;\n  text-align: left;\n  margin-right: auto;\n"],["\n  max-width: 500px;\n  text-align: left;\n  padding: 1rem 2rem;\n  text-align: left;\n  margin-right: auto;\n"]),d=o(["\n  display: flex;\n  flex-wrap: wrap;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n"]),l=r.a.div(a),p=t.i(r.a)(l)(i),c=t.i(r.a)(l)(s),f=r.a.div(d);e.b=f},"./app/components/Header/Banner.js":function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var r=t("./node_modules/react/react.js"),a=(t.n(r),t("./node_modules/styled-components/dist/styled-components.es.js")),i=t("./app/components/Section/index.js"),s=t("./app/components/Img/index.js"),d=t("./app/components/SectionContent/index.js"),l=t("./app/components/Columns/index.js"),p=t("./app/components/Header/banner.jpg"),c=t.n(p),f=t("./app/components/Header/mta-logo.png"),u=t.n(f),m=function(){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,t,o,r){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),g=o(["\n  background-position-y: top;\n  background-attachment: fixed;\n  margin: 0;\n  padding: calc(45px) 0 0 0;\n"],["\n  background-position-y: top;\n  background-attachment: fixed;\n  margin: 0;\n  padding: calc(45px) 0 0 0;\n"]),b=o(["\n  height: 80px;\n  width: auto;\n  margin-left: -3px;\n"],["\n  height: 80px;\n  width: auto;\n  margin-left: -3px;\n"]),x=t.i(a.a)(i.a)(g),v=t.i(a.a)(s.a)(b),y=m(x,{img:c.a},void 0,m(d.a,{},void 0,m(l.a,{},void 0,m(v,{src:u.a,alt:"MTA Logo"}))));e.a=function(){return y}},"./app/components/Header/NavBar.js":function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=o(["\n  text-align: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background: rgba(255,255,255,.7);\n  z-index: 1000000;\n  a {\n    display: inline-flex;\n    padding: 10px 0 10px 3px;\n    margin: 0 1rem;\n    text-decoration: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    font-size: 0.65rem;\n    color: #2d371e;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n  a:hover, a:hover span, a:active, a:active span {\n    text-decoration: none !important;\n  }\n  a.selectedLink {\n    border-top: solid 1px rgba(0,0,0,.7);\n  }\n"],["\n  text-align: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background: rgba(255,255,255,.7);\n  z-index: 1000000;\n  a {\n    display: inline-flex;\n    padding: 10px 0 10px 3px;\n    margin: 0 1rem;\n    text-decoration: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    font-size: 0.65rem;\n    color: #2d371e;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n  a:hover, a:hover span, a:active, a:active span {\n    text-decoration: none !important;\n  }\n  a.selectedLink {\n    border-top: solid 1px rgba(0,0,0,.7);\n  }\n"]);e.a=r.a.nav(a)},"./app/components/Header/banner.jpg":function(n,e,t){n.exports=t.p+"7c4d4fc791e4432d88ec28fdbc777f4e.jpg"},"./app/components/Header/index.js":function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var r=t("./node_modules/react/react.js"),a=t.n(r),i=t("./node_modules/react-intl/lib/index.es.js"),s=t("./node_modules/styled-components/dist/styled-components.es.js"),d=t("./app/components/Link/index.js"),l=t("./app/components/Header/NavBar.js"),p=t("./app/components/Header/messages.js"),c=t("./app/components/Header/Banner.js"),f=function(){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,t,o,r){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),u=o(["\n  display: inline-block;\n  background: hsla(52,11%,44%, .8);\n  border-radius: 2em;\n  color: #fff;\n  margin: 0 1em;\n  font-weight: 500;\n  padding: 0 0 0 0;\n  &:hover {\n    background: hsla(52,11%,44%, 1);\n  }\n  a {\n    font-family: 'Abel', Heletica, sans-serif;\n    letter-spacing: normal;\n    font-size: 14px;\n    text-transform: none;\n    color: #fff;\n    padding: 0 1em;\n  }\n"],["\n  display: inline-block;\n  background: hsla(52,11%,44%, .8);\n  border-radius: 2em;\n  color: #fff;\n  margin: 0 1em;\n  font-weight: 500;\n  padding: 0 0 0 0;\n  &:hover {\n    background: hsla(52,11%,44%, 1);\n  }\n  a {\n    font-family: 'Abel', Heletica, sans-serif;\n    letter-spacing: normal;\n    font-size: 14px;\n    text-transform: none;\n    color: #fff;\n    padding: 0 1em;\n  }\n"]),m=s.a.div(u),g=f(c.a,{}),b=function(n){return f("div",{},void 0,f(l.a,{},void 0,f(d.a,{"data-tag":"Link",to:"/"},void 0,a.a.createElement(i.c,p.a.home)),f(d.a,{to:"/about"},void 0,a.a.createElement(i.c,p.a.about)),f(d.a,{to:"/curriculum"},void 0,a.a.createElement(i.c,p.a.curriculum)),f(d.a,{to:"/quotes"},void 0,a.a.createElement(i.c,p.a.quotes)),f(d.a,{href:"//transfigurist.org"},void 0,a.a.createElement(i.c,p.a.blog)),f(d.a,{to:"/meetup"},void 0,a.a.createElement(i.c,p.a.meetup)),f(m,{},void 0,f(d.a,{to:"/join"},void 0,a.a.createElement(i.c,p.a.join)))),!n.menuOnly&&g)};e.a=b},"./app/components/Header/messages.js":function(n,e,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");e.a=t.i(o.d)({home:{id:"components.Header.home",defaultMessage:"Home"},about:{id:"components.Header.about",defaultMessage:"About"},news:{id:"components.Header.news",defaultMessage:"News"},curriculum:{id:"components.Header.curriculum",defaultMessage:"Curriculum"},quotes:{id:"components.Header.quotes",defaultMessage:"Quotes"},blog:{id:"components.Header.blog",defaultMessage:"Blog"},meetup:{id:"components.Header.meetup",defaultMessage:"Meet-Up"},join:{id:"components.Header.join",defaultMessage:"Join"}})},"./app/components/Header/mta-logo.png":function(n,e,t){n.exports=t.p+"31cfd11e2d7d2f505f31e3f570529916.png"},"./app/components/Img/index.js":function(n,e,t){"use strict";function o(n){return a("img",{className:n.className,src:n.src,alt:n.alt})}var r=t("./node_modules/react/react.js"),a=(t.n(r),function(){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,t,o,r){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}());e.a=o},"./app/components/PageWithContents/index.js":function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=t("./app/components/SectionContent/index.js"),i=o(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n"]),s=t.i(r.a)(a.a)(i);e.a=s},"./app/components/TableOfContents/index.js":function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=t("./node_modules/react-router/es/index.js");t.d(e,"b",function(){return l});var i=o(["\n  width: 300px;\n  text-align: left;\n  border-left: 1px solid rgba(0,0,0,.2);\n  list-style-type: none;\n  padding: 0 14px;\n"],["\n  width: 300px;\n  text-align: left;\n  border-left: 1px solid rgba(0,0,0,.2);\n  list-style-type: none;\n  padding: 0 14px;\n"]),s=o(["\n  display: block;\n  text-indent: -1em;\n  padding-left: 1em;\n"],["\n  display: block;\n  text-indent: -1em;\n  padding-left: 1em;\n"]),d=r.a.nav(i),l=t.i(r.a)(a.d)(s);e.a=d},"./app/containers/CurriculumPage/index.js":function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(e,"__esModule",{value:!0});var r=t("./node_modules/react/react.js"),a=(t.n(r),t("./node_modules/react-helmet/lib/Helmet.js")),i=t.n(a),s=t("./node_modules/styled-components/dist/styled-components.es.js"),d=t("./app/components/Header/index.js"),l=t("./app/components/Section/index.js"),p=t("./app/components/PageWithContents/index.js"),c=t("./app/components/Columns/index.js"),f=t("./app/containers/CurriculumPage/toc.js"),u=function(){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,t,o,r){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),m=o(['\n  img {\n    width: 100%; \n  }\n  strong {\n    position: relative;\n    cursor: help;\n    //color: rgb(35,52,0);\n    display: inline-block;\n    font-weight: 300;\n    padding: 0 2px;\n    margin: 0 -2px;\n    border-radius: 1px;\n    //border-bottom: 1px dashed;\n    background: rgba(225,255,117,.7);\n  }\n  strong > code {\n    text-shadow: none;\n    box-shadow: none;\n    font-family: inherit;\n    font-weight: normal;\n    position: absolute;\n    line-height: 1.4;\n    width: 12em;\n    left: -2em;\n    bottom: calc(100% + 5px);\n    text-align: center;\n    opacity: 0;\n    visibility: hidden;\n    padding: 12px 16px;\n    color: #fff;\n    font-size: .9em;\n    background: rgba(50,50,50,.9);\n    //transition: opacity 200ms;\n    border-radius: 3px;\n  }\n  strong:hover > code {\n    visibility: visible;\n    opacity: 1;\n  }\n  strong:hover > code:after {\n    content: " ";\n    position: absolute;\n    top: 100%; /* At the bottom of the tooltip */\n    left: 4em;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: rgba(50,50,50,.9) transparent transparent transparent;\n  }\n\n'],['\n  img {\n    width: 100%; \n  }\n  strong {\n    position: relative;\n    cursor: help;\n    //color: rgb(35,52,0);\n    display: inline-block;\n    font-weight: 300;\n    padding: 0 2px;\n    margin: 0 -2px;\n    border-radius: 1px;\n    //border-bottom: 1px dashed;\n    background: rgba(225,255,117,.7);\n  }\n  strong > code {\n    text-shadow: none;\n    box-shadow: none;\n    font-family: inherit;\n    font-weight: normal;\n    position: absolute;\n    line-height: 1.4;\n    width: 12em;\n    left: -2em;\n    bottom: calc(100% + 5px);\n    text-align: center;\n    opacity: 0;\n    visibility: hidden;\n    padding: 12px 16px;\n    color: #fff;\n    font-size: .9em;\n    background: rgba(50,50,50,.9);\n    //transition: opacity 200ms;\n    border-radius: 3px;\n  }\n  strong:hover > code {\n    visibility: visible;\n    opacity: 1;\n  }\n  strong:hover > code:after {\n    content: " ";\n    position: absolute;\n    top: 100%; /* At the bottom of the tooltip */\n    left: 4em;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: rgba(50,50,50,.9) transparent transparent transparent;\n  }\n\n']),g=s.a.div(m),b=u(d.a,{}),x=u(i.a,{title:"Curriculum"}),v=u("div",{},void 0,u(f.a,{})),y=function(n){return u("div",{},void 0,b,u("article",{},void 0,x,u(l.a,{},void 0,u(p.a,{},void 0,v,u(c.a,{},void 0,u(g,{},void 0,n.children))))))};e.default=y},"./app/containers/CurriculumPage/toc.js":function(n,e,t){"use strict";var o=t("./node_modules/react/react.js"),r=(t.n(o),t("./app/components/TableOfContents/index.js")),a=function(){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,t,o,r){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),i=a(r.a,{},void 0,a(r.b,{to:"/curriculum/lesson1"},void 0,"Lesson 1")),s=function(){return i};e.a=s}});