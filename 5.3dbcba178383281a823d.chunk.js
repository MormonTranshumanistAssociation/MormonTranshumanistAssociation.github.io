webpackJsonp([5],{"./app/components/Columns/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js");t.d(n,"c",function(){return c}),t.d(n,"a",function(){return p});var r=o(["\n  text-align: left;\n  padding: 1rem 2rem;\n"],["\n  text-align: left;\n  padding: 1rem 2rem;\n"]),i=o(["\n  width: 384px;\n  text-align: left;\n  padding: 1rem 2rem;\n"],["\n  width: 384px;\n  text-align: left;\n  padding: 1rem 2rem;\n"]),s=o(["\n  max-width: 500px;\n  text-align: left;\n  padding: 1rem 2rem;\n  text-align: left;\n  margin-right: auto;\n"],["\n  max-width: 500px;\n  text-align: left;\n  padding: 1rem 2rem;\n  text-align: left;\n  margin-right: auto;\n"]),l=o(["\n  display: flex;\n  flex-wrap: wrap;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n"]),d=a.a.div(r),c=t.i(a.a)(d)(i),p=t.i(a.a)(d)(s),f=a.a.div(l);n.b=f},"./app/components/Header/Banner.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/react/react.js"),r=(t.n(a),t("./node_modules/styled-components/dist/styled-components.es.js")),i=t("./app/components/Section/index.js"),s=t("./app/components/Img/index.js"),l=t("./app/components/SectionContent/index.js"),d=t("./app/components/Columns/index.js"),c=t("./app/components/Header/banner.jpg"),p=t.n(c),f=t("./app/components/Header/mta-logo.png"),u=t.n(f),m=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),g=o(["\n  background-position-y: top;\n  background-attachment: fixed;\n  margin: 0;\n  padding: calc(45px) 0 0 0;\n"],["\n  background-position-y: top;\n  background-attachment: fixed;\n  margin: 0;\n  padding: calc(45px) 0 0 0;\n"]),v=o(["\n  height: 80px;\n  width: auto;\n  margin-left: -3px;\n"],["\n  height: 80px;\n  width: auto;\n  margin-left: -3px;\n"]),b=t.i(r.a)(i.a)(g),x=t.i(r.a)(s.a)(v),y=m(b,{img:p.a},void 0,m(l.a,{},void 0,m(d.a,{},void 0,m(x,{src:u.a,alt:"MTA Logo"}))));n.a=function(){return y}},"./app/components/Header/NavBar.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js"),r=o(["\n  text-align: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background: rgba(255,255,255,.7);\n  z-index: 1000000;\n  a {\n    display: inline-flex;\n    padding: 10px 0 10px 3px;\n    margin: 0 1rem;\n    text-decoration: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    font-size: 0.65rem;\n    color: #2d371e;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n  a:hover, a:hover span, a:active, a:active span {\n    text-decoration: none !important;\n  }\n  a.selectedLink {\n    border-top: solid 1px rgba(0,0,0,.7);\n  }\n"],["\n  text-align: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background: rgba(255,255,255,.7);\n  z-index: 1000000;\n  a {\n    display: inline-flex;\n    padding: 10px 0 10px 3px;\n    margin: 0 1rem;\n    text-decoration: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    font-size: 0.65rem;\n    color: #2d371e;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n  a:hover, a:hover span, a:active, a:active span {\n    text-decoration: none !important;\n  }\n  a.selectedLink {\n    border-top: solid 1px rgba(0,0,0,.7);\n  }\n"]);n.a=a.a.nav(r)},"./app/components/Header/banner.jpg":function(e,n,t){e.exports=t.p+"7c4d4fc791e4432d88ec28fdbc777f4e.jpg"},"./app/components/Header/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/react/react.js"),r=t.n(a),i=t("./node_modules/react-intl/lib/index.es.js"),s=t("./node_modules/styled-components/dist/styled-components.es.js"),l=t("./app/components/Link/index.js"),d=t("./app/components/Header/NavBar.js"),c=t("./app/components/Header/messages.js"),p=t("./app/components/Header/Banner.js"),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),u=o(["\n  display: inline-block;\n  background: hsla(52,11%,44%, .8);\n  border-radius: 2em;\n  color: #fff;\n  margin: 0 1em;\n  font-weight: 500;\n  padding: 0 0 0 0;\n  &:hover {\n    background: hsla(52,11%,44%, 1);\n  }\n  a {\n    font-family: 'Abel', Heletica, sans-serif;\n    letter-spacing: normal;\n    font-size: 14px;\n    text-transform: none;\n    color: #fff;\n    padding: 0 1em;\n  }\n"],["\n  display: inline-block;\n  background: hsla(52,11%,44%, .8);\n  border-radius: 2em;\n  color: #fff;\n  margin: 0 1em;\n  font-weight: 500;\n  padding: 0 0 0 0;\n  &:hover {\n    background: hsla(52,11%,44%, 1);\n  }\n  a {\n    font-family: 'Abel', Heletica, sans-serif;\n    letter-spacing: normal;\n    font-size: 14px;\n    text-transform: none;\n    color: #fff;\n    padding: 0 1em;\n  }\n"]),m=s.a.div(u),g=f(p.a,{}),v=function(e){return f("div",{},void 0,f(d.a,{},void 0,f(l.a,{"data-tag":"Link",to:"/"},void 0,r.a.createElement(i.c,c.a.home)),f(l.a,{to:"/about"},void 0,r.a.createElement(i.c,c.a.about)),f(l.a,{to:"/curriculum"},void 0,r.a.createElement(i.c,c.a.curriculum)),f(l.a,{to:"/quotes"},void 0,r.a.createElement(i.c,c.a.quotes)),f(l.a,{href:"//transfigurist.org"},void 0,r.a.createElement(i.c,c.a.blog)),f(l.a,{to:"/meetup"},void 0,r.a.createElement(i.c,c.a.meetup)),f(m,{},void 0,f(l.a,{to:"/join"},void 0,r.a.createElement(i.c,c.a.join)))),!e.menuOnly&&g)};n.a=v},"./app/components/Header/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");n.a=t.i(o.d)({home:{id:"components.Header.home",defaultMessage:"Home"},about:{id:"components.Header.about",defaultMessage:"About"},news:{id:"components.Header.news",defaultMessage:"News"},curriculum:{id:"components.Header.curriculum",defaultMessage:"Curriculum"},quotes:{id:"components.Header.quotes",defaultMessage:"Quotes"},blog:{id:"components.Header.blog",defaultMessage:"Blog"},meetup:{id:"components.Header.meetup",defaultMessage:"Meet-Up"},join:{id:"components.Header.join",defaultMessage:"Join"}})},"./app/components/Header/mta-logo.png":function(e,n,t){e.exports=t.p+"31cfd11e2d7d2f505f31e3f570529916.png"},"./app/components/Img/index.js":function(e,n,t){"use strict";function o(e){return r("img",{className:e.className,src:e.src,alt:e.alt})}var a=t("./node_modules/react/react.js"),r=(t.n(a),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}());n.a=o},"./app/components/PageWithContents/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js"),r=t("./app/components/SectionContent/index.js"),i=o(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n"]),s=t.i(a.a)(r.a)(i);n.a=s},"./app/components/TableOfContents/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js"),r=t("./node_modules/react-router/es/index.js");t.d(n,"b",function(){return d});var i=o(["\n  width: 300px;\n  text-align: left;\n  border-left: 1px solid rgba(0,0,0,.2);\n  list-style-type: none;\n  padding: 0 14px;\n"],["\n  width: 300px;\n  text-align: left;\n  border-left: 1px solid rgba(0,0,0,.2);\n  list-style-type: none;\n  padding: 0 14px;\n"]),s=o(["\n  display: block;\n  text-indent: -1em;\n  padding-left: 1em;\n"],["\n  display: block;\n  text-indent: -1em;\n  padding-left: 1em;\n"]),l=a.a.nav(i),d=t.i(a.a)(r.d)(s);n.a=l},"./app/containers/LibraryPage/index.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./node_modules/react/react.js"),a=(t.n(o),t("./node_modules/react-helmet/lib/Helmet.js")),r=t.n(a),i=t("./app/components/Header/index.js"),s=t("./app/components/Section/index.js"),l=t("./app/components/PageWithContents/index.js"),d=t("./app/components/Columns/index.js"),c=t("./app/containers/LibraryPage/toc.js"),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),f=p(i.a,{}),u=p(r.a,{title:"Quotes"}),m=p("div",{},void 0,p(c.a,{})),g=function(e){return p("div",{},void 0,f,p("article",{},void 0,u,p(s.a,{},void 0,p(l.a,{},void 0,m,p(d.a,{},void 0,e.children)))))};n.default=g},"./app/containers/LibraryPage/toc.js":function(e,n,t){"use strict";var o=t("./node_modules/react/react.js"),a=(t.n(o),t("./app/components/TableOfContents/index.js")),r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),i=r(a.a,{},void 0,r(a.b,{to:"/library"},void 0,"Library"),r(a.b,{to:"/library/curriculum"},void 0,"Curriculum"),r(a.b,{to:"/library/quotes"},void 0,"Quotes"),r(a.b,{to:"/library/videos"},void 0,"Videos")),s=function(){return i};n.a=s}});