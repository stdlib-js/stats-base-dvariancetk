// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e,t){var a,i,f,u,o,d;if(o=r-n,r<=0||o<=0)return NaN;if(1===r||0===t)return 0;for(i=t<0?(1-r)*t:0,a=0,f=0,d=0;d<r;d++)a+=(u=e[i])*u,f+=u,i+=t;return(a-f/r*f)/o}function e(r,n,e,t,a){var i,f,u,o,d,s;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(f=a,i=0,u=0,s=0;s<r;s++)i+=(o=e[f])*o,u+=o,f+=t;return(i-u/r*u)/d}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
