YUI.add("oop",function(b,i){var g=b.Lang,d=b.Array,a=Object.prototype,h="_~yuim~_",e=a.hasOwnProperty,c=a.toString;function f(m,l,n,j,k){if(m&&m[k]&&m!==b){return m[k].call(m,l,n);}else{switch(d.test(m)){case 1:return d[k](m,l,n);case 2:return d[k](b.Array(m,0,true),l,n);default:return b.Object[k](m,l,n,j);}}}b.augment=function(j,l,s,p,t){var o=j.prototype,n=o&&l,r=l.prototype,w=o||j,k,v,q,m,u;t=t?b.Array(t):[];if(n){v={};q={};m={};k=function(y,x){if(s||!(x in o)){if(c.call(y)==="[object Function]"){m[x]=y;v[x]=q[x]=function(){return u(this,y,arguments);};}else{v[x]=y;}}};u=function(x,z,A){for(var y in m){if(e.call(m,y)&&x[y]===q[y]){x[y]=m[y];}}l.apply(x,t);return z.apply(x,A);};if(p){b.Array.each(p,function(x){if(x in r){k(r[x],x);}});}else{b.Object.each(r,k,null,true);}}b.mix(w,v||r,s,p);if(!n){l.apply(w,t);}return j;};b.aggregate=function(l,k,j,m){return b.mix(l,k,j,m,0,true);};b.extend=function(m,l,j,o){if(!l||!m){b.error("extend failed, verify dependencies");}var n=l.prototype,k=b.Object(n);m.prototype=k;k.constructor=m;m.superclass=n;if(l!=Object&&n.constructor==a.constructor){n.constructor=l;}if(j){b.mix(k,j,true);}if(o){b.mix(m,o,true);}return m;};b.each=function(l,k,m,j){return f(l,k,m,j,"each");};b.some=function(l,k,m,j){return f(l,k,m,j,"some");};b.clone=function(m,n,s,t,l,r){if(!g.isObject(m)){return m;}if(b.instanceOf(m,YUI)){return m;}var p,k=r||{},j,q=b.each;switch(g.type(m)){case"date":return new Date(m);case"regexp":return m;case"function":return m;case"array":p=[];break;default:if(m[h]){return k[m[h]];}j=b.guid();p=(n)?{}:b.Object(m);m[h]=j;k[j]=m;}if(!m.addEventListener&&!m.attachEvent){q(m,function(u,o){if((o||o===0)&&(!s||(s.call(t||this,u,o,this,m)!==false))){if(o!==h){if(o=="prototype"){}else{this[o]=b.clone(u,n,s,t,l||m,k);}}}},p);}if(!r){b.Object.each(k,function(u,o){if(u[h]){try{delete u[h];}catch(w){u[h]=null;}}},this);k=null;}return p;};b.bind=function(j,l){var k=arguments.length>2?b.Array(arguments,2,true):null;return function(){var n=g.isString(j)?l[j]:j,m=(k)?k.concat(b.Array(arguments,0,true)):arguments;return n.apply(l||n,m);};};b.rbind=function(j,l){var k=arguments.length>2?b.Array(arguments,2,true):null;return function(){var n=g.isString(j)?l[j]:j,m=(k)?b.Array(arguments,0,true).concat(k):arguments;return n.apply(l||n,m);};};},"@VERSION@",{"requires":["yui-base"]});