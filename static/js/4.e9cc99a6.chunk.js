(this.webpackJsonpsupermarket=this.webpackJsonpsupermarket||[]).push([[4],{433:function(e,a,t){},466:function(e,a,t){"use strict";t.r(a);var n=t(68),l=t(0),r=t.n(l),c=t(30),i=t(50),o=t(12),s=t(457),m=t(256),u=t(257),d=t(449),E=t(452),p=t(470),b=t(467),f=t(458),h=t(243),g=t(245),v=t(465),C=t(459),O=t(460),y=t(461),N=t(462),P=t(463),T=t(261),j=t(276),S=t.n(j),x=t(107),R=t(27),A={getProducts:function(e){return e=Object(R.d)(e,["page","limit"]),Object(R.f)({method:"GET",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/supermarket",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SERVER,"/v1/product"),params:e})},createProduct:function(e){e=Object(j.pick)(e,["name","description","type","sizeRanges","colors","productInfos"]);var a=[];return e.productInfos.forEach((function(e){a.push(Object(j.pick)(e,["size","color","buyPrice","sellPrice"]))})),e.productInfos=a,Object(R.f)({method:"POST",url:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/supermarket",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SERVER,"/v1/product"),data:e})}};var _=t(67),k={getProducts:function(e){return function(a){a({type:_.a.GET_PRODUCTS_REQUEST}),A.getProducts(e).then((function(e){a({type:_.a.GET_PRODUCTS_SUCCESS,payload:e.data})})).catch((function(e){a({type:_.a.GET_PRODUCTS_FAILURE,error:e})}))}},createProduct:function(e){return function(a){a({type:_.a.CREATE_PRODUCT_REQUEST}),A.createProduct(e).then((function(e){a({type:_.a.CREATE_PRODUCT_SUCCESS,payload:e.data})})).catch((function(e){a({type:_.a.CREATE_PRODUCT_FAILURE,error:e})}))}}};var I=t(15),z=t(454),D=t(455),W=t(456),w=t(453),U=t(464),H=t(448),K=t(324),F=t(325),q=t(79),B=t(65),Y=t(471),V=t(436),L=(t(433),["id","selectedTags","placeholder","tags"]),Q=["onBlur","onChange","onFocus"],G=Object(H.a)((function(e){return{chip:{margin:e.spacing(.5,.25)}}}));function J(e){var a=Object.assign({},e),t=G(),c=a.id,i=a.selectedTags,o=a.placeholder,s=a.tags,m=Object(B.a)(a,L),u=r.a.useState(""),E=Object(n.a)(u,2),p=E[0],b=E[1],f=r.a.useState([]),h=Object(n.a)(f,2),g=h[0],v=h[1];function C(e){if("Enter"===e.key){var a=Object(q.a)(g);if(-1!==a.indexOf(e.target.value.trim()))return void b("");if(!e.target.value.replace(/\s/g,"").length)return;a.push(e.target.value.trim()),v(a),b("")}g.length&&!p.length&&"Backspace"===e.key&&v(g.slice(0,g.length-1))}Object(l.useEffect)((function(){v(s)}),[s]),Object(l.useEffect)((function(){i(g)}),[g,i]);var O=function(e){return function(){var a=Object(q.a)(g);a.splice(a.indexOf(e),1),v(a)}};return r.a.createElement("div",{className:"downshift-multiple"},r.a.createElement(V.a,{id:c,inputValue:p,onChange:function(e){var a=Object(q.a)(g);-1===a.indexOf(e)&&(a=[].concat(Object(q.a)(a),[e])),b(""),v(a)},selectedItem:g},(function(e){var a=(0,e.getInputProps)({onKeyDown:C,placeholder:o}),n=a.onBlur,l=a.onChange,c=a.onFocus,i=Object(B.a)(a,Q);return r.a.createElement("div",null,r.a.createElement(d.a,Object.assign({InputProps:{startAdornment:g.map((function(e){return r.a.createElement(Y.a,{key:e,tabIndex:-1,label:e,className:t.chip,onDelete:O(e)})})),onBlur:n,onChange:function(e){!function(e){b(e.target.value)}(e),l(e)},onFocus:c}},m,i)))})))}J.defaultProps={tags:[]};var X=Object(H.a)((function(e){return{dialogPaper:{height:"80vh",width:"80vh"},dialogContent:{overflowX:"hidden"},tableCellInput:{width:"30%"}}}));var M={createProduct:k.createProduct},Z=Object(K.a)({mapPropsToValues:function(){return{name:"",type:""}},validationSchema:F.a().shape({name:F.b().required("Name is required").min(5,"Name must have min 5 characters").max(10,"Name have max 10 characters"),description:F.b(),type:F.b().required("Type is required").oneOf(["CAKE","CANDY","OTHER"])})})((function(e){var a=e.open,t=e.handleClose,c=e.values,i=X(),o=Object(l.useState)([{},{}]),u=Object(n.a)(o,2),h=u[0],v=u[1],T=Object(l.useState)([]),j=Object(n.a)(T,2),x=j[0],R=j[1],A=Object(l.useState)([]),_=Object(n.a)(A,2),k=_[0],H=_[1];return Object(l.useEffect)((function(){var e=[];x.forEach((function(a){k.forEach((function(t){e.push({size:a,color:t,buyPrice:"",sellPrice:""})}))})),v(e)}),[x,k]),r.a.createElement(z.a,{open:a,onClose:t,classes:{paper:i.dialogPaper},fullWidth:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(D.a,{id:"form-dialog-title"},"Create New Product"),r.a.createElement(W.a,{classes:{root:i.dialogContent}},r.a.createElement(s.a,{container:!0,spacing:4},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(s.a,{container:!0,spacing:1},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(E.a,{fullWidth:!0,margin:"normal"},r.a.createElement(d.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0,value:c.name,onChange:e.handleChange,error:!!e.errors.name}),r.a.createElement(w.a,{error:!!e.errors.name},e.errors.name))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(E.a,{fullWidth:!0,margin:"normal"},r.a.createElement(d.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",fullWidth:!0,value:c.description,onChange:e.handleChange,error:!!e.errors.description}),r.a.createElement(w.a,{error:!!e.errors.description},e.errors.description))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(E.a,{fullWidth:!0},r.a.createElement(p.a,{id:"type-select-label"},"Type"),r.a.createElement(b.a,{labelId:"type-select-label",id:"type-select",label:"Type",value:c.type,onChange:e.handleChange("type")},r.a.createElement(f.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(f.a,{value:"CAKE"},"CAKE"),r.a.createElement(f.a,{value:"CANDY"},"CANDY"),r.a.createElement(f.a,{value:"OTHER"},"OTHER")),r.a.createElement(w.a,{error:!!e.errors.type},e.errors.type))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(J,{selectedTags:function(e){R(e)},fullWidth:!0,autoFocus:!0,margin:"dense",id:"size-ranges",label:"Size Ranges",placeholder:"Add size"})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(J,{selectedTags:function(e){H(e)},autoFocus:!0,margin:"dense",id:"colors",label:"Colors",placeholder:"Add color"})))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(m.a,null,r.a.createElement(C.a,{className:"table-hover table-alternate text-nowrap",stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement(N.a,{className:"text-center"},"No."),r.a.createElement(N.a,{className:"text-center"},"Size"),r.a.createElement(N.a,{className:"text-center"},"Color"),r.a.createElement(N.a,null,"Buy Price"),r.a.createElement(N.a,null,"Sell Price"))),r.a.createElement(P.a,null,(null===h||void 0===h?void 0:h.length)>0&&h.map((function(e,a){return r.a.createElement(y.a,{key:"product-info"+a},r.a.createElement(N.a,null,r.a.createElement("div",{className:"text-center"},a+1)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:"font-weight-bold"},e.size)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:"font-weight-bold"},e.color)),r.a.createElement(N.a,{classes:{root:i.tableCellInput}},r.a.createElement(d.a,{variant:"standard",id:"buyprice"+a,placeholder:"Buy Price",type:"number",InputProps:{disableUnderline:!0},onChange:function(e){return function(e,a){var t=h;a<t.length&&(t[a].buyPrice=e.target.value.toString()),v(t)}(e,a)}})),r.a.createElement(N.a,{classes:{root:i.tableCellInput}},r.a.createElement(d.a,{variant:"standard",id:"sellprice"+a,placeholder:"Sell Price",type:"number",InputProps:{disableUnderline:!0},onChange:function(e){return function(e,a){var t=h;a<t.length&&(t[a].sellPrice=e.target.value.toString()),v(t)}(e,a)}})))})))))))),r.a.createElement(U.a,null,r.a.createElement(g.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(g.a,{onClick:function(){e.createProduct(Object(I.a)(Object(I.a)({},e.values),{},{sizeRanges:x,colors:k,productInfos:h})),t()},color:"primary",disabled:!S.a.isEmpty(e.errors)},"Create")))})),$=Object(c.b)((function(e){return{product:e.product}}),M)(Z),ee=Object(H.a)((function(e){return{dialogPaper:{height:"70vh",width:"70vh"},dialogContent:{overflowX:"hidden"},tableCellInput:{width:"30%"}}}));var ae={createProduct:k.createProduct},te=Object(K.a)({mapPropsToValues:function(){return{name:"",type:""}},validationSchema:F.a().shape({name:F.b().required("Name is required").min(5,"Name must have min 5 characters").max(10,"Name have max 10 characters"),type:F.b().required("Type is required").oneOf(["CAKE","CANDY","OTHER"])})})((function(e){var a=e.open,t=e.handleClose,c=e.values,i=ee(),o=Object(l.useState)([{},{}]),u=Object(n.a)(o,2),h=u[0],v=u[1],T=Object(l.useState)([]),j=Object(n.a)(T,2),x=j[0],R=j[1],A=Object(l.useState)([]),_=Object(n.a)(A,2),k=_[0],H=_[1];return Object(l.useEffect)((function(){var e=[];x.forEach((function(a){k.forEach((function(t){e.push({size:a,color:t,price:"",quantity:0})}))})),v(e)}),[x,k]),r.a.createElement(z.a,{open:a,onClose:t,classes:{paper:i.dialogPaper},fullWidth:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(D.a,{id:"form-dialog-title"},"Create New Product"),r.a.createElement(W.a,{classes:{root:i.dialogContent}},r.a.createElement(s.a,{container:!0,spacing:4},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(s.a,{container:!0,spacing:1},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(E.a,{fullWidth:!0,margin:"normal"},r.a.createElement(d.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0,value:c.name,onChange:e.handleChange,error:!!e.errors.name}),r.a.createElement(w.a,{error:!!e.errors.name},e.errors.name))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(E.a,{fullWidth:!0},r.a.createElement(p.a,{id:"type-select-label"},"Type"),r.a.createElement(b.a,{labelId:"type-select-label",id:"type-select",label:"Type",value:c.type,onChange:e.handleChange("type")},r.a.createElement(f.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(f.a,{value:"CAKE"},"CAKE"),r.a.createElement(f.a,{value:"CANDY"},"CANDY"),r.a.createElement(f.a,{value:"OTHER"},"OTHER")),r.a.createElement(w.a,{error:!!e.errors.type},e.errors.type))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(J,{selectedTags:function(e){R(e)},fullWidth:!0,autoFocus:!0,margin:"dense",id:"size-ranges",label:"Size Ranges",placeholder:"Add size"})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(J,{selectedTags:function(e){H(e)},autoFocus:!0,margin:"dense",id:"colors",label:"Colors",placeholder:"Add color"})))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(m.a,null,r.a.createElement(C.a,{className:"table-hover table-alternate text-nowrap",stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement(N.a,{className:"text-center"},"No."),r.a.createElement(N.a,{className:"text-center"},"Size"),r.a.createElement(N.a,{className:"text-center"},"Color"),r.a.createElement(N.a,null,"Price"),r.a.createElement(N.a,null,"Quantity"))),r.a.createElement(P.a,null,(null===h||void 0===h?void 0:h.length)>0&&h.map((function(e,a){return r.a.createElement(y.a,{key:"product-info"+a},r.a.createElement(N.a,null,r.a.createElement("div",{className:"text-center"},a+1)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:"font-weight-bold"},e.size)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:"font-weight-bold"},e.color)),r.a.createElement(N.a,{classes:{root:i.tableCellInput}},r.a.createElement(d.a,{variant:"standard",id:"price"+a,placeholder:"Price",type:"number",InputProps:{disableUnderline:!0},onChange:function(e){return function(e,a){var t=h;a<t.length&&(t[a].price=e.target.value.toString()),v(t)}(e,a)}})),r.a.createElement(N.a,{classes:{root:i.tableCellInput}},r.a.createElement(d.a,{variant:"standard",id:"quantity"+a,placeholder:"Quantity",type:"number",InputProps:{disableUnderline:!0},onChange:function(e){return function(e,a){var t=h;a<t.length&&(t[a].quantity=e.target.value),v(t)}(e,a)}})))})))))))),r.a.createElement(U.a,null,r.a.createElement(g.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(g.a,{onClick:function(){e.createProduct(Object(I.a)(Object(I.a)({},e.values),{},{sizeRanges:x,colors:k,productInfos:h})),t()},color:"primary",disabled:!S.a.isEmpty(e.errors)},"Create")))})),ne=Object(c.b)((function(e){return{product:e.product}}),ae)(te);var le={getProducts:k.getProducts};a.default=Object(c.b)((function(e){return{product:e.product}}),le)((function(e){var a,t=e.product,c=Object(l.useState)(!1),S=Object(n.a)(c,2),R=S[0],A=S[1],_=Object(l.useState)(!1),k=Object(n.a)(_,2),I=k[0],z=k[1],D=Object(l.useState)(!1),W=Object(n.a)(D,2),w=W[0],U=W[1];Object(l.useEffect)((function(){e.getProducts()}),[]);var H=function(){z(!I)},K=function(){U(!w)},F=Object(l.useCallback)(Object(j.debounce)((function(){console.log("click")}),2e3,{leading:1}),[]),q=null===t||void 0===t?void 0:t.products;return r.a.createElement(l.Fragment,null,r.a.createElement(x.c,{titleHeading:"Product management",handleOpenCreateModal:H}),r.a.createElement($,{open:I,handleClose:H}),r.a.createElement(ne,{open:w,handleClose:K,product:t}),r.a.createElement(s.a,{container:!0,spacing:4},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(m.a,{className:"shop-card"},r.a.createElement(u.a,null,r.a.createElement(s.a,{container:!0,className:"grid-container",alignItems:"center",spacing:5},r.a.createElement(s.a,{item:!0,sm:3,className:"grid-item"},r.a.createElement(d.a,{id:"code-field",label:"Code",variant:"outlined",size:"small",fullWidth:!0})),r.a.createElement(s.a,{item:!0,sm:3,className:"grid-item"},r.a.createElement(d.a,{id:"name-field",label:"Name",variant:"outlined",size:"small",fullWidth:!0})),r.a.createElement(s.a,{item:!0,sm:3,className:"grid-item"},r.a.createElement(E.a,{variant:"outlined",fullWidth:!0,size:"small"},r.a.createElement(p.a,{id:"type-select-label"},"Type"),r.a.createElement(b.a,{labelId:"type-select-label",id:"type-select",label:"Type"},r.a.createElement(f.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(f.a,{value:"CAKE"},"CAKE"),r.a.createElement(f.a,{value:"CANDY"},"CANDY"),r.a.createElement(f.a,{value:"OTHER"},"OTHER")))),r.a.createElement(s.a,{item:!0,sm:1,className:"grid-item"},r.a.createElement(h.a,{color:"primary",size:"medium",onClick:function(){A(!R)}},R?r.a.createElement(i.a,{icon:o.e}):r.a.createElement(i.a,{icon:o.b}))),r.a.createElement(s.a,{item:!0,sm:2},r.a.createElement(g.a,{variant:"contained",color:"primary",className:"btn-bool",onClick:function(){return F()},fullWidth:!0},"SEARCH"))),R&&r.a.createElement(s.a,{container:!0,spacing:5},r.a.createElement(s.a,{item:!0,sm:3},r.a.createElement(d.a,{id:"outlined-basic1",label:"Outlined",variant:"outlined",size:"small",fullWidth:!0})),r.a.createElement(s.a,{item:!0,sm:3},r.a.createElement(d.a,{id:"outlined1",label:"Outlined",variant:"outlined",size:"small",fullWidth:!0})))))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(v.a,{className:"mb-4"},r.a.createElement(C.a,{className:"table-hover table-alternate text-nowrap",stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement(N.a,{className:"text-center"},"No."),r.a.createElement(N.a,{className:"text-center"},"Code"),r.a.createElement(N.a,{className:"text-center"},"Name"),r.a.createElement(N.a,{className:"text-center"},"Type"),r.a.createElement(N.a,{className:"text-center"},"Size Ranges"),r.a.createElement(N.a,{className:"text-center"},"Total Quantity"),r.a.createElement(N.a,{className:"text-center"},"Actions"))),r.a.createElement(P.a,null,(null===q||void 0===q||null===(a=q.items)||void 0===a?void 0:a.length)>0&&q.items.map((function(e,a){return r.a.createElement(y.a,{key:e.id},r.a.createElement(N.a,null,r.a.createElement("div",{className:"text-center"},a+1)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:"font-weight-bold"},e.code)),r.a.createElement(N.a,{className:""},r.a.createElement("span",{className:""},e.name)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:""},e.type)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:""},e.sizeRanges.map((function(e,a){return 0===a?e:", "+e})))),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("span",{className:""},e.totalQuantity)),r.a.createElement(N.a,{className:"text-center"},r.a.createElement(T.a,null,r.a.createElement(h.a,{color:"primary",size:"small",onClick:function(){return K()}},r.a.createElement(i.a,{icon:["fas","edit"]})),r.a.createElement(h.a,{style:{color:"#d32f2f"},size:"small"},r.a.createElement(i.a,{icon:["fas","ellipsis-h"]})))))}))))))))))}))}}]);
//# sourceMappingURL=4.e9cc99a6.chunk.js.map