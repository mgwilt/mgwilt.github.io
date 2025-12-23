import"/index-j2p8fdbr.js";var w7="182";var Z9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var W9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var jW=0;var B$=1;var yW=2;var T6=1;var vW=2;var $6=3;var F8=0;var o0=1;var J8=2;var T8=0;var A8=1;var I$=2;var w$=3;var C$=4;var C7=5;var $9=100;var bW=101;var fW=102;var hW=103;var xW=104;var gW=200;var pW=201;var mW=202;var dW=203;var z9=204;var _9=205;var lW=206;var uW=207;var cW=208;var nW=209;var sW=210;var iW=211;var oW=212;var aW=213;var rW=214;var A7=0;var P7=1;var T7=2;var B9=3;var S7=4;var j7=5;var y7=6;var v7=7;var A$=0;var tW=1;var eW=2;var I8=0;var P$=1;var T$=2;var S$=3;var j$=4;var y$=5;var v$=6;var b$=7;var f$=300;var K9=301;var w9=302;var b7=303;var f7=304;var S6=306;var _7=1000;var C8=1001;var B7=1002;var j0=1003;var JK=1004;var j6=1005;var b0=1006;var h7=1007;var H9=1008;var a0=1009;var h$=1010;var x$=1011;var Z6=1012;var x7=1013;var f0=1014;var Q8=1015;var U8=1016;var g7=1017;var p7=1018;var W6=1020;var g$=35902;var p$=35899;var m$=1021;var d$=1022;var h0=1023;var k8=1026;var Y9=1027;var l$=1028;var K6=1029;var u8=1030;var m7=1031;var X9=1033;var y6=33776;var v6=33777;var b6=33778;var f6=33779;var d7=35840;var l7=35841;var u7=35842;var c7=35843;var n7=36196;var s7=37492;var i7=37496;var o7=37488;var a7=37489;var r7=37490;var t7=37491;var e7=37808;var JQ=37809;var QQ=37810;var $Q=37811;var ZQ=37812;var WQ=37813;var KQ=37814;var HQ=37815;var YQ=37816;var XQ=37817;var UQ=37818;var GQ=37819;var EQ=37820;var NQ=37821;var qQ=36492;var DQ=36494;var OQ=36495;var FQ=36283;var kQ=36284;var MQ=36285;var RQ=36286;var w6=2300;var I7=2301;var z7=2302;var R$=2400;var V$=2401;var L$=2402;var QK=3200;var $K=0;var ZK=1;var c8="";var X8="srgb";var I9="srgb-linear";var C6="linear";var Z0="srgb";var L9=7680;var z$=519;var WK=512;var KK=513;var HK=514;var VQ=515;var YK=516;var XK=517;var LQ=518;var UK=519;var _$=35044;var u$=35048;var c$="300 es";var B8=2000;var A6=2001;function n$(J){for(let Q=J.length-1;Q>=0;--Q){if(J[Q]>=65535)return true}return false}function nH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function P6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function GK(){const J=P6("canvas");J.style.display="block";return J}var DW={};var e9=null;function s$(...J){const Q="THREE."+J.shift();if(e9){e9("log",Q,...J)}else{console.log(Q,...J)}}function hJ(...J){const Q="THREE."+J.shift();if(e9){e9("warn",Q,...J)}else{console.warn(Q,...J)}}function dJ(...J){const Q="THREE."+J.shift();if(e9){e9("error",Q,...J)}else{console.error(Q,...J)}}function J6(...J){const Q=J.join(" ");if(Q in DW)return;DW[Q]=true;hJ(...J)}function EK(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}class S8{addEventListener(J,Q){if(this._listeners===undefined)this._listeners={};const $=this._listeners;if($[J]===undefined){$[J]=[]}if($[J].indexOf(Q)===-1){$[J].push(Q)}}hasEventListener(J,Q){const $=this._listeners;if($===undefined)return false;return $[J]!==undefined&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){const $=this._listeners;if($===undefined)return;const Z=$[J];if(Z!==undefined){const W=Z.indexOf(Q);if(W!==-1){Z.splice(W,1)}}}dispatchEvent(J){const Q=this._listeners;if(Q===undefined)return;const $=Q[J.type];if($!==undefined){J.target=this;const Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++){Z[W].call(this,J)}J.target=null}}}var m0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var OW=1234567;var B6=Math.PI/180;var Q6=180/Math.PI;function H6(){const J=Math.random()*4294967295|0;const Q=Math.random()*4294967295|0;const $=Math.random()*4294967295|0;const Z=Math.random()*4294967295|0;const W=m0[J&255]+m0[J>>8&255]+m0[J>>16&255]+m0[J>>24&255]+"-"+m0[Q&255]+m0[Q>>8&255]+"-"+m0[Q>>16&15|64]+m0[Q>>24&255]+"-"+m0[$&63|128]+m0[$>>8&255]+"-"+m0[$>>16&255]+m0[$>>24&255]+m0[Z&255]+m0[Z>>8&255]+m0[Z>>16&255]+m0[Z>>24&255];return W.toLowerCase()}function iJ(J,Q,$){return Math.max(Q,Math.min($,J))}function i$(J,Q){return(J%Q+Q)%Q}function sH(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function iH(J,Q,$){if(J!==Q){return($-J)/(Q-J)}else{return 0}}function I6(J,Q,$){return(1-$)*J+$*Q}function oH(J,Q,$,Z){return I6(J,Q,1-Math.exp(-$*Z))}function aH(J,Q=1){return Q-Math.abs(i$(J,Q*2)-Q)}function rH(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;J=(J-Q)/($-Q);return J*J*(3-2*J)}function tH(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;J=(J-Q)/($-Q);return J*J*J*(J*(J*6-15)+10)}function eH(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function JY(J,Q){return J+Math.random()*(Q-J)}function QY(J){return J*(0.5-Math.random())}function $Y(J){if(J!==undefined)OW=J;let Q=OW+=1831565813;Q=Math.imul(Q^Q>>>15,Q|1);Q^=Q+Math.imul(Q^Q>>>7,Q|61);return((Q^Q>>>14)>>>0)/4294967296}function ZY(J){return J*B6}function WY(J){return J*Q6}function KY(J){return(J&J-1)===0&&J!==0}function HY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function YY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function XY(J,Q,$,Z,W){const K=Math.cos;const H=Math.sin;const Y=K($/2);const X=H($/2);const U=K((Q+Z)/2);const G=H((Q+Z)/2);const E=K((Q-Z)/2);const N=H((Q-Z)/2);const q=K((Z-Q)/2);const O=H((Z-Q)/2);switch(W){case"XYX":J.set(Y*G,X*E,X*N,Y*U);break;case"YZY":J.set(X*N,Y*G,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*N,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*O,X*q,Y*U);break;case"YXY":J.set(X*q,Y*G,X*O,Y*U);break;case"ZYZ":J.set(X*O,X*q,Y*G,Y*U);break;default:hJ("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function r9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function n0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var h6={DEG2RAD:B6,RAD2DEG:Q6,generateUUID:H6,clamp:iJ,euclideanModulo:i$,mapLinear:sH,inverseLerp:iH,lerp:I6,damp:oH,pingpong:aH,smoothstep:rH,smootherstep:tH,randInt:eH,randFloat:JY,randFloatSpread:QY,seededRandom:$Y,degToRad:ZY,radToDeg:WY,isPowerOfTwo:KY,ceilPowerOfTwo:HY,floorPowerOfTwo:YY,setQuaternionFromProperEuler:XY,normalize:n0,denormalize:r9};class _J{constructor(J=0,Q=0){_J.prototype.isVector2=true;this.x=J;this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){this.x=J;this.y=Q;return this}setScalar(J){this.x=J;this.y=J;return this}setX(J){this.x=J;return this}setY(J){this.y=J;return this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){this.x=J.x;this.y=J.y;return this}add(J){this.x+=J.x;this.y+=J.y;return this}addScalar(J){this.x+=J;this.y+=J;return this}addVectors(J,Q){this.x=J.x+Q.x;this.y=J.y+Q.y;return this}addScaledVector(J,Q){this.x+=J.x*Q;this.y+=J.y*Q;return this}sub(J){this.x-=J.x;this.y-=J.y;return this}subScalar(J){this.x-=J;this.y-=J;return this}subVectors(J,Q){this.x=J.x-Q.x;this.y=J.y-Q.y;return this}multiply(J){this.x*=J.x;this.y*=J.y;return this}multiplyScalar(J){this.x*=J;this.y*=J;return this}divide(J){this.x/=J.x;this.y/=J.y;return this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){const Q=this.x,$=this.y;const Z=J.elements;this.x=Z[0]*Q+Z[3]*$+Z[6];this.y=Z[1]*Q+Z[4]*$+Z[7];return this}min(J){this.x=Math.min(this.x,J.x);this.y=Math.min(this.y,J.y);return this}max(J){this.x=Math.max(this.x,J.x);this.y=Math.max(this.y,J.y);return this}clamp(J,Q){this.x=iJ(this.x,J.x,Q.x);this.y=iJ(this.y,J.y,Q.y);return this}clampScalar(J,Q){this.x=iJ(this.x,J,Q);this.y=iJ(this.y,J,Q);return this}clampLength(J,Q){const $=this.length();return this.divideScalar($||1).multiplyScalar(iJ($,J,Q))}floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this}ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this}round(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}roundToZero(){this.x=Math.trunc(this.x);this.y=Math.trunc(this.y);return this}negate(){this.x=-this.x;this.y=-this.y;return this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){const J=Math.atan2(-this.y,-this.x)+Math.PI;return J}angleTo(J){const Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;const $=this.dot(J)/Q;return Math.acos(iJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){const Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){this.x+=(J.x-this.x)*Q;this.y+=(J.y-this.y)*Q;return this}lerpVectors(J,Q,$){this.x=J.x+(Q.x-J.x)*$;this.y=J.y+(Q.y-J.y)*$;return this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){this.x=J[Q];this.y=J[Q+1];return this}toArray(J=[],Q=0){J[Q]=this.x;J[Q+1]=this.y;return J}fromBufferAttribute(J,Q){this.x=J.getX(Q);this.y=J.getY(Q);return this}rotateAround(J,Q){const $=Math.cos(Q),Z=Math.sin(Q);const W=this.x-J.x;const K=this.y-J.y;this.x=W*$-K*Z+J.x;this.y=W*Z+K*$+J.y;return this}random(){this.x=Math.random();this.y=Math.random();return this}*[Symbol.iterator](){yield this.x;yield this.y}}class G0{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=true;this._x=J;this._y=Q;this._z=$;this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3];let E=W[K+0],N=W[K+1],q=W[K+2],O=W[K+3];if(H<=0){J[Q+0]=Y;J[Q+1]=X;J[Q+2]=U;J[Q+3]=G;return}if(H>=1){J[Q+0]=E;J[Q+1]=N;J[Q+2]=q;J[Q+3]=O;return}if(G!==O||Y!==E||X!==N||U!==q){let k=Y*E+X*N+U*q+G*O;if(k<0){E=-E;N=-N;q=-q;O=-O;k=-k}let D=1-H;if(k<0.9995){const F=Math.acos(k);const L=Math.sin(F);D=Math.sin(D*F)/L;H=Math.sin(H*F)/L;Y=Y*D+E*H;X=X*D+N*H;U=U*D+q*H;G=G*D+O*H}else{Y=Y*D+E*H;X=X*D+N*H;U=U*D+q*H;G=G*D+O*H;const F=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=F;X*=F;U*=F;G*=F}}J[Q]=Y;J[Q+1]=X;J[Q+2]=U;J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){const H=$[Z];const Y=$[Z+1];const X=$[Z+2];const U=$[Z+3];const G=W[K];const E=W[K+1];const N=W[K+2];const q=W[K+3];J[Q]=H*q+U*G+Y*N-X*E;J[Q+1]=Y*q+U*E+X*G-H*N;J[Q+2]=X*q+U*N+H*E-Y*G;J[Q+3]=U*q-H*G-Y*E-X*N;return J}get x(){return this._x}set x(J){this._x=J;this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J;this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J;this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J;this._onChangeCallback()}set(J,Q,$,Z){this._x=J;this._y=Q;this._z=$;this._w=Z;this._onChangeCallback();return this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){this._x=J.x;this._y=J.y;this._z=J.z;this._w=J.w;this._onChangeCallback();return this}setFromEuler(J,Q=true){const{_x:$,_y:Z,_z:W,_order:K}=J;const H=Math.cos;const Y=Math.sin;const X=H($/2);const U=H(Z/2);const G=H(W/2);const E=Y($/2);const N=Y(Z/2);const q=Y(W/2);switch(K){case"XYZ":this._x=E*U*G+X*N*q;this._y=X*N*G-E*U*q;this._z=X*U*q+E*N*G;this._w=X*U*G-E*N*q;break;case"YXZ":this._x=E*U*G+X*N*q;this._y=X*N*G-E*U*q;this._z=X*U*q-E*N*G;this._w=X*U*G+E*N*q;break;case"ZXY":this._x=E*U*G-X*N*q;this._y=X*N*G+E*U*q;this._z=X*U*q+E*N*G;this._w=X*U*G-E*N*q;break;case"ZYX":this._x=E*U*G-X*N*q;this._y=X*N*G+E*U*q;this._z=X*U*q-E*N*G;this._w=X*U*G+E*N*q;break;case"YZX":this._x=E*U*G+X*N*q;this._y=X*N*G+E*U*q;this._z=X*U*q-E*N*G;this._w=X*U*G-E*N*q;break;case"XZY":this._x=E*U*G-X*N*q;this._y=X*N*G-E*U*q;this._z=X*U*q+E*N*G;this._w=X*U*G+E*N*q;break;default:hJ("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===true)this._onChangeCallback();return this}setFromAxisAngle(J,Q){const $=Q/2,Z=Math.sin($);this._x=J.x*Z;this._y=J.y*Z;this._z=J.z*Z;this._w=Math.cos($);this._onChangeCallback();return this}setFromRotationMatrix(J){const Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],E=$+H+G;if(E>0){const N=0.5/Math.sqrt(E+1);this._w=0.25/N;this._x=(U-Y)*N;this._y=(W-X)*N;this._z=(K-Z)*N}else if($>H&&$>G){const N=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/N;this._x=0.25*N;this._y=(Z+K)/N;this._z=(W+X)/N}else if(H>G){const N=2*Math.sqrt(1+H-$-G);this._w=(W-X)/N;this._x=(Z+K)/N;this._y=0.25*N;this._z=(Y+U)/N}else{const N=2*Math.sqrt(1+G-$-H);this._w=(K-Z)/N;this._x=(W+X)/N;this._y=(Y+U)/N;this._z=0.25*N}this._onChangeCallback();return this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001){$=0;if(Math.abs(J.x)>Math.abs(J.z)){this._x=-J.y;this._y=J.x;this._z=0;this._w=$}else{this._x=0;this._y=-J.z;this._z=J.y;this._w=$}}else{this._x=J.y*Q.z-J.z*Q.y;this._y=J.z*Q.x-J.x*Q.z;this._z=J.x*Q.y-J.y*Q.x;this._w=$}return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(iJ(this.dot(J),-1,1)))}rotateTowards(J,Q){const $=this.angleTo(J);if($===0)return this;const Z=Math.min(1,Q/$);this.slerp(J,Z);return this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){this._x*=-1;this._y*=-1;this._z*=-1;this._onChangeCallback();return this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0){this._x=0;this._y=0;this._z=0;this._w=1}else{J=1/J;this._x=this._x*J;this._y=this._y*J;this._z=this._z*J;this._w=this._w*J}this._onChangeCallback();return this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){const{_x:$,_y:Z,_z:W,_w:K}=J;const{_x:H,_y:Y,_z:X,_w:U}=Q;this._x=$*U+K*H+Z*X-W*Y;this._y=Z*U+K*Y+W*H-$*X;this._z=W*U+K*X+$*Y-Z*H;this._w=K*U-$*H-Z*Y-W*X;this._onChangeCallback();return this}slerp(J,Q){if(Q<=0)return this;if(Q>=1)return this.copy(J);let{_x:$,_y:Z,_z:W,_w:K}=J;let H=this.dot(J);if(H<0){$=-$;Z=-Z;W=-W;K=-K;H=-H}let Y=1-Q;if(H<0.9995){const X=Math.acos(H);const U=Math.sin(X);Y=Math.sin(Y*X)/U;Q=Math.sin(Q*X)/U;this._x=this._x*Y+$*Q;this._y=this._y*Y+Z*Q;this._z=this._z*Y+W*Q;this._w=this._w*Y+K*Q;this._onChangeCallback()}else{this._x=this._x*Y+$*Q;this._y=this._y*Y+Z*Q;this._z=this._z*Y+W*Q;this._w=this._w*Y+K*Q;this.normalize()}return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){const J=2*Math.PI*Math.random();const Q=2*Math.PI*Math.random();const $=Math.random();const Z=Math.sqrt(1-$);const W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){this._x=J[Q];this._y=J[Q+1];this._z=J[Q+2];this._w=J[Q+3];this._onChangeCallback();return this}toArray(J=[],Q=0){J[Q]=this._x;J[Q+1]=this._y;J[Q+2]=this._z;J[Q+3]=this._w;return J}fromBufferAttribute(J,Q){this._x=J.getX(Q);this._y=J.getY(Q);this._z=J.getZ(Q);this._w=J.getW(Q);this._onChangeCallback();return this}toJSON(){return this.toArray()}_onChange(J){this._onChangeCallback=J;return this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x;yield this._y;yield this._z;yield this._w}}class S{constructor(J=0,Q=0,$=0){S.prototype.isVector3=true;this.x=J;this.y=Q;this.z=$}set(J,Q,$){if($===undefined)$=this.z;this.x=J;this.y=Q;this.z=$;return this}setScalar(J){this.x=J;this.y=J;this.z=J;return this}setX(J){this.x=J;return this}setY(J){this.y=J;return this}setZ(J){this.z=J;return this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){this.x=J.x;this.y=J.y;this.z=J.z;return this}add(J){this.x+=J.x;this.y+=J.y;this.z+=J.z;return this}addScalar(J){this.x+=J;this.y+=J;this.z+=J;return this}addVectors(J,Q){this.x=J.x+Q.x;this.y=J.y+Q.y;this.z=J.z+Q.z;return this}addScaledVector(J,Q){this.x+=J.x*Q;this.y+=J.y*Q;this.z+=J.z*Q;return this}sub(J){this.x-=J.x;this.y-=J.y;this.z-=J.z;return this}subScalar(J){this.x-=J;this.y-=J;this.z-=J;return this}subVectors(J,Q){this.x=J.x-Q.x;this.y=J.y-Q.y;this.z=J.z-Q.z;return this}multiply(J){this.x*=J.x;this.y*=J.y;this.z*=J.z;return this}multiplyScalar(J){this.x*=J;this.y*=J;this.z*=J;return this}multiplyVectors(J,Q){this.x=J.x*Q.x;this.y=J.y*Q.y;this.z=J.z*Q.z;return this}applyEuler(J){return this.applyQuaternion(FW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(FW.setFromAxisAngle(J,Q))}applyMatrix3(J){const Q=this.x,$=this.y,Z=this.z;const W=J.elements;this.x=W[0]*Q+W[3]*$+W[6]*Z;this.y=W[1]*Q+W[4]*$+W[7]*Z;this.z=W[2]*Q+W[5]*$+W[8]*Z;return this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){const Q=this.x,$=this.y,Z=this.z;const W=J.elements;const K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K;this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K;this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K;return this}applyQuaternion(J){const Q=this.x,$=this.y,Z=this.z;const{x:W,y:K,z:H,w:Y}=J;const X=2*(K*Z-H*$);const U=2*(H*Q-W*Z);const G=2*(W*$-K*Q);this.x=Q+Y*X+K*G-H*U;this.y=$+Y*U+H*X-W*G;this.z=Z+Y*G+W*U-K*X;return this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){const Q=this.x,$=this.y,Z=this.z;const W=J.elements;this.x=W[0]*Q+W[4]*$+W[8]*Z;this.y=W[1]*Q+W[5]*$+W[9]*Z;this.z=W[2]*Q+W[6]*$+W[10]*Z;return this.normalize()}divide(J){this.x/=J.x;this.y/=J.y;this.z/=J.z;return this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){this.x=Math.min(this.x,J.x);this.y=Math.min(this.y,J.y);this.z=Math.min(this.z,J.z);return this}max(J){this.x=Math.max(this.x,J.x);this.y=Math.max(this.y,J.y);this.z=Math.max(this.z,J.z);return this}clamp(J,Q){this.x=iJ(this.x,J.x,Q.x);this.y=iJ(this.y,J.y,Q.y);this.z=iJ(this.z,J.z,Q.z);return this}clampScalar(J,Q){this.x=iJ(this.x,J,Q);this.y=iJ(this.y,J,Q);this.z=iJ(this.z,J,Q);return this}clampLength(J,Q){const $=this.length();return this.divideScalar($||1).multiplyScalar(iJ($,J,Q))}floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this}ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this}round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this}roundToZero(){this.x=Math.trunc(this.x);this.y=Math.trunc(this.y);this.z=Math.trunc(this.z);return this}negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){this.x+=(J.x-this.x)*Q;this.y+=(J.y-this.y)*Q;this.z+=(J.z-this.z)*Q;return this}lerpVectors(J,Q,$){this.x=J.x+(Q.x-J.x)*$;this.y=J.y+(Q.y-J.y)*$;this.z=J.z+(Q.z-J.z)*$;return this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){const{x:$,y:Z,z:W}=J;const{x:K,y:H,z:Y}=Q;this.x=Z*Y-W*H;this.y=W*K-$*Y;this.z=$*H-Z*K;return this}projectOnVector(J){const Q=J.lengthSq();if(Q===0)return this.set(0,0,0);const $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){tQ.copy(this).projectOnVector(J);return this.sub(tQ)}reflect(J){return this.sub(tQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){const Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;const $=this.dot(J)/Q;return Math.acos(iJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){const Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){const Z=Math.sin(Q)*J;this.x=Z*Math.sin($);this.y=Math.cos(Q)*J;this.z=Z*Math.cos($);return this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){this.x=J*Math.sin(Q);this.y=$;this.z=J*Math.cos(Q);return this}setFromMatrixPosition(J){const Q=J.elements;this.x=Q[12];this.y=Q[13];this.z=Q[14];return this}setFromMatrixScale(J){const Q=this.setFromMatrixColumn(J,0).length();const $=this.setFromMatrixColumn(J,1).length();const Z=this.setFromMatrixColumn(J,2).length();this.x=Q;this.y=$;this.z=Z;return this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){this.x=J._x;this.y=J._y;this.z=J._z;return this}setFromColor(J){this.x=J.r;this.y=J.g;this.z=J.b;return this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){this.x=J[Q];this.y=J[Q+1];this.z=J[Q+2];return this}toArray(J=[],Q=0){J[Q]=this.x;J[Q+1]=this.y;J[Q+2]=this.z;return J}fromBufferAttribute(J,Q){this.x=J.getX(Q);this.y=J.getY(Q);this.z=J.getZ(Q);return this}random(){this.x=Math.random();this.y=Math.random();this.z=Math.random();return this}randomDirection(){const J=Math.random()*Math.PI*2;const Q=Math.random()*2-1;const $=Math.sqrt(1-Q*Q);this.x=$*Math.cos(J);this.y=Q;this.z=$*Math.sin(J);return this}*[Symbol.iterator](){yield this.x;yield this.y;yield this.z}}var tQ=new S;var FW=new G0;class fJ{constructor(J,Q,$,Z,W,K,H,Y,X){fJ.prototype.isMatrix3=true;this.elements=[1,0,0,0,1,0,0,0,1];if(J!==undefined){this.set(J,Q,$,Z,W,K,H,Y,X)}}set(J,Q,$,Z,W,K,H,Y,X){const U=this.elements;U[0]=J;U[1]=Z;U[2]=H;U[3]=Q;U[4]=W;U[5]=Y;U[6]=$;U[7]=K;U[8]=X;return this}identity(){this.set(1,0,0,0,1,0,0,0,1);return this}copy(J){const Q=this.elements;const $=J.elements;Q[0]=$[0];Q[1]=$[1];Q[2]=$[2];Q[3]=$[3];Q[4]=$[4];Q[5]=$[5];Q[6]=$[6];Q[7]=$[7];Q[8]=$[8];return this}extractBasis(J,Q,$){J.setFromMatrix3Column(this,0);Q.setFromMatrix3Column(this,1);$.setFromMatrix3Column(this,2);return this}setFromMatrix4(J){const Q=J.elements;this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]);return this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){const $=J.elements;const Z=Q.elements;const W=this.elements;const K=$[0],H=$[3],Y=$[6];const X=$[1],U=$[4],G=$[7];const E=$[2],N=$[5],q=$[8];const O=Z[0],k=Z[3],D=Z[6];const F=Z[1],L=Z[4],V=Z[7];const R=Z[2],C=Z[5],M=Z[8];W[0]=K*O+H*F+Y*R;W[3]=K*k+H*L+Y*C;W[6]=K*D+H*V+Y*M;W[1]=X*O+U*F+G*R;W[4]=X*k+U*L+G*C;W[7]=X*D+U*V+G*M;W[2]=E*O+N*F+q*R;W[5]=E*k+N*L+q*C;W[8]=E*D+N*V+q*M;return this}multiplyScalar(J){const Q=this.elements;Q[0]*=J;Q[3]*=J;Q[6]*=J;Q[1]*=J;Q[4]*=J;Q[7]*=J;Q[2]*=J;Q[5]*=J;Q[8]*=J;return this}determinant(){const J=this.elements;const Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){const J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,E=H*Y-U*W,N=X*W-K*Y,q=Q*G+$*E+Z*N;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/q;J[0]=G*O;J[1]=(Z*X-U*$)*O;J[2]=(H*$-Z*K)*O;J[3]=E*O;J[4]=(U*Q-Z*Y)*O;J[5]=(Z*W-H*Q)*O;J[6]=N*O;J[7]=($*Y-X*Q)*O;J[8]=(K*Q-$*W)*O;return this}transpose(){let J;const Q=this.elements;J=Q[1];Q[1]=Q[3];Q[3]=J;J=Q[2];Q[2]=Q[6];Q[6]=J;J=Q[5];Q[5]=Q[7];Q[7]=J;return this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){const Q=this.elements;J[0]=Q[0];J[1]=Q[3];J[2]=Q[6];J[3]=Q[1];J[4]=Q[4];J[5]=Q[7];J[6]=Q[2];J[7]=Q[5];J[8]=Q[8];return this}setUvTransform(J,Q,$,Z,W,K,H){const Y=Math.cos(W);const X=Math.sin(W);this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1);return this}scale(J,Q){this.premultiply(eQ.makeScale(J,Q));return this}rotate(J){this.premultiply(eQ.makeRotation(-J));return this}translate(J,Q){this.premultiply(eQ.makeTranslation(J,Q));return this}makeTranslation(J,Q){if(J.isVector2){this.set(1,0,J.x,0,1,J.y,0,0,1)}else{this.set(1,0,J,0,1,Q,0,0,1)}return this}makeRotation(J){const Q=Math.cos(J);const $=Math.sin(J);this.set(Q,-$,0,$,Q,0,0,0,1);return this}makeScale(J,Q){this.set(J,0,0,0,Q,0,0,0,1);return this}equals(J){const Q=this.elements;const $=J.elements;for(let Z=0;Z<9;Z++){if(Q[Z]!==$[Z])return false}return true}fromArray(J,Q=0){for(let $=0;$<9;$++){this.elements[$]=J[$+Q]}return this}toArray(J=[],Q=0){const $=this.elements;J[Q]=$[0];J[Q+1]=$[1];J[Q+2]=$[2];J[Q+3]=$[3];J[Q+4]=$[4];J[Q+5]=$[5];J[Q+6]=$[6];J[Q+7]=$[7];J[Q+8]=$[8];return J}clone(){return new this.constructor().fromArray(this.elements)}}var eQ=new fJ;var kW=new fJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322);var MW=new fJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function UY(){const J={enabled:true,workingColorSpace:I9,spaces:{},convert:function(W,K,H){if(this.enabled===false||K===H||!K||!H){return W}if(this.spaces[K].transfer===Z0){W.r=l8(W.r);W.g=l8(W.g);W.b=l8(W.b)}if(this.spaces[K].primaries!==this.spaces[H].primaries){W.applyMatrix3(this.spaces[K].toXYZ);W.applyMatrix3(this.spaces[H].fromXYZ)}if(this.spaces[H].transfer===Z0){W.r=t9(W.r);W.g=t9(W.g);W.b=t9(W.b)}return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W===c8)return C6;return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){J6("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");return J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){J6("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");return J.colorSpaceToWorking(W,K)}};const Q=[0.64,0.33,0.3,0.6,0.15,0.06];const $=[0.2126,0.7152,0.0722];const Z=[0.3127,0.329];J.define({[I9]:{primaries:Q,whitePoint:Z,transfer:C6,toXYZ:kW,fromXYZ:MW,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:X8},outputColorSpaceConfig:{drawingBufferColorSpace:X8}},[X8]:{primaries:Q,whitePoint:Z,transfer:Z0,toXYZ:kW,fromXYZ:MW,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:X8}}});return J}var rJ=UY();function l8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function t9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var g9;class o${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src)){return J.src}if(typeof HTMLCanvasElement==="undefined"){return J.src}let $;if(J instanceof HTMLCanvasElement){$=J}else{if(g9===undefined)g9=P6("canvas");g9.width=J.width;g9.height=J.height;const Z=g9.getContext("2d");if(J instanceof ImageData){Z.putImageData(J,0,0)}else{Z.drawImage(J,0,0,J.width,J.height)}$=g9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){const Q=P6("canvas");Q.width=J.width;Q.height=J.height;const $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);const Z=$.getImageData(0,0,J.width,J.height);const W=Z.data;for(let K=0;K<W.length;K++){W[K]=l8(W[K]/255)*255}$.putImageData(Z,0,0);return Q}else if(J.data){const Q=J.data.slice(0);for(let $=0;$<Q.length;$++){if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray){Q[$]=Math.floor(l8(Q[$]/255)*255)}else{Q[$]=l8(Q[$])}}return{data:Q,width:J.width,height:J.height}}else{hJ("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");return J}}}var GY=0;class x6{constructor(J=null){this.isSource=true;Object.defineProperty(this,"id",{value:GY++});this.uuid=H6();this.data=J;this.dataReady=true;this.version=0}getSize(J){const Q=this.data;if(typeof HTMLVideoElement!=="undefined"&&Q instanceof HTMLVideoElement){J.set(Q.videoWidth,Q.videoHeight,0)}else if(typeof VideoFrame!=="undefined"&&Q instanceof VideoFrame){J.set(Q.displayHeight,Q.displayWidth,0)}else if(Q!==null){J.set(Q.width,Q.height,Q.depth||0)}else{J.set(0,0,0)}return J}set needsUpdate(J){if(J===true)this.version++}toJSON(J){const Q=J===undefined||typeof J==="string";if(!Q&&J.images[this.uuid]!==undefined){return J.images[this.uuid]}const $={uuid:this.uuid,url:""};const Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++){if(Z[K].isDataTexture){W.push(J$(Z[K].image))}else{W.push(J$(Z[K]))}}}else{W=J$(Z)}$.url=W}if(!Q){J.images[this.uuid]=$}return $}}function J$(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){return o$.getDataURL(J)}else{if(J.data){return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name}}else{hJ("Texture: Unable to serialize Texture.");return{}}}}var EY=0;var Q$=new S;class l0 extends S8{constructor(J=l0.DEFAULT_IMAGE,Q=l0.DEFAULT_MAPPING,$=C8,Z=C8,W=b0,K=H9,H=h0,Y=a0,X=l0.DEFAULT_ANISOTROPY,U=c8){super();this.isTexture=true;Object.defineProperty(this,"id",{value:EY++});this.uuid=H6();this.name="";this.source=new x6(J);this.mipmaps=[];this.mapping=Q;this.channel=0;this.wrapS=$;this.wrapT=Z;this.magFilter=W;this.minFilter=K;this.anisotropy=X;this.format=H;this.internalFormat=null;this.type=Y;this.offset=new _J(0,0);this.repeat=new _J(1,1);this.center=new _J(0,0);this.rotation=0;this.matrixAutoUpdate=true;this.matrix=new fJ;this.generateMipmaps=true;this.premultiplyAlpha=false;this.flipY=true;this.unpackAlignment=4;this.colorSpace=U;this.userData={};this.updateRanges=[];this.version=0;this.onUpdate=null;this.renderTarget=null;this.isRenderTargetTexture=false;this.isArrayTexture=J&&J.depth&&J.depth>1?true:false;this.pmremVersion=0}get width(){return this.source.getSize(Q$).x}get height(){return this.source.getSize(Q$).y}get depth(){return this.source.getSize(Q$).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name;this.source=J.source;this.mipmaps=J.mipmaps.slice(0);this.mapping=J.mapping;this.channel=J.channel;this.wrapS=J.wrapS;this.wrapT=J.wrapT;this.magFilter=J.magFilter;this.minFilter=J.minFilter;this.anisotropy=J.anisotropy;this.format=J.format;this.internalFormat=J.internalFormat;this.type=J.type;this.offset.copy(J.offset);this.repeat.copy(J.repeat);this.center.copy(J.center);this.rotation=J.rotation;this.matrixAutoUpdate=J.matrixAutoUpdate;this.matrix.copy(J.matrix);this.generateMipmaps=J.generateMipmaps;this.premultiplyAlpha=J.premultiplyAlpha;this.flipY=J.flipY;this.unpackAlignment=J.unpackAlignment;this.colorSpace=J.colorSpace;this.renderTarget=J.renderTarget;this.isRenderTargetTexture=J.isRenderTargetTexture;this.isArrayTexture=J.isArrayTexture;this.userData=JSON.parse(JSON.stringify(J.userData));this.needsUpdate=true;return this}setValues(J){for(const Q in J){const $=J[Q];if($===undefined){hJ(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}const Z=this[Q];if(Z===undefined){hJ(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2)){Z.copy($)}else if(Z&&$&&(Z.isVector3&&$.isVector3)){Z.copy($)}else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3)){Z.copy($)}else{this[Q]=$}}}toJSON(J){const Q=J===undefined||typeof J==="string";if(!Q&&J.textures[this.uuid]!==undefined){return J.textures[this.uuid]}const $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q){J.textures[this.uuid]=$}return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==f$)return J;J.applyMatrix3(this.matrix);if(J.x<0||J.x>1){switch(this.wrapS){case _7:J.x=J.x-Math.floor(J.x);break;case C8:J.x=J.x<0?0:1;break;case B7:if(Math.abs(Math.floor(J.x)%2)===1){J.x=Math.ceil(J.x)-J.x}else{J.x=J.x-Math.floor(J.x)}break}}if(J.y<0||J.y>1){switch(this.wrapT){case _7:J.y=J.y-Math.floor(J.y);break;case C8:J.y=J.y<0?0:1;break;case B7:if(Math.abs(Math.floor(J.y)%2)===1){J.y=Math.ceil(J.y)-J.y}else{J.y=J.y-Math.floor(J.y)}break}}if(this.flipY){J.y=1-J.y}return J}set needsUpdate(J){if(J===true){this.version++;this.source.needsUpdate=true}}set needsPMREMUpdate(J){if(J===true){this.pmremVersion++}}}l0.DEFAULT_IMAGE=null;l0.DEFAULT_MAPPING=f$;l0.DEFAULT_ANISOTROPY=1;class k0{constructor(J=0,Q=0,$=0,Z=1){k0.prototype.isVector4=true;this.x=J;this.y=Q;this.z=$;this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){this.x=J;this.y=Q;this.z=$;this.w=Z;return this}setScalar(J){this.x=J;this.y=J;this.z=J;this.w=J;return this}setX(J){this.x=J;return this}setY(J){this.y=J;return this}setZ(J){this.z=J;return this}setW(J){this.w=J;return this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){this.x=J.x;this.y=J.y;this.z=J.z;this.w=J.w!==undefined?J.w:1;return this}add(J){this.x+=J.x;this.y+=J.y;this.z+=J.z;this.w+=J.w;return this}addScalar(J){this.x+=J;this.y+=J;this.z+=J;this.w+=J;return this}addVectors(J,Q){this.x=J.x+Q.x;this.y=J.y+Q.y;this.z=J.z+Q.z;this.w=J.w+Q.w;return this}addScaledVector(J,Q){this.x+=J.x*Q;this.y+=J.y*Q;this.z+=J.z*Q;this.w+=J.w*Q;return this}sub(J){this.x-=J.x;this.y-=J.y;this.z-=J.z;this.w-=J.w;return this}subScalar(J){this.x-=J;this.y-=J;this.z-=J;this.w-=J;return this}subVectors(J,Q){this.x=J.x-Q.x;this.y=J.y-Q.y;this.z=J.z-Q.z;this.w=J.w-Q.w;return this}multiply(J){this.x*=J.x;this.y*=J.y;this.z*=J.z;this.w*=J.w;return this}multiplyScalar(J){this.x*=J;this.y*=J;this.z*=J;this.w*=J;return this}applyMatrix4(J){const Q=this.x,$=this.y,Z=this.z,W=this.w;const K=J.elements;this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W;this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W;this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W;this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W;return this}divide(J){this.x/=J.x;this.y/=J.y;this.z/=J.z;this.w/=J.w;return this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);const Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001){this.x=1;this.y=0;this.z=0}else{this.x=J.x/Q;this.y=J.y/Q;this.z=J.z/Q}return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W;const K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],E=Y[1],N=Y[5],q=Y[9],O=Y[2],k=Y[6],D=Y[10];if(Math.abs(U-E)<K&&Math.abs(G-O)<K&&Math.abs(q-k)<K){if(Math.abs(U+E)<H&&Math.abs(G+O)<H&&Math.abs(q+k)<H&&Math.abs(X+N+D-3)<H){this.set(1,0,0,0);return this}Q=Math.PI;const L=(X+1)/2;const V=(N+1)/2;const R=(D+1)/2;const C=(U+E)/4;const M=(G+O)/4;const I=(q+k)/4;if(L>V&&L>R){if(L<K){$=0;Z=0.707106781;W=0.707106781}else{$=Math.sqrt(L);Z=C/$;W=M/$}}else if(V>R){if(V<K){$=0.707106781;Z=0;W=0.707106781}else{Z=Math.sqrt(V);$=C/Z;W=I/Z}}else{if(R<K){$=0.707106781;Z=0.707106781;W=0}else{W=Math.sqrt(R);$=M/W;Z=I/W}}this.set($,Z,W,Q);return this}let F=Math.sqrt((k-q)*(k-q)+(G-O)*(G-O)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;this.x=(k-q)/F;this.y=(G-O)/F;this.z=(E-U)/F;this.w=Math.acos((X+N+D-1)/2);return this}setFromMatrixPosition(J){const Q=J.elements;this.x=Q[12];this.y=Q[13];this.z=Q[14];this.w=Q[15];return this}min(J){this.x=Math.min(this.x,J.x);this.y=Math.min(this.y,J.y);this.z=Math.min(this.z,J.z);this.w=Math.min(this.w,J.w);return this}max(J){this.x=Math.max(this.x,J.x);this.y=Math.max(this.y,J.y);this.z=Math.max(this.z,J.z);this.w=Math.max(this.w,J.w);return this}clamp(J,Q){this.x=iJ(this.x,J.x,Q.x);this.y=iJ(this.y,J.y,Q.y);this.z=iJ(this.z,J.z,Q.z);this.w=iJ(this.w,J.w,Q.w);return this}clampScalar(J,Q){this.x=iJ(this.x,J,Q);this.y=iJ(this.y,J,Q);this.z=iJ(this.z,J,Q);this.w=iJ(this.w,J,Q);return this}clampLength(J,Q){const $=this.length();return this.divideScalar($||1).multiplyScalar(iJ($,J,Q))}floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this}ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this}round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this}roundToZero(){this.x=Math.trunc(this.x);this.y=Math.trunc(this.y);this.z=Math.trunc(this.z);this.w=Math.trunc(this.w);return this}negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){this.x+=(J.x-this.x)*Q;this.y+=(J.y-this.y)*Q;this.z+=(J.z-this.z)*Q;this.w+=(J.w-this.w)*Q;return this}lerpVectors(J,Q,$){this.x=J.x+(Q.x-J.x)*$;this.y=J.y+(Q.y-J.y)*$;this.z=J.z+(Q.z-J.z)*$;this.w=J.w+(Q.w-J.w)*$;return this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){this.x=J[Q];this.y=J[Q+1];this.z=J[Q+2];this.w=J[Q+3];return this}toArray(J=[],Q=0){J[Q]=this.x;J[Q+1]=this.y;J[Q+2]=this.z;J[Q+3]=this.w;return J}fromBufferAttribute(J,Q){this.x=J.getX(Q);this.y=J.getY(Q);this.z=J.getZ(Q);this.w=J.getW(Q);return this}random(){this.x=Math.random();this.y=Math.random();this.z=Math.random();this.w=Math.random();return this}*[Symbol.iterator](){yield this.x;yield this.y;yield this.z;yield this.w}}class a$ extends S8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:false,internalFormat:null,minFilter:b0,depthBuffer:true,stencilBuffer:false,resolveDepthBuffer:true,resolveStencilBuffer:true,depthTexture:null,samples:0,count:1,depth:1,multiview:false},$);this.isRenderTarget=true;this.width=J;this.height=Q;this.depth=$.depth;this.scissor=new k0(0,0,J,Q);this.scissorTest=false;this.viewport=new k0(0,0,J,Q);const Z={width:J,height:Q,depth:$.depth};const W=new l0(Z);this.textures=[];const K=$.count;for(let H=0;H<K;H++){this.textures[H]=W.clone();this.textures[H].isRenderTargetTexture=true;this.textures[H].renderTarget=this}this._setTextureOptions($);this.depthBuffer=$.depthBuffer;this.stencilBuffer=$.stencilBuffer;this.resolveDepthBuffer=$.resolveDepthBuffer;this.resolveStencilBuffer=$.resolveStencilBuffer;this._depthTexture=null;this.depthTexture=$.depthTexture;this.samples=$.samples;this.multiview=$.multiview}_setTextureOptions(J={}){const Q={minFilter:b0,generateMipmaps:false,flipY:false,internalFormat:null};if(J.mapping!==undefined)Q.mapping=J.mapping;if(J.wrapS!==undefined)Q.wrapS=J.wrapS;if(J.wrapT!==undefined)Q.wrapT=J.wrapT;if(J.wrapR!==undefined)Q.wrapR=J.wrapR;if(J.magFilter!==undefined)Q.magFilter=J.magFilter;if(J.minFilter!==undefined)Q.minFilter=J.minFilter;if(J.format!==undefined)Q.format=J.format;if(J.type!==undefined)Q.type=J.type;if(J.anisotropy!==undefined)Q.anisotropy=J.anisotropy;if(J.colorSpace!==undefined)Q.colorSpace=J.colorSpace;if(J.flipY!==undefined)Q.flipY=J.flipY;if(J.generateMipmaps!==undefined)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==undefined)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++){const Z=this.textures[$];Z.setValues(Q)}}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J;this.height=Q;this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++){this.textures[Z].image.width=J;this.textures[Z].image.height=Q;this.textures[Z].image.depth=$;if(this.textures[Z].isData3DTexture!==true){this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1}}this.dispose()}this.viewport.set(0,0,J,Q);this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width;this.height=J.height;this.depth=J.depth;this.scissor.copy(J.scissor);this.scissorTest=J.scissorTest;this.viewport.copy(J.viewport);this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone();this.textures[Q].isRenderTargetTexture=true;this.textures[Q].renderTarget=this;const Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new x6(Z)}this.depthBuffer=J.depthBuffer;this.stencilBuffer=J.stencilBuffer;this.resolveDepthBuffer=J.resolveDepthBuffer;this.resolveStencilBuffer=J.resolveStencilBuffer;if(J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();this.samples=J.samples;return this}dispose(){this.dispatchEvent({type:"dispose"})}}class $8 extends a${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=true}}class zQ extends l0{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=true;this.image={data:J,width:Q,height:$,depth:Z};this.magFilter=j0;this.minFilter=j0;this.wrapR=C8;this.generateMipmaps=false;this.flipY=false;this.unpackAlignment=1;this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class r$ extends l0{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=true;this.image={data:J,width:Q,height:$,depth:Z};this.magFilter=j0;this.minFilter=j0;this.wrapR=C8;this.generateMipmaps=false;this.flipY=false;this.unpackAlignment=1}}class G8{constructor(J=new S(Infinity,Infinity,Infinity),Q=new S(-Infinity,-Infinity,-Infinity)){this.isBox3=true;this.min=J;this.max=Q}set(J,Q){this.min.copy(J);this.max.copy(Q);return this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3){this.expandByPoint(V8.fromArray(J,Q))}return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++){this.expandByPoint(V8.fromBufferAttribute(J,Q))}return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++){this.expandByPoint(J[Q])}return this}setFromCenterAndSize(J,Q){const $=V8.copy(Q).multiplyScalar(0.5);this.min.copy(J).sub($);this.max.copy(J).add($);return this}setFromObject(J,Q=false){this.makeEmpty();return this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.min.copy(J.min);this.max.copy(J.max);return this}makeEmpty(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){this.min.min(J);this.max.max(J);return this}expandByVector(J){this.min.sub(J);this.max.add(J);return this}expandByScalar(J){this.min.addScalar(-J);this.max.addScalar(J);return this}expandByObject(J,Q=false){J.updateWorldMatrix(false,false);const $=J.geometry;if($!==undefined){const W=$.getAttribute("position");if(Q===true&&W!==undefined&&J.isInstancedMesh!==true){for(let K=0,H=W.count;K<H;K++){if(J.isMesh===true){J.getVertexPosition(K,V8)}else{V8.fromBufferAttribute(W,K)}V8.applyMatrix4(J.matrixWorld);this.expandByPoint(V8)}}else{if(J.boundingBox!==undefined){if(J.boundingBox===null){J.computeBoundingBox()}W7.copy(J.boundingBox)}else{if($.boundingBox===null){$.computeBoundingBox()}W7.copy($.boundingBox)}W7.applyMatrix4(J.matrixWorld);this.union(W7)}}const Z=J.children;for(let W=0,K=Z.length;W<K;W++){this.expandByObject(Z[W],Q)}return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){this.clampPoint(J.center,V8);return V8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0){Q=J.normal.x*this.min.x;$=J.normal.x*this.max.x}else{Q=J.normal.x*this.max.x;$=J.normal.x*this.min.x}if(J.normal.y>0){Q+=J.normal.y*this.min.y;$+=J.normal.y*this.max.y}else{Q+=J.normal.y*this.max.y;$+=J.normal.y*this.min.y}if(J.normal.z>0){Q+=J.normal.z*this.min.z;$+=J.normal.z*this.max.z}else{Q+=J.normal.z*this.max.z;$+=J.normal.z*this.min.z}return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty()){return false}this.getCenter(V6);K7.subVectors(this.max,V6);p9.subVectors(J.a,V6);m9.subVectors(J.b,V6);d9.subVectors(J.c,V6);o8.subVectors(m9,p9);a8.subVectors(d9,m9);k9.subVectors(p9,d9);let Q=[0,-o8.z,o8.y,0,-a8.z,a8.y,0,-k9.z,k9.y,o8.z,0,-o8.x,a8.z,0,-a8.x,k9.z,0,-k9.x,-o8.y,o8.x,0,-a8.y,a8.x,0,-k9.y,k9.x,0];if(!$$(Q,p9,m9,d9,K7)){return false}Q=[1,0,0,0,1,0,0,0,1];if(!$$(Q,p9,m9,d9,K7)){return false}H7.crossVectors(o8,a8);Q=[H7.x,H7.y,H7.z];return $$(Q,p9,m9,d9,K7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,V8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty()){J.makeEmpty()}else{this.getCenter(J.center);J.radius=this.getSize(V8).length()*0.5}return J}intersect(J){this.min.max(J.min);this.max.min(J.max);if(this.isEmpty())this.makeEmpty();return this}union(J){this.min.min(J.min);this.max.max(J.max);return this}applyMatrix4(J){if(this.isEmpty())return this;h8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J);h8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J);h8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J);h8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J);h8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J);h8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J);h8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J);h8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J);this.setFromPoints(h8);return this}translate(J){this.min.add(J);this.max.add(J);return this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){this.min.fromArray(J.min);this.max.fromArray(J.max);return this}}var h8=[new S,new S,new S,new S,new S,new S,new S,new S];var V8=new S;var W7=new G8;var p9=new S;var m9=new S;var d9=new S;var o8=new S;var a8=new S;var k9=new S;var V6=new S;var K7=new S;var H7=new S;var M9=new S;function $$(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){M9.fromArray(J,K);const Y=W.x*Math.abs(M9.x)+W.y*Math.abs(M9.y)+W.z*Math.abs(M9.z);const X=Q.dot(M9);const U=$.dot(M9);const G=Z.dot(M9);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y){return false}}return true}var NY=new G8;var L6=new S;var Z$=new S;class g6{constructor(J=new S,Q=-1){this.isSphere=true;this.center=J;this.radius=Q}set(J,Q){this.center.copy(J);this.radius=Q;return this}setFromPoints(J,Q){const $=this.center;if(Q!==undefined){$.copy(Q)}else{NY.setFromPoints(J).getCenter($)}let Z=0;for(let W=0,K=J.length;W<K;W++){Z=Math.max(Z,$.distanceToSquared(J[W]))}this.radius=Math.sqrt(Z);return this}copy(J){this.center.copy(J.center);this.radius=J.radius;return this}isEmpty(){return this.radius<0}makeEmpty(){this.center.set(0,0,0);this.radius=-1;return this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){const Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){const $=this.center.distanceToSquared(J);Q.copy(J);if($>this.radius*this.radius){Q.sub(this.center).normalize();Q.multiplyScalar(this.radius).add(this.center)}return Q}getBoundingBox(J){if(this.isEmpty()){J.makeEmpty();return J}J.set(this.center,this.center);J.expandByScalar(this.radius);return J}applyMatrix4(J){this.center.applyMatrix4(J);this.radius=this.radius*J.getMaxScaleOnAxis();return this}translate(J){this.center.add(J);return this}expandByPoint(J){if(this.isEmpty()){this.center.copy(J);this.radius=0;return this}L6.subVectors(J,this.center);const Q=L6.lengthSq();if(Q>this.radius*this.radius){const $=Math.sqrt(Q);const Z=($-this.radius)*0.5;this.center.addScaledVector(L6,Z/$);this.radius+=Z}return this}union(J){if(J.isEmpty()){return this}if(this.isEmpty()){this.copy(J);return this}if(this.center.equals(J.center)===true){this.radius=Math.max(this.radius,J.radius)}else{Z$.subVectors(J.center,this.center).setLength(J.radius);this.expandByPoint(L6.copy(J.center).add(Z$));this.expandByPoint(L6.copy(J.center).sub(Z$))}return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){this.radius=J.radius;this.center.fromArray(J.center);return this}}var x8=new S;var W$=new S;var Y7=new S;var r8=new S;var K$=new S;var X7=new S;var H$=new S;class p6{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J;this.direction=Q}set(J,Q){this.origin.copy(J);this.direction.copy(Q);return this}copy(J){this.origin.copy(J.origin);this.direction.copy(J.direction);return this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){this.direction.copy(J).sub(this.origin).normalize();return this}recast(J){this.origin.copy(this.at(J,x8));return this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);const $=Q.dot(this.direction);if($<0){return Q.copy(this.origin)}return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){const Q=x8.subVectors(J,this.origin).dot(this.direction);if(Q<0){return this.origin.distanceToSquared(J)}x8.copy(this.origin).addScaledVector(this.direction,Q);return x8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){W$.copy(J).add(Q).multiplyScalar(0.5);Y7.copy(Q).sub(J).normalize();r8.copy(this.origin).sub(W$);const W=J.distanceTo(Q)*0.5;const K=-this.direction.dot(Y7);const H=r8.dot(this.direction);const Y=-r8.dot(Y7);const X=r8.lengthSq();const U=Math.abs(1-K*K);let G,E,N,q;if(U>0){G=K*Y-H;E=K*H-Y;q=W*U;if(G>=0){if(E>=-q){if(E<=q){const O=1/U;G*=O;E*=O;N=G*(G+K*E+2*H)+E*(K*G+E+2*Y)+X}else{E=W;G=Math.max(0,-(K*E+H));N=-G*G+E*(E+2*Y)+X}}else{E=-W;G=Math.max(0,-(K*E+H));N=-G*G+E*(E+2*Y)+X}}else{if(E<=-q){G=Math.max(0,-(-K*W+H));E=G>0?-W:Math.min(Math.max(-W,-Y),W);N=-G*G+E*(E+2*Y)+X}else if(E<=q){G=0;E=Math.min(Math.max(-W,-Y),W);N=E*(E+2*Y)+X}else{G=Math.max(0,-(K*W+H));E=G>0?W:Math.min(Math.max(-W,-Y),W);N=-G*G+E*(E+2*Y)+X}}}else{E=K>0?-W:W;G=Math.max(0,-(K*E+H));N=-G*G+E*(E+2*Y)+X}if($){$.copy(this.origin).addScaledVector(this.direction,G)}if(Z){Z.copy(W$).addScaledVector(Y7,E)}return N}intersectSphere(J,Q){x8.subVectors(J.center,this.origin);const $=x8.dot(this.direction);const Z=x8.dot(x8)-$*$;const W=J.radius*J.radius;if(Z>W)return null;const K=Math.sqrt(W-Z);const H=$-K;const Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return false;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){const Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0){return 0}return null}const $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){const $=this.distanceToPlane(J);if($===null){return null}return this.at($,Q)}intersectsPlane(J){const Q=J.distanceToPoint(this.origin);if(Q===0){return true}const $=J.normal.dot(this.direction);if($*Q<0){return true}return false}intersectBox(J,Q){let $,Z,W,K,H,Y;const X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z;const E=this.origin;if(X>=0){$=(J.min.x-E.x)*X;Z=(J.max.x-E.x)*X}else{$=(J.max.x-E.x)*X;Z=(J.min.x-E.x)*X}if(U>=0){W=(J.min.y-E.y)*U;K=(J.max.y-E.y)*U}else{W=(J.max.y-E.y)*U;K=(J.min.y-E.y)*U}if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(G>=0){H=(J.min.z-E.z)*G;Y=(J.max.z-E.z)*G}else{H=(J.max.z-E.z)*G;Y=(J.min.z-E.z)*G}if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,x8)!==null}intersectTriangle(J,Q,$,Z,W){K$.subVectors(Q,J);X7.subVectors($,J);H$.crossVectors(K$,X7);let K=this.direction.dot(H$);let H;if(K>0){if(Z)return null;H=1}else if(K<0){H=-1;K=-K}else{return null}r8.subVectors(this.origin,J);const Y=H*this.direction.dot(X7.crossVectors(r8,X7));if(Y<0){return null}const X=H*this.direction.dot(K$.cross(r8));if(X<0){return null}if(Y+X>K){return null}const U=-H*r8.dot(H$);if(U<0){return null}return this.at(U/K,W)}applyMatrix4(J){this.origin.applyMatrix4(J);this.direction.transformDirection(J);return this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xJ{constructor(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,q,O,k){xJ.prototype.isMatrix4=true;this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];if(J!==undefined){this.set(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,q,O,k)}}set(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,q,O,k){const D=this.elements;D[0]=J;D[4]=Q;D[8]=$;D[12]=Z;D[1]=W;D[5]=K;D[9]=H;D[13]=Y;D[2]=X;D[6]=U;D[10]=G;D[14]=E;D[3]=N;D[7]=q;D[11]=O;D[15]=k;return this}identity(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this}clone(){return new xJ().fromArray(this.elements)}copy(J){const Q=this.elements;const $=J.elements;Q[0]=$[0];Q[1]=$[1];Q[2]=$[2];Q[3]=$[3];Q[4]=$[4];Q[5]=$[5];Q[6]=$[6];Q[7]=$[7];Q[8]=$[8];Q[9]=$[9];Q[10]=$[10];Q[11]=$[11];Q[12]=$[12];Q[13]=$[13];Q[14]=$[14];Q[15]=$[15];return this}copyPosition(J){const Q=this.elements,$=J.elements;Q[12]=$[12];Q[13]=$[13];Q[14]=$[14];return this}setFromMatrix3(J){const Q=J.elements;this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1);return this}extractBasis(J,Q,$){if(this.determinant()===0){J.set(1,0,0);Q.set(0,1,0);$.set(0,0,1);return this}J.setFromMatrixColumn(this,0);Q.setFromMatrixColumn(this,1);$.setFromMatrixColumn(this,2);return this}makeBasis(J,Q,$){this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1);return this}extractRotation(J){if(J.determinant()===0){return this.identity()}const Q=this.elements;const $=J.elements;const Z=1/l9.setFromMatrixColumn(J,0).length();const W=1/l9.setFromMatrixColumn(J,1).length();const K=1/l9.setFromMatrixColumn(J,2).length();Q[0]=$[0]*Z;Q[1]=$[1]*Z;Q[2]=$[2]*Z;Q[3]=0;Q[4]=$[4]*W;Q[5]=$[5]*W;Q[6]=$[6]*W;Q[7]=0;Q[8]=$[8]*K;Q[9]=$[9]*K;Q[10]=$[10]*K;Q[11]=0;Q[12]=0;Q[13]=0;Q[14]=0;Q[15]=1;return this}makeRotationFromEuler(J){const Q=this.elements;const{x:$,y:Z,z:W}=J;const K=Math.cos($),H=Math.sin($);const Y=Math.cos(Z),X=Math.sin(Z);const U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){const E=K*U,N=K*G,q=H*U,O=H*G;Q[0]=Y*U;Q[4]=-Y*G;Q[8]=X;Q[1]=N+q*X;Q[5]=E-O*X;Q[9]=-H*Y;Q[2]=O-E*X;Q[6]=q+N*X;Q[10]=K*Y}else if(J.order==="YXZ"){const E=Y*U,N=Y*G,q=X*U,O=X*G;Q[0]=E+O*H;Q[4]=q*H-N;Q[8]=K*X;Q[1]=K*G;Q[5]=K*U;Q[9]=-H;Q[2]=N*H-q;Q[6]=O+E*H;Q[10]=K*Y}else if(J.order==="ZXY"){const E=Y*U,N=Y*G,q=X*U,O=X*G;Q[0]=E-O*H;Q[4]=-K*G;Q[8]=q+N*H;Q[1]=N+q*H;Q[5]=K*U;Q[9]=O-E*H;Q[2]=-K*X;Q[6]=H;Q[10]=K*Y}else if(J.order==="ZYX"){const E=K*U,N=K*G,q=H*U,O=H*G;Q[0]=Y*U;Q[4]=q*X-N;Q[8]=E*X+O;Q[1]=Y*G;Q[5]=O*X+E;Q[9]=N*X-q;Q[2]=-X;Q[6]=H*Y;Q[10]=K*Y}else if(J.order==="YZX"){const E=K*Y,N=K*X,q=H*Y,O=H*X;Q[0]=Y*U;Q[4]=O-E*G;Q[8]=q*G+N;Q[1]=G;Q[5]=K*U;Q[9]=-H*U;Q[2]=-X*U;Q[6]=N*G+q;Q[10]=E-O*G}else if(J.order==="XZY"){const E=K*Y,N=K*X,q=H*Y,O=H*X;Q[0]=Y*U;Q[4]=-G;Q[8]=X*U;Q[1]=E*G+O;Q[5]=K*U;Q[9]=N*G-q;Q[2]=q*G-N;Q[6]=H*U;Q[10]=O*G+E}Q[3]=0;Q[7]=0;Q[11]=0;Q[12]=0;Q[13]=0;Q[14]=0;Q[15]=1;return this}makeRotationFromQuaternion(J){return this.compose(qY,J,DY)}lookAt(J,Q,$){const Z=this.elements;H8.subVectors(J,Q);if(H8.lengthSq()===0){H8.z=1}H8.normalize();t8.crossVectors($,H8);if(t8.lengthSq()===0){if(Math.abs($.z)===1){H8.x+=0.0001}else{H8.z+=0.0001}H8.normalize();t8.crossVectors($,H8)}t8.normalize();U7.crossVectors(H8,t8);Z[0]=t8.x;Z[4]=U7.x;Z[8]=H8.x;Z[1]=t8.y;Z[5]=U7.y;Z[9]=H8.y;Z[2]=t8.z;Z[6]=U7.z;Z[10]=H8.z;return this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){const $=J.elements;const Z=Q.elements;const W=this.elements;const K=$[0],H=$[4],Y=$[8],X=$[12];const U=$[1],G=$[5],E=$[9],N=$[13];const q=$[2],O=$[6],k=$[10],D=$[14];const F=$[3],L=$[7],V=$[11],R=$[15];const C=Z[0],M=Z[4],I=Z[8],T=Z[12];const B=Z[1],_=Z[5],A=Z[9],y=Z[13];const f=Z[2],j=Z[6],g=Z[10],x=Z[14];const p=Z[3],m=Z[7],t=Z[11],$J=Z[15];W[0]=K*C+H*B+Y*f+X*p;W[4]=K*M+H*_+Y*j+X*m;W[8]=K*I+H*A+Y*g+X*t;W[12]=K*T+H*y+Y*x+X*$J;W[1]=U*C+G*B+E*f+N*p;W[5]=U*M+G*_+E*j+N*m;W[9]=U*I+G*A+E*g+N*t;W[13]=U*T+G*y+E*x+N*$J;W[2]=q*C+O*B+k*f+D*p;W[6]=q*M+O*_+k*j+D*m;W[10]=q*I+O*A+k*g+D*t;W[14]=q*T+O*y+k*x+D*$J;W[3]=F*C+L*B+V*f+R*p;W[7]=F*M+L*_+V*j+R*m;W[11]=F*I+L*A+V*g+R*t;W[15]=F*T+L*y+V*x+R*$J;return this}multiplyScalar(J){const Q=this.elements;Q[0]*=J;Q[4]*=J;Q[8]*=J;Q[12]*=J;Q[1]*=J;Q[5]*=J;Q[9]*=J;Q[13]*=J;Q[2]*=J;Q[6]*=J;Q[10]*=J;Q[14]*=J;Q[3]*=J;Q[7]*=J;Q[11]*=J;Q[15]*=J;return this}determinant(){const J=this.elements;const Q=J[0],$=J[4],Z=J[8],W=J[12];const K=J[1],H=J[5],Y=J[9],X=J[13];const U=J[2],G=J[6],E=J[10],N=J[14];const q=J[3],O=J[7],k=J[11],D=J[15];const F=Y*N-X*E;const L=H*N-X*G;const V=H*E-Y*G;const R=K*N-X*U;const C=K*E-Y*U;const M=K*G-H*U;return Q*(O*F-k*L+D*V)-$*(q*F-k*R+D*C)+Z*(q*L-O*R+D*M)-W*(q*V-O*C+k*M)}transpose(){const J=this.elements;let Q;Q=J[1];J[1]=J[4];J[4]=Q;Q=J[2];J[2]=J[8];J[8]=Q;Q=J[6];J[6]=J[9];J[9]=Q;Q=J[3];J[3]=J[12];J[12]=Q;Q=J[7];J[7]=J[13];J[13]=Q;Q=J[11];J[11]=J[14];J[14]=Q;return this}setPosition(J,Q,$){const Z=this.elements;if(J.isVector3){Z[12]=J.x;Z[13]=J.y;Z[14]=J.z}else{Z[12]=J;Z[13]=Q;Z[14]=$}return this}invert(){const J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],E=J[10],N=J[11],q=J[12],O=J[13],k=J[14],D=J[15],F=G*k*X-O*E*X+O*Y*N-H*k*N-G*Y*D+H*E*D,L=q*E*X-U*k*X-q*Y*N+K*k*N+U*Y*D-K*E*D,V=U*O*X-q*G*X+q*H*N-K*O*N-U*H*D+K*G*D,R=q*G*Y-U*O*Y-q*H*E+K*O*E+U*H*k-K*G*k;const C=Q*F+$*L+Z*V+W*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;J[0]=F*M;J[1]=(O*E*W-G*k*W-O*Z*N+$*k*N+G*Z*D-$*E*D)*M;J[2]=(H*k*W-O*Y*W+O*Z*X-$*k*X-H*Z*D+$*Y*D)*M;J[3]=(G*Y*W-H*E*W-G*Z*X+$*E*X+H*Z*N-$*Y*N)*M;J[4]=L*M;J[5]=(U*k*W-q*E*W+q*Z*N-Q*k*N-U*Z*D+Q*E*D)*M;J[6]=(q*Y*W-K*k*W-q*Z*X+Q*k*X+K*Z*D-Q*Y*D)*M;J[7]=(K*E*W-U*Y*W+U*Z*X-Q*E*X-K*Z*N+Q*Y*N)*M;J[8]=V*M;J[9]=(q*G*W-U*O*W-q*$*N+Q*O*N+U*$*D-Q*G*D)*M;J[10]=(K*O*W-q*H*W+q*$*X-Q*O*X-K*$*D+Q*H*D)*M;J[11]=(U*H*W-K*G*W-U*$*X+Q*G*X+K*$*N-Q*H*N)*M;J[12]=R*M;J[13]=(U*O*Z-q*G*Z+q*$*E-Q*O*E-U*$*k+Q*G*k)*M;J[14]=(q*H*Z-K*O*Z-q*$*Y+Q*O*Y+K*$*k-Q*H*k)*M;J[15]=(K*G*Z-U*H*Z+U*$*Y-Q*G*Y-K*$*E+Q*H*E)*M;return this}scale(J){const Q=this.elements;const{x:$,y:Z,z:W}=J;Q[0]*=$;Q[4]*=Z;Q[8]*=W;Q[1]*=$;Q[5]*=Z;Q[9]*=W;Q[2]*=$;Q[6]*=Z;Q[10]*=W;Q[3]*=$;Q[7]*=Z;Q[11]*=W;return this}getMaxScaleOnAxis(){const J=this.elements;const Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2];const $=J[4]*J[4]+J[5]*J[5]+J[6]*J[6];const Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3){this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1)}else{this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1)}return this}makeRotationX(J){const Q=Math.cos(J),$=Math.sin(J);this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1);return this}makeRotationY(J){const Q=Math.cos(J),$=Math.sin(J);this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1);return this}makeRotationZ(J){const Q=Math.cos(J),$=Math.sin(J);this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1);return this}makeRotationAxis(J,Q){const $=Math.cos(Q);const Z=Math.sin(Q);const W=1-$;const{x:K,y:H,z:Y}=J;const X=W*K,U=W*H;this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1);return this}makeScale(J,Q,$){this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1);return this}makeShear(J,Q,$,Z,W,K){this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1);return this}compose(J,Q,$){const Z=this.elements;const{_x:W,_y:K,_z:H,_w:Y}=Q;const X=W+W,U=K+K,G=H+H;const E=W*X,N=W*U,q=W*G;const O=K*U,k=K*G,D=H*G;const F=Y*X,L=Y*U,V=Y*G;const{x:R,y:C,z:M}=$;Z[0]=(1-(O+D))*R;Z[1]=(N+V)*R;Z[2]=(q-L)*R;Z[3]=0;Z[4]=(N-V)*C;Z[5]=(1-(E+D))*C;Z[6]=(k+F)*C;Z[7]=0;Z[8]=(q+L)*M;Z[9]=(k-F)*M;Z[10]=(1-(E+O))*M;Z[11]=0;Z[12]=J.x;Z[13]=J.y;Z[14]=J.z;Z[15]=1;return this}decompose(J,Q,$){const Z=this.elements;J.x=Z[12];J.y=Z[13];J.z=Z[14];if(this.determinant()===0){$.set(1,1,1);Q.identity();return this}let W=l9.set(Z[0],Z[1],Z[2]).length();const K=l9.set(Z[4],Z[5],Z[6]).length();const H=l9.set(Z[8],Z[9],Z[10]).length();const Y=this.determinant();if(Y<0)W=-W;L8.copy(this);const X=1/W;const U=1/K;const G=1/H;L8.elements[0]*=X;L8.elements[1]*=X;L8.elements[2]*=X;L8.elements[4]*=U;L8.elements[5]*=U;L8.elements[6]*=U;L8.elements[8]*=G;L8.elements[9]*=G;L8.elements[10]*=G;Q.setFromRotationMatrix(L8);$.x=W;$.y=K;$.z=H;return this}makePerspective(J,Q,$,Z,W,K,H=B8,Y=false){const X=this.elements;const U=2*W/(Q-J);const G=2*W/($-Z);const E=(Q+J)/(Q-J);const N=($+Z)/($-Z);let q,O;if(Y){q=W/(K-W);O=K*W/(K-W)}else{if(H===B8){q=-(K+W)/(K-W);O=-2*K*W/(K-W)}else if(H===A6){q=-K/(K-W);O=-K*W/(K-W)}else{throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H)}}X[0]=U;X[4]=0;X[8]=E;X[12]=0;X[1]=0;X[5]=G;X[9]=N;X[13]=0;X[2]=0;X[6]=0;X[10]=q;X[14]=O;X[3]=0;X[7]=0;X[11]=-1;X[15]=0;return this}makeOrthographic(J,Q,$,Z,W,K,H=B8,Y=false){const X=this.elements;const U=2/(Q-J);const G=2/($-Z);const E=-(Q+J)/(Q-J);const N=-($+Z)/($-Z);let q,O;if(Y){q=1/(K-W);O=K/(K-W)}else{if(H===B8){q=-2/(K-W);O=-(K+W)/(K-W)}else if(H===A6){q=-1/(K-W);O=-W/(K-W)}else{throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H)}}X[0]=U;X[4]=0;X[8]=0;X[12]=E;X[1]=0;X[5]=G;X[9]=0;X[13]=N;X[2]=0;X[6]=0;X[10]=q;X[14]=O;X[3]=0;X[7]=0;X[11]=0;X[15]=1;return this}equals(J){const Q=this.elements;const $=J.elements;for(let Z=0;Z<16;Z++){if(Q[Z]!==$[Z])return false}return true}fromArray(J,Q=0){for(let $=0;$<16;$++){this.elements[$]=J[$+Q]}return this}toArray(J=[],Q=0){const $=this.elements;J[Q]=$[0];J[Q+1]=$[1];J[Q+2]=$[2];J[Q+3]=$[3];J[Q+4]=$[4];J[Q+5]=$[5];J[Q+6]=$[6];J[Q+7]=$[7];J[Q+8]=$[8];J[Q+9]=$[9];J[Q+10]=$[10];J[Q+11]=$[11];J[Q+12]=$[12];J[Q+13]=$[13];J[Q+14]=$[14];J[Q+15]=$[15];return J}}var l9=new S;var L8=new xJ;var qY=new S(0,0,0);var DY=new S(1,1,1);var t8=new S;var U7=new S;var H8=new S;var RW=new xJ;var VW=new G0;class P8{constructor(J=0,Q=0,$=0,Z=P8.DEFAULT_ORDER){this.isEuler=true;this._x=J;this._y=Q;this._z=$;this._order=Z}get x(){return this._x}set x(J){this._x=J;this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J;this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J;this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J;this._onChangeCallback()}set(J,Q,$,Z=this._order){this._x=J;this._y=Q;this._z=$;this._order=Z;this._onChangeCallback();return this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){this._x=J._x;this._y=J._y;this._z=J._z;this._order=J._order;this._onChangeCallback();return this}setFromRotationMatrix(J,Q=this._order,$=true){const Z=J.elements;const W=Z[0],K=Z[4],H=Z[8];const Y=Z[1],X=Z[5],U=Z[9];const G=Z[2],E=Z[6],N=Z[10];switch(Q){case"XYZ":this._y=Math.asin(iJ(H,-1,1));if(Math.abs(H)<0.9999999){this._x=Math.atan2(-U,N);this._z=Math.atan2(-K,W)}else{this._x=Math.atan2(E,X);this._z=0}break;case"YXZ":this._x=Math.asin(-iJ(U,-1,1));if(Math.abs(U)<0.9999999){this._y=Math.atan2(H,N);this._z=Math.atan2(Y,X)}else{this._y=Math.atan2(-G,W);this._z=0}break;case"ZXY":this._x=Math.asin(iJ(E,-1,1));if(Math.abs(E)<0.9999999){this._y=Math.atan2(-G,N);this._z=Math.atan2(-K,X)}else{this._y=0;this._z=Math.atan2(Y,W)}break;case"ZYX":this._y=Math.asin(-iJ(G,-1,1));if(Math.abs(G)<0.9999999){this._x=Math.atan2(E,N);this._z=Math.atan2(Y,W)}else{this._x=0;this._z=Math.atan2(-K,X)}break;case"YZX":this._z=Math.asin(iJ(Y,-1,1));if(Math.abs(Y)<0.9999999){this._x=Math.atan2(-U,X);this._y=Math.atan2(-G,W)}else{this._x=0;this._y=Math.atan2(H,N)}break;case"XZY":this._z=Math.asin(-iJ(K,-1,1));if(Math.abs(K)<0.9999999){this._x=Math.atan2(E,X);this._y=Math.atan2(H,W)}else{this._x=Math.atan2(-U,N);this._y=0}break;default:hJ("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}this._order=Q;if($===true)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){RW.makeRotationFromQuaternion(J);return this.setFromRotationMatrix(RW,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){VW.setFromEuler(this);return this.setFromQuaternion(VW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){this._x=J[0];this._y=J[1];this._z=J[2];if(J[3]!==undefined)this._order=J[3];this._onChangeCallback();return this}toArray(J=[],Q=0){J[Q]=this._x;J[Q+1]=this._y;J[Q+2]=this._z;J[Q+3]=this._order;return J}_onChange(J){this._onChangeCallback=J;return this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x;yield this._y;yield this._z;yield this._order}}P8.DEFAULT_ORDER="XYZ";class _Q{constructor(){this.mask=1|0}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=4294967295|0}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var OY=0;var LW=new S;var u9=new G0;var g8=new xJ;var G7=new S;var z6=new S;var FY=new S;var kY=new G0;var zW=new S(1,0,0);var _W=new S(0,1,0);var BW=new S(0,0,1);var IW={type:"added"};var MY={type:"removed"};var c9={type:"childadded",child:null};var Y$={type:"childremoved",child:null};class I0 extends S8{constructor(){super();this.isObject3D=true;Object.defineProperty(this,"id",{value:OY++});this.uuid=H6();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=I0.DEFAULT_UP.clone();const J=new S;const Q=new P8;const $=new G0;const Z=new S(1,1,1);function W(){$.setFromEuler(Q,false)}function K(){Q.setFromQuaternion($,undefined,false)}Q._onChange(W);$._onChange(K);Object.defineProperties(this,{position:{configurable:true,enumerable:true,value:J},rotation:{configurable:true,enumerable:true,value:Q},quaternion:{configurable:true,enumerable:true,value:$},scale:{configurable:true,enumerable:true,value:Z},modelViewMatrix:{value:new xJ},normalMatrix:{value:new fJ}});this.matrix=new xJ;this.matrixWorld=new xJ;this.matrixAutoUpdate=I0.DEFAULT_MATRIX_AUTO_UPDATE;this.matrixWorldAutoUpdate=I0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;this.matrixWorldNeedsUpdate=false;this.layers=new _Q;this.visible=true;this.castShadow=false;this.receiveShadow=false;this.frustumCulled=true;this.renderOrder=0;this.animations=[];this.customDepthMaterial=undefined;this.customDistanceMaterial=undefined;this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J);this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){this.quaternion.premultiply(J);return this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,true)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){u9.setFromAxisAngle(J,Q);this.quaternion.multiply(u9);return this}rotateOnWorldAxis(J,Q){u9.setFromAxisAngle(J,Q);this.quaternion.premultiply(u9);return this}rotateX(J){return this.rotateOnAxis(zW,J)}rotateY(J){return this.rotateOnAxis(_W,J)}rotateZ(J){return this.rotateOnAxis(BW,J)}translateOnAxis(J,Q){LW.copy(J).applyQuaternion(this.quaternion);this.position.add(LW.multiplyScalar(Q));return this}translateX(J){return this.translateOnAxis(zW,J)}translateY(J){return this.translateOnAxis(_W,J)}translateZ(J){return this.translateOnAxis(BW,J)}localToWorld(J){this.updateWorldMatrix(true,false);return J.applyMatrix4(this.matrixWorld)}worldToLocal(J){this.updateWorldMatrix(true,false);return J.applyMatrix4(g8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3){G7.copy(J)}else{G7.set(J,Q,$)}const Z=this.parent;this.updateWorldMatrix(true,false);z6.setFromMatrixPosition(this.matrixWorld);if(this.isCamera||this.isLight){g8.lookAt(z6,G7,this.up)}else{g8.lookAt(G7,z6,this.up)}this.quaternion.setFromRotationMatrix(g8);if(Z){g8.extractRotation(Z.matrixWorld);u9.setFromRotationMatrix(g8);this.quaternion.premultiply(u9.invert())}}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++){this.add(arguments[Q])}return this}if(J===this){dJ("Object3D.add: object can't be added as a child of itself.",J);return this}if(J&&J.isObject3D){J.removeFromParent();J.parent=this;this.children.push(J);J.dispatchEvent(IW);c9.child=J;this.dispatchEvent(c9);c9.child=null}else{dJ("Object3D.add: object not an instance of THREE.Object3D.",J)}return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++){this.remove(arguments[$])}return this}const Q=this.children.indexOf(J);if(Q!==-1){J.parent=null;this.children.splice(Q,1);J.dispatchEvent(MY);Y$.child=J;this.dispatchEvent(Y$);Y$.child=null}return this}removeFromParent(){const J=this.parent;if(J!==null){J.remove(this)}return this}clear(){return this.remove(...this.children)}attach(J){this.updateWorldMatrix(true,false);g8.copy(this.matrixWorld).invert();if(J.parent!==null){J.parent.updateWorldMatrix(true,false);g8.multiply(J.parent.matrixWorld)}J.applyMatrix4(g8);J.removeFromParent();J.parent=this;this.children.push(J);J.updateWorldMatrix(false,true);J.dispatchEvent(IW);c9.child=J;this.dispatchEvent(c9);c9.child=null;return this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){const W=this.children[$];const K=W.getObjectByProperty(J,Q);if(K!==undefined){return K}}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);const Z=this.children;for(let W=0,K=Z.length;W<K;W++){Z[W].getObjectsByProperty(J,Q,$)}return $}getWorldPosition(J){this.updateWorldMatrix(true,false);return J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){this.updateWorldMatrix(true,false);this.matrixWorld.decompose(z6,J,FY);return J}getWorldScale(J){this.updateWorldMatrix(true,false);this.matrixWorld.decompose(z6,kY,J);return J}getWorldDirection(J){this.updateWorldMatrix(true,false);const Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);const Q=this.children;for(let $=0,Z=Q.length;$<Z;$++){Q[$].traverse(J)}}traverseVisible(J){if(this.visible===false)return;J(this);const Q=this.children;for(let $=0,Z=Q.length;$<Z;$++){Q[$].traverseVisible(J)}}traverseAncestors(J){const Q=this.parent;if(Q!==null){J(Q);Q.traverseAncestors(J)}}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=true}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===true){if(this.parent===null){this.matrixWorld.copy(this.matrix)}else{this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)}}this.matrixWorldNeedsUpdate=false;J=true}const Q=this.children;for(let $=0,Z=Q.length;$<Z;$++){const W=Q[$];W.updateMatrixWorld(J)}}updateWorldMatrix(J,Q){const $=this.parent;if(J===true&&$!==null){$.updateWorldMatrix(true,false)}if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===true){if(this.parent===null){this.matrixWorld.copy(this.matrix)}else{this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)}}if(Q===true){const Z=this.children;for(let W=0,K=Z.length;W<K;W++){const H=Z[W];H.updateWorldMatrix(false,true)}}}toJSON(J){const Q=J===undefined||typeof J==="string";const $={};if(Q){J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}};$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"}}const Z={};Z.uuid=this.uuid;Z.type=this.type;if(this.name!=="")Z.name=this.name;if(this.castShadow===true)Z.castShadow=true;if(this.receiveShadow===true)Z.receiveShadow=true;if(this.visible===false)Z.visible=false;if(this.frustumCulled===false)Z.frustumCulled=false;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;Z.layers=this.layers.mask;Z.matrix=this.matrix.toArray();Z.up=this.up.toArray();if(this.matrixAutoUpdate===false)Z.matrixAutoUpdate=false;if(this.isInstancedMesh){Z.type="InstancedMesh";Z.count=this.count;Z.instanceMatrix=this.instanceMatrix.toJSON();if(this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){Z.type="BatchedMesh";Z.perObjectFrustumCulled=this.perObjectFrustumCulled;Z.sortObjects=this.sortObjects;Z.drawRanges=this._drawRanges;Z.reservedRanges=this._reservedRanges;Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():undefined,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():undefined}));Z.instanceInfo=this._instanceInfo.map((H)=>({...H}));Z.availableInstanceIds=this._availableInstanceIds.slice();Z.availableGeometryIds=this._availableGeometryIds.slice();Z.nextIndexStart=this._nextIndexStart;Z.nextVertexStart=this._nextVertexStart;Z.geometryCount=this._geometryCount;Z.maxInstanceCount=this._maxInstanceCount;Z.maxVertexCount=this._maxVertexCount;Z.maxIndexCount=this._maxIndexCount;Z.geometryInitialized=this._geometryInitialized;Z.matricesTexture=this._matricesTexture.toJSON(J);Z.indirectTexture=this._indirectTexture.toJSON(J);if(this._colorsTexture!==null){Z.colorsTexture=this._colorsTexture.toJSON(J)}if(this.boundingSphere!==null){Z.boundingSphere=this.boundingSphere.toJSON()}if(this.boundingBox!==null){Z.boundingBox=this.boundingBox.toJSON()}}function W(H,Y){if(H[Y.uuid]===undefined){H[Y.uuid]=Y.toJSON(J)}return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor){Z.background=this.background.toJSON()}else if(this.background.isTexture){Z.background=this.background.toJSON(J).uuid}}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==true){Z.environment=this.environment.toJSON(J).uuid}}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);const H=this.geometry.parameters;if(H!==undefined&&H.shapes!==undefined){const Y=H.shapes;if(Array.isArray(Y)){for(let X=0,U=Y.length;X<U;X++){const G=Y[X];W(J.shapes,G)}}else{W(J.shapes,Y)}}}if(this.isSkinnedMesh){Z.bindMode=this.bindMode;Z.bindMatrix=this.bindMatrix.toArray();if(this.skeleton!==undefined){W(J.skeletons,this.skeleton);Z.skeleton=this.skeleton.uuid}}if(this.material!==undefined){if(Array.isArray(this.material)){const H=[];for(let Y=0,X=this.material.length;Y<X;Y++){H.push(W(J.materials,this.material[Y]))}Z.material=H}else{Z.material=W(J.materials,this.material)}}if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++){Z.children.push(this.children[H].toJSON(J).object)}}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){const Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){const H=K(J.geometries);const Y=K(J.materials);const X=K(J.textures);const U=K(J.images);const G=K(J.shapes);const E=K(J.skeletons);const N=K(J.animations);const q=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(N.length>0)$.animations=N;if(q.length>0)$.nodes=q}$.object=Z;return $;function K(H){const Y=[];for(const X in H){const U=H[X];delete U.metadata;Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=true){this.name=J.name;this.up.copy(J.up);this.position.copy(J.position);this.rotation.order=J.rotation.order;this.quaternion.copy(J.quaternion);this.scale.copy(J.scale);this.matrix.copy(J.matrix);this.matrixWorld.copy(J.matrixWorld);this.matrixAutoUpdate=J.matrixAutoUpdate;this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate;this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate;this.layers.mask=J.layers.mask;this.visible=J.visible;this.castShadow=J.castShadow;this.receiveShadow=J.receiveShadow;this.frustumCulled=J.frustumCulled;this.renderOrder=J.renderOrder;this.animations=J.animations.slice();this.userData=JSON.parse(JSON.stringify(J.userData));if(Q===true){for(let $=0;$<J.children.length;$++){const Z=J.children[$];this.add(Z.clone())}}return this}}I0.DEFAULT_UP=new S(0,1,0);I0.DEFAULT_MATRIX_AUTO_UPDATE=true;I0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=true;var z8=new S;var p8=new S;var X$=new S;var m8=new S;var n9=new S;var s9=new S;var wW=new S;var U$=new S;var G$=new S;var E$=new S;var N$=new k0;var q$=new k0;var D$=new k0;class O8{constructor(J=new S,Q=new S,$=new S){this.a=J;this.b=Q;this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q);z8.subVectors(J,Q);Z.cross(z8);const W=Z.lengthSq();if(W>0){return Z.multiplyScalar(1/Math.sqrt(W))}return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){z8.subVectors(Z,Q);p8.subVectors($,Q);X$.subVectors(J,Q);const K=z8.dot(z8);const H=z8.dot(p8);const Y=z8.dot(X$);const X=p8.dot(p8);const U=p8.dot(X$);const G=K*X-H*H;if(G===0){W.set(0,0,0);return null}const E=1/G;const N=(X*Y-H*U)*E;const q=(K*U-H*Y)*E;return W.set(1-N-q,q,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,m8)===null){return false}return m8.x>=0&&m8.y>=0&&m8.x+m8.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,m8)===null){Y.x=0;Y.y=0;if("z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}Y.setScalar(0);Y.addScaledVector(W,m8.x);Y.addScaledVector(K,m8.y);Y.addScaledVector(H,m8.z);return Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){N$.setScalar(0);q$.setScalar(0);D$.setScalar(0);N$.fromBufferAttribute(J,Q);q$.fromBufferAttribute(J,$);D$.fromBufferAttribute(J,Z);K.setScalar(0);K.addScaledVector(N$,W.x);K.addScaledVector(q$,W.y);K.addScaledVector(D$,W.z);return K}static isFrontFacing(J,Q,$,Z){z8.subVectors($,Q);p8.subVectors(J,Q);return z8.cross(p8).dot(Z)<0?true:false}set(J,Q,$){this.a.copy(J);this.b.copy(Q);this.c.copy($);return this}setFromPointsAndIndices(J,Q,$,Z){this.a.copy(J[Q]);this.b.copy(J[$]);this.c.copy(J[Z]);return this}setFromAttributeAndIndices(J,Q,$,Z){this.a.fromBufferAttribute(J,Q);this.b.fromBufferAttribute(J,$);this.c.fromBufferAttribute(J,Z);return this}clone(){return new this.constructor().copy(this)}copy(J){this.a.copy(J.a);this.b.copy(J.b);this.c.copy(J.c);return this}getArea(){z8.subVectors(this.c,this.b);p8.subVectors(this.a,this.b);return z8.cross(p8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(J){return O8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return O8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return O8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return O8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return O8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){const $=this.a,Z=this.b,W=this.c;let K,H;n9.subVectors(Z,$);s9.subVectors(W,$);U$.subVectors(J,$);const Y=n9.dot(U$);const X=s9.dot(U$);if(Y<=0&&X<=0){return Q.copy($)}G$.subVectors(J,Z);const U=n9.dot(G$);const G=s9.dot(G$);if(U>=0&&G<=U){return Q.copy(Z)}const E=Y*G-U*X;if(E<=0&&Y>=0&&U<=0){K=Y/(Y-U);return Q.copy($).addScaledVector(n9,K)}E$.subVectors(J,W);const N=n9.dot(E$);const q=s9.dot(E$);if(q>=0&&N<=q){return Q.copy(W)}const O=N*X-Y*q;if(O<=0&&X>=0&&q<=0){H=X/(X-q);return Q.copy($).addScaledVector(s9,H)}const k=U*q-N*G;if(k<=0&&G-U>=0&&N-q>=0){wW.subVectors(W,Z);H=(G-U)/(G-U+(N-q));return Q.copy(Z).addScaledVector(wW,H)}const D=1/(k+O+E);K=O*D;H=E*D;return Q.copy($).addScaledVector(n9,K).addScaledVector(s9,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var NK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var e8={h:0,s:0,l:0};var E7={h:0,s:0,l:0};function O$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<1/6)return J+(Q-J)*6*$;if($<1/2)return Q;if($<2/3)return J+(Q-J)*6*(2/3-$);return J}class aJ{constructor(J,Q,$){this.isColor=true;this.r=1;this.g=1;this.b=1;return this.set(J,Q,$)}set(J,Q,$){if(Q===undefined&&$===undefined){const Z=J;if(Z&&Z.isColor){this.copy(Z)}else if(typeof Z==="number"){this.setHex(Z)}else if(typeof Z==="string"){this.setStyle(Z)}}else{this.setRGB(J,Q,$)}return this}setScalar(J){this.r=J;this.g=J;this.b=J;return this}setHex(J,Q=X8){J=Math.floor(J);this.r=(J>>16&255)/255;this.g=(J>>8&255)/255;this.b=(J&255)/255;rJ.colorSpaceToWorking(this,Q);return this}setRGB(J,Q,$,Z=rJ.workingColorSpace){this.r=J;this.g=Q;this.b=$;rJ.colorSpaceToWorking(this,Z);return this}setHSL(J,Q,$,Z=rJ.workingColorSpace){J=i$(J,1);Q=iJ(Q,0,1);$=iJ($,0,1);if(Q===0){this.r=this.g=this.b=$}else{const W=$<=0.5?$*(1+Q):$+Q-$*Q;const K=2*$-W;this.r=O$(K,W,J+1/3);this.g=O$(K,W,J);this.b=O$(K,W,J-1/3)}rJ.colorSpaceToWorking(this,Z);return this}setStyle(J,Q=X8){function $(W){if(W===undefined)return;if(parseFloat(W)<1){hJ("Color: Alpha component of "+J+" will be ignored.")}}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W;const K=Z[1];const H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H)){$(W[4]);return this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q)}if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H)){$(W[4]);return this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q)}break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H)){$(W[4]);return this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q)}break;default:hJ("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){const W=Z[1];const K=W.length;if(K===3){return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q)}else if(K===6){return this.setHex(parseInt(W,16),Q)}else{hJ("Color: Invalid hex color "+J)}}else if(J&&J.length>0){return this.setColorName(J,Q)}return this}setColorName(J,Q=X8){const $=NK[J.toLowerCase()];if($!==undefined){this.setHex($,Q)}else{hJ("Color: Unknown color "+J)}return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){this.r=J.r;this.g=J.g;this.b=J.b;return this}copySRGBToLinear(J){this.r=l8(J.r);this.g=l8(J.g);this.b=l8(J.b);return this}copyLinearToSRGB(J){this.r=t9(J.r);this.g=t9(J.g);this.b=t9(J.b);return this}convertSRGBToLinear(){this.copySRGBToLinear(this);return this}convertLinearToSRGB(){this.copyLinearToSRGB(this);return this}getHex(J=X8){rJ.workingToColorSpace(d0.copy(this),J);return Math.round(iJ(d0.r*255,0,255))*65536+Math.round(iJ(d0.g*255,0,255))*256+Math.round(iJ(d0.b*255,0,255))}getHexString(J=X8){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=rJ.workingColorSpace){rJ.workingToColorSpace(d0.copy(this),Q);const{r:$,g:Z,b:W}=d0;const K=Math.max($,Z,W);const H=Math.min($,Z,W);let Y,X;const U=(H+K)/2;if(H===K){Y=0;X=0}else{const G=K-H;X=U<=0.5?G/(K+H):G/(2-K-H);switch(K){case $:Y=(Z-W)/G+(Z<W?6:0);break;case Z:Y=(W-$)/G+2;break;case W:Y=($-Z)/G+4;break}Y/=6}J.h=Y;J.s=X;J.l=U;return J}getRGB(J,Q=rJ.workingColorSpace){rJ.workingToColorSpace(d0.copy(this),Q);J.r=d0.r;J.g=d0.g;J.b=d0.b;return J}getStyle(J=X8){rJ.workingToColorSpace(d0.copy(this),J);const{r:Q,g:$,b:Z}=d0;if(J!==X8){return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`}return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){this.getHSL(e8);return this.setHSL(e8.h+J,e8.s+Q,e8.l+$)}add(J){this.r+=J.r;this.g+=J.g;this.b+=J.b;return this}addColors(J,Q){this.r=J.r+Q.r;this.g=J.g+Q.g;this.b=J.b+Q.b;return this}addScalar(J){this.r+=J;this.g+=J;this.b+=J;return this}sub(J){this.r=Math.max(0,this.r-J.r);this.g=Math.max(0,this.g-J.g);this.b=Math.max(0,this.b-J.b);return this}multiply(J){this.r*=J.r;this.g*=J.g;this.b*=J.b;return this}multiplyScalar(J){this.r*=J;this.g*=J;this.b*=J;return this}lerp(J,Q){this.r+=(J.r-this.r)*Q;this.g+=(J.g-this.g)*Q;this.b+=(J.b-this.b)*Q;return this}lerpColors(J,Q,$){this.r=J.r+(Q.r-J.r)*$;this.g=J.g+(Q.g-J.g)*$;this.b=J.b+(Q.b-J.b)*$;return this}lerpHSL(J,Q){this.getHSL(e8);J.getHSL(E7);const $=I6(e8.h,E7.h,Q);const Z=I6(e8.s,E7.s,Q);const W=I6(e8.l,E7.l,Q);this.setHSL($,Z,W);return this}setFromVector3(J){this.r=J.x;this.g=J.y;this.b=J.z;return this}applyMatrix3(J){const Q=this.r,$=this.g,Z=this.b;const W=J.elements;this.r=W[0]*Q+W[3]*$+W[6]*Z;this.g=W[1]*Q+W[4]*$+W[7]*Z;this.b=W[2]*Q+W[5]*$+W[8]*Z;return this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){this.r=J[Q];this.g=J[Q+1];this.b=J[Q+2];return this}toArray(J=[],Q=0){J[Q]=this.r;J[Q+1]=this.g;J[Q+2]=this.b;return J}fromBufferAttribute(J,Q){this.r=J.getX(Q);this.g=J.getY(Q);this.b=J.getZ(Q);return this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r;yield this.g;yield this.b}}var d0=new aJ;aJ.NAMES=NK;var RY=0;class Y6 extends S8{constructor(){super();this.isMaterial=true;Object.defineProperty(this,"id",{value:RY++});this.uuid=H6();this.name="";this.type="Material";this.blending=A8;this.side=F8;this.vertexColors=false;this.opacity=1;this.transparent=false;this.alphaHash=false;this.blendSrc=z9;this.blendDst=_9;this.blendEquation=$9;this.blendSrcAlpha=null;this.blendDstAlpha=null;this.blendEquationAlpha=null;this.blendColor=new aJ(0,0,0);this.blendAlpha=0;this.depthFunc=B9;this.depthTest=true;this.depthWrite=true;this.stencilWriteMask=255;this.stencilFunc=z$;this.stencilRef=0;this.stencilFuncMask=255;this.stencilFail=L9;this.stencilZFail=L9;this.stencilZPass=L9;this.stencilWrite=false;this.clippingPlanes=null;this.clipIntersection=false;this.clipShadows=false;this.shadowSide=null;this.colorWrite=true;this.precision=null;this.polygonOffset=false;this.polygonOffsetFactor=0;this.polygonOffsetUnits=0;this.dithering=false;this.alphaToCoverage=false;this.premultipliedAlpha=false;this.forceSinglePass=false;this.allowOverride=true;this.visible=true;this.toneMapped=true;this.userData={};this.version=0;this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0){this.version++}this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===undefined)return;for(const Q in J){const $=J[Q];if($===undefined){hJ(`Material: parameter '${Q}' has value of undefined.`);continue}const Z=this[Q];if(Z===undefined){hJ(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor){Z.set($)}else if(Z&&Z.isVector3&&($&&$.isVector3)){Z.copy($)}else{this[Q]=$}}}toJSON(J){const Q=J===undefined||typeof J==="string";if(Q){J={textures:{},images:{}}}const $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};$.uuid=this.uuid;$.type=this.type;if(this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==undefined)$.roughness=this.roughness;if(this.metalness!==undefined)$.metalness=this.metalness;if(this.sheen!==undefined)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==undefined)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==undefined&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==undefined)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==undefined)$.shininess=this.shininess;if(this.clearcoat!==undefined)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==undefined)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture){$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid}if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture){$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid}if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture){$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid;$.clearcoatNormalScale=this.clearcoatNormalScale.toArray()}if(this.sheenColorMap&&this.sheenColorMap.isTexture){$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid}if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture){$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid}if(this.dispersion!==undefined)$.dispersion=this.dispersion;if(this.iridescence!==undefined)$.iridescence=this.iridescence;if(this.iridescenceIOR!==undefined)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==undefined)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture){$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid}if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture){$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid}if(this.anisotropy!==undefined)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==undefined)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture){$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid}if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture){$.lightMap=this.lightMap.toJSON(J).uuid;$.lightMapIntensity=this.lightMapIntensity}if(this.aoMap&&this.aoMap.isTexture){$.aoMap=this.aoMap.toJSON(J).uuid;$.aoMapIntensity=this.aoMapIntensity}if(this.bumpMap&&this.bumpMap.isTexture){$.bumpMap=this.bumpMap.toJSON(J).uuid;$.bumpScale=this.bumpScale}if(this.normalMap&&this.normalMap.isTexture){$.normalMap=this.normalMap.toJSON(J).uuid;$.normalMapType=this.normalMapType;$.normalScale=this.normalScale.toArray()}if(this.displacementMap&&this.displacementMap.isTexture){$.displacementMap=this.displacementMap.toJSON(J).uuid;$.displacementScale=this.displacementScale;$.displacementBias=this.displacementBias}if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){$.envMap=this.envMap.toJSON(J).uuid;if(this.combine!==undefined)$.combine=this.combine}if(this.envMapRotation!==undefined)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==undefined)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==undefined)$.reflectivity=this.reflectivity;if(this.refractionRatio!==undefined)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture){$.gradientMap=this.gradientMap.toJSON(J).uuid}if(this.transmission!==undefined)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==undefined)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==undefined&&this.attenuationDistance!==Infinity)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==undefined)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==undefined)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==undefined)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==A8)$.blending=this.blending;if(this.side!==F8)$.side=this.side;if(this.vertexColors===true)$.vertexColors=true;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===true)$.transparent=true;if(this.blendSrc!==z9)$.blendSrc=this.blendSrc;if(this.blendDst!==_9)$.blendDst=this.blendDst;if(this.blendEquation!==$9)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==B9)$.depthFunc=this.depthFunc;if(this.depthTest===false)$.depthTest=this.depthTest;if(this.depthWrite===false)$.depthWrite=this.depthWrite;if(this.colorWrite===false)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==z$)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==L9)$.stencilFail=this.stencilFail;if(this.stencilZFail!==L9)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==L9)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===true)$.stencilWrite=this.stencilWrite;if(this.rotation!==undefined&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===true)$.polygonOffset=true;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==undefined&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==undefined)$.dashSize=this.dashSize;if(this.gapSize!==undefined)$.gapSize=this.gapSize;if(this.scale!==undefined)$.scale=this.scale;if(this.dithering===true)$.dithering=true;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===true)$.alphaHash=true;if(this.alphaToCoverage===true)$.alphaToCoverage=true;if(this.premultipliedAlpha===true)$.premultipliedAlpha=true;if(this.forceSinglePass===true)$.forceSinglePass=true;if(this.allowOverride===false)$.allowOverride=false;if(this.wireframe===true)$.wireframe=true;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===true)$.flatShading=true;if(this.visible===false)$.visible=false;if(this.toneMapped===false)$.toneMapped=false;if(this.fog===false)$.fog=false;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){const K=[];for(const H in W){const Y=W[H];delete Y.metadata;K.push(Y)}return K}if(Q){const W=Z(J.textures);const K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name;this.blending=J.blending;this.side=J.side;this.vertexColors=J.vertexColors;this.opacity=J.opacity;this.transparent=J.transparent;this.blendSrc=J.blendSrc;this.blendDst=J.blendDst;this.blendEquation=J.blendEquation;this.blendSrcAlpha=J.blendSrcAlpha;this.blendDstAlpha=J.blendDstAlpha;this.blendEquationAlpha=J.blendEquationAlpha;this.blendColor.copy(J.blendColor);this.blendAlpha=J.blendAlpha;this.depthFunc=J.depthFunc;this.depthTest=J.depthTest;this.depthWrite=J.depthWrite;this.stencilWriteMask=J.stencilWriteMask;this.stencilFunc=J.stencilFunc;this.stencilRef=J.stencilRef;this.stencilFuncMask=J.stencilFuncMask;this.stencilFail=J.stencilFail;this.stencilZFail=J.stencilZFail;this.stencilZPass=J.stencilZPass;this.stencilWrite=J.stencilWrite;const Q=J.clippingPlanes;let $=null;if(Q!==null){const Z=Q.length;$=new Array(Z);for(let W=0;W!==Z;++W){$[W]=Q[W].clone()}}this.clippingPlanes=$;this.clipIntersection=J.clipIntersection;this.clipShadows=J.clipShadows;this.shadowSide=J.shadowSide;this.colorWrite=J.colorWrite;this.precision=J.precision;this.polygonOffset=J.polygonOffset;this.polygonOffsetFactor=J.polygonOffsetFactor;this.polygonOffsetUnits=J.polygonOffsetUnits;this.dithering=J.dithering;this.alphaTest=J.alphaTest;this.alphaHash=J.alphaHash;this.alphaToCoverage=J.alphaToCoverage;this.premultipliedAlpha=J.premultipliedAlpha;this.forceSinglePass=J.forceSinglePass;this.allowOverride=J.allowOverride;this.visible=J.visible;this.toneMapped=J.toneMapped;this.userData=JSON.parse(JSON.stringify(J.userData));return this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===true)this.version++}}class w8 extends Y6{constructor(J){super();this.isMeshBasicMaterial=true;this.type="MeshBasicMaterial";this.color=new aJ(16777215);this.map=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.specularMap=null;this.alphaMap=null;this.envMap=null;this.envMapRotation=new P8;this.combine=A$;this.reflectivity=1;this.refractionRatio=0.98;this.wireframe=false;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.fog=true;this.setValues(J)}copy(J){super.copy(J);this.color.copy(J.color);this.map=J.map;this.lightMap=J.lightMap;this.lightMapIntensity=J.lightMapIntensity;this.aoMap=J.aoMap;this.aoMapIntensity=J.aoMapIntensity;this.specularMap=J.specularMap;this.alphaMap=J.alphaMap;this.envMap=J.envMap;this.envMapRotation.copy(J.envMapRotation);this.combine=J.combine;this.reflectivity=J.reflectivity;this.refractionRatio=J.refractionRatio;this.wireframe=J.wireframe;this.wireframeLinewidth=J.wireframeLinewidth;this.wireframeLinecap=J.wireframeLinecap;this.wireframeLinejoin=J.wireframeLinejoin;this.fog=J.fog;return this}}var d8=VY();function VY(){const J=new ArrayBuffer(4);const Q=new Float32Array(J);const $=new Uint32Array(J);const Z=new Uint32Array(512);const W=new Uint32Array(512);for(let X=0;X<256;++X){const U=X-127;if(U<-27){Z[X]=0;Z[X|256]=32768;W[X]=24;W[X|256]=24}else if(U<-14){Z[X]=1024>>-U-14;Z[X|256]=1024>>-U-14|32768;W[X]=-U-1;W[X|256]=-U-1}else if(U<=15){Z[X]=U+15<<10;Z[X|256]=U+15<<10|32768;W[X]=13;W[X|256]=13}else if(U<128){Z[X]=31744;Z[X|256]=64512;W[X]=24;W[X|256]=24}else{Z[X]=31744;Z[X|256]=64512;W[X]=13;W[X|256]=13}}const K=new Uint32Array(2048);const H=new Uint32Array(64);const Y=new Uint32Array(64);for(let X=1;X<1024;++X){let U=X<<13;let G=0;while((U&8388608)===0){U<<=1;G-=8388608}U&=-8388609;G+=947912704;K[X]=U|G}for(let X=1024;X<2048;++X){K[X]=939524096+(X-1024<<13)}for(let X=1;X<31;++X){H[X]=X<<23}H[31]=1199570944;H[32]=2147483648;for(let X=33;X<63;++X){H[X]=2147483648+(X-32<<23)}H[63]=3347054592;for(let X=1;X<64;++X){if(X!==32){Y[X]=1024}}return{floatView:Q,uint32View:$,baseTable:Z,shiftTable:W,mantissaTable:K,exponentTable:H,offsetTable:Y}}function LY(J){if(Math.abs(J)>65504)hJ("DataUtils.toHalfFloat(): Value out of range.");J=iJ(J,-65504,65504);d8.floatView[0]=J;const Q=d8.uint32View[0];const $=Q>>23&511;return d8.baseTable[$]+((Q&8388607)>>d8.shiftTable[$])}function zY(J){const Q=J>>10;d8.uint32View[0]=d8.mantissaTable[d8.offsetTable[Q]+(J&1023)]+d8.exponentTable[Q];return d8.floatView[0]}class U9{static toHalfFloat(J){return LY(J)}static fromHalfFloat(J){return zY(J)}}var C0=new S;var N7=new _J;var _Y=0;class i0{constructor(J,Q,$=false){if(Array.isArray(J)){throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")}this.isBufferAttribute=true;Object.defineProperty(this,"id",{value:_Y++});this.name="";this.array=J;this.itemSize=Q;this.count=J!==undefined?J.length/Q:0;this.normalized=$;this.usage=_$;this.updateRanges=[];this.gpuType=Q8;this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===true)this.version++}setUsage(J){this.usage=J;return this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){this.name=J.name;this.array=new J.array.constructor(J.array);this.itemSize=J.itemSize;this.count=J.count;this.normalized=J.normalized;this.usage=J.usage;this.gpuType=J.gpuType;return this}copyAt(J,Q,$){J*=this.itemSize;$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++){this.array[J+Z]=Q.array[$+Z]}return this}copyArray(J){this.array.set(J);return this}applyMatrix3(J){if(this.itemSize===2){for(let Q=0,$=this.count;Q<$;Q++){N7.fromBufferAttribute(this,Q);N7.applyMatrix3(J);this.setXY(Q,N7.x,N7.y)}}else if(this.itemSize===3){for(let Q=0,$=this.count;Q<$;Q++){C0.fromBufferAttribute(this,Q);C0.applyMatrix3(J);this.setXYZ(Q,C0.x,C0.y,C0.z)}}return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++){C0.fromBufferAttribute(this,Q);C0.applyMatrix4(J);this.setXYZ(Q,C0.x,C0.y,C0.z)}return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++){C0.fromBufferAttribute(this,Q);C0.applyNormalMatrix(J);this.setXYZ(Q,C0.x,C0.y,C0.z)}return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++){C0.fromBufferAttribute(this,Q);C0.transformDirection(J);this.setXYZ(Q,C0.x,C0.y,C0.z)}return this}set(J,Q=0){this.array.set(J,Q);return this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=r9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=n0($,this.array);this.array[J*this.itemSize+Q]=$;return this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=r9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=n0(Q,this.array);this.array[J*this.itemSize]=Q;return this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=r9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=n0(Q,this.array);this.array[J*this.itemSize+1]=Q;return this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=r9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=n0(Q,this.array);this.array[J*this.itemSize+2]=Q;return this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=r9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=n0(Q,this.array);this.array[J*this.itemSize+3]=Q;return this}setXY(J,Q,$){J*=this.itemSize;if(this.normalized){Q=n0(Q,this.array);$=n0($,this.array)}this.array[J+0]=Q;this.array[J+1]=$;return this}setXYZ(J,Q,$,Z){J*=this.itemSize;if(this.normalized){Q=n0(Q,this.array);$=n0($,this.array);Z=n0(Z,this.array)}this.array[J+0]=Q;this.array[J+1]=$;this.array[J+2]=Z;return this}setXYZW(J,Q,$,Z,W){J*=this.itemSize;if(this.normalized){Q=n0(Q,this.array);$=n0($,this.array);Z=n0(Z,this.array);W=n0(W,this.array)}this.array[J+0]=Q;this.array[J+1]=$;this.array[J+2]=Z;this.array[J+3]=W;return this}onUpload(J){this.onUploadCallback=J;return this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==_$)J.usage=this.usage;return J}}class BQ extends i0{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class IQ extends i0{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class v0 extends i0{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var BY=0;var D8=new xJ;var F$=new I0;var i9=new S;var Y8=new G8;var _6=new G8;var S0=new S;class u0 extends S8{constructor(){super();this.isBufferGeometry=true;Object.defineProperty(this,"id",{value:BY++});this.uuid=H6();this.name="";this.type="BufferGeometry";this.index=null;this.indirect=null;this.indirectOffset=0;this.attributes={};this.morphAttributes={};this.morphTargetsRelative=false;this.groups=[];this.boundingBox=null;this.boundingSphere=null;this.drawRange={start:0,count:Infinity};this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J)){this.index=new((n$(J))?IQ:BQ)(J,1)}else{this.index=J}return this}setIndirect(J,Q=0){this.indirect=J;this.indirectOffset=Q;return this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){this.attributes[J]=Q;return this}deleteAttribute(J){delete this.attributes[J];return this}hasAttribute(J){return this.attributes[J]!==undefined}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J;this.drawRange.count=Q}applyMatrix4(J){const Q=this.attributes.position;if(Q!==undefined){Q.applyMatrix4(J);Q.needsUpdate=true}const $=this.attributes.normal;if($!==undefined){const W=new fJ().getNormalMatrix(J);$.applyNormalMatrix(W);$.needsUpdate=true}const Z=this.attributes.tangent;if(Z!==undefined){Z.transformDirection(J);Z.needsUpdate=true}if(this.boundingBox!==null){this.computeBoundingBox()}if(this.boundingSphere!==null){this.computeBoundingSphere()}return this}applyQuaternion(J){D8.makeRotationFromQuaternion(J);this.applyMatrix4(D8);return this}rotateX(J){D8.makeRotationX(J);this.applyMatrix4(D8);return this}rotateY(J){D8.makeRotationY(J);this.applyMatrix4(D8);return this}rotateZ(J){D8.makeRotationZ(J);this.applyMatrix4(D8);return this}translate(J,Q,$){D8.makeTranslation(J,Q,$);this.applyMatrix4(D8);return this}scale(J,Q,$){D8.makeScale(J,Q,$);this.applyMatrix4(D8);return this}lookAt(J){F$.lookAt(J);F$.updateMatrix();this.applyMatrix4(F$.matrix);return this}center(){this.computeBoundingBox();this.boundingBox.getCenter(i9).negate();this.translate(i9.x,i9.y,i9.z);return this}setFromPoints(J){const Q=this.getAttribute("position");if(Q===undefined){const $=[];for(let Z=0,W=J.length;Z<W;Z++){const K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new v0($,3))}else{const $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){const W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count){hJ("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.")}Q.needsUpdate=true}return this}computeBoundingBox(){if(this.boundingBox===null){this.boundingBox=new G8}const J=this.attributes.position;const Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){dJ("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this);this.boundingBox.set(new S(-Infinity,-Infinity,-Infinity),new S(Infinity,Infinity,Infinity));return}if(J!==undefined){this.boundingBox.setFromBufferAttribute(J);if(Q){for(let $=0,Z=Q.length;$<Z;$++){const W=Q[$];Y8.setFromBufferAttribute(W);if(this.morphTargetsRelative){S0.addVectors(this.boundingBox.min,Y8.min);this.boundingBox.expandByPoint(S0);S0.addVectors(this.boundingBox.max,Y8.max);this.boundingBox.expandByPoint(S0)}else{this.boundingBox.expandByPoint(Y8.min);this.boundingBox.expandByPoint(Y8.max)}}}}else{this.boundingBox.makeEmpty()}if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)){dJ('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}}computeBoundingSphere(){if(this.boundingSphere===null){this.boundingSphere=new g6}const J=this.attributes.position;const Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){dJ("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this);this.boundingSphere.set(new S,Infinity);return}if(J){const $=this.boundingSphere.center;Y8.setFromBufferAttribute(J);if(Q){for(let W=0,K=Q.length;W<K;W++){const H=Q[W];_6.setFromBufferAttribute(H);if(this.morphTargetsRelative){S0.addVectors(Y8.min,_6.min);Y8.expandByPoint(S0);S0.addVectors(Y8.max,_6.max);Y8.expandByPoint(S0)}else{Y8.expandByPoint(_6.min);Y8.expandByPoint(_6.max)}}}Y8.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++){S0.fromBufferAttribute(J,W);Z=Math.max(Z,$.distanceToSquared(S0))}if(Q){for(let W=0,K=Q.length;W<K;W++){const H=Q[W];const Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){S0.fromBufferAttribute(H,X);if(Y){i9.fromBufferAttribute(J,X);S0.add(i9)}Z=Math.max(Z,$.distanceToSquared(S0))}}}this.boundingSphere.radius=Math.sqrt(Z);if(isNaN(this.boundingSphere.radius)){dJ('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}computeTangents(){const J=this.index;const Q=this.attributes;if(J===null||Q.position===undefined||Q.normal===undefined||Q.uv===undefined){dJ("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const $=Q.position;const Z=Q.normal;const W=Q.uv;if(this.hasAttribute("tangent")===false){this.setAttribute("tangent",new i0(new Float32Array(4*$.count),4))}const K=this.getAttribute("tangent");const H=[],Y=[];for(let I=0;I<$.count;I++){H[I]=new S;Y[I]=new S}const X=new S,U=new S,G=new S,E=new _J,N=new _J,q=new _J,O=new S,k=new S;function D(I,T,B){X.fromBufferAttribute($,I);U.fromBufferAttribute($,T);G.fromBufferAttribute($,B);E.fromBufferAttribute(W,I);N.fromBufferAttribute(W,T);q.fromBufferAttribute(W,B);U.sub(X);G.sub(X);N.sub(E);q.sub(E);const _=1/(N.x*q.y-q.x*N.y);if(!isFinite(_))return;O.copy(U).multiplyScalar(q.y).addScaledVector(G,-N.y).multiplyScalar(_);k.copy(G).multiplyScalar(N.x).addScaledVector(U,-q.x).multiplyScalar(_);H[I].add(O);H[T].add(O);H[B].add(O);Y[I].add(k);Y[T].add(k);Y[B].add(k)}let F=this.groups;if(F.length===0){F=[{start:0,count:J.count}]}for(let I=0,T=F.length;I<T;++I){const B=F[I];const _=B.start;const A=B.count;for(let y=_,f=_+A;y<f;y+=3){D(J.getX(y+0),J.getX(y+1),J.getX(y+2))}}const L=new S,V=new S;const R=new S,C=new S;function M(I){R.fromBufferAttribute(Z,I);C.copy(R);const T=H[I];L.copy(T);L.sub(R.multiplyScalar(R.dot(T))).normalize();V.crossVectors(C,T);const B=V.dot(Y[I]);const _=B<0?-1:1;K.setXYZW(I,L.x,L.y,L.z,_)}for(let I=0,T=F.length;I<T;++I){const B=F[I];const _=B.start;const A=B.count;for(let y=_,f=_+A;y<f;y+=3){M(J.getX(y+0));M(J.getX(y+1));M(J.getX(y+2))}}}computeVertexNormals(){const J=this.index;const Q=this.getAttribute("position");if(Q!==undefined){let $=this.getAttribute("normal");if($===undefined){$=new i0(new Float32Array(Q.count*3),3);this.setAttribute("normal",$)}else{for(let E=0,N=$.count;E<N;E++){$.setXYZ(E,0,0,0)}}const Z=new S,W=new S,K=new S;const H=new S,Y=new S,X=new S;const U=new S,G=new S;if(J){for(let E=0,N=J.count;E<N;E+=3){const q=J.getX(E+0);const O=J.getX(E+1);const k=J.getX(E+2);Z.fromBufferAttribute(Q,q);W.fromBufferAttribute(Q,O);K.fromBufferAttribute(Q,k);U.subVectors(K,W);G.subVectors(Z,W);U.cross(G);H.fromBufferAttribute($,q);Y.fromBufferAttribute($,O);X.fromBufferAttribute($,k);H.add(U);Y.add(U);X.add(U);$.setXYZ(q,H.x,H.y,H.z);$.setXYZ(O,Y.x,Y.y,Y.z);$.setXYZ(k,X.x,X.y,X.z)}}else{for(let E=0,N=Q.count;E<N;E+=3){Z.fromBufferAttribute(Q,E+0);W.fromBufferAttribute(Q,E+1);K.fromBufferAttribute(Q,E+2);U.subVectors(K,W);G.subVectors(Z,W);U.cross(G);$.setXYZ(E+0,U.x,U.y,U.z);$.setXYZ(E+1,U.x,U.y,U.z);$.setXYZ(E+2,U.x,U.y,U.z)}}this.normalizeNormals();$.needsUpdate=true}}normalizeNormals(){const J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++){S0.fromBufferAttribute(J,Q);S0.normalize();J.setXYZ(Q,S0.x,S0.y,S0.z)}}toNonIndexed(){function J(H,Y){const X=H.array;const U=H.itemSize;const G=H.normalized;const E=new X.constructor(Y.length*U);let N=0,q=0;for(let O=0,k=Y.length;O<k;O++){if(H.isInterleavedBufferAttribute){N=Y[O]*H.data.stride+H.offset}else{N=Y[O]*U}for(let D=0;D<U;D++){E[q++]=X[N++]}}return new i0(E,U,G)}if(this.index===null){hJ("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");return this}const Q=new u0;const $=this.index.array;const Z=this.attributes;for(const H in Z){const Y=Z[H];const X=J(Y,$);Q.setAttribute(H,X)}const W=this.morphAttributes;for(const H in W){const Y=[];const X=W[H];for(let U=0,G=X.length;U<G;U++){const E=X[U];const N=J(E,$);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;const K=this.groups;for(let H=0,Y=K.length;H<Y;H++){const X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){const J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};J.uuid=this.uuid;J.type=this.type;if(this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==undefined){const Y=this.parameters;for(const X in Y){if(Y[X]!==undefined)J[X]=Y[X]}return J}J.data={attributes:{}};const Q=this.index;if(Q!==null){J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)}}const $=this.attributes;for(const Y in $){const X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}const Z={};let W=false;for(const Y in this.morphAttributes){const X=this.morphAttributes[Y];const U=[];for(let G=0,E=X.length;G<E;G++){const N=X[G];U.push(N.toJSON(J.data))}if(U.length>0){Z[Y]=U;W=true}}if(W){J.data.morphAttributes=Z;J.data.morphTargetsRelative=this.morphTargetsRelative}const K=this.groups;if(K.length>0){J.data.groups=JSON.parse(JSON.stringify(K))}const H=this.boundingSphere;if(H!==null){J.data.boundingSphere=H.toJSON()}return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingBox=null;this.boundingSphere=null;const Q={};this.name=J.name;const $=J.index;if($!==null){this.setIndex($.clone())}const Z=J.attributes;for(const X in Z){const U=Z[X];this.setAttribute(X,U.clone(Q))}const W=J.morphAttributes;for(const X in W){const U=[];const G=W[X];for(let E=0,N=G.length;E<N;E++){U.push(G[E].clone(Q))}this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;const K=J.groups;for(let X=0,U=K.length;X<U;X++){const G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}const H=J.boundingBox;if(H!==null){this.boundingBox=H.clone()}const Y=J.boundingSphere;if(Y!==null){this.boundingSphere=Y.clone()}this.drawRange.start=J.drawRange.start;this.drawRange.count=J.drawRange.count;this.userData=J.userData;return this}dispose(){this.dispatchEvent({type:"dispose"})}}var CW=new xJ;var R9=new p6;var q7=new g6;var AW=new S;var D7=new S;var O7=new S;var F7=new S;var k$=new S;var k7=new S;var PW=new S;var M7=new S;class M0 extends I0{constructor(J=new u0,Q=new w8){super();this.isMesh=true;this.type="Mesh";this.geometry=J;this.material=Q;this.morphTargetDictionary=undefined;this.morphTargetInfluences=undefined;this.count=1;this.updateMorphTargets()}copy(J,Q){super.copy(J,Q);if(J.morphTargetInfluences!==undefined){this.morphTargetInfluences=J.morphTargetInfluences.slice()}if(J.morphTargetDictionary!==undefined){this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary)}this.material=Array.isArray(J.material)?J.material.slice():J.material;this.geometry=J.geometry;return this}updateMorphTargets(){const J=this.geometry;const Q=J.morphAttributes;const $=Object.keys(Q);if($.length>0){const Z=Q[$[0]];if(Z!==undefined){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){const H=Z[W].name||String(W);this.morphTargetInfluences.push(0);this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){const $=this.geometry;const Z=$.attributes.position;const W=$.morphAttributes.position;const K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);const H=this.morphTargetInfluences;if(W&&H){k7.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){const U=H[Y];const G=W[Y];if(U===0)continue;k$.fromBufferAttribute(G,J);if(K){k7.addScaledVector(k$,U)}else{k7.addScaledVector(k$.sub(Q),U)}}Q.add(k7)}return Q}raycast(J,Q){const $=this.geometry;const Z=this.material;const W=this.matrixWorld;if(Z===undefined)return;if($.boundingSphere===null)$.computeBoundingSphere();q7.copy($.boundingSphere);q7.applyMatrix4(W);R9.copy(J.ray).recast(J.near);if(q7.containsPoint(R9.origin)===false){if(R9.intersectSphere(q7,AW)===null)return;if(R9.origin.distanceToSquared(AW)>(J.far-J.near)**2)return}CW.copy(W).invert();R9.copy(J.ray).applyMatrix4(CW);if($.boundingBox!==null){if(R9.intersectsBox($.boundingBox)===false)return}this._computeIntersections(J,Q,R9)}_computeIntersections(J,Q,$){let Z;const W=this.geometry;const K=this.material;const H=W.index;const Y=W.attributes.position;const X=W.attributes.uv;const U=W.attributes.uv1;const G=W.attributes.normal;const E=W.groups;const N=W.drawRange;if(H!==null){if(Array.isArray(K)){for(let q=0,O=E.length;q<O;q++){const k=E[q];const D=K[k.materialIndex];const F=Math.max(k.start,N.start);const L=Math.min(H.count,Math.min(k.start+k.count,N.start+N.count));for(let V=F,R=L;V<R;V+=3){const C=H.getX(V);const M=H.getX(V+1);const I=H.getX(V+2);Z=R7(this,D,J,$,X,U,G,C,M,I);if(Z){Z.faceIndex=Math.floor(V/3);Z.face.materialIndex=k.materialIndex;Q.push(Z)}}}}else{const q=Math.max(0,N.start);const O=Math.min(H.count,N.start+N.count);for(let k=q,D=O;k<D;k+=3){const F=H.getX(k);const L=H.getX(k+1);const V=H.getX(k+2);Z=R7(this,K,J,$,X,U,G,F,L,V);if(Z){Z.faceIndex=Math.floor(k/3);Q.push(Z)}}}}else if(Y!==undefined){if(Array.isArray(K)){for(let q=0,O=E.length;q<O;q++){const k=E[q];const D=K[k.materialIndex];const F=Math.max(k.start,N.start);const L=Math.min(Y.count,Math.min(k.start+k.count,N.start+N.count));for(let V=F,R=L;V<R;V+=3){const C=V;const M=V+1;const I=V+2;Z=R7(this,D,J,$,X,U,G,C,M,I);if(Z){Z.faceIndex=Math.floor(V/3);Z.face.materialIndex=k.materialIndex;Q.push(Z)}}}}else{const q=Math.max(0,N.start);const O=Math.min(Y.count,N.start+N.count);for(let k=q,D=O;k<D;k+=3){const F=k;const L=k+1;const V=k+2;Z=R7(this,K,J,$,X,U,G,F,L,V);if(Z){Z.faceIndex=Math.floor(k/3);Q.push(Z)}}}}}}function IY(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===o0){X=Z.intersectTriangle(H,K,W,true,Y)}else{X=Z.intersectTriangle(W,K,H,Q.side===F8,Y)}if(X===null)return null;M7.copy(Y);M7.applyMatrix4(J.matrixWorld);const U=$.ray.origin.distanceTo(M7);if(U<$.near||U>$.far)return null;return{distance:U,point:M7.clone(),object:J}}function R7(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,D7);J.getVertexPosition(X,O7);J.getVertexPosition(U,F7);const G=IY(J,Q,$,Z,D7,O7,F7,PW);if(G){const E=new S;O8.getBarycoord(PW,D7,O7,F7,E);if(W){G.uv=O8.getInterpolatedAttribute(W,Y,X,U,E,new _J)}if(K){G.uv1=O8.getInterpolatedAttribute(K,Y,X,U,E,new _J)}if(H){G.normal=O8.getInterpolatedAttribute(H,Y,X,U,E,new S);if(G.normal.dot(Z.direction)>0){G.normal.multiplyScalar(-1)}}const N={a:Y,b:X,c:U,normal:new S,materialIndex:0};O8.getNormal(D7,O7,F7,N.normal);G.face=N;G.barycoord=E}return G}class G9 extends u0{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry";this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};const H=this;Z=Math.floor(Z);W=Math.floor(W);K=Math.floor(K);const Y=[];const X=[];const U=[];const G=[];let E=0;let N=0;q("z","y","x",-1,-1,$,Q,J,K,W,0);q("z","y","x",1,-1,$,Q,-J,K,W,1);q("x","z","y",1,1,J,$,Q,Z,K,2);q("x","z","y",1,-1,J,$,-Q,Z,K,3);q("x","y","z",1,-1,J,Q,$,Z,W,4);q("x","y","z",-1,-1,J,Q,-$,Z,W,5);this.setIndex(Y);this.setAttribute("position",new v0(X,3));this.setAttribute("normal",new v0(U,3));this.setAttribute("uv",new v0(G,2));function q(O,k,D,F,L,V,R,C,M,I,T){const B=V/M;const _=R/I;const A=V/2;const y=R/2;const f=C/2;const j=M+1;const g=I+1;let x=0;let p=0;const m=new S;for(let t=0;t<g;t++){const $J=t*_-y;for(let GJ=0;GJ<j;GJ++){const NJ=GJ*B-A;m[O]=NJ*F;m[k]=$J*L;m[D]=f;X.push(m.x,m.y,m.z);m[O]=0;m[k]=0;m[D]=C>0?1:-1;U.push(m.x,m.y,m.z);G.push(GJ/M);G.push(1-t/I);x+=1}}for(let t=0;t<I;t++){for(let $J=0;$J<M;$J++){const GJ=E+$J+j*t;const NJ=E+$J+j*(t+1);const cJ=E+($J+1)+j*(t+1);const AJ=E+($J+1)+j*t;Y.push(GJ,NJ,AJ);Y.push(NJ,cJ,AJ);p+=6}}H.addGroup(N,p,T);N+=p;E+=x}}copy(J){super.copy(J);this.parameters=Object.assign({},J.parameters);return this}static fromJSON(J){return new G9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function C9(J){const Q={};for(const $ in J){Q[$]={};for(const Z in J[$]){const W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion)){if(W.isRenderTargetTexture){hJ("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");Q[$][Z]=null}else{Q[$][Z]=W.clone()}}else if(Array.isArray(W)){Q[$][Z]=W.slice()}else{Q[$][Z]=W}}}return Q}function c0(J){const Q={};for(let $=0;$<J.length;$++){const Z=C9(J[$]);for(const W in Z){Q[W]=Z[W]}}return Q}function wY(J){const Q=[];for(let $=0;$<J.length;$++){Q.push(J[$].clone())}return Q}function t$(J){const Q=J.getRenderTarget();if(Q===null){return J.outputColorSpace}if(Q.isXRRenderTarget===true){return Q.texture.colorSpace}return rJ.workingColorSpace}var qK={clone:C9,merge:c0};var CY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var AY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class y0 extends Y6{constructor(J){super();this.isShaderMaterial=true;this.type="ShaderMaterial";this.defines={};this.uniforms={};this.uniformsGroups=[];this.vertexShader=CY;this.fragmentShader=AY;this.linewidth=1;this.wireframe=false;this.wireframeLinewidth=1;this.fog=false;this.lights=false;this.clipping=false;this.forceSinglePass=true;this.extensions={clipCullDistance:false,multiDraw:false};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]};this.index0AttributeName=undefined;this.uniformsNeedUpdate=false;this.glslVersion=null;if(J!==undefined){this.setValues(J)}}copy(J){super.copy(J);this.fragmentShader=J.fragmentShader;this.vertexShader=J.vertexShader;this.uniforms=C9(J.uniforms);this.uniformsGroups=wY(J.uniformsGroups);this.defines=Object.assign({},J.defines);this.wireframe=J.wireframe;this.wireframeLinewidth=J.wireframeLinewidth;this.fog=J.fog;this.lights=J.lights;this.clipping=J.clipping;this.extensions=Object.assign({},J.extensions);this.glslVersion=J.glslVersion;this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues);this.index0AttributeName=J.index0AttributeName;this.uniformsNeedUpdate=J.uniformsNeedUpdate;return this}toJSON(J){const Q=super.toJSON(J);Q.glslVersion=this.glslVersion;Q.uniforms={};for(const Z in this.uniforms){const W=this.uniforms[Z];const K=W.value;if(K&&K.isTexture){Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid}}else if(K&&K.isColor){Q.uniforms[Z]={type:"c",value:K.getHex()}}else if(K&&K.isVector2){Q.uniforms[Z]={type:"v2",value:K.toArray()}}else if(K&&K.isVector3){Q.uniforms[Z]={type:"v3",value:K.toArray()}}else if(K&&K.isVector4){Q.uniforms[Z]={type:"v4",value:K.toArray()}}else if(K&&K.isMatrix3){Q.uniforms[Z]={type:"m3",value:K.toArray()}}else if(K&&K.isMatrix4){Q.uniforms[Z]={type:"m4",value:K.toArray()}}else{Q.uniforms[Z]={value:K}}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader;Q.fragmentShader=this.fragmentShader;Q.lights=this.lights;Q.clipping=this.clipping;const $={};for(const Z in this.extensions){if(this.extensions[Z]===true)$[Z]=true}if(Object.keys($).length>0)Q.extensions=$;return Q}}class wQ extends I0{constructor(){super();this.isCamera=true;this.type="Camera";this.matrixWorldInverse=new xJ;this.projectionMatrix=new xJ;this.projectionMatrixInverse=new xJ;this.coordinateSystem=B8;this._reversedDepth=false}get reversedDepth(){return this._reversedDepth}copy(J,Q){super.copy(J,Q);this.matrixWorldInverse.copy(J.matrixWorldInverse);this.projectionMatrix.copy(J.projectionMatrix);this.projectionMatrixInverse.copy(J.projectionMatrixInverse);this.coordinateSystem=J.coordinateSystem;return this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J);this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q);this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var J9=new S;var TW=new _J;var SW=new _J;class s0 extends wQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=true;this.type="PerspectiveCamera";this.fov=J;this.zoom=1;this.near=$;this.far=Z;this.focus=10;this.aspect=Q;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}copy(J,Q){super.copy(J,Q);this.fov=J.fov;this.zoom=J.zoom;this.near=J.near;this.far=J.far;this.focus=J.focus;this.aspect=J.aspect;this.view=J.view===null?null:Object.assign({},J.view);this.filmGauge=J.filmGauge;this.filmOffset=J.filmOffset;return this}setFocalLength(J){const Q=0.5*this.getFilmHeight()/J;this.fov=Q6*2*Math.atan(Q);this.updateProjectionMatrix()}getFocalLength(){const J=Math.tan(B6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return Q6*2*Math.atan(Math.tan(B6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){J9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse);Q.set(J9.x,J9.y).multiplyScalar(-J/J9.z);J9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse);$.set(J9.x,J9.y).multiplyScalar(-J/J9.z)}getViewSize(J,Q){this.getViewBounds(J,TW,SW);return Q.subVectors(SW,TW)}setViewOffset(J,Q,$,Z,W,K){this.aspect=J/Q;if(this.view===null){this.view={enabled:true,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}}this.view.enabled=true;this.view.fullWidth=J;this.view.fullHeight=Q;this.view.offsetX=$;this.view.offsetY=Z;this.view.width=W;this.view.height=K;this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null){this.view.enabled=false}this.updateProjectionMatrix()}updateProjectionMatrix(){const J=this.near;let Q=J*Math.tan(B6*0.5*this.fov)/this.zoom;let $=2*Q;let Z=this.aspect*$;let W=-0.5*Z;const K=this.view;if(this.view!==null&&this.view.enabled){const{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y;Q-=K.offsetY*$/X;Z*=K.width/Y;$*=K.height/X}const H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth);this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){const Q=super.toJSON(J);Q.object.fov=this.fov;Q.object.zoom=this.zoom;Q.object.near=this.near;Q.object.far=this.far;Q.object.focus=this.focus;Q.object.aspect=this.aspect;if(this.view!==null)Q.object.view=Object.assign({},this.view);Q.object.filmGauge=this.filmGauge;Q.object.filmOffset=this.filmOffset;return Q}}var o9=-90;var a9=1;class e$ extends I0{constructor(J,Q,$){super();this.type="CubeCamera";this.renderTarget=$;this.coordinateSystem=null;this.activeMipmapLevel=0;const Z=new s0(o9,a9,J,Q);Z.layers=this.layers;this.add(Z);const W=new s0(o9,a9,J,Q);W.layers=this.layers;this.add(W);const K=new s0(o9,a9,J,Q);K.layers=this.layers;this.add(K);const H=new s0(o9,a9,J,Q);H.layers=this.layers;this.add(H);const Y=new s0(o9,a9,J,Q);Y.layers=this.layers;this.add(Y);const X=new s0(o9,a9,J,Q);X.layers=this.layers;this.add(X)}updateCoordinateSystem(){const J=this.coordinateSystem;const Q=this.children.concat();const[$,Z,W,K,H,Y]=Q;for(const X of Q)this.remove(X);if(J===B8){$.up.set(0,1,0);$.lookAt(1,0,0);Z.up.set(0,1,0);Z.lookAt(-1,0,0);W.up.set(0,0,-1);W.lookAt(0,1,0);K.up.set(0,0,1);K.lookAt(0,-1,0);H.up.set(0,1,0);H.lookAt(0,0,1);Y.up.set(0,1,0);Y.lookAt(0,0,-1)}else if(J===A6){$.up.set(0,-1,0);$.lookAt(-1,0,0);Z.up.set(0,-1,0);Z.lookAt(1,0,0);W.up.set(0,0,1);W.lookAt(0,1,0);K.up.set(0,0,-1);K.lookAt(0,-1,0);H.up.set(0,-1,0);H.lookAt(0,0,1);Y.up.set(0,-1,0);Y.lookAt(0,0,-1)}else{throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J)}for(const X of Q){this.add(X);X.updateMatrixWorld()}}update(J,Q){if(this.parent===null)this.updateMatrixWorld();const{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem){this.coordinateSystem=J.coordinateSystem;this.updateCoordinateSystem()}const[W,K,H,Y,X,U]=this.children;const G=J.getRenderTarget();const E=J.getActiveCubeFace();const N=J.getActiveMipmapLevel();const q=J.xr.enabled;J.xr.enabled=false;const O=$.texture.generateMipmaps;$.texture.generateMipmaps=false;J.setRenderTarget($,0,Z);J.render(Q,W);J.setRenderTarget($,1,Z);J.render(Q,K);J.setRenderTarget($,2,Z);J.render(Q,H);J.setRenderTarget($,3,Z);J.render(Q,Y);J.setRenderTarget($,4,Z);J.render(Q,X);$.texture.generateMipmaps=O;J.setRenderTarget($,5,Z);J.render(Q,U);J.setRenderTarget(G,E,N);J.xr.enabled=q;$.texture.needsPMREMUpdate=true}}class CQ extends l0{constructor(J=[],Q=K9,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=true;this.flipY=false}get images(){return this.image}set images(J){this.image=J}}class AQ extends $8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=true;const $={width:J,height:J,depth:1};const Z=[$,$,$,$,$,$];this.texture=new CQ(Z);this._setTextureOptions(Q);this.texture.isRenderTargetTexture=true}fromEquirectangularTexture(J,Q){this.texture.type=Q.type;this.texture.colorSpace=Q.colorSpace;this.texture.generateMipmaps=Q.generateMipmaps;this.texture.minFilter=Q.minFilter;this.texture.magFilter=Q.magFilter;const $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`};const Z=new G9(5,5,5);const W=new y0({name:"CubemapFromEquirect",uniforms:C9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:o0,blending:T8});W.uniforms.tEquirect.value=Q;const K=new M0(Z,W);const H=Q.minFilter;if(Q.minFilter===H9)Q.minFilter=b0;const Y=new e$(1,10,this);Y.update(J,K);Q.minFilter=H;K.geometry.dispose();K.material.dispose();return this}clear(J,Q=true,$=true,Z=true){const W=J.getRenderTarget();for(let K=0;K<6;K++){J.setRenderTarget(this,K);J.clear(Q,$,Z)}J.setRenderTarget(W)}}class Q9 extends I0{constructor(){super();this.isGroup=true;this.type="Group"}}var PY={type:"move"};class m6{constructor(){this._targetRay=null;this._grip=null;this._hand=null}getHandSpace(){if(this._hand===null){this._hand=new Q9;this._hand.matrixAutoUpdate=false;this._hand.visible=false;this._hand.joints={};this._hand.inputState={pinching:false}}return this._hand}getTargetRaySpace(){if(this._targetRay===null){this._targetRay=new Q9;this._targetRay.matrixAutoUpdate=false;this._targetRay.visible=false;this._targetRay.hasLinearVelocity=false;this._targetRay.linearVelocity=new S;this._targetRay.hasAngularVelocity=false;this._targetRay.angularVelocity=new S}return this._targetRay}getGripSpace(){if(this._grip===null){this._grip=new Q9;this._grip.matrixAutoUpdate=false;this._grip.visible=false;this._grip.hasLinearVelocity=false;this._grip.linearVelocity=new S;this._grip.hasAngularVelocity=false;this._grip.angularVelocity=new S}return this._grip}dispatchEvent(J){if(this._targetRay!==null){this._targetRay.dispatchEvent(J)}if(this._grip!==null){this._grip.dispatchEvent(J)}if(this._hand!==null){this._hand.dispatchEvent(J)}return this}connect(J){if(J&&J.hand){const Q=this._hand;if(Q){for(const $ of J.hand.values()){this._getHandJoint(Q,$)}}}this.dispatchEvent({type:"connected",data:J});return this}disconnect(J){this.dispatchEvent({type:"disconnected",data:J});if(this._targetRay!==null){this._targetRay.visible=false}if(this._grip!==null){this._grip.visible=false}if(this._hand!==null){this._hand.visible=false}return this}update(J,Q,$){let Z=null;let W=null;let K=null;const H=this._targetRay;const Y=this._grip;const X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=true;for(const O of J.hand.values()){const k=Q.getJointPose(O,$);const D=this._getHandJoint(X,O);if(k!==null){D.matrix.fromArray(k.transform.matrix);D.matrix.decompose(D.position,D.rotation,D.scale);D.matrixWorldNeedsUpdate=true;D.jointRadius=k.radius}D.visible=k!==null}const U=X.joints["index-finger-tip"];const G=X.joints["thumb-tip"];const E=U.position.distanceTo(G.position);const N=0.02;const q=0.005;if(X.inputState.pinching&&E>N+q){X.inputState.pinching=false;this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this})}else if(!X.inputState.pinching&&E<=N-q){X.inputState.pinching=true;this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}}else{if(Y!==null&&J.gripSpace){W=Q.getPose(J.gripSpace,$);if(W!==null){Y.matrix.fromArray(W.transform.matrix);Y.matrix.decompose(Y.position,Y.rotation,Y.scale);Y.matrixWorldNeedsUpdate=true;if(W.linearVelocity){Y.hasLinearVelocity=true;Y.linearVelocity.copy(W.linearVelocity)}else{Y.hasLinearVelocity=false}if(W.angularVelocity){Y.hasAngularVelocity=true;Y.angularVelocity.copy(W.angularVelocity)}else{Y.hasAngularVelocity=false}}}}if(H!==null){Z=Q.getPose(J.targetRaySpace,$);if(Z===null&&W!==null){Z=W}if(Z!==null){H.matrix.fromArray(Z.transform.matrix);H.matrix.decompose(H.position,H.rotation,H.scale);H.matrixWorldNeedsUpdate=true;if(Z.linearVelocity){H.hasLinearVelocity=true;H.linearVelocity.copy(Z.linearVelocity)}else{H.hasLinearVelocity=false}if(Z.angularVelocity){H.hasAngularVelocity=true;H.angularVelocity.copy(Z.angularVelocity)}else{H.hasAngularVelocity=false}this.dispatchEvent(PY)}}}if(H!==null){H.visible=Z!==null}if(Y!==null){Y.visible=W!==null}if(X!==null){X.visible=K!==null}return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===undefined){const $=new Q9;$.matrixAutoUpdate=false;$.visible=false;J.joints[Q.jointName]=$;J.add($)}return J.joints[Q.jointName]}}class PQ extends I0{constructor(){super();this.isScene=true;this.type="Scene";this.background=null;this.environment=null;this.fog=null;this.backgroundBlurriness=0;this.backgroundIntensity=1;this.backgroundRotation=new P8;this.environmentIntensity=1;this.environmentRotation=new P8;this.overrideMaterial=null;if(typeof __THREE_DEVTOOLS__!=="undefined"){__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}}copy(J,Q){super.copy(J,Q);if(J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();this.backgroundBlurriness=J.backgroundBlurriness;this.backgroundIntensity=J.backgroundIntensity;this.backgroundRotation.copy(J.backgroundRotation);this.environmentIntensity=J.environmentIntensity;this.environmentRotation.copy(J.environmentRotation);if(J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();this.matrixAutoUpdate=J.matrixAutoUpdate;return this}toJSON(J){const Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;Q.object.backgroundRotation=this.backgroundRotation.toArray();if(this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;Q.object.environmentRotation=this.environmentRotation.toArray();return Q}}class M8 extends l0{constructor(J=null,Q=1,$=1,Z,W,K,H,Y,X=j0,U=j0,G,E){super(null,K,H,Y,X,U,Z,W,G,E);this.isDataTexture=true;this.image={data:J,width:Q,height:$};this.generateMipmaps=false;this.flipY=false;this.unpackAlignment=1}}class TQ extends i0{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=true;this.meshPerAttribute=Z}copy(J){super.copy(J);this.meshPerAttribute=J.meshPerAttribute;return this}toJSON(){const J=super.toJSON();J.meshPerAttribute=this.meshPerAttribute;J.isInstancedBufferAttribute=true;return J}}var M$=new S;var TY=new S;var SY=new fJ;class _8{constructor(J=new S(1,0,0),Q=0){this.isPlane=true;this.normal=J;this.constant=Q}set(J,Q){this.normal.copy(J);this.constant=Q;return this}setComponents(J,Q,$,Z){this.normal.set(J,Q,$);this.constant=Z;return this}setFromNormalAndCoplanarPoint(J,Q){this.normal.copy(J);this.constant=-Q.dot(this.normal);return this}setFromCoplanarPoints(J,Q,$){const Z=M$.subVectors($,Q).cross(TY.subVectors(J,Q)).normalize();this.setFromNormalAndCoplanarPoint(Z,J);return this}copy(J){this.normal.copy(J.normal);this.constant=J.constant;return this}normalize(){const J=1/this.normal.length();this.normal.multiplyScalar(J);this.constant*=J;return this}negate(){this.constant*=-1;this.normal.negate();return this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){const $=J.delta(M$);const Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0){return Q.copy(J.start)}return null}const W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1){return null}return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){const Q=this.distanceToPoint(J.start);const $=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){const $=Q||SY.getNormalMatrix(J);const Z=this.coplanarPoint(M$).applyMatrix4(J);const W=this.normal.applyMatrix3($).normalize();this.constant=-Z.dot(W);return this}translate(J){this.constant-=J.dot(this.normal);return this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var V9=new g6;var jY=new _J(0.5,0.5);var V7=new S;class SQ{constructor(J=new _8,Q=new _8,$=new _8,Z=new _8,W=new _8,K=new _8){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){const H=this.planes;H[0].copy(J);H[1].copy(Q);H[2].copy($);H[3].copy(Z);H[4].copy(W);H[5].copy(K);return this}copy(J){const Q=this.planes;for(let $=0;$<6;$++){Q[$].copy(J.planes[$])}return this}setFromProjectionMatrix(J,Q=B8,$=false){const Z=this.planes;const W=J.elements;const K=W[0],H=W[1],Y=W[2],X=W[3];const U=W[4],G=W[5],E=W[6],N=W[7];const q=W[8],O=W[9],k=W[10],D=W[11];const F=W[12],L=W[13],V=W[14],R=W[15];Z[0].setComponents(X-K,N-U,D-q,R-F).normalize();Z[1].setComponents(X+K,N+U,D+q,R+F).normalize();Z[2].setComponents(X+H,N+G,D+O,R+L).normalize();Z[3].setComponents(X-H,N-G,D-O,R-L).normalize();if($){Z[4].setComponents(Y,E,k,V).normalize();Z[5].setComponents(X-Y,N-E,D-k,R-V).normalize()}else{Z[4].setComponents(X-Y,N-E,D-k,R-V).normalize();if(Q===B8){Z[5].setComponents(X+Y,N+E,D+k,R+V).normalize()}else if(Q===A6){Z[5].setComponents(Y,E,k,V).normalize()}else{throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q)}}return this}intersectsObject(J){if(J.boundingSphere!==undefined){if(J.boundingSphere===null)J.computeBoundingSphere();V9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{const Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();V9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(V9)}intersectsSprite(J){V9.center.set(0,0,0);const Q=jY.distanceTo(J.center);V9.radius=0.7071067811865476+Q;V9.applyMatrix4(J.matrixWorld);return this.intersectsSphere(V9)}intersectsSphere(J){const Q=this.planes;const $=J.center;const Z=-J.radius;for(let W=0;W<6;W++){const K=Q[W].distanceToPoint($);if(K<Z){return false}}return true}intersectsBox(J){const Q=this.planes;for(let $=0;$<6;$++){const Z=Q[$];V7.x=Z.normal.x>0?J.max.x:J.min.x;V7.y=Z.normal.y>0?J.max.y:J.min.y;V7.z=Z.normal.z>0?J.max.z:J.min.z;if(Z.distanceToPoint(V7)<0){return false}}return true}containsPoint(J){const Q=this.planes;for(let $=0;$<6;$++){if(Q[$].distanceToPoint(J)<0){return false}}return true}clone(){return new this.constructor().copy(this)}}class n8 extends l0{constructor(J,Q,$=f0,Z,W,K,H=j0,Y=j0,X,U=k8,G=1){if(U!==k8&&U!==Y9){throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat")}const E={width:J,height:Q,depth:G};super(E,Z,W,K,H,Y,U,$,X);this.isDepthTexture=true;this.flipY=false;this.generateMipmaps=false;this.compareFunction=null}copy(J){super.copy(J);this.source=new x6(Object.assign({},J.image));this.compareFunction=J.compareFunction;return this}toJSON(J){const Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class JZ extends n8{constructor(J,Q=f0,$=K9,Z,W,K=j0,H=j0,Y,X=k8){const U={width:J,height:J,depth:1};const G=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,Y,X);this.image=G;this.isCubeDepthTexture=true;this.isCubeTexture=true}get images(){return this.image}set images(J){this.image=J}}class jQ extends l0{constructor(J=null){super();this.sourceTexture=J;this.isExternalTexture=true}copy(J){super.copy(J);this.sourceTexture=J.sourceTexture;return this}}class A9 extends u0{constructor(J=1,Q=1,$=1,Z=32,W=1,K=false,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry";this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:K,thetaStart:H,thetaLength:Y};const X=this;Z=Math.floor(Z);W=Math.floor(W);const U=[];const G=[];const E=[];const N=[];let q=0;const O=[];const k=$/2;let D=0;F();if(K===false){if(J>0)L(true);if(Q>0)L(false)}this.setIndex(U);this.setAttribute("position",new v0(G,3));this.setAttribute("normal",new v0(E,3));this.setAttribute("uv",new v0(N,2));function F(){const V=new S;const R=new S;let C=0;const M=(Q-J)/$;for(let I=0;I<=W;I++){const T=[];const B=I/W;const _=B*(Q-J)+J;for(let A=0;A<=Z;A++){const y=A/Z;const f=y*Y+H;const j=Math.sin(f);const g=Math.cos(f);R.x=_*j;R.y=-B*$+k;R.z=_*g;G.push(R.x,R.y,R.z);V.set(j,M,g).normalize();E.push(V.x,V.y,V.z);N.push(y,1-B);T.push(q++)}O.push(T)}for(let I=0;I<Z;I++){for(let T=0;T<W;T++){const B=O[T][I];const _=O[T+1][I];const A=O[T+1][I+1];const y=O[T][I+1];if(J>0||T!==0){U.push(B,_,y);C+=3}if(Q>0||T!==W-1){U.push(_,A,y);C+=3}}}X.addGroup(D,C,0);D+=C}function L(V){const R=q;const C=new _J;const M=new S;let I=0;const T=V===true?J:Q;const B=V===true?1:-1;for(let A=1;A<=Z;A++){G.push(0,k*B,0);E.push(0,B,0);N.push(0.5,0.5);q++}const _=q;for(let A=0;A<=Z;A++){const y=A/Z;const f=y*Y+H;const j=Math.cos(f);const g=Math.sin(f);M.x=T*g;M.y=k*B;M.z=T*j;G.push(M.x,M.y,M.z);E.push(0,B,0);C.x=j*0.5+0.5;C.y=g*0.5*B+0.5;N.push(C.x,C.y);q++}for(let A=0;A<Z;A++){const y=R+A;const f=_+A;if(V===true){U.push(f,f+1,y)}else{U.push(f+1,f,y)}I+=3}X.addGroup(D,I,V===true?1:2);D+=I}}copy(J){super.copy(J);this.parameters=Object.assign({},J.parameters);return this}static fromJSON(J){return new A9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class d6 extends A9{constructor(J=1,Q=1,$=32,Z=1,W=false,K=0,H=Math.PI*2){super(0,J,Q,$,Z,W,K,H);this.type="ConeGeometry";this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:W,thetaStart:K,thetaLength:H}}static fromJSON(J){return new d6(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class E9 extends u0{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry";this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};const W=J/2;const K=Q/2;const H=Math.floor($);const Y=Math.floor(Z);const X=H+1;const U=Y+1;const G=J/H;const E=Q/Y;const N=[];const q=[];const O=[];const k=[];for(let D=0;D<U;D++){const F=D*E-K;for(let L=0;L<X;L++){const V=L*G-W;q.push(V,-F,0);O.push(0,0,1);k.push(L/H);k.push(1-D/Y)}}for(let D=0;D<Y;D++){for(let F=0;F<H;F++){const L=F+X*D;const V=F+X*(D+1);const R=F+1+X*(D+1);const C=F+1+X*D;N.push(L,V,C);N.push(V,R,C)}}this.setIndex(N);this.setAttribute("position",new v0(q,3));this.setAttribute("normal",new v0(O,3));this.setAttribute("uv",new v0(k,2))}copy(J){super.copy(J);this.parameters=Object.assign({},J.parameters);return this}static fromJSON(J){return new E9(J.width,J.height,J.widthSegments,J.heightSegments)}}class P9 extends u0{constructor(J=1,Q=32,$=16,Z=0,W=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry";this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:W,thetaStart:K,thetaLength:H};Q=Math.max(3,Math.floor(Q));$=Math.max(2,Math.floor($));const Y=Math.min(K+H,Math.PI);let X=0;const U=[];const G=new S;const E=new S;const N=[];const q=[];const O=[];const k=[];for(let D=0;D<=$;D++){const F=[];const L=D/$;let V=0;if(D===0&&K===0){V=0.5/Q}else if(D===$&&Y===Math.PI){V=-0.5/Q}for(let R=0;R<=Q;R++){const C=R/Q;G.x=-J*Math.cos(Z+C*W)*Math.sin(K+L*H);G.y=J*Math.cos(K+L*H);G.z=J*Math.sin(Z+C*W)*Math.sin(K+L*H);q.push(G.x,G.y,G.z);E.copy(G).normalize();O.push(E.x,E.y,E.z);k.push(C+V,1-L);F.push(X++)}U.push(F)}for(let D=0;D<$;D++){for(let F=0;F<Q;F++){const L=U[D][F+1];const V=U[D][F];const R=U[D+1][F];const C=U[D+1][F+1];if(D!==0||K>0)N.push(L,V,C);if(D!==$-1||Y<Math.PI)N.push(V,R,C)}}this.setIndex(N);this.setAttribute("position",new v0(q,3));this.setAttribute("normal",new v0(O,3));this.setAttribute("uv",new v0(k,2))}copy(J){super.copy(J);this.parameters=Object.assign({},J.parameters);return this}static fromJSON(J){return new P9(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class QZ extends y0{constructor(J){super(J);this.isRawShaderMaterial=true;this.type="RawShaderMaterial"}}class $Z extends Y6{constructor(J){super();this.isMeshDepthMaterial=true;this.type="MeshDepthMaterial";this.depthPacking=QK;this.map=null;this.alphaMap=null;this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=false;this.wireframeLinewidth=1;this.setValues(J)}copy(J){super.copy(J);this.depthPacking=J.depthPacking;this.map=J.map;this.alphaMap=J.alphaMap;this.displacementMap=J.displacementMap;this.displacementScale=J.displacementScale;this.displacementBias=J.displacementBias;this.wireframe=J.wireframe;this.wireframeLinewidth=J.wireframeLinewidth;return this}}class ZZ extends Y6{constructor(J){super();this.isMeshDistanceMaterial=true;this.type="MeshDistanceMaterial";this.map=null;this.alphaMap=null;this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.setValues(J)}copy(J){super.copy(J);this.map=J.map;this.alphaMap=J.alphaMap;this.displacementMap=J.displacementMap;this.displacementScale=J.displacementScale;this.displacementBias=J.displacementBias;return this}}function L7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number"){return new Q(J)}return Array.prototype.slice.call(J)}class X6{constructor(J,Q,$,Z){this.parameterPositions=J;this._cachedIndex=0;this.resultBuffer=Z!==undefined?Z:new Q.constructor($);this.sampleValues=Q;this.valueSize=$;this.settings=null;this.DefaultSettings_={}}evaluate(J){const Q=this.parameterPositions;let $=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===undefined){if(J<W)break Z;$=Q.length;this._cachedIndex=$;return this.copySampleValue_($-1)}if($===H)break;W=Z;Z=Q[++$];if(J<Z){break J}}K=Q.length;break Q}if(!(J>=W)){const H=Q[1];if(J<H){$=2;W=H}for(let Y=$-2;;){if(W===undefined){this._cachedIndex=0;return this.copySampleValue_(0)}if($===Y)break;Z=W;W=Q[--$-1];if(J>=W){break J}}K=$;$=0;break Q}break $}while($<K){const H=$+K>>>1;if(J<Q[H]){K=H}else{$=H+1}}Z=Q[$];W=Q[$-1];if(W===undefined){this._cachedIndex=0;return this.copySampleValue_(0)}if(Z===undefined){$=Q.length;this._cachedIndex=$;return this.copySampleValue_($-1)}}this._cachedIndex=$;this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){const Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K){Q[K]=$[W+K]}return Q}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WZ extends X6{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0;this._offsetPrev=-0;this._weightNext=-0;this._offsetNext=-0;this.DefaultSettings_={endingStart:R$,endingEnd:R$}}intervalChanged_(J,Q,$){const Z=this.parameterPositions;let W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===undefined){switch(this.getSettings_().endingStart){case V$:W=J;H=2*Q-$;break;case L$:W=Z.length-2;H=Q+Z[W]-Z[W+1];break;default:W=J;H=$}}if(Y===undefined){switch(this.getSettings_().endingEnd){case V$:K=J;Y=2*$-Q;break;case L$:K=1;Y=$+Z[1]-Z[0];break;default:K=J-1;Y=Q}}const X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H);this._weightNext=X/(Y-$);this._offsetPrev=W*U;this._offsetNext=K*U}interpolate_(J,Q,$,Z){const W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,N=this._weightNext,q=($-Q)/(Z-Q),O=q*q,k=O*q;const D=-E*k+2*E*O-E*q;const F=(1+E)*k+(-1.5-2*E)*O+(-0.5+E)*q+1;const L=(-1-N)*k+(1.5+N)*O+0.5*q;const V=N*k-N*O;for(let R=0;R!==H;++R){W[R]=D*K[U+R]+F*K[X+R]+L*K[Y+R]+V*K[G+R]}return W}}class KZ extends X6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){const W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),G=1-U;for(let E=0;E!==H;++E){W[E]=K[X+E]*G+K[Y+E]*U}return W}}class HZ extends X6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class R8{constructor(J,Q,$,Z){if(J===undefined)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===undefined||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J;this.times=L7(Q,this.TimeBufferType);this.values=L7($,this.ValueBufferType);this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){const Q=J.constructor;let $;if(Q.toJSON!==this.toJSON){$=Q.toJSON(J)}else{$={name:J.name,times:L7(J.times,Array),values:L7(J.values,Array)};const Z=J.getInterpolation();if(Z!==J.DefaultInterpolation){$.interpolation=Z}}$.type=J.ValueTypeName;return $}InterpolantFactoryMethodDiscrete(J){return new HZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new KZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new WZ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case w6:Q=this.InterpolantFactoryMethodDiscrete;break;case I7:Q=this.InterpolantFactoryMethodLinear;break;case z7:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===undefined){const $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===undefined){if(J!==this.DefaultInterpolation){this.setInterpolation(this.DefaultInterpolation)}else{throw new Error($)}}hJ("KeyframeTrack:",$);return this}this.createInterpolant=Q;return this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return w6;case this.InterpolantFactoryMethodLinear:return I7;case this.InterpolantFactoryMethodSmooth:return z7}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){const Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$){Q[$]+=J}}return this}scale(J){if(J!==1){const Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$){Q[$]*=J}}return this}trim(J,Q){const $=this.times,Z=$.length;let W=0,K=Z-1;while(W!==Z&&$[W]<J){++W}while(K!==-1&&$[K]>Q){--K}++K;if(W!==0||K!==Z){if(W>=K){K=Math.max(K,1);W=K-1}const H=this.getValueSize();this.times=$.slice(W,K);this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=true;const Q=this.getValueSize();if(Q-Math.floor(Q)!==0){dJ("KeyframeTrack: Invalid value size in track.",this);J=false}const $=this.times,Z=this.values,W=$.length;if(W===0){dJ("KeyframeTrack: Track is empty.",this);J=false}let K=null;for(let H=0;H!==W;H++){const Y=$[H];if(typeof Y==="number"&&isNaN(Y)){dJ("KeyframeTrack: Time is not a valid number.",this,H,Y);J=false;break}if(K!==null&&K>Y){dJ("KeyframeTrack: Out of order keys.",this,H,Y,K);J=false;break}K=Y}if(Z!==undefined){if(nH(Z)){for(let H=0,Y=Z.length;H!==Y;++H){const X=Z[H];if(isNaN(X)){dJ("KeyframeTrack: Value is not a valid number.",this,H,X);J=false;break}}}}return J}optimize(){const J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===z7,W=J.length-1;let K=1;for(let H=1;H<W;++H){let Y=false;const X=J[H];const U=J[H+1];if(X!==U&&(H!==1||X!==J[0])){if(!Z){const G=H*$,E=G-$,N=G+$;for(let q=0;q!==$;++q){const O=Q[G+q];if(O!==Q[E+q]||O!==Q[N+q]){Y=true;break}}}else{Y=true}}if(Y){if(H!==K){J[K]=J[H];const G=H*$,E=K*$;for(let N=0;N!==$;++N){Q[E+N]=Q[G+N]}}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X){Q[Y+X]=Q[H+X]}++K}if(K!==J.length){this.times=J.slice(0,K);this.values=Q.slice(0,K*$)}else{this.times=J;this.values=Q}return this}clone(){const J=this.times.slice();const Q=this.values.slice();const $=this.constructor;const Z=new $(this.name,J,Q);Z.createInterpolant=this.createInterpolant;return Z}}R8.prototype.ValueTypeName="";R8.prototype.TimeBufferType=Float32Array;R8.prototype.ValueBufferType=Float32Array;R8.prototype.DefaultInterpolation=I7;class T9 extends R8{constructor(J,Q,$){super(J,Q,$)}}T9.prototype.ValueTypeName="bool";T9.prototype.ValueBufferType=Array;T9.prototype.DefaultInterpolation=w6;T9.prototype.InterpolantFactoryMethodLinear=undefined;T9.prototype.InterpolantFactoryMethodSmooth=undefined;class YZ extends R8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}YZ.prototype.ValueTypeName="color";class XZ extends R8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}XZ.prototype.ValueTypeName="number";class UZ extends X6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){const W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q);let X=J*H;for(let U=X+H;X!==U;X+=4){G0.slerpFlat(W,0,K,X-H,K,X,Y)}return W}}class yQ extends R8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new UZ(this.times,this.values,this.getValueSize(),J)}}yQ.prototype.ValueTypeName="quaternion";yQ.prototype.InterpolantFactoryMethodSmooth=undefined;class S9 extends R8{constructor(J,Q,$){super(J,Q,$)}}S9.prototype.ValueTypeName="string";S9.prototype.ValueBufferType=Array;S9.prototype.DefaultInterpolation=w6;S9.prototype.InterpolantFactoryMethodLinear=undefined;S9.prototype.InterpolantFactoryMethodSmooth=undefined;class GZ extends R8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}GZ.prototype.ValueTypeName="vector";class EZ{constructor(J,Q,$){const Z=this;let W=false;let K=0;let H=0;let Y=undefined;const X=[];this.onStart=undefined;this.onLoad=J;this.onProgress=Q;this.onError=$;this._abortController=null;this.itemStart=function(U){H++;if(W===false){if(Z.onStart!==undefined){Z.onStart(U,K,H)}}W=true};this.itemEnd=function(U){K++;if(Z.onProgress!==undefined){Z.onProgress(U,K,H)}if(K===H){W=false;if(Z.onLoad!==undefined){Z.onLoad()}}};this.itemError=function(U){if(Z.onError!==undefined){Z.onError(U)}};this.resolveURL=function(U){if(Y){return Y(U)}return U};this.setURLModifier=function(U){Y=U;return this};this.addHandler=function(U,G){X.push(U,G);return this};this.removeHandler=function(U){const G=X.indexOf(U);if(G!==-1){X.splice(G,2)}return this};this.getHandler=function(U){for(let G=0,E=X.length;G<E;G+=2){const N=X[G];const q=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U)){return q}}return null};this.abort=function(){this.abortController.abort();this._abortController=null;return this}}get abortController(){if(!this._abortController){this._abortController=new AbortController}return this._abortController}}var DK=new EZ;class NZ{constructor(J){this.manager=J!==undefined?J:DK;this.crossOrigin="anonymous";this.withCredentials=false;this.path="";this.resourcePath="";this.requestHeader={}}load(){}loadAsync(J,Q){const $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){this.crossOrigin=J;return this}setWithCredentials(J){this.withCredentials=J;return this}setPath(J){this.path=J;return this}setResourcePath(J){this.resourcePath=J;return this}setRequestHeader(J){this.requestHeader=J;return this}abort(){return this}}NZ.DEFAULT_MATERIAL_NAME="__DEFAULT";var $q=new WeakMap;class j9 extends wQ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=true;this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=J;this.right=Q;this.top=$;this.bottom=Z;this.near=W;this.far=K;this.updateProjectionMatrix()}copy(J,Q){super.copy(J,Q);this.left=J.left;this.right=J.right;this.top=J.top;this.bottom=J.bottom;this.near=J.near;this.far=J.far;this.zoom=J.zoom;this.view=J.view===null?null:Object.assign({},J.view);return this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null){this.view={enabled:true,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}}this.view.enabled=true;this.view.fullWidth=J;this.view.fullHeight=Q;this.view.offsetX=$;this.view.offsetY=Z;this.view.width=W;this.view.height=K;this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null){this.view.enabled=false}this.updateProjectionMatrix()}updateProjectionMatrix(){const J=(this.right-this.left)/(2*this.zoom);const Q=(this.top-this.bottom)/(2*this.zoom);const $=(this.right+this.left)/2;const Z=(this.top+this.bottom)/2;let W=$-J;let K=$+J;let H=Z+Q;let Y=Z-Q;if(this.view!==null&&this.view.enabled){const X=(this.right-this.left)/this.view.fullWidth/this.zoom;const U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX;K=W+X*this.view.width;H-=U*this.view.offsetY;Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth);this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){const Q=super.toJSON(J);Q.object.zoom=this.zoom;Q.object.left=this.left;Q.object.right=this.right;Q.object.top=this.top;Q.object.bottom=this.bottom;Q.object.near=this.near;Q.object.far=this.far;if(this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class vQ extends u0{constructor(){super();this.isInstancedBufferGeometry=true;this.type="InstancedBufferGeometry";this.instanceCount=Infinity}copy(J){super.copy(J);this.instanceCount=J.instanceCount;return this}toJSON(){const J=super.toJSON();J.instanceCount=this.instanceCount;J.isInstancedBufferGeometry=true;return J}}var Zq=new WeakMap;class qZ extends s0{constructor(J=[]){super();this.isArrayCamera=true;this.isMultiViewCamera=false;this.cameras=J}}var DZ="\\[\\]\\.:\\/";var yY=new RegExp("["+DZ+"]","g");var OZ="[^"+DZ+"]";var vY="[^"+DZ.replace("\\.","")+"]";var bY=/((?:WC+[\/:])*)/.source.replace("WC",OZ);var fY=/(WCOD+)?/.source.replace("WCOD",vY);var hY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",OZ);var xY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",OZ);var gY=new RegExp(""+"^"+bY+fY+hY+xY+"$");var pY=["material","materials","bones","map"];class OK{constructor(J,Q,$){const Z=$||U0.parseTrackName(Q);this._targetGroup=J;this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();const $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==undefined)Z.getValue(J,Q)}setValue(J,Q){const $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z){$[Z].setValue(J,Q)}}bind(){const J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q){J[Q].bind()}}unbind(){const J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q){J[Q].unbind()}}}class U0{constructor(J,Q,$){this.path=Q;this.parsedPath=$||U0.parseTrackName(Q);this.node=U0.findNode(J,this.parsedPath.nodeName);this.rootNode=J;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup)){return new U0(J,Q,$)}else{return new U0.Composite(J,Q,$)}}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(yY,"")}static parseTrackName(J){const Q=gY.exec(J);if(Q===null){throw new Error("PropertyBinding: Cannot parse trackName: "+J)}const $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]};const Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==undefined&&Z!==-1){const W=$.nodeName.substring(Z+1);if(pY.indexOf(W)!==-1){$.nodeName=$.nodeName.substring(0,Z);$.objectName=W}}if($.propertyName===null||$.propertyName.length===0){throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J)}return $}static findNode(J,Q){if(Q===undefined||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid){return J}if(J.skeleton){const $=J.skeleton.getBoneByName(Q);if($!==undefined){return $}}if(J.children){const $=function(W){for(let K=0;K<W.length;K++){const H=W[K];if(H.name===Q||H.uuid===Q){return H}const Y=$(H.children);if(Y)return Y}return null};const Z=$(J.children);if(Z){return Z}}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){const $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z){J[Q++]=$[Z]}}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q];this.targetObject.needsUpdate=true}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q];this.targetObject.matrixWorldNeedsUpdate=true}_setValue_array(J,Q){const $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z){$[Z]=J[Q++]}}_setValue_array_setNeedsUpdate(J,Q){const $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z){$[Z]=J[Q++]}this.targetObject.needsUpdate=true}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){const $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z){$[Z]=J[Q++]}this.targetObject.matrixWorldNeedsUpdate=true}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q];this.targetObject.needsUpdate=true}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q];this.targetObject.matrixWorldNeedsUpdate=true}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q);this.targetObject.needsUpdate=true}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q);this.targetObject.matrixWorldNeedsUpdate=true}_getValue_unbound(J,Q){this.bind();this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind();this.setValue(J,Q)}bind(){let J=this.node;const Q=this.parsedPath;const $=Q.objectName;const Z=Q.propertyName;let W=Q.propertyIndex;if(!J){J=U0.findNode(this.rootNode,Q.nodeName);this.node=J}this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(!J){hJ("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){dJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){dJ("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){dJ("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++){if(J[U].name===X){X=U;break}}break;case"map":if("map"in J){J=J.map;break}if(!J.material){dJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){dJ("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===undefined){dJ("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==undefined){if(J[X]===undefined){dJ("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}const K=J[Z];if(K===undefined){const X=Q.nodeName;dJ("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;this.targetObject=J;if(J.isMaterial===true){H=this.Versioning.NeedsUpdate}else if(J.isObject3D===true){H=this.Versioning.MatrixWorldNeedsUpdate}let Y=this.BindingType.Direct;if(W!==undefined){if(Z==="morphTargetInfluences"){if(!J.geometry){dJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){dJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==undefined){W=J.morphTargetDictionary[W]}}Y=this.BindingType.ArrayElement;this.resolvedProperty=K;this.propertyIndex=W}else if(K.fromArray!==undefined&&K.toArray!==undefined){Y=this.BindingType.HasFromToArray;this.resolvedProperty=K}else if(Array.isArray(K)){Y=this.BindingType.EntireArray;this.resolvedProperty=K}else{this.propertyName=Z}this.getValue=this.GetterByBindingType[Y];this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}}U0.Composite=OK;U0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};U0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};U0.prototype.GetterByBindingType=[U0.prototype._getValue_direct,U0.prototype._getValue_array,U0.prototype._getValue_arrayElement,U0.prototype._getValue_toArray];U0.prototype.SetterByBindingTypeAndVersioning=[[U0.prototype._setValue_direct,U0.prototype._setValue_direct_setNeedsUpdate,U0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[U0.prototype._setValue_array,U0.prototype._setValue_array_setNeedsUpdate,U0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[U0.prototype._setValue_arrayElement,U0.prototype._setValue_arrayElement_setNeedsUpdate,U0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[U0.prototype._setValue_fromArray,U0.prototype._setValue_fromArray_setNeedsUpdate,U0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wq=new Float32Array(1);class l6{constructor(J=1,Q=0,$=0){this.radius=J;this.phi=Q;this.theta=$}set(J,Q,$){this.radius=J;this.phi=Q;this.theta=$;return this}copy(J){this.radius=J.radius;this.phi=J.phi;this.theta=J.theta;return this}makeSafe(){const J=0.000001;this.phi=iJ(this.phi,J,Math.PI-J);return this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){this.radius=Math.sqrt(J*J+Q*Q+$*$);if(this.radius===0){this.theta=0;this.phi=0}else{this.theta=Math.atan2(J,$);this.phi=Math.acos(iJ(Q/this.radius,-1,1))}return this}clone(){return new this.constructor().copy(this)}}function FZ(J,Q,$,Z){const W=mY(Z);switch($){case m$:return J*Q;case l$:return J*Q/W.components*W.byteLength;case K6:return J*Q/W.components*W.byteLength;case u8:return J*Q*2/W.components*W.byteLength;case m7:return J*Q*2/W.components*W.byteLength;case d$:return J*Q*3/W.components*W.byteLength;case h0:return J*Q*4/W.components*W.byteLength;case X9:return J*Q*4/W.components*W.byteLength;case y6:case v6:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case b6:case f6:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case l7:case c7:return Math.max(J,16)*Math.max(Q,8)/4;case d7:case u7:return Math.max(J,8)*Math.max(Q,8)/2;case n7:case s7:case o7:case a7:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case i7:case r7:case t7:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case e7:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case JQ:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case QQ:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case $Q:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case ZQ:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case WQ:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case KQ:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case HQ:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case YQ:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case XQ:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case UQ:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case GQ:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case EQ:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case NQ:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case qQ:case DQ:case OQ:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case FQ:case kQ:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case MQ:case RQ:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${$} format.`)}function mY(J){switch(J){case a0:case h$:return{byteLength:1,components:1};case Z6:case x$:case U8:return{byteLength:2,components:1};case g7:case p7:return{byteLength:2,components:4};case f0:case x7:case Q8:return{byteLength:4,components:1};case g$:case p$:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined"){__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:w7}}))}if(typeof window!=="undefined"){if(window.__THREE__){hJ("WARNING: Multiple instances of Three.js being imported.")}else{window.__THREE__=w7}}function xK(){let J=null;let Q=false;let $=null;let Z=null;function W(K,H){$(K,H);Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===true)return;if($===null)return;Z=J.requestAnimationFrame(W);Q=true},stop:function(){J.cancelAnimationFrame(Z);Q=false},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function dY(J){const Q=new WeakMap;function $(Y,X){const U=Y.array;const G=Y.usage;const E=U.byteLength;const N=J.createBuffer();J.bindBuffer(X,N);J.bufferData(X,U,G);Y.onUploadCallback();let q;if(U instanceof Float32Array){q=J.FLOAT}else if(typeof Float16Array!=="undefined"&&U instanceof Float16Array){q=J.HALF_FLOAT}else if(U instanceof Uint16Array){if(Y.isFloat16BufferAttribute){q=J.HALF_FLOAT}else{q=J.UNSIGNED_SHORT}}else if(U instanceof Int16Array){q=J.SHORT}else if(U instanceof Uint32Array){q=J.UNSIGNED_INT}else if(U instanceof Int32Array){q=J.INT}else if(U instanceof Int8Array){q=J.BYTE}else if(U instanceof Uint8Array){q=J.UNSIGNED_BYTE}else if(U instanceof Uint8ClampedArray){q=J.UNSIGNED_BYTE}else{throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U)}return{buffer:N,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function Z(Y,X,U){const G=X.array;const E=X.updateRanges;J.bindBuffer(U,Y);if(E.length===0){J.bufferSubData(U,0,G)}else{E.sort((q,O)=>q.start-O.start);let N=0;for(let q=1;q<E.length;q++){const O=E[N];const k=E[q];if(k.start<=O.start+O.count+1){O.count=Math.max(O.count,k.start+k.count-O.start)}else{++N;E[N]=k}}E.length=N+1;for(let q=0,O=E.length;q<O;q++){const k=E[q];J.bufferSubData(U,k.start*G.BYTES_PER_ELEMENT,G,k.start,k.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;const X=Q.get(Y);if(X){J.deleteBuffer(X.buffer);Q.delete(Y)}}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){const G=Q.get(Y);if(!G||G.version<Y.version){Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version})}return}const U=Q.get(Y);if(U===undefined){Q.set(Y,$(Y,X))}else if(U.version<Y.version){if(U.size!==Y.array.byteLength){throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.")}Z(U.buffer,Y,X);U.version=Y.version}}return{get:W,remove:K,update:H}}var lY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`;var uY=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`;var cY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`;var nY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;var sY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`;var iY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`;var oY=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`;var aY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`;var rY=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`;var tY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`;var eY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`;var JX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`;var QX=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`;var $X=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`;var ZX=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`;var WX=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`;var KX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`;var HX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`;var YX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`;var XX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`;var UX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`;var GX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`;var EX=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`;var NX=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`;var qX=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`;var DX=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`;var OX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`;var FX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`;var kX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`;var MX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`;var RX="gl_FragColor = linearToOutputTexel( gl_FragColor );";var VX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`;var LX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`;var zX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`;var _X=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`;var BX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`;var IX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`;var wX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`;var CX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`;var AX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var PX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`;var TX=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`;var SX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`;var jX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`;var yX=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`;var vX=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`;var bX=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`;var fX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`;var hX=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`;var xX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`;var gX=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`;var pX=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`;var mX=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`;var dX=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;var lX=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`;var uX=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`;var cX=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`;var nX=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;var sX=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;var iX=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`;var oX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`;var aX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`;var rX=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`;var tX=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;var eX=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`;var JU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`;var QU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`;var $U=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`;var ZU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;var WU=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`;var KU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;var HU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`;var YU=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`;var XU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;var UU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;var GU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`;var EU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`;var NU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`;var qU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`;var DU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`;var OU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`;var FU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`;var kU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`;var MU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`;var RU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`;var VU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`;var LU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`;var zU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`;var _U=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`;var BU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`;var IU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`;var wU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`;var CU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`;var AU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`;var PU=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`;var TU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`;var SU=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`;var jU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`;var yU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`;var vU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`;var bU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`;var fU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`;var hU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`;var xU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;var gU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;var pU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var mU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;var dU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`;var lU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;var uU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;var cU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;var nU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;var sU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;var iU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`;var oU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`;var aU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;var rU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`;var tU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`;var eU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;var JG=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;var QG=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;var $G=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`;var ZG=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;var WG=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;var KG=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;var HG=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`;var YG=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;var XG=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`;var UG=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`;var GG=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;var EG=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;var NG=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`;var qG=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;var DG=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;var OG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;var FG=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`;var kG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;var MG=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;var RG=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;var VG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;var LG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;var sJ={alphahash_fragment:lY,alphahash_pars_fragment:uY,alphamap_fragment:cY,alphamap_pars_fragment:nY,alphatest_fragment:sY,alphatest_pars_fragment:iY,aomap_fragment:oY,aomap_pars_fragment:aY,batching_pars_vertex:rY,batching_vertex:tY,begin_vertex:eY,beginnormal_vertex:JX,bsdfs:QX,iridescence_fragment:$X,bumpmap_pars_fragment:ZX,clipping_planes_fragment:WX,clipping_planes_pars_fragment:KX,clipping_planes_pars_vertex:HX,clipping_planes_vertex:YX,color_fragment:XX,color_pars_fragment:UX,color_pars_vertex:GX,color_vertex:EX,common:NX,cube_uv_reflection_fragment:qX,defaultnormal_vertex:DX,displacementmap_pars_vertex:OX,displacementmap_vertex:FX,emissivemap_fragment:kX,emissivemap_pars_fragment:MX,colorspace_fragment:RX,colorspace_pars_fragment:VX,envmap_fragment:LX,envmap_common_pars_fragment:zX,envmap_pars_fragment:_X,envmap_pars_vertex:BX,envmap_physical_pars_fragment:bX,envmap_vertex:IX,fog_vertex:wX,fog_pars_vertex:CX,fog_fragment:AX,fog_pars_fragment:PX,gradientmap_pars_fragment:TX,lightmap_pars_fragment:SX,lights_lambert_fragment:jX,lights_lambert_pars_fragment:yX,lights_pars_begin:vX,lights_toon_fragment:fX,lights_toon_pars_fragment:hX,lights_phong_fragment:xX,lights_phong_pars_fragment:gX,lights_physical_fragment:pX,lights_physical_pars_fragment:mX,lights_fragment_begin:dX,lights_fragment_maps:lX,lights_fragment_end:uX,logdepthbuf_fragment:cX,logdepthbuf_pars_fragment:nX,logdepthbuf_pars_vertex:sX,logdepthbuf_vertex:iX,map_fragment:oX,map_pars_fragment:aX,map_particle_fragment:rX,map_particle_pars_fragment:tX,metalnessmap_fragment:eX,metalnessmap_pars_fragment:JU,morphinstance_vertex:QU,morphcolor_vertex:$U,morphnormal_vertex:ZU,morphtarget_pars_vertex:WU,morphtarget_vertex:KU,normal_fragment_begin:HU,normal_fragment_maps:YU,normal_pars_fragment:XU,normal_pars_vertex:UU,normal_vertex:GU,normalmap_pars_fragment:EU,clearcoat_normal_fragment_begin:NU,clearcoat_normal_fragment_maps:qU,clearcoat_pars_fragment:DU,iridescence_pars_fragment:OU,opaque_fragment:FU,packing:kU,premultiplied_alpha_fragment:MU,project_vertex:RU,dithering_fragment:VU,dithering_pars_fragment:LU,roughnessmap_fragment:zU,roughnessmap_pars_fragment:_U,shadowmap_pars_fragment:BU,shadowmap_pars_vertex:IU,shadowmap_vertex:wU,shadowmask_pars_fragment:CU,skinbase_vertex:AU,skinning_pars_vertex:PU,skinning_vertex:TU,skinnormal_vertex:SU,specularmap_fragment:jU,specularmap_pars_fragment:yU,tonemapping_fragment:vU,tonemapping_pars_fragment:bU,transmission_fragment:fU,transmission_pars_fragment:hU,uv_pars_fragment:xU,uv_pars_vertex:gU,uv_vertex:pU,worldpos_vertex:mU,background_vert:dU,background_frag:lU,backgroundCube_vert:uU,backgroundCube_frag:cU,cube_vert:nU,cube_frag:sU,depth_vert:iU,depth_frag:oU,distance_vert:aU,distance_frag:rU,equirect_vert:tU,equirect_frag:eU,linedashed_vert:JG,linedashed_frag:QG,meshbasic_vert:$G,meshbasic_frag:ZG,meshlambert_vert:WG,meshlambert_frag:KG,meshmatcap_vert:HG,meshmatcap_frag:YG,meshnormal_vert:XG,meshnormal_frag:UG,meshphong_vert:GG,meshphong_frag:EG,meshphysical_vert:NG,meshphysical_frag:qG,meshtoon_vert:DG,meshtoon_frag:OG,points_vert:FG,points_frag:kG,shadow_vert:MG,shadow_frag:RG,sprite_vert:VG,sprite_frag:LG};var FJ={common:{diffuse:{value:new aJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fJ},alphaMap:{value:null},alphaMapTransform:{value:new fJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fJ}},envmap:{envMap:{value:null},envMapRotation:{value:new fJ},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fJ},normalScale:{value:new _J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new aJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new aJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fJ},alphaTest:{value:0},uvTransform:{value:new fJ}},sprite:{diffuse:{value:new aJ(16777215)},opacity:{value:1},center:{value:new _J(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fJ},alphaMap:{value:null},alphaMapTransform:{value:new fJ},alphaTest:{value:0}}};var y8={basic:{uniforms:c0([FJ.common,FJ.specularmap,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.fog]),vertexShader:sJ.meshbasic_vert,fragmentShader:sJ.meshbasic_frag},lambert:{uniforms:c0([FJ.common,FJ.specularmap,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.fog,FJ.lights,{emissive:{value:new aJ(0)}}]),vertexShader:sJ.meshlambert_vert,fragmentShader:sJ.meshlambert_frag},phong:{uniforms:c0([FJ.common,FJ.specularmap,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.fog,FJ.lights,{emissive:{value:new aJ(0)},specular:{value:new aJ(1118481)},shininess:{value:30}}]),vertexShader:sJ.meshphong_vert,fragmentShader:sJ.meshphong_frag},standard:{uniforms:c0([FJ.common,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.roughnessmap,FJ.metalnessmap,FJ.fog,FJ.lights,{emissive:{value:new aJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:sJ.meshphysical_vert,fragmentShader:sJ.meshphysical_frag},toon:{uniforms:c0([FJ.common,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.gradientmap,FJ.fog,FJ.lights,{emissive:{value:new aJ(0)}}]),vertexShader:sJ.meshtoon_vert,fragmentShader:sJ.meshtoon_frag},matcap:{uniforms:c0([FJ.common,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.fog,{matcap:{value:null}}]),vertexShader:sJ.meshmatcap_vert,fragmentShader:sJ.meshmatcap_frag},points:{uniforms:c0([FJ.points,FJ.fog]),vertexShader:sJ.points_vert,fragmentShader:sJ.points_frag},dashed:{uniforms:c0([FJ.common,FJ.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:sJ.linedashed_vert,fragmentShader:sJ.linedashed_frag},depth:{uniforms:c0([FJ.common,FJ.displacementmap]),vertexShader:sJ.depth_vert,fragmentShader:sJ.depth_frag},normal:{uniforms:c0([FJ.common,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,{opacity:{value:1}}]),vertexShader:sJ.meshnormal_vert,fragmentShader:sJ.meshnormal_frag},sprite:{uniforms:c0([FJ.sprite,FJ.fog]),vertexShader:sJ.sprite_vert,fragmentShader:sJ.sprite_frag},background:{uniforms:{uvTransform:{value:new fJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:sJ.background_vert,fragmentShader:sJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fJ}},vertexShader:sJ.backgroundCube_vert,fragmentShader:sJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:sJ.cube_vert,fragmentShader:sJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:sJ.equirect_vert,fragmentShader:sJ.equirect_frag},distance:{uniforms:c0([FJ.common,FJ.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:sJ.distance_vert,fragmentShader:sJ.distance_frag},shadow:{uniforms:c0([FJ.lights,FJ.fog,{color:{value:new aJ(0)},opacity:{value:1}}]),vertexShader:sJ.shadow_vert,fragmentShader:sJ.shadow_frag}};y8.physical={uniforms:c0([y8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fJ},clearcoatNormalScale:{value:new _J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fJ},sheen:{value:0},sheenColor:{value:new aJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fJ},transmissionSamplerSize:{value:new _J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fJ},attenuationDistance:{value:0},attenuationColor:{value:new aJ(0)},specularColor:{value:new aJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fJ},anisotropyVector:{value:new _J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fJ}}]),vertexShader:sJ.meshphysical_vert,fragmentShader:sJ.meshphysical_frag};var bQ={r:0,b:0,g:0};var y9=new P8;var zG=new xJ;function _G(J,Q,$,Z,W,K,H){const Y=new aJ(0);let X=K===true?0:1;let U;let G;let E=null;let N=0;let q=null;function O(V){let R=V.isScene===true?V.background:null;if(R&&R.isTexture){const C=V.backgroundBlurriness>0;R=(C?$:Q).get(R)}return R}function k(V){let R=false;const C=O(V);if(C===null){F(Y,X)}else if(C&&C.isColor){F(C,1);R=true}const M=J.xr.getEnvironmentBlendMode();if(M==="additive"){Z.buffers.color.setClear(0,0,0,1,H)}else if(M==="alpha-blend"){Z.buffers.color.setClear(0,0,0,0,H)}if(J.autoClear||R){Z.buffers.depth.setTest(true);Z.buffers.depth.setMask(true);Z.buffers.color.setMask(true);J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}}function D(V,R){const C=O(R);if(C&&(C.isCubeTexture||C.mapping===S6)){if(G===undefined){G=new M0(new G9(1,1,1),new y0({name:"BackgroundCubeMaterial",uniforms:C9(y8.backgroundCube.uniforms),vertexShader:y8.backgroundCube.vertexShader,fragmentShader:y8.backgroundCube.fragmentShader,side:o0,depthTest:false,depthWrite:false,fog:false,allowOverride:false}));G.geometry.deleteAttribute("normal");G.geometry.deleteAttribute("uv");G.onBeforeRender=function(M,I,T){this.matrixWorld.copyPosition(T.matrixWorld)};Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}});W.update(G)}y9.copy(R.backgroundRotation);y9.x*=-1;y9.y*=-1;y9.z*=-1;if(C.isCubeTexture&&C.isRenderTargetTexture===false){y9.y*=-1;y9.z*=-1}G.material.uniforms.envMap.value=C;G.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===false?-1:1;G.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness;G.material.uniforms.backgroundIntensity.value=R.backgroundIntensity;G.material.uniforms.backgroundRotation.value.setFromMatrix4(zG.makeRotationFromEuler(y9));G.material.toneMapped=rJ.getTransfer(C.colorSpace)!==Z0;if(E!==C||N!==C.version||q!==J.toneMapping){G.material.needsUpdate=true;E=C;N=C.version;q=J.toneMapping}G.layers.enableAll();V.unshift(G,G.geometry,G.material,0,0,null)}else if(C&&C.isTexture){if(U===undefined){U=new M0(new E9(2,2),new y0({name:"BackgroundMaterial",uniforms:C9(y8.background.uniforms),vertexShader:y8.background.vertexShader,fragmentShader:y8.background.fragmentShader,side:F8,depthTest:false,depthWrite:false,fog:false,allowOverride:false}));U.geometry.deleteAttribute("normal");Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}});W.update(U)}U.material.uniforms.t2D.value=C;U.material.uniforms.backgroundIntensity.value=R.backgroundIntensity;U.material.toneMapped=rJ.getTransfer(C.colorSpace)!==Z0;if(C.matrixAutoUpdate===true){C.updateMatrix()}U.material.uniforms.uvTransform.value.copy(C.matrix);if(E!==C||N!==C.version||q!==J.toneMapping){U.material.needsUpdate=true;E=C;N=C.version;q=J.toneMapping}U.layers.enableAll();V.unshift(U,U.geometry,U.material,0,0,null)}}function F(V,R){V.getRGB(bQ,t$(J));Z.buffers.color.setClear(bQ.r,bQ.g,bQ.b,R,H)}function L(){if(G!==undefined){G.geometry.dispose();G.material.dispose();G=undefined}if(U!==undefined){U.geometry.dispose();U.material.dispose();U=undefined}}return{getClearColor:function(){return Y},setClearColor:function(V,R=1){Y.set(V);X=R;F(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(V){X=V;F(Y,X)},render:k,addToRenderList:D,dispose:L}}function BG(J,Q){const $=J.getParameter(J.MAX_VERTEX_ATTRIBS);const Z={};const W=N(null);let K=W;let H=false;function Y(_,A,y,f,j){let g=false;const x=E(f,y,A);if(K!==x){K=x;U(K.object)}g=q(_,f,y,j);if(g)O(_,f,y,j);if(j!==null){Q.update(j,J.ELEMENT_ARRAY_BUFFER)}if(g||H){H=false;R(_,A,y,f);if(j!==null){J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(j).buffer)}}}function X(){return J.createVertexArray()}function U(_){return J.bindVertexArray(_)}function G(_){return J.deleteVertexArray(_)}function E(_,A,y){const f=y.wireframe===true;let j=Z[_.id];if(j===undefined){j={};Z[_.id]=j}let g=j[A.id];if(g===undefined){g={};j[A.id]=g}let x=g[f];if(x===undefined){x=N(X());g[f]=x}return x}function N(_){const A=[];const y=[];const f=[];for(let j=0;j<$;j++){A[j]=0;y[j]=0;f[j]=0}return{geometry:null,program:null,wireframe:false,newAttributes:A,enabledAttributes:y,attributeDivisors:f,object:_,attributes:{},index:null}}function q(_,A,y,f){const j=K.attributes;const g=A.attributes;let x=0;const p=y.getAttributes();for(const m in p){const t=p[m];if(t.location>=0){const $J=j[m];let GJ=g[m];if(GJ===undefined){if(m==="instanceMatrix"&&_.instanceMatrix)GJ=_.instanceMatrix;if(m==="instanceColor"&&_.instanceColor)GJ=_.instanceColor}if($J===undefined)return true;if($J.attribute!==GJ)return true;if(GJ&&$J.data!==GJ.data)return true;x++}}if(K.attributesNum!==x)return true;if(K.index!==f)return true;return false}function O(_,A,y,f){const j={};const g=A.attributes;let x=0;const p=y.getAttributes();for(const m in p){const t=p[m];if(t.location>=0){let $J=g[m];if($J===undefined){if(m==="instanceMatrix"&&_.instanceMatrix)$J=_.instanceMatrix;if(m==="instanceColor"&&_.instanceColor)$J=_.instanceColor}const GJ={};GJ.attribute=$J;if($J&&$J.data){GJ.data=$J.data}j[m]=GJ;x++}}K.attributes=j;K.attributesNum=x;K.index=f}function k(){const _=K.newAttributes;for(let A=0,y=_.length;A<y;A++){_[A]=0}}function D(_){F(_,0)}function F(_,A){const y=K.newAttributes;const f=K.enabledAttributes;const j=K.attributeDivisors;y[_]=1;if(f[_]===0){J.enableVertexAttribArray(_);f[_]=1}if(j[_]!==A){J.vertexAttribDivisor(_,A);j[_]=A}}function L(){const _=K.newAttributes;const A=K.enabledAttributes;for(let y=0,f=A.length;y<f;y++){if(A[y]!==_[y]){J.disableVertexAttribArray(y);A[y]=0}}}function V(_,A,y,f,j,g,x){if(x===true){J.vertexAttribIPointer(_,A,y,j,g)}else{J.vertexAttribPointer(_,A,y,f,j,g)}}function R(_,A,y,f){k();const j=f.attributes;const g=y.getAttributes();const x=A.defaultAttributeValues;for(const p in g){const m=g[p];if(m.location>=0){let t=j[p];if(t===undefined){if(p==="instanceMatrix"&&_.instanceMatrix)t=_.instanceMatrix;if(p==="instanceColor"&&_.instanceColor)t=_.instanceColor}if(t!==undefined){const $J=t.normalized;const GJ=t.itemSize;const NJ=Q.get(t);if(NJ===undefined)continue;const cJ=NJ.buffer;const AJ=NJ.type;const n=NJ.bytesPerElement;const QJ=AJ===J.INT||AJ===J.UNSIGNED_INT||t.gpuType===x7;if(t.isInterleavedBufferAttribute){const WJ=t.data;const MJ=WJ.stride;const VJ=t.offset;if(WJ.isInstancedInterleavedBuffer){for(let CJ=0;CJ<m.locationSize;CJ++){F(m.location+CJ,WJ.meshPerAttribute)}if(_.isInstancedMesh!==true&&f._maxInstanceCount===undefined){f._maxInstanceCount=WJ.meshPerAttribute*WJ.count}}else{for(let CJ=0;CJ<m.locationSize;CJ++){D(m.location+CJ)}}J.bindBuffer(J.ARRAY_BUFFER,cJ);for(let CJ=0;CJ<m.locationSize;CJ++){V(m.location+CJ,GJ/m.locationSize,AJ,$J,MJ*n,(VJ+GJ/m.locationSize*CJ)*n,QJ)}}else{if(t.isInstancedBufferAttribute){for(let WJ=0;WJ<m.locationSize;WJ++){F(m.location+WJ,t.meshPerAttribute)}if(_.isInstancedMesh!==true&&f._maxInstanceCount===undefined){f._maxInstanceCount=t.meshPerAttribute*t.count}}else{for(let WJ=0;WJ<m.locationSize;WJ++){D(m.location+WJ)}}J.bindBuffer(J.ARRAY_BUFFER,cJ);for(let WJ=0;WJ<m.locationSize;WJ++){V(m.location+WJ,GJ/m.locationSize,AJ,$J,GJ*n,GJ/m.locationSize*WJ*n,QJ)}}}else if(x!==undefined){const $J=x[p];if($J!==undefined){switch($J.length){case 2:J.vertexAttrib2fv(m.location,$J);break;case 3:J.vertexAttrib3fv(m.location,$J);break;case 4:J.vertexAttrib4fv(m.location,$J);break;default:J.vertexAttrib1fv(m.location,$J)}}}}}L()}function C(){T();for(const _ in Z){const A=Z[_];for(const y in A){const f=A[y];for(const j in f){G(f[j].object);delete f[j]}delete A[y]}delete Z[_]}}function M(_){if(Z[_.id]===undefined)return;const A=Z[_.id];for(const y in A){const f=A[y];for(const j in f){G(f[j].object);delete f[j]}delete A[y]}delete Z[_.id]}function I(_){for(const A in Z){const y=Z[A];if(y[_.id]===undefined)continue;const f=y[_.id];for(const j in f){G(f[j].object);delete f[j]}delete y[_.id]}}function T(){B();H=true;if(K===W)return;K=W;U(K.object)}function B(){W.geometry=null;W.program=null;W.wireframe=false}return{setup:Y,reset:T,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:I,initAttributes:k,enableAttribute:D,disableUnusedAttributes:L}}function IG(J,Q,$){let Z;function W(U){Z=U}function K(U,G){J.drawArrays(Z,U,G);$.update(G,Z,1)}function H(U,G,E){if(E===0)return;J.drawArraysInstanced(Z,U,G,E);$.update(G,Z,E)}function Y(U,G,E){if(E===0)return;const N=Q.get("WEBGL_multi_draw");N.multiDrawArraysWEBGL(Z,U,0,G,0,E);let q=0;for(let O=0;O<E;O++){q+=G[O]}$.update(q,Z,1)}function X(U,G,E,N){if(E===0)return;const q=Q.get("WEBGL_multi_draw");if(q===null){for(let O=0;O<U.length;O++){H(U[O],G[O],N[O])}}else{q.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,N,0,E);let O=0;for(let k=0;k<E;k++){O+=G[k]*N[k]}$.update(O,Z,1)}}this.setMode=W;this.render=K;this.renderInstances=H;this.renderMultiDraw=Y;this.renderMultiDrawInstances=X}function wG(J,Q,$,Z){let W;function K(){if(W!==undefined)return W;if(Q.has("EXT_texture_filter_anisotropic")===true){const I=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else{W=0}return W}function H(I){if(I!==h0&&Z.convert(I)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){return false}return true}function Y(I){const T=I===U8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(I!==a0&&Z.convert(I)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Q8&&!T){return false}return true}function X(I){if(I==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0){return"highp"}I="mediump"}if(I==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0){return"mediump"}}return"lowp"}let U=$.precision!==undefined?$.precision:"highp";const G=X(U);if(G!==U){hJ("WebGLRenderer:",U,"not supported, using",G,"instead.");U=G}const E=$.logarithmicDepthBuffer===true;const N=$.reversedDepthBuffer===true&&Q.has("EXT_clip_control");const q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS);const O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS);const k=J.getParameter(J.MAX_TEXTURE_SIZE);const D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE);const F=J.getParameter(J.MAX_VERTEX_ATTRIBS);const L=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS);const V=J.getParameter(J.MAX_VARYING_VECTORS);const R=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS);const C=J.getParameter(J.MAX_SAMPLES);const M=J.getParameter(J.SAMPLES);return{isWebGL2:true,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:N,maxTextures:q,maxVertexTextures:O,maxTextureSize:k,maxCubemapSize:D,maxAttributes:F,maxVertexUniforms:L,maxVaryings:V,maxFragmentUniforms:R,maxSamples:C,samples:M}}function CG(J){const Q=this;let $=null,Z=0,W=false,K=false;const H=new _8,Y=new fJ,X={value:null,needsUpdate:false};this.uniform=X;this.numPlanes=0;this.numIntersection=0;this.init=function(E,N){const q=E.length!==0||N||Z!==0||W;W=N;Z=E.length;return q};this.beginShadows=function(){K=true;G(null)};this.endShadows=function(){K=false};this.setGlobalState=function(E,N){$=G(E,N,0)};this.setState=function(E,N,q){const{clippingPlanes:O,clipIntersection:k,clipShadows:D}=E;const F=J.get(E);if(!W||O===null||O.length===0||K&&!D){if(K){G(null)}else{U()}}else{const L=K?0:Z,V=L*4;let R=F.clippingState||null;X.value=R;R=G(O,N,V,q);for(let C=0;C!==V;++C){R[C]=$[C]}F.clippingState=R;this.numIntersection=k?this.numPlanes:0;this.numPlanes+=L}};function U(){if(X.value!==$){X.value=$;X.needsUpdate=Z>0}Q.numPlanes=Z;Q.numIntersection=0}function G(E,N,q,O){const k=E!==null?E.length:0;let D=null;if(k!==0){D=X.value;if(O!==true||D===null){const F=q+k*4,L=N.matrixWorldInverse;Y.getNormalMatrix(L);if(D===null||D.length<F){D=new Float32Array(F)}for(let V=0,R=q;V!==k;++V,R+=4){H.copy(E[V]).applyMatrix4(L,Y);H.normal.toArray(D,R);D[R+3]=H.constant}}X.value=D;X.needsUpdate=true}Q.numPlanes=k;Q.numIntersection=0;return D}}function AG(J){let Q=new WeakMap;function $(H,Y){if(Y===b7){H.mapping=K9}else if(Y===f7){H.mapping=w9}return H}function Z(H){if(H&&H.isTexture){const Y=H.mapping;if(Y===b7||Y===f7){if(Q.has(H)){const X=Q.get(H).texture;return $(X,H.mapping)}else{const X=H.image;if(X&&X.height>0){const U=new AQ(X.height);U.fromEquirectangularTexture(J,H);Q.set(H,U);H.addEventListener("dispose",W);return $(U.texture,H.mapping)}else{return null}}}}return H}function W(H){const Y=H.target;Y.removeEventListener("dispose",W);const X=Q.get(Y);if(X!==undefined){Q.delete(Y);X.dispose()}}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var N9=4;var FK=[0.125,0.215,0.35,0.446,0.526,0.582];var b9=20;var PG=256;var u6=new j9;var kK=new aJ;var kZ=null;var MZ=0;var RZ=0;var VZ=false;var TG=new S;class _Z{constructor(J){this._renderer=J;this._pingPongRenderTarget=null;this._lodMax=0;this._cubeSize=0;this._sizeLods=[];this._sigmas=[];this._lodMeshes=[];this._backgroundBox=null;this._cubemapMaterial=null;this._equirectMaterial=null;this._blurMaterial=null;this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){const{size:K=256,position:H=TG}=W;kZ=this._renderer.getRenderTarget();MZ=this._renderer.getActiveCubeFace();RZ=this._renderer.getActiveMipmapLevel();VZ=this._renderer.xr.enabled;this._renderer.xr.enabled=false;this._setSize(K);const Y=this._allocateTargets();Y.depthBuffer=true;this._sceneToCubeUV(J,$,Z,Y,H);if(Q>0){this._blur(Y,0,0,Q)}this._applyPMREM(Y);this._cleanup(Y);return Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null){this._cubemapMaterial=VK();this._compileMaterial(this._cubemapMaterial)}}compileEquirectangularShader(){if(this._equirectMaterial===null){this._equirectMaterial=RK();this._compileMaterial(this._equirectMaterial)}}dispose(){this._dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null){this._backgroundBox.geometry.dispose();this._backgroundBox.material.dispose()}}_setSize(J){this._lodMax=Math.floor(Math.log2(J));this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++){this._lodMeshes[J].geometry.dispose()}}_cleanup(J){this._renderer.setRenderTarget(kZ,MZ,RZ);this._renderer.xr.enabled=VZ;J.scissorTest=false;U6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===K9||J.mapping===w9){this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width)}else{this._setSize(J.image.width/4)}kZ=this._renderer.getRenderTarget();MZ=this._renderer.getActiveCubeFace();RZ=this._renderer.getActiveMipmapLevel();VZ=this._renderer.xr.enabled;this._renderer.xr.enabled=false;const $=Q||this._allocateTargets();this._textureToCubeUV(J,$);this._applyPMREM($);this._cleanup($);return $}_allocateTargets(){const J=3*Math.max(this._cubeSize,16*7);const Q=4*this._cubeSize;const $={magFilter:b0,minFilter:b0,generateMipmaps:false,type:U8,format:h0,colorSpace:I9,depthBuffer:false};const Z=MK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null){this._dispose()}this._pingPongRenderTarget=MK(J,Q,$);const{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SG(W));this._blurMaterial=yG(W,J,Q);this._ggxMaterial=jG(W,J,Q)}return Z}_compileMaterial(J){const Q=new M0(new u0,J);this._renderer.compile(Q,u6)}_sceneToCubeUV(J,Q,$,Z,W){const K=90;const H=1;const Y=new s0(K,H,Q,$);const X=[1,-1,1,1,1,1];const U=[1,1,1,-1,-1,-1];const G=this._renderer;const E=G.autoClear;const N=G.toneMapping;G.getClearColor(kK);G.toneMapping=I8;G.autoClear=false;const q=G.state.buffers.depth.getReversed();if(q){G.setRenderTarget(Z);G.clearDepth();G.setRenderTarget(null)}if(this._backgroundBox===null){this._backgroundBox=new M0(new G9,new w8({name:"PMREM.Background",side:o0,depthWrite:false,depthTest:false}))}const O=this._backgroundBox;const k=O.material;let D=false;const F=J.background;if(F){if(F.isColor){k.color.copy(F);J.background=null;D=true}}else{k.color.copy(kK);D=true}for(let L=0;L<6;L++){const V=L%3;if(V===0){Y.up.set(0,X[L],0);Y.position.set(W.x,W.y,W.z);Y.lookAt(W.x+U[L],W.y,W.z)}else if(V===1){Y.up.set(0,0,X[L]);Y.position.set(W.x,W.y,W.z);Y.lookAt(W.x,W.y+U[L],W.z)}else{Y.up.set(0,X[L],0);Y.position.set(W.x,W.y,W.z);Y.lookAt(W.x,W.y,W.z+U[L])}const R=this._cubeSize;U6(Z,V*R,L>2?R:0,R,R);G.setRenderTarget(Z);if(D){G.render(O,Y)}G.render(J,Y)}G.toneMapping=N;G.autoClear=E;J.background=F}_textureToCubeUV(J,Q){const $=this._renderer;const Z=J.mapping===K9||J.mapping===w9;if(Z){if(this._cubemapMaterial===null){this._cubemapMaterial=VK()}this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===false?-1:1}else{if(this._equirectMaterial===null){this._equirectMaterial=RK()}}const W=Z?this._cubemapMaterial:this._equirectMaterial;const K=this._lodMeshes[0];K.material=W;const H=W.uniforms;H["envMap"].value=J;const Y=this._cubeSize;U6(Q,0,0,3*Y,2*Y);$.setRenderTarget(Q);$.render(K,u6)}_applyPMREM(J){const Q=this._renderer;const $=Q.autoClear;Q.autoClear=false;const Z=this._lodMeshes.length;for(let W=1;W<Z;W++){this._applyGGXFilter(J,W-1,W)}Q.autoClear=$}_applyGGXFilter(J,Q,$){const Z=this._renderer;const W=this._pingPongRenderTarget;const K=this._ggxMaterial;const H=this._lodMeshes[$];H.material=K;const Y=K.uniforms;const X=$/(this._lodMeshes.length-1);const U=Q/(this._lodMeshes.length-1);const G=Math.sqrt(X*X-U*U);const E=0+X*1.25;const N=G*E;const{_lodMax:q}=this;const O=this._sizeLods[$];const k=3*O*($>q-N9?$-q+N9:0);const D=4*(this._cubeSize-O);Y["envMap"].value=J.texture;Y["roughness"].value=N;Y["mipInt"].value=q-Q;U6(W,k,D,3*O,2*O);Z.setRenderTarget(W);Z.render(H,u6);Y["envMap"].value=W.texture;Y["roughness"].value=0;Y["mipInt"].value=q-$;U6(J,k,D,3*O,2*O);Z.setRenderTarget(J);Z.render(H,u6)}_blur(J,Q,$,Z,W){const K=this._pingPongRenderTarget;this._halfBlur(J,K,Q,$,Z,"latitudinal",W);this._halfBlur(K,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,K,H){const Y=this._renderer;const X=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal"){dJ("blur direction must be either latitudinal or longitudinal!")}const U=3;const G=this._lodMeshes[Z];G.material=X;const E=X.uniforms;const N=this._sizeLods[$]-1;const q=isFinite(W)?Math.PI/(2*N):2*Math.PI/(2*b9-1);const O=W/q;const k=isFinite(W)?1+Math.floor(U*O):b9;if(k>b9){hJ(`sigmaRadians, ${W}, is too large and will clip, as it requested ${k} samples when the maximum is set to ${b9}`)}const D=[];let F=0;for(let M=0;M<b9;++M){const I=M/O;const T=Math.exp(-I*I/2);D.push(T);if(M===0){F+=T}else if(M<k){F+=2*T}}for(let M=0;M<D.length;M++){D[M]=D[M]/F}E["envMap"].value=J.texture;E["samples"].value=k;E["weights"].value=D;E["latitudinal"].value=K==="latitudinal";if(H){E["poleAxis"].value=H}const{_lodMax:L}=this;E["dTheta"].value=q;E["mipInt"].value=L-$;const V=this._sizeLods[Z];const R=3*V*(Z>L-N9?Z-L+N9:0);const C=4*(this._cubeSize-V);U6(Q,R,C,3*V,2*V);Y.setRenderTarget(Q);Y.render(G,u6)}}function SG(J){const Q=[];const $=[];const Z=[];let W=J;const K=J-N9+1+FK.length;for(let H=0;H<K;H++){const Y=Math.pow(2,W);Q.push(Y);let X=1/Y;if(H>J-N9){X=FK[H-J+N9-1]}else if(H===0){X=0}$.push(X);const U=1/(Y-2);const G=-U;const E=1+U;const N=[G,G,E,G,E,E,G,G,E,E,G,E];const q=6;const O=6;const k=3;const D=2;const F=1;const L=new Float32Array(k*O*q);const V=new Float32Array(D*O*q);const R=new Float32Array(F*O*q);for(let M=0;M<q;M++){const I=M%3*2/3-1;const T=M>2?0:-1;const B=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];L.set(B,k*O*M);V.set(N,D*O*M);const _=[M,M,M,M,M,M];R.set(_,F*O*M)}const C=new u0;C.setAttribute("position",new i0(L,k));C.setAttribute("uv",new i0(V,D));C.setAttribute("faceIndex",new i0(R,F));Z.push(new M0(C,null));if(W>N9){W--}}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function MK(J,Q,$){const Z=new $8(J,Q,$);Z.texture.mapping=S6;Z.texture.name="PMREM.cubeUv";Z.scissorTest=true;return Z}function U6(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W);J.scissor.set(Q,$,Z,W)}function jG(J,Q,$){const Z=new y0({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:T8,depthTest:false,depthWrite:false});return Z}function yG(J,Q,$){const Z=new Float32Array(b9);const W=new S(0,1,0);const K=new y0({name:"SphericalGaussianBlur",defines:{n:b9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:false},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:hQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:T8,depthTest:false,depthWrite:false});return K}function RK(){return new y0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:T8,depthTest:false,depthWrite:false})}function VK(){return new y0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:T8,depthTest:false,depthWrite:false})}function hQ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vG(J){let Q=new WeakMap;let $=null;function Z(Y){if(Y&&Y.isTexture){const X=Y.mapping;const U=X===b7||X===f7;const G=X===K9||X===w9;if(U||G){let E=Q.get(Y);const N=E!==undefined?E.texture.pmremVersion:0;if(Y.isRenderTargetTexture&&Y.pmremVersion!==N){if($===null)$=new _Z(J);E=U?$.fromEquirectangular(Y,E):$.fromCubemap(Y,E);E.texture.pmremVersion=Y.pmremVersion;Q.set(Y,E);return E.texture}else{if(E!==undefined){return E.texture}else{const q=Y.image;if(U&&q&&q.height>0||G&&q&&W(q)){if($===null)$=new _Z(J);E=U?$.fromEquirectangular(Y):$.fromCubemap(Y);E.texture.pmremVersion=Y.pmremVersion;Q.set(Y,E);Y.addEventListener("dispose",K);return E.texture}else{return null}}}}}return Y}function W(Y){let X=0;const U=6;for(let G=0;G<U;G++){if(Y[G]!==undefined)X++}return X===U}function K(Y){const X=Y.target;X.removeEventListener("dispose",K);const U=Q.get(X);if(U!==undefined){Q.delete(X);U.dispose()}}function H(){Q=new WeakMap;if($!==null){$.dispose();$=null}}return{get:Z,dispose:H}}function bG(J){const Q={};function $(Z){if(Q[Z]!==undefined){return Q[Z]}const W=J.getExtension(Z);Q[Z]=W;return W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float");$("WEBGL_clip_cull_distance");$("OES_texture_float_linear");$("EXT_color_buffer_half_float");$("WEBGL_multisampled_render_to_texture");$("WEBGL_render_shared_exponent")},get:function(Z){const W=$(Z);if(W===null){J6("WebGLRenderer: "+Z+" extension not supported.")}return W}}}function fG(J,Q,$,Z){const W={};const K=new WeakMap;function H(E){const N=E.target;if(N.index!==null){Q.remove(N.index)}for(const O in N.attributes){Q.remove(N.attributes[O])}N.removeEventListener("dispose",H);delete W[N.id];const q=K.get(N);if(q){Q.remove(q);K.delete(N)}Z.releaseStatesOfGeometry(N);if(N.isInstancedBufferGeometry===true){delete N._maxInstanceCount}$.memory.geometries--}function Y(E,N){if(W[N.id]===true)return N;N.addEventListener("dispose",H);W[N.id]=true;$.memory.geometries++;return N}function X(E){const N=E.attributes;for(const q in N){Q.update(N[q],J.ARRAY_BUFFER)}}function U(E){const N=[];const q=E.index;const O=E.attributes.position;let k=0;if(q!==null){const L=q.array;k=q.version;for(let V=0,R=L.length;V<R;V+=3){const C=L[V+0];const M=L[V+1];const I=L[V+2];N.push(C,M,M,I,I,C)}}else if(O!==undefined){const L=O.array;k=O.version;for(let V=0,R=L.length/3-1;V<R;V+=3){const C=V+0;const M=V+1;const I=V+2;N.push(C,M,M,I,I,C)}}else{return}const D=new((n$(N))?IQ:BQ)(N,1);D.version=k;const F=K.get(E);if(F)Q.remove(F);K.set(E,D)}function G(E){const N=K.get(E);if(N){const q=E.index;if(q!==null){if(N.version<q.version){U(E)}}}else{U(E)}return K.get(E)}return{get:Y,update:X,getWireframeAttribute:G}}function hG(J,Q,$){let Z;function W(N){Z=N}let K,H;function Y(N){K=N.type;H=N.bytesPerElement}function X(N,q){J.drawElements(Z,q,K,N*H);$.update(q,Z,1)}function U(N,q,O){if(O===0)return;J.drawElementsInstanced(Z,q,K,N*H,O);$.update(q,Z,O)}function G(N,q,O){if(O===0)return;const k=Q.get("WEBGL_multi_draw");k.multiDrawElementsWEBGL(Z,q,0,K,N,0,O);let D=0;for(let F=0;F<O;F++){D+=q[F]}$.update(D,Z,1)}function E(N,q,O,k){if(O===0)return;const D=Q.get("WEBGL_multi_draw");if(D===null){for(let F=0;F<N.length;F++){U(N[F]/H,q[F],k[F])}}else{D.multiDrawElementsInstancedWEBGL(Z,q,0,K,N,0,k,0,O);let F=0;for(let L=0;L<O;L++){F+=q[L]*k[L]}$.update(F,Z,1)}}this.setMode=W;this.setIndex=Y;this.render=X;this.renderInstances=U;this.renderMultiDraw=G;this.renderMultiDrawInstances=E}function xG(J){const Q={geometries:0,textures:0};const $={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){$.calls++;switch(H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:dJ("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0;$.triangles=0;$.points=0;$.lines=0}return{memory:Q,render:$,programs:null,autoReset:true,reset:W,update:Z}}function gG(J,Q,$){const Z=new WeakMap;const W=new k0;function K(H,Y,X){const U=H.morphTargetInfluences;const G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color;const E=G!==undefined?G.length:0;let N=Z.get(Y);if(N===undefined||N.count!==E){let B=function(){I.dispose();Z.delete(Y);Y.removeEventListener("dispose",B)};if(N!==undefined)N.texture.dispose();const q=Y.morphAttributes.position!==undefined;const O=Y.morphAttributes.normal!==undefined;const k=Y.morphAttributes.color!==undefined;const D=Y.morphAttributes.position||[];const F=Y.morphAttributes.normal||[];const L=Y.morphAttributes.color||[];let V=0;if(q===true)V=1;if(O===true)V=2;if(k===true)V=3;let R=Y.attributes.position.count*V;let C=1;if(R>Q.maxTextureSize){C=Math.ceil(R/Q.maxTextureSize);R=Q.maxTextureSize}const M=new Float32Array(R*C*4*E);const I=new zQ(M,R,C,E);I.type=Q8;I.needsUpdate=true;const T=V*4;for(let _=0;_<E;_++){const A=D[_];const y=F[_];const f=L[_];const j=R*C*4*_;for(let g=0;g<A.count;g++){const x=g*T;if(q===true){W.fromBufferAttribute(A,g);M[j+x+0]=W.x;M[j+x+1]=W.y;M[j+x+2]=W.z;M[j+x+3]=0}if(O===true){W.fromBufferAttribute(y,g);M[j+x+4]=W.x;M[j+x+5]=W.y;M[j+x+6]=W.z;M[j+x+7]=0}if(k===true){W.fromBufferAttribute(f,g);M[j+x+8]=W.x;M[j+x+9]=W.y;M[j+x+10]=W.z;M[j+x+11]=f.itemSize===4?W.w:1}}}N={count:E,texture:I,size:new _J(R,C)};Z.set(Y,N);Y.addEventListener("dispose",B)}if(H.isInstancedMesh===true&&H.morphTexture!==null){X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$)}else{let q=0;for(let k=0;k<U.length;k++){q+=U[k]}const O=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",O);X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$);X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function pG(J,Q,$,Z){let W=new WeakMap;function K(X){const U=Z.render.frame;const G=X.geometry;const E=Q.get(X,G);if(W.get(E)!==U){Q.update(E);W.set(E,U)}if(X.isInstancedMesh){if(X.hasEventListener("dispose",Y)===false){X.addEventListener("dispose",Y)}if(W.get(X)!==U){$.update(X.instanceMatrix,J.ARRAY_BUFFER);if(X.instanceColor!==null){$.update(X.instanceColor,J.ARRAY_BUFFER)}W.set(X,U)}}if(X.isSkinnedMesh){const N=X.skeleton;if(W.get(N)!==U){N.update();W.set(N,U)}}return E}function H(){W=new WeakMap}function Y(X){const U=X.target;U.removeEventListener("dispose",Y);$.remove(U.instanceMatrix);if(U.instanceColor!==null)$.remove(U.instanceColor)}return{update:K,dispose:H}}var mG={[P$]:"LINEAR_TONE_MAPPING",[T$]:"REINHARD_TONE_MAPPING",[S$]:"CINEON_TONE_MAPPING",[j$]:"ACES_FILMIC_TONE_MAPPING",[v$]:"AGX_TONE_MAPPING",[b$]:"NEUTRAL_TONE_MAPPING",[y$]:"CUSTOM_TONE_MAPPING"};function dG(J,Q,$,Z,W){const K=new $8(Q,$,{type:J,depthBuffer:Z,stencilBuffer:W});const H=new $8(Q,$,{type:U8,depthBuffer:false,stencilBuffer:false});const Y=new u0;Y.setAttribute("position",new v0([-1,3,0,-1,-1,0,3,-1,0],3));Y.setAttribute("uv",new v0([0,2,0,0,2,0],2));const X=new QZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:false,depthWrite:false});const U=new M0(Y,X);const G=new j9(-1,1,1,-1,0,1);let E=null;let N=null;let q=false;let O;let k=null;let D=[];let F=false;this.setSize=function(L,V){K.setSize(L,V);H.setSize(L,V);for(let R=0;R<D.length;R++){const C=D[R];if(C.setSize)C.setSize(L,V)}};this.setEffects=function(L){D=L;F=D.length>0&&D[0].isRenderPass===true;const V=K.width;const R=K.height;for(let C=0;C<D.length;C++){const M=D[C];if(M.setSize)M.setSize(V,R)}};this.begin=function(L,V){if(q)return false;if(L.toneMapping===I8&&D.length===0)return false;k=V;if(V!==null){const R=V.width;const C=V.height;if(K.width!==R||K.height!==C){this.setSize(R,C)}}if(F===false){L.setRenderTarget(K)}O=L.toneMapping;L.toneMapping=I8;return true};this.hasRenderPass=function(){return F};this.end=function(L,V){L.toneMapping=O;q=true;let R=K;let C=H;for(let M=0;M<D.length;M++){const I=D[M];if(I.enabled===false)continue;I.render(L,C,R,V);if(I.needsSwap!==false){const T=R;R=C;C=T}}if(E!==L.outputColorSpace||N!==L.toneMapping){E=L.outputColorSpace;N=L.toneMapping;X.defines={};if(rJ.getTransfer(E)===Z0)X.defines.SRGB_TRANSFER="";const M=mG[N];if(M)X.defines[M]="";X.needsUpdate=true}X.uniforms.tDiffuse.value=R.texture;L.setRenderTarget(k);L.render(U,G);k=null;q=false};this.isCompositing=function(){return q};this.dispose=function(){K.dispose();H.dispose();Y.dispose();X.dispose()}}var gK=new l0;var BZ=new n8(1,1);var pK=new zQ;var mK=new r$;var dK=new CQ;var LK=[];var zK=[];var _K=new Float32Array(16);var BK=new Float32Array(9);var IK=new Float32Array(4);function G6(J,Q,$){const Z=J[0];if(Z<=0||Z>0)return J;const W=Q*$;let K=LK[W];if(K===undefined){K=new Float32Array(W);LK[W]=K}if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H){Y+=$;J[H].toArray(K,Y)}}return K}function A0(J,Q){if(J.length!==Q.length)return false;for(let $=0,Z=J.length;$<Z;$++){if(J[$]!==Q[$])return false}return true}function P0(J,Q){for(let $=0,Z=Q.length;$<Z;$++){J[$]=Q[$]}}function xQ(J,Q){let $=zK[Q];if($===undefined){$=new Int32Array(Q);zK[Q]=$}for(let Z=0;Z!==Q;++Z){$[Z]=J.allocateTextureUnit()}return $}function lG(J,Q){const $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q);$[0]=Q}function uG(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y){J.uniform2f(this.addr,Q.x,Q.y);$[0]=Q.x;$[1]=Q.y}}else{if(A0($,Q))return;J.uniform2fv(this.addr,Q);P0($,Q)}}function cG(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z){J.uniform3f(this.addr,Q.x,Q.y,Q.z);$[0]=Q.x;$[1]=Q.y;$[2]=Q.z}}else if(Q.r!==undefined){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b){J.uniform3f(this.addr,Q.r,Q.g,Q.b);$[0]=Q.r;$[1]=Q.g;$[2]=Q.b}}else{if(A0($,Q))return;J.uniform3fv(this.addr,Q);P0($,Q)}}function nG(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w){J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w);$[0]=Q.x;$[1]=Q.y;$[2]=Q.z;$[3]=Q.w}}else{if(A0($,Q))return;J.uniform4fv(this.addr,Q);P0($,Q)}}function sG(J,Q){const $=this.cache;const Z=Q.elements;if(Z===undefined){if(A0($,Q))return;J.uniformMatrix2fv(this.addr,false,Q);P0($,Q)}else{if(A0($,Z))return;IK.set(Z);J.uniformMatrix2fv(this.addr,false,IK);P0($,Z)}}function iG(J,Q){const $=this.cache;const Z=Q.elements;if(Z===undefined){if(A0($,Q))return;J.uniformMatrix3fv(this.addr,false,Q);P0($,Q)}else{if(A0($,Z))return;BK.set(Z);J.uniformMatrix3fv(this.addr,false,BK);P0($,Z)}}function oG(J,Q){const $=this.cache;const Z=Q.elements;if(Z===undefined){if(A0($,Q))return;J.uniformMatrix4fv(this.addr,false,Q);P0($,Q)}else{if(A0($,Z))return;_K.set(Z);J.uniformMatrix4fv(this.addr,false,_K);P0($,Z)}}function aG(J,Q){const $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q);$[0]=Q}function rG(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y){J.uniform2i(this.addr,Q.x,Q.y);$[0]=Q.x;$[1]=Q.y}}else{if(A0($,Q))return;J.uniform2iv(this.addr,Q);P0($,Q)}}function tG(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z){J.uniform3i(this.addr,Q.x,Q.y,Q.z);$[0]=Q.x;$[1]=Q.y;$[2]=Q.z}}else{if(A0($,Q))return;J.uniform3iv(this.addr,Q);P0($,Q)}}function eG(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w){J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w);$[0]=Q.x;$[1]=Q.y;$[2]=Q.z;$[3]=Q.w}}else{if(A0($,Q))return;J.uniform4iv(this.addr,Q);P0($,Q)}}function JE(J,Q){const $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q);$[0]=Q}function QE(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y){J.uniform2ui(this.addr,Q.x,Q.y);$[0]=Q.x;$[1]=Q.y}}else{if(A0($,Q))return;J.uniform2uiv(this.addr,Q);P0($,Q)}}function $E(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z){J.uniform3ui(this.addr,Q.x,Q.y,Q.z);$[0]=Q.x;$[1]=Q.y;$[2]=Q.z}}else{if(A0($,Q))return;J.uniform3uiv(this.addr,Q);P0($,Q)}}function ZE(J,Q){const $=this.cache;if(Q.x!==undefined){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w){J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w);$[0]=Q.x;$[1]=Q.y;$[2]=Q.z;$[3]=Q.w}}else{if(A0($,Q))return;J.uniform4uiv(this.addr,Q);P0($,Q)}}function WE(J,Q,$){const Z=this.cache;const W=$.allocateTextureUnit();if(Z[0]!==W){J.uniform1i(this.addr,W);Z[0]=W}let K;if(this.type===J.SAMPLER_2D_SHADOW){BZ.compareFunction=$.isReversedDepthBuffer()?LQ:VQ;K=BZ}else{K=gK}$.setTexture2D(Q||K,W)}function KE(J,Q,$){const Z=this.cache;const W=$.allocateTextureUnit();if(Z[0]!==W){J.uniform1i(this.addr,W);Z[0]=W}$.setTexture3D(Q||mK,W)}function HE(J,Q,$){const Z=this.cache;const W=$.allocateTextureUnit();if(Z[0]!==W){J.uniform1i(this.addr,W);Z[0]=W}$.setTextureCube(Q||dK,W)}function YE(J,Q,$){const Z=this.cache;const W=$.allocateTextureUnit();if(Z[0]!==W){J.uniform1i(this.addr,W);Z[0]=W}$.setTexture2DArray(Q||pK,W)}function XE(J){switch(J){case 5126:return lG;case 35664:return uG;case 35665:return cG;case 35666:return nG;case 35674:return sG;case 35675:return iG;case 35676:return oG;case 5124:case 35670:return aG;case 35667:case 35671:return rG;case 35668:case 35672:return tG;case 35669:case 35673:return eG;case 5125:return JE;case 36294:return QE;case 36295:return $E;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return KE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return YE}}function UE(J,Q){J.uniform1fv(this.addr,Q)}function GE(J,Q){const $=G6(Q,this.size,2);J.uniform2fv(this.addr,$)}function EE(J,Q){const $=G6(Q,this.size,3);J.uniform3fv(this.addr,$)}function NE(J,Q){const $=G6(Q,this.size,4);J.uniform4fv(this.addr,$)}function qE(J,Q){const $=G6(Q,this.size,4);J.uniformMatrix2fv(this.addr,false,$)}function DE(J,Q){const $=G6(Q,this.size,9);J.uniformMatrix3fv(this.addr,false,$)}function OE(J,Q){const $=G6(Q,this.size,16);J.uniformMatrix4fv(this.addr,false,$)}function FE(J,Q){J.uniform1iv(this.addr,Q)}function kE(J,Q){J.uniform2iv(this.addr,Q)}function ME(J,Q){J.uniform3iv(this.addr,Q)}function RE(J,Q){J.uniform4iv(this.addr,Q)}function VE(J,Q){J.uniform1uiv(this.addr,Q)}function LE(J,Q){J.uniform2uiv(this.addr,Q)}function zE(J,Q){J.uniform3uiv(this.addr,Q)}function _E(J,Q){J.uniform4uiv(this.addr,Q)}function BE(J,Q,$){const Z=this.cache;const W=Q.length;const K=xQ($,W);if(!A0(Z,K)){J.uniform1iv(this.addr,K);P0(Z,K)}let H;if(this.type===J.SAMPLER_2D_SHADOW){H=BZ}else{H=gK}for(let Y=0;Y!==W;++Y){$.setTexture2D(Q[Y]||H,K[Y])}}function IE(J,Q,$){const Z=this.cache;const W=Q.length;const K=xQ($,W);if(!A0(Z,K)){J.uniform1iv(this.addr,K);P0(Z,K)}for(let H=0;H!==W;++H){$.setTexture3D(Q[H]||mK,K[H])}}function wE(J,Q,$){const Z=this.cache;const W=Q.length;const K=xQ($,W);if(!A0(Z,K)){J.uniform1iv(this.addr,K);P0(Z,K)}for(let H=0;H!==W;++H){$.setTextureCube(Q[H]||dK,K[H])}}function CE(J,Q,$){const Z=this.cache;const W=Q.length;const K=xQ($,W);if(!A0(Z,K)){J.uniform1iv(this.addr,K);P0(Z,K)}for(let H=0;H!==W;++H){$.setTexture2DArray(Q[H]||pK,K[H])}}function AE(J){switch(J){case 5126:return UE;case 35664:return GE;case 35665:return EE;case 35666:return NE;case 35674:return qE;case 35675:return DE;case 35676:return OE;case 5124:case 35670:return FE;case 35667:case 35671:return kE;case 35668:case 35672:return ME;case 35669:case 35673:return RE;case 5125:return VE;case 36294:return LE;case 36295:return zE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return CE}}class lK{constructor(J,Q,$){this.id=J;this.addr=$;this.cache=[];this.type=Q.type;this.setValue=XE(Q.type)}}class uK{constructor(J,Q,$){this.id=J;this.addr=$;this.cache=[];this.type=Q.type;this.size=Q.size;this.setValue=AE(Q.type)}}class cK{constructor(J){this.id=J;this.seq=[];this.map={}}setValue(J,Q,$){const Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){const H=Z[W];H.setValue(J,Q[H.id],$)}}}var LZ=/(\w+)(\])?(\[|\.)?/g;function wK(J,Q){J.seq.push(Q);J.map[Q.id]=Q}function PE(J,Q,$){const Z=J.name,W=Z.length;LZ.lastIndex=0;while(true){const K=LZ.exec(Z),H=LZ.lastIndex;let Y=K[1];const X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===undefined||U==="["&&H+2===W){wK($,U===undefined?new lK(Y,J,Q):new uK(Y,J,Q));break}else{const G=$.map;let E=G[Y];if(E===undefined){E=new cK(Y);wK($,E)}$=E}}}class s6{constructor(J,Q){this.seq=[];this.map={};const $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){const H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);PE(H,Y,this)}const Z=[];const W=[];for(const K of this.seq){if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW){Z.push(K)}else{W.push(K)}}if(Z.length>0){this.seq=Z.concat(W)}}setValue(J,Q,$,Z){const W=this.map[Q];if(W!==undefined)W.setValue(J,$,Z)}setOptional(J,Q,$){const Z=Q[$];if(Z!==undefined)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){const H=Q[W],Y=$[H.id];if(Y.needsUpdate!==false){H.setValue(J,Y.value,Z)}}}static seqWithValue(J,Q){const $=[];for(let Z=0,W=J.length;Z!==W;++Z){const K=J[Z];if(K.id in Q)$.push(K)}return $}}function CK(J,Q,$){const Z=J.createShader(Q);J.shaderSource(Z,$);J.compileShader(Z);return Z}var TE=37297;var SE=0;function jE(J,Q){const $=J.split(`
`);const Z=[];const W=Math.max(Q-6,0);const K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){const Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var AK=new fJ;function yE(J){rJ._getMatrix(AK,rJ.workingColorSpace,J);const Q=`mat3( ${AK.elements.map(($)=>$.toFixed(4))} )`;switch(rJ.getTransfer(J)){case C6:return[Q,"LinearTransferOETF"];case Z0:return[Q,"sRGBTransferOETF"];default:hJ("WebGLProgram: Unsupported color space: ",J);return[Q,"LinearTransferOETF"]}}function PK(J,Q,$){const Z=J.getShaderParameter(Q,J.COMPILE_STATUS);const W=J.getShaderInfoLog(Q)||"";const K=W.trim();if(Z&&K==="")return"";const H=/ERROR: 0:(\d+)/.exec(K);if(H){const Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+jE(J.getShaderSource(Q),Y)}else{return K}}function vE(J,Q){const $=yE(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var bE={[P$]:"Linear",[T$]:"Reinhard",[S$]:"Cineon",[j$]:"ACESFilmic",[v$]:"AgX",[b$]:"Neutral",[y$]:"Custom"};function fE(J,Q){const $=bE[Q];if($===undefined){hJ("WebGLProgram: Unsupported toneMapping:",Q);return"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var fQ=new S;function hE(){rJ.getLuminanceCoefficients(fQ);const J=fQ.x.toFixed(4);const Q=fQ.y.toFixed(4);const $=fQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function xE(J){const Q=[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""];return Q.filter(n6).join(`
`)}function gE(J){const Q=[];for(const $ in J){const Z=J[$];if(Z===false)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function pE(J,Q){const $={};const Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){const K=J.getActiveAttrib(Q,W);const H=K.name;let Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function n6(J){return J!==""}function TK(J,Q){const $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function SK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function IZ(J){return J.replace(mE,lE)}var dE=new Map;function lE(J,Q){let $=sJ[Q];if($===undefined){const Z=dE.get(Q);if(Z!==undefined){$=sJ[Z];hJ('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z)}else{throw new Error("Can not resolve #include <"+Q+">")}}return IZ($)}var uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jK(J){return J.replace(uE,cE)}function cE(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++){W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K)}return W}function yK(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp"){Q+=`
#define HIGH_PRECISION`}else if(J.precision==="mediump"){Q+=`
#define MEDIUM_PRECISION`}else if(J.precision==="lowp"){Q+=`
#define LOW_PRECISION`}return Q}var nE={[T6]:"SHADOWMAP_TYPE_PCF",[$6]:"SHADOWMAP_TYPE_VSM"};function sE(J){return nE[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iE={[K9]:"ENVMAP_TYPE_CUBE",[w9]:"ENVMAP_TYPE_CUBE",[S6]:"ENVMAP_TYPE_CUBE_UV"};function oE(J){if(J.envMap===false)return"ENVMAP_TYPE_CUBE";return iE[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var aE={[w9]:"ENVMAP_MODE_REFRACTION"};function rE(J){if(J.envMap===false)return"ENVMAP_MODE_REFLECTION";return aE[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tE={[A$]:"ENVMAP_BLENDING_MULTIPLY",[tW]:"ENVMAP_BLENDING_MIX",[eW]:"ENVMAP_BLENDING_ADD"};function eE(J){if(J.envMap===false)return"ENVMAP_BLENDING_NONE";return tE[J.combine]||"ENVMAP_BLENDING_NONE"}function JN(J){const Q=J.envMapCubeUVHeight;if(Q===null)return null;const $=Math.log2(Q)-2;const Z=1/Q;const W=1/(3*Math.max(Math.pow(2,$),7*16));return{texelWidth:W,texelHeight:Z,maxMip:$}}function QN(J,Q,$,Z){const W=J.getContext();const K=$.defines;let H=$.vertexShader;let Y=$.fragmentShader;const X=sE($);const U=oE($);const G=rE($);const E=eE($);const N=JN($);const q=xE($);const O=gE(K);const k=W.createProgram();let D,F;let L=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(n6).join(`
`);if(D.length>0){D+=`
`}F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(n6).join(`
`);if(F.length>0){F+=`
`}}else{D=[yK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===false?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===false?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(n6).join(`
`);F=[yK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===false?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==I8?"#define TONE_MAPPING":"",$.toneMapping!==I8?sJ["tonemapping_pars_fragment"]:"",$.toneMapping!==I8?fE("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",sJ["colorspace_pars_fragment"],vE("linearToOutputTexel",$.outputColorSpace),hE(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(n6).join(`
`)}H=IZ(H);H=TK(H,$);H=SK(H,$);Y=IZ(Y);Y=TK(Y,$);Y=SK(Y,$);H=jK(H);Y=jK(Y);if($.isRawShaderMaterial!==true){L=`#version 300 es
`;D=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D;F=["#define varying in",$.glslVersion===c$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===c$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F}const V=L+D+H;const R=L+F+Y;const C=CK(W,W.VERTEX_SHADER,V);const M=CK(W,W.FRAGMENT_SHADER,R);W.attachShader(k,C);W.attachShader(k,M);if($.index0AttributeName!==undefined){W.bindAttribLocation(k,0,$.index0AttributeName)}else if($.morphTargets===true){W.bindAttribLocation(k,0,"position")}W.linkProgram(k);function I(A){if(J.debug.checkShaderErrors){const y=W.getProgramInfoLog(k)||"";const f=W.getShaderInfoLog(C)||"";const j=W.getShaderInfoLog(M)||"";const g=y.trim();const x=f.trim();const p=j.trim();let m=true;let t=true;if(W.getProgramParameter(k,W.LINK_STATUS)===false){m=false;if(typeof J.debug.onShaderError==="function"){J.debug.onShaderError(W,k,C,M)}else{const $J=PK(W,C,"vertex");const GJ=PK(W,M,"fragment");dJ("THREE.WebGLProgram: Shader Error "+W.getError()+" - "+"VALIDATE_STATUS "+W.getProgramParameter(k,W.VALIDATE_STATUS)+`

`+"Material Name: "+A.name+`
`+"Material Type: "+A.type+`

`+"Program Info Log: "+g+`
`+$J+`
`+GJ)}}else if(g!==""){hJ("WebGLProgram: Program Info Log:",g)}else if(x===""||p===""){t=false}if(t){A.diagnostics={runnable:m,programLog:g,vertexShader:{log:x,prefix:D},fragmentShader:{log:p,prefix:F}}}}W.deleteShader(C);W.deleteShader(M);T=new s6(W,k);B=pE(W,k)}let T;this.getUniforms=function(){if(T===undefined){I(this)}return T};let B;this.getAttributes=function(){if(B===undefined){I(this)}return B};let _=$.rendererExtensionParallelShaderCompile===false;this.isReady=function(){if(_===false){_=W.getProgramParameter(k,TE)}return _};this.destroy=function(){Z.releaseStatesOfProgram(this);W.deleteProgram(k);this.program=undefined};this.type=$.shaderType;this.name=$.shaderName;this.id=SE++;this.cacheKey=Q;this.usedTimes=1;this.program=k;this.vertexShader=C;this.fragmentShader=M;return this}var $N=0;class nK{constructor(){this.shaderCache=new Map;this.materialCache=new Map}update(J){const Q=J.vertexShader;const $=J.fragmentShader;const Z=this._getShaderStage(Q);const W=this._getShaderStage($);const K=this._getShaderCacheForMaterial(J);if(K.has(Z)===false){K.add(Z);Z.usedTimes++}if(K.has(W)===false){K.add(W);W.usedTimes++}return this}remove(J){const Q=this.materialCache.get(J);for(const $ of Q){$.usedTimes--;if($.usedTimes===0)this.shaderCache.delete($.code)}this.materialCache.delete(J);return this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear();this.materialCache.clear()}_getShaderCacheForMaterial(J){const Q=this.materialCache;let $=Q.get(J);if($===undefined){$=new Set;Q.set(J,$)}return $}_getShaderStage(J){const Q=this.shaderCache;let $=Q.get(J);if($===undefined){$=new sK(J);Q.set(J,$)}return $}}class sK{constructor(J){this.id=$N++;this.code=J;this.usedTimes=0}}function ZN(J,Q,$,Z,W,K,H){const Y=new _Q;const X=new nK;const U=new Set;const G=[];const E=new Map;const N=W.logarithmicDepthBuffer;let q=W.precision;const O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(B){U.add(B);if(B===0)return"uv";return`uv${B}`}function D(B,_,A,y,f){const j=y.fog;const g=f.geometry;const x=B.isMeshStandardMaterial?y.environment:null;const p=(B.isMeshStandardMaterial?$:Q).get(B.envMap||x);const m=!!p&&p.mapping===S6?p.image.height:null;const t=O[B.type];if(B.precision!==null){q=W.getMaxPrecision(B.precision);if(q!==B.precision){hJ("WebGLProgram.getParameters:",B.precision,"not supported, using",q,"instead.")}}const $J=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color;const GJ=$J!==undefined?$J.length:0;let NJ=0;if(g.morphAttributes.position!==undefined)NJ=1;if(g.morphAttributes.normal!==undefined)NJ=2;if(g.morphAttributes.color!==undefined)NJ=3;let cJ,AJ;let n,QJ;if(t){const Y0=y8[t];cJ=Y0.vertexShader;AJ=Y0.fragmentShader}else{cJ=B.vertexShader;AJ=B.fragmentShader;X.update(B);n=X.getVertexShaderID(B);QJ=X.getFragmentShaderID(B)}const WJ=J.getRenderTarget();const MJ=J.state.buffers.depth.getReversed();const VJ=f.isInstancedMesh===true;const CJ=f.isBatchedMesh===true;const lJ=!!B.map;const gJ=!!B.matcap;const yJ=!!p;const jJ=!!B.aoMap;const PJ=!!B.lightMap;const J0=!!B.bumpMap;const v=!!B.normalMap;const Q0=!!B.displacementMap;const pJ=!!B.emissiveMap;const q0=!!B.metalnessMap;const TJ=!!B.roughnessMap;const H0=B.anisotropy>0;const P=B.clearcoat>0;const z=B.dispersion>0;const c=B.iridescence>0;const r=B.sheen>0;const JJ=B.transmission>0;const a=H0&&!!B.anisotropyMap;const IJ=P&&!!B.clearcoatMap;const UJ=P&&!!B.clearcoatNormalMap;const b=P&&!!B.clearcoatRoughnessMap;const KJ=c&&!!B.iridescenceMap;const e=c&&!!B.iridescenceThicknessMap;const ZJ=r&&!!B.sheenColorMap;const OJ=r&&!!B.sheenRoughnessMap;const LJ=!!B.specularMap;const qJ=!!B.specularColorMap;const nJ=!!B.specularIntensityMap;const h=JJ&&!!B.transmissionMap;const XJ=JJ&&!!B.thicknessMap;const YJ=!!B.gradientMap;const RJ=!!B.alphaMap;const HJ=B.alphaTest>0;const o=!!B.alphaHash;const BJ=!!B.extensions;let uJ=I8;if(B.toneMapped){if(WJ===null||WJ.isXRRenderTarget===true){uJ=J.toneMapping}}const O0={shaderID:t,shaderType:B.type,shaderName:B.name,vertexShader:cJ,fragmentShader:AJ,defines:B.defines,customVertexShaderID:n,customFragmentShaderID:QJ,isRawShaderMaterial:B.isRawShaderMaterial===true,glslVersion:B.glslVersion,precision:q,batching:CJ,batchingColor:CJ&&f._colorsTexture!==null,instancing:VJ,instancingColor:VJ&&f.instanceColor!==null,instancingMorph:VJ&&f.morphTexture!==null,outputColorSpace:WJ===null?J.outputColorSpace:WJ.isXRRenderTarget===true?WJ.texture.colorSpace:I9,alphaToCoverage:!!B.alphaToCoverage,map:lJ,matcap:gJ,envMap:yJ,envMapMode:yJ&&p.mapping,envMapCubeUVHeight:m,aoMap:jJ,lightMap:PJ,bumpMap:J0,normalMap:v,displacementMap:Q0,emissiveMap:pJ,normalMapObjectSpace:v&&B.normalMapType===ZK,normalMapTangentSpace:v&&B.normalMapType===$K,metalnessMap:q0,roughnessMap:TJ,anisotropy:H0,anisotropyMap:a,clearcoat:P,clearcoatMap:IJ,clearcoatNormalMap:UJ,clearcoatRoughnessMap:b,dispersion:z,iridescence:c,iridescenceMap:KJ,iridescenceThicknessMap:e,sheen:r,sheenColorMap:ZJ,sheenRoughnessMap:OJ,specularMap:LJ,specularColorMap:qJ,specularIntensityMap:nJ,transmission:JJ,transmissionMap:h,thicknessMap:XJ,gradientMap:YJ,opaque:B.transparent===false&&B.blending===A8&&B.alphaToCoverage===false,alphaMap:RJ,alphaTest:HJ,alphaHash:o,combine:B.combine,mapUv:lJ&&k(B.map.channel),aoMapUv:jJ&&k(B.aoMap.channel),lightMapUv:PJ&&k(B.lightMap.channel),bumpMapUv:J0&&k(B.bumpMap.channel),normalMapUv:v&&k(B.normalMap.channel),displacementMapUv:Q0&&k(B.displacementMap.channel),emissiveMapUv:pJ&&k(B.emissiveMap.channel),metalnessMapUv:q0&&k(B.metalnessMap.channel),roughnessMapUv:TJ&&k(B.roughnessMap.channel),anisotropyMapUv:a&&k(B.anisotropyMap.channel),clearcoatMapUv:IJ&&k(B.clearcoatMap.channel),clearcoatNormalMapUv:UJ&&k(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&k(B.clearcoatRoughnessMap.channel),iridescenceMapUv:KJ&&k(B.iridescenceMap.channel),iridescenceThicknessMapUv:e&&k(B.iridescenceThicknessMap.channel),sheenColorMapUv:ZJ&&k(B.sheenColorMap.channel),sheenRoughnessMapUv:OJ&&k(B.sheenRoughnessMap.channel),specularMapUv:LJ&&k(B.specularMap.channel),specularColorMapUv:qJ&&k(B.specularColorMap.channel),specularIntensityMapUv:nJ&&k(B.specularIntensityMap.channel),transmissionMapUv:h&&k(B.transmissionMap.channel),thicknessMapUv:XJ&&k(B.thicknessMap.channel),alphaMapUv:RJ&&k(B.alphaMap.channel),vertexTangents:!!g.attributes.tangent&&(v||H0),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===true&&!!g.attributes.color&&g.attributes.color.itemSize===4,pointsUvs:f.isPoints===true&&!!g.attributes.uv&&(lJ||RJ),fog:!!j,useFog:B.fog===true,fogExp2:!!j&&j.isFogExp2,flatShading:B.flatShading===true&&B.wireframe===false,sizeAttenuation:B.sizeAttenuation===true,logarithmicDepthBuffer:N,reversedDepthBuffer:MJ,skinning:f.isSkinnedMesh===true,morphTargets:g.morphAttributes.position!==undefined,morphNormals:g.morphAttributes.normal!==undefined,morphColors:g.morphAttributes.color!==undefined,morphTargetsCount:GJ,morphTextureStride:NJ,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:B.dithering,shadowMapEnabled:J.shadowMap.enabled&&A.length>0,shadowMapType:J.shadowMap.type,toneMapping:uJ,decodeVideoTexture:lJ&&B.map.isVideoTexture===true&&rJ.getTransfer(B.map.colorSpace)===Z0,decodeVideoTextureEmissive:pJ&&B.emissiveMap.isVideoTexture===true&&rJ.getTransfer(B.emissiveMap.colorSpace)===Z0,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===J8,flipSided:B.side===o0,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:BJ&&B.extensions.clipCullDistance===true&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(BJ&&B.extensions.multiDraw===true||CJ)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};O0.vertexUv1s=U.has(1);O0.vertexUv2s=U.has(2);O0.vertexUv3s=U.has(3);U.clear();return O0}function F(B){const _=[];if(B.shaderID){_.push(B.shaderID)}else{_.push(B.customVertexShaderID);_.push(B.customFragmentShaderID)}if(B.defines!==undefined){for(const A in B.defines){_.push(A);_.push(B.defines[A])}}if(B.isRawShaderMaterial===false){L(_,B);V(_,B);_.push(J.outputColorSpace)}_.push(B.customProgramCacheKey);return _.join()}function L(B,_){B.push(_.precision);B.push(_.outputColorSpace);B.push(_.envMapMode);B.push(_.envMapCubeUVHeight);B.push(_.mapUv);B.push(_.alphaMapUv);B.push(_.lightMapUv);B.push(_.aoMapUv);B.push(_.bumpMapUv);B.push(_.normalMapUv);B.push(_.displacementMapUv);B.push(_.emissiveMapUv);B.push(_.metalnessMapUv);B.push(_.roughnessMapUv);B.push(_.anisotropyMapUv);B.push(_.clearcoatMapUv);B.push(_.clearcoatNormalMapUv);B.push(_.clearcoatRoughnessMapUv);B.push(_.iridescenceMapUv);B.push(_.iridescenceThicknessMapUv);B.push(_.sheenColorMapUv);B.push(_.sheenRoughnessMapUv);B.push(_.specularMapUv);B.push(_.specularColorMapUv);B.push(_.specularIntensityMapUv);B.push(_.transmissionMapUv);B.push(_.thicknessMapUv);B.push(_.combine);B.push(_.fogExp2);B.push(_.sizeAttenuation);B.push(_.morphTargetsCount);B.push(_.morphAttributeCount);B.push(_.numDirLights);B.push(_.numPointLights);B.push(_.numSpotLights);B.push(_.numSpotLightMaps);B.push(_.numHemiLights);B.push(_.numRectAreaLights);B.push(_.numDirLightShadows);B.push(_.numPointLightShadows);B.push(_.numSpotLightShadows);B.push(_.numSpotLightShadowsWithMaps);B.push(_.numLightProbes);B.push(_.shadowMapType);B.push(_.toneMapping);B.push(_.numClippingPlanes);B.push(_.numClipIntersection);B.push(_.depthPacking)}function V(B,_){Y.disableAll();if(_.instancing)Y.enable(0);if(_.instancingColor)Y.enable(1);if(_.instancingMorph)Y.enable(2);if(_.matcap)Y.enable(3);if(_.envMap)Y.enable(4);if(_.normalMapObjectSpace)Y.enable(5);if(_.normalMapTangentSpace)Y.enable(6);if(_.clearcoat)Y.enable(7);if(_.iridescence)Y.enable(8);if(_.alphaTest)Y.enable(9);if(_.vertexColors)Y.enable(10);if(_.vertexAlphas)Y.enable(11);if(_.vertexUv1s)Y.enable(12);if(_.vertexUv2s)Y.enable(13);if(_.vertexUv3s)Y.enable(14);if(_.vertexTangents)Y.enable(15);if(_.anisotropy)Y.enable(16);if(_.alphaHash)Y.enable(17);if(_.batching)Y.enable(18);if(_.dispersion)Y.enable(19);if(_.batchingColor)Y.enable(20);if(_.gradientMap)Y.enable(21);B.push(Y.mask);Y.disableAll();if(_.fog)Y.enable(0);if(_.useFog)Y.enable(1);if(_.flatShading)Y.enable(2);if(_.logarithmicDepthBuffer)Y.enable(3);if(_.reversedDepthBuffer)Y.enable(4);if(_.skinning)Y.enable(5);if(_.morphTargets)Y.enable(6);if(_.morphNormals)Y.enable(7);if(_.morphColors)Y.enable(8);if(_.premultipliedAlpha)Y.enable(9);if(_.shadowMapEnabled)Y.enable(10);if(_.doubleSided)Y.enable(11);if(_.flipSided)Y.enable(12);if(_.useDepthPacking)Y.enable(13);if(_.dithering)Y.enable(14);if(_.transmission)Y.enable(15);if(_.sheen)Y.enable(16);if(_.opaque)Y.enable(17);if(_.pointsUvs)Y.enable(18);if(_.decodeVideoTexture)Y.enable(19);if(_.decodeVideoTextureEmissive)Y.enable(20);if(_.alphaToCoverage)Y.enable(21);B.push(Y.mask)}function R(B){const _=O[B.type];let A;if(_){const y=y8[_];A=qK.clone(y.uniforms)}else{A=B.uniforms}return A}function C(B,_){let A=E.get(_);if(A!==undefined){++A.usedTimes}else{A=new QN(J,_,B,K);G.push(A);E.set(_,A)}return A}function M(B){if(--B.usedTimes===0){const _=G.indexOf(B);G[_]=G[G.length-1];G.pop();E.delete(B.cacheKey);B.destroy()}}function I(B){X.remove(B)}function T(){X.dispose()}return{getParameters:D,getProgramCacheKey:F,getUniforms:R,acquireProgram:C,releaseProgram:M,releaseShaderCache:I,programs:G,dispose:T}}function WN(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===undefined){Y={};J.set(H,Y)}return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function KN(J,Q){if(J.groupOrder!==Q.groupOrder){return J.groupOrder-Q.groupOrder}else if(J.renderOrder!==Q.renderOrder){return J.renderOrder-Q.renderOrder}else if(J.material.id!==Q.material.id){return J.material.id-Q.material.id}else if(J.z!==Q.z){return J.z-Q.z}else{return J.id-Q.id}}function vK(J,Q){if(J.groupOrder!==Q.groupOrder){return J.groupOrder-Q.groupOrder}else if(J.renderOrder!==Q.renderOrder){return J.renderOrder-Q.renderOrder}else if(J.z!==Q.z){return Q.z-J.z}else{return J.id-Q.id}}function bK(){const J=[];let Q=0;const $=[];const Z=[];const W=[];function K(){Q=0;$.length=0;Z.length=0;W.length=0}function H(E,N,q,O,k,D){let F=J[Q];if(F===undefined){F={id:E.id,object:E,geometry:N,material:q,groupOrder:O,renderOrder:E.renderOrder,z:k,group:D};J[Q]=F}else{F.id=E.id;F.object=E;F.geometry=N;F.material=q;F.groupOrder=O;F.renderOrder=E.renderOrder;F.z=k;F.group=D}Q++;return F}function Y(E,N,q,O,k,D){const F=H(E,N,q,O,k,D);if(q.transmission>0){Z.push(F)}else if(q.transparent===true){W.push(F)}else{$.push(F)}}function X(E,N,q,O,k,D){const F=H(E,N,q,O,k,D);if(q.transmission>0){Z.unshift(F)}else if(q.transparent===true){W.unshift(F)}else{$.unshift(F)}}function U(E,N){if($.length>1)$.sort(E||KN);if(Z.length>1)Z.sort(N||vK);if(W.length>1)W.sort(N||vK)}function G(){for(let E=Q,N=J.length;E<N;E++){const q=J[E];if(q.id===null)break;q.id=null;q.object=null;q.geometry=null;q.material=null;q.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:Y,unshift:X,finish:G,sort:U}}function HN(){let J=new WeakMap;function Q(Z,W){const K=J.get(Z);let H;if(K===undefined){H=new bK;J.set(Z,[H])}else{if(W>=K.length){H=new bK;K.push(H)}else{H=K[W]}}return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function YN(){const J={};return{get:function(Q){if(J[Q.id]!==undefined){return J[Q.id]}let $;switch(Q.type){case"DirectionalLight":$={direction:new S,color:new aJ};break;case"SpotLight":$={position:new S,direction:new S,color:new aJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new S,color:new aJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new S,skyColor:new aJ,groundColor:new aJ};break;case"RectAreaLight":$={color:new aJ,position:new S,halfWidth:new S,halfHeight:new S};break}J[Q.id]=$;return $}}}function XN(){const J={};return{get:function(Q){if(J[Q.id]!==undefined){return J[Q.id]}let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _J};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _J};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _J,shadowCameraNear:1,shadowCameraFar:1000};break}J[Q.id]=$;return $}}}var UN=0;function GN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function EN(J){const Q=new YN;const $=XN();const Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new S);const W=new S;const K=new xJ;const H=new xJ;function Y(U){let G=0,E=0,N=0;for(let B=0;B<9;B++)Z.probe[B].set(0,0,0);let q=0;let O=0;let k=0;let D=0;let F=0;let L=0;let V=0;let R=0;let C=0;let M=0;let I=0;U.sort(GN);for(let B=0,_=U.length;B<_;B++){const A=U[B];const y=A.color;const f=A.intensity;const j=A.distance;let g=null;if(A.shadow&&A.shadow.map){if(A.shadow.map.texture.format===u8){g=A.shadow.map.texture}else{g=A.shadow.map.depthTexture||A.shadow.map.texture}}if(A.isAmbientLight){G+=y.r*f;E+=y.g*f;N+=y.b*f}else if(A.isLightProbe){for(let x=0;x<9;x++){Z.probe[x].addScaledVector(A.sh.coefficients[x],f)}I++}else if(A.isDirectionalLight){const x=Q.get(A);x.color.copy(A.color).multiplyScalar(A.intensity);if(A.castShadow){const p=A.shadow;const m=$.get(A);m.shadowIntensity=p.intensity;m.shadowBias=p.bias;m.shadowNormalBias=p.normalBias;m.shadowRadius=p.radius;m.shadowMapSize=p.mapSize;Z.directionalShadow[q]=m;Z.directionalShadowMap[q]=g;Z.directionalShadowMatrix[q]=A.shadow.matrix;L++}Z.directional[q]=x;q++}else if(A.isSpotLight){const x=Q.get(A);x.position.setFromMatrixPosition(A.matrixWorld);x.color.copy(y).multiplyScalar(f);x.distance=j;x.coneCos=Math.cos(A.angle);x.penumbraCos=Math.cos(A.angle*(1-A.penumbra));x.decay=A.decay;Z.spot[k]=x;const p=A.shadow;if(A.map){Z.spotLightMap[C]=A.map;C++;p.updateMatrices(A);if(A.castShadow)M++}Z.spotLightMatrix[k]=p.matrix;if(A.castShadow){const m=$.get(A);m.shadowIntensity=p.intensity;m.shadowBias=p.bias;m.shadowNormalBias=p.normalBias;m.shadowRadius=p.radius;m.shadowMapSize=p.mapSize;Z.spotShadow[k]=m;Z.spotShadowMap[k]=g;R++}k++}else if(A.isRectAreaLight){const x=Q.get(A);x.color.copy(y).multiplyScalar(f);x.halfWidth.set(A.width*0.5,0,0);x.halfHeight.set(0,A.height*0.5,0);Z.rectArea[D]=x;D++}else if(A.isPointLight){const x=Q.get(A);x.color.copy(A.color).multiplyScalar(A.intensity);x.distance=A.distance;x.decay=A.decay;if(A.castShadow){const p=A.shadow;const m=$.get(A);m.shadowIntensity=p.intensity;m.shadowBias=p.bias;m.shadowNormalBias=p.normalBias;m.shadowRadius=p.radius;m.shadowMapSize=p.mapSize;m.shadowCameraNear=p.camera.near;m.shadowCameraFar=p.camera.far;Z.pointShadow[O]=m;Z.pointShadowMap[O]=g;Z.pointShadowMatrix[O]=A.shadow.matrix;V++}Z.point[O]=x;O++}else if(A.isHemisphereLight){const x=Q.get(A);x.skyColor.copy(A.color).multiplyScalar(f);x.groundColor.copy(A.groundColor).multiplyScalar(f);Z.hemi[F]=x;F++}}if(D>0){if(J.has("OES_texture_float_linear")===true){Z.rectAreaLTC1=FJ.LTC_FLOAT_1;Z.rectAreaLTC2=FJ.LTC_FLOAT_2}else{Z.rectAreaLTC1=FJ.LTC_HALF_1;Z.rectAreaLTC2=FJ.LTC_HALF_2}}Z.ambient[0]=G;Z.ambient[1]=E;Z.ambient[2]=N;const T=Z.hash;if(T.directionalLength!==q||T.pointLength!==O||T.spotLength!==k||T.rectAreaLength!==D||T.hemiLength!==F||T.numDirectionalShadows!==L||T.numPointShadows!==V||T.numSpotShadows!==R||T.numSpotMaps!==C||T.numLightProbes!==I){Z.directional.length=q;Z.spot.length=k;Z.rectArea.length=D;Z.point.length=O;Z.hemi.length=F;Z.directionalShadow.length=L;Z.directionalShadowMap.length=L;Z.pointShadow.length=V;Z.pointShadowMap.length=V;Z.spotShadow.length=R;Z.spotShadowMap.length=R;Z.directionalShadowMatrix.length=L;Z.pointShadowMatrix.length=V;Z.spotLightMatrix.length=R+C-M;Z.spotLightMap.length=C;Z.numSpotLightShadowsWithMaps=M;Z.numLightProbes=I;T.directionalLength=q;T.pointLength=O;T.spotLength=k;T.rectAreaLength=D;T.hemiLength=F;T.numDirectionalShadows=L;T.numPointShadows=V;T.numSpotShadows=R;T.numSpotMaps=C;T.numLightProbes=I;Z.version=UN++}}function X(U,G){let E=0;let N=0;let q=0;let O=0;let k=0;const D=G.matrixWorldInverse;for(let F=0,L=U.length;F<L;F++){const V=U[F];if(V.isDirectionalLight){const R=Z.directional[E];R.direction.setFromMatrixPosition(V.matrixWorld);W.setFromMatrixPosition(V.target.matrixWorld);R.direction.sub(W);R.direction.transformDirection(D);E++}else if(V.isSpotLight){const R=Z.spot[q];R.position.setFromMatrixPosition(V.matrixWorld);R.position.applyMatrix4(D);R.direction.setFromMatrixPosition(V.matrixWorld);W.setFromMatrixPosition(V.target.matrixWorld);R.direction.sub(W);R.direction.transformDirection(D);q++}else if(V.isRectAreaLight){const R=Z.rectArea[O];R.position.setFromMatrixPosition(V.matrixWorld);R.position.applyMatrix4(D);H.identity();K.copy(V.matrixWorld);K.premultiply(D);H.extractRotation(K);R.halfWidth.set(V.width*0.5,0,0);R.halfHeight.set(0,V.height*0.5,0);R.halfWidth.applyMatrix4(H);R.halfHeight.applyMatrix4(H);O++}else if(V.isPointLight){const R=Z.point[N];R.position.setFromMatrixPosition(V.matrixWorld);R.position.applyMatrix4(D);N++}else if(V.isHemisphereLight){const R=Z.hemi[k];R.direction.setFromMatrixPosition(V.matrixWorld);R.direction.transformDirection(D);k++}}}return{setup:Y,setupView:X,state:Z}}function fK(J){const Q=new EN(J);const $=[];const Z=[];function W(G){U.camera=G;$.length=0;Z.length=0}function K(G){$.push(G)}function H(G){Z.push(G)}function Y(){Q.setup($)}function X(G){Q.setupView($,G)}const U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:Y,setupLightsView:X,pushLight:K,pushShadow:H}}function NN(J){let Q=new WeakMap;function $(W,K=0){const H=Q.get(W);let Y;if(H===undefined){Y=new fK(J);Q.set(W,[Y])}else{if(K>=H.length){Y=new fK(J);H.push(Y)}else{Y=H[K]}}return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var qN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var DN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;var ON=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)];var FN=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)];var hK=new xJ;var c6=new S;var zZ=new S;function kN(J,Q,$){let Z=new SQ;const W=new _J,K=new _J,H=new k0,Y=new $Z,X=new ZZ,U={},G=$.maxTextureSize;const E={[F8]:o0,[o0]:F8,[J8]:J8};const N=new y0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _J},radius:{value:4}},vertexShader:qN,fragmentShader:DN});const q=N.clone();q.defines.HORIZONTAL_PASS=1;const O=new u0;O.setAttribute("position",new i0(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));const k=new M0(O,N);const D=this;this.enabled=false;this.autoUpdate=true;this.needsUpdate=false;this.type=T6;let F=this.type;this.render=function(M,I,T){if(D.enabled===false)return;if(D.autoUpdate===false&&D.needsUpdate===false)return;if(M.length===0)return;if(M.type===vW){hJ("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.");M.type=T6}const B=J.getRenderTarget();const _=J.getActiveCubeFace();const A=J.getActiveMipmapLevel();const y=J.state;y.setBlending(T8);if(y.buffers.depth.getReversed()===true){y.buffers.color.setClear(0,0,0,0)}else{y.buffers.color.setClear(1,1,1,1)}y.buffers.depth.setTest(true);y.setScissorTest(false);const f=F!==this.type;if(f){I.traverse(function(j){if(j.material){if(Array.isArray(j.material)){j.material.forEach((g)=>g.needsUpdate=true)}else{j.material.needsUpdate=true}}})}for(let j=0,g=M.length;j<g;j++){const x=M[j];const p=x.shadow;if(p===undefined){hJ("WebGLShadowMap:",x,"has no shadow.");continue}if(p.autoUpdate===false&&p.needsUpdate===false)continue;W.copy(p.mapSize);const m=p.getFrameExtents();W.multiply(m);K.copy(p.mapSize);if(W.x>G||W.y>G){if(W.x>G){K.x=Math.floor(G/m.x);W.x=K.x*m.x;p.mapSize.x=K.x}if(W.y>G){K.y=Math.floor(G/m.y);W.y=K.y*m.y;p.mapSize.y=K.y}}if(p.map===null||f===true){if(p.map!==null){if(p.map.depthTexture!==null){p.map.depthTexture.dispose();p.map.depthTexture=null}p.map.dispose()}if(this.type===$6){if(x.isPointLight){hJ("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}p.map=new $8(W.x,W.y,{format:u8,type:U8,minFilter:b0,magFilter:b0,generateMipmaps:false});p.map.texture.name=x.name+".shadowMap";p.map.depthTexture=new n8(W.x,W.y,Q8);p.map.depthTexture.name=x.name+".shadowMapDepth";p.map.depthTexture.format=k8;p.map.depthTexture.compareFunction=null;p.map.depthTexture.minFilter=j0;p.map.depthTexture.magFilter=j0}else{if(x.isPointLight){p.map=new AQ(W.x);p.map.depthTexture=new JZ(W.x,f0)}else{p.map=new $8(W.x,W.y);p.map.depthTexture=new n8(W.x,W.y,f0)}p.map.depthTexture.name=x.name+".shadowMap";p.map.depthTexture.format=k8;const $J=J.state.buffers.depth.getReversed();if(this.type===T6){p.map.depthTexture.compareFunction=$J?LQ:VQ;p.map.depthTexture.minFilter=b0;p.map.depthTexture.magFilter=b0}else{p.map.depthTexture.compareFunction=null;p.map.depthTexture.minFilter=j0;p.map.depthTexture.magFilter=j0}}p.camera.updateProjectionMatrix()}const t=p.map.isWebGLCubeRenderTarget?6:1;for(let $J=0;$J<t;$J++){if(p.map.isWebGLCubeRenderTarget){J.setRenderTarget(p.map,$J);J.clear()}else{if($J===0){J.setRenderTarget(p.map);J.clear()}const GJ=p.getViewport($J);H.set(K.x*GJ.x,K.y*GJ.y,K.x*GJ.z,K.y*GJ.w);y.viewport(H)}if(x.isPointLight){const GJ=p.camera;const NJ=p.matrix;const cJ=x.distance||GJ.far;if(cJ!==GJ.far){GJ.far=cJ;GJ.updateProjectionMatrix()}c6.setFromMatrixPosition(x.matrixWorld);GJ.position.copy(c6);zZ.copy(GJ.position);zZ.add(ON[$J]);GJ.up.copy(FN[$J]);GJ.lookAt(zZ);GJ.updateMatrixWorld();NJ.makeTranslation(-c6.x,-c6.y,-c6.z);hK.multiplyMatrices(GJ.projectionMatrix,GJ.matrixWorldInverse);p._frustum.setFromProjectionMatrix(hK,GJ.coordinateSystem,GJ.reversedDepth)}else{p.updateMatrices(x)}Z=p.getFrustum();R(I,T,p.camera,x,this.type)}if(p.isPointLightShadow!==true&&this.type===$6){L(p,T)}p.needsUpdate=false}F=this.type;D.needsUpdate=false;J.setRenderTarget(B,_,A)};function L(M,I){const T=Q.update(k);if(N.defines.VSM_SAMPLES!==M.blurSamples){N.defines.VSM_SAMPLES=M.blurSamples;q.defines.VSM_SAMPLES=M.blurSamples;N.needsUpdate=true;q.needsUpdate=true}if(M.mapPass===null){M.mapPass=new $8(W.x,W.y,{format:u8,type:U8})}N.uniforms.shadow_pass.value=M.map.depthTexture;N.uniforms.resolution.value=M.mapSize;N.uniforms.radius.value=M.radius;J.setRenderTarget(M.mapPass);J.clear();J.renderBufferDirect(I,null,T,N,k,null);q.uniforms.shadow_pass.value=M.mapPass.texture;q.uniforms.resolution.value=M.mapSize;q.uniforms.radius.value=M.radius;J.setRenderTarget(M.map);J.clear();J.renderBufferDirect(I,null,T,q,k,null)}function V(M,I,T,B){let _=null;const A=T.isPointLight===true?M.customDistanceMaterial:M.customDepthMaterial;if(A!==undefined){_=A}else{_=T.isPointLight===true?X:Y;if(J.localClippingEnabled&&I.clipShadows===true&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===true){const y=_.uuid,f=I.uuid;let j=U[y];if(j===undefined){j={};U[y]=j}let g=j[f];if(g===undefined){g=_.clone();j[f]=g;I.addEventListener("dispose",C)}_=g}}_.visible=I.visible;_.wireframe=I.wireframe;if(B===$6){_.side=I.shadowSide!==null?I.shadowSide:I.side}else{_.side=I.shadowSide!==null?I.shadowSide:E[I.side]}_.alphaMap=I.alphaMap;_.alphaTest=I.alphaToCoverage===true?0.5:I.alphaTest;_.map=I.map;_.clipShadows=I.clipShadows;_.clippingPlanes=I.clippingPlanes;_.clipIntersection=I.clipIntersection;_.displacementMap=I.displacementMap;_.displacementScale=I.displacementScale;_.displacementBias=I.displacementBias;_.wireframeLinewidth=I.wireframeLinewidth;_.linewidth=I.linewidth;if(T.isPointLight===true&&_.isMeshDistanceMaterial===true){const y=J.properties.get(_);y.light=T}return _}function R(M,I,T,B,_){if(M.visible===false)return;const A=M.layers.test(I.layers);if(A&&(M.isMesh||M.isLine||M.isPoints)){if((M.castShadow||M.receiveShadow&&_===$6)&&(!M.frustumCulled||Z.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const f=Q.update(M);const j=M.material;if(Array.isArray(j)){const g=f.groups;for(let x=0,p=g.length;x<p;x++){const m=g[x];const t=j[m.materialIndex];if(t&&t.visible){const $J=V(M,t,B,_);M.onBeforeShadow(J,M,I,T,f,$J,m);J.renderBufferDirect(T,null,f,$J,M,m);M.onAfterShadow(J,M,I,T,f,$J,m)}}}else if(j.visible){const g=V(M,j,B,_);M.onBeforeShadow(J,M,I,T,f,g,null);J.renderBufferDirect(T,null,f,g,M,null);M.onAfterShadow(J,M,I,T,f,g,null)}}}const y=M.children;for(let f=0,j=y.length;f<j;f++){R(y[f],I,T,B,_)}}function C(M){const I=M.target;I.removeEventListener("dispose",C);for(const T in U){const B=U[T];const _=M.target.uuid;if(_ in B){const A=B[_];A.dispose();delete B[_]}}}}var MN={[A7]:P7,[T7]:y7,[S7]:v7,[B9]:j7,[P7]:A7,[y7]:T7,[v7]:S7,[j7]:B9};function RN(J,Q){function $(){let h=false;const XJ=new k0;let YJ=null;const RJ=new k0(0,0,0,0);return{setMask:function(HJ){if(YJ!==HJ&&!h){J.colorMask(HJ,HJ,HJ,HJ);YJ=HJ}},setLocked:function(HJ){h=HJ},setClear:function(HJ,o,BJ,uJ,O0){if(O0===true){HJ*=uJ;o*=uJ;BJ*=uJ}XJ.set(HJ,o,BJ,uJ);if(RJ.equals(XJ)===false){J.clearColor(HJ,o,BJ,uJ);RJ.copy(XJ)}},reset:function(){h=false;YJ=null;RJ.set(-1,0,0,0)}}}function Z(){let h=false;let XJ=false;let YJ=null;let RJ=null;let HJ=null;return{setReversed:function(o){if(XJ!==o){const BJ=Q.get("EXT_clip_control");if(o){BJ.clipControlEXT(BJ.LOWER_LEFT_EXT,BJ.ZERO_TO_ONE_EXT)}else{BJ.clipControlEXT(BJ.LOWER_LEFT_EXT,BJ.NEGATIVE_ONE_TO_ONE_EXT)}XJ=o;const uJ=HJ;HJ=null;this.setClear(uJ)}},getReversed:function(){return XJ},setTest:function(o){if(o){WJ(J.DEPTH_TEST)}else{MJ(J.DEPTH_TEST)}},setMask:function(o){if(YJ!==o&&!h){J.depthMask(o);YJ=o}},setFunc:function(o){if(XJ)o=MN[o];if(RJ!==o){switch(o){case A7:J.depthFunc(J.NEVER);break;case P7:J.depthFunc(J.ALWAYS);break;case T7:J.depthFunc(J.LESS);break;case B9:J.depthFunc(J.LEQUAL);break;case S7:J.depthFunc(J.EQUAL);break;case j7:J.depthFunc(J.GEQUAL);break;case y7:J.depthFunc(J.GREATER);break;case v7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}RJ=o}},setLocked:function(o){h=o},setClear:function(o){if(HJ!==o){if(XJ){o=1-o}J.clearDepth(o);HJ=o}},reset:function(){h=false;YJ=null;RJ=null;HJ=null;XJ=false}}}function W(){let h=false;let XJ=null;let YJ=null;let RJ=null;let HJ=null;let o=null;let BJ=null;let uJ=null;let O0=null;return{setTest:function(Y0){if(!h){if(Y0){WJ(J.STENCIL_TEST)}else{MJ(J.STENCIL_TEST)}}},setMask:function(Y0){if(XJ!==Y0&&!h){J.stencilMask(Y0);XJ=Y0}},setFunc:function(Y0,b8,f8){if(YJ!==Y0||RJ!==b8||HJ!==f8){J.stencilFunc(Y0,b8,f8);YJ=Y0;RJ=b8;HJ=f8}},setOp:function(Y0,b8,f8){if(o!==Y0||BJ!==b8||uJ!==f8){J.stencilOp(Y0,b8,f8);o=Y0;BJ=b8;uJ=f8}},setLocked:function(Y0){h=Y0},setClear:function(Y0){if(O0!==Y0){J.clearStencil(Y0);O0=Y0}},reset:function(){h=false;XJ=null;YJ=null;RJ=null;HJ=null;o=null;BJ=null;uJ=null;O0=null}}}const K=new $;const H=new Z;const Y=new W;const X=new WeakMap;const U=new WeakMap;let G={};let E={};let N=new WeakMap;let q=[];let O=null;let k=false;let D=null;let F=null;let L=null;let V=null;let R=null;let C=null;let M=null;let I=new aJ(0,0,0);let T=0;let B=false;let _=null;let A=null;let y=null;let f=null;let j=null;const g=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let x=false;let p=0;const m=J.getParameter(J.VERSION);if(m.indexOf("WebGL")!==-1){p=parseFloat(/^WebGL (\d)/.exec(m)[1]);x=p>=1}else if(m.indexOf("OpenGL ES")!==-1){p=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]);x=p>=2}let t=null;let $J={};const GJ=J.getParameter(J.SCISSOR_BOX);const NJ=J.getParameter(J.VIEWPORT);const cJ=new k0().fromArray(GJ);const AJ=new k0().fromArray(NJ);function n(h,XJ,YJ,RJ){const HJ=new Uint8Array(4);const o=J.createTexture();J.bindTexture(h,o);J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST);J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let BJ=0;BJ<YJ;BJ++){if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY){J.texImage3D(XJ,0,J.RGBA,1,1,RJ,0,J.RGBA,J.UNSIGNED_BYTE,HJ)}else{J.texImage2D(XJ+BJ,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,HJ)}}return o}const QJ={};QJ[J.TEXTURE_2D]=n(J.TEXTURE_2D,J.TEXTURE_2D,1);QJ[J.TEXTURE_CUBE_MAP]=n(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6);QJ[J.TEXTURE_2D_ARRAY]=n(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1);QJ[J.TEXTURE_3D]=n(J.TEXTURE_3D,J.TEXTURE_3D,1,1);K.setClear(0,0,0,1);H.setClear(1);Y.setClear(0);WJ(J.DEPTH_TEST);H.setFunc(B9);J0(false);v(B$);WJ(J.CULL_FACE);jJ(T8);function WJ(h){if(G[h]!==true){J.enable(h);G[h]=true}}function MJ(h){if(G[h]!==false){J.disable(h);G[h]=false}}function VJ(h,XJ){if(E[h]!==XJ){J.bindFramebuffer(h,XJ);E[h]=XJ;if(h===J.DRAW_FRAMEBUFFER){E[J.FRAMEBUFFER]=XJ}if(h===J.FRAMEBUFFER){E[J.DRAW_FRAMEBUFFER]=XJ}return true}return false}function CJ(h,XJ){let YJ=q;let RJ=false;if(h){YJ=N.get(XJ);if(YJ===undefined){YJ=[];N.set(XJ,YJ)}const HJ=h.textures;if(YJ.length!==HJ.length||YJ[0]!==J.COLOR_ATTACHMENT0){for(let o=0,BJ=HJ.length;o<BJ;o++){YJ[o]=J.COLOR_ATTACHMENT0+o}YJ.length=HJ.length;RJ=true}}else{if(YJ[0]!==J.BACK){YJ[0]=J.BACK;RJ=true}}if(RJ){J.drawBuffers(YJ)}}function lJ(h){if(O!==h){J.useProgram(h);O=h;return true}return false}const gJ={[$9]:J.FUNC_ADD,[bW]:J.FUNC_SUBTRACT,[fW]:J.FUNC_REVERSE_SUBTRACT};gJ[hW]=J.MIN;gJ[xW]=J.MAX;const yJ={[gW]:J.ZERO,[pW]:J.ONE,[mW]:J.SRC_COLOR,[z9]:J.SRC_ALPHA,[sW]:J.SRC_ALPHA_SATURATE,[cW]:J.DST_COLOR,[lW]:J.DST_ALPHA,[dW]:J.ONE_MINUS_SRC_COLOR,[_9]:J.ONE_MINUS_SRC_ALPHA,[nW]:J.ONE_MINUS_DST_COLOR,[uW]:J.ONE_MINUS_DST_ALPHA,[iW]:J.CONSTANT_COLOR,[oW]:J.ONE_MINUS_CONSTANT_COLOR,[aW]:J.CONSTANT_ALPHA,[rW]:J.ONE_MINUS_CONSTANT_ALPHA};function jJ(h,XJ,YJ,RJ,HJ,o,BJ,uJ,O0,Y0){if(h===T8){if(k===true){MJ(J.BLEND);k=false}return}if(k===false){WJ(J.BLEND);k=true}if(h!==C7){if(h!==D||Y0!==B){if(F!==$9||R!==$9){J.blendEquation(J.FUNC_ADD);F=$9;R=$9}if(Y0){switch(h){case A8:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I$:J.blendFunc(J.ONE,J.ONE);break;case w$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case C$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:dJ("WebGLState: Invalid blending: ",h);break}}else{switch(h){case A8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case w$:dJ("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C$:dJ("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dJ("WebGLState: Invalid blending: ",h);break}}L=null;V=null;C=null;M=null;I.set(0,0,0);T=0;D=h;B=Y0}return}HJ=HJ||XJ;o=o||YJ;BJ=BJ||RJ;if(XJ!==F||HJ!==R){J.blendEquationSeparate(gJ[XJ],gJ[HJ]);F=XJ;R=HJ}if(YJ!==L||RJ!==V||o!==C||BJ!==M){J.blendFuncSeparate(yJ[YJ],yJ[RJ],yJ[o],yJ[BJ]);L=YJ;V=RJ;C=o;M=BJ}if(uJ.equals(I)===false||O0!==T){J.blendColor(uJ.r,uJ.g,uJ.b,O0);I.copy(uJ);T=O0}D=h;B=false}function PJ(h,XJ){h.side===J8?MJ(J.CULL_FACE):WJ(J.CULL_FACE);let YJ=h.side===o0;if(XJ)YJ=!YJ;J0(YJ);h.blending===A8&&h.transparent===false?jJ(T8):jJ(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha);H.setFunc(h.depthFunc);H.setTest(h.depthTest);H.setMask(h.depthWrite);K.setMask(h.colorWrite);const RJ=h.stencilWrite;Y.setTest(RJ);if(RJ){Y.setMask(h.stencilWriteMask);Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask);Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass)}pJ(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits);h.alphaToCoverage===true?WJ(J.SAMPLE_ALPHA_TO_COVERAGE):MJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function J0(h){if(_!==h){if(h){J.frontFace(J.CW)}else{J.frontFace(J.CCW)}_=h}}function v(h){if(h!==jW){WJ(J.CULL_FACE);if(h!==A){if(h===B$){J.cullFace(J.BACK)}else if(h===yW){J.cullFace(J.FRONT)}else{J.cullFace(J.FRONT_AND_BACK)}}}else{MJ(J.CULL_FACE)}A=h}function Q0(h){if(h!==y){if(x)J.lineWidth(h);y=h}}function pJ(h,XJ,YJ){if(h){WJ(J.POLYGON_OFFSET_FILL);if(f!==XJ||j!==YJ){J.polygonOffset(XJ,YJ);f=XJ;j=YJ}}else{MJ(J.POLYGON_OFFSET_FILL)}}function q0(h){if(h){WJ(J.SCISSOR_TEST)}else{MJ(J.SCISSOR_TEST)}}function TJ(h){if(h===undefined)h=J.TEXTURE0+g-1;if(t!==h){J.activeTexture(h);t=h}}function H0(h,XJ,YJ){if(YJ===undefined){if(t===null){YJ=J.TEXTURE0+g-1}else{YJ=t}}let RJ=$J[YJ];if(RJ===undefined){RJ={type:undefined,texture:undefined};$J[YJ]=RJ}if(RJ.type!==h||RJ.texture!==XJ){if(t!==YJ){J.activeTexture(YJ);t=YJ}J.bindTexture(h,XJ||QJ[h]);RJ.type=h;RJ.texture=XJ}}function P(){const h=$J[t];if(h!==undefined&&h.type!==undefined){J.bindTexture(h.type,null);h.type=undefined;h.texture=undefined}}function z(){try{J.compressedTexImage2D(...arguments)}catch(h){dJ("WebGLState:",h)}}function c(){try{J.compressedTexImage3D(...arguments)}catch(h){dJ("WebGLState:",h)}}function r(){try{J.texSubImage2D(...arguments)}catch(h){dJ("WebGLState:",h)}}function JJ(){try{J.texSubImage3D(...arguments)}catch(h){dJ("WebGLState:",h)}}function a(){try{J.compressedTexSubImage2D(...arguments)}catch(h){dJ("WebGLState:",h)}}function IJ(){try{J.compressedTexSubImage3D(...arguments)}catch(h){dJ("WebGLState:",h)}}function UJ(){try{J.texStorage2D(...arguments)}catch(h){dJ("WebGLState:",h)}}function b(){try{J.texStorage3D(...arguments)}catch(h){dJ("WebGLState:",h)}}function KJ(){try{J.texImage2D(...arguments)}catch(h){dJ("WebGLState:",h)}}function e(){try{J.texImage3D(...arguments)}catch(h){dJ("WebGLState:",h)}}function ZJ(h){if(cJ.equals(h)===false){J.scissor(h.x,h.y,h.z,h.w);cJ.copy(h)}}function OJ(h){if(AJ.equals(h)===false){J.viewport(h.x,h.y,h.z,h.w);AJ.copy(h)}}function LJ(h,XJ){let YJ=U.get(XJ);if(YJ===undefined){YJ=new WeakMap;U.set(XJ,YJ)}let RJ=YJ.get(h);if(RJ===undefined){RJ=J.getUniformBlockIndex(XJ,h.name);YJ.set(h,RJ)}}function qJ(h,XJ){const YJ=U.get(XJ);const RJ=YJ.get(h);if(X.get(XJ)!==RJ){J.uniformBlockBinding(XJ,RJ,h.__bindingPointIndex);X.set(XJ,RJ)}}function nJ(){J.disable(J.BLEND);J.disable(J.CULL_FACE);J.disable(J.DEPTH_TEST);J.disable(J.POLYGON_OFFSET_FILL);J.disable(J.SCISSOR_TEST);J.disable(J.STENCIL_TEST);J.disable(J.SAMPLE_ALPHA_TO_COVERAGE);J.blendEquation(J.FUNC_ADD);J.blendFunc(J.ONE,J.ZERO);J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO);J.blendColor(0,0,0,0);J.colorMask(true,true,true,true);J.clearColor(0,0,0,0);J.depthMask(true);J.depthFunc(J.LESS);H.setReversed(false);J.clearDepth(1);J.stencilMask(4294967295);J.stencilFunc(J.ALWAYS,0,4294967295);J.stencilOp(J.KEEP,J.KEEP,J.KEEP);J.clearStencil(0);J.cullFace(J.BACK);J.frontFace(J.CCW);J.polygonOffset(0,0);J.activeTexture(J.TEXTURE0);J.bindFramebuffer(J.FRAMEBUFFER,null);J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null);J.bindFramebuffer(J.READ_FRAMEBUFFER,null);J.useProgram(null);J.lineWidth(1);J.scissor(0,0,J.canvas.width,J.canvas.height);J.viewport(0,0,J.canvas.width,J.canvas.height);G={};t=null;$J={};E={};N=new WeakMap;q=[];O=null;k=false;D=null;F=null;L=null;V=null;R=null;C=null;M=null;I=new aJ(0,0,0);T=0;B=false;_=null;A=null;y=null;f=null;j=null;cJ.set(0,0,J.canvas.width,J.canvas.height);AJ.set(0,0,J.canvas.width,J.canvas.height);K.reset();H.reset();Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:WJ,disable:MJ,bindFramebuffer:VJ,drawBuffers:CJ,useProgram:lJ,setBlending:jJ,setMaterial:PJ,setFlipSided:J0,setCullFace:v,setLineWidth:Q0,setPolygonOffset:pJ,setScissorTest:q0,activeTexture:TJ,bindTexture:H0,unbindTexture:P,compressedTexImage2D:z,compressedTexImage3D:c,texImage2D:KJ,texImage3D:e,updateUBOMapping:LJ,uniformBlockBinding:qJ,texStorage2D:UJ,texStorage3D:b,texSubImage2D:r,texSubImage3D:JJ,compressedTexSubImage2D:a,compressedTexSubImage3D:IJ,scissor:ZJ,viewport:OJ,reset:nJ}}function VN(J,Q,$,Z,W,K,H){const Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null;const X=typeof navigator==="undefined"?false:/OculusBrowser/g.test(navigator.userAgent);const U=new _J;const G=new WeakMap;let E;const N=new WeakMap;let q=false;try{q=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function O(P,z){return q?new OffscreenCanvas(P,z):P6("canvas")}function k(P,z,c){let r=1;const JJ=H0(P);if(JJ.width>c||JJ.height>c){r=c/Math.max(JJ.width,JJ.height)}if(r<1){if(typeof HTMLImageElement!=="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&P instanceof VideoFrame){const a=Math.floor(r*JJ.width);const IJ=Math.floor(r*JJ.height);if(E===undefined)E=O(a,IJ);const UJ=z?O(a,IJ):E;UJ.width=a;UJ.height=IJ;const b=UJ.getContext("2d");b.drawImage(P,0,0,a,IJ);hJ("WebGLRenderer: Texture has been resized from ("+JJ.width+"x"+JJ.height+") to ("+a+"x"+IJ+").");return UJ}else{if("data"in P){hJ("WebGLRenderer: Image in DataTexture is too big ("+JJ.width+"x"+JJ.height+").")}return P}}return P}function D(P){return P.generateMipmaps}function F(P){J.generateMipmap(P)}function L(P){if(P.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(P,z,c,r,JJ=false){if(P!==null){if(J[P]!==undefined)return J[P];hJ("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let a=z;if(z===J.RED){if(c===J.FLOAT)a=J.R32F;if(c===J.HALF_FLOAT)a=J.R16F;if(c===J.UNSIGNED_BYTE)a=J.R8}if(z===J.RED_INTEGER){if(c===J.UNSIGNED_BYTE)a=J.R8UI;if(c===J.UNSIGNED_SHORT)a=J.R16UI;if(c===J.UNSIGNED_INT)a=J.R32UI;if(c===J.BYTE)a=J.R8I;if(c===J.SHORT)a=J.R16I;if(c===J.INT)a=J.R32I}if(z===J.RG){if(c===J.FLOAT)a=J.RG32F;if(c===J.HALF_FLOAT)a=J.RG16F;if(c===J.UNSIGNED_BYTE)a=J.RG8}if(z===J.RG_INTEGER){if(c===J.UNSIGNED_BYTE)a=J.RG8UI;if(c===J.UNSIGNED_SHORT)a=J.RG16UI;if(c===J.UNSIGNED_INT)a=J.RG32UI;if(c===J.BYTE)a=J.RG8I;if(c===J.SHORT)a=J.RG16I;if(c===J.INT)a=J.RG32I}if(z===J.RGB_INTEGER){if(c===J.UNSIGNED_BYTE)a=J.RGB8UI;if(c===J.UNSIGNED_SHORT)a=J.RGB16UI;if(c===J.UNSIGNED_INT)a=J.RGB32UI;if(c===J.BYTE)a=J.RGB8I;if(c===J.SHORT)a=J.RGB16I;if(c===J.INT)a=J.RGB32I}if(z===J.RGBA_INTEGER){if(c===J.UNSIGNED_BYTE)a=J.RGBA8UI;if(c===J.UNSIGNED_SHORT)a=J.RGBA16UI;if(c===J.UNSIGNED_INT)a=J.RGBA32UI;if(c===J.BYTE)a=J.RGBA8I;if(c===J.SHORT)a=J.RGBA16I;if(c===J.INT)a=J.RGBA32I}if(z===J.RGB){if(c===J.UNSIGNED_INT_5_9_9_9_REV)a=J.RGB9_E5;if(c===J.UNSIGNED_INT_10F_11F_11F_REV)a=J.R11F_G11F_B10F}if(z===J.RGBA){const IJ=JJ?C6:rJ.getTransfer(r);if(c===J.FLOAT)a=J.RGBA32F;if(c===J.HALF_FLOAT)a=J.RGBA16F;if(c===J.UNSIGNED_BYTE)a=IJ===Z0?J.SRGB8_ALPHA8:J.RGBA8;if(c===J.UNSIGNED_SHORT_4_4_4_4)a=J.RGBA4;if(c===J.UNSIGNED_SHORT_5_5_5_1)a=J.RGB5_A1}if(a===J.R16F||a===J.R32F||a===J.RG16F||a===J.RG32F||a===J.RGBA16F||a===J.RGBA32F){Q.get("EXT_color_buffer_float")}return a}function R(P,z){let c;if(P){if(z===null||z===f0||z===W6){c=J.DEPTH24_STENCIL8}else if(z===Q8){c=J.DEPTH32F_STENCIL8}else if(z===Z6){c=J.DEPTH24_STENCIL8;hJ("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}}else{if(z===null||z===f0||z===W6){c=J.DEPTH_COMPONENT24}else if(z===Q8){c=J.DEPTH_COMPONENT32F}else if(z===Z6){c=J.DEPTH_COMPONENT16}}return c}function C(P,z){if(D(P)===true||P.isFramebufferTexture&&P.minFilter!==j0&&P.minFilter!==b0){return Math.log2(Math.max(z.width,z.height))+1}else if(P.mipmaps!==undefined&&P.mipmaps.length>0){return P.mipmaps.length}else if(P.isCompressedTexture&&Array.isArray(P.image)){return z.mipmaps.length}else{return 1}}function M(P){const z=P.target;z.removeEventListener("dispose",M);T(z);if(z.isVideoTexture){G.delete(z)}}function I(P){const z=P.target;z.removeEventListener("dispose",I);_(z)}function T(P){const z=Z.get(P);if(z.__webglInit===undefined)return;const c=P.source;const r=N.get(c);if(r){const JJ=r[z.__cacheKey];JJ.usedTimes--;if(JJ.usedTimes===0){B(P)}if(Object.keys(r).length===0){N.delete(c)}}Z.remove(P)}function B(P){const z=Z.get(P);J.deleteTexture(z.__webglTexture);const c=P.source;const r=N.get(c);delete r[z.__cacheKey];H.memory.textures--}function _(P){const z=Z.get(P);if(P.depthTexture){P.depthTexture.dispose();Z.remove(P.depthTexture)}if(P.isWebGLCubeRenderTarget){for(let r=0;r<6;r++){if(Array.isArray(z.__webglFramebuffer[r])){for(let JJ=0;JJ<z.__webglFramebuffer[r].length;JJ++)J.deleteFramebuffer(z.__webglFramebuffer[r][JJ])}else{J.deleteFramebuffer(z.__webglFramebuffer[r])}if(z.__webglDepthbuffer)J.deleteRenderbuffer(z.__webglDepthbuffer[r])}}else{if(Array.isArray(z.__webglFramebuffer)){for(let r=0;r<z.__webglFramebuffer.length;r++)J.deleteFramebuffer(z.__webglFramebuffer[r])}else{J.deleteFramebuffer(z.__webglFramebuffer)}if(z.__webglDepthbuffer)J.deleteRenderbuffer(z.__webglDepthbuffer);if(z.__webglMultisampledFramebuffer)J.deleteFramebuffer(z.__webglMultisampledFramebuffer);if(z.__webglColorRenderbuffer){for(let r=0;r<z.__webglColorRenderbuffer.length;r++){if(z.__webglColorRenderbuffer[r])J.deleteRenderbuffer(z.__webglColorRenderbuffer[r])}}if(z.__webglDepthRenderbuffer)J.deleteRenderbuffer(z.__webglDepthRenderbuffer)}const c=P.textures;for(let r=0,JJ=c.length;r<JJ;r++){const a=Z.get(c[r]);if(a.__webglTexture){J.deleteTexture(a.__webglTexture);H.memory.textures--}Z.remove(c[r])}Z.remove(P)}let A=0;function y(){A=0}function f(){const P=A;if(P>=W.maxTextures){hJ("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+W.maxTextures)}A+=1;return P}function j(P){const z=[];z.push(P.wrapS);z.push(P.wrapT);z.push(P.wrapR||0);z.push(P.magFilter);z.push(P.minFilter);z.push(P.anisotropy);z.push(P.internalFormat);z.push(P.format);z.push(P.type);z.push(P.generateMipmaps);z.push(P.premultiplyAlpha);z.push(P.flipY);z.push(P.unpackAlignment);z.push(P.colorSpace);return z.join()}function g(P,z){const c=Z.get(P);if(P.isVideoTexture)q0(P);if(P.isRenderTargetTexture===false&&P.isExternalTexture!==true&&P.version>0&&c.__version!==P.version){const r=P.image;if(r===null){hJ("WebGLRenderer: Texture marked for update but no image data found.")}else if(r.complete===false){hJ("WebGLRenderer: Texture marked for update but image is incomplete")}else{QJ(c,P,z);return}}else if(P.isExternalTexture){c.__webglTexture=P.sourceTexture?P.sourceTexture:null}$.bindTexture(J.TEXTURE_2D,c.__webglTexture,J.TEXTURE0+z)}function x(P,z){const c=Z.get(P);if(P.isRenderTargetTexture===false&&P.version>0&&c.__version!==P.version){QJ(c,P,z);return}else if(P.isExternalTexture){c.__webglTexture=P.sourceTexture?P.sourceTexture:null}$.bindTexture(J.TEXTURE_2D_ARRAY,c.__webglTexture,J.TEXTURE0+z)}function p(P,z){const c=Z.get(P);if(P.isRenderTargetTexture===false&&P.version>0&&c.__version!==P.version){QJ(c,P,z);return}$.bindTexture(J.TEXTURE_3D,c.__webglTexture,J.TEXTURE0+z)}function m(P,z){const c=Z.get(P);if(P.isCubeDepthTexture!==true&&P.version>0&&c.__version!==P.version){WJ(c,P,z);return}$.bindTexture(J.TEXTURE_CUBE_MAP,c.__webglTexture,J.TEXTURE0+z)}const t={[_7]:J.REPEAT,[C8]:J.CLAMP_TO_EDGE,[B7]:J.MIRRORED_REPEAT};const $J={[j0]:J.NEAREST,[JK]:J.NEAREST_MIPMAP_NEAREST,[j6]:J.NEAREST_MIPMAP_LINEAR,[b0]:J.LINEAR,[h7]:J.LINEAR_MIPMAP_NEAREST,[H9]:J.LINEAR_MIPMAP_LINEAR};const GJ={[WK]:J.NEVER,[UK]:J.ALWAYS,[KK]:J.LESS,[VQ]:J.LEQUAL,[HK]:J.EQUAL,[LQ]:J.GEQUAL,[YK]:J.GREATER,[XK]:J.NOTEQUAL};function NJ(P,z){if(z.type===Q8&&Q.has("OES_texture_float_linear")===false&&(z.magFilter===b0||z.magFilter===h7||z.magFilter===j6||z.magFilter===H9||z.minFilter===b0||z.minFilter===h7||z.minFilter===j6||z.minFilter===H9)){hJ("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.")}J.texParameteri(P,J.TEXTURE_WRAP_S,t[z.wrapS]);J.texParameteri(P,J.TEXTURE_WRAP_T,t[z.wrapT]);if(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY){J.texParameteri(P,J.TEXTURE_WRAP_R,t[z.wrapR])}J.texParameteri(P,J.TEXTURE_MAG_FILTER,$J[z.magFilter]);J.texParameteri(P,J.TEXTURE_MIN_FILTER,$J[z.minFilter]);if(z.compareFunction){J.texParameteri(P,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE);J.texParameteri(P,J.TEXTURE_COMPARE_FUNC,GJ[z.compareFunction])}if(Q.has("EXT_texture_filter_anisotropic")===true){if(z.magFilter===j0)return;if(z.minFilter!==j6&&z.minFilter!==H9)return;if(z.type===Q8&&Q.has("OES_texture_float_linear")===false)return;if(z.anisotropy>1||Z.get(z).__currentAnisotropy){const c=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(P,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,W.getMaxAnisotropy()));Z.get(z).__currentAnisotropy=z.anisotropy}}}function cJ(P,z){let c=false;if(P.__webglInit===undefined){P.__webglInit=true;z.addEventListener("dispose",M)}const r=z.source;let JJ=N.get(r);if(JJ===undefined){JJ={};N.set(r,JJ)}const a=j(z);if(a!==P.__cacheKey){if(JJ[a]===undefined){JJ[a]={texture:J.createTexture(),usedTimes:0};H.memory.textures++;c=true}JJ[a].usedTimes++;const IJ=JJ[P.__cacheKey];if(IJ!==undefined){JJ[P.__cacheKey].usedTimes--;if(IJ.usedTimes===0){B(z)}}P.__cacheKey=a;P.__webglTexture=JJ[a].texture}return c}function AJ(P,z,c){return Math.floor(Math.floor(P/c)/z)}function n(P,z,c,r){const JJ=4;const a=P.updateRanges;if(a.length===0){$.texSubImage2D(J.TEXTURE_2D,0,0,0,z.width,z.height,c,r,z.data)}else{a.sort((e,ZJ)=>e.start-ZJ.start);let IJ=0;for(let e=1;e<a.length;e++){const ZJ=a[IJ];const OJ=a[e];const LJ=ZJ.start+ZJ.count;const qJ=AJ(OJ.start,z.width,JJ);const nJ=AJ(ZJ.start,z.width,JJ);if(OJ.start<=LJ+1&&qJ===nJ&&AJ(OJ.start+OJ.count-1,z.width,JJ)===qJ){ZJ.count=Math.max(ZJ.count,OJ.start+OJ.count-ZJ.start)}else{++IJ;a[IJ]=OJ}}a.length=IJ+1;const UJ=J.getParameter(J.UNPACK_ROW_LENGTH);const b=J.getParameter(J.UNPACK_SKIP_PIXELS);const KJ=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,z.width);for(let e=0,ZJ=a.length;e<ZJ;e++){const OJ=a[e];const LJ=Math.floor(OJ.start/JJ);const qJ=Math.ceil(OJ.count/JJ);const nJ=LJ%z.width;const h=Math.floor(LJ/z.width);const XJ=qJ;const YJ=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,nJ);J.pixelStorei(J.UNPACK_SKIP_ROWS,h);$.texSubImage2D(J.TEXTURE_2D,0,nJ,h,XJ,YJ,c,r,z.data)}P.clearUpdateRanges();J.pixelStorei(J.UNPACK_ROW_LENGTH,UJ);J.pixelStorei(J.UNPACK_SKIP_PIXELS,b);J.pixelStorei(J.UNPACK_SKIP_ROWS,KJ)}}function QJ(P,z,c){let r=J.TEXTURE_2D;if(z.isDataArrayTexture||z.isCompressedArrayTexture)r=J.TEXTURE_2D_ARRAY;if(z.isData3DTexture)r=J.TEXTURE_3D;const JJ=cJ(P,z);const a=z.source;$.bindTexture(r,P.__webglTexture,J.TEXTURE0+c);const IJ=Z.get(a);if(a.version!==IJ.__version||JJ===true){$.activeTexture(J.TEXTURE0+c);const UJ=rJ.getPrimaries(rJ.workingColorSpace);const b=z.colorSpace===c8?null:rJ.getPrimaries(z.colorSpace);const KJ=z.colorSpace===c8||UJ===b?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY);J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha);J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment);J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,KJ);let e=k(z.image,false,W.maxTextureSize);e=TJ(z,e);const ZJ=K.convert(z.format,z.colorSpace);const OJ=K.convert(z.type);let LJ=V(z.internalFormat,ZJ,OJ,z.colorSpace,z.isVideoTexture);NJ(r,z);let qJ;const nJ=z.mipmaps;const h=z.isVideoTexture!==true;const XJ=IJ.__version===undefined||JJ===true;const YJ=a.dataReady;const RJ=C(z,e);if(z.isDepthTexture){LJ=R(z.format===Y9,z.type);if(XJ){if(h){$.texStorage2D(J.TEXTURE_2D,1,LJ,e.width,e.height)}else{$.texImage2D(J.TEXTURE_2D,0,LJ,e.width,e.height,0,ZJ,OJ,null)}}}else if(z.isDataTexture){if(nJ.length>0){if(h&&XJ){$.texStorage2D(J.TEXTURE_2D,RJ,LJ,nJ[0].width,nJ[0].height)}for(let HJ=0,o=nJ.length;HJ<o;HJ++){qJ=nJ[HJ];if(h){if(YJ){$.texSubImage2D(J.TEXTURE_2D,HJ,0,0,qJ.width,qJ.height,ZJ,OJ,qJ.data)}}else{$.texImage2D(J.TEXTURE_2D,HJ,LJ,qJ.width,qJ.height,0,ZJ,OJ,qJ.data)}}z.generateMipmaps=false}else{if(h){if(XJ){$.texStorage2D(J.TEXTURE_2D,RJ,LJ,e.width,e.height)}if(YJ){n(z,e,ZJ,OJ)}}else{$.texImage2D(J.TEXTURE_2D,0,LJ,e.width,e.height,0,ZJ,OJ,e.data)}}}else if(z.isCompressedTexture){if(z.isCompressedArrayTexture){if(h&&XJ){$.texStorage3D(J.TEXTURE_2D_ARRAY,RJ,LJ,nJ[0].width,nJ[0].height,e.depth)}for(let HJ=0,o=nJ.length;HJ<o;HJ++){qJ=nJ[HJ];if(z.format!==h0){if(ZJ!==null){if(h){if(YJ){if(z.layerUpdates.size>0){const BJ=FZ(qJ.width,qJ.height,z.format,z.type);for(const uJ of z.layerUpdates){const O0=qJ.data.subarray(uJ*BJ/qJ.data.BYTES_PER_ELEMENT,(uJ+1)*BJ/qJ.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,HJ,0,0,uJ,qJ.width,qJ.height,1,ZJ,O0)}z.clearLayerUpdates()}else{$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,HJ,0,0,0,qJ.width,qJ.height,e.depth,ZJ,qJ.data)}}}else{$.compressedTexImage3D(J.TEXTURE_2D_ARRAY,HJ,LJ,qJ.width,qJ.height,e.depth,0,qJ.data,0,0)}}else{hJ("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")}}else{if(h){if(YJ){$.texSubImage3D(J.TEXTURE_2D_ARRAY,HJ,0,0,0,qJ.width,qJ.height,e.depth,ZJ,OJ,qJ.data)}}else{$.texImage3D(J.TEXTURE_2D_ARRAY,HJ,LJ,qJ.width,qJ.height,e.depth,0,ZJ,OJ,qJ.data)}}}}else{if(h&&XJ){$.texStorage2D(J.TEXTURE_2D,RJ,LJ,nJ[0].width,nJ[0].height)}for(let HJ=0,o=nJ.length;HJ<o;HJ++){qJ=nJ[HJ];if(z.format!==h0){if(ZJ!==null){if(h){if(YJ){$.compressedTexSubImage2D(J.TEXTURE_2D,HJ,0,0,qJ.width,qJ.height,ZJ,qJ.data)}}else{$.compressedTexImage2D(J.TEXTURE_2D,HJ,LJ,qJ.width,qJ.height,0,qJ.data)}}else{hJ("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")}}else{if(h){if(YJ){$.texSubImage2D(J.TEXTURE_2D,HJ,0,0,qJ.width,qJ.height,ZJ,OJ,qJ.data)}}else{$.texImage2D(J.TEXTURE_2D,HJ,LJ,qJ.width,qJ.height,0,ZJ,OJ,qJ.data)}}}}}else if(z.isDataArrayTexture){if(h){if(XJ){$.texStorage3D(J.TEXTURE_2D_ARRAY,RJ,LJ,e.width,e.height,e.depth)}if(YJ){if(z.layerUpdates.size>0){const HJ=FZ(e.width,e.height,z.format,z.type);for(const o of z.layerUpdates){const BJ=e.data.subarray(o*HJ/e.data.BYTES_PER_ELEMENT,(o+1)*HJ/e.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,o,e.width,e.height,1,ZJ,OJ,BJ)}z.clearLayerUpdates()}else{$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,ZJ,OJ,e.data)}}}else{$.texImage3D(J.TEXTURE_2D_ARRAY,0,LJ,e.width,e.height,e.depth,0,ZJ,OJ,e.data)}}else if(z.isData3DTexture){if(h){if(XJ){$.texStorage3D(J.TEXTURE_3D,RJ,LJ,e.width,e.height,e.depth)}if(YJ){$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,ZJ,OJ,e.data)}}else{$.texImage3D(J.TEXTURE_3D,0,LJ,e.width,e.height,e.depth,0,ZJ,OJ,e.data)}}else if(z.isFramebufferTexture){if(XJ){if(h){$.texStorage2D(J.TEXTURE_2D,RJ,LJ,e.width,e.height)}else{let{width:HJ,height:o}=e;for(let BJ=0;BJ<RJ;BJ++){$.texImage2D(J.TEXTURE_2D,BJ,LJ,HJ,o,0,ZJ,OJ,null);HJ>>=1;o>>=1}}}}else{if(nJ.length>0){if(h&&XJ){const HJ=H0(nJ[0]);$.texStorage2D(J.TEXTURE_2D,RJ,LJ,HJ.width,HJ.height)}for(let HJ=0,o=nJ.length;HJ<o;HJ++){qJ=nJ[HJ];if(h){if(YJ){$.texSubImage2D(J.TEXTURE_2D,HJ,0,0,ZJ,OJ,qJ)}}else{$.texImage2D(J.TEXTURE_2D,HJ,LJ,ZJ,OJ,qJ)}}z.generateMipmaps=false}else{if(h){if(XJ){const HJ=H0(e);$.texStorage2D(J.TEXTURE_2D,RJ,LJ,HJ.width,HJ.height)}if(YJ){$.texSubImage2D(J.TEXTURE_2D,0,0,0,ZJ,OJ,e)}}else{$.texImage2D(J.TEXTURE_2D,0,LJ,ZJ,OJ,e)}}}if(D(z)){F(r)}IJ.__version=a.version;if(z.onUpdate)z.onUpdate(z)}P.__version=z.version}function WJ(P,z,c){if(z.image.length!==6)return;const r=cJ(P,z);const JJ=z.source;$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+c);const a=Z.get(JJ);if(JJ.version!==a.__version||r===true){$.activeTexture(J.TEXTURE0+c);const IJ=rJ.getPrimaries(rJ.workingColorSpace);const UJ=z.colorSpace===c8?null:rJ.getPrimaries(z.colorSpace);const b=z.colorSpace===c8||IJ===UJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY);J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha);J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment);J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);const KJ=z.isCompressedTexture||z.image[0].isCompressedTexture;const e=z.image[0]&&z.image[0].isDataTexture;const ZJ=[];for(let o=0;o<6;o++){if(!KJ&&!e){ZJ[o]=k(z.image[o],true,W.maxCubemapSize)}else{ZJ[o]=e?z.image[o].image:z.image[o]}ZJ[o]=TJ(z,ZJ[o])}const OJ=ZJ[0],LJ=K.convert(z.format,z.colorSpace),qJ=K.convert(z.type),nJ=V(z.internalFormat,LJ,qJ,z.colorSpace);const h=z.isVideoTexture!==true;const XJ=a.__version===undefined||r===true;const YJ=JJ.dataReady;let RJ=C(z,OJ);NJ(J.TEXTURE_CUBE_MAP,z);let HJ;if(KJ){if(h&&XJ){$.texStorage2D(J.TEXTURE_CUBE_MAP,RJ,nJ,OJ.width,OJ.height)}for(let o=0;o<6;o++){HJ=ZJ[o].mipmaps;for(let BJ=0;BJ<HJ.length;BJ++){const uJ=HJ[BJ];if(z.format!==h0){if(LJ!==null){if(h){if(YJ){$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ,0,0,uJ.width,uJ.height,LJ,uJ.data)}}else{$.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ,nJ,uJ.width,uJ.height,0,uJ.data)}}else{hJ("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()")}}else{if(h){if(YJ){$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ,0,0,uJ.width,uJ.height,LJ,qJ,uJ.data)}}else{$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ,nJ,uJ.width,uJ.height,0,LJ,qJ,uJ.data)}}}}}else{HJ=z.mipmaps;if(h&&XJ){if(HJ.length>0)RJ++;const o=H0(ZJ[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,RJ,nJ,o.width,o.height)}for(let o=0;o<6;o++){if(e){if(h){if(YJ){$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,ZJ[o].width,ZJ[o].height,LJ,qJ,ZJ[o].data)}}else{$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,nJ,ZJ[o].width,ZJ[o].height,0,LJ,qJ,ZJ[o].data)}for(let BJ=0;BJ<HJ.length;BJ++){const uJ=HJ[BJ];const O0=uJ.image[o].image;if(h){if(YJ){$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ+1,0,0,O0.width,O0.height,LJ,qJ,O0.data)}}else{$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ+1,nJ,O0.width,O0.height,0,LJ,qJ,O0.data)}}}else{if(h){if(YJ){$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,LJ,qJ,ZJ[o])}}else{$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,nJ,LJ,qJ,ZJ[o])}for(let BJ=0;BJ<HJ.length;BJ++){const uJ=HJ[BJ];if(h){if(YJ){$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ+1,0,0,LJ,qJ,uJ.image[o])}}else{$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,BJ+1,nJ,LJ,qJ,uJ.image[o])}}}}}if(D(z)){F(J.TEXTURE_CUBE_MAP)}a.__version=JJ.version;if(z.onUpdate)z.onUpdate(z)}P.__version=z.version}function MJ(P,z,c,r,JJ,a){const IJ=K.convert(c.format,c.colorSpace);const UJ=K.convert(c.type);const b=V(c.internalFormat,IJ,UJ,c.colorSpace);const KJ=Z.get(z);const e=Z.get(c);e.__renderTarget=z;if(!KJ.__hasExternalTextures){const ZJ=Math.max(1,z.width>>a);const OJ=Math.max(1,z.height>>a);if(JJ===J.TEXTURE_3D||JJ===J.TEXTURE_2D_ARRAY){$.texImage3D(JJ,a,b,ZJ,OJ,z.depth,0,IJ,UJ,null)}else{$.texImage2D(JJ,a,b,ZJ,OJ,0,IJ,UJ,null)}}$.bindFramebuffer(J.FRAMEBUFFER,P);if(pJ(z)){Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,JJ,e.__webglTexture,0,Q0(z))}else if(JJ===J.TEXTURE_2D||JJ>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&JJ<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z){J.framebufferTexture2D(J.FRAMEBUFFER,r,JJ,e.__webglTexture,a)}$.bindFramebuffer(J.FRAMEBUFFER,null)}function VJ(P,z,c){J.bindRenderbuffer(J.RENDERBUFFER,P);if(z.depthBuffer){const r=z.depthTexture;const JJ=r&&r.isDepthTexture?r.type:null;const a=R(z.stencilBuffer,JJ);const IJ=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(pJ(z)){Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,Q0(z),a,z.width,z.height)}else if(c){J.renderbufferStorageMultisample(J.RENDERBUFFER,Q0(z),a,z.width,z.height)}else{J.renderbufferStorage(J.RENDERBUFFER,a,z.width,z.height)}J.framebufferRenderbuffer(J.FRAMEBUFFER,IJ,J.RENDERBUFFER,P)}else{const r=z.textures;for(let JJ=0;JJ<r.length;JJ++){const a=r[JJ];const IJ=K.convert(a.format,a.colorSpace);const UJ=K.convert(a.type);const b=V(a.internalFormat,IJ,UJ,a.colorSpace);if(pJ(z)){Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,Q0(z),b,z.width,z.height)}else if(c){J.renderbufferStorageMultisample(J.RENDERBUFFER,Q0(z),b,z.width,z.height)}else{J.renderbufferStorage(J.RENDERBUFFER,b,z.width,z.height)}}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function CJ(P,z,c){const r=z.isWebGLCubeRenderTarget===true;$.bindFramebuffer(J.FRAMEBUFFER,P);if(!(z.depthTexture&&z.depthTexture.isDepthTexture)){throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture")}const JJ=Z.get(z.depthTexture);JJ.__renderTarget=z;if(!JJ.__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height){z.depthTexture.image.width=z.width;z.depthTexture.image.height=z.height;z.depthTexture.needsUpdate=true}if(r){if(JJ.__webglInit===undefined){JJ.__webglInit=true;z.depthTexture.addEventListener("dispose",M)}if(JJ.__webglTexture===undefined){JJ.__webglTexture=J.createTexture();$.bindTexture(J.TEXTURE_CUBE_MAP,JJ.__webglTexture);NJ(J.TEXTURE_CUBE_MAP,z.depthTexture);const KJ=K.convert(z.depthTexture.format);const e=K.convert(z.depthTexture.type);let ZJ;if(z.depthTexture.format===k8){ZJ=J.DEPTH_COMPONENT24}else if(z.depthTexture.format===Y9){ZJ=J.DEPTH24_STENCIL8}for(let OJ=0;OJ<6;OJ++){J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+OJ,0,ZJ,z.width,z.height,0,KJ,e,null)}}}else{g(z.depthTexture,0)}const a=JJ.__webglTexture;const IJ=Q0(z);const UJ=r?J.TEXTURE_CUBE_MAP_POSITIVE_X+c:J.TEXTURE_2D;const b=z.depthTexture.format===Y9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(z.depthTexture.format===k8){if(pJ(z)){Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,b,UJ,a,0,IJ)}else{J.framebufferTexture2D(J.FRAMEBUFFER,b,UJ,a,0)}}else if(z.depthTexture.format===Y9){if(pJ(z)){Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,b,UJ,a,0,IJ)}else{J.framebufferTexture2D(J.FRAMEBUFFER,b,UJ,a,0)}}else{throw new Error("Unknown depthTexture format")}}function lJ(P){const z=Z.get(P);const c=P.isWebGLCubeRenderTarget===true;if(z.__boundDepthTexture!==P.depthTexture){const r=P.depthTexture;if(z.__depthDisposeCallback){z.__depthDisposeCallback()}if(r){const JJ=()=>{delete z.__boundDepthTexture;delete z.__depthDisposeCallback;r.removeEventListener("dispose",JJ)};r.addEventListener("dispose",JJ);z.__depthDisposeCallback=JJ}z.__boundDepthTexture=r}if(P.depthTexture&&!z.__autoAllocateDepthBuffer){if(c){for(let r=0;r<6;r++){CJ(z.__webglFramebuffer[r],P,r)}}else{const r=P.texture.mipmaps;if(r&&r.length>0){CJ(z.__webglFramebuffer[0],P,0)}else{CJ(z.__webglFramebuffer,P,0)}}}else{if(c){z.__webglDepthbuffer=[];for(let r=0;r<6;r++){$.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer[r]);if(z.__webglDepthbuffer[r]===undefined){z.__webglDepthbuffer[r]=J.createRenderbuffer();VJ(z.__webglDepthbuffer[r],P,false)}else{const JJ=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;const a=z.__webglDepthbuffer[r];J.bindRenderbuffer(J.RENDERBUFFER,a);J.framebufferRenderbuffer(J.FRAMEBUFFER,JJ,J.RENDERBUFFER,a)}}}else{const r=P.texture.mipmaps;if(r&&r.length>0){$.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer[0])}else{$.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer)}if(z.__webglDepthbuffer===undefined){z.__webglDepthbuffer=J.createRenderbuffer();VJ(z.__webglDepthbuffer,P,false)}else{const JJ=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;const a=z.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,a);J.framebufferRenderbuffer(J.FRAMEBUFFER,JJ,J.RENDERBUFFER,a)}}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function gJ(P,z,c){const r=Z.get(P);if(z!==undefined){MJ(r.__webglFramebuffer,P,P.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0)}if(c!==undefined){lJ(P)}}function yJ(P){const z=P.texture;const c=Z.get(P);const r=Z.get(z);P.addEventListener("dispose",I);const JJ=P.textures;const a=P.isWebGLCubeRenderTarget===true;const IJ=JJ.length>1;if(!IJ){if(r.__webglTexture===undefined){r.__webglTexture=J.createTexture()}r.__version=z.version;H.memory.textures++}if(a){c.__webglFramebuffer=[];for(let UJ=0;UJ<6;UJ++){if(z.mipmaps&&z.mipmaps.length>0){c.__webglFramebuffer[UJ]=[];for(let b=0;b<z.mipmaps.length;b++){c.__webglFramebuffer[UJ][b]=J.createFramebuffer()}}else{c.__webglFramebuffer[UJ]=J.createFramebuffer()}}}else{if(z.mipmaps&&z.mipmaps.length>0){c.__webglFramebuffer=[];for(let UJ=0;UJ<z.mipmaps.length;UJ++){c.__webglFramebuffer[UJ]=J.createFramebuffer()}}else{c.__webglFramebuffer=J.createFramebuffer()}if(IJ){for(let UJ=0,b=JJ.length;UJ<b;UJ++){const KJ=Z.get(JJ[UJ]);if(KJ.__webglTexture===undefined){KJ.__webglTexture=J.createTexture();H.memory.textures++}}}if(P.samples>0&&pJ(P)===false){c.__webglMultisampledFramebuffer=J.createFramebuffer();c.__webglColorRenderbuffer=[];$.bindFramebuffer(J.FRAMEBUFFER,c.__webglMultisampledFramebuffer);for(let UJ=0;UJ<JJ.length;UJ++){const b=JJ[UJ];c.__webglColorRenderbuffer[UJ]=J.createRenderbuffer();J.bindRenderbuffer(J.RENDERBUFFER,c.__webglColorRenderbuffer[UJ]);const KJ=K.convert(b.format,b.colorSpace);const e=K.convert(b.type);const ZJ=V(b.internalFormat,KJ,e,b.colorSpace,P.isXRRenderTarget===true);const OJ=Q0(P);J.renderbufferStorageMultisample(J.RENDERBUFFER,OJ,ZJ,P.width,P.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+UJ,J.RENDERBUFFER,c.__webglColorRenderbuffer[UJ])}J.bindRenderbuffer(J.RENDERBUFFER,null);if(P.depthBuffer){c.__webglDepthRenderbuffer=J.createRenderbuffer();VJ(c.__webglDepthRenderbuffer,P,true)}$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(a){$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture);NJ(J.TEXTURE_CUBE_MAP,z);for(let UJ=0;UJ<6;UJ++){if(z.mipmaps&&z.mipmaps.length>0){for(let b=0;b<z.mipmaps.length;b++){MJ(c.__webglFramebuffer[UJ][b],P,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+UJ,b)}}else{MJ(c.__webglFramebuffer[UJ],P,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+UJ,0)}}if(D(z)){F(J.TEXTURE_CUBE_MAP)}$.unbindTexture()}else if(IJ){for(let UJ=0,b=JJ.length;UJ<b;UJ++){const KJ=JJ[UJ];const e=Z.get(KJ);let ZJ=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget){ZJ=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY}$.bindTexture(ZJ,e.__webglTexture);NJ(ZJ,KJ);MJ(c.__webglFramebuffer,P,KJ,J.COLOR_ATTACHMENT0+UJ,ZJ,0);if(D(KJ)){F(ZJ)}}$.unbindTexture()}else{let UJ=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget){UJ=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY}$.bindTexture(UJ,r.__webglTexture);NJ(UJ,z);if(z.mipmaps&&z.mipmaps.length>0){for(let b=0;b<z.mipmaps.length;b++){MJ(c.__webglFramebuffer[b],P,z,J.COLOR_ATTACHMENT0,UJ,b)}}else{MJ(c.__webglFramebuffer,P,z,J.COLOR_ATTACHMENT0,UJ,0)}if(D(z)){F(UJ)}$.unbindTexture()}if(P.depthBuffer){lJ(P)}}function jJ(P){const z=P.textures;for(let c=0,r=z.length;c<r;c++){const JJ=z[c];if(D(JJ)){const a=L(P);const IJ=Z.get(JJ).__webglTexture;$.bindTexture(a,IJ);F(a);$.unbindTexture()}}}const PJ=[];const J0=[];function v(P){if(P.samples>0){if(pJ(P)===false){const z=P.textures;const c=P.width;const r=P.height;let JJ=J.COLOR_BUFFER_BIT;const a=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;const IJ=Z.get(P);const UJ=z.length>1;if(UJ){for(let KJ=0;KJ<z.length;KJ++){$.bindFramebuffer(J.FRAMEBUFFER,IJ.__webglMultisampledFramebuffer);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+KJ,J.RENDERBUFFER,null);$.bindFramebuffer(J.FRAMEBUFFER,IJ.__webglFramebuffer);J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+KJ,J.TEXTURE_2D,null,0)}}$.bindFramebuffer(J.READ_FRAMEBUFFER,IJ.__webglMultisampledFramebuffer);const b=P.texture.mipmaps;if(b&&b.length>0){$.bindFramebuffer(J.DRAW_FRAMEBUFFER,IJ.__webglFramebuffer[0])}else{$.bindFramebuffer(J.DRAW_FRAMEBUFFER,IJ.__webglFramebuffer)}for(let KJ=0;KJ<z.length;KJ++){if(P.resolveDepthBuffer){if(P.depthBuffer)JJ|=J.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)JJ|=J.STENCIL_BUFFER_BIT}if(UJ){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,IJ.__webglColorRenderbuffer[KJ]);const e=Z.get(z[KJ]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}J.blitFramebuffer(0,0,c,r,0,0,c,r,JJ,J.NEAREST);if(X===true){PJ.length=0;J0.length=0;PJ.push(J.COLOR_ATTACHMENT0+KJ);if(P.depthBuffer&&P.resolveDepthBuffer===false){PJ.push(a);J0.push(a);J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,J0)}J.invalidateFramebuffer(J.READ_FRAMEBUFFER,PJ)}}$.bindFramebuffer(J.READ_FRAMEBUFFER,null);$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null);if(UJ){for(let KJ=0;KJ<z.length;KJ++){$.bindFramebuffer(J.FRAMEBUFFER,IJ.__webglMultisampledFramebuffer);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+KJ,J.RENDERBUFFER,IJ.__webglColorRenderbuffer[KJ]);const e=Z.get(z[KJ]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,IJ.__webglFramebuffer);J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+KJ,J.TEXTURE_2D,e,0)}}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,IJ.__webglMultisampledFramebuffer)}else{if(P.depthBuffer&&P.resolveDepthBuffer===false&&X){const z=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[z])}}}}function Q0(P){return Math.min(W.maxSamples,P.samples)}function pJ(P){const z=Z.get(P);return P.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===true&&z.__useRenderToTexture!==false}function q0(P){const z=H.render.frame;if(G.get(P)!==z){G.set(P,z);P.update()}}function TJ(P,z){const c=P.colorSpace;const r=P.format;const JJ=P.type;if(P.isCompressedTexture===true||P.isVideoTexture===true)return z;if(c!==I9&&c!==c8){if(rJ.getTransfer(c)===Z0){if(r!==h0||JJ!==a0){hJ("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}}else{dJ("WebGLTextures: Unsupported texture color space:",c)}}return z}function H0(P){if(typeof HTMLImageElement!=="undefined"&&P instanceof HTMLImageElement){U.width=P.naturalWidth||P.width;U.height=P.naturalHeight||P.height}else if(typeof VideoFrame!=="undefined"&&P instanceof VideoFrame){U.width=P.displayWidth;U.height=P.displayHeight}else{U.width=P.width;U.height=P.height}return U}this.allocateTextureUnit=f;this.resetTextureUnits=y;this.setTexture2D=g;this.setTexture2DArray=x;this.setTexture3D=p;this.setTextureCube=m;this.rebindTextures=gJ;this.setupRenderTarget=yJ;this.updateRenderTargetMipmap=jJ;this.updateMultisampleRenderTarget=v;this.setupDepthRenderbuffer=lJ;this.setupFrameBufferTexture=MJ;this.useMultisampledRTT=pJ;this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function wZ(J,Q){function $(Z,W=c8){let K;const H=rJ.getTransfer(W);if(Z===a0)return J.UNSIGNED_BYTE;if(Z===g7)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===p7)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===g$)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===p$)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===h$)return J.BYTE;if(Z===x$)return J.SHORT;if(Z===Z6)return J.UNSIGNED_SHORT;if(Z===x7)return J.INT;if(Z===f0)return J.UNSIGNED_INT;if(Z===Q8)return J.FLOAT;if(Z===U8)return J.HALF_FLOAT;if(Z===m$)return J.ALPHA;if(Z===d$)return J.RGB;if(Z===h0)return J.RGBA;if(Z===k8)return J.DEPTH_COMPONENT;if(Z===Y9)return J.DEPTH_STENCIL;if(Z===l$)return J.RED;if(Z===K6)return J.RED_INTEGER;if(Z===u8)return J.RG;if(Z===m7)return J.RG_INTEGER;if(Z===X9)return J.RGBA_INTEGER;if(Z===y6||Z===v6||Z===b6||Z===f6){if(H===Z0){K=Q.get("WEBGL_compressed_texture_s3tc_srgb");if(K!==null){if(Z===y6)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===v6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===b6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===f6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{return null}}else{K=Q.get("WEBGL_compressed_texture_s3tc");if(K!==null){if(Z===y6)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===v6)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===b6)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===f6)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else{return null}}}if(Z===d7||Z===l7||Z===u7||Z===c7){K=Q.get("WEBGL_compressed_texture_pvrtc");if(K!==null){if(Z===d7)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===l7)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===u7)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===c7)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else{return null}}if(Z===n7||Z===s7||Z===i7||Z===o7||Z===a7||Z===r7||Z===t7){K=Q.get("WEBGL_compressed_texture_etc");if(K!==null){if(Z===n7||Z===s7)return H===Z0?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===i7)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===o7)return K.COMPRESSED_R11_EAC;if(Z===a7)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===r7)return K.COMPRESSED_RG11_EAC;if(Z===t7)return K.COMPRESSED_SIGNED_RG11_EAC}else{return null}}if(Z===e7||Z===JQ||Z===QQ||Z===$Q||Z===ZQ||Z===WQ||Z===KQ||Z===HQ||Z===YQ||Z===XQ||Z===UQ||Z===GQ||Z===EQ||Z===NQ){K=Q.get("WEBGL_compressed_texture_astc");if(K!==null){if(Z===e7)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===JQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===QQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===$Q)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===ZQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===WQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===KQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===HQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===YQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===XQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===UQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===GQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===EQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===NQ)return H===Z0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else{return null}}if(Z===qQ||Z===DQ||Z===OQ){K=Q.get("EXT_texture_compression_bptc");if(K!==null){if(Z===qQ)return H===Z0?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===DQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===OQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else{return null}}if(Z===FQ||Z===kQ||Z===MQ||Z===RQ){K=Q.get("EXT_texture_compression_rgtc");if(K!==null){if(Z===FQ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===kQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===MQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===RQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else{return null}}if(Z===W6)return J.UNSIGNED_INT_24_8;return J[Z]!==undefined?J[Z]:null}return{convert:$}}var LN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var zN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iK{constructor(){this.texture=null;this.mesh=null;this.depthNear=0;this.depthFar=0}init(J,Q){if(this.texture===null){const $=new jQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar){this.depthNear=J.depthNear;this.depthFar=J.depthFar}this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){const Q=J.cameras[0].viewport;const $=new y0({vertexShader:LN,fragmentShader:zN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new M0(new E9(20,20),$)}}return this.mesh}reset(){this.texture=null;this.mesh=null}getDepthTexture(){return this.texture}}class oK extends S8{constructor(J,Q){super();const $=this;let Z=null;let W=1;let K=null;let H="local-floor";let Y=1;let X=null;let U=null;let G=null;let E=null;let N=null;let q=null;const O=typeof XRWebGLBinding!=="undefined";const k=new iK;const D={};const F=Q.getContextAttributes();let L=null;let V=null;const R=[];const C=[];const M=new _J;let I=null;const T=new s0;T.viewport=new k0;const B=new s0;B.viewport=new k0;const _=[T,B];const A=new qZ;let y=null;let f=null;this.cameraAutoUpdate=true;this.enabled=false;this.isPresenting=false;this.getController=function(n){let QJ=R[n];if(QJ===undefined){QJ=new m6;R[n]=QJ}return QJ.getTargetRaySpace()};this.getControllerGrip=function(n){let QJ=R[n];if(QJ===undefined){QJ=new m6;R[n]=QJ}return QJ.getGripSpace()};this.getHand=function(n){let QJ=R[n];if(QJ===undefined){QJ=new m6;R[n]=QJ}return QJ.getHandSpace()};function j(n){const QJ=C.indexOf(n.inputSource);if(QJ===-1){return}const WJ=R[QJ];if(WJ!==undefined){WJ.update(n.inputSource,n.frame,X||K);WJ.dispatchEvent({type:n.type,data:n.inputSource})}}function g(){Z.removeEventListener("select",j);Z.removeEventListener("selectstart",j);Z.removeEventListener("selectend",j);Z.removeEventListener("squeeze",j);Z.removeEventListener("squeezestart",j);Z.removeEventListener("squeezeend",j);Z.removeEventListener("end",g);Z.removeEventListener("inputsourceschange",x);for(let n=0;n<R.length;n++){const QJ=C[n];if(QJ===null)continue;C[n]=null;R[n].disconnect(QJ)}y=null;f=null;k.reset();for(const n in D){delete D[n]}J.setRenderTarget(L);N=null;E=null;G=null;Z=null;V=null;AJ.stop();$.isPresenting=false;J.setPixelRatio(I);J.setSize(M.width,M.height,false);$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){W=n;if($.isPresenting===true){hJ("WebXRManager: Cannot change framebuffer scale while presenting.")}};this.setReferenceSpaceType=function(n){H=n;if($.isPresenting===true){hJ("WebXRManager: Cannot change reference space type while presenting.")}};this.getReferenceSpace=function(){return X||K};this.setReferenceSpace=function(n){X=n};this.getBaseLayer=function(){return E!==null?E:N};this.getBinding=function(){if(G===null&&O){G=new XRWebGLBinding(Z,Q)}return G};this.getFrame=function(){return q};this.getSession=function(){return Z};this.setSession=async function(n){Z=n;if(Z!==null){L=J.getRenderTarget();Z.addEventListener("select",j);Z.addEventListener("selectstart",j);Z.addEventListener("selectend",j);Z.addEventListener("squeeze",j);Z.addEventListener("squeezestart",j);Z.addEventListener("squeezeend",j);Z.addEventListener("end",g);Z.addEventListener("inputsourceschange",x);if(F.xrCompatible!==true){await Q.makeXRCompatible()}I=J.getPixelRatio();J.getSize(M);const QJ=O&&"createProjectionLayer"in XRWebGLBinding.prototype;if(!QJ){const WJ={antialias:F.antialias,alpha:true,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer(Z,Q,WJ);Z.updateRenderState({baseLayer:N});J.setPixelRatio(1);J.setSize(N.framebufferWidth,N.framebufferHeight,false);V=new $8(N.framebufferWidth,N.framebufferHeight,{format:h0,type:a0,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:N.ignoreDepthValues===false,resolveStencilBuffer:N.ignoreDepthValues===false})}else{let WJ=null;let MJ=null;let VJ=null;if(F.depth){VJ=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24;WJ=F.stencil?Y9:k8;MJ=F.stencil?W6:f0}const CJ={colorFormat:Q.RGBA8,depthFormat:VJ,scaleFactor:W};G=this.getBinding();E=G.createProjectionLayer(CJ);Z.updateRenderState({layers:[E]});J.setPixelRatio(1);J.setSize(E.textureWidth,E.textureHeight,false);V=new $8(E.textureWidth,E.textureHeight,{format:h0,type:a0,depthTexture:new n8(E.textureWidth,E.textureHeight,MJ,undefined,undefined,undefined,undefined,undefined,undefined,WJ),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===false,resolveStencilBuffer:E.ignoreDepthValues===false})}V.isXRRenderTarget=true;this.setFoveation(Y);X=null;K=await Z.requestReferenceSpace(H);AJ.setContext(Z);AJ.start();$.isPresenting=true;$.dispatchEvent({type:"sessionstart"})}};this.getEnvironmentBlendMode=function(){if(Z!==null){return Z.environmentBlendMode}};this.getDepthTexture=function(){return k.getDepthTexture()};function x(n){for(let QJ=0;QJ<n.removed.length;QJ++){const WJ=n.removed[QJ];const MJ=C.indexOf(WJ);if(MJ>=0){C[MJ]=null;R[MJ].disconnect(WJ)}}for(let QJ=0;QJ<n.added.length;QJ++){const WJ=n.added[QJ];let MJ=C.indexOf(WJ);if(MJ===-1){for(let CJ=0;CJ<R.length;CJ++){if(CJ>=C.length){C.push(WJ);MJ=CJ;break}else if(C[CJ]===null){C[CJ]=WJ;MJ=CJ;break}}if(MJ===-1)break}const VJ=R[MJ];if(VJ){VJ.connect(WJ)}}}const p=new S;const m=new S;function t(n,QJ,WJ){p.setFromMatrixPosition(QJ.matrixWorld);m.setFromMatrixPosition(WJ.matrixWorld);const MJ=p.distanceTo(m);const VJ=QJ.projectionMatrix.elements;const CJ=WJ.projectionMatrix.elements;const lJ=VJ[14]/(VJ[10]-1);const gJ=VJ[14]/(VJ[10]+1);const yJ=(VJ[9]+1)/VJ[5];const jJ=(VJ[9]-1)/VJ[5];const PJ=(VJ[8]-1)/VJ[0];const J0=(CJ[8]+1)/CJ[0];const v=lJ*PJ;const Q0=lJ*J0;const pJ=MJ/(-PJ+J0);const q0=pJ*-PJ;QJ.matrixWorld.decompose(n.position,n.quaternion,n.scale);n.translateX(q0);n.translateZ(pJ);n.matrixWorld.compose(n.position,n.quaternion,n.scale);n.matrixWorldInverse.copy(n.matrixWorld).invert();if(VJ[10]===-1){n.projectionMatrix.copy(QJ.projectionMatrix);n.projectionMatrixInverse.copy(QJ.projectionMatrixInverse)}else{const TJ=lJ+pJ;const H0=gJ+pJ;const P=v-q0;const z=Q0+(MJ-q0);const c=yJ*gJ/H0*TJ;const r=jJ*gJ/H0*TJ;n.projectionMatrix.makePerspective(P,z,c,r,TJ,H0);n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function $J(n,QJ){if(QJ===null){n.matrixWorld.copy(n.matrix)}else{n.matrixWorld.multiplyMatrices(QJ.matrixWorld,n.matrix)}n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Z===null)return;let QJ=n.near;let WJ=n.far;if(k.texture!==null){if(k.depthNear>0)QJ=k.depthNear;if(k.depthFar>0)WJ=k.depthFar}A.near=B.near=T.near=QJ;A.far=B.far=T.far=WJ;if(y!==A.near||f!==A.far){Z.updateRenderState({depthNear:A.near,depthFar:A.far});y=A.near;f=A.far}A.layers.mask=n.layers.mask|6;T.layers.mask=A.layers.mask&3;B.layers.mask=A.layers.mask&5;const MJ=n.parent;const VJ=A.cameras;$J(A,MJ);for(let CJ=0;CJ<VJ.length;CJ++){$J(VJ[CJ],MJ)}if(VJ.length===2){t(A,T,B)}else{A.projectionMatrix.copy(T.projectionMatrix)}GJ(n,A,MJ)};function GJ(n,QJ,WJ){if(WJ===null){n.matrix.copy(QJ.matrixWorld)}else{n.matrix.copy(WJ.matrixWorld);n.matrix.invert();n.matrix.multiply(QJ.matrixWorld)}n.matrix.decompose(n.position,n.quaternion,n.scale);n.updateMatrixWorld(true);n.projectionMatrix.copy(QJ.projectionMatrix);n.projectionMatrixInverse.copy(QJ.projectionMatrixInverse);if(n.isPerspectiveCamera){n.fov=Q6*2*Math.atan(1/n.projectionMatrix.elements[5]);n.zoom=1}}this.getCamera=function(){return A};this.getFoveation=function(){if(E===null&&N===null){return}return Y};this.setFoveation=function(n){Y=n;if(E!==null){E.fixedFoveation=n}if(N!==null&&N.fixedFoveation!==undefined){N.fixedFoveation=n}};this.hasDepthSensing=function(){return k.texture!==null};this.getDepthSensingMesh=function(){return k.getMesh(A)};this.getCameraTexture=function(n){return D[n]};let NJ=null;function cJ(n,QJ){U=QJ.getViewerPose(X||K);q=QJ;if(U!==null){const WJ=U.views;if(N!==null){J.setRenderTargetFramebuffer(V,N.framebuffer);J.setRenderTarget(V)}let MJ=false;if(WJ.length!==A.cameras.length){A.cameras.length=0;MJ=true}for(let gJ=0;gJ<WJ.length;gJ++){const yJ=WJ[gJ];let jJ=null;if(N!==null){jJ=N.getViewport(yJ)}else{const J0=G.getViewSubImage(E,yJ);jJ=J0.viewport;if(gJ===0){J.setRenderTargetTextures(V,J0.colorTexture,J0.depthStencilTexture);J.setRenderTarget(V)}}let PJ=_[gJ];if(PJ===undefined){PJ=new s0;PJ.layers.enable(gJ);PJ.viewport=new k0;_[gJ]=PJ}PJ.matrix.fromArray(yJ.transform.matrix);PJ.matrix.decompose(PJ.position,PJ.quaternion,PJ.scale);PJ.projectionMatrix.fromArray(yJ.projectionMatrix);PJ.projectionMatrixInverse.copy(PJ.projectionMatrix).invert();PJ.viewport.set(jJ.x,jJ.y,jJ.width,jJ.height);if(gJ===0){A.matrix.copy(PJ.matrix);A.matrix.decompose(A.position,A.quaternion,A.scale)}if(MJ===true){A.cameras.push(PJ)}}const VJ=Z.enabledFeatures;const CJ=VJ&&VJ.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized";if(CJ&&O){G=$.getBinding();const gJ=G.getDepthInformation(WJ[0]);if(gJ&&gJ.isValid&&gJ.texture){k.init(gJ,Z.renderState)}}const lJ=VJ&&VJ.includes("camera-access");if(lJ&&O){J.state.unbindTexture();G=$.getBinding();for(let gJ=0;gJ<WJ.length;gJ++){const yJ=WJ[gJ].camera;if(yJ){let jJ=D[yJ];if(!jJ){jJ=new jQ;D[yJ]=jJ}const PJ=G.getCameraImage(yJ);jJ.sourceTexture=PJ}}}}for(let WJ=0;WJ<R.length;WJ++){const MJ=C[WJ];const VJ=R[WJ];if(MJ!==null&&VJ!==undefined){VJ.update(MJ,QJ,X||K)}}if(NJ)NJ(n,QJ);if(QJ.detectedPlanes){$.dispatchEvent({type:"planesdetected",data:QJ})}q=null}const AJ=new xK;AJ.setAnimationLoop(cJ);this.setAnimationLoop=function(n){NJ=n};this.dispose=function(){}}}var v9=new P8;var _N=new xJ;function BN(J,Q){function $(D,F){if(D.matrixAutoUpdate===true){D.updateMatrix()}F.value.copy(D.matrix)}function Z(D,F){F.color.getRGB(D.fogColor.value,t$(J));if(F.isFog){D.fogNear.value=F.near;D.fogFar.value=F.far}else if(F.isFogExp2){D.fogDensity.value=F.density}}function W(D,F,L,V,R){if(F.isMeshBasicMaterial){K(D,F)}else if(F.isMeshLambertMaterial){K(D,F)}else if(F.isMeshToonMaterial){K(D,F);E(D,F)}else if(F.isMeshPhongMaterial){K(D,F);G(D,F)}else if(F.isMeshStandardMaterial){K(D,F);N(D,F);if(F.isMeshPhysicalMaterial){q(D,F,R)}}else if(F.isMeshMatcapMaterial){K(D,F);O(D,F)}else if(F.isMeshDepthMaterial){K(D,F)}else if(F.isMeshDistanceMaterial){K(D,F);k(D,F)}else if(F.isMeshNormalMaterial){K(D,F)}else if(F.isLineBasicMaterial){H(D,F);if(F.isLineDashedMaterial){Y(D,F)}}else if(F.isPointsMaterial){X(D,F,L,V)}else if(F.isSpriteMaterial){U(D,F)}else if(F.isShadowMaterial){D.color.value.copy(F.color);D.opacity.value=F.opacity}else if(F.isShaderMaterial){F.uniformsNeedUpdate=false}}function K(D,F){D.opacity.value=F.opacity;if(F.color){D.diffuse.value.copy(F.color)}if(F.emissive){D.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity)}if(F.map){D.map.value=F.map;$(F.map,D.mapTransform)}if(F.alphaMap){D.alphaMap.value=F.alphaMap;$(F.alphaMap,D.alphaMapTransform)}if(F.bumpMap){D.bumpMap.value=F.bumpMap;$(F.bumpMap,D.bumpMapTransform);D.bumpScale.value=F.bumpScale;if(F.side===o0){D.bumpScale.value*=-1}}if(F.normalMap){D.normalMap.value=F.normalMap;$(F.normalMap,D.normalMapTransform);D.normalScale.value.copy(F.normalScale);if(F.side===o0){D.normalScale.value.negate()}}if(F.displacementMap){D.displacementMap.value=F.displacementMap;$(F.displacementMap,D.displacementMapTransform);D.displacementScale.value=F.displacementScale;D.displacementBias.value=F.displacementBias}if(F.emissiveMap){D.emissiveMap.value=F.emissiveMap;$(F.emissiveMap,D.emissiveMapTransform)}if(F.specularMap){D.specularMap.value=F.specularMap;$(F.specularMap,D.specularMapTransform)}if(F.alphaTest>0){D.alphaTest.value=F.alphaTest}const L=Q.get(F);const V=L.envMap;const R=L.envMapRotation;if(V){D.envMap.value=V;v9.copy(R);v9.x*=-1;v9.y*=-1;v9.z*=-1;if(V.isCubeTexture&&V.isRenderTargetTexture===false){v9.y*=-1;v9.z*=-1}D.envMapRotation.value.setFromMatrix4(_N.makeRotationFromEuler(v9));D.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===false?-1:1;D.reflectivity.value=F.reflectivity;D.ior.value=F.ior;D.refractionRatio.value=F.refractionRatio}if(F.lightMap){D.lightMap.value=F.lightMap;D.lightMapIntensity.value=F.lightMapIntensity;$(F.lightMap,D.lightMapTransform)}if(F.aoMap){D.aoMap.value=F.aoMap;D.aoMapIntensity.value=F.aoMapIntensity;$(F.aoMap,D.aoMapTransform)}}function H(D,F){D.diffuse.value.copy(F.color);D.opacity.value=F.opacity;if(F.map){D.map.value=F.map;$(F.map,D.mapTransform)}}function Y(D,F){D.dashSize.value=F.dashSize;D.totalSize.value=F.dashSize+F.gapSize;D.scale.value=F.scale}function X(D,F,L,V){D.diffuse.value.copy(F.color);D.opacity.value=F.opacity;D.size.value=F.size*L;D.scale.value=V*0.5;if(F.map){D.map.value=F.map;$(F.map,D.uvTransform)}if(F.alphaMap){D.alphaMap.value=F.alphaMap;$(F.alphaMap,D.alphaMapTransform)}if(F.alphaTest>0){D.alphaTest.value=F.alphaTest}}function U(D,F){D.diffuse.value.copy(F.color);D.opacity.value=F.opacity;D.rotation.value=F.rotation;if(F.map){D.map.value=F.map;$(F.map,D.mapTransform)}if(F.alphaMap){D.alphaMap.value=F.alphaMap;$(F.alphaMap,D.alphaMapTransform)}if(F.alphaTest>0){D.alphaTest.value=F.alphaTest}}function G(D,F){D.specular.value.copy(F.specular);D.shininess.value=Math.max(F.shininess,0.0001)}function E(D,F){if(F.gradientMap){D.gradientMap.value=F.gradientMap}}function N(D,F){D.metalness.value=F.metalness;if(F.metalnessMap){D.metalnessMap.value=F.metalnessMap;$(F.metalnessMap,D.metalnessMapTransform)}D.roughness.value=F.roughness;if(F.roughnessMap){D.roughnessMap.value=F.roughnessMap;$(F.roughnessMap,D.roughnessMapTransform)}if(F.envMap){D.envMapIntensity.value=F.envMapIntensity}}function q(D,F,L){D.ior.value=F.ior;if(F.sheen>0){D.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen);D.sheenRoughness.value=F.sheenRoughness;if(F.sheenColorMap){D.sheenColorMap.value=F.sheenColorMap;$(F.sheenColorMap,D.sheenColorMapTransform)}if(F.sheenRoughnessMap){D.sheenRoughnessMap.value=F.sheenRoughnessMap;$(F.sheenRoughnessMap,D.sheenRoughnessMapTransform)}}if(F.clearcoat>0){D.clearcoat.value=F.clearcoat;D.clearcoatRoughness.value=F.clearcoatRoughness;if(F.clearcoatMap){D.clearcoatMap.value=F.clearcoatMap;$(F.clearcoatMap,D.clearcoatMapTransform)}if(F.clearcoatRoughnessMap){D.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap;$(F.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform)}if(F.clearcoatNormalMap){D.clearcoatNormalMap.value=F.clearcoatNormalMap;$(F.clearcoatNormalMap,D.clearcoatNormalMapTransform);D.clearcoatNormalScale.value.copy(F.clearcoatNormalScale);if(F.side===o0){D.clearcoatNormalScale.value.negate()}}}if(F.dispersion>0){D.dispersion.value=F.dispersion}if(F.iridescence>0){D.iridescence.value=F.iridescence;D.iridescenceIOR.value=F.iridescenceIOR;D.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0];D.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1];if(F.iridescenceMap){D.iridescenceMap.value=F.iridescenceMap;$(F.iridescenceMap,D.iridescenceMapTransform)}if(F.iridescenceThicknessMap){D.iridescenceThicknessMap.value=F.iridescenceThicknessMap;$(F.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}}if(F.transmission>0){D.transmission.value=F.transmission;D.transmissionSamplerMap.value=L.texture;D.transmissionSamplerSize.value.set(L.width,L.height);if(F.transmissionMap){D.transmissionMap.value=F.transmissionMap;$(F.transmissionMap,D.transmissionMapTransform)}D.thickness.value=F.thickness;if(F.thicknessMap){D.thicknessMap.value=F.thicknessMap;$(F.thicknessMap,D.thicknessMapTransform)}D.attenuationDistance.value=F.attenuationDistance;D.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){D.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation));if(F.anisotropyMap){D.anisotropyMap.value=F.anisotropyMap;$(F.anisotropyMap,D.anisotropyMapTransform)}}D.specularIntensity.value=F.specularIntensity;D.specularColor.value.copy(F.specularColor);if(F.specularColorMap){D.specularColorMap.value=F.specularColorMap;$(F.specularColorMap,D.specularColorMapTransform)}if(F.specularIntensityMap){D.specularIntensityMap.value=F.specularIntensityMap;$(F.specularIntensityMap,D.specularIntensityMapTransform)}}function O(D,F){if(F.matcap){D.matcap.value=F.matcap}}function k(D,F){const L=Q.get(F).light;D.referencePosition.value.setFromMatrixPosition(L.matrixWorld);D.nearDistance.value=L.shadow.camera.near;D.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function IN(J,Q,$,Z){let W={};let K={};let H=[];const Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,V){const R=V.program;Z.uniformBlockBinding(L,R)}function U(L,V){let R=W[L.id];if(R===undefined){O(L);R=G(L);W[L.id]=R;L.addEventListener("dispose",D)}const C=V.program;Z.updateUBOMapping(L,C);const M=Q.render.frame;if(K[L.id]!==M){N(L);K[L.id]=M}}function G(L){const V=E();L.__bindingPointIndex=V;const R=J.createBuffer();const C=L.__size;const M=L.usage;J.bindBuffer(J.UNIFORM_BUFFER,R);J.bufferData(J.UNIFORM_BUFFER,C,M);J.bindBuffer(J.UNIFORM_BUFFER,null);J.bindBufferBase(J.UNIFORM_BUFFER,V,R);return R}function E(){for(let L=0;L<Y;L++){if(H.indexOf(L)===-1){H.push(L);return L}}dJ("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.");return 0}function N(L){const V=W[L.id];const R=L.uniforms;const C=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,V);for(let M=0,I=R.length;M<I;M++){const T=Array.isArray(R[M])?R[M]:[R[M]];for(let B=0,_=T.length;B<_;B++){const A=T[B];if(q(A,M,B,C)===true){const y=A.__offset;const f=Array.isArray(A.value)?A.value:[A.value];let j=0;for(let g=0;g<f.length;g++){const x=f[g];const p=k(x);if(typeof x==="number"||typeof x==="boolean"){A.__data[0]=x;J.bufferSubData(J.UNIFORM_BUFFER,y+j,A.__data)}else if(x.isMatrix3){A.__data[0]=x.elements[0];A.__data[1]=x.elements[1];A.__data[2]=x.elements[2];A.__data[3]=0;A.__data[4]=x.elements[3];A.__data[5]=x.elements[4];A.__data[6]=x.elements[5];A.__data[7]=0;A.__data[8]=x.elements[6];A.__data[9]=x.elements[7];A.__data[10]=x.elements[8];A.__data[11]=0}else{x.toArray(A.__data,j);j+=p.storage/Float32Array.BYTES_PER_ELEMENT}}J.bufferSubData(J.UNIFORM_BUFFER,y,A.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(L,V,R,C){const M=L.value;const I=V+"_"+R;if(C[I]===undefined){if(typeof M==="number"||typeof M==="boolean"){C[I]=M}else{C[I]=M.clone()}return true}else{const T=C[I];if(typeof M==="number"||typeof M==="boolean"){if(T!==M){C[I]=M;return true}}else{if(T.equals(M)===false){T.copy(M);return true}}}return false}function O(L){const V=L.uniforms;let R=0;const C=16;for(let I=0,T=V.length;I<T;I++){const B=Array.isArray(V[I])?V[I]:[V[I]];for(let _=0,A=B.length;_<A;_++){const y=B[_];const f=Array.isArray(y.value)?y.value:[y.value];for(let j=0,g=f.length;j<g;j++){const x=f[j];const p=k(x);const m=R%C;const t=m%p.boundary;const $J=m+t;R+=t;if($J!==0&&C-$J<p.storage){R+=C-$J}y.__data=new Float32Array(p.storage/Float32Array.BYTES_PER_ELEMENT);y.__offset=R;R+=p.storage}}}const M=R%C;if(M>0)R+=C-M;L.__size=R;L.__cache={};return this}function k(L){const V={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean"){V.boundary=4;V.storage=4}else if(L.isVector2){V.boundary=8;V.storage=8}else if(L.isVector3||L.isColor){V.boundary=16;V.storage=12}else if(L.isVector4){V.boundary=16;V.storage=16}else if(L.isMatrix3){V.boundary=48;V.storage=48}else if(L.isMatrix4){V.boundary=64;V.storage=64}else if(L.isTexture){hJ("WebGLRenderer: Texture samplers can not be part of an uniforms group.")}else{hJ("WebGLRenderer: Unsupported uniform value type.",L)}return V}function D(L){const V=L.target;V.removeEventListener("dispose",D);const R=H.indexOf(V.__bindingPointIndex);H.splice(R,1);J.deleteBuffer(W[V.id]);delete W[V.id];delete K[V.id]}function F(){for(const L in W){J.deleteBuffer(W[L])}H=[];W={};K={}}return{bind:X,update:U,dispose:F}}var wN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var j8=null;function CN(){if(j8===null){j8=new M8(wN,16,16,u8,U8);j8.name="DFG_LUT";j8.minFilter=b0;j8.magFilter=b0;j8.wrapS=C8;j8.wrapT=C8;j8.generateMipmaps=false;j8.needsUpdate=true}return j8}class CZ{constructor(J={}){const{canvas:Q=GK(),context:$=null,depth:Z=true,stencil:W=false,alpha:K=false,antialias:H=false,premultipliedAlpha:Y=true,preserveDrawingBuffer:X=false,powerPreference:U="default",failIfMajorPerformanceCaveat:G=false,reversedDepthBuffer:E=false,outputBufferType:N=a0}=J;this.isWebGLRenderer=true;let q;if($!==null){if(typeof WebGLRenderingContext!=="undefined"&&$ instanceof WebGLRenderingContext){throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.")}q=$.getContextAttributes().alpha}else{q=K}const O=N;const k=new Set([X9,m7,K6]);const D=new Set([a0,f0,Z6,W6,g7,p7]);const F=new Uint32Array(4);const L=new Int32Array(4);let V=null;let R=null;const C=[];const M=[];let I=null;this.domElement=Q;this.debug={checkShaderErrors:true,onShaderError:null};this.autoClear=true;this.autoClearColor=true;this.autoClearDepth=true;this.autoClearStencil=true;this.sortObjects=true;this.clippingPlanes=[];this.localClippingEnabled=false;this.toneMapping=I8;this.toneMappingExposure=1;this.transmissionResolutionScale=1;const T=this;let B=false;this._outputColorSpace=X8;let _=0;let A=0;let y=null;let f=-1;let j=null;const g=new k0;const x=new k0;let p=null;const m=new aJ(0);let t=0;let $J=Q.width;let GJ=Q.height;let NJ=1;let cJ=null;let AJ=null;const n=new k0(0,0,$J,GJ);const QJ=new k0(0,0,$J,GJ);let WJ=false;const MJ=new SQ;let VJ=false;let CJ=false;const lJ=new xJ;const gJ=new S;const yJ=new k0;const jJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:true};let PJ=false;function J0(){return y===null?NJ:1}let v=$;function Q0(w,d){return Q.getContext(w,d)}try{const w={alpha:true,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${w7}`);Q.addEventListener("webglcontextlost",BJ,false);Q.addEventListener("webglcontextrestored",uJ,false);Q.addEventListener("webglcontextcreationerror",O0,false);if(v===null){const d="webgl2";v=Q0(d,w);if(v===null){if(Q0(d)){throw new Error("Error creating WebGL context with your selected attributes.")}else{throw new Error("Error creating WebGL context.")}}}}catch(w){dJ("WebGLRenderer: "+w.message);throw w}let pJ,q0,TJ,H0;let P,z,c,r,JJ,a,IJ;let UJ,b,KJ,e,ZJ,OJ;let LJ,qJ,nJ,h;let XJ,YJ,RJ;function HJ(){pJ=new bG(v);pJ.init();XJ=new wZ(v,pJ);q0=new wG(v,pJ,J,XJ);TJ=new RN(v,pJ);if(q0.reversedDepthBuffer&&E){TJ.buffers.depth.setReversed(true)}H0=new xG(v);P=new WN;z=new VN(v,pJ,TJ,P,q0,XJ,H0);c=new AG(T);r=new vG(T);JJ=new dY(v);YJ=new BG(v,JJ);a=new fG(v,JJ,H0,YJ);IJ=new pG(v,a,JJ,H0);qJ=new gG(v,q0,z);ZJ=new CG(P);UJ=new ZN(T,c,r,pJ,q0,YJ,ZJ);b=new BN(T,P);KJ=new HN;e=new NN(pJ);LJ=new _G(T,c,r,TJ,IJ,q,Y);OJ=new kN(T,IJ,q0);RJ=new IN(v,H0,q0,TJ);nJ=new IG(v,pJ,H0);h=new hG(v,pJ,H0);H0.programs=UJ.programs;T.capabilities=q0;T.extensions=pJ;T.properties=P;T.renderLists=KJ;T.shadowMap=OJ;T.state=TJ;T.info=H0}HJ();if(O!==a0){I=new dG(O,Q.width,Q.height,Z,W)}const o=new oK(T,v);this.xr=o;this.getContext=function(){return v};this.getContextAttributes=function(){return v.getContextAttributes()};this.forceContextLoss=function(){const w=pJ.get("WEBGL_lose_context");if(w)w.loseContext()};this.forceContextRestore=function(){const w=pJ.get("WEBGL_lose_context");if(w)w.restoreContext()};this.getPixelRatio=function(){return NJ};this.setPixelRatio=function(w){if(w===undefined)return;NJ=w;this.setSize($J,GJ,false)};this.getSize=function(w){return w.set($J,GJ)};this.setSize=function(w,d,i=true){if(o.isPresenting){hJ("WebGLRenderer: Can't change size while VR device is presenting.");return}$J=w;GJ=d;Q.width=Math.floor(w*NJ);Q.height=Math.floor(d*NJ);if(i===true){Q.style.width=w+"px";Q.style.height=d+"px"}if(I!==null){I.setSize(Q.width,Q.height)}this.setViewport(0,0,w,d)};this.getDrawingBufferSize=function(w){return w.set($J*NJ,GJ*NJ).floor()};this.setDrawingBufferSize=function(w,d,i){$J=w;GJ=d;NJ=i;Q.width=Math.floor(w*i);Q.height=Math.floor(d*i);this.setViewport(0,0,w,d)};this.setEffects=function(w){if(O===a0){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let d=0;d<w.length;d++){if(w[d].isOutputPass===true){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}}I.setEffects(w||[])};this.getCurrentViewport=function(w){return w.copy(g)};this.getViewport=function(w){return w.copy(n)};this.setViewport=function(w,d,i,s){if(w.isVector4){n.set(w.x,w.y,w.z,w.w)}else{n.set(w,d,i,s)}TJ.viewport(g.copy(n).multiplyScalar(NJ).round())};this.getScissor=function(w){return w.copy(QJ)};this.setScissor=function(w,d,i,s){if(w.isVector4){QJ.set(w.x,w.y,w.z,w.w)}else{QJ.set(w,d,i,s)}TJ.scissor(x.copy(QJ).multiplyScalar(NJ).round())};this.getScissorTest=function(){return WJ};this.setScissorTest=function(w){TJ.setScissorTest(WJ=w)};this.setOpaqueSort=function(w){cJ=w};this.setTransparentSort=function(w){AJ=w};this.getClearColor=function(w){return w.copy(LJ.getClearColor())};this.setClearColor=function(){LJ.setClearColor(...arguments)};this.getClearAlpha=function(){return LJ.getClearAlpha()};this.setClearAlpha=function(){LJ.setClearAlpha(...arguments)};this.clear=function(w=true,d=true,i=true){let s=0;if(w){let u=false;if(y!==null){const DJ=y.texture.format;u=k.has(DJ)}if(u){const DJ=y.texture.type;const zJ=D.has(DJ);const kJ=LJ.getClearColor();const wJ=LJ.getClearAlpha();const SJ=kJ.r;const mJ=kJ.g;const vJ=kJ.b;if(zJ){F[0]=SJ;F[1]=mJ;F[2]=vJ;F[3]=wJ;v.clearBufferuiv(v.COLOR,0,F)}else{L[0]=SJ;L[1]=mJ;L[2]=vJ;L[3]=wJ;v.clearBufferiv(v.COLOR,0,L)}}else{s|=v.COLOR_BUFFER_BIT}}if(d){s|=v.DEPTH_BUFFER_BIT}if(i){s|=v.STENCIL_BUFFER_BIT;this.state.buffers.stencil.setMask(4294967295)}v.clear(s)};this.clearColor=function(){this.clear(true,false,false)};this.clearDepth=function(){this.clear(false,true,false)};this.clearStencil=function(){this.clear(false,false,true)};this.dispose=function(){Q.removeEventListener("webglcontextlost",BJ,false);Q.removeEventListener("webglcontextrestored",uJ,false);Q.removeEventListener("webglcontextcreationerror",O0,false);LJ.dispose();KJ.dispose();e.dispose();P.dispose();c.dispose();r.dispose();IJ.dispose();YJ.dispose();RJ.dispose();UJ.dispose();o.dispose();o.removeEventListener("sessionstart",YW);o.removeEventListener("sessionend",XW);O9.stop()};function BJ(w){w.preventDefault();s$("WebGLRenderer: Context Lost.");B=true}function uJ(){s$("WebGLRenderer: Context Restored.");B=false;const w=H0.autoReset;const d=OJ.enabled;const i=OJ.autoUpdate;const s=OJ.needsUpdate;const u=OJ.type;HJ();H0.autoReset=w;OJ.enabled=d;OJ.autoUpdate=i;OJ.needsUpdate=s;OJ.type=u}function O0(w){dJ("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Y0(w){const d=w.target;d.removeEventListener("dispose",Y0);b8(d)}function b8(w){f8(w);P.remove(w)}function f8(w){const d=P.get(w).programs;if(d!==undefined){d.forEach(function(i){UJ.releaseProgram(i)});if(w.isShaderMaterial){UJ.releaseShaderCache(w)}}}this.renderBufferDirect=function(w,d,i,s,u,DJ){if(d===null)d=jJ;const zJ=u.isMesh&&u.matrixWorld.determinant()<0;const kJ=pH(w,d,i,s,u);TJ.setMaterial(s,zJ);let wJ=i.index;let SJ=1;if(s.wireframe===true){wJ=a.getWireframeAttribute(i);if(wJ===undefined)return;SJ=2}const mJ=i.drawRange;const vJ=i.attributes.position;let oJ=mJ.start*SJ;let E0=(mJ.start+mJ.count)*SJ;if(DJ!==null){oJ=Math.max(oJ,DJ.start*SJ);E0=Math.min(E0,(DJ.start+DJ.count)*SJ)}if(wJ!==null){oJ=Math.max(oJ,0);E0=Math.min(E0,wJ.count)}else if(vJ!==undefined&&vJ!==null){oJ=Math.max(oJ,0);E0=Math.min(E0,vJ.count)}const _0=E0-oJ;if(_0<0||_0===Infinity)return;YJ.setup(u,s,kJ,i,wJ);let B0;let D0=nJ;if(wJ!==null){B0=JJ.get(wJ);D0=h;D0.setIndex(B0)}if(u.isMesh){if(s.wireframe===true){TJ.setLineWidth(s.wireframeLinewidth*J0());D0.setMode(v.LINES)}else{D0.setMode(v.TRIANGLES)}}else if(u.isLine){let bJ=s.linewidth;if(bJ===undefined)bJ=1;TJ.setLineWidth(bJ*J0());if(u.isLineSegments){D0.setMode(v.LINES)}else if(u.isLineLoop){D0.setMode(v.LINE_LOOP)}else{D0.setMode(v.LINE_STRIP)}}else if(u.isPoints){D0.setMode(v.POINTS)}else if(u.isSprite){D0.setMode(v.TRIANGLES)}if(u.isBatchedMesh){if(u._multiDrawInstances!==null){J6("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.");D0.renderMultiDrawInstances(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount,u._multiDrawInstances)}else{if(!pJ.get("WEBGL_multi_draw")){const bJ=u._multiDrawStarts;const X0=u._multiDrawCounts;const tJ=u._multiDrawCount;const W8=wJ?JJ.get(wJ).bytesPerElement:1;const x9=P.get(s).currentProgram.getUniforms();for(let K8=0;K8<tJ;K8++){x9.setValue(v,"_gl_DrawID",K8);D0.render(bJ[K8]/W8,X0[K8])}}else{D0.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount)}}}else if(u.isInstancedMesh){D0.renderInstances(oJ,_0,u.count)}else if(i.isInstancedBufferGeometry){const bJ=i._maxInstanceCount!==undefined?i._maxInstanceCount:Infinity;const X0=Math.min(i.instanceCount,bJ);D0.renderInstances(oJ,_0,X0)}else{D0.render(oJ,_0)}};function HW(w,d,i){if(w.transparent===true&&w.side===J8&&w.forceSinglePass===false){w.side=o0;w.needsUpdate=true;Z7(w,d,i);w.side=F8;w.needsUpdate=true;Z7(w,d,i);w.side=J8}else{Z7(w,d,i)}}this.compile=function(w,d,i=null){if(i===null)i=w;R=e.get(i);R.init(d);M.push(R);i.traverseVisible(function(u){if(u.isLight&&u.layers.test(d.layers)){R.pushLight(u);if(u.castShadow){R.pushShadow(u)}}});if(w!==i){w.traverseVisible(function(u){if(u.isLight&&u.layers.test(d.layers)){R.pushLight(u);if(u.castShadow){R.pushShadow(u)}}})}R.setupLights();const s=new Set;w.traverse(function(u){if(!(u.isMesh||u.isPoints||u.isLine||u.isSprite)){return}const DJ=u.material;if(DJ){if(Array.isArray(DJ)){for(let zJ=0;zJ<DJ.length;zJ++){const kJ=DJ[zJ];HW(kJ,i,u);s.add(kJ)}}else{HW(DJ,i,u);s.add(DJ)}}});R=M.pop();return s};this.compileAsync=function(w,d,i=null){const s=this.compile(w,d,i);return new Promise((u)=>{function DJ(){s.forEach(function(zJ){const kJ=P.get(zJ);const wJ=kJ.currentProgram;if(wJ.isReady()){s.delete(zJ)}});if(s.size===0){u(w);return}setTimeout(DJ,10)}if(pJ.get("KHR_parallel_shader_compile")!==null){DJ()}else{setTimeout(DJ,10)}})};let oQ=null;function gH(w){if(oQ)oQ(w)}function YW(){O9.stop()}function XW(){O9.start()}const O9=new xK;O9.setAnimationLoop(gH);if(typeof self!=="undefined")O9.setContext(self);this.setAnimationLoop=function(w){oQ=w;o.setAnimationLoop(w);w===null?O9.stop():O9.start()};o.addEventListener("sessionstart",YW);o.addEventListener("sessionend",XW);this.render=function(w,d){if(d!==undefined&&d.isCamera!==true){dJ("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===true)return;const i=o.enabled===true&&o.isPresenting===true;const s=I!==null&&(y===null||i)&&I.begin(T,y);if(w.matrixWorldAutoUpdate===true)w.updateMatrixWorld();if(d.parent===null&&d.matrixWorldAutoUpdate===true)d.updateMatrixWorld();if(o.enabled===true&&o.isPresenting===true&&(I===null||I.isCompositing()===false)){if(o.cameraAutoUpdate===true)o.updateCamera(d);d=o.getCamera()}if(w.isScene===true)w.onBeforeRender(T,w,d,y);R=e.get(w,M.length);R.init(d);M.push(R);lJ.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse);MJ.setFromProjectionMatrix(lJ,B8,d.reversedDepth);CJ=this.localClippingEnabled;VJ=ZJ.init(this.clippingPlanes,CJ);V=KJ.get(w,C.length);V.init();C.push(V);if(o.enabled===true&&o.isPresenting===true){const zJ=T.xr.getDepthSensingMesh();if(zJ!==null){aQ(zJ,d,-Infinity,T.sortObjects)}}aQ(w,d,0,T.sortObjects);V.finish();if(T.sortObjects===true){V.sort(cJ,AJ)}PJ=o.enabled===false||o.isPresenting===false||o.hasDepthSensing()===false;if(PJ){LJ.addToRenderList(V,w)}this.info.render.frame++;if(VJ===true)ZJ.beginShadows();const u=R.state.shadowsArray;OJ.render(u,w,d);if(VJ===true)ZJ.endShadows();if(this.info.autoReset===true)this.info.reset();const DJ=s&&I.hasRenderPass();if(DJ===false){const zJ=V.opaque;const kJ=V.transmissive;R.setupLights();if(d.isArrayCamera){const wJ=d.cameras;if(kJ.length>0){for(let SJ=0,mJ=wJ.length;SJ<mJ;SJ++){const vJ=wJ[SJ];GW(zJ,kJ,w,vJ)}}if(PJ)LJ.render(w);for(let SJ=0,mJ=wJ.length;SJ<mJ;SJ++){const vJ=wJ[SJ];UW(V,w,vJ,vJ.viewport)}}else{if(kJ.length>0)GW(zJ,kJ,w,d);if(PJ)LJ.render(w);UW(V,w,d)}}if(y!==null&&A===0){z.updateMultisampleRenderTarget(y);z.updateRenderTargetMipmap(y)}if(s){I.end(T)}if(w.isScene===true)w.onAfterRender(T,w,d);YJ.resetDefaultState();f=-1;j=null;M.pop();if(M.length>0){R=M[M.length-1];if(VJ===true)ZJ.setGlobalState(T.clippingPlanes,R.state.camera)}else{R=null}C.pop();if(C.length>0){V=C[C.length-1]}else{V=null}};function aQ(w,d,i,s){if(w.visible===false)return;const u=w.layers.test(d.layers);if(u){if(w.isGroup){i=w.renderOrder}else if(w.isLOD){if(w.autoUpdate===true)w.update(d)}else if(w.isLight){R.pushLight(w);if(w.castShadow){R.pushShadow(w)}}else if(w.isSprite){if(!w.frustumCulled||MJ.intersectsSprite(w)){if(s){yJ.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lJ)}const zJ=IJ.update(w);const kJ=w.material;if(kJ.visible){V.push(w,zJ,kJ,i,yJ.z,null)}}}else if(w.isMesh||w.isLine||w.isPoints){if(!w.frustumCulled||MJ.intersectsObject(w)){const zJ=IJ.update(w);const kJ=w.material;if(s){if(w.boundingSphere!==undefined){if(w.boundingSphere===null)w.computeBoundingSphere();yJ.copy(w.boundingSphere.center)}else{if(zJ.boundingSphere===null)zJ.computeBoundingSphere();yJ.copy(zJ.boundingSphere.center)}yJ.applyMatrix4(w.matrixWorld).applyMatrix4(lJ)}if(Array.isArray(kJ)){const wJ=zJ.groups;for(let SJ=0,mJ=wJ.length;SJ<mJ;SJ++){const vJ=wJ[SJ];const oJ=kJ[vJ.materialIndex];if(oJ&&oJ.visible){V.push(w,zJ,oJ,i,yJ.z,vJ)}}}else if(kJ.visible){V.push(w,zJ,kJ,i,yJ.z,null)}}}}const DJ=w.children;for(let zJ=0,kJ=DJ.length;zJ<kJ;zJ++){aQ(DJ[zJ],d,i,s)}}function UW(w,d,i,s){const{opaque:u,transmissive:DJ,transparent:zJ}=w;R.setupLightsView(i);if(VJ===true)ZJ.setGlobalState(T.clippingPlanes,i);if(s)TJ.viewport(g.copy(s));if(u.length>0)$7(u,d,i);if(DJ.length>0)$7(DJ,d,i);if(zJ.length>0)$7(zJ,d,i);TJ.buffers.depth.setTest(true);TJ.buffers.depth.setMask(true);TJ.buffers.color.setMask(true);TJ.setPolygonOffset(false)}function GW(w,d,i,s){const u=i.isScene===true?i.overrideMaterial:null;if(u!==null){return}if(R.state.transmissionRenderTarget[s.id]===undefined){const oJ=pJ.has("EXT_color_buffer_half_float")||pJ.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[s.id]=new $8(1,1,{generateMipmaps:true,type:oJ?U8:a0,minFilter:H9,samples:q0.samples,stencilBuffer:W,resolveDepthBuffer:false,resolveStencilBuffer:false,colorSpace:rJ.workingColorSpace})}const DJ=R.state.transmissionRenderTarget[s.id];const zJ=s.viewport||g;DJ.setSize(zJ.z*T.transmissionResolutionScale,zJ.w*T.transmissionResolutionScale);const kJ=T.getRenderTarget();const wJ=T.getActiveCubeFace();const SJ=T.getActiveMipmapLevel();T.setRenderTarget(DJ);T.getClearColor(m);t=T.getClearAlpha();if(t<1)T.setClearColor(16777215,0.5);T.clear();if(PJ)LJ.render(i);const mJ=T.toneMapping;T.toneMapping=I8;const vJ=s.viewport;if(s.viewport!==undefined)s.viewport=undefined;R.setupLightsView(s);if(VJ===true)ZJ.setGlobalState(T.clippingPlanes,s);$7(w,i,s);z.updateMultisampleRenderTarget(DJ);z.updateRenderTargetMipmap(DJ);if(pJ.has("WEBGL_multisampled_render_to_texture")===false){let oJ=false;for(let E0=0,_0=d.length;E0<_0;E0++){const B0=d[E0];const{object:D0,geometry:bJ,material:X0,group:tJ}=B0;if(X0.side===J8&&D0.layers.test(s.layers)){const W8=X0.side;X0.side=o0;X0.needsUpdate=true;EW(D0,i,s,bJ,X0,tJ);X0.side=W8;X0.needsUpdate=true;oJ=true}}if(oJ===true){z.updateMultisampleRenderTarget(DJ);z.updateRenderTargetMipmap(DJ)}}T.setRenderTarget(kJ,wJ,SJ);T.setClearColor(m,t);if(vJ!==undefined)s.viewport=vJ;T.toneMapping=mJ}function $7(w,d,i){const s=d.isScene===true?d.overrideMaterial:null;for(let u=0,DJ=w.length;u<DJ;u++){const zJ=w[u];const{object:kJ,geometry:wJ,group:SJ}=zJ;let mJ=zJ.material;if(mJ.allowOverride===true&&s!==null){mJ=s}if(kJ.layers.test(i.layers)){EW(kJ,d,i,wJ,mJ,SJ)}}}function EW(w,d,i,s,u,DJ){w.onBeforeRender(T,d,i,s,u,DJ);w.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,w.matrixWorld);w.normalMatrix.getNormalMatrix(w.modelViewMatrix);u.onBeforeRender(T,d,i,s,w,DJ);if(u.transparent===true&&u.side===J8&&u.forceSinglePass===false){u.side=o0;u.needsUpdate=true;T.renderBufferDirect(i,d,s,u,w,DJ);u.side=F8;u.needsUpdate=true;T.renderBufferDirect(i,d,s,u,w,DJ);u.side=J8}else{T.renderBufferDirect(i,d,s,u,w,DJ)}w.onAfterRender(T,d,i,s,u,DJ)}function Z7(w,d,i){if(d.isScene!==true)d=jJ;const s=P.get(w);const u=R.state.lights;const DJ=R.state.shadowsArray;const zJ=u.state.version;const kJ=UJ.getParameters(w,u.state,DJ,d,i);const wJ=UJ.getProgramCacheKey(kJ);let SJ=s.programs;s.environment=w.isMeshStandardMaterial?d.environment:null;s.fog=d.fog;s.envMap=(w.isMeshStandardMaterial?r:c).get(w.envMap||s.environment);s.envMapRotation=s.environment!==null&&w.envMap===null?d.environmentRotation:w.envMapRotation;if(SJ===undefined){w.addEventListener("dispose",Y0);SJ=new Map;s.programs=SJ}let mJ=SJ.get(wJ);if(mJ!==undefined){if(s.currentProgram===mJ&&s.lightsStateVersion===zJ){qW(w,kJ);return mJ}}else{kJ.uniforms=UJ.getUniforms(w);w.onBeforeCompile(kJ,T);mJ=UJ.acquireProgram(kJ,wJ);SJ.set(wJ,mJ);s.uniforms=kJ.uniforms}const vJ=s.uniforms;if(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===true){vJ.clippingPlanes=ZJ.uniform}qW(w,kJ);s.needsLights=dH(w);s.lightsStateVersion=zJ;if(s.needsLights){vJ.ambientLightColor.value=u.state.ambient;vJ.lightProbe.value=u.state.probe;vJ.directionalLights.value=u.state.directional;vJ.directionalLightShadows.value=u.state.directionalShadow;vJ.spotLights.value=u.state.spot;vJ.spotLightShadows.value=u.state.spotShadow;vJ.rectAreaLights.value=u.state.rectArea;vJ.ltc_1.value=u.state.rectAreaLTC1;vJ.ltc_2.value=u.state.rectAreaLTC2;vJ.pointLights.value=u.state.point;vJ.pointLightShadows.value=u.state.pointShadow;vJ.hemisphereLights.value=u.state.hemi;vJ.directionalShadowMap.value=u.state.directionalShadowMap;vJ.directionalShadowMatrix.value=u.state.directionalShadowMatrix;vJ.spotShadowMap.value=u.state.spotShadowMap;vJ.spotLightMatrix.value=u.state.spotLightMatrix;vJ.spotLightMap.value=u.state.spotLightMap;vJ.pointShadowMap.value=u.state.pointShadowMap;vJ.pointShadowMatrix.value=u.state.pointShadowMatrix}s.currentProgram=mJ;s.uniformsList=null;return mJ}function NW(w){if(w.uniformsList===null){const d=w.currentProgram.getUniforms();w.uniformsList=s6.seqWithValue(d.seq,w.uniforms)}return w.uniformsList}function qW(w,d){const i=P.get(w);i.outputColorSpace=d.outputColorSpace;i.batching=d.batching;i.batchingColor=d.batchingColor;i.instancing=d.instancing;i.instancingColor=d.instancingColor;i.instancingMorph=d.instancingMorph;i.skinning=d.skinning;i.morphTargets=d.morphTargets;i.morphNormals=d.morphNormals;i.morphColors=d.morphColors;i.morphTargetsCount=d.morphTargetsCount;i.numClippingPlanes=d.numClippingPlanes;i.numIntersection=d.numClipIntersection;i.vertexAlphas=d.vertexAlphas;i.vertexTangents=d.vertexTangents;i.toneMapping=d.toneMapping}function pH(w,d,i,s,u){if(d.isScene!==true)d=jJ;z.resetTextureUnits();const DJ=d.fog;const zJ=s.isMeshStandardMaterial?d.environment:null;const kJ=y===null?T.outputColorSpace:y.isXRRenderTarget===true?y.texture.colorSpace:I9;const wJ=(s.isMeshStandardMaterial?r:c).get(s.envMap||zJ);const SJ=s.vertexColors===true&&!!i.attributes.color&&i.attributes.color.itemSize===4;const mJ=!!i.attributes.tangent&&(!!s.normalMap||s.anisotropy>0);const vJ=!!i.morphAttributes.position;const oJ=!!i.morphAttributes.normal;const E0=!!i.morphAttributes.color;let _0=I8;if(s.toneMapped){if(y===null||y.isXRRenderTarget===true){_0=T.toneMapping}}const B0=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color;const D0=B0!==undefined?B0.length:0;const bJ=P.get(s);const X0=R.state.lights;if(VJ===true){if(CJ===true||w!==j){const p0=w===j&&s.id===f;ZJ.setState(s,w,p0)}}let tJ=false;if(s.version===bJ.__version){if(bJ.needsLights&&bJ.lightsStateVersion!==X0.state.version){tJ=true}else if(bJ.outputColorSpace!==kJ){tJ=true}else if(u.isBatchedMesh&&bJ.batching===false){tJ=true}else if(!u.isBatchedMesh&&bJ.batching===true){tJ=true}else if(u.isBatchedMesh&&bJ.batchingColor===true&&u.colorTexture===null){tJ=true}else if(u.isBatchedMesh&&bJ.batchingColor===false&&u.colorTexture!==null){tJ=true}else if(u.isInstancedMesh&&bJ.instancing===false){tJ=true}else if(!u.isInstancedMesh&&bJ.instancing===true){tJ=true}else if(u.isSkinnedMesh&&bJ.skinning===false){tJ=true}else if(!u.isSkinnedMesh&&bJ.skinning===true){tJ=true}else if(u.isInstancedMesh&&bJ.instancingColor===true&&u.instanceColor===null){tJ=true}else if(u.isInstancedMesh&&bJ.instancingColor===false&&u.instanceColor!==null){tJ=true}else if(u.isInstancedMesh&&bJ.instancingMorph===true&&u.morphTexture===null){tJ=true}else if(u.isInstancedMesh&&bJ.instancingMorph===false&&u.morphTexture!==null){tJ=true}else if(bJ.envMap!==wJ){tJ=true}else if(s.fog===true&&bJ.fog!==DJ){tJ=true}else if(bJ.numClippingPlanes!==undefined&&(bJ.numClippingPlanes!==ZJ.numPlanes||bJ.numIntersection!==ZJ.numIntersection)){tJ=true}else if(bJ.vertexAlphas!==SJ){tJ=true}else if(bJ.vertexTangents!==mJ){tJ=true}else if(bJ.morphTargets!==vJ){tJ=true}else if(bJ.morphNormals!==oJ){tJ=true}else if(bJ.morphColors!==E0){tJ=true}else if(bJ.toneMapping!==_0){tJ=true}else if(bJ.morphTargetsCount!==D0){tJ=true}}else{tJ=true;bJ.__version=s.version}let W8=bJ.currentProgram;if(tJ===true){W8=Z7(s,d,u)}let x9=false;let K8=false;let R6=false;const F0=W8.getUniforms(),t0=bJ.uniforms;if(TJ.useProgram(W8.program)){x9=true;K8=true;R6=true}if(s.id!==f){f=s.id;K8=true}if(x9||j!==w){const p0=TJ.buffers.depth.getReversed();if(p0&&w.reversedDepth!==true){w._reversedDepth=true;w.updateProjectionMatrix()}F0.setValue(v,"projectionMatrix",w.projectionMatrix);F0.setValue(v,"viewMatrix",w.matrixWorldInverse);const e0=F0.map.cameraPosition;if(e0!==undefined){e0.setValue(v,gJ.setFromMatrixPosition(w.matrixWorld))}if(q0.logarithmicDepthBuffer){F0.setValue(v,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2))}if(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial){F0.setValue(v,"isOrthographic",w.isOrthographicCamera===true)}if(j!==w){j=w;K8=true;R6=true}}if(bJ.needsLights){if(X0.state.directionalShadowMap.length>0){F0.setValue(v,"directionalShadowMap",X0.state.directionalShadowMap,z)}if(X0.state.spotShadowMap.length>0){F0.setValue(v,"spotShadowMap",X0.state.spotShadowMap,z)}if(X0.state.pointShadowMap.length>0){F0.setValue(v,"pointShadowMap",X0.state.pointShadowMap,z)}}if(u.isSkinnedMesh){F0.setOptional(v,u,"bindMatrix");F0.setOptional(v,u,"bindMatrixInverse");const p0=u.skeleton;if(p0){if(p0.boneTexture===null)p0.computeBoneTexture();F0.setValue(v,"boneTexture",p0.boneTexture,z)}}if(u.isBatchedMesh){F0.setOptional(v,u,"batchingTexture");F0.setValue(v,"batchingTexture",u._matricesTexture,z);F0.setOptional(v,u,"batchingIdTexture");F0.setValue(v,"batchingIdTexture",u._indirectTexture,z);F0.setOptional(v,u,"batchingColorTexture");if(u._colorsTexture!==null){F0.setValue(v,"batchingColorTexture",u._colorsTexture,z)}}const q8=i.morphAttributes;if(q8.position!==undefined||q8.normal!==undefined||q8.color!==undefined){qJ.update(u,i,W8)}if(K8||bJ.receiveShadow!==u.receiveShadow){bJ.receiveShadow=u.receiveShadow;F0.setValue(v,"receiveShadow",u.receiveShadow)}if(s.isMeshGouraudMaterial&&s.envMap!==null){t0.envMap.value=wJ;t0.flipEnvMap.value=wJ.isCubeTexture&&wJ.isRenderTargetTexture===false?-1:1}if(s.isMeshStandardMaterial&&s.envMap===null&&d.environment!==null){t0.envMapIntensity.value=d.environmentIntensity}if(t0.dfgLUT!==undefined){t0.dfgLUT.value=CN()}if(K8){F0.setValue(v,"toneMappingExposure",T.toneMappingExposure);if(bJ.needsLights){mH(t0,R6)}if(DJ&&s.fog===true){b.refreshFogUniforms(t0,DJ)}b.refreshMaterialUniforms(t0,s,NJ,GJ,R.state.transmissionRenderTarget[w.id]);s6.upload(v,NW(bJ),t0,z)}if(s.isShaderMaterial&&s.uniformsNeedUpdate===true){s6.upload(v,NW(bJ),t0,z);s.uniformsNeedUpdate=false}if(s.isSpriteMaterial){F0.setValue(v,"center",u.center)}F0.setValue(v,"modelViewMatrix",u.modelViewMatrix);F0.setValue(v,"normalMatrix",u.normalMatrix);F0.setValue(v,"modelMatrix",u.matrixWorld);if(s.isShaderMaterial||s.isRawShaderMaterial){const p0=s.uniformsGroups;for(let e0=0,rQ=p0.length;e0<rQ;e0++){const F9=p0[e0];RJ.update(F9,W8);RJ.bind(F9,W8)}}return W8}function mH(w,d){w.ambientLightColor.needsUpdate=d;w.lightProbe.needsUpdate=d;w.directionalLights.needsUpdate=d;w.directionalLightShadows.needsUpdate=d;w.pointLights.needsUpdate=d;w.pointLightShadows.needsUpdate=d;w.spotLights.needsUpdate=d;w.spotLightShadows.needsUpdate=d;w.rectAreaLights.needsUpdate=d;w.hemisphereLights.needsUpdate=d}function dH(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===true}this.getActiveCubeFace=function(){return _};this.getActiveMipmapLevel=function(){return A};this.getRenderTarget=function(){return y};this.setRenderTargetTextures=function(w,d,i){const s=P.get(w);s.__autoAllocateDepthBuffer=w.resolveDepthBuffer===false;if(s.__autoAllocateDepthBuffer===false){s.__useRenderToTexture=false}P.get(w.texture).__webglTexture=d;P.get(w.depthTexture).__webglTexture=s.__autoAllocateDepthBuffer?undefined:i;s.__hasExternalTextures=true};this.setRenderTargetFramebuffer=function(w,d){const i=P.get(w);i.__webglFramebuffer=d;i.__useDefaultFramebuffer=d===undefined};const lH=v.createFramebuffer();this.setRenderTarget=function(w,d=0,i=0){y=w;_=d;A=i;let s=null;let u=false;let DJ=false;if(w){const kJ=P.get(w);if(kJ.__useDefaultFramebuffer!==undefined){TJ.bindFramebuffer(v.FRAMEBUFFER,kJ.__webglFramebuffer);g.copy(w.viewport);x.copy(w.scissor);p=w.scissorTest;TJ.viewport(g);TJ.scissor(x);TJ.setScissorTest(p);f=-1;return}else if(kJ.__webglFramebuffer===undefined){z.setupRenderTarget(w)}else if(kJ.__hasExternalTextures){z.rebindTextures(w,P.get(w.texture).__webglTexture,P.get(w.depthTexture).__webglTexture)}else if(w.depthBuffer){const mJ=w.depthTexture;if(kJ.__boundDepthTexture!==mJ){if(mJ!==null&&P.has(mJ)&&(w.width!==mJ.image.width||w.height!==mJ.image.height)){throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.")}z.setupDepthRenderbuffer(w)}}const wJ=w.texture;if(wJ.isData3DTexture||wJ.isDataArrayTexture||wJ.isCompressedArrayTexture){DJ=true}const SJ=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget){if(Array.isArray(SJ[d])){s=SJ[d][i]}else{s=SJ[d]}u=true}else if(w.samples>0&&z.useMultisampledRTT(w)===false){s=P.get(w).__webglMultisampledFramebuffer}else{if(Array.isArray(SJ)){s=SJ[i]}else{s=SJ}}g.copy(w.viewport);x.copy(w.scissor);p=w.scissorTest}else{g.copy(n).multiplyScalar(NJ).floor();x.copy(QJ).multiplyScalar(NJ).floor();p=WJ}if(i!==0){s=lH}const zJ=TJ.bindFramebuffer(v.FRAMEBUFFER,s);if(zJ){TJ.drawBuffers(w,s)}TJ.viewport(g);TJ.scissor(x);TJ.setScissorTest(p);if(u){const kJ=P.get(w.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+d,kJ.__webglTexture,i)}else if(DJ){const kJ=d;for(let wJ=0;wJ<w.textures.length;wJ++){const SJ=P.get(w.textures[wJ]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+wJ,SJ.__webglTexture,i,kJ)}}else if(w!==null&&i!==0){const kJ=P.get(w.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,kJ.__webglTexture,i)}f=-1};this.readRenderTargetPixels=function(w,d,i,s,u,DJ,zJ,kJ=0){if(!(w&&w.isWebGLRenderTarget)){dJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wJ=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zJ!==undefined){wJ=wJ[zJ]}if(wJ){TJ.bindFramebuffer(v.FRAMEBUFFER,wJ);try{const SJ=w.textures[kJ];const mJ=SJ.format;const vJ=SJ.type;if(!q0.textureFormatReadable(mJ)){dJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q0.textureTypeReadable(vJ)){dJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(d>=0&&d<=w.width-s&&(i>=0&&i<=w.height-u)){if(w.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+kJ);v.readPixels(d,i,s,u,XJ.convert(mJ),XJ.convert(vJ),DJ)}}finally{const SJ=y!==null?P.get(y).__webglFramebuffer:null;TJ.bindFramebuffer(v.FRAMEBUFFER,SJ)}}};this.readRenderTargetPixelsAsync=async function(w,d,i,s,u,DJ,zJ,kJ=0){if(!(w&&w.isWebGLRenderTarget)){throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")}let wJ=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zJ!==undefined){wJ=wJ[zJ]}if(wJ){if(d>=0&&d<=w.width-s&&(i>=0&&i<=w.height-u)){TJ.bindFramebuffer(v.FRAMEBUFFER,wJ);const SJ=w.textures[kJ];const mJ=SJ.format;const vJ=SJ.type;if(!q0.textureFormatReadable(mJ)){throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.")}if(!q0.textureTypeReadable(vJ)){throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.")}const oJ=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,oJ);v.bufferData(v.PIXEL_PACK_BUFFER,DJ.byteLength,v.STREAM_READ);if(w.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+kJ);v.readPixels(d,i,s,u,XJ.convert(mJ),XJ.convert(vJ),0);const E0=y!==null?P.get(y).__webglFramebuffer:null;TJ.bindFramebuffer(v.FRAMEBUFFER,E0);const _0=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);v.flush();await EK(v,_0,4);v.bindBuffer(v.PIXEL_PACK_BUFFER,oJ);v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,DJ);v.deleteBuffer(oJ);v.deleteSync(_0);return DJ}else{throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}}};this.copyFramebufferToTexture=function(w,d=null,i=0){const s=Math.pow(2,-i);const u=Math.floor(w.image.width*s);const DJ=Math.floor(w.image.height*s);const zJ=d!==null?d.x:0;const kJ=d!==null?d.y:0;z.setTexture2D(w,0);v.copyTexSubImage2D(v.TEXTURE_2D,i,0,0,zJ,kJ,u,DJ);TJ.unbindTexture()};const uH=v.createFramebuffer();const cH=v.createFramebuffer();this.copyTextureToTexture=function(w,d,i=null,s=null,u=0,DJ=null){if(DJ===null){if(u!==0){J6("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.");DJ=u;u=0}else{DJ=0}}let zJ,kJ,wJ,SJ,mJ,vJ;let oJ,E0,_0;const B0=w.isCompressedTexture?w.mipmaps[DJ]:w.image;if(i!==null){zJ=i.max.x-i.min.x;kJ=i.max.y-i.min.y;wJ=i.isBox3?i.max.z-i.min.z:1;SJ=i.min.x;mJ=i.min.y;vJ=i.isBox3?i.min.z:0}else{const q8=Math.pow(2,-u);zJ=Math.floor(B0.width*q8);kJ=Math.floor(B0.height*q8);if(w.isDataArrayTexture){wJ=B0.depth}else if(w.isData3DTexture){wJ=Math.floor(B0.depth*q8)}else{wJ=1}SJ=0;mJ=0;vJ=0}if(s!==null){oJ=s.x;E0=s.y;_0=s.z}else{oJ=0;E0=0;_0=0}const D0=XJ.convert(d.format);const bJ=XJ.convert(d.type);let X0;if(d.isData3DTexture){z.setTexture3D(d,0);X0=v.TEXTURE_3D}else if(d.isDataArrayTexture||d.isCompressedArrayTexture){z.setTexture2DArray(d,0);X0=v.TEXTURE_2D_ARRAY}else{z.setTexture2D(d,0);X0=v.TEXTURE_2D}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,d.flipY);v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha);v.pixelStorei(v.UNPACK_ALIGNMENT,d.unpackAlignment);const tJ=v.getParameter(v.UNPACK_ROW_LENGTH);const W8=v.getParameter(v.UNPACK_IMAGE_HEIGHT);const x9=v.getParameter(v.UNPACK_SKIP_PIXELS);const K8=v.getParameter(v.UNPACK_SKIP_ROWS);const R6=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,B0.width);v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,B0.height);v.pixelStorei(v.UNPACK_SKIP_PIXELS,SJ);v.pixelStorei(v.UNPACK_SKIP_ROWS,mJ);v.pixelStorei(v.UNPACK_SKIP_IMAGES,vJ);const F0=w.isDataArrayTexture||w.isData3DTexture;const t0=d.isDataArrayTexture||d.isData3DTexture;if(w.isDepthTexture){const q8=P.get(w);const p0=P.get(d);const e0=P.get(q8.__renderTarget);const rQ=P.get(p0.__renderTarget);TJ.bindFramebuffer(v.READ_FRAMEBUFFER,e0.__webglFramebuffer);TJ.bindFramebuffer(v.DRAW_FRAMEBUFFER,rQ.__webglFramebuffer);for(let F9=0;F9<wJ;F9++){if(F0){v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,P.get(w).__webglTexture,u,vJ+F9);v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,P.get(d).__webglTexture,DJ,_0+F9)}v.blitFramebuffer(SJ,mJ,zJ,kJ,oJ,E0,zJ,kJ,v.DEPTH_BUFFER_BIT,v.NEAREST)}TJ.bindFramebuffer(v.READ_FRAMEBUFFER,null);TJ.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(u!==0||w.isRenderTargetTexture||P.has(w)){const q8=P.get(w);const p0=P.get(d);TJ.bindFramebuffer(v.READ_FRAMEBUFFER,uH);TJ.bindFramebuffer(v.DRAW_FRAMEBUFFER,cH);for(let e0=0;e0<wJ;e0++){if(F0){v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,q8.__webglTexture,u,vJ+e0)}else{v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,q8.__webglTexture,u)}if(t0){v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,p0.__webglTexture,DJ,_0+e0)}else{v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,p0.__webglTexture,DJ)}if(u!==0){v.blitFramebuffer(SJ,mJ,zJ,kJ,oJ,E0,zJ,kJ,v.COLOR_BUFFER_BIT,v.NEAREST)}else if(t0){v.copyTexSubImage3D(X0,DJ,oJ,E0,_0+e0,SJ,mJ,zJ,kJ)}else{v.copyTexSubImage2D(X0,DJ,oJ,E0,SJ,mJ,zJ,kJ)}}TJ.bindFramebuffer(v.READ_FRAMEBUFFER,null);TJ.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else{if(t0){if(w.isDataTexture||w.isData3DTexture){v.texSubImage3D(X0,DJ,oJ,E0,_0,zJ,kJ,wJ,D0,bJ,B0.data)}else if(d.isCompressedArrayTexture){v.compressedTexSubImage3D(X0,DJ,oJ,E0,_0,zJ,kJ,wJ,D0,B0.data)}else{v.texSubImage3D(X0,DJ,oJ,E0,_0,zJ,kJ,wJ,D0,bJ,B0)}}else{if(w.isDataTexture){v.texSubImage2D(v.TEXTURE_2D,DJ,oJ,E0,zJ,kJ,D0,bJ,B0.data)}else if(w.isCompressedTexture){v.compressedTexSubImage2D(v.TEXTURE_2D,DJ,oJ,E0,B0.width,B0.height,D0,B0.data)}else{v.texSubImage2D(v.TEXTURE_2D,DJ,oJ,E0,zJ,kJ,D0,bJ,B0)}}}v.pixelStorei(v.UNPACK_ROW_LENGTH,tJ);v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,W8);v.pixelStorei(v.UNPACK_SKIP_PIXELS,x9);v.pixelStorei(v.UNPACK_SKIP_ROWS,K8);v.pixelStorei(v.UNPACK_SKIP_IMAGES,R6);if(DJ===0&&d.generateMipmaps){v.generateMipmap(X0)}TJ.unbindTexture()};this.initRenderTarget=function(w){if(P.get(w).__webglFramebuffer===undefined){z.setupRenderTarget(w)}};this.initTexture=function(w){if(w.isCubeTexture){z.setTextureCube(w,0)}else if(w.isData3DTexture){z.setTexture3D(w,0)}else if(w.isDataArrayTexture||w.isCompressedArrayTexture){z.setTexture2DArray(w,0)}else{z.setTexture2D(w,0)}TJ.unbindTexture()};this.resetState=function(){_=0;A=0;y=null;TJ.reset();YJ.reset()};if(typeof __THREE_DEVTOOLS__!=="undefined"){__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}}get coordinateSystem(){return B8}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;const Q=this.getContext();Q.drawingBufferColorSpace=rJ._getDrawingBufferColorSpace(J);Q.unpackColorSpace=rJ._getUnpackColorSpace()}}class D9{static idGen=0;constructor(J,Q){let $;let Z;this.promise=new Promise((X,U)=>{$=X;Z=U});const W=$.bind(this);const K=Z.bind(this);const H=(...X)=>{W(...X)};const Y=(X)=>{K(X)};J(H.bind(this),Y.bind(this));this.abortHandler=Q;this.id=D9.idGen++}then(J){return new D9((Q,$)=>{this.promise=this.promise.then((...Z)=>{const W=J(...Z);if(W instanceof Promise||W instanceof D9){W.then((...K)=>{Q(...K)})}else{Q(W)}}).catch((Z)=>{$(Z)})},this.abortHandler)}catch(J){return new D9((Q)=>{this.promise=this.promise.then((...$)=>{Q(...$)}).catch(J)},this.abortHandler)}abort(J){if(this.abortHandler)this.abortHandler(J)}}class dZ extends Error{constructor(J){super(J)}}var vO=function(){const J=new Float32Array(1);const Q=new Int32Array(J.buffer);return function($){J[0]=$;const Z=Q[0];let W=Z>>16&32768;let K=Z>>12&2047;const H=Z>>23&255;if(H<103)return W;if(H>142){W|=31744;W|=(H==255?0:1)&&Z&8388607;return W}if(H<113){K|=2048;W|=(K>>114-H)+(K>>113-H&1);return W}W|=H-112<<10|K>>1;W+=K&1;return W}}();var AZ=function(){const J=new Float32Array(1);const Q=new Int32Array(J.buffer);return function($){J[0]=$;return Q[0]}}();var PN=function(J,Q){return J[Q]+(J[Q+1]<<8)+(J[Q+2]<<16)+(J[Q+3]<<24)};var iQ=function(J,Q,$=true,Z){const W=new AbortController;const K=W.signal;let H=false;const Y=(G)=>{W.abort(G);H=true};let X=false;const U=(G,E,N,q)=>{if(Q&&!X){Q(G,E,N,q);if(G===100){X=true}}};return new D9((G,E)=>{const N={signal:K};if(Z)N.headers=Z;fetch(J,N).then(async(q)=>{if(!q.ok){const V=await q.text();E(new Error(`Fetch failed: ${q.status} ${q.statusText} ${V}`));return}const O=q.body.getReader();let k=0;let D=q.headers.get("Content-Length");let F=D?parseInt(D):undefined;const L=[];while(!H){try{const{value:V,done:R}=await O.read();if(R){U(100,"100%",V,F);if($){const I=new Blob(L).arrayBuffer();G(I)}else{G()}break}k+=V.length;let C;let M;if(F!==undefined){C=k/F*100;M=`${C.toFixed(2)}%`}if($){L.push(V)}U(C,M,V,F)}catch(V){E(V);return}}}).catch((q)=>{E(new dZ(q))})},Y)};var L0=function(J,Q,$){return Math.max(Math.min(J,$),Q)};var E6=function(){return performance.now()/1000};var D6=(J)=>{if(J.geometry){J.geometry.dispose();J.geometry=null}if(J.material){J.material.dispose();J.material=null}if(J.children){for(let Q of J.children){D6(Q)}}};var N8=(J,Q)=>{return new Promise(($)=>{window.setTimeout(()=>{$(J?J():undefined)},Q?1:50)})};var F6=(J=0)=>{let Q=0;if(J===1){Q=9}else if(J===2){Q=24}else if(J===3){Q=45}else if(J>3){throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree")}return Q};var lZ=()=>{let J;let Q;const $=new Promise((Z,W)=>{J=Z;Q=W});return{promise:$,resolve:J,reject:Q}};var PZ=(J)=>{let Q;let $;if(!J){J=()=>{}}const Z=new D9((W,K)=>{Q=W;$=K},J);return{promise:Z,resolve:Q,reject:$}};class zH{constructor(J,Q,$){this.major=J;this.minor=Q;this.patch=$}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function uZ(){const J=navigator.userAgent;return J.indexOf("iPhone")>0||J.indexOf("iPad")>0}function _H(){if(uZ()){const J=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new zH(parseInt(J[1]||0,10),parseInt(J[2]||0,10),parseInt(J[3]||0,10))}else{return null}}var TN=14;class EJ{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(J=0){this.sphericalHarmonicsDegree=J;this.sphericalHarmonicsCount=F6(this.sphericalHarmonicsDegree);this.componentCount=this.sphericalHarmonicsCount+TN;this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0);this.splats=[];this.splatCount=0}static createSplat(J=0){const Q=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let $=F6(J);for(let Z=0;Z<$;Z++)Q.push(0);return Q}addSplat(J){this.splats.push(J);this.splatCount++}getSplat(J){return this.splats[J]}addDefaultSplat(){const J=EJ.createSplat(this.sphericalHarmonicsDegree);this.addSplat(J);return J}addSplatFromComonents(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,q,...O){const k=[J,Q,$,Z,W,K,H,Y,X,U,G,E,N,q,...this.defaultSphericalHarmonics];for(let D=0;D<O.length&&D<this.sphericalHarmonicsCount;D++){k[D]=O[D]}this.addSplat(k);return k}addSplatFromArray(J,Q){const $=J.splats[Q];const Z=EJ.createSplat(this.sphericalHarmonicsDegree);for(let W=0;W<this.componentCount&&W<$.length;W++){Z[W]=$[W]}this.addSplat(Z)}}class K0{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3}var SN=K0.SphericalHarmonics8BitCompressionRange;var q9=SN/2;var T0=U9.toHalfFloat.bind(U9);var cZ=U9.fromHalfFloat.bind(U9);var V0=(J,Q,$=false,Z,W)=>{if(Q===0){return J}else if(Q===1||Q===2&&!$){return U9.fromHalfFloat(J)}else if(Q===2){return nZ(J,Z,W)}};var o6=(J,Q,$)=>{J=L0(J,Q,$);const Z=$-Q;return L0(Math.floor((J-Q)/Z*255),0,255)};var nZ=(J,Q,$)=>{const Z=$-Q;return J/255*Z+Q};var BH=(J,Q,$)=>{return o6(cZ(J,Q,$))};var jN=(J,Q,$)=>{return T0(nZ(J,Q,$))};var W0=(J,Q,$,Z=false)=>{if($===0){return J.getFloat32(Q*4,true)}else if($===1||$===2&&!Z){return J.getUint16(Q*2,true)}else{return J.getUint8(Q,true)}};var yN=function(){const J=(Q)=>Q;return function(Q,$,Z,W=false){if($===Z)return Q;let K=J;if($===2&&W){if(Z===1)K=jN;else if(Z==0){K=nZ}}else if($===2||$===1){if(Z===0)K=cZ;else if(Z==2){if(!W)K=J;else K=BH}}else if($===0){if(Z===1)K=T0;else if(Z==2){if(!W)K=T0;else K=o6}}return K(Q)}}();var N6=(J,Q,$,Z,W=0)=>{const K=new Uint8Array(J,Q);const H=new Uint8Array($,Z);for(let Y=0;Y<W;Y++){H[Y]=K[Y]}};class l{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(J,Q=true){this.constructFromBuffer(J,Q)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let J=0;for(let Q=0;Q<this.sections.length;Q++){const $=this.sections[Q];if(Q===0||$.sphericalHarmonicsDegree<J){J=$.sphericalHarmonicsDegree}}return J}getBucketIndex(J,Q){let $;const Z=J.fullBucketCount*J.bucketSize;if(Q<Z){$=Math.floor(Q/J.bucketSize)}else{let W=Z;$=J.fullBucketCount;let K=0;while(W<J.splatCount){let H=J.partiallyFilledBucketLengths[K];if(Q>=W&&Q<W+H){break}W+=H;$++;K++}}return $}getSplatCenter(J,Q,$){const Z=this.globalSplatIndexToSectionMap[J];const W=this.sections[Z];const K=J-W.splatCountOffset;const H=W.bytesPerSplat*K;const Y=new DataView(this.bufferData,W.dataBase+H);const X=W0(Y,0,this.compressionLevel);const U=W0(Y,1,this.compressionLevel);const G=W0(Y,2,this.compressionLevel);if(this.compressionLevel>=1){const E=this.getBucketIndex(W,K);const N=E*l.BucketStorageSizeFloats;const q=W.compressionScaleFactor;const O=W.compressionScaleRange;Q.x=(X-O)*q+W.bucketArray[N];Q.y=(U-O)*q+W.bucketArray[N+1];Q.z=(G-O)*q+W.bucketArray[N+2]}else{Q.x=X;Q.y=U;Q.z=G}if($)Q.applyMatrix4($)}getSplatScaleAndRotation=function(){const J=new xJ;const Q=new xJ;const $=new xJ;const Z=new S;const W=new S;const K=new G0;return function(H,Y,X,U,G){const E=this.globalSplatIndexToSectionMap[H];const N=this.sections[E];const q=H-N.splatCountOffset;const O=N.bytesPerSplat*q+l.CompressionLevels[this.compressionLevel].ScaleOffsetBytes;const k=new DataView(this.bufferData,N.dataBase+O);W.set(V0(W0(k,0,this.compressionLevel),this.compressionLevel),V0(W0(k,1,this.compressionLevel),this.compressionLevel),V0(W0(k,2,this.compressionLevel),this.compressionLevel));if(G){if(G.x!==undefined)W.x=G.x;if(G.y!==undefined)W.y=G.y;if(G.z!==undefined)W.z=G.z}K.set(V0(W0(k,4,this.compressionLevel),this.compressionLevel),V0(W0(k,5,this.compressionLevel),this.compressionLevel),V0(W0(k,6,this.compressionLevel),this.compressionLevel),V0(W0(k,3,this.compressionLevel),this.compressionLevel));if(U){J.makeScale(W.x,W.y,W.z);Q.makeRotationFromQuaternion(K);$.copy(J).multiply(Q).multiply(U);$.decompose(Z,X,Y)}else{Y.copy(W);X.copy(K)}}}();getSplatColor(J,Q){const $=this.globalSplatIndexToSectionMap[J];const Z=this.sections[$];const W=J-Z.splatCountOffset;const K=Z.bytesPerSplat*W+l.CompressionLevels[this.compressionLevel].ColorOffsetBytes;const H=new Uint8Array(this.bufferData,Z.dataBase+K,4);Q.set(H[0],H[1],H[2],H[3])}fillSplatCenterArray(J,Q,$,Z,W){const K=this.splatCount;$=$||0;Z=Z||K-1;if(W===undefined)W=$;const H=new S;for(let Y=$;Y<=Z;Y++){const X=this.globalSplatIndexToSectionMap[Y];const U=this.sections[X];const G=Y-U.splatCountOffset;const E=(Y-$+W)*l.CenterComponentCount;const N=U.bytesPerSplat*G;const q=new DataView(this.bufferData,U.dataBase+N);const O=W0(q,0,this.compressionLevel);const k=W0(q,1,this.compressionLevel);const D=W0(q,2,this.compressionLevel);if(this.compressionLevel>=1){const F=this.getBucketIndex(U,G);const L=F*l.BucketStorageSizeFloats;const V=U.compressionScaleFactor;const R=U.compressionScaleRange;H.x=(O-R)*V+U.bucketArray[L];H.y=(k-R)*V+U.bucketArray[L+1];H.z=(D-R)*V+U.bucketArray[L+2]}else{H.x=O;H.y=k;H.z=D}if(Q){H.applyMatrix4(Q)}J[E]=H.x;J[E+1]=H.y;J[E+2]=H.z}}fillSplatScaleRotationArray=function(){const J=new xJ;const Q=new xJ;const $=new xJ;const Z=new S;const W=new G0;const K=new S;const H=(Y)=>{const X=Y.w<0?-1:1;Y.x*=X;Y.y*=X;Y.z*=X;Y.w*=X};return function(Y,X,U,G,E,N,q,O){const k=this.splatCount;G=G||0;E=E||k-1;if(N===undefined)N=G;const D=(F,L)=>{if(L===undefined)L=this.compressionLevel;return yN(F,L,q)};for(let F=G;F<=E;F++){const L=this.globalSplatIndexToSectionMap[F];const V=this.sections[L];const R=F-V.splatCountOffset;const C=V.bytesPerSplat*R+l.CompressionLevels[this.compressionLevel].ScaleOffsetBytes;const M=(F-G+N)*l.ScaleComponentCount;const I=(F-G+N)*l.RotationComponentCount;const T=new DataView(this.bufferData,V.dataBase+C);const B=O&&O.x!==undefined?O.x:W0(T,0,this.compressionLevel);const _=O&&O.y!==undefined?O.y:W0(T,1,this.compressionLevel);const A=O&&O.z!==undefined?O.z:W0(T,2,this.compressionLevel);const y=W0(T,3,this.compressionLevel);const f=W0(T,4,this.compressionLevel);const j=W0(T,5,this.compressionLevel);const g=W0(T,6,this.compressionLevel);Z.set(V0(B,this.compressionLevel),V0(_,this.compressionLevel),V0(A,this.compressionLevel));W.set(V0(f,this.compressionLevel),V0(j,this.compressionLevel),V0(g,this.compressionLevel),V0(y,this.compressionLevel)).normalize();if(U){K.set(0,0,0);J.makeScale(Z.x,Z.y,Z.z);Q.makeRotationFromQuaternion(W);$.identity().premultiply(J).premultiply(Q);$.premultiply(U);$.decompose(K,W,Z);W.normalize()}H(W);if(Y){Y[M]=D(Z.x,0);Y[M+1]=D(Z.y,0);Y[M+2]=D(Z.z,0)}if(X){X[I]=D(W.x,0);X[I+1]=D(W.y,0);X[I+2]=D(W.z,0);X[I+3]=D(W.w,0)}}}}();static computeCovariance=function(){const J=new xJ;const Q=new fJ;const $=new fJ;const Z=new fJ;const W=new fJ;const K=new fJ;const H=new fJ;return function(Y,X,U,G,E=0,N){J.makeScale(Y.x,Y.y,Y.z);Q.setFromMatrix4(J);J.makeRotationFromQuaternion(X);$.setFromMatrix4(J);Z.copy($).multiply(Q);W.copy(Z).transpose().premultiply(Z);if(U){K.setFromMatrix4(U);H.copy(K).transpose();W.multiply(H);W.premultiply(K)}if(N>=1){G[E]=T0(W.elements[0]);G[E+1]=T0(W.elements[3]);G[E+2]=T0(W.elements[6]);G[E+3]=T0(W.elements[4]);G[E+4]=T0(W.elements[7]);G[E+5]=T0(W.elements[8])}else{G[E]=W.elements[0];G[E+1]=W.elements[3];G[E+2]=W.elements[6];G[E+3]=W.elements[4];G[E+4]=W.elements[7];G[E+5]=W.elements[8]}}}();fillSplatCovarianceArray(J,Q,$,Z,W,K){const H=this.splatCount;const Y=new S;const X=new G0;$=$||0;Z=Z||H-1;if(W===undefined)W=$;for(let U=$;U<=Z;U++){const G=this.globalSplatIndexToSectionMap[U];const E=this.sections[G];const N=U-E.splatCountOffset;const q=(U-$+W)*l.CovarianceComponentCount;const O=E.bytesPerSplat*N+l.CompressionLevels[this.compressionLevel].ScaleOffsetBytes;const k=new DataView(this.bufferData,E.dataBase+O);Y.set(V0(W0(k,0,this.compressionLevel),this.compressionLevel),V0(W0(k,1,this.compressionLevel),this.compressionLevel),V0(W0(k,2,this.compressionLevel),this.compressionLevel));X.set(V0(W0(k,4,this.compressionLevel),this.compressionLevel),V0(W0(k,5,this.compressionLevel),this.compressionLevel),V0(W0(k,6,this.compressionLevel),this.compressionLevel),V0(W0(k,3,this.compressionLevel),this.compressionLevel));l.computeCovariance(Y,X,Q,J,q,K)}}fillSplatColorArray(J,Q,$,Z,W){const K=this.splatCount;$=$||0;Z=Z||K-1;if(W===undefined)W=$;for(let H=$;H<=Z;H++){const Y=this.globalSplatIndexToSectionMap[H];const X=this.sections[Y];const U=H-X.splatCountOffset;const G=(H-$+W)*l.ColorComponentCount;const E=X.bytesPerSplat*U+l.CompressionLevels[this.compressionLevel].ColorOffsetBytes;const N=new Uint8Array(this.bufferData,X.dataBase+E);let q=N[3];q=q>=Q?q:0;J[G]=N[0];J[G+1]=N[1];J[G+2]=N[2];J[G+3]=q}}fillSphericalHarmonicsArray=function(){const J=[];for(let j=0;j<15;j++){J[j]=new S}const Q=new fJ;const $=new xJ;const Z=new S;const W=new S;const K=new G0;const H=[];const Y=[];const X=[];const U=[];const G=[];const E=[];const N=[];const q=[];const O=[];const k=[];const D=[];const F=[];const L=[];const V=[];const R=[];const C=[];const M=[];const I=[];const T=(j)=>j;const B=(j,g,x,p)=>{j[0]=g;j[1]=x;j[2]=p};const _=(j,g,x,p,m)=>{j[0]=W0(g,p,m,true);j[1]=W0(g,p+x,m,true);j[2]=W0(g,p+x+x,m,true)};const A=(j,g)=>{g[0]=j[0];g[1]=j[1];g[2]=j[2]};const y=(j,g,x,p)=>{g[x]=p(j[0]);g[x+1]=p(j[1]);g[x+2]=p(j[2])};const f=(j,g,x,p,m)=>{g[0]=V0(j[0],x,true,p,m);g[1]=V0(j[1],x,true,p,m);g[2]=V0(j[2],x,true,p,m);return g};return function(j,g,x,p,m,t,$J){const GJ=this.splatCount;p=p||0;m=m||GJ-1;if(t===undefined)t=p;if(x&&g>=1){$.copy(x);$.decompose(Z,K,W);K.normalize();$.makeRotationFromQuaternion(K);Q.setFromMatrix4($);B(H,Q.elements[4],-Q.elements[7],Q.elements[1]);B(Y,-Q.elements[5],Q.elements[8],-Q.elements[2]);B(X,Q.elements[3],-Q.elements[6],Q.elements[0])}const NJ=(AJ)=>{return BH(AJ,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff)};const cJ=(AJ)=>{return o6(AJ,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff)};for(let AJ=p;AJ<=m;AJ++){const n=this.globalSplatIndexToSectionMap[AJ];const QJ=this.sections[n];g=Math.min(g,QJ.sphericalHarmonicsDegree);const WJ=F6(g);const MJ=AJ-QJ.splatCountOffset;const VJ=QJ.bytesPerSplat*MJ+l.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes;const CJ=new DataView(this.bufferData,QJ.dataBase+VJ);const lJ=(AJ-p+t)*WJ;let gJ=x?0:this.compressionLevel;let yJ=T;if(gJ!==$J){if(gJ===1){if($J===0)yJ=cZ;else if($J==2)yJ=NJ}else if(gJ===0){if($J===1)yJ=T0;else if($J==2)yJ=cJ}}const jJ=this.minSphericalHarmonicsCoeff;const PJ=this.maxSphericalHarmonicsCoeff;if(g>=1){_(O,CJ,3,0,this.compressionLevel);_(k,CJ,3,1,this.compressionLevel);_(D,CJ,3,2,this.compressionLevel);if(x){f(O,O,this.compressionLevel,jJ,PJ);f(k,k,this.compressionLevel,jJ,PJ);f(D,D,this.compressionLevel,jJ,PJ);l.rotateSphericalHarmonics3(O,k,D,H,Y,X,V,R,C)}else{A(O,V);A(k,R);A(D,C)}y(V,j,lJ,yJ);y(R,j,lJ+3,yJ);y(C,j,lJ+6,yJ);if(g>=2){_(O,CJ,5,9,this.compressionLevel);_(k,CJ,5,10,this.compressionLevel);_(D,CJ,5,11,this.compressionLevel);_(F,CJ,5,12,this.compressionLevel);_(L,CJ,5,13,this.compressionLevel);if(x){f(O,O,this.compressionLevel,jJ,PJ);f(k,k,this.compressionLevel,jJ,PJ);f(D,D,this.compressionLevel,jJ,PJ);f(F,F,this.compressionLevel,jJ,PJ);f(L,L,this.compressionLevel,jJ,PJ);l.rotateSphericalHarmonics5(O,k,D,F,L,H,Y,X,U,G,E,N,q,V,R,C,M,I)}else{A(O,V);A(k,R);A(D,C);A(F,M);A(L,I)}y(V,j,lJ+9,yJ);y(R,j,lJ+12,yJ);y(C,j,lJ+15,yJ);y(M,j,lJ+18,yJ);y(I,j,lJ+21,yJ)}}}}}();static dot3=(J,Q,$,Z,W)=>{W[0]=W[1]=W[2]=0;const K=Z[0];const H=Z[1];const Y=Z[2];l.addInto3(J[0]*K,J[1]*K,J[2]*K,W);l.addInto3(Q[0]*H,Q[1]*H,Q[2]*H,W);l.addInto3($[0]*Y,$[1]*Y,$[2]*Y,W)};static addInto3=(J,Q,$,Z)=>{Z[0]=Z[0]+J;Z[1]=Z[1]+Q;Z[2]=Z[2]+$};static dot5=(J,Q,$,Z,W,K,H)=>{H[0]=H[1]=H[2]=0;const Y=K[0];const X=K[1];const U=K[2];const G=K[3];const E=K[4];l.addInto3(J[0]*Y,J[1]*Y,J[2]*Y,H);l.addInto3(Q[0]*X,Q[1]*X,Q[2]*X,H);l.addInto3($[0]*U,$[1]*U,$[2]*U,H);l.addInto3(Z[0]*G,Z[1]*G,Z[2]*G,H);l.addInto3(W[0]*E,W[1]*E,W[2]*E,H)};static rotateSphericalHarmonics3=(J,Q,$,Z,W,K,H,Y,X)=>{l.dot3(J,Q,$,Z,H);l.dot3(J,Q,$,W,Y);l.dot3(J,Q,$,K,X)};static rotateSphericalHarmonics5=(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,q,O,k,D,F)=>{const L=Math.sqrt(1/4);const V=Math.sqrt(3/4);const R=Math.sqrt(1/3);const C=Math.sqrt(4/3);const M=Math.sqrt(1/12);X[0]=L*(Y[2]*K[0]+Y[0]*K[2]+(K[2]*Y[0]+K[0]*Y[2]));X[1]=Y[1]*K[0]+K[1]*Y[0];X[2]=V*(Y[1]*K[1]+K[1]*Y[1]);X[3]=Y[1]*K[2]+K[1]*Y[2];X[4]=L*(Y[2]*K[2]-Y[0]*K[0]+(K[2]*Y[2]-K[0]*Y[0]));l.dot5(J,Q,$,Z,W,X,q);U[0]=L*(H[2]*K[0]+H[0]*K[2]+(K[2]*H[0]+K[0]*H[2]));U[1]=H[1]*K[0]+K[1]*H[0];U[2]=V*(H[1]*K[1]+K[1]*H[1]);U[3]=H[1]*K[2]+K[1]*H[2];U[4]=L*(H[2]*K[2]-H[0]*K[0]+(K[2]*H[2]-K[0]*H[0]));l.dot5(J,Q,$,Z,W,U,O);G[0]=R*(H[2]*H[0]+H[0]*H[2])+-M*(Y[2]*Y[0]+Y[0]*Y[2]+(K[2]*K[0]+K[0]*K[2]));G[1]=C*H[1]*H[0]+-R*(Y[1]*Y[0]+K[1]*K[0]);G[2]=H[1]*H[1]+-L*(Y[1]*Y[1]+K[1]*K[1]);G[3]=C*H[1]*H[2]+-R*(Y[1]*Y[2]+K[1]*K[2]);G[4]=R*(H[2]*H[2]-H[0]*H[0])+-M*(Y[2]*Y[2]-Y[0]*Y[0]+(K[2]*K[2]-K[0]*K[0]));l.dot5(J,Q,$,Z,W,G,k);E[0]=L*(H[2]*Y[0]+H[0]*Y[2]+(Y[2]*H[0]+Y[0]*H[2]));E[1]=H[1]*Y[0]+Y[1]*H[0];E[2]=V*(H[1]*Y[1]+Y[1]*H[1]);E[3]=H[1]*Y[2]+Y[1]*H[2];E[4]=L*(H[2]*Y[2]-H[0]*Y[0]+(Y[2]*H[2]-Y[0]*H[0]));l.dot5(J,Q,$,Z,W,E,D);N[0]=L*(Y[2]*Y[0]+Y[0]*Y[2]-(K[2]*K[0]+K[0]*K[2]));N[1]=Y[1]*Y[0]-K[1]*K[0];N[2]=V*(Y[1]*Y[1]-K[1]*K[1]);N[3]=Y[1]*Y[2]-K[1]*K[2];N[4]=L*(Y[2]*Y[2]-Y[0]*Y[0]-(K[2]*K[2]-K[0]*K[0]));l.dot5(J,Q,$,Z,W,N,F)};static parseHeader(J){const Q=new Uint8Array(J,0,l.HeaderSizeBytes);const $=new Uint16Array(J,0,l.HeaderSizeBytes/2);const Z=new Uint32Array(J,0,l.HeaderSizeBytes/4);const W=new Float32Array(J,0,l.HeaderSizeBytes/4);const K=Q[0];const H=Q[1];const Y=Z[1];const X=Z[2];const U=Z[3];const G=Z[4];const E=$[10];const N=new S(W[6],W[7],W[8]);const q=W[9]||-q9;const O=W[10]||q9;return{versionMajor:K,versionMinor:H,maxSectionCount:Y,sectionCount:X,maxSplatCount:U,splatCount:G,compressionLevel:E,sceneCenter:N,minSphericalHarmonicsCoeff:q,maxSphericalHarmonicsCoeff:O}}static writeHeaderCountsToBuffer(J,Q,$){const Z=new Uint32Array($,0,l.HeaderSizeBytes/4);Z[2]=J;Z[4]=Q}static writeHeaderToBuffer(J,Q){const $=new Uint8Array(Q,0,l.HeaderSizeBytes);const Z=new Uint16Array(Q,0,l.HeaderSizeBytes/2);const W=new Uint32Array(Q,0,l.HeaderSizeBytes/4);const K=new Float32Array(Q,0,l.HeaderSizeBytes/4);$[0]=J.versionMajor;$[1]=J.versionMinor;$[2]=0;$[3]=0;W[1]=J.maxSectionCount;W[2]=J.sectionCount;W[3]=J.maxSplatCount;W[4]=J.splatCount;Z[10]=J.compressionLevel;K[6]=J.sceneCenter.x;K[7]=J.sceneCenter.y;K[8]=J.sceneCenter.z;K[9]=J.minSphericalHarmonicsCoeff||-q9;K[10]=J.maxSphericalHarmonicsCoeff||q9}static parseSectionHeaders(J,Q,$=0,Z){const W=J.compressionLevel;const K=J.maxSectionCount;const H=new Uint16Array(Q,$,K*l.SectionHeaderSizeBytes/2);const Y=new Uint32Array(Q,$,K*l.SectionHeaderSizeBytes/4);const X=new Float32Array(Q,$,K*l.SectionHeaderSizeBytes/4);const U=[];let G=0;let E=G/2;let N=G/4;let q=l.HeaderSizeBytes+J.maxSectionCount*l.SectionHeaderSizeBytes;let O=0;for(let k=0;k<K;k++){const D=Y[N+1];const F=Y[N+2];const L=Y[N+3];const V=X[N+4];const R=V/2;const C=H[E+10];const M=Y[N+6]||l.CompressionLevels[W].ScaleRange;const I=Y[N+8];const T=Y[N+9];const B=T*4;const _=C*L+B;const A=H[E+20];const{bytesPerSplat:y}=l.calculateComponentStorage(W,A);const f=y*D;const j=f+_;const g={bytesPerSplat:y,splatCountOffset:O,splatCount:Z?D:0,maxSplatCount:D,bucketSize:F,bucketCount:L,bucketBlockSize:V,halfBucketBlockSize:R,bucketStorageSizeBytes:C,bucketsStorageSizeBytes:_,splatDataStorageSizeBytes:f,storageSizeBytes:j,compressionScaleRange:M,compressionScaleFactor:R/M,base:q,bucketsBase:q+B,dataBase:q+_,fullBucketCount:I,partiallyFilledBucketCount:T,sphericalHarmonicsDegree:A};U[k]=g;q+=j;G+=l.SectionHeaderSizeBytes;E=G/2;N=G/4;O+=D}return U}static writeSectionHeaderToBuffer(J,Q,$,Z=0){const W=new Uint16Array($,Z,l.SectionHeaderSizeBytes/2);const K=new Uint32Array($,Z,l.SectionHeaderSizeBytes/4);const H=new Float32Array($,Z,l.SectionHeaderSizeBytes/4);K[0]=J.splatCount;K[1]=J.maxSplatCount;K[2]=Q>=1?J.bucketSize:0;K[3]=Q>=1?J.bucketCount:0;H[4]=Q>=1?J.bucketBlockSize:0;W[10]=Q>=1?l.BucketStorageSizeBytes:0;K[6]=Q>=1?J.compressionScaleRange:0;K[7]=J.storageSizeBytes;K[8]=Q>=1?J.fullBucketCount:0;K[9]=Q>=1?J.partiallyFilledBucketCount:0;W[20]=J.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(J,Q,$=0){const Z=new Uint32Array(Q,$,l.SectionHeaderSizeBytes/4);Z[0]=J}constructFromBuffer(J,Q){this.bufferData=J;this.globalSplatIndexToLocalSplatIndexMap=[];this.globalSplatIndexToSectionMap=[];const $=l.parseHeader(this.bufferData);this.versionMajor=$.versionMajor;this.versionMinor=$.versionMinor;this.maxSectionCount=$.maxSectionCount;this.sectionCount=Q?$.maxSectionCount:0;this.maxSplatCount=$.maxSplatCount;this.splatCount=Q?$.maxSplatCount:0;this.compressionLevel=$.compressionLevel;this.sceneCenter=new S().copy($.sceneCenter);this.minSphericalHarmonicsCoeff=$.minSphericalHarmonicsCoeff;this.maxSphericalHarmonicsCoeff=$.maxSphericalHarmonicsCoeff;this.sections=l.parseSectionHeaders($,this.bufferData,l.HeaderSizeBytes,Q);this.linkBufferArrays();this.buildMaps()}static calculateComponentStorage(J,Q){const $=l.CompressionLevels[J].BytesPerCenter;const Z=l.CompressionLevels[J].BytesPerScale;const W=l.CompressionLevels[J].BytesPerRotation;const K=l.CompressionLevels[J].BytesPerColor;const H=F6(Q);const Y=l.CompressionLevels[J].BytesPerSphericalHarmonicsComponent*H;const X=$+Z+W+K+Y;return{bytesPerCenter:$,bytesPerScale:Z,bytesPerRotation:W,bytesPerColor:K,sphericalHarmonicsComponentsPerSplat:H,sphericalHarmonicsBytesPerSplat:Y,bytesPerSplat:X}}linkBufferArrays(){for(let J=0;J<this.maxSectionCount;J++){const Q=this.sections[J];Q.bucketArray=new Float32Array(this.bufferData,Q.bucketsBase,Q.bucketCount*l.BucketStorageSizeFloats);if(Q.partiallyFilledBucketCount>0){Q.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,Q.base,Q.partiallyFilledBucketCount)}}}buildMaps(){let J=0;for(let Q=0;Q<this.maxSectionCount;Q++){const $=this.sections[Q];for(let Z=0;Z<$.maxSplatCount;Z++){const W=J+Z;this.globalSplatIndexToLocalSplatIndexMap[W]=Z;this.globalSplatIndexToSectionMap[W]=Q}J+=$.maxSplatCount}}updateLoadedCounts(J,Q){l.writeHeaderCountsToBuffer(J,Q,this.bufferData);this.sectionCount=J;this.splatCount=Q}updateSectionLoadedCounts(J,Q){const $=l.HeaderSizeBytes+l.SectionHeaderSizeBytes*J;l.writeSectionHeaderSplatCountToBuffer(Q,this.bufferData,$);this.sections[J].splatCount=Q}static writeSplatDataToSectionBuffer=function(){const J=new ArrayBuffer(12);const Q=new ArrayBuffer(12);const $=new ArrayBuffer(16);const Z=new ArrayBuffer(4);const W=new ArrayBuffer(256);const K=new G0;const H=new S;const Y=new S;const{X,Y:U,Z:G,SCALE0:E,SCALE1:N,SCALE2:q,ROTATION0:O,ROTATION1:k,ROTATION2:D,ROTATION3:F,FDC0:L,FDC1:V,FDC2:R,OPACITY:C,FRC0:M,FRC9:I}=EJ.OFFSET;const T=(B,_,A)=>{const y=A*2+1;B=Math.round(B*_)+A;return L0(B,0,y)};return function(B,_,A,y,f,j,g,x,p=-q9,m=q9){const t=F6(f);const $J=l.CompressionLevels[y].BytesPerCenter;const GJ=l.CompressionLevels[y].BytesPerScale;const NJ=l.CompressionLevels[y].BytesPerRotation;const cJ=l.CompressionLevels[y].BytesPerColor;const AJ=A;const n=AJ+$J;const QJ=n+GJ;const WJ=QJ+NJ;const MJ=WJ+cJ;if(B[O]!==undefined){K.set(B[O],B[k],B[D],B[F]);K.normalize()}else{K.set(1,0,0,0)}if(B[E]!==undefined){H.set(B[E]||0,B[N]||0,B[q]||0)}else{H.set(0,0,0)}if(y===0){const CJ=new Float32Array(_,AJ,l.CenterComponentCount);const lJ=new Float32Array(_,QJ,l.RotationComponentCount);const gJ=new Float32Array(_,n,l.ScaleComponentCount);lJ.set([K.x,K.y,K.z,K.w]);gJ.set([H.x,H.y,H.z]);CJ.set([B[X],B[U],B[G]]);if(f>0){const yJ=new Float32Array(_,MJ,t);if(f>=1){for(let jJ=0;jJ<9;jJ++)yJ[jJ]=B[M+jJ]||0;if(f>=2){for(let jJ=0;jJ<15;jJ++)yJ[jJ+9]=B[I+jJ]||0}}}}else{const CJ=new Uint16Array(J,0,l.CenterComponentCount);const lJ=new Uint16Array($,0,l.RotationComponentCount);const gJ=new Uint16Array(Q,0,l.ScaleComponentCount);lJ.set([T0(K.x),T0(K.y),T0(K.z),T0(K.w)]);gJ.set([T0(H.x),T0(H.y),T0(H.z)]);Y.set(B[X],B[U],B[G]).sub(j);Y.x=T(Y.x,g,x);Y.y=T(Y.y,g,x);Y.z=T(Y.z,g,x);CJ.set([Y.x,Y.y,Y.z]);if(f>0){const yJ=y===1?Uint16Array:Uint8Array;const jJ=y===1?2:1;const PJ=new yJ(W,0,t);if(f>=1){for(let v=0;v<9;v++){const Q0=B[M+v]||0;PJ[v]=y===1?T0(Q0):o6(Q0,p,m)}const J0=9*jJ;N6(PJ.buffer,0,_,MJ,J0);if(f>=2){for(let v=0;v<15;v++){const Q0=B[I+v]||0;PJ[v+9]=y===1?T0(Q0):o6(Q0,p,m)}N6(PJ.buffer,J0,_,MJ+J0,15*jJ)}}}N6(CJ.buffer,0,_,AJ,6);N6(gJ.buffer,0,_,n,6);N6(lJ.buffer,0,_,QJ,8)}const VJ=new Uint8ClampedArray(Z,0,4);VJ.set([B[L]||0,B[V]||0,B[R]||0]);VJ[3]=B[C]||0;N6(VJ.buffer,0,_,WJ,4)}}();static generateFromUncompressedSplatArrays(J,Q,$,Z,W,K,H=[]){let Y=0;for(let R=0;R<J.length;R++){const C=J[R];Y=Math.max(C.sphericalHarmonicsDegree,Y)}let X;let U;for(let R=0;R<J.length;R++){const C=J[R];for(let M=0;M<C.splats.length;M++){const I=C.splats[M];for(let T=EJ.OFFSET.FRC0;T<EJ.OFFSET.FRC23&&T<I.length;T++){if(!X||I[T]<X){X=I[T]}if(!U||I[T]>U){U=I[T]}}}}X=X||-q9;U=U||q9;const{bytesPerSplat:G}=l.calculateComponentStorage($,Y);const E=l.CompressionLevels[$].ScaleRange;const N=[];const q=[];let O=0;for(let R=0;R<J.length;R++){const C=J[R];const M=new EJ(Y);for(let AJ=0;AJ<C.splatCount;AJ++){const n=C.splats[AJ];if((n[EJ.OFFSET.OPACITY]||0)>=Q){M.addSplat(n)}}const I=H[R]||{};const T=(I.blockSizeFactor||1)*(W||l.BucketBlockSize);const B=Math.ceil((I.bucketSizeFactor||1)*(K||l.BucketSize));const _=l.computeBucketsForUncompressedSplatArray(M,T,B);const A=_.fullBuckets.length;const y=_.partiallyFullBuckets.map((AJ)=>AJ.splats.length);const f=y.length;const j=[..._.fullBuckets,..._.partiallyFullBuckets];const g=M.splats.length*G;const x=f*4;const p=$>=1?j.length*l.BucketStorageSizeBytes+x:0;const m=g+p;const t=new ArrayBuffer(m);const $J=E/(T*0.5);const GJ=new S;let NJ=0;for(let AJ=0;AJ<j.length;AJ++){const n=j[AJ];GJ.fromArray(n.center);for(let QJ=0;QJ<n.splats.length;QJ++){let WJ=n.splats[QJ];const MJ=M.splats[WJ];const VJ=p+NJ*G;l.writeSplatDataToSectionBuffer(MJ,t,VJ,$,Y,GJ,$J,E,X,U);NJ++}}O+=NJ;if($>=1){const AJ=new Uint32Array(t,0,y.length*4);for(let QJ=0;QJ<y.length;QJ++){AJ[QJ]=y[QJ]}const n=new Float32Array(t,x,j.length*l.BucketStorageSizeFloats);for(let QJ=0;QJ<j.length;QJ++){const WJ=j[QJ];const MJ=QJ*3;n[MJ]=WJ.center[0];n[MJ+1]=WJ.center[1];n[MJ+2]=WJ.center[2]}}N.push(t);const cJ=new ArrayBuffer(l.SectionHeaderSizeBytes);l.writeSectionHeaderToBuffer({maxSplatCount:NJ,splatCount:NJ,bucketSize:B,bucketCount:j.length,bucketBlockSize:T,compressionScaleRange:E,storageSizeBytes:m,fullBucketCount:A,partiallyFilledBucketCount:f,sphericalHarmonicsDegree:Y},$,cJ,0);q.push(cJ)}let k=0;for(let R of N)k+=R.byteLength;const D=l.HeaderSizeBytes+l.SectionHeaderSizeBytes*N.length+k;const F=new ArrayBuffer(D);l.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:N.length,sectionCount:N.length,maxSplatCount:O,splatCount:O,compressionLevel:$,sceneCenter:Z,minSphericalHarmonicsCoeff:X,maxSphericalHarmonicsCoeff:U},F);let L=l.HeaderSizeBytes;for(let R of q){new Uint8Array(F,L,l.SectionHeaderSizeBytes).set(new Uint8Array(R));L+=l.SectionHeaderSizeBytes}for(let R of N){new Uint8Array(F,L,R.byteLength).set(new Uint8Array(R));L+=R.byteLength}const V=new l(F);return V}static computeBucketsForUncompressedSplatArray(J,Q,$){let Z=J.splatCount;const W=Q/2;const K=new S;const H=new S;for(let O=0;O<Z;O++){const k=J.splats[O];const D=[k[EJ.OFFSET.X],k[EJ.OFFSET.Y],k[EJ.OFFSET.Z]];if(O===0||D[0]<K.x)K.x=D[0];if(O===0||D[0]>H.x)H.x=D[0];if(O===0||D[1]<K.y)K.y=D[1];if(O===0||D[1]>H.y)H.y=D[1];if(O===0||D[2]<K.z)K.z=D[2];if(O===0||D[2]>H.z)H.z=D[2]}const Y=new S().copy(H).sub(K);const X=Math.ceil(Y.y/Q);const U=Math.ceil(Y.z/Q);const G=new S;const E=[];const N={};for(let O=0;O<Z;O++){const k=J.splats[O];const D=[k[EJ.OFFSET.X],k[EJ.OFFSET.Y],k[EJ.OFFSET.Z]];const F=Math.floor((D[0]-K.x)/Q);const L=Math.floor((D[1]-K.y)/Q);const V=Math.floor((D[2]-K.z)/Q);G.x=F*Q+K.x+W;G.y=L*Q+K.y+W;G.z=V*Q+K.z+W;const R=F*(X*U)+L*U+V;let C=N[R];if(!C){N[R]=C={splats:[],center:G.toArray()}}C.splats.push(O);if(C.splats.length>=$){E.push(C);N[R]=null}}const q=[];for(let O in N){if(N.hasOwnProperty(O)){const k=N[O];if(k){q.push(k)}}}return{fullBuckets:E,partiallyFullBuckets:q}}static preallocateUncompressed(J,Q){const $=l.CompressionLevels[0].SphericalHarmonicsDegrees[Q];const Z=l.HeaderSizeBytes+l.SectionHeaderSizeBytes;const W=Z+$.BytesPerSplat*J;const K=new ArrayBuffer(W);l.writeHeaderToBuffer({versionMajor:l.CurrentMajorVersion,versionMinor:l.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:J,splatCount:J,compressionLevel:0,sceneCenter:new S},K);l.writeSectionHeaderToBuffer({maxSplatCount:J,splatCount:J,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:Q},0,K,l.HeaderSizeBytes);return{splatBuffer:new l(K,true),splatBufferDataOffsetBytes:Z}}}var aK=new Uint8Array([112,108,121,10]);var rK=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]);var TZ="end_header";var SZ=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]);var v8=(J,Q)=>{const $=(1<<Q)-1;return(J&$)/$};var tK=(J,Q)=>{J.x=v8(Q>>>21,11);J.y=v8(Q>>>11,10);J.z=v8(Q,11)};var vN=(J,Q)=>{J.x=v8(Q>>>24,8);J.y=v8(Q>>>16,8);J.z=v8(Q>>>8,8);J.w=v8(Q,8)};var bN=(J,Q)=>{const $=1/(Math.sqrt(2)*0.5);const Z=(v8(Q>>>20,10)-0.5)*$;const W=(v8(Q>>>10,10)-0.5)*$;const K=(v8(Q,10)-0.5)*$;const H=Math.sqrt(1-(Z*Z+W*W+K*K));switch(Q>>>30){case 0:J.set(H,Z,W,K);break;case 1:J.set(Z,H,W,K);break;case 2:J.set(Z,W,H,K);break;case 3:J.set(Z,W,K,H);break}};var s8=(J,Q,$)=>{return J*(1-$)+Q*$};var z0=(J,Q)=>{return J.properties.find(($)=>$.name===Q&&$.storage)?.storage};class eJ{static decodeHeaderText(J){let Q;let $;let Z;let W;const K=J.split(`
`).filter((G)=>!G.startsWith("comment "));let H=0;let Y=false;for(let G=1;G<K.length;++G){const E=K[G].split(" ");switch(E[0]){case"format":if(E[1]!=="binary_little_endian"){throw new Error("Unsupported ply format")}break;case"element":Q={name:E[1],count:parseInt(E[2],10),properties:[],storageSizeBytes:0};if(Q.name==="chunk")$=Q;else if(Q.name==="vertex")Z=Q;else if(Q.name==="sh")W=Q;break;case"property":{if(!SZ.has(E[1])){throw new Error(`Unrecognized property data type '${E[1]}' in ply header`)}const N=SZ.get(E[1]);const q=N.BYTES_PER_ELEMENT*Q.count;if(Q.name==="vertex")H+=N.BYTES_PER_ELEMENT;Q.properties.push({type:E[1],name:E[2],storage:null,byteSize:N.BYTES_PER_ELEMENT,storageSizeByes:q});Q.storageSizeBytes+=q;break}case TZ:Y=true;break;default:throw new Error(`Unrecognized header value '${E[0]}' in ply header`)}if(Y)break}let X=0;let U=0;if(W){U=W.properties.length;if(W.properties.length>=45){X=3}else if(W.properties.length>=24){X=2}else if(W.properties.length>=9){X=1}}return{chunkElement:$,vertexElement:Z,shElement:W,bytesPerSplat:H,headerSizeBytes:J.indexOf(TZ)+TZ.length+1,sphericalHarmonicsDegree:X,sphericalHarmonicsPerSplat:U}}static decodeHeader(J){const Q=(N,q)=>{const O=N.length-q.length;let k;let D;for(k=0;k<=O;++k){for(D=0;D<q.length;++D){if(N[k+D]!==q[D]){break}}if(D===q.length){return k}}return-1};const $=(N,q)=>{if(N.length<q.length){return false}for(let O=0;O<q.length;++O){if(N[O]!==q[O]){return false}}return true};let Z=new Uint8Array(J);let W;if(Z.length>=aK.length&&!$(Z,aK)){throw new Error("Invalid PLY header")}W=Q(Z,rK);if(W===-1){throw new Error("End of PLY header not found")}const K=new TextDecoder("ascii").decode(Z.slice(0,W));const{chunkElement:H,vertexElement:Y,shElement:X,sphericalHarmonicsDegree:U,sphericalHarmonicsPerSplat:G,bytesPerSplat:E}=eJ.decodeHeaderText(K);return{headerSizeBytes:W+rK.length,bytesPerSplat:E,chunkElement:H,vertexElement:Y,shElement:X,sphericalHarmonicsDegree:U,sphericalHarmonicsPerSplat:G}}static readElementData(J,Q,$,Z,W,K=null){let H=Q instanceof DataView?Q:new DataView(Q);Z=Z||0;W=W||J.count-1;for(let Y=Z;Y<=W;++Y){for(let X=0;X<J.properties.length;++X){const U=J.properties[X];const G=SZ.get(U.type);const E=G.BYTES_PER_ELEMENT*J.count;if((!U.storage||U.storage.byteLength<E)&&(!K||K(U.name))){U.storage=new G(J.count)}if(U.storage){switch(U.type){case"char":U.storage[Y]=H.getInt8($);break;case"uchar":U.storage[Y]=H.getUint8($);break;case"short":U.storage[Y]=H.getInt16($,true);break;case"ushort":U.storage[Y]=H.getUint16($,true);break;case"int":U.storage[Y]=H.getInt32($,true);break;case"uint":U.storage[Y]=H.getUint32($,true);break;case"float":U.storage[Y]=H.getFloat32($,true);break;case"double":U.storage[Y]=H.getFloat64($,true);break}}$+=U.byteSize}}return $}static readPly(J,Q=null){const $=eJ.decodeHeader(J);let Z=eJ.readElementData($.chunkElement,J,$.headerSizeBytes,null,null,Q);Z=eJ.readElementData($.vertexElement,J,Z,null,null,Q);eJ.readElementData($.shElement,J,Z,null,null,Q);return{chunkElement:$.chunkElement,vertexElement:$.vertexElement,shElement:$.shElement,sphericalHarmonicsDegree:$.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:$.sphericalHarmonicsPerSplat}}static getElementStorageArrays(J,Q,$){const Z={};if(Q){const W=z0(J,"min_r");const K=z0(J,"min_g");const H=z0(J,"min_b");const Y=z0(J,"max_r");const X=z0(J,"max_g");const U=z0(J,"max_b");const G=z0(J,"min_x");const E=z0(J,"min_y");const N=z0(J,"min_z");const q=z0(J,"max_x");const O=z0(J,"max_y");const k=z0(J,"max_z");const D=z0(J,"min_scale_x");const F=z0(J,"min_scale_y");const L=z0(J,"min_scale_z");const V=z0(J,"max_scale_x");const R=z0(J,"max_scale_y");const C=z0(J,"max_scale_z");const M=z0(Q,"packed_position");const I=z0(Q,"packed_rotation");const T=z0(Q,"packed_scale");const B=z0(Q,"packed_color");Z["colorExtremes"]={minR:W,maxR:Y,minG:K,maxG:X,minB:H,maxB:U};Z["positionExtremes"]={minX:G,maxX:q,minY:E,maxY:O,minZ:N,maxZ:k};Z["scaleExtremes"]={minScaleX:D,maxScaleX:V,minScaleY:F,maxScaleY:R,minScaleZ:L,maxScaleZ:C};Z["position"]=M;Z["rotation"]=I;Z["scale"]=T;Z["color"]=B}if($){const W={};for(let K=0;K<45;K++){const H=`f_rest_${K}`;const Y=z0($,H);if(Y){W[H]=Y}else{break}}Z["sh"]=W}return Z}static decompressBaseSplat=function(){const J=new S;const Q=new G0;const $=new S;const Z=new k0;const W=EJ.OFFSET;return function(K,H,Y,X,U,G,E,N,q,O){O=O||EJ.createSplat();const k=Math.floor((H+K)/256);tK(J,Y[K]);bN(Q,E[K]);tK($,U[K]);vN(Z,q[K]);O[W.X]=s8(X.minX[k],X.maxX[k],J.x);O[W.Y]=s8(X.minY[k],X.maxY[k],J.y);O[W.Z]=s8(X.minZ[k],X.maxZ[k],J.z);O[W.ROTATION0]=Q.x;O[W.ROTATION1]=Q.y;O[W.ROTATION2]=Q.z;O[W.ROTATION3]=Q.w;O[W.SCALE0]=Math.exp(s8(G.minScaleX[k],G.maxScaleX[k],$.x));O[W.SCALE1]=Math.exp(s8(G.minScaleY[k],G.maxScaleY[k],$.y));O[W.SCALE2]=Math.exp(s8(G.minScaleZ[k],G.maxScaleZ[k],$.z));if(N.minR&&N.maxR){O[W.FDC0]=L0(Math.round(s8(N.minR[k],N.maxR[k],Z.x)*255),0,255)}else{O[W.FDC0]=L0(Math.floor(Z.x*255),0,255)}if(N.minG&&N.maxG){O[W.FDC1]=L0(Math.round(s8(N.minG[k],N.maxG[k],Z.y)*255),0,255)}else{O[W.FDC1]=L0(Math.floor(Z.y*255),0,255)}if(N.minB&&N.maxB){O[W.FDC2]=L0(Math.round(s8(N.minB[k],N.maxB[k],Z.z)*255),0,255)}else{O[W.FDC2]=L0(Math.floor(Z.z*255),0,255)}O[W.OPACITY]=L0(Math.floor(Z.w*255),0,255);return O}}();static decompressSphericalHarmonics=function(){const J=[0,3,8,15];const Q=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function($,Z,W,K,H){H=H||EJ.createSplat();let Y=J[W];let X=J[K];for(let U=0;U<3;++U){for(let G=0;G<15;++G){const E=Q[U*15+G];if(G<Y&&G<X){H[EJ.OFFSET.FRC0+E]=Z[U*X+G][$]*(8/255)-4}}}return H}}();static parseToUncompressedSplatBufferSection(J,Q,$,Z,W,K,H,Y,X=null){eJ.readElementData(Q,K,0,$,Z,X);const U=l.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;const{positionExtremes:G,scaleExtremes:E,colorExtremes:N,position:q,rotation:O,scale:k,color:D}=eJ.getElementStorageArrays(J,Q);const F=EJ.createSplat();for(let L=$;L<=Z;++L){eJ.decompressBaseSplat(L,W,q,G,k,E,O,N,D,F);const V=L*U+Y;l.writeSplatDataToSectionBuffer(F,H,V,0,0)}}static parseToUncompressedSplatArraySection(J,Q,$,Z,W,K,H,Y=null){eJ.readElementData(Q,K,0,$,Z,Y);const{positionExtremes:X,scaleExtremes:U,colorExtremes:G,position:E,rotation:N,scale:q,color:O}=eJ.getElementStorageArrays(J,Q);for(let k=$;k<=Z;++k){const D=EJ.createSplat();eJ.decompressBaseSplat(k,W,E,X,q,U,N,G,O,D);H.addSplat(D)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(J,Q,$,Z,W,K,H,Y,X,U=null){eJ.readElementData(Q,W,K,$,Z,U);const{sh:G}=eJ.getElementStorageArrays(J,undefined,Q);const E=Object.values(G);for(let N=$;N<=Z;++N){eJ.decompressSphericalHarmonics(N,E,H,Y,X.splats[N])}}static parseToUncompressedSplatArray(J,Q){const{chunkElement:$,vertexElement:Z,shElement:W,sphericalHarmonicsDegree:K}=eJ.readPly(J);Q=Math.min(Q,K);const H=new EJ(Q);const{positionExtremes:Y,scaleExtremes:X,colorExtremes:U,position:G,rotation:E,scale:N,color:q}=eJ.getElementStorageArrays($,Z);let O;if(Q>0){const{sh:k}=eJ.getElementStorageArrays($,undefined,W);O=Object.values(k)}for(let k=0;k<Z.count;++k){H.addDefaultSplat();const D=H.getSplat(H.splatCount-1);eJ.decompressBaseSplat(k,0,G,Y,N,X,E,U,q,D);if(Q>0){eJ.decompressSphericalHarmonics(k,O,Q,K,D)}}return H}static parseToUncompressedSplatBuffer(J,Q){const{chunkElement:$,vertexElement:Z,shElement:W,sphericalHarmonicsDegree:K}=eJ.readPly(J);Q=Math.min(Q,K);const{splatBuffer:H,splatBufferDataOffsetBytes:Y}=l.preallocateUncompressed(Z.count,Q);const{positionExtremes:X,scaleExtremes:U,colorExtremes:G,position:E,rotation:N,scale:q,color:O}=eJ.getElementStorageArrays($,Z);let k;if(Q>0){const{sh:L}=eJ.getElementStorageArrays($,undefined,W);k=Object.values(L)}const D=l.CompressionLevels[0].SphericalHarmonicsDegrees[Q].BytesPerSplat;const F=EJ.createSplat(Q);for(let L=0;L<Z.count;++L){eJ.decompressBaseSplat(L,0,E,X,q,U,N,G,O,F);if(Q>0){eJ.decompressSphericalHarmonics(L,k,Q,K,F)}const V=L*D+Y;l.writeSplatDataToSectionBuffer(F,H.bufferData,V,0,Q)}return H}}var r0={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2};var[IH,sZ,iZ,oZ,aZ,rZ,tZ]=[0,1,2,3,4,5,6];var eK={double:IH,int:sZ,uint:iZ,float:oZ,short:aZ,ushort:rZ,uchar:tZ};var fN={[IH]:8,[sZ]:4,[iZ]:4,[oZ]:4,[aZ]:2,[rZ]:2,[tZ]:1};class $0{static HeaderEndToken="end_header";static decodeSectionHeader(J,Q,$=0){const Z=[];let W=false;let K=-1;let H=0;let Y=false;let X=null;const U=[];const G=[];const E=[];const N=[];const q={};for(let F=$;F<J.length;F++){const L=J[F].trim();if(L.startsWith("element")){if(W){K--;break}else{W=true;$=F;K=F;const V=L.split(" ");let R=0;for(let C of V){const M=C.trim();if(M.length>0){R++;if(R===2){X=M}else if(R===3){H=parseInt(M)}}}}}else if(L.startsWith("property")){const V=L.match(/(\w+)\s+(\w+)\s+(\w+)/);if(V){const R=V[2];const C=V[3];E.push(C);const M=Q[C];q[C]=R;const I=eK[R];if(M!==undefined){N.push(C);U.push(M);G[M]=I}}}if(L===$0.HeaderEndToken){Y=true;break}if(W){Z.push(L);K++}}const O=[];let k=0;for(let F of E){const L=q[F];if(q.hasOwnProperty(F)){const V=Q[F];if(V!==undefined){O[V]=k}}k+=fN[eK[L]]}const D=$0.decodeSphericalHarmonicsFromSectionHeader(E,Q);return{headerLines:Z,headerStartLine:$,headerEndLine:K,fieldTypes:G,fieldIds:U,fieldOffsets:O,bytesPerVertex:k,vertexCount:H,dataSizeBytes:k*H,endOfHeader:Y,sectionName:X,sphericalHarmonicsDegree:D.degree,sphericalHarmonicsCoefficientsPerChannel:D.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:D.degree1Fields,sphericalHarmonicsDegree2Fields:D.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(J,Q){let $=0;let Z=0;for(let Y of J){if(Y.startsWith("f_rest"))$++}Z=$/3;let W=0;if(Z>=3)W=1;if(Z>=8)W=2;let K=[];let H=[];for(let Y=0;Y<3;Y++){if(W>=1){for(let X=0;X<3;X++){K.push(Q["f_rest_"+(X+Z*Y)])}}if(W>=2){for(let X=0;X<5;X++){H.push(Q["f_rest_"+(X+Z*Y+3)])}}}return{degree:W,coefficientsPerChannel:Z,degree1Fields:K,degree2Fields:H}}static getHeaderSectionNames(J){const Q=[];for(let $ of J){if($.startsWith("element")){const Z=$.split(" ");let W=0;for(let K of Z){const H=K.trim();if(H.length>0){W++;if(W===2){Q.push(H)}}}}}return Q}static checkTextForEndHeader(J){if(J.includes($0.HeaderEndToken)){return true}return false}static checkBufferForEndHeader(J,Q,$,Z){const W=new Uint8Array(J,Math.max(0,Q-$),$);const K=Z.decode(W);return $0.checkTextForEndHeader(K)}static extractHeaderFromBufferToText(J){const Q=new TextDecoder;let $=0;let Z="";const W=100;while(true){if($+W>=J.byteLength){throw new Error("End of file reached while searching for end of header")}const K=new Uint8Array(J,$,W);Z+=Q.decode(K);$+=W;if($0.checkBufferForEndHeader(J,$,W*2,Q)){break}}return Z}static readHeaderFromBuffer(J){const Q=new TextDecoder;let $=0;let Z="";const W=100;while(true){if($+W>=J.byteLength){throw new Error("End of file reached while searching for end of header")}const K=new Uint8Array(J,$,W);Z+=Q.decode(K);$+=W;if($0.checkBufferForEndHeader(J,$,W*2,Q)){break}}return Z}static convertHeaderTextToLines(J){const Q=J.split(`
`);const $=[];for(let Z=0;Z<Q.length;Z++){const W=Q[Z].trim();$.push(W);if(W===$0.HeaderEndToken){break}}return $}static determineHeaderFormatFromHeaderText(J){const Q=$0.convertHeaderTextToLines(J);let $=r0.INRIAV1;for(let Z=0;Z<Q.length;Z++){const W=Q[Z].trim();if(W.startsWith("element chunk")||W.match(/[A-Za-z]*packed_[A-Za-z]*/)){$=r0.PlayCanvasCompressed}else if(W.startsWith("element codebook_centers")){$=r0.INRIAV2}else if(W===$0.HeaderEndToken){break}}return $}static determineHeaderFormatFromPlyBuffer(J){const Q=$0.extractHeaderFromBufferToText(J);return $0.determineHeaderFormatFromHeaderText(Q)}static readVertex(J,Q,$,Z,W,K,H=true){const Y=$*Q.bytesPerVertex+Z;const X=Q.fieldOffsets;const U=Q.fieldTypes;for(let G of W){const E=U[G];if(E===oZ){K[G]=J.getFloat32(Y+X[G],true)}else if(E===aZ){K[G]=J.getInt16(Y+X[G],true)}else if(E===rZ){K[G]=J.getUint16(Y+X[G],true)}else if(E===sZ){K[G]=J.getInt32(Y+X[G],true)}else if(E===iZ){K[G]=J.getUint32(Y+X[G],true)}else if(E===tZ){if(H){K[G]=J.getUint8(Y+X[G])/255}else{K[G]=J.getUint8(Y+X[G])}}}}}var wH=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"];var hN=wH.map((J,Q)=>Q);var[JH,xN,gN,pN,mN,dN,lN,uN,cN,nN,QH,sN,iN,$H,ZH,oN,aN,rN]=hN;class g0{static decodeHeaderLines(J){let Q=0;J.forEach((U)=>{if(U.includes("f_rest_"))Q++});let $=0;if(Q>=45){$=45}else if(Q>=24){$=24}else if(Q>=9){$=9}const Z=Array.from(Array(Math.max($-1,0)));let W=Z.map((U,G)=>`f_rest_${G+1}`);const K=[...wH,...W];const H=K.map((U,G)=>G);const Y=H.reduce((U,G)=>{U[K[G]]=G;return U},{});const X=$0.decodeSectionHeader(J,Y,0);X.splatCount=X.vertexCount;X.bytesPerSplat=X.bytesPerVertex;X.fieldsToReadIndexes=H;return X}static decodeHeaderText(J){const Q=$0.convertHeaderTextToLines(J);const $=g0.decodeHeaderLines(Q);$.headerText=J;$.headerSizeBytes=J.indexOf($0.HeaderEndToken)+$0.HeaderEndToken.length+1;return $}static decodeHeaderFromBuffer(J){const Q=$0.readHeaderFromBuffer(J);return g0.decodeHeaderText(Q)}static findSplatData(J,Q){return new DataView(J,Q.headerSizeBytes)}static parseToUncompressedSplatBufferSection(J,Q,$,Z,W,K,H,Y=0){Y=Math.min(Y,J.sphericalHarmonicsDegree);const X=l.CompressionLevels[0].SphericalHarmonicsDegrees[Y].BytesPerSplat;for(let U=Q;U<=$;U++){const G=g0.parseToUncompressedSplat(Z,U,J,W,Y);const E=U*X+H;l.writeSplatDataToSectionBuffer(G,K,E,0,Y)}}static parseToUncompressedSplatArraySection(J,Q,$,Z,W,K,H=0){H=Math.min(H,J.sphericalHarmonicsDegree);for(let Y=Q;Y<=$;Y++){const X=g0.parseToUncompressedSplat(Z,Y,J,W,H);K.addSplat(X)}}static decodeSectionSplatData(J,Q,$,Z,W=true){Z=Math.min(Z,$.sphericalHarmonicsDegree);if(W){const K=new EJ(Z);for(let H=0;H<Q;H++){const Y=g0.parseToUncompressedSplat(J,H,$,0,Z);K.addSplat(Y)}return K}else{const{splatBuffer:K,splatBufferDataOffsetBytes:H}=l.preallocateUncompressed(Q,Z);g0.parseToUncompressedSplatBufferSection($,0,Q-1,J,0,K.bufferData,H,Z);return K}}static parseToUncompressedSplat=function(){let J=[];const Q=new G0;const $=EJ.OFFSET.X;const Z=EJ.OFFSET.Y;const W=EJ.OFFSET.Z;const K=EJ.OFFSET.SCALE0;const H=EJ.OFFSET.SCALE1;const Y=EJ.OFFSET.SCALE2;const X=EJ.OFFSET.ROTATION0;const U=EJ.OFFSET.ROTATION1;const G=EJ.OFFSET.ROTATION2;const E=EJ.OFFSET.ROTATION3;const N=EJ.OFFSET.FDC0;const q=EJ.OFFSET.FDC1;const O=EJ.OFFSET.FDC2;const k=EJ.OFFSET.OPACITY;const D=[];for(let F=0;F<45;F++){D[F]=EJ.OFFSET.FRC0+F}return function(F,L,V,R=0,C=0){C=Math.min(C,V.sphericalHarmonicsDegree);g0.readSplat(F,V,L,R,J);const M=EJ.createSplat(C);if(J[JH]!==undefined){M[K]=Math.exp(J[JH]);M[H]=Math.exp(J[xN]);M[Y]=Math.exp(J[gN])}else{M[K]=0.01;M[H]=0.01;M[Y]=0.01}if(J[QH]!==undefined){const I=0.28209479177387814;M[N]=(0.5+I*J[QH])*255;M[q]=(0.5+I*J[sN])*255;M[O]=(0.5+I*J[iN])*255}else if(J[ZH]!==undefined){M[N]=J[ZH]*255;M[q]=J[oN]*255;M[O]=J[aN]*255}else{M[N]=0;M[q]=0;M[O]=0}if(J[$H]!==undefined){M[k]=1/(1+Math.exp(-J[$H]))*255}M[N]=L0(Math.floor(M[N]),0,255);M[q]=L0(Math.floor(M[q]),0,255);M[O]=L0(Math.floor(M[O]),0,255);M[k]=L0(Math.floor(M[k]),0,255);if(C>=1){if(J[rN]!==undefined){for(let I=0;I<9;I++){M[D[I]]=J[V.sphericalHarmonicsDegree1Fields[I]]}if(C>=2){for(let I=0;I<15;I++){M[D[9+I]]=J[V.sphericalHarmonicsDegree2Fields[I]]}}}}Q.set(J[pN],J[mN],J[dN],J[lN]);Q.normalize();M[X]=Q.x;M[U]=Q.y;M[G]=Q.z;M[E]=Q.w;M[$]=J[uN];M[Z]=J[cN];M[W]=J[nN];return M}}();static readSplat(J,Q,$,Z,W){return $0.readVertex(J,Q,$,Z,Q.fieldsToReadIndexes,W,true)}static parseToUncompressedSplatArray(J,Q=0){const{header:$,splatCount:Z,splatData:W}=WH(J);return g0.decodeSectionSplatData(W,Z,$,Q,true)}static parseToUncompressedSplatBuffer(J,Q=0){const{header:$,splatCount:Z,splatData:W}=WH(J);return g0.decodeSectionSplatData(W,Z,$,Q,false)}}function WH(J){const Q=g0.decodeHeaderFromBuffer(J);const $=Q.splatCount;const Z=g0.findSplatData(J,Q);return{header:Q,splatCount:$,splatData:Z}}var CH=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"];var gQ=CH.map((J,Q)=>Q);var[pQ,tN,eN,KH,mQ,J1,jZ]=[0,1,4,16,17,18,19];var AH=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"];var hZ=AH.map((J,Q)=>Q);var[HH,Q1,$1,Z1,W1,K1,H1,Y1,X1,U1,xZ,PH,TH,YH]=hZ;var XH=xZ;var G1=PH;var E1=TH;var dQ=(J)=>{const Q=(31744&J)>>10;const $=1023&J;return(J>>15?-1:1)*(Q?Q===31?$?NaN:1/0:Math.pow(2,Q-15)*(1+$/1024):$/1024*0.00006103515625)};class E8{static decodeSectionHeadersFromHeaderLines(J){const Q=hZ.reduce((U,G)=>{U[AH[G]]=G;return U},{});const $=gQ.reduce((U,G)=>{U[CH[G]]=G;return U},{});const Z=$0.getHeaderSectionNames(J);let W;for(let U=0;U<Z.length;U++){const G=Z[U];if(G==="codebook_centers"){W=U}}let K=0;let H=false;const Y=[];let X=0;while(!H){let U;if(X===W){U=$0.decodeSectionHeader(J,$,K)}else{U=$0.decodeSectionHeader(J,Q,K)}H=U.endOfHeader;K=U.headerEndLine+1;if(!H){U.splatCount=U.vertexCount;U.bytesPerSplat=U.bytesPerVertex}Y.push(U);X++}return Y}static decodeSectionHeadersFromHeaderText(J){const Q=$0.convertHeaderTextToLines(J);return E8.decodeSectionHeadersFromHeaderLines(Q)}static getSplatCountFromSectionHeaders(J){let Q=0;for(let $ of J){if($.sectionName!=="codebook_centers"){Q+=$.vertexCount}}return Q}static decodeHeaderFromHeaderText(J){const Q=J.indexOf($0.HeaderEndToken)+$0.HeaderEndToken.length+1;const $=E8.decodeSectionHeadersFromHeaderText(J);const Z=E8.getSplatCountFromSectionHeaders($);return{headerSizeBytes:Q,sectionHeaders:$,splatCount:Z}}static decodeHeaderFromBuffer(J){const Q=$0.readHeaderFromBuffer(J);return E8.decodeHeaderFromHeaderText(Q)}static findVertexData(J,Q,$){let Z=Q.headerSizeBytes;for(let W=0;W<$&&W<Q.sectionHeaders.length;W++){const K=Q.sectionHeaders[W];Z+=K.dataSizeBytes}return new DataView(J,Z,Q.sectionHeaders[$].dataSizeBytes)}static decodeCodeBook(J,Q){const $=[];const Z=[];for(let W=0;W<Q.vertexCount;W++){$0.readVertex(J,Q,W,0,gQ,$);for(let K of gQ){const H=gQ[K];let Y=Z[H];if(!Y){Z[H]=Y=[]}Y.push($[K])}}for(let W=0;W<Z.length;W++){const K=Z[W];const H=0.28209479177387814;for(let Y=0;Y<K.length;Y++){const X=dQ(K[Y]);if(W===KH){K[Y]=Math.round(1/(1+Math.exp(-X))*255)}else if(W===pQ){K[Y]=Math.round((0.5+H*X)*255)}else if(W===mQ){K[Y]=Math.exp(X)}else{K[Y]=X}}}return Z}static decodeSectionSplatData(J,Q,$,Z,W){W=Math.min(W,$.sphericalHarmonicsDegree);const K=new EJ(W);for(let H=0;H<Q;H++){const Y=E8.parseToUncompressedSplat(J,H,$,Z,0,W);K.addSplat(Y)}return K}static parseToUncompressedSplat=function(){let J=[];const Q=new G0;const $=EJ.OFFSET.X;const Z=EJ.OFFSET.Y;const W=EJ.OFFSET.Z;const K=EJ.OFFSET.SCALE0;const H=EJ.OFFSET.SCALE1;const Y=EJ.OFFSET.SCALE2;const X=EJ.OFFSET.ROTATION0;const U=EJ.OFFSET.ROTATION1;const G=EJ.OFFSET.ROTATION2;const E=EJ.OFFSET.ROTATION3;const N=EJ.OFFSET.FDC0;const q=EJ.OFFSET.FDC1;const O=EJ.OFFSET.FDC2;const k=EJ.OFFSET.OPACITY;const D=[];for(let F=0;F<45;F++){D[F]=EJ.OFFSET.FRC0+F}return function(F,L,V,R,C=0,M=0){M=Math.min(M,V.sphericalHarmonicsDegree);E8.readSplat(F,V,L,C,J);const I=EJ.createSplat(M);if(J[HH]!==undefined){I[K]=R[mQ][J[HH]];I[H]=R[mQ][J[Q1]];I[Y]=R[mQ][J[$1]]}else{I[K]=0.01;I[H]=0.01;I[Y]=0.01}if(J[xZ]!==undefined){I[N]=R[pQ][J[xZ]];I[q]=R[pQ][J[PH]];I[O]=R[pQ][J[TH]]}else if(J[XH]!==undefined){I[N]=J[XH]*255;I[q]=J[G1]*255;I[O]=J[E1]*255}else{I[N]=0;I[q]=0;I[O]=0}if(J[YH]!==undefined){I[k]=R[KH][J[YH]]}I[N]=L0(Math.floor(I[N]),0,255);I[q]=L0(Math.floor(I[q]),0,255);I[O]=L0(Math.floor(I[O]),0,255);I[k]=L0(Math.floor(I[k]),0,255);if(M>=1&&V.sphericalHarmonicsDegree>=1){for(let y=0;y<9;y++){const f=R[tN+y%3];I[D[y]]=f[J[V.sphericalHarmonicsDegree1Fields[y]]]}if(M>=2&&V.sphericalHarmonicsDegree>=2){for(let y=0;y<15;y++){const f=R[eN+y%5];I[D[9+y]]=f[J[V.sphericalHarmonicsDegree2Fields[y]]]}}}const T=R[J1][J[Z1]];const B=R[jZ][J[W1]];const _=R[jZ][J[K1]];const A=R[jZ][J[H1]];Q.set(T,B,_,A);Q.normalize();I[X]=Q.x;I[U]=Q.y;I[G]=Q.z;I[E]=Q.w;I[$]=dQ(J[Y1]);I[Z]=dQ(J[X1]);I[W]=dQ(J[U1]);return I}}();static readSplat(J,Q,$,Z,W){return $0.readVertex(J,Q,$,Z,hZ,W,false)}static parseToUncompressedSplatArray(J,Q=0){const $=[];const Z=E8.decodeHeaderFromBuffer(J,Q);let W;for(let H=0;H<Z.sectionHeaders.length;H++){const Y=Z.sectionHeaders[H];if(Y.sectionName==="codebook_centers"){const X=E8.findVertexData(J,Z,H);W=E8.decodeCodeBook(X,Y)}}for(let H=0;H<Z.sectionHeaders.length;H++){const Y=Z.sectionHeaders[H];if(Y.sectionName!=="codebook_centers"){const X=Y.vertexCount;const U=E8.findVertexData(J,Z,H);const G=E8.decodeSectionSplatData(U,X,Y,W,Q);$.push(G)}}const K=new EJ(Q);for(let H of $){for(let Y of H.splats){K.addSplat(Y)}}return K}}class gZ{static parseToUncompressedSplatArray(J,Q=0){const $=$0.determineHeaderFormatFromPlyBuffer(J);if($===r0.PlayCanvasCompressed){return eJ.parseToUncompressedSplatArray(J,Q)}else if($===r0.INRIAV1){return g0.parseToUncompressedSplatArray(J,Q)}else if($===r0.INRIAV2){return E8.parseToUncompressedSplatArray(J,Q)}}static parseToUncompressedSplatBuffer(J,Q=0){const $=$0.determineHeaderFormatFromPlyBuffer(J);if($===r0.PlayCanvasCompressed){return eJ.parseToUncompressedSplatBuffer(J,Q)}else if($===r0.INRIAV1){return g0.parseToUncompressedSplatBuffer(J,Q)}else if($===r0.INRIAV2){throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}}class eZ{constructor(J,Q,$,Z){this.sectionCount=J;this.sectionFilters=Q;this.groupingParameters=$;this.partitionGenerator=Z}partitionUncompressedSplatArray(J){let Q;let $;let Z;if(this.partitionGenerator){const K=this.partitionGenerator(J);Q=K.groupingParameters;$=K.sectionCount;Z=K.sectionFilters}else{Q=this.groupingParameters;$=this.sectionCount;Z=this.sectionFilters}const W=[];for(let K=0;K<$;K++){const H=new EJ(J.sphericalHarmonicsDegree);const Y=Z[K];for(let X=0;X<J.splatCount;X++){if(Y(X)){H.addSplat(J.splats[X])}}W.push(H)}return{splatArrays:W,parameters:Q}}static getStandardPartitioner(J=0,Q=new S,$=l.BucketBlockSize,Z=l.BucketSize){const W=(K)=>{const H=EJ.OFFSET.X;const Y=EJ.OFFSET.Y;const X=EJ.OFFSET.Z;if(J<=0)J=K.splatCount;const U=new S;const G=0.5;const E=(D)=>{D.x=Math.floor(D.x/G)*G;D.y=Math.floor(D.y/G)*G;D.z=Math.floor(D.z/G)*G};K.splats.forEach((D)=>{U.set(D[H],D[Y],D[X]).sub(Q);E(U);D.centerDist=U.lengthSq()});K.splats.sort((D,F)=>{let L=D.centerDist;let V=F.centerDist;if(L>V)return 1;else return-1});const N=[];const q=[];J=Math.min(K.splatCount,J);const O=Math.ceil(K.splatCount/J);let k=0;for(let D=0;D<O;D++){let F=k;N.push((L)=>{return L>=F&&L<F+J});q.push({blocksSize:$,bucketSize:Z});k+=J}return{sectionCount:N.length,sectionFilters:N,groupingParameters:q}};return new eZ(undefined,undefined,undefined,W)}}class Q7{constructor(J,Q,$,Z,W,K,H){this.splatPartitioner=J;this.alphaRemovalThreshold=Q;this.compressionLevel=$;this.sectionSize=Z;this.sceneCenter=W?new S().copy(W):undefined;this.blockSize=K;this.bucketSize=H}generateFromUncompressedSplatArray(J){const Q=this.splatPartitioner.partitionUncompressedSplatArray(J);return l.generateFromUncompressedSplatArrays(Q.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,Q.parameters)}static getStandardGenerator(J=1,Q=1,$=0,Z=new S,W=l.BucketBlockSize,K=l.BucketSize){const H=eZ.getStandardPartitioner($,Z,W,K);return new Q7(H,J,Q,$,Z,W,K)}}var w0={Downloading:0,Processing:1,Done:2};class J7 extends Error{constructor(J){super(J)}}var R0={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function UH(J,Q){let $=0;for(let W of J)$+=W.sizeBytes;if(!Q||Q.byteLength<$){Q=new ArrayBuffer($)}let Z=0;for(let W of J){new Uint8Array(Q,Z,W.sizeBytes).set(W.data);Z+=W.sizeBytes}return Q}function GH(J,Q,$,Z,W,K,H,Y){if(Q){const X=Q7.getStandardGenerator($,Z,W,K,H,Y);return X.generateFromUncompressedSplatArray(J)}else{return l.generateFromUncompressedSplatArrays([J],$,0,new S)}}class JW{static loadFromURL(J,Q,$,Z,W,K,H=true,Y=0,X,U,G,E,N){let q;if(!$&&!H){q=R0.DownloadBeforeProcessing}else{if(H)q=R0.ProgressiveToSplatArray;else q=R0.ProgressiveToSplatBuffer}const O=K0.ProgressiveLoadSectionSize;const k=l.HeaderSizeBytes+l.SectionHeaderSizeBytes;const D=1;let F;let L;let V;let R;let C;let M=0;let I=0;let T=0;let B=false;let _=false;let A=false;const y=lZ();let f=0;let j=0;let g=0;let x=0;let p="";let m=null;let t=[];let $J;const GJ=new TextDecoder;const NJ=(cJ,AJ,n)=>{const QJ=cJ>=100;if(n){t.push({data:n,sizeBytes:n.byteLength,startBytes:g,endBytes:g+n.byteLength});g+=n.byteLength}if(q===R0.DownloadBeforeProcessing){if(QJ){y.resolve(t)}}else{if(!B){p+=GJ.decode(n);if($0.checkTextForEndHeader(p)){F=$0.determineHeaderFormatFromHeaderText(p);if(F===r0.INRIAV1){m=g0.decodeHeaderText(p);Y=Math.min(Y,m.sphericalHarmonicsDegree);M=m.splatCount;_=true;x=m.headerSizeBytes+m.bytesPerSplat*M}else if(F===r0.PlayCanvasCompressed){m=eJ.decodeHeaderText(p);Y=Math.min(Y,m.sphericalHarmonicsDegree);if(q===R0.ProgressiveToSplatBuffer&&Y>0){throw new J7("PlyLoader.loadFromURL() -> Selected PLY format has spherical "+"harmonics data that cannot be progressively loaded.")}M=m.vertexElement.count;x=m.headerSizeBytes+m.bytesPerSplat*M+m.chunkElement.storageSizeBytes}else{if(q===R0.ProgressiveToSplatBuffer){throw new J7("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.")}else{q=R0.DownloadBeforeProcessing;return}}if(q===R0.ProgressiveToSplatBuffer){const WJ=l.CompressionLevels[0].SphericalHarmonicsDegrees[Y];const MJ=k+WJ.BytesPerSplat*M;V=new ArrayBuffer(MJ);l.writeHeaderToBuffer({versionMajor:l.CurrentMajorVersion,versionMinor:l.CurrentMinorVersion,maxSectionCount:D,sectionCount:D,maxSplatCount:M,splatCount:0,compressionLevel:0,sceneCenter:new S},V)}else{$J=new EJ(Y)}f=m.headerSizeBytes;j=m.headerSizeBytes;B=true}}else if(F===r0.PlayCanvasCompressed&&!_){const WJ=m.headerSizeBytes+m.chunkElement.storageSizeBytes;C=UH(t,C);if(C.byteLength>=WJ){eJ.readElementData(m.chunkElement,C,m.headerSizeBytes);f=WJ;j=WJ;_=true}}if(B&&_&&t.length>0){L=UH(t,L);const WJ=g-f;if(WJ>O||g>=x&&!A||QJ){const MJ=A?m.sphericalHarmonicsPerSplat:m.bytesPerSplat;const VJ=A?g:Math.min(x,g);const CJ=VJ-j;const lJ=Math.floor(CJ/MJ);const gJ=lJ*MJ;const yJ=g-j-gJ;const jJ=j-t[0].startBytes;const PJ=new DataView(L,jJ,gJ);if(!A){if(q===R0.ProgressiveToSplatBuffer){const J0=l.CompressionLevels[0].SphericalHarmonicsDegrees[Y];const v=I*J0.BytesPerSplat+k;if(F===r0.PlayCanvasCompressed){eJ.parseToUncompressedSplatBufferSection(m.chunkElement,m.vertexElement,0,lJ-1,I,PJ,V,v)}else{g0.parseToUncompressedSplatBufferSection(m,0,lJ-1,PJ,0,V,v,Y)}}else{if(F===r0.PlayCanvasCompressed){eJ.parseToUncompressedSplatArraySection(m.chunkElement,m.vertexElement,0,lJ-1,I,PJ,$J)}else{g0.parseToUncompressedSplatArraySection(m,0,lJ-1,PJ,0,$J,Y)}}I+=lJ;if(q===R0.ProgressiveToSplatBuffer){if(!R){l.writeSectionHeaderToBuffer({maxSplatCount:M,splatCount:I,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:Y},0,V,l.HeaderSizeBytes);R=new l(V,false)}R.updateLoadedCounts(1,I)}if(g>=x){A=true}}else{if(F===r0.PlayCanvasCompressed){if(q===R0.ProgressiveToSplatArray){eJ.parseSphericalHarmonicsToUncompressedSplatArraySection(m.chunkElement,m.shElement,T,T+lJ-1,PJ,0,Y,m.sphericalHarmonicsDegree,$J);T+=lJ}}}if(yJ===0){t=[]}else{let J0=[];let v=0;for(let Q0=t.length-1;Q0>=0;Q0--){const pJ=t[Q0];v+=pJ.sizeBytes;J0.unshift(pJ);if(v>=yJ)break}t=J0}f+=O;j+=gJ}}if(Z&&R){Z(R,QJ)}if(QJ){if(q===R0.ProgressiveToSplatBuffer){y.resolve(R)}else{y.resolve($J)}}}if(Q)Q(cJ,AJ,w0.Downloading)};if(Q)Q(0,"0%",w0.Downloading);return iQ(J,NJ,false,X).then(()=>{if(Q)Q(0,"0%",w0.Processing);return y.promise.then((cJ)=>{if(Q)Q(100,"100%",w0.Done);if(q===R0.DownloadBeforeProcessing){const AJ=t.map((n)=>n.data);return new Blob(AJ).arrayBuffer().then((n)=>{return JW.loadFromFileData(n,W,K,H,Y,U,G,E,N)})}else if(q===R0.ProgressiveToSplatBuffer){return cJ}else{return N8(()=>{return GH(cJ,H,W,K,U,G,E,N)})}})})}static loadFromFileData(J,Q,$,Z,W=0,K,H,Y,X){if(Z){return N8(()=>{return gZ.parseToUncompressedSplatArray(J,W)}).then((U)=>{return GH(U,Z,Q,$,K,H,Y,X)})}else{return N8(()=>{return gZ.parseToUncompressedSplatBuffer(J,W)})}}}var N1=(J)=>{return new ReadableStream({async start(Q){Q.enqueue(J);Q.close()}})};async function q1(J){try{const Q=N1(J);if(!Q)throw new Error("Failed to create stream from data");return await D1(Q)}catch(Q){console.error("Error decompressing gzipped data:",Q);throw Q}}async function D1(J){const Q=J.pipeThrough(new DecompressionStream("gzip"));const $=new Response(Q);const Z=await $.arrayBuffer();return new Uint8Array(Z)}var O1=1347635022;var F1=1;var k1=0.15;function M1(J){const Q=J>>15&1;const $=J>>10&31;const Z=J&1023;const W=Q===1?-1:1;if($===0){return W*Math.pow(2,-14)*Z/1024}if($===31){return Z!==0?NaN:W*Infinity}return W*Math.pow(2,$-15)*(1+Z/1024)}function R1(J){return(J-128)/128}function f9(J){switch(J){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:console.error(`[SPZ: ERROR] Unsupported SH degree: ${J}`);return 0}}var V1=function(){let J=[];const Q=new G0;const $=EJ.OFFSET.X;const Z=EJ.OFFSET.Y;const W=EJ.OFFSET.Z;const K=EJ.OFFSET.SCALE0;const H=EJ.OFFSET.SCALE1;const Y=EJ.OFFSET.SCALE2;const X=EJ.OFFSET.ROTATION0;const U=EJ.OFFSET.ROTATION1;const G=EJ.OFFSET.ROTATION2;const E=EJ.OFFSET.ROTATION3;const N=EJ.OFFSET.FDC0;const q=EJ.OFFSET.FDC1;const O=EJ.OFFSET.FDC2;const k=EJ.OFFSET.OPACITY;const D=[];for(let V=0;V<45;V++){D[V]=EJ.OFFSET.FRC0+V}const F=[f9(0),f9(1),f9(2),f9(3)];const L=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(V,R,C){C=Math.min(R,C);const M=EJ.createSplat(C);if(V.scale[0]!==undefined){M[K]=V.scale[0];M[H]=V.scale[1];M[Y]=V.scale[2]}else{M[K]=0.01;M[H]=0.01;M[Y]=0.01}if(V.color[0]!==undefined){M[N]=V.color[0];M[q]=V.color[1];M[O]=V.color[2]}else if(J[RED]!==undefined){M[N]=J[RED]*255;M[q]=J[GREEN]*255;M[O]=J[BLUE]*255}else{M[N]=0;M[q]=0;M[O]=0}if(V.alpha!==undefined){M[k]=V.alpha}M[N]=L0(Math.floor(M[N]),0,255);M[q]=L0(Math.floor(M[q]),0,255);M[O]=L0(Math.floor(M[O]),0,255);M[k]=L0(Math.floor(M[k]),0,255);let I=F[C];let T=F[R];for(let B=0;B<3;++B){for(let _=0;_<15;++_){const A=L[B*15+_];if(_<I&&_<T){M[EJ.OFFSET.FRC0+A]=V.sh[B*T+_]}}}Q.set(V.rotation[3],V.rotation[0],V.rotation[1],V.rotation[2]);Q.normalize();M[X]=Q.x;M[U]=Q.y;M[G]=Q.z;M[E]=Q.w;M[$]=V.position[0];M[Z]=V.position[1];M[W]=V.position[2];return M}}();function L1(J,Q,$,Z){if(J.positions.length!==Q*3*(Z?2:3))return false;if(J.scales.length!==Q*3)return false;if(J.rotations.length!==Q*3)return false;if(J.alphas.length!==Q)return false;if(J.colors.length!==Q*3)return false;if(J.sh.length!==Q*$*3)return false;return true}function EH(J,Q,$,Z,W){Q=Math.min(Q,J.shDegree);const K=J.numPoints;const H=f9(J.shDegree);const Y=J.positions.length===K*3*2;if(!L1(J,K,H,Y)){return null}const X={position:[],scale:[],rotation:[],alpha:undefined,color:[],sh:[]};let U;if(Y){U=new Uint16Array(J.positions.buffer,J.positions.byteOffset,K*3)}const G=1/(1<<J.fractionalBits);const E=f9(J.shDegree);const N=0.28209479177387814;for(let q=0;q<K;q++){if(Y){for(let L=0;L<3;L++){X.position[L]=M1(U[q*3+L])}}else{for(let L=0;L<3;L++){const V=q*9+L*3;let R=J.positions[V];R|=J.positions[V+1]<<8;R|=J.positions[V+2]<<16;R|=R&8388608?4278190080:0;X.position[L]=R*G}}for(let L=0;L<3;L++){X.scale[L]=Math.exp(J.scales[q*3+L]/16-10)}const O=J.rotations.subarray(q*3,q*3+3);const k=[O[0]/127.5-1,O[1]/127.5-1,O[2]/127.5-1];X.rotation[0]=k[0];X.rotation[1]=k[1];X.rotation[2]=k[2];const D=k[0]*k[0]+k[1]*k[1]+k[2]*k[2];X.rotation[3]=Math.sqrt(Math.max(0,1-D));X.alpha=Math.floor(J.alphas[q]);for(let L=0;L<3;L++){X.color[L]=Math.floor(((J.colors[q*3+L]/255-0.5)/k1*N+0.5)*255)}for(let L=0;L<3;L++){for(let V=0;V<E;V++){X.sh[L*E+V]=R1(J.sh[E*3*q+V*3+L])}}const F=V1(X,J.shDegree,Q);if($){const L=l.CompressionLevels[0].SphericalHarmonicsDegrees[Q].BytesPerSplat;const V=q*L+W;l.writeSplatDataToSectionBuffer(F,Z,V,0,Q)}else{Z.addSplat(F)}}}var z1=16;var _1=1e7;function B1(J){const Q=new DataView(J);let $=0;const Z={magic:Q.getUint32($,true),version:Q.getUint32($+4,true),numPoints:Q.getUint32($+8,true),shDegree:Q.getUint8($+12),fractionalBits:Q.getUint8($+13),flags:Q.getUint8($+14),reserved:Q.getUint8($+15)};$+=z1;if(Z.magic!==O1){console.error("[SPZ ERROR] deserializePackedGaussians: header not found");return null}if(Z.version<1||Z.version>2){console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${Z.version}`);return null}if(Z.numPoints>_1){console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${Z.numPoints}`);return null}if(Z.shDegree>3){console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${Z.shDegree}`);return null}const W=Z.numPoints;const K=f9(Z.shDegree);const H=Z.version===1;const Y={numPoints:W,shDegree:Z.shDegree,fractionalBits:Z.fractionalBits,antialiased:(Z.flags&F1)!==0,positions:new Uint8Array(W*3*(H?2:3)),scales:new Uint8Array(W*3),rotations:new Uint8Array(W*3),alphas:new Uint8Array(W),colors:new Uint8Array(W*3),sh:new Uint8Array(W*K*3)};try{const X=new Uint8Array(J);let U=Y.positions.length;let G=$;Y.positions.set(X.slice(G,G+U));G+=U;Y.alphas.set(X.slice(G,G+Y.alphas.length));G+=Y.alphas.length;Y.colors.set(X.slice(G,G+Y.colors.length));G+=Y.colors.length;Y.scales.set(X.slice(G,G+Y.scales.length));G+=Y.scales.length;Y.rotations.set(X.slice(G,G+Y.rotations.length));G+=Y.rotations.length;Y.sh.set(X.slice(G,G+Y.sh.length));if(G+Y.sh.length!==J.byteLength){console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size");return null}}catch(X){console.error("[SPZ ERROR] deserializePackedGaussians: read error",X);return null}return Y}async function I1(J){try{const Q=await q1(J);return B1(Q.buffer)}catch(Q){console.error("[SPZ ERROR] loadSpzPacked: decompression error",Q);return null}}class QW{static loadFromURL(J,Q,$,Z,W=true,K=0,H,Y,X,U,G){if(Q)Q(0,"0%",w0.Downloading);return iQ(J,Q,true,H).then((E)=>{if(Q)Q(0,"0%",w0.Processing);return QW.loadFromFileData(E,$,Z,W,K,Y,X,U,G)})}static async loadFromFileData(J,Q,$,Z,W=0,K,H,Y,X){await N8();const U=await I1(J);W=Math.min(U.shDegree,W);const G=new EJ(W);if(Z){EH(U,W,false,G,0);const E=Q7.getStandardGenerator(Q,$,K,H,Y,X);return E.generateFromUncompressedSplatArray(G)}else{const{splatBuffer:E,splatBufferDataOffsetBytes:N}=l.preallocateUncompressed(U.numPoints,W);EH(U,W,true,E.bufferData,N);return E}}}class N0{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(J,Q,$,Z,W,K){const H=l.CompressionLevels[0].BytesPerCenter;const Y=l.CompressionLevels[0].BytesPerScale;const X=l.CompressionLevels[0].BytesPerRotation;const U=l.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let G=J;G<=Q;G++){const E=G*N0.RowSizeBytes+Z;const N=new Float32Array($,E,3);const q=new Float32Array($,E+N0.CenterSizeBytes,3);const O=new Uint8Array($,E+N0.CenterSizeBytes+N0.ScaleSizeBytes,4);const k=new Uint8Array($,E+N0.CenterSizeBytes+N0.ScaleSizeBytes+N0.RotationSizeBytes,4);const D=new G0((k[1]-128)/128,(k[2]-128)/128,(k[3]-128)/128,(k[0]-128)/128);D.normalize();const F=G*U+K;const L=new Float32Array(W,F,3);const V=new Float32Array(W,F+H,3);const R=new Float32Array(W,F+H+Y,4);const C=new Uint8Array(W,F+H+Y+X,4);L[0]=N[0];L[1]=N[1];L[2]=N[2];V[0]=q[0];V[1]=q[1];V[2]=q[2];R[0]=D.w;R[1]=D.x;R[2]=D.y;R[3]=D.z;C[0]=O[0];C[1]=O[1];C[2]=O[2];C[3]=O[3]}}static parseToUncompressedSplatArraySection(J,Q,$,Z,W){for(let K=J;K<=Q;K++){const H=K*N0.RowSizeBytes+Z;const Y=new Float32Array($,H,3);const X=new Float32Array($,H+N0.CenterSizeBytes,3);const U=new Uint8Array($,H+N0.CenterSizeBytes+N0.ScaleSizeBytes,4);const G=new Uint8Array($,H+N0.CenterSizeBytes+N0.ScaleSizeBytes+N0.RotationSizeBytes,4);const E=new G0((G[1]-128)/128,(G[2]-128)/128,(G[3]-128)/128,(G[0]-128)/128);E.normalize();W.addSplatFromComonents(Y[0],Y[1],Y[2],X[0],X[1],X[2],E.w,E.x,E.y,E.z,U[0],U[1],U[2],U[3])}}static parseStandardSplatToUncompressedSplatArray(J){const Q=J.byteLength/N0.RowSizeBytes;const $=new EJ;for(let Z=0;Z<Q;Z++){const W=Z*N0.RowSizeBytes;const K=new Float32Array(J,W,3);const H=new Float32Array(J,W+N0.CenterSizeBytes,3);const Y=new Uint8Array(J,W+N0.CenterSizeBytes+N0.ScaleSizeBytes,4);const X=new Uint8Array(J,W+N0.CenterSizeBytes+N0.ScaleSizeBytes+N0.ColorSizeBytes,4);const U=new G0((X[1]-128)/128,(X[2]-128)/128,(X[3]-128)/128,(X[0]-128)/128);U.normalize();$.addSplatFromComonents(K[0],K[1],K[2],H[0],H[1],H[2],U.w,U.x,U.y,U.z,Y[0],Y[1],Y[2],Y[3])}return $}}function NH(J,Q,$,Z,W,K,H,Y){if(Q){const X=Q7.getStandardGenerator($,Z,W,K,H,Y);return X.generateFromUncompressedSplatArray(J)}else{return l.generateFromUncompressedSplatArrays([J],$,0,new S)}}class $W{static loadFromURL(J,Q,$,Z,W,K,H=true,Y,X,U,G,E){let N=$?R0.ProgressiveToSplatBuffer:R0.ProgressiveToSplatArray;if(H)N=R0.ProgressiveToSplatArray;const q=l.HeaderSizeBytes+l.SectionHeaderSizeBytes;const O=K0.ProgressiveLoadSectionSize;const k=1;let D;let F;let L;let V=0;let R=0;let C;const M=lZ();let I=0;let T=0;let B=[];const _=(A,y,f,j)=>{const g=A>=100;if(f){B.push(f)}if(N===R0.DownloadBeforeProcessing){if(g){M.resolve(B)}return}if(!j){if($){throw new J7("Cannon directly load .splat because no file size info is available.")}else{N=R0.DownloadBeforeProcessing;return}}if(!D){V=j/N0.RowSizeBytes;D=new ArrayBuffer(j);const x=l.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;const p=q+x*V;if(N===R0.ProgressiveToSplatBuffer){F=new ArrayBuffer(p);l.writeHeaderToBuffer({versionMajor:l.CurrentMajorVersion,versionMinor:l.CurrentMinorVersion,maxSectionCount:k,sectionCount:k,maxSplatCount:V,splatCount:R,compressionLevel:0,sceneCenter:new S},F)}else{C=new EJ(0)}}if(f){new Uint8Array(D,T,f.byteLength).set(new Uint8Array(f));T+=f.byteLength;const x=T-I;if(x>O||g){const p=g?x:O;const m=p/N0.RowSizeBytes;const t=R+m;if(N===R0.ProgressiveToSplatBuffer){N0.parseToUncompressedSplatBufferSection(R,t-1,D,0,F,q)}else{N0.parseToUncompressedSplatArraySection(R,t-1,D,0,C)}R=t;if(N===R0.ProgressiveToSplatBuffer){if(!L){l.writeSectionHeaderToBuffer({maxSplatCount:V,splatCount:R,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,F,l.HeaderSizeBytes);L=new l(F,false)}L.updateLoadedCounts(1,R);if(Z){Z(L,g)}}I+=O}}if(g){if(N===R0.ProgressiveToSplatBuffer){M.resolve(L)}else{M.resolve(C)}}if(Q)Q(A,y,w0.Downloading)};if(Q)Q(0,"0%",w0.Downloading);return iQ(J,_,false,Y).then(()=>{if(Q)Q(0,"0%",w0.Processing);return M.promise.then((A)=>{if(Q)Q(100,"100%",w0.Done);if(N===R0.DownloadBeforeProcessing){return new Blob(B).arrayBuffer().then((y)=>{return $W.loadFromFileData(y,W,K,H,X,U,G,E)})}else if(N===R0.ProgressiveToSplatBuffer){return A}else{return N8(()=>{return NH(A,H,W,K,X,U,G,E)})}})})}static loadFromFileData(J,Q,$,Z,W,K,H,Y){return N8(()=>{const X=N0.parseStandardSplatToUncompressedSplatArray(J);return NH(X,Z,Q,$,W,K,H,Y)})}}class a6{static checkVersion(J){const Q=l.CurrentMajorVersion;const $=l.CurrentMinorVersion;const Z=l.parseHeader(J);if(Z.versionMajor===Q&&Z.versionMinor>=$||Z.versionMajor>Q){return true}else{throw new Error(`KSplat version not supported: v${Z.versionMajor}.${Z.versionMinor}. `+`Minimum required: v${Q}.${$}`)}}static loadFromURL(J,Q,$,Z,W){let K;let H;let Y;let X;let U=false;let G=false;let E;let N=[];let q=false;let O=false;let k=0;let D=0;let F=0;let L=false;let V=false;let R=false;let C=[];const M=lZ();const I=()=>{if(!U&&!G&&k>=l.HeaderSizeBytes){G=true;const f=new Blob(C).arrayBuffer();f.then((j)=>{Y=new ArrayBuffer(l.HeaderSizeBytes);new Uint8Array(Y).set(new Uint8Array(j,0,l.HeaderSizeBytes));a6.checkVersion(Y);G=false;U=true;X=l.parseHeader(Y);window.setTimeout(()=>{_()},1)})}};let T=0;const B=()=>{if(T===0){T++;window.setTimeout(()=>{T--;A()},1)}};const _=()=>{const f=()=>{O=true;const j=new Blob(C).arrayBuffer();j.then((g)=>{O=false;q=true;E=new ArrayBuffer(X.maxSectionCount*l.SectionHeaderSizeBytes);new Uint8Array(E).set(new Uint8Array(g,l.HeaderSizeBytes,X.maxSectionCount*l.SectionHeaderSizeBytes));N=l.parseSectionHeaders(X,E,0,false);let x=0;for(let m=0;m<X.maxSectionCount;m++){x+=N[m].storageSizeBytes}const p=l.HeaderSizeBytes+X.maxSectionCount*l.SectionHeaderSizeBytes+x;if(!K){K=new ArrayBuffer(p);let m=0;for(let t=0;t<C.length;t++){const $J=C[t];new Uint8Array(K,m,$J.byteLength).set(new Uint8Array($J));m+=$J.byteLength}}F=l.HeaderSizeBytes+l.SectionHeaderSizeBytes*X.maxSectionCount;for(let m=0;m<=N.length&&m<X.maxSectionCount;m++){F+=N[m].storageSizeBytes}B()})};if(!O&&!q&&U&&k>=l.HeaderSizeBytes+l.SectionHeaderSizeBytes*X.maxSectionCount){f()}};const A=()=>{if(R)return;R=true;const f=()=>{R=false;if(q){if(V)return;L=k>=F;let j=k-D;if(j>K0.ProgressiveLoadSectionSize||L){D+=K0.ProgressiveLoadSectionSize;V=D>=F;if(!H)H=new l(K,false);const g=l.HeaderSizeBytes+l.SectionHeaderSizeBytes*X.maxSectionCount;let x=0;let p=0;let m=0;for(let GJ=0;GJ<X.maxSectionCount;GJ++){const NJ=N[GJ];const cJ=x+NJ.partiallyFilledBucketCount*4+NJ.bucketStorageSizeBytes*NJ.bucketCount;const AJ=g+cJ;if(D>=AJ){p++;const n=D-AJ;const QJ=l.CompressionLevels[X.compressionLevel];const WJ=QJ.SphericalHarmonicsDegrees[NJ.sphericalHarmonicsDegree];const MJ=WJ.BytesPerSplat;let VJ=Math.floor(n/MJ);VJ=Math.min(VJ,NJ.maxSplatCount);m+=VJ;H.updateLoadedCounts(p,m);H.updateSectionLoadedCounts(GJ,VJ)}else{break}x+=NJ.storageSizeBytes}Z(H,V);const t=D/F*100;const $J=t.toFixed(2)+"%";if(Q)Q(t,$J,w0.Downloading);if(V){M.resolve(H)}else{A()}}}};window.setTimeout(f,K0.ProgressiveLoadSectionDelayDuration)};const y=(f,j,g)=>{if(g){C.push(g);if(K){new Uint8Array(K,k,g.byteLength).set(new Uint8Array(g))}k+=g.byteLength}if($){I();_();A()}else{if(Q)Q(f,j,w0.Downloading)}};return iQ(J,y,!$,W).then((f)=>{if(Q)Q(0,"0%",w0.Processing);const j=$?M.promise:a6.loadFromFileData(f);return j.then((g)=>{if(Q)Q(100,"100%",w0.Done);return g})})}static loadFromFileData(J){return N8(()=>{a6.checkVersion(J);return new l(J)})}static downloadFile=function(){let J;return function(Q,$){const Z=new Blob([Q.bufferData],{type:"application/octet-stream"});if(!J){J=document.createElement("a");document.body.appendChild(J)}J.download=$;J.href=URL.createObjectURL(Z);J.click()}}()}var Z8={Splat:0,KSplat:1,Ply:2,Spz:3};var pZ=(J)=>{if(J.endsWith(".ply"))return Z8.Ply;else if(J.endsWith(".splat"))return Z8.Splat;else if(J.endsWith(".ksplat"))return Z8.KSplat;else if(J.endsWith(".spz"))return Z8.Spz;return null};var bO=Object.freeze({__proto__:null,sceneFormatFromPath:pZ});var qH={type:"change"};var yZ={type:"start"};var DH={type:"end"};var lQ=new p6;var OH=new _8;var w1=Math.cos(70*h6.DEG2RAD);class i6 extends S8{constructor(J,Q){super();this.object=J;this.domElement=Q;this.domElement.style.touchAction="none";this.enabled=true;this.target=new S;this.minDistance=0;this.maxDistance=Infinity;this.minZoom=0;this.maxZoom=Infinity;this.minPolarAngle=0;this.maxPolarAngle=Math.PI;this.minAzimuthAngle=-Infinity;this.maxAzimuthAngle=Infinity;this.enableDamping=false;this.dampingFactor=0.05;this.enableZoom=true;this.zoomSpeed=1;this.enableRotate=true;this.rotateSpeed=1;this.enablePan=true;this.panSpeed=1;this.screenSpacePanning=true;this.keyPanSpeed=7;this.zoomToCursor=false;this.autoRotate=false;this.autoRotateSpeed=2;this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"};this.mouseButtons={LEFT:Z9.ROTATE,MIDDLE:Z9.DOLLY,RIGHT:Z9.PAN};this.touches={ONE:W9.ROTATE,TWO:W9.DOLLY_PAN};this.target0=this.target.clone();this.position0=this.object.position.clone();this.zoom0=this.object.zoom;this._domElementKeyEvents=null;this.getPolarAngle=function(){return H.phi};this.getAzimuthalAngle=function(){return H.theta};this.getDistance=function(){return this.object.position.distanceTo(this.target)};this.listenToKeyEvents=function(b){b.addEventListener("keydown",P);this._domElementKeyEvents=b};this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",P);this._domElementKeyEvents=null};this.saveState=function(){$.target0.copy($.target);$.position0.copy($.object.position);$.zoom0=$.object.zoom};this.reset=function(){$.target.copy($.target0);$.object.position.copy($.position0);$.object.zoom=$.zoom0;this.clearDampedRotation();this.clearDampedPan();$.object.updateProjectionMatrix();$.dispatchEvent(qH);$.update();W=Z.NONE};this.clearDampedRotation=function(){Y.theta=0;Y.phi=0};this.clearDampedPan=function(){U.set(0,0,0)};this.update=function(){const b=new S;const KJ=new G0().setFromUnitVectors(J.up,new S(0,1,0));const e=KJ.clone().invert();const ZJ=new S;const OJ=new G0;const LJ=new S;const qJ=2*Math.PI;return function nJ(){KJ.setFromUnitVectors(J.up,new S(0,1,0));e.copy(KJ).invert();const h=$.object.position;b.copy(h).sub($.target);b.applyQuaternion(KJ);H.setFromVector3(b);if($.autoRotate&&W===Z.NONE){_(T())}if($.enableDamping){H.theta+=Y.theta*$.dampingFactor;H.phi+=Y.phi*$.dampingFactor}else{H.theta+=Y.theta;H.phi+=Y.phi}let XJ=$.minAzimuthAngle;let YJ=$.maxAzimuthAngle;if(isFinite(XJ)&&isFinite(YJ)){if(XJ<-Math.PI)XJ+=qJ;else if(XJ>Math.PI)XJ-=qJ;if(YJ<-Math.PI)YJ+=qJ;else if(YJ>Math.PI)YJ-=qJ;if(XJ<=YJ){H.theta=Math.max(XJ,Math.min(YJ,H.theta))}else{H.theta=H.theta>(XJ+YJ)/2?Math.max(XJ,H.theta):Math.min(YJ,H.theta)}}H.phi=Math.max($.minPolarAngle,Math.min($.maxPolarAngle,H.phi));H.makeSafe();if($.enableDamping===true){$.target.addScaledVector(U,$.dampingFactor)}else{$.target.add(U)}if($.zoomToCursor&&C||$.object.isOrthographicCamera){H.radius=m(H.radius)}else{H.radius=m(H.radius*X)}b.setFromSpherical(H);b.applyQuaternion(e);h.copy($.target).add(b);$.object.lookAt($.target);if($.enableDamping===true){Y.theta*=1-$.dampingFactor;Y.phi*=1-$.dampingFactor;U.multiplyScalar(1-$.dampingFactor)}else{Y.set(0,0,0);U.set(0,0,0)}let RJ=false;if($.zoomToCursor&&C){let HJ=null;if($.object.isPerspectiveCamera){const o=b.length();HJ=m(o*X);const BJ=o-HJ;$.object.position.addScaledVector(V,BJ);$.object.updateMatrixWorld()}else if($.object.isOrthographicCamera){const o=new S(R.x,R.y,0);o.unproject($.object);$.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/X));$.object.updateProjectionMatrix();RJ=true;const BJ=new S(R.x,R.y,0);BJ.unproject($.object);$.object.position.sub(BJ).add(o);$.object.updateMatrixWorld();HJ=b.length()}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");$.zoomToCursor=false}if(HJ!==null){if(this.screenSpacePanning){$.target.set(0,0,-1).transformDirection($.object.matrix).multiplyScalar(HJ).add($.object.position)}else{lQ.origin.copy($.object.position);lQ.direction.set(0,0,-1).transformDirection($.object.matrix);if(Math.abs($.object.up.dot(lQ.direction))<w1){J.lookAt($.target)}else{OH.setFromNormalAndCoplanarPoint($.object.up,$.target);lQ.intersectPlane(OH,$.target)}}}}else if($.object.isOrthographicCamera){$.object.zoom=Math.max($.minZoom,Math.min($.maxZoom,$.object.zoom/X));$.object.updateProjectionMatrix();RJ=true}X=1;C=false;if(RJ||ZJ.distanceToSquared($.object.position)>K||8*(1-OJ.dot($.object.quaternion))>K||LJ.distanceToSquared($.target)>0){$.dispatchEvent(qH);ZJ.copy($.object.position);OJ.copy($.object.quaternion);LJ.copy($.target);RJ=false;return true}return false}}();this.dispose=function(){$.domElement.removeEventListener("contextmenu",r);$.domElement.removeEventListener("pointerdown",v);$.domElement.removeEventListener("pointercancel",pJ);$.domElement.removeEventListener("wheel",H0);$.domElement.removeEventListener("pointermove",Q0);$.domElement.removeEventListener("pointerup",pJ);if($._domElementKeyEvents!==null){$._domElementKeyEvents.removeEventListener("keydown",P);$._domElementKeyEvents=null}};const $=this;const Z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let W=Z.NONE;const K=0.000001;const H=new l6;const Y=new l6;let X=1;const U=new S;const G=new _J;const E=new _J;const N=new _J;const q=new _J;const O=new _J;const k=new _J;const D=new _J;const F=new _J;const L=new _J;const V=new S;const R=new _J;let C=false;const M=[];const I={};function T(){return 2*Math.PI/60/60*$.autoRotateSpeed}function B(){return Math.pow(0.95,$.zoomSpeed)}function _(b){Y.theta-=b}function A(b){Y.phi-=b}const y=function(){const b=new S;return function KJ(e,ZJ){b.setFromMatrixColumn(ZJ,0);b.multiplyScalar(-e);U.add(b)}}();const f=function(){const b=new S;return function KJ(e,ZJ){if($.screenSpacePanning===true){b.setFromMatrixColumn(ZJ,1)}else{b.setFromMatrixColumn(ZJ,0);b.crossVectors($.object.up,b)}b.multiplyScalar(e);U.add(b)}}();const j=function(){const b=new S;return function KJ(e,ZJ){const OJ=$.domElement;if($.object.isPerspectiveCamera){const LJ=$.object.position;b.copy(LJ).sub($.target);let qJ=b.length();qJ*=Math.tan($.object.fov/2*Math.PI/180);y(2*e*qJ/OJ.clientHeight,$.object.matrix);f(2*ZJ*qJ/OJ.clientHeight,$.object.matrix)}else if($.object.isOrthographicCamera){y(e*($.object.right-$.object.left)/$.object.zoom/OJ.clientWidth,$.object.matrix);f(ZJ*($.object.top-$.object.bottom)/$.object.zoom/OJ.clientHeight,$.object.matrix)}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");$.enablePan=false}}}();function g(b){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera){X/=b}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");$.enableZoom=false}}function x(b){if($.object.isPerspectiveCamera||$.object.isOrthographicCamera){X*=b}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");$.enableZoom=false}}function p(b){if(!$.zoomToCursor){return}C=true;const KJ=$.domElement.getBoundingClientRect();const e=b.clientX-KJ.left;const ZJ=b.clientY-KJ.top;const OJ=KJ.width;const LJ=KJ.height;R.x=e/OJ*2-1;R.y=-(ZJ/LJ)*2+1;V.set(R.x,R.y,1).unproject(J).sub(J.position).normalize()}function m(b){return Math.max($.minDistance,Math.min($.maxDistance,b))}function t(b){G.set(b.clientX,b.clientY)}function $J(b){p(b);D.set(b.clientX,b.clientY)}function GJ(b){q.set(b.clientX,b.clientY)}function NJ(b){E.set(b.clientX,b.clientY);N.subVectors(E,G).multiplyScalar($.rotateSpeed);const KJ=$.domElement;_(2*Math.PI*N.x/KJ.clientHeight);A(2*Math.PI*N.y/KJ.clientHeight);G.copy(E);$.update()}function cJ(b){F.set(b.clientX,b.clientY);L.subVectors(F,D);if(L.y>0){g(B())}else if(L.y<0){x(B())}D.copy(F);$.update()}function AJ(b){O.set(b.clientX,b.clientY);k.subVectors(O,q).multiplyScalar($.panSpeed);j(k.x,k.y);q.copy(O);$.update()}function n(b){p(b);if(b.deltaY<0){x(B())}else if(b.deltaY>0){g(B())}$.update()}function QJ(b){let KJ=false;switch(b.code){case $.keys.UP:if(b.ctrlKey||b.metaKey||b.shiftKey){A(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight)}else{j(0,$.keyPanSpeed)}KJ=true;break;case $.keys.BOTTOM:if(b.ctrlKey||b.metaKey||b.shiftKey){A(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight)}else{j(0,-$.keyPanSpeed)}KJ=true;break;case $.keys.LEFT:if(b.ctrlKey||b.metaKey||b.shiftKey){_(2*Math.PI*$.rotateSpeed/$.domElement.clientHeight)}else{j($.keyPanSpeed,0)}KJ=true;break;case $.keys.RIGHT:if(b.ctrlKey||b.metaKey||b.shiftKey){_(-2*Math.PI*$.rotateSpeed/$.domElement.clientHeight)}else{j(-$.keyPanSpeed,0)}KJ=true;break}if(KJ){b.preventDefault();$.update()}}function WJ(){if(M.length===1){G.set(M[0].pageX,M[0].pageY)}else{const b=0.5*(M[0].pageX+M[1].pageX);const KJ=0.5*(M[0].pageY+M[1].pageY);G.set(b,KJ)}}function MJ(){if(M.length===1){q.set(M[0].pageX,M[0].pageY)}else{const b=0.5*(M[0].pageX+M[1].pageX);const KJ=0.5*(M[0].pageY+M[1].pageY);q.set(b,KJ)}}function VJ(){const b=M[0].pageX-M[1].pageX;const KJ=M[0].pageY-M[1].pageY;const e=Math.sqrt(b*b+KJ*KJ);D.set(0,e)}function CJ(){if($.enableZoom)VJ();if($.enablePan)MJ()}function lJ(){if($.enableZoom)VJ();if($.enableRotate)WJ()}function gJ(b){if(M.length==1){E.set(b.pageX,b.pageY)}else{const e=UJ(b);const ZJ=0.5*(b.pageX+e.x);const OJ=0.5*(b.pageY+e.y);E.set(ZJ,OJ)}N.subVectors(E,G).multiplyScalar($.rotateSpeed);const KJ=$.domElement;_(2*Math.PI*N.x/KJ.clientHeight);A(2*Math.PI*N.y/KJ.clientHeight);G.copy(E)}function yJ(b){if(M.length===1){O.set(b.pageX,b.pageY)}else{const KJ=UJ(b);const e=0.5*(b.pageX+KJ.x);const ZJ=0.5*(b.pageY+KJ.y);O.set(e,ZJ)}k.subVectors(O,q).multiplyScalar($.panSpeed);j(k.x,k.y);q.copy(O)}function jJ(b){const KJ=UJ(b);const e=b.pageX-KJ.x;const ZJ=b.pageY-KJ.y;const OJ=Math.sqrt(e*e+ZJ*ZJ);F.set(0,OJ);L.set(0,Math.pow(F.y/D.y,$.zoomSpeed));g(L.y);D.copy(F)}function PJ(b){if($.enableZoom)jJ(b);if($.enablePan)yJ(b)}function J0(b){if($.enableZoom)jJ(b);if($.enableRotate)gJ(b)}function v(b){if($.enabled===false)return;if(M.length===0){$.domElement.setPointerCapture(b.pointerId);$.domElement.addEventListener("pointermove",Q0);$.domElement.addEventListener("pointerup",pJ)}JJ(b);if(b.pointerType==="touch"){z(b)}else{q0(b)}}function Q0(b){if($.enabled===false)return;if(b.pointerType==="touch"){c(b)}else{TJ(b)}}function pJ(b){a(b);if(M.length===0){$.domElement.releasePointerCapture(b.pointerId);$.domElement.removeEventListener("pointermove",Q0);$.domElement.removeEventListener("pointerup",pJ)}$.dispatchEvent(DH);W=Z.NONE}function q0(b){let KJ;switch(b.button){case 0:KJ=$.mouseButtons.LEFT;break;case 1:KJ=$.mouseButtons.MIDDLE;break;case 2:KJ=$.mouseButtons.RIGHT;break;default:KJ=-1}switch(KJ){case Z9.DOLLY:if($.enableZoom===false)return;$J(b);W=Z.DOLLY;break;case Z9.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if($.enablePan===false)return;GJ(b);W=Z.PAN}else{if($.enableRotate===false)return;t(b);W=Z.ROTATE}break;case Z9.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if($.enableRotate===false)return;t(b);W=Z.ROTATE}else{if($.enablePan===false)return;GJ(b);W=Z.PAN}break;default:W=Z.NONE}if(W!==Z.NONE){$.dispatchEvent(yZ)}}function TJ(b){switch(W){case Z.ROTATE:if($.enableRotate===false)return;NJ(b);break;case Z.DOLLY:if($.enableZoom===false)return;cJ(b);break;case Z.PAN:if($.enablePan===false)return;AJ(b);break}}function H0(b){if($.enabled===false||$.enableZoom===false||W!==Z.NONE)return;b.preventDefault();$.dispatchEvent(yZ);n(b);$.dispatchEvent(DH)}function P(b){if($.enabled===false||$.enablePan===false)return;QJ(b)}function z(b){IJ(b);switch(M.length){case 1:switch($.touches.ONE){case W9.ROTATE:if($.enableRotate===false)return;WJ();W=Z.TOUCH_ROTATE;break;case W9.PAN:if($.enablePan===false)return;MJ();W=Z.TOUCH_PAN;break;default:W=Z.NONE}break;case 2:switch($.touches.TWO){case W9.DOLLY_PAN:if($.enableZoom===false&&$.enablePan===false)return;CJ();W=Z.TOUCH_DOLLY_PAN;break;case W9.DOLLY_ROTATE:if($.enableZoom===false&&$.enableRotate===false)return;lJ();W=Z.TOUCH_DOLLY_ROTATE;break;default:W=Z.NONE}break;default:W=Z.NONE}if(W!==Z.NONE){$.dispatchEvent(yZ)}}function c(b){IJ(b);switch(W){case Z.TOUCH_ROTATE:if($.enableRotate===false)return;gJ(b);$.update();break;case Z.TOUCH_PAN:if($.enablePan===false)return;yJ(b);$.update();break;case Z.TOUCH_DOLLY_PAN:if($.enableZoom===false&&$.enablePan===false)return;PJ(b);$.update();break;case Z.TOUCH_DOLLY_ROTATE:if($.enableZoom===false&&$.enableRotate===false)return;J0(b);$.update();break;default:W=Z.NONE}}function r(b){if($.enabled===false)return;b.preventDefault()}function JJ(b){M.push(b)}function a(b){delete I[b.pointerId];for(let KJ=0;KJ<M.length;KJ++){if(M[KJ].pointerId==b.pointerId){M.splice(KJ,1);return}}}function IJ(b){let KJ=I[b.pointerId];if(KJ===undefined){KJ=new _J;I[b.pointerId]=KJ}KJ.set(b.pageX,b.pageY)}function UJ(b){const KJ=b.pointerId===M[0].pointerId?M[1]:M[0];return I[KJ.pointerId]}$.domElement.addEventListener("contextmenu",r);$.domElement.addEventListener("pointerdown",v);$.domElement.addEventListener("pointercancel",pJ);$.domElement.addEventListener("wheel",H0,{passive:false});this.update()}}var C1=(J,Q,$,Z,W)=>{const K=performance.now();let H=J.style.display==="none"?0:parseFloat(J.style.opacity);if(isNaN(H))H=1;const Y=window.setInterval(()=>{const X=performance.now();const U=X-K;let G=Math.min(U/Z,1);if(G>0.999)G=1;let E;if(Q){E=(1-G)*H;if(E<0.0001)E=0}else{E=(1-H)*G+H}if(E>0){J.style.display=$;J.style.opacity=E}else{J.style.display="none"}if(G>=1){if(W)W();window.clearInterval(Y)}},16);return Y};var A1=500;class ZW{static elementIDGen=0;constructor(J,Q){this.taskIDGen=0;this.elementID=ZW.elementIDGen++;this.tasks=[];this.message=J||"Loading...";this.container=Q||document.body;this.spinnerContainerOuter=document.createElement("div");this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`;this.spinnerContainerOuter.style.display="none";this.spinnerContainerPrimary=document.createElement("div");this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`;this.spinnerPrimary=document.createElement("div");this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`);this.messageContainerPrimary=document.createElement("div");this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`);this.messageContainerPrimary.innerHTML=this.message;this.spinnerContainerMin=document.createElement("div");this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`;this.spinnerMin=document.createElement("div");this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`);this.messageContainerMin=document.createElement("div");this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`);this.messageContainerMin.innerHTML=this.message;this.spinnerContainerPrimary.appendChild(this.spinnerPrimary);this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary);this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary);this.spinnerContainerMin.appendChild(this.spinnerMin);this.spinnerContainerMin.appendChild(this.messageContainerMin);this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const $=document.createElement("style");$.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `;this.spinnerContainerOuter.appendChild($);this.container.appendChild(this.spinnerContainerOuter);this.setMinimized(false,true);this.fadeTransitions=[]}addTask(J){const Q={message:J,id:this.taskIDGen++};this.tasks.push(Q);this.update();return Q.id}removeTask(J){let Q=0;for(let $ of this.tasks){if($.id===J){this.tasks.splice(Q,1);break}Q++}this.update()}removeAllTasks(){this.tasks=[];this.update()}setMessageForTask(J,Q){for(let $ of this.tasks){if($.id===J){$.message=Q;break}}this.update()}update(){if(this.tasks.length>0){this.show();this.setMessage(this.tasks[this.tasks.length-1].message)}else{this.hide()}}show(){this.spinnerContainerOuter.style.display="block";this.visible=true}hide(){this.spinnerContainerOuter.style.display="none";this.visible=false}setContainer(J){if(this.container&&this.spinnerContainerOuter.parentElement===this.container){this.container.removeChild(this.spinnerContainerOuter)}if(J){this.container=J;this.container.appendChild(this.spinnerContainerOuter);this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1}}setMinimized(J,Q){const $=(Z,W,K,H,Y)=>{if(K){Z.style.display=W?H:"none"}else{this.fadeTransitions[Y]=C1(Z,!W,H,A1,()=>{this.fadeTransitions[Y]=null})}};$(this.spinnerContainerPrimary,!J,Q,"block",0);$(this.spinnerContainerMin,J,Q,"flex",1);this.minimized=J}setMessage(J){this.messageContainerPrimary.innerHTML=J;this.messageContainerMin.innerHTML=J}}class SH{constructor(J){this.idGen=0;this.tasks=[];this.container=J||document.body;this.progressBarContainerOuter=document.createElement("div");this.progressBarContainerOuter.className="progressBarOuterContainer";this.progressBarContainerOuter.style.display="none";this.progressBarBox=document.createElement("div");this.progressBarBox.className="progressBarBox";this.progressBarBackground=document.createElement("div");this.progressBarBackground.className="progressBarBackground";this.progressBar=document.createElement("div");this.progressBar.className="progressBar";this.progressBarBackground.appendChild(this.progressBar);this.progressBarBox.appendChild(this.progressBarBackground);this.progressBarContainerOuter.appendChild(this.progressBarBox);const Q=document.createElement("style");Q.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `;this.progressBarContainerOuter.appendChild(Q);this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(J){this.progressBar.style.width=J+"%"}setContainer(J){if(this.container&&this.progressBarContainerOuter.parentElement===this.container){this.container.removeChild(this.progressBarContainerOuter)}if(J){this.container=J;this.container.appendChild(this.progressBarContainerOuter);this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1}}}class jH{constructor(J){this.container=J||document.body;this.infoCells={};const Q=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const $=document.createElement("style");$.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `;this.infoPanelContainer.append($);this.infoPanel=document.createElement("div");this.infoPanel.className="infoPanel";const Z=document.createElement("div");Z.style.display="table";for(let W of Q){const K=document.createElement("div");K.style.display="table-row";K.className="info-panel-row";const H=document.createElement("div");H.style.display="table-cell";H.innerHTML=`${W[0]}: `;H.classList.add("info-panel-cell","label-cell");const Y=document.createElement("div");Y.style.display="table-cell";Y.style.width="10px";Y.innerHTML=" ";Y.className="info-panel-cell";const X=document.createElement("div");X.style.display="table-cell";X.innerHTML="";X.className="info-panel-cell";this.infoCells[W[1]]=X;K.appendChild(H);K.appendChild(Y);K.appendChild(X);Z.appendChild(K)}this.infoPanel.appendChild(Z);this.infoPanelContainer.append(this.infoPanel);this.infoPanelContainer.style.display="none";this.container.appendChild(this.infoPanelContainer);this.visible=false}update=function(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,q){const O=`${Q.x.toFixed(5)}, ${Q.y.toFixed(5)}, ${Q.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==O){this.infoCells.cameraPosition.innerHTML=O}if($){const D=$;const F=`${D.x.toFixed(5)}, ${D.y.toFixed(5)}, ${D.z.toFixed(5)}`;if(this.infoCells.cameraLookAt.innerHTML!==F){this.infoCells.cameraLookAt.innerHTML=F}}const k=`${Z.x.toFixed(5)}, ${Z.y.toFixed(5)}, ${Z.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==k){this.infoCells.cameraUp.innerHTML=k}this.infoCells.orthographicCamera.innerHTML=W?"Orthographic":"Perspective";if(K){const D=K;const F=`${D.x.toFixed(5)}, ${D.y.toFixed(5)}, ${D.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=F}else{this.infoCells.cursorPosition.innerHTML="N/A"}this.infoCells.fps.innerHTML=H;this.infoCells.renderWindow.innerHTML=`${J.x} x ${J.y}`;this.infoCells.renderSplatCount.innerHTML=`${X} splats out of ${Y} (${U.toFixed(2)}%)`;this.infoCells.sortTime.innerHTML=`${G.toFixed(3)} ms`;this.infoCells.focalAdjustment.innerHTML=`${E.toFixed(3)}`;this.infoCells.splatScale.innerHTML=`${N.toFixed(3)}`;this.infoCells.pointCloudMode.innerHTML=`${q}`};setContainer(J){if(this.container&&this.infoPanelContainer.parentElement===this.container){this.container.removeChild(this.infoPanelContainer)}if(J){this.container=J;this.container.appendChild(this.infoPanelContainer);this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1}}show(){this.infoPanelContainer.style.display="block";this.visible=true}hide(){this.infoPanelContainer.style.display="none";this.visible=false}}var FH=new S;class yH extends I0{constructor(J=new S(0,0,1),Q=new S(0,0,0),$=1,Z=0.1,W=16776960,K=$*0.2,H=K*0.2){super();this.type="ArrowHelper";const Y=new A9(Z,Z,$,32);Y.translate(0,$/2,0);const X=new A9(0,H,K,32);X.translate(0,$,0);this.position.copy(Q);this.line=new M0(Y,new w8({color:W,toneMapped:false}));this.line.matrixAutoUpdate=false;this.add(this.line);this.cone=new M0(X,new w8({color:W,toneMapped:false}));this.cone.matrixAutoUpdate=false;this.add(this.cone);this.setDirection(J)}setDirection(J){if(J.y>0.99999){this.quaternion.set(0,0,0,1)}else if(J.y<-0.99999){this.quaternion.set(1,0,0,0)}else{FH.set(J.z,0,-J.x).normalize();const Q=Math.acos(J.y);this.quaternion.setFromAxisAngle(FH,Q)}}setColor(J){this.line.material.color.set(J);this.cone.material.color.set(J)}copy(J){super.copy(J,false);this.line.copy(J.line);this.cone.copy(J.cone);return this}dispose(){this.line.geometry.dispose();this.line.material.dispose();this.cone.geometry.dispose();this.cone.material.dispose()}}class r6{constructor(J){this.threeScene=J;this.splatRenderTarget=null;this.renderTargetCopyQuad=null;this.renderTargetCopyCamera=null;this.meshCursor=null;this.focusMarker=null;this.controlPlane=null;this.debugRoot=null;this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(J,Q){this.destroySplatRendertarget();this.splatRenderTarget=new $8(J,Q,{format:h0,stencilBuffer:false,depthBuffer:true});this.splatRenderTarget.depthTexture=new n8(J,Q);this.splatRenderTarget.depthTexture.format=k8;this.splatRenderTarget.depthTexture.type=f0}destroySplatRendertarget(){if(this.splatRenderTarget){this.splatRenderTarget=null}}setupRenderTargetCopyObjects(){const J={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}};const Q=new y0({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:J,depthWrite:false,depthTest:false,transparent:true,blending:C7,blendSrc:z9,blendSrcAlpha:z9,blendDst:_9,blendDstAlpha:_9});Q.extensions.fragDepth=true;this.renderTargetCopyQuad=new M0(new E9(2,2),Q);this.renderTargetCopyCamera=new j9(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){if(this.renderTargetCopyQuad){D6(this.renderTargetCopyQuad);this.renderTargetCopyQuad=null}}setupMeshCursor(){if(!this.meshCursor){const J=new d6(0.5,1.5,32);const Q=new w8({color:16777215});const $=new M0(J,Q);$.rotation.set(0,0,Math.PI);$.position.set(0,1,0);const Z=new M0(J,Q);Z.position.set(0,-1,0);const W=new M0(J,Q);W.rotation.set(0,0,Math.PI/2);W.position.set(1,0,0);const K=new M0(J,Q);K.rotation.set(0,0,-Math.PI/2);K.position.set(-1,0,0);this.meshCursor=new I0;this.meshCursor.add($);this.meshCursor.add(Z);this.meshCursor.add(W);this.meshCursor.add(K);this.meshCursor.scale.set(0.1,0.1,0.1);this.threeScene.add(this.meshCursor);this.meshCursor.visible=false}}destroyMeshCursor(){if(this.meshCursor){D6(this.meshCursor);this.threeScene.remove(this.meshCursor);this.meshCursor=null}}setMeshCursorVisibility(J){this.meshCursor.visible=J}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(J){this.meshCursor.position.copy(J)}positionAndOrientMeshCursor(J,Q){this.meshCursor.position.copy(J);this.meshCursor.up.copy(Q.up);this.meshCursor.lookAt(Q.position)}setupFocusMarker(){if(!this.focusMarker){const J=new P9(0.5,32,32);const Q=r6.buildFocusMarkerMaterial();Q.depthTest=false;Q.depthWrite=false;Q.transparent=true;this.focusMarker=new M0(J,Q)}}destroyFocusMarker(){if(this.focusMarker){D6(this.focusMarker);this.focusMarker=null}}updateFocusMarker=function(){const J=new S;const Q=new xJ;const $=new S;return function(Z,W,K){Q.copy(W.matrixWorld).invert();J.copy(Z).applyMatrix4(Q);J.normalize().multiplyScalar(10);J.applyMatrix4(W.matrixWorld);$.copy(W.position).sub(Z);const H=$.length();this.focusMarker.position.copy(Z);this.focusMarker.scale.set(H,H,H);this.focusMarker.material.uniforms.realFocusPosition.value.copy(Z);this.focusMarker.material.uniforms.viewport.value.copy(K);this.focusMarker.material.uniformsNeedUpdate=true}}();setFocusMarkerVisibility(J){this.focusMarker.visible=J}setFocusMarkerOpacity(J){this.focusMarker.material.uniforms.opacity.value=J;this.focusMarker.material.uniformsNeedUpdate=true}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const J=new E9(1,1);J.rotateX(-Math.PI/2);const Q=new w8({color:16777215});Q.transparent=true;Q.opacity=0.6;Q.depthTest=false;Q.depthWrite=false;Q.side=J8;const $=new M0(J,Q);const Z=new S(0,1,0);Z.normalize();const W=new S(0,0,0);const K=0.5;const H=0.01;const Y=56576;const X=new yH(Z,W,K,H,Y,0.1,0.03);this.controlPlane=new I0;this.controlPlane.add($);this.controlPlane.add(X)}}destroyControlPlane(){if(this.controlPlane){D6(this.controlPlane);this.controlPlane=null}}setControlPlaneVisibility(J){this.controlPlane.visible=J}positionAndOrientControlPlane=function(){const J=new G0;const Q=new S(0,1,0);return function($,Z){J.setFromUnitVectors(Q,Z);this.controlPlane.position.copy($);this.controlPlane.quaternion.copy(J)}}();addDebugMeshes(){this.debugRoot=this.createDebugMeshes();this.secondaryDebugRoot=this.createSecondaryDebugMeshes();this.threeScene.add(this.debugRoot);this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let J of[this.debugRoot,this.secondaryDebugRoot]){if(J){D6(J);this.threeScene.remove(J)}}this.debugRoot=null;this.secondaryDebugRoot=null}createDebugMeshes(J){const Q=new P9(1,32,32);const $=new I0;const Z=(W,K)=>{let H=new M0(Q,r6.buildDebugMaterial(W));H.renderOrder=J;$.add(H);H.position.fromArray(K)};Z(16711680,[-50,0,0]);Z(16711680,[50,0,0]);Z(65280,[0,0,-50]);Z(65280,[0,0,50]);Z(16755200,[5,0,5]);return $}createSecondaryDebugMeshes(J){const Q=new G9(3,3,3);const $=new I0;let Z=12303291;const W=(H)=>{let Y=new M0(Q,r6.buildDebugMaterial(Z));Y.renderOrder=J;$.add(Y);Y.position.fromArray(H)};let K=10;W([-K,0,-K]);W([-K,0,K]);W([K,0,-K]);W([K,0,K]);return $}static buildDebugMaterial(J){const Q=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `;const $=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `;const Z={color:{type:"v3",value:new aJ(J)}};const W=new y0({uniforms:Z,vertexShader:Q,fragmentShader:$,transparent:false,depthTest:true,depthWrite:true,side:F8});W.extensions.fragDepth=true;return W}static buildFocusMarkerMaterial(J){const Q=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `;const $=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `;const Z={color:{type:"v3",value:new aJ(J)},realFocusPosition:{type:"v3",value:new S},viewport:{type:"v2",value:new _J},opacity:{value:0}};const W=new y0({uniforms:Z,vertexShader:Q,fragmentShader:$,transparent:true,depthTest:false,depthWrite:false,side:F8});return W}dispose(){this.destroyMeshCursor();this.destroyFocusMarker();this.destroyDebugMeshes();this.destroyControlPlane();this.destroyRenderTargetCopyObjects();this.destroySplatRendertarget()}}var P1=new S(1,0,0);var T1=new S(0,1,0);var S1=new S(0,0,1);class cQ{constructor(J=new S,Q=new S){this.origin=new S;this.direction=new S;this.setParameters(J,Q)}setParameters(J,Q){this.origin.copy(J);this.direction.copy(Q).normalize()}boxContainsPoint(J,Q,$){return Q.x<J.min.x-$||Q.x>J.max.x+$||Q.y<J.min.y-$||Q.y>J.max.y+$||Q.z<J.min.z-$||Q.z>J.max.z+$?false:true}intersectBox=function(){const J=new S;const Q=[];const $=[];const Z=[];return function(W,K){$[0]=this.origin.x;$[1]=this.origin.y;$[2]=this.origin.z;Z[0]=this.direction.x;Z[1]=this.direction.y;Z[2]=this.direction.z;if(this.boxContainsPoint(W,this.origin,0.0001)){if(K){K.origin.copy(this.origin);K.normal.set(0,0,0);K.distance=-1}return true}for(let H=0;H<3;H++){if(Z[H]==0)continue;const Y=H==0?P1:H==1?T1:S1;const X=Z[H]<0?W.max:W.min;let U=-Math.sign(Z[H]);Q[0]=H==0?X.x:H==1?X.y:X.z;let G=Q[0]-$[H];if(G*U<0){const E=(H+1)%3;const N=(H+2)%3;Q[2]=Z[E]/Z[H]*G+$[E];Q[1]=Z[N]/Z[H]*G+$[N];J.set(Q[H],Q[N],Q[E]);if(this.boxContainsPoint(W,J,0.0001)){if(K){K.origin.copy(J);K.normal.copy(Y).multiplyScalar(U);K.distance=J.sub(this.origin).length()}return true}}}return false}}();intersectSphere=function(){const J=new S;return function(Q,$,Z){J.copy(Q).sub(this.origin);const W=J.dot(this.direction);const K=W*W;const H=J.dot(J);const Y=H-K;const X=$*$;if(Y>X)return false;const U=Math.sqrt(X-Y);const G=W-U;const E=W+U;if(E<0)return false;let N=G<0?E:G;if(Z){Z.origin.copy(this.origin).addScaledVector(this.direction,N);Z.normal.copy(Z.origin).sub(Q).normalize();Z.distance=N}return true}}()}class WW{constructor(){this.origin=new S;this.normal=new S;this.distance=0;this.splatIndex=0}set(J,Q,$,Z){this.origin.copy(J);this.normal.copy(Q);this.distance=$;this.splatIndex=Z}clone(){const J=new WW;J.origin.copy(this.origin);J.normal.copy(this.normal);J.distance=this.distance;J.splatIndex=this.splatIndex;return J}}var i8={ThreeD:0,TwoD:1};class vH{constructor(J,Q,$=false){this.ray=new cQ(J,Q);this.raycastAgainstTrueSplatEllipsoid=$}setFromCameraAndScreenPosition=function(){const J=new _J;return function(Q,$,Z){J.x=$.x/Z.x*2-1;J.y=(Z.y-$.y)/Z.y*2-1;if(Q.isPerspectiveCamera){this.ray.origin.setFromMatrixPosition(Q.matrixWorld);this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize();this.camera=Q}else if(Q.isOrthographicCamera){this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q);this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld);this.camera=Q}else{throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}}();intersectSplatMesh=function(){const J=new xJ;const Q=new xJ;const $=new xJ;const Z=new cQ;const W=new S;return function(K,H=[]){const Y=K.getSplatTree();if(!Y)return;for(let X=0;X<Y.subTrees.length;X++){const U=Y.subTrees[X];Q.copy(K.matrixWorld);if(K.dynamicMode){K.getSceneTransform(X,$);Q.multiply($)}J.copy(Q).invert();Z.origin.copy(this.ray.origin).applyMatrix4(J);Z.direction.copy(this.ray.origin).add(this.ray.direction);Z.direction.applyMatrix4(J).sub(Z.origin).normalize();const G=[];if(U.rootNode){this.castRayAtSplatTreeNode(Z,Y,U.rootNode,G)}G.forEach((E)=>{E.origin.applyMatrix4(Q);E.normal.applyMatrix4(Q).normalize();E.distance=W.copy(E.origin).sub(this.ray.origin).length()});H.push(...G)}H.sort((X,U)=>{if(X.distance>U.distance)return 1;else return-1});return H}}();castRayAtSplatTreeNode=function(){const J=new k0;const Q=new S;const $=new S;const Z=new G0;const W=new WW;const K=0.0000001;const H=new S(0,0,0);const Y=new xJ;const X=new xJ;const U=new xJ;const G=new xJ;const E=new xJ;const N=new cQ;return function(q,O,k,D=[]){if(!q.intersectBox(k.boundingBox)){return}if(k.data&&k.data.indexes&&k.data.indexes.length>0){for(let F=0;F<k.data.indexes.length;F++){const L=k.data.indexes[F];const V=O.splatMesh.getSceneIndexForSplat(L);const R=O.splatMesh.getScene(V);if(!R.visible)continue;O.splatMesh.getSplatColor(L,J);O.splatMesh.getSplatCenter(L,Q);O.splatMesh.getSplatScaleAndRotation(L,$,Z);if($.x<=K||$.y<=K||O.splatMesh.splatRenderMode===i8.ThreeD&&$.z<=K){continue}if(!this.raycastAgainstTrueSplatEllipsoid){let C=$.x+$.y;let M=2;if(O.splatMesh.splatRenderMode===i8.ThreeD){C+=$.z;M=3}C=C/M;if(q.intersectSphere(Q,C,W)){const I=W.clone();I.splatIndex=L;D.push(I)}}else{X.makeScale($.x,$.y,$.z);U.makeRotationFromQuaternion(Z);const C=Math.log10(J.w)*2;Y.makeScale(C,C,C);E.copy(Y).multiply(U).multiply(X);G.copy(E).invert();N.origin.copy(q.origin).sub(Q).applyMatrix4(G);N.direction.copy(q.origin).add(q.direction).sub(Q);N.direction.applyMatrix4(G).sub(N.origin).normalize();if(N.intersectSphere(H,1,W)){const M=W.clone();M.splatIndex=L;M.origin.applyMatrix4(E).add(Q);D.push(M)}}}}if(k.children&&k.children.length>0){for(let F of k.children){this.castRayAtSplatTreeNode(q,O,F,D)}}return D}}()}class h9{static buildVertexShaderBase(J=false,Q=false,$=0,Z=""){let W=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;if(Q){W+=`
            uniform float sceneOpacity[${K0.MaxScenes}];
            uniform int sceneVisibility[${K0.MaxScenes}];
        `}if(J){W+=`
            uniform highp mat4 transforms[${K0.MaxScenes}];
        `}W+=`
        ${Z}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${K0.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${K0.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `;if(Q){W+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `}if(J){W+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `}else{W+=`mat4 transformModelViewMatrix = modelViewMatrix;`}W+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `;if($>=1){W+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `;if(J){W+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `}else{W+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `}W+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `;if($>=2){W+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `}if($===1){W+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `}else if($===2){W+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `}W+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `;if($>=2){W+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `;if($===2){W+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `}W+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `}W+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `}return W}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(J=false,Q=false,$=0,Z=1,W=false){const K={sceneCenter:{type:"v3",value:new S},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new _J},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new _J},basisViewport:{type:"v2",value:new _J},debugColor:{type:"v3",value:new aJ},centersColorsTextureSize:{type:"v2",value:new _J(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:$},sphericalHarmonicsTextureSize:{type:"v2",value:new _J(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:Z},pointCloudModeEnabled:{type:"i",value:W?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new _J(1024,1024)},sceneCount:{type:"i",value:1}};for(let H=0;H<K0.MaxScenes;H++){K.sphericalHarmonics8BitCompressionRangeMin.value.push(-K0.SphericalHarmonics8BitCompressionRange/2);K.sphericalHarmonics8BitCompressionRangeMax.value.push(K0.SphericalHarmonics8BitCompressionRange/2)}if(Q){const H=[];for(let X=0;X<K0.MaxScenes;X++){H.push(1)}K["sceneOpacity"]={type:"f",value:H};const Y=[];for(let X=0;X<K0.MaxScenes;X++){Y.push(1)}K["sceneVisibility"]={type:"i",value:Y}}if(J){const H=[];for(let Y=0;Y<K0.MaxScenes;Y++){H.push(new xJ)}K["transforms"]={type:"mat4",value:H}}return K}}class nQ{static build(J=false,Q=false,$=false,Z=2048,W=1,K=false,H=0,Y=0.3){const X=`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `;let U=h9.buildVertexShaderBase(J,Q,H,X);U+=nQ.buildVertexShaderProjection($,Q,Z,Y);const G=nQ.buildFragmentShader();const E=h9.getUniforms(J,Q,H,W,K);E["covariancesTextureSize"]={type:"v2",value:new _J(1024,1024)};E["covariancesTexture"]={type:"t",value:null};E["covariancesTextureHalfFloat"]={type:"t",value:null};E["covariancesAreHalfFloat"]={type:"i",value:0};const N=new y0({uniforms:E,vertexShader:U,fragmentShader:G,transparent:true,alphaTest:1,blending:A8,depthTest:true,depthWrite:false,side:J8});return N}static buildVertexShaderProjection(J,Q,$,Z){let W=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;if(J){W+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${Z};
                cov2Dm[1][1] += ${Z};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `}else{W+=`
                cov2Dm[0][0] += ${Z};
                cov2Dm[1][1] += ${Z};
            `}W+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt($)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt($)}.0);
            `;if(Q){W+=`
                vColor.a *= splatOpacityFromScene;
            `}W+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `;W+=h9.getVertexShaderFadeIn();W+=`}`;return W}static buildFragmentShader(){let J=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;J+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `;return J}}class sQ{static build(J=false,Q=false,$=1,Z=false,W=0){const K=`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `;let H=h9.buildVertexShaderBase(J,Q,W,K);H+=sQ.buildVertexShaderProjection();const Y=sQ.buildFragmentShader();const X=h9.getUniforms(J,Q,W,$,Z);X["scaleRotationsTexture"]={type:"t",value:null};X["scaleRotationsTextureSize"]={type:"v2",value:new _J(1024,1024)};const U=new y0({uniforms:X,vertexShader:H,fragmentShader:Y,transparent:true,alphaTest:1,blending:A8,depthTest:true,depthWrite:false,side:J8});return U}static buildVertexShaderProjection(){let J=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;const Q=`
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        `;const $=false;if($){J+=Q}else{J+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    ${Q}
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `}J+=h9.getVertexShaderFadeIn();J+=`}`;return J}static buildFragmentShader(){let J=`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `;return J}}class bH{static build(J){const Q=new u0;Q.setIndex([0,1,2,0,2,3]);const $=new Float32Array(4*3);const Z=new i0($,3);Q.setAttribute("position",Z);Z.setXYZ(0,-1,-1,0);Z.setXYZ(1,-1,1,0);Z.setXYZ(2,1,1,0);Z.setXYZ(3,1,-1,0);Z.needsUpdate=true;const W=new vQ().copy(Q);const K=new Uint32Array(J);const H=new TQ(K,1,false);H.setUsage(u$);W.setAttribute("splatIndex",H);W.instanceCount=0;return W}}class fH extends I0{constructor(J,Q=new S,$=new G0,Z=new S(1,1,1),W=1,K=1,H=true){super();this.splatBuffer=J;this.position.copy(Q);this.quaternion.copy($);this.scale.copy(Z);this.transform=new xJ;this.minimumAlpha=W;this.opacity=K;this.visible=H}copyTransformData(J){this.position.copy(J.position);this.quaternion.copy(J.quaternion);this.scale.copy(J.scale);this.transform.copy(J.transform)}updateTransform(J){if(J){if(this.matrixWorldAutoUpdate)this.updateWorldMatrix(true,false);this.transform.copy(this.matrixWorld)}else{if(this.matrixAutoUpdate)this.updateMatrix();this.transform.copy(this.matrix)}}}class KW{static idGen=0;constructor(J,Q,$,Z){this.min=new S().copy(J);this.max=new S().copy(Q);this.boundingBox=new G8(this.min,this.max);this.center=new S().copy(this.max).sub(this.min).multiplyScalar(0.5).add(this.min);this.depth=$;this.children=[];this.data=null;this.id=Z||KW.idGen++}}class t6{constructor(J,Q){this.maxDepth=J;this.maxCentersPerNode=Q;this.sceneDimensions=new S;this.sceneMin=new S;this.sceneMax=new S;this.rootNode=null;this.nodesWithIndexes=[];this.splatMesh=null}static convertWorkerSubTreeNode(J){const Q=new S().fromArray(J.min);const $=new S().fromArray(J.max);const Z=new KW(Q,$,J.depth,J.id);if(J.data.indexes){Z.data={indexes:[]};for(let W of J.data.indexes){Z.data.indexes.push(W)}}if(J.children){for(let W of J.children){Z.children.push(t6.convertWorkerSubTreeNode(W))}}return Z}static convertWorkerSubTree(J,Q){const $=new t6(J.maxDepth,J.maxCentersPerNode);$.sceneMin=new S().fromArray(J.sceneMin);$.sceneMax=new S().fromArray(J.sceneMax);$.splatMesh=Q;$.rootNode=t6.convertWorkerSubTreeNode(J.rootNode);const Z=(W,K)=>{if(W.children.length===0)K(W);for(let H of W.children){Z(H,K)}};$.nodesWithIndexes=[];Z($.rootNode,(W)=>{if(W.data&&W.data.indexes&&W.data.indexes.length>0){$.nodesWithIndexes.push(W)}});return $}}function j1(J){let Q=0;class ${constructor(Y,X){this.min=[Y[0],Y[1],Y[2]];this.max=[X[0],X[1],X[2]]}containsPoint(Y){return Y[0]>=this.min[0]&&Y[0]<=this.max[0]&&Y[1]>=this.min[1]&&Y[1]<=this.max[1]&&Y[2]>=this.min[2]&&Y[2]<=this.max[2]}}class Z{constructor(Y,X){this.maxDepth=Y;this.maxCentersPerNode=X;this.sceneDimensions=[];this.sceneMin=[];this.sceneMax=[];this.rootNode=null;this.addedIndexes={};this.nodesWithIndexes=[];this.splatMesh=null;this.disposed=false}}class W{constructor(Y,X,U,G){this.min=[Y[0],Y[1],Y[2]];this.max=[X[0],X[1],X[2]];this.center=[(X[0]-Y[0])*0.5+Y[0],(X[1]-Y[1])*0.5+Y[1],(X[2]-Y[2])*0.5+Y[2]];this.depth=U;this.children=[];this.data=null;this.id=G||Q++}}processSplatTreeNode=function(Y,X,U,G){const E=X.data.indexes.length;if(E<Y.maxCentersPerNode||X.depth>Y.maxDepth){const V=[];for(let R=0;R<X.data.indexes.length;R++){if(!Y.addedIndexes[X.data.indexes[R]]){V.push(X.data.indexes[R]);Y.addedIndexes[X.data.indexes[R]]=true}}X.data.indexes=V;X.data.indexes.sort((R,C)=>{if(R>C)return 1;else return-1});Y.nodesWithIndexes.push(X);return}const N=[X.max[0]-X.min[0],X.max[1]-X.min[1],X.max[2]-X.min[2]];const q=[N[0]*0.5,N[1]*0.5,N[2]*0.5];const O=[X.min[0]+q[0],X.min[1]+q[1],X.min[2]+q[2]];const k=[new $([O[0]-q[0],O[1],O[2]-q[2]],[O[0],O[1]+q[1],O[2]]),new $([O[0],O[1],O[2]-q[2]],[O[0]+q[0],O[1]+q[1],O[2]]),new $([O[0],O[1],O[2]],[O[0]+q[0],O[1]+q[1],O[2]+q[2]]),new $([O[0]-q[0],O[1],O[2]],[O[0],O[1]+q[1],O[2]+q[2]]),new $([O[0]-q[0],O[1]-q[1],O[2]-q[2]],[O[0],O[1],O[2]]),new $([O[0],O[1]-q[1],O[2]-q[2]],[O[0]+q[0],O[1],O[2]]),new $([O[0],O[1]-q[1],O[2]],[O[0]+q[0],O[1],O[2]+q[2]]),new $([O[0]-q[0],O[1]-q[1],O[2]],[O[0],O[1],O[2]+q[2]])];const D=[];const F=[];for(let V=0;V<k.length;V++){D[V]=0;F[V]=[]}const L=[0,0,0];for(let V=0;V<E;V++){const R=X.data.indexes[V];const C=U[R];L[0]=G[C];L[1]=G[C+1];L[2]=G[C+2];for(let M=0;M<k.length;M++){if(k[M].containsPoint(L)){D[M]++;F[M].push(R)}}}for(let V=0;V<k.length;V++){const R=new W(k[V].min,k[V].max,X.depth+1);R.data={indexes:F[V]};X.children.push(R)}X.data={};for(let V of X.children){processSplatTreeNode(Y,V,U,G)}return};const K=(Y,X,U)=>{const G=[0,0,0];const E=[0,0,0];const N=[];const q=Math.floor(Y.length/4);for(let k=0;k<q;k++){const D=k*4;const F=Y[D];const L=Y[D+1];const V=Y[D+2];const R=Math.round(Y[D+3]);if(k===0||F<G[0])G[0]=F;if(k===0||F>E[0])E[0]=F;if(k===0||L<G[1])G[1]=L;if(k===0||L>E[1])E[1]=L;if(k===0||V<G[2])G[2]=V;if(k===0||V>E[2])E[2]=V;N.push(R)}const O=new Z(X,U);O.sceneMin=G;O.sceneMax=E;O.rootNode=new W(O.sceneMin,O.sceneMax,0);O.rootNode.data={indexes:N};return O};function H(Y,X,U){const G=[];for(let N of Y){const q=Math.floor(N.length/4);for(let O=0;O<q;O++){const k=O*4;const D=Math.round(N[k+3]);G[D]=k}}const E=[];for(let N of Y){const q=K(N,X,U);E.push(q);processSplatTreeNode(q,q.rootNode,G,N)}J.postMessage({subTrees:E})}J.onmessage=(Y)=>{if(Y.data.process){H(Y.data.process.centers,Y.data.process.maxDepth,Y.data.process.maxCentersPerNode)}}}function y1(J,Q,$,Z,W){J.postMessage({process:{centers:Q,maxDepth:Z,maxCentersPerNode:W}},$)}function v1(){const J=new Worker(URL.createObjectURL(new Blob(["(",j1.toString(),")(self)"],{type:"application/javascript"})));return J}class hH{constructor(J,Q){this.maxDepth=J;this.maxCentersPerNode=Q;this.subTrees=[];this.splatMesh=null}dispose(){this.diposeSplatTreeWorker();this.disposed=true}diposeSplatTreeWorker(){if(this.splatTreeWorker)this.splatTreeWorker.terminate();this.splatTreeWorker=null}processSplatMesh=function(J,Q=()=>true,$,Z){if(!this.splatTreeWorker)this.splatTreeWorker=v1();this.splatMesh=J;this.subTrees=[];const W=new S;const K=(H,Y)=>{const X=new Float32Array(Y*4);let U=0;for(let G=0;G<Y;G++){const E=G+H;if(Q(E)){J.getSplatCenter(E,W);const N=U*4;X[N]=W.x;X[N+1]=W.y;X[N+2]=W.z;X[N+3]=E;U++}}return X};return new Promise((H)=>{const Y=()=>{if(this.disposed){this.diposeSplatTreeWorker();H();return true}return false};if($)$(false);N8(()=>{if(Y())return;const X=[];if(J.dynamicMode){let U=0;for(let G=0;G<J.scenes.length;G++){const E=J.getScene(G);const N=E.splatBuffer.getSplatCount();const q=K(U,N);X.push(q);U+=N}}else{const U=K(0,J.getSplatCount());X.push(U)}this.splatTreeWorker.onmessage=(U)=>{if(Y())return;if(U.data.subTrees){if(Z)Z(false);N8(()=>{if(Y())return;for(let G of U.data.subTrees){const E=t6.convertWorkerSubTree(G,J);this.subTrees.push(E)}this.diposeSplatTreeWorker();if(Z)Z(true);N8(()=>{H()})})}};N8(()=>{if(Y())return;if($)$(true);const U=X.map((G)=>G.buffer);y1(this.splatTreeWorker,X,U,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let J=0;this.visitLeaves(()=>{J++});return J}visitLeaves(J){const Q=($,Z)=>{if($.children.length===0)Z($);for(let W of $.children){Q(W,Z)}};for(let $ of this.subTrees){Q($.rootNode,J)}}}function b1(J){const Q={};function $(Z){if(Q[Z]!==undefined){return Q[Z]}let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}Q[Z]=W;return W}return{has:function(Z){return $(Z)!==null},init:function(Z){if(Z.isWebGL2){$("EXT_color_buffer_float");$("WEBGL_clip_cull_distance")}else{$("WEBGL_depth_texture");$("OES_texture_float");$("OES_texture_half_float");$("OES_texture_half_float_linear");$("OES_standard_derivatives");$("OES_element_index_uint");$("OES_vertex_array_object");$("ANGLE_instanced_arrays")}$("OES_texture_float_linear");$("EXT_color_buffer_half_float");$("WEBGL_multisampled_render_to_texture")},get:function(Z){const W=$(Z);if(W===null){console.warn("THREE.WebGLRenderer: "+Z+" extension not supported.")}return W}}}function f1(J,Q,$){let Z;function W(){if(Z!==undefined)return Z;if(Q.has("EXT_texture_filter_anisotropic")===true){const I=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else{Z=0}return Z}function K(I){if(I==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0){return"highp"}I="mediump"}if(I==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0){return"mediump"}}return"lowp"}const H=typeof WebGL2RenderingContext!=="undefined"&&J.constructor.name==="WebGL2RenderingContext";let Y=$.precision!==undefined?$.precision:"highp";const X=K(Y);if(X!==Y){console.warn("THREE.WebGLRenderer:",Y,"not supported, using",X,"instead.");Y=X}const U=H||Q.has("WEBGL_draw_buffers");const G=$.logarithmicDepthBuffer===true;const E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS);const N=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS);const q=J.getParameter(J.MAX_TEXTURE_SIZE);const O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE);const k=J.getParameter(J.MAX_VERTEX_ATTRIBS);const D=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS);const F=J.getParameter(J.MAX_VARYING_VECTORS);const L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS);const V=N>0;const R=H||Q.has("OES_texture_float");const C=V&&R;const M=H?J.getParameter(J.MAX_SAMPLES):0;return{isWebGL2:H,drawBuffers:U,getMaxAnisotropy:W,getMaxPrecision:K,precision:Y,logarithmicDepthBuffer:G,maxTextures:E,maxVertexTextures:N,maxTextureSize:q,maxCubemapSize:O,maxAttributes:k,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:L,vertexTextures:V,floatFragmentTextures:R,floatVertexTextures:C,maxSamples:M}}var e6={Default:0,Gradual:1,Instant:2};var k6={None:0,Error:1,Warning:2,Info:3,Debug:4};var kH=new u0;var h1=new w8;var uQ=6;var x1=4;var g1=4;var p1=4;var m1=6;var d1=8;var vZ=4;var bZ=4;var MH=1;var l1=0.012;var u1=0.003;var RH=1;var VH=16777216;class x0 extends M0{constructor(J=i8.ThreeD,Q=false,$=false,Z=false,W=1,K=true,H=false,Y=false,X=1024,U=k6.None,G=0,E=1,N=0.3){super(kH,h1);this.renderer=undefined;this.splatRenderMode=J;this.dynamicMode=Q;this.enableOptionalEffects=$;this.halfPrecisionCovariancesOnGPU=Z;this.devicePixelRatio=W;this.enableDistancesComputationOnGPU=K;this.integerBasedDistancesComputation=H;this.antialiased=Y;this.kernel2DSize=N;this.maxScreenSpaceSplatSize=X;this.logLevel=U;this.sphericalHarmonicsDegree=G;this.minSphericalHarmonicsDegree=0;this.sceneFadeInRateMultiplier=E;this.scenes=[];this.splatTree=null;this.baseSplatTree=null;this.splatDataTextures={};this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]};this.globalSplatIndexToLocalSplatIndexMap=[];this.globalSplatIndexToSceneIndexMap=[];this.lastBuildSplatCount=0;this.lastBuildScenes=[];this.lastBuildMaxSplatCount=0;this.lastBuildSceneCount=0;this.firstRenderTime=-1;this.finalBuild=false;this.webGLUtils=null;this.boundingBox=new G8;this.calculatedSceneCenter=new S;this.maxSplatDistanceFromSceneCenter=0;this.visibleRegionBufferRadius=0;this.visibleRegionRadius=0;this.visibleRegionFadeStartRadius=0;this.visibleRegionChanging=false;this.splatScale=1;this.pointCloudModeEnabled=false;this.disposed=false;this.lastRenderer=null;this.visible=false}static buildScenes(J,Q,$){const Z=[];Z.length=Q.length;for(let W=0;W<Q.length;W++){const K=Q[W];const H=$[W]||{};let Y=H["position"]||[0,0,0];let X=H["rotation"]||[0,0,0,1];let U=H["scale"]||[1,1,1];const G=new S().fromArray(Y);const E=new G0().fromArray(X);const N=new S().fromArray(U);const q=x0.createScene(K,G,E,N,H.splatAlphaRemovalThreshold||1,H.opacity,H.visible);J.add(q);Z[W]=q}return Z}static createScene(J,Q,$,Z,W,K=1,H=true){return new fH(J,Q,$,Z,W,K,H)}static buildSplatIndexMaps(J){const Q=[];const $=[];let Z=0;for(let W=0;W<J.length;W++){const K=J[W];const H=K.getMaxSplatCount();for(let Y=0;Y<H;Y++){Q[Z]=Y;$[Z]=W;Z++}}return{localSplatIndexMap:Q,sceneIndexMap:$}}buildSplatTree=function(J=[],Q,$){return new Promise((Z)=>{this.disposeSplatTree();this.baseSplatTree=new hH(8,1000);const W=performance.now();const K=new k0;this.baseSplatTree.processSplatMesh(this,(H)=>{this.getSplatColor(H,K);const Y=this.getSceneIndexForSplat(H);const X=J[Y]||1;return K.w>=X},Q,$).then(()=>{const H=performance.now()-W;if(this.logLevel>=k6.Info)console.log("SplatTree build: "+H+" ms");if(this.disposed){Z()}else{this.splatTree=this.baseSplatTree;this.baseSplatTree=null;let Y=0;let X=0;let U=0;let G=0;this.splatTree.visitLeaves((E)=>{const N=E.data.indexes.length;if(N>0){X+=N;U=Math.max(U,N);G++;Y++}});if(this.logLevel>=k6.Info){console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`);console.log(`SplatTree leaves with splats:${Y}`);X=X/G;console.log(`Avg splat count per node: ${X}`);console.log(`Total splat count: ${this.getSplatCount()}`)}Z()}})})};build(J,Q,$=true,Z=false,W,K,H=true){this.sceneOptions=Q;this.finalBuild=Z;const Y=x0.getTotalMaxSplatCountForSplatBuffers(J);const X=x0.buildScenes(this,J,Q);if($){for(let O=0;O<this.scenes.length&&O<X.length;O++){const k=X[O];const D=this.getScene(O);k.copyTransformData(D)}}this.scenes=X;let U=3;for(let O of J){const k=O.getMinSphericalHarmonicsDegree();if(k<U){U=k}}this.minSphericalHarmonicsDegree=Math.min(U,this.sphericalHarmonicsDegree);let G=false;if(J.length!==this.lastBuildScenes.length){G=true}else{for(let O=0;O<J.length;O++){const k=J[O];if(k!==this.lastBuildScenes[O].splatBuffer){G=true;break}}}let E=true;if(this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==Y||G){E=false}if(!E){this.boundingBox=new G8;if(!H){this.maxSplatDistanceFromSceneCenter=0;this.visibleRegionBufferRadius=0;this.visibleRegionRadius=0;this.visibleRegionFadeStartRadius=0;this.firstRenderTime=-1}this.lastBuildScenes=[];this.lastBuildSplatCount=0;this.lastBuildMaxSplatCount=0;this.disposeMeshData();this.geometry=bH.build(Y);if(this.splatRenderMode===i8.ThreeD){this.material=nQ.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize)}else{this.material=sQ.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree)}const O=x0.buildSplatIndexMaps(J);this.globalSplatIndexToLocalSplatIndexMap=O.localSplatIndexMap;this.globalSplatIndexToSceneIndexMap=O.sceneIndexMap}const N=this.getSplatCount(true);if(this.enableDistancesComputationOnGPU)this.setupDistancesComputationTransformFeedback();const q=this.refreshGPUDataFromSplatBuffers(E);for(let O=0;O<this.scenes.length;O++){this.lastBuildScenes[O]=this.scenes[O]}this.lastBuildSplatCount=N;this.lastBuildMaxSplatCount=this.getMaxSplatCount();this.lastBuildSceneCount=this.scenes.length;if(Z&&this.scenes.length>0){this.buildSplatTree(Q.map((O)=>O.splatAlphaRemovalThreshold||1),W,K).then(()=>{if(this.onSplatTreeReadyCallback)this.onSplatTreeReadyCallback(this.splatTree);this.onSplatTreeReadyCallback=null})}this.visible=this.scenes.length>0;return q}freeIntermediateSplatData(){const J=(Q)=>{delete Q.source.data;delete Q.image;Q.onUpdate=null};delete this.splatDataTextures.baseData.covariances;delete this.splatDataTextures.baseData.centers;delete this.splatDataTextures.baseData.colors;delete this.splatDataTextures.baseData.sphericalHarmonics;delete this.splatDataTextures.centerColors.data;delete this.splatDataTextures.covariances.data;if(this.splatDataTextures.sphericalHarmonics){delete this.splatDataTextures.sphericalHarmonics.data}if(this.splatDataTextures.sceneIndexes){delete this.splatDataTextures.sceneIndexes.data}this.splatDataTextures.centerColors.texture.needsUpdate=true;this.splatDataTextures.centerColors.texture.onUpdate=()=>{J(this.splatDataTextures.centerColors.texture)};this.splatDataTextures.covariances.texture.needsUpdate=true;this.splatDataTextures.covariances.texture.onUpdate=()=>{J(this.splatDataTextures.covariances.texture)};if(this.splatDataTextures.sphericalHarmonics){if(this.splatDataTextures.sphericalHarmonics.texture){this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=true;this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{J(this.splatDataTextures.sphericalHarmonics.texture)}}else{this.splatDataTextures.sphericalHarmonics.textures.forEach((Q)=>{Q.needsUpdate=true;Q.onUpdate=()=>{J(Q)}})}}if(this.splatDataTextures.sceneIndexes){this.splatDataTextures.sceneIndexes.texture.needsUpdate=true;this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{J(this.splatDataTextures.sceneIndexes.texture)}}}dispose(){this.disposeMeshData();this.disposeTextures();this.disposeSplatTree();if(this.enableDistancesComputationOnGPU){if(this.computeDistancesOnGPUSyncTimeout){clearTimeout(this.computeDistancesOnGPUSyncTimeout);this.computeDistancesOnGPUSyncTimeout=null}this.disposeDistancesComputationGPUResources()}this.scenes=[];this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]};this.renderer=null;this.globalSplatIndexToLocalSplatIndexMap=[];this.globalSplatIndexToSceneIndexMap=[];this.lastBuildSplatCount=0;this.lastBuildScenes=[];this.lastBuildMaxSplatCount=0;this.lastBuildSceneCount=0;this.firstRenderTime=-1;this.finalBuild=false;this.webGLUtils=null;this.boundingBox=new G8;this.calculatedSceneCenter=new S;this.maxSplatDistanceFromSceneCenter=0;this.visibleRegionBufferRadius=0;this.visibleRegionRadius=0;this.visibleRegionFadeStartRadius=0;this.visibleRegionChanging=false;this.splatScale=1;this.pointCloudModeEnabled=false;this.disposed=true;this.lastRenderer=null;this.visible=false}disposeMeshData(){if(this.geometry&&this.geometry!==kH){this.geometry.dispose();this.geometry=null}if(this.material){this.material.dispose();this.material=null}}disposeTextures(){for(let J in this.splatDataTextures){if(this.splatDataTextures.hasOwnProperty(J)){const Q=this.splatDataTextures[J];if(Q.texture){Q.texture.dispose();Q.texture=null}}}this.splatDataTextures=null}disposeSplatTree(){if(this.splatTree){this.splatTree.dispose();this.splatTree=null}if(this.baseSplatTree){this.baseSplatTree.dispose();this.baseSplatTree=null}}getSplatTree(){return this.splatTree}onSplatTreeReady(J){this.onSplatTreeReadyCallback=J}getDataForDistancesComputation(J,Q){const $=this.integerBasedDistancesComputation?this.getIntegerCenters(J,Q,true):this.getFloatCenters(J,Q,true);const Z=this.getSceneIndexes(J,Q);return{centers:$,sceneIndexes:Z}}refreshGPUDataFromSplatBuffers(J){const Q=this.getSplatCount(true);this.refreshDataTexturesFromSplatBuffers(J);const $=J?this.lastBuildSplatCount:0;const{centers:Z,sceneIndexes:W}=this.getDataForDistancesComputation($,Q-1);if(this.enableDistancesComputationOnGPU){this.refreshGPUBuffersForDistancesComputation(Z,W,J)}return{from:$,to:Q-1,count:Q-$,centers:Z,sceneIndexes:W}}refreshGPUBuffersForDistancesComputation(J,Q,$=false){const Z=$?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation($,J,Z);this.updateGPUTransformIndexesBufferForDistancesComputation($,Q,Z)}refreshDataTexturesFromSplatBuffers(J){const Q=this.getSplatCount(true);const $=this.lastBuildSplatCount;const Z=Q-1;if(!J){this.setupDataTextures();this.updateBaseDataFromSplatBuffers()}else{this.updateBaseDataFromSplatBuffers($,Z)}this.updateDataTexturesFromBaseData($,Z);this.updateVisibleRegion(J)}setupDataTextures(){const J=this.getMaxSplatCount();const Q=this.getSplatCount(true);this.disposeTextures();const $=(M,I)=>{const T=new _J(4096,1024);while(T.x*T.y*M<J*I)T.y*=2;return T};const Z=(M)=>{return M>=1?m1:g1};const W=(M)=>{const I=Z(M);const T=$(I,6);return{elementsPerTexelStored:I,texSize:T}};let K=this.getTargetCovarianceCompressionLevel();const H=0;const Y=this.getTargetSphericalHarmonicsCompressionLevel();let X;let U;let G;if(this.splatRenderMode===i8.ThreeD){const M=W(K);if(M.texSize.x*M.texSize.y>VH&&K===0){K=1}X=new Float32Array(J*uQ)}else{U=new Float32Array(J*3);G=new Float32Array(J*4)}const E=new Float32Array(J*3);const N=new Uint8Array(J*4);let q=Float32Array;if(Y===1)q=Uint16Array;else if(Y===2)q=Uint8Array;const O=F6(this.minSphericalHarmonicsDegree);const k=this.minSphericalHarmonicsDegree?new q(J*O):undefined;const D=$(bZ,4);const F=new Uint32Array(D.x*D.y*bZ);x0.updateCenterColorsPaddedData(0,Q-1,E,N,F);const L=new M8(F,D.x,D.y,X9,f0);L.internalFormat="RGBA32UI";L.needsUpdate=true;this.material.uniforms.centersColorsTexture.value=L;this.material.uniforms.centersColorsTextureSize.value.copy(D);this.material.uniformsNeedUpdate=true;this.splatDataTextures={baseData:{covariances:X,scales:U,rotations:G,centers:E,colors:N,sphericalHarmonics:k},centerColors:{data:F,texture:L,size:D}};if(this.splatRenderMode===i8.ThreeD){const M=W(K);const I=M.elementsPerTexelStored;const T=M.texSize;let B=K>=1?Uint32Array:Float32Array;const _=K>=1?d1:p1;const A=new B(T.x*T.y*_);if(K===0){A.set(X)}else{x0.updatePaddedCompressedCovariancesTextureData(X,A,0,0,X.length)}let y;if(K>=1){y=new M8(A,T.x,T.y,X9,f0);y.internalFormat="RGBA32UI";this.material.uniforms.covariancesTextureHalfFloat.value=y}else{y=new M8(A,T.x,T.y,h0,Q8);this.material.uniforms.covariancesTexture.value=y;const f=new M8(new Uint32Array(32),2,2,X9,f0);f.internalFormat="RGBA32UI";this.material.uniforms.covariancesTextureHalfFloat.value=f;f.needsUpdate=true}y.needsUpdate=true;this.material.uniforms.covariancesAreHalfFloat.value=K>=1?1:0;this.material.uniforms.covariancesTextureSize.value.copy(T);this.splatDataTextures["covariances"]={data:A,texture:y,size:T,compressionLevel:K,elementsPerTexelStored:I,elementsPerTexelAllocated:_}}else{const M=6;const I=$(vZ,M);let T=H>=1?Uint16Array:Float32Array;let B=H>=1?U8:Q8;const _=new T(I.x*I.y*vZ);x0.updateScaleRotationsPaddedData(0,Q-1,U,G,_);const A=new M8(_,I.x,I.y,h0,B);A.needsUpdate=true;this.material.uniforms.scaleRotationsTexture.value=A;this.material.uniforms.scaleRotationsTextureSize.value.copy(I);this.splatDataTextures["scaleRotations"]={data:_,texture:A,size:I,compressionLevel:H}}if(k){const M=Y===2?a0:U8;let I=O;if(I%2!==0)I++;const T=4;const B=T===4?h0:u8;let _=$(T,I);if(_.x*_.y<=VH){const A=_.x*_.y*T;const y=new q(A);for(let j=0;j<Q;j++){const g=O*j;const x=I*j;for(let p=0;p<O;p++){y[x+p]=k[g+p]}}const f=new M8(y,_.x,_.y,B,M);f.needsUpdate=true;this.material.uniforms.sphericalHarmonicsTexture.value=f;this.splatDataTextures["sphericalHarmonics"]={componentCount:O,paddedComponentCount:I,data:y,textureCount:1,texture:f,size:_,compressionLevel:Y,elementsPerTexel:T}}else{const A=O/3;I=A;if(I%2!==0)I++;_=$(T,I);const y=_.x*_.y*T;const f=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB];const j=[];const g=[];for(let x=0;x<3;x++){const p=new q(y);j.push(p);for(let t=0;t<Q;t++){const $J=O*t;const GJ=I*t;if(A>=3){for(let NJ=0;NJ<3;NJ++)p[GJ+NJ]=k[$J+x*3+NJ];if(A>=8){for(let NJ=0;NJ<5;NJ++)p[GJ+3+NJ]=k[$J+9+x*5+NJ]}}}const m=new M8(p,_.x,_.y,B,M);g.push(m);m.needsUpdate=true;f[x].value=m}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1;this.splatDataTextures["sphericalHarmonics"]={componentCount:O,componentCountPerChannel:A,paddedComponentCount:I,data:j,textureCount:3,textures:g,size:_,compressionLevel:Y,elementsPerTexel:T}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(_);this.material.uniforms.sphericalHarmonics8BitMode.value=Y===2?1:0;for(let A=0;A<this.scenes.length;A++){const y=this.scenes[A].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[A]=y.minSphericalHarmonicsCoeff;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[A]=y.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=true}const V=$(MH,4);const R=new Uint32Array(V.x*V.y*MH);for(let M=0;M<Q;M++)R[M]=this.globalSplatIndexToSceneIndexMap[M];const C=new M8(R,V.x,V.y,K6,f0);C.internalFormat="R32UI";C.needsUpdate=true;this.material.uniforms.sceneIndexesTexture.value=C;this.material.uniforms.sceneIndexesTextureSize.value.copy(V);this.material.uniformsNeedUpdate=true;this.splatDataTextures["sceneIndexes"]={data:R,texture:C,size:V};this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(J,Q){const $=this.splatDataTextures["covariances"];const Z=$?$.compressionLevel:undefined;const W=this.splatDataTextures["scaleRotations"];const K=W?W.compressionLevel:undefined;const H=this.splatDataTextures["sphericalHarmonics"];const Y=H?H.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,undefined,Z,K,Y,J,Q,J)}updateDataTexturesFromBaseData(J,Q){const $=this.splatDataTextures["covariances"];const Z=$?$.compressionLevel:undefined;const W=this.splatDataTextures["scaleRotations"];const K=W?W.compressionLevel:undefined;const H=this.splatDataTextures["sphericalHarmonics"];const Y=H?H.compressionLevel:0;const X=this.splatDataTextures["centerColors"];const U=X.data;const G=X.texture;x0.updateCenterColorsPaddedData(J,Q,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,U);const E=this.renderer?this.renderer.properties.get(G):null;if(!E||!E.__webglTexture){G.needsUpdate=true}else{this.updateDataTexture(U,X.texture,X.size,E,bZ,x1,4,J,Q)}if($){const F=$.texture;const L=J*uQ;const V=Q*uQ;if(Z===0){for(let C=L;C<=V;C++){const M=this.splatDataTextures.baseData.covariances[C];$.data[C]=M}}else{x0.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,$.data,J*$.elementsPerTexelAllocated,L,V)}const R=this.renderer?this.renderer.properties.get(F):null;if(!R||!R.__webglTexture){F.needsUpdate=true}else{if(Z===0){this.updateDataTexture($.data,$.texture,$.size,R,$.elementsPerTexelStored,uQ,4,J,Q)}else{this.updateDataTexture($.data,$.texture,$.size,R,$.elementsPerTexelAllocated,$.elementsPerTexelAllocated,2,J,Q)}}}if(W){const F=W.data;const L=W.texture;const V=6;const R=K===0?4:2;x0.updateScaleRotationsPaddedData(J,Q,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,F);const C=this.renderer?this.renderer.properties.get(L):null;if(!C||!C.__webglTexture){L.needsUpdate=true}else{this.updateDataTexture(F,W.texture,W.size,C,vZ,V,R,J,Q)}}const N=this.splatDataTextures.baseData.sphericalHarmonics;if(N){let F=4;if(Y===1)F=2;else if(Y===2)F=1;const L=(C,M,I,T,B)=>{const _=this.renderer?this.renderer.properties.get(C):null;if(!_||!_.__webglTexture){C.needsUpdate=true}else{this.updateDataTexture(T,C,M,_,I,B,F,J,Q)}};const V=H.componentCount;const R=H.paddedComponentCount;if(H.textureCount===1){const C=H.data;for(let M=J;M<=Q;M++){const I=V*M;const T=R*M;for(let B=0;B<V;B++){C[T+B]=N[I+B]}}L(H.texture,H.size,H.elementsPerTexel,C,R)}else{const C=H.componentCountPerChannel;for(let M=0;M<3;M++){const I=H.data[M];for(let T=J;T<=Q;T++){const B=V*T;const _=R*T;if(C>=3){for(let A=0;A<3;A++)I[_+A]=N[B+M*3+A];if(C>=8){for(let A=0;A<5;A++)I[_+3+A]=N[B+9+M*5+A]}}}L(H.textures[M],H.size,H.elementsPerTexel,I,R)}}}const q=this.splatDataTextures["sceneIndexes"];const O=q.data;for(let F=this.lastBuildSplatCount;F<=Q;F++){O[F]=this.globalSplatIndexToSceneIndexMap[F]}const k=q.texture;const D=this.renderer?this.renderer.properties.get(k):null;if(!D||!D.__webglTexture){k.needsUpdate=true}else{this.updateDataTexture(O,q.texture,q.size,D,1,1,1,this.lastBuildSplatCount,Q)}}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let J;for(let Q=0;Q<this.scenes.length;Q++){const $=this.getScene(Q);const Z=$.splatBuffer;if(Q===0||Z.compressionLevel>J){J=Z.compressionLevel}}return J}getMinimumSplatBufferCompressionLevel(){let J;for(let Q=0;Q<this.scenes.length;Q++){const $=this.getScene(Q);const Z=$.splatBuffer;if(Q===0||Z.compressionLevel<J){J=Z.compressionLevel}}return J}static computeTextureUpdateRegion(J,Q,$,Z,W){const K=W/Z;const H=J*K;const Y=Math.floor(H/$);const X=Y*$*Z;const U=Q*K;const G=Math.floor(U/$);const E=G*$*Z+$*Z;return{dataStart:X,dataEnd:E,startRow:Y,endRow:G}}updateDataTexture(J,Q,$,Z,W,K,H,Y,X){const U=this.renderer.getContext();const G=x0.computeTextureUpdateRegion(Y,X,$.x,W,K);const E=G.dataEnd-G.dataStart;const N=new J.constructor(J.buffer,G.dataStart*H,E);const q=G.endRow-G.startRow+1;const O=this.webGLUtils.convert(Q.type);const k=this.webGLUtils.convert(Q.format,Q.colorSpace);const D=U.getParameter(U.TEXTURE_BINDING_2D);U.bindTexture(U.TEXTURE_2D,Z.__webglTexture);U.texSubImage2D(U.TEXTURE_2D,0,0,G.startRow,$.x,q,k,O,N);U.bindTexture(U.TEXTURE_2D,D)}static updatePaddedCompressedCovariancesTextureData(J,Q,$,Z,W){let K=new DataView(Q.buffer);let H=$;let Y=0;for(let X=Z;X<=W;X+=2){K.setUint16(H*2,J[X],true);K.setUint16(H*2+2,J[X+1],true);H+=2;Y++;if(Y>=3){H+=2;Y=0}}}static updateCenterColorsPaddedData(J,Q,$,Z,W){for(let K=J;K<=Q;K++){const H=K*4;const Y=K*3;const X=K*4;W[X]=PN(Z,H);W[X+1]=AZ($[Y]);W[X+2]=AZ($[Y+1]);W[X+3]=AZ($[Y+2])}}static updateScaleRotationsPaddedData(J,Q,$,Z,W){const K=6;for(let H=J;H<=Q;H++){const Y=H*3;const X=H*4;const U=H*K;W[U]=$[Y];W[U+1]=$[Y+1];W[U+2]=$[Y+2];W[U+3]=Z[X];W[U+4]=Z[X+1];W[U+5]=Z[X+2]}}updateVisibleRegion(J){const Q=this.getSplatCount(true);const $=new S;if(!J){const W=new S;this.scenes.forEach((K)=>{W.add(K.splatBuffer.sceneCenter)});W.multiplyScalar(1/this.scenes.length);this.calculatedSceneCenter.copy(W);this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter);this.material.uniformsNeedUpdate=true}const Z=J?this.lastBuildSplatCount:0;for(let W=Z;W<Q;W++){this.getSplatCenter(W,$,true);const K=$.sub(this.calculatedSceneCenter).length();if(K>this.maxSplatDistanceFromSceneCenter)this.maxSplatDistanceFromSceneCenter=K}if(this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>RH){this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter;this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-RH,0)}if(this.finalBuild)this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter;this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(J=e6.Default){const Q=l1*this.sceneFadeInRateMultiplier;const $=u1*this.sceneFadeInRateMultiplier;const Z=this.finalBuild?Q:$;const W=J===e6.Default?Z:$;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*W+this.visibleRegionFadeStartRadius;const K=this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0;const H=K>0.99;const Y=H||J===e6.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius;this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius;this.material.uniforms.firstRenderTime.value=this.firstRenderTime;this.material.uniforms.currentTime.value=performance.now();this.material.uniforms.fadeInComplete.value=Y;this.material.uniformsNeedUpdate=true;this.visibleRegionChanging=!H}updateRenderIndexes(J,Q){const $=this.geometry;$.attributes.splatIndex.set(J);$.attributes.splatIndex.needsUpdate=true;if(Q>0&&this.firstRenderTime===-1)this.firstRenderTime=performance.now();$.instanceCount=Q;$.setDrawRange(0,Q)}updateTransforms(){for(let J=0;J<this.scenes.length;J++){const Q=this.getScene(J);Q.updateTransform(this.dynamicMode)}}updateUniforms=function(){const J=new _J;return function(Q,$,Z,W,K,H){const Y=this.getSplatCount();if(Y>0){J.set(Q.x*this.devicePixelRatio,Q.y*this.devicePixelRatio);this.material.uniforms.viewport.value.copy(J);this.material.uniforms.basisViewport.value.set(1/J.x,1/J.y);this.material.uniforms.focal.value.set($,Z);this.material.uniforms.orthographicMode.value=W?1:0;this.material.uniforms.orthoZoom.value=K;this.material.uniforms.inverseFocalAdjustment.value=H;if(this.dynamicMode){for(let X=0;X<this.scenes.length;X++){this.material.uniforms.transforms.value[X].copy(this.getScene(X).transform)}}if(this.enableOptionalEffects){for(let X=0;X<this.scenes.length;X++){this.material.uniforms.sceneOpacity.value[X]=L0(this.getScene(X).opacity,0,1);this.material.uniforms.sceneVisibility.value[X]=this.getScene(X).visible?1:0;this.material.uniformsNeedUpdate=true}}this.material.uniformsNeedUpdate=true}}}();setSplatScale(J=1){this.splatScale=J;this.material.uniforms.splatScale.value=J;this.material.uniformsNeedUpdate=true}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(J){this.pointCloudModeEnabled=J;this.material.uniforms.pointCloudModeEnabled.value=J?1:0;this.material.uniformsNeedUpdate=true}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(J=false){if(!J)return this.lastBuildSplatCount;else return x0.getTotalSplatCountForScenes(this.scenes)}static getTotalSplatCountForScenes(J){let Q=0;for(let $ of J){if($&&$.splatBuffer)Q+=$.splatBuffer.getSplatCount()}return Q}static getTotalSplatCountForSplatBuffers(J){let Q=0;for(let $ of J)Q+=$.getSplatCount();return Q}getMaxSplatCount(){return x0.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(J){let Q=0;for(let $ of J){if($&&$.splatBuffer)Q+=$.splatBuffer.getMaxSplatCount()}return Q}static getTotalMaxSplatCountForSplatBuffers(J){let Q=0;for(let $ of J)Q+=$.getMaxSplatCount();return Q}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const J=this.renderer.getContext();if(this.distancesTransformFeedback.vao){J.deleteVertexArray(this.distancesTransformFeedback.vao);this.distancesTransformFeedback.vao=null}if(this.distancesTransformFeedback.program){J.deleteProgram(this.distancesTransformFeedback.program);J.deleteShader(this.distancesTransformFeedback.vertexShader);J.deleteShader(this.distancesTransformFeedback.fragmentShader);this.distancesTransformFeedback.program=null;this.distancesTransformFeedback.vertexShader=null;this.distancesTransformFeedback.fragmentShader=null}this.disposeDistancesComputationGPUBufferResources();if(this.distancesTransformFeedback.id){J.deleteTransformFeedback(this.distancesTransformFeedback.id);this.distancesTransformFeedback.id=null}}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const J=this.renderer.getContext();if(this.distancesTransformFeedback.centersBuffer){this.distancesTransformFeedback.centersBuffer=null;J.deleteBuffer(this.distancesTransformFeedback.centersBuffer)}if(this.distancesTransformFeedback.outDistancesBuffer){J.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer);this.distancesTransformFeedback.outDistancesBuffer=null}}setRenderer(J){if(J!==this.renderer){this.renderer=J;const Q=this.renderer.getContext();const $=new b1(Q);const Z=new f1(Q,$,{});$.init(Z);this.webGLUtils=new wZ(Q,$,Z);if(this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:W,sceneIndexes:K}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(W,K)}}}setupDistancesComputationTransformFeedback=function(){let J;return function(){const Q=this.getMaxSplatCount();if(!this.renderer)return;const $=this.lastRenderer!==this.renderer;const Z=J!==Q;if(!$&&!Z)return;if($){this.disposeDistancesComputationGPUResources()}else if(Z){this.disposeDistancesComputationGPUBufferResources()}const W=this.renderer.getContext();const K=(E,N,q)=>{const O=E.createShader(N);if(!O){console.error("Fatal error: gl could not create a shader object.");return null}E.shaderSource(O,q);E.compileShader(O);const k=E.getShaderParameter(O,E.COMPILE_STATUS);if(!k){let D="unknown";if(N===E.VERTEX_SHADER)D="vertex shader";else if(N===E.FRAGMENT_SHADER)D="fragement shader";const F=E.getShaderInfoLog(O);console.error("Failed to compile "+D+" with these errors:"+F);E.deleteShader(O);return null}return O};let H;if(this.integerBasedDistancesComputation){H=`#version 300 es
                in ivec4 center;
                flat out int distance;`;if(this.dynamicMode){H+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${K0.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `}else{H+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `}}else{H=`#version 300 es
                in vec4 center;
                flat out float distance;`;if(this.dynamicMode){H+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${K0.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `}else{H+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `}}const Y=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `;const X=W.getParameter(W.VERTEX_ARRAY_BINDING);const U=W.getParameter(W.CURRENT_PROGRAM);const G=U?W.getProgramParameter(U,W.DELETE_STATUS):false;if($){this.distancesTransformFeedback.vao=W.createVertexArray()}W.bindVertexArray(this.distancesTransformFeedback.vao);if($){const E=W.createProgram();const N=K(W,W.VERTEX_SHADER,H);const q=K(W,W.FRAGMENT_SHADER,Y);if(!N||!q){throw new Error("Could not compile shaders for distances computation on GPU.")}W.attachShader(E,N);W.attachShader(E,q);W.transformFeedbackVaryings(E,["distance"],W.SEPARATE_ATTRIBS);W.linkProgram(E);const O=W.getProgramParameter(E,W.LINK_STATUS);if(!O){const k=W.getProgramInfoLog(E);console.error("Fatal error: Failed to link program: "+k);W.deleteProgram(E);W.deleteShader(q);W.deleteShader(N);throw new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=E;this.distancesTransformFeedback.vertexShader=N;this.distancesTransformFeedback.vertexShader=q}W.useProgram(this.distancesTransformFeedback.program);this.distancesTransformFeedback.centersLoc=W.getAttribLocation(this.distancesTransformFeedback.program,"center");if(this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=W.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let E=0;E<this.scenes.length;E++){this.distancesTransformFeedback.transformsLocs[E]=W.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${E}]`)}}else{this.distancesTransformFeedback.modelViewProjLoc=W.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj")}if($||Z){this.distancesTransformFeedback.centersBuffer=W.createBuffer();W.bindBuffer(W.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer);W.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc);if(this.integerBasedDistancesComputation){W.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,W.INT,0,0)}else{W.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,W.FLOAT,false,0,0)}if(this.dynamicMode){this.distancesTransformFeedback.sceneIndexesBuffer=W.createBuffer();W.bindBuffer(W.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer);W.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc);W.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,W.UNSIGNED_INT,0,0)}}if($||Z){this.distancesTransformFeedback.outDistancesBuffer=W.createBuffer()}W.bindBuffer(W.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer);W.bufferData(W.ARRAY_BUFFER,Q*4,W.STATIC_READ);if($){this.distancesTransformFeedback.id=W.createTransformFeedback()}W.bindTransformFeedback(W.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id);W.bindBufferBase(W.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer);if(U&&G!==true)W.useProgram(U);if(X)W.bindVertexArray(X);this.lastRenderer=this.renderer;J=Q}}();updateGPUCentersBufferForDistancesComputation(J,Q,$){if(!this.renderer)return;const Z=this.renderer.getContext();const W=Z.getParameter(Z.VERTEX_ARRAY_BINDING);Z.bindVertexArray(this.distancesTransformFeedback.vao);const K=this.integerBasedDistancesComputation?Uint32Array:Float32Array;const H=16;const Y=$*H;Z.bindBuffer(Z.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer);if(J){Z.bufferSubData(Z.ARRAY_BUFFER,Y,Q)}else{const X=new K(this.getMaxSplatCount()*H);X.set(Q);Z.bufferData(Z.ARRAY_BUFFER,X,Z.STATIC_DRAW)}Z.bindBuffer(Z.ARRAY_BUFFER,null);if(W)Z.bindVertexArray(W)}updateGPUTransformIndexesBufferForDistancesComputation(J,Q,$){if(!this.renderer||!this.dynamicMode)return;const Z=this.renderer.getContext();const W=Z.getParameter(Z.VERTEX_ARRAY_BINDING);Z.bindVertexArray(this.distancesTransformFeedback.vao);const K=$*4;Z.bindBuffer(Z.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer);if(J){Z.bufferSubData(Z.ARRAY_BUFFER,K,Q)}else{const H=new Uint32Array(this.getMaxSplatCount()*4);H.set(Q);Z.bufferData(Z.ARRAY_BUFFER,H,Z.STATIC_DRAW)}Z.bindBuffer(Z.ARRAY_BUFFER,null);if(W)Z.bindVertexArray(W)}getSceneIndexes(J,Q){let $;const Z=Q-J+1;$=new Uint32Array(Z);for(let W=J;W<=Q;W++){$[W]=this.globalSplatIndexToSceneIndexMap[W]}return $}fillTransformsArray=function(){const J=[];return function(Q){if(J.length!==Q.length)J.length=Q.length;for(let $=0;$<this.scenes.length;$++){const Z=this.getScene($).transform;const W=Z.elements;for(let K=0;K<16;K++){J[$*16+K]=W[K]}}Q.set(J)}}();computeDistancesOnGPU=function(){const J=new xJ;return function(Q,$){if(!this.renderer)return;const Z=this.renderer.getContext();const W=Z.getParameter(Z.VERTEX_ARRAY_BINDING);const K=Z.getParameter(Z.CURRENT_PROGRAM);const H=K?Z.getProgramParameter(K,Z.DELETE_STATUS):false;Z.bindVertexArray(this.distancesTransformFeedback.vao);Z.useProgram(this.distancesTransformFeedback.program);Z.enable(Z.RASTERIZER_DISCARD);if(this.dynamicMode){for(let U=0;U<this.scenes.length;U++){J.copy(this.getScene(U).transform);J.premultiply(Q);if(this.integerBasedDistancesComputation){const G=x0.getIntegerMatrixArray(J);const E=[G[2],G[6],G[10],G[14]];Z.uniform4i(this.distancesTransformFeedback.transformsLocs[U],E[0],E[1],E[2],E[3])}else{Z.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[U],false,J.elements)}}}else{if(this.integerBasedDistancesComputation){const U=x0.getIntegerMatrixArray(Q);const G=[U[2],U[6],U[10]];Z.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,G[0],G[1],G[2])}else{const U=[Q.elements[2],Q.elements[6],Q.elements[10]];Z.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,U[0],U[1],U[2])}}Z.bindBuffer(Z.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer);Z.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc);if(this.integerBasedDistancesComputation){Z.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,Z.INT,0,0)}else{Z.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,Z.FLOAT,false,0,0)}if(this.dynamicMode){Z.bindBuffer(Z.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer);Z.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc);Z.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,Z.UNSIGNED_INT,0,0)}Z.bindTransformFeedback(Z.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id);Z.bindBufferBase(Z.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer);Z.beginTransformFeedback(Z.POINTS);Z.drawArrays(Z.POINTS,0,this.getSplatCount());Z.endTransformFeedback();Z.bindBufferBase(Z.TRANSFORM_FEEDBACK_BUFFER,0,null);Z.bindTransformFeedback(Z.TRANSFORM_FEEDBACK,null);Z.disable(Z.RASTERIZER_DISCARD);const Y=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);Z.flush();const X=new Promise((U)=>{const G=()=>{if(this.disposed){U()}else{const E=0;const N=0;const q=Z.clientWaitSync(Y,N,E);switch(q){case Z.TIMEOUT_EXPIRED:this.computeDistancesOnGPUSyncTimeout=setTimeout(G);return this.computeDistancesOnGPUSyncTimeout;case Z.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null;Z.deleteSync(Y);const O=Z.getParameter(Z.VERTEX_ARRAY_BINDING);Z.bindVertexArray(this.distancesTransformFeedback.vao);Z.bindBuffer(Z.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer);Z.getBufferSubData(Z.ARRAY_BUFFER,0,$);Z.bindBuffer(Z.ARRAY_BUFFER,null);if(O)Z.bindVertexArray(O);U()}}};this.computeDistancesOnGPUSyncTimeout=setTimeout(G)});if(K&&H!==true)Z.useProgram(K);if(W)Z.bindVertexArray(W);return X}}();getLocalSplatParameters(J,Q,$){if($===undefined||$===null){$=this.dynamicMode?false:true}Q.splatBuffer=this.getSplatBufferForSplat(J);Q.localIndex=this.getSplatLocalIndex(J);Q.sceneTransform=$?this.getSceneTransformForSplat(J):null}fillSplatDataArrays(J,Q,$,Z,W,K,H,Y=0,X=0,U=1,G,E,N=0,q){const O=new S;O.x=undefined;O.y=undefined;if(this.splatRenderMode===i8.ThreeD){O.z=undefined}else{O.z=1}const k=new xJ;let D=0;let F=this.scenes.length-1;if(q!==undefined&&q!==null&&q>=0&&q<=this.scenes.length){D=q;F=q}for(let L=D;L<=F;L++){if(H===undefined||H===null){H=this.dynamicMode?false:true}const V=this.getScene(L);const R=V.splatBuffer;let C;if(H){this.getSceneTransform(L,k);C=k}if(J){R.fillSplatCovarianceArray(J,C,G,E,N,Y)}if(Q||$){if(!Q||!$){throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.')}R.fillSplatScaleRotationArray(Q,$,C,G,E,N,X,O)}if(Z)R.fillSplatCenterArray(Z,C,G,E,N);if(W)R.fillSplatColorArray(W,V.minimumAlpha,G,E,N);if(K){R.fillSphericalHarmonicsArray(K,this.minSphericalHarmonicsDegree,C,G,E,N,U)}N+=R.getSplatCount()}}getIntegerCenters(J,Q,$=false){const Z=Q-J+1;const W=new Float32Array(Z*3);this.fillSplatDataArrays(null,null,null,W,null,null,undefined,undefined,undefined,undefined,J);let K;let H=$?4:3;K=new Int32Array(Z*H);for(let Y=0;Y<Z;Y++){for(let X=0;X<3;X++){K[Y*H+X]=Math.round(W[Y*3+X]*1000)}if($)K[Y*H+3]=1000}return K}getFloatCenters(J,Q,$=false){const Z=Q-J+1;const W=new Float32Array(Z*3);this.fillSplatDataArrays(null,null,null,W,null,null,undefined,undefined,undefined,undefined,J);if(!$)return W;let K=new Float32Array(Z*4);for(let H=0;H<Z;H++){for(let Y=0;Y<3;Y++){K[H*4+Y]=W[H*3+Y]}K[H*4+3]=1}return K}getSplatCenter=function(){const J={};return function(Q,$,Z){this.getLocalSplatParameters(Q,J,Z);J.splatBuffer.getSplatCenter(J.localIndex,$,J.sceneTransform)}}();getSplatScaleAndRotation=function(){const J={};const Q=new S;return function($,Z,W,K){this.getLocalSplatParameters($,J,K);Q.x=undefined;Q.y=undefined;Q.z=undefined;if(this.splatRenderMode===i8.TwoD)Q.z=0;J.splatBuffer.getSplatScaleAndRotation(J.localIndex,Z,W,J.sceneTransform,Q)}}();getSplatColor=function(){const J={};return function(Q,$){this.getLocalSplatParameters(Q,J);J.splatBuffer.getSplatColor(J.localIndex,$)}}();getSceneTransform(J,Q){const $=this.getScene(J);$.updateTransform(this.dynamicMode);Q.copy($.transform)}getScene(J){if(J<0||J>=this.scenes.length){throw new Error("SplatMesh::getScene() -> Invalid scene index.")}return this.scenes[J]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(J){return this.getScene(this.globalSplatIndexToSceneIndexMap[J]).splatBuffer}getSceneIndexForSplat(J){return this.globalSplatIndexToSceneIndexMap[J]}getSceneTransformForSplat(J){return this.getScene(this.globalSplatIndexToSceneIndexMap[J]).transform}getSplatLocalIndex(J){return this.globalSplatIndexToLocalSplatIndexMap[J]}static getIntegerMatrixArray(J){const Q=J.elements;const $=[];for(let Z=0;Z<16;Z++){$[Z]=Math.round(Q[Z]*1000)}return $}computeBoundingBox(J=false,Q){let $=this.getSplatCount();if(Q!==undefined&&Q!==null){if(Q<0||Q>=this.scenes.length){throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.")}$=this.scenes[Q].splatBuffer.getSplatCount()}const Z=new Float32Array($*3);this.fillSplatDataArrays(null,null,null,Z,null,null,J,undefined,undefined,undefined,undefined,Q);const W=new S;const K=new S;for(let H=0;H<$;H++){const Y=H*3;const X=Z[Y];const U=Z[Y+1];const G=Z[Y+2];if(H===0||X<W.x)W.x=X;if(H===0||U<W.y)W.y=U;if(H===0||G<W.z)W.z=G;if(H===0||X>K.x)K.x=X;if(H===0||U>K.y)K.y=U;if(H===0||G>K.z)K.z=G}return new G8(W,K)}}var c1="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==";var LH="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";var n1="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL";var s1="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function i1(J){let Q;let $;let Z;let W;let K;let H;let Y;let X;let U;let G;let E;let N;let q;let O;let k;let D;let F;let L;let V;let R;function C(M,I,T,B,_,A,y){const f=performance.now();if(!Z){const x=new Uint32Array($,Y,_.byteLength/R.BytesPerInt);x.set(_);const p=new Float32Array($,G,y.byteLength/R.BytesPerFloat);p.set(y);if(B){let m;if(W){m=new Int32Array($,E,A.byteLength/R.BytesPerInt)}else{m=new Float32Array($,E,A.byteLength/R.BytesPerFloat)}m.set(A)}}if(!D)D=new Uint32Array(L);new Float32Array($,k,16).set(T);new Uint32Array($,q,L).set(D);Q.exports.sortIndexes(Y,O,E,N,q,k,X,U,G,L,M,I,H,B,W,K);const j={sortDone:true,splatSortCount:M,splatRenderCount:I,sortTime:0};if(!Z){const x=new Uint32Array($,X,I);if(!F||F.length<I){F=new Uint32Array(I)}F.set(x);j.sortedIndexes=F}const g=performance.now();j.sortTime=g-f;J.postMessage(j)}J.onmessage=(M)=>{if(M.data.centers){centers=M.data.centers;sceneIndexes=M.data.sceneIndexes;if(W){new Int32Array($,O+M.data.range.from*R.BytesPerInt*4,M.data.range.count*4).set(new Int32Array(centers))}else{new Float32Array($,O+M.data.range.from*R.BytesPerFloat*4,M.data.range.count*4).set(new Float32Array(centers))}if(K){new Uint32Array($,U+M.data.range.from*4,M.data.range.count).set(new Uint32Array(sceneIndexes))}V=M.data.range.from+M.data.range.count}else if(M.data.sort){const I=Math.min(M.data.sort.splatRenderCount||0,V);const T=Math.min(M.data.sort.splatSortCount||0,V);const B=M.data.sort.usePrecomputedDistances;let _;let A;let y;if(!Z){_=M.data.sort.indexesToSort;y=M.data.sort.transforms;if(B)A=M.data.sort.precomputedDistances}C(T,I,M.data.sort.modelViewProj,B,_,A,y)}else if(M.data.init){R=M.data.init.Constants;H=M.data.init.splatCount;Z=M.data.init.useSharedMemory;W=M.data.init.integerBasedSort;K=M.data.init.dynamicMode;L=M.data.init.distanceMapRange;V=0;const I=W?R.BytesPerInt*4:R.BytesPerFloat*4;const T=new Uint8Array(M.data.init.sorterWasmBytes);const B=16*R.BytesPerFloat;const _=H*R.BytesPerInt;const A=H*I;const y=B;const f=W?H*R.BytesPerInt:H*R.BytesPerFloat;const j=H*R.BytesPerInt;const g=H*R.BytesPerInt;const x=W?L*R.BytesPerInt*2:L*R.BytesPerFloat*2;const p=K?H*R.BytesPerInt:0;const m=K?R.MaxScenes*B:0;const t=R.MemoryPageSize*32;const $J=_+A+y+f+j+x+g+p+m+t;const GJ=Math.floor($J/R.MemoryPageSize)+1;const NJ={module:{},env:{memory:new WebAssembly.Memory({initial:GJ,maximum:GJ,shared:true})}};WebAssembly.compile(T).then((cJ)=>{return WebAssembly.instantiate(cJ,NJ)}).then((cJ)=>{Q=cJ;Y=0;O=Y+_;k=O+A;E=k+y;N=E+f;q=N+j;X=q+x;U=X+g;G=U+p;$=NJ.env.memory.buffer;if(Z){J.postMessage({sortSetupPhase1Complete:true,indexesToSortBuffer:$,indexesToSortOffset:Y,sortedIndexesBuffer:$,sortedIndexesOffset:X,precomputedDistancesBuffer:$,precomputedDistancesOffset:E,transformsBuffer:$,transformsOffset:G})}else{J.postMessage({sortSetupPhase1Complete:true})}})}}}function o1(J,Q,$,Z,W,K=K0.DefaultSplatSortDistanceMapPrecision){const H=new Worker(URL.createObjectURL(new Blob(["(",i1.toString(),")(self)"],{type:"application/javascript"})));let Y=c1;const X=uZ()?_H():null;if(!$&&!Q){Y=LH;if(X&&X.major<=16&&X.minor<4){Y=s1}}else if(!$){Y=LH}else if(!Q){if(X&&X.major<=16&&X.minor<4){Y=n1}}const U=atob(Y);const G=new Uint8Array(U.length);for(let E=0;E<U.length;E++){G[E]=U.charCodeAt(E)}H.postMessage({init:{sorterWasmBytes:G.buffer,splatCount:J,useSharedMemory:Q,integerBasedSort:Z,dynamicMode:W,distanceMapRange:1<<K,Constants:{BytesPerFloat:K0.BytesPerFloat,BytesPerInt:K0.BytesPerInt,MemoryPageSize:K0.MemoryPageSize,MaxScenes:K0.MaxScenes}}});return H}var q6={None:0,VR:1,AR:2};class M6{static createButton(J,Q={}){const $=document.createElement("button");function Z(){let X=null;async function U(N){N.addEventListener("end",G);await J.xr.setSession(N);$.textContent="EXIT VR";X=N}function G(){X.removeEventListener("end",G);$.textContent="ENTER VR";X=null}$.style.display="";$.style.cursor="pointer";$.style.left="calc(50% - 50px)";$.style.width="100px";$.textContent="ENTER VR";const E={...Q,optionalFeatures:["local-floor","bounded-floor","layers",...Q.optionalFeatures||[]]};$.onmouseenter=function(){$.style.opacity="1.0"};$.onmouseleave=function(){$.style.opacity="0.5"};$.onclick=function(){if(X===null){navigator.xr.requestSession("immersive-vr",E).then(U)}else{X.end();if(navigator.xr.offerSession!==undefined){navigator.xr.offerSession("immersive-vr",E).then(U).catch((N)=>{console.warn(N)})}}};if(navigator.xr.offerSession!==undefined){navigator.xr.offerSession("immersive-vr",E).then(U).catch((N)=>{console.warn(N)})}}function W(){$.style.display="";$.style.cursor="auto";$.style.left="calc(50% - 75px)";$.style.width="150px";$.onmouseenter=null;$.onmouseleave=null;$.onclick=null}function K(){W();$.textContent="VR NOT SUPPORTED"}function H(X){W();console.warn("Exception when trying to call xr.isSessionSupported",X);$.textContent="VR NOT ALLOWED"}function Y(X){X.style.position="absolute";X.style.bottom="20px";X.style.padding="12px 6px";X.style.border="1px solid #fff";X.style.borderRadius="4px";X.style.background="rgba(0,0,0,0.1)";X.style.color="#fff";X.style.font="normal 13px sans-serif";X.style.textAlign="center";X.style.opacity="0.5";X.style.outline="none";X.style.zIndex="999"}if("xr"in navigator){$.id="VRButton";$.style.display="none";Y($);navigator.xr.isSessionSupported("immersive-vr").then(function(X){X?Z():K();if(X&&M6.xrSessionIsGranted){$.click()}}).catch(H);return $}else{const X=document.createElement("a");if(window.isSecureContext===false){X.href=document.location.href.replace(/^http:/,"https:");X.innerHTML="WEBXR NEEDS HTTPS"}else{X.href="https://immersiveweb.dev/";X.innerHTML="WEBXR NOT AVAILABLE"}X.style.left="calc(50% - 90px)";X.style.width="180px";X.style.textDecoration="none";Y(X);return X}}static registerSessionGrantedListener(){if(typeof navigator!=="undefined"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{M6.xrSessionIsGranted=true})}}}M6.xrSessionIsGranted=false;M6.registerSessionGrantedListener();class xH{static createButton(J,Q={}){const $=document.createElement("button");function Z(){if(Q.domOverlay===undefined){const E=document.createElement("div");E.style.display="none";document.body.appendChild(E);const N=document.createElementNS("http://www.w3.org/2000/svg","svg");N.setAttribute("width",38);N.setAttribute("height",38);N.style.position="absolute";N.style.right="20px";N.style.top="20px";N.addEventListener("click",function(){X.end()});E.appendChild(N);const q=document.createElementNS("http://www.w3.org/2000/svg","path");q.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28");q.setAttribute("stroke","#fff");q.setAttribute("stroke-width",2);N.appendChild(q);if(Q.optionalFeatures===undefined){Q.optionalFeatures=[]}Q.optionalFeatures.push("dom-overlay");Q.domOverlay={root:E}}let X=null;async function U(E){E.addEventListener("end",G);J.xr.setReferenceSpaceType("local");await J.xr.setSession(E);$.textContent="STOP AR";Q.domOverlay.root.style.display="";X=E}function G(){X.removeEventListener("end",G);$.textContent="START AR";Q.domOverlay.root.style.display="none";X=null}$.style.display="";$.style.cursor="pointer";$.style.left="calc(50% - 50px)";$.style.width="100px";$.textContent="START AR";$.onmouseenter=function(){$.style.opacity="1.0"};$.onmouseleave=function(){$.style.opacity="0.5"};$.onclick=function(){if(X===null){navigator.xr.requestSession("immersive-ar",Q).then(U)}else{X.end();if(navigator.xr.offerSession!==undefined){navigator.xr.offerSession("immersive-ar",Q).then(U).catch((E)=>{console.warn(E)})}}};if(navigator.xr.offerSession!==undefined){navigator.xr.offerSession("immersive-ar",Q).then(U).catch((E)=>{console.warn(E)})}}function W(){$.style.display="";$.style.cursor="auto";$.style.left="calc(50% - 75px)";$.style.width="150px";$.onmouseenter=null;$.onmouseleave=null;$.onclick=null}function K(){W();$.textContent="AR NOT SUPPORTED"}function H(X){W();console.warn("Exception when trying to call xr.isSessionSupported",X);$.textContent="AR NOT ALLOWED"}function Y(X){X.style.position="absolute";X.style.bottom="20px";X.style.padding="12px 6px";X.style.border="1px solid #fff";X.style.borderRadius="4px";X.style.background="rgba(0,0,0,0.1)";X.style.color="#fff";X.style.font="normal 13px sans-serif";X.style.textAlign="center";X.style.opacity="0.5";X.style.outline="none";X.style.zIndex="999"}if("xr"in navigator){$.id="ARButton";$.style.display="none";Y($);navigator.xr.isSessionSupported("immersive-ar").then(function(X){X?Z():K()}).catch(H);return $}else{const X=document.createElement("a");if(window.isSecureContext===false){X.href=document.location.href.replace(/^http:/,"https:");X.innerHTML="WEBXR NEEDS HTTPS"}else{X.href="https://immersiveweb.dev/";X.innerHTML="WEBXR NOT AVAILABLE"}X.style.left="calc(50% - 90px)";X.style.width="180px";X.style.textDecoration="none";Y(X);return X}}}var fZ={Always:0,OnChange:1,Never:2};var a1=50;var r1=0.75;var t1=1500000;var e1=10;var Jq=2.5;var Qq=60;class O6{constructor(J={}){if(!J.cameraUp)J.cameraUp=[0,1,0];this.cameraUp=new S().fromArray(J.cameraUp);if(!J.initialCameraPosition)J.initialCameraPosition=[0,10,15];this.initialCameraPosition=new S().fromArray(J.initialCameraPosition);if(!J.initialCameraLookAt)J.initialCameraLookAt=[0,0,0];this.initialCameraLookAt=new S().fromArray(J.initialCameraLookAt);this.dropInMode=J.dropInMode||false;if(J.selfDrivenMode===undefined||J.selfDrivenMode===null)J.selfDrivenMode=true;this.selfDrivenMode=J.selfDrivenMode&&!this.dropInMode;this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this);if(J.useBuiltInControls===undefined)J.useBuiltInControls=true;this.useBuiltInControls=J.useBuiltInControls;this.rootElement=J.rootElement;this.ignoreDevicePixelRatio=J.ignoreDevicePixelRatio||false;this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1;this.halfPrecisionCovariancesOnGPU=J.halfPrecisionCovariancesOnGPU||false;this.threeScene=J.threeScene;this.renderer=J.renderer;this.camera=J.camera;this.gpuAcceleratedSort=J.gpuAcceleratedSort||false;if(J.integerBasedSort===undefined||J.integerBasedSort===null){J.integerBasedSort=true}this.integerBasedSort=J.integerBasedSort;if(J.sharedMemoryForWorkers===undefined||J.sharedMemoryForWorkers===null)J.sharedMemoryForWorkers=true;this.sharedMemoryForWorkers=J.sharedMemoryForWorkers;this.dynamicScene=!!J.dynamicScene;this.antialiased=J.antialiased||false;this.kernel2DSize=J.kernel2DSize===undefined?0.3:J.kernel2DSize;this.webXRMode=J.webXRMode||q6.None;if(this.webXRMode!==q6.None){this.gpuAcceleratedSort=false}this.webXRActive=false;this.webXRSessionInit=J.webXRSessionInit||{};this.renderMode=J.renderMode||fZ.Always;this.sceneRevealMode=J.sceneRevealMode||e6.Default;this.focalAdjustment=J.focalAdjustment||1;this.maxScreenSpaceSplatSize=J.maxScreenSpaceSplatSize||1024;this.logLevel=J.logLevel||k6.None;this.sphericalHarmonicsDegree=J.sphericalHarmonicsDegree||0;this.enableOptionalEffects=J.enableOptionalEffects||false;if(J.enableSIMDInSort===undefined||J.enableSIMDInSort===null)J.enableSIMDInSort=true;this.enableSIMDInSort=J.enableSIMDInSort;if(J.inMemoryCompressionLevel===undefined||J.inMemoryCompressionLevel===null){J.inMemoryCompressionLevel=0}this.inMemoryCompressionLevel=J.inMemoryCompressionLevel;if(J.optimizeSplatData===undefined||J.optimizeSplatData===null){J.optimizeSplatData=true}this.optimizeSplatData=J.optimizeSplatData;if(J.freeIntermediateSplatData===undefined||J.freeIntermediateSplatData===null){J.freeIntermediateSplatData=false}this.freeIntermediateSplatData=J.freeIntermediateSplatData;if(uZ()){const $=_H();if($.major<17){this.enableSIMDInSort=false}if($.major<16){this.sharedMemoryForWorkers=false}}if(J.splatRenderMode===undefined||J.splatRenderMode===null){J.splatRenderMode=i8.ThreeD}this.splatRenderMode=J.splatRenderMode;this.sceneFadeInRateMultiplier=J.sceneFadeInRateMultiplier||1;this.splatSortDistanceMapPrecision=J.splatSortDistanceMapPrecision||K0.DefaultSplatSortDistanceMapPrecision;const Q=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=L0(this.splatSortDistanceMapPrecision,10,Q);this.onSplatMeshChangedCallback=null;this.createSplatMesh();this.controls=null;this.perspectiveControls=null;this.orthographicControls=null;this.orthographicCamera=null;this.perspectiveCamera=null;this.showMeshCursor=false;this.showControlPlane=false;this.showInfo=false;this.sceneHelper=null;this.sortWorker=null;this.sortRunning=false;this.splatRenderCount=0;this.splatSortCount=0;this.lastSplatSortCount=0;this.sortWorkerIndexesToSort=null;this.sortWorkerSortedIndexes=null;this.sortWorkerPrecomputedDistances=null;this.sortWorkerTransforms=null;this.preSortMessages=[];this.runAfterNextSort=[];this.selfDrivenModeRunning=false;this.splatRenderReady=false;this.raycaster=new vH;this.infoPanel=null;this.startInOrthographicMode=false;this.currentFPS=0;this.lastSortTime=0;this.consecutiveRenderFrames=0;this.previousCameraTarget=new S;this.nextCameraTarget=new S;this.mousePosition=new _J;this.mouseDownPosition=new _J;this.mouseDownTime=null;this.resizeObserver=null;this.mouseMoveListener=null;this.mouseDownListener=null;this.mouseUpListener=null;this.keyDownListener=null;this.sortPromise=null;this.sortPromiseResolver=null;this.splatSceneDownloadPromises={};this.splatSceneDownloadAndBuildPromise=null;this.splatSceneRemovalPromise=null;this.loadingSpinner=new ZW(null,this.rootElement||document.body);this.loadingSpinner.hide();this.loadingProgressBar=new SH(this.rootElement||document.body);this.loadingProgressBar.hide();this.infoPanel=new jH(this.rootElement||document.body);this.infoPanel.hide();this.usingExternalCamera=this.dropInMode||this.camera?true:false;this.usingExternalRenderer=this.dropInMode||this.renderer?true:false;this.initialized=false;this.disposing=false;this.disposed=false;this.disposePromise=null;if(!this.dropInMode)this.init()}createSplatMesh(){this.splatMesh=new x0(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize);this.splatMesh.frustumCulled=false;if(this.onSplatMeshChangedCallback)this.onSplatMeshChangedCallback()}init(){if(this.initialized)return;if(!this.rootElement){if(!this.usingExternalRenderer){this.rootElement=document.createElement("div");this.rootElement.style.width="100%";this.rootElement.style.height="100%";this.rootElement.style.position="absolute";document.body.appendChild(this.rootElement)}else{this.rootElement=this.renderer.domElement||document.body}}this.setupCamera();this.setupRenderer();this.setupWebXR(this.webXRSessionInit);this.setupControls();this.setupEventHandlers();this.threeScene=this.threeScene||new PQ;this.sceneHelper=new r6(this.threeScene);this.sceneHelper.setupMeshCursor();this.sceneHelper.setupFocusMarker();this.sceneHelper.setupControlPlane();this.loadingProgressBar.setContainer(this.rootElement);this.loadingSpinner.setContainer(this.rootElement);this.infoPanel.setContainer(this.rootElement);this.initialized=true}setupCamera(){if(!this.usingExternalCamera){const J=new _J;this.getRenderDimensions(J);this.perspectiveCamera=new s0(a1,J.x/J.y,0.1,1000);this.orthographicCamera=new j9(J.x/-2,J.x/2,J.y/2,J.y/-2,0.1,1000);this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera;this.camera.position.copy(this.initialCameraPosition);this.camera.up.copy(this.cameraUp).normalize();this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const J=new _J;this.getRenderDimensions(J);this.renderer=new CZ({antialias:false,precision:"highp"});this.renderer.setPixelRatio(this.devicePixelRatio);this.renderer.autoClear=true;this.renderer.setClearColor(new aJ(0),0);this.renderer.setSize(J.x,J.y);this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(J);this.renderer.setSize(J.x,J.y);this.forceRenderNextFrame()});this.resizeObserver.observe(this.rootElement);this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(J){if(this.webXRMode){if(this.webXRMode===q6.VR){this.rootElement.appendChild(M6.createButton(this.renderer,J))}else if(this.webXRMode===q6.AR){this.rootElement.appendChild(xH.createButton(this.renderer,J))}this.renderer.xr.addEventListener("sessionstart",(Q)=>{this.webXRActive=true});this.renderer.xr.addEventListener("sessionend",(Q)=>{this.webXRActive=false});this.renderer.xr.enabled=true;this.camera.position.copy(this.initialCameraPosition);this.camera.up.copy(this.cameraUp).normalize();this.camera.lookAt(this.initialCameraLookAt)}}setupControls(){if(this.useBuiltInControls&&this.webXRMode===q6.None){if(!this.usingExternalCamera){this.perspectiveControls=new i6(this.perspectiveCamera,this.renderer.domElement);this.orthographicControls=new i6(this.orthographicCamera,this.renderer.domElement)}else{if(this.camera.isOrthographicCamera){this.orthographicControls=new i6(this.camera,this.renderer.domElement)}else{this.perspectiveControls=new i6(this.camera,this.renderer.domElement)}}for(let J of[this.orthographicControls,this.perspectiveControls]){if(J){J.listenToKeyEvents(window);J.rotateSpeed=0.5;J.maxPolarAngle=Math.PI*0.75;J.minPolarAngle=0.1;J.enableDamping=true;J.dampingFactor=0.05;J.target.copy(this.initialCameraLookAt);J.update()}}this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls;this.controls.update()}}setupEventHandlers(){if(this.useBuiltInControls&&this.webXRMode===q6.None){this.mouseMoveListener=this.onMouseMove.bind(this);this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,false);this.mouseDownListener=this.onMouseDown.bind(this);this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,false);this.mouseUpListener=this.onMouseUp.bind(this);this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,false);this.keyDownListener=this.onKeyDown.bind(this);window.addEventListener("keydown",this.keyDownListener,false)}}removeEventHandlers(){if(this.useBuiltInControls){this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener);this.mouseMoveListener=null;this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener);this.mouseDownListener=null;this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener);this.mouseUpListener=null;window.removeEventListener("keydown",this.keyDownListener);this.keyDownListener=null}}setRenderMode(J){this.renderMode=J}setActiveSphericalHarmonicsDegrees(J){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=J;this.splatMesh.material.uniformsNeedUpdate=true}onSplatMeshChanged(J){this.onSplatMeshChangedCallback=J}onKeyDown=function(){const J=new S;const Q=new xJ;const $=new xJ;return function(Z){J.set(0,0,-1);J.transformDirection(this.camera.matrixWorld);Q.makeRotationAxis(J,Math.PI/128);$.makeRotationAxis(J,-Math.PI/128);switch(Z.code){case"KeyG":this.focalAdjustment+=0.02;this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=0.02;this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(Q);break;case"ArrowRight":this.camera.up.transformDirection($);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo;if(this.showInfo){this.infoPanel.show()}else{this.infoPanel.hide()}break;case"KeyO":if(!this.usingExternalCamera){this.setOrthographicMode(!this.camera.isOrthographicCamera)}break;case"KeyP":if(!this.usingExternalCamera){this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled())}break;case"Equal":if(!this.usingExternalCamera){this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+0.05)}break;case"Minus":if(!this.usingExternalCamera){this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-0.05,0))}break}}}();onMouseMove(J){this.mousePosition.set(J.offsetX,J.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition);this.mouseDownTime=E6()}onMouseUp=function(){const J=new _J;return function(Q){J.copy(this.mousePosition).sub(this.mouseDownPosition);const $=E6();const Z=$-this.mouseDownTime<0.5&&J.length()<2;if(Z){this.onMouseClick(Q)}}}();onMouseClick(J){this.mousePosition.set(J.offsetX,J.offsetY);this.checkForFocalPointChange()}checkForFocalPointChange=function(){const J=new _J;const Q=new S;const $=[];return function(){if(!this.transitioningCameraTarget){this.getRenderDimensions(J);$.length=0;this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,J);this.raycaster.intersectSplatMesh(this.splatMesh,$);if($.length>0){const Z=$[0];const W=Z.origin;Q.copy(W).sub(this.camera.position);if(Q.length()>r1){this.previousCameraTarget.copy(this.controls.target);this.nextCameraTarget.copy(W);this.transitioningCameraTarget=true;this.transitioningCameraTargetStartTime=E6()}}}}}();getRenderDimensions(J){if(this.rootElement){J.x=this.rootElement.offsetWidth;J.y=this.rootElement.offsetHeight}else{this.renderer.getSize(J)}}setOrthographicMode(J){if(J===this.camera.isOrthographicCamera)return;const Q=this.camera;const $=J?this.orthographicCamera:this.perspectiveCamera;$.position.copy(Q.position);$.up.copy(Q.up);$.rotation.copy(Q.rotation);$.quaternion.copy(Q.quaternion);$.matrix.copy(Q.matrix);this.camera=$;if(this.controls){const Z=(H)=>{H.saveState();H.reset()};const W=this.controls;const K=J?this.orthographicControls:this.perspectiveControls;Z(K);Z(W);K.target.copy(W.target);if(J){O6.setCameraZoomFromPosition($,Q,W)}else{O6.setCameraPositionFromZoom($,Q,K)}this.controls=K;this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=function(){const J=new S;return function(Q,$,Z){const W=1/($.zoom*0.001);J.copy(Z.target).sub(Q.position).normalize().multiplyScalar(W).negate();Q.position.copy(Z.target).add(J)}}();static setCameraZoomFromPosition=function(){const J=new S;return function(Q,$,Z){const W=J.copy(Z.target).sub($.position).length();Q.zoom=1/(W*0.001)}}();updateSplatMesh=function(){const J=new _J;return function(){if(!this.splatMesh)return;const Q=this.splatMesh.getSplatCount();if(Q>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode);this.splatMesh.updateTransforms();this.getRenderDimensions(J);const $=this.camera.projectionMatrix.elements[0]*0.5*this.devicePixelRatio*J.x;const Z=this.camera.projectionMatrix.elements[5]*0.5*this.devicePixelRatio*J.y;const W=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1;const K=this.focalAdjustment*W;const H=1/K;this.adjustForWebXRStereo(J);this.splatMesh.updateUniforms(J,$*K,Z*K,this.camera.isOrthographicCamera,this.camera.zoom||1,H)}}}();adjustForWebXRStereo(J){if(this.camera&&this.webXRActive){const Q=this.renderer.xr.getCamera();const $=Q.projectionMatrix.elements[0];const Z=this.camera.projectionMatrix.elements[0];J.x*=Z/$}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(J){this.splatSceneDownloadPromises[J.id]=J}removeSplatSceneDownloadPromise(J){delete this.splatSceneDownloadPromises[J.id]}setSplatSceneDownloadAndBuildPromise(J){this.splatSceneDownloadAndBuildPromise=J}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(J,Q={}){if(this.isLoadingOrUnloading()){throw new Error("Cannot add splat scene while another load or unload is already in progress.")}if(this.isDisposingOrDisposed()){throw new Error("Cannot add splat scene after dispose() is called.")}if(Q.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0){console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes');Q.progressiveLoad=false}const $=Q.format!==undefined&&Q.format!==null?Q.format:pZ(J);const Z=O6.isProgressivelyLoadable($)&&Q.progressiveLoad;const W=Q.showLoadingUI!==undefined&&Q.showLoadingUI!==null?Q.showLoadingUI:true;let K=null;if(W){this.loadingSpinner.removeAllTasks();K=this.loadingSpinner.addTask("Downloading...")}const H=()=>{this.loadingProgressBar.hide();this.loadingSpinner.removeAllTasks()};const Y=(O,k,D)=>{if(W){if(D===w0.Downloading){if(O==100){this.loadingSpinner.setMessageForTask(K,"Download complete!")}else{if(Z){this.loadingSpinner.setMessageForTask(K,"Downloading splats...")}else{const F=k?`: ${k}`:`...`;this.loadingSpinner.setMessageForTask(K,`Downloading${F}`)}}}else if(D===w0.Processing){this.loadingSpinner.setMessageForTask(K,"Processing splats...")}}};let X=false;let U=0;const G=(O,k)=>{if(W){if(O&&Z||k&&!Z){this.loadingSpinner.removeTask(K);if(!k&&!X)this.loadingProgressBar.show()}if(Z){if(k){X=true;this.loadingProgressBar.hide()}else{this.loadingProgressBar.setProgress(U)}}}};const E=(O,k,D)=>{U=O;Y(O,k,D);if(Q.onProgress)Q.onProgress(O,k,D)};const N=(O,k,D)=>{if(!Z&&Q.onProgress)Q.onProgress(0,"0%",w0.Processing);const F={rotation:Q.rotation||Q.orientation,position:Q.position,scale:Q.scale,splatAlphaRemovalThreshold:Q.splatAlphaRemovalThreshold};return this.addSplatBuffers([O],[F],D,k&&W,W,Z,Z).then(()=>{if(!Z&&Q.onProgress)Q.onProgress(100,"100%",w0.Processing);G(k,D)})};const q=Z?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this);return q(J,$,Q.splatAlphaRemovalThreshold,N.bind(this),E,H.bind(this),Q.headers)}downloadAndBuildSingleSplatSceneStandardLoad(J,Q,$,Z,W,K,H){const Y=this.downloadSplatSceneToSplatBuffer(J,$,W,false,undefined,Q,H);const X=PZ(Y.abortHandler);Y.then((U)=>{this.removeSplatSceneDownloadPromise(Y);return Z(U,true,true).then(()=>{X.resolve();this.clearSplatSceneDownloadAndBuildPromise()})}).catch((U)=>{if(K)K();this.clearSplatSceneDownloadAndBuildPromise();this.removeSplatSceneDownloadPromise(Y);X.reject(this.updateError(U,`Viewer::addSplatScene -> Could not load file ${J}`))});this.addSplatSceneDownloadPromise(Y);this.setSplatSceneDownloadAndBuildPromise(X.promise);return X.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(J,Q,$,Z,W,K,H){let Y=0;let X=false;const U=[];const G=()=>{if(U.length>0&&!X&&!this.isDisposingOrDisposed()){X=true;const k=U.shift();Z(k.splatBuffer,k.firstBuild,k.finalBuild).then(()=>{X=false;if(k.firstBuild){q.resolve()}else if(k.finalBuild){O.resolve();this.clearSplatSceneDownloadAndBuildPromise()}if(U.length>0){N8(()=>G())}})}};const E=(k,D)=>{if(!this.isDisposingOrDisposed()){if(D||U.length===0||k.getSplatCount()>U[0].splatBuffer.getSplatCount()){U.push({splatBuffer:k,firstBuild:Y===0,finalBuild:D});Y++;G()}}};const N=this.downloadSplatSceneToSplatBuffer(J,$,W,true,E,Q,H);const q=PZ(N.abortHandler);const O=PZ();this.addSplatSceneDownloadPromise(N);this.setSplatSceneDownloadAndBuildPromise(O.promise);N.then(()=>{this.removeSplatSceneDownloadPromise(N)}).catch((k)=>{this.clearSplatSceneDownloadAndBuildPromise();this.removeSplatSceneDownloadPromise(N);const D=this.updateError(k,`Viewer::addSplatScene -> Could not load one or more scenes`);q.reject(D);if(K)K(D)});return q.promise}addSplatScenes(J,Q=true,$=undefined){if(this.isLoadingOrUnloading()){throw new Error("Cannot add splat scene while another load or unload is already in progress.")}if(this.isDisposingOrDisposed()){throw new Error("Cannot add splat scene after dispose() is called.")}const Z=J.length;const W=[];let K;if(Q){this.loadingSpinner.removeAllTasks();K=this.loadingSpinner.addTask("Downloading...")}const H=(G,E,N,q)=>{W[G]=E;let O=0;for(let k=0;k<Z;k++)O+=W[k]||0;O=O/Z;N=`${O.toFixed(2)}%`;if(Q){if(q===w0.Downloading){this.loadingSpinner.setMessageForTask(K,O==100?`Download complete!`:`Downloading: ${N}`)}}if($)$(O,N,q)};const Y=[];const X=[];for(let G=0;G<J.length;G++){const E=J[G];const N=E.format!==undefined&&E.format!==null?E.format:pZ(E.path);const q=this.downloadSplatSceneToSplatBuffer(E.path,E.splatAlphaRemovalThreshold,H.bind(this,G),false,undefined,N,E.headers);Y.push(q);X.push(q.promise)}const U=new D9((G,E)=>{Promise.all(X).then((N)=>{if(Q)this.loadingSpinner.removeTask(K);if($)$(0,"0%",w0.Processing);this.addSplatBuffers(N,J,true,Q,Q,false,false).then(()=>{if($)$(100,"100%",w0.Processing);this.clearSplatSceneDownloadAndBuildPromise();G()})}).catch((N)=>{if(Q)this.loadingSpinner.removeTask(K);this.clearSplatSceneDownloadAndBuildPromise();E(this.updateError(N,`Viewer::addSplatScenes -> Could not load one or more splat scenes.`))}).finally(()=>{this.removeSplatSceneDownloadPromise(U)})},(G)=>{for(let E of Y){E.abort(G)}});this.addSplatSceneDownloadPromise(U);this.setSplatSceneDownloadAndBuildPromise(U);return U}downloadSplatSceneToSplatBuffer(J,Q=1,$=undefined,Z=false,W=undefined,K,H){try{if(K===Z8.Splat||K===Z8.KSplat||K===Z8.Ply){const Y=Z?false:this.optimizeSplatData;if(K===Z8.Splat){return $W.loadFromURL(J,$,Z,W,Q,this.inMemoryCompressionLevel,Y,H)}else if(K===Z8.KSplat){return a6.loadFromURL(J,$,Z,W,H)}else if(K===Z8.Ply){return JW.loadFromURL(J,$,Z,W,Q,this.inMemoryCompressionLevel,Y,this.sphericalHarmonicsDegree,H)}}else if(K===Z8.Spz){return QW.loadFromURL(J,$,Q,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,H)}}catch(Y){throw this.updateError(Y,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${J}`)}static isProgressivelyLoadable(J){return J===Z8.Splat||J===Z8.KSplat||J===Z8.Ply}addSplatBuffers=function(){return function(J,Q=[],$=true,Z=true,W=true,K=false,H=false,Y=true){if(this.isDisposingOrDisposed())return Promise.resolve();let X=null;const U=()=>{if(X!==null){this.loadingSpinner.removeTask(X);X=null}};this.splatRenderReady=false;return new Promise((G)=>{if(Z){X=this.loadingSpinner.addTask("Processing splats...")}N8(()=>{if(this.isDisposingOrDisposed()){G()}else{const E=this.addSplatBuffersToMesh(J,Q,$,W,K,Y);const N=this.splatMesh.getMaxSplatCount();if(this.sortWorker&&this.sortWorker.maxSplatCount!==N)this.disposeSortWorker();if(!this.gpuAcceleratedSort){this.preSortMessages.push({centers:E.centers.buffer,sceneIndexes:E.sceneIndexes.buffer,range:{from:E.from,to:E.to,count:E.count}})}const q=!this.sortWorker&&N>0?this.setupSortWorker(this.splatMesh):Promise.resolve();q.then(()=>{if(this.isDisposingOrDisposed())return;this.runSplatSort(true,true).then((O)=>{if(!this.sortWorker||!O){this.splatRenderReady=true;U();G()}else{if(H){this.splatRenderReady=true}else{this.runAfterNextSort.push(()=>{this.splatRenderReady=true})}this.runAfterNextSort.push(()=>{U();G()})}})})}},true)})}}();addSplatBuffersToMesh=function(){let J;return function(Q,$,Z=true,W=false,K=false,H=true){if(this.isDisposingOrDisposed())return;let Y=[];let X=[];if(!K){Y=this.splatMesh.scenes.map((N)=>N.splatBuffer)||[];X=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map((N)=>N):[]}Y.push(...Q);X.push(...$);if(this.renderer)this.splatMesh.setRenderer(this.renderer);const U=(N)=>{if(this.isDisposingOrDisposed())return;const q=this.splatMesh.getSplatCount();if(W&&q>=t1){if(!N&&!J){this.loadingSpinner.setMinimized(true,true);J=this.loadingSpinner.addTask("Optimizing data structures...")}}};const G=(N)=>{if(this.isDisposingOrDisposed())return;if(N&&J){this.loadingSpinner.removeTask(J);J=null}};const E=this.splatMesh.build(Y,X,true,Z,U,G,H);if(Z&&this.freeIntermediateSplatData)this.splatMesh.freeIntermediateSplatData();return E}}();setupSortWorker(J){if(this.isDisposingOrDisposed())return;return new Promise((Q)=>{const $=this.integerBasedSort?Int32Array:Float32Array;const Z=J.getSplatCount();const W=J.getMaxSplatCount();this.sortWorker=o1(W,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision);this.sortWorker.onmessage=(K)=>{if(K.data.sortDone){this.sortRunning=false;if(this.sharedMemoryForWorkers){this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,K.data.splatRenderCount)}else{const H=new Uint32Array(K.data.sortedIndexes.buffer,0,K.data.splatRenderCount);this.splatMesh.updateRenderIndexes(H,K.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount;this.lastSortTime=K.data.sortTime;this.sortPromiseResolver();this.sortPromiseResolver=null;this.forceRenderNextFrame();if(this.runAfterNextSort.length>0){this.runAfterNextSort.forEach((H)=>{H()});this.runAfterNextSort.length=0}}else if(K.data.sortCanceled){this.sortRunning=false}else if(K.data.sortSetupPhase1Complete){if(this.logLevel>=k6.Info)console.log("Sorting web worker WASM setup complete.");if(this.sharedMemoryForWorkers){this.sortWorkerSortedIndexes=new Uint32Array(K.data.sortedIndexesBuffer,K.data.sortedIndexesOffset,W);this.sortWorkerIndexesToSort=new Uint32Array(K.data.indexesToSortBuffer,K.data.indexesToSortOffset,W);this.sortWorkerPrecomputedDistances=new $(K.data.precomputedDistancesBuffer,K.data.precomputedDistancesOffset,W);this.sortWorkerTransforms=new Float32Array(K.data.transformsBuffer,K.data.transformsOffset,K0.MaxScenes*16)}else{this.sortWorkerIndexesToSort=new Uint32Array(W);this.sortWorkerPrecomputedDistances=new $(W);this.sortWorkerTransforms=new Float32Array(K0.MaxScenes*16)}for(let H=0;H<Z;H++)this.sortWorkerIndexesToSort[H]=H;this.sortWorker.maxSplatCount=W;if(this.logLevel>=k6.Info){console.log("Sorting web worker ready.");const H=this.splatMesh.getSplatDataTextures();const Y=H.covariances.size;const X=H.centerColors.size;console.log("Covariances texture size: "+Y.x+" x "+Y.y);console.log("Centers/colors texture size: "+X.x+" x "+X.y)}Q()}}})}updateError(J,Q){if(J instanceof dZ)return J;if(J instanceof J7){return new Error("File type or server does not support progressive loading.")}return Q?new Error(Q):J}disposeSortWorker(){if(this.sortWorker)this.sortWorker.terminate();this.sortWorker=null;this.sortPromise=null;if(this.sortPromiseResolver){this.sortPromiseResolver();this.sortPromiseResolver=null}this.preSortMessages=[];this.sortRunning=false}removeSplatScene(J,Q=true){return this.removeSplatScenes([J],Q)}removeSplatScenes(J,Q=true){if(this.isLoadingOrUnloading()){throw new Error("Cannot remove splat scene while another load or unload is already in progress.")}if(this.isDisposingOrDisposed()){throw new Error("Cannot remove splat scene after dispose() is called.")}let $;this.splatSceneRemovalPromise=new Promise((Z,W)=>{let K;if(Q){this.loadingSpinner.removeAllTasks();this.loadingSpinner.show();K=this.loadingSpinner.addTask("Removing splat scene...")}const H=()=>{if(Q){this.loadingSpinner.hide();this.loadingSpinner.removeTask(K)}};const Y=(U)=>{H();this.splatSceneRemovalPromise=null;if(!U)Z();else W(U)};const X=()=>{if(this.isDisposingOrDisposed()){Y();return true}return false};$=this.sortPromise||Promise.resolve();$.then(()=>{if(X())return;const U=[];const G=[];const E=[];for(let N=0;N<this.splatMesh.scenes.length;N++){let q=false;for(let O of J){if(O===N){q=true;break}}if(!q){const O=this.splatMesh.scenes[N];U.push(O.splatBuffer);G.push(this.splatMesh.sceneOptions[N]);E.push({position:O.position.clone(),quaternion:O.quaternion.clone(),scale:O.scale.clone()})}}this.disposeSortWorker();this.splatMesh.dispose();this.sceneRevealMode=e6.Instant;this.createSplatMesh();this.addSplatBuffers(U,G,true,false,true).then(()=>{if(X())return;H();this.splatMesh.scenes.forEach((N,q)=>{N.position.copy(E[q].position);N.quaternion.copy(E[q].quaternion);N.scale.copy(E[q].scale)});this.splatMesh.updateTransforms();this.splatRenderReady=false;this.runSplatSort(true).then(()=>{if(X()){this.splatRenderReady=true;return}$=this.sortPromise||Promise.resolve();$.then(()=>{this.splatRenderReady=true;Y()})})}).catch((N)=>{Y(N)})})});return this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode){if(this.webXRMode){this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc)}else{this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)}this.selfDrivenModeRunning=true}else{throw new Error("Cannot start viewer unless it is in self driven mode.")}}stop(){if(this.selfDrivenMode&&this.selfDrivenModeRunning){if(this.webXRMode){this.renderer.setAnimationLoop(null)}else{cancelAnimationFrame(this.requestFrameId)}this.selfDrivenModeRunning=false}}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let J=[];let Q=[];for(let $ in this.splatSceneDownloadPromises){if(this.splatSceneDownloadPromises.hasOwnProperty($)){const Z=this.splatSceneDownloadPromises[$];Q.push(Z);J.push(Z.promise)}}if(this.sortPromise){J.push(this.sortPromise)}this.disposing=true;this.disposePromise=Promise.all(J).finally(()=>{this.stop();if(this.orthographicControls){this.orthographicControls.dispose();this.orthographicControls=null}if(this.perspectiveControls){this.perspectiveControls.dispose();this.perspectiveControls=null}this.controls=null;if(this.splatMesh){this.splatMesh.dispose();this.splatMesh=null}if(this.sceneHelper){this.sceneHelper.dispose();this.sceneHelper=null}if(this.resizeObserver){this.resizeObserver.unobserve(this.rootElement);this.resizeObserver=null}this.disposeSortWorker();this.removeEventHandlers();this.loadingSpinner.removeAllTasks();this.loadingSpinner.setContainer(null);this.loadingProgressBar.hide();this.loadingProgressBar.setContainer(null);this.infoPanel.setContainer(null);this.camera=null;this.threeScene=null;this.splatRenderReady=false;this.initialized=false;if(this.renderer){if(!this.usingExternalRenderer){this.rootElement.removeChild(this.renderer.domElement);this.renderer.dispose()}this.renderer=null}if(!this.usingExternalRenderer){document.body.removeChild(this.rootElement)}this.sortWorkerSortedIndexes=null;this.sortWorkerIndexesToSort=null;this.sortWorkerPrecomputedDistances=null;this.sortWorkerTransforms=null;this.disposed=true;this.disposing=false;this.disposePromise=null});Q.forEach(($)=>{$.abort("Scene disposed")});return this.disposePromise}selfDrivenUpdate(){if(this.selfDrivenMode&&!this.webXRMode){this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)}this.update();if(this.shouldRender()){this.render();this.consecutiveRenderFrames++}else{this.consecutiveRenderFrames=0}this.renderNextFrame=false}forceRenderNextFrame(){this.renderNextFrame=true}shouldRender=function(){let J=0;const Q=new S;const $=new G0;const Z=0.0001;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return false;let W=false;let K=false;if(this.camera){const H=this.camera.position;const Y=this.camera.quaternion;K=Math.abs(H.x-Q.x)>Z||Math.abs(H.y-Q.y)>Z||Math.abs(H.z-Q.z)>Z||Math.abs(Y.x-$.x)>Z||Math.abs(Y.y-$.y)>Z||Math.abs(Y.z-$.z)>Z||Math.abs(Y.w-$.w)>Z}W=this.renderMode!==fZ.Never&&(J===0||this.splatMesh.visibleRegionChanging||K||this.renderMode===fZ.Always||this.dynamicMode===true||this.renderNextFrame);if(this.camera){Q.copy(this.camera.position);$.copy(this.camera.quaternion)}J++;return W}}();render=function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const J=($)=>{for(let Z of $.children){if(Z.visible)return true}return false};const Q=this.renderer.autoClear;if(J(this.threeScene)){this.renderer.render(this.threeScene,this.camera);this.renderer.autoClear=false}this.renderer.render(this.splatMesh,this.camera);this.renderer.autoClear=false;if(this.sceneHelper.getFocusMarkerOpacity()>0)this.renderer.render(this.sceneHelper.focusMarker,this.camera);if(this.showControlPlane)this.renderer.render(this.sceneHelper.controlPlane,this.camera);this.renderer.autoClear=Q}}();update(J,Q){if(this.dropInMode)this.updateForDropInMode(J,Q);if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;if(this.controls){this.controls.update();if(this.camera.isOrthographicCamera&&!this.usingExternalCamera){O6.setCameraPositionFromZoom(this.camera,this.camera,this.controls)}}this.runSplatSort();this.updateForRendererSizeChanges();this.updateSplatMesh();this.updateMeshCursor();this.updateFPS();this.timingSensitiveUpdates();this.updateInfoPanel();this.updateControlPlane()}updateForDropInMode(J,Q){this.renderer=J;if(this.splatMesh)this.splatMesh.setRenderer(this.renderer);this.camera=Q;if(this.controls)this.controls.object=Q;this.init()}updateFPS=function(){let J=E6();let Q=0;return function(){if(this.consecutiveRenderFrames>Qq){const $=E6();const Z=$-J;if(Z>=1){this.currentFPS=Q;Q=0;J=$}else{Q++}}else{this.currentFPS=null}}}();updateForRendererSizeChanges=function(){const J=new _J;const Q=new _J;let $;return function(){if(!this.usingExternalCamera){this.renderer.getSize(Q);if($===undefined||$!==this.camera.isOrthographicCamera||Q.x!==J.x||Q.y!==J.y){if(this.camera.isOrthographicCamera){this.camera.left=-Q.x/2;this.camera.right=Q.x/2;this.camera.top=Q.y/2;this.camera.bottom=-Q.y/2}else{this.camera.aspect=Q.x/Q.y}this.camera.updateProjectionMatrix();J.copy(Q);$=this.camera.isOrthographicCamera}}}}();timingSensitiveUpdates=function(){let J;return function(){const Q=E6();if(!J)J=Q;const $=Q-J;this.updateCameraTransition(Q);this.updateFocusMarker($);J=Q}}();updateCameraTransition=function(){let J=new S;let Q=new S;let $=new S;return function(Z){if(this.transitioningCameraTarget){Q.copy(this.previousCameraTarget).sub(this.camera.position).normalize();$.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const W=Math.acos(Q.dot($));const K=W/(Math.PI/3)*0.65+0.3;const H=K/W*(Z-this.transitioningCameraTargetStartTime);J.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,H);this.camera.lookAt(J);this.controls.target.copy(J);if(H>=1){this.transitioningCameraTarget=false}}}}();updateFocusMarker=function(){const J=new _J;let Q=false;return function($){this.getRenderDimensions(J);if(this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(true);const Z=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let W=Math.min(Z+e1*$,1);this.sceneHelper.setFocusMarkerOpacity(W);this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,J);Q=true;this.forceRenderNextFrame()}else{let Z;if(Q)Z=1;else Z=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1);if(Z>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,J);let W=Math.max(Z-Jq*$,0);this.sceneHelper.setFocusMarkerOpacity(W);if(W===0)this.sceneHelper.setFocusMarkerVisibility(false)}if(Z>0)this.forceRenderNextFrame();Q=false}}}();updateMeshCursor=function(){const J=[];const Q=new _J;return function(){if(this.showMeshCursor){this.forceRenderNextFrame();this.getRenderDimensions(Q);J.length=0;this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,Q);this.raycaster.intersectSplatMesh(this.splatMesh,J);if(J.length>0){this.sceneHelper.setMeshCursorVisibility(true);this.sceneHelper.positionAndOrientMeshCursor(J[0].origin,this.camera)}else{this.sceneHelper.setMeshCursorVisibility(false)}}else{if(this.sceneHelper.getMeschCursorVisibility())this.forceRenderNextFrame();this.sceneHelper.setMeshCursorVisibility(false)}}}();updateInfoPanel=function(){const J=new _J;return function(){if(!this.showInfo)return;const Q=this.splatMesh.getSplatCount();this.getRenderDimensions(J);const $=this.controls?this.controls.target:null;const Z=this.showMeshCursor?this.sceneHelper.meshCursor.position:null;const W=Q>0?this.splatRenderCount/Q*100:0;this.infoPanel.update(J,this.camera.position,$,this.camera.up,this.camera.isOrthographicCamera,Z,this.currentFPS||"N/A",Q,this.splatRenderCount,W,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}();updateControlPlane(){if(this.showControlPlane){this.sceneHelper.setControlPlaneVisibility(true);this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)}else{this.sceneHelper.setControlPlaneVisibility(false)}}runSplatSort=function(){const J=new xJ;const Q=[];const $=new S(0,0,-1);const Z=new S(0,0,-1);const W=new S;const K=new S;const H=[];const Y=[{angleThreshold:0.55,sortFractions:[0.125,0.33333,0.75]},{angleThreshold:0.65,sortFractions:[0.33333,0.66667]},{angleThreshold:0.8,sortFractions:[0.5]}];return function(X=false,U=false){if(!this.initialized)return Promise.resolve(false);if(this.sortRunning)return Promise.resolve(true);if(this.splatMesh.getSplatCount()<=0){this.splatRenderCount=0;return Promise.resolve(false)}let G=0;let E=0;let N=false;let q=false;Z.set(0,0,-1).applyQuaternion(this.camera.quaternion);G=Z.dot($);E=K.copy(this.camera.position).sub(W).length();if(!X){if(!this.splatMesh.dynamicMode&&H.length===0){if(G<=0.99)N=true;if(E>=1)q=true;if(!N&&!q)return Promise.resolve(false)}}this.sortRunning=true;let{splatRenderCount:O,shouldSortAll:k}=this.gatherSceneNodesForSort();k=k||U;this.splatRenderCount=O;J.copy(this.camera.matrixWorld).invert();const D=this.perspectiveCamera||this.camera;J.premultiply(D.projectionMatrix);if(!this.splatMesh.dynamicMode)J.multiply(this.splatMesh.matrixWorld);let F=Promise.resolve(true);if(this.gpuAcceleratedSort&&(H.length<=1||H.length%2===0)){F=this.splatMesh.computeDistancesOnGPU(J,this.sortWorkerPrecomputedDistances)}F.then(()=>{if(H.length===0){if(this.splatMesh.dynamicMode||k){H.push(this.splatRenderCount)}else{for(let R of Y){if(G<R.angleThreshold){for(let C of R.sortFractions){H.push(Math.floor(this.splatRenderCount*C))}break}}H.push(this.splatRenderCount)}}let L=Math.min(H.shift(),this.splatRenderCount);this.splatSortCount=L;Q[0]=this.camera.position.x;Q[1]=this.camera.position.y;Q[2]=this.camera.position.z;const V={modelViewProj:J.elements,cameraPosition:Q,splatRenderCount:this.splatRenderCount,splatSortCount:L,usePrecomputedDistances:this.gpuAcceleratedSort};if(this.splatMesh.dynamicMode){this.splatMesh.fillTransformsArray(this.sortWorkerTransforms)}if(!this.sharedMemoryForWorkers){V.indexesToSort=this.sortWorkerIndexesToSort;V.transforms=this.sortWorkerTransforms;if(this.gpuAcceleratedSort){V.precomputedDistances=this.sortWorkerPrecomputedDistances}}this.sortPromise=new Promise((R)=>{this.sortPromiseResolver=R});if(this.preSortMessages.length>0){this.preSortMessages.forEach((R)=>{this.sortWorker.postMessage(R)});this.preSortMessages=[]}this.sortWorker.postMessage({sort:V});if(H.length===0){W.copy(this.camera.position);$.copy(Z)}return true});return F}}();gatherSceneNodesForSort=function(){const J=[];let Q=null;const $=new S;const Z=new S;const W=new S;const K=new xJ;const H=new xJ;const Y=new xJ;const X=new S;const U=new S(0,0,-1);const G=new S;const E=(N)=>{return G.copy(N.max).sub(N.min).length()};return function(N=false){this.getRenderDimensions(X);const q=X.y/2/Math.tan(this.camera.fov/2*h6.DEG2RAD);const O=Math.atan(X.x/2/q);const k=Math.atan(X.y/2/q);const D=Math.cos(O);const F=Math.cos(k);const L=this.splatMesh.getSplatTree();if(L){H.copy(this.camera.matrixWorld).invert();if(!this.splatMesh.dynamicMode)H.multiply(this.splatMesh.matrixWorld);let V=0;let R=0;for(let M=0;M<L.subTrees.length;M++){const I=L.subTrees[M];K.copy(H);if(this.splatMesh.dynamicMode){this.splatMesh.getSceneTransform(M,Y);K.multiply(Y)}const T=I.nodesWithIndexes.length;for(let B=0;B<T;B++){const _=I.nodesWithIndexes[B];if(!_.data||!_.data.indexes||_.data.indexes.length===0)continue;W.copy(_.center).applyMatrix4(K);const A=W.length();W.normalize();$.copy(W).setX(0).normalize();Z.copy(W).setY(0).normalize();const y=U.dot(Z);const f=U.dot($);const j=E(_);const g=f<F-0.6;const x=y<D-0.6;if(!N&&((x||g)&&A>j)){continue}R+=_.data.indexes.length;J[V]=_;_.data.distanceToNode=A;V++}}J.length=V;J.sort((M,I)=>{if(M.data.distanceToNode<I.data.distanceToNode)return-1;else return 1});let C=R*K0.BytesPerInt;for(let M=0;M<V;M++){const I=J[M];const T=I.data.indexes.length;const B=T*K0.BytesPerInt;let _=new Uint32Array(this.sortWorkerIndexesToSort.buffer,C-B,T);_.set(I.data.indexes);C-=B}return{splatRenderCount:R,shouldSortAll:false}}else{const V=this.splatMesh.getSplatCount();if(!Q||Q.length!==V){Q=new Uint32Array(V);for(let R=0;R<V;R++){Q[R]=R}}this.sortWorkerIndexesToSort.set(Q);return{splatRenderCount:V,shouldSortAll:true}}}}();getSplatMesh(){return this.splatMesh}getSplatScene(J){return this.splatMesh.getScene(J)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}}class mZ extends Q9{constructor(J={}){super();J.selfDrivenMode=false;J.useBuiltInControls=false;J.rootElement=null;J.dropInMode=true;J.camera=undefined;J.renderer=undefined;this.viewer=new O6(J);this.splatMesh=null;this.updateSplatMesh();this.callbackMesh=mZ.createCallbackMesh();this.add(this.callbackMesh);this.callbackMesh.onBeforeRender=mZ.onBeforeRender.bind(this,this.viewer);this.viewer.onSplatMeshChanged(()=>{this.updateSplatMesh()})}updateSplatMesh(){if(this.splatMesh!==this.viewer.splatMesh){if(this.splatMesh){this.remove(this.splatMesh)}this.splatMesh=this.viewer.splatMesh;this.add(this.viewer.splatMesh)}}addSplatScene(J,Q={}){if(Q.showLoadingUI!==false)Q.showLoadingUI=true;return this.viewer.addSplatScene(J,Q)}addSplatScenes(J,Q){if(Q!==false)Q=true;return this.viewer.addSplatScenes(J,Q)}getSplatScene(J){return this.viewer.getSplatScene(J)}removeSplatScene(J,Q=true){return this.viewer.removeSplatScene(J,Q)}removeSplatScenes(J,Q=true){return this.viewer.removeSplatScenes(J,Q)}getSceneCount(){return this.viewer.getSceneCount()}setActiveSphericalHarmonicsDegrees(J){this.viewer.setActiveSphericalHarmonicsDegrees(J)}async dispose(){return await this.viewer.dispose()}static onBeforeRender(J,Q,$,Z){J.update(Q,Z)}static createCallbackMesh(){const J=new P9(1,8,8);const Q=new w8;Q.colorWrite=false;Q.depthWrite=false;const $=new M0(J,Q);$.frustumCulled=false;return $}}export{q6 as WebXRMode,O6 as Viewer,QW as SpzLoader,i8 as SplatRenderMode,eZ as SplatPartitioner,N0 as SplatParser,$W as SplatLoader,Q7 as SplatBufferGenerator,l as SplatBuffer,e6 as SceneRevealMode,Z8 as SceneFormat,fZ as RenderMode,gZ as PlyParser,JW as PlyLoader,eJ as PlayCanvasCompressedPlyParser,i6 as OrbitControls,k6 as LogLevel,bO as LoaderUtils,a6 as KSplatLoader,mZ as DropInViewer,D9 as AbortablePromise};
