window.Rainbow=function(){function a(a,b,c,d){var e=a.getAttribute&&a.getAttribute(b)||0;if(!e)for(c=a.attributes,d=0;d<c.length;++d)if(c[d].nodeName===b)return c[d].nodeValue;return e}function b(a,b){a.className+=a.className?" "+b:b}function c(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1}function d(b){var c=a(b,"data-language")||a(b.parentNode,"data-language");if(!c){var d=/\blang(?:uage)?-(\w+)/,e=b.className.match(d)||b.parentNode.className.match(d);e&&(c=e[1])}return c}function e(a){return a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;")}function f(a,b,c,d){return c>=a&&b>c?!0:d>a&&b>d}function g(a,b,c,d){return c==a&&d==b?!1:a>=c&&d>=b}function h(a,b){for(var c in x[A])if(c=parseInt(c,10),g(c,x[A][c],a,b)&&(delete x[A][c],delete w[A][c]),f(c,x[A][c],a,b))return!0;return!1}function i(a,b){return'<span class="'+a.replace(/\./g," ")+(u?" "+u:"")+'">'+b+"</span>"}function j(a,b){var c,d=0;for(c=1;b>c;++c)a[c]&&(d+=a[c].length);return d}function k(a,b,c,d){var e=a.exec(c);if(!e)return d();++C,b.name||"string"!=typeof b.matches[0]||(b.name=b.matches[0],delete b.matches[0]);var f=e[0],g=e.index,l=e[0].length+g,m=function(){var e=function(){k(a,b,c,d)};return C%100>0?e():setTimeout(e,0)};if(h(g,l))return m();var q=function(a){b.name&&(a=i(b.name,a)),w[A]||(w[A]={},x[A]={}),w[A][g]={replace:e[0],"with":a},x[A][g]=l,m()},s=o(b.matches),t=function(a,c,d){if(a>=c.length)return d(f);var g=function(){t(++a,c,d)},h=e[c[a]];if(!h)return g();var k=b.matches[c[a]],l=k.language,m=k.name&&k.matches?k.matches:k,o=function(b,d,h){f=n(j(e,c[a]),b,h?i(h,d):d,f),g()};return l?r(h,l,function(a){o(h,a)}):"string"==typeof k?o(h,h,k):(p(h,m.length?m:[m],function(a){o(h,a,k.matches?k.name:0)}),void 0)};t(0,s,q)}function l(a){return z[a]}function m(a){var b=y[a]||[],c=y[B]||[];return l(a)?b:b.concat(c)}function n(a,b,c,d){var e=d.substr(a);return d.substr(0,a)+e.replace(b,c)}function o(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort(function(a,b){return b-a})}function p(a,b,c){function d(b,e){return e<b.length?k(b[e].pattern,b[e],a,function(){d(b,++e)}):(q(a,function(a){delete w[A],delete x[A],--A,c(a)}),void 0)}++A,d(b,0)}function q(a,b){function c(a,b,d,e){if(d<b.length){++D;var f=b[d],g=w[A][f];a=n(f,g.replace,g["with"],a);var h=function(){c(a,b,++d,e)};return D%250>0?h():setTimeout(h,0)}e(a)}var d=o(w[A]);c(a,d,0,b)}function r(a,b,c){var d=m(b);p(e(a),d,c)}function s(a,e,f){if(e<a.length){var g=a[e],h=d(g);return!c(g,"rainbow")&&h?(h=h.toLowerCase(),b(g,"rainbow"),r(g.innerHTML,h,function(b){g.innerHTML=b,w={},x={},v&&v(g,h),setTimeout(function(){s(a,++e,f)},0)})):s(a,++e,f)}f&&f()}function t(a,b){a=a&&"function"==typeof a.getElementsByTagName?a:document;var c,d=a.getElementsByTagName("pre"),e=a.getElementsByTagName("code"),f=[],g=[];for(c=0;c<d.length;++c)d[c].getElementsByTagName("code").length?d[c].innerHTML=d[c].innerHTML.replace(/^\s+/,"").replace(/\s+$/,""):f.push(d[c]);for(c=0;c<e.length;++c)g.push(e[c]);s(g.concat(f),0,b)}var u,v,w={},x={},y={},z={},A=0,B=0,C=0,D=0;return{extend:function(a,b,c){1==arguments.length&&(b=a,a=B),z[a]=c,y[a]=b.concat(y[a]||[])},onHighlight:function(a){v=a},addClass:function(a){u=a},color:function(){return"string"==typeof arguments[0]?r(arguments[0],arguments[1],arguments[2]):"function"==typeof arguments[0]?t(0,arguments[0]):(t(arguments[0],arguments[1]),void 0)}}}(),function(){return document.addEventListener?document.addEventListener("DOMContentLoaded",Rainbow.color,!1):(window.attachEvent("onload",Rainbow.color),void 0)}(),Rainbow.onHighlight=Rainbow.onHighlight,Rainbow.addClass=Rainbow.addClass,function(a,b){function c(){var a=p.elements;return"string"==typeof a?a.split(" "):a}function d(a){var b=o[a[m]];return b||(b={},n++,a[m]=n,o[n]=b),b}function e(a,c,e){return c||(c=b),i?c.createElement(a):(e||(e=d(c)),c=e.cache[a]?e.cache[a].cloneNode():l.test(a)?(e.cache[a]=e.createElem(a)).cloneNode():e.createElem(a),c.canHaveChildren&&!k.test(a)?e.frag.appendChild(c):c)}function f(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return p.shivMethods?e(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(p,b.frag)}function g(a){a||(a=b);var c=d(a);if(p.shivCSS&&!h&&!c.hasCSS){var e,g=a;e=g.createElement("p"),g=g.getElementsByTagName("head")[0]||g.documentElement,e.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",e=g.insertBefore(e.lastChild,g.firstChild),c.hasCSS=!!e}return i||f(a,c),a}var h,i,j=a.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",n=0,o={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",h="hidden"in a;var c;if(!(c=1==a.childNodes.length)){b.createElement("a");var d=b.createDocumentFragment();c="undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement}i=c}catch(e){i=h=!0}}();var p={elements:j.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==j.shivCSS,supportsUnknownElements:i,shivMethods:!1!==j.shivMethods,type:"default",shivDocument:g,createElement:e,createDocumentFragment:function(a,e){if(a||(a=b),i)return a.createDocumentFragment();for(var e=e||d(a),f=e.frag.cloneNode(),g=0,h=c(),j=h.length;j>g;g++)f.createElement(h[g]);return f}};a.html5=p,g(b)}(this,document),Rainbow.extend("css",[{name:"comment",pattern:/\/\*[\s\S]*?\*\//gm},{name:"constant.hex-color",pattern:/#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s|,|\))/gi},{matches:{1:"constant.numeric",2:"keyword.unit"},pattern:/(\d+)(px|em|cm|s|%)?/g},{name:"string",pattern:/('|")(.*?)\1/g},{name:"support.css-property",matches:{1:"support.vendor-prefix"},pattern:/(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g},{matches:{1:[{name:"entity.name.sass",pattern:/&amp;/g},{name:"direct-descendant",pattern:/&gt;/g},{name:"entity.name.class",pattern:/\.[\w\-_]+/g},{name:"entity.name.id",pattern:/\#[\w\-_]+/g},{name:"entity.name.pseudo",pattern:/:[\w\-_]+/g},{name:"entity.name.tag",pattern:/\w+/g}]},pattern:/([\w\ ,\n:\.\#\&\;\-_]+)(?=.*\{)/g},{matches:{2:"support.vendor-prefix",3:"support.css-value"},pattern:/(:|,)\s*(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g}],!0),Rainbow.extend([{matches:{1:{name:"keyword.operator",pattern:/\=/g},2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]),Rainbow.extend("html",[{name:"source.php.embedded",matches:{2:{language:"php"}},pattern:/&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm},{name:"source.css.embedded",matches:{1:{matches:{1:"support.tag.style",2:[{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.style",pattern:/(\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\/?)(style.*?)(&gt;)/g},2:{language:"css"},3:"support.tag.style",4:"entity.tag.style",5:"support.tag.style"},pattern:/(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm},{name:"source.js.embedded",matches:{1:{matches:{1:"support.tag.script",2:[{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},2:{language:"javascript"},3:"support.tag.script",4:"entity.tag.script",5:"support.tag.script"},pattern:/(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm},{name:"comment.html",pattern:/&lt;\!--[\S\s]*?--&gt;/g},{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\/?\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\??)(\/|\!?)(\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)('|")(.*?)(\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\-0-9]*)\b/g},{matches:{1:"support.attribute"},pattern:/\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g}],!0),Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]),Rainbow.extend("shell",[{name:"shell",matches:{1:{language:"shell"}},pattern:/\$\(([\s\S]*?)\)/gm},{matches:{2:"string"},pattern:/(\(|\s|\[|\=)(('|")[\s\S]*?(\3))/gm},{name:"keyword.operator",pattern:/&lt;|&gt;|&amp;/g},{name:"comment",pattern:/\#[\s\S]*?$/gm},{name:"storage.function",pattern:/(.+?)(?=\(\)\s{0,}\{)/g},{name:"support.command",pattern:/\b(echo|rm|ls|(mk|rm)dir|cd|find|cp|exit|pwd|exec|trap|source|shift|unset)/g},{matches:{1:"keyword"},pattern:/\b(break|case|continue|do|done|elif|else|esac|eval|export|fi|for|function|if|in|local|return|set|then|unset|until|while)(?=\(|\b)/g}],!0);