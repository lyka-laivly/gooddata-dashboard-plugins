(self.webpackChunkgauge_chart_plugin=self.webpackChunkgauge_chart_plugin||[]).push([[7063,741],{41609:function(t,e,n){var r=n(280),o=n(64160),u=n(35694),s=n(1469),i=n(98612),c=n(44144),a=n(25726),E=n(36719),T=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(i(t)&&(s(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||E(t)||u(t)))return!t.length;var e=o(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(a(t))return!r(t).length;for(var n in t)if(T.call(t,n))return!1;return!0}},50308:function(t){t.exports=function(){}},77063:function(t,e,n){function r(t,e){return t.workspace(e.workspace).execution().forDefinition(e)}function o(t){return!!t&&!!t.values}function u(t){return!!t&&!!t.primaryValues}function s(t){return o(t)||u(t)}n.r(e),n.d(e,{AnalyticalBackendError:function(){return a},AnalyticalBackendErrorTypes:function(){return c},ContractExpired:function(){return O},DataTooLargeError:function(){return T},LimitReached:function(){return N},NoDataError:function(){return E},NotAuthenticated:function(){return A},NotImplemented:function(){return y},NotSupported:function(){return D},ProtectedDataError:function(){return f},TimeoutError:function(){return p},UnexpectedError:function(){return d},UnexpectedResponseError:function(){return l},isAnalyticalBackendError:function(){return _},isContractExpired:function(){return I},isDashboardLayoutEmpty:function(){return L},isDataTooLargeError:function(){return C},isElementsQueryOptionsElementsByPrimaryDisplayFormValue:function(){return u},isElementsQueryOptionsElementsByValue:function(){return o},isLimitReached:function(){return x},isNoDataError:function(){return h},isNotAuthenticated:function(){return w},isNotImplemented:function(){return m},isNotSupported:function(){return R},isProtectedDataError:function(){return P},isUnexpectedError:function(){return g},isUnexpectedResponseError:function(){return b},isValueBasedElementsQueryOptionsElements:function(){return s},layoutWidgets:function(){return S},layoutWidgetsWithPaths:function(){return H},prepareExecution:function(){return r},walkLayout:function(){return M}});var i=n(41609);const c={NO_DATA:"ND",DATA_TOO_LARGE:"DTL",PROTECTED_DATA:"PD",UNEXPECTED_HTTP:"UH",UNEXPECTED:"UE",NOT_SUPPORTED:"NS",NOT_IMPLEMENTED:"NI!",NOT_AUTHENTICATED:"NAuth",LIMIT_REACHED:"LR",CONTRACT_EXPIRED:"CE",TIMEOUT_ERROR:"TE"};class a extends Error{abeType;cause;constructor(t,e,n){super(t),this.abeType=e,this.cause=n,Object.setPrototypeOf(this,new.target.prototype)}}class E extends a{dataView;constructor(t,e,n){super(t,c.NO_DATA,n),this.dataView=e}}class T extends a{constructor(t,e){super(t,c.DATA_TOO_LARGE,e)}}class p extends a{constructor(t,e){super(t,c.TIMEOUT_ERROR,e)}}class f extends a{constructor(t,e){super(t,c.PROTECTED_DATA,e)}}class l extends a{httpStatus;responseBody;traceId;constructor(t,e,n,r,o){super(t,c.UNEXPECTED_HTTP,o),this.httpStatus=e,this.responseBody=n,this.traceId=r}}class d extends a{constructor(t,e){super(t,c.UNEXPECTED,e)}}class D extends a{constructor(t){super(t,c.NOT_SUPPORTED)}}class y extends a{constructor(t){super(t,c.NOT_IMPLEMENTED)}}class A extends a{authenticationFlow;reason;constructor(t,e,n){super(t,c.NOT_AUTHENTICATED,e),this.reason=n}}class N extends a{constructor(t,e){super(t,c.LIMIT_REACHED,e)}}class O extends a{constructor(t,e){super(t,c.CONTRACT_EXPIRED,e)}}function _(t){return!i(t)&&void 0!==t.abeType}function h(t){return _(t)&&t.abeType===c.NO_DATA}function C(t){return _(t)&&t.abeType===c.DATA_TOO_LARGE}function P(t){return _(t)&&t.abeType===c.PROTECTED_DATA}function b(t){return _(t)&&t.abeType===c.UNEXPECTED_HTTP}function g(t){return _(t)&&t.abeType===c.UNEXPECTED}function R(t){return _(t)&&t.abeType===c.NOT_SUPPORTED}function m(t){return _(t)&&t.abeType===c.NOT_IMPLEMENTED}function w(t){return _(t)&&t.abeType===c.NOT_AUTHENTICATED}function x(t){return _(t)&&t.abeType===c.LIMIT_REACHED}function I(t){return _(t)&&t.abeType===c.CONTRACT_EXPIRED}var U=n(53244),k=n(50308);const L=t=>t.sections.every((t=>0===t.items.length));function M(t,{sectionCallback:e=k,itemCallback:n=k,widgetCallback:r=k},o=["sections"]){t.sections.forEach(((t,u)=>{const s=[...o,u];e(t,s),t.items.forEach(((t,o)=>{const u=[...s,"items",o];if(n(t,u),(0,U.isWidget)(t.widget)||(0,U.isWidgetDefinition)(t.widget)){const e=[...u,"widget"];r(t.widget,e)}else(0,U.isDashboardLayout)(t.widget)&&M(t.widget,{sectionCallback:e,itemCallback:n,widgetCallback:r},[...u,"widget","sections"])}))}))}function H(t){const e=[];return M(t,{widgetCallback:(t,n)=>e.push({widget:t,path:n})}),e}function S(t){const e=[];return M(t,{widgetCallback:t=>e.push(t)}),e}}}]);