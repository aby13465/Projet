(this.webpackJsonpprojetpfe=this.webpackJsonpprojetpfe||[]).push([[0],{105:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return v}));var n=a(6),r=a(0),l=a.n(r),o=a(74),i=a(9),c=a.n(i),u=a(57),m=a(169),s=a(170),p=a(181),d=a(62),f=a(64),g=a(171),E=a(56),h=a(21),b=a(172),j=Object(o.a)((function(e){return{formControl:{margin:e.spacing(3,3,3,1)},Box:{margin:e.spacing(1),width:200},Text:{margin:e.spacing(0,1),textAlign:"center"},image:{maxWidth:195,height:125,display:"block",margin:"auto"}}}));function v(){var t=j(),a=Object(r.useState)([]),o=Object(n.a)(a,2),i=o[0],v=o[1],O=function(t){c.a.post("http://localhost:4000/articles/recherche",{prix:t}).then((function(t){t.data.map((function(t){return t.image="data:image/jpeg;base64,"+new e(t.image.data.data).toString("base64")})),v(t.data)}))};return Object(r.useEffect)((function(){O("Tout")}),[]),l.a.createElement(u.a,{container:!0,direction:"row"},l.a.createElement(u.a,{item:!0,driection:"column",className:t.formControl},l.a.createElement(m.a,null,l.a.createElement(s.a,null,"Prix"),l.a.createElement(p.a,{defaultValue:"Tout",onChange:function(e){O(e.target.value)}},l.a.createElement(d.a,{value:"Tout",control:l.a.createElement(f.a,null),label:"Tout"}),l.a.createElement(d.a,{value:"de 0 \xe0 25",control:l.a.createElement(f.a,null),label:"de 0 \xe0 25"}),l.a.createElement(d.a,{value:"de 25 \xe0 50",control:l.a.createElement(f.a,null),label:"de 25 \xe0 50"}),l.a.createElement(d.a,{value:"de 50 \xe0 100",control:l.a.createElement(f.a,null),label:"de 50 \xe0 100"}),l.a.createElement(d.a,{value:"plus que 100",control:l.a.createElement(f.a,null),label:"plus que 100"})))),l.a.createElement(u.a,{item:!0,className:t.formControl,xs:!0},l.a.createElement(g.a,{cols:!1},i.map((function(e){return l.a.createElement(E.a,{className:t.Box},l.a.createElement("img",{alt:e.nom,src:e.image,className:t.image}),l.a.createElement(h.a,{className:t.Text,noWrap:"true"},l.a.createElement(b.a,{href:"/Article/"+e._id}," ",e.nom," ")),l.a.createElement(h.a,{color:"secondary",variant:"h6",className:t.Text,noWrap:"true"},e.prix," DT"))})))))}}).call(this,a(65).Buffer)},107:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return O}));var n=a(14),r=a(6),l=a(0),o=a.n(l),i=a(56),c=a(21),u=a(112),m=a(113),s=a(114),p=a(63),d=a(15),f=a(115),g=a(42),E=a(173),h=a(74),b=a(9),j=a.n(b),v=Object(h.a)((function(e){return{paper:{padding:e.spacing(2),margin:"auto"},image:{maxHeight:100,maxWidth:100}}}));function O(){var t=v(),a=Object(l.useState)([]),h=Object(r.a)(a,2),b=h[0],O=h[1],S=Object(l.useState)(0),C=Object(r.a)(S,2),w=C[0],k=C[1];Object(l.useEffect)((function(){if(k(0),localStorage.getItem("jwt-cookie"))j.a.post("http://localhost:4000/clients/getpanier",{},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(t){t.data.forEach((function(t){j.a.get("http://localhost:4000/articles/recherche/"+t._id).then((function(a){a.data.image="data:image/jpeg;base64,"+new e(a.data.image.data.data).toString("base64"),O((function(e){return[].concat(Object(n.a)(e),[{_id:t._id,nom:a.data.nom,quantite:t.quantite,prix:a.data.prix,image:a.data.image}])})),k((function(e){return e+a.data.prix*t.quantite}))}))}))}));else if(localStorage.getItem("cart-cookie")){JSON.parse(localStorage.getItem("cart-cookie")).forEach((function(e){j.a.get("http://localhost:4000/articles/recherche/"+e._id).then((function(t){O((function(a){return[].concat(Object(n.a)(a),[{_id:e._id,nom:t.data.nom,quantite:e.quantite,prix:t.data.prix}])})),k((function(a){return a+t.data.prix*e.quantite}))}))}))}}),[]);return o.a.createElement(E.a,{component:"main"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),localStorage.getItem("jwt-cookie")||(window.location="/Connexion")},noValidate:!0},0===b.length?o.a.createElement(i.a,{className:t.paper},o.a.createElement(c.a,null,"Panier Vide")):o.a.createElement(u.a,{component:i.a},o.a.createElement(m.a,{"aria-label":"simple table"},o.a.createElement(s.a,null,o.a.createElement(p.a,null,o.a.createElement(d.a,{colSpan:5},o.a.createElement(c.a,{color:"primary",component:"h1"},"Panier")))),o.a.createElement(f.a,null,b.map((function(e){return o.a.createElement(p.a,null,o.a.createElement(d.a,{align:"left"},o.a.createElement("img",{alt:e.nom,src:e.image,className:t.image})),o.a.createElement(d.a,{align:"left"},e.nom),o.a.createElement(d.a,{align:"center"},e.prix," DT"),o.a.createElement(d.a,{align:"right"},"x ",e.quantite),o.a.createElement(d.a,{align:"right"},o.a.createElement(g.a,{color:"secondary",onClick:function(){!function(e){if(localStorage.getItem("jwt-cookie")&&j.a.post("http://localhost:4000/clients/supprimerpanier",{_id:e},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){return O(b.filter((function(t){return t._id!==e})))})),localStorage.getItem("cart-cookie")){var t=JSON.parse(localStorage.getItem("cart-cookie"));0===(t=t.filter((function(t){return e!==t._id}))).length?localStorage.removeItem("cart-cookie"):localStorage.setItem("cart-cookie",JSON.stringify(t)),O(b.filter((function(t){return t._id!==e})))}}(e._id)}},"Supprimer")))})),o.a.createElement(p.a,null,o.a.createElement(d.a,{align:"left"},o.a.createElement(c.a,null,"Total:",w," DT")),o.a.createElement(d.a,{colSpan:4,align:"left"},o.a.createElement(g.a,{color:"primary",type:"submit",variant:"contained"},"Commander"))))))))}}).call(this,a(65).Buffer)},108:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return h}));var n=a(14),r=a(6),l=a(0),o=a.n(l),i=a(9),c=a.n(i),u=a(74),m=a(57),s=a(21),p=a(36),d=a(42),f=a(180),g=a(82),E=Object(u.a)((function(e){return{paper:{margin:e.spacing(2),display:"flex",flexDirection:"column"},spacing:{marginTop:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function h(){var t=E(),a=Object(l.useState)(""),i=Object(r.a)(a,2),u=i[0],h=i[1],b=Object(l.useState)([]),j=Object(r.a)(b,2),v=j[0],O=j[1],S=Object(l.useState)(""),C=Object(r.a)(S,2),w=C[0],k=C[1],y=Object(l.useState)(""),I=Object(r.a)(y,2),x=I[0],q=I[1];return Object(l.useEffect)((function(){c.a.get("http://localhost:4000/articles/recherche/"+window.location.pathname.substring(9,window.location.pathname.length)).then((function(t){t.data.image="data:image/jpeg;base64,"+new e(t.data.image.data.data).toString("base64"),h(t.data);for(var a=function(e){O((function(t){return[].concat(Object(n.a)(t),[{title:e.toString()}])}))},r=1;r<=t.data.quantite;r++)a(r)}))}),[]),o.a.createElement(m.a,{container:!0,direction:"row"},o.a.createElement(m.a,{item:!0},o.a.createElement("img",{alt:u.nom,src:u.image})),o.a.createElement(m.a,{item:!0},o.a.createElement("div",{className:t.paper},o.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===x)k((function(){return o.a.createElement(f.a,{severity:"error"},"Veuillez choisir la quantit\xe9")})),setTimeout((function(){k("")}),5e3);else{if(localStorage.getItem("jwt-cookie")){var t=[];t.push({_id:u._id,quantite:parseInt(x)}),c.a.post("http://localhost:4000/clients/majpanier",t,{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}})}else if(localStorage.getItem("cart-cookie")){for(var a=JSON.parse(localStorage.getItem("cart-cookie")),n=0,r=!1;n!==a.length&&!1===r;)a[n]._id===u._id?(a[n].quantite+=parseInt(x),r=!0):n++;n===a.length&&a.push({_id:u._id,quantite:parseInt(x)}),localStorage.setItem("cart-cookie",JSON.stringify(a))}else{var l=[];l.push({_id:u._id,quantite:parseInt(x)}),localStorage.setItem("cart-cookie",JSON.stringify(l))}window.location="/Panier"}},className:t.form,noValidate:!0},o.a.createElement(s.a,{variant:"h5",className:t.spacing},u.nom),o.a.createElement(s.a,{variant:"h4",color:"secondary",className:t.spacing},u.prix," DT"),w,o.a.createElement(g.a,{className:t.spacing,id:"combo-box-demo",onInputChange:function(e,t){return q(t)},options:v,getOptionLabel:function(e){return e.title},renderInput:function(e){return o.a.createElement(p.a,Object.assign({},e,{label:"quantit\xe9",variant:"outlined"}))}}),o.a.createElement(d.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,fullWidth:!0},"Ajouter au panier")))))}}).call(this,a(65).Buffer)},109:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return k}));var n=a(14),r=a(6),l=a(0),o=a.n(l),i=a(74),c=a(9),u=a.n(c),m=a(174),s=a(175),p=a(176),d=a(36),f=a(177),g=a(42),E=a(112),h=a(56),b=a(113),j=a(114),v=a(63),O=a(15),S=a(115),C=a(82),w=Object(i.a)((function(e){return{table:{minWidth:650},image:{maxHeight:75,maxWidth:75},btnSpacing:{margin:e.spacing(0,1,1,0)}}}));function k(){var t=w(),a=Object(l.useState)([]),i=Object(r.a)(a,2),c=i[0],k=i[1],y=Object(l.useState)(""),I=Object(r.a)(y,2),x=I[0],q=I[1],N=Object(l.useState)(""),A=Object(r.a)(N,2),W=A[0],_=A[1],T=Object(l.useState)(""),D=Object(r.a)(T,2),z=D[0],B=D[1],M=Object(l.useState)(""),P=Object(r.a)(M,2),V=P[0],J=P[1],H=Object(l.useState)(""),F=Object(r.a)(H,2),L=F[0],R=F[1],G=Object(l.useState)(""),K=Object(r.a)(G,2),Q=K[0],U=K[1],X=Object(l.useState)(""),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=Object(l.useState)(""),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],re=Object(l.useState)(""),le=Object(r.a)(re,2),oe=le[0],ie=le[1],ce=Object(l.useState)(""),ue=Object(r.a)(ce,2),me=ue[0],se=ue[1],pe=Object(l.useState)(""),de=Object(r.a)(pe,2),fe=de[0],ge=de[1],Ee=Object(l.useState)(null),he=Object(r.a)(Ee,2),be=he[0],je=he[1],ve=Object(l.useState)(!1),Oe=Object(r.a)(ve,2),Se=Oe[0],Ce=Oe[1],we=function(){Ce(!1),k([]),u.a.post("http://localhost:4000/articles/recherche",{}).then((function(t){t.data.map((function(t){return t.image="data:image/jpeg;base64,"+new e(t.image.data.data).toString("base64")})),k(t.data)}))};return Object(l.useEffect)((function(){we(),u.a.post("http://localhost:4000/categories/recherche",{}).then((function(e){e.data.forEach((function(e){return q((function(t){return[].concat(Object(n.a)(t),[{title:e.nom}])}))}))})),u.a.post("http://localhost:4000/marques/recherche",{}).then((function(e){e.data.forEach((function(e){return _((function(t){return[].concat(Object(n.a)(t),[{title:e.nom}])}))}))}))}),[]),o.a.createElement("div",null,o.a.createElement(m.a,{open:Se,fullWidth:!0,onClose:function(){Ce(!1)},"aria-labelledby":"form-dialog-title"},o.a.createElement(s.a,{id:"form-dialog-title"},"Ajouter Article"),o.a.createElement(p.a,null,o.a.createElement(d.a,{type:"file",variant:"outlined",margin:"normal",fullWidth:!0,onChange:function(e){je(e.target.files[0])}}),o.a.createElement(d.a,{value:V,onChange:function(e){J(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nom",label:"Nom",name:"nom",autoComplete:"nom"}),o.a.createElement(d.a,{value:L,onChange:function(e){R(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"prix",label:"Prix",name:"prix",autoComplete:"prix"}),o.a.createElement(d.a,{value:ae,onChange:function(e){ne(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"quantite",label:"Quantite",name:"quantite",autoComplete:"quantite"}),o.a.createElement(C.a,{className:t.spacing,defaultValue:{title:Q},id:"categorie",onInputChange:function(e,t){return U(t)},options:x,getOptionLabel:function(e){return e.title},renderInput:function(e){return o.a.createElement(d.a,Object.assign({},e,{label:"Categorie",margin:"normal",variant:"outlined"}))}}),o.a.createElement(C.a,{className:t.spacing,id:"categorie",onInputChange:function(e,t){return $(t)},defaultValue:{title:Z},options:W,getOptionLabel:function(e){return e.title},renderInput:function(e){return o.a.createElement(d.a,Object.assign({},e,{label:"Marque",margin:"normal",variant:"outlined"}))}}),o.a.createElement(d.a,{value:me,onChange:function(e){se(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"couleur",label:"Couleur",name:"couleur",autoComplete:"couleur"}),o.a.createElement(d.a,{value:fe,onChange:function(e){ge(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"taille",label:"Taille",name:"taille",autoComplete:"taille"}),o.a.createElement(d.a,{value:oe,multiline:"true",onChange:function(e){ie(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"description",label:"Description",name:"description",autoComplete:"description"})),o.a.createElement(f.a,null,o.a.createElement(g.a,{color:"primary",onClick:function(){""===z?function(){var e=new FormData;e.append("nom",V),e.append("prix",L),e.append("couleur",me),e.append("taille",fe),e.append("description",oe),e.append("quantite",ae),e.append("categorie",Q),e.append("marque",Z),e.append("image",be),u.a.post("http://localhost:4000/articles/ajouter",e,{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){return we()}))}():function(){var e=new FormData;e.append("_id",z),e.append("nom",V),e.append("prix",L),e.append("couleur",me),e.append("taille",fe),e.append("description",oe),e.append("quantite",ae),e.append("categorie",Q),e.append("marque",Z),e.append("image",be),u.a.post("http://localhost:4000/articles/modifier",e,{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){return we()}))}()}},"Confirmer"),o.a.createElement(g.a,{color:"secondary",onClick:function(){Ce(!1)}},"Annuler"))),o.a.createElement(g.a,{color:"primary",className:t.btnSpacing,onClick:function(){Ce(!0),B(""),J(""),R(""),ie(""),ne(""),se(""),ge(""),$(""),U(""),je(null)}},"Ajouter Article"),o.a.createElement(E.a,{component:h.a},o.a.createElement(b.a,{className:t.table,"aria-label":"simple table"},o.a.createElement(j.a,null,o.a.createElement(v.a,null,o.a.createElement(O.a,null,"ID"),o.a.createElement(O.a,{align:"center"},"Image"),o.a.createElement(O.a,null,"Nom"),o.a.createElement(O.a,null,"Prix"),o.a.createElement(O.a,null,"Quantit\xe9"),o.a.createElement(O.a,null,"Date de cr\xe9ation"),o.a.createElement(O.a,{align:"center"},"Actions"))),o.a.createElement(S.a,null,c.map((function(e){return o.a.createElement(v.a,null,o.a.createElement(O.a,null,e._id),o.a.createElement(O.a,{align:"center"},o.a.createElement("img",{alt:e.nom,src:e.image,className:t.image})),o.a.createElement(O.a,null,e.nom),o.a.createElement(O.a,null,e.prix),o.a.createElement(O.a,null,e.quantite),o.a.createElement(O.a,null,e.cree),o.a.createElement(O.a,{align:"center"},o.a.createElement(g.a,{color:"primary",onClick:function(){Ce(!0),B(e._id),J(e.nom),R(e.prix),ie(e.description),ne(e.quantite),se(e.couleur),ge(e.taille),$(e.marque),U(e.categorie)}},"Modifier"),o.a.createElement(g.a,{color:"secondary",onClick:function(){u.a.post("http://localhost:4000/articles/supprimer",{_id:e._id},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){we()}))}},"Supprimer")))}))))))}}).call(this,a(65).Buffer)},130:function(e,t,a){e.exports=a(164)},135:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),i=(a(135),a(6)),c=a(102),u=a(74),m=a(25),s=a(48),p=a(235),d=a(9),f=a.n(d),g=a(11),E=a(61),h=a.n(E),b=a(78),j=a(3),v=a(217),O=a(218),S=a(223),C=a(224),w=a(56),k=a(225),y=a(212),I=a(219),x=a(220),q=a(42),N=a(216),A=a(221),W=a(222),_=a(226);function T(e){var t=localStorage.getItem("jwt-cookie"),a=Object(n.useState)(!1),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useRef)(null),m=function(e){u.current&&u.current.contains(e.target)||c(!1)};function s(e){"Tab"===e.key&&(e.preventDefault(),c(!1))}var p=Object(n.useRef)(o);Object(n.useEffect)((function(){!0===p.current&&!1===o&&u.current.focus(),p.current=o}),[o]);var d=r.a.createElement(v.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:s},r.a.createElement(O.a,{onClick:function(){window.location="/Historique",c(!1)},color:"inherit"},"Historique"),r.a.createElement(O.a,{onClick:Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location="/Compte",c(!1);case 2:case"end":return e.stop()}}),e)}))),color:"inherit"},"Compte"),r.a.createElement(O.a,{onClick:Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("jwt-cookie");case 2:window.location="/Connexion";case 3:case"end":return e.stop()}}),e)}))),color:"inherit"},"D\xe9connexion")),f=r.a.createElement(v.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:s},r.a.createElement(O.a,{onClick:function(){window.location="/Inscription",c(!1)},color:"inherit"},"Inscription"),r.a.createElement(O.a,{onClick:function(){window.location="/Connexion",c(!1)},color:"inherit"},"Connexion"));return r.a.createElement("div",{className:e.classes.root},r.a.createElement(I.a,{position:"static",className:Object(j.a)(e.classes.appBar,Object(g.a)({},e.classes.appBarShift,e.open))},r.a.createElement(x.a,null,function(){if("administrateur"===e.type||"moderateur"===e.type)return r.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",onClick:e.handleDrawerOpen,edge:"start",className:Object(j.a)(e.classes.menuButton,e.open&&e.classes.hide)},r.a.createElement(N.a,null))}(),r.a.createElement(q.a,{onClick:function(){window.location="/"},color:"inherit"},"BNB Booking"),r.a.createElement("div",{className:e.classes.title}),r.a.createElement(q.a,{onClick:function(){window.location="/"},color:"inherit"},r.a.createElement(A.a,null)),r.a.createElement(q.a,{ref:u,"aria-controls":o?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){c((function(e){return!e}))},color:"inherit"},r.a.createElement(W.a,null)),r.a.createElement(S.a,{open:o,anchorEl:u.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var a=e.TransitionProps,n=e.placement;return r.a.createElement(C.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(w.a,null,r.a.createElement(k.a,{onClickAway:m},t?d:f)))})),r.a.createElement(q.a,{onClick:function(){window.location="/Panier"},color:"inherit"},r.a.createElement(_.a,null)))))}var D=a(237),z=a(229),B=a(165),M=a(166),P=a(230),V=a(232),J=a(227),H=a(228),F=a(231),L=a(233),R=a(234);function G(e){return r.a.createElement(D.a,{className:e.classes.drawer,variant:"persistent",anchor:"left",open:e.open,classes:{paper:e.classes.drawerPaper}},r.a.createElement("div",{className:e.classes.drawerHeader},r.a.createElement(y.a,{onClick:e.handleDrawerClose},"ltr"===e.theme.direction?r.a.createElement(J.a,null):r.a.createElement(H.a,null))),r.a.createElement(z.a,null),r.a.createElement(B.a,null,r.a.createElement(M.a,{button:!0,key:"Clients",onClick:function(){window.location="/Clients"}},r.a.createElement(P.a,null,r.a.createElement(F.a,null)),r.a.createElement(V.a,{primary:"Clients"})),r.a.createElement(M.a,{button:!0,key:"Articles",onClick:function(){window.location="/Articles"}},r.a.createElement(P.a,null,r.a.createElement(_.a,null)),r.a.createElement(V.a,{primary:"Articles"})),r.a.createElement(M.a,{button:!0,key:"Categories",onClick:function(){window.location="/Categories"}},r.a.createElement(P.a,null,r.a.createElement(L.a,null)),r.a.createElement(V.a,{primary:"Categories"})),r.a.createElement(M.a,{button:!0,key:"Marques",onClick:function(){window.location="/Marques"}},r.a.createElement(P.a,null,r.a.createElement(R.a,null)),r.a.createElement(V.a,{primary:"Marques"}))))}var K=a(40);function Q(){return r.a.createElement("div",null,"Historique")}function U(){return r.a.createElement("div",null,"Page Compte")}var X=a(105),Y=a(238),Z=a(36),$=a(106),ee=a.n($),te=a(21),ae=a(173),ne=a(180),re=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function le(e){var t=re(),a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),s=m[0],d=m[1],g=Object(n.useState)(""),E=Object(i.a)(g,2),h=E[0],b=E[1],j=Object(n.useState)(""),v=Object(i.a)(j,2),O=v[0],S=v[1],C=Object(n.useState)(""),w=Object(i.a)(C,2),k=w[0],y=w[1],I=Object(n.useState)(""),x=Object(i.a)(I,2),N=x[0],A=x[1];return r.a.createElement(ae.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(Y.a,{className:t.avatar},r.a.createElement(ee.a,null)),r.a.createElement(te.a,{component:"h1",variant:"h5"},"Inscription"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===s||""===h||""===O||""===k||""===N?(c((function(){return r.a.createElement(ne.a,{severity:"error"},"Veuillez remplir tous vos coordonnees")})),setTimeout((function(){c("")}),5e3)):f.a.post("http://localhost:4000/clients/ajouter",{nom:s,prenom:h,email:O,passe:k,telephone:N}).then((function(e){"Client ajout\xe9"===e.data?window.location="/Connexion":(c((function(){return r.a.createElement(ne.a,{severity:"error"},"Veuillez verifiez vos coordonnees")})),setTimeout((function(){c("")}),5e3))}))},className:t.form,noValidate:!0},o,r.a.createElement(Z.a,{margin:"normal",autoComplete:"nom",name:"nom",id:"nom",variant:"outlined",value:s,onChange:function(e){return d(e.target.value)},required:!0,fullWidth:!0,label:"Nom",autoFocus:!0}),r.a.createElement(Z.a,{margin:"normal",variant:"outlined",required:!0,fullWidth:!0,value:h,onChange:function(e){return b(e.target.value)},id:"prenom",label:"Pr\xe9nom",name:"prenom",autoComplete:"prenom"}),r.a.createElement(Z.a,{margin:"normal",variant:"outlined",required:!0,fullWidth:!0,value:O,onChange:function(e){return S(e.target.value)},id:"email",label:"Email",name:"email",autoComplete:"email"}),r.a.createElement(Z.a,{margin:"normal",variant:"outlined",required:!0,fullWidth:!0,value:k,onChange:function(e){return y(e.target.value)},name:"passe",label:"Mot de passe",type:"password",id:"passe",autoComplete:"passe"}),r.a.createElement(Z.a,{margin:"normal",variant:"outlined",required:!0,fullWidth:!0,value:N,onChange:function(e){return A(e.target.value)},name:"telephone",label:"Num\xe9ro Telephone",id:"telephone",autoComplete:"telephone"}),r.a.createElement(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Inscription"))))}var oe=a(236),ie=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ce(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),u=c[0],m=c[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),g=d[0],E=d[1],h=ie();return r.a.createElement(ae.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:h.paper},r.a.createElement(Y.a,{className:h.avatar},r.a.createElement(oe.a,null)),r.a.createElement(te.a,{component:"h1",variant:"h5"},"Connexion"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===a||""===u?(E((function(){return r.a.createElement(ne.a,{severity:"error"},"Veuillez remplir tous vos coordonnees")})),setTimeout((function(){E("")}),5e3)):f.a.post("http://localhost:4000/clients/authentification",{email:a,passe:u}).then((function(e){"Email ou Mot de passe non valide"!==e.data?localStorage.setItem("jwt-cookie",e.data):(E((function(){return r.a.createElement(ne.a,{severity:"error"},e.data)})),setTimeout((function(){E("")}),5e3))})).then((function(){localStorage.getItem("cart-cookie")&&localStorage.getItem("jwt-cookie")&&f.a.post("http://localhost:4000/clients/majpanier",JSON.parse(localStorage.getItem("cart-cookie")),{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}})})).then((function(){localStorage.getItem("jwt-cookie")&&(localStorage.getItem("jwt-cookie")&&localStorage.removeItem("cart-cookie"),window.location="/")}))},className:h.form,noValidate:!0},g,r.a.createElement(Z.a,{value:a,onChange:function(e){return l(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(Z.a,{value:u,onChange:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"passe",label:"Mot de passe",type:"password",id:"passe",autoComplete:"passe"}),r.a.createElement(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:h.submit},"Connexion"))))}var ue=a(107),me=a(108),se=a(109),pe=a(174),de=a(175),fe=a(176),ge=a(177),Ee=a(112),he=a(113),be=a(114),je=a(63),ve=a(15),Oe=a(115),Se=Object(u.a)((function(e){return{table:{minWidth:650},btnSpacing:{margin:e.spacing(0,1,1,0)}}}));function Ce(){var e=Se(),t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)([]),u=Object(i.a)(c,2),m=u[0],s=u[1],p=Object(n.useState)(!1),d=Object(i.a)(p,2),g=d[0],E=d[1],h=function(){f.a.post("http://localhost:4000/categories/recherche",{}).then((function(e){s(e.data)}))};return Object(n.useEffect)((function(){h()}),[]),r.a.createElement("div",null,r.a.createElement(pe.a,{open:g,fullWidth:!0,onClose:function(){E(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(de.a,{id:"form-dialog-title"},"Ajouter Cat\xe9gorie"),r.a.createElement(fe.a,null,r.a.createElement(Z.a,{value:l,onChange:function(e){o(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nom",label:"Nom",name:"nom",autoComplete:"nom"})),r.a.createElement(ge.a,null,r.a.createElement(q.a,{color:"primary",onClick:function(){f.a.post("http://localhost:4000/categories/ajouter",{nom:l},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){s([]),E(!1),h()}))}},"Confirmer"),r.a.createElement(q.a,{color:"secondary",onClick:function(){E(!1)}},"Annuler"))),r.a.createElement(q.a,{color:"primary",className:e.btnSpacing,onClick:function(){E(!0)}},"Ajouter Cat\xe9gorie"),r.a.createElement(Ee.a,{component:w.a},r.a.createElement(he.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(be.a,null,r.a.createElement(je.a,null,r.a.createElement(ve.a,null,"ID"),r.a.createElement(ve.a,null,"Nom"),r.a.createElement(ve.a,{align:"center"},"Actions"))),r.a.createElement(Oe.a,null,m.map((function(e){return r.a.createElement(je.a,null,r.a.createElement(ve.a,null,e._id),r.a.createElement(ve.a,null,e.nom),r.a.createElement(ve.a,{align:"center"},r.a.createElement(q.a,{color:"secondary",onClick:function(){f.a.post("http://localhost:4000/categories/supprimer",{_id:e._id},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){s([]),h()}))}},"Supprimer")))}))))))}var we=Object(u.a)((function(e){return{table:{minWidth:650},btnSpacing:{margin:e.spacing(0,1,1,0)}}}));function ke(){var e=we(),t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)([]),u=Object(i.a)(c,2),m=u[0],s=u[1],p=Object(n.useState)(!1),d=Object(i.a)(p,2),g=d[0],E=d[1],h=function(){f.a.post("http://localhost:4000/marques/recherche",{}).then((function(e){s(e.data)}))};return Object(n.useEffect)((function(){h()}),[]),r.a.createElement("div",null,r.a.createElement(pe.a,{open:g,fullWidth:!0,onClose:function(){E(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(de.a,{id:"form-dialog-title"},"Ajouter Marque"),r.a.createElement(fe.a,null,r.a.createElement(Z.a,{value:l,onChange:function(e){o(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nom",label:"Nom",name:"nom",autoComplete:"nom"})),r.a.createElement(ge.a,null,r.a.createElement(q.a,{color:"primary",onClick:function(){f.a.post("http://localhost:4000/marques/ajouter",{nom:l},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){s([]),E(!1),h()}))}},"Confirmer"),r.a.createElement(q.a,{color:"secondary",onClick:function(){E(!1)}},"Annuler"))),r.a.createElement(q.a,{color:"primary",className:e.btnSpacing,onClick:function(){E(!0)}},"Ajouter Marque"),r.a.createElement(Ee.a,{component:w.a},r.a.createElement(he.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(be.a,null,r.a.createElement(je.a,null,r.a.createElement(ve.a,null,"ID"),r.a.createElement(ve.a,null,"Nom"),r.a.createElement(ve.a,{align:"center"},"Actions"))),r.a.createElement(Oe.a,null,m.map((function(e){return r.a.createElement(je.a,null,r.a.createElement(ve.a,null,e._id),r.a.createElement(ve.a,null,e.nom),r.a.createElement(ve.a,{align:"center"},r.a.createElement(q.a,{color:"secondary",onClick:function(){f.a.post("http://localhost:4000/marques/supprimer",{_id:e._id},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){s([]),h()}))}},"Supprimer")))}))))))}var ye=a(14),Ie=a(169),xe=a(170),qe=a(181),Ne=a(62),Ae=a(64),We=Object(u.a)((function(e){return{table:{minWidth:650},formcontrol:{margin:e.spacing(1)}}}));function _e(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),m=u[0],s=u[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),g=d[0],E=d[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),j=b[0],v=b[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),C=S[0],k=S[1],y=Object(n.useState)(""),I=Object(i.a)(y,2),x=I[0],N=I[1],A=Object(n.useState)([]),W=Object(i.a)(A,2),_=W[0],T=W[1],D=Object(n.useState)(!1),z=Object(i.a)(D,2),B=z[0],M=z[1],P=function(){f.a.post("http://localhost:4000/clients/getclients",{},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(e){e.data.forEach((function(e){T((function(t){return[].concat(Object(ye.a)(t),[{_id:e._id,nom:e.nom,prenom:e.prenom,email:e.email,telephone:e.telephone,cree:e.cree,administrateur:e.administrateur,moderateur:e.moderateur}])}))}))}))};Object(n.useEffect)((function(){P()}),[]);var V=We();return r.a.createElement("div",null,r.a.createElement(pe.a,{open:B,fullWidth:!0,onClose:function(){M(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(de.a,{id:"form-dialog-title"},"Modifier"),r.a.createElement(fe.a,null,r.a.createElement(Z.a,{value:g,onChange:function(e){return E(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nom",label:"Nom",name:"nom",autoComplete:"nom"}),r.a.createElement(Z.a,{value:j,onChange:function(e){return v(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"prenom",label:"Pr\xe9nom",name:"prenom",autoComplete:"prenom"}),r.a.createElement(Z.a,{value:m,onChange:function(e){return s(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email"}),r.a.createElement(Z.a,{value:C,onChange:function(e){return k(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"telephone",label:"T\xe9l\xe9phone",name:"telephone",autoComplete:"telephone"}),r.a.createElement(Ie.a,{className:V.formcontrol},r.a.createElement(xe.a,null,"Type"),r.a.createElement(qe.a,{row:!0,defaultValue:x,onChange:function(e){N(e.target.value)}},r.a.createElement(Ne.a,{value:"Administrateur",control:r.a.createElement(Ae.a,null),label:"Administrateur"}),r.a.createElement(Ne.a,{value:"Moderateur",control:r.a.createElement(Ae.a,null),label:"Moderateur"}),r.a.createElement(Ne.a,{value:"Client",control:r.a.createElement(Ae.a,null),label:"Client"})))),r.a.createElement(ge.a,null,r.a.createElement(q.a,{color:"primary",onClick:function(){f.a.post("http://localhost:4000/clients/modifierclient",{_id:l,nom:g,prenom:j,email:m,telephone:C,administrateur:"Administrateur"===x,moderateur:"Administrateur"===x||"Moderateur"===x},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){T([]),M(!1),P()}))}},"Confirmer"),r.a.createElement(q.a,{color:"secondary",onClick:function(){M(!1)}},"Annuler"))),r.a.createElement(Ee.a,{component:w.a},r.a.createElement(he.a,{className:V.table,"aria-label":"simple table"},r.a.createElement(be.a,null,r.a.createElement(je.a,null,r.a.createElement(ve.a,null,"ID"),r.a.createElement(ve.a,null,"Nom"),r.a.createElement(ve.a,null,"Prenom"),r.a.createElement(ve.a,null,"E-mail"),r.a.createElement(ve.a,null,"T\xe9l\xe9phone"),r.a.createElement(ve.a,null,"Type"),r.a.createElement(ve.a,null,"Date de cr\xe9ation"),function(){if("administrateur"===e.type)return r.a.createElement(ve.a,{align:"center"},"Actions")}())),r.a.createElement(Oe.a,null,_.map((function(t){return r.a.createElement(je.a,null,r.a.createElement(ve.a,null,t._id),r.a.createElement(ve.a,null,t.nom),r.a.createElement(ve.a,null,t.prenom),r.a.createElement(ve.a,null,t.email),r.a.createElement(ve.a,null,t.telephone),r.a.createElement(ve.a,null,t.administrateur?r.a.createElement("div",null,"Administrateur"):t.moderateur?r.a.createElement("div",null,"Moderateur"):r.a.createElement("div",null,"Client")),r.a.createElement(ve.a,null,t.cree),function(t){if("administrateur"===e.type)return r.a.createElement(ve.a,{align:"center"},r.a.createElement(q.a,{color:"primary",onClick:function(){M(!0),o(t._id),E(t.nom),v(t.prenom),s(t.email),k(t.telephone),N((function(e){return t.administrateur?"Administrateur":t.moderateur?"Moderateur":"Client"}))}},"Modifier"),r.a.createElement(q.a,{color:"secondary",onClick:function(){f.a.post("http://localhost:4000/clients/supprimerclient",{_id:t._id},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(){T([]),P()}))}},"Supprimer"))}(t))}))))))}var Te=a(2);function De(e){var t=e.component,a=Object(Te.a)(e,["component"]),l=Object(n.useState)(null),o=Object(i.a)(l,2),c=o[0],u=o[1];return Object(n.useEffect)((function(){localStorage.getItem("jwt-cookie")||u("visiteur"),f.a.post("http://localhost:4000/clients/type",{},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(e){u(e.data)}))}),[]),r.a.createElement(K.b,Object.assign({},a,{render:function(e){return"administrateur"===c||"moderateur"===c||"client"===c?r.a.createElement(t,Object.assign({},e,{type:c})):"visiteur"===c?r.a.createElement(K.a,{to:{pathname:"/Connexion",state:{from:e.location}}}):void 0}}))}function ze(e){var t=e.component,a=Object(Te.a)(e,["component"]),l=Object(n.useState)(null),o=Object(i.a)(l,2),c=o[0],u=o[1];return Object(n.useEffect)((function(){localStorage.getItem("jwt-cookie")||u("visiteur"),f.a.post("http://localhost:4000/clients/type",{},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(e){u(e.data)}))}),[]),r.a.createElement(K.b,Object.assign({},a,{render:function(e){return"visiteur"===c?r.a.createElement(t,e):"administrateur"===c||"moderateur"===c||"client"===c?r.a.createElement(K.a,{to:{pathname:"/",state:{from:e.location}}}):void 0}}))}function Be(e){var t=e.component,a=Object(Te.a)(e,["component"]),l=Object(n.useState)(null),o=Object(i.a)(l,2),c=o[0],u=o[1];return Object(n.useEffect)((function(){localStorage.getItem("jwt-cookie")||u("visiteur"),f.a.post("http://localhost:4000/clients/type",{},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(e){u(e.data)}))}),[]),r.a.createElement(K.b,Object.assign({},a,{render:function(e){return"administrateur"===c||"moderateur"===c?r.a.createElement(t,Object.assign({},e,{type:c})):"client"===c?r.a.createElement(K.a,{to:{pathname:"/",state:{from:e.location}}}):"visiteur"===c?r.a.createElement(K.a,{to:{pathname:"/Connexion",state:{from:e.location}}}):void 0}}))}a(163);function Me(){return r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{class:"notfound"},r.a.createElement("div",{class:"notfound-404"}),r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"Oops! Page Not Be Found"),r.a.createElement("p",null,"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"),r.a.createElement("a",{href:"/"},"Back to homepage")))}function Pe(e){return r.a.createElement("main",{className:Object(j.a)(e.classes.content,Object(g.a)({},e.classes.contentShift,e.open))},r.a.createElement(K.d,null,r.a.createElement(Be,{path:"/Articles",component:se.a}),r.a.createElement(Be,{path:"/Categories",component:Ce}),r.a.createElement(Be,{path:"/Marques",component:ke}),r.a.createElement(Be,{path:"/Clients",component:_e,type:e.type}),r.a.createElement(De,{path:"/Historique",component:Q}),r.a.createElement(De,{path:"/Compte",component:U}),r.a.createElement(ze,{path:"/Inscription",component:le}),r.a.createElement(ze,{path:"/Connexion",component:ce}),r.a.createElement(K.b,{exact:!0,path:"/",component:X.a}),r.a.createElement(K.b,{path:"/Panier",component:ue.a}),r.a.createElement(K.b,{path:"/Article/:id",component:me.a}),r.a.createElement(K.b,{path:"*",component:Me})))}var Ve=Object(u.a)((function(e){return{root:{flexGrow:1},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(c.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:240},title:{flexGrow:1},paper:{marginRight:e.spacing(2)}}}));o.a.render(r.a.createElement((function(){var e=Ve(),t=Object(m.a)(),a=Object(n.useState)(null),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),g=d[0],E=d[1];return Object(n.useEffect)((function(){c(null),localStorage.getItem("jwt-cookie")?f.a.post("http://localhost:4000/clients/type",{},{headers:{Authorization:"bearer "+localStorage.getItem("jwt-cookie")}}).then((function(e){c(e.data)})):c("visiteur")}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(s.a,null,r.a.createElement(T,{classes:e,theme:t,open:g,type:o,handleDrawerOpen:function(){E(!0)}}),r.a.createElement(G,{classes:e,theme:t,open:g,handleDrawerClose:function(){E(!1)}}),r.a.createElement(Pe,{classes:e,theme:t,open:g,type:o})))}),null),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.0c60a18b.chunk.js.map