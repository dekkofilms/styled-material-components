
          window.__NEXT_REGISTER_PAGE('/buttons', function() {
            var comp = module.exports=webpackJsonp([8],{220:function(n,e,t){n.exports=t(221)},221:function(n,e,t){"use strict";function p(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(2),o=p(r),x=t(0),a=p(x),i=t(1),l=p(i),c=t(70),u=p(c),d=t(228),s=p(d),f=t(40),b=p(f),h=(0,o.default)(["\n  & button {\n    margin: 16px;\n  }\n"],["\n  & button {\n    margin: 16px;\n  }\n"]),m=(0,s.default)(u.default),g=function(n){var e=n.className;return a.default.createElement(b.default,{theme:{primary:"#03A9F4"}},a.default.createElement("div",{className:e},a.default.createElement("h1",null,"Flat Buttons"),a.default.createElement(u.default,{onClick:function(){return alert("On Click Fired")}},"Flat"),a.default.createElement(u.default,{primary:!0},"Flat Primary"),a.default.createElement(u.default,{accent:!0},"Flat Accent"),a.default.createElement(m,null,"JS Ripple"),a.default.createElement("h1",null,"Raised Buttons"),a.default.createElement(u.default,{raised:!0},"Raised"),a.default.createElement(u.default,{raised:!0,accent:!0},"Accent"),a.default.createElement(u.default,{raised:!0,disabled:!0},"Test"),a.default.createElement(m,{raised:!0,primary:!0},"JS Ripple")))},v=(0,l.default)(g)(h);e.default=v},228:function(n,e,t){"use strict";function p(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(20),o=p(r),x=t(7),a=p(x),i=t(4),l=p(i),c=t(5),u=p(c),d=t(8),s=p(d),f=t(9),b=p(f),h=t(2),m=p(h),g=t(0),v=p(g),y=t(1),k=(0,m.default)(["\n  to {\n    opacity  : 0;\n    transform: scale(2);\n  }\n"],["\n  to {\n    opacity  : 0;\n    transform: scale(2);\n  }\n"]),_=(0,m.default)(["\n    position: relative;\n    overflow: hidden;\n\n    & .ripple-container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n    & .ripple-container span {\n      transform: scale(0);\n      border-radius: 100%;\n      position: absolute;\n      opacity: 0.75;\n      background-color: #fff;\n      animation: "," 1000ms;\n    }\n  "],["\n    position: relative;\n    overflow: hidden;\n\n    & .ripple-container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n    & .ripple-container span {\n      transform: scale(0);\n      border-radius: 100%;\n      position: absolute;\n      opacity: 0.75;\n      background-color: #fff;\n      animation: "," 1000ms;\n    }\n  "]),w=(0,y.keyframes)(k),C=function(n){var e=n.extend(_,w);return function(n){function t(){var n,e,p,r;(0,l.default)(this,t);for(var o=arguments.length,x=Array(o),i=0;i<o;i++)x[i]=arguments[i];return e=p=(0,s.default)(this,(n=t.__proto__||(0,a.default)(t)).call.apply(n,[this].concat(x))),p.handleClick=function(n){var e=n.target,t=e.offsetWidth,r=e.getBoundingClientRect(),o=document.createElement("span"),x=n.pageX-r.left-t/2,a=n.pageY-r.top-t/2,i="top: "+a+"px; left: "+x+"px; height: "+t+"px; width: "+t+"px;";p.rippleContainer.appendChild(o),o.setAttribute("style",i)},p.reset=function(){p.clear&&clearTimeout(p.clear),p.clear=setTimeout(function(){for(;p.rippleContainer.firstChild;)p.rippleContainer.removeChild(p.rippleContainer.firstChild)},2e3)},r=e,(0,s.default)(p,r)}return(0,b.default)(t,n),(0,u.default)(t,[{key:"render",value:function(){var n=this;return v.default.createElement(e,(0,o.default)({},this.props,{onMouseDown:this.handleClick,onMouseUp:this.reset}),this.props.children,v.default.createElement("div",{ref:function(e){n.rippleContainer=e},className:"ripple-container"}))}}]),t}(g.Component)};e.default=C},39:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.elevationTransition=void 0;var p=t(2),r=function(n){return n&&n.__esModule?n:{default:n}}(p),o=t(1),x=(0,r.default)(["\n  will-change: ",";\n  transition: "," 280ms cubic-bezier(.4, 0, .2, 1);\n"],["\n  will-change: ",";\n  transition: "," 280ms cubic-bezier(.4, 0, .2, 1);\n"]),a=(0,r.default)(["\n  ","\n"],["\n  ","\n"]),i=(0,r.default)(["\n  ",": ",",\n    ",",\n    ",";\n"],["\n  ",": ",",\n    ",",\n    ",";\n"]),l={umbra:["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],penumbra:["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],ambient:["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"]},c=(e.elevationTransition=(0,o.css)(x,function(n){return n.theme.elevation.property},function(n){return n.theme.elevation.property}),function(n,e){return(0,o.css)(a,function(t){return l[n][e]+" "+t.theme.elevation.colors[n]})}),u=function(n){return(0,o.css)(i,function(n){return n.theme.elevation.property},c("umbra",n),c("penumbra",n),c("ambient",n))};e.default=u},70:function(n,e,t){"use strict";function p(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(2),o=p(r),x=t(20),a=p(x),i=t(7),l=p(i),c=t(4),u=p(c),d=t(5),s=p(d),f=t(8),b=p(f),h=t(9),m=p(h),g=t(0),v=p(g),y=t(1),k=p(y),_=t(39),w=p(_),C=t(71),E=p(C),M=(0,o.default)(["\n  color: ",";\n"],["\n  color: ",";\n"]),O=(0,o.default)(["\n  ",";\n  &:active {\n    ",";\n  }\n  ","\n  ","\n  fieldset:disabled &, &:disabled {\n    ",";\n    background-color: rgba(0, 0, 0, .12);\n    pointer-events: none;\n  }\n"],["\n  ",";\n  &:active {\n    ",";\n  }\n  ","\n  ","\n  fieldset:disabled &, &:disabled {\n    ",";\n    background-color: rgba(0, 0, 0, .12);\n    pointer-events: none;\n  }\n"]),z=(0,o.default)(["\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background: transparent;\n  font-size: 14px; // Override font to specifically be px as spec defined pt\n  font-weight: 500;\n  line-height: 36px; // Override line-height so text aligns centered\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ","\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  fieldset:disabled &, &:disabled {\n    color: rgba(0, 0, 0, .26);\n    cursor: default;\n    pointer-events: none;\n  }\n\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"],["\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background: transparent;\n  font-size: 14px; // Override font to specifically be px as spec defined pt\n  font-weight: 500;\n  line-height: 36px; // Override line-height so text aligns centered\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  ","\n\n  &:active {\n    outline: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  fieldset:disabled &, &:disabled {\n    color: rgba(0, 0, 0, .26);\n    cursor: default;\n    pointer-events: none;\n  }\n\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"]),P=function(n){function e(){var n,t,p,r;(0,u.default)(this,e);for(var o=arguments.length,x=Array(o),a=0;a<o;a++)x[a]=arguments[a];return t=p=(0,b.default)(this,(n=e.__proto__||(0,l.default)(e)).call.apply(n,[this].concat(x))),p.handleOnClick=function(n){p.props.onClick&&p.props.onClick(n)},p.acceptableProps={onClick:p.handleOnClick},r=t,(0,b.default)(p,r)}return(0,m.default)(e,n),(0,s.default)(e,[{key:"render",value:function(){return v.default.createElement("button",(0,a.default)({className:this.props.className+" smc-button"},this.acceptableProps),this.props.children)}}]),e}(g.PureComponent),A=(0,y.css)(M,function(n){return n.theme.primary}),F=(0,y.css)(M,function(n){return n.theme.accent}),T=(0,y.css)(O,(0,w.default)(2),(0,w.default)(8),function(n){return n.accent&&"\n    color: white;\n    background-color: "+n.theme.accent+";\n    &:before {\n      color: black;\n    }\n  "},function(n){return n.primary&&"\n    color: white;\n    background-color: "+n.theme.primary+";\n    &:before {\n      color: black;\n    }\n  "},(0,w.default)(0)),j=(0,k.default)(P)(z,_.elevationTransition,(0,E.default)(),function(n){return n.accent&&F},function(n){return n.primary&&A},function(n){return n.raised&&T},function(n){return n.compact&&"padding: 0 8px;"},function(n){return n.dense&&"\n    height: 32px;\n    font-size: .8125rem;\n    line-height: 32px;\n  "});e.default=j},71:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var p=t(2),r=function(n){return n&&n.__esModule?n:{default:n}}(p),o=t(1),x=(0,r.default)(["\n  position: absolute;\n  top: calc(50% - ","%);\n  left: calc(50% - ","%);\n  width: ","%;\n  height: ",'%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.06);\n  content: "";\n'],["\n  position: absolute;\n  top: calc(50% - ","%);\n  left: calc(50% - ","%);\n  width: ","%;\n  height: ",'%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.06);\n  content: "";\n']),a=(0,r.default)(["\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &:after {\n    transform-origin: center center;\n    ","\n  }\n  &:before {\n    ","\n  }\n  &:hover:before,\n  &:focus:before,\n  &:active:after {\n    transition-duration: 85ms;\n    opacity: .6;\n  }\n"],["\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &:after {\n    transform-origin: center center;\n    ","\n  }\n  &:before {\n    ","\n  }\n  &:hover:before,\n  &:focus:before,\n  &:active:after {\n    transition-duration: 85ms;\n    opacity: .6;\n  }\n"]),i=function(n){return(0,o.css)(x,n,n,2*n,2*n)},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return(0,o.css)(a,i(n),i(n))};e.default=l}},[220]);
            return { page: comp.default }
          })
        