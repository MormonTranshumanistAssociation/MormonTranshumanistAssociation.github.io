webpackJsonp([1],{"./app/components/Columns/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js");t.d(n,"c",function(){return c}),t.d(n,"a",function(){return u});var r=o(["\n  text-align: left;\n  padding: 1rem 2rem;\n"],["\n  text-align: left;\n  padding: 1rem 2rem;\n"]),i=o(["\n  width: 384px;\n  text-align: left;\n  padding: 1rem 2rem;\n"],["\n  width: 384px;\n  text-align: left;\n  padding: 1rem 2rem;\n"]),l=o(["\n  max-width: 560px;\n  text-align: left;\n  padding: 1rem 2rem;\n"],["\n  max-width: 560px;\n  text-align: left;\n  padding: 1rem 2rem;\n"]),s=o(["\n  display: flex;\n  flex-wrap: wrap;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n"]),d=a.a.div(r),c=t.i(a.a)(d)(i),u=t.i(a.a)(d)(l),p=a.a.div(s);n.b=p},"./app/components/Header/Banner.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/react/react.js"),r=(t.n(a),t("./node_modules/styled-components/dist/styled-components.es.js")),i=t("./app/components/Section/index.js"),l=t("./app/components/Img/index.js"),s=t("./app/components/SectionContent/index.js"),d=t("./app/components/Columns/index.js"),c=t("./app/components/Header/banner.jpg"),u=t.n(c),p=t("./app/components/Header/mta-logo.png"),f=t.n(p),m=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),h=o(["\n  background-position-y: top;\n  background-attachment: fixed;\n  margin: 0;\n  padding: calc(45px) 0 0 0;\n"],["\n  background-position-y: top;\n  background-attachment: fixed;\n  margin: 0;\n  padding: calc(45px) 0 0 0;\n"]),b=o(["\n  height: 80px;\n  width: auto;\n  margin-left: -3px;\n"],["\n  height: 80px;\n  width: auto;\n  margin-left: -3px;\n"]),g=t.i(r.a)(i.a)(h),v=t.i(r.a)(l.a)(b),y=m(g,{img:u.a},void 0,m(s.a,{},void 0,m(d.a,{},void 0,m(v,{src:f.a,alt:"MTA Logo"}))));n.a=function(){return y}},"./app/components/Header/NavBar.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/styled-components/dist/styled-components.es.js"),r=o(["\n  text-align: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  padding-top: 3px;\n  background: rgba(255,255,255,.7);\n  z-index: 1000000;\n  a {\n    display: inline-flex;\n    padding: 12px 0 10px 3px;\n    margin: 0 1rem;\n    text-decoration: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    font-size: 0.65rem;\n    color: #2d371e;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n  a:hover, a:hover span, a:active, a:active span {\n    text-decoration: none !important;\n  }\n  a.selectedLink {\n    border-bottom: solid 1px #333;\n  }\n"],["\n  text-align: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  padding-top: 3px;\n  background: rgba(255,255,255,.7);\n  z-index: 1000000;\n  a {\n    display: inline-flex;\n    padding: 12px 0 10px 3px;\n    margin: 0 1rem;\n    text-decoration: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    font-size: 0.65rem;\n    color: #2d371e;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n  a:hover, a:hover span, a:active, a:active span {\n    text-decoration: none !important;\n  }\n  a.selectedLink {\n    border-bottom: solid 1px #333;\n  }\n"]);n.a=a.a.nav(r)},"./app/components/Header/banner.jpg":function(e,n,t){e.exports=t.p+"7c4d4fc791e4432d88ec28fdbc777f4e.jpg"},"./app/components/Header/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a=t("./node_modules/react/react.js"),r=t.n(a),i=t("./node_modules/react-intl/lib/index.es.js"),l=t("./node_modules/styled-components/dist/styled-components.es.js"),s=t("./app/components/Link/index.js"),d=t("./app/components/Header/NavBar.js"),c=t("./app/components/Header/messages.js"),u=t("./app/components/Header/Banner.js"),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),f=o(["\n  display: inline-block;\n  background: hsla(52,11%,44%, .8);\n  border-radius: 2em;\n  color: #fff;\n  margin: 0 1em;\n  font-weight: 500;\n  padding: 0 0 0 0;\n  &:hover {\n    background: hsla(52,11%,44%, 1);\n  }\n  a {\n    font-family: 'Abel', Heletica, sans-serif;\n    letter-spacing: normal;\n    font-size: 14px;\n    text-transform: none;\n    color: #fff;\n    padding: 0 1em;\n  }\n"],["\n  display: inline-block;\n  background: hsla(52,11%,44%, .8);\n  border-radius: 2em;\n  color: #fff;\n  margin: 0 1em;\n  font-weight: 500;\n  padding: 0 0 0 0;\n  &:hover {\n    background: hsla(52,11%,44%, 1);\n  }\n  a {\n    font-family: 'Abel', Heletica, sans-serif;\n    letter-spacing: normal;\n    font-size: 14px;\n    text-transform: none;\n    color: #fff;\n    padding: 0 1em;\n  }\n"]),m=l.a.div(f),h=p(u.a,{}),b=function(e){return p("div",{},void 0,p(d.a,{},void 0,p(s.a,{"data-tag":"Link",to:"/"},void 0,r.a.createElement(i.c,c.a.home)),p(s.a,{to:"/about"},void 0,r.a.createElement(i.c,c.a.about)),p(s.a,{to:"/news"},void 0,r.a.createElement(i.c,c.a.news)),p(s.a,{to:"/library"},void 0,r.a.createElement(i.c,c.a.library)),p(s.a,{href:"//transfigurist.org"},void 0,r.a.createElement(i.c,c.a.blog)),p(s.a,{to:"/meetup"},void 0,r.a.createElement(i.c,c.a.meetup)),p(m,{},void 0,p(s.a,{to:"/join"},void 0,r.a.createElement(i.c,c.a.join)))),!e.menuOnly&&h)};n.a=b},"./app/components/Header/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");n.a=t.i(o.d)({home:{id:"components.Header.home",defaultMessage:"Home"},about:{id:"components.Header.about",defaultMessage:"About"},news:{id:"components.Header.news",defaultMessage:"News"},library:{id:"components.Header.library",defaultMessage:"Library"},blog:{id:"components.Header.blog",defaultMessage:"Blog"},meetup:{id:"components.Header.meetup",defaultMessage:"Meet-Up"},join:{id:"components.Header.join",defaultMessage:"Join"}})},"./app/components/Header/mta-logo.png":function(e,n,t){e.exports=t.p+"31cfd11e2d7d2f505f31e3f570529916.png"},"./app/components/Img/index.js":function(e,n,t){"use strict";function o(e){return r("img",{className:e.className,src:e.src,alt:e.alt})}var a=t("./node_modules/react/react.js"),r=(t.n(a),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}());n.a=o},"./app/containers/AboutPage/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),l=t.n(i),s=t("./node_modules/react-helmet/lib/Helmet.js"),d=t.n(s),c=t("./app/components/Header/index.js"),u=t("./app/components/Section/index.js"),p=t("./app/components/SectionContent/index.js"),f=t("./app/components/Columns/index.js"),m=t("./app/containers/AboutPage/markdown/index.md");t.d(n,"AboutPage",function(){return v});var h=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,a){var r=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+3];t.children=s}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),b=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),g=h("div",{},void 0,h(c.a,{}),h("article",{},void 0,h(d.a,{title:"About"}),h(u.a,{},void 0,h(p.a,{},void 0,h(f.a,{},void 0,h(m.a,{})))))),v=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),b(n,[{key:"render",value:function(){return g}}]),n}(l.a.PureComponent);n.default=v},"./app/containers/AboutPage/markdown/index.md":function(e,n,t){"use strict";function o(e){var n=e.className,t=e.style;return r.a.createElement(i.DocumentContext,{context:{meta:s}},r.a.cloneElement(r.a.createElement(l.Root,null,r.a.createElement(l.Heading,{level:1,name:"About-the-Association"},"About the Association"),r.a.createElement(l.Heading,{level:2,name:"What-is-the-Mormon-Transhumanist-Association"},"What is the Mormon Transhumanist Association?"),r.a.createElement(l.Paragraph,null,"The Mormon Transhumanist Association is the world’s largest advocacy network for ethical\nuse of technology and religion to expand human abilities, as outlined in the\n",r.a.createElement(l.Link,{href:"/about/transhumanist-declaration",title:null},"Transhumanist Declaration")," and the\n",r.a.createElement(l.Link,{href:"/about/mormon-transhumanist-affirmation",title:null},"Mormon Transhumanist Affirmation"),".\nAlthough we are neither a religious organization nor affiliated with any religious\norganization, we support our members in their personal religious affiliations, Mormon\nor otherwise, and encourage them to adapt Transhumanism to their unique situations."),r.a.createElement(l.Heading,{level:2,name:"What-is-the-relation-between-Mormonism-and-Transhumanism"},"What is the relation between Mormonism and Transhumanism?"),r.a.createElement(l.Paragraph,null,"Increasingly, people see parallels and complements between Mormon and Transhumanist\nviews. On one hand, ",r.a.createElement(l.Link,{href:"http://en.wikipedia.org/wiki/Mormonism",title:null},"Mormonism")," is a\nreligion of the Judeo-Christian tradition that advocates immersive discipleship of\nJesus Christ that leads to creative and compassionate works. On the other hand,\n",r.a.createElement(l.Link,{href:"http://en.wikipedia.org/wiki/Transhumanism",title:null},"Transhumanism")," is a mostly secular\nideology that advocates ethical use of technology to expand human abilities. However,\nMormonism and Transhumanism advocate remarkably similar views of human nature and\npotential: material beings organized according to natural laws, rapidly advancing\nknowledge and power, imminent fundamental changes to anatomy and environment, and\neventual transcendence of present limitations. "),r.a.createElement(l.Paragraph,null,"Resources available through this site provide details about the relation between\nMormon and Transhumanist views.")),{className:n,style:t}))}var a=t("./node_modules/react/react.js"),r=t.n(a),i=t("./node_modules/reactdown/runtime.js");t.n(i);n.a=o;var l=i.components,s={data:{},model:{toc:[{title:"About the Association",name:"About-the-Association",depth:1},{title:"What is the Mormon Transhumanist Association?",name:"What-is-the-Mormon-Transhumanist-Association",depth:2},{title:"What is the relation between Mormonism and Transhumanism?",name:"What-is-the-relation-between-Mormonism-and-Transhumanism",depth:2}],title:"About the Association"}}},"./node_modules/reactdown/lib/DocumentContext.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.contextTypes=void 0;var l,s,d=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),c=t("./node_modules/react/react.js"),u=o(c),p=n.contextTypes={reactdown:u.default.PropTypes.object},f=(s=l=function(e){function n(){return a(this,n),r(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,e),d(n,[{key:"getChildContext",value:function(){return{reactdown:this.props.context}}},{key:"render",value:function(){var e=this.props.children;return u.default.Children.only(e)}}]),n}(u.default.Component),l.childContextTypes=p,s);n.default=f},"./node_modules/reactdown/lib/components.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function r(e){var n=e.html;return d.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}})}function i(e){var n=e.level,t=a(e,["level"]),o="h"+Math.min(n,6);return d.default.createElement(o,t)}function l(e){var n=e.children;return d.default.createElement("div",{style:c.root},d.default.createElement("div",{style:c.heading},"Unknown node found:"),d.default.createElement("pre",{style:c.report},d.default.createElement("code",null,n)))}Object.defineProperty(n,"__esModule",{value:!0}),n.UnorderedList=n.OrderedList=n.ListItem=n.Link=n.Code=n.Blockquote=n.TableCell=n.TableHeaderCell=n.TableRow=n.TableHead=n.TableBody=n.Table=n.Rule=n.InlineCode=n.Strong=n.Emphasis=n.Break=n.Image=n.Strikethrough=n.Paragraph=n.Root=void 0,n.HTML=r,n.Heading=i,n.Unknown=l;var s=t("./node_modules/react/react.js"),d=o(s),c=(n.Root="div",n.Paragraph="p",n.Strikethrough="del",n.Image="img",n.Break="br",n.Emphasis="em",n.Strong="strong",n.InlineCode="code",n.Rule="hr",n.Table="table",n.TableBody="tbody",n.TableHead="thead",n.TableRow="tr",n.TableHeaderCell="th",n.TableCell="td",n.Blockquote="blockquote",n.Code="code",n.Link="a",n.ListItem="li",n.OrderedList="ol",n.UnorderedList="ul",{root:{color:"#5F0101",background:"rgb(255, 231, 231)",fontWeight:"bold",fontFamily:"monospace"},heading:{background:"#FF7575",padding:5},report:{padding:10,margin:0}})},"./node_modules/reactdown/lib/directives/index.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.meta=n.ref=void 0;var a=t("./node_modules/reactdown/lib/directives/ref.js"),r=o(a),i=t("./node_modules/reactdown/lib/directives/meta.js"),l=o(i);n.ref=r.default,n.meta=l.default},"./node_modules/reactdown/lib/directives/meta.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l,s,d=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),c=t("./node_modules/react/react.js"),u=o(c),p=t("./node_modules/reactdown/lib/DocumentContext.js"),f={root:{color:"#444",background:"rgb(226, 226, 226)",fontWeight:"bold",fontFamily:"monospace"},heading:{background:"rgb(175, 175, 175)",padding:5},report:{padding:10,margin:0}},m=(s=l=function(e){function n(){return a(this,n),r(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,e),d(n,[{key:"render",value:function(){var e=JSON.stringify(this.context.reactdown.meta.data,null,2);return u.default.createElement("div",{style:f.root},u.default.createElement("div",{style:f.heading},"Document metadata:"),u.default.createElement("pre",{style:f.report},u.default.createElement("code",null,e)))}}]),n}(u.default.Component),l.contextTypes=p.contextTypes,s);n.default=m},"./node_modules/reactdown/lib/directives/ref.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){var n=e.line,t=e.name,o=e.style;return l.default.createElement("div",{style:r({},s.root,o)},l.default.createElement("a",{name:t||n},"#"))}Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};n.default=a;var i=t("./node_modules/react/react.js"),l=o(i),s={root:{height:0,width:0,top:"-1em",visibility:"hidden",position:"relative"}}},"./node_modules/reactdown/lib/runtime.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}Object.defineProperty(n,"__esModule",{value:!0}),n.DocumentContext=n.directives=n.components=void 0;var r=t("./node_modules/reactdown/lib/components.js"),i=a(r),l=t("./node_modules/reactdown/lib/directives/index.js"),s=a(l),d=t("./node_modules/reactdown/lib/DocumentContext.js"),c=o(d);n.components=i,n.directives=s,n.DocumentContext=c.default},"./node_modules/reactdown/runtime.js":function(e,n,t){e.exports=t("./node_modules/reactdown/lib/runtime.js")}});