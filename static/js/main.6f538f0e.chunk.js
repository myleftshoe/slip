(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),s=n(3),c=n(4),l=n(6),u=n(5),p=n(7),h=n(2),f=n(11),m=(n(17),n(19),function(e){return Object(h.a)(Array(e).keys()).map(function(e){return{id:"Item ".concat(e),text:"Item ".concat(e),opacity:1}})}),v={reverse:function(e){var t,n=e.items;return{items:(t=n,t.slice().reverse())}},shuffle:function(e){var t,n=e.items;return{items:(t=n,t.map(function(e){return[Math.random(),e]}).sort(function(e,t){return e[0]-t[0]}).map(function(e){return e[1]}))}},move:function(e,t){return function(n){return{items:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n===t)return e;if(isNaN(Number(t)||isNaN(Number(n))))return e;var o=Object(h.a)(e),r=null!==t?o.splice(t,1)[0]:null;return null!==n&&o.splice(n,0,r),o}(n.items,e,t)}}}},d=function(e){console.log("stoppingEvent",e.type,e.target)},g=0,b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:m(80)},n.move=function(e){var t=e.oldIndex,o=e.newIndex;return n.setState(v.move(t,o))},n.reverse=function(){return n.setState(v.reverse)},n.shuffle=function(){return n.setState(v.shuffle)},n.swap=function(e){var t=n.state.items.slice(),o=t[g];t[g]=t[g+1],t[g+1]=o,n.setState({items:t}),g++},n.onDragOver=function(){return console.log("onDragOver")},n.onDragStart=function(){console.log("onDragStart",n.listRef.style),n.listRef.style.touchAction="none"},n.setListRef=function(e){n.listRef=e,console.log(n.listRef)},n.doSwap=function(e){var t=n.state.items.slice();console.log(t);var o=t.findIndex(function(t){return t.id===e});console.log(e,o);var r=t[0];t[0]=t[o],t[o]=r,n.setState({items:t})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.items;return r.a.createElement("div",{className:"App",droppable:"true",onDragOver:this.onDragOver,onDrop:this.onDragOver},r.a.createElement("button",{onClick:this.reverse},"Reverse"),r.a.createElement("button",{onClick:this.shuffle},"Shuffle"),r.a.createElement(O,{onDragStart:this.onDragStart,swap:this.swap}),r.a.createElement("div",{className:"list",ref:this.setListRef},r.a.createElement(f.a,{onMoveEnd:this.move,enterAnimation:"fade"},t.map(function(t,n){var o=t.text==="Item "+g;return r.a.createElement(y,{id:t.id,placeholder:o,swap:e.swap,key:t.id},t.text)}))))}}]),t}(o.Component),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:0},n.onTouchStart=function(e){console.log("onTouchStart",e.touches,e.target.style);var t=e.target.getBoundingClientRect(),o=t.top,r=t.left;n.position={top:o,left:r},console.log(n.position),e.target.style.pointerEvents="none",n.props.onDragStart()},n.onTouchEnd=function(e){e.target.style.pointerEvents="",console.log("onTouchEnd"),console.log(document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY)),n.props.swap(n.id)},n.onTouchMove=function(e){d(e),console.log("onTouchMove",e.target),e.target.style.transform="translate(0px, ".concat(e.touches[0].clientY-n.position.top,"px)"),e.target.style.zIndex="999";var t=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY).getAttribute("id");console.log(document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)),console.log(t),t&&n.state.id!==t&&"Item 0"!==t&&(n.props.swap(t),n.setState({id:t}),n.id=t)},n.startPosition=null,n.position={},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"placeholder",draggable:"true",onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd})}}]),t}(o.Component),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onMouseLeave=function(e){console.log("onMouseLeave",n.props.id),n.props.swap(n.props.id)},n.onDragOver=function(){console.log("onDragOver")},n.hide=function(){n.props.swap(n.props.id)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=(e.placeholder,e.id);return r.a.createElement("div",{className:"Item 0"==n?"blank":"list-item",id:n,droppable:"true",onDragOver:this.onDragOver,onClick:this.hide,onPointerOut:this.onMouseLeave},"Item 0"!==n&&t)}}]),t}(o.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.6f538f0e.chunk.js.map