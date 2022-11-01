// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function p(r){return y(r)===r&&r>=0}function v(r){return r!=r}var s=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function w(r){return r===s||r===b}function d(r){return Math.abs(r)}var N,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,h=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",U=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return A.call(r);t=r[m],u=m,n=null!=(o=r)&&h.call(o,u);try{r[m]=void 0}catch(n){return A.call(r)}return e=A.call(r),n?r[m]=t:delete r[m],e}:function(r){return A.call(r)},g="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(g&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=N,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(E&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,k="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(P&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var M,L=H,V="function"==typeof Uint16Array,W="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),t=n,r=(V&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:M,uint8:L};(C=new q.uint16(1))[0]=4660;var z=52===new q.uint8(C.buffer)[0],B=!0===z?1:0,D=new G(1),J=new S(D.buffer);function K(r){return D[0]=r,J[B]}var Q=!0===z?1:0,R=new G(1),X=new S(R.buffer),Z=1023,$=.6931471803691238,rr=1.9082149292705877e-10,nr=1048575;function tr(r){var n,t,e,o,u,f,i,a,c,l,y,p;return 0===r?b:v(r)||r<0?NaN:(u=0,(t=K(r))<1048576&&(u-=54,t=K(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Z|0,u+=(a=614244+(t&=nr)&1048576|0)>>20|0,i=(r=function(r,n){return R[0]=r,X[Q]=n>>>0,R[0]}(r,t|1072693248^a))-1,(nr&2+t)<3?0===i?0===u?0:u*$+u*rr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*$-(f-u*rr-i)):(a=t-398458|0,c=440401-t|0,o=(y=(p=(l=i/(2+i))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=e+o,(a|=c)>0?(n=.5*i*i,0===u?i-(n-l*(n+f)):u*$-(n-(l*(n+f)+u*rr)-i)):0===u?i-l*(i-f):u*$-(l*(i-f)-u*rr-i))))}var er=Math.ceil;function or(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var ur=-.16666666666666632;function fr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(ur+o*t):r-(o*(.5*n-e*t)-n-e*ur)}var ir,ar,cr=!0===z?0:1,lr=new G(1),yr=new S(lr.buffer);!0===z?(ir=1,ar=0):(ir=0,ar=1);var pr,vr,sr={HIGH:ir,LOW:ar},br=new G(1),wr=new S(br.buffer),dr=sr.HIGH,Nr=sr.LOW;function _r(r,n){return wr[dr]=r,wr[Nr]=n,br[0]}!0===z?(pr=1,vr=0):(pr=0,vr=1);var Ar={HIGH:pr,LOW:vr},hr=new G(1),mr=new S(hr.buffer),Ur=Ar.HIGH,gr=Ar.LOW;function jr(r,n){return hr[0]=n,r[0]=mr[Ur],r[1]=mr[gr],r}function Ir(r,n){return 1===arguments.length?jr([0,0],r):jr(r,n)}var Or=[0,0];function Sr(r,n){var t,e;return Ir(Or,r),t=Or[0],t&=2147483647,e=K(n),_r(t|=e&=2147483648,Or[1])}function Er(r,n,t,e){return v(r)||w(r)?(n[e]=r,n[e+t]=0,n):0!==r&&d(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Er(r,[0,0],1,0)}),"assign",Er);var Fr=[0,0],Tr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||v(r)||w(r)?r:(Er(r,Fr,1,0),n+=Fr[1],n+=function(r){var n=K(r);return(n=(2146435072&n)>>>20)-Z|0}(r=Fr[0]),n<-1074?Sr(0,r):n>1023?r<0?b:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ir(Tr,r),t=Tr[0],t&=2148532223,e*_r(t|=n+Z<<20,Tr[1])))}function Gr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],xr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],kr=16777216,Mr=5.960464477539063e-8,Lr=Gr(20),Vr=Gr(20),Wr=Gr(20),Yr=Gr(20);function Cr(r,n,t,e,o,u,f,i,a){var c,l,p,v,s,b,w,d,N;for(v=u,N=e[t],d=t,s=0;d>0;s++)l=Mr*N|0,Yr[s]=N-kr*l|0,N=e[d-1]+l,d-=1;if(N=Hr(N,o),N-=8*y(.125*N),N-=w=0|N,p=0,o>0?(w+=s=Yr[t-1]>>24-o,Yr[t-1]-=s<<24-o,p=Yr[t-1]>>23-o):0===o?p=Yr[t-1]>>23:N>=.5&&(p=2),p>0){for(w+=1,c=0,s=0;s<t;s++)d=Yr[s],0===c?0!==d&&(c=1,Yr[s]=16777216-d):Yr[s]=16777215-d;if(o>0)switch(o){case 1:Yr[t-1]&=8388607;break;case 2:Yr[t-1]&=4194303}2===p&&(N=1-N,0!==c&&(N-=Hr(1,o)))}if(0===N){for(d=0,s=t-1;s>=u;s--)d|=Yr[s];if(0===d){for(b=1;0===Yr[u-b];b++);for(s=t+1;s<=t+b;s++){for(a[i+s]=Pr[f+s],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(s-d)];e[s]=l}return Cr(r,n,t+=b,e,o,u,f,i,a)}}if(0===N)for(t-=1,o-=24;0===Yr[t];)t-=1,o-=24;else(N=Hr(N,-o))>=kr?(l=Mr*N|0,Yr[t]=N-kr*l|0,o+=24,Yr[t+=1]=l):Yr[t]=0|N;for(l=Hr(1,o),s=t;s>=0;s--)e[s]=l*Yr[s],l*=Mr;for(s=t;s>=0;s--){for(l=0,b=0;b<=v&&b<=t-s;b++)l+=xr[b]*e[s+b];Wr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=Wr[s];for(n[0]=0===p?l:-l,l=Wr[0]-l,s=1;s<=t;s++)l+=Wr[s];return n[1]=0===p?l:-l,7&w}function qr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Lr[a]=c<0?0:Pr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Lr[f+(a-c)];Vr[a]=o}return Cr(r,n,4,Vr,i,4,u,f,Lr)}var zr=Math.round;function Br(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=zr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(K(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(K(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var Dr=1.5707963267341256,Jr=6077100506506192e-26,Kr=2*Jr,Qr=3*Jr,Rr=4*Jr,Xr=[0,0,0],Zr=[0,0];function $r(r,n){var t,e,o,u,f,i,a;if((o=2147483647&K(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Br(r,o,n):o<=1073928572?r>0?(a=r-Dr,n[0]=a-Jr,n[1]=a-n[0]-Jr,1):(a=r+Dr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-1):r>0?(a=r-2*Dr,n[0]=a-Kr,n[1]=a-n[0]-Kr,2):(a=r+2*Dr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Br(r,o,n):r>0?(a=r-3*Dr,n[0]=a-Qr,n[1]=a-n[0]-Qr,3):(a=r+3*Dr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-3):1075388923===o?Br(r,o,n):r>0?(a=r-4*Dr,n[0]=a-Rr,n[1]=a-n[0]-Rr,4):(a=r+4*Dr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-4);if(o<1094263291)return Br(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return lr[0]=r,yr[cr]}(r),a=_r(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Xr[f]=0|a,a=16777216*(a-Xr[f]);for(Xr[2]=a,u=3;0===Xr[u-1];)u-=1;return i=qr(Xr,Zr,e,u),r<0?(n[0]=-Zr[0],n[1]=-Zr[1],-i):(n[0]=Zr[0],n[1]=Zr[1],i)}var rn=[0,0];function nn(r){var n;if(n=K(r),(n&=2147483647)<=1072243195)return n<1044381696?1:or(r,0);if(n>=2146435072)return NaN;switch(3&$r(r,rn)){case 0:return or(rn[0],rn[1]);case 1:return-fr(rn[0],rn[1]);case 2:return-or(rn[0],rn[1]);default:return fr(rn[0],rn[1])}}var tn=[0,0];function en(r){var n;if(n=K(r),(n&=2147483647)<=1072243195)return n<1045430272?r:fr(r,0);if(n>=2146435072)return NaN;switch(3&$r(r,tn)){case 0:return fr(tn[0],tn[1]);case 1:return or(tn[0],tn[1]);case 2:return-fr(tn[0],tn[1]);default:return-or(tn[0],tn[1])}}var on=3.141592653589793,un=1.4616321449683622,fn=1.4616321449683622;function an(r){var n,t,e,o,u,f,i,a,c,l,p,b,N;if(v(r)||w(r))return r;if(0===r)return s;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-tr(r);if(n){if(r>=4503599627370496)return s;if(c=function(r){var n,t;return v(r)||w(r)?NaN:0===(n=d(t=r%2))||1===n?Sr(0,t):n<.25?en(on*t):n<.75?Sr(nn(on*(n=.5-n)),t):n<1.25?(t=Sr(1,t)-t,en(on*t)):n<1.75?-Sr(nn(on*(n-=1.5)),t):(t-=Sr(2,t),en(on*t))}(r),0===c)return s;t=tr(on/d(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(N=-tr(r),r>=un-1+.27?(p=1-r,e=0):r>=un-1-.27?(p=r-(fn-1),e=1):(p=r,e=2)):(N=0,r>=un+.27?(p=2-r,e=0):r>=un-.27?(p=r-fn,e=1):(p=r-1,e=2)),e){case 0:f=.07721566490153287+(b=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(b),u=b*(.3224670334241136+b*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(b)),N+=(i=p*f+u)-.5*p;break;case 1:f=.48383612272381005+(l=(b=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),u=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,o=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),N+=(i=b*f-(-3638676997039505e-33-l*(u+p*o)))-.12148629053584961;break;case 2:f=p*(p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)-.07721566490153287),u=1+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),N+=-.5*p+f/u}else if(r<8)switch(e=function(r){return r<0?er(r):y(r)}(r),i=(p=r-e)*(p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)-.07721566490153287),a=1+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),N=.5*p+i/a,b=1,e){case 7:b*=p+6;case 6:b*=p+5;case 5:b*=p+4;case 4:b*=p+3;case 3:N+=tr(b*=p+2)}else r<0x400000000000000?(c=tr(r),l=.4189385332046727+(b=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=b*b),N=(r-.5)*(c-1)+l):N=r*(tr(r)-1);return n&&(N=t-N),N}function cn(r){return function(r){return y(r)===r&&r<0}(r)?NaN:an(r+1)}function ln(r,n){return v(r)||v(n)||n<0?NaN:0===n?0===r?0:b:p(r)&&r!==s?r*tr(n)-n-cn(r):b}function yn(r){return function(){return r}}function pn(r){return v(r)?yn(NaN):function(n){return v(n)?NaN:n===r?0:b}}function vn(r){return v(r)||r<0?yn(NaN):0===r?pn(0):function(n){return v(n)?NaN:p(n)&&n!==s?n*tr(r)-r-cn(n):b}}l((function(r,n){return v(r)||v(n)?NaN:r===n?0:b}),"factory",pn),l(ln,"factory",vn),r.default=ln,r.factory=vn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logpmf={});
//# sourceMappingURL=index.js.map
