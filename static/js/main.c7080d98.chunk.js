(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),s=n(1),r=n.n(s),a=(n(15),n(3)),h=n(4),c=n(6),l=n(5),u=n(7),d=n(2),g=function(){var t=/Chrome\/[3-5]/.test(navigator.userAgent),e=t,n=t,i=document.createElement("div").style,o="transition"in i?"transition":"webkitTransition",s="transform"in i?"transform":"webkitTransform",r="webkitTransform"===s?"-webkit-transform":"transform",a="userSelect"in i?"userSelect":"webkitUserSelect";i[s]="translateZ(0)";var h=i[s]?"translateZ(0) ":"";i[s];i=null;var c=0,l=!1,u=function(){};function d(t,e){if("string"===typeof t&&(t=document.querySelector(t)),!t||!t.addEventListener)throw new Error("Please specify DOM node to attach to");if(!this||this===window)return new d(t,e);if(this.options=e=e||{},this.options.ignoredElements=e.ignoredElements||[],!Array.isArray(this.options.ignoredElements))throw new Error("ignoredElements must be an Array");this.cancel=this.setState.bind(this,this.states.idle),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onSelection=this.onSelection.bind(this),this.onContainerFocus=this.onContainerFocus.bind(this),this.setState(this.states.idle),this.attach(t)}function g(t){var e=t.style[s];if(e)return{value:e,original:e};if(window.getComputedStyle){var n=window.getComputedStyle(t).getPropertyValue(r);if(n&&"none"!==n)return{value:n,original:""}}return{value:"",original:""}}return d.prototype={container:null,options:{},state:null,target:null,usingTouch:!1,mouseHandlersAttached:!1,startPosition:null,latestPosition:null,previousPosition:null,canPreventScrolling:!1,states:{idle:function(){return this.removeMouseHandlers(),this.target&&(this.target.node.style.willChange="",this.target=null),this.usingTouch=!1,{allowTextSelection:!0}},undecided:function(){if(this.target.height=this.target.node.offsetHeight,this.target.node.style.willChange=r,this.target.node.style[o]="",this.dispatch(this.target.originalTarget,"beforewait"))var t=setTimeout(function(){var t=this.getAbsoluteMovement();this.canPreventScrolling&&t.x<15&&t.y<25&&this.dispatch(this.target.originalTarget,"beforereorder")&&this.setState(this.states.reorder)}.bind(this),300);else this.dispatch(this.target.originalTarget,"beforereorder")&&this.setState(this.states.reorder);return{leaveState:function(){clearTimeout(t)},onMove:function(){var t=this.getAbsoluteMovement();if(t.y>20&&this.setState(this.states.idle),t.x>1.2*t.y)return!1},onLeave:function(){this.setState(this.states.idle)},onEnd:function(){var t=this.dispatch(this.target.originalTarget,"tap");return this.setState(this.states.idle),t}}},reorder:function(){var t;if(this.target.node.focus&&this.target.node.focus(),this.target.height=this.target.node.offsetHeight,this.options.ignoredElements.length){var e=this.container,i=e.tagName.toLowerCase();e.getAttribute("id")?i="#"+e.getAttribute("id"):e.classList.length&&(i+="."+e.getAttribute("class").replace(" ",".")),i+=" > ",this.options.ignoredElements.forEach(function(t){i+=":not("+t+")"});try{t=e.parentNode.querySelectorAll(i)}catch(f){throw f instanceof DOMException&&"SyntaxError"===f.name?new Error("ignoredElements you specified contain invalid query"):f}}else t=this.container.childNodes;for(var h,c=function(t,e){for(var n=0,i=0,o=0;o<e.length;o++)1===e[o].nodeType&&(i++,e[o]===t.node&&(n=i-1));return n}(this.target,t),l=this.target.node.offsetTop+this.target.height/2,u=[],d=0;d<t.length;d++)if(1===t[d].nodeType&&t[d]!==this.target.node){var m=t[d].offsetTop;t[d].style[o]=r+" 0.2s ease-in-out",u.push({node:t[d],baseTransform:g(t[d]),pos:m+(m<l?t[d].offsetHeight:0)-l})}function v(){this.updateScrolling(),h&&(clearTimeout(h),h=null);var t=this.getTotalMovement();this.target.height;return u.forEach(function(e){e.pos<0&&t.y<0&&e.pos>t.y||e.pos>0&&t.y>0&&(e.pos,t.y)}),!1}return this.target.node.classList.add("slip-reordering"),this.target.node.style.zIndex="99999",this.target.node.style[a]="none",n&&(this.container.style.webkitTransformStyle="preserve-3d"),v.call(this),{leaveState:function(){h&&clearTimeout(h),n&&(this.container.style.webkitTransformStyle=""),this.container.focus&&this.container.focus(),this.target.node.classList.remove("slip-reordering"),this.target.node.style[a]="",this.animateToZero(function(t){t.node.style.zIndex=""}),u.forEach(function(t){t.node.style[s]=t.baseTransform.original,t.node.style[o]=""})},onMove:v,onLeave:function(){h&&clearTimeout(h),h=setTimeout(function(){h=null,this.cancel()}.bind(this),700)},onEnd:function(){var t,e,n=this.getTotalMovement();if(n.y<0){for(t=0;t<u.length&&!(u[t].pos>n.y);t++);e=t}else{for(t=u.length-1;t>=0&&!(u[t].pos<n.y);t--);e=t+1}return this.dispatch(this.target.node,"reorder",{spliceIndex:e,originalIndex:c,insertBefore:u[e]?u[e].node:null}),this.setState(this.states.idle),!1}}}},attach:function(t){c++,this.container&&this.detach(),!l&&e&&(l=!0,document.body.addEventListener("touchstart",u,!1)),this.container=t,this.container.addEventListener("focus",this.onContainerFocus,!1),this.otherNodes=[],document.addEventListener("selectionchange",this.onSelection,!1),this.container.addEventListener("touchcancel",this.cancel,!1),this.container.addEventListener("touchstart",this.onTouchStart,!1),this.container.addEventListener("touchmove",this.onTouchMove,!1),this.container.addEventListener("touchend",this.onTouchEnd,!1),this.container.addEventListener("mousedown",this.onMouseDown,!1)},detach:function(){this.cancel(),this.container.removeEventListener("mousedown",this.onMouseDown,!1),this.container.removeEventListener("touchend",this.onTouchEnd,!1),this.container.removeEventListener("touchmove",this.onTouchMove,!1),this.container.removeEventListener("touchstart",this.onTouchStart,!1),this.container.removeEventListener("touchcancel",this.cancel,!1),document.removeEventListener("selectionchange",this.onSelection,!1),!--c&&l&&(l=!1,document.body.removeEventListener("touchstart",u,!1))},setState:function(t){if(this.state){if(this.state.ctor===t)return;this.state.leaveState&&this.state.leaveState.call(this)}var e=this.state,n=t.call(this);this.state===e&&(n.ctor=t,this.state=n)},findTargetNode:function(t){for(;t&&t.parentNode!==this.container;)t=t.parentNode;return t},onContainerFocus:function(t){t.stopPropagation()},onSelection:function(t){t.stopPropagation();var e=t.target===document||this.findTargetNode(t),n=/(iPhone|iPad|iPod)/i.test(navigator.userAgent)&&!/(Android|Windows)/i.test(navigator.userAgent);e&&(n?this.setState(this.states.idle):this.state.allowTextSelection||t.preventDefault())},addMouseHandlers:function(){this.mouseHandlersAttached||(this.mouseHandlersAttached=!0,document.documentElement.addEventListener("mouseleave",this.onMouseLeave,!1),window.addEventListener("mousemove",this.onMouseMove,!0),window.addEventListener("mouseup",this.onMouseUp,!0),window.addEventListener("blur",this.cancel,!1))},removeMouseHandlers:function(){this.mouseHandlersAttached&&(this.mouseHandlersAttached=!1,document.documentElement.removeEventListener("mouseleave",this.onMouseLeave,!1),window.removeEventListener("mousemove",this.onMouseMove,!0),window.removeEventListener("mouseup",this.onMouseUp,!0),window.removeEventListener("blur",this.cancel,!1))},onMouseLeave:function(t){t.stopPropagation(),this.usingTouch||t.target!==document.documentElement&&t.relatedTarget!==document.documentElement||this.state.onLeave&&this.state.onLeave.call(this)},onMouseDown:function(t){t.stopPropagation(),!this.usingTouch&&0===t.button&&this.setTarget(t)&&(this.addMouseHandlers(),this.canPreventScrolling=!0,this.startAtPosition({x:t.clientX,y:t.clientY,time:t.timeStamp}))},onTouchStart:function(t){t.stopPropagation(),this.usingTouch=!0,this.canPreventScrolling=!0,t.touches.length>1?this.setState(this.states.idle):this.setTarget(t)&&this.startAtPosition({x:t.touches[0].clientX,y:t.touches[0].clientY,time:t.timeStamp})},setTarget:function(t){var e=this.findTargetNode(t.target);if(!e)return this.setState(this.states.idle),!1;for(var n=e.parentNode;n&&n!==document.body&&!(n.scrollHeight>n.clientHeight&&"visible"!==window.getComputedStyle(n)["overflow-y"]);)n=n.parentNode;return n=n||document.body,this.target={originalTarget:t.target,node:e,scrollContainer:n,origScrollTop:n.scrollTop,origScrollHeight:n.scrollHeight,baseTransform:g(e)},!0},startAtPosition:function(t){this.startPosition=this.previousPosition=this.latestPosition=t,this.setState(this.states.undecided)},updatePosition:function(t,e){null!=this.target&&(this.latestPosition=e,this.state.onMove&&!1===this.state.onMove.call(this)&&t.preventDefault(),this.latestPosition.time-this.previousPosition.time>100&&(this.previousPosition=this.latestPosition))},onMouseMove:function(t){t.stopPropagation(),this.updatePosition(t,{x:t.clientX,y:t.clientY,time:t.timeStamp})},onTouchMove:function(t){t.stopPropagation(),this.updatePosition(t,{x:t.touches[0].clientX,y:t.touches[0].clientY,time:t.timeStamp}),this.canPreventScrolling=!1},onMouseUp:function(t){t.stopPropagation(),this.usingTouch||0!==t.button||this.state.onEnd&&!1===this.state.onEnd.call(this)&&t.preventDefault()},onTouchEnd:function(t){t.stopPropagation(),t.touches.length>1?this.cancel():this.state.onEnd&&!1===this.state.onEnd.call(this)&&t.preventDefault()},getTotalMovement:function(){var t=this.target.scrollContainer.scrollTop-this.target.origScrollTop;return{x:this.latestPosition.x-this.startPosition.x,y:this.latestPosition.y-this.startPosition.y+t,time:this.latestPosition.time-this.startPosition.time}},getAbsoluteMovement:function(){var t=this.getTotalMovement();return{x:Math.abs(t.x),y:Math.abs(t.y),time:t.time,directionX:t.x<0?"left":"right",directionY:t.y<0?"up":"down"}},updateScrolling:function(){var t=0,e=this.target.scrollContainer,n=e.getBoundingClientRect(),i=this.target.node.getBoundingClientRect(),o=Math.min(n.bottom,window.innerHeight)-i.bottom,s=i.top-Math.max(n.top,0),r=this.target.origScrollHeight-Math.min(e.clientHeight,window.innerHeight);o<40?t=Math.min(40,40-o):s<40&&(t=Math.max(-40,s-40)),e.scrollTop=Math.max(0,Math.min(r,e.scrollTop+t))},dispatch:function(t,e,n){var i=document.createEvent("CustomEvent");return i&&i.initCustomEvent?i.initCustomEvent("slip:"+e,!0,!0,n):((i=document.createEvent("Event")).initEvent("slip:"+e,!0,!0),i.detail=n),t.dispatchEvent(i)},getSiblings:function(t){for(var e=[],n=t.node.nextSibling;n;)1===n.nodeType&&e.push({node:n,baseTransform:g(n)}),n=n.nextSibling;return e},animateToZero:function(t,e){(e=e||this.target).node.style[o]=r+" 0.1s ease-out",e.node.style[s]="translate(0,0) "+h+e.baseTransform.value,setTimeout(function(){e.node.style[o]="",e.node.style[s]=e.baseTransform.original,t&&t.call(this,e)}.bind(this),101)}},d}(),m=n(9),v=(n(17),function(t){return Object(d.a)(Array(t).keys()).map(function(t){return"Item ".concat(t)})}),f=function(t){function e(){var t,n;Object(a.a)(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(n=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={items:v(100),reordering:!1},n.setListRef=function(t){n.list=t,console.log(n.list),new g(n.list),n.list.addEventListener("slip:reorder",function(t){console.log(t);var e=t.detail,i=e.originalIndex,o=e.spliceIndex,s=E(n.state.items,i,o);n.setState({items:s,reordering:!1})}),n.list.addEventListener("slip:beforereorder",function(t){n.setState({reordering:!0})})},n.reverse=function(){n.setState({items:Object(d.a)(n.state.items).reverse()})},n}return Object(u.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.state.items;return o.a.createElement("div",{className:"App",onContextMenu:y},o.a.createElement("button",{onClick:this.reverse},"Reverse"),o.a.createElement("div",{className:"draggable-container",ref:this.setListRef},o.a.createElement(m.a,{typeName:null,disableAllAnimations:this.state.reordering},t.map(function(t){return o.a.createElement(p,{key:t},t)}))))}}]),e}(i.Component),p=function(t){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props.children;return o.a.createElement("div",{className:"draggable-item"},t)}}]),e}(i.PureComponent),y=function(t){console.log("stopping event",t),t.preventDefault(),t.stopPropagation()},E=function(t,e,n){if(null===e&&null===n)return t;var i=Object(d.a)(t),o=null;return null!==e&&(o=i.splice(e,1)[0]),null!==n&&i.splice(n,0,o),i},b=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c7080d98.chunk.js.map