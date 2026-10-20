/* Trimline 1.1.0 — STEP / IGES viewer. three.js (MIT) */
var Qo="160",_i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mu=0,Fc=1,bu=2;var gh=1,Su=2,Nn=3,$n=0,Ye=1,Xe=2;var Xn=0,Gi=1,zc=2,Bc=3,kc=4,Eu=5,ci=100,wu=101,Tu=102,Hc=103,Vc=104,Au=200,Cu=201,Ru=202,Pu=203,ho=204,uo=205,Iu=206,Lu=207,Du=208,Nu=209,Uu=210,Ou=211,Fu=212,zu=213,Bu=214,ku=0,Hu=1,Vu=2,yr=3,Gu=4,Wu=5,Xu=6,qu=7,_h=0,$u=1,Yu=2,qn=0,Zu=1,ju=2,Ju=3,Ku=4,Qu=5,td=6;var vh=300,qi=301,$i=302,fo=303,po=304,Yr=306,mo=1e3,gn=1001,go=1002,Ae=1003,Gc=1004;var Da=1005;var on=1006,ed=1007;var Ss=1008;var An=1009,nd=1010,id=1011,tc=1012,xh=1013,Wn=1014,Tn=1015,Es=1016,yh=1017,Mh=1018,hi=1020,sd=1021,_n=1023,rd=1024,ad=1025,ui=1026,Yi=1027,od=1028,bh=1029,cd=1030,Sh=1031,Eh=1033,Na=33776,Ua=33777,Oa=33778,Fa=33779,Wc=35840,Xc=35841,qc=35842,$c=35843,wh=36196,Yc=37492,Zc=37496,jc=37808,Jc=37809,Kc=37810,Qc=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,cl=37820,ll=37821,za=36492,hl=36494,ul=36495,ld=36283,dl=36284,fl=36285,pl=36286;var Mr=2300,br=2301,Ba=2302,ml=2400,gl=2401,_l=2402;var Th=3e3,di=3001,hd=3200,ud=3201,Ah=0,dd=1,cn="",_e="srgb",Fn="srgb-linear",ec="display-p3",Zr="display-p3-linear",Sr="linear",oe="srgb",Er="rec709",wr="p3";var Si=7680;var vl=519,fd=512,pd=513,md=514,Ch=515,gd=516,_d=517,vd=518,xd=519,_o=35044;var xl="300 es",vo=1035,Un=2e3,Tr=2001,ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=1234567,xs=Math.PI/180,ws=180/Math.PI;function On(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function nc(i,t){return(i%t+t)%t}function yd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Md(i,t,e){return i!==t?(e-i)/(t-i):0}function ys(i,t,e){return(1-e)*i+e*t}function bd(i,t,e,n){return ys(i,t,1-Math.exp(-e*n))}function Sd(i,t=1){return t-Math.abs(nc(i,t*2)-t)}function Ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Td(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ad(i,t){return i+Math.random()*(t-i)}function Cd(i){return i*(.5-Math.random())}function Rd(i){i!==void 0&&(yl=i);let t=yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pd(i){return i*xs}function Id(i){return i*ws}function xo(i){return(i&i-1)===0&&i!==0}function Ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ar(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),u=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*u,o*l);break;case"YXY":i.set(c*u,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*u,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ee={DEG2RAD:xs,RAD2DEG:ws,generateUUID:On,clamp:Ce,euclideanModulo:nc,mapLinear:yd,inverseLerp:Md,lerp:ys,damp:bd,pingpong:Sd,smoothstep:Ed,smootherstep:wd,randInt:Td,randFloat:Ad,randFloatSpread:Cd,seededRandom:Rd,degToRad:Pd,radToDeg:Id,isPowerOfTwo:xo,ceilPowerOfTwo:Ld,floorPowerOfTwo:Ar,setQuaternionFromProperEuler:Dd,normalize:Qt,denormalize:wn},wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],v=s[4],T=s[7],I=s[2],C=s[5],A=s[8];return r[0]=a*_+o*E+c*I,r[3]=a*m+o*v+c*C,r[6]=a*p+o*T+c*A,r[1]=l*_+h*E+f*I,r[4]=l*m+h*v+f*C,r[7]=l*p+h*T+f*A,r[2]=d*_+u*E+g*I,r[5]=d*m+u*v+g*C,r[8]=d*p+u*T+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,g=e*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=u*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new qt;function Rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){let i=Cr("canvas");return i.style.display="block",i}var Ml={};function Ms(i){i in Ml||(Ml[i]=!0,console.warn(i))}var bl=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sl=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$s={[Fn]:{transfer:Sr,primaries:Er,toReference:i=>i,fromReference:i=>i},[_e]:{transfer:oe,primaries:Er,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Zr]:{transfer:Sr,primaries:wr,toReference:i=>i.applyMatrix3(Sl),fromReference:i=>i.applyMatrix3(bl)},[ec]:{transfer:oe,primaries:wr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Sl),fromReference:i=>i.applyMatrix3(bl).convertLinearToSRGB()}},Ud=new Set([Fn,Zr]),te={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ud.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=$s[t].toReference,s=$s[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return $s[i].primaries},getTransfer:function(i){return i===cn?Sr:$s[i].transfer}};function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,Rr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Cr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Od=0,Pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=On(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Va(s[a].image)):r.push(Va(s[a]))}else r=Va(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fd=0,vn=class i extends ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=on,a=Ss,o=_n,c=An,l=i.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=On(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===di?_e:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mo:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mo:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?di:Th}set encoding(t){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===di?_e:cn}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=vh;vn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,T=(u+1)/2,I=(p+1)/2,C=(h+d)/4,A=(f+_)/4,H=(g+m)/4;return v>T&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=C/n,r=A/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=C/s,r=H/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=H/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yo=class extends ln{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===di?_e:cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ir=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mo=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==d||l!==u||h!==g){let m=1-o,p=c*d+l*u+h*g+f*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let I=Math.sqrt(v),C=Math.atan2(I,p*E);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}let T=o*E;if(c=c*m+d*T,l=l*m+u*T,h=h*m+g*T,f=f*m+_*T,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=I,l*=I,h*=I,f*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*u-l*d,t[e+1]=c*g+h*d+l*f-o*u,t[e+2]=l*g+h*u+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new R,El=new nn,Ze=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Zs.subVectors(this.max,fs),wi.subVectors(t.a,fs),Ti.subVectors(t.b,fs),Ai.subVectors(t.c,fs),Bn.subVectors(Ti,wi),kn.subVectors(Ai,Ti),ii.subVectors(wi,Ai);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!Wa(e,wi,Ti,Ai,Zs)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,wi,Ti,Ai,Zs))?!1:(js.crossVectors(Bn,kn),e=[js.x,js.y,js.z],Wa(e,wi,Ti,Ai,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Rn=[new R,new R,new R,new R,new R,new R,new R,new R],fn=new R,Ys=new Ze,wi=new R,Ti=new R,Ai=new R,Bn=new R,kn=new R,ii=new R,fs=new R,Zs=new R,js=new R,si=new R;function Wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);let o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),c=t.dot(si),l=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zd=new Ze,ps=new R,Xa=new R,xn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Xa)),this.expandByPoint(ps.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new R,qa=new R,Js=new R,Hn=new R,$a=new R,Ks=new R,Ya=new R,Yn=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=Hn.dot(this.direction),c=-Hn.dot(Js),l=Hn.lengthSq(),h=Math.abs(1-a*a),f,d,u,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(qa).addScaledVector(Js,d),u}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){$a.subVectors(e,t),Ks.subVectors(n,t),Ya.crossVectors($a,Ks);let a=this.direction.dot(Ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);let c=o*this.direction.dot(Ks.crossVectors(Hn,Ks));if(c<0)return null;let l=o*this.direction.dot($a.cross(Hn));if(l<0||c+l>a)return null;let h=-o*Hn.dot(Ya);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class i{constructor(t,e,n,s,r,a,o,c,l,h,f,d,u,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+u*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,u=c*f,g=l*h,_=l*f;e[0]=d+_*o,e[4]=g*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,u=c*f,g=l*h,_=l*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,u=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=g*l-u,e[8]=d*l+_,e[1]=c*f,e[5]=_*l+d,e[9]=u*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,u=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+g,e[10]=d-_*f}else if(t.order==="XZY"){let d=a*c,u=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+_,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,kd)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Vn.crossVectors(n,Ke),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Vn.crossVectors(n,Ke)),Vn.normalize(),Qs.crossVectors(Ke,Vn),s[0]=Vn.x,s[4]=Qs.x,s[8]=Ke.x,s[1]=Vn.y,s[5]=Qs.y,s[9]=Ke.y,s[2]=Vn.z,s[6]=Qs.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],v=n[7],T=n[11],I=n[15],C=s[0],A=s[4],H=s[8],y=s[12],b=s[1],N=s[5],X=s[9],nt=s[13],L=s[2],U=s[6],G=s[10],$=s[14],q=s[3],W=s[7],K=s[11],et=s[15];return r[0]=a*C+o*b+c*L+l*q,r[4]=a*A+o*N+c*U+l*W,r[8]=a*H+o*X+c*G+l*K,r[12]=a*y+o*nt+c*$+l*et,r[1]=h*C+f*b+d*L+u*q,r[5]=h*A+f*N+d*U+u*W,r[9]=h*H+f*X+d*G+u*K,r[13]=h*y+f*nt+d*$+u*et,r[2]=g*C+_*b+m*L+p*q,r[6]=g*A+_*N+m*U+p*W,r[10]=g*H+_*X+m*G+p*K,r[14]=g*y+_*nt+m*$+p*et,r[3]=E*C+v*b+T*L+I*q,r[7]=E*A+v*N+T*U+I*W,r[11]=E*H+v*X+T*G+I*K,r[15]=E*y+v*nt+T*$+I*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*o*d+n*l*d+s*o*u-n*c*u)+_*(+e*c*u-e*l*d+r*a*d-s*a*u+s*l*h-r*c*h)+m*(+e*l*f-e*o*u-r*a*f+n*a*u+r*o*h-n*l*h)+p*(-s*o*h-e*c*f+e*o*d+s*a*f-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=f*m*l-_*d*l+_*c*u-o*m*u-f*c*p+o*d*p,v=g*d*l-h*m*l-g*c*u+a*m*u+h*c*p-a*d*p,T=h*_*l-g*f*l+g*o*u-a*_*u-h*o*p+a*f*p,I=g*f*c-h*_*c-g*o*d+a*_*d+h*o*m-a*f*m,C=e*E+n*v+s*T+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=E*A,t[1]=(_*d*r-f*m*r-_*s*u+n*m*u+f*s*p-n*d*p)*A,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*A,t[3]=(f*c*r-o*d*r-f*s*l+n*d*l+o*s*u-n*c*u)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*s*u-e*m*u-h*s*p+e*d*p)*A,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*A,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*u+e*c*u)*A,t[8]=T*A,t[9]=(g*f*r-h*_*r-g*n*u+e*_*u+h*n*p-e*f*p)*A,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*u-e*o*u)*A,t[12]=I*A,t[13]=(h*_*s-g*f*s+g*n*d-e*_*d-h*n*m+e*f*m)*A,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*A,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,g=r*f,_=a*h,m=a*f,p=o*f,E=c*l,v=c*h,T=c*f,I=n.x,C=n.y,A=n.z;return s[0]=(1-(_+p))*I,s[1]=(u+T)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(u-T)*C,s[5]=(1-(d+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(g+v)*A,s[9]=(m-E)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),a=Ci.set(s[4],s[5],s[6]).length(),o=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);let l=1/r,h=1/a,f=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Un){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),u,g;if(o===Un)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Tr)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Un){let c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*l,u=(n+s)*h,g,_;if(o===Un)g=(a+r)*f,_=-2*f;else if(o===Tr)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new R,pn=new Pt,Bd=new R(0,0,0),kd=new R(1,1,1),Vn=new R,Qs=new R,Ke=new R,wl=new Pt,Tl=new nn,Lr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Lr.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hd=0,Al=new R,Ri=new nn,In=new Pt,tr=new R,ms=new R,Vd=new R,Gd=new nn,Cl=new R(1,0,0),Rl=new R(0,1,0),Pl=new R(0,0,1),Wd={type:"added"},Xd={type:"removed"},De=class i extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Lr,n=new nn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new qt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Pl,t)}translateOnAxis(t,e){return Al.copy(t).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ms,tr,this.up):In.lookAt(tr,ms,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(In),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new R(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new R,Ln=new R,Za=new R,Dn=new R,Pi=new R,Ii=new R,Il=new R,ja=new R,Ja=new R,Ka=new R,er=!1,ki=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Ln.subVectors(n,e),Za.subVectors(t,e);let a=mn.dot(mn),o=mn.dot(Ln),c=mn.dot(Za),l=Ln.dot(Ln),h=Ln.dot(Za),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,n,s,r,a,o,c){return er===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),er=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Ln.subVectors(t,e),mn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),mn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return er===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),er=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Pi.subVectors(s,n),Ii.subVectors(r,n),ja.subVectors(t,n);let c=Pi.dot(ja),l=Ii.dot(ja);if(c<=0&&l<=0)return e.copy(n);Ja.subVectors(t,s);let h=Pi.dot(Ja),f=Ii.dot(Ja);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Pi,a);Ka.subVectors(t,r);let u=Pi.dot(Ka),g=Ii.dot(Ka);if(g>=0&&u<=g)return e.copy(r);let _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ii,o);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return Il.subVectors(r,s),o=(f-h)/(f-h+(u-g)),e.copy(s).addScaledVector(Il,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Pi,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function Qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=nc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qa(a,r,t+1/3),this.g=Qa(a,r,t),this.b=Qa(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return te.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ce(Fe.r*255,0,255))*65536+Math.round(Ce(Fe.g*255,0,255))*256+Math.round(Ce(Fe.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=_e){te.fromWorkingColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(nr);let n=ys(Gn.h,nr.h,e),s=ys(Gn.s,nr.s,e),r=ys(Gn.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Rt;Rt.NAMES=Ph;var qd=0,zn=class extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Gi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Zi=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new R,ir=new wt,ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_o&&(t.usage=this.usage),t}};var Dr=class extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nr=class extends ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var en=class extends ie{constructor(t,e,n){super(new Float32Array(t),e,n)}};var $d=0,an=new Pt,to=new De,Li=new R,Qe=new Ze,gs=new Ze,Te=new R,pe=class i extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?Nr:Dr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Qe.min,gs.min),Qe.expandByPoint(Te),Te.addVectors(Qe.max,gs.max),Qe.expandByPoint(Te)):(Qe.expandByPoint(gs.min),Qe.expandByPoint(gs.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Te.fromBufferAttribute(o,l),c&&(Li.fromBufferAttribute(t,l),Te.add(Li)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new R,h[b]=new R;let f=new R,d=new R,u=new R,g=new wt,_=new wt,m=new wt,p=new R,E=new R;function v(b,N,X){f.fromArray(s,b*3),d.fromArray(s,N*3),u.fromArray(s,X*3),g.fromArray(a,b*2),_.fromArray(a,N*2),m.fromArray(a,X*2),d.sub(f),u.sub(f),_.sub(g),m.sub(g);let nt=1/(_.x*m.y-m.x*_.y);isFinite(nt)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(u,-_.y).multiplyScalar(nt),E.copy(u).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(nt),l[b].add(p),l[N].add(p),l[X].add(p),h[b].add(E),h[N].add(E),h[X].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,N=T.length;b<N;++b){let X=T[b],nt=X.start,L=X.count;for(let U=nt,G=nt+L;U<G;U+=3)v(n[U+0],n[U+1],n[U+2])}let I=new R,C=new R,A=new R,H=new R;function y(b){A.fromArray(r,b*3),H.copy(A);let N=l[b];I.copy(N),I.sub(A.multiplyScalar(A.dot(N))).normalize(),C.crossVectors(H,N);let nt=C.dot(h[b])<0?-1:1;c[b*4]=I.x,c[b*4+1]=I.y,c[b*4+2]=I.z,c[b*4+3]=nt}for(let b=0,N=T.length;b<N;++b){let X=T[b],nt=X.start,L=X.count;for(let U=nt,G=nt+L;U<G;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,f=new R;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[u++]}return new ie(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=new Pt,ri=new Yn,sr=new xn,Dl=new R,Di=new R,Ni=new R,Ui=new R,eo=new R,rr=new R,ar=new wt,or=new wt,cr=new wt,Nl=new R,Ul=new R,Ol=new R,lr=new R,hr=new R,Le=class extends De{constructor(t=new pe,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(eo.fromBufferAttribute(f,t),a?rr.addScaledVector(eo,h):rr.addScaledVector(eo.sub(e),h))}e.add(rr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(sr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(sr,Dl)===null||ri.origin.distanceToSquared(Dl)>(t.far-t.near)**2))&&(Ll.copy(r).invert(),ri.copy(t.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,u.start),v=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let T=E,I=v;T<I;T+=3){let C=o.getX(T),A=o.getX(T+1),H=o.getX(T+2);s=ur(this,p,t,n,l,h,f,C,A,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let E=o.getX(m),v=o.getX(m+1),T=o.getX(m+2);s=ur(this,a,t,n,l,h,f,E,v,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,u.start),v=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let T=E,I=v;T<I;T+=3){let C=T,A=T+1,H=T+2;s=ur(this,p,t,n,l,h,f,C,A,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let E=m,v=m+1,T=m+2;s=ur(this,a,t,n,l,h,f,E,v,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Yd(i,t,e,n,s,r,a,o){let c;if(t.side===Ye?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===$n,o),c===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(hr);return l<e.near||l>e.far?null:{distance:l,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Di),i.getVertexPosition(c,Ni),i.getVertexPosition(l,Ui);let h=Yd(i,t,e,n,Di,Ni,Ui,lr);if(h){s&&(ar.fromBufferAttribute(s,o),or.fromBufferAttribute(s,c),cr.fromBufferAttribute(s,l),h.uv=ki.getInterpolation(lr,Di,Ni,Ui,ar,or,cr,new wt)),r&&(ar.fromBufferAttribute(r,o),or.fromBufferAttribute(r,c),cr.fromBufferAttribute(r,l),h.uv1=ki.getInterpolation(lr,Di,Ni,Ui,ar,or,cr,new wt),h.uv2=h.uv1),a&&(Nl.fromBufferAttribute(a,o),Ul.fromBufferAttribute(a,c),Ol.fromBufferAttribute(a,l),h.normal=ki.getInterpolation(lr,Di,Ni,Ui,Nl,Ul,Ol,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new R,materialIndex:0};ki.getNormal(Di,Ni,Ui,f.normal),h.face=f}return h}var As=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(f,2));function g(_,m,p,E,v,T,I,C,A,H,y){let b=T/A,N=I/H,X=T/2,nt=I/2,L=C/2,U=A+1,G=H+1,$=0,q=0,W=new R;for(let K=0;K<G;K++){let et=K*N-nt;for(let ut=0;ut<U;ut++){let V=ut*b-X;W[_]=V*E,W[m]=et*v,W[p]=L,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=C>0?1:-1,h.push(W.x,W.y,W.z),f.push(ut/A),f.push(1-K/H),$+=1}}for(let K=0;K<H;K++)for(let et=0;et<A;et++){let ut=d+et+U*K,V=d+et+U*(K+1),Z=d+(et+1)+U*(K+1),ht=d+(et+1)+U*K;c.push(ut,V,ht),c.push(V,Z,ht),q+=6}o.addGroup(u,q,y),u+=q,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Zd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}var jd={clone:ji,merge:We},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ur=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ze=class extends Ur{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oi=-90,Fi=1,bo=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(Oi,Fi,t,e);s.layers=this.layers,this.add(s);let r=new ze(Oi,Fi,t,e);r.layers=this.layers,this.add(r);let a=new ze(Oi,Fi,t,e);a.layers=this.layers,this.add(a);let o=new ze(Oi,Fi,t,e);o.layers=this.layers,this.add(o);let c=new ze(Oi,Fi,t,e);c.layers=this.layers,this.add(c);let l=new ze(Oi,Fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Or=class extends vn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},So=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===di?_e:cn),this.texture=new Or(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new As(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Xn});r.uniforms.tEquirect.value=e;let a=new Le(s,r),o=e.minFilter;return e.minFilter===Ss&&(e.minFilter=on),new bo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},no=new R,Qd=new R,tf=new qt,tn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=no.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(no),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tf.getNormalMatrix(t),s=this.coplanarPoint(no).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new xn,dr=new R,Cs=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,a=new tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],u=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],v=s[14],T=s[15];if(n[0].setComponents(c-r,d-l,m-u,T-p).normalize(),n[1].setComponents(c+r,d+l,m+u,T+p).normalize(),n[2].setComponents(c+a,d+h,m+g,T+E).normalize(),n[3].setComponents(c-a,d-h,m-g,T-E).normalize(),n[4].setComponents(c-o,d-f,m-_,T-v).normalize(),e===Un)n[5].setComponents(c+o,d+f,m+_,T+v).normalize();else if(e===Tr)n[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ef(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let f=l.array,d=l.usage,u=f.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,d),l.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:u}}function r(l,h,f){let d=h.array,u=h._updateRange,g=h.updateRanges;if(i.bindBuffer(f,l),u.count===-1&&g.length===0&&i.bufferSubData(f,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}u.count!==-1&&(e?i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);if(f===void 0)n.set(l,s(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,h),f.version=l.version}}return{get:a,remove:o,update:c}}var Eo=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let E=p*d-a;for(let v=0;v<l;v++){let T=v*f-r;g.push(T,-E,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let v=E+l*p,T=E+l*(p+1),I=E+1+l*(p+1),C=E+1+l*p;u.push(v,T,C),u.push(T,I,C)}this.setIndex(u),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
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
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
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
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,_f=`#ifdef USE_BUMPMAP
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tf=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cf=`vec3 transformedNormal = objectNormal;
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
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Uf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ip=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hm=`#define DISTANCE
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
}`,um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vm=`#define LAMBERT
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
}`,xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ym=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bm=`#define NORMAL
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
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
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
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Cm=`#define TOON
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
}`,Rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Um=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ht={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:af,alphatest_fragment:of,alphatest_pars_fragment:cf,aomap_fragment:lf,aomap_pars_fragment:hf,batching_pars_vertex:uf,batching_vertex:df,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:vf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:Mf,color_fragment:bf,color_pars_fragment:Sf,color_pars_vertex:Ef,color_vertex:wf,common:Tf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Rf,displacementmap_vertex:Pf,emissivemap_fragment:If,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:Nf,envmap_fragment:Uf,envmap_common_pars_fragment:Of,envmap_pars_fragment:Ff,envmap_pars_vertex:zf,envmap_physical_pars_fragment:jf,envmap_vertex:Bf,fog_vertex:kf,fog_pars_vertex:Hf,fog_fragment:Vf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Wf,lightmap_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Yf,lights_pars_begin:Zf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Kf,lights_phong_fragment:Qf,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:lp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:vp,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:Mp,normal_pars_fragment:bp,normal_pars_vertex:Sp,normal_vertex:Ep,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Rp,opaque_fragment:Pp,packing:Ip,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Np,dithering_pars_fragment:Up,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Bp,shadowmap_vertex:kp,shadowmask_pars_fragment:Hp,skinbase_vertex:Vp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:$p,tonemapping_fragment:Yp,tonemapping_pars_fragment:Zp,transmission_fragment:jp,transmission_pars_fragment:Jp,uv_pars_fragment:Kp,uv_pars_vertex:Qp,uv_vertex:tm,worldpos_vertex:em,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:rm,cube_vert:am,cube_frag:om,depth_vert:cm,depth_frag:lm,distanceRGBA_vert:hm,distanceRGBA_frag:um,equirect_vert:dm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:vm,meshlambert_frag:xm,meshmatcap_vert:ym,meshmatcap_frag:Mm,meshnormal_vert:bm,meshnormal_frag:Sm,meshphong_vert:Em,meshphong_frag:wm,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:Cm,meshtoon_frag:Rm,points_vert:Pm,points_frag:Im,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Nm,sprite_frag:Um},ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},En={basic:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:We([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:We([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:We([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:We([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:We([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:We([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:We([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:We([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:We([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:We([ct.lights,ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};En.physical={uniforms:We([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var fr={r:0,b:0,g:0};function Om(i,t,e,n,s,r,a){let o=new Rt(0),c=r===!0?0:1,l,h,f=null,d=0,u=null;function g(m,p){let E=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Yr)?(h===void 0&&(h=new Le(new As(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:ji(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,(f!==v||d!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Le(new Eo(2,2),new je({name:"BackgroundMaterial",uniforms:ji(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(fr,Ih(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function Fm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function f(L,U,G,$,q){let W=!1;if(a){let K=_($,G,U);l!==K&&(l=K,u(l.object)),W=p(L,$,G,q),W&&E(L,$,G,q)}else{let K=U.wireframe===!0;(l.geometry!==$.id||l.program!==G.id||l.wireframe!==K)&&(l.geometry=$.id,l.program=G.id,l.wireframe=K,W=!0)}q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,H(L,U,G,$),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,G){let $=G.wireframe===!0,q=o[L.id];q===void 0&&(q={},o[L.id]=q);let W=q[U.id];W===void 0&&(W={},q[U.id]=W);let K=W[$];return K===void 0&&(K=m(d()),W[$]=K),K}function m(L){let U=[],G=[],$=[];for(let q=0;q<s;q++)U[q]=0,G[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:$,object:L,attributes:{},index:null}}function p(L,U,G,$){let q=l.attributes,W=U.attributes,K=0,et=G.getAttributes();for(let ut in et)if(et[ut].location>=0){let Z=q[ut],ht=W[ut];if(ht===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),Z===void 0||Z.attribute!==ht||ht&&Z.data!==ht.data)return!0;K++}return l.attributesNum!==K||l.index!==$}function E(L,U,G,$){let q={},W=U.attributes,K=0,et=G.getAttributes();for(let ut in et)if(et[ut].location>=0){let Z=W[ut];Z===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ht={};ht.attribute=Z,Z&&Z.data&&(ht.data=Z.data),q[ut]=ht,K++}l.attributes=q,l.attributesNum=K,l.index=$}function v(){let L=l.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function T(L){I(L,0)}function I(L,U){let G=l.newAttributes,$=l.enabledAttributes,q=l.attributeDivisors;G[L]=1,$[L]===0&&(i.enableVertexAttribArray(L),$[L]=1),q[L]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),q[L]=U)}function C(){let L=l.newAttributes,U=l.enabledAttributes;for(let G=0,$=U.length;G<$;G++)U[G]!==L[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function A(L,U,G,$,q,W,K){K===!0?i.vertexAttribIPointer(L,U,G,q,W):i.vertexAttribPointer(L,U,G,$,q,W)}function H(L,U,G,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let q=$.attributes,W=G.getAttributes(),K=U.defaultAttributeValues;for(let et in W){let ut=W[et];if(ut.location>=0){let V=q[et];if(V===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let Z=V.normalized,ht=V.itemSize,xt=e.get(V);if(xt===void 0)continue;let _t=xt.buffer,Dt=xt.type,Ut=xt.bytesPerElement,Tt=n.isWebGL2===!0&&(Dt===i.INT||Dt===i.UNSIGNED_INT||V.gpuType===xh);if(V.isInterleavedBufferAttribute){let $t=V.data,O=$t.stride,Se=V.offset;if($t.isInstancedInterleavedBuffer){for(let St=0;St<ut.locationSize;St++)I(ut.location+St,$t.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=$t.meshPerAttribute*$t.count)}else for(let St=0;St<ut.locationSize;St++)T(ut.location+St);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let St=0;St<ut.locationSize;St++)A(ut.location+St,ht/ut.locationSize,Dt,Z,O*Ut,(Se+ht/ut.locationSize*St)*Ut,Tt)}else{if(V.isInstancedBufferAttribute){for(let $t=0;$t<ut.locationSize;$t++)I(ut.location+$t,V.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let $t=0;$t<ut.locationSize;$t++)T(ut.location+$t);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let $t=0;$t<ut.locationSize;$t++)A(ut.location+$t,ht/ut.locationSize,Dt,Z,ht*Ut,ht/ut.locationSize*$t*Ut,Tt)}}else if(K!==void 0){let Z=K[et];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(ut.location,Z);break;case 3:i.vertexAttrib3fv(ut.location,Z);break;case 4:i.vertexAttrib4fv(ut.location,Z);break;default:i.vertexAttrib1fv(ut.location,Z)}}}}C()}function y(){X();for(let L in o){let U=o[L];for(let G in U){let $=U[G];for(let q in $)g($[q].object),delete $[q];delete U[G]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let U=o[L.id];for(let G in U){let $=U[G];for(let q in $)g($[q].object),delete $[q];delete U[G]}delete o[L.id]}function N(L){for(let U in o){let G=o[U];if(G[L.id]===void 0)continue;let $=G[L.id];for(let q in $)g($[q].object),delete $[q];delete G[L.id]}}function X(){nt(),h=!0,l!==c&&(l=c,u(l.object))}function nt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:X,resetDefaultState:nt,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:T,disableUnusedAttributes:C}}function zm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),e.update(f,r,1)}function c(h,f,d){if(d===0)return;let u,g;if(s)u=i,g="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,h,f,d),e.update(f,r,d)}function l(h,f,d){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Bm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,T=a||t.has("OES_texture_float"),I=v&&T,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:C}}function km(i){let t=this,e=null,n=0,s=!1,r=!1,a=new tn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,v=E*4,T=p.clippingState||null;c.value=T,T=h(g,d,v,u);for(let I=0;I!==v;++I)T[I]=e[I];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=u+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,T=u;v!==_;++v,T+=4)a.copy(f[v]).applyMatrix4(E,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hm(i){let t=new WeakMap;function e(a,o){return o===fo?a.mapping=qi:o===po&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fo||o===po)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new So(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fr=class extends Ur{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hi=4,Fl=[.125,.215,.35,.446,.526,.582],li=20,io=new Fr,zl=new Rt,so=null,ro=0,ao=0,oi=(1+Math.sqrt(5))/2,zi=1/oi,Bl=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,oi,zi),new R(0,oi,-zi),new R(zi,0,oi),new R(-zi,0,oi),new R(oi,zi,0),new R(-oi,zi,0)],zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(so,ro,ao),t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Es,format:_n,colorSpace:Fn,depthBuffer:!1},s=kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Gm(r,t,e)}return s}_compileMaterial(t){let e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,s){let o=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(zl),h.toneMapping=qn,h.autoClear=!1;let u=new Zi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new Le(new As,u),_=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(zl),_=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let v=this._cubeSize;pr(s,E*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bl[(s-1)%Bl.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Le(this._lodPlanes[s],l),d=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);let p=[],E=0;for(let A=0;A<li;++A){let H=A/_,y=Math.exp(-H*H/2);p.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let T=this._sizeLods[s],I=3*T*(s>v-Hi?s-v+Hi:0),C=4*(this._cubeSize-T);pr(e,I,C,3*T,2*T),c.setRenderTarget(e),c.render(f,io)}};function Vm(i){let t=[],e=[],n=[],s=i,r=i-Hi+1+Fl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Hi?c=Fl[a-i+Hi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*u),v=new Float32Array(m*g*u),T=new Float32Array(p*g*u);for(let C=0;C<u;C++){let A=C%3*2/3-1,H=C>2?0:-1,y=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];E.set(y,_*g*C),v.set(d,m*g*C);let b=[C,C,C,C,C,C];T.set(b,p*g*C)}let I=new pe;I.setAttribute("position",new ie(E,_)),I.setAttribute("uv",new ie(v,m)),I.setAttribute("faceIndex",new ie(T,p)),t.push(I),s>Hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kl(i,t,e){let n=new hn(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gm(i,t,e){let n=new Float32Array(li),s=new R(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Hl(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Vl(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function Wm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===fo||c===po,h=c===qi||c===$i;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new zr(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(l&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new zr(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,t,e,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let g in u){let _=u[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(f){let d=[],u=f.index,g=f.attributes.position,_=0;if(u!==null){let E=u.array;_=u.version;for(let v=0,T=E.length;v<T;v+=3){let I=E[v+0],C=E[v+1],A=E[v+2];d.push(I,C,C,A,A,I)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,T=E.length/3-1;v<T;v+=3){let I=v+0,C=v+1,A=v+2;d.push(I,C,C,A,A,I)}}else return;let m=new(Rh(d)?Nr:Dr)(d,1);m.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function $m(i,t,e,n){let s=n.isWebGL2,r;function a(u){r=u}let o,c;function l(u){o=u.type,c=u.bytesPerElement}function h(u,g){i.drawElements(r,g,o,u*c),e.update(g,r,1)}function f(u,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,u*c,_),e.update(g,r,_)}function d(u,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(u[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,u,0,_);let p=0;for(let E=0;E<_;E++)p+=g[E];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Ym(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,t){return i[0]-t[0]}function jm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Jm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Re,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,f){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],H=0;E===!0&&(H=1),v===!0&&(H=2),T===!0&&(H=3);let y=h.attributes.position.count*H,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let N=new Float32Array(y*b*4*g),X=new Ir(N,y,b,g);X.type=Tn,X.needsUpdate=!0;let nt=H*4;for(let U=0;U<g;U++){let G=I[U],$=C[U],q=A[U],W=y*b*4*U;for(let K=0;K<G.count;K++){let et=K*nt;E===!0&&(a.fromBufferAttribute(G,K),N[W+et+0]=a.x,N[W+et+1]=a.y,N[W+et+2]=a.z,N[W+et+3]=0),v===!0&&(a.fromBufferAttribute($,K),N[W+et+4]=a.x,N[W+et+5]=a.y,N[W+et+6]=a.z,N[W+et+7]=0),T===!0&&(a.fromBufferAttribute(q,K),N[W+et+8]=a.x,N[W+et+9]=a.y,N[W+et+10]=a.z,N[W+et+11]=q.itemSize===4?a.w:1)}}_={count:g,texture:X,size:new wt(y,b)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let E=0;E<d.length;E++)m+=d[E];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let u=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let v=0;v<u;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<u;v++){let T=g[v];T[0]=v,T[1]=d[v]}g.sort(jm);for(let v=0;v<8;v++)v<u&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Zm);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let T=o[v],I=T[0],C=T[1];I!==Number.MAX_SAFE_INTEGER&&C?(_&&h.getAttribute("morphTarget"+v)!==_[I]&&h.setAttribute("morphTarget"+v,_[I]),m&&h.getAttribute("morphNormal"+v)!==m[I]&&h.setAttribute("morphNormal"+v,m[I]),s[v]=C,p+=C):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let E=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Km(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Br=class extends vn{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:ui,h!==ui&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=Wn),n===void 0&&h===Yi&&(n=hi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Dh=new vn,Nh=new Br(1,1);Nh.compareFunction=Ch;var Uh=new Ir,Oh=new Mo,Fh=new Or,Gl=[],Wl=[],Xl=new Float32Array(16),ql=new Float32Array(9),$l=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jr(i,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;$l.set(n),i.uniformMatrix2fv(this.addr,!1,$l),be(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),be(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),be(e,n)}}function ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Nh:Dh;e.setTexture2D(t||r,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oh,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fh,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uh,s)}function vg(i){switch(i){case 5126:return Qm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function xg(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function bg(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tg(i,t){i.uniform1iv(this.addr,t)}function Ag(i,t){i.uniform2iv(this.addr,t)}function Cg(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Pg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Ng(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Dh,r[a])}function Ug(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Oh,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fh,r[a])}function Fg(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uh,r[a])}function zg(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return Mg;case 35666:return bg;case 35674:return Sg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Rg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}var wo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vg(e.type)}},To=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},Ao=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},oo=/(\w+)(\])?(\[|\.)?/g;function Yl(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){let n=i.name,s=n.length;for(oo.lastIndex=0;;){let r=oo.exec(n),a=oo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yl(e,l===void 0?new wo(o,i,t):new To(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ao(o),Yl(e,f)),e=f}}}var Xi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Bg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Zl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var kg=37297,Hg=0;function Vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Gg(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===wr&&e===Er?n="LinearDisplayP3ToLinearSRGB":t===Er&&e===wr&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case Zr:return[n,"LinearTransferOETF"];case _e:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vg(i.getShaderSource(t),a)}else return s}function Wg(i,t){let e=Gg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xg(i,t){let e;switch(t){case Zu:e="Linear";break;case ju:e="Reinhard";break;case Ju:e="OptimizedCineon";break;case Ku:e="ACESFilmic";break;case td:e="AgX";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vi).join(`
`)}function Yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vi(i){return i!==""}function Jl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(jg,Kg)}var Jg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kg(i,t){let e=Ht[t];if(e===void 0){let n=Jg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(Qg,t_)}function t_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function e_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case $i:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function s_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case $u:t="ENVMAP_BLENDING_MIX";break;case Yu:t="ENVMAP_BLENDING_ADD";break}return t}function r_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function a_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=e_(e),l=n_(e),h=i_(e),f=s_(e),d=r_(e),u=e.isWebGL2?"":qg(e),g=$g(e),_=Yg(r),m=s.createProgram(),p,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vi).join(`
`),p.length>0&&(p+=`
`),E=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vi).join(`
`),E.length>0&&(E+=`
`)):(p=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),E=[u,th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==qn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),a=Co(a),a=Jl(a,e),a=Kl(a,e),o=Co(o),o=Jl(o,e),o=Kl(o,e),a=Ql(a),o=Ql(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let T=v+p+a,I=v+E+o,C=Zl(s,s.VERTEX_SHADER,T),A=Zl(s,s.FRAGMENT_SHADER,I);s.attachShader(m,C),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function H(X){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(A).trim(),G=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,C,A);else{let q=jl(s,C,"vertex"),W=jl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+q+`
`+W)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(L===""||U==="")&&($=!1);$&&(X.diagnostics={runnable:G,programLog:nt,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:E}})}s.deleteShader(C),s.deleteShader(A),y=new Xi(s,m),b=Zg(s,m)}let y;this.getUniforms=function(){return y===void 0&&H(this),y};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,kg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}var o_=0,Ro=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Po(t),e.set(t,n)),n}},Po=class{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}};function c_(i,t,e,n,s,r,a){let o=new Ts,c=new Ro,l=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,b,N,X,nt){let L=X.fog,U=nt.geometry,G=y.isMeshStandardMaterial?X.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),q=$&&$.mapping===Yr?$.image.height:null,W=g[y.type];y.precision!==null&&(u=s.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=K!==void 0?K.length:0,ut=0;U.morphAttributes.position!==void 0&&(ut=1),U.morphAttributes.normal!==void 0&&(ut=2),U.morphAttributes.color!==void 0&&(ut=3);let V,Z,ht,xt;if(W){let He=En[W];V=He.vertexShader,Z=He.fragmentShader}else V=y.vertexShader,Z=y.fragmentShader,c.update(y),ht=c.getVertexShaderID(y),xt=c.getFragmentShaderID(y);let _t=i.getRenderTarget(),Dt=nt.isInstancedMesh===!0,Ut=nt.isBatchedMesh===!0,Tt=!!y.map,$t=!!y.matcap,O=!!$,Se=!!y.aoMap,St=!!y.lightMap,It=!!y.bumpMap,mt=!!y.normalMap,ae=!!y.displacementMap,Ot=!!y.emissiveMap,S=!!y.metalnessMap,x=!!y.roughnessMap,F=y.anisotropy>0,tt=y.clearcoat>0,J=y.iridescence>0,Q=y.sheen>0,gt=y.transmission>0,lt=F&&!!y.anisotropyMap,ft=tt&&!!y.clearcoatMap,At=tt&&!!y.clearcoatNormalMap,Bt=tt&&!!y.clearcoatRoughnessMap,j=J&&!!y.iridescenceMap,Yt=J&&!!y.iridescenceThicknessMap,w=Q&&!!y.sheenColorMap,Y=Q&&!!y.sheenRoughnessMap,ot=!!y.specularMap,it=!!y.specularColorMap,vt=!!y.specularIntensityMap,Wt=gt&&!!y.transmissionMap,Zt=gt&&!!y.thicknessMap,Vt=!!y.gradientMap,at=!!y.alphaMap,P=y.alphaTest>0,st=!!y.alphaHash,rt=!!y.extensions,Et=!!U.attributes.uv1,yt=!!U.attributes.uv2,jt=!!U.attributes.uv3,Jt=qn;return y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Jt=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:Z,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ut,instancing:Dt,instancingColor:Dt&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Fn,map:Tt,matcap:$t,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:q,aoMap:Se,lightMap:St,bumpMap:It,normalMap:mt,displacementMap:d&&ae,emissiveMap:Ot,normalMapObjectSpace:mt&&y.normalMapType===dd,normalMapTangentSpace:mt&&y.normalMapType===Ah,metalnessMap:S,roughnessMap:x,anisotropy:F,anisotropyMap:lt,clearcoat:tt,clearcoatMap:ft,clearcoatNormalMap:At,clearcoatRoughnessMap:Bt,iridescence:J,iridescenceMap:j,iridescenceThicknessMap:Yt,sheen:Q,sheenColorMap:w,sheenRoughnessMap:Y,specularMap:ot,specularColorMap:it,specularIntensityMap:vt,transmission:gt,transmissionMap:Wt,thicknessMap:Zt,gradientMap:Vt,opaque:y.transparent===!1&&y.blending===Gi,alphaMap:at,alphaTest:P,alphaHash:st,combine:y.combine,mapUv:Tt&&_(y.map.channel),aoMapUv:Se&&_(y.aoMap.channel),lightMapUv:St&&_(y.lightMap.channel),bumpMapUv:It&&_(y.bumpMap.channel),normalMapUv:mt&&_(y.normalMap.channel),displacementMapUv:ae&&_(y.displacementMap.channel),emissiveMapUv:Ot&&_(y.emissiveMap.channel),metalnessMapUv:S&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:lt&&_(y.anisotropyMap.channel),clearcoatMapUv:ft&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:w&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Y&&_(y.sheenRoughnessMap.channel),specularMapUv:ot&&_(y.specularMap.channel),specularColorMapUv:it&&_(y.specularColorMap.channel),specularIntensityMapUv:vt&&_(y.specularIntensityMap.channel),transmissionMapUv:Wt&&_(y.transmissionMap.channel),thicknessMapUv:Zt&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(mt||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:yt,vertexUv3s:jt,pointsUvs:nt.isPoints===!0&&!!U.attributes.uv&&(Tt||at),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:nt.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xe,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:rt&&y.extensions.derivatives===!0,extensionFragDepth:rt&&y.extensions.fragDepth===!0,extensionDrawBuffers:rt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(E(b,y),v(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function T(y){let b=g[y.type],N;if(b){let X=En[b];N=jd.clone(X.uniforms)}else N=y.uniforms;return N}function I(y,b){let N;for(let X=0,nt=l.length;X<nt;X++){let L=l[X];if(L.cacheKey===b){N=L,++N.usedTimes;break}}return N===void 0&&(N=new a_(i,b,y,r),l.push(N)),N}function C(y){if(--y.usedTimes===0){let b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function A(y){c.remove(y)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:I,releaseProgram:C,releaseShaderCache:A,programs:l,dispose:H}}function l_(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function h_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,u,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function o(f,d,u,g,_,m){let p=a(f,d,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function c(f,d,u,g,_,m){let p=a(f,d,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,d){e.length>1&&e.sort(f||h_),n.length>1&&n.sort(d||eh),s.length>1&&s.sort(d||eh)}function h(){for(let f=t,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function u_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new nh,i.set(n,[a])):s>=r.length?(a=new nh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Rt};break;case"SpotLight":e={position:new R,direction:new R,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function f_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p_=0;function m_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g_(i,t){let e=new d_,n=f_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,a=new Pt,o=new Pt;function c(h,f){let d=0,u=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let _=0,m=0,p=0,E=0,v=0,T=0,I=0,C=0,A=0,H=0,y=0;h.sort(m_);let b=f===!0?Math.PI:1;for(let X=0,nt=h.length;X<nt;X++){let L=h[X],U=L.color,G=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*G*b,u+=U.g*G*b,g+=U.b*G*b;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],G);y++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let K=L.shadow,et=n.get(L);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,s.directionalShadow[_]=et,s.directionalShadowMap[_]=q,s.directionalShadowMatrix[_]=L.shadow.matrix,T++}s.directional[_]=W,_++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(U).multiplyScalar(G*b),W.distance=$,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[p]=W;let K=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&H++),s.spotLightMatrix[p]=K.matrix,L.castShadow){let et=n.get(L);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,s.spotShadow[p]=et,s.spotShadowMap[p]=q,C++}p++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(U).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[E]=W,E++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){let K=L.shadow,et=n.get(L);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,s.pointShadow[m]=et,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=L.shadow.matrix,I++}s.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G*b),W.groundColor.copy(L.groundColor).multiplyScalar(G*b),s.hemi[v]=W,v++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==E||N.hemiLength!==v||N.numDirectionalShadows!==T||N.numPointShadows!==I||N.numSpotShadows!==C||N.numSpotMaps!==A||N.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=E,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+A-H,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=y,N.directionalLength=_,N.pointLength=m,N.spotLength=p,N.rectAreaLength=E,N.hemiLength=v,N.numDirectionalShadows=T,N.numPointShadows=I,N.numSpotShadows=C,N.numSpotMaps=A,N.numLightProbes=y,s.version=p_++)}function l(h,f){let d=0,u=0,g=0,_=0,m=0,p=f.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){let T=h[E];if(T.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),d++}else if(T.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(T.isRectAreaLight){let I=s.rectArea[_];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let I=s.point[u];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function ih(i,t){let e=new g_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function __(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new ih(i,t),e.set(r,[c])):a>=o.length?(c=new ih(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Io=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y_(i,t,e){let n=new Cs,s=new wt,r=new wt,a=new Re,o=new Io({depthPacking:ud}),c=new Lo,l={},h=e.maxTextureSize,f={[$n]:Ye,[Ye]:$n,[Xe]:Xe},d=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:v_,fragmentShader:x_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new pe;g.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let p=this.type;this.render=function(C,A,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let y=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Xn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let nt=p!==Nn&&this.type===Nn,L=p===Nn&&this.type!==Nn;for(let U=0,G=C.length;U<G;U++){let $=C[U],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let W=q.getFrameExtents();if(s.multiply(W),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||nt===!0||L===!0){let et=this.type!==Nn?{minFilter:Ae,magFilter:Ae}:{};q.map!==null&&q.map.dispose(),q.map=new hn(s.x,s.y,et),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let K=q.getViewportCount();for(let et=0;et<K;et++){let ut=q.getViewport(et);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),X.viewport(a),q.updateMatrices($,et),n=q.getFrustum(),T(A,H,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===Nn&&E(q,H),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,b,N)};function E(C,A){let H=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,H,d,_,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,H,u,_,null)}function v(C,A,H,y){let b=null,N=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)b=N;else if(b=H.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let X=b.uuid,nt=A.uuid,L=l[X];L===void 0&&(L={},l[X]=L);let U=L[nt];U===void 0&&(U=b.clone(),L[nt]=U,A.addEventListener("dispose",I)),b=U}if(b.visible=A.visible,b.wireframe=A.wireframe,y===Nn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let X=i.properties.get(b);X.light=H}return b}function T(C,A,H,y,b){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Nn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);let nt=t.update(C),L=C.material;if(Array.isArray(L)){let U=nt.groups;for(let G=0,$=U.length;G<$;G++){let q=U[G],W=L[q.materialIndex];if(W&&W.visible){let K=v(C,W,y,b);C.onBeforeShadow(i,C,A,H,nt,K,q),i.renderBufferDirect(H,null,nt,K,C,q),C.onAfterShadow(i,C,A,H,nt,K,q)}}}else if(L.visible){let U=v(C,L,y,b);C.onBeforeShadow(i,C,A,H,nt,U,null),i.renderBufferDirect(H,null,nt,U,C,null),C.onAfterShadow(i,C,A,H,nt,U,null)}}let X=C.children;for(let nt=0,L=X.length;nt<L;nt++)T(X[nt],A,H,y,b)}function I(C){C.target.removeEventListener("dispose",I);for(let H in l){let y=l[H],b=C.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function M_(i,t,e){let n=e.isWebGL2;function s(){let P=!1,st=new Re,rt=null,Et=new Re(0,0,0,0);return{setMask:function(yt){rt!==yt&&!P&&(i.colorMask(yt,yt,yt,yt),rt=yt)},setLocked:function(yt){P=yt},setClear:function(yt,jt,Jt,Ee,He){He===!0&&(yt*=Ee,jt*=Ee,Jt*=Ee),st.set(yt,jt,Jt,Ee),Et.equals(st)===!1&&(i.clearColor(yt,jt,Jt,Ee),Et.copy(st))},reset:function(){P=!1,rt=null,Et.set(-1,0,0,0)}}}function r(){let P=!1,st=null,rt=null,Et=null;return{setTest:function(yt){yt?Ut(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(yt){st!==yt&&!P&&(i.depthMask(yt),st=yt)},setFunc:function(yt){if(rt!==yt){switch(yt){case ku:i.depthFunc(i.NEVER);break;case Hu:i.depthFunc(i.ALWAYS);break;case Vu:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Gu:i.depthFunc(i.EQUAL);break;case Wu:i.depthFunc(i.GEQUAL);break;case Xu:i.depthFunc(i.GREATER);break;case qu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=yt}},setLocked:function(yt){P=yt},setClear:function(yt){Et!==yt&&(i.clearDepth(yt),Et=yt)},reset:function(){P=!1,st=null,rt=null,Et=null}}}function a(){let P=!1,st=null,rt=null,Et=null,yt=null,jt=null,Jt=null,Ee=null,He=null;return{setTest:function(se){P||(se?Ut(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(se){st!==se&&!P&&(i.stencilMask(se),st=se)},setFunc:function(se,Ve,Sn){(rt!==se||Et!==Ve||yt!==Sn)&&(i.stencilFunc(se,Ve,Sn),rt=se,Et=Ve,yt=Sn)},setOp:function(se,Ve,Sn){(jt!==se||Jt!==Ve||Ee!==Sn)&&(i.stencilOp(se,Ve,Sn),jt=se,Jt=Ve,Ee=Sn)},setLocked:function(se){P=se},setClear:function(se){He!==se&&(i.clearStencil(se),He=se)},reset:function(){P=!1,st=null,rt=null,Et=null,yt=null,jt=null,Jt=null,Ee=null,He=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,f=new WeakMap,d={},u={},g=new WeakMap,_=[],m=null,p=!1,E=null,v=null,T=null,I=null,C=null,A=null,H=null,y=new Rt(0,0,0),b=0,N=!1,X=null,nt=null,L=null,U=null,G=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=W>=2);let et=null,ut={},V=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ht=new Re().fromArray(V),xt=new Re().fromArray(Z);function _t(P,st,rt,Et){let yt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(P,jt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<rt;Jt++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(st+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return jt}let Dt={};Dt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(i.DEPTH_TEST),c.setFunc(yr),Ot(!1),S(Fc),Ut(i.CULL_FACE),mt(Xn);function Ut(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Tt(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function $t(P,st){return u[P]!==st?(i.bindFramebuffer(P,st),u[P]=st,n&&(P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function O(P,st){let rt=_,Et=!1;if(P)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),P.isWebGLMultipleRenderTargets){let yt=P.texture;if(rt.length!==yt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,Jt=yt.length;jt<Jt;jt++)rt[jt]=i.COLOR_ATTACHMENT0+jt;rt.length=yt.length,Et=!0}}else rt[0]!==i.COLOR_ATTACHMENT0&&(rt[0]=i.COLOR_ATTACHMENT0,Et=!0);else rt[0]!==i.BACK&&(rt[0]=i.BACK,Et=!0);Et&&(e.isWebGL2?i.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Se(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let St={[ci]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};if(n)St[Hc]=i.MIN,St[Vc]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(St[Hc]=P.MIN_EXT,St[Vc]=P.MAX_EXT)}let It={[Au]:i.ZERO,[Cu]:i.ONE,[Ru]:i.SRC_COLOR,[ho]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[uo]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(P,st,rt,Et,yt,jt,Jt,Ee,He,se){if(P===Xn){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(Ut(i.BLEND),p=!0),P!==Eu){if(P!==E||se!==N){if((v!==ci||C!==ci)&&(i.blendEquation(i.FUNC_ADD),v=ci,C=ci),se)switch(P){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,I=null,A=null,H=null,y.set(0,0,0),b=0,E=P,N=se}return}yt=yt||st,jt=jt||rt,Jt=Jt||Et,(st!==v||yt!==C)&&(i.blendEquationSeparate(St[st],St[yt]),v=st,C=yt),(rt!==T||Et!==I||jt!==A||Jt!==H)&&(i.blendFuncSeparate(It[rt],It[Et],It[jt],It[Jt]),T=rt,I=Et,A=jt,H=Jt),(Ee.equals(y)===!1||He!==b)&&(i.blendColor(Ee.r,Ee.g,Ee.b,He),y.copy(Ee),b=He),E=P,N=!1}function ae(P,st){P.side===Xe?Tt(i.CULL_FACE):Ut(i.CULL_FACE);let rt=P.side===Ye;st&&(rt=!rt),Ot(rt),P.blending===Gi&&P.transparent===!1?mt(Xn):mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);let Et=P.stencilWrite;l.setTest(Et),Et&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ut(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(P){X!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),X=P)}function S(P){P!==Mu?(Ut(i.CULL_FACE),P!==nt&&(P===Fc?i.cullFace(i.BACK):P===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),nt=P}function x(P){P!==L&&(q&&i.lineWidth(P),L=P)}function F(P,st,rt){P?(Ut(i.POLYGON_OFFSET_FILL),(U!==st||G!==rt)&&(i.polygonOffset(st,rt),U=st,G=rt)):Tt(i.POLYGON_OFFSET_FILL)}function tt(P){P?Ut(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function J(P){P===void 0&&(P=i.TEXTURE0+$-1),et!==P&&(i.activeTexture(P),et=P)}function Q(P,st,rt){rt===void 0&&(et===null?rt=i.TEXTURE0+$-1:rt=et);let Et=ut[rt];Et===void 0&&(Et={type:void 0,texture:void 0},ut[rt]=Et),(Et.type!==P||Et.texture!==st)&&(et!==rt&&(i.activeTexture(rt),et=rt),i.bindTexture(P,st||Dt[P]),Et.type=P,Et.texture=st)}function gt(){let P=ut[et];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function w(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(P){ht.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ht.copy(P))}function Wt(P){xt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),xt.copy(P))}function Zt(P,st){let rt=f.get(st);rt===void 0&&(rt=new WeakMap,f.set(st,rt));let Et=rt.get(P);Et===void 0&&(Et=i.getUniformBlockIndex(st,P.name),rt.set(P,Et))}function Vt(P,st){let Et=f.get(st).get(P);h.get(st)!==Et&&(i.uniformBlockBinding(st,Et,P.__bindingPointIndex),h.set(st,Et))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},et=null,ut={},u={},g=new WeakMap,_=[],m=null,p=!1,E=null,v=null,T=null,I=null,C=null,A=null,H=null,y=new Rt(0,0,0),b=0,N=!1,X=null,nt=null,L=null,U=null,G=null,ht.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ut,disable:Tt,bindFramebuffer:$t,drawBuffers:O,useProgram:Se,setBlending:mt,setMaterial:ae,setFlipSided:Ot,setCullFace:S,setLineWidth:x,setPolygonOffset:F,setScissorTest:tt,activeTexture:J,bindTexture:Q,unbindTexture:gt,compressedTexImage2D:lt,compressedTexImage3D:ft,texImage2D:ot,texImage3D:it,updateUBOMapping:Zt,uniformBlockBinding:Vt,texStorage2D:w,texStorage3D:Y,texSubImage2D:At,texSubImage3D:Bt,compressedTexSubImage2D:j,compressedTexSubImage3D:Yt,scissor:vt,viewport:Wt,reset:at}}function b_(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return u?new OffscreenCanvas(S,x):Cr("canvas")}function _(S,x,F,tt){let J=1;if((S.width>tt||S.height>tt)&&(J=tt/Math.max(S.width,S.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let Q=x?Ar:Math.floor,gt=Q(J*S.width),lt=Q(J*S.height);f===void 0&&(f=g(gt,lt));let ft=F?g(gt,lt):f;return ft.width=gt,ft.height=lt,ft.getContext("2d").drawImage(S,0,0,gt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+gt+"x"+lt+")."),ft}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return xo(S.width)&&xo(S.height)}function p(S){return o?!1:S.wrapS!==gn||S.wrapT!==gn||S.minFilter!==Ae&&S.minFilter!==on}function E(S,x){return S.generateMipmaps&&x&&S.minFilter!==Ae&&S.minFilter!==on}function v(S){i.generateMipmap(S)}function T(S,x,F,tt,J=!1){if(o===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=x;if(x===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),x===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RGBA){let gt=J?Sr:te.getTransfer(tt);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=gt===oe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function I(S,x,F){return E(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==Ae&&S.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function C(S){return S===Ae||S===Gc||S===Da?i.NEAREST:i.LINEAR}function A(S){let x=S.target;x.removeEventListener("dispose",A),y(x),x.isVideoTexture&&h.delete(x)}function H(S){let x=S.target;x.removeEventListener("dispose",H),N(x)}function y(S){let x=n.get(S);if(x.__webglInit===void 0)return;let F=S.source,tt=d.get(F);if(tt){let J=tt[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(S),Object.keys(tt).length===0&&d.delete(F)}n.remove(S)}function b(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let F=S.source,tt=d.get(F);delete tt[x.__cacheKey],a.memory.textures--}function N(S){let x=S.texture,F=n.get(S),tt=n.get(x);if(tt.__webglTexture!==void 0&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let Q=0;Q<F.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)i.deleteFramebuffer(F.__webglFramebuffer[J]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,Q=x.length;J<Q;J++){let gt=n.get(x[J]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(x[J])}n.remove(x),n.remove(S)}let X=0;function nt(){X=0}function L(){let S=X;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),X+=1,S}function U(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function G(S,x){let F=n.get(S);if(S.isVideoTexture&&ae(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let tt=S.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(F,S,x);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function $(S,x){let F=n.get(S);if(S.version>0&&F.__version!==S.version){ht(F,S,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function q(S,x){let F=n.get(S);if(S.version>0&&F.__version!==S.version){ht(F,S,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function W(S,x){let F=n.get(S);if(S.version>0&&F.__version!==S.version){xt(F,S,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let K={[mo]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},et={[Ae]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[Da]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ed]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},ut={[fd]:i.NEVER,[xd]:i.ALWAYS,[pd]:i.LESS,[Ch]:i.LEQUAL,[md]:i.EQUAL,[vd]:i.GEQUAL,[gd]:i.GREATER,[_d]:i.NOTEQUAL};function V(S,x,F){if(F?(i.texParameteri(S,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,K[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,et[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,et[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==gn||x.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,C(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==Ae&&x.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ae||x.minFilter!==Da&&x.minFilter!==Ss||x.type===Tn&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Es&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Z(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",A));let tt=x.source,J=d.get(tt);J===void 0&&(J={},d.set(tt,J));let Q=U(x);if(Q!==S.__cacheKey){J[Q]===void 0&&(J[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[Q].usedTimes++;let gt=J[S.__cacheKey];gt!==void 0&&(J[S.__cacheKey].usedTimes--,gt.usedTimes===0&&b(x)),S.__cacheKey=Q,S.__webglTexture=J[Q].texture}return F}function ht(S,x,F){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);let J=Z(S,x),Q=x.source;e.bindTexture(tt,S.__webglTexture,i.TEXTURE0+F);let gt=n.get(Q);if(Q.version!==gt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let lt=te.getPrimaries(te.workingColorSpace),ft=x.colorSpace===cn?null:te.getPrimaries(x.colorSpace),At=x.colorSpace===cn||lt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Bt=p(x)&&m(x.image)===!1,j=_(x.image,Bt,!1,s.maxTextureSize);j=Ot(x,j);let Yt=m(j)||o,w=r.convert(x.format,x.colorSpace),Y=r.convert(x.type),ot=T(x.internalFormat,w,Y,x.colorSpace,x.isVideoTexture);V(tt,x,Yt);let it,vt=x.mipmaps,Wt=o&&x.isVideoTexture!==!0&&ot!==wh,Zt=gt.__version===void 0||J===!0,Vt=I(x,j,Yt);if(x.isDepthTexture)ot=i.DEPTH_COMPONENT,o?x.type===Tn?ot=i.DEPTH_COMPONENT32F:x.type===Wn?ot=i.DEPTH_COMPONENT24:x.type===hi?ot=i.DEPTH24_STENCIL8:ot=i.DEPTH_COMPONENT16:x.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ui&&ot===i.DEPTH_COMPONENT&&x.type!==tc&&x.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Wn,Y=r.convert(x.type)),x.format===Yi&&ot===i.DEPTH_COMPONENT&&(ot=i.DEPTH_STENCIL,x.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=hi,Y=r.convert(x.type))),Zt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,ot,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ot,j.width,j.height,0,w,Y,null));else if(x.isDataTexture)if(vt.length>0&&Yt){Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,Vt,ot,vt[0].width,vt[0].height);for(let at=0,P=vt.length;at<P;at++)it=vt[at],Wt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,it.width,it.height,w,Y,it.data):e.texImage2D(i.TEXTURE_2D,at,ot,it.width,it.height,0,w,Y,it.data);x.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(i.TEXTURE_2D,Vt,ot,j.width,j.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,w,Y,j.data)):e.texImage2D(i.TEXTURE_2D,0,ot,j.width,j.height,0,w,Y,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,ot,vt[0].width,vt[0].height,j.depth);for(let at=0,P=vt.length;at<P;at++)it=vt[at],x.format!==_n?w!==null?Wt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,it.width,it.height,j.depth,w,it.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,ot,it.width,it.height,j.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,it.width,it.height,j.depth,w,Y,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,ot,it.width,it.height,j.depth,0,w,Y,it.data)}else{Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,Vt,ot,vt[0].width,vt[0].height);for(let at=0,P=vt.length;at<P;at++)it=vt[at],x.format!==_n?w!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,it.width,it.height,w,it.data):e.compressedTexImage2D(i.TEXTURE_2D,at,ot,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,it.width,it.height,w,Y,it.data):e.texImage2D(i.TEXTURE_2D,at,ot,it.width,it.height,0,w,Y,it.data)}else if(x.isDataArrayTexture)Wt?(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,ot,j.width,j.height,j.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,w,Y,j.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,j.width,j.height,j.depth,0,w,Y,j.data);else if(x.isData3DTexture)Wt?(Zt&&e.texStorage3D(i.TEXTURE_3D,Vt,ot,j.width,j.height,j.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,w,Y,j.data)):e.texImage3D(i.TEXTURE_3D,0,ot,j.width,j.height,j.depth,0,w,Y,j.data);else if(x.isFramebufferTexture){if(Zt)if(Wt)e.texStorage2D(i.TEXTURE_2D,Vt,ot,j.width,j.height);else{let at=j.width,P=j.height;for(let st=0;st<Vt;st++)e.texImage2D(i.TEXTURE_2D,st,ot,at,P,0,w,Y,null),at>>=1,P>>=1}}else if(vt.length>0&&Yt){Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,Vt,ot,vt[0].width,vt[0].height);for(let at=0,P=vt.length;at<P;at++)it=vt[at],Wt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,w,Y,it):e.texImage2D(i.TEXTURE_2D,at,ot,w,Y,it);x.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(i.TEXTURE_2D,Vt,ot,j.width,j.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,w,Y,j)):e.texImage2D(i.TEXTURE_2D,0,ot,w,Y,j);E(x,Yt)&&v(tt),gt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function xt(S,x,F){if(x.image.length!==6)return;let tt=Z(S,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);let Q=n.get(J);if(J.version!==Q.__version||tt===!0){e.activeTexture(i.TEXTURE0+F);let gt=te.getPrimaries(te.workingColorSpace),lt=x.colorSpace===cn?null:te.getPrimaries(x.colorSpace),ft=x.colorSpace===cn||gt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let At=x.isCompressedTexture||x.image[0].isCompressedTexture,Bt=x.image[0]&&x.image[0].isDataTexture,j=[];for(let at=0;at<6;at++)!At&&!Bt?j[at]=_(x.image[at],!1,!0,s.maxCubemapSize):j[at]=Bt?x.image[at].image:x.image[at],j[at]=Ot(x,j[at]);let Yt=j[0],w=m(Yt)||o,Y=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),it=T(x.internalFormat,Y,ot,x.colorSpace),vt=o&&x.isVideoTexture!==!0,Wt=Q.__version===void 0||tt===!0,Zt=I(x,Yt,w);V(i.TEXTURE_CUBE_MAP,x,w);let Vt;if(At){vt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,it,Yt.width,Yt.height);for(let at=0;at<6;at++){Vt=j[at].mipmaps;for(let P=0;P<Vt.length;P++){let st=Vt[P];x.format!==_n?Y!==null?vt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,st.width,st.height,Y,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,it,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,st.width,st.height,Y,ot,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,it,st.width,st.height,0,Y,ot,st.data)}}}else{Vt=x.mipmaps,vt&&Wt&&(Vt.length>0&&Zt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,it,j[0].width,j[0].height));for(let at=0;at<6;at++)if(Bt){vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,j[at].width,j[at].height,Y,ot,j[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,it,j[at].width,j[at].height,0,Y,ot,j[at].data);for(let P=0;P<Vt.length;P++){let rt=Vt[P].image[at].image;vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,rt.width,rt.height,Y,ot,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,it,rt.width,rt.height,0,Y,ot,rt.data)}}else{vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Y,ot,j[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,it,Y,ot,j[at]);for(let P=0;P<Vt.length;P++){let st=Vt[P];vt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,Y,ot,st.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,it,Y,ot,st.image[at])}}}E(x,w)&&v(i.TEXTURE_CUBE_MAP),Q.__version=J.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function _t(S,x,F,tt,J,Q){let gt=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),ft=T(F.internalFormat,gt,lt,F.colorSpace);if(!n.get(x).__hasExternalTextures){let Bt=Math.max(1,x.width>>Q),j=Math.max(1,x.height>>Q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Q,ft,Bt,j,x.depth,0,gt,lt,null):e.texImage2D(J,Q,ft,Bt,j,0,gt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),mt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,n.get(F).__webglTexture,0,It(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,n.get(F).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(S,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let tt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||mt(x)){let J=x.depthTexture;J&&J.isDepthTexture&&(J.type===Tn?tt=i.DEPTH_COMPONENT32F:J.type===Wn&&(tt=i.DEPTH_COMPONENT24));let Q=It(x);mt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,tt,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,tt,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let tt=It(x);F&&mt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,x.width,x.height):mt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let tt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<tt.length;J++){let Q=tt[J],gt=r.convert(Q.format,Q.colorSpace),lt=r.convert(Q.type),ft=T(Q.internalFormat,gt,lt,Q.colorSpace),At=It(x);F&&mt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,x.width,x.height):mt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);let tt=n.get(x.depthTexture).__webglTexture,J=It(x);if(x.depthTexture.format===ui)mt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Yi)mt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Tt(S){let x=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]=i.createRenderbuffer(),Dt(x.__webglDepthbuffer[tt],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Dt(x.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(S,x,F){let tt=n.get(S);x!==void 0&&_t(tt.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Tt(S)}function O(S){let x=S.texture,F=n.get(S),tt=n.get(x);S.addEventListener("dispose",H),S.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,a.memory.textures++);let J=S.isWebGLCubeRenderTarget===!0,Q=S.isWebGLMultipleRenderTargets===!0,gt=m(S)||o;if(J){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let ft=0;ft<x.mipmaps.length;ft++)F.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else F.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)F.__webglFramebuffer[lt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){let lt=S.texture;for(let ft=0,At=lt.length;ft<At;ft++){let Bt=n.get(lt[ft]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&mt(S)===!1){let lt=Q?x:[x];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ft=0;ft<lt.length;ft++){let At=lt[ft];F.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ft]);let Bt=r.convert(At.format,At.colorSpace),j=r.convert(At.type),Yt=T(At.internalFormat,Bt,j,At.colorSpace,S.isXRRenderTarget===!0),w=It(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,w,Yt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,F.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(F.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),V(i.TEXTURE_CUBE_MAP,x,gt);for(let lt=0;lt<6;lt++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)_t(F.__webglFramebuffer[lt][ft],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else _t(F.__webglFramebuffer[lt],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);E(x,gt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let lt=S.texture;for(let ft=0,At=lt.length;ft<At;ft++){let Bt=lt[ft],j=n.get(Bt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),V(i.TEXTURE_2D,Bt,gt),_t(F.__webglFramebuffer,S,Bt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),E(Bt,gt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?lt=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,tt.__webglTexture),V(lt,x,gt),o&&x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)_t(F.__webglFramebuffer[ft],S,x,i.COLOR_ATTACHMENT0,lt,ft);else _t(F.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,lt,0);E(x,gt)&&v(lt),e.unbindTexture()}S.depthBuffer&&Tt(S)}function Se(S){let x=m(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let tt=0,J=F.length;tt<J;tt++){let Q=F[tt];if(E(Q,x)){let gt=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(Q).__webglTexture;e.bindTexture(gt,lt),v(gt),e.unbindTexture()}}}function St(S){if(o&&S.samples>0&&mt(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,tt=S.height,J=i.COLOR_BUFFER_BIT,Q=[],gt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(S),ft=S.isWebGLMultipleRenderTargets===!0;if(ft)for(let At=0;At<x.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let At=0;At<x.length;At++){Q.push(i.COLOR_ATTACHMENT0+At),S.depthBuffer&&Q.push(gt);let Bt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Bt===!1&&(S.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ft&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[At]),Bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[gt])),ft){let j=n.get(x[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,F,tt,0,0,F,tt,J,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let At=0;At<x.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,lt.__webglColorRenderbuffer[At]);let Bt=n.get(x[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function It(S){return Math.min(s.maxSamples,S.samples)}function mt(S){let x=n.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(S){let x=a.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function Ot(S,x){let F=S.colorSpace,tt=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===vo||F!==Fn&&F!==cn&&(te.getTransfer(F)===oe?o===!1?t.has("EXT_sRGB")===!0&&tt===_n?(S.format=vo,S.minFilter=on,S.generateMipmaps=!1):x=Rr.sRGBToLinear(x):(tt!==_n||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=L,this.resetTextureUnits=nt,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=$t,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=mt}function S_(i,t,e){let n=e.isWebGL2;function s(r,a=cn){let o,c=te.getTransfer(a);if(r===An)return i.UNSIGNED_BYTE;if(r===yh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Mh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===nd)return i.BYTE;if(r===id)return i.SHORT;if(r===tc)return i.UNSIGNED_SHORT;if(r===xh)return i.INT;if(r===Wn)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===Es)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===sd)return i.ALPHA;if(r===_n)return i.RGBA;if(r===rd)return i.LUMINANCE;if(r===ad)return i.LUMINANCE_ALPHA;if(r===ui)return i.DEPTH_COMPONENT;if(r===Yi)return i.DEPTH_STENCIL;if(r===vo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===od)return i.RED;if(r===bh)return i.RED_INTEGER;if(r===cd)return i.RG;if(r===Sh)return i.RG_INTEGER;if(r===Eh)return i.RGBA_INTEGER;if(r===Na||r===Ua||r===Oa||r===Fa)if(c===oe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wc||r===Xc||r===qc||r===$c)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Wc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$c)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yc||r===Zc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Yc)return c===oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Zc)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jc||r===Jc||r===Kc||r===Qc||r===tl||r===el||r===nl||r===il||r===sl||r===rl||r===al||r===ol||r===cl||r===ll)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===jc)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jc)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kc)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qc)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===el)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===il)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===al)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ol)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ll)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===za||r===hl||r===ul)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===za)return c===oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ul)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ld||r===dl||r===fl||r===pl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===za)return o.COMPRESSED_RED_RGTC1_EXT;if(r===dl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Do=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qe=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},No=class extends ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null,_=e.getContextAttributes(),m=null,p=null,E=[],v=[],T=new wt,I=null,C=new ze;C.layers.enable(1),C.viewport=new Re;let A=new ze;A.layers.enable(2),A.viewport=new Re;let H=[C,A],y=new Do;y.layers.enable(1),y.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=E[V];return Z===void 0&&(Z=new bs,E[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=E[V];return Z===void 0&&(Z=new bs,E[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=E[V];return Z===void 0&&(Z=new bs,E[V]=Z),Z.getHandSpace()};function X(V){let Z=v.indexOf(V.inputSource);if(Z===-1)return;let ht=E[Z];ht!==void 0&&(ht.update(V.inputSource,V.frame,l||a),ht.dispatchEvent({type:V.type,data:V.inputSource}))}function nt(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",L);for(let V=0;V<E.length;V++){let Z=v[V];Z!==null&&(v[V]=null,E[V].disconnect(Z))}b=null,N=null,t.setRenderTarget(m),u=null,d=null,f=null,s=null,p=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new hn(u.framebufferWidth,u.framebufferHeight,{format:_n,type:An,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ht=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Yi:ui,ht=_.stencil?hi:Wn);let _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new hn(d.textureWidth,d.textureHeight,{format:_n,type:An,depthTexture:new Br(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Dt=t.properties.get(p);Dt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let Z=0;Z<V.removed.length;Z++){let ht=V.removed[Z],xt=v.indexOf(ht);xt>=0&&(v[xt]=null,E[xt].disconnect(ht))}for(let Z=0;Z<V.added.length;Z++){let ht=V.added[Z],xt=v.indexOf(ht);if(xt===-1){for(let Dt=0;Dt<E.length;Dt++)if(Dt>=v.length){v.push(ht),xt=Dt;break}else if(v[Dt]===null){v[Dt]=ht,xt=Dt;break}if(xt===-1)break}let _t=E[xt];_t&&_t.connect(ht)}}let U=new R,G=new R;function $(V,Z,ht){U.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(ht.matrixWorld);let xt=U.distanceTo(G),_t=Z.projectionMatrix.elements,Dt=ht.projectionMatrix.elements,Ut=_t[14]/(_t[10]-1),Tt=_t[14]/(_t[10]+1),$t=(_t[9]+1)/_t[5],O=(_t[9]-1)/_t[5],Se=(_t[8]-1)/_t[0],St=(Dt[8]+1)/Dt[0],It=Ut*Se,mt=Ut*St,ae=xt/(-Se+St),Ot=ae*-Se;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ot),V.translateZ(ae),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let S=Ut+ae,x=Tt+ae,F=It-Ot,tt=mt+(xt-Ot),J=$t*Tt/x*S,Q=O*Tt/x*S;V.projectionMatrix.makePerspective(F,tt,J,Q,S,x),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=A.near=C.near=V.near,y.far=A.far=C.far=V.far,(b!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,N=y.far);let Z=V.parent,ht=y.cameras;q(y,Z);for(let xt=0;xt<ht.length;xt++)q(ht[xt],Z);ht.length===2?$(y,C,A):y.projectionMatrix.copy(C.projectionMatrix),W(V,y,Z)};function W(V,Z,ht){ht===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ht.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ws*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=V)};let K=null;function et(V,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){let ht=h.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let xt=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let _t=0;_t<ht.length;_t++){let Dt=ht[_t],Ut=null;if(u!==null)Ut=u.getViewport(Dt);else{let $t=f.getViewSubImage(d,Dt);Ut=$t.viewport,_t===0&&(t.setRenderTargetTextures(p,$t.colorTexture,d.ignoreDepthValues?void 0:$t.depthStencilTexture),t.setRenderTarget(p))}let Tt=H[_t];Tt===void 0&&(Tt=new ze,Tt.layers.enable(_t),Tt.viewport=new Re,H[_t]=Tt),Tt.matrix.fromArray(Dt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Dt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),_t===0&&(y.matrix.copy(Tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(Tt)}}for(let ht=0;ht<E.length;ht++){let xt=v[ht],_t=E[ht];xt!==null&&_t!==void 0&&_t.update(xt,Z,l||a)}K&&K(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let ut=new Lh;ut.setAnimationLoop(et),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}};function w_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,v,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,v){let T=v.program;n.uniformBlockBinding(E,T)}function l(E,v){let T=s[E.id];T===void 0&&(g(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",m));let I=v.program;n.updateUBOMapping(E,I);let C=t.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function h(E){let v=f();E.__bindingPointIndex=v;let T=i.createBuffer(),I=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let v=s[E.id],T=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,A=T.length;C<A;C++){let H=Array.isArray(T[C])?T[C]:[T[C]];for(let y=0,b=H.length;y<b;y++){let N=H[y];if(u(N,C,y,I)===!0){let X=N.__offset,nt=Array.isArray(N.value)?N.value:[N.value],L=0;for(let U=0;U<nt.length;U++){let G=nt[U],$=_(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,X+L,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,v,T,I){let C=E.value,A=v+"_"+T;if(I[A]===void 0)return typeof C=="number"||typeof C=="boolean"?I[A]=C:I[A]=C.clone(),!0;{let H=I[A];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return I[A]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function g(E){let v=E.uniforms,T=0,I=16;for(let A=0,H=v.length;A<H;A++){let y=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,N=y.length;b<N;b++){let X=y[b],nt=Array.isArray(X.value)?X.value:[X.value];for(let L=0,U=nt.length;L<U;L++){let G=nt[L],$=_(G),q=T%I;q!==0&&I-q<$.boundary&&(T+=I-q),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=$.storage}}}let C=T%I;return C>0&&(T+=I-C),E.__size=T,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Rs=class{constructor(t={}){let{canvas:e=Nd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;let v=this,T=!1,I=0,C=0,A=null,H=-1,y=null,b=new Re,N=new Re,X=null,nt=new Rt(0),L=0,U=e.width,G=e.height,$=1,q=null,W=null,K=new Re(0,0,U,G),et=new Re(0,0,U,G),ut=!1,V=new Cs,Z=!1,ht=!1,xt=null,_t=new Pt,Dt=new wt,Ut=new R,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $t(){return A===null?$:1}let O=n;function Se(M,D){for(let B=0;B<M.length;B++){let k=M[B],z=e.getContext(k,D);if(z!==null)return z}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qo}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",st,!1),O===null){let D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),O=Se(D,M),O===null)throw Se(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let St,It,mt,ae,Ot,S,x,F,tt,J,Q,gt,lt,ft,At,Bt,j,Yt,w,Y,ot,it,vt,Wt;function Zt(){St=new Xm(O),It=new Bm(O,St,t),St.init(It),it=new S_(O,St,It),mt=new M_(O,St,It),ae=new Ym(O),Ot=new l_,S=new b_(O,St,mt,Ot,It,it,ae),x=new Hm(v),F=new Wm(v),tt=new ef(O,It),vt=new Fm(O,St,tt,It),J=new qm(O,tt,ae,vt),Q=new Km(O,J,tt,ae),w=new Jm(O,It,S),Bt=new km(Ot),gt=new c_(v,x,F,St,It,vt,Bt),lt=new w_(v,Ot),ft=new u_,At=new __(St,It),Yt=new Om(v,x,F,mt,Q,d,c),j=new y_(v,Q,It),Wt=new T_(O,ae,It,mt),Y=new zm(O,St,ae,It),ot=new $m(O,St,ae,It),ae.programs=gt.programs,v.capabilities=It,v.extensions=St,v.properties=Ot,v.renderLists=ft,v.shadowMap=j,v.state=mt,v.info=ae}Zt();let Vt=new No(v,O);this.xr=Vt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=St.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=St.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(U,G,!1))},this.getSize=function(M){return M.set(U,G)},this.setSize=function(M,D,B=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,G=D,e.width=Math.floor(M*$),e.height=Math.floor(D*$),B===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(U*$,G*$).floor()},this.setDrawingBufferSize=function(M,D,B){U=M,G=D,$=B,e.width=Math.floor(M*B),e.height=Math.floor(D*B),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,D,B,k){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,D,B,k),mt.viewport(b.copy(K).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(et)},this.setScissor=function(M,D,B,k){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,D,B,k),mt.scissor(N.copy(et).multiplyScalar($).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(M){mt.setScissorTest(ut=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(M=!0,D=!0,B=!0){let k=0;if(M){let z=!1;if(A!==null){let dt=A.texture.format;z=dt===Eh||dt===Sh||dt===bh}if(z){let dt=A.texture.type,Mt=dt===An||dt===Wn||dt===tc||dt===hi||dt===yh||dt===Mh,Ct=Yt.getClearColor(),Lt=Yt.getClearAlpha(),Gt=Ct.r,Ft=Ct.g,kt=Ct.b;Mt?(u[0]=Gt,u[1]=Ft,u[2]=kt,u[3]=Lt,O.clearBufferuiv(O.COLOR,0,u)):(g[0]=Gt,g[1]=Ft,g[2]=kt,g[3]=Lt,O.clearBufferiv(O.COLOR,0,g))}else k|=O.COLOR_BUFFER_BIT}D&&(k|=O.DEPTH_BUFFER_BIT),B&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ft.dispose(),At.dispose(),Ot.dispose(),x.dispose(),F.dispose(),Q.dispose(),vt.dispose(),Wt.dispose(),gt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",He),Vt.removeEventListener("sessionend",se),xt&&(xt.dispose(),xt=null),Ve.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=ae.autoReset,D=j.enabled,B=j.autoUpdate,k=j.needsUpdate,z=j.type;Zt(),ae.autoReset=M,j.enabled=D,j.autoUpdate=B,j.needsUpdate=k,j.type=z}function st(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){let D=M.target;D.removeEventListener("dispose",rt),Et(D)}function Et(M){yt(M),Ot.remove(M)}function yt(M){let D=Ot.get(M).programs;D!==void 0&&(D.forEach(function(B){gt.releaseProgram(B)}),M.isShaderMaterial&&gt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,B,k,z,dt){D===null&&(D=Tt);let Mt=z.isMesh&&z.matrixWorld.determinant()<0,Ct=_u(M,D,B,k,z);mt.setMaterial(k,Mt);let Lt=B.index,Gt=1;if(k.wireframe===!0){if(Lt=J.getWireframeAttribute(B),Lt===void 0)return;Gt=2}let Ft=B.drawRange,kt=B.attributes.position,me=Ft.start*Gt,Je=(Ft.start+Ft.count)*Gt;dt!==null&&(me=Math.max(me,dt.start*Gt),Je=Math.min(Je,(dt.start+dt.count)*Gt)),Lt!==null?(me=Math.max(me,0),Je=Math.min(Je,Lt.count)):kt!=null&&(me=Math.max(me,0),Je=Math.min(Je,kt.count));let we=Je-me;if(we<0||we===1/0)return;vt.setup(z,k,Ct,B,Lt);let Cn,ue=Y;if(Lt!==null&&(Cn=tt.get(Lt),ue=ot,ue.setIndex(Cn)),z.isMesh)k.wireframe===!0?(mt.setLineWidth(k.wireframeLinewidth*$t()),ue.setMode(O.LINES)):ue.setMode(O.TRIANGLES);else if(z.isLine){let Xt=k.linewidth;Xt===void 0&&(Xt=1),mt.setLineWidth(Xt*$t()),z.isLineSegments?ue.setMode(O.LINES):z.isLineLoop?ue.setMode(O.LINE_LOOP):ue.setMode(O.LINE_STRIP)}else z.isPoints?ue.setMode(O.POINTS):z.isSprite&&ue.setMode(O.TRIANGLES);if(z.isBatchedMesh)ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ue.renderInstances(me,we,z.count);else if(B.isInstancedBufferGeometry){let Xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ra=Math.min(B.instanceCount,Xt);ue.renderInstances(me,we,Ra)}else ue.render(me,we)};function jt(M,D,B){M.transparent===!0&&M.side===Xe&&M.forceSinglePass===!1?(M.side=Ye,M.needsUpdate=!0,qs(M,D,B),M.side=$n,M.needsUpdate=!0,qs(M,D,B),M.side=Xe):qs(M,D,B)}this.compile=function(M,D,B=null){B===null&&(B=M),m=At.get(B),m.init(),E.push(m),B.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),M!==B&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights);let k=new Set;return M.traverse(function(z){let dt=z.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let Ct=dt[Mt];jt(Ct,B,z),k.add(Ct)}else jt(dt,B,z),k.add(dt)}),E.pop(),m=null,k},this.compileAsync=function(M,D,B=null){let k=this.compile(M,D,B);return new Promise(z=>{function dt(){if(k.forEach(function(Mt){Ot.get(Mt).currentProgram.isReady()&&k.delete(Mt)}),k.size===0){z(M);return}setTimeout(dt,10)}St.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Jt=null;function Ee(M){Jt&&Jt(M)}function He(){Ve.stop()}function se(){Ve.start()}let Ve=new Lh;Ve.setAnimationLoop(Ee),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(M){Jt=M,Vt.setAnimationLoop(M),M===null?Ve.stop():Ve.start()},Vt.addEventListener("sessionstart",He),Vt.addEventListener("sessionend",se),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(D),D=Vt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,A),m=At.get(M,E.length),m.init(),E.push(m),_t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(_t),ht=this.localClippingEnabled,Z=Bt.init(this.clippingPlanes,ht),_=ft.get(M,p.length),_.init(),p.push(_),Sn(M,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,W),this.info.render.frame++,Z===!0&&Bt.beginShadows();let B=m.state.shadowsArray;if(j.render(B,M,D),Z===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(_,M),m.setupLights(v._useLegacyLights),D.isArrayCamera){let k=D.cameras;for(let z=0,dt=k.length;z<dt;z++){let Mt=k[z];Ic(_,M,Mt,Mt.viewport)}}else Ic(_,M,D);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(v,M,D),vt.resetDefaultState(),H=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Sn(M,D,B,k){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){k&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t);let Mt=Q.update(M),Ct=M.material;Ct.visible&&_.push(M,Mt,Ct,B,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||V.intersectsObject(M))){let Mt=Q.update(M),Ct=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ut.copy(Mt.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(_t)),Array.isArray(Ct)){let Lt=Mt.groups;for(let Gt=0,Ft=Lt.length;Gt<Ft;Gt++){let kt=Lt[Gt],me=Ct[kt.materialIndex];me&&me.visible&&_.push(M,Mt,me,B,Ut.z,kt)}}else Ct.visible&&_.push(M,Mt,Ct,B,Ut.z,null)}}let dt=M.children;for(let Mt=0,Ct=dt.length;Mt<Ct;Mt++)Sn(dt[Mt],D,B,k)}function Ic(M,D,B,k){let z=M.opaque,dt=M.transmissive,Mt=M.transparent;m.setupLightsView(B),Z===!0&&Bt.setGlobalState(v.clippingPlanes,B),dt.length>0&&gu(z,dt,D,B),k&&mt.viewport(b.copy(k)),z.length>0&&Xs(z,D,B),dt.length>0&&Xs(dt,D,B),Mt.length>0&&Xs(Mt,D,B),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function gu(M,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let dt=It.isWebGL2;xt===null&&(xt=new hn(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Es:An,minFilter:Ss,samples:dt?4:0})),v.getDrawingBufferSize(Dt),dt?xt.setSize(Dt.x,Dt.y):xt.setSize(Ar(Dt.x),Ar(Dt.y));let Mt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(nt),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Ct=v.toneMapping;v.toneMapping=qn,Xs(M,B,k),S.updateMultisampleRenderTarget(xt),S.updateRenderTargetMipmap(xt);let Lt=!1;for(let Gt=0,Ft=D.length;Gt<Ft;Gt++){let kt=D[Gt],me=kt.object,Je=kt.geometry,we=kt.material,Cn=kt.group;if(we.side===Xe&&me.layers.test(k.layers)){let ue=we.side;we.side=Ye,we.needsUpdate=!0,Lc(me,B,k,Je,we,Cn),we.side=ue,we.needsUpdate=!0,Lt=!0}}Lt===!0&&(S.updateMultisampleRenderTarget(xt),S.updateRenderTargetMipmap(xt)),v.setRenderTarget(Mt),v.setClearColor(nt,L),v.toneMapping=Ct}function Xs(M,D,B){let k=D.isScene===!0?D.overrideMaterial:null;for(let z=0,dt=M.length;z<dt;z++){let Mt=M[z],Ct=Mt.object,Lt=Mt.geometry,Gt=k===null?Mt.material:k,Ft=Mt.group;Ct.layers.test(B.layers)&&Lc(Ct,D,B,Lt,Gt,Ft)}}function Lc(M,D,B,k,z,dt){M.onBeforeRender(v,D,B,k,z,dt),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(v,D,B,k,M,dt),z.transparent===!0&&z.side===Xe&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,v.renderBufferDirect(B,D,k,z,M,dt),z.side=$n,z.needsUpdate=!0,v.renderBufferDirect(B,D,k,z,M,dt),z.side=Xe):v.renderBufferDirect(B,D,k,z,M,dt),M.onAfterRender(v,D,B,k,z,dt)}function qs(M,D,B){D.isScene!==!0&&(D=Tt);let k=Ot.get(M),z=m.state.lights,dt=m.state.shadowsArray,Mt=z.state.version,Ct=gt.getParameters(M,z.state,dt,D,B),Lt=gt.getProgramCacheKey(Ct),Gt=k.programs;k.environment=M.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(M.isMeshStandardMaterial?F:x).get(M.envMap||k.environment),Gt===void 0&&(M.addEventListener("dispose",rt),Gt=new Map,k.programs=Gt);let Ft=Gt.get(Lt);if(Ft!==void 0){if(k.currentProgram===Ft&&k.lightsStateVersion===Mt)return Nc(M,Ct),Ft}else Ct.uniforms=gt.getUniforms(M),M.onBuild(B,Ct,v),M.onBeforeCompile(Ct,v),Ft=gt.acquireProgram(Ct,Lt),Gt.set(Lt,Ft),k.uniforms=Ct.uniforms;let kt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(kt.clippingPlanes=Bt.uniform),Nc(M,Ct),k.needsLights=xu(M),k.lightsStateVersion=Mt,k.needsLights&&(kt.ambientLightColor.value=z.state.ambient,kt.lightProbe.value=z.state.probe,kt.directionalLights.value=z.state.directional,kt.directionalLightShadows.value=z.state.directionalShadow,kt.spotLights.value=z.state.spot,kt.spotLightShadows.value=z.state.spotShadow,kt.rectAreaLights.value=z.state.rectArea,kt.ltc_1.value=z.state.rectAreaLTC1,kt.ltc_2.value=z.state.rectAreaLTC2,kt.pointLights.value=z.state.point,kt.pointLightShadows.value=z.state.pointShadow,kt.hemisphereLights.value=z.state.hemi,kt.directionalShadowMap.value=z.state.directionalShadowMap,kt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,kt.spotShadowMap.value=z.state.spotShadowMap,kt.spotLightMatrix.value=z.state.spotLightMatrix,kt.spotLightMap.value=z.state.spotLightMap,kt.pointShadowMap.value=z.state.pointShadowMap,kt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=Ft,k.uniformsList=null,Ft}function Dc(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Xi.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Nc(M,D){let B=Ot.get(M);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function _u(M,D,B,k,z){D.isScene!==!0&&(D=Tt),S.resetTextureUnits();let dt=D.fog,Mt=k.isMeshStandardMaterial?D.environment:null,Ct=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fn,Lt=(k.isMeshStandardMaterial?F:x).get(k.envMap||Mt),Gt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ft=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),kt=!!B.morphAttributes.position,me=!!B.morphAttributes.normal,Je=!!B.morphAttributes.color,we=qn;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(we=v.toneMapping);let Cn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=Cn!==void 0?Cn.length:0,Xt=Ot.get(k),Ra=m.state.lights;if(Z===!0&&(ht===!0||M!==y)){let rn=M===y&&k.id===H;Bt.setState(k,M,rn)}let fe=!1;k.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ra.state.version||Xt.outputColorSpace!==Ct||z.isBatchedMesh&&Xt.batching===!1||!z.isBatchedMesh&&Xt.batching===!0||z.isInstancedMesh&&Xt.instancing===!1||!z.isInstancedMesh&&Xt.instancing===!0||z.isSkinnedMesh&&Xt.skinning===!1||!z.isSkinnedMesh&&Xt.skinning===!0||z.isInstancedMesh&&Xt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xt.instancingColor===!1&&z.instanceColor!==null||Xt.envMap!==Lt||k.fog===!0&&Xt.fog!==dt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Bt.numPlanes||Xt.numIntersection!==Bt.numIntersection)||Xt.vertexAlphas!==Gt||Xt.vertexTangents!==Ft||Xt.morphTargets!==kt||Xt.morphNormals!==me||Xt.morphColors!==Je||Xt.toneMapping!==we||It.isWebGL2===!0&&Xt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Xt.__version=k.version);let ei=Xt.currentProgram;fe===!0&&(ei=qs(k,D,z));let Uc=!1,ds=!1,Pa=!1,Ue=ei.getUniforms(),ni=Xt.uniforms;if(mt.useProgram(ei.program)&&(Uc=!0,ds=!0,Pa=!0),k.id!==H&&(H=k.id,ds=!0),Uc||y!==M){Ue.setValue(O,"projectionMatrix",M.projectionMatrix),Ue.setValue(O,"viewMatrix",M.matrixWorldInverse);let rn=Ue.map.cameraPosition;rn!==void 0&&rn.setValue(O,Ut.setFromMatrixPosition(M.matrixWorld)),It.logarithmicDepthBuffer&&Ue.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ue.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,ds=!0,Pa=!0)}if(z.isSkinnedMesh){Ue.setOptional(O,z,"bindMatrix"),Ue.setOptional(O,z,"bindMatrixInverse");let rn=z.skeleton;rn&&(It.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Ue.setValue(O,"boneTexture",rn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ue.setOptional(O,z,"batchingTexture"),Ue.setValue(O,"batchingTexture",z._matricesTexture,S));let Ia=B.morphAttributes;if((Ia.position!==void 0||Ia.normal!==void 0||Ia.color!==void 0&&It.isWebGL2===!0)&&w.update(z,B,ei),(ds||Xt.receiveShadow!==z.receiveShadow)&&(Xt.receiveShadow=z.receiveShadow,Ue.setValue(O,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ni.envMap.value=Lt,ni.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ds&&(Ue.setValue(O,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&vu(ni,Pa),dt&&k.fog===!0&&lt.refreshFogUniforms(ni,dt),lt.refreshMaterialUniforms(ni,k,$,G,xt),Xi.upload(O,Dc(Xt),ni,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xi.upload(O,Dc(Xt),ni,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ue.setValue(O,"center",z.center),Ue.setValue(O,"modelViewMatrix",z.modelViewMatrix),Ue.setValue(O,"normalMatrix",z.normalMatrix),Ue.setValue(O,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let rn=k.uniformsGroups;for(let La=0,yu=rn.length;La<yu;La++)if(It.isWebGL2){let Oc=rn[La];Wt.update(Oc,ei),Wt.bind(Oc,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function vu(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function xu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,D,B){Ot.get(M.texture).__webglTexture=D,Ot.get(M.depthTexture).__webglTexture=B;let k=Ot.get(M);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){let B=Ot.get(M);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,B=0){A=M,I=D,C=B;let k=!0,z=null,dt=!1,Mt=!1;if(M){let Lt=Ot.get(M);Lt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(O.FRAMEBUFFER,null),k=!1):Lt.__webglFramebuffer===void 0?S.setupRenderTarget(M):Lt.__hasExternalTextures&&S.rebindTextures(M,Ot.get(M.texture).__webglTexture,Ot.get(M.depthTexture).__webglTexture);let Gt=M.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Mt=!0);let Ft=Ot.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?z=Ft[D][B]:z=Ft[D],dt=!0):It.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?z=Ot.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?z=Ft[B]:z=Ft,b.copy(M.viewport),N.copy(M.scissor),X=M.scissorTest}else b.copy(K).multiplyScalar($).floor(),N.copy(et).multiplyScalar($).floor(),X=ut;if(mt.bindFramebuffer(O.FRAMEBUFFER,z)&&It.drawBuffers&&k&&mt.drawBuffers(M,z),mt.viewport(b),mt.scissor(N),mt.setScissorTest(X),dt){let Lt=Ot.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Lt.__webglTexture,B)}else if(Mt){let Lt=Ot.get(M.texture),Gt=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,B||0,Gt)}H=-1},this.readRenderTargetPixels=function(M,D,B,k,z,dt,Mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){mt.bindFramebuffer(O.FRAMEBUFFER,Ct);try{let Lt=M.texture,Gt=Lt.format,Ft=Lt.type;if(Gt!==_n&&it.convert(Gt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let kt=Ft===Es&&(St.has("EXT_color_buffer_half_float")||It.isWebGL2&&St.has("EXT_color_buffer_float"));if(Ft!==An&&it.convert(Ft)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Tn&&(It.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-k&&B>=0&&B<=M.height-z&&O.readPixels(D,B,k,z,it.convert(Gt),it.convert(Ft),dt)}finally{let Lt=A!==null?Ot.get(A).__webglFramebuffer:null;mt.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(M,D,B=0){let k=Math.pow(2,-B),z=Math.floor(D.image.width*k),dt=Math.floor(D.image.height*k);S.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,M.x,M.y,z,dt),mt.unbindTexture()},this.copyTextureToTexture=function(M,D,B,k=0){let z=D.image.width,dt=D.image.height,Mt=it.convert(B.format),Ct=it.convert(B.type);S.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,M.x,M.y,z,dt,Mt,Ct,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Mt,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,k,M.x,M.y,Mt,Ct,D.image),k===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,B,k,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let dt=M.max.x-M.min.x+1,Mt=M.max.y-M.min.y+1,Ct=M.max.z-M.min.z+1,Lt=it.convert(k.format),Gt=it.convert(k.type),Ft;if(k.isData3DTexture)S.setTexture3D(k,0),Ft=O.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)S.setTexture2DArray(k,0),Ft=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let kt=O.getParameter(O.UNPACK_ROW_LENGTH),me=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Je=O.getParameter(O.UNPACK_SKIP_PIXELS),we=O.getParameter(O.UNPACK_SKIP_ROWS),Cn=O.getParameter(O.UNPACK_SKIP_IMAGES),ue=B.isCompressedTexture?B.mipmaps[z]:B.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,M.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,M.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Ft,z,D.x,D.y,D.z,dt,Mt,Ct,Lt,Gt,ue.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ft,z,D.x,D.y,D.z,dt,Mt,Ct,Lt,ue.data)):O.texSubImage3D(Ft,z,D.x,D.y,D.z,dt,Mt,Ct,Lt,Gt,ue),O.pixelStorei(O.UNPACK_ROW_LENGTH,kt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,we),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Cn),z===0&&k.generateMipmaps&&O.generateMipmap(Ft),mt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){I=0,C=0,A=null,mt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ec?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?di:Th}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===di?_e:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Uo=class extends Rs{};Uo.prototype.isWebGL1Renderer=!0;var Ps=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ge=new R,kr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Hr=class extends ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bi=new Pt,sh=new Pt,mr=[],rh=new Ze,A_=new Pt,_s=new Le,vs=new xn,Ji=class extends Le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,A_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),rh.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),vs.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),t.ray.intersectsSphere(vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bi),sh.multiplyMatrices(n,Bi),_s.matrixWorld=sh,_s.raycast(t,mr);for(let a=0,o=mr.length;a<o;a++){let c=mr[a];c.instanceId=r,c.object=this,e.push(c)}mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Zn=class extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ah=new R,oh=new R,ch=new Pt,co=new Yn,gr=new xn,fi=class extends De{constructor(t=new pe,e=new Zn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ah.fromBufferAttribute(e,s-1),oh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ah.distanceTo(oh);t.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;ch.copy(s).invert(),co.copy(t.ray).applyMatrix4(ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new R,h=new R,f=new R,d=new R,u=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let v=p,T=E-1;v<T;v+=u){let I=g.getX(v),C=g.getX(v+1);if(l.fromBufferAttribute(m,I),h.fromBufferAttribute(m,C),co.distanceSqToSegment(l,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);let H=t.ray.origin.distanceTo(d);H<t.near||H>t.far||e.push({distance:H,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let v=p,T=E-1;v<T;v+=u){if(l.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),co.distanceSqToSegment(l,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},lh=new R,hh=new R,Ki=class extends fi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lh.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lh.distanceTo(hh);t.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fo=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uh=new Pt,zo=new Yn,_r=new xn,vr=new R,Qi=class extends De{constructor(t=new pe,e=new Fo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;uh.copy(s).invert(),zo.copy(t.ray).applyMatrix4(uh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=d,_=u;g<_;g++){let m=l.getX(g);vr.fromBufferAttribute(f,m),dh(vr,m,c,s,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,_=u;g<_;g++)vr.fromBufferAttribute(f,g),dh(vr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(i,t,e,n,s,r,a){let o=zo.distanceSqToPoint(i);if(o<e){let c=new R;zo.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Bo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new wt:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,c=new Pt;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ce(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ce(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},pi=class extends Bo{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new wt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}};var Is=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function C_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ko=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gl:r=t,o=2*e-n;break;case _l:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gl:a=t,c=2*n-e;break;case _l:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-u)*m+(1.5+u)*_+.5*g,T=u*m-u*_;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+E*a[l+I]+v*a[c+I]+T*a[f+I];return r}},Ho=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Vo=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&C_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ba,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[d+g]||_!==e[u+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=br;var mi=class extends yn{};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Mr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends yn{};Go.prototype.ValueTypeName="color";var Wo=class extends yn{};Wo.prototype.ValueTypeName="number";var Xo=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)nn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ls=class extends yn{InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.DefaultInterpolation=br;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends yn{};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Mr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends yn{};qo.prototype.ValueTypeName="vector";var $o=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},R_=new $o,Yo=class{constructor(t){this.manager=t!==void 0?t:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Gr=class extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},lo=new Pt,fh=new R,ph=new R,Zo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var jo=class extends Zo{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new jo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xr=class extends pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var sc="\\[\\]\\.:\\/",P_=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",I_="[^"+sc.replace("\\.","")+"]",L_=/((?:WC+[\/:])*)/.source.replace("WC",rc),D_=/(WCOD+)?/.source.replace("WCOD",I_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),U_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),O_=new RegExp("^"+L_+D_+N_+U_+"$"),F_=["material","materials","bones","map"],Jo=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P_,"")}static parseTrackName(t){let e=O_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);F_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Jo;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S0=new Float32Array(1);var qr=class extends Oo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var es=class{constructor(t,e,n=0,s=1/0){this.ray=new Yn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ko(t,this,n,e),n.sort(mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ko(t[s],this,n,e);return n.sort(mh),n}};function mh(i,t){return i.distance-t.distance}function Ko(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Ko(s[r],t,e,!0)}}var Ds=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $r=class extends Ki{constructor(t=10,e=10,n=4473924,s=8947848){n=new Rt(n),s=new Rt(s);let r=e/2,a=t/e,o=t/2,c=[],l=[];for(let d=0,u=0,g=-o;d<=e;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);let _=d===r?n:s;_.toArray(l,u),u+=3,_.toArray(l,u),u+=3,_.toArray(l,u),u+=3,_.toArray(l,u),u+=3}let h=new pe;h.setAttribute("position",new en(c,3)),h.setAttribute("color",new en(l,3));let f=new Zn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);var zh={type:"change"},ac={type:"start"},Bh={type:"end"},Jr=new Yn,kh=new tn,B_=Math.cos(70*ee.DEG2RAD),Kr=class extends ln{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",Q),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Q),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(zh),n.update(),r=s.NONE},this.update=function(){let w=new R,Y=new nn().setFromUnitVectors(t.up,new R(0,1,0)),ot=Y.clone().invert(),it=new R,vt=new nn,Wt=new R,Zt=2*Math.PI;return function(at=null){let P=n.object.position;w.copy(P).sub(n.target),w.applyQuaternion(Y),o.setFromVector3(w),n.autoRotate&&r===s.NONE&&N(y(at)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let st=n.minAzimuthAngle,rt=n.maxAzimuthAngle;isFinite(st)&&isFinite(rt)&&(st<-Math.PI?st+=Zt:st>Math.PI&&(st-=Zt),rt<-Math.PI?rt+=Zt:rt>Math.PI&&(rt-=Zt),st<=rt?o.theta=Math.max(st,Math.min(rt,o.theta)):o.theta=o.theta>(st+rt)/2?Math.max(st,o.theta):Math.min(rt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*l),w.setFromSpherical(o),w.applyQuaternion(ot),P.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Et=!1;if(n.zoomToCursor&&C){let yt=null;if(n.object.isPerspectiveCamera){let jt=w.length();yt=W(jt*l);let Jt=jt-yt;n.object.position.addScaledVector(T,Jt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let jt=new R(I.x,I.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Et=!0;let Jt=new R(I.x,I.y,0);Jt.unproject(n.object),n.object.position.sub(Jt).add(jt),n.object.updateMatrixWorld(),yt=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;yt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(yt).add(n.object.position):(Jr.origin.copy(n.object.position),Jr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Jr.direction))<B_?t.lookAt(n.target):(kh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Jr.intersectPlane(kh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Et=!0);return l=1,C=!1,Et||it.distanceToSquared(n.object.position)>a||8*(1-vt.dot(n.object.quaternion))>a||Wt.distanceToSquared(n.target)>0?(n.dispatchEvent(zh),it.copy(n.object.position),vt.copy(n.object.quaternion),Wt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ft),n.domElement.removeEventListener("pointerdown",Ot),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",x),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Q),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Ds,c=new Ds,l=1,h=new R,f=new wt,d=new wt,u=new wt,g=new wt,_=new wt,m=new wt,p=new wt,E=new wt,v=new wt,T=new R,I=new wt,C=!1,A=[],H={};function y(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function b(w){let Y=Math.abs(w)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Y)}function N(w){c.theta-=w}function X(w){c.phi-=w}let nt=function(){let w=new R;return function(ot,it){w.setFromMatrixColumn(it,0),w.multiplyScalar(-ot),h.add(w)}}(),L=function(){let w=new R;return function(ot,it){n.screenSpacePanning===!0?w.setFromMatrixColumn(it,1):(w.setFromMatrixColumn(it,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(ot),h.add(w)}}(),U=function(){let w=new R;return function(ot,it){let vt=n.domElement;if(n.object.isPerspectiveCamera){let Wt=n.object.position;w.copy(Wt).sub(n.target);let Zt=w.length();Zt*=Math.tan(n.object.fov/2*Math.PI/180),nt(2*ot*Zt/vt.clientHeight,n.object.matrix),L(2*it*Zt/vt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(nt(ot*(n.object.right-n.object.left)/n.object.zoom/vt.clientWidth,n.object.matrix),L(it*(n.object.top-n.object.bottom)/n.object.zoom/vt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(w,Y){if(!n.zoomToCursor)return;C=!0;let ot=n.domElement.getBoundingClientRect(),it=w-ot.left,vt=Y-ot.top,Wt=ot.width,Zt=ot.height;I.x=it/Wt*2-1,I.y=-(vt/Zt)*2+1,T.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function K(w){f.set(w.clientX,w.clientY)}function et(w){q(w.clientX,w.clientX),p.set(w.clientX,w.clientY)}function ut(w){g.set(w.clientX,w.clientY)}function V(w){d.set(w.clientX,w.clientY),u.subVectors(d,f).multiplyScalar(n.rotateSpeed);let Y=n.domElement;N(2*Math.PI*u.x/Y.clientHeight),X(2*Math.PI*u.y/Y.clientHeight),f.copy(d),n.update()}function Z(w){E.set(w.clientX,w.clientY),v.subVectors(E,p),v.y>0?G(b(v.y)):v.y<0&&$(b(v.y)),p.copy(E),n.update()}function ht(w){_.set(w.clientX,w.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_),n.update()}function xt(w){q(w.clientX,w.clientY),w.deltaY<0?$(b(w.deltaY)):w.deltaY>0&&G(b(w.deltaY)),n.update()}function _t(w){let Y=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),Y=!0;break}Y&&(w.preventDefault(),n.update())}function Dt(w){if(A.length===1)f.set(w.pageX,w.pageY);else{let Y=Yt(w),ot=.5*(w.pageX+Y.x),it=.5*(w.pageY+Y.y);f.set(ot,it)}}function Ut(w){if(A.length===1)g.set(w.pageX,w.pageY);else{let Y=Yt(w),ot=.5*(w.pageX+Y.x),it=.5*(w.pageY+Y.y);g.set(ot,it)}}function Tt(w){let Y=Yt(w),ot=w.pageX-Y.x,it=w.pageY-Y.y,vt=Math.sqrt(ot*ot+it*it);p.set(0,vt)}function $t(w){n.enableZoom&&Tt(w),n.enablePan&&Ut(w)}function O(w){n.enableZoom&&Tt(w),n.enableRotate&&Dt(w)}function Se(w){if(A.length==1)d.set(w.pageX,w.pageY);else{let ot=Yt(w),it=.5*(w.pageX+ot.x),vt=.5*(w.pageY+ot.y);d.set(it,vt)}u.subVectors(d,f).multiplyScalar(n.rotateSpeed);let Y=n.domElement;N(2*Math.PI*u.x/Y.clientHeight),X(2*Math.PI*u.y/Y.clientHeight),f.copy(d)}function St(w){if(A.length===1)_.set(w.pageX,w.pageY);else{let Y=Yt(w),ot=.5*(w.pageX+Y.x),it=.5*(w.pageY+Y.y);_.set(ot,it)}m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_)}function It(w){let Y=Yt(w),ot=w.pageX-Y.x,it=w.pageY-Y.y,vt=Math.sqrt(ot*ot+it*it);E.set(0,vt),v.set(0,Math.pow(E.y/p.y,n.zoomSpeed)),G(v.y),p.copy(E);let Wt=(w.pageX+Y.x)*.5,Zt=(w.pageY+Y.y)*.5;q(Wt,Zt)}function mt(w){n.enableZoom&&It(w),n.enablePan&&St(w)}function ae(w){n.enableZoom&&It(w),n.enableRotate&&Se(w)}function Ot(w){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",x)),At(w),w.pointerType==="touch"?gt(w):F(w))}function S(w){n.enabled!==!1&&(w.pointerType==="touch"?lt(w):tt(w))}function x(w){Bt(w),A.length===0&&(n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",x)),n.dispatchEvent(Bh),r=s.NONE}function F(w){let Y;switch(w.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case _i.DOLLY:if(n.enableZoom===!1)return;et(w),r=s.DOLLY;break;case _i.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;ut(w),r=s.PAN}else{if(n.enableRotate===!1)return;K(w),r=s.ROTATE}break;case _i.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;K(w),r=s.ROTATE}else{if(n.enablePan===!1)return;ut(w),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ac)}function tt(w){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(w);break;case s.DOLLY:if(n.enableZoom===!1)return;Z(w);break;case s.PAN:if(n.enablePan===!1)return;ht(w);break}}function J(w){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(w.preventDefault(),n.dispatchEvent(ac),xt(w),n.dispatchEvent(Bh))}function Q(w){n.enabled===!1||n.enablePan===!1||_t(w)}function gt(w){switch(j(w),A.length){case 1:switch(n.touches.ONE){case vi.ROTATE:if(n.enableRotate===!1)return;Dt(w),r=s.TOUCH_ROTATE;break;case vi.PAN:if(n.enablePan===!1)return;Ut(w),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$t(w),r=s.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;O(w),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ac)}function lt(w){switch(j(w),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(w),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;St(w),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;mt(w),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(w),n.update();break;default:r=s.NONE}}function ft(w){n.enabled!==!1&&w.preventDefault()}function At(w){A.push(w.pointerId)}function Bt(w){delete H[w.pointerId];for(let Y=0;Y<A.length;Y++)if(A[Y]==w.pointerId){A.splice(Y,1);return}}function j(w){let Y=H[w.pointerId];Y===void 0&&(Y=new wt,H[w.pointerId]=Y),Y.set(w.pageX,w.pageY)}function Yt(w){let Y=w.pointerId===A[0]?A[1]:A[0];return H[Y]}n.domElement.addEventListener("contextmenu",ft),n.domElement.addEventListener("pointerdown",Ot),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",J,{passive:!1}),this.update()}};var bt={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},Kt={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},zt={x:0,y:0},sn={camera:new Pt,gizmos:new Pt},re={type:"change"},bn={type:"start"},un={type:"end"},k_=new es,ve=new R,Hh=new Pt,Vh=new Pt,Mn=new R,Qr=class extends ln{constructor(t,e,n=null){super(),this.camera=null,this.domElement=e,this.scene=n,this.target=new R,this._currentTarget=new R,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new wt,this._v3_1=new R,this._v3_2=new R,this._m4_1=new Pt,this._m4_2=new Pt,this._quat=new nn,this._translationMatrix=new Pt,this._rotationMatrix=new Pt,this._scaleMatrix=new Pt,this._rotationAxis=new R,this._cameraMatrixState=new Pt,this._cameraProjectionState=new Pt,this._fovState=1,this._upState=new R,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Pt,this._up0=new R,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Pt,this._gizmoMatrixState0=new Pt,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=Kt.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new R,this._startCursorPosition=new R,this._grid=null,this._gridPosition=new R,this._gizmos=new qe,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new R,this._cursorPosCurr=new R,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.rotateSpeed=1,this.enabled=!0,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=bt.IDLE,this.setCamera(t),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this._onContextMenu=V_.bind(this),this._onWheel=$_.bind(this),this._onPointerUp=q_.bind(this),this._onPointerMove=X_.bind(this),this._onPointerDown=W_.bind(this),this._onPointerCancel=G_.bind(this),this._onWindowResize=H_.bind(this),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onWheel),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("resize",this._onWindowResize)}onSinglePanStart(t,e){if(this.enabled)switch(this.dispatchEvent(bn),this.setCenter(t.clientX,t.clientY),e){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(re)),this.updateTbState(bt.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(re));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(bt.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,zt.x,zt.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(re);break;case"FOV":if(!this.camera.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(re)),this.updateTbState(bt.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(re)),this.updateTbState(bt.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}}onSinglePanMove(t,e){if(this.enabled){let n=e!=this._state;switch(this.setCenter(t.clientX,t.clientY),e){case bt.PAN:this.enablePan&&(n?(this.dispatchEvent(un),this.dispatchEvent(bn),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case bt.ROTATE:if(this.enableRotate)if(n)this.dispatchEvent(un),this.dispatchEvent(bn),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,zt.x,zt.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,zt.x,zt.y,this.domElement,this._tbRadius));let s=this._startCursorPosition.distanceTo(this._currentCursorPosition),r=this._startCursorPosition.angleTo(this._currentCursorPosition),a=Math.max(s/this._tbRadius,r)*this.rotateSpeed;this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),a)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=a,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case bt.SCALE:if(this.enableZoom)if(n)this.dispatchEvent(un),this.dispatchEvent(bn),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5);let r=this._currentCursorPosition.y-this._startCursorPosition.y,a=1;r<0?a=1/Math.pow(this.scaleFactor,-r*8):r>0&&(a=Math.pow(this.scaleFactor,r*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(a,this._v3_1))}break;case bt.FOV:if(this.enableZoom&&this.camera.isPerspectiveCamera)if(n)this.dispatchEvent(un),this.dispatchEvent(bn),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5);let r=this._currentCursorPosition.y-this._startCursorPosition.y,a=1;r<0?a=1/Math.pow(this.scaleFactor,-r*8):r>0&&(a=Math.pow(this.scaleFactor,r*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);let o=this._v3_1.distanceTo(this._gizmos.position),c=o/a;c=ee.clamp(c,this.minDistance,this.maxDistance);let l=o*Math.tan(ee.DEG2RAD*this._fovState*.5),h=ee.RAD2DEG*(Math.atan(l/c)*2);h=ee.clamp(h,this.minFov,this.maxFov);let f=l/Math.tan(ee.DEG2RAD*(h/2));a=o/f,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(h),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),ve.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(f/o),this._m4_1.makeTranslation(ve.x,ve.y,ve.z)}break}this.dispatchEvent(re)}}onSinglePanEnd(){if(this._state==bt.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){let e=Math.abs((this._wPrev+this._wCurr)/2),n=this;this._animationId=window.requestAnimationFrame(function(s){n.updateTbState(bt.ANIMATION_ROTATE,!0);let r=n.calculateRotationAxis(n._cursorPosPrev,n._cursorPosCurr);n.onRotationAnim(s,r,Math.min(e,n.wMax))})}else this.updateTbState(bt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(re);else this.updateTbState(bt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(re)}else(this._state==bt.PAN||this._state==bt.IDLE)&&(this.updateTbState(bt.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(re));this.dispatchEvent(un)}onDoubleTap(t){if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(bn),this.setCenter(t.clientX,t.clientY);let e=this.unprojectOnObj(this.getCursorNDC(zt.x,zt.y,this.domElement),this.camera);if(e!=null&&this.enableAnimations){let n=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(s){n.updateTbState(bt.ANIMATION_FOCUS,!0),n.onFocusAnim(s,e,n._cameraMatrixState,n._gizmoMatrixState)})}else e!=null&&!this.enableAnimations&&(this.updateTbState(bt.FOCUS,!0),this.focus(e,this.scaleFactor),this.updateTbState(bt.IDLE,!1),this.dispatchEvent(re))}this.dispatchEvent(un)}onDoublePanStart(){this.enabled&&this.enablePan&&(this.dispatchEvent(bn),this.updateTbState(bt.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))}onDoublePanMove(){this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=bt.PAN&&(this.updateTbState(bt.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(re))}onDoublePanEnd(){this.updateTbState(bt.IDLE,!1),this.dispatchEvent(un)}onRotateStart(){this.enabled&&this.enableRotate&&(this.dispatchEvent(bn),this.updateTbState(bt.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))}onRotateMove(){if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let t;this._state!=bt.ZROTATE&&(this.updateTbState(bt.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),t=this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):t=new R().setFromMatrixPosition(this._gizmoMatrixState);let e=ee.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(t,e)),this.dispatchEvent(re)}}onRotateEnd(){this.updateTbState(bt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(un)}onPinchStart(){this.enabled&&this.enableZoom&&(this.dispatchEvent(bn),this.updateTbState(bt.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))}onPinchMove(){if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let t=12;this._state!=bt.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(bt.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),t*this._devPxRatio);let e=this._currentFingerDistance/this._startFingerDistance,n;this.enablePan?this.camera.isOrthographicCamera?n=this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(n=this.unprojectOnTbPlane(this.camera,zt.x,zt.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):n=this._gizmos.position,this.applyTransformMatrix(this.scale(e,n)),this.dispatchEvent(re)}}onPinchEnd(){this.updateTbState(bt.IDLE,!1),this.dispatchEvent(un)}onTriplePanStart(){if(this.enabled&&this.enableZoom){this.dispatchEvent(bn),this.updateTbState(bt.SCALE,!0);let t=0,e=0,n=this._touchCurrent.length;for(let s=0;s<n;s++)t+=this._touchCurrent[s].clientX,e+=this._touchCurrent[s].clientY;this.setCenter(t/n,e/n),this._startCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}}onTriplePanMove(){if(this.enabled&&this.enableZoom){let t=0,e=0,n=this._touchCurrent.length;for(let d=0;d<n;d++)t+=this._touchCurrent[d].clientX,e+=this._touchCurrent[d].clientY;this.setCenter(t/n,e/n);let s=8;this._currentCursorPosition.setY(this.getCursorNDC(zt.x,zt.y,this.domElement).y*.5);let r=this._currentCursorPosition.y-this._startCursorPosition.y,a=1;r<0?a=1/Math.pow(this.scaleFactor,-r*s):r>0&&(a=Math.pow(this.scaleFactor,r*s)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);let o=this._v3_1.distanceTo(this._gizmos.position),c=o/a;c=ee.clamp(c,this.minDistance,this.maxDistance);let l=o*Math.tan(ee.DEG2RAD*this._fovState*.5),h=ee.RAD2DEG*(Math.atan(l/c)*2);h=ee.clamp(h,this.minFov,this.maxFov);let f=l/Math.tan(ee.DEG2RAD*(h/2));a=o/f,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(h),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),ve.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(f/o),this._m4_1.makeTranslation(ve.x,ve.y,ve.z),this.dispatchEvent(re)}}onTriplePanEnd(){this.updateTbState(bt.IDLE,!1),this.dispatchEvent(un)}setCenter(t,e){zt.x=t,zt.y=e}initializeMouseActions(){this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")}compareMouseAction(t,e){return t.operation==e.operation?t.mouse==e.mouse&&t.key==e.key:!1}setMouseAction(t,e,n=null){let s=["PAN","ROTATE","ZOOM","FOV"],r=[0,1,2,"WHEEL"],a=["CTRL","SHIFT",null],o;if(!s.includes(t)||!r.includes(e)||!a.includes(n)||e=="WHEEL"&&t!="ZOOM"&&t!="FOV")return!1;switch(t){case"PAN":o=bt.PAN;break;case"ROTATE":o=bt.ROTATE;break;case"ZOOM":o=bt.SCALE;break;case"FOV":o=bt.FOV;break}let c={operation:t,mouse:e,key:n,state:o};for(let l=0;l<this.mouseActions.length;l++)if(this.mouseActions[l].mouse==c.mouse&&this.mouseActions[l].key==c.key)return this.mouseActions.splice(l,1,c),!0;return this.mouseActions.push(c),!0}unsetMouseAction(t,e=null){for(let n=0;n<this.mouseActions.length;n++)if(this.mouseActions[n].mouse==t&&this.mouseActions[n].key==e)return this.mouseActions.splice(n,1),!0;return!1}getOpFromAction(t,e){let n;for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==t&&n.key==e)return n.operation;if(e!=null){for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==t&&n.key==null)return n.operation}return null}getOpStateFromAction(t,e){let n;for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==t&&n.key==e)return n.state;if(e!=null){for(let s=0;s<this.mouseActions.length;s++)if(n=this.mouseActions[s],n.mouse==t&&n.key==null)return n.state}return null}getAngle(t,e){return Math.atan2(e.clientY-t.clientY,e.clientX-t.clientX)*180/Math.PI}updateTouchEvent(t){for(let e=0;e<this._touchCurrent.length;e++)if(this._touchCurrent[e].pointerId==t.pointerId){this._touchCurrent.splice(e,1,t);break}}applyTransformMatrix(t){if(t.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(t.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==bt.ROTATE||this._state==bt.ZROTATE||this._state==bt.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),t.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(t.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==bt.SCALE||this._state==bt.FOCUS||this._state==bt.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){let e=this.camera.position.distanceTo(this._gizmos.position),n=new Ze;n.setFromObject(this._gizmos);let s=new xn;n.getBoundingSphere(s);let r=Math.max(this._nearPos0,s.radius+s.center.length()),a=e-this._initialNear,o=Math.min(r,a);this.camera.near=e-o;let c=Math.min(this._farPos0,-s.radius+s.center.length()),l=e-this._initialFar,h=Math.min(c,l);this.camera.far=e-h,this.camera.updateProjectionMatrix()}else{let e=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,e=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,e=!0),e&&this.camera.updateProjectionMatrix()}}calculateAngularSpeed(t,e,n,s){let r=e-t,a=(s-n)/1e3;return a==0?0:r/a}calculatePointersDistance(t,e){return Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2))}calculateRotationAxis(t,e){return this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(t,e).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()}calculateTbRadius(t){let e=t.position.distanceTo(this._gizmos.position);if(t.type=="PerspectiveCamera"){let n=ee.DEG2RAD*t.fov*.5,s=Math.atan(t.aspect*Math.tan(n));return Math.tan(Math.min(n,s))*e*this.radiusFactor}else if(t.type=="OrthographicCamera")return Math.min(t.top,t.right)*this.radiusFactor}focus(t,e,n=1){ve.copy(t).sub(this._gizmos.position).multiplyScalar(n),this._translationMatrix.makeTranslation(ve.x,ve.y,ve.z),Hh.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),Vh.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(e,this._gizmos.position)),this._gizmoMatrixState.copy(Hh),this._cameraMatrixState.copy(Vh)}drawGrid(){if(this.scene!=null){let n,s,r,a;if(this.camera.isOrthographicCamera){let o=this.camera.right-this.camera.left,c=this.camera.bottom-this.camera.top;r=Math.max(o,c),a=r/20,n=r/this.camera.zoom*3,s=n/a*this.camera.zoom}else if(this.camera.isPerspectiveCamera){let o=this.camera.position.distanceTo(this._gizmos.position),c=ee.DEG2RAD*this.camera.fov*.5,l=Math.atan(this.camera.aspect*Math.tan(c));r=Math.tan(Math.max(c,l))*o*2,a=r/20,n=r*3,s=n/a}this._grid==null&&(this._grid=new $r(n,s,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}}dispose(){this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("resize",this._onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()}disposeGrid(){this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)}easeOutCubic(t){return 1-Math.pow(1-t,3)}activateGizmos(t){let e=this._gizmos.children[0],n=this._gizmos.children[1],s=this._gizmos.children[2];t?(e.material.setValues({opacity:1}),n.material.setValues({opacity:1}),s.material.setValues({opacity:1})):(e.material.setValues({opacity:.6}),n.material.setValues({opacity:.6}),s.material.setValues({opacity:.6}))}getCursorNDC(t,e,n){let s=n.getBoundingClientRect();return this._v2_1.setX((t-s.left)/s.width*2-1),this._v2_1.setY((s.bottom-e)/s.height*2-1),this._v2_1.clone()}getCursorPosition(t,e,n){return this._v2_1.copy(this.getCursorNDC(t,e,n)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5,this._v2_1.clone()}setCamera(t){t.lookAt(this.target),t.updateMatrix(),t.type=="PerspectiveCamera"&&(this._fov0=t.fov,this._fovState=t.fov),this._cameraMatrixState0.copy(t.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(t.projectionMatrix),this._zoom0=t.zoom,this._zoomState=this._zoom0,this._initialNear=t.near,this._nearPos0=t.position.distanceTo(this.target)-t.near,this._nearPos=this._initialNear,this._initialFar=t.far,this._farPos0=t.position.distanceTo(this.target)-t.far,this._farPos=this._initialFar,this._up0.copy(t.up),this._upState.copy(t.up),this.camera=t,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(t),this.makeGizmos(this.target,this._tbRadius)}setGizmosVisible(t){this._gizmos.visible=t,this.dispatchEvent(re)}setTbRadius(t){this.radiusFactor=t,this._tbRadius=this.calculateTbRadius(this.camera);let n=new pi(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),s=new pe().setFromPoints(n);for(let r in this._gizmos.children)this._gizmos.children[r].geometry=s;this.dispatchEvent(re)}makeGizmos(t,e){let s=new pi(0,0,e,e).getPoints(this._curvePts),r=new pe().setFromPoints(s),a=new Zn({color:16744576,fog:!1,transparent:!0,opacity:.6}),o=new Zn({color:8454016,fog:!1,transparent:!0,opacity:.6}),c=new Zn({color:8421631,fog:!1,transparent:!0,opacity:.6}),l=new fi(r,a),h=new fi(r,o),f=new fi(r,c),d=Math.PI*.5;if(l.rotation.x=d,h.rotation.y=d,this._gizmoMatrixState0.identity().setPosition(t),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){let u=1/this.camera.zoom;this._scaleMatrix.makeScale(u,u,u),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(t.x,t.y,t.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(u){u.isLine&&(u.geometry.dispose(),u.material.dispose())}),this._gizmos.clear(),this._gizmos.add(l),this._gizmos.add(h),this._gizmos.add(f)}onFocusAnim(t,e,n,s){if(this._timeStart==-1&&(this._timeStart=t),this._state==bt.ANIMATION_FOCUS){let a=(t-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(s),a>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,this.scaleFactor),this._timeStart=-1,this.updateTbState(bt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(re);else{let o=this.easeOutCubic(a),c=1-o+this.scaleFactor*o;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,c,o),this.dispatchEvent(re);let l=this;this._animationId=window.requestAnimationFrame(function(h){l.onFocusAnim(h,e,n,s.clone())})}}else this._animationId=-1,this._timeStart=-1}onRotationAnim(t,e,n){if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=t),this._state==bt.ANIMATION_ROTATE){let s=(t-this._timeStart)/1e3;if(n+-this.dampingFactor*s>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(s,2)+n*s+0,this.applyTransformMatrix(this.rotate(e,this._angleCurrent)),this.dispatchEvent(re);let a=this;this._animationId=window.requestAnimationFrame(function(o){a.onRotationAnim(o,e,n)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(bt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(re)}else this._animationId=-1,this._timeStart=-1,this._state!=bt.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(re))}pan(t,e,n=!1){let s=t.clone().sub(e);if(this.camera.isOrthographicCamera)s.multiplyScalar(1/this.camera.zoom);else if(this.camera.isPerspectiveCamera&&n){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);let r=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);s.multiplyScalar(1/r)}return this._v3_1.set(s.x,s.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),sn}reset(){this.camera.zoom=this._zoom0,this.camera.isPerspectiveCamera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this._gizmos.position,this._tbRadius),this.camera.lookAt(this._gizmos.position),this.updateTbState(bt.IDLE,!1),this.dispatchEvent(re)}rotate(t,e){let n=this._gizmos.position;return this._translationMatrix.makeTranslation(-n.x,-n.y,-n.z),this._rotationMatrix.makeRotationAxis(t,-e),this._m4_1.makeTranslation(n.x,n.y,n.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),sn}copyState(){let t;this.camera.isOrthographicCamera?t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):this.camera.isPerspectiveCamera&&(t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(t)}pasteState(){let t=this;navigator.clipboard.readText().then(function(n){t.setStateFromJSON(n)})}saveState(){this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),this.camera.isPerspectiveCamera&&(this._fov0=this.camera.fov)}scale(t,e,n=!0){Mn.copy(e);let s=1/t;if(this.camera.isOrthographicCamera){this.camera.zoom=this._zoomState,this.camera.zoom*=t,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,s=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,s=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(s,s,s),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),Mn.sub(this._v3_1);let r=Mn.clone().multiplyScalar(s);return Mn.sub(r),this._m4_1.makeTranslation(Mn.x,Mn.y,Mn.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),sn}else if(this.camera.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let r=this._v3_1.distanceTo(Mn),a=r-r*s,o=r-a;if(o<this.minDistance?(s=this.minDistance/r,a=r-r*s):o>this.maxDistance&&(s=this.maxDistance/r,a=r-r*s),ve.copy(Mn).sub(this._v3_1).normalize().multiplyScalar(a),this._m4_1.makeTranslation(ve.x,ve.y,ve.z),n){let c=this._v3_2;r=c.distanceTo(Mn),a=r-r*s,ve.copy(Mn).sub(this._v3_2).normalize().multiplyScalar(a),this._translationMatrix.makeTranslation(c.x,c.y,c.z),this._scaleMatrix.makeScale(s,s,s),this._m4_2.makeTranslation(ve.x,ve.y,ve.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-c.x,-c.y,-c.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return sn}}setFov(t){this.camera.isPerspectiveCamera&&(this.camera.fov=ee.clamp(t,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())}setTransformationMatrices(t=null,e=null){t!=null?sn.camera!=null?sn.camera.copy(t):sn.camera=t.clone():sn.camera=null,e!=null?sn.gizmos!=null?sn.gizmos.copy(e):sn.gizmos=e.clone():sn.gizmos=null}zRotate(t,e){return this._rotationMatrix.makeRotationAxis(this._rotationAxis,e),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._m4_1.makeTranslation(t.x,t.y,t.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(t),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,e),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),sn}getRaycaster(){return k_}unprojectOnObj(t,e){let n=this.getRaycaster();n.near=e.near,n.far=e.far,n.setFromCamera(t,e);let s=n.intersectObjects(this.scene.children,!0);for(let r=0;r<s.length;r++)if(s[r].object.uuid!=this._gizmos.uuid&&s[r].face!=null)return s[r].point.clone();return null}unprojectOnTbSurface(t,e,n,s,r){if(t.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(e,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);let a=Math.pow(this._v2_1.x,2),o=Math.pow(this._v2_1.y,2),c=Math.pow(this._tbRadius,2);return a+o<=c*.5?this._v3_1.setZ(Math.sqrt(c-(a+o))):this._v3_1.setZ(c*.5/Math.sqrt(a+o)),this._v3_1}else if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);let a=this._v3_1.clone().normalize(),o=t.position.distanceTo(this._gizmos.position),c=Math.pow(r,2),l=this._v3_1.z,h=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(h==0)return a.set(this._v3_1.x,this._v3_1.y,r),a;let f=l/h,d=o,u=Math.pow(f,2)+1,g=2*f*d,_=Math.pow(d,2)-c,m=Math.pow(g,2)-4*u*_;if(m>=0&&(this._v2_1.setX((-g-Math.sqrt(m))/(2*u)),this._v2_1.setY(f*this._v2_1.x+d),ee.RAD2DEG*this._v2_1.angle()>=45)){let v=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(v),a.z+=o,a}u=f,g=d,_=-c*.5,m=Math.pow(g,2)-4*u*_,this._v2_1.setX((-g-Math.sqrt(m))/(2*u)),this._v2_1.setY(f*this._v2_1.x+d);let p=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(p),a.z+=o,a}}unprojectOnTbPlane(t,e,n,s,r=!1){if(t.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(e,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,n,s)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);let a=this._v3_1.clone().normalize(),o=this._v3_1.z,c=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2)),l;if(r?l=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):l=t.position.distanceTo(this._gizmos.position),c==0)return a.set(0,0,0),a;let h=o/c,f=l,d=-f/h,u=Math.sqrt(Math.pow(f,2)+Math.pow(d,2));return a.multiplyScalar(u),a.z=0,a}}updateMatrixState(){this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.camera.isOrthographicCamera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):this.camera.isPerspectiveCamera&&(this._fovState=this.camera.fov)}updateTbState(t,e){this._state=t,e&&this.updateMatrixState()}update(){if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.camera.isOrthographicCamera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){let e=ee.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(e/this.camera.zoom,this._gizmos.position,!0))}}else if(this.camera.isPerspectiveCamera){let e=this.camera.position.distanceTo(this._gizmos.position);if(e>this.maxDistance+1e-6||e<this.minDistance-1e-6){let s=ee.clamp(e,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(s/e,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=ee.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());let n=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),n<this._tbRadius-1e-6||n>this._tbRadius+1e-6){let s=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,r=this._tbRadius/s,o=new pi(0,0,r,r).getPoints(this._curvePts),c=new pe().setFromPoints(o);for(let l in this._gizmos.children)this._gizmos.children[l].geometry=c}}this.camera.lookAt(this._gizmos.position)}setStateFromJSON(t){let e=JSON.parse(t);if(e.arcballState!=null){this._cameraMatrixState.fromArray(e.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(e.arcballState.cameraUp),this.camera.near=e.arcballState.cameraNear,this.camera.far=e.arcballState.cameraFar,this.camera.zoom=e.arcballState.cameraZoom,this.camera.isPerspectiveCamera&&(this.camera.fov=e.arcballState.cameraFov),this._gizmoMatrixState.fromArray(e.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);let n=new Pt().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(n),this.camera.lookAt(this._gizmos.position),this.updateTbState(bt.IDLE,!1),this.dispatchEvent(re)}}};function H_(){let i=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);let t=this._tbRadius/i,n=new pi(0,0,t,t).getPoints(this._curvePts),s=new pe().setFromPoints(n);for(let r in this._gizmos.children)this._gizmos.children[r].geometry=s;this.dispatchEvent(re)}function V_(i){if(this.enabled){for(let t=0;t<this.mouseActions.length;t++)if(this.mouseActions[t].mouse==2){i.preventDefault();break}}}function G_(){this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=Kt.NONE}function W_(i){if(i.button==0&&i.isPrimary?(this._downValid=!0,this._downEvents.push(i),this._downStart=performance.now()):this._downValid=!1,i.pointerType=="touch"&&this._input!=Kt.CURSOR)switch(this._touchStart.push(i),this._touchCurrent.push(i),this._input){case Kt.NONE:this._input=Kt.ONE_FINGER,this.onSinglePanStart(i,"ROTATE"),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp);break;case Kt.ONE_FINGER:case Kt.ONE_FINGER_SWITCHED:this._input=Kt.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case Kt.TWO_FINGER:this._input=Kt.MULT_FINGER,this.onTriplePanStart(i);break}else if(i.pointerType!="touch"&&this._input==Kt.NONE){let t=null;i.ctrlKey||i.metaKey?t="CTRL":i.shiftKey&&(t="SHIFT"),this._mouseOp=this.getOpFromAction(i.button,t),this._mouseOp!=null&&(window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),this._input=Kt.CURSOR,this._button=i.button,this.onSinglePanStart(i,this._mouseOp))}}function X_(i){if(i.pointerType=="touch"&&this._input!=Kt.CURSOR)switch(this._input){case Kt.ONE_FINGER:this.updateTouchEvent(i),this.onSinglePanMove(i,bt.ROTATE);break;case Kt.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],i)*this._devPxRatio>=this._switchSensibility){this._input=Kt.ONE_FINGER,this.updateTouchEvent(i),this.onSinglePanStart(i,"ROTATE");break}break;case Kt.TWO_FINGER:this.updateTouchEvent(i),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case Kt.MULT_FINGER:this.updateTouchEvent(i),this.onTriplePanMove(i);break}else if(i.pointerType!="touch"&&this._input==Kt.CURSOR){let t=null;i.ctrlKey||i.metaKey?t="CTRL":i.shiftKey&&(t="SHIFT");let e=this.getOpStateFromAction(this._button,t);e!=null&&this.onSinglePanMove(i,e)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],i)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)}function q_(i){if(i.pointerType=="touch"&&this._input!=Kt.CURSOR){let t=this._touchCurrent.length;for(let e=0;e<t;e++)if(this._touchCurrent[e].pointerId==i.pointerId){this._touchCurrent.splice(e,1),this._touchStart.splice(e,1);break}switch(this._input){case Kt.ONE_FINGER:case Kt.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Kt.NONE,this.onSinglePanEnd();break;case Kt.TWO_FINGER:this.onDoublePanEnd(i),this.onPinchEnd(i),this.onRotateEnd(i),this._input=Kt.ONE_FINGER_SWITCHED;break;case Kt.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Kt.NONE,this.onTriplePanEnd());break}}else i.pointerType!="touch"&&this._input==Kt.CURSOR&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Kt.NONE,this.onSinglePanEnd(),this._button=-1);if(i.isPrimary)if(this._downValid)if(i.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{let e=i.timeStamp-this._clickStart,n=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;e<=this._maxInterval&&n<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(i)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)}function $_(i){if(this.enabled&&this.enableZoom){let t=null;i.ctrlKey||i.metaKey?t="CTRL":i.shiftKey&&(t="SHIFT");let e=this.getOpFromAction("WHEEL",t);if(e!=null){i.preventDefault(),this.dispatchEvent(bn);let n=125,s=i.deltaY/n,r=1;switch(s>0?r=1/this.scaleFactor:s<0&&(r=this.scaleFactor),e){case"ZOOM":if(this.updateTbState(bt.SCALE,!0),s>0?r=1/Math.pow(this.scaleFactor,s):s<0&&(r=Math.pow(this.scaleFactor,-s)),this.cursorZoom&&this.enablePan){let a;this.camera.isOrthographicCamera?a=this.unprojectOnTbPlane(this.camera,i.clientX,i.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(a=this.unprojectOnTbPlane(this.camera,i.clientX,i.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(r,a))}else this.applyTransformMatrix(this.scale(r,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(bt.IDLE,!1),this.dispatchEvent(re),this.dispatchEvent(un);break;case"FOV":if(this.camera.isPerspectiveCamera){this.updateTbState(bt.FOV,!0),i.deltaX!=0&&(s=i.deltaX/n,r=1,s>0?r=1/Math.pow(this.scaleFactor,s):s<0&&(r=Math.pow(this.scaleFactor,-s))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);let a=this._v3_1.distanceTo(this._gizmos.position),o=a/r;o=ee.clamp(o,this.minDistance,this.maxDistance);let c=a*Math.tan(ee.DEG2RAD*this.camera.fov*.5),l=ee.RAD2DEG*(Math.atan(c/o)*2);l>this.maxFov?l=this.maxFov:l<this.minFov&&(l=this.minFov);let h=c/Math.tan(ee.DEG2RAD*(l/2));r=a/h,this.setFov(l),this.applyTransformMatrix(this.scale(r,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(bt.IDLE,!1),this.dispatchEvent(re),this.dispatchEvent(un);break}}}}var is=["plane","cylinder","cone","sphere","torus","bspline","revolution","extrusion","offset","mesh","other"],ss=["ok","repaired","fallback","empty","failed"],xi={plane:12174028,cylinder:5211846,cone:8019140,sphere:12868746,torus:4170639,bspline:14721850,revolution:9416778,extrusion:5809848,offset:11561546,mesh:10066329,other:6710886},oc={ok:10466505,repaired:15249723,fallback:14706223,empty:11546672,failed:16711680},Gh=[9413560,12101007,10204570,11901616,11121609,12761242,10469312,12624032,10921661,11780767,13086357,10006212],Y_=new Pt,Z_={face:1,edge:2,vertex:3},ta={edge:5,vertex:7},cc=["face","edge","vertex","auto"],ea=class extends EventTarget{constructor(t){super(),this.canvas=t;let e=this.renderer=new Rs({canvas:t,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,logarithmicDepthBuffer:!1});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setClearColor(0,0),e.localClippingEnabled=!0,this.scene=new Ps,this.root=new qe,this.scene.add(this.root),this.overlay=new qe,this.scene.add(this.overlay),this.vertexLayer=new qe,this.vertexLayer.visible=!1,this.scene.add(this.vertexLayer),this.camera=new ze(35,1,.1,1e7),this.camera.up.set(0,0,1),this.camera.position.set(1e3,-1500,900),this.controls=null,this.setNavigation("arcball"),this.scene.add(new Gr(15922939,5595244,1.6)),this.headlight=new Wr(16777215,1.6),this.camera.add(this.headlight),this.headlight.position.set(.4,.8,1),this.scene.add(this.camera),this.pickScene=new Ps,this.pickGroups={face:new qe,edge:new qe,vertex:new qe};for(let s of Object.values(this.pickGroups))this.pickScene.add(s);this.pickTarget=null,this.pickMats=[],this.pickReg=[null],this.nextPickId=1,this.pickMode="face",this.drawSize=new wt(1,1),this.parts=new Map,this.nodes=new Map,this.colorMode="file",this.showEdges=!0,this.matCache=new Map,this.edgeColor=new Rt(1911610),this.highlight={hover:null,selection:null,"el:hover":null,"el:selection":null},this.clipPlane=null,this.bbox=new Ze,this._needs=!0,this._resize(),new ResizeObserver(()=>{this._resize(),this.requestRender()}).observe(t.parentElement);let n=()=>{requestAnimationFrame(n);let s=this.navigation==="orbit"?this.controls.update():!1;(this._needs||s)&&(this._needs=!1,this.renderer.render(this.scene,this.camera))};n()}requestRender(){this._needs=!0}setNavigation(t){let e=this.controls?this.controls.target.clone():new R;this.controls&&this.controls.dispose(),this.navigation=t;let n=this.canvas;if(t==="orbit"){let s=this.controls=new Kr(this.camera,n);s.enableDamping=!0,s.dampingFactor=.12,s.screenSpacePanning=!0,s.target.copy(e),s.addEventListener("change",()=>this.requestRender()),s.update()}else{this.camera.lookAt(e);let s=this.controls=new Qr(this.camera,n,this.scene);s.target.copy(e),s.cursorZoom=!0,s.adjustNearFar=!0,s.enableAnimations=!0,s.dampingFactor=20,s.wMax=15,s.setTbRadius(.8),s.setCamera(this.camera),s.setGizmosVisible(!1),s.addEventListener("start",()=>{s.setGizmosVisible(!0)}),s.addEventListener("end",()=>{s.setGizmosVisible(!1),this.requestRender()}),s.addEventListener("change",()=>this.requestRender()),s.unprojectOnObj=r=>{let a=n.getBoundingClientRect(),o=this.pickPoint(a.left+(r.x+1)/2*a.width,a.top+(1-r.y)/2*a.height);return o?o.point:null}}this.requestRender()}_syncControls(t){let e=this.controls;if(e.target.copy(t),this.navigation==="orbit"){e.update();return}this.camera.lookAt(t),this.camera.updateMatrixWorld(),e.setCamera(this.camera),e.setGizmosVisible(!1)}pickPoint(t,e){let n=this.pick(t,e,"face");if(!n||n.faceIndex<0)return null;let s=this.canvas.getBoundingClientRect(),r=new wt((t-s.left)/s.width*2-1,-(e-s.top)/s.height*2+1),a=new es;a.setFromCamera(r,this.camera);let o=n.chunk,c=o.faces,l=o.res.positions,h=o.res.indices,f=this.nodes.get(n.nodeKey).world,d=new R,u=new R,g=new R,_=new R,m=null,p=1/0,E=c.triStart[n.faceIndex]*3,v=E+c.triCount[n.faceIndex]*3;for(let T=E;T<v;T+=3)if(d.fromArray(l,h[T]*3).applyMatrix4(f),u.fromArray(l,h[T+1]*3).applyMatrix4(f),g.fromArray(l,h[T+2]*3).applyMatrix4(f),a.ray.intersectTriangle(d,u,g,!1,_)){let I=_.distanceTo(a.ray.origin);I<p&&(p=I,m=_.clone())}return m?{...n,point:m}:null}_resize(){let t=this.canvas.parentElement,e=t.clientWidth||1,n=t.clientHeight||1;this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.getDrawingBufferSize(this.drawSize)}setTheme(t){this.edgeColor.set(t?329739:2240574);for(let e of this.matCache.values())e.userData.edge&&e.uniforms.uColor.value.copy(this.edgeColor);this.requestRender()}clear(){for(let t of[...this.root.children])this.root.remove(t);for(let t of Object.values(this.pickGroups))for(let e of[...t.children])t.remove(e);for(let t of[...this.vertexLayer.children])this.vertexLayer.remove(t);for(let t of[...this.overlay.children])this.overlay.remove(t),t.userData.ownGeom&&t.geometry.dispose();for(let t of this.parts.values())for(let e of t.chunks)for(let n of[e.geom,e.edgeGeom,e.vertGeom,...Object.values(e.overlayGeom||{})])n&&n.dispose();for(let t of this.pickMats)t.dispose();this.pickMats=[],this.parts.clear(),this.nodes.clear(),this.pickReg=[null],this.nextPickId=1,this.bbox.makeEmpty(),this.highlight={hover:null,selection:null,"el:hover":null,"el:selection":null},this.requestRender()}setModel(t){this.clear(),t.parts.forEach((n,s)=>this.parts.set(n.id,{id:n.id,name:n.name,instances:[],chunks:[],color:Gh[s%Gh.length],stats:null}));let e=(n,s,r)=>{let a=n.matrix?new Pt().fromArray(n.matrix):new Pt,o=s.clone().multiply(a),c={key:n.key,name:n.name,partId:n.part,world:o,parent:r,children:n.children.map(l=>l.key),visible:!0,index:-1};if(this.nodes.set(n.key,c),n.part&&this.parts.has(n.part)){let l=this.parts.get(n.part);c.index=l.instances.length,l.instances.push(n.key)}for(let l of n.children)e(l,o,n.key)};for(let n of t.roots)e(n,new Pt,null)}addChunk(t){let e=this.parts.get(t.partId);if(!e||!e.instances.length)return;let n=new pe;n.setAttribute("position",new ie(t.positions,3)),n.setAttribute("normal",new ie(t.normals,3)),n.setAttribute("faceIdx",new ie(t.faceIdx,1)),n.setIndex(new ie(t.indices,1)),t.groups.forEach((g,_)=>n.addGroup(g.start,g.count,_)),n.computeBoundingBox(),n.computeBoundingSphere();let s={part:e,res:t,geom:n,faces:t.faces,groups:t.groups,meshes:[],pickMeshes:[],colorAttr:null,instBuffer:null,edgeGeom:null,edgeObj:null,vertGeom:null,vertObj:null},r=this._materialsFor(s),a=e.instances.length,o;if(a===1?(o=new Le(n,r),o.matrixAutoUpdate=!1,o.matrix.copy(this.nodes.get(e.instances[0]).world)):(o=new Ji(n,r,a),e.instances.forEach((g,_)=>o.setMatrixAt(_,this.nodes.get(g).world)),o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere()),o.userData.chunk=s,this.root.add(o),s.meshes.push(o),a>1){let g=new Float32Array(a*16);e.instances.forEach((_,m)=>this.nodes.get(_).world.toArray(g,m*16)),s.instBuffer=new qr(g,16)}let c=g=>(g.matrixAutoUpdate=!1,a===1&&g.matrix.copy(this.nodes.get(e.instances[0]).world),g.frustumCulled=!1,g);t.edges.length&&(s.edgeGeom=this._elementGeometry(t.edges,"edgeIdx",t.edgeIdx,s),s.edgeObj=c(new Ki(s.edgeGeom,this._edgeMaterial(a>1))),s.edgeObj.visible=this.showEdges,this.root.add(s.edgeObj));let l=t.vertices.ids.length;if(l){let g=new Float32Array(l);for(let _=0;_<l;_++)g[_]=_;s.vertGeom=this._elementGeometry(t.vertices.positions,"vertIdx",g,s),s.vertObj=c(new Qi(s.vertGeom,this._dotMaterial("vertex",a>1))),this.vertexLayer.add(s.vertObj)}let h=this.nextPickId;this.nextPickId+=a;for(let g=0;g<a;g++)this.pickReg[h+g]={chunk:s,inst:g};let f=this._pickMaterial(h,"face",!1),d=a===1?new Le(n,f):new Ji(n,f,a);if(a===1?(d.matrixAutoUpdate=!1,d.matrix.copy(o.matrix)):(d.instanceMatrix=o.instanceMatrix,d.frustumCulled=!1),this.pickGroups.face.add(d),s.pickMeshes.push(d),s.edgeGeom){let g=c(new Ki(s.edgeGeom,this._pickMaterial(h,"edge",a>1)));this.pickGroups.edge.add(g),s.pickMeshes.push(g)}if(s.vertGeom){let g=c(new Qi(s.vertGeom,this._pickMaterial(h,"vertex",a>1)));this.pickGroups.vertex.add(g),s.pickMeshes.push(g)}e.chunks.push(s);let u=n.boundingBox;for(let g of e.instances){let _=u.clone().applyMatrix4(this.nodes.get(g).world);this.bbox.union(_)}return(this.colorMode==="surface"||this.colorMode==="status")&&this._applyVertexColors(s),this.requestRender(),s}_elementGeometry(t,e,n,s){let r=s.instBuffer,a=r?new Xr:new pe;if(a.setAttribute("position",new ie(t,3)),a.setAttribute(e,new ie(n,1)),r){for(let o=0;o<4;o++)a.setAttribute("iM"+o,new kr(r,4,o*4));a.instanceCount=r.count}return a}_edgeMaterial(t){let e="edge:"+t,n=this.matCache.get(e);return n||(n=new je({uniforms:{uColor:{value:this.edgeColor.clone()},uAlpha:{value:.32}},defines:t?{INST:1}:{},vertexShader:`
        #include <clipping_planes_pars_vertex>
        #ifdef INST
        attribute vec4 iM0; attribute vec4 iM1; attribute vec4 iM2; attribute vec4 iM3;
        #endif
        void main() {
          vec4 p = vec4(position, 1.0);
          #ifdef INST
          p = mat4(iM0, iM1, iM2, iM3) * p;
          #endif
          vec4 mvPosition = modelViewMatrix * p;
          gl_Position = projectionMatrix * mvPosition;
          #include <clipping_planes_vertex>
        }`,fragmentShader:`
        #include <clipping_planes_pars_fragment>
        uniform vec3 uColor; uniform float uAlpha;
        void main() {
          #include <clipping_planes_fragment>
          gl_FragColor = vec4(uColor, uAlpha);
        }`,transparent:!0,depthWrite:!1,clipping:!0}),n.userData.edge=!0,this.matCache.set(e,n),n)}_pickMaterial(t,e,n){let s=e==="face"?"faceIdx":e==="edge"?"edgeIdx":"vertIdx",r={KIND:Z_[e].toFixed(1)};n&&(r.INST=1);let a=new je({uniforms:{uBase:{value:t},uPass:{value:0},uSize:{value:6*this.renderer.getPixelRatio()}},defines:r,vertexShader:`
        #include <clipping_planes_pars_vertex>
        attribute float ${s};
        #ifdef INST
        attribute vec4 iM0; attribute vec4 iM1; attribute vec4 iM2; attribute vec4 iM3;
        #endif
        flat varying float vId;
        flat varying float vElem;
        uniform float uBase;
        uniform float uSize;
        void main() {
          vec4 p = vec4(position, 1.0);
          #if defined(USE_INSTANCING)
          p = instanceMatrix * p;
          vId = uBase + float(gl_InstanceID);
          #elif defined(INST)
          p = mat4(iM0, iM1, iM2, iM3) * p;
          vId = uBase + float(gl_InstanceID);
          #else
          vId = uBase;
          #endif
          vElem = ${s};
          vec4 mvPosition = modelViewMatrix * p;
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uSize;
          #include <clipping_planes_vertex>
        }`,fragmentShader:`
        #include <clipping_planes_pars_fragment>
        flat varying float vId;
        flat varying float vElem;
        uniform float uPass;
        void main() {
          #include <clipping_planes_fragment>
          if (uPass > 1.5) { gl_FragColor = vec4(vId, vElem + 1.0, KIND, 1.0); return; }
          float v = uPass < 0.5 ? vId : vElem + 1.0;
          float r = mod(v, 256.0); float g = mod(floor(v / 256.0), 256.0); float b = floor(v / 65536.0);
          gl_FragColor = vec4(r / 255.0, g / 255.0, b / 255.0, KIND / 255.0);
        }`,side:Xe,clipping:!0});return e==="face"&&(a.polygonOffset=!0,a.polygonOffsetFactor=1,a.polygonOffsetUnits=1),this.pickMats.push(a),a}_dotMaterial(t,e=!1){let n="dot:"+t+":"+e,s=this.matCache.get(n);if(s)return s;let r=this.renderer.getPixelRatio(),a=t==="vertex"?{size:6,color:this.edgeColor,ring:new Rt(16777215)}:{size:t==="hover"?11:12,color:new Rt(t==="hover"?16752704:16734720),ring:new Rt(16777215)};return s=new je({uniforms:{uSize:{value:a.size*r},uColor:{value:a.color},uRing:{value:a.ring}},defines:e?{INST:1}:{},vertexShader:`
        #include <clipping_planes_pars_vertex>
        #ifdef INST
        attribute vec4 iM0; attribute vec4 iM1; attribute vec4 iM2; attribute vec4 iM3;
        #endif
        uniform float uSize;
        void main() {
          vec4 p = vec4(position, 1.0);
          #ifdef INST
          p = mat4(iM0, iM1, iM2, iM3) * p;
          #endif
          vec4 mvPosition = modelViewMatrix * p;
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uSize;
          #include <clipping_planes_vertex>
        }`,fragmentShader:`
        #include <clipping_planes_pars_fragment>
        uniform vec3 uColor; uniform vec3 uRing;
        void main() {
          #include <clipping_planes_fragment>
          vec2 q = gl_PointCoord * 2.0 - 1.0;
          float r = dot(q, q);
          if (r > 1.0) discard;
          gl_FragColor = vec4(r > 0.5 ? uRing : uColor, 1.0);
        }`,clipping:!0,depthTest:t==="vertex",depthWrite:!1,transparent:t!=="vertex"}),this.matCache.set(n,s),s}_thickLineMaterial(t){let e="thick:"+t,n=this.matCache.get(e);if(n)return n;let s=this.renderer.getPixelRatio();return n=new je({uniforms:{uViewport:{value:this.drawSize},uHalfWidth:{value:(t==="hover"?2:2.5)*s},uColor:{value:new Rt(t==="hover"?16752704:16734720)}},vertexShader:`
        #include <clipping_planes_pars_vertex>
        uniform vec2 uViewport; uniform float uHalfWidth;
        attribute vec3 aB; attribute vec2 aSide;
        void main() {
          vec4 ca = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec4 cb = projectionMatrix * modelViewMatrix * vec4(aB, 1.0);
          vec2 half_ = uViewport * 0.5;
          vec2 d = (cb.xy / cb.w - ca.xy / ca.w) * half_;
          float len = length(d);
          vec2 dir = len > 1e-6 ? d / len : vec2(1.0, 0.0);
          vec2 nrm = vec2(-dir.y, dir.x);
          bool atA = aSide.x < 0.5;
          vec4 c = atA ? ca : cb;
          vec2 off = (nrm * aSide.y + dir * (atA ? -1.0 : 1.0)) * uHalfWidth;
          c.xy += off / half_ * c.w;
          gl_Position = c;
          vec4 mvPosition = modelViewMatrix * vec4(atA ? position : aB, 1.0);
          #include <clipping_planes_vertex>
        }`,fragmentShader:`
        #include <clipping_planes_pars_fragment>
        uniform vec3 uColor;
        void main() {
          #include <clipping_planes_fragment>
          gl_FragColor = vec4(uColor, 1.0);
        }`,clipping:!0,side:Xe,depthWrite:!1,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8}),this.matCache.set(e,n),n}_thickLineGeometry(t){let e=t.length/6,n=new Float32Array(e*12),s=new Float32Array(e*12),r=new Float32Array(e*8),a=new Uint32Array(e*6),o=[0,-1,0,1,1,-1,1,1];for(let l=0;l<e;l++){for(let h=0;h<4;h++){for(let f=0;f<3;f++)n[(l*4+h)*3+f]=t[l*6+f],s[(l*4+h)*3+f]=t[l*6+3+f];r[(l*4+h)*2]=o[h*2],r[(l*4+h)*2+1]=o[h*2+1]}a.set([0,1,2,2,1,3].map(h=>h+l*4),l*6)}let c=new pe;return c.setAttribute("position",new ie(n,3)),c.setAttribute("aB",new ie(s,3)),c.setAttribute("aSide",new ie(r,2)),c.setIndex(new ie(a,1)),c}_mat(t,e=1){let n=t+":"+e,s=this.matCache.get(n);return s||(s=new Is({color:t,metalness:.05,roughness:.62,side:Xe,transparent:e<1,opacity:e,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.matCache.set(n,s)),s}_vcMat(){let t=this.matCache.get("vc");return t||(t=new Is({vertexColors:!0,metalness:0,roughness:.7,side:Xe,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.matCache.set("vc",t)),t}_materialsFor(t){let e=this.colorMode;return e==="surface"||e==="status"?t.groups.map(()=>this._vcMat()):e==="part"?t.groups.map(()=>this._mat(t.part.color)):t.groups.map(n=>{let s=n.color;if(!s)return this._mat(t.part.color);let r=new Rt().setRGB(s.r,s.g,s.b,_e).getHex();return this._mat(r,Math.max(.15,Math.min(1,s.a??1)))})}_applyVertexColors(t){let e=t.res.positions.length/3,n=t.geom.getAttribute("color");n||(n=new ie(new Uint8Array(e*3),3,!0),t.geom.setAttribute("color",n));let s=n.array,r=t.faces,a=new Rt;for(let o=0;o<r.ids.length;o++){let c=this.colorMode==="surface"?xi[is[r.kind[o]]]:oc[ss[r.status[o]]];a.setHex(c??8947848);let l=Math.round(a.r*255),h=Math.round(a.g*255),f=Math.round(a.b*255);for(let d=r.vStart[o],u=d+r.vCount[o];d<u;d++)s[d*3]=l,s[d*3+1]=h,s[d*3+2]=f}n.needsUpdate=!0}setColorMode(t){this.colorMode=t;for(let e of this.parts.values())for(let n of e.chunks){(t==="surface"||t==="status")&&this._applyVertexColors(n);let s=this._materialsFor(n);for(let r of n.meshes)r.material=s}this.requestRender()}setEdges(t){this.showEdges=t;for(let e of this.parts.values()){let n=e.instances.length===1?this._effectiveVisible(e.instances[0]):!0;for(let s of e.chunks)s.edgeObj&&(s.edgeObj.visible=t&&n)}this.requestRender()}setPickMode(t){this.pickMode=cc.includes(t)?t:"face",this.vertexLayer.visible=this.pickMode==="vertex",this.requestRender()}setNodeVisible(t,e){let n=[t],s=new Set;for(;n.length;){let r=n.pop(),a=this.nodes.get(r);a&&(a.visible=e,a.partId&&s.add(a.partId),n.push(...a.children))}for(let r of s)this._syncInstances(this.parts.get(r));this.requestRender()}_effectiveVisible(t){for(let e=t;e;e=this.nodes.get(e).parent)if(!this.nodes.get(e).visible)return!1;return!0}_syncInstances(t){if(!t)return;let e=new Pt().makeScale(0,0,0);for(let n of t.chunks){let s=t.instances.map(r=>this._effectiveVisible(r));if(t.instances.length===1){for(let r of n.meshes)r.visible=s[0];for(let r of n.pickMeshes)r.visible=s[0];n.edgeObj&&(n.edgeObj.visible=s[0]&&this.showEdges),n.vertObj&&(n.vertObj.visible=s[0])}else{let r=n.meshes[0];if(t.instances.forEach((a,o)=>r.setMatrixAt(o,s[o]?this.nodes.get(a).world:e)),r.instanceMatrix.needsUpdate=!0,n.instBuffer){let a=n.instBuffer;t.instances.forEach((o,c)=>(s[c]?this.nodes.get(o).world:e).toArray(a.array,c*16)),a.needsUpdate=!0}}}}pick(t,e,n=this.pickMode){if(this.nextPickId<=1)return null;let s=this.canvas.getBoundingClientRect(),r=this.renderer.getPixelRatio(),a=Math.floor((t-s.left)*r),o=Math.floor((e-s.top)*r),c=Math.floor(s.width*r),l=Math.floor(s.height*r);if(a<0||o<0||a>=c||o>=l)return null;let h=n==="edge"||n==="auto",f=n==="vertex"||n==="auto",d=h||f?Math.round(Math.max(h?ta.edge:0,f?ta.vertex:0)*r):0,u=this.pickGroups;u.edge.visible=h,u.vertex.visible=f;let g=this._pickRegion(a-d,o-d,2*d+1,c,l),_=2*d+1,m=d*_+d,p={2:-1,3:-1},E={2:1/0,3:1/0},v={2:(ta.edge*r)**2,3:(ta.vertex*r)**2};for(let y=0;y<_*_;y++){let b=g.kind[y];if(b!==2&&b!==3)continue;let N=y%_-d,X=(y/_|0)-d,nt=N*N+X*X;nt<=v[b]&&nt<E[b]&&(E[b]=nt,p[b]=y)}let T=-1,I=null;if(f&&p[3]>=0?(T=p[3],I="vertex"):h&&p[2]>=0?(T=p[2],I="edge"):g.kind[m]===1&&(T=m,I="face"),T<0||!this.pickReg[g.id[T]])return null;let{chunk:C,inst:A}=this.pickReg[g.id[T]],H={nodeKey:C.part.instances[A],partId:C.part.id,chunk:C,kind:I,index:g.elem[T],id:null,faceIndex:-1,faceId:null};return I==="face"&&(n==="edge"||n==="vertex")?(H.kind=null,H.index=-1,H):(I==="face"?(H.faceIndex=H.index,H.faceId=H.id=C.faces.ids[H.index]):I==="edge"?H.id=C.res.edgeInfo.ids[H.index]:H.id=C.res.vertices.ids[H.index],H)}_pickRegion(t,e,n,s,r){let a=this.renderer,o=this.camera;this.pickTarget||(this._pickFloat=a.capabilities.isWebGL2&&!!a.extensions.get("EXT_color_buffer_float"),this.pickTarget=new hn(n,n,{type:this._pickFloat?Tn:An,minFilter:Ae,magFilter:Ae}));let c=this.pickTarget;(c.width!==n||c.height!==n)&&c.setSize(n,n);let l=n*n,h={id:new Float64Array(l),elem:new Float64Array(l),kind:new Uint8Array(l)};o.setViewOffset(s,r,t,e,n,n);let f=a.getRenderTarget(),d=a.getClearAlpha();a.setClearColor(0,0),a.setRenderTarget(c);let u=(g,_)=>{for(let m of this.pickMats)m.uniforms.uPass.value=g;return a.clear(),a.render(this.pickScene,o),a.readRenderTargetPixels(c,0,0,n,n,_),_};try{if(this._pickFloat){let g=u(2,new Float32Array(l*4));for(let _=0;_<l;_++)h.id[_]=g[_*4],h.elem[_]=g[_*4+1]-1,h.kind[_]=g[_*4+2]}else{let g=(p,E)=>p[E*4]+p[E*4+1]*256+p[E*4+2]*65536,_=u(0,new Uint8Array(l*4));for(let p=0;p<l;p++)h.id[p]=g(_,p),h.kind[p]=_[p*4+3];let m=u(1,_);for(let p=0;p<l;p++)h.elem[p]=g(m,p)-1}}finally{o.clearViewOffset(),a.setRenderTarget(f),a.setClearColor(0,d)}return h}_overlayMat(t){let e="ov:"+t,n=this.matCache.get(e);if(!n){let s=t==="hover"?16756838:t==="face"?16734720:t==="faceHover"?16751164:16742938,r={hover:.26,face:.85,faceHover:.4}[t]??.3;n=new Zi({color:s,transparent:!0,opacity:r,depthWrite:!1,side:Xe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.matCache.set(e,n)}return n}_clearOverlay(t){for(let e of[...this.overlay.children])e.userData.kind===t&&(this.overlay.remove(e),e.userData.ownGeom&&e.geometry.dispose())}setHighlight(t,e){if(this._clearOverlay(t),this.highlight[t]=e,e){let n=new Set;if(e.partId)for(let r of this.parts.get(e.partId)?.instances||[])n.add(r);for(let r of e.nodeKeys||[]){let a=[r];for(;a.length;){let o=a.pop(),c=this.nodes.get(o);c&&(c.partId&&n.add(o),a.push(...c.children))}}let s=new Map;for(let r of n){let a=this.nodes.get(r);s.has(a.partId)||s.set(a.partId,[]),s.get(a.partId).push(a)}for(let[r,a]of s){let o=this.parts.get(r);if(o)for(let c of o.chunks){let l=new Ji(c.geom,this._overlayMat(t),a.length);a.forEach((h,f)=>l.setMatrixAt(f,this._effectiveVisible(h.key)?h.world:Y_.makeScale(0,0,0))),l.instanceMatrix.needsUpdate=!0,l.frustumCulled=!1,l.userData.kind=t,l.renderOrder=t==="hover"?2:3,this.overlay.add(l)}}}this.requestRender()}setElementHighlight(t,e){let n="el:"+t,s=this.highlight[n];if(s===e||s&&e&&s.chunk===e.chunk&&s.nodeKey===e.nodeKey&&s.kind===e.kind&&s.index===e.index)return;this._clearOverlay(n),this.highlight[n]=e;let r=e&&e.kind?this.nodes.get(e.nodeKey):null;if(r){let a=e.chunk,o=null;if(e.kind==="face"){let c=a.overlayGeom||(a.overlayGeom={}),l=c[t];l||(l=c[t]=new pe,l.setAttribute("position",a.geom.getAttribute("position")),l.setIndex(a.geom.getIndex())),l.setDrawRange(a.faces.triStart[e.index]*3,a.faces.triCount[e.index]*3),o=new Le(l,this._overlayMat(t==="hover"?"faceHover":"face"))}else if(e.kind==="edge"){let c=a.res.edgeInfo,l=c.segStart[e.index],h=c.segCount[e.index];o=new Le(this._thickLineGeometry(a.res.edges.subarray(l*6,(l+h)*6)),this._thickLineMaterial(t))}else if(e.kind==="vertex"){let c=new pe;c.setAttribute("position",new ie(a.res.vertices.positions.slice(e.index*3,e.index*3+3),3)),o=new Qi(c,this._dotMaterial(t))}o&&(o.matrixAutoUpdate=!1,o.matrix.copy(r.world),o.frustumCulled=!1,o.userData.kind=n,o.userData.ownGeom=e.kind!=="face",o.renderOrder=t==="hover"?5:6,this.overlay.add(o))}this.requestRender()}setSection(t,e){if(!t){this.renderer.clippingPlanes=[],this.clipPlane=null,this.requestRender();return}let n=this.bbox;if(n.isEmpty())return;let s=t==="x"?new R(-1,0,0):t==="y"?new R(0,-1,0):new R(0,0,-1),r=t==="x"?0:t==="y"?1:2,a=n.min.getComponent(r)+(n.max.getComponent(r)-n.min.getComponent(r))*e;this.clipPlane=new tn(s,a),this.renderer.clippingPlanes=[this.clipPlane],this.requestRender()}fit(t=null,e=null){let n=this.bbox;if(t&&t.length){n=new Ze;for(let h of t){let f=[h];for(;f.length;){let d=f.pop(),u=this.nodes.get(d);if(u){if(u.partId)for(let g of this.parts.get(u.partId)?.chunks||[])n.union(g.geom.boundingBox.clone().applyMatrix4(u.world));f.push(...u.children)}}}n.isEmpty()&&(n=this.bbox)}if(n.isEmpty())return;let s=n.getCenter(new R),r=Math.max(n.getSize(new R).length()/2,.001),a=e?e.clone().normalize():this.camera.position.clone().sub(this.controls.target).normalize();a.lengthSq()<1e-9&&a.set(1,-1.4,.9).normalize();let o=ee.degToRad(this.camera.fov/2),c=Math.atan(Math.tan(o)*this.camera.aspect),l=r/Math.sin(Math.min(o,c))*1.05;this.camera.position.copy(s).addScaledVector(a,l),this.camera.near=Math.max(l/1e3,r/1e5),this.camera.far=l+r*20,this.camera.updateProjectionMatrix(),this._syncControls(s),this.requestRender()}setUpAxis(t){this.upAxis=t,this.view(this._lastView||"iso")}view(t){this._lastView=t;let e=(this.upAxis||"z")==="z",n=e?{iso:[1,-1.2,.85],front:[0,-1,0],top:[0,0,1],right:[1,0,0]}:{iso:[1,.85,1.2],front:[0,0,1],top:[0,1,0],right:[1,0,0]},s=n[t]||n.iso;t==="top"?this.camera.up.set(0,e?1:0,e?0:-1):this.camera.up.set(0,e?0:1,e?1:0),this.fit(null,new R(...s))}async snapshot({width:t=320,height:e=220,supersample:n=2}={}){if(this.bbox.isEmpty()||typeof OffscreenCanvas>"u")return null;let s=t*n,r=e*n,a=this.renderer,o=new hn(s,r,{depthBuffer:!0});o.texture.colorSpace=_e;let c=new ze(30,s/r,.1,1e7),l=(this.upAxis||"z")==="z",h=(l?new R(1,-1.2,.85):new R(1,.85,1.2)).normalize();c.up.set(0,l?0:1,l?1:0);let f=this.bbox.getCenter(new R),d=Math.max(this.bbox.getSize(new R).length()/2,.001),u=ee.degToRad(c.fov/2),g=Math.atan(Math.tan(u)*c.aspect),m=d/Math.sin(Math.min(u,g))*1.04,p=[];for(let b=0;b<8;b++)p.push(new R(b&1?this.bbox.max.x:this.bbox.min.x,b&2?this.bbox.max.y:this.bbox.min.y,b&4?this.bbox.max.z:this.bbox.min.z));let E=new R;for(let b=0;b<4;b++){c.position.copy(f).addScaledVector(h,m),c.near=Math.max(m/1e3,d/1e5),c.far=m+d*20,c.lookAt(f),c.updateProjectionMatrix(),c.updateMatrixWorld(!0);let N=0;for(let X of p)E.copy(X).project(c),N=Math.max(N,Math.abs(E.x),Math.abs(E.y));if(!(N>0)||Math.abs(N-.9)<.01)break;m=Math.max(d*.2,m*(.35+.65*N/.9))}this.camera.remove(this.headlight),c.add(this.headlight),this.scene.add(c),c.updateMatrixWorld(!0);let v={target:a.getRenderTarget(),clip:a.clippingPlanes,overlay:this.overlay.visible,vertices:this.vertexLayer.visible,color:a.getClearColor(new Rt),alpha:a.getClearAlpha()},T=new Uint8Array(s*r*4);try{this.overlay.visible=!1,this.vertexLayer.visible=!1,a.clippingPlanes=[],a.setClearColor(0,0),a.setRenderTarget(o),a.clear(),a.render(this.scene,c),a.readRenderTargetPixels(o,0,0,s,r,T)}finally{a.setRenderTarget(v.target),a.clippingPlanes=v.clip,a.setClearColor(v.color,v.alpha),this.overlay.visible=v.overlay,this.vertexLayer.visible=v.vertices,c.remove(this.headlight),this.camera.add(this.headlight),this.scene.remove(c),o.dispose(),this.requestRender()}let I=new ImageData(s,r),C=s*4;for(let b=0;b<r;b++)I.data.set(T.subarray((r-1-b)*C,(r-b)*C),b*C);let A=new OffscreenCanvas(s,r);A.getContext("2d").putImageData(I,0,0);let H=new OffscreenCanvas(t,e),y=H.getContext("2d");return y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(A,0,0,t,e),H.convertToBlob({type:"image/webp",quality:.86})}stats(){let t=0,e=0,n=0;for(let s of this.parts.values())for(let r of s.chunks){e++;let a=r.res.indices.length/3;t+=a,n+=a*s.instances.length}return{tris:t,chunks:e,drawn:n}}};var j_=new URL("../worker/coordinator.worker.js",import.meta.url),J_=new URL("../worker/tess.worker.js",import.meta.url),na=class extends EventTarget{constructor(){super(),this.coord=null,this.pool=[],this.queue=[],this.busy=0,this.coordDone=!1,this.requesting=!1,this.reqId=1,this.pending=new Map,this.opts={quality:.0015,angTolDeg:20},this.counts={jobs:0,done:0}}emit(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e}))}dispose(){this.coord&&this.coord.terminate();for(let t of this.pool)t.worker.terminate();this.coord=null,this.pool=[],this.queue=[],this.busy=0,this.coordDone=!1,this.requesting=!1;for(let t of this.pending.values())t.reject(new Error("cancelled"));this.pending.clear()}open(t,e={}){let{name:n,persist:s,...r}=e;this._start(r);let a={type:"open",file:t,name:n||t&&t.name||"model",persist:!!s};t instanceof ArrayBuffer?this.coord.postMessage(a,[t]):this.coord.postMessage(a)}openStored(t,e={}){this._start(e),this.coord.postMessage({type:"openStored",modelId:t})}_start(t){this.dispose(),Object.assign(this.opts,t),this.t0=performance.now(),this.counts={jobs:0,done:0,triangles:0};let e=this.coord=new Worker(j_,{type:"module"});e.onmessage=s=>this._onCoord(s.data),e.onerror=s=>this.emit("error",{message:s.message||"coordinator worker failed to start"});let n=Math.max(1,Math.min(8,(navigator.hardwareConcurrency||4)-1));for(let s=0;s<n;s++){let r=new Worker(J_,{type:"module"}),a={worker:r,busy:!1,job:null};r.onmessage=o=>this._onPool(a,o.data),r.onerror=o=>{this.emit("error",{message:"tessellation worker: "+(o.message||"failed")})},this.pool.push(a)}}_onCoord(t){switch(t.type){case"progress":this.emit("progress",t);break;case"model":this.model=t.model,this.emit("model",t.model),this._pump();break;case"jobs":this.requesting=!1;for(let e of t.jobs)this.queue.push(e);this.counts.jobs+=t.jobs.length,t.done&&(this.coordDone=!0),this._pump();break;case"faceDebug":case"source":case"partJson":case"faceJson":{let e=this.pending.get(t.reqId);e&&(this.pending.delete(t.reqId),e.resolve(t.data??t.text));break}case"library":this.emit("library",t);break;case"libraryError":this.emit("libraryError",t);break;case"error":this.emit("error",t);break}}_pump(){for(let e of this.pool){if(e.busy||!this.queue.length)continue;let n=this.queue.shift();e.busy=!0,e.job=n,e.worker.postMessage({job:n,opts:this.opts},[n.bytes.buffer])}let t=this.pool.filter(e=>!e.busy).length;!this.coordDone&&!this.requesting&&this.queue.length<this.pool.length&&(this.requesting=!0,this.coord.postMessage({type:"nextJobs",n:Math.max(2,this.pool.length*2-this.queue.length)})),this.coordDone&&!this.queue.length&&t===this.pool.length?this._doneEmitted||(this._doneEmitted=!0,this.emit("done",{ms:performance.now()-this.t0,...this.counts})):this._doneEmitted=!1}_onPool(t,e){t.busy=!1,t.job=null,e.type==="mesh"?(this.counts.done++,this.counts.triangles+=e.result.stats.triangles,this.emit("mesh",e.result)):e.type==="jobError"&&(this.counts.done++,this.emit("jobError",e)),this.emit("progress",{phase:"tessellate",done:this.counts.done,total:this.counts.jobs,final:this.coordDone}),this._pump()}_request(t){return new Promise((e,n)=>{let s=this.reqId++;this.pending.set(s,{resolve:e,reject:n}),this.coord.postMessage({...t,reqId:s})})}faceDebug(t,e,n){return this._request({type:"faceDebug",partId:t,faceId:e,tol:n})}source(t){return this._request({type:"source",id:t})}partJson(t){return this._request({type:"partJson",partId:t})}faceJson(t,e){return this._request({type:"faceJson",partId:t,faceId:e})}};var K_='<svg viewBox="0 0 10 10" width="10" height="10" aria-hidden="true"><path d="M3 1.5 7 5 3 8.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',Wh='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8 12.1 12.5 8 12.5 1.5 8 1.5 8Z" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="8" r="2" fill="currentColor"/></svg>',Q_='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8 12.1 12.5 8 12.5 1.5 8 1.5 8Z" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".45"/><path d="M2.5 13.5 13.5 2.5" stroke="currentColor" stroke-width="1.4"/></svg>',ia=class extends EventTarget{constructor(t){super(),this.el=t,this.nodes=new Map,this.selected=new Set,this.hovered=new Set,t.addEventListener("mouseleave",()=>this.emit("hover",{key:null}))}emit(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e}))}setModel(t,e){this.el.textContent="",this.nodes.clear(),this.partNames=new Map(e.map(r=>[r.id,r]));let n=(r,a,o)=>{this.nodes.set(r.key,{node:r,parent:a,depth:o,row:null,childBox:null,expanded:!1,visible:!0});for(let c of r.children)n(c,r.key,o+1)};for(let r of t.roots)n(r,null,0);let s=document.createDocumentFragment();for(let r of t.roots)s.appendChild(this._render(r.key));this.el.appendChild(s),t.roots.length===1&&this.expand(t.roots[0].key,!0)}_render(t){let e=this.nodes.get(t),n=e.node,s=document.createElement("div");s.className="tnode";let r=document.createElement("div");r.className="trow",r.dataset.key=t,r.style.setProperty("--depth",e.depth),r.tabIndex=-1;let a=n.children.length>0,o=n.part?this.partNames.get(n.part):null,c=n.instanceName&&n.instanceName!==n.name?n.instanceName:"";r.innerHTML=`
      <button class="tw${a?"":" leaf"}" aria-label="Expand" tabindex="-1">${a?K_:""}</button>
      <button class="eye" aria-label="Toggle visibility" tabindex="-1">${Wh}</button>
      <span class="nm"></span>
      <span class="meta"></span>`,r.querySelector(".nm").textContent=n.name||"(unnamed)",r.querySelector(".nm").title=n.name+(n.productId&&n.productId!==n.name?`
product id: ${n.productId}`:"");let l=r.querySelector(".meta");return a?l.textContent=`${n.children.length}`:c&&(l.textContent=c),o&&o.instances>1&&r.classList.add("multi"),!n.part&&!a&&r.classList.add("empty"),r.querySelector(".tw").addEventListener("click",h=>{h.stopPropagation(),this.toggle(t)}),r.querySelector(".eye").addEventListener("click",h=>{h.stopPropagation(),this.setVisible(t,!e.visible)}),r.addEventListener("click",()=>this.emit("select",{key:t})),r.addEventListener("dblclick",()=>this.emit("focus",{key:t})),r.addEventListener("mouseenter",()=>this.emit("hover",{key:t})),e.row=r,s.appendChild(r),this.selected.has(t)&&r.classList.add("sel"),e.visible||r.classList.add("hidden-node"),s}toggle(t){this.nodes.get(t).expanded?this.collapse(t):this.expand(t)}expand(t,e=!1){let n=this.nodes.get(t);if(!(!n||!n.node.children.length)){if(!n.childBox){n.childBox=document.createElement("div"),n.childBox.className="tkids";let s=document.createDocumentFragment();for(let r of n.node.children)s.appendChild(this._render(r.key));n.childBox.appendChild(s),n.row.parentElement.appendChild(n.childBox)}if(n.childBox.hidden=!1,n.expanded=!0,n.row.classList.add("open"),e&&n.node.children.length<=12)for(let s of n.node.children)s.children.length&&s.children.length<=12&&this.expand(s.key)}}collapse(t){let e=this.nodes.get(t);e.childBox&&(e.childBox.hidden=!0),e.expanded=!1,e.row.classList.remove("open")}reveal(t){let e=[];for(let s=this.nodes.get(t)?.parent;s;s=this.nodes.get(s).parent)e.unshift(s);for(let s of e)this.expand(s);let n=this.nodes.get(t)?.row;n&&n.scrollIntoView({block:"nearest"})}setVisible(t,e){let n=[t];for(;n.length;){let s=n.pop(),r=this.nodes.get(s);r.visible=e,r.row&&(r.row.classList.toggle("hidden-node",!e),r.row.querySelector(".eye").innerHTML=e?Wh:Q_),n.push(...r.node.children.map(a=>a.key))}this.emit("visibility",{key:t,visible:e})}_mark(t,e,n){for(let s of t){let r=this.nodes.get(s)?.row;r&&r.classList.remove(n)}t.clear();for(let s of e){t.add(s);let r=this.nodes.get(s)?.row;r&&r.classList.add(n)}}setSelected(t){this._mark(this.selected,t,"sel")}setHovered(t){this._mark(this.hovered,t,"hov")}instancesOfPart(t){let e=[];for(let[n,s]of this.nodes)s.node.part===t&&e.push(n);return e}pathOf(t){let e=[];for(let n=t;n;n=this.nodes.get(n).parent)e.unshift(this.nodes.get(n).node.name);return e}node(t){return this.nodes.get(t)?.node}};var sa=class extends EventTarget{constructor(t){super(),this.el=t,this.rows=new Map,this.parts=[],this.sort={key:"name",dir:1},this.selected=null,this.hovered=null,t.addEventListener("mouseleave",()=>this.emit("hover",{partId:null}))}emit(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e}))}setParts(t,e){this.parts=t.map(n=>({...n,faces:0,tris:0,ok:0,repaired:0,fallback:0,bad:0,ms:0,pending:!0})),this.colorOf=e,this.render()}addStats(t,e){let n=this.parts.find(s=>s.id===t);n&&(n.faces+=e.faces,n.tris+=e.triangles,n.ok+=e.ok||0,n.repaired+=e.repaired||0,n.fallback+=e.fallback||0,n.bad+=(e.failed||0)+(e.empty||0),n.ms+=e.ms||0,n.chunksDone=(n.chunksDone||0)+1,n.pending=!1,this._updateRow(n))}render(){let t=[...this.parts].sort((s,r)=>{let a=this.sort.key,o=s[a],c=r[a];return(typeof o=="string"?o.localeCompare(c):o-c)*this.sort.dir});this.el.innerHTML=`
      <div class="plhead">
        <button data-k="name">Part</button><button data-k="instances" class="num">Qty</button>
        <button data-k="faces" class="num">Faces</button><button data-k="tris" class="num">Tris</button><span class="num">State</span>
      </div><div class="plbody"></div>`,this.el.querySelectorAll(".plhead button").forEach(s=>{s.dataset.k===this.sort.key&&s.classList.add(this.sort.dir>0?"asc":"desc"),s.addEventListener("click",()=>{let r=s.dataset.k;this.sort={key:r,dir:this.sort.key===r?-this.sort.dir:r==="name"?1:-1},this.render()})});let e=this.el.querySelector(".plbody"),n=document.createDocumentFragment();this.rows.clear();for(let s of t){let r=document.createElement("div");r.className="plrow",r.dataset.part=s.id,r.innerHTML='<span class="sw"></span><span class="nm"></span><span class="num q"></span><span class="num f"></span><span class="num t"></span><span class="num st"></span>',r.querySelector(".nm").textContent=s.name,r.querySelector(".nm").title=s.name;let a=this.colorOf?this.colorOf(s.id):null;a&&(r.querySelector(".sw").style.background=a),r.addEventListener("mouseenter",()=>this.emit("hover",{partId:s.id})),r.addEventListener("click",()=>this.emit("select",{partId:s.id})),r.addEventListener("dblclick",()=>this.emit("focus",{partId:s.id})),this.rows.set(s.id,r),this._updateRow(s,r),n.appendChild(r)}e.appendChild(n),this.selected&&this.setSelected(this.selected)}_updateRow(t,e=this.rows.get(t.id)){if(!e)return;e.querySelector(".q").textContent=t.instances,e.querySelector(".f").textContent=t.pending?"\u2026":t.faces.toLocaleString(),e.querySelector(".t").textContent=t.pending?"\u2026":rs(t.tris);let n=e.querySelector(".st");if(t.pending){n.innerHTML='<i class="chip wait">queued</i>';return}t.bad?n.innerHTML=`<i class="chip bad" title="${t.bad} faces failed or empty">${t.bad} err</i>`:t.fallback?n.innerHTML=`<i class="chip warn" title="${t.fallback} faces used the earcut fallback">${t.fallback} fb</i>`:t.repaired?n.innerHTML=`<i class="chip rep" title="${t.repaired} faces repaired (inconsistent file data)">${t.repaired} fix</i>`:n.innerHTML='<i class="chip ok">ok</i>'}setSelected(t){this.selected&&this.rows.get(this.selected)?.classList.remove("sel"),this.selected=t;let e=t?this.rows.get(t):null;e&&(e.classList.add("sel"),e.scrollIntoView({block:"nearest"}))}setHovered(t){this.hovered&&this.rows.get(this.hovered)?.classList.remove("hov"),this.hovered=t,t&&this.rows.get(t)?.classList.add("hov")}get(t){return this.parts.find(e=>e.id===t)}};function rs(i){return i>=1e6?(i/1e6).toFixed(i>=1e7?0:1)+"M":i>=1e4?(i/1e3).toFixed(0)+"k":i>=1e3?(i/1e3).toFixed(1)+"k":String(i)}var ne={l:46,r:10,t:10,b:24},Ns=1.25,ra=(i,t)=>{let e=i/Math.max(1,t),n=10**Math.floor(Math.log10(e)),s=e/n;return(s<1.5?1:s<3.5?2:s<7.5?5:10)*n},aa=(i,t)=>{let e=Math.max(0,Math.min(8,-Math.floor(Math.log10(t)+1e-9))),n=i.toFixed(e);return n==="-0"||/^-0\.0*$/.test(n)?n.slice(1):n},oa=class{constructor(t){this.host=t,t.classList.add("uvbox"),t.innerHTML=`
      <div class="uvbar">
        <button type="button" data-act="fit" title="Fit (double-click, F)">Fit</button>
        <button type="button" data-act="in" title="Zoom in (+)" aria-label="Zoom in">+</button>
        <button type="button" data-act="out" title="Zoom out (\u2212)" aria-label="Zoom out">\u2212</button>
        <span class="uvread mono" aria-live="off"></span>
      </div>
      <div class="uvstage">
        <canvas class="uv" tabindex="0" role="img" aria-label="UV parameter domain of the face. Wheel to zoom, drag to pan, double-click to fit."></canvas>
        <div class="uvwait dim">Computing UV domain\u2026</div>
      </div>
      <div class="uvgrip" role="separator" aria-orientation="horizontal" aria-label="Resize the plot" tabindex="0" title="Drag to resize \xB7 double-click to reset"></div>
      <div class="uvlegend"><span><i class="ln"></i>boundary (model edge)</span><span><i class="ln dash"></i>seam / pole / domain</span><span><i class="tri"></i>triangulation</span></div>`,this.stage=t.querySelector(".uvstage"),this.canvas=t.querySelector("canvas"),this.readout=t.querySelector(".uvread"),this.wait=t.querySelector(".uvwait"),this.data=null,this.bounds=null,this.view=null,this.size={w:0,h:0},this._raf=0,this._pointers=new Map,this._hover=null,this._bind(),this._grip(t.querySelector(".uvgrip")),this._ro=new ResizeObserver(()=>this._measure()),this._ro.observe(this.stage)}setData(t){this.data=t,this.wait.hidden=!!t;let e=1/0,n=1/0,s=-1/0,r=-1/0,a=(o,c)=>{o<e&&(e=o),o>s&&(s=o),c<n&&(n=c),c>r&&(r=c)};if(t&&t.debug)for(let o of t.debug.polys)for(let[c,l]of o)a(c,l);if(t&&t.uv&&!isFinite(e))for(let o=0;o<t.uv.u.length;o++)a(t.uv.u[o],t.uv.v[o]);this.bounds=isFinite(e)?{u0:e,u1:s,v0:n,v1:r}:null,t&&!this.bounds&&(this.wait.hidden=!1,this.wait.textContent="No parameter domain for this face"),this.fit()}fit(){let t=this.bounds;if(!t){this.view=null,this.request();return}let e=t.u1-t.u0||Math.abs(t.u0)*.1||1,n=t.v1-t.v0||Math.abs(t.v0)*.1||1,s=(t.u0+t.u1)/2,r=(t.v0+t.v1)/2;this.view={u0:s-e*.53,u1:s+e*.53,v0:r-n*.53,v1:r+n*.53},this._fitSpan={u:this.view.u1-this.view.u0,v:this.view.v1-this.view.v0},this.request()}zoom(t,e,n,s="uv"){let r=this.view;if(!r)return;e==null&&(e=(r.u0+r.u1)/2,n=(r.v0+r.v1)/2);let a=(o,c)=>Math.min(c*50,Math.max(c*1e-6,o));if(s!=="v"){let o=a((r.u1-r.u0)/t,this._fitSpan.u),c=(e-r.u0)/(r.u1-r.u0);r.u0=e-c*o,r.u1=r.u0+o}if(s!=="u"){let o=a((r.v1-r.v0)/t,this._fitSpan.v),c=(n-r.v0)/(r.v1-r.v0);r.v0=n-c*o,r.v1=r.v0+o}this.request()}pan(t,e){let n=this.view,s=this._pw(),r=this._ph();if(!n||s<=0||r<=0)return;let a=-t/s*(n.u1-n.u0),o=e/r*(n.v1-n.v0);n.u0+=a,n.u1+=a,n.v0+=o,n.v1+=o,this.request()}dispose(){this._ro.disconnect(),cancelAnimationFrame(this._raf)}request(){this._raf||(this._raf=requestAnimationFrame(()=>{this._raf=0,this.draw()}))}_pw(){return this.size.w-ne.l-ne.r}_ph(){return this.size.h-ne.t-ne.b}_toData(t,e){let n=this.view;return{u:n.u0+(t-ne.l)/this._pw()*(n.u1-n.u0),v:n.v0+(this.size.h-ne.b-e)/this._ph()*(n.v1-n.v0)}}_local(t){let e=this.canvas.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}_measure(){let t=Math.round(this.stage.clientWidth),e=Math.round(this.stage.clientHeight);if(!t||!e||t===this.size.w&&e===this.size.h)return;this.size={w:t,h:e};let n=Math.min(window.devicePixelRatio||1,2);this.canvas.width=t*n,this.canvas.height=e*n,this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.draw()}_bind(){let t=this.canvas;this.host.querySelector(".uvbar").addEventListener("click",n=>{let s=n.target.closest("button")?.dataset.act;s==="fit"?this.fit():s==="in"?this.zoom(Ns):s==="out"&&this.zoom(1/Ns)}),t.addEventListener("wheel",n=>{if(!this.view)return;n.preventDefault();let s=this._local(n),r=this._toData(s.x,s.y),a=Math.exp(-Math.max(-60,Math.min(60,n.deltaMode===1?n.deltaY*16:n.deltaY))*.0025);this.zoom(a,r.u,r.v,n.shiftKey?"u":n.altKey?"v":"uv"),this._hover=s},{passive:!1}),t.addEventListener("pointerdown",n=>{!this.view||n.pointerType==="mouse"&&n.button!==0||(t.setPointerCapture(n.pointerId),this._pointers.set(n.pointerId,this._local(n)),t.classList.add("panning"))}),t.addEventListener("pointermove",n=>{let s=this._local(n),r=this._pointers.get(n.pointerId);if(r&&this._pointers.size===1)this.pan(s.x-r.x,s.y-r.y);else if(r&&this._pointers.size===2){let[a,o]=[...this._pointers.entries()].map(([d,u])=>d===n.pointerId?s:u),[c,l]=[...this._pointers.values()],h=Math.hypot(c.x-l.x,c.y-l.y),f=Math.hypot(a.x-o.x,a.y-o.y);if(h>4){let d=this._toData((a.x+o.x)/2,(a.y+o.y)/2);this.zoom(f/h,d.u,d.v)}}r&&this._pointers.set(n.pointerId,s),this._hover=s,this._read(s)});let e=n=>{this._pointers.delete(n.pointerId),this._pointers.size||t.classList.remove("panning")};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointerleave",()=>{this._hover=null,this._read(null)}),t.addEventListener("dblclick",()=>this.fit()),t.addEventListener("keydown",n=>{let r={"+":()=>this.zoom(Ns),"=":()=>this.zoom(Ns),"-":()=>this.zoom(1/Ns),0:()=>this.fit(),f:()=>this.fit(),F:()=>this.fit(),ArrowLeft:()=>this.pan(40,0),ArrowRight:()=>this.pan(-40,0),ArrowUp:()=>this.pan(0,40),ArrowDown:()=>this.pan(0,-40)};r[n.key]&&(n.preventDefault(),n.stopPropagation(),r[n.key]())})}_grip(t){let e="trimline.uvh",a=(h,f)=>{if(h=Math.round(Math.max(140,Math.min(900,h))),this.host.style.setProperty("--uvh",h+"px"),f)try{localStorage.setItem(e,String(h))}catch{}return h},o=260;try{o=+localStorage.getItem(e)||260}catch{}a(o,!1);let c=null;t.addEventListener("pointerdown",h=>{h.button===0&&(h.preventDefault(),t.setPointerCapture(h.pointerId),c={y:h.clientY,h:this.stage.clientHeight})}),t.addEventListener("pointermove",h=>{c&&a(c.h+h.clientY-c.y,!1)});let l=()=>{c&&(c=null,a(this.stage.clientHeight,!0))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),t.addEventListener("dblclick",()=>a(260,!0)),t.addEventListener("keydown",h=>{let f=h.key==="ArrowDown"?20:h.key==="ArrowUp"?-20:0;f&&(h.preventDefault(),a(this.stage.clientHeight+f,!0))})}_read(t){if(!this.view){this.readout.textContent="";return}let e=this._fitSpan?Math.sqrt(this._fitSpan.u/(this.view.u1-this.view.u0)*(this._fitSpan.v/(this.view.v1-this.view.v0))):1,n=`${e>=10?e.toFixed(0):e.toFixed(1)}\xD7`;if(!t||t.x<ne.l||t.y>this.size.h-ne.b){this.readout.textContent=n;return}let s=this._toData(t.x,t.y),r=ra(this.view.u1-this.view.u0,this._pw()),a=ra(this.view.v1-this.view.v0,this._ph());this.readout.textContent=`u ${aa(s.u,r)}  v ${aa(s.v,a)}  \xB7 ${n}`}draw(){let{w:t,h:e}=this.size;if(!t||!e)return;let n=this.canvas,s=getComputedStyle(n),r=y=>s.getPropertyValue(y).trim(),a=r("--ink")||"#1b2733",o=r("--select")||"#ff6a00",c=r("--ink-2")||"#666",l=r("--uvtri")||"rgba(31,78,121,.25)",h=r("--uvfill")||"rgba(31,78,121,.07)",f=r("--rule")||"#d2d9de",d=n.width/t,u=n.getContext("2d");u.setTransform(d,0,0,d,0,0),u.clearRect(0,0,t,e);let g=this.view,_=this.data;if(!g||!_){this._read(null);return}let m=this._pw(),p=this._ph(),E=m/(g.u1-g.u0),v=p/(g.v1-g.v0),T=y=>ne.l+(y-g.u0)*E,I=y=>e-ne.b-(y-g.v0)*v,C=ra(g.u1-g.u0,m/70),A=ra(g.v1-g.v0,p/46);u.font='10px "JetBrains Mono", ui-monospace, monospace',u.lineWidth=1,u.strokeStyle=f,u.fillStyle=c,u.textAlign="center",u.textBaseline="top";for(let y=Math.ceil(g.u0/C)*C;y<=g.u1+C*1e-9;y+=C){let b=Math.round(T(y))+.5;u.globalAlpha=.55,u.beginPath(),u.moveTo(b,ne.t),u.lineTo(b,e-ne.b),u.stroke(),u.globalAlpha=1,u.fillText(aa(y,C),b,e-ne.b+5)}u.textAlign="right",u.textBaseline="middle";for(let y=Math.ceil(g.v0/A)*A;y<=g.v1+A*1e-9;y+=A){let b=Math.round(I(y))+.5;u.globalAlpha=.55,u.beginPath(),u.moveTo(ne.l,b),u.lineTo(t-ne.r,b),u.stroke(),u.globalAlpha=1,u.fillText(aa(y,A),ne.l-5,b)}u.textAlign="left",u.textBaseline="alphabetic",u.fillText("u",t-ne.r-8,e-ne.b-4),u.fillText("v",ne.l+4,ne.t+10),u.save(),u.beginPath(),u.rect(ne.l,ne.t,m,p),u.clip();let H=_.debug&&_.debug.window||{};if(u.setLineDash([2,4]),u.strokeStyle=c,u.lineWidth=.8,H.u)for(let y of H.u)u.beginPath(),u.moveTo(T(y),ne.t),u.lineTo(T(y),e-ne.b),u.stroke();if(H.v)for(let y of H.v)u.beginPath(),u.moveTo(ne.l,I(y)),u.lineTo(t-ne.r,I(y)),u.stroke();if(u.setLineDash([]),_.uv){let{u:y,v:b,tri:N}=_.uv;u.fillStyle=h,u.strokeStyle=l,u.lineWidth=.5,u.beginPath();for(let X=0;X<N.length;X+=3){let nt=N[X],L=N[X+1],U=N[X+2];u.moveTo(T(y[nt]),I(b[nt])),u.lineTo(T(y[L]),I(b[L])),u.lineTo(T(y[U]),I(b[U])),u.closePath()}u.fill(),u.stroke()}for(let y of _.debug?_.debug.polys:[])for(let b=0;b<y.length;b++){let N=y[b],X=y[(b+1)%y.length],nt=N[2]&&X[2];u.strokeStyle=nt?a:o,u.lineWidth=nt?1.6:1.4,u.setLineDash(nt?[]:[5,3]),u.beginPath(),u.moveTo(T(N[0]),I(N[1])),u.lineTo(T(X[0]),I(X[1])),u.stroke()}u.restore(),u.setLineDash([]),u.strokeStyle=f,u.lineWidth=1,u.strokeRect(ne.l+.5,ne.t+.5,m-1,p-1),this._read(this._hover)}};var t0=i=>{let t=new Map;for(let e of i)t.has(e.id)||t.set(e.id,e);return t},Xh=i=>{let t=new Map;for(let e of i){let n=t.get(e.id);n?n.push(e):t.set(e.id,[e])}return t},Us=(i,t)=>(i[0]-t[0])**2+(i[1]-t[1])**2+(i[2]-t[2])**2,lc=(i,t)=>i?[i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],i[2]*t[0]+i[6]*t[1]+i[10]*t[2]+i[14]]:t,la=i=>i.id>0?`#${i.id}`:`[${i.index}]`,xe=(i,t=6)=>i==null||!isFinite(i)?"\u2014":String(+(+i).toPrecision(t)),as=(i,t=6)=>i?i.map(e=>xe(e,t)).join(", "):"\u2014",ca=class{constructor(t){this.doc=t;let e=t.topology;this.faceById=t0(e.faces),this.edgesById=Xh(e.edges),this.verticesById=Xh(e.vertices),this.matrices=(t.placements||[]).map(s=>s.matrix),this.matrices.length||(this.matrices=[null]);let n=new Int32Array(e.loops.length).fill(-1);for(let s of e.faces)for(let r of s.loops)n[r]=s.index;this.edgeFaces=e.edges.map(()=>[]),this.edgeCoedges=e.edges.map(()=>[]);for(let s of e.loops){let r=n[s.index];for(let a of s.coedges){let o=e.coedges[a].edge;this.edgeCoedges[o].push(a),r>=0&&!this.edgeFaces[o].includes(r)&&this.edgeFaces[o].push(r)}}this.vertexEdges=e.vertices.map(()=>[]),this.vertexLoopFaces=e.vertices.map(()=>[]);for(let s of e.edges)s.start!=null&&this.vertexEdges[s.start].push(s.index),s.end!=null&&s.end!==s.start&&this.vertexEdges[s.end].push(s.index);for(let s of e.loops)s.vertex!=null&&n[s.index]>=0&&this.vertexLoopFaces[s.vertex].push(n[s.index])}geometry(t){return t==null?null:this.doc.geometry[t]||null}geometryClosure(t){let e=new Set,n=[],s=r=>{if(r==null||e.has(r))return;e.add(r);let a=this.doc.geometry[r];if(a){n.push(a);for(let o of["basis","surface","curve2d","profile","curve1","curve2"])typeof a[o]=="number"&&s(a[o]);if(Array.isArray(a.segments))for(let o of a.segments)s(typeof o=="number"?o:o.curve)}};for(let r of t)s(r);return n.sort((r,a)=>r.index-a.index)}face(t){return this.faceById.get(t)||null}placedPoints(t){return t?this.matrices.map(e=>lc(e,t.point)):[]}_dist(t,e){let n=1/0;for(let s of this.placedPoints(t))n=Math.min(n,Us(e,s));return n}vertexAt(t,e){let n=this.verticesById.get(e)||[];if(n.length===1&&e>0)return n[0];let s=n.length?n:this.doc.topology.vertices,r=null,a=1/0;for(let o of s){let c=this._dist(o,t);c<a&&(a=c,r=o)}return r}placedEnds(t){let e=this.doc.topology.vertices;return t.start==null||t.end==null?[]:this.matrices.map(n=>[lc(n,e[t.start].point),lc(n,e[t.end].point)])}edgeAt(t,e,n){let s=this.edgesById.get(t)||[];if(s.length===1&&t>0)return s[0];let r=s[0]||null,a=1/0;for(let o of s)for(let[c,l]of this.placedEnds(o)){let h=Math.min(Us(e,c)+Us(n,l),Us(e,l)+Us(n,c));h<a&&(a=h,r=o)}return r}edge(t){if(!t)return null;let e=this.doc.topology;return{edge:t,curve:this.geometry(t.curve),start:t.start!=null?e.vertices[t.start]:null,end:t.end!=null?e.vertices[t.end]:null,coedges:this.edgeCoedges[t.index].map(n=>e.coedges[n]),faces:this.edgeFaces[t.index].map(n=>e.faces[n])}}vertex(t){if(!t)return null;let e=this.doc.topology,n=this.vertexEdges[t.index].map(r=>e.edges[r]),s=new Set(this.vertexLoopFaces[t.index]);for(let r of n)for(let a of this.edgeFaces[r.index])s.add(a);return{vertex:t,edges:n,faces:[...s].map(r=>e.faces[r])}}edgeDoc(t){let e=this.edge(t);if(!e)return null;let n=this.doc.topology;return{schema:this.doc.schema,part:this.doc.part,subset:{edges:[t.index]},edge:e.edge,vertices:[e.start,e.end].filter((s,r,a)=>s&&a.indexOf(s)===r),coedges:e.coedges.map(s=>({...s,loop:n.loops.find(r=>r.coedges.includes(s.index))?.index??null})),faces:e.faces.map(s=>({index:s.index,id:s.id,surfaceType:s.surfaceType,surface:s.surface})),geometry:this.geometryClosure([e.edge.curve,...e.coedges.flatMap(s=>s.pcurves)])}}vertexDoc(t){let e=this.vertex(t);return e?{schema:this.doc.schema,part:this.doc.part,subset:{vertices:[t.index]},vertex:e.vertex,edges:e.edges.map(n=>({index:n.index,id:n.id,curveType:n.curveType,start:n.start,end:n.end})),faces:e.faces.map(n=>({index:n.index,id:n.id,surfaceType:n.surfaceType}))}:null}},e0=i=>xe(i*180/Math.PI,4)+"\xB0",n0={bspline:"B-spline",polyline:"polyline",rectangular_trimmed:"trimmed surface",curve_on_surface:"curve on surface"},jn=i=>n0[i]||i||"\u2014";function hc(i){if(!i)return"\u2014";let t=jn(i.type);switch(i.type){case"circle":return`${t} \xB7 r ${xe(i.radius)}`;case"ellipse":return`${t} \xB7 ${xe(i.semiAxis1)} \xD7 ${xe(i.semiAxis2)}`;case"parabola":return`${t} \xB7 focal ${xe(i.focalDistance)}`;case"hyperbola":return`${t} \xB7 ${xe(i.semiAxis)} \xD7 ${xe(i.semiImagAxis)}`;case"polyline":return`${t} \xB7 ${i.controlPointCount} points`;case"bspline":return i.class==="curve"?`${t} \xB7 degree ${i.degree} \xB7 ${i.controlPointCount} control points${i.rational?" \xB7 rational":""}`:`${t} \xB7 degree ${i.degree.join("\xD7")} \xB7 ${i.controlPointCount.join("\xD7")} control points${i.rational?" \xB7 rational":""}`;case"cylinder":case"sphere":return`${t} \xB7 r ${xe(i.radius)}`;case"cone":return`${t} \xB7 r ${xe(i.radius)} \xB7 half angle ${e0(i.semiAngle)}`;case"torus":return`${t} \xB7 R ${xe(i.majorRadius)} \xB7 r ${xe(i.minorRadius)}`;case"offset":return`${t} \xB7 distance ${xe(i.distance)}`;case"composite":case"joined":return`${t} \xB7 ${i.segments.length} segments`;default:return t}}var ye=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),uc=i=>"#"+i.toString(16).padStart(6,"0"),qh=i=>i==="ok"?"ok":i==="repaired"?"rep":i==="fallback"?"warn":"bad",$h=(i,t)=>`${i} ${t}${i===1?"":"s"}`;function fc(i=""){let t=i.toUpperCase();return t.startsWith("IGES")?"IGES":t.includes("AP242")||t.includes("MANAGED_MODEL_BASED")?"AP242":t.includes("AUTOMOTIVE_DESIGN")?"AP214":t.includes("CONFIG_CONTROL_DESIGN")||t.includes("AP203")?"AP203":i.split(/[\s{]/)[0]||"\u2014"}function Jn(i){return i>=1e9?(i/1e9).toFixed(2)+" GB":i>=1e6?(i/1e6).toFixed(1)+" MB":i>=1e3?(i/1e3).toFixed(0)+" kB":i+" B"}var ha=i=>i>=1e4?(i/1e3).toFixed(1)+" s":i>=1e3?(i/1e3).toFixed(2)+" s":Math.round(i)+" ms",i0=(i,t,e="")=>`<button type="button" class="ref" data-kind="${i}" data-id="${t.id}" data-index="${t.index}">${ye(la(t))}${e?` <span>${ye(e)}</span>`:""}</button>`,dc=40,Os=(i,t,e=()=>"")=>t.length?`<span class="refs">${t.slice(0,dc).map(n=>i0(i,n,e(n))).join("")}${t.length>dc?`<span class="dim">+${t.length-dc} more</span>`:""}</span>`:"\u2014",s0={debug:null,uv:null};function r0(i){let t=i.filter(s=>s.outer).length,e=i.filter(s=>s.vertex!=null).length,n=[t?`${t} outer`:"",e?`${e} at a point`:""].filter(Boolean);return $h(i.length,"loop")+(n.length?` (${n.join(", ")})`:"")}var ua='<button type="button" class="linkbtn" data-open="data">View B-rep JSON</button>',da=class extends EventTarget{constructor(t){super(),this.el=t,this.file=null,this.plot=null,t.addEventListener("click",e=>{let n=e.target.closest(".ref");if(n){this.dispatchEvent(new CustomEvent("navigate",{detail:{kind:n.dataset.kind,id:+n.dataset.id,index:+n.dataset.index}}));return}e.target.closest("[data-open=data]")&&this.dispatchEvent(new CustomEvent("openData"))})}_dropPlot(){this.plot&&(this.plot.dispose(),this.plot=null)}showFile(t){this.file=t,this.renderFile()}renderFile(t={}){this._dropPlot();let e=this.file;if(!e){this.el.innerHTML='<div class="empty-note">Open a STEP or IGES file to inspect it.</div>';return}let n=e.model.header||{},s=(e.model.types||[]).slice(0,10),r=s.length?s[0][1]:1;this.el.innerHTML=`
      <section class="card">
        <h3>File</h3>
        <dl class="kv">
          <dt>Name</dt><dd class="wrap">${ye(e.name)}</dd>
          <dt>Size</dt><dd>${Jn(e.model.fileSize)}</dd>
          <dt>Schema</dt><dd><span class="pill">${ye(fc(n.schema))}</span> <span class="dim wrap">${ye(n.schema)}</span></dd>
          <dt>Origin</dt><dd class="wrap">${ye(n.originatingSystem||n.preprocessor||"\u2014")}</dd>
          <dt>Entities</dt><dd class="mono">${e.model.entityCount.toLocaleString()}</dd>
          <dt>Products</dt><dd class="mono">${e.model.parts.length} parts \xB7 ${e.model.nodeCount} nodes</dd>
          ${e.model.stored?`<dt>Source</dt><dd>library \xB7 <span class="mono">${Jn(e.model.memory.shapes||0)}</span> of model data</dd>`:`<dt>Index</dt><dd class="mono">${ha(e.model.timings.indexMs)} \xB7 ${Jn(e.model.memory.index)}</dd>
          <dt>Structure</dt><dd class="mono">${ha(e.model.timings.structureMs)}</dd>`}
          ${t.tessMs?`<dt>Tessellation</dt><dd class="mono">${ha(t.tessMs)} \xB7 ${t.workers} workers</dd>`:""}
          ${t.tris?`<dt>Triangles</dt><dd class="mono">${t.tris.toLocaleString()} unique \xB7 ${t.drawn.toLocaleString()} drawn</dd>`:""}
        </dl>
      </section>
      <section class="card">
        <h3>Entity types</h3>
        <div class="bars">${s.map(([a,o])=>`<div class="bar"><span class="bl mono">${ye(a)}</span><span class="bt"><i style="width:${(100*o/r).toFixed(1)}%"></i></span><span class="bn mono">${rs(o)}</span></div>`).join("")}</div>
      </section>
      ${e.model.warnings&&e.model.warnings.length?`<section class="card"><h3>Reader notes</h3><ul class="notes">${e.model.warnings.slice(0,8).map(a=>`<li>${ye(a)}</li>`).join("")}</ul></section>`:""}
      <section class="card hint">
        <h3>Inspect</h3>
        <p>Click a part in the view, the assembly tree or the part list; the three stay in sync. Choose Face, Edge or Vertex under <b>Select</b> to pick B-rep elements; a face shows its trimmed UV domain.</p>
      </section>`}showSelection(t,e){this._dropPlot();let n=t.partStats,s=n&&n.surfaces?Object.entries(n.surfaces).sort((r,a)=>a[1]-r[1]):[];this.el.innerHTML=`
      <section class="card sel-card">
        <div class="eyebrow">${t.kind==="part"?"Part definition":"Occurrence"}</div>
        <h2 class="wrap">${ye(t.title)}</h2>
        ${t.sub?`<div class="dim wrap">${ye(t.sub)}</div>`:""}
        ${t.path&&t.path.length>1?`<div class="crumbs">${t.path.map(ye).join("<span>\u203A</span>")}</div>`:""}
        <dl class="kv">
          ${t.instances!=null?`<dt>Quantity</dt><dd class="mono">${t.instances}</dd>`:""}
          ${n?`<dt>Faces</dt><dd class="mono">${n.faces.toLocaleString()}</dd>
          <dt>Triangles</dt><dd class="mono">${n.triangles.toLocaleString()}</dd>
          <dt>Chord tol.</dt><dd class="mono">${n.tolerance?n.tolerance.toPrecision(3)+" mm":"\u2014"}</dd>
          <dt>Faces state</dt><dd>${ss.filter(r=>n[r]).map(r=>`<i class="chip ${qh(r)}">${n[r]} ${r}</i>`).join(" ")}</dd>
          <dt>Time</dt><dd class="mono">${ha(n.ms)}</dd>`:'<dt>Geometry</dt><dd class="dim">assembly node</dd>'}
          ${t.partId?'<dt>B-rep</dt><dd class="brep-sum dim">\u2026</dd>':""}
        </dl>
        ${s.length?`<div class="stack">${s.map(([r,a])=>`<i title="${r}: ${a}" style="flex:${a};background:${uc(xi[r]??8947848)}"></i>`).join("")}</div>
        <div class="legend">${s.map(([r,a])=>`<span><i style="background:${uc(xi[r]??8947848)}"></i>${r} <b class="mono">${a}</b></span>`).join("")}</div>`:""}
        ${t.partId?ua:""}
      </section>
      <section class="card el-card" ${e&&e.kind?"":"hidden"}></section>`}setPartSummary(t){let e=this.el.querySelector(".brep-sum");if(!e)return;if(!t){e.textContent="\u2014";return}let n=t.summary.counts;e.classList.remove("dim"),e.innerHTML=`<span class="mono">${[[n.bodies,"body","bodies"],[n.shells,"shell"],[n.faces,"face"],[n.edges,"edge"],[n.vertices,"vertex","vertices"]].filter(([s])=>s).map(([s,r,a])=>`${s.toLocaleString()} ${s===1?r:a||r+"s"}`).join(" \xB7 ")}</span>`}_card(){let t=this.el.querySelector(".el-card");return t&&(t.hidden=!1),t}showFace(t,e,n){let s=this._card();if(!s)return;let r=is[t.kind]||"?",a=ss[t.status]||"?",o=e,c=n&&n.topology,l=c&&c.faces[0],h=n&&l?n.geometry[l.surface]:null,f=c?c.loops:null,d=o&&o.surfaceInfo,u=d?[d.uPeriod?`u ${xe(d.uPeriod,5)}`:"",d.vPeriod?`v ${xe(d.vPeriod,5)}`:""].filter(Boolean).join(" \xB7 "):"",g=d&&d.poles.length?d.poles.map(v=>`${v.dir==="u"?"v":"u"} = ${xe(v.at,4)}`).join(", "):"",m=this.plot&&s.contains(this.plot.host)&&s.dataset.face===String(t.id)?this.plot.host:null;s.dataset.face=String(t.id),s.innerHTML=`
      <div class="eyebrow">Face</div>
      <h2><span class="mono">#${t.id}</span> <span class="pill" style="--pc:${uc(xi[r]??8947848)}">${r}</span> <i class="chip ${qh(a)}" title="Tessellation result">${a}</i></h2>
      <dl class="kv">
        <dt>Surface</dt><dd>${ye(h?hc(h):jn(r))}${l&&l.surfaceId?` <span class="dim mono">#${l.surfaceId}</span>`:""}</dd>
        ${l?`<dt>Orientation</dt><dd>${l.sameSense?"along the surface normal":"against the surface normal"}</dd>`:""}
        ${f?`<dt>Bounds</dt><dd>${r0(f)} \xB7 ${$h(c.edges.length,"edge")}</dd>`:""}
        ${u?`<dt>Periodic</dt><dd class="mono">${u}</dd>`:""}
        ${g?`<dt>Singular at</dt><dd class="mono">${g}</dd>`:""}
        <dt>Triangles</dt><dd class="mono">${t.tris.toLocaleString()}</dd>
        ${c?`<dt>Edges</dt><dd>${Os("edge",c.edges,v=>v.curveType?jn(v.curveType):"")}</dd>`:""}
      </dl>
      <div class="uvslot"></div>
      ${o&&o.warnings.length?`<ul class="notes">${o.warnings.slice(0,4).map(v=>`<li>${ye(v)}</li>`).join("")}</ul>`:""}
      ${o&&(o.source||o.surfaceSource)?`<details><summary>${this.file&&this.file.model.format==="iges"?"IGES":"STEP"} source</summary><pre class="src">${ye(o.source)}
${ye(o.surfaceSource)}</pre></details>`:""}
      ${ua}`;let p=s.querySelector(".uvslot"),E=o===void 0?null:o||s0;if(m)p.replaceWith(m);else{this._dropPlot(),this.plot=new oa(p),this.plot.setData(E);return}E&&this.plot.data!==E&&this.plot.setData(E)}showEdge(t,e){let n=this._card();if(!n)return;let s=e&&e.curve,r=s&&s.position,a=e&&e.edge.start!=null&&e.edge.start===e.edge.end;n.innerHTML=`
      <div class="eyebrow">Edge</div>
      <h2><span class="mono">${ye(e?la(e.edge):t.id>0?"#"+t.id:"edge")}</span> ${s?`<span class="pill">${ye(jn(s.type))}</span>`:""}${a?' <i class="chip wait">closed</i>':""}</h2>
      <dl class="kv">
        <dt>Curve</dt><dd>${e?ye(hc(s)):'<span class="dim">\u2026</span>'}</dd>
        ${r?`<dt>Center</dt><dd class="mono">${as(r.origin)}</dd><dt>Axis</dt><dd class="mono">${as(r.axis,4)}</dd>`:""}
        ${s&&s.type==="line"?`<dt>Direction</dt><dd class="mono">${as(s.direction,4)}</dd>`:""}
        <dt>Length</dt><dd class="mono">\u2248 ${xe(t.length,5)} mm</dd>
        ${e&&e.edge.params&&!a?`<dt>Parameters</dt><dd class="mono">${xe(e.edge.params[0],5)} \u2026 ${xe(e.edge.params[1],5)}</dd>`:""}
        ${e?`<dt>Vertices</dt><dd>${Os("vertex",[e.start,e.end].filter((o,c,l)=>o&&l.indexOf(o)===c))}</dd>
        <dt>Faces</dt><dd>${Os("face",e.faces,o=>jn(o.surfaceType))}</dd>`:""}
      </dl>
      ${ua}`}showVertex(t,e){let n=this._card();n&&(n.innerHTML=`
      <div class="eyebrow">Vertex</div>
      <h2><span class="mono">${ye(e?la(e.vertex):t.id>0?"#"+t.id:"vertex")}</span></h2>
      <dl class="kv">
        <dt>Position</dt><dd class="mono">${as(t.world)}</dd>
        <dt>In part</dt><dd class="mono">${as(t.part)}</dd>
        ${e?`<dt>Edges</dt><dd>${Os("edge",e.edges,s=>jn(s.curveType))}</dd>
        <dt>Faces</dt><dd>${Os("face",e.faces,s=>jn(s.surfaceType))}</dd>`:'<dt>Topology</dt><dd class="dim">\u2026</dd>'}
      </dl>
      ${ua}`)}};var fa=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),a0=i=>i===null||typeof i!="object";function o0(i){if(Array.isArray(i))return i.length<=4&&i.every(t=>t===null||typeof t=="number");if(i&&typeof i=="object"){let t=Object.keys(i);return t.length>0&&t.length<=4&&t.every(e=>a0(i[e]))}return!0}function pc(i){return i===null?'<span class="jv-null">null</span>':typeof i=="string"?`<span class="jv-str">"${fa(i)}"</span>`:typeof i=="number"?`<span class="jv-num">${i}</span>`:typeof i=="boolean"?`<span class="jv-bool">${i}</span>`:Array.isArray(i)?`[${i.map(pc).join(", ")}]`:`{${Object.entries(i).map(([t,e])=>`<span class="jv-ikey">${fa(t)}</span>: ${pc(e)}`).join(", ")}}`}function c0(i){if(Array.isArray(i))return"";let t=[];i.id!=null?t.push("#"+i.id):i.index!=null&&t.push(String(i.index));for(let e of["type","kind","surfaceType","curveType","class"])if(typeof i[e]=="string"){t.push(i[e]);break}return typeof i.name=="string"&&i.name&&t.push(i.name),t.length?`<span class="jv-pre">${fa(t.join(" \xB7 "))}</span>`:""}var Yh=i=>i==null?"":`<span class="jv-key">${fa(i)}</span><span class="jv-colon">:</span> `;function pa(i,t,e,n){let s=document.createElement("div");if(s.className="jv-node",o0(t))return s.innerHTML=`<span class="jv-leaf">${Yh(i)}${pc(t)}</span>`,s;let r=Array.isArray(t),a=r?t.length:Object.keys(t).length,o=document.createElement("button");o.type="button",o.className="jv-tog",o.setAttribute("aria-expanded","false"),o.innerHTML=`${Yh(i)}<span class="jv-sum">${r?`[${a}]`:`{${a}}`}</span>${c0(t)}`;let c=document.createElement("div");c.className="jv-kids",c.hidden=!0;let l=!1,h=()=>{let d=document.createDocumentFragment();if(r&&a>100)for(let u=0;u<a;u+=100){let g=Math.min(a,u+100);d.append(l0(t,u,g,e+1))}else if(r)t.forEach((u,g)=>d.append(pa(g,u,e+1,n)));else for(let[u,g]of Object.entries(t))d.append(pa(u,g,e+1,n));c.append(d),l=!0},f=d=>{d&&!l&&h(),c.hidden=!d,o.setAttribute("aria-expanded",String(d))};return o.addEventListener("click",()=>f(c.hidden)),s.append(o,c),n(e,i,t)&&f(!0),s}function l0(i,t,e,n){let s=document.createElement("div");s.className="jv-node";let r=document.createElement("button");r.type="button",r.className="jv-tog",r.setAttribute("aria-expanded","false"),r.innerHTML=`<span class="jv-key">[${t} \u2026 ${e-1}]</span>`;let a=document.createElement("div");return a.className="jv-kids",a.hidden=!0,r.addEventListener("click",()=>{if(!a.childElementCount)for(let o=t;o<e;o++)a.append(pa(o,i[o],n+1,()=>!1));a.hidden=!a.hidden,r.setAttribute("aria-expanded",String(!a.hidden))}),s.append(r,a),s}var ma=class{constructor(t){this.el=t,t.classList.add("jsonview")}render(t,{open:e=(n,s,r)=>n===0||n===1&&Object.keys(r).length<=12}={}){this.el.textContent="",this.el.append(pa(null,t,0,e))}clear(t=""){this.el.innerHTML=t}};var h0=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Zh={face:"Face",edge:"Edge",vertex:"Vertex"},ga=class{constructor(t,e){this.el=t,this.provider=e,this.ctx=null,this.scope="element",this.visible=!1,this.doc=null,this._seq=0,t.innerHTML=`
      <div class="dhead">
        <div class="dtitle"><div class="eyebrow">B-rep data</div><b class="wrap"></b></div>
        <div class="dbar">
          <div class="seg mini" role="tablist" aria-label="Scope">
            <button type="button" role="tab" data-scope="part" aria-selected="false">Part</button>
            <button type="button" role="tab" data-scope="element" aria-selected="true">Element</button>
          </div>
          <span class="dsize mono dim"></span>
          <button type="button" class="lbtn ghost" data-act="copy" disabled>Copy</button>
          <button type="button" class="lbtn ghost" data-act="download" disabled>Download</button>
        </div>
      </div>
      <div class="dbody scroll"><div class="dtree"></div></div>`,this.title=t.querySelector(".dtitle b"),this.size=t.querySelector(".dsize"),this.tree=new ma(t.querySelector(".dtree")),t.querySelector(".seg").addEventListener("click",n=>{let s=n.target.closest("[data-scope]");s&&!s.disabled&&(this.scope=s.dataset.scope,this.refresh())}),t.querySelector("[data-act=copy]").addEventListener("click",()=>this._copy()),t.querySelector("[data-act=download]").addEventListener("click",()=>this._download()),this.refresh()}setContext(t){let e=t&&this.ctx&&t.partId===this.ctx.partId&&(t.element?.pick??null)===(this.ctx.element?.pick??null);this.ctx=t,e||this.refresh()}setVisible(t){this.visible=t,t&&this._stale&&this.refresh()}_effectiveScope(){return this.ctx&&this.ctx.element&&this.ctx.element.kind&&this.scope==="element"?"element":"part"}refresh(){let t=this.ctx,e=!!(t&&t.element&&t.element.kind),n=this.el.querySelector("[data-scope=element]");n.disabled=!e,n.textContent=e?`${Zh[t.element.kind]} ${t.element.label}`:"Element";let s=this._effectiveScope();for(let a of this.el.querySelectorAll("[data-scope]"))a.setAttribute("aria-selected",String(a.dataset.scope===s));if(this.doc=null,this._buttons(!1),this.size.textContent="",!t||!t.partId){this.title.textContent="Nothing selected",this.tree.clear('<div class="empty-note">Select a part, or pick a face, edge or vertex, to see its B-rep topology and geometry.</div>');return}if(this.title.textContent=s==="part"?t.partName:`${Zh[t.element.kind]} ${t.element.label} \xB7 ${t.partName}`,!this.visible){this._stale=!0;return}this._stale=!1;let r=++this._seq;this.tree.clear('<div class="empty-note">Reading B-rep\u2026</div>'),this.provider(s,t).then(a=>{if(r===this._seq){if(!a){this.tree.clear('<div class="empty-note">No B-rep data for this selection (tessellated geometry from the file).</div>');return}this.doc=a,this.text=JSON.stringify(a,null,2),this.size.textContent=Jn(this.text.length),this.tree.render(a),this._buttons(!0)}}).catch(a=>{r===this._seq&&this.tree.clear(`<div class="empty-note">Could not read the B-rep: ${h0(a&&a.message)}</div>`)})}_buttons(t){for(let e of this.el.querySelectorAll("[data-act]"))e.disabled=!t}_fileName(){let t=this.ctx,e=(t.partName||t.partId||"part").replace(/[^\w.-]+/g,"_").slice(0,60);return this._effectiveScope()==="part"?`${e}.brep.json`:`${e}.${t.element.kind}-${t.element.id}.brep.json`}async _copy(){if(!this.doc)return;let t=this.el.querySelector("[data-act=copy]");try{await navigator.clipboard.writeText(this.text),t.textContent="Copied"}catch{t.textContent="Copy failed"}setTimeout(()=>{t.textContent="Copy"},1400)}_download(){if(!this.doc)return;let t=URL.createObjectURL(new Blob([this.text],{type:"application/json"})),e=document.createElement("a");e.href=t,e.download=this._fileName(),document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}};var _a={left:300,right:360},mc=220,jh={left:"trimline.panel",right:"trimline.rpanel"},Jh={left:"trimline.lw",right:"trimline.rw"},va={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}}},xa=class extends EventTarget{constructor(t){super(),this.ws=t,this.width={left:_a.left,right:_a.right};for(let e of["left","right"]){for(let s of this._buttons(e))s.addEventListener("click",()=>this.toggle(e,s.dataset.panel));let n=+va.get(Jh[e]);n&&(this.width[e]=n),this._applyWidth(e),this._splitter(e)}window.addEventListener("resize",()=>{this._applyWidth("left"),this._applyWidth("right")})}restore(){for(let t of["left","right"]){let e=va.get(jh[t]),n=this._buttons(t).map(r=>r.dataset.panel),s=this._buttons(t).find(r=>r.getAttribute("aria-pressed")==="true")?.dataset.panel||null;this.show(t,e===""?null:n.includes(e)?e:s,!1)}}current(t){return document.body.classList.contains(t+"-collapsed")?null:this._open?.[t]??null}toggle(t,e){this.show(t,this.current(t)===e?null:e)}show(t,e,n=!0){this._open=this._open||{},this._open[t]=e,document.body.classList.toggle(t+"-collapsed",!e);for(let s of this._buttons(t))s.setAttribute("aria-pressed",String(s.dataset.panel===e));for(let s of this.ws.querySelectorAll(`.panel.${t} .pane`))s.hidden=s.dataset.pane!==e;n&&va.set(jh[t],e||""),this.dispatchEvent(new CustomEvent("change",{detail:{side:t,name:e}}))}_buttons(t){return[...this.ws.querySelectorAll(`.activitybar.${t} .act[data-panel]`)]}_maxWidth(){return Math.max(mc,Math.min(900,this.ws.clientWidth*.6))}_applyWidth(t){let e=Math.round(Math.max(mc,Math.min(this._maxWidth(),this.width[t])));this.ws.style.setProperty(t==="left"?"--lw":"--rw",e+"px");let n=this.ws.querySelector(`.splitter[data-side=${t}]`);return n&&(n.setAttribute("aria-valuenow",String(e)),n.setAttribute("aria-valuemin",String(mc)),n.setAttribute("aria-valuemax",String(Math.round(this._maxWidth())))),e}_setWidth(t,e,n){this.width[t]=e;let s=this._applyWidth(t);n&&va.set(Jh[t],String(s)),this.dispatchEvent(new CustomEvent("resize",{detail:{side:t,width:s}}))}_splitter(t){let e=this.ws.querySelector(`.splitter[data-side=${t}]`);if(!e)return;let n=t==="left"?1:-1,s=null;e.addEventListener("pointerdown",a=>{a.button===0&&(a.preventDefault(),e.setPointerCapture(a.pointerId),s={x:a.clientX,w:this._applyWidth(t)},document.body.classList.add("resizing"))}),e.addEventListener("pointermove",a=>{s&&this._setWidth(t,s.w+n*(a.clientX-s.x),!1)});let r=()=>{s&&(s=null,document.body.classList.remove("resizing"),this._setWidth(t,this.width[t],!0))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("dblclick",()=>this._setWidth(t,_a[t],!0)),e.addEventListener("keydown",a=>{let o=a.shiftKey?64:16,c=a.key==="ArrowRight"?o:a.key==="ArrowLeft"?-o:0;c?(a.preventDefault(),this._setWidth(t,this._applyWidth(t)+n*c,!0)):(a.key==="Home"||a.key==="Enter")&&(a.preventDefault(),this._setWidth(t,_a[t],!0))})}};var u0="trimline-library";var os=null;function Fs(){return typeof indexedDB<"u"}function gc(i){return new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)})}function Qh(i){return new Promise((t,e)=>{i.oncomplete=()=>t(),i.onerror=()=>e(i.error),i.onabort=()=>e(i.error||new Error("transaction aborted"))})}function ya(){return os||(os=new Promise((i,t)=>{if(!Fs()){t(new Error("IndexedDB is not available"));return}let e=indexedDB.open(u0,1);e.onupgradeneeded=()=>{let n=e.result;n.objectStoreNames.contains("models")||n.createObjectStore("models",{keyPath:"id"}).createIndex("fingerprint","fingerprint"),n.objectStoreNames.contains("assemblies")||n.createObjectStore("assemblies",{keyPath:"modelId"}),n.objectStoreNames.contains("instances")||n.createObjectStore("instances",{keyPath:["modelId","index"]}),n.objectStoreNames.contains("parts")||n.createObjectStore("parts",{keyPath:["modelId","index"]})},e.onsuccess=()=>{let n=e.result;n.onversionchange=()=>{n.close(),os=null},i(n)},e.onerror=()=>t(e.error),e.onblocked=()=>t(new Error("library database is blocked by another tab"))}),os.catch(()=>{os=null})),os}var Kh=i=>IDBKeyRange.bound([i,0],[i,Number.MAX_SAFE_INTEGER]);async function zs(){let i=await ya();return(await gc(i.transaction("models").objectStore("models").getAll())).sort((e,n)=>(n.openedAt||0)-(e.openedAt||0))}async function _c(i){let t=await ya();return gc(t.transaction("models").objectStore("models").get(i))}async function vc(i,t){let n=(await ya()).transaction("models","readwrite"),s=n.objectStore("models"),r=await gc(s.get(i));return r&&s.put(Object.assign(r,t)),await Qh(n),r||null}async function Bs(i){let e=(await ya()).transaction(["models","assemblies","instances","parts"],"readwrite");e.objectStore("models").delete(i),e.objectStore("assemblies").delete(i),e.objectStore("instances").delete(Kh(i)),e.objectStore("parts").delete(Kh(i)),await Qh(e)}async function tu(i=null,t=0){let e=Date.now();for(let n of await zs())!n.complete&&n.id!==i&&e-(n.createdAt||0)>=t&&await Bs(n.id)}async function eu(){try{if(navigator.storage&&navigator.storage.estimate)return await navigator.storage.estimate()}catch{}return null}var yi=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),iu="trimline.persist";function Ma(i){return i?i>=1e9?(i/1e9).toFixed(2)+" GB":i>=1e6?(i/1e6).toFixed(1)+" MB":i>=1e3?(i/1e3).toFixed(0)+" kB":i+" B":"0 B"}function d0(i){if(!i)return"";let t=new Date(i),e=new Date;return t.toDateString()===e.toDateString()?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):t.toLocaleDateString([],{month:"short",day:"numeric",year:t.getFullYear()===e.getFullYear()?void 0:"numeric"})}function f0(i){let t=(i.schema||"").toUpperCase();return i.format==="iges"||t.startsWith("IGES")?"IGES":t.includes("AP242")||t.includes("MANAGED_MODEL_BASED")?"AP242":t.includes("AUTOMOTIVE_DESIGN")?"AP214":t.includes("CONFIG_CONTROL_DESIGN")||t.includes("AP203")?"AP203":"STEP"}var su='<svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true"><path d="M8 34V15l16-6 16 6v19l-16 6Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 15l16 6 16-6M24 21v19" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',ba=class extends EventTarget{constructor(t){super(),this.el=t,this.current=null,this.storing=new Set,this.urls=new Map,this.records=[],this.available=Fs(),t.addEventListener("click",e=>this._onClick(e)),t.addEventListener("change",e=>{if(e.target.matches("[data-persist]")){try{localStorage.setItem(iu,e.target.checked?"1":"0")}catch{}this.emit("persist",{on:e.target.checked})}})}emit(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e}))}get persist(){if(!this.available)return!1;try{return localStorage.getItem(iu)!=="0"}catch{return!0}}setCurrent(t){this.current=t,this._markCurrent()}setStoring(t,e){e?this.storing.add(t):this.storing.delete(t),this.refresh()}async refresh(){if(!this.available){this.render([],null);return}let t=[];try{t=await zs()}catch(n){this.error=n.message}let e=await eu();this.records=t,this.render(t,e)}_thumb(t){if(!t.snapshot)return null;let e=this.urls.get(t.id);if(e&&e.blob===t.snapshot)return e.url;e&&URL.revokeObjectURL(e.url);let n=URL.createObjectURL(t.snapshot);return this.urls.set(t.id,{blob:t.snapshot,url:n}),n}render(t,e){let n=t.reduce((a,o)=>a+(o.blobBytes||0),0),s=`
      <div class="libhead">
        <div class="libtitle"><h2>Library</h2><span class="mono dim">${t.length||""}</span></div>
        <label class="toggle small" title="Store every model you open from a file as serialized model data, so it reopens without parsing">
          <input type="checkbox" data-persist ${this.persist?"checked":""} ${this.available?"":"disabled"}><span>Keep uploads</span>
        </label>
      </div>
      <div class="libsum dim">${this.available?`${Ma(n)} of model data${e&&e.quota?` \xB7 browser quota ${Ma(e.quota)}`:""}`:"Storage is not available in this browser context."}</div>`;if(!t.length){this.el.innerHTML=s+`<div class="libempty">${su}<p>Models you open from a file are kept here as serialized assembly, instance and part data, with a snapshot. Reopening one skips parsing the file.</p></div>`;return}let r=t.map(a=>{let o=this._thumb(a),c=this.storing.has(a.id)||!a.complete,l=!a.complete&&!this.storing.has(a.id);return`
      <article class="libcard${a.id===this.current?" current":""}${l?" stale":""}" data-id="${yi(a.id)}">
        <button class="thumb" data-act="open" ${a.complete?"":"disabled"} aria-label="Open ${yi(a.name)}">
          ${o?`<img src="${o}" alt="" decoding="async">`:`<span class="ph">${su}<i>${c?"storing\u2026":"snapshot pending"}</i></span>`}
        </button>
        <div class="libmeta">
          <div class="libname"><b title="${yi(a.name)}">${yi(a.name)}</b><span class="pill">${yi(f0(a))}</span></div>
          <div class="dim libline">${yi(a.system||"")}</div>
          <div class="libstats mono">
            <span title="original file">${Ma(a.size)}</span>
            <span title="parts \xB7 instances">${a.parts} parts \xB7 ${a.instances} inst.</span>
            <span title="stored model data (assembly, instance and part blobs)">${Ma(a.blobBytes)} stored</span>
            ${a.triangles?`<span title="triangles">${a.triangles.toLocaleString()} tris</span>`:""}
          </div>
          <div class="libfoot">
            <time class="dim" datetime="${new Date(a.openedAt||a.createdAt).toISOString()}">${d0(a.openedAt||a.createdAt)}</time>
            ${l?'<i class="chip bad">interrupted</i>':c?'<i class="chip wait">storing\u2026</i>':a.id===this.current?'<i class="chip ok">in view</i>':""}
            <span class="libacts">
              <button class="lbtn" data-act="open" ${a.complete?"":"disabled"}>Open</button>
              <button class="lbtn ghost" data-act="delete" aria-label="Delete ${yi(a.name)}">Delete</button>
            </span>
          </div>
        </div>
      </article>`}).join("");this.el.innerHTML=s+`<div class="liblist">${r}</div>`}_markCurrent(){this.el.querySelectorAll(".libcard").forEach(t=>t.classList.toggle("current",t.dataset.id===this.current))}async _onClick(t){let e=t.target.closest("[data-act]");if(!e)return;let n=e.closest(".libcard")?.dataset.id;if(n){if(e.dataset.act==="open")this.emit("open",{id:n,record:this.records.find(s=>s.id===n)});else if(e.dataset.act==="delete"){if(e.dataset.confirm!=="1"){e.dataset.confirm="1",e.textContent="Confirm",setTimeout(()=>{e.isConnected&&(e.dataset.confirm="",e.textContent="Delete")},3e3);return}await Bs(n);let s=this.urls.get(n);s&&(URL.revokeObjectURL(s.url),this.urls.delete(n)),this.emit("delete",{id:n}),this.refresh()}}}};var ru=(...i)=>{typeof window.gtag=="function"&&window.gtag(...i)},xc=i=>String(i??"").slice(0,100),Mi=i=>Math.round(i||0),au=i=>Math.round((i||0)/1024),Sa=class{start(t,e,n){this.cur={source:t,quality:e,size:n,t0:performance.now(),modelMs:0,firstMeshMs:0,jobErrors:0,sent:!1}}model(t){let e=this.cur;e&&(e.model=t,e.modelMs=performance.now()-e.t0)}mesh(){let t=this.cur;t&&!t.firstMeshMs&&(t.firstMeshMs=performance.now()-t.t0)}jobError(){this.cur&&this.cur.jobErrors++}done(t,e,n,s){let r=this.cur;if(!r||r.sent||!r.model)return;r.sent=!0;let a=r.model,o={faces:0,triangles:0,repaired:0,fallback:0,failed:0,ms:0};for(let c of e)for(let l in o)o[l]+=c[l]||0;ru("event","model_load",{source:r.source,file_format:a.format,file_size_kb:au(a.fileSize),schema:xc((a.header.schema||"").replace(/\s*\{.*\}\s*$/,"")),cad_system:xc(a.header.originatingSystem||a.header.preprocessor),quality:r.quality,entities:a.entityCount||0,nodes:a.nodeCount||0,parts:a.parts.length,faces:o.faces,triangles:o.triangles,drawn_triangles:n.drawn,faces_repaired:o.repaired,faces_fallback:o.fallback,faces_failed:o.failed,job_errors:r.jobErrors,warnings:(a.warnings||[]).length,workers:s,index_ms:Mi(a.timings.indexMs),structure_ms:Mi(a.timings.structureMs),model_ms:Mi(r.modelMs),first_mesh_ms:Mi(r.firstMeshMs),total_ms:Mi(t.ms),tess_cpu_ms:Mi(o.ms)})}error(t){let e=this.cur;!e||e.sent||(e.sent=!0,ru("event","model_load_error",{source:e.source,file_format:e.model?e.model.format:"",file_size_kb:au(e.model?e.model.fileSize:e.size),phase:e.model?"tessellate":"read",error:xc(t),elapsed_ms:Mi(performance.now()-e.t0)}))}};var Nt=i=>document.querySelector(i),Ta=[{file:"samples/rotor-assembly.step",name:"Rotor assembly",note:"SolidWorks \xB7 93 occurrences"},{file:"samples/truck-chassis-assembly.step",name:"Truck chassis",note:"SolidWorks \xB7 15 occurrences"},{file:"samples/periodic.step",name:"Dome with 8 holes",note:"Onshape \xB7 periodic B-spline + pole"},{file:"samples/boltsbody.step",name:"Threaded bolt",note:"Onshape \xB7 helical periodic faces"},{file:"samples/beam-engine.igs",name:"Beam engine (IGES)",note:"Inventor IGES \xB7 80 parts, 139 instances"}],hs={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}}},pt=new ea(Nt("#view")),Pe=new na,Ne=new ia(Nt("#tree")),dn=new sa(Nt("#parts")),ke=new da(Nt("#inspector")),Ie=new ba(Nt("#library")),Aa=new xa(Nt(".workspace")),us=new Sa,ce=null,wc="",ti=new Map,bc=!0,Tc=null,de=null,he=null,Be=null,cu=window.matchMedia("(prefers-color-scheme: dark)"),p0=()=>document.documentElement.dataset.theme?document.documentElement.dataset.theme==="dark":cu.matches,Ac=()=>{pt.setTheme(p0()),ke.plot?.request()};cu.addEventListener("change",Ac);new MutationObserver(Ac).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});Ac();var $e={set(i,t=null){Nt("#status-text").textContent=i;let e=Nt("#progress");t==null?e.hidden=!0:(e.hidden=!1,e.style.setProperty("--p",Math.max(0,Math.min(1,t)).toFixed(3)))},counts(){let i=pt.stats();Nt("#status-counts").textContent=ce?`${ce.parts.length} parts \xB7 ${ce.nodeCount} nodes \xB7 ${rs(i.tris)} tris (${rs(i.drawn)} drawn)`:""}},Kn=new Map;function cs(i){let t=Kn.get(i);for(t?Kn.delete(i):(t=Pe.partJson(i).then(e=>{if(!e)return null;let n=JSON.parse(e);return{doc:n,index:new ca(n)}}),t.catch(()=>Kn.delete(i))),Kn.set(i,t);Kn.size>3;)Kn.delete(Kn.keys().next().value);return t}var Vs=new ga(Nt("#brep-data"),async(i,t)=>{if(i==="part")return(await cs(t.partId))?.doc||null;let e=t.element;if(e.kind==="face"){let r=hu(e.pick),[a,o]=await Promise.all([r.faceDocP,r.debugP.catch(()=>null)]);return a&&o&&(o.source||o.surfaceSource)?{...a,source:{face:o.source,surface:o.surfaceSource}}:a}let n=await cs(t.partId);if(!n)return null;let s=uu(e.pick,n.index);return e.kind==="edge"?n.index.edgeDoc(s):n.index.vertexDoc(s)});function Ws(i,t,e={}){v0(),m0(),wc=t,e.sample||(Nt("#sample").value=""),ce=null,ti=new Map,bc=!0,Tc=null,he=null,Be=null,Kn.clear(),Vs.setContext(null),pt.clear(),Nt("#tree").textContent="",Nt("#parts").textContent="",Nt("#file-name").textContent=t,Nt("#schema").hidden=!0,Nt("#drop-hint").hidden=!0,ke.el.innerHTML='<div class="empty-note">Reading file\u2026</div>',$e.set(e.storedId?`Restoring ${t} from the library`:`Reading ${t}`,0),de=e.storedId?{id:e.storedId,stored:!0,complete:!0}:null,Ie.setCurrent(e.storedId||null),us.start(e.storedId?"library":e.sample?"sample":"upload",+Nt("#quality").value,i?i.size:0),e.storedId?Pe.openStored(e.storedId,{quality:+Nt("#quality").value}):Pe.open(i,{quality:+Nt("#quality").value,name:t,persist:!!e.persist&&Ie.persist})}function m0(){if(de&&!de.stored&&de.id&&!de.complete){let i=de.id;setTimeout(()=>Bs(i).then(()=>Ie.refresh()).catch(()=>{}),300)}}Pe.addEventListener("progress",i=>{let t=i.detail;if(t.phase==="read")$e.set(`Indexing ${wc} \u2014 ${Jn(t.done)} of ${Jn(t.total)}`,t.done/t.total*.25);else if(t.phase==="structure")$e.set("Reading product structure, placements, units and colors",.27);else if(t.phase==="tessellate"){let e=t.total?t.done/t.total:0;$e.set(`Tessellating \u2014 ${t.done} of ${t.total}${t.final?"":"+"} jobs on ${Pe.pool.length} workers`,.3+.7*e),$e.counts()}});Pe.addEventListener("model",i=>{ce=i.detail,us.model(ce),ce.modelId&&(de={id:ce.modelId,stored:!!ce.stored,complete:!!ce.stored,snapshot:!1},Ie.setCurrent(ce.modelId),ce.stored||Ie.setStoring(ce.modelId,!0)),pt.setModel(ce),Ne.setModel(ce,ce.parts),dn.setParts(ce.parts,n=>{let s=pt.parts.get(n);return s?"#"+s.color.toString(16).padStart(6,"0"):null});let t=`${ce.header.originatingSystem} ${ce.header.preprocessor}`.toLowerCase(),e=/solidworks|onshape|inventor|autodesk|fusion/.test(t)?"y":"z";Nt("#up-axis").value=e,pt.upAxis=e,Nt("#schema").hidden=!1,Nt("#schema").textContent=fc(ce.header.schema),Nt("#schema").title=ce.header.schema,Nt("#count-tree").textContent=ce.nodeCount,Nt("#count-parts").textContent=ce.parts.length,ke.showFile({name:wc,model:ce}),$e.counts(),ce.parts.length||$e.set("No B-rep or tessellated geometry found in this file",null)});Pe.addEventListener("mesh",i=>{let t=i.detail;pt.addChunk(t),us.mesh();let e=ti.get(t.partId)||{faces:0,triangles:0,ok:0,repaired:0,fallback:0,empty:0,failed:0,ms:0,tolerance:0,surfaces:{},chunks:[]};for(let n of["faces","triangles","ok","repaired","fallback","empty","failed","ms"])e[n]+=t.stats[n]||0;e.tolerance=Math.max(e.tolerance,t.stats.tolerance||0);for(let[n,s]of Object.entries(t.stats.surfaces||{}))e.surfaces[n]=(e.surfaces[n]||0)+s;ti.set(t.partId,e),dn.addStats(t.partId,t.stats),bc&&(bc=!1,pt.view("iso")),he&&Cc()===t.partId&&lu()});Pe.addEventListener("done",i=>{Tc=i.detail,pt.fit();let t=pt.stats();$e.set(`Done in ${(i.detail.ms/1e3).toFixed(2)} s`,null),$e.counts(),he||ke.renderFile({tessMs:i.detail.ms,workers:Pe.pool.length,tris:t.tris,drawn:t.drawn}),ke.file.extra={tessMs:i.detail.ms,workers:Pe.pool.length,tris:t.tris,drawn:t.drawn},de&&de.id&&_0(de,t),us.done(i.detail,ti.values(),t,Pe.pool.length)});var g0=(i,t=2500)=>typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:t}):setTimeout(()=>i({didTimeout:!0,timeRemaining:()=>0}),200);function _0(i,t){let e=[...ti.values()].reduce((n,s)=>n+s.faces,0);g0(async()=>{if(!(de!==i||i.snapshot))try{let n=await _c(i.id);if(!n)return;let s={faces:e,triangles:t.tris};if(!n.snapshot){let r=await pt.snapshot({width:320,height:220});if(de!==i)return;r&&(s.snapshot=r,s.snapshotAt=Date.now())}await vc(i.id,s),i.snapshot=!0,Ie.refresh()}catch(n){console.warn("library snapshot",n)}})}function v0(){let i=de;if(!i||!i.id||i.snapshot||!Tc)return;i.snapshot=!0;let t=[...ti.values()].reduce((s,r)=>s+r.faces,0),e=pt.stats().tris,n=pt.snapshot({width:320,height:220});(async()=>{try{let s=await n,r=await _c(i.id);if(!r)return;let a={faces:t,triangles:e};!r.snapshot&&s&&(a.snapshot=s,a.snapshotAt=Date.now()),await vc(i.id,a),Ie.refresh()}catch(s){console.warn("library snapshot",s)}})()}Pe.addEventListener("library",i=>{let{modelId:t,state:e}=i.detail;e==="complete"?(de&&de.id===t&&(de.complete=!0),Ie.setStoring(t,!1)):(e==="opened"&&de&&(de.complete=!0),Ie.refresh()),Pc()});Pe.addEventListener("libraryError",i=>{console.warn("library",i.detail.message),de&&Ie.setStoring(de.id,!1),$e.set(`Could not keep the model in the library: ${i.detail.message}`,null)});Pe.addEventListener("error",i=>{$e.set("Error: "+i.detail.message,null),us.error(i.detail.message)});Pe.addEventListener("jobError",i=>{console.warn("job failed",i.detail),us.jobError()});function Ca(i){return pt.parts.get(i)?.instances||[]}function Cc(){return he?he.kind==="part"?he.partId:pt.nodes.get(he.key)?.partId||null:null}function Gs(i){if(!i){pt.setHighlight("hover",null),Ne.setHovered([]),dn.setHovered(null);return}if(i.key){let t=pt.nodes.get(i.key);pt.setHighlight("hover",{nodeKeys:[i.key]}),Ne.setHovered([i.key]),dn.setHovered(t&&t.partId)}else i.partId&&(pt.setHighlight("hover",{partId:i.partId}),Ne.setHovered(Ca(i.partId)),dn.setHovered(i.partId))}function bi(i,t=null){if(he=i,Be=i&&t&&t.kind?t:null,pt.setElementHighlight("selection",Be),!i){pt.setHighlight("selection",null),Ne.setSelected([]),dn.setSelected(null),ke.renderFile(ke.file?.extra||{}),Vs.setContext(null);return}if(i.kind==="node"){let n=pt.nodes.get(i.key);pt.setHighlight("selection",{nodeKeys:[i.key]}),Ne.setSelected([i.key]),Ne.reveal(i.key),dn.setSelected(n&&n.partId)}else{pt.setHighlight("selection",{partId:i.partId});let n=Ca(i.partId);Ne.setSelected(n),n.length&&Ne.reveal(n[0]),dn.setSelected(i.partId)}lu();let e=Cc();Vs.setContext(e?{partId:e,partName:pt.parts.get(e)?.name||e,element:Be?{kind:Be.kind,id:Be.id,label:Be.id>0?`#${Be.id}`:"(no id)",pick:Be}:null}:null)}function lu(){if(!he)return;let i,t=Cc();if(he.kind==="node"){let e=Ne.node(he.key),n=t?pt.parts.get(t):null;i={kind:"node",title:e?e.name:he.key,sub:e&&e.instanceName&&e.instanceName.trim()&&e.instanceName!==e.name?`occurrence ${e.instanceName}`:e&&e.productId&&e.productId.trim()&&e.productId!==e.name?`product ${e.productId}`:"",path:Ne.pathOf(he.key),partStats:n?ti.get(n.id):null,instances:n?n.instances.length:null,partId:t}}else{let e=pt.parts.get(he.partId);i={kind:"part",title:e?e.name:he.partId,sub:"",path:[],partStats:ti.get(he.partId),instances:e?e.instances.length:0,partId:t}}if(ke.showSelection(i,Be),Be&&(x0(Be),du()),t){let e=he;cs(t).then(n=>{he===e&&ke.setPartSummary(n&&n.doc)}).catch(()=>{he===e&&ke.setPartSummary(null)})}}function hu(i){if(i.state)return i.state;let t=i.state={};return i.kind==="face"?(t.debugP=Pe.faceDebug(i.partId,i.id,i.chunk.res.stats.tolerance),t.faceDocP=Pe.faceJson(i.partId,i.id).then(e=>e?JSON.parse(e):null)):t.docP=cs(i.partId),t}function x0(i){if(i.state)return;let t=hu(i),e=()=>{Be===i&&du()};i.kind==="face"?(t.debugP.then(n=>{t.debug=n},()=>{t.debug=null}).then(e),t.faceDocP.then(n=>{t.faceDoc=n},()=>{t.faceDoc=null}).then(e)):t.docP.then(n=>{let s=n?uu(i,n.index):null;t.info=s?i.kind==="edge"?n.index.edge(s):n.index.vertex(s):null},()=>{t.info=null}).then(e)}function uu(i,t){let e=i.chunk.res;if(i.kind==="vertex"){let a=e.vertices.positions,o=i.index*3;return t.vertexAt([a[o],a[o+1],a[o+2]],i.id)}let n=e.edges,s=e.edgeInfo.segStart[i.index]*6,r=(e.edgeInfo.segStart[i.index]+e.edgeInfo.segCount[i.index])*6-3;return t.edgeAt(i.id,[n[s],n[s+1],n[s+2]],[n[r],n[r+1],n[r+2]])}function y0(i,t,e,n){if(t==="face")return fu(i,"face",e.id);let s=pt.nodes.get(i),r=s&&pt.parts.get(s.partId);if(!r)return null;let a=(f,d,u)=>(f[0]-d[u])**2+(f[1]-d[u+1])**2+(f[2]-d[u+2])**2,o=t==="vertex"?n.placedPoints(e):n.placedEnds(e),c=null,l=1/0;for(let f of r.chunks){let d=f.res;if(t==="vertex"){for(let u=0;u<d.vertices.ids.length;u++)if(!(e.id>0&&d.vertices.ids[u]!==e.id))for(let g of o){let _=a(g,d.vertices.positions,u*3);_<l&&(l=_,c={chunk:f,i:u})}}else for(let u=0;u<d.edgeInfo.ids.length;u++){if(d.edgeInfo.ids[u]!==e.id)continue;let g=d.edgeInfo.segStart[u]*6,_=(d.edgeInfo.segStart[u]+d.edgeInfo.segCount[u])*6-3,m=o.length?1/0:0;for(let[p,E]of o)m=Math.min(m,a(p,d.edges,g)+a(E,d.edges,_),a(p,d.edges,_)+a(E,d.edges,g));m<l&&(l=m,c={chunk:f,i:u})}}if(!c)return null;let h=t==="vertex"?c.chunk.res.vertices.ids:c.chunk.res.edgeInfo.ids;return{nodeKey:i,partId:r.id,chunk:c.chunk,kind:t,index:c.i,id:h[c.i],faceIndex:-1,faceId:null}}function yc(i,t,e,n){let s=pt.nodes.get(i).world.elements;return[s[0]*t+s[4]*e+s[8]*n+s[12],s[1]*t+s[5]*e+s[9]*n+s[13],s[2]*t+s[6]*e+s[10]*n+s[14]]}function du(){let i=Be;if(!i)return;let t=i.state||{},e=i.chunk.res;if(i.kind==="face"){let n=i.chunk.faces,s=i.index;ke.showFace({id:n.ids[s],kind:n.kind[s],status:n.status[s],tris:n.triCount[s]},t.debug,t.faceDoc)}else if(i.kind==="edge"){let n=e.edgeInfo.segStart[i.index],s=e.edgeInfo.segCount[i.index],r=e.edges,a=0;for(let o=n;o<n+s;o++){let c=yc(i.nodeKey,r[o*6],r[o*6+1],r[o*6+2]),l=yc(i.nodeKey,r[o*6+3],r[o*6+4],r[o*6+5]);a+=Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2])}ke.showEdge({id:i.id,length:a},t.info)}else{let n=e.vertices.positions,s=i.index*3;ke.showVertex({id:i.id,part:[n[s],n[s+1],n[s+2]],world:yc(i.nodeKey,n[s],n[s+1],n[s+2])},t.info)}}function fu(i,t,e){let n=pt.nodes.get(i),s=n&&pt.parts.get(n.partId);if(!s)return null;for(let r of s.chunks){let o=(t==="face"?r.faces.ids:t==="edge"?r.res.edgeInfo.ids:r.res.vertices.ids).indexOf(e);if(o>=0)return{nodeKey:i,partId:s.id,chunk:r,kind:t,index:o,id:e,faceIndex:t==="face"?o:-1,faceId:t==="face"?e:null}}return null}ke.addEventListener("navigate",async i=>{let{kind:t,id:e,index:n}=i.detail,s=Be;if(!s)return;let r=await cs(s.partId).catch(()=>null);if(Be!==s)return;let a=r&&r.doc.topology[t==="face"?"faces":t==="edge"?"edges":"vertices"],o=a&&a[n],c=o?y0(s.nodeKey,t,o,r.index):fu(s.nodeKey,t,e);c?bi(he,c):$e.set(`That ${t} has no tessellated geometry in this occurrence`,null)});ke.addEventListener("openData",()=>Aa.show("right","data"));Ne.addEventListener("hover",i=>Gs(i.detail.key?{key:i.detail.key}:null));Ne.addEventListener("select",i=>bi({kind:"node",key:i.detail.key}));Ne.addEventListener("focus",i=>pt.fit([i.detail.key]));Ne.addEventListener("visibility",i=>pt.setNodeVisible(i.detail.key,i.detail.visible));dn.addEventListener("hover",i=>Gs(i.detail.partId?{partId:i.detail.partId}:null));dn.addEventListener("select",i=>bi({kind:"part",partId:i.detail.partId}));dn.addEventListener("focus",i=>pt.fit(Ca(i.detail.partId)));var ls=Nt("#view"),Qn=Nt("#tip"),ks=null,Mc=0,ou=null;ls.addEventListener("pointerdown",i=>{ks={x:i.clientX,y:i.clientY},Qn.hidden=!0});ls.addEventListener("pointerup",i=>{if(!ks)return;let t=Math.hypot(i.clientX-ks.x,i.clientY-ks.y)>4;if(ks=null,t||i.button!==0)return;let e=pt.pick(i.clientX,i.clientY);if(!e){bi(null);return}bi({kind:"node",key:e.nodeKey},e)});ls.addEventListener("dblclick",i=>{if(pt.navigation==="arcball")return;let t=pt.pick(i.clientX,i.clientY,"face");pt.fit(t?[t.nodeKey]:null)});var M0={face:"face",edge:"edge",vertex:"vertex"};ls.addEventListener("pointermove",i=>{i.buttons||(ou=i,!Mc&&(Mc=requestAnimationFrame(()=>{Mc=0;let t=ou,e=pt.pick(t.clientX,t.clientY);if(pt.setElementHighlight("hover",e&&e.kind?e:null),!e){Gs(null),Qn.hidden=!0;return}Gs({key:e.nodeKey});let n=Ne.node(e.nodeKey);Qn.hidden=!1,Qn.innerHTML="";let s=document.createElement("b");s.textContent=n?n.name:e.partId;let r=document.createElement("span");e.kind==="face"?r.textContent=`face #${e.id} \xB7 ${is[e.chunk.faces.kind[e.index]]||""}`:e.kind&&(r.textContent=`${M0[e.kind]} #${e.id}`),Qn.append(s,r);let a=ls.getBoundingClientRect();Qn.style.left=Math.min(t.clientX-a.left+14,a.width-220)+"px",Qn.style.top=t.clientY-a.top+16+"px"})))});ls.addEventListener("pointerleave",()=>{Gs(null),pt.setElementHighlight("hover",null),Qn.hidden=!0});window.addEventListener("keydown",i=>{i.target.closest("input,select,textarea,canvas.uv")||(i.key==="Escape"&&bi(null),(i.key==="f"||i.key==="F")&&pt.fit(he?.kind==="node"?[he.key]:he?.kind==="part"?Ca(he.partId):null))});function pu(i){pt.setPickMode(i),pt.setElementHighlight("hover",null);let t=document.querySelector(`[name=pickmode][value=${pt.pickMode}]`);t&&(t.checked=!0),hs.set("trimline.pick",pt.pickMode)}document.querySelectorAll("[name=pickmode]").forEach(i=>i.addEventListener("change",()=>pu(i.value)));{let i=hs.get("trimline.pick");cc.includes(i)&&pu(i)}Nt("#open-btn").addEventListener("click",()=>Nt("#file-input").click());Nt("#file-input").addEventListener("change",i=>{let t=i.target.files[0];t&&Ws(t,t.name,{persist:!0}),i.target.value=""});var Hs=Nt("#sample");for(let i of Ta){let t=document.createElement("option");t.value=i.file,t.textContent=`${i.name} \u2014 ${i.note}`,Hs.appendChild(t)}Hs.addEventListener("change",()=>{Hs.value&&mu(Hs.value)});async function mu(i){let t=Ta.find(e=>e.file===i);$e.set(`Downloading ${t?t.name:i}`,0);try{let e=await fetch(i);if(!e.ok)throw new Error(`${e.status} ${e.statusText}`);let n=await e.blob();Ws(n,i.split("/").pop().replace(/\.txt$/,""),{sample:!0})}catch(e){$e.set(`Could not load sample (${e.message}). Open a STEP or IGES file instead.`,null),Nt("#drop-hint").hidden=!1}}Nt("#quality").addEventListener("change",()=>{$e.set("Quality applies to the next file you open",null)});document.querySelectorAll("[name=colormode]").forEach(i=>i.addEventListener("change",()=>{pt.setColorMode(i.value),b0()}));Nt("#edges").addEventListener("change",i=>pt.setEdges(i.target.checked));document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>pt.view(i.dataset.view)));Nt("#fit").addEventListener("click",()=>pt.fit());Nt("#up-axis").addEventListener("change",i=>pt.setUpAxis(i.target.value));Nt("#nav-mode").addEventListener("change",i=>{pt.setNavigation(i.target.value),hs.set("trimline.nav",i.target.value)});{let i=hs.get("trimline.nav");i&&i!==pt.navigation&&(Nt("#nav-mode").value=i,pt.setNavigation(i))}var Sc=Nt("#section-axis"),Ec=Nt("#section-pos"),Rc=()=>{pt.setSection(Sc.value||null,+Ec.value/1e3),Ec.disabled=!Sc.value};Sc.addEventListener("change",Rc);Ec.addEventListener("input",Rc);Rc();Aa.addEventListener("change",i=>{let{side:t,name:e}=i.detail;t==="left"&&e==="library"&&Ie.refresh(),t==="right"&&Vs.setVisible(e==="data"),pt.requestRender()});Aa.restore();Ie.addEventListener("open",i=>{let t=i.detail.record;Ws(null,t?t.name:"model",{storedId:i.detail.id})});Ie.addEventListener("delete",i=>{de&&de.id===i.detail.id&&(de=null,Ie.setCurrent(null)),Pc()});async function Pc(){let i=Nt("#lib-count");try{let t=(await zs()).length;i.textContent=t,i.hidden=!t}catch{i.hidden=!0}}Fs()?tu(null,12e4).catch(()=>{}).finally(()=>{Pc(),Ie.refresh()}):Ie.refresh();document.querySelectorAll(".tabs [role=tab]").forEach(i=>i.addEventListener("click",()=>{document.querySelectorAll(".tabs [role=tab]").forEach(t=>t.setAttribute("aria-selected",String(t===i))),Nt("#tree").hidden=i.dataset.tab!=="tree",Nt("#parts").hidden=i.dataset.tab!=="parts",hs.set("trimline.tab",i.dataset.tab)}));{let i=hs.get("trimline.tab");i&&document.querySelector(`.tabs [data-tab=${i}]`)?.click()}function b0(){let i=Nt("#legend"),t=pt.colorMode;if(t!=="surface"&&t!=="status"){i.hidden=!0;return}i.hidden=!1;let e=t==="surface"?is.filter(n=>n!=="other").map(n=>[n,xi[n]]):ss.map(n=>[n,oc[n]]);i.innerHTML=e.map(([n,s])=>`<span><i style="background:#${s.toString(16).padStart(6,"0")}"></i>${n}</span>`).join("")}var Ea=0;window.addEventListener("dragenter",i=>{i.preventDefault(),Ea++,document.body.classList.add("dragging")});window.addEventListener("dragleave",()=>{--Ea<=0&&(Ea=0,document.body.classList.remove("dragging"))});window.addEventListener("dragover",i=>i.preventDefault());window.addEventListener("drop",i=>{i.preventDefault(),Ea=0,document.body.classList.remove("dragging");let t=i.dataTransfer.files[0];t&&Ws(t,t.name,{persist:!0})});var wa=new URLSearchParams(location.search).get("sample");mu(wa?`samples/${wa}`:Ta[0].file);Hs.value=wa?`samples/${wa}`:Ta[0].file;window.__viewer={scene:pt,loader:Pe,tree:Ne,parts:dn,inspector:ke,library:Ie,panels:Aa,dataPanel:Vs,select:bi,open:Ws,partDoc:cs};
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
