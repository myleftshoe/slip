(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(3),s=n(4),u=n(6),l=n(5),f=n(7),h=n(2),m=n(9),d=(n(15),function(t){return Object(h.a)(Array(t).keys()).map(function(t,e){return{key:e,id:"Item ".concat(t),text:"Item ".concat(t),opacity:1}})}),v={reverse:function(t){var e,n=t.items;return{items:(e=n,e.slice().reverse())}},shuffle:function(t){var e,n=t.items;return{items:(e=n,e.map(function(t){return[Math.random(),t]}).sort(function(t,e){return t[0]-e[0]}).map(function(t){return t[1]}))}},move:function(t,e){return function(n){return{items:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n===e)return t;if(isNaN(Number(e)||isNaN(Number(n))))return t;var r=Object(h.a)(t),o=null!==e?r.splice(e,1)[0]:null;return null!==n&&r.splice(n,0,o),r}(n.items,t,e)}}}},p=!1,g="Item 0",O=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={items:d(11)},n.move=function(t){var e=t.oldIndex,r=t.newIndex;return n.setState(v.move(e,r))},n.reverse=function(){return n.setState(v.reverse)},n.shuffle=function(){return n.setState(v.shuffle)},n.onDragStart=function(t){console.log("onDragStart",t,n.listRef.style),n.listRef.style.touchAction="none",g=t},n.onDragOver=function(t){if(!p){var e=n.state.items.findIndex(function(t){return t.id===g}),r=n.state.items.findIndex(function(e){return e.id===t});console.log("onDragOver",t,e,r),n.setState(v.move(e,r))}},n.setListRef=function(t){n.listRef=t,console.log(n.listRef)},n.onFlipStart=function(t,e){console.log("onFlipStart",t,e),p=!0},n.onFlipEnd=function(t,e){console.log("onFlipEnd",t,e),p=!1},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.state.items;return o.a.createElement("div",{className:"App",droppable:"true",onDragOver:this.onDragOver,onDrop:this.onDragOver},o.a.createElement(b,{onDragStart:this.onDragStart,swap:this.swap,onDragOver:this.onDragOver}),o.a.createElement("div",{className:"list",ref:this.setListRef},o.a.createElement(m.a,{enterAnimation:"fade",onStartAll:this.onFlipStart,onFinishAll:this.onFlipEnd},e.map(function(e,n){return o.a.createElement(S,{id:e.id,key:e.key,onDragStart:t.onDragStart},e.text)}))))}}]),e}(r.Component),b=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={id:0},n.onTouchMove=function(t){console.log("onTouchMove",t.touches);var e=t.touches[0],r=e.clientX,o=e.clientY;t.target.style.transform="translateY(".concat(o,"px)");var a=document.elementFromPoint(r,o);a.id.includes("Item")&&g!==a.id&&(console.log(a),n.props.onDragOver(a.id))},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"placeholder",draggable:"true",onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd})}}]),e}(r.Component),S=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={selected:!0},n.onTouchStart=function(t){n.props.onDragStart(n.props.id)},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.id;return o.a.createElement("div",{onTouchStart:this.onTouchStart,className:"Item 0"===n?"blank":"list-item",id:n},e)}}]),e}(r.PureComponent);i.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.9f1f9492.chunk.js.map