(self.webpackChunkpolar_area_chart_plugin=self.webpackChunkpolar_area_chart_plugin||[]).push([[7063,741],{77063:(e,t,r)=>{function s(e,t){return e.workspace(t.workspace).execution().forDefinition(t)}function n(e){return!!e&&!!e.values}function o(e){return!!e&&!!e.primaryValues}function a(e){return n(e)||o(e)}r.r(t),r.d(t,{AnalyticalBackendError:()=>u,AnalyticalBackendErrorTypes:()=>i,ContractExpired:()=>O,DataTooLargeError:()=>T,LimitReached:()=>y,NoDataError:()=>E,NotAuthenticated:()=>_,NotImplemented:()=>N,NotSupported:()=>A,ProtectedDataError:()=>l,TimeoutError:()=>p,UnexpectedError:()=>D,UnexpectedResponseError:()=>d,isAnalyticalBackendError:()=>C,isContractExpired:()=>x,isDashboardLayoutEmpty:()=>L,isDataTooLargeError:()=>P,isElementsQueryOptionsElementsByPrimaryDisplayFormValue:()=>o,isElementsQueryOptionsElementsByValue:()=>n,isLimitReached:()=>w,isNoDataError:()=>h,isNotAuthenticated:()=>I,isNotImplemented:()=>m,isNotSupported:()=>g,isProtectedDataError:()=>R,isUnexpectedError:()=>b,isUnexpectedResponseError:()=>f,isValueBasedElementsQueryOptionsElements:()=>a,layoutWidgets:()=>X,layoutWidgetsWithPaths:()=>H,prepareExecution:()=>s,walkLayout:()=>M});var c=r(41609);const i={NO_DATA:"ND",DATA_TOO_LARGE:"DTL",PROTECTED_DATA:"PD",UNEXPECTED_HTTP:"UH",UNEXPECTED:"UE",NOT_SUPPORTED:"NS",NOT_IMPLEMENTED:"NI!",NOT_AUTHENTICATED:"NAuth",LIMIT_REACHED:"LR",CONTRACT_EXPIRED:"CE",TIMEOUT_ERROR:"TE"};class u extends Error{abeType;cause;constructor(e,t,r){super(e),this.abeType=t,this.cause=r,Object.setPrototypeOf(this,new.target.prototype)}}class E extends u{dataView;constructor(e,t,r){super(e,i.NO_DATA,r),this.dataView=t}}class T extends u{constructor(e,t){super(e,i.DATA_TOO_LARGE,t)}}class p extends u{constructor(e,t){super(e,i.TIMEOUT_ERROR,t)}}class l extends u{constructor(e,t){super(e,i.PROTECTED_DATA,t)}}class d extends u{httpStatus;responseBody;traceId;constructor(e,t,r,s,n){super(e,i.UNEXPECTED_HTTP,n),this.httpStatus=t,this.responseBody=r,this.traceId=s}}class D extends u{constructor(e,t){super(e,i.UNEXPECTED,t)}}class A extends u{constructor(e){super(e,i.NOT_SUPPORTED)}}class N extends u{constructor(e){super(e,i.NOT_IMPLEMENTED)}}class _ extends u{authenticationFlow;reason;constructor(e,t,r){super(e,i.NOT_AUTHENTICATED,t),this.reason=r}}class y extends u{constructor(e,t){super(e,i.LIMIT_REACHED,t)}}class O extends u{constructor(e,t){super(e,i.CONTRACT_EXPIRED,t)}}function C(e){return!c(e)&&void 0!==e.abeType}function h(e){return C(e)&&e.abeType===i.NO_DATA}function P(e){return C(e)&&e.abeType===i.DATA_TOO_LARGE}function R(e){return C(e)&&e.abeType===i.PROTECTED_DATA}function f(e){return C(e)&&e.abeType===i.UNEXPECTED_HTTP}function b(e){return C(e)&&e.abeType===i.UNEXPECTED}function g(e){return C(e)&&e.abeType===i.NOT_SUPPORTED}function m(e){return C(e)&&e.abeType===i.NOT_IMPLEMENTED}function I(e){return C(e)&&e.abeType===i.NOT_AUTHENTICATED}function w(e){return C(e)&&e.abeType===i.LIMIT_REACHED}function x(e){return C(e)&&e.abeType===i.CONTRACT_EXPIRED}var U=r(53244),k=r(50308);const L=e=>e.sections.every((e=>0===e.items.length));function M(e,{sectionCallback:t=k,itemCallback:r=k,widgetCallback:s=k},n=["sections"]){e.sections.forEach(((e,o)=>{const a=[...n,o];t(e,a),e.items.forEach(((e,n)=>{const o=[...a,"items",n];if(r(e,o),(0,U.isWidget)(e.widget)||(0,U.isWidgetDefinition)(e.widget)){const t=[...o,"widget"];s(e.widget,t)}else(0,U.isDashboardLayout)(e.widget)&&M(e.widget,{sectionCallback:t,itemCallback:r,widgetCallback:s},[...o,"widget","sections"])}))}))}function H(e){const t=[];return M(e,{widgetCallback:(e,r)=>t.push({widget:e,path:r})}),t}function X(e){const t=[];return M(e,{widgetCallback:e=>t.push(e)}),t}}}]);