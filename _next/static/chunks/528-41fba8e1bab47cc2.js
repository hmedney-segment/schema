(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{8453:function(e,t,n){var i,o;!function(){var r,s=function(e){var t=new s.Index;return t.pipeline.add(s.trimmer,s.stopWordFilter,s.stemmer),e&&e.call(t,t),t};s.version="0.9.5",lunr=s,s.utils={},s.utils.warn=(r=this,function(e){r.console&&console.warn&&console.warn(e)}),s.utils.toString=function(e){return void 0===e||null===e?"":e.toString()},s.EventEmitter=function(){this.events={}},s.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!==typeof t)throw new TypeError("last argument must be a function");n.forEach((function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)}),this)},s.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);-1!==n&&(this.events[e].splice(n,1),0==this.events[e].length&&delete this.events[e])}},s.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach((function(e){e.apply(void 0,t)}),this)}},s.EventEmitter.prototype.hasHandler=function(e){return e in this.events},s.tokenizer=function(e){if(!arguments.length||null===e||void 0===e)return[];if(Array.isArray(e)){var t=e.filter((function(e){return null!==e&&void 0!==e}));t=t.map((function(e){return s.utils.toString(e).toLowerCase()}));var n=[];return t.forEach((function(e){var t=e.split(s.tokenizer.seperator);n=n.concat(t)}),this),n}return e.toString().trim().toLowerCase().split(s.tokenizer.seperator)},s.tokenizer.defaultSeperator=/[\s\-]+/,s.tokenizer.seperator=s.tokenizer.defaultSeperator,s.tokenizer.setSeperator=function(e){null!==e&&void 0!==e&&"object"===typeof e&&(s.tokenizer.seperator=e)},s.tokenizer.resetSeperator=function(){s.tokenizer.seperator=s.tokenizer.defaultSeperator},s.tokenizer.getSeperator=function(){return s.tokenizer.seperator},s.Pipeline=function(){this._queue=[]},s.Pipeline.registeredFunctions={},s.Pipeline.registerFunction=function(e,t){t in s.Pipeline.registeredFunctions&&s.utils.warn("Overwriting existing registered function: "+t),e.label=t,s.Pipeline.registeredFunctions[t]=e},s.Pipeline.getRegisteredFunction=function(e){return e in s.Pipeline.registeredFunctions!==!0?null:s.Pipeline.registeredFunctions[e]},s.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||s.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},s.Pipeline.load=function(e){var t=new s.Pipeline;return e.forEach((function(e){var n=s.Pipeline.getRegisteredFunction(e);if(!n)throw new Error("Cannot load un-registered function: "+e);t.add(n)})),t},s.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach((function(e){s.Pipeline.warnIfFunctionNotRegistered(e),this._queue.push(e)}),this)},s.Pipeline.prototype.after=function(e,t){s.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(-1===n)throw new Error("Cannot find existingFn");this._queue.splice(n+1,0,t)},s.Pipeline.prototype.before=function(e,t){s.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(-1===n)throw new Error("Cannot find existingFn");this._queue.splice(n,0,t)},s.Pipeline.prototype.remove=function(e){var t=this._queue.indexOf(e);-1!==t&&this._queue.splice(t,1)},s.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,i=this._queue.length,o=0;o<n;o++){for(var r=e[o],s=0;s<i&&(void 0!==(r=this._queue[s](r,o,e))&&null!==r);s++);void 0!==r&&null!==r&&t.push(r)}return t},s.Pipeline.prototype.reset=function(){this._queue=[]},s.Pipeline.prototype.get=function(){return this._queue},s.Pipeline.prototype.toJSON=function(){return this._queue.map((function(e){return s.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},s.Index=function(){this._fields=[],this._ref="id",this.pipeline=new s.Pipeline,this.documentStore=new s.DocumentStore,this.index={},this.eventEmitter=new s.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},s.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},s.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},s.Index.load=function(e){e.version!==s.version&&s.utils.warn("version mismatch: current "+s.version+" importing "+e.version);var t=new this;for(var n in t._fields=e.fields,t._ref=e.ref,t.documentStore=s.DocumentStore.load(e.documentStore),t.pipeline=s.Pipeline.load(e.pipeline),t.index={},e.index)t.index[n]=s.InvertedIndex.load(e.index[n]);return t},s.Index.prototype.addField=function(e){return this._fields.push(e),this.index[e]=new s.InvertedIndex,this},s.Index.prototype.setRef=function(e){return this._ref=e,this},s.Index.prototype.saveDocument=function(e){return this.documentStore=new s.DocumentStore(e),this},s.Index.prototype.addDoc=function(e,t){if(e){t=void 0===t||t;var n=e[this._ref];this.documentStore.addDoc(n,e),this._fields.forEach((function(t){var i=this.pipeline.run(s.tokenizer(e[t]));this.documentStore.addFieldLength(n,t,i.length);var o={};for(var r in i.forEach((function(e){e in o?o[e]+=1:o[e]=1}),this),o){var u=o[r];u=Math.sqrt(u),this.index[t].addToken(r,{ref:n,tf:u})}}),this),t&&this.eventEmitter.emit("add",e,this)}},s.Index.prototype.removeDocByRef=function(e,t){if(e&&!1!==this.documentStore.isDocStored()&&this.documentStore.hasDoc(e)){var n=this.documentStore.getDoc(e);this.removeDoc(n,!1)}},s.Index.prototype.removeDoc=function(e,t){if(e){t=void 0===t||t;var n=e[this._ref];this.documentStore.hasDoc(n)&&(this.documentStore.removeDoc(n),this._fields.forEach((function(t){this.pipeline.run(s.tokenizer(e[t])).forEach((function(e){this.index[t].removeToken(e,n)}),this)}),this),t&&this.eventEmitter.emit("remove",e,this))}},s.Index.prototype.updateDoc=function(e,t){t=void 0===t||t;this.removeDocByRef(e[this._ref],!1),this.addDoc(e,!1),t&&this.eventEmitter.emit("update",e,this)},s.Index.prototype.idf=function(e,t){var n="@"+t+"/"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,n))return this._idfCache[n];var i=this.index[t].getDocFreq(e),o=1+Math.log(this.documentStore.length/(i+1));return this._idfCache[n]=o,o},s.Index.prototype.getFields=function(){return this._fields.slice()},s.Index.prototype.search=function(e,t){if(!e)return[];var n=null;null!=t&&(n=JSON.stringify(t));var i=new s.Configuration(n,this.getFields()).get(),o=this.pipeline.run(s.tokenizer(e)),r={};for(var u in i){var a=this.fieldSearch(o,u,i),l=i[u].boost;for(var c in a)a[c]=a[c]*l;for(var c in a)c in r?r[c]+=a[c]:r[c]=a[c]}var f=[];for(var c in r)f.push({ref:c,score:r[c]});return f.sort((function(e,t){return t.score-e.score})),f},s.Index.prototype.fieldSearch=function(e,t,n){var i=n[t].bool,o=n[t].expand,r=n[t].boost,s=null,u={};if(0!==r)return e.forEach((function(e){var n=[e];1==o&&(n=this.index[t].expandToken(e));var r={};n.forEach((function(n){var o=this.index[t].getDocs(n),a=this.idf(n,t);if(s&&"AND"==i){var l={};for(var c in s)c in o&&(l[c]=o[c]);o=l}for(var c in n==e&&this.fieldSearchStats(u,n,o),o){var f=this.index[t].getTermFrequency(n,c),d=this.documentStore.getFieldLength(c,t),h=1;0!=d&&(h=1/Math.sqrt(d));var p=1;n!=e&&(p=.15*(1-(n.length-e.length)/n.length));var v=f*a*h*p;c in r?r[c]+=v:r[c]=v}}),this),s=this.mergeScores(s,r,i)}),this),s=this.coordNorm(s,u,e.length)},s.Index.prototype.mergeScores=function(e,t,n){if(!e)return t;if("AND"==n){var i={};for(var o in t)o in e&&(i[o]=e[o]+t[o]);return i}for(var o in t)o in e?e[o]+=t[o]:e[o]=t[o];return e},s.Index.prototype.fieldSearchStats=function(e,t,n){for(var i in n)i in e?e[i].push(t):e[i]=[t]},s.Index.prototype.coordNorm=function(e,t,n){for(var i in e)if(i in t){var o=t[i].length;e[i]=e[i]*o/n}return e},s.Index.prototype.toJSON=function(){var e={};return this._fields.forEach((function(t){e[t]=this.index[t].toJSON()}),this),{version:s.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),index:e,pipeline:this.pipeline.toJSON()}},s.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},s.DocumentStore=function(e){this._save=null===e||void 0===e||e,this.docs={},this.docInfo={},this.length=0},s.DocumentStore.load=function(e){var t=new this;return t.length=e.length,t.docs=e.docs,t.docInfo=e.docInfo,t._save=e.save,t},s.DocumentStore.prototype.isDocStored=function(){return this._save},s.DocumentStore.prototype.addDoc=function(e,t){this.hasDoc(e)||this.length++,!0===this._save?this.docs[e]=function(e){if(null===e||"object"!==typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(t):this.docs[e]=null},s.DocumentStore.prototype.getDoc=function(e){return!1===this.hasDoc(e)?null:this.docs[e]},s.DocumentStore.prototype.hasDoc=function(e){return e in this.docs},s.DocumentStore.prototype.removeDoc=function(e){this.hasDoc(e)&&(delete this.docs[e],delete this.docInfo[e],this.length--)},s.DocumentStore.prototype.addFieldLength=function(e,t,n){null!==e&&void 0!==e&&0!=this.hasDoc(e)&&(this.docInfo[e]||(this.docInfo[e]={}),this.docInfo[e][t]=n)},s.DocumentStore.prototype.updateFieldLength=function(e,t,n){null!==e&&void 0!==e&&0!=this.hasDoc(e)&&this.addFieldLength(e,t,n)},s.DocumentStore.prototype.getFieldLength=function(e,t){return null===e||void 0===e?0:e in this.docs&&t in this.docInfo[e]?this.docInfo[e][t]:0},s.DocumentStore.prototype.toJSON=function(){return{docs:this.docs,docInfo:this.docInfo,length:this.length,save:this._save}},s.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[aeiouy]",i="[^aeiou][^aeiouy]*",o=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),r=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),s=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),u=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),a=/^(.+?)(ss|i)es$/,l=/^(.+?)([^s])s$/,c=/^(.+?)eed$/,f=/^(.+?)(ed|ing)$/,d=/.$/,h=/(at|bl|iz)$/,p=new RegExp("([^aeiouylsz])\\1$"),v=new RegExp("^"+i+n+"[^aeiouwxy]$"),g=/^(.+?[^aeiou])y$/,y=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,m=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,x=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,S=/^(.+?)(s|t)(ion)$/,w=/^(.+?)e$/,b=/ll$/,I=new RegExp("^"+i+n+"[^aeiouwxy]$");return function(n){var i,E,D,F,_,k,N;if(n.length<3)return n;if("y"==(D=n.substr(0,1))&&(n=D.toUpperCase()+n.substr(1)),_=l,(F=a).test(n)?n=n.replace(F,"$1$2"):_.test(n)&&(n=n.replace(_,"$1$2")),_=f,(F=c).test(n)){var P=F.exec(n);(F=o).test(P[1])&&(F=d,n=n.replace(F,""))}else if(_.test(n)){i=(P=_.exec(n))[1],(_=u).test(i)&&(k=p,N=v,(_=h).test(n=i)?n+="e":k.test(n)?(F=d,n=n.replace(F,"")):N.test(n)&&(n+="e"))}(F=g).test(n)&&(n=(i=(P=F.exec(n))[1])+"i");(F=y).test(n)&&(i=(P=F.exec(n))[1],E=P[2],(F=o).test(i)&&(n=i+e[E]));(F=m).test(n)&&(i=(P=F.exec(n))[1],E=P[2],(F=o).test(i)&&(n=i+t[E]));if(_=S,(F=x).test(n))i=(P=F.exec(n))[1],(F=r).test(i)&&(n=i);else if(_.test(n)){i=(P=_.exec(n))[1]+P[2],(_=r).test(i)&&(n=i)}(F=w).test(n)&&(i=(P=F.exec(n))[1],_=s,k=I,((F=r).test(i)||_.test(i)&&!k.test(i))&&(n=i));return _=r,(F=b).test(n)&&_.test(n)&&(F=d,n=n.replace(F,"")),"y"==D&&(n=D.toLowerCase()+n.substr(1)),n}}(),s.Pipeline.registerFunction(s.stemmer,"stemmer"),s.stopWordFilter=function(e){if(e&&!0!==s.stopWordFilter.stopWords[e])return e},s.clearStopWords=function(){s.stopWordFilter.stopWords={}},s.addStopWords=function(e){null!=e&&!1!==Array.isArray(e)&&e.forEach((function(e){s.stopWordFilter.stopWords[e]=!0}),this)},s.resetStopWords=function(){s.stopWordFilter.stopWords=s.defaultStopWords},s.defaultStopWords={"":!0,a:!0,able:!0,about:!0,across:!0,after:!0,all:!0,almost:!0,also:!0,am:!0,among:!0,an:!0,and:!0,any:!0,are:!0,as:!0,at:!0,be:!0,because:!0,been:!0,but:!0,by:!0,can:!0,cannot:!0,could:!0,dear:!0,did:!0,do:!0,does:!0,either:!0,else:!0,ever:!0,every:!0,for:!0,from:!0,get:!0,got:!0,had:!0,has:!0,have:!0,he:!0,her:!0,hers:!0,him:!0,his:!0,how:!0,however:!0,i:!0,if:!0,in:!0,into:!0,is:!0,it:!0,its:!0,just:!0,least:!0,let:!0,like:!0,likely:!0,may:!0,me:!0,might:!0,most:!0,must:!0,my:!0,neither:!0,no:!0,nor:!0,not:!0,of:!0,off:!0,often:!0,on:!0,only:!0,or:!0,other:!0,our:!0,own:!0,rather:!0,said:!0,say:!0,says:!0,she:!0,should:!0,since:!0,so:!0,some:!0,than:!0,that:!0,the:!0,their:!0,them:!0,then:!0,there:!0,these:!0,they:!0,this:!0,tis:!0,to:!0,too:!0,twas:!0,us:!0,wants:!0,was:!0,we:!0,were:!0,what:!0,when:!0,where:!0,which:!0,while:!0,who:!0,whom:!0,why:!0,will:!0,with:!0,would:!0,yet:!0,you:!0,your:!0},s.stopWordFilter.stopWords=s.defaultStopWords,s.Pipeline.registerFunction(s.stopWordFilter,"stopWordFilter"),s.trimmer=function(e){if(null===e||void 0===e)throw new Error("token should not be undefined");return e.replace(/^\W+/,"").replace(/\W+$/,"")},s.Pipeline.registerFunction(s.trimmer,"trimmer"),s.InvertedIndex=function(){this.root={docs:{},df:0}},s.InvertedIndex.load=function(e){var t=new this;return t.root=e.root,t},s.InvertedIndex.prototype.addToken=function(e,t,n){n=n||this.root;for(var i=0;i<=e.length-1;){var o=e[i];o in n||(n[o]={docs:{},df:0}),i+=1,n=n[o]}var r=t.ref;n.docs[r]?n.docs[r]={tf:t.tf}:(n.docs[r]={tf:t.tf},n.df+=1)},s.InvertedIndex.prototype.hasToken=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},s.InvertedIndex.prototype.getNode=function(e){if(!e)return null;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return null;t=t[e[n]]}return t},s.InvertedIndex.prototype.getDocs=function(e){var t=this.getNode(e);return null==t?{}:t.docs},s.InvertedIndex.prototype.getTermFrequency=function(e,t){var n=this.getNode(e);return null==n?0:t in n.docs?n.docs[t].tf:0},s.InvertedIndex.prototype.getDocFreq=function(e){var t=this.getNode(e);return null==t?0:t.df},s.InvertedIndex.prototype.removeToken=function(e,t){if(e){var n=this.getNode(e);null!=n&&t in n.docs&&(delete n.docs[t],n.df-=1)}},s.InvertedIndex.prototype.expandToken=function(e,t,n){if(null==e||""==e)return[];t=t||[];if(void 0==n&&null==(n=this.getNode(e)))return t;for(var i in n.df>0&&t.push(e),n)"docs"!==i&&"df"!==i&&this.expandToken(e+i,t,n[i]);return t},s.InvertedIndex.prototype.toJSON=function(){return{root:this.root}},s.Configuration=function(e,t){var n;e=e||"";if(void 0==t||null==t)throw new Error("fields should not be null");this.config={};try{n=JSON.parse(e),this.buildUserConfig(n,t)}catch(i){s.utils.warn("user configuration parse failed, will use default configuration"),this.buildDefaultConfig(t)}},s.Configuration.prototype.buildDefaultConfig=function(e){this.reset(),e.forEach((function(e){this.config[e]={boost:1,bool:"OR",expand:!1}}),this)},s.Configuration.prototype.buildUserConfig=function(e,t){var n="OR",i=!1;if(this.reset(),"bool"in e&&(n=e.bool||n),"expand"in e&&(i=e.expand||i),"fields"in e)for(var o in e.fields)if(t.indexOf(o)>-1){var r=e.fields[o],u=i;void 0!=r.expand&&(u=r.expand),this.config[o]={boost:r.boost||0===r.boost?r.boost:1,bool:r.bool||n,expand:u}}else s.utils.warn("field name in user configuration not found in index instance fields");else this.addAllFields2UserConfig(n,i,t)},s.Configuration.prototype.addAllFields2UserConfig=function(e,t,n){n.forEach((function(n){this.config[n]={boost:1,bool:e,expand:t}}),this)},s.Configuration.prototype.get=function(){return this.config},s.Configuration.prototype.reset=function(){this.config={}},lunr.SortedSet=function(){this.length=0,this.elements=[]},lunr.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},lunr.SortedSet.prototype.add=function(){var e,t;for(e=0;e<arguments.length;e++)t=arguments[e],~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t);this.length=this.elements.length},lunr.SortedSet.prototype.toArray=function(){return this.elements.slice()},lunr.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},lunr.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},lunr.SortedSet.prototype.indexOf=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];i>1;){if(r===e)return o;r<e&&(t=o),r>e&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o]}return r===e?o:-1},lunr.SortedSet.prototype.locationFor=function(e){for(var t=0,n=this.elements.length,i=n-t,o=t+Math.floor(i/2),r=this.elements[o];i>1;)r<e&&(t=o),r>e&&(n=o),i=n-t,o=t+Math.floor(i/2),r=this.elements[o];return r>e?o:r<e?o+1:void 0},lunr.SortedSet.prototype.intersect=function(e){for(var t=new lunr.SortedSet,n=0,i=0,o=this.length,r=e.length,s=this.elements,u=e.elements;!(n>o-1||i>r-1);)s[n]!==u[i]?s[n]<u[i]?n++:s[n]>u[i]&&i++:(t.add(s[n]),n++,i++);return t},lunr.SortedSet.prototype.clone=function(){var e=new lunr.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},lunr.SortedSet.prototype.union=function(e){var t,n,i;this.length>=e.length?(t=this,n=e):(t=e,n=this),i=t.clone();for(var o=0,r=n.toArray();o<r.length;o++)i.add(r[o]);return i},lunr.SortedSet.prototype.toJSON=function(){return this.toArray()},void 0===(o="function"===typeof(i=function(){return s})?i.call(t,n,t,e):i)||(e.exports=o)}()},1296:function(e,t,n){var i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")(),f=Object.prototype.toString,d=Math.max,h=Math.min,p=function(){return c.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var i,o,r,s,u,a,l=0,c=!1,f=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,r=o;return i=o=void 0,l=t,s=e.apply(r,n)}function x(e){return l=e,u=setTimeout(w,t),c?m(e):s}function S(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-l>=r}function w(){var e=p();if(S(e))return b(e);u=setTimeout(w,function(e){var n=t-(e-a);return f?h(n,r-(e-l)):n}(e))}function b(e){return u=void 0,y&&i?m(e):(i=o=void 0,s)}function I(){var e=p(),n=S(e);if(i=arguments,o=this,a=e,n){if(void 0===u)return x(a);if(f)return u=setTimeout(w,t),m(a)}return void 0===u&&(u=setTimeout(w,t)),s}return t=g(t)||0,v(n)&&(c=!!n.leading,r=(f="maxWait"in n)?d(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),I.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=a=o=u=void 0},I.flush=function(){return void 0===u?s:b(p())},I}}}]);