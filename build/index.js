// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"gEi2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Page Home"));
};

exports.default = _default;
},{}],"co8p":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Page About"));
};

exports.default = _default;
},{}],"nMUR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Home = _interopRequireDefault(require("./pages/Home"));

var _About = _interopRequireDefault(require("./pages/About"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = [{
  path: "/",
  exact: true,
  component: _Home.default
}, {
  path: "/about",
  component: _About.default
}];
var _default = routes;
exports.default = _default;
},{"./pages/Home":"gEi2","./pages/About":"co8p"}],"xTYH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, _routes.default.map(route => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    key: route.path,
    path: route.path,
    exact: route.exact,
    component: route.component
  })));
};

var _default = App;
exports.default = _default;
},{"./routes":"nMUR"}],"br2c":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouter = require("react-router");

var _routes = _interopRequireDefault(require("../client/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = path => {
  let component = null;
  let params = null;

  _routes.default.some(route => {
    const match = (0, _reactRouter.matchPath)(path, route);

    if (match) {
      params = match.params;
      component = route.component;
      return true;
    }
  });

  return {
    component,
    params
  };
};

exports.default = _default;
},{"../client/routes":"nMUR"}],"UOvh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _template2 = _interopRequireDefault(require("lodash/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let compiled = null;
let html = null;

var _default = ({
  markup,
  preloadedState
}) => {
  if (!compiled) {
    if (process.env.NODE_ENV === "production") {
      html = _fs.default.readFileSync(_path.default.resolve("build/static/index.html"));
    } else {
      html = _fs.default.readFileSync(_path.default.resolve(".tmp/index.html"));
    }
  }

  compiled = (0, _template2.default)(html);
  return compiled({
    markup,
    preloadedState
  });
};

exports.default = _default;
},{}],"gSIj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("../client/App"));

var _matchRouter = _interopRequireDefault(require("./matchRouter"));

var _generateHtml = _interopRequireDefault(require("./generateHtml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res, next) => {
  const {
    component
  } = (0, _matchRouter.default)(req.path);

  if (!component) {
    return next();
  }

  const context = {};
  const preloadedState = {};

  const markup = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/_react.default.createElement(_App.default, null)));

  const html = (0, _generateHtml.default)({
    markup,
    preloadedState
  });
  res.send(html);
};

exports.default = _default;
},{"../client/App":"xTYH","./matchRouter":"br2c","./generateHtml":"UOvh"}],"Focm":[function(require,module,exports) {
"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _ssrMiddleware = _interopRequireDefault(require("./ssrMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.PORT || 8080;
app.use((0, _morgan.default)("tiny"));

if (process.env.NODE_ENV === "production") {
  app.use("/static", _express.default.static("./build/static"));
} else {
  app.use("/static", _express.default.static(".tmp"));
}

app.use(_ssrMiddleware.default);
app.get("/api/:id", async (req, res) => {
  res.send({
    v1: req.params
  });
});
app.use((req, res, next) => {
  res.status(404).send("404");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
},{"./ssrMiddleware":"gSIj"}]},{},["Focm"], null)