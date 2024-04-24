(self.webpackChunkradial_bar_chart_plugin=self.webpackChunkradial_bar_chart_plugin||[]).push([[7765],{16638:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Plugin=t.WIDGET_TITLE_SUFFIX=void 0;const r=a(97582),i=a(38865),s=a(53244),n=r.__importDefault(a(91099)),o=r.__importDefault(a(67372));t.WIDGET_TITLE_SUFFIX="_radial_bar_chart_plugin_";const d=new RegExp(`(.*)${t.WIDGET_TITLE_SUFFIX}$`);class l extends i.DashboardPluginV1{constructor(){super(...arguments),this.author=n.default.author,this.displayName=n.default.displayName,this.version=n.default.version,this.minEngineVersion=n.default.minEngineVersion,this.maxEngineVersion=n.default.maxEngineVersion}register(e,t,a){t.insightWidgets().withCustomProvider(((e,t)=>{if("local:column"===(0,s.insightVisualizationUrl)(e)&&(0,s.widgetTitle)(t).match(d))return o.default})),a.addEventHandler("GDC.DASH/EVT.INITIALIZED",(e=>{console.log("### Dashboard initialized",e)}))}}t.Plugin=l},30114:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(59882);class i extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){return this.state.hasError?this.props.ErrorComponent:this.props.children}}t.default=i},63589:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CustomTitle=void 0;const r=a(97582).__importDefault(a(59882));t.CustomTitle=({children:e})=>r.default.createElement("div",{className:"item-headline-outer"},r.default.createElement("div",{className:"item-headline"},r.default.createElement("div",{className:"item-headline-inner s-headline"},e)))},10667:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RadialBarChart=void 0;const r=a(97582),i=a(38865),s=r.__importStar(a(59882)),n=a(31297),o={fontSize:12};t.RadialBarChart=({wrapperHeight:e,widget:t,ErrorComponent:a,LoadingComponent:r})=>{var d;const l=(0,i.useDashboardSelector)(i.selectColorPalette),u=(0,s.useMemo)((()=>l.map((e=>`rgb(${e.fill.r}, ${e.fill.g}, ${e.fill.b})`))),[l]),{result:c,error:p,status:g}=(0,i.useInsightWidgetDataView)({insightWidget:t}),m=(0,s.useMemo)((()=>null==c?void 0:c.data().slices().toArray().map(((e,t)=>{var a;return{name:e.sliceTitles()[0],value:parseFloat(`${null!==(a=e.rawData()[0])&&void 0!==a?a:""}`),fill:u[t%u.length]}}))),[c,u]);return"loading"===g||"pending"===g?s.default.createElement(r,null):"error"!==g&&c?s.default.createElement(n.ResponsiveContainer,{width:"100%",height:e},s.default.createElement(n.RadialBarChart,{innerRadius:"10%",outerRadius:"100%",barSize:10,data:m},s.default.createElement(n.RadialBar,{background:!0,dataKey:"value"}),s.default.createElement(n.Legend,{layout:"vertical",verticalAlign:"top",align:"right",iconSize:12,wrapperStyle:o}))):s.default.createElement(a,{message:null!==(d=null==p?void 0:p.message)&&void 0!==d?d:"Unknown error"})}},67372:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(97582),i=r.__importStar(a(59882)),s=a(38865);a(12917);const n=a(10667),o=a(63589),d=r.__importDefault(a(30114)),l=a(40856),u=a(16638);t.default=e=>{var t;const{LoadingComponent:a,ErrorComponent:r,widget:c}=e,p=(0,i.useRef)(null),g=(0,s.useDashboardSelector)(s.selectIsInViewMode),m=(0,i.useMemo)((()=>i.default.createElement(r,{message:"Unable to display the report"})),[r]);(0,l.useHideOriginalWidgetTitleInViewMode)(c,g);const h=(0,i.useMemo)((()=>{const e=c.title.replace(u.WIDGET_TITLE_SUFFIX,"");return g?i.default.createElement(o.CustomTitle,null,e):null}),[c.title,g]);return i.default.createElement(d.default,{ErrorComponent:m},h,i.default.createElement("div",{ref:p,className:"radial-bar-wrapper","data-testid":"radial-bar-chart"},i.default.createElement(n.RadialBarChart,{wrapperHeight:null===(t=p.current)||void 0===t?void 0:t.offsetHeight,widget:c,ErrorComponent:r,LoadingComponent:a})))}},40856:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useHideOriginalWidgetTitleInViewMode=void 0;const r=a(38865),i=a(59882);t.useHideOriginalWidgetTitleInViewMode=(e,t)=>{const a=(0,r.useDispatchDashboardCommand)(r.changeInsightWidgetVisConfiguration);(0,i.useEffect)((()=>{var r;(null===(r=e.configuration)||void 0===r?void 0:r.hideTitle)||a(e,{hideTitle:t})}),[a,e,t])}},97978:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(16638);t.default=()=>new r.Plugin},91099:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(97582),i=r.__importDefault(a(96732)),s=r.__importDefault(a(4147)),n=a(98617),o={author:s.default.author,displayName:s.default.name,version:s.default.version,minEngineVersion:"bundled",maxEngineVersion:"bundled",compatibility:(0,n.ensureSemverPrefix)(s.default.peerDependencies["@gooddata/sdk-ui-dashboard"]),engineKey:`./${i.default.MODULE_FEDERATION_NAME}_ENGINE`,pluginKey:`./${i.default.MODULE_FEDERATION_NAME}_PLUGIN`};t.default=o},739:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ensureSemverPrefix=void 0,t.ensureSemverPrefix=e=>e.startsWith("^")?e:"^"+e},98617:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ensureSemverPrefix=void 0;var r=a(739);Object.defineProperty(t,"ensureSemverPrefix",{enumerable:!0,get:function(){return r.ensureSemverPrefix}})},76706:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(8081),i=a.n(r),s=a(23645),n=a.n(s)()(i());n.push([e.id,".radial-bar-wrapper {\n    position: relative;\n    display: flex;\n    flex: 1;\n    overflow: hidden;\n}\n",""]);const o=n},12917:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(93379),i=a.n(r),s=a(7795),n=a.n(s),o=a(90569),d=a.n(o),l=a(3565),u=a.n(l),c=a(19216),p=a.n(c),g=a(44589),m=a.n(g),h=a(76706),f={};f.styleTagTransform=m(),f.setAttributes=u(),f.insert=d().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=p(),i()(h.Z,f);const b=h.Z&&h.Z.locals?h.Z.locals:void 0},4147:e=>{e.exports=JSON.parse('{"name":"radial_bar_chart_plugin","version":"1.1.4","description":"Plugin that render Radial Bar chart instead of Column chart","author":"Open-sourced by GoodData - feel free to change","private":false,"license":"SEE LICENSE IN ../LICENSE","type":"module","exports":"./esm/index.js","types":"esm/index.d.ts","sideEffects":["*.css","*.svg"],"files":["esm/**/*.js","esm/**/*.json","esm/**/*.d.ts","esm/**/*.map","esm/**/*.svg"],"scripts":{"clean":"rm -rf ci dist esm coverage *.log styles/css","build":"webpack --mode production --config-name harness","build-plugin":"webpack --mode production --config-name dashboardPlugin","build-plugin-debug":"webpack --mode production --config-name dashboardPlugin --analyze","gdc-plugins":"gdc-plugins","add-plugin":"gdc-plugins dashboard-plugin add","link-plugin":"gdc-plugins dashboard-plugin link","unlink-plugin":"gdc-plugins dashboard-plugin unlink","update-plugin-params":"gdc-plugins dashboard-plugin update-params","remove-plugin-params":"gdc-plugins dashboard-plugin remove-params","start":"webpack-cli serve --config-name harness","test":"vitest --watch --passWithNoTests","test-once":"vitest --passWithNoTests","eslint":"eslint -c .eslintrc.cjs src/","prettier-check":"prettier --check \\"{src,test}/**/*.{ts,tsx,json,scss,md,yaml,html}\\"","prettier-write":"prettier --write \\"{src,test}/**/*.{ts,tsx,json,scss,md,yaml,html}\\"","refresh-md":"node ./scripts/refresh-md.js"},"dependencies":{"json-stable-stringify":"^1.0.1","lodash":"^4.17.19","recharts":"^2.12.2","tslib":"^2.5.0"},"peerDependencies":{"@gooddata/sdk-ui-dashboard":"^9.6.0","@gooddata/sdk-model":"^9.6.0","@gooddata/sdk-backend-spi":"^9.6.0","@gooddata/sdk-backend-tiger":"^9.6.0","@gooddata/sdk-ui":"^9.6.0","@gooddata/sdk-ui-charts":"^9.6.0","@gooddata/sdk-ui-ext":"^9.6.0","@gooddata/sdk-ui-filters":"^9.6.0","@gooddata/sdk-ui-geo":"^9.6.0","@gooddata/sdk-ui-kit":"^9.6.0","@gooddata/sdk-ui-pivot":"^9.6.0","react":"^16.10.0 || ^17.0.0 || ^18.0.0","react-dom":"^16.10.0 || ^17.0.0 || ^18.0.0"},"devDependencies":{"@babel/core":"^7.7.2","@babel/preset-env":"^7.7.2","@babel/preset-react":"^7.7.2","@gooddata/catalog-export":"^9.6.0","@gooddata/plugin-toolkit":"^9.6.0","@gooddata/sdk-backend-spi":"^9.6.0","@gooddata/sdk-backend-tiger":"^9.6.0","@gooddata/sdk-model":"^9.6.0","@gooddata/sdk-ui":"^9.6.0","@gooddata/sdk-ui-charts":"^9.6.0","@gooddata/sdk-ui-ext":"^9.6.0","@gooddata/sdk-ui-filters":"^9.6.0","@gooddata/sdk-ui-geo":"^9.6.0","@gooddata/sdk-ui-kit":"^9.6.0","@gooddata/sdk-ui-loaders":"^9.6.0","@gooddata/sdk-ui-pivot":"^9.6.0","@types/json-stable-stringify":"^1.0.32","@types/lodash":"^4.14.158","@types/node":"^18.17.6","@types/raf":"^3.4.0","@types/react":"^18.2.0","@types/react-dom":"^18.2.1","@typescript-eslint/eslint-plugin":"^5.57.1","@typescript-eslint/parser":"^5.57.1","babel-loader":"^8.0.5","case-sensitive-paths-webpack-plugin":"^2.4.0","concurrently":"^6.0.2","css-loader":"^6.7.1","dotenv":"16.0.3","dotenv-webpack":"^7.0.2","eslint":"^8.25.0","eslint-plugin-import-esm":"^1.2.1","eslint-plugin-prettier":"^4.0.0","eslint-plugin-react":"^7.31.10","eslint-plugin-react-hooks":"^4.5.0","html-webpack-plugin":"^5.3.1","lodash":"^4.17.19","prettier":"~2.5.0","raf":"^3.4.1","react":"^18.2.0","react-dom":"^18.2.0","react-intl":"^6.4.1","source-map-loader":"^4.0.0","style-loader":"^3.3.1","ts-loader":"^8.3.0","typescript":"5.0.2","vitest":"0.31.4","webpack":"^5.58.0","webpack-bundle-analyzer":"^4.5.0","webpack-cli":"^4.9.2","webpack-dev-server":"^4.9.1"},"overrides":{"reselect":"4.1.5"}}')},96732:e=>{e.exports=JSON.parse('{"#MODULE_FEDERATION_NAME":"This has to be unique per plugin, otherwise loading multiple plugins won\'t work. Also for some reason the folder in src needs to be called this too, otherwise multiple plugins do load but all are overwritten by the first loaded. This should not be an issue though, the bootstrap of the template can perform all the renaming/string replacements.","MODULE_FEDERATION_NAME":"dp_radial_bar_chart_plugin"}')}}]);