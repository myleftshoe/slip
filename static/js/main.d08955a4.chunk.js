(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(20)},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),s=n(2),a=n.n(s),r=n(3),c=n(4),l=n(6),u=n(5),h=n(7),d=n(1),p=n(10),v=function(){var t=document.createElement("div").style,e="transition"in t?"transition":"webkitTransition",n="transform"in t?"transform":"webkitTransform",i="webkitTransform"===n?"-webkit-transform":"transform",o="userSelect"in t?"userSelect":"webkitUserSelect";function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{raised:!0};if("string"===typeof t&&(t=document.querySelector(t)),!t||!t.addEventListener)throw new Error("Please specify DOM node to attach to");if(!this||this===window)return new s(t);this.options=e,this.cancel=this.setState.bind(this,this.states.idle),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onSelection=this.onSelection.bind(this),this.onContainerFocus=this.onContainerFocus.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.setState(this.states.idle),this.attach(t)}function a(t){var e=t.style[n];if(e)return{value:e,original:e};if(window.getComputedStyle){var o=window.getComputedStyle(t).getPropertyValue(i);if(o&&"none"!==o)return{value:o,original:""}}return{value:"",original:""}}return s.prototype={container:null,state:null,target:null,usingTouch:!1,mouseHandlersAttached:!1,startPosition:null,latestPosition:null,previousPosition:null,canPreventScrolling:!1,states:{idle:function(){return this.removeMouseHandlers(),this.target&&(this.target.node.style.willChange="",this.target=null),this.usingTouch=!1,{allowTextSelection:!0}},undecided:function(){var t,n=this.target.node,o=window.getComputedStyle(n),s=o.marginTop,a=o.marginBottom;return this.target.height=n.offsetHeight+Math.max(parseInt(s),parseInt(a)),n.style.willChange=i,n.style[e]="",this.dispatch(this.target.originalTarget,"beforewait")?t=setTimeout(function(){var t=this.getAbsoluteMovement();this.canPreventScrolling&&t.x<15&&t.y<25&&this.dispatch(this.target.originalTarget,"beforereorder")&&this.setState(this.states.reorder)}.bind(this),300):this.dispatch(this.target.originalTarget,"beforereorder")&&this.setState(this.states.reorder),{leaveState:function(){clearTimeout(t)},onMove:function(){var t=this.getAbsoluteMovement();if(t.y>20&&this.setState(this.states.idle),t.x>1.2*t.y)return!1},onLeave:function(){this.setState(this.states.idle)},onEnd:function(){var t=this.dispatch(this.target.originalTarget,"tap");return this.setState(this.states.idle),t}}},reorder:function(){var t=this,s=this.target.node;s.focus&&s.focus();var r=window.getComputedStyle(s),c=r.marginTop,l=r.marginBottom;this.target.height=s.offsetHeight+Math.max(parseInt(c),parseInt(l));var u,h=0,p=s.offsetTop+this.target.height/2,v=Object(d.a)(this.container.children).map(function(n,o){if(n===t.target.node)return h=o,{node:n};var s=n.offsetTop;return n.style[e]=i+" 0.2s ease-in-out",n.style.willChange=i,{node:n,baseTransform:a(n),pos:s+(s<p?n.offsetHeight:0)-p}});v.splice(h,1);var m=Array.prototype.slice.call(v);function g(){var t=this;return requestAnimationFrame(function(){if(t.target){t.updateScrolling(),u&&(clearTimeout(u),u=null);var e=t.getTotalMovement();t.target.node.style[n]="translate(0,"+e.y+"px) "+t.target.baseTransform.value;var i=t.target.height;v.forEach(function(t){var o=0;t.pos<0&&e.y<0&&t.pos>e.y?o=i:t.pos>0&&e.y>0&&t.pos<e.y&&(o=-i),t.node.style[n]=o?"translate(0,"+o+"px) "+t.baseTransform.value:t.baseTransform.original})}}),!1}return console.log(m.map(function(t){return t.style.willChange})),s.classList.add("slip-dragging"),this.options.draggingClassName&&s.classList.add(this.options.draggingClassName),this.options.raised&&s.classList.add("slip-shadow"),s.style.zIndex="99999",s.style[o]="none",g.call(this),{leaveState:function(){u&&clearTimeout(u),this.container.focus&&this.container.focus(),this.target.node.style[o]="",this.animateToZero(function(t){t.node.style.zIndex=""}),v.forEach(function(t){t.node.style[n]=t.baseTransform.original,t.node.style.willChange=null,t.node.style[e]=""})},onMove:g,onLeave:function(){u&&clearTimeout(u),u=setTimeout(function(){u=null,this.cancel()}.bind(this),700)},onEnd:function(){var t,e,n=this.getTotalMovement();if(n.y<0){for(t=0;t<v.length&&!(v[t].pos>n.y);t++);e=t}else{for(t=v.length-1;t>=0&&!(v[t].pos<n.y);t--);e=t+1}return this.target.relativeIndex=e-h,this.dispatch(this.target.node,"reorder",{spliceIndex:e,originalIndex:h,insertBefore:v[e]?v[e].node:null}),this.setState(this.states.idle),!1}}}},attach:function(t){this.container&&this.detach(),this.container=t,this.container.addEventListener("focus",this.onContainerFocus,{passive:!0,capture:!1}),this.otherNodes=[],document.addEventListener("selectionchange",this.onSelection,{passive:!1,capture:!1}),this.container.addEventListener("touchcancel",this.cancel,{passive:!0,capture:!1}),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0,capture:!1}),this.container.addEventListener("touchmove",this.onTouchMove,{passive:!1,capture:!1}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!1,capture:!1}),this.container.addEventListener("mousedown",this.onMouseDown,{passive:!0,capture:!1}),this.container.addEventListener("contextmenu",this.onContextMenu,{passive:!1,capture:!1})},detach:function(){this.cancel(),this.container.removeEventListener("mousedown",this.onMouseDown,{passive:!0,capture:!1}),this.container.removeEventListener("touchend",this.onTouchEnd,{passive:!1,capture:!1}),this.container.removeEventListener("touchmove",this.onTouchMove,{passive:!1,capture:!1}),this.container.removeEventListener("touchstart",this.onTouchStart,{passive:!0,capture:!1}),this.container.removeEventListener("touchcancel",this.cancel,{passive:!0,capture:!1}),this.container.removeEventListener("contextmenu",this.onContextMenu,{passive:!0,capture:!1}),document.removeEventListener("selectionchange",this.onSelection,{passive:!1,capture:!1})},setState:function(t){if(this.state){if(this.state.ctor===t)return;this.state.leaveState&&this.state.leaveState.call(this)}var e=this.state,n=t.call(this);this.state===e&&(n.ctor=t,this.state=n)},findTargetNode:function(t){for(;t&&t.parentNode!==this.container;)t=t.parentNode;return t},onContainerFocus:function(t){t.stopPropagation()},onSelection:function(t){t.stopPropagation();var e=t.target===document||this.findTargetNode(t),n=/(iPhone|iPad|iPod)/i.test(navigator.userAgent)&&!/(Android|Windows)/i.test(navigator.userAgent);e&&(n?this.setState(this.states.idle):this.state.allowTextSelection||t.preventDefault())},addMouseHandlers:function(){this.mouseHandlersAttached||(this.mouseHandlersAttached=!0,document.documentElement.addEventListener("mouseleave",this.onMouseLeave,{passive:!0,capture:!1}),window.addEventListener("mousemove",this.onMouseMove,{passive:!1,capture:!0}),window.addEventListener("mouseup",this.onMouseUp,{passive:!1,capture:!0}),window.addEventListener("blur",this.cancel,{passive:!0,capture:!1}))},removeMouseHandlers:function(){this.mouseHandlersAttached&&(this.mouseHandlersAttached=!1,document.documentElement.removeEventListener("mouseleave",this.onMouseLeave,{passive:!0,capture:!1}),window.removeEventListener("mousemove",this.onMouseMove,{passive:!1,capture:!0}),window.removeEventListener("mouseup",this.onMouseUp,{passive:!1,capture:!0}),window.removeEventListener("blur",this.cancel,{passive:!0,capture:!1}))},onMouseLeave:function(t){t.stopPropagation(),this.usingTouch||t.target!==document.documentElement&&t.relatedTarget!==document.documentElement||this.state.onLeave&&this.state.onLeave.call(this)},onMouseDown:function(t){t.stopPropagation(),!this.usingTouch&&0===t.button&&this.setTarget(t)&&(this.addMouseHandlers(),this.canPreventScrolling=!0,this.startAtPosition({x:t.clientX,y:t.clientY,time:t.timeStamp}))},onTouchStart:function(t){t.stopPropagation(),this.usingTouch=!0,this.canPreventScrolling=!0,t.touches.length>1?this.setState(this.states.idle):this.setTarget(t)&&this.startAtPosition({x:t.touches[0].clientX,y:t.touches[0].clientY,time:t.timeStamp})},setTarget:function(t){var e=this.findTargetNode(t.target);if(!e)return this.setState(this.states.idle),!1;for(var n=e.parentNode;n&&n!==document.body&&!(n.scrollHeight>n.clientHeight&&"visible"!==window.getComputedStyle(n)["overflow-y"]);)n=n.parentNode;return n=n||document.body,this.target={originalTarget:t.target,node:e,scrollContainer:n,origScrollTop:n.scrollTop,origScrollHeight:n.scrollHeight,baseTransform:a(e)},!0},startAtPosition:function(t){this.startPosition=this.previousPosition=this.latestPosition=t,this.setState(this.states.undecided)},updatePosition:function(t,e){null!=this.target&&(this.latestPosition=e,this.state.onMove&&!1===this.state.onMove.call(this)&&t.preventDefault(),this.latestPosition.time-this.previousPosition.time>100&&(this.previousPosition=this.latestPosition))},onMouseMove:function(t){t.stopPropagation(),this.updatePosition(t,{x:t.clientX,y:t.clientY,time:t.timeStamp})},onTouchMove:function(t){t.stopPropagation(),this.updatePosition(t,{x:t.touches[0].clientX,y:t.touches[0].clientY,time:t.timeStamp}),this.canPreventScrolling=!1},onMouseUp:function(t){t.stopPropagation(),this.usingTouch||0!==t.button||this.state.onEnd&&!1===this.state.onEnd.call(this)&&t.preventDefault()},onTouchEnd:function(t){t.stopPropagation(),t.touches.length>1?this.cancel():this.state.onEnd&&!1===this.state.onEnd.call(this)&&t.preventDefault()},onContextMenu:function(t){t.preventDefault(),t.stopPropagation()},getTotalMovement:function(){if(this.target){var t=this.target.scrollContainer.scrollTop-this.target.origScrollTop;return{x:this.latestPosition.x-this.startPosition.x,y:this.latestPosition.y-this.startPosition.y+t,time:this.latestPosition.time-this.startPosition.time}}},getAbsoluteMovement:function(){var t=this.getTotalMovement();return{x:Math.abs(t.x),y:Math.abs(t.y),time:t.time,directionX:t.x<0?"left":"right",directionY:t.y<0?"up":"down"}},updateScrolling:function(){var t=0,e=this.target.scrollContainer,n=e.getBoundingClientRect(),i=this.target.node.getBoundingClientRect(),o=Math.min(n.bottom,window.innerHeight)-i.bottom,s=i.top-Math.max(n.top,0),a=this.target.origScrollHeight-Math.min(e.clientHeight,window.innerHeight);o<40?t=Math.min(40,40-o):s<40&&(t=Math.max(-40,s-40)),e.scrollTop=Math.max(0,Math.min(a,e.scrollTop+t))},dispatch:function(t,e,n){var i=document.createEvent("CustomEvent");return i&&i.initCustomEvent?i.initCustomEvent("slip:"+e,!0,!0,n):((i=document.createEvent("Event")).initEvent("slip:"+e,!0,!0),i.detail=n),t.dispatchEvent(i)},animateToZero:function(t,e){var i=this,o=e=e||this.target,s=o.node,a=o.height,r=o.relativeIndex,c=parseInt(window.getComputedStyle(s).getPropertyValue(n).split(",")[5])-a*r;s.style[n]="translate(0px,".concat(c,"px)"),setTimeout(function(o){o.style.transitionProperty="all",o.style[n]=e.baseTransform.original;o.addEventListener("transitionend",function n(s){o.classList.contains("slip-dragging")?(o.classList.remove(i.options.draggingClassName),o.classList.remove("slip-dragging"),o.classList.remove("slip-shadow"),o.classList.add("slip-dropping")):(o.removeEventListener("transitionend",n,!1),o.classList.remove("slip-dropping"),t&&t.call(i,e))},!1)},0,s)}},s}(),m=n(9),g=(n(16),function(t){function e(){var t,n;Object(r.a)(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={reordering:!1},n.handleBeforeReorder=function(t){n.props.disableMove?t.preventDefault():(n.setState({reordering:!0}),n.props.onMoveStart&&n.props.onMoveStart())},n.handleReorder=function(t){var e=t.detail,i=e.originalIndex,o=e.spliceIndex;n.props.onMoveEnd&&n.props.onMoveEnd({oldIndex:i,newIndex:o}),n.setState({reordering:!1})},n.container=null,n.init=function(t){n.container=t,new v(n.container,{raised:n.props.elevateItem,draggingClassName:"slipmove-dragging"}),n.container.addEventListener("slip:beforereorder",n.handleBeforeReorder),n.container.addEventListener("slip:reorder",n.handleReorder)},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentWillUnmount",value:function(){this.container.removeEventListener("slip:beforereorder",this.handleBeforeReorder),this.container.removeEventListener("slip:reorder",this.handleReorder)}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.flipMoveProps,i=t.style,s=void 0===i?{}:i;return"static"===(s.position||"static")&&(s.position="relative"),o.a.createElement("div",{id:"container",ref:this.init,style:Object(p.a)({},s)},o.a.createElement(m.a,Object.assign({typeName:null},n,{disableAllAnimations:this.state.reordering}),e))}}]),e}(i.Component));g.defaultProps={elevateItem:!0};n(18);var f=function(t){return Object(d.a)(Array(t).keys()).map(function(t){return"Item ".concat(t)})},y={reverse:function(t){var e,n=t.items;return{items:(e=n,e.slice().reverse())}},shuffle:function(t){var e,n=t.items;return{items:(e=n,e.map(function(t){return[Math.random(),t]}).sort(function(t,e){return t[0]-e[0]}).map(function(t){return t[1]}))}},move:function(t,e){return function(n){return{items:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n===e)return t;if(isNaN(Number(e)||isNaN(Number(n))))return t;var i=Object(d.a)(t),o=null!==e?i.splice(e,1)[0]:null;return null!==n&&i.splice(n,0,o),i}(n.items,t,e)}}}},b=function(t){function e(){var t,n;Object(r.a)(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={items:f(20)},n.move=function(t){var e=t.oldIndex,i=t.newIndex;return n.setState(y.move(e,i))},n.reverse=function(){return n.setState(y.reverse)},n.shuffle=function(){return n.setState(y.shuffle)},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.state.items;return o.a.createElement("div",{className:"App"},o.a.createElement("button",{onClick:this.reverse},"Reverse"),o.a.createElement("button",{onClick:this.shuffle},"Shuffle"),o.a.createElement(g,{onMoveEnd:this.move,flipMoveProps:{appearAnimation:"fade"}},t.map(function(t){return o.a.createElement(M,{key:t},t)})))}}]),e}(i.Component),M=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.children;return o.a.createElement("div",{className:"list-item"},t)}}]),e}(i.PureComponent);a.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.d08955a4.chunk.js.map