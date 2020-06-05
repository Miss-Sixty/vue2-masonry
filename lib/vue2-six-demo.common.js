module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "b1c4")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "131d": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7478c6de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "b03a"
      );
      /* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7478c6de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7478c6de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7478c6de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "536e": /***/ function(module, exports, __webpack_require__) {
      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("b352");
      exports = ___CSS_LOADER_API_IMPORT___(false);
      // Module
      exports.push([
        module.i,
        ".masonry[data-v-7478c6de]{position:relative}.masonry-box[data-v-7478c6de]{position:absolute}",
        ""
      ]);
      // Exports
      module.exports = exports;

      /***/
    },

    /***/ "6c57": /***/ function(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__,
        __WEBPACK_AMD_DEFINE_ARRAY__,
        __WEBPACK_AMD_DEFINE_RESULT__; // addapted from the document.currentScript polyfill by Adam Miller
      // MIT license
      // source: https://github.com/amiller-gh/currentScript-polyfill

      // added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

      (function(root, factory) {
        if (true) {
          !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
          (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
          (__WEBPACK_AMD_DEFINE_RESULT__ =
            typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
              ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                  exports,
                  __WEBPACK_AMD_DEFINE_ARRAY__
                )
              : __WEBPACK_AMD_DEFINE_FACTORY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
        }
      })(typeof self !== "undefined" ? self : this, function() {
        function getCurrentScript() {
          const descriptor = Object.getOwnPropertyDescriptor(
            document,
            "currentScript"
          );
          // for chrome
          if (
            !descriptor &&
            "currentScript" in document &&
            document.currentScript
          ) {
            return document.currentScript;
          }

          // for other browsers with native support for currentScript
          if (
            descriptor &&
            descriptor.get !== getCurrentScript &&
            document.currentScript
          ) {
            return document.currentScript;
          }

          // IE 8-10 support script readyState
          // IE 11+ & Firefox support stack trace
          try {
            throw new Error();
          } catch (err) {
            // Find the second match for the "at" string to get file src url from stack.
            var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
              ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/gi,
              stackDetails =
                ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
              scriptLocation = (stackDetails && stackDetails[1]) || false,
              line = (stackDetails && stackDetails[2]) || false,
              currentLocation = document.location.href.replace(
                document.location.hash,
                ""
              ),
              pageSource,
              inlineScriptSourceRegExp,
              inlineScriptSource,
              scripts = document.getElementsByTagName("script"); // Live NodeList collection

            if (scriptLocation === currentLocation) {
              pageSource = document.documentElement.outerHTML;
              inlineScriptSourceRegExp = new RegExp(
                "(?:[^\\n]+?\\n){0," +
                  (line - 2) +
                  "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                "i"
              );
              inlineScriptSource = pageSource
                .replace(inlineScriptSourceRegExp, "$1")
                .trim();
            }

            for (var i = 0; i < scripts.length; i++) {
              // If ready state is interactive, return the script tag
              if (scripts[i].readyState === "interactive") {
                return scripts[i];
              }

              // If src matches, return the script tag
              if (scripts[i].src === scriptLocation) {
                return scripts[i];
              }

              // If inline source matches, return the script tag
              if (
                scriptLocation === currentLocation &&
                scripts[i].innerHTML &&
                scripts[i].innerHTML.trim() === inlineScriptSource
              ) {
                return scripts[i];
              }
            }

            // If no match, return null
            return null;
          }
        }

        return getCurrentScript;
      });

      /***/
    },

    /***/ "85cb": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "default", function() {
        return /* binding */ addStylesClient;
      });

      // CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js
      /**
       * Translates the list format produced by css-loader into something
       * easier to manipulate.
       */
      function listToStyles(parentId, list) {
        var styles = [];
        var newStyles = {};
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = {
            id: parentId + ":" + i,
            css: css,
            media: media,
            sourceMap: sourceMap
          };
          if (!newStyles[id]) {
            styles.push((newStyles[id] = { id: id, parts: [part] }));
          } else {
            newStyles[id].parts.push(part);
          }
        }
        return styles;
      }

      // CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

      var hasDocument = typeof document !== "undefined";

      if (typeof DEBUG !== "undefined" && DEBUG) {
        if (!hasDocument) {
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. " +
              "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
          );
        }
      }

      /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

      var stylesInDom = {
        /*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/
      };

      var head =
        hasDocument &&
        (document.head || document.getElementsByTagName("head")[0]);
      var singletonElement = null;
      var singletonCounter = 0;
      var isProduction = false;
      var noop = function() {};
      var options = null;
      var ssrIdKey = "data-vue-ssr-id";

      // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page
      var isOldIE =
        typeof navigator !== "undefined" &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function addStylesClient(parentId, list, _isProduction, _options) {
        isProduction = _isProduction;

        options = _options || {};

        var styles = listToStyles(parentId, list);
        addStylesToDom(styles);

        return function update(newList) {
          var mayRemove = [];
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
          if (newList) {
            styles = listToStyles(parentId, newList);
            addStylesToDom(styles);
          } else {
            styles = [];
          }
          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];
            if (domStyle.refs === 0) {
              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j]();
              }
              delete stylesInDom[domStyle.id];
            }
          }
        };
      }

      function addStylesToDom(styles /* Array<StyleObject> */) {
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];
          if (domStyle) {
            domStyle.refs++;
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }
            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j]));
            }
            if (domStyle.parts.length > item.parts.length) {
              domStyle.parts.length = item.parts.length;
            }
          } else {
            var parts = [];
            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j]));
            }
            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
          }
        }
      }

      function createStyleElement() {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        head.appendChild(styleElement);
        return styleElement;
      }

      function addStyle(obj /* StyleObjectPart */) {
        var update, remove;
        var styleElement = document.querySelector(
          "style[" + ssrIdKey + '~="' + obj.id + '"]'
        );

        if (styleElement) {
          if (isProduction) {
            // has SSR styles and in production mode.
            // simply do nothing.
            return noop;
          } else {
            // has SSR styles but in dev mode.
            // for some reason Chrome can't handle source map in server-rendered
            // style tags - source maps in <style> only works if the style tag is
            // created and inserted dynamically. So we remove the server rendered
            // styles and inject new ones.
            styleElement.parentNode.removeChild(styleElement);
          }
        }

        if (isOldIE) {
          // use singleton mode for IE9.
          var styleIndex = singletonCounter++;
          styleElement =
            singletonElement || (singletonElement = createStyleElement());
          update = applyToSingletonTag.bind(
            null,
            styleElement,
            styleIndex,
            false
          );
          remove = applyToSingletonTag.bind(
            null,
            styleElement,
            styleIndex,
            true
          );
        } else {
          // use multi-style-tag mode in all other cases
          styleElement = createStyleElement();
          update = applyToTag.bind(null, styleElement);
          remove = function() {
            styleElement.parentNode.removeChild(styleElement);
          };
        }

        update(obj);

        return function updateStyle(newObj /* StyleObjectPart */) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap
            ) {
              return;
            }
            update((obj = newObj));
          } else {
            remove();
          }
        };
      }

      var replaceText = (function() {
        var textStore = [];

        return function(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join("\n");
        };
      })();

      function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = styleElement.childNodes;
          if (childNodes[index]) styleElement.removeChild(childNodes[index]);
          if (childNodes.length) {
            styleElement.insertBefore(cssNode, childNodes[index]);
          } else {
            styleElement.appendChild(cssNode);
          }
        }
      }

      function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          styleElement.setAttribute("media", media);
        }
        if (options.ssrId) {
          styleElement.setAttribute(ssrIdKey, obj.id);
        }

        if (sourceMap) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */";
          // http://stackoverflow.com/a/26603875
          css +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
            " */";
        }

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }

      /***/
    },

    /***/ b03a: /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("536e");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      var add = __webpack_require__("85cb").default;
      var update = add("74d76a9a", content, true, {
        sourceMap: false,
        shadowMode: false
      });

      /***/
    },

    /***/ b1c4: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.4.1@@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== "undefined") {
        var currentScript = window.document.currentScript;
        if (true) {
          var getCurrentScript = __webpack_require__("6c57");
          currentScript = getCurrentScript();

          // for backward compatibility, because previously we directly included the polyfill
          if (!("currentScript" in document)) {
            Object.defineProperty(document, "currentScript", {
              get: getCurrentScript
            });
          }
        }

        var src =
          currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ var setPublicPath = null;

      // CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a0f9841-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./masonry/index.vue?vue&type=template&id=7478c6de&scoped=true&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          { staticClass: "masonry" },
          _vm._l(_vm.imgsArr_c, function(item, index) {
            return _c(
              "div",
              { key: index, staticClass: "masonry-box", style: _vm.boxStyle },
              [
                _c("img", {
                  staticStyle: { display: "block" },
                  attrs: { src: item.url, width: "100%", height: "auto" }
                }),
                _vm._t("default")
              ],
              2
            );
          }),
          0
        );
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./masonry/index.vue?vue&type=template&id=7478c6de&scoped=true&

      // CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./masonry/index.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var lib_vue_loader_options_masonryvue_type_script_lang_js_ = {
        name: "vue2-masonry",
        props: {
          list: {
            type: Array,
            require: true
          },
          gapWidth: {
            type: [String, Number],
            default: 10
          },
          gapHeight: {
            type: [String, Number],
            default: 10
          },
          col: [String, Number], //列数
          radius: {
            //圆角
            type: [String, Number],
            default: "5px"
          },
          boxShadow: {
            type: String,
            default: "0 2px 12px 0 rgba(0, 0, 0, 0.1)"
          },
          width: {
            type: [String, Number],
            default: 300
          },
          line: {
            //方向 horizontal vertical
            default: "v",
            validator: val => ~["v", "h"].indexOf(val)
          },
          urlName: {
            type: String,
            default: "url"
          }
        },
        data() {
          return {
            loadedCount: 0, //已预加载数
            heightArray: [],
            imgsArr_c: [], //渲染dom地址
            imgBoxEls: [], //img dom
            beginIndex: 0, //开始要排列的图片索引,首次为第二列的第一张图片，后续加载则为已经排列图片的下一个索引
            clientWidth: 0
          };
        },
        computed: {
          gapW() {
            return parseInt(this.gapWidth);
          },
          gapH() {
            return parseInt(this.gapHeight);
          },
          imgWidth() {
            return parseInt(this.width);
          },

          boxWidth() {
            const { col, clientWidth, imgWidth, gapW } = this;
            if (col) {
              return (clientWidth - (col - 1) * gapW) / col;
            }
            return imgWidth;
          },

          colCount() {
            const { col, clientWidth, imgWidth, gapW } = this;
            if (col) {
              return parseInt(col);
            }
            return ~~((clientWidth + gapW) / (imgWidth + gapW));
          },

          getLeft() {
            const { col, clientWidth, boxWidth, colCount, gapW } = this;
            if (col) return 0;
            return (clientWidth - ((boxWidth + gapW) * colCount - gapW)) / 2;
          },

          boxStyle() {
            return {
              width: this.addUnit(this.boxWidth),
              borderRadius: this.addUnit(this.radius),
              boxShadow: this.boxShadow
            };
          }
        },
        watch: {
          list() {
            this.preload();
          },
          clientWidth() {
            this.beginIndex = 0;
            this.$nextTick(() => {
              this.verticalLineProcessor();
            });
          }
        },
        created() {
          this.preload();
        },
        mounted() {
          this.getClientWidth();
          window.addEventListener("resize", () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(this.getClientWidth, 300);
          });
        },
        methods: {
          preload() {
            let len = this.list.length;

            for (let i = 0; i < len; i++) {
              if (i < this.loadedCount) return; // 只对新加载图片进行预加载
              let item = this.list[i];
              let img = new Image();

              img.src = item.url;
              img.onload = img.onerror = e => {
                this.loadedCount++;

                if (e.type === "error") {
                  // TODO:图片加载错误dom未写显示样式
                  // item._error = true;
                  // this.$emit("imgError", item);
                }
                if (this.loadedCount === len) {
                  this.imgsArr_c = this.list.concat([]); // 预加载完成，这时才开始渲染
                  this.imgBoxEls = this.$el.children;

                  this.$nextTick(() => {
                    this.calculate();
                    this.getClientWidth();
                  });
                }
              };
            }
          },

          getClientWidth() {
            if (this.clientWidth !== this.$el.clientWidth) {
              this.clientWidth = this.$el.clientWidth;
            }
          },

          calculate() {
            let processor =
              this.line === "h"
                ? this.horizontalLineProcessor
                : this.verticalLineProcessor;
            processor();
          },

          verticalLineProcessor() {
            if (this.beginIndex === 0) this.heightArray = [];
            const { imgBoxEls, list, colCount, gapH, gapW, getLeft } = this;
            let top;
            let left;
            let height;
            let boxWidth = this.boxWidth + gapW;
            let len = imgBoxEls.length;
            for (let i = this.beginIndex; i < len; i++) {
              let item = this.imgBoxEls[i];
              height = item.offsetHeight + gapH;
              if (i < colCount) {
                this.heightArray.push(item.offsetHeight);
                left = i * boxWidth + getLeft;
                top = 0;
              } else {
                let minHeight = Math.min.apply(null, this.heightArray); // 最低高低
                let minIndex = this.heightArray.indexOf(minHeight);
                top = minHeight + gapH;
                left = minIndex * boxWidth + getLeft;
                this.heightArray[minIndex] = minHeight + height; // 更新colsHeightArr
              }
              item.style.left = left + "px";
              item.style.top = top + "px";
              this.$el.style.height =
                Math.max.apply(null, this.heightArray) + "px"; //手动设定父盒子高度
            }

            this.beginIndex = list.length; // 排列完之后，新增图片从这个索引开始预加载图片和排列
          },

          horizontalLineProcessor() {},

          /**
           * util
           */
          //检测单位
          addUnit(value) {
            if (!value) return;
            value = String(value);
            return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
          }
        },

        beforeDestroy() {
          window.removeEventListener("resize", () => {
            clearTimeout(this.timer);
            this.timer = null;
          });
        }
      };

      // CONCATENATED MODULE: ./masonry/index.vue?vue&type=script&lang=js&
      /* harmony default export */ var masonryvue_type_script_lang_js_ = lib_vue_loader_options_masonryvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./masonry/index.vue?vue&type=style&index=0&id=7478c6de&lang=scss&scoped=true&
      var masonryvue_type_style_index_0_id_7478c6de_lang_scss_scoped_true_ = __webpack_require__(
        "131d"
      );

      // CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */,
        shadowMode /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        var options =
          typeof scriptExports === "function"
            ? scriptExports.options
            : scriptExports;

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = "data-v-" + scopeId;
        }

        var hook;
        if (moduleIdentifier) {
          // server build
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function() {
                injectStyles.call(
                  this,
                  (options.functional ? this.parent : this).$root.$options
                    .shadowRoot
                );
              }
            : injectStyles;
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options: options
        };
      }

      // CONCATENATED MODULE: ./masonry/index.vue

      /* normalize component */

      var component = normalizeComponent(
        masonryvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        "7478c6de",
        null
      );

      /* harmony default export */ var masonry = component.exports;
      // CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.4.1@@vue/cli-service/lib/commands/build/entry-lib.js

      /* harmony default export */ var entry_lib = (__webpack_exports__[
        "default"
      ] = masonry);

      /***/
    },

    /***/ b352: /***/ function(module, exports, __webpack_require__) {
      "use strict";

      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function(useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function(item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join("");
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names

        list.i = function(modules, mediaQuery, dedupe) {
          if (typeof modules === "string") {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, ""]];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ""; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === "function") {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function(source) {
            return "/*# sourceURL="
              .concat(cssMapping.sourceRoot || "")
              .concat(source, " */");
          });
          return [content]
            .concat(sourceURLs)
            .concat([sourceMapping])
            .join("\n");
        }

        return [content].join("\n");
      } // Adapted from convert-source-map (MIT)

      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(
          unescape(encodeURIComponent(JSON.stringify(sourceMap)))
        );
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
          base64
        );
        return "/*# ".concat(data, " */");
      }

      /***/
    }

    /******/
  }
)["default"];
//# sourceMappingURL=vue2-six-demo.common.js.map
