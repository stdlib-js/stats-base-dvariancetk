"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=f(function(z,x){
function m(r,e,o,t){var s,i,v,a,n,u;if(n=r-e,r<=0||n<=0)return NaN;if(r===1||t===0)return 0;for(t<0?i=(1-r)*t:i=0,s=0,v=0,u=0;u<r;u++)a=o[i],s+=a*a,v+=a,i+=t;return(s-v/r*v)/n}x.exports=m
});var k=f(function(A,d){
function R(r,e,o,t,s){var i,v,a,n,u,c;if(u=r-e,r<=0||u<=0)return NaN;if(r===1||t===0)return 0;for(v=s,i=0,a=0,c=0;c<r;c++)n=o[v],i+=n*n,a+=n,v+=t;return(i-a/r*a)/u}d.exports=R
});var j=f(function(B,S){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),E=k();_(y,"ndarray",E);S.exports=y
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=j(),q,l=b(O(__dirname,"./native.js"));g(l)?q=h:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
