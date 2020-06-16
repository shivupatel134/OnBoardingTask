(this.webpackJsonponboardtask=this.webpackJsonponboardtask||[]).push([[0],{53:function(e,t,a){e.exports=a(66)},58:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),c=(a(58),a(59),a(26)),s=a(11),i=a(6),u=a(7),d=a(9),m=a(8),p=a(71),h=a(70),E=a(69),f=a(72),b=a(68),v=a(48),S=a(73),y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/customer",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({CustomerID:null,Name:e.target.Name.value,Address:e.target.Address.value})}).then((function(e){e.json(),t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Add Customer")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"Name"},r.a.createElement(S.a.Control,{type:"text",name:"Name",required:!0,placeholder:"Name"})),r.a.createElement(S.a.Group,{controlId:"Address"},r.a.createElement(S.a.Control,{type:"text",name:"Address",required:!0,placeholder:"Address"})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," Add  "),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close"))))))))}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/customer",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({CustomerID:e.target.CustomerID.value,Name:e.target.Name.value,Address:e.target.Address.value})}).then((function(e){e.json(),t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Edit Customer")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"CustomerID",disabled:!0},r.a.createElement(S.a.Control,{type:"text",name:"CustomerID",required:!0,placeholder:"CustomerID",disabled:!0,defaultValue:this.props.custid})),r.a.createElement(S.a.Group,{controlId:"Name"},r.a.createElement(S.a.Control,{type:"text",name:"Name",required:!0,placeholder:"Name",defaultValue:this.props.custname})),r.a.createElement(S.a.Group,{controlId:"Address"},r.a.createElement(S.a.Control,{type:"text",name:"Address",required:!0,placeholder:"Address",defaultValue:this.props.custaddress})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," Update "),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close"))))))))}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/customer/"+this.props.custid,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Delete Customer")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,null,r.a.createElement("label",null,"Are you sure you want to delete?")),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{onClick:function(t){return e.handleSubmit(t)},variant:"primary",type:"button"},"Ok"),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Cancle"))))))))}}]),a}(n.Component),k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={cust:[],addModalShow:!1,editModalShow:!1,deleteModalShow:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){var e=this;fetch("https://onboardtask.azurewebsites.net/api/customer").then((function(e){return e.json()})).then((function(t){e.setState({cust:t})}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.cust,n=t.custid,l=t.custname,o=t.custaddress,c=function(){e.refreshList(),e.setState({editModalShow:!1})},s=function(){e.refreshList(),e.setState({deleteModalShow:!1})};return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"primary",onClick:function(){return e.setState({addModalShow:!0})}},"Add Customer"," "),r.a.createElement(y,{show:this.state.addModalShow,onHide:function(){e.refreshList(),e.setState({addModalShow:!1})}})),r.a.createElement(p.a,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null," Actions "))),r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t.CustomerID},r.a.createElement("td",null,t.Name),r.a.createElement("td",null,t.Address),r.a.createElement("td",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{className:"mr-2",variant:"info",onClick:function(){return e.setState({editModalShow:!0,custid:t.CustomerID,custname:t.Name,custaddress:t.Address})}}," ","Edit"," "),r.a.createElement(E.a,{className:"mr-2",variant:"danger",onClick:function(){return e.setState({deleteModalShow:!0,custid:t.CustomerID})}}," ","Delete"," "),r.a.createElement(C,{show:e.state.editModalShow,onHide:c,custid:n,custname:l,custaddress:o}),r.a.createElement(j,{show:e.state.deleteModalShow,onHide:s,custid:n}))))})))))}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/product",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ProductID:null,Name:e.target.Name.value,Price:e.target.Price.value})}).then((function(e){e.json(),t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Add Product")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"Name"},r.a.createElement(S.a.Control,{type:"text",name:"Name",required:!0,placeholder:"Name"})),r.a.createElement(S.a.Group,{controlId:"Price"},r.a.createElement(S.a.Control,{type:"text",name:"Price",required:!0,placeholder:"Price"})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," Add  "),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close"))))))))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ProductID:e.target.ProductID.value,Name:e.target.Name.value,Price:e.target.Price.value})}).then((function(e){e.json(),t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Edit Customer")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"ProductID",disabled:!0},r.a.createElement(S.a.Control,{type:"text",name:"ProductID",required:!0,placeholder:"ProductID",disabled:!0,defaultValue:this.props.productid})),r.a.createElement(S.a.Group,{controlId:"Name"},r.a.createElement(S.a.Control,{type:"text",name:"Name",required:!0,placeholder:"Name",defaultValue:this.props.proname})),r.a.createElement(S.a.Group,{controlId:"Price"},r.a.createElement(S.a.Control,{type:"text",name:"Price",required:!0,placeholder:"Price",defaultValue:this.props.proprice})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," Update  "),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close")))))),r.a.createElement(f.a.Footer,null)))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/product/"+this.props.productid,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Delete Product")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,null,r.a.createElement("label",null,"Are you sure you want to delete?")),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{onClick:function(t){return e.handleSubmit(t)},variant:"primary",type:"button"},"Delete"),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close")))))),r.a.createElement(f.a.Footer,null)))}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={pro:[],addModalShow:!1,editModalShow:!1,deleteModalShow:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){var e=this;fetch("https://onboardtask.azurewebsites.net/api/product").then((function(e){return e.json()})).then((function(t){e.setState({pro:t})}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.pro,n=t.productid,l=t.proname,o=t.proprice,c=function(){e.refreshList(),e.setState({editModalShow:!1})},s=function(){e.refreshList(),e.setState({deleteModalShow:!1})};return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"primary",onClick:function(){return e.setState({addModalShow:!0})}},"Add Product "),r.a.createElement(D,{show:this.state.addModalShow,onHide:function(){e.refreshList(),e.setState({addModalShow:!1})}})),r.a.createElement(p.a,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null," Actions "))),r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t.ProductID},r.a.createElement("td",null,t.Name),r.a.createElement("td",null,t.Price),r.a.createElement("td",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{className:"mr-2",variant:"info",onClick:function(){return e.setState({editModalShow:!0,productid:t.ProductID,proname:t.Name,proprice:t.Price})}}," Edit "),r.a.createElement(E.a,{className:"mr-2",variant:"danger",onClick:function(){return e.setState({deleteModalShow:!0,productid:t.ProductID})}}," Delete "),r.a.createElement(w,{show:e.state.editModalShow,onHide:c,productid:n,proname:l,proprice:o}),r.a.createElement(g,{show:e.state.deleteModalShow,onHide:s,productid:n}))))})))))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/store",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({StoreID:null,Name:e.target.Name.value,Address:e.target.Address.value})}).then((function(e){e.json(),t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Add")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"Name"},r.a.createElement(S.a.Control,{type:"text",name:"Name",required:!0,placeholder:"Name"})),r.a.createElement(S.a.Group,{controlId:"Address"},r.a.createElement(S.a.Control,{type:"text",name:"Address",required:!0,placeholder:"Address"})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," ","Add"," "),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close"))))))))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/store",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({StoreID:e.target.StoreID.value,Name:e.target.Name.value,Address:e.target.Address.value})}).then((function(e){e.json(),t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Edit Store")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"StoreID"},r.a.createElement(S.a.Control,{type:"text",name:"StoreID",required:!0,placeholder:"StoreID",disabled:!0,defaultValue:this.props.storeid})),r.a.createElement(S.a.Group,{controlId:"Name"},r.a.createElement(S.a.Control,{type:"text",name:"Name",required:!0,placeholder:"Name",defaultValue:this.props.stname})),r.a.createElement(S.a.Group,{controlId:"Address"},r.a.createElement(S.a.Control,{type:"text",name:"Address",required:!0,placeholder:"Address",defaultValue:this.props.staddress})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," ","Update"," "),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close"))))))))}}]),a}(n.Component),A=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/store/"+this.props.storeid,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Delete")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,null,r.a.createElement("label",null,"Are you sure you want to delete?")),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{onClick:function(t){return e.handleSubmit(t)},variant:"primary",type:"button"},"Delete"),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close"))))))))}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={st:[],addModalShow:!1,editModalShow:!1,deleteModalShow:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){var e=this;fetch("https://onboardtask.azurewebsites.net/api/store").then((function(e){return e.json()})).then((function(t){e.setState({st:t})}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.st,n=t.storeid,l=t.stname,o=t.staddress,c=function(){e.refreshList(),e.setState({editModalShow:!1})},s=function(){e.refreshList(),e.setState({deleteModalShow:!1})};return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"primary",onClick:function(){return e.setState({addModalShow:!0})}},"Add Store "),r.a.createElement(O,{show:this.state.addModalShow,onHide:function(){e.refreshList(),e.setState({addModalShow:!1})}})),r.a.createElement(p.a,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null," Actions "))),r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t.StoreID},r.a.createElement("td",null,t.Name),r.a.createElement("td",null,t.Address),r.a.createElement("td",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{className:"mr-2",variant:"info",onClick:function(){return e.setState({editModalShow:!0,storeid:t.StoreID,stname:t.Name,staddress:t.Address})}}," Edit "),r.a.createElement(E.a,{className:"mr-2",variant:"danger",onClick:function(){return e.setState({deleteModalShow:!0,storeid:t.StoreID})}}," Delete "),r.a.createElement(N,{show:e.state.editModalShow,onHide:c,storeid:n,stname:l,staddress:o}),r.a.createElement(A,{show:e.state.deleteModalShow,onHide:s,storeid:n}))))})))))}}]),a}(n.Component),L=a(34),M=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).refreshList=function(){fetch("https://onboardtask.azurewebsites.net/api/customer").then((function(e){return e.json()})).then((function(e){n.setState({customerList:e})})),fetch("https://onboardtask.azurewebsites.net/api/product").then((function(e){return e.json()})).then((function(e){n.setState({ProductList:e})})),fetch("https://onboardtask.azurewebsites.net/api/store").then((function(e){return e.json()})).then((function(e){n.setState({StoreList:e})}))},n.state={customerId:"",productId:"",storeId:"",customerList:[],ProductList:[],StoreList:[]},n.refreshList(),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/sales",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({SalesID:null,CustomerID:this.state.customerId,ProductID:this.state.productId,StoreID:this.state.storeId,DateSold:e.target.DateSold.value})}).then((function(e){e.json(),console.log(e)}))}},{key:"handleDropdownChange",value:function(e,t){this.setState(Object(L.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Add Sales")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"CustomerId"},r.a.createElement(S.a.Label,null,"Customer Name"),r.a.createElement(S.a.Control,{as:"select",required:!0,onChange:function(t){return e.handleDropdownChange(t,"customerId")},value:this.state.customerId},r.a.createElement("option",{value:""},"-- Select Customer -- "),this.state.customerList.map((function(e,t){return r.a.createElement("option",{key:t,value:e.CustomerID},e.Name)})))),r.a.createElement(S.a.Group,{controlId:"ProductId"},r.a.createElement(S.a.Label,null,"Product Name"),r.a.createElement(S.a.Control,{as:"select",required:!0,onChange:function(t){return e.handleDropdownChange(t,"productId")}},r.a.createElement("option",{value:""},"-- Select Product --"),this.state.ProductList.map((function(e,t){return r.a.createElement("option",{key:t,value:e.ProductID},e.Name)})))),r.a.createElement(S.a.Group,{controlId:"StoreId"},r.a.createElement(S.a.Label,null,"Store Name"),r.a.createElement(S.a.Control,{required:!0,as:"select",onChange:function(t){return e.handleDropdownChange(t,"storeId")}},r.a.createElement("option",{value:""},"-- Select Store --"),this.state.StoreList.map((function(e,t){return r.a.createElement("option",{key:t,value:e.StoreID},e.Name)})))),r.a.createElement(S.a.Group,{controlId:"DateSold"},r.a.createElement(S.a.Control,{type:"date",name:"DateSold",required:!0,placeholder:"DateSold",datatype:"dd/mm/yyyy"})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," Add Sales "),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close"))))))))}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).refreshList=function(){fetch("https://onboardtask.azurewebsites.net/api/customer").then((function(e){return e.json()})).then((function(e){n.setState({customerList:e})})),fetch("https://onboardtask.azurewebsites.net/api/product").then((function(e){return e.json()})).then((function(e){n.setState({ProductList:e})})),fetch("https://onboardtask.azurewebsites.net/api/store").then((function(e){return e.json()})).then((function(e){n.setState({StoreList:e})}))},n.state={customerId:n.props.customername,productId:"",storeId:"",customerList:[],ProductList:[],StoreList:[]},n.refreshList(),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(e.target.SalesID.value),fetch("https://onboardtask.azurewebsites.net/api/sales",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({SalesID:e.target.SalesID.value,CustomerID:e.target.customerId.value,ProductID:e.target.productId.value,StoreID:e.target.storeId.value,DateSold:e.target.DateSold.value})}).then((function(e){e.json(),t.props.onHide()}))}},{key:"handleDropdownChange",value:function(e,t){this.setState(Object(L.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Edit sales")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(S.a.Group,{controlId:"SalesID",disabled:!0},r.a.createElement(S.a.Control,{type:"text",name:"SalesID",required:!0,placeholder:"SalesID",disabled:!0,defaultValue:this.props.salesid})),r.a.createElement(S.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(S.a.Label,null,"Customer Name"),r.a.createElement(S.a.Control,{as:"select",name:"customerId",required:!0,defaultValue:this.props.customername,onChange:function(t){return e.handleDropdownChange(t,"customerId")},value:this.state.customerId},r.a.createElement("option",{value:""},"-- Select Customer -- "),this.state.customerList.map((function(e,t){return r.a.createElement("option",{key:t,value:e.CustomerID},e.Name)})))),r.a.createElement(S.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(S.a.Label,null,"Product Name"),r.a.createElement(S.a.Control,{as:"select",required:!0,name:"productId",defaultValue:this.props.productname,onChange:function(t){return e.handleDropdownChange(t,"productId")}},r.a.createElement("option",{value:""},"-- Select Product --"),this.state.ProductList.map((function(e,t){return r.a.createElement("option",{key:t,value:e.ProductID},e.Name)})))),r.a.createElement(S.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(S.a.Label,null,"Store Name"),r.a.createElement(S.a.Control,{required:!0,as:"select",name:"storeId",defaultValue:this.props.storename,onChange:function(t){return e.handleDropdownChange(t,"storeId")}},r.a.createElement("option",{value:""},"-- Select Store --"),this.state.StoreList.map((function(e,t){return r.a.createElement("option",{key:t,value:e.StoreID},e.Name)})))),r.a.createElement(S.a.Group,{controlId:"DateSold"},r.a.createElement(S.a.Control,{type:"date",name:"DateSold",required:!0,placeholder:"DateSold",datatype:"dd/mm/yyyy",defaultValue:this.props.salesdatesold})),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{variant:"primary",type:"Submit"}," Edit Sales"),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close")))))),r.a.createElement(f.a.Footer,null)))}}]),a}(n.Component),G=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://onboardtask.azurewebsites.net/api/sales/"+this.props.salesid,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.props.onHide()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},"Delete Sales")),r.a.createElement(f.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{sm:6},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,null,r.a.createElement("label",null,"Are you sure you want to delete?")),r.a.createElement(S.a.Group,null,r.a.createElement(E.a,{onClick:function(t){return e.handleSubmit(t)},variant:"primary",type:"button"},"Delete"),r.a.createElement(E.a,{variant:"danger",onClick:this.props.onHide},"Close")))))),r.a.createElement(f.a.Footer,null)))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={sles:[],addModalShow:!1,editModalShow:!1,deleteModalShow:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){var e=this;fetch("https://onboardtask.azurewebsites.net/api/sales").then((function(e){return e.json()})).then((function(t){e.setState({sles:t})}))}},{key:"componentDidUpdate",value:function(){}},{key:"openEditDialog",value:function(e){this.setState({editModalShow:!0,salesid:e.SalesID,salesdatesold:e.DateSold,customername:e.CustomerID,productname:e.ProductID,storename:e.StoreID})}},{key:"render",value:function(){var e=this,t=this.state,a=t.sles,n=t.salesid,l=t.salesdatesold,o=t.customername,c=t.productname,s=t.storename,i=function(){e.refreshList(),e.setState({editModalShow:!1})},u=function(){e.refreshList(),e.setState({deleteModalShow:!1})};return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"primary",onClick:function(){return e.setState({addModalShow:!0})}},"Add Sales"," "),r.a.createElement(M,{show:this.state.addModalShow,onHide:function(){e.refreshList(),e.setState({addModalShow:!1})}})),r.a.createElement(p.a,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Customer"),r.a.createElement("th",null,"Product"),r.a.createElement("th",null," Store "),r.a.createElement("th",null,"Date Sold"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,a.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.CustomerName),r.a.createElement("td",null,t.ProductName),r.a.createElement("td",null,t.StoreName),r.a.createElement("td",null,t.DateSold),r.a.createElement("td",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{className:"mr-2",variant:"info",onClick:function(){return e.openEditDialog(t)}},"Edit"),r.a.createElement(E.a,{className:"mr-2",variant:"danger",onClick:function(){return e.setState({deleteModalShow:!0,salesid:t.SalesID})}}," ","Delete"," "),r.a.createElement(H,{show:e.state.editModalShow,onHide:i,salesid:n,salesdatesold:l,customername:o,productname:c,storename:s}),r.a.createElement(G,{show:e.state.deleteModalShow,onHide:u,salesid:n}))))})))))}}]),a}(n.Component),z=a(75),B=a(74),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(z.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(z.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(z.a.Brand,{href:"/"},"OnBoard"),r.a.createElement(B.a,{className:"mr-auto"},r.a.createElement(c.b,{className:"d-inline p-2 bg-dark text-white",to:"/Customer/customer"},"Customer"),r.a.createElement(c.b,{className:"d-inline p-2 bg-dark text-white",to:"/Product/product"},"Product"),r.a.createElement(c.b,{className:"d-inline p-2 bg-dark text-white",to:"/Store/store"},"Store"),r.a.createElement(c.b,{className:"d-inline p-2 bg-dark text-white",to:"/Sales/sales"},"Sales"))))}}]),a}(n.Component);var q=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement("switch",null,r.a.createElement(s.a,{path:"/",component:k,exact:!0}),r.a.createElement(s.a,{path:"/Customer/customer",component:k}),r.a.createElement(s.a,{path:"/Product/product",component:I}),r.a.createElement(s.a,{path:"/Store/store",component:P}),r.a.createElement(s.a,{path:"/Sales/sales",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.c014da35.chunk.js.map