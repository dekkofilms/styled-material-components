
          window.__NEXT_REGISTER_PAGE('/sliders', function() {
            var comp = module.exports=webpackJsonp([5],{264:function(e,t,n){e.exports=n(265)},265:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(16),u=a(l),s=n(6),d=a(s),o=n(3),c=a(o),f=n(4),h=a(f),m=n(7),p=a(m),v=n(8),b=a(v),g=n(0),_=a(g),y=n(1),x=a(y),E=n(33),M=a(E),k=n(266),w=n(84),C=a(w),P=(0,i.default)(["\n  & .styled-material-thumb {\n    background: #fff;\n  }\n"],["\n  & .styled-material-thumb {\n    background: #fff;\n  }\n"]),O=(0,i.default)(["\n"],["\n"]),N=function(e){function t(){var e,n,a,r;(0,c.default)(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=(0,p.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={value:a.props.initialValue},a.handleValueChange=function(e){return a.setState({value:e})},r=n,(0,p.default)(a,r)}return(0,b.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){return _.default.createElement("div",null,_.default.createElement(k.Slider,(0,u.default)({value:this.state.value,handleValueChange:this.handleValueChange},this.props)),this.state.value)}}]),t}(g.PureComponent),S=(k.Slider.extend(P),function(e){function t(){var e,n,a,r;(0,c.default)(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=(0,p.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={disabled:!1},a.toggleDisabled=function(){a.setState(function(e){return{disabled:!e.disabled}})},r=n,(0,p.default)(a,r)}return(0,b.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this.state.disabled;return _.default.createElement(M.default,{theme:{primary:"#03A9F4"}},_.default.createElement("div",{className:this.props.className},_.default.createElement("div",null,_.default.createElement("h1",null,"Sliders"),_.default.createElement("div",null,_.default.createElement("h2",null,"Uncontrolled Sliders"),_.default.createElement("div",null,_.default.createElement("h3",null,"Continuous"),_.default.createElement("div",{className:this.props.className,style:{width:"250px"}},_.default.createElement(k.Slider,{continuous:!0,disabled:e}))),_.default.createElement("div",null,_.default.createElement("h3",null,"Discrete"),_.default.createElement("div",{className:this.props.className,style:{width:"250px"}},_.default.createElement(k.Slider,{min:0,max:10,step:2,initialValue:5,disabled:e})))),_.default.createElement("div",null,_.default.createElement("h2",null,"Controlled Sliders"),_.default.createElement("div",null,_.default.createElement("h3",null,"Continuous"),_.default.createElement("div",{className:this.props.className,style:{width:"250px",marginLeft:400}},_.default.createElement(N,{min:-40,max:80,step:4,initialValue:-4,continuous:!0,disabled:e}))),_.default.createElement("div",null,_.default.createElement("h3",null,"Discrete"),_.default.createElement("div",{className:this.props.className,style:{width:"75%"}},_.default.createElement(N,{min:-40,max:40,step:4,initialValue:-4,disabled:e}))))),_.default.createElement("div",null,_.default.createElement("h1",null,"Options"),_.default.createElement(C.default,{onClick:this.toggleDisabled},"Click me to "+(e?"enable":"disable")+" sliders"))))}}]),t}(g.PureComponent)),V=(0,x.default)(S)(O);t.default=V},266:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(267);Object.defineProperty(t,"Slider",{enumerable:!0,get:function(){return a(r).default}})},267:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(6),u=a(l),s=n(3),d=a(s),o=n(4),c=a(o),f=n(7),h=a(f),m=n(8),p=a(m),v=n(0),b=a(v),g=n(1),_=a(g),y=n(268),x=a(y),E=(0,i.default)(["\n"],["\n"]),M=function(e,t){return Math.round((e+t)/2)},k=function(e,t,n){return"number"==typeof e&&e>=t&&e<=n},w=0,C=100,P=1,O=function(e){function t(e){(0,d.default)(this,t);var n=(0,h.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));N.call(n);var a=e.min,r=e.max,i=e.initialValue,l=e.step,s="number"==typeof a?a:w,o="number"==typeof r?r:C;if(o<=s)throw new Error("Slider minimum "+s+" exceeds maximum "+o);var c="number"==typeof i?i:M(s,o);if(c<s)throw new Error("Slider value "+c+" is less than minimum "+s);if(c>o)throw new Error("Slider value "+c+" exceeds maximum "+o);if(0===l)throw new Error("Slider step cannot be 0");var f=l||P;if("number"!=typeof f)throw new Error("Provided step "+l+" is not a number");return n.state={min:s,max:o,step:Math.abs(f),value:c},n}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.state,t=e.min,n=e.max,a=e.step,r=this.props.continuous,i=this.props.value,l=this.state.value,u=k(i)?i:l;return b.default.createElement("div",{className:this.props.className+" smc-slider"},b.default.createElement(x.default,{value:u,min:t,max:n,step:a,continuous:Boolean(r),increment:this.increment,decrement:this.decrement,setValue:this.setValue,disabled:this.props.disabled}))}}]),t}(v.PureComponent),N=function(){var e=this;this.increment=function(){var t="number"==typeof e.props.value?e.props.value:e.state.value,n=e.state.step;e.setValue(t+n)},this.decrement=function(){var t="number"==typeof e.props.value?e.props.value:e.state.value,n=e.state.step;e.setValue(t-n)},this.setValue=function(t){var n=e.state,a=n.min,r=n.max,i=t;t<a&&(i=a),t>r&&(i=r),e.props.handleValueChange&&e.props.handleValueChange(i),e.setState({value:i})}},S=(0,_.default)(O)(E);t.default=S},268:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(6),u=a(l),s=n(3),d=a(s),o=n(4),c=a(o),f=n(7),h=a(f),m=n(8),p=a(m),v=n(0),b=a(v),g=n(68),_=a(g),y=n(1),x=a(y),E=n(269),M=a(E),k=n(273),w=a(k),C=n(274),P=a(C),O=n(275),N=a(O),S=(0,i.default)(["\n  height: ","px;\n  cursor: ",";\n  width: 100%;\n"],["\n  height: ","px;\n  cursor: ",";\n  width: 100%;\n"]),V=function(e,t,n){return 0===n?1:(t-e)/n},D=function(e,t,n){return n/(t-e)},j=function(e){function t(){var e,n,a,r;(0,d.default)(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=a=(0,h.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l))),a.state={pixelsPerValue:null,valuePerPixel:null,cursorXAtMin:null,useTransitions:!1,focused:!1,width:null},a.componentDidMount=function(){window.addEventListener("resize",a.getTrackWidth)},a.componentWillUnmount=function(){window.removeEventListener("resize",a.getTrackWidth)},a.setTrack=function(e){a.track=e,a.getTrackWidth()},a.getTrackWidth=function(){if(a.track){var e=a.props,t=e.max,n=e.min,r=_.default.findDOMNode(a.track).getBoundingClientRect(),i=r.width,l=r.left,u=D(n,t,i),s=V(n,t,i);a.setState({width:i,pixelsPerValue:u,valuePerPixel:s,cursorXAtMin:l})}},a.handleDrag=function(e){var t=a.props.continuous,n=a.state.valuePerPixel,r=a.props,i=r.value,l=r.step,u=r.min,s=e*n,d=s+u;if(t)return a.props.setValue(d);var o=(d-i)/l,c=Math.floor(o),f=Math.ceil(o),h=Math.abs(Math.abs(f)-Math.abs(o))<Math.abs(Math.abs(c)-Math.abs(o)),m=h?f:c;if(0!==m){var p=m*l+i;a.props.setValue(p)}},a.goToMouseLocation=function(e){var t=e.clientX,n=a.props,r=n.value,i=n.min,l=a.state.pixelsPerValue,u=(r-i)*(l||0),s=a.state.cursorXAtMin;null===s&&a.setState({cursorXAtMin:t-u});var d=t-s;a.handleDrag(d)},a.handleClick=function(e){var t=e.clientX;if(!a.props.disabled){var n=a.state.cursorXAtMin,r=t-n;a.handleDrag(r)}},a.enableFocus=function(){return a.setState({focused:!0})},a.disableFocus=function(){return a.setState({focused:!1})},r=n,(0,h.default)(a,r)}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.min,a=e.disabled,r=this.state,i=r.pixelsPerValue,l=r.valuePerPixel,u=r.focused,s=r.width,d="number"==typeof i&&"number"==typeof l,o=(t-n)*(i||0),c=n===t;return b.default.createElement("div",{onClick:this.handleClick,ref:this.setTrack,className:this.props.className+" smc-slider-track-wrapper"},b.default.createElement(w.default,{disabled:a,focused:u,atMin:c},d&&[b.default.createElement(N.default,{width:o,key:"slider-track-value-track"},b.default.createElement(P.default,{disabled:a,width:s})),b.default.createElement(M.default,{increment:this.props.increment,decrement:this.props.decrement,handleMouseMove:this.handleClick,disabled:this.props.disabled,atMin:c,key:"slider-track-slider-thumb"})]))}}]),t}(v.PureComponent),L=(0,x.default)(j)(S,function(e){return e.theme.slider.sizes.clickableHeight},function(e){return e.disabled?"auto":"pointer"});t.default=L},269:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(6),u=a(l),s=n(3),d=a(s),o=n(4),c=a(o),f=n(7),h=a(f),m=n(8),p=a(m),v=n(0),b=a(v),g=n(1),_=a(g),y=n(270),x=a(y),E=n(271),M=a(E),k=n(272),w=a(k),C=(0,i.default)(["\n  cursor: inherit;\n  width: 0px;\n  height: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  cursor: inherit;\n  width: 0px;\n  height: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),P=function(e){function t(){var e,n,a,r;(0,d.default)(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=a=(0,h.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l))),a.state={navigatingWithKeys:!1,dragging:!1},a.handleClick=function(e){e.stopPropagation(),a.props.disabled||a.thumb&&a.thumb.focus()},a.onMouseDown=function(){a.props.disabled||(a.setState({dragging:!0}),document.addEventListener("mousemove",a.props.handleMouseMove),document.addEventListener("mouseup",a.onMouseUp))},a.onMouseUp=function(){a.props.disabled||(a.setState({dragging:!1}),document.removeEventListener("mousemove",a.props.handleMouseMove),document.removeEventListener("mouseup",a.onMouseUp))},a.onKeyDown=function(e){if(!a.props.disabled){var t=e.keyCode;37!==t&&40!==t||a.enableKeys(a.props.decrement),39!==t&&38!==t||a.enableKeys(a.props.increment)}},a.enableKeys=function(e){return a.setState({navigatingWithKeys:!0},e)},a.getThumb=function(e){a.thumb=e},a.handleBlur=function(){a.setState({navigatingWithKeys:!1})},r=n,(0,h.default)(a,r)}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.atMin,n=e.disabled,a=this.state,r=a.navigatingWithKeys,i=a.dragging;return b.default.createElement("div",{ref:this.getThumb,className:this.props.className},b.default.createElement(w.default,{disabled:n,dragging:i},b.default.createElement(M.default,{tabIndex:"1",className:"styled-material-thumb",onMouseDown:this.onMouseDown,onClick:this.handleClick,onKeyDown:this.onKeyDown,onBlur:this.handleBlur,dragging:i,atMin:t,disabled:n},b.default.createElement(x.default,{navigatingWithKeys:r,atMin:t}))))}}]),t}(v.PureComponent),O=(0,_.default)(P)(C);t.default=O},270:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(0),u=a(l),s=n(1),d=a(s),o=(0,i.default)(["\n  height: ","px;\n  width: ","px;\n  background: ",";\n  transition: height width ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: inherit;\n  border-radius: 50%;\n  flex-shrink: 0;\n"],["\n  height: ","px;\n  width: ","px;\n  background: ",";\n  transition: height width ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: inherit;\n  border-radius: 50%;\n  flex-shrink: 0;\n"]),c=function(e){return u.default.createElement("div",{className:e.className+" smc-slider-focus-ring"},e.children)},f=function(e){return e.navigatingWithKeys?e.theme.slider.sizes.focusHalo:0},h=function(e){var t=e.atMin,n=e.theme.slider.colors;return t?n.track:n.focusHalo},m=(0,d.default)(c)(o,f,f,h,function(e){return e.theme.slider.transitions.main});t.default=m},271:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(0),u=(a(l),n(1)),s=a(u),d=(0,i.default)(["\n  height: ","px;\n  width: ","px;\n  border: ","px solid ",";\n  transition: all ",";\n  background: ",";\n  border-radius: 50%;\n  outline: none;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  height: ","px;\n  width: ","px;\n  border: ","px solid ",";\n  transition: all ",";\n  background: ",";\n  border-radius: 50%;\n  outline: none;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]),o=function(e){var t=e.disabled,n=e.theme.slider.colors;return t?n.disabled:e.atMin?n.pageColor:n.main},c=function(e){return e.dragging?e.theme.slider.sizes.thumbClicked:e.disabled?e.theme.slider.sizes.thumbDisabled:e.theme.slider.sizes.thumb},f=function(e){var t=e.atMin,n=e.theme.slider.colors;return t?n.track:o(e)},h=function(e){return e.disabled?0:e.theme.slider.sizes.thumbBorder},m=s.default.div(d,c,c,h,f,function(e){return e.theme.slider.transitions.main},o);t.default=m},272:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(0),u=a(l),s=n(1),d=a(s),o=(0,i.default)(["\n  height: ","px;\n  width: ","px;\n  transition: all ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border-radius: 50%;\n  position: absolute;\n"],["\n  height: ","px;\n  width: ","px;\n  transition: all ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border-radius: 50%;\n  position: absolute;\n"]),c=function(e){return u.default.createElement("div",{className:e.className+" smc-slider-disabled-wrapper"},e.children)},f=function(e){var t=e.disabled,n=e.theme.slider.sizes;return t?n.thumbDisabled+n.thumbDisabledBorder:0},h=(0,d.default)(c)(o,f,f,function(e){return e.theme.slider.transitions.main},function(e){return e.theme.slider.colors.pageColor});t.default=h},273:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(0),u=a(l),s=n(1),d=a(s),o=(0,i.default)(["\n  width: 100%;\n  height: ","px;\n  background: ",";\n  transition: ",";\n  display: flex;\n  justify-content: flex-start;\n"],["\n  width: 100%;\n  height: ","px;\n  background: ",";\n  transition: ",";\n  display: flex;\n  justify-content: flex-start;\n"]),c=function(e){return u.default.createElement("div",{className:e.className+" smc-slider-track-line"},e.children)},f=function(e){return e.disabled||e.atMin?e.theme.slider.colors.disabled:e.theme.slider.colors.track},h=(0,d.default)(c)(o,function(e){return e.theme.slider.sizes.trackHeight},f,function(e){return"background "+e.theme.slider.transitions.slider});t.default=h},274:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(0),u=a(l),s=n(1),d=a(s),o=(0,i.default)(["\n  width: ","px;\n  height: 100%;\n  opacity: ",";\n  transition: all ",";\n  background: ",";\n"],["\n  width: ","px;\n  height: 100%;\n  opacity: ",";\n  transition: all ",";\n  background: ",";\n"]),c=function(e){return u.default.createElement("div",{className:e.className+" smc-slider-track-value"},e.children)},f=(0,d.default)(c)(o,function(e){return e.width},function(e){return e.disabled?0:1},function(e){return e.theme.slider.transitions.main},function(e){return e.disabled?e.theme.slider.colors.disabled:e.theme.slider.colors.main});t.default=f},275:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),l=n(0),u=a(l),s=n(1),d=a(s),o=(0,i.default)(["\n  height: 100%;\n  overflow: hidden;\n  max-width: ","px;\n"],["\n  height: 100%;\n  overflow: hidden;\n  max-width: ","px;\n"]),c=function(e){return u.default.createElement("div",{className:e.className+" smc-slider-value-size"},e.children)},f=(0,d.default)(c)(o,function(e){return e.width});t.default=f},68:function(e,t,n){"use strict";function a(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}a(),e.exports=n(100)}},[264]);
            return { page: comp.default }
          })
        