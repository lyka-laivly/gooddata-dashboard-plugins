(self.webpackChunkgauge_chart_plugin=self.webpackChunkgauge_chart_plugin||[]).push([[9558],{29558:function(t,e,r){r.d(e,{d:function(){return K},Z:function(){return $}});var n=r(97582),a=r(93237),o=r(74806),i=r(680),l=r(25687),s=r(16284),u=r(88222),m=r(39943);function c(t,e){return Object.keys(t).reduce((function(r,a){return r[a]=(0,n.__assign)({timeZone:e},t[a]),r}),{})}function f(t,e){return Object.keys((0,n.__assign)((0,n.__assign)({},t),e)).reduce((function(r,a){return r[a]=(0,n.__assign)((0,n.__assign)({},t[a]||{}),e[a]||{}),r}),{})}function g(t,e){if(!e)return t;var r=s.C.formats;return(0,n.__assign)((0,n.__assign)((0,n.__assign)({},r),t),{date:f(c(r.date,e),c(t.date||{},e)),time:f(c(r.time,e),c(t.time||{},e))})}var d=function(t,e,r,a,o){var i=t.locale,s=t.formats,c=t.messages,f=t.defaultLocale,d=t.defaultFormats,p=t.fallbackOnEmptyString,y=t.onError,v=t.timeZone,h=t.defaultRichTextElements;void 0===r&&(r={id:""});var _=r.id,b=r.defaultMessage;(0,l.kG)(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(_),T=c&&Object.prototype.hasOwnProperty.call(c,E)&&c[E];if(Array.isArray(T)&&1===T.length&&T[0].type===m.wD.literal)return T[0].value;if(!a&&T&&"string"==typeof T&&!h)return T.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=(0,n.__assign)((0,n.__assign)({},h),a||{}),s=g(s,v),d=g(d,v),!T){if(!1===p&&""===T)return T;if((!b||i&&i.toLowerCase()!==f.toLowerCase())&&y(new u.$6(r,i)),b)try{return e.getMessageFormat(b,f,d,o).format(a)}catch(t){return y(new u.X9('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),i,r,t)),"string"==typeof b?b:E}return E}try{return e.getMessageFormat(T,i,s,(0,n.__assign)({formatters:e},o||{})).format(a)}catch(t){y(new u.X9('Error formatting message: "'.concat(E,'", using ').concat(b?"default message":"id"," as fallback."),i,r,t))}if(b)try{return e.getMessageFormat(b,f,d,o).format(a)}catch(t){y(new u.X9('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),i,r,t))}return"string"==typeof T?T:"string"==typeof b?b:E},p=r(82644),y=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function v(t,e,r){var n=t.locale,a=t.formats,o=t.onError;void 0===r&&(r={});var i=r.format,l=i&&(0,p.TB)(a,"number",i,o)||{};return e(n,(0,p.L6)(r,y,l))}function h(t,e,r,n){void 0===n&&(n={});try{return v(t,e,n).format(r)}catch(e){t.onError(new u.Qe("Error formatting number.",t.locale,e))}return String(r)}function _(t,e,r,n){void 0===n&&(n={});try{return v(t,e,n).formatToParts(r)}catch(e){t.onError(new u.Qe("Error formatting number.",t.locale,e))}return[]}var b=r(11050),E=["numeric","style"];function T(t,e,r,n,a){void 0===a&&(a={}),n||(n="second"),Intl.RelativeTimeFormat||t.onError(new b.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',b.jK.MISSING_INTL_API));try{return function(t,e,r){var n=t.locale,a=t.formats,o=t.onError;void 0===r&&(r={});var i=r.format,l=!!i&&(0,p.TB)(a,"relative",i,o)||{};return e(n,(0,p.L6)(r,E,l))}(t,e,a).format(r,n)}catch(e){t.onError(new u.Qe("Error formatting relative time.",t.locale,e))}return String(r)}var w=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function S(t,e,r,a){var o=t.locale,i=t.formats,l=t.onError,s=t.timeZone;void 0===a&&(a={});var u=a.format,m=(0,n.__assign)((0,n.__assign)({},s&&{timeZone:s}),u&&(0,p.TB)(i,e,u,l)),c=(0,p.L6)(a,w,m);return"time"!==e||c.hour||c.minute||c.second||c.timeStyle||c.dateStyle||(c=(0,n.__assign)((0,n.__assign)({},c),{hour:"numeric",minute:"numeric"})),r(o,c)}function D(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"==typeof a?new Date(a||0):a;try{return S(t,"date",e,i).format(l)}catch(e){t.onError(new u.Qe("Error formatting date.",t.locale,e))}return String(l)}function F(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"==typeof a?new Date(a||0):a;try{return S(t,"time",e,i).format(l)}catch(e){t.onError(new u.Qe("Error formatting time.",t.locale,e))}return String(l)}function I(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=r[2],l=void 0===i?{}:i,s=t.timeZone,m=t.locale,c=t.onError,f=(0,p.L6)(l,w,s?{timeZone:s}:{});try{return e(m,f).formatRange(a,o)}catch(e){c(new u.Qe("Error formatting date time range.",t.locale,e))}return String(a)}function L(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"==typeof a?new Date(a||0):a;try{return S(t,"date",e,i).formatToParts(l)}catch(e){t.onError(new u.Qe("Error formatting date.",t.locale,e))}return[]}function j(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"==typeof a?new Date(a||0):a;try{return S(t,"time",e,i).formatToParts(l)}catch(e){t.onError(new u.Qe("Error formatting time.",t.locale,e))}return[]}var k=["type"];function P(t,e,r,n){var a=t.locale,o=t.onError;void 0===n&&(n={}),Intl.PluralRules||o(new b.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',b.jK.MISSING_INTL_API));var i=(0,p.L6)(n,k);try{return e(a,i).select(r)}catch(t){o(new u.Qe("Error formatting plural.",a,t))}return"other"}var R=["type","style"],N=Date.now();function x(t,e,r,n){void 0===n&&(n={});var a=C(t,e,r,n).reduce((function(t,e){var r=e.value;return"string"!=typeof r?t.push(r):"string"==typeof t[t.length-1]?t[t.length-1]+=r:t.push(r),t}),[]);return 1===a.length?a[0]:0===a.length?"":a}function C(t,e,r,a){var o=t.locale,i=t.onError;void 0===a&&(a={}),Intl.ListFormat||i(new b.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',b.jK.MISSING_INTL_API));var l=(0,p.L6)(a,R);try{var s={},m=r.map((function(t,e){if("object"==typeof t){var r=function(t){return"".concat(N,"_").concat(t,"_").concat(N)}(e);return s[r]=t,r}return String(t)}));return e(o,l).formatToParts(m).map((function(t){return"literal"===t.type?t:(0,n.__assign)((0,n.__assign)({},t),{value:s[t.value]||t.value})}))}catch(t){i(new u.Qe("Error formatting list.",o,t))}return r}var Z=["style","type","fallback","languageDisplay"];function O(t,e,r,n){var a=t.locale,o=t.onError;Intl.DisplayNames||o(new b.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',b.jK.MISSING_INTL_API));var i=(0,p.L6)(n,Z);try{return e(a,i).of(r)}catch(t){o(new u.Qe("Error formatting display name.",a,t))}}var M=r(61092);function A(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function Q(t){return t?Object.keys(t).reduce((function(e,r){var n=t[r];return e[r]=(0,M.Gt)(n)?(0,i.dt)(n):n,e}),{}):t}var G=function(t,e,r,o){for(var i=[],l=4;l<arguments.length;l++)i[l-4]=arguments[l];var s=Q(o),u=d.apply(void 0,(0,n.__spreadArray)([t,e,r,s],i,!1));return Array.isArray(u)?a.Children.toArray(u):u},K=function(t,e){var r=t.defaultRichTextElements,a=(0,n.__rest)(t,["defaultRichTextElements"]),o=Q(r),l=function(t,e){var r=(0,p.ax)(e),a=(0,n.__assign)((0,n.__assign)({},p.Z0),t),o=a.locale,i=a.defaultLocale,l=a.onError;return o?!Intl.NumberFormat.supportedLocalesOf(o).length&&l?l(new u.gb('Missing locale data for locale: "'.concat(o,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(o).length&&l&&l(new u.gb('Missing locale data for locale: "'.concat(o,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(l&&l(new u.OV('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),function(t){var e;t.onWarn&&t.defaultRichTextElements&&"string"==typeof((e=t.messages||{})?e[Object.keys(e)[0]]:void 0)&&t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(a),(0,n.__assign)((0,n.__assign)({},a),{formatters:r,formatNumber:h.bind(null,a,r.getNumberFormat),formatNumberToParts:_.bind(null,a,r.getNumberFormat),formatRelativeTime:T.bind(null,a,r.getRelativeTimeFormat),formatDate:D.bind(null,a,r.getDateTimeFormat),formatDateToParts:L.bind(null,a,r.getDateTimeFormat),formatTime:F.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:I.bind(null,a,r.getDateTimeFormat),formatTimeToParts:j.bind(null,a,r.getDateTimeFormat),formatPlural:P.bind(null,a,r.getPluralRules),formatMessage:d.bind(null,a,r),$t:d.bind(null,a,r),formatList:x.bind(null,a,r.getListFormat),formatListToParts:C.bind(null,a,r.getListFormat),formatDisplayName:O.bind(null,a,r.getDisplayNames)})}((0,n.__assign)((0,n.__assign)((0,n.__assign)({},i.Z0),a),{defaultRichTextElements:o}),e),s={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:o};return(0,n.__assign)((0,n.__assign)({},l),{formatMessage:G.bind(null,s,l.formatters),$t:G.bind(null,s,l.formatters)})},W=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cache=(0,p.Sn)(),e.state={cache:e.cache,intl:K(A(e.props),e.cache),prevConfig:A(e.props)},e}return(0,n.__extends)(e,t),e.getDerivedStateFromProps=function(t,e){var r=e.prevConfig,n=e.cache,a=A(t);return(0,i.wU)(r,a)?null:{intl:K(a,n),prevConfig:a}},e.prototype.render=function(){return(0,i.lq)(this.state.intl),a.createElement(o.zt,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=i.Z0,e}(a.PureComponent),$=W}}]);