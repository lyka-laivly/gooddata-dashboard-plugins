(self.webpackChunkgauge_chart_plugin=self.webpackChunkgauge_chart_plugin||[]).push([[7954],{84776:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.Plugin=void 0;const s=a(97582),r=a(38865),o=a(53244),i=s.__importDefault(a(30510)),n=a(96927),d=a(56493),l=["#","%"];class u extends r.DashboardPluginV1{constructor(){super(...arguments),this.author=i.default.author,this.displayName=i.default.displayName,this.version=i.default.version,this.minEngineVersion=i.default.minEngineVersion,this.maxEngineVersion=i.default.maxEngineVersion,this.prefixes=["gauge"],this.showLabels=!1,this.format="%"}isFormatValid(e){return!!e&&l.includes(e)}onPluginLoaded(e,t){if(t)try{const e=JSON.parse(t);this.prefixes=(null==e?void 0:e.prefixes.split(" "))||["gauge"],this.showLabels=(null==e?void 0:e.showLabels)||!1,this.format=this.isFormatValid(e.format)?e.format:"%"}catch(e){console.error("Could not parse parameters. Check the formatting of the parameters in target dashboard settings.")}}register(e,t,a){t.insightWidgets().withCustomProvider((e=>{if(this.prefixes.some((t=>(0,o.insightTitle)(e).startsWith(t)))&&(0,d.isUsableForGauge)(e))return(0,n.gaugeFactory)({showLabels:this.showLabels,format:this.format})}))}}t.Plugin=u},96927:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.Gauge=t.gaugeFactory=void 0;const s=a(97582),r=s.__importDefault(a(59882)),o=a(38865),i=a(56493),n=s.__importDefault(a(93394));t.gaugeFactory=e=>a=>{var s,n;const{ErrorComponent:d,LoadingComponent:l,widget:u,insight:g}=a,c=(0,o.useDashboardSelector)(o.selectLocale),{result:p,error:m,status:f}=(0,o.useInsightWidgetDataView)({insightWidget:u});if("loading"===f||"pending"===f)return r.default.createElement(l,null);if("error"===f)return r.default.createElement(d,{message:null!==(s=null==m?void 0:m.message)&&void 0!==s?s:"Unknown error"});const{gaugeResult:h,gaugeError:b}=(0,i.getGaugeValues)(p,g);return b||!h?r.default.createElement(d,{message:null!==(n=null==b?void 0:b.message)&&void 0!==n?n:"Unknown error"}):r.default.createElement(t.Gauge,{max:h.max,value:h.value,format:e.format||"%",locale:c,showLabels:e.showLabels})},t.Gauge=({max:e,value:t,format:a="#",showLabels:s=!1,locale:o="en-US"})=>{const i=t/e;return r.default.createElement("div",{"data-testid":"gauge-chart-container",style:{padding:"1rem"}},r.default.createElement(n.default,{"data-testid":"gauge-chart",animate:!1,nrOfLevels:20,percent:i,textColor:"black",colors:["#42c1e7","#14B2E2","#108eb4"],formatTextValue:()=>"#"===a?new Intl.NumberFormat(o).format(t):new Intl.NumberFormat(o,{style:"percent"}).format(i)}),s&&r.default.createElement("svg",{viewBox:"0 0 250 25"},r.default.createElement("text",{"data-testid":"gauge-chart-label-min",x:"15%",y:"20"},"#"===a?"0":"0%"),r.default.createElement("text",{"data-testid":"gauge-chart-label-max",x:"75%",y:"20"},"#"===a?e:"100%")))}},28380:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});const s=a(84776);t.default=()=>new s.Plugin},56493:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.getGaugeValues=t.isUsableForGauge=void 0;const s=a(53244);function r(e,t){const a=(0,s.insightBucket)(e,t);if(a)return(0,s.bucketMeasure)(a)}function o(e,t,a){const s=r(t,a);if(!s)throw new Error(`The bucket does not contain any measures: ${a}`);return null===(o=e.data().series().firstForMeasure(s).dataPoints()[0].rawValue)?NaN:"string"==typeof o?parseFloat(o):o;var o}t.isUsableForGauge=function(e){const t=(0,s.insightVisualizationUrl)(e).includes("bullet"),a=r(e,"measures"),o=r(e,"secondary_measures");return t&&!!a&&!!o},t.getGaugeValues=(e,t)=>{try{return{gaugeError:void 0,gaugeResult:{value:o(e,t,"measures"),max:o(e,t,"secondary_measures")}}}catch(e){return{gaugeError:e,gaugeResult:void 0}}}},30510:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});const s=a(97582),r=s.__importDefault(a(96732)),o=s.__importDefault(a(4147)),i=a(98617),n={author:o.default.author,displayName:o.default.name,version:o.default.version,minEngineVersion:"bundled",maxEngineVersion:"bundled",compatibility:(0,i.ensureSemverPrefix)(o.default.peerDependencies["@gooddata/sdk-ui-dashboard"]),engineKey:`./${r.default.MODULE_FEDERATION_NAME}_ENGINE`,pluginKey:`./${r.default.MODULE_FEDERATION_NAME}_PLUGIN`};t.default=n},739:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ensureSemverPrefix=void 0,t.ensureSemverPrefix=e=>e.startsWith("^")?e:"^"+e},98617:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.ensureSemverPrefix=void 0;var s=a(739);Object.defineProperty(t,"ensureSemverPrefix",{enumerable:!0,get:function(){return s.ensureSemverPrefix}})},4147:function(e){e.exports=JSON.parse('{"name":"gauge_chart_plugin","version":"1.0.3","description":"Simple plugin that replace Bullet chart for Gauge chart","author":"Open-sourced by GoodData - feel free to change","private":false,"license":"SEE LICENSE IN ../LICENSE","type":"module","exports":"./esm/index.js","types":"esm/index.d.ts","sideEffects":["*.css","*.svg"],"files":["esm/**/*.js","esm/**/*.json","esm/**/*.d.ts","esm/**/*.map","esm/**/*.svg"],"scripts":{"clean":"rm -rf ci dist esm coverage *.log styles/css","build":"webpack --mode production --config-name harness","build-plugin":"webpack --mode production --config-name dashboardPlugin","build-plugin-debug":"webpack --mode production --config-name dashboardPlugin --analyze","gdc-plugins":"gdc-plugins","add-plugin":"gdc-plugins dashboard-plugin add","link-plugin":"gdc-plugins dashboard-plugin link","unlink-plugin":"gdc-plugins dashboard-plugin unlink","update-plugin-params":"gdc-plugins dashboard-plugin update-params","remove-plugin-params":"gdc-plugins dashboard-plugin remove-params","start":"webpack-cli serve --config-name harness","test":"vitest --watch --passWithNoTests","test-once":"vitest --passWithNoTests","eslint":"eslint -c .eslintrc.cjs src/","prettier-check":"prettier --check \\"{src,test}/**/*.{ts,tsx,json,scss,md,yaml,html}\\"","prettier-write":"prettier --write \\"{src,test}/**/*.{ts,tsx,json,scss,md,yaml,html}\\"","refresh-md":"node ./scripts/refresh-md.js"},"dependencies":{"json-stable-stringify":"^1.0.1","lodash":"^4.17.19","react-gauge-chart":"^0.4.0","tslib":"^2.5.0"},"peerDependencies":{"@gooddata/sdk-ui-dashboard":"^9.6.0","@gooddata/sdk-model":"^9.6.0","@gooddata/sdk-backend-spi":"^9.6.0","@gooddata/sdk-backend-tiger":"^9.6.0","@gooddata/sdk-ui":"^9.6.0","@gooddata/sdk-ui-charts":"^9.6.0","@gooddata/sdk-ui-ext":"^9.6.0","@gooddata/sdk-ui-filters":"^9.6.0","@gooddata/sdk-ui-geo":"^9.6.0","@gooddata/sdk-ui-kit":"^9.6.0","@gooddata/sdk-ui-pivot":"^9.6.0","react":"^16.10.0 || ^17.0.0 || ^18.0.0","react-dom":"^16.10.0 || ^17.0.0 || ^18.0.0"},"devDependencies":{"@babel/core":"^7.7.2","@babel/preset-env":"^7.7.2","@babel/preset-react":"^7.7.2","@gooddata/catalog-export":"^9.6.0","@gooddata/plugin-toolkit":"^9.6.0","@gooddata/sdk-backend-spi":"^9.6.0","@gooddata/sdk-backend-tiger":"^9.6.0","@gooddata/sdk-model":"^9.6.0","@gooddata/sdk-ui":"^9.6.0","@gooddata/sdk-ui-charts":"^9.6.0","@gooddata/sdk-ui-ext":"^9.6.0","@gooddata/sdk-ui-filters":"^9.6.0","@gooddata/sdk-ui-geo":"^9.6.0","@gooddata/sdk-ui-kit":"^9.6.0","@gooddata/sdk-ui-loaders":"^9.6.0","@gooddata/sdk-ui-pivot":"^9.6.0","@types/json-stable-stringify":"^1.0.32","@types/lodash":"^4.14.158","@types/node":"^18.17.6","@types/raf":"^3.4.0","@types/react":"^18.2.0","@types/react-dom":"^18.2.1","@types/react-gauge-chart":"^0.4.0","@typescript-eslint/eslint-plugin":"^5.57.1","@typescript-eslint/parser":"^5.57.1","babel-loader":"^8.0.5","case-sensitive-paths-webpack-plugin":"^2.4.0","concurrently":"^6.0.2","css-loader":"^6.7.1","dotenv":"16.0.3","dotenv-webpack":"^7.0.2","eslint":"^8.25.0","eslint-plugin-import-esm":"^1.2.1","eslint-plugin-prettier":"^4.0.0","eslint-plugin-react":"^7.31.10","eslint-plugin-react-hooks":"^4.5.0","html-webpack-plugin":"^5.3.1","lodash":"^4.17.19","prettier":"~2.5.0","raf":"^3.4.1","react":"^18.2.0","react-dom":"^18.2.0","react-intl":"^6.4.1","source-map-loader":"^4.0.0","style-loader":"^3.3.1","ts-loader":"^8.3.0","typescript":"5.0.2","vitest":"0.31.4","webpack":"^5.58.0","webpack-bundle-analyzer":"^4.5.0","webpack-cli":"^4.9.2","webpack-dev-server":"^4.9.1"},"overrides":{"reselect":"4.1.5"}}')},96732:function(e){e.exports=JSON.parse('{"#MODULE_FEDERATION_NAME":"This has to be unique per plugin, otherwise loading multiple plugins won\'t work. Also for some reason the folder in src needs to be called this too, otherwise multiple plugins do load but all are overwritten by the first loaded. This should not be an issue though, the bootstrap of the template can perform all the renaming/string replacements.","MODULE_FEDERATION_NAME":"dp_gauge_chart_plugin"}')}}]);