(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{44:function(e,t,a){e.exports=a(56)},49:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(49),a(16)),i=a(17),s=a(20),m=a(18),u=(a(50),a(36)),d=a(33),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.product,a=t.name,n=t.img,l=t.intro,c=t.discount,o=t.id,i=t.price,s=t.quantity,m=t.remaining;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("figure",{className:"figure d-md-flex"},r.a.createElement("img",{className:"figure-img img-fluid rounded col-md-2 mr-3",src:n,alt:""}),r.a.createElement("figcaption",null,r.a.createElement("h4",null,a),r.a.createElement("p",null,l)))),r.a.createElement("td",null,c,"%"),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.product)},type:"button",className:"btn btn-outline-dark"},"-"),r.a.createElement("span",{className:"btn"},s),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.product)},type:"button",className:"btn btn-outline-dark"},"+"))),r.a.createElement("td",null,"$",i*s),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm"},m," in stock"),r.a.createElement("button",{type:"button",onClick:function(){return e.props.onDelete(o)},className:"btn btn-danger btn-sm"},"Delete"))))}}]),a}(n.Component),h=a(61),b=a(63),E=a(59),f=a(62),g=a(60),y="https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={products:[{id:1,img:y,name:"Large SmashFries",intro:"French fries tossed in garlic",discount:20,quantity:1,remaining:6,price:100},{id:2,img:y,name:"Classic Smash Burger",intro:"Angus Beef",discount:0,quantity:1,remaining:5,price:100},{id:3,img:y,name:"Double Bacon Samsh Burger",intro:"Double certified angus beef",discount:15,quantity:1,remaining:4,price:80},{id:4,img:y,name:"Double Classic Smash Burger",intro:"Red onion",discount:20,quantity:1,remaining:3,price:200},{id:5,img:y,name:"Smash Tots",intro:"Crispy french fries",discount:30,quantity:0,remaining:0,price:150}],show:!1,valid:!1},e.handleIncrement=function(t){var a=Object(d.a)(e.state.products),n=a.indexOf(t);a[n]=Object(u.a)({},t),a[n].quantity<a[n].remaining&&a[n].quantity++,e.setState({products:a})},e.handleDecrement=function(t){var a=Object(d.a)(e.state.products),n=a.indexOf(t);a[n]=Object(u.a)({},t),a[n].quantity>0&&a[n].quantity--,e.setState({products:a})},e.handleDelete=function(t){var a=e.state.products.filter((function(e){return e.id!==t}));e.setState({products:a})},e.handleChangeTotal=function(){var t=Object(d.a)(e.state.products),a=0;return t.map((function(e){return a+=e.quantity*e.price*(1-e.discount/100)})),a.toFixed(2)},e.handleReset=function(){var t=e.state.products.map((function(e){return e.quantity=0,e}));e.setState({products:t})},e.handleShow=function(){return e.setState({show:!0})},e.handleClose=function(){return e.setState({show:!1})},e.handleSubmit=function(t){!1===t.target.checkVadility&&(t.preventDefault(),t.stopPropagation()),e.setState({valid:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"col"},"Product"),r.a.createElement("th",{className:"col"},"Discount"),r.a.createElement("th",{className:"col"},"Quantity"),r.a.createElement("th",{className:"col"},"Price"),r.a.createElement("th",{className:"col"},"Action"))),r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(p,{key:t.id,product:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete})}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("button",{className:"btn btn-warning mr-2",href:"#"},"Continue Shopping"),r.a.createElement("button",{className:"btn btn-info",href:"#",onClick:this.handleReset},"Reset")),r.a.createElement("td",{className:"hide-xs"}),r.a.createElement("td",{className:"hide-xs"}),r.a.createElement("td",null," Total: ",r.a.createElement("span",{className:"font-weight-bold"},"$",this.handleChangeTotal())),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.handleShow,className:"btn btn-success"},"Checkout"))),r.a.createElement("tr",null))),r.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"Checkout")),r.a.createElement(h.a.Body,null,r.a.createElement(b.a,{defaultActiveKey:"cc",id:"uncontrolled-tab-example"},r.a.createElement(E.a,{eventKey:"cc",title:"Credit Card"},r.a.createElement(f.a,{novalidate:!0,validated:this.state.valid,onSubmit:this.handleSubmit,className:"m-2"},r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"Name on card"),r.a.createElement(f.a.Control,{required:!0,type:"text",placeholder:""}),r.a.createElement(f.a.Control.Feedback,{type:"invalid"},"Please fill name.")),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,{className:"mt-2"},"Credit card number"),r.a.createElement(f.a.Control,{required:!0,type:"number",placeholder:"xxxx-xxxx-xxxx-xxxx"}),r.a.createElement(f.a.Control.Feedback,{type:"invalid"},"Please fill card number.")),r.a.createElement(f.a.Row,{className:"ml-1"},r.a.createElement(f.a.Group,{md:"6"},r.a.createElement(f.a.Label,null,"Exp."),r.a.createElement(f.a.Control,{required:!0,type:"number",placeholder:"MM-YYYY"}),r.a.createElement(f.a.Control.Feedback,{type:"invalid"},"Please fill exp. date.")),r.a.createElement(f.a.Group,{md:"6",className:"ml-2"},r.a.createElement(f.a.Label,null,"CVV"),r.a.createElement(f.a.Control,{required:!0,type:"number",placeholder:"xxx"}),r.a.createElement(f.a.Control.Feedback,{type:"invalid"},"Need CVV."))),r.a.createElement(g.a,{type:"submit"},"Pay"))),r.a.createElement(E.a,{eventKey:"pp",title:"PayPal"},r.a.createElement(g.a,{className:"m-3"},"My Paypal")),r.a.createElement(E.a,{eventKey:"bank",title:"Bank Transfer"},r.a.createElement("h3",{className:"m-3"},"Bank Information")))),r.a.createElement(h.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:this.handleClose},"Close"))))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.5e0c5d4c.chunk.js.map