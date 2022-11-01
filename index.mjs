// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorialln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpmf@esm/index.mjs";function a(t,d){return n(t)||n(d)||d<0?NaN:0===d?0===t?0:r:s(t)&&t!==m?t*i(d)-d-e(t):r}function l(t){return n(t)||t<0?d(NaN):0===t?o(0):function(d){if(n(d))return NaN;if(s(d)&&d!==m)return d*i(t)-t-e(d);return r}}t(a,"factory",l);export{a as default,l as factory};
//# sourceMappingURL=index.mjs.map
