"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=t(function(A,a){
var s=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),c=require('@stdlib/math-base-special-factorialln/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-ln/dist'),u=require('@stdlib/constants-float64-ninf/dist'),I=require('@stdlib/constants-float64-pinf/dist');function p(r,e){return n(r)||n(e)||e<0?NaN:e===0?r===0?0:u:s(r)&&r!==I?r*g(e)-e-c(r):u}a.exports=p
});var q=t(function(B,o){
var y=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),F=require('@stdlib/utils-constant-function/dist'),P=require('@stdlib/math-base-special-factorialln/dist'),l=require('@stdlib/stats-base-dists-degenerate-logpmf/dist').factory,f=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-ln/dist'),R=require('@stdlib/constants-float64-ninf/dist'),h=require('@stdlib/constants-float64-pinf/dist');function j(r){if(f(r)||r<0)return F(NaN);if(r===0)return l(0);return e;function e(i){return f(i)?NaN:y(i)&&i!==h?i*O(r)-r-P(i):R}}o.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=v(),w=q();k(N,"factory",w);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
