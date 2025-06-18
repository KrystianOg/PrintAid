import {
  require_react
} from "./chunk-2CLD7BNN.js";
import {
  __toESM
} from "./chunk-WOOG5QLI.js";

// node_modules/@medusajs/icons/dist/esm/academic-cap-solid.js
var React = __toESM(require_react());
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var AcademicCapSolid = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React.createElement("g", { fill: color, clipPath: "url(#a)" }, React.createElement("path", { d: "M8.823 10.513c-.408.21-.866.32-1.323.32s-.916-.11-1.324-.32L2.611 8.677v3.267c0 1.605 2.46 2.445 4.889 2.445s4.889-.84 4.889-2.445V8.678z" }), React.createElement("path", { d: "M14.361 7.7a9.3 9.3 0 0 1 .192-2.134c.016-.116.058-.17.058-.4 0-.534-.295-1.018-.77-1.262L8.213 1.006a1.56 1.56 0 0 0-1.426 0L1.16 3.905c-.475.244-.77.728-.77 1.262s.295 1.018.77 1.263l5.628 2.897a1.56 1.56 0 0 0 1.426 0l4.845-2.495c-.017.304-.04.607-.03.91.021.687.112 1.375.268 2.046a.666.666 0 1 0 1.298-.3 9.2 9.2 0 0 1-.233-1.787" })),
      React.createElement("defs", null, React.createElement("clipPath", { id: "a" }, React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AcademicCapSolid.displayName = "AcademicCapSolid";

// node_modules/@medusajs/icons/dist/esm/academic-cap.js
var React2 = __toESM(require_react());
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var AcademicCap = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest2(_b, ["color"]);
    return React2.createElement(
      "svg",
      __spreadValues2({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React2.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React2.createElement("path", { d: "m7.907 1.599 5.629 2.897a.754.754 0 0 1 0 1.34L7.907 8.736a.89.89 0 0 1-.814 0L1.464 5.837a.754.754 0 0 1 0-1.34l5.629-2.898a.89.89 0 0 1 .814 0" }),
        React2.createElement("path", { d: "M13.944 5.167a9.94 9.94 0 0 0 0 4.472M3.278 9.056v2.889c0 .98 1.89 1.777 4.222 1.777s4.222-.796 4.222-1.777v-2.89" })
      ),
      React2.createElement("defs", null, React2.createElement("clipPath", { id: "a" }, React2.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AcademicCap.displayName = "AcademicCap";

// node_modules/@medusajs/icons/dist/esm/adjustments-done.js
var React3 = __toESM(require_react());
var __defProp3 = Object.defineProperty;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b)) {
      if (__propIsEnum3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    }
  return a;
};
var __objRest3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var AdjustmentsDone = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest3(_b, ["color"]);
    return React3.createElement(
      "svg",
      __spreadValues3({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React3.createElement("g", { clipPath: "url(#a)" }, React3.createElement(
        "path",
        {
          fill: color,
          d: "M8.5 2.528h-.778a.75.75 0 1 0 0 1.5h1.08a4 4 0 0 1-.302-1.5M10.695 6.07a4 4 0 0 1-1.21-.94.75.75 0 0 0-.29.592V6.75H1.5a.75.75 0 0 0 0 1.5h7.694v1.028a.75.75 0 0 0 1.5 0zM5.806 1.5a.75.75 0 1 0-1.5 0v1.028H1.5a.75.75 0 0 0 0 1.5h2.806v1.028a.75.75 0 0 0 1.5 0V1.5M12.611 6.75a.75.75 0 0 0 0 1.5h.889a.75.75 0 0 0 0-1.5zM6.972 11.722a.75.75 0 0 1 .75-.75H13.5a.75.75 0 1 1 0 1.5H7.722a.75.75 0 0 1-.75-.75M1.5 10.972a.75.75 0 0 0 0 1.5h2.806V13.5a.75.75 0 0 0 1.5 0V9.944a.75.75 0 1 0-1.5 0v1.028z"
        }
      ), React3.createElement("circle", { cx: 12.5, cy: 2.5, r: 2.5, fill: "#60A5FA" }), React3.createElement(
        "circle",
        {
          cx: 12.5,
          cy: 2.5,
          r: 2,
          stroke: color,
          strokeOpacity: 0.12
        }
      )),
      React3.createElement("defs", null, React3.createElement("clipPath", { id: "a" }, React3.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AdjustmentsDone.displayName = "AdjustmentsDone";

// node_modules/@medusajs/icons/dist/esm/adjustments.js
var React4 = __toESM(require_react());
var __defProp4 = Object.defineProperty;
var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp4.call(b, prop))
      __defNormalProp4(a, prop, b[prop]);
  if (__getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(b)) {
      if (__propIsEnum4.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    }
  return a;
};
var __objRest4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Adjustments = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest4(_b, ["color"]);
    return React4.createElement(
      "svg",
      __spreadValues4({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React4.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React4.createElement("path", { d: "M12.611 7.5h.889M1.5 7.5h8.444M7.722 3.278H13.5M1.5 3.278h3.556M7.722 11.722H13.5M1.5 11.722h3.556M9.944 5.722v3.556M5.056 1.5v3.556M5.056 9.944V13.5" })
      ),
      React4.createElement("defs", null, React4.createElement("clipPath", { id: "a" }, React4.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Adjustments.displayName = "Adjustments";

// node_modules/@medusajs/icons/dist/esm/ai-assistent-luminosity.js
var React5 = __toESM(require_react());
var __defProp5 = Object.defineProperty;
var __getOwnPropSymbols5 = Object.getOwnPropertySymbols;
var __hasOwnProp5 = Object.prototype.hasOwnProperty;
var __propIsEnum5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp5 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp5.call(b, prop))
      __defNormalProp5(a, prop, b[prop]);
  if (__getOwnPropSymbols5)
    for (var prop of __getOwnPropSymbols5(b)) {
      if (__propIsEnum5.call(b, prop))
        __defNormalProp5(a, prop, b[prop]);
    }
  return a;
};
var __objRest5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols5)
    for (var prop of __getOwnPropSymbols5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var AiAssistentLuminosity = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest5(_b, ["color"]);
    return React5.createElement(
      "svg",
      __spreadValues5({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 16,
        fill: "none",
        ref
      }, props),
      React5.createElement("g", { filter: "url(#a)" }, React5.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.11, fill: "url(#b)" }), React5.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.11, fill: "url(#c)" })),
      React5.createElement(
        "g",
        {
          filter: "url(#d)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          }
        },
        React5.createElement("circle", { cx: 7.5, cy: 5, r: 4, fill: "url(#e)" }),
        React5.createElement("circle", { cx: 7.5, cy: 5, r: 3.9, stroke: "url(#f)", strokeWidth: 0.2 })
      ),
      React5.createElement(
        "g",
        {
          filter: "url(#g)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          }
        },
        React5.createElement("circle", { cx: 10, cy: 8.5, r: 4, fill: "url(#h)" }),
        React5.createElement("circle", { cx: 10, cy: 8.5, r: 3.9, stroke: "url(#i)", strokeWidth: 0.2 })
      ),
      React5.createElement(
        "g",
        {
          filter: "url(#j)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(-1 0 0 1 9 2.5)"
        },
        React5.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#k)" }),
        React5.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#l)", strokeWidth: 0.2 })
      ),
      React5.createElement(
        "g",
        {
          filter: "url(#m)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(0 -1 -1 0 11.5 11.5)"
        },
        React5.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#n)" }),
        React5.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#o)", strokeWidth: 0.2 })
      ),
      React5.createElement(
        "g",
        {
          filter: "url(#p)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(-1 0 0 1 11.5 6)"
        },
        React5.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#q)" }),
        React5.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#r)", strokeWidth: 0.2 })
      ),
      React5.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 7.11,
          fill: color,
          style: {
            mixBlendMode: "color"
          }
        }
      ),
      React5.createElement("defs", null, React5.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 7.5,
          x2: 7.5,
          y1: 0.39,
          y2: 14.61,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { offset: 0.2, stopColor: "#C686FF" }),
        React5.createElement("stop", { offset: 0.8, stopColor: "#8D99FF" })
      ), React5.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 3.115,
          x2: 11.463,
          y1: 7.468,
          y2: 10.558,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#FF6778", stopOpacity: 0.8 }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.1 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 7.5,
          x2: 11.5,
          y1: 5,
          y2: 5,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 11.5,
          x2: 7.5,
          y1: 5,
          y2: 5,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#fff" }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "h",
          x1: 10,
          x2: 14,
          y1: 8.5,
          y2: 8.5,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 14,
          x2: 10,
          y1: 8.5,
          y2: 8.5,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF" }),
        React5.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF" }),
        React5.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF" }),
        React5.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "q",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React5.createElement(
        "linearGradient",
        {
          id: "r",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React5.createElement("stop", { stopColor: "#fff" }),
        React5.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React5.createElement(
        "filter",
        {
          id: "a",
          width: 15.47,
          height: 15.22,
          x: 0.14,
          y: 0.39,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React5.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React5.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React5.createElement("feOffset", { dy: 0.25 }),
        React5.createElement("feGaussianBlur", { stdDeviation: 0.125 }),
        React5.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React5.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React5.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_9187_11750"
          }
        ),
        React5.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_9187_11750",
            result: "shape"
          }
        ),
        React5.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React5.createElement("feOffset", { dx: -0.25, dy: -0.25 }),
        React5.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React5.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
        React5.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_9187_11750" }),
        React5.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React5.createElement("feOffset", { dx: 0.25, dy: 0.25 }),
        React5.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React5.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
        React5.createElement(
          "feBlend",
          {
            in2: "effect2_innerShadow_9187_11750",
            result: "effect3_innerShadow_9187_11750"
          }
        ),
        React5.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React5.createElement("feOffset", { dx: 1, dy: 1 }),
        React5.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React5.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React5.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" }),
        React5.createElement(
          "feBlend",
          {
            in2: "effect3_innerShadow_9187_11750",
            result: "effect4_innerShadow_9187_11750"
          }
        )
      ), React5.createElement(
        "filter",
        {
          id: "d",
          width: 9,
          height: 9,
          x: 3,
          y: 0.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React5.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React5.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React5.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_9187_11750",
            stdDeviation: 0.25
          }
        )
      ), React5.createElement(
        "filter",
        {
          id: "g",
          width: 9,
          height: 9,
          x: 5.5,
          y: 4,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React5.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React5.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React5.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_9187_11750",
            stdDeviation: 0.25
          }
        )
      ), React5.createElement(
        "filter",
        {
          id: "j",
          width: 9,
          height: 9,
          x: 0.5,
          y: 2,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React5.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React5.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React5.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_9187_11750",
            stdDeviation: 0.25
          }
        )
      ), React5.createElement(
        "filter",
        {
          id: "m",
          width: 9,
          height: 9,
          x: 3,
          y: 3,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React5.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React5.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React5.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_9187_11750",
            stdDeviation: 0.25
          }
        )
      ), React5.createElement(
        "filter",
        {
          id: "p",
          width: 9,
          height: 9,
          x: 3,
          y: 5.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React5.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React5.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React5.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_9187_11750",
            stdDeviation: 0.25
          }
        )
      ))
    );
  }
);
AiAssistentLuminosity.displayName = "AiAssistentLuminosity";

// node_modules/@medusajs/icons/dist/esm/ai-assistent.js
var React6 = __toESM(require_react());
var __defProp6 = Object.defineProperty;
var __getOwnPropSymbols6 = Object.getOwnPropertySymbols;
var __hasOwnProp6 = Object.prototype.hasOwnProperty;
var __propIsEnum6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp6 = (obj, key, value) => key in obj ? __defProp6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp6.call(b, prop))
      __defNormalProp6(a, prop, b[prop]);
  if (__getOwnPropSymbols6)
    for (var prop of __getOwnPropSymbols6(b)) {
      if (__propIsEnum6.call(b, prop))
        __defNormalProp6(a, prop, b[prop]);
    }
  return a;
};
var __objRest6 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols6)
    for (var prop of __getOwnPropSymbols6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var AiAssistent = React6.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest6(_b, ["color"]);
    return React6.createElement(
      "svg",
      __spreadValues6({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 16,
        fill: "none",
        ref
      }, props),
      React6.createElement("g", { filter: "url(#a)" }, React6.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.11, fill: "url(#b)" }), React6.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.11, fill: "url(#c)" })),
      React6.createElement(
        "g",
        {
          filter: "url(#d)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          }
        },
        React6.createElement("circle", { cx: 7.5, cy: 5, r: 4, fill: "url(#e)" }),
        React6.createElement("circle", { cx: 7.5, cy: 5, r: 3.9, stroke: "url(#f)", strokeWidth: 0.2 })
      ),
      React6.createElement(
        "g",
        {
          filter: "url(#g)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          }
        },
        React6.createElement("circle", { cx: 10, cy: 8.5, r: 4, fill: "url(#h)" }),
        React6.createElement("circle", { cx: 10, cy: 8.5, r: 3.9, stroke: "url(#i)", strokeWidth: 0.2 })
      ),
      React6.createElement(
        "g",
        {
          filter: "url(#j)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(-1 0 0 1 9 2.5)"
        },
        React6.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#k)" }),
        React6.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#l)", strokeWidth: 0.2 })
      ),
      React6.createElement(
        "g",
        {
          filter: "url(#m)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(0 -1 -1 0 11.5 11.5)"
        },
        React6.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#n)" }),
        React6.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#o)", strokeWidth: 0.2 })
      ),
      React6.createElement(
        "g",
        {
          filter: "url(#p)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(-1 0 0 1 11.5 6)"
        },
        React6.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#q)" }),
        React6.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#r)", strokeWidth: 0.2 })
      ),
      React6.createElement("defs", null, React6.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 7.5,
          x2: 7.5,
          y1: 0.39,
          y2: 14.61,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { offset: 0.2, stopColor: "#C686FF" }),
        React6.createElement("stop", { offset: 0.8, stopColor: "#8D99FF" })
      ), React6.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 3.115,
          x2: 11.463,
          y1: 7.468,
          y2: 10.558,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#FF6778", stopOpacity: 0.8 }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.1 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 7.5,
          x2: 11.5,
          y1: 5,
          y2: 5,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 11.5,
          x2: 7.5,
          y1: 5,
          y2: 5,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#fff" }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "h",
          x1: 10,
          x2: 14,
          y1: 8.5,
          y2: 8.5,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 14,
          x2: 10,
          y1: 8.5,
          y2: 8.5,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF" }),
        React6.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF" }),
        React6.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF" }),
        React6.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "q",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), React6.createElement(
        "linearGradient",
        {
          id: "r",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        React6.createElement("stop", { stopColor: "#fff" }),
        React6.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React6.createElement(
        "filter",
        {
          id: "a",
          width: 15.47,
          height: 15.22,
          x: 0.14,
          y: 0.39,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React6.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React6.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React6.createElement("feOffset", { dy: 0.25 }),
        React6.createElement("feGaussianBlur", { stdDeviation: 0.125 }),
        React6.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React6.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React6.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_7446_46535"
          }
        ),
        React6.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_7446_46535",
            result: "shape"
          }
        ),
        React6.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React6.createElement("feOffset", { dx: -0.25, dy: -0.25 }),
        React6.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React6.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
        React6.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_7446_46535" }),
        React6.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React6.createElement("feOffset", { dx: 0.25, dy: 0.25 }),
        React6.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React6.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
        React6.createElement(
          "feBlend",
          {
            in2: "effect2_innerShadow_7446_46535",
            result: "effect3_innerShadow_7446_46535"
          }
        ),
        React6.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React6.createElement("feOffset", { dx: 1, dy: 1 }),
        React6.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React6.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React6.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" }),
        React6.createElement(
          "feBlend",
          {
            in2: "effect3_innerShadow_7446_46535",
            result: "effect4_innerShadow_7446_46535"
          }
        )
      ), React6.createElement(
        "filter",
        {
          id: "d",
          width: 9,
          height: 9,
          x: 3,
          y: 0.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React6.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React6.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React6.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), React6.createElement(
        "filter",
        {
          id: "g",
          width: 9,
          height: 9,
          x: 5.5,
          y: 4,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React6.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React6.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React6.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), React6.createElement(
        "filter",
        {
          id: "j",
          width: 9,
          height: 9,
          x: 0.5,
          y: 2,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React6.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React6.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React6.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), React6.createElement(
        "filter",
        {
          id: "m",
          width: 9,
          height: 9,
          x: 3,
          y: 3,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React6.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React6.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React6.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), React6.createElement(
        "filter",
        {
          id: "p",
          width: 9,
          height: 9,
          x: 3,
          y: 5.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React6.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React6.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React6.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ))
    );
  }
);
AiAssistent.displayName = "AiAssistent";

// node_modules/@medusajs/icons/dist/esm/amazon.js
var React7 = __toESM(require_react());
var __defProp7 = Object.defineProperty;
var __getOwnPropSymbols7 = Object.getOwnPropertySymbols;
var __hasOwnProp7 = Object.prototype.hasOwnProperty;
var __propIsEnum7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp7 = (obj, key, value) => key in obj ? __defProp7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp7.call(b, prop))
      __defNormalProp7(a, prop, b[prop]);
  if (__getOwnPropSymbols7)
    for (var prop of __getOwnPropSymbols7(b)) {
      if (__propIsEnum7.call(b, prop))
        __defNormalProp7(a, prop, b[prop]);
    }
  return a;
};
var Amazon = React7.forwardRef(
  (props, ref) => {
    return React7.createElement(
      "svg",
      __spreadValues7({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React7.createElement(
        "path",
        {
          fill: "#F90",
          d: "M.028 11.263q.067-.11.218-.014 3.409 1.978 7.418 1.978 2.675 0 5.28-.996l.197-.088q.128-.054.183-.081c.141-.055.244-.029.328.081.075.109.056.21-.075.3-.16.119-.375.256-.629.409q-1.166.695-2.616 1.079a11 11 0 0 1-6.844-.361 11.2 11.2 0 0 1-3.394-2.094q-.093-.07-.094-.137.002-.044.032-.082zm4.103-3.887q0-.942.465-1.61a2.86 2.86 0 0 1 1.275-1.01c.497-.21 1.097-.36 1.82-.45q.366-.043 1.2-.109v-.23c0-.582-.066-.975-.188-1.173q-.282-.404-.9-.406H7.69q-.45.042-.778.288a1.13 1.13 0 0 0-.422.685c-.038.187-.129.29-.272.318l-1.575-.197c-.155-.037-.233-.112-.233-.243 0-.029.005-.057.014-.094q.231-1.209 1.138-1.8C6.17.96 6.873.735 7.679.689h.338c1.031 0 1.848.271 2.43.806.084.094.169.187.253.3.075.103.14.196.177.281a1.2 1.2 0 0 1 .122.356c.037.16.065.263.084.32.019.064.039.187.048.384q.01.291.012.345v3.3c0 .235.038.45.103.648q.099.294.197.421l.319.421q.084.128.085.225 0 .113-.113.196c-.75.657-1.162 1.013-1.226 1.07q-.156.126-.394.027a4 4 0 0 1-.329-.31l-.194-.217A6 6 0 0 1 9.393 9l-.187-.272c-.507.554-1.002.9-1.5 1.04-.31.094-.684.143-1.144.143-.694 0-1.275-.215-1.725-.647q-.675-.643-.675-1.837l-.031-.048zm2.346-.274q-.001.53.265.853a.9.9 0 0 0 .844.307 1 1 0 0 1 .104-.014c.384-.1.675-.346.89-.736q.155-.261.225-.569c.056-.2.075-.369.084-.5.01-.122.01-.337.01-.628v-.338c-.525 0-.928.038-1.2.113-.797.225-1.2.731-1.2 1.519l-.022-.013zm5.726 4.392a.5.5 0 0 1 .083-.106q.34-.228.656-.312.496-.126 1.007-.15a.8.8 0 0 1 .257.018c.406.038.656.105.732.207.04.056.062.142.062.243v.094c0 .319-.093.694-.265 1.125q-.261.646-.723 1.05-.068.057-.123.056-.027.002-.056-.007c-.056-.028-.067-.075-.04-.15q.505-1.184.504-1.65a.36.36 0 0 0-.055-.215c-.09-.104-.343-.16-.765-.16q-.227 0-.543.028a25 25 0 0 0-.625.084q-.083 0-.113-.027c-.018-.019-.022-.03-.012-.048 0-.01.004-.019.012-.04v-.037z"
        }
      )
    );
  }
);
Amazon.displayName = "Amazon";

// node_modules/@medusajs/icons/dist/esm/apple.js
var React8 = __toESM(require_react());
var __defProp8 = Object.defineProperty;
var __getOwnPropSymbols8 = Object.getOwnPropertySymbols;
var __hasOwnProp8 = Object.prototype.hasOwnProperty;
var __propIsEnum8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp8 = (obj, key, value) => key in obj ? __defProp8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp8.call(b, prop))
      __defNormalProp8(a, prop, b[prop]);
  if (__getOwnPropSymbols8)
    for (var prop of __getOwnPropSymbols8(b)) {
      if (__propIsEnum8.call(b, prop))
        __defNormalProp8(a, prop, b[prop]);
    }
  return a;
};
var Apple = React8.forwardRef(
  (props, ref) => {
    return React8.createElement(
      "svg",
      __spreadValues8({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React8.createElement(
        "path",
        {
          fill: "#000",
          d: "M9.945.778c-.628.073-1.517.627-1.958 1.22-.255.339-.404.663-.534 1.15l-.065.244.003.26c.003.141.011.274.019.295.02.051.058.059.33.06.225.002.24 0 .432-.057.515-.15.893-.375 1.162-.694a5 5 0 0 1 .213-.236c.17-.167.387-.537.507-.858.12-.322.174-.621.19-1.047l.01-.273-.041-.04c-.045-.045-.07-.047-.268-.024"
        }
      ),
      React8.createElement(
        "path",
        {
          fill: "#000",
          d: "M9.801 3.967c-.305.016-1.127.244-1.718.475-.358.14-.358.14-.43.153-.123.02-.425-.068-.945-.278a6.4 6.4 0 0 0-.98-.288c-.175-.039-.467-.043-.594-.008-.05.014-.21.047-.356.071a2.4 2.4 0 0 0-.722.225c-.708.346-1.191.843-1.574 1.62-.17.343-.294.678-.387 1.034-.137.53-.14 1.544-.006 2.16.015.076.03.165.03.2 0 .075.013.13.143.64.12.473.108.434.338 1.011.322.81.424.99 1.083 1.898.27.372.407.541.606.743.208.213.376.337.614.454.268.131.386.16.633.159.316 0 .57-.065 1.055-.268.305-.129.325-.135.88-.249.167-.035.322-.032.556.006l.266.04c.13.019.263.062.606.2.413.166.705.24 1.01.259.445.027.874-.17 1.332-.61.467-.452.904-1.07 1.345-1.905a5.6 5.6 0 0 0 .341-.825.7.7 0 0 1 .054-.153.2.2 0 0 0 .03-.083c0-.056-.113-.144-.312-.244a2.8 2.8 0 0 1-.992-.895c-.178-.267-.357-.667-.401-.903-.076-.388-.098-.814-.054-1.11.01-.078.049-.24.086-.363.159-.535.268-.75.517-1.015.075-.079.137-.151.137-.157 0-.027.378-.343.47-.394a1 1 0 0 0 .144-.102c.085-.083.073-.115-.14-.365a3.3 3.3 0 0 0-1.068-.815 2.7 2.7 0 0 0-.7-.244 4 4 0 0 0-.897-.074"
        }
      )
    );
  }
);
Apple.displayName = "Apple";

// node_modules/@medusajs/icons/dist/esm/archive-box.js
var React9 = __toESM(require_react());
var __defProp9 = Object.defineProperty;
var __getOwnPropSymbols9 = Object.getOwnPropertySymbols;
var __hasOwnProp9 = Object.prototype.hasOwnProperty;
var __propIsEnum9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp9 = (obj, key, value) => key in obj ? __defProp9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp9.call(b, prop))
      __defNormalProp9(a, prop, b[prop]);
  if (__getOwnPropSymbols9)
    for (var prop of __getOwnPropSymbols9(b)) {
      if (__propIsEnum9.call(b, prop))
        __defNormalProp9(a, prop, b[prop]);
    }
  return a;
};
var __objRest7 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols9)
    for (var prop of __getOwnPropSymbols9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArchiveBox = React9.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest7(_b, ["color"]);
    return React9.createElement(
      "svg",
      __spreadValues9({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React9.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React9.createElement("path", { d: "M12.611 5.056v6.222c0 .982-.795 1.778-1.778 1.778H4.167a1.777 1.777 0 0 1-1.778-1.778V5.056M13.056 1.944H1.944a.89.89 0 0 0-.888.89v1.333c0 .49.398.888.888.888h11.112a.89.89 0 0 0 .888-.888V2.833a.89.89 0 0 0-.889-.889M5.722 7.722h3.556" })
      ),
      React9.createElement("defs", null, React9.createElement("clipPath", { id: "a" }, React9.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArchiveBox.displayName = "ArchiveBox";

// node_modules/@medusajs/icons/dist/esm/arrow-down-circle.js
var React10 = __toESM(require_react());
var __defProp10 = Object.defineProperty;
var __getOwnPropSymbols10 = Object.getOwnPropertySymbols;
var __hasOwnProp10 = Object.prototype.hasOwnProperty;
var __propIsEnum10 = Object.prototype.propertyIsEnumerable;
var __defNormalProp10 = (obj, key, value) => key in obj ? __defProp10(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues10 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp10.call(b, prop))
      __defNormalProp10(a, prop, b[prop]);
  if (__getOwnPropSymbols10)
    for (var prop of __getOwnPropSymbols10(b)) {
      if (__propIsEnum10.call(b, prop))
        __defNormalProp10(a, prop, b[prop]);
    }
  return a;
};
var __objRest8 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp10.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols10)
    for (var prop of __getOwnPropSymbols10(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum10.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowDownCircle = React10.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest8(_b, ["color"]);
    return React10.createElement(
      "svg",
      __spreadValues10({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React10.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.693 8.249L7.971 10.86a.665.665 0 0 1-.942 0L4.807 8.638a.667.667 0 1 1 .943-.943l1.084 1.084V4.611a.667.667 0 0 1 1.334 0V8.78l1.084-1.084a.667.667 0 1 1 .943.943z"
        }
      )
    );
  }
);
ArrowDownCircle.displayName = "ArrowDownCircle";

// node_modules/@medusajs/icons/dist/esm/arrow-down-left-mini.js
var React11 = __toESM(require_react());
var __defProp11 = Object.defineProperty;
var __getOwnPropSymbols11 = Object.getOwnPropertySymbols;
var __hasOwnProp11 = Object.prototype.hasOwnProperty;
var __propIsEnum11 = Object.prototype.propertyIsEnumerable;
var __defNormalProp11 = (obj, key, value) => key in obj ? __defProp11(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues11 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp11.call(b, prop))
      __defNormalProp11(a, prop, b[prop]);
  if (__getOwnPropSymbols11)
    for (var prop of __getOwnPropSymbols11(b)) {
      if (__propIsEnum11.call(b, prop))
        __defNormalProp11(a, prop, b[prop]);
    }
  return a;
};
var __objRest9 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp11.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols11)
    for (var prop of __getOwnPropSymbols11(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum11.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowDownLeftMini = React11.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest9(_b, ["color"]);
    return React11.createElement(
      "svg",
      __spreadValues11({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React11.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 8.167h9.334c.982 0 1.778-.796 1.778-1.778V2.833"
        }
      ),
      React11.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.722 4.389 1.944 8.167l3.778 3.778"
        }
      )
    );
  }
);
ArrowDownLeftMini.displayName = "ArrowDownLeftMini";

// node_modules/@medusajs/icons/dist/esm/arrow-down-left.js
var React12 = __toESM(require_react());
var __defProp12 = Object.defineProperty;
var __getOwnPropSymbols12 = Object.getOwnPropertySymbols;
var __hasOwnProp12 = Object.prototype.hasOwnProperty;
var __propIsEnum12 = Object.prototype.propertyIsEnumerable;
var __defNormalProp12 = (obj, key, value) => key in obj ? __defProp12(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues12 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp12.call(b, prop))
      __defNormalProp12(a, prop, b[prop]);
  if (__getOwnPropSymbols12)
    for (var prop of __getOwnPropSymbols12(b)) {
      if (__propIsEnum12.call(b, prop))
        __defNormalProp12(a, prop, b[prop]);
    }
  return a;
};
var __objRest10 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp12.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols12)
    for (var prop of __getOwnPropSymbols12(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum12.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowDownLeft = React12.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest10(_b, ["color"]);
    return React12.createElement(
      "svg",
      __spreadValues12({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React12.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 8.167h9.334c.982 0 1.778-.796 1.778-1.778V2.833"
        }
      ),
      React12.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.722 4.389 1.944 8.167l3.778 3.778"
        }
      )
    );
  }
);
ArrowDownLeft.displayName = "ArrowDownLeft";

// node_modules/@medusajs/icons/dist/esm/arrow-down-mini.js
var React13 = __toESM(require_react());
var __defProp13 = Object.defineProperty;
var __getOwnPropSymbols13 = Object.getOwnPropertySymbols;
var __hasOwnProp13 = Object.prototype.hasOwnProperty;
var __propIsEnum13 = Object.prototype.propertyIsEnumerable;
var __defNormalProp13 = (obj, key, value) => key in obj ? __defProp13(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues13 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp13.call(b, prop))
      __defNormalProp13(a, prop, b[prop]);
  if (__getOwnPropSymbols13)
    for (var prop of __getOwnPropSymbols13(b)) {
      if (__propIsEnum13.call(b, prop))
        __defNormalProp13(a, prop, b[prop]);
    }
  return a;
};
var __objRest11 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp13.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols13)
    for (var prop of __getOwnPropSymbols13(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum13.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowDownMini = React13.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest11(_b, ["color"]);
    return React13.createElement(
      "svg",
      __spreadValues13({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React13.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.056V1.944M11.278 9.278 7.5 13.056 3.722 9.278"
        }
      )
    );
  }
);
ArrowDownMini.displayName = "ArrowDownMini";

// node_modules/@medusajs/icons/dist/esm/arrow-down-right-mini.js
var React14 = __toESM(require_react());
var __defProp14 = Object.defineProperty;
var __getOwnPropSymbols14 = Object.getOwnPropertySymbols;
var __hasOwnProp14 = Object.prototype.hasOwnProperty;
var __propIsEnum14 = Object.prototype.propertyIsEnumerable;
var __defNormalProp14 = (obj, key, value) => key in obj ? __defProp14(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues14 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp14.call(b, prop))
      __defNormalProp14(a, prop, b[prop]);
  if (__getOwnPropSymbols14)
    for (var prop of __getOwnPropSymbols14(b)) {
      if (__propIsEnum14.call(b, prop))
        __defNormalProp14(a, prop, b[prop]);
    }
  return a;
};
var __objRest12 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp14.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols14)
    for (var prop of __getOwnPropSymbols14(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum14.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowDownRightMini = React14.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest12(_b, ["color"]);
    return React14.createElement(
      "svg",
      __spreadValues14({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React14.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 8.167H3.722a1.777 1.777 0 0 1-1.778-1.778V2.833"
        }
      ),
      React14.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m9.278 4.389 3.778 3.778-3.778 3.778"
        }
      )
    );
  }
);
ArrowDownRightMini.displayName = "ArrowDownRightMini";

// node_modules/@medusajs/icons/dist/esm/arrow-down-tray.js
var React15 = __toESM(require_react());
var __defProp15 = Object.defineProperty;
var __getOwnPropSymbols15 = Object.getOwnPropertySymbols;
var __hasOwnProp15 = Object.prototype.hasOwnProperty;
var __propIsEnum15 = Object.prototype.propertyIsEnumerable;
var __defNormalProp15 = (obj, key, value) => key in obj ? __defProp15(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues15 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp15.call(b, prop))
      __defNormalProp15(a, prop, b[prop]);
  if (__getOwnPropSymbols15)
    for (var prop of __getOwnPropSymbols15(b)) {
      if (__propIsEnum15.call(b, prop))
        __defNormalProp15(a, prop, b[prop]);
    }
  return a;
};
var __objRest13 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp15.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols15)
    for (var prop of __getOwnPropSymbols15(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum15.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowDownTray = React15.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest13(_b, ["color"]);
    return React15.createElement(
      "svg",
      __spreadValues15({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React15.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 9.944v1.334c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V9.944M4.389 5.5 7.5 8.611 10.611 5.5M7.5 8.611V1.944"
        }
      )
    );
  }
);
ArrowDownTray.displayName = "ArrowDownTray";

// node_modules/@medusajs/icons/dist/esm/arrow-down.js
var React16 = __toESM(require_react());
var __defProp16 = Object.defineProperty;
var __getOwnPropSymbols16 = Object.getOwnPropertySymbols;
var __hasOwnProp16 = Object.prototype.hasOwnProperty;
var __propIsEnum16 = Object.prototype.propertyIsEnumerable;
var __defNormalProp16 = (obj, key, value) => key in obj ? __defProp16(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues16 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp16.call(b, prop))
      __defNormalProp16(a, prop, b[prop]);
  if (__getOwnPropSymbols16)
    for (var prop of __getOwnPropSymbols16(b)) {
      if (__propIsEnum16.call(b, prop))
        __defNormalProp16(a, prop, b[prop]);
    }
  return a;
};
var __objRest14 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp16.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols16)
    for (var prop of __getOwnPropSymbols16(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum16.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowDown = React16.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest14(_b, ["color"]);
    return React16.createElement(
      "svg",
      __spreadValues16({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React16.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.667 13.056V1.944M11.445 9.278l-3.778 3.778-3.778-3.778"
        }
      )
    );
  }
);
ArrowDown.displayName = "ArrowDown";

// node_modules/@medusajs/icons/dist/esm/arrow-left-mini.js
var React17 = __toESM(require_react());
var __defProp17 = Object.defineProperty;
var __getOwnPropSymbols17 = Object.getOwnPropertySymbols;
var __hasOwnProp17 = Object.prototype.hasOwnProperty;
var __propIsEnum17 = Object.prototype.propertyIsEnumerable;
var __defNormalProp17 = (obj, key, value) => key in obj ? __defProp17(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues17 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp17.call(b, prop))
      __defNormalProp17(a, prop, b[prop]);
  if (__getOwnPropSymbols17)
    for (var prop of __getOwnPropSymbols17(b)) {
      if (__propIsEnum17.call(b, prop))
        __defNormalProp17(a, prop, b[prop]);
    }
  return a;
};
var __objRest15 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp17.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols17)
    for (var prop of __getOwnPropSymbols17(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum17.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowLeftMini = React17.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest15(_b, ["color"]);
    return React17.createElement(
      "svg",
      __spreadValues17({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React17.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        }
      )
    );
  }
);
ArrowLeftMini.displayName = "ArrowLeftMini";

// node_modules/@medusajs/icons/dist/esm/arrow-left.js
var React18 = __toESM(require_react());
var __defProp18 = Object.defineProperty;
var __getOwnPropSymbols18 = Object.getOwnPropertySymbols;
var __hasOwnProp18 = Object.prototype.hasOwnProperty;
var __propIsEnum18 = Object.prototype.propertyIsEnumerable;
var __defNormalProp18 = (obj, key, value) => key in obj ? __defProp18(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues18 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp18.call(b, prop))
      __defNormalProp18(a, prop, b[prop]);
  if (__getOwnPropSymbols18)
    for (var prop of __getOwnPropSymbols18(b)) {
      if (__propIsEnum18.call(b, prop))
        __defNormalProp18(a, prop, b[prop]);
    }
  return a;
};
var __objRest16 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp18.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols18)
    for (var prop of __getOwnPropSymbols18(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum18.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowLeft = React18.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest16(_b, ["color"]);
    return React18.createElement(
      "svg",
      __spreadValues18({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React18.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        }
      )
    );
  }
);
ArrowLeft.displayName = "ArrowLeft";

// node_modules/@medusajs/icons/dist/esm/arrow-long-down.js
var React19 = __toESM(require_react());
var __defProp19 = Object.defineProperty;
var __getOwnPropSymbols19 = Object.getOwnPropertySymbols;
var __hasOwnProp19 = Object.prototype.hasOwnProperty;
var __propIsEnum19 = Object.prototype.propertyIsEnumerable;
var __defNormalProp19 = (obj, key, value) => key in obj ? __defProp19(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues19 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp19.call(b, prop))
      __defNormalProp19(a, prop, b[prop]);
  if (__getOwnPropSymbols19)
    for (var prop of __getOwnPropSymbols19(b)) {
      if (__propIsEnum19.call(b, prop))
        __defNormalProp19(a, prop, b[prop]);
    }
  return a;
};
var __objRest17 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp19.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols19)
    for (var prop of __getOwnPropSymbols19(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum19.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowLongDown = React19.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest17(_b, ["color"]);
    return React19.createElement(
      "svg",
      __spreadValues19({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React19.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.055V1.945M11.278 9.278 7.5 13.056 3.722 9.278"
        }
      )
    );
  }
);
ArrowLongDown.displayName = "ArrowLongDown";

// node_modules/@medusajs/icons/dist/esm/arrow-long-left.js
var React20 = __toESM(require_react());
var __defProp20 = Object.defineProperty;
var __getOwnPropSymbols20 = Object.getOwnPropertySymbols;
var __hasOwnProp20 = Object.prototype.hasOwnProperty;
var __propIsEnum20 = Object.prototype.propertyIsEnumerable;
var __defNormalProp20 = (obj, key, value) => key in obj ? __defProp20(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues20 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp20.call(b, prop))
      __defNormalProp20(a, prop, b[prop]);
  if (__getOwnPropSymbols20)
    for (var prop of __getOwnPropSymbols20(b)) {
      if (__propIsEnum20.call(b, prop))
        __defNormalProp20(a, prop, b[prop]);
    }
  return a;
};
var __objRest18 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp20.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols20)
    for (var prop of __getOwnPropSymbols20(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum20.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowLongLeft = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest18(_b, ["color"]);
    return React20.createElement(
      "svg",
      __spreadValues20({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React20.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        }
      )
    );
  }
);
ArrowLongLeft.displayName = "ArrowLongLeft";

// node_modules/@medusajs/icons/dist/esm/arrow-long-right.js
var React21 = __toESM(require_react());
var __defProp21 = Object.defineProperty;
var __getOwnPropSymbols21 = Object.getOwnPropertySymbols;
var __hasOwnProp21 = Object.prototype.hasOwnProperty;
var __propIsEnum21 = Object.prototype.propertyIsEnumerable;
var __defNormalProp21 = (obj, key, value) => key in obj ? __defProp21(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues21 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp21.call(b, prop))
      __defNormalProp21(a, prop, b[prop]);
  if (__getOwnPropSymbols21)
    for (var prop of __getOwnPropSymbols21(b)) {
      if (__propIsEnum21.call(b, prop))
        __defNormalProp21(a, prop, b[prop]);
    }
  return a;
};
var __objRest19 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp21.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols21)
    for (var prop of __getOwnPropSymbols21(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum21.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowLongRight = React21.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest19(_b, ["color"]);
    return React21.createElement(
      "svg",
      __spreadValues21({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React21.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ArrowLongRight.displayName = "ArrowLongRight";

// node_modules/@medusajs/icons/dist/esm/arrow-long-up.js
var React22 = __toESM(require_react());
var __defProp22 = Object.defineProperty;
var __getOwnPropSymbols22 = Object.getOwnPropertySymbols;
var __hasOwnProp22 = Object.prototype.hasOwnProperty;
var __propIsEnum22 = Object.prototype.propertyIsEnumerable;
var __defNormalProp22 = (obj, key, value) => key in obj ? __defProp22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues22 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp22.call(b, prop))
      __defNormalProp22(a, prop, b[prop]);
  if (__getOwnPropSymbols22)
    for (var prop of __getOwnPropSymbols22(b)) {
      if (__propIsEnum22.call(b, prop))
        __defNormalProp22(a, prop, b[prop]);
    }
  return a;
};
var __objRest20 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp22.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols22)
    for (var prop of __getOwnPropSymbols22(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum22.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowLongUp = React22.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest20(_b, ["color"]);
    return React22.createElement(
      "svg",
      __spreadValues22({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React22.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.667 1.944v11.111M3.889 5.722l3.778-3.778 3.778 3.778"
        }
      )
    );
  }
);
ArrowLongUp.displayName = "ArrowLongUp";

// node_modules/@medusajs/icons/dist/esm/arrow-path-mini.js
var React23 = __toESM(require_react());
var __defProp23 = Object.defineProperty;
var __getOwnPropSymbols23 = Object.getOwnPropertySymbols;
var __hasOwnProp23 = Object.prototype.hasOwnProperty;
var __propIsEnum23 = Object.prototype.propertyIsEnumerable;
var __defNormalProp23 = (obj, key, value) => key in obj ? __defProp23(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues23 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp23.call(b, prop))
      __defNormalProp23(a, prop, b[prop]);
  if (__getOwnPropSymbols23)
    for (var prop of __getOwnPropSymbols23(b)) {
      if (__propIsEnum23.call(b, prop))
        __defNormalProp23(a, prop, b[prop]);
    }
  return a;
};
var __objRest21 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp23.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols23)
    for (var prop of __getOwnPropSymbols23(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum23.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowPathMini = React23.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest21(_b, ["color"]);
    return React23.createElement(
      "svg",
      __spreadValues23({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React23.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React23.createElement("path", { d: "M4.752 9.616 1.935 8.86l-.755 2.817" }),
        React23.createElement("path", { d: "M13.136 8.53a5.729 5.729 0 0 1-11.196.357M10.248 5.384l2.817.755.755-2.817" }),
        React23.createElement("path", { d: "M1.864 6.469a5.729 5.729 0 0 1 11.184-.403" })
      ),
      React23.createElement("defs", null, React23.createElement("clipPath", { id: "a" }, React23.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowPathMini.displayName = "ArrowPathMini";

// node_modules/@medusajs/icons/dist/esm/arrow-path.js
var React24 = __toESM(require_react());
var __defProp24 = Object.defineProperty;
var __getOwnPropSymbols24 = Object.getOwnPropertySymbols;
var __hasOwnProp24 = Object.prototype.hasOwnProperty;
var __propIsEnum24 = Object.prototype.propertyIsEnumerable;
var __defNormalProp24 = (obj, key, value) => key in obj ? __defProp24(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues24 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp24.call(b, prop))
      __defNormalProp24(a, prop, b[prop]);
  if (__getOwnPropSymbols24)
    for (var prop of __getOwnPropSymbols24(b)) {
      if (__propIsEnum24.call(b, prop))
        __defNormalProp24(a, prop, b[prop]);
    }
  return a;
};
var __objRest22 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp24.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols24)
    for (var prop of __getOwnPropSymbols24(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum24.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowPath = React24.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest22(_b, ["color"]);
    return React24.createElement(
      "svg",
      __spreadValues24({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React24.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React24.createElement("path", { d: "M4.752 9.616 1.935 8.86l-.755 2.817" }),
        React24.createElement("path", { d: "M13.136 8.53a5.729 5.729 0 0 1-11.196.357M10.248 5.384l2.817.755.755-2.817" }),
        React24.createElement("path", { d: "M1.864 6.469a5.729 5.729 0 0 1 11.184-.403" })
      ),
      React24.createElement("defs", null, React24.createElement("clipPath", { id: "a" }, React24.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowPath.displayName = "ArrowPath";

// node_modules/@medusajs/icons/dist/esm/arrow-right-down.js
var React25 = __toESM(require_react());
var __defProp25 = Object.defineProperty;
var __getOwnPropSymbols25 = Object.getOwnPropertySymbols;
var __hasOwnProp25 = Object.prototype.hasOwnProperty;
var __propIsEnum25 = Object.prototype.propertyIsEnumerable;
var __defNormalProp25 = (obj, key, value) => key in obj ? __defProp25(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues25 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp25.call(b, prop))
      __defNormalProp25(a, prop, b[prop]);
  if (__getOwnPropSymbols25)
    for (var prop of __getOwnPropSymbols25(b)) {
      if (__propIsEnum25.call(b, prop))
        __defNormalProp25(a, prop, b[prop]);
    }
  return a;
};
var __objRest23 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp25.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols25)
    for (var prop of __getOwnPropSymbols25(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum25.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowRightDown = React25.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest23(_b, ["color"]);
    return React25.createElement(
      "svg",
      __spreadValues25({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React25.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 13.056V3.723c0-.983-.796-1.778-1.778-1.778H2.833"
        }
      ),
      React25.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.389 9.278 3.778 3.778 3.778-3.778"
        }
      )
    );
  }
);
ArrowRightDown.displayName = "ArrowRightDown";

// node_modules/@medusajs/icons/dist/esm/arrow-right-mini.js
var React26 = __toESM(require_react());
var __defProp26 = Object.defineProperty;
var __getOwnPropSymbols26 = Object.getOwnPropertySymbols;
var __hasOwnProp26 = Object.prototype.hasOwnProperty;
var __propIsEnum26 = Object.prototype.propertyIsEnumerable;
var __defNormalProp26 = (obj, key, value) => key in obj ? __defProp26(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues26 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp26.call(b, prop))
      __defNormalProp26(a, prop, b[prop]);
  if (__getOwnPropSymbols26)
    for (var prop of __getOwnPropSymbols26(b)) {
      if (__propIsEnum26.call(b, prop))
        __defNormalProp26(a, prop, b[prop]);
    }
  return a;
};
var __objRest24 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp26.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols26)
    for (var prop of __getOwnPropSymbols26(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum26.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowRightMini = React26.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest24(_b, ["color"]);
    return React26.createElement(
      "svg",
      __spreadValues26({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React26.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ArrowRightMini.displayName = "ArrowRightMini";

// node_modules/@medusajs/icons/dist/esm/arrow-right-on-rectangle.js
var React27 = __toESM(require_react());
var __defProp27 = Object.defineProperty;
var __getOwnPropSymbols27 = Object.getOwnPropertySymbols;
var __hasOwnProp27 = Object.prototype.hasOwnProperty;
var __propIsEnum27 = Object.prototype.propertyIsEnumerable;
var __defNormalProp27 = (obj, key, value) => key in obj ? __defProp27(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues27 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp27.call(b, prop))
      __defNormalProp27(a, prop, b[prop]);
  if (__getOwnPropSymbols27)
    for (var prop of __getOwnPropSymbols27(b)) {
      if (__propIsEnum27.call(b, prop))
        __defNormalProp27(a, prop, b[prop]);
    }
  return a;
};
var __objRest25 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp27.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols27)
    for (var prop of __getOwnPropSymbols27(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum27.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowRightOnRectangle = React27.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest25(_b, ["color"]);
    return React27.createElement(
      "svg",
      __spreadValues27({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React27.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 1.944h3.11c.983 0 1.779.796 1.779 1.778v7.556c0 .982-.796 1.778-1.778 1.778H8.167"
        }
      ),
      React27.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.5 10.611 8.611 7.5 5.5 4.389M8.611 7.5H1.944"
        }
      )
    );
  }
);
ArrowRightOnRectangle.displayName = "ArrowRightOnRectangle";

// node_modules/@medusajs/icons/dist/esm/arrow-right.js
var React28 = __toESM(require_react());
var __defProp28 = Object.defineProperty;
var __getOwnPropSymbols28 = Object.getOwnPropertySymbols;
var __hasOwnProp28 = Object.prototype.hasOwnProperty;
var __propIsEnum28 = Object.prototype.propertyIsEnumerable;
var __defNormalProp28 = (obj, key, value) => key in obj ? __defProp28(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues28 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp28.call(b, prop))
      __defNormalProp28(a, prop, b[prop]);
  if (__getOwnPropSymbols28)
    for (var prop of __getOwnPropSymbols28(b)) {
      if (__propIsEnum28.call(b, prop))
        __defNormalProp28(a, prop, b[prop]);
    }
  return a;
};
var __objRest26 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp28.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols28)
    for (var prop of __getOwnPropSymbols28(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum28.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowRight = React28.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest26(_b, ["color"]);
    return React28.createElement(
      "svg",
      __spreadValues28({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React28.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ArrowRight.displayName = "ArrowRight";

// node_modules/@medusajs/icons/dist/esm/arrow-up-circle-solid.js
var React29 = __toESM(require_react());
var __defProp29 = Object.defineProperty;
var __getOwnPropSymbols29 = Object.getOwnPropertySymbols;
var __hasOwnProp29 = Object.prototype.hasOwnProperty;
var __propIsEnum29 = Object.prototype.propertyIsEnumerable;
var __defNormalProp29 = (obj, key, value) => key in obj ? __defProp29(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues29 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp29.call(b, prop))
      __defNormalProp29(a, prop, b[prop]);
  if (__getOwnPropSymbols29)
    for (var prop of __getOwnPropSymbols29(b)) {
      if (__propIsEnum29.call(b, prop))
        __defNormalProp29(a, prop, b[prop]);
    }
  return a;
};
var __objRest27 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp29.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols29)
    for (var prop of __getOwnPropSymbols29(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum29.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUpCircleSolid = React29.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest27(_b, ["color"]);
    return React29.createElement(
      "svg",
      __spreadValues29({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React29.createElement("g", { clipPath: "url(#a)" }, React29.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.693 6.915a.665.665 0 0 1-.942 0L8.167 6.22v4.168a.667.667 0 0 1-1.334 0V6.221L5.75 7.305a.667.667 0 1 1-.943-.943L7.028 4.14c.26-.26.683-.26.943 0l2.222 2.222c.26.26.26.683 0 .943"
        }
      )),
      React29.createElement("defs", null, React29.createElement("clipPath", { id: "a" }, React29.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowUpCircleSolid.displayName = "ArrowUpCircleSolid";

// node_modules/@medusajs/icons/dist/esm/arrow-up-down.js
var React30 = __toESM(require_react());
var __defProp30 = Object.defineProperty;
var __getOwnPropSymbols30 = Object.getOwnPropertySymbols;
var __hasOwnProp30 = Object.prototype.hasOwnProperty;
var __propIsEnum30 = Object.prototype.propertyIsEnumerable;
var __defNormalProp30 = (obj, key, value) => key in obj ? __defProp30(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues30 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp30.call(b, prop))
      __defNormalProp30(a, prop, b[prop]);
  if (__getOwnPropSymbols30)
    for (var prop of __getOwnPropSymbols30(b)) {
      if (__propIsEnum30.call(b, prop))
        __defNormalProp30(a, prop, b[prop]);
    }
  return a;
};
var __objRest28 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp30.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols30)
    for (var prop of __getOwnPropSymbols30(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum30.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUpDown = React30.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest28(_b, ["color"]);
    return React30.createElement(
      "svg",
      __spreadValues30({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React30.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.056 10.611 9.944 13.5l2.89-2.889M9.944 13.5V6.389M2.167 4.389 5.056 1.5l2.888 2.889M5.056 1.5v7.111"
        }
      )
    );
  }
);
ArrowUpDown.displayName = "ArrowUpDown";

// node_modules/@medusajs/icons/dist/esm/arrow-up-mini.js
var React31 = __toESM(require_react());
var __defProp31 = Object.defineProperty;
var __getOwnPropSymbols31 = Object.getOwnPropertySymbols;
var __hasOwnProp31 = Object.prototype.hasOwnProperty;
var __propIsEnum31 = Object.prototype.propertyIsEnumerable;
var __defNormalProp31 = (obj, key, value) => key in obj ? __defProp31(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues31 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp31.call(b, prop))
      __defNormalProp31(a, prop, b[prop]);
  if (__getOwnPropSymbols31)
    for (var prop of __getOwnPropSymbols31(b)) {
      if (__propIsEnum31.call(b, prop))
        __defNormalProp31(a, prop, b[prop]);
    }
  return a;
};
var __objRest29 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp31.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols31)
    for (var prop of __getOwnPropSymbols31(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum31.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUpMini = React31.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest29(_b, ["color"]);
    return React31.createElement(
      "svg",
      __spreadValues31({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React31.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.944v11.112M3.722 5.722 7.5 1.944l3.778 3.778"
        }
      )
    );
  }
);
ArrowUpMini.displayName = "ArrowUpMini";

// node_modules/@medusajs/icons/dist/esm/arrow-up-right-micro.js
var React32 = __toESM(require_react());
var __defProp32 = Object.defineProperty;
var __getOwnPropSymbols32 = Object.getOwnPropertySymbols;
var __hasOwnProp32 = Object.prototype.hasOwnProperty;
var __propIsEnum32 = Object.prototype.propertyIsEnumerable;
var __defNormalProp32 = (obj, key, value) => key in obj ? __defProp32(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues32 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp32.call(b, prop))
      __defNormalProp32(a, prop, b[prop]);
  if (__getOwnPropSymbols32)
    for (var prop of __getOwnPropSymbols32(b)) {
      if (__propIsEnum32.call(b, prop))
        __defNormalProp32(a, prop, b[prop]);
    }
  return a;
};
var __objRest30 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp32.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols32)
    for (var prop of __getOwnPropSymbols32(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum32.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUpRightMicro = React32.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest30(_b, ["color"]);
    return React32.createElement(
      "svg",
      __spreadValues32({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React32.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.167 2.833-9.334 9.334M6.824 2.833h5.343v5.342"
        }
      )
    );
  }
);
ArrowUpRightMicro.displayName = "ArrowUpRightMicro";

// node_modules/@medusajs/icons/dist/esm/arrow-up-right-mini.js
var React33 = __toESM(require_react());
var __defProp33 = Object.defineProperty;
var __getOwnPropSymbols33 = Object.getOwnPropertySymbols;
var __hasOwnProp33 = Object.prototype.hasOwnProperty;
var __propIsEnum33 = Object.prototype.propertyIsEnumerable;
var __defNormalProp33 = (obj, key, value) => key in obj ? __defProp33(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues33 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp33.call(b, prop))
      __defNormalProp33(a, prop, b[prop]);
  if (__getOwnPropSymbols33)
    for (var prop of __getOwnPropSymbols33(b)) {
      if (__propIsEnum33.call(b, prop))
        __defNormalProp33(a, prop, b[prop]);
    }
  return a;
};
var __objRest31 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp33.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols33)
    for (var prop of __getOwnPropSymbols33(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum33.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUpRightMini = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest31(_b, ["color"]);
    return React33.createElement(
      "svg",
      __spreadValues33({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React33.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.167 2.833-9.334 9.334M6.824 2.833h5.343v5.342"
        }
      )
    );
  }
);
ArrowUpRightMini.displayName = "ArrowUpRightMini";

// node_modules/@medusajs/icons/dist/esm/arrow-up-right-on-box.js
var React34 = __toESM(require_react());
var __defProp34 = Object.defineProperty;
var __getOwnPropSymbols34 = Object.getOwnPropertySymbols;
var __hasOwnProp34 = Object.prototype.hasOwnProperty;
var __propIsEnum34 = Object.prototype.propertyIsEnumerable;
var __defNormalProp34 = (obj, key, value) => key in obj ? __defProp34(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues34 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp34.call(b, prop))
      __defNormalProp34(a, prop, b[prop]);
  if (__getOwnPropSymbols34)
    for (var prop of __getOwnPropSymbols34(b)) {
      if (__propIsEnum34.call(b, prop))
        __defNormalProp34(a, prop, b[prop]);
    }
  return a;
};
var __objRest32 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp34.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols34)
    for (var prop of __getOwnPropSymbols34(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum34.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUpRightOnBox = React34.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest32(_b, ["color"]);
    return React34.createElement(
      "svg",
      __spreadValues34({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React34.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.833 1.944h4.223v4.223M13.056 1.944 7.5 7.5M11.278 8.833v2.445c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V5.5c0-.982.796-1.778 1.778-1.778h2.445"
        }
      )
    );
  }
);
ArrowUpRightOnBox.displayName = "ArrowUpRightOnBox";

// node_modules/@medusajs/icons/dist/esm/arrow-up-tray.js
var React35 = __toESM(require_react());
var __defProp35 = Object.defineProperty;
var __getOwnPropSymbols35 = Object.getOwnPropertySymbols;
var __hasOwnProp35 = Object.prototype.hasOwnProperty;
var __propIsEnum35 = Object.prototype.propertyIsEnumerable;
var __defNormalProp35 = (obj, key, value) => key in obj ? __defProp35(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues35 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp35.call(b, prop))
      __defNormalProp35(a, prop, b[prop]);
  if (__getOwnPropSymbols35)
    for (var prop of __getOwnPropSymbols35(b)) {
      if (__propIsEnum35.call(b, prop))
        __defNormalProp35(a, prop, b[prop]);
    }
  return a;
};
var __objRest33 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp35.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols35)
    for (var prop of __getOwnPropSymbols35(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum35.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUpTray = React35.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest33(_b, ["color"]);
    return React35.createElement(
      "svg",
      __spreadValues35({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React35.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 9.944v1.334c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V9.944M10.611 5.056 7.5 1.944 4.389 5.056M7.5 1.944v6.667"
        }
      )
    );
  }
);
ArrowUpTray.displayName = "ArrowUpTray";

// node_modules/@medusajs/icons/dist/esm/arrow-uturn-left.js
var React36 = __toESM(require_react());
var __defProp36 = Object.defineProperty;
var __getOwnPropSymbols36 = Object.getOwnPropertySymbols;
var __hasOwnProp36 = Object.prototype.hasOwnProperty;
var __propIsEnum36 = Object.prototype.propertyIsEnumerable;
var __defNormalProp36 = (obj, key, value) => key in obj ? __defProp36(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues36 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp36.call(b, prop))
      __defNormalProp36(a, prop, b[prop]);
  if (__getOwnPropSymbols36)
    for (var prop of __getOwnPropSymbols36(b)) {
      if (__propIsEnum36.call(b, prop))
        __defNormalProp36(a, prop, b[prop]);
    }
  return a;
};
var __objRest34 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp36.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols36)
    for (var prop of __getOwnPropSymbols36(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum36.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowUturnLeft = React36.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest34(_b, ["color"]);
    return React36.createElement(
      "svg",
      __spreadValues36({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React36.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React36.createElement("path", { d: "M1.5 5.056h8.667a3.333 3.333 0 0 1 0 6.666H6.833" }),
        React36.createElement("path", { d: "M4.611 8.167 1.5 5.056l3.111-3.112" })
      ),
      React36.createElement("defs", null, React36.createElement("clipPath", { id: "a" }, React36.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowUturnLeft.displayName = "ArrowUturnLeft";

// node_modules/@medusajs/icons/dist/esm/arrows-pointing-out-mini.js
var React37 = __toESM(require_react());
var __defProp37 = Object.defineProperty;
var __getOwnPropSymbols37 = Object.getOwnPropertySymbols;
var __hasOwnProp37 = Object.prototype.hasOwnProperty;
var __propIsEnum37 = Object.prototype.propertyIsEnumerable;
var __defNormalProp37 = (obj, key, value) => key in obj ? __defProp37(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues37 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp37.call(b, prop))
      __defNormalProp37(a, prop, b[prop]);
  if (__getOwnPropSymbols37)
    for (var prop of __getOwnPropSymbols37(b)) {
      if (__propIsEnum37.call(b, prop))
        __defNormalProp37(a, prop, b[prop]);
    }
  return a;
};
var __objRest35 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp37.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols37)
    for (var prop of __getOwnPropSymbols37(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum37.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowsPointingOutMini = React37.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest35(_b, ["color"]);
    return React37.createElement(
      "svg",
      __spreadValues37({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React37.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.056 1.944h4v4M13.056 1.944l-4 4M1.944 9.056v4h4M1.944 13.056l4-4"
        }
      )
    );
  }
);
ArrowsPointingOutMini.displayName = "ArrowsPointingOutMini";

// node_modules/@medusajs/icons/dist/esm/arrows-pointing-out.js
var React38 = __toESM(require_react());
var __defProp38 = Object.defineProperty;
var __getOwnPropSymbols38 = Object.getOwnPropertySymbols;
var __hasOwnProp38 = Object.prototype.hasOwnProperty;
var __propIsEnum38 = Object.prototype.propertyIsEnumerable;
var __defNormalProp38 = (obj, key, value) => key in obj ? __defProp38(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues38 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp38.call(b, prop))
      __defNormalProp38(a, prop, b[prop]);
  if (__getOwnPropSymbols38)
    for (var prop of __getOwnPropSymbols38(b)) {
      if (__propIsEnum38.call(b, prop))
        __defNormalProp38(a, prop, b[prop]);
    }
  return a;
};
var __objRest36 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp38.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols38)
    for (var prop of __getOwnPropSymbols38(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum38.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowsPointingOut = React38.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest36(_b, ["color"]);
    return React38.createElement(
      "svg",
      __spreadValues38({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React38.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.056 1.944h4v4M13.056 1.944l-4 4M1.944 9.056v4h4M1.944 13.056l4-4"
        }
      )
    );
  }
);
ArrowsPointingOut.displayName = "ArrowsPointingOut";

// node_modules/@medusajs/icons/dist/esm/arrows-reduce-diagonal.js
var React39 = __toESM(require_react());
var __defProp39 = Object.defineProperty;
var __getOwnPropSymbols39 = Object.getOwnPropertySymbols;
var __hasOwnProp39 = Object.prototype.hasOwnProperty;
var __propIsEnum39 = Object.prototype.propertyIsEnumerable;
var __defNormalProp39 = (obj, key, value) => key in obj ? __defProp39(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues39 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp39.call(b, prop))
      __defNormalProp39(a, prop, b[prop]);
  if (__getOwnPropSymbols39)
    for (var prop of __getOwnPropSymbols39(b)) {
      if (__propIsEnum39.call(b, prop))
        __defNormalProp39(a, prop, b[prop]);
    }
  return a;
};
var __objRest37 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp39.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols39)
    for (var prop of __getOwnPropSymbols39(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum39.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ArrowsReduceDiagonal = React39.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest37(_b, ["color"]);
    return React39.createElement(
      "svg",
      __spreadValues39({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React39.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 5.944h-4v-4M9.056 5.944l4-4M5.944 13.056v-4h-4M5.944 9.056l-4 4"
        }
      )
    );
  }
);
ArrowsReduceDiagonal.displayName = "ArrowsReduceDiagonal";

// node_modules/@medusajs/icons/dist/esm/at-symbol.js
var React40 = __toESM(require_react());
var __defProp40 = Object.defineProperty;
var __getOwnPropSymbols40 = Object.getOwnPropertySymbols;
var __hasOwnProp40 = Object.prototype.hasOwnProperty;
var __propIsEnum40 = Object.prototype.propertyIsEnumerable;
var __defNormalProp40 = (obj, key, value) => key in obj ? __defProp40(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues40 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp40.call(b, prop))
      __defNormalProp40(a, prop, b[prop]);
  if (__getOwnPropSymbols40)
    for (var prop of __getOwnPropSymbols40(b)) {
      if (__propIsEnum40.call(b, prop))
        __defNormalProp40(a, prop, b[prop]);
    }
  return a;
};
var __objRest38 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp40.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols40)
    for (var prop of __getOwnPropSymbols40(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum40.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var AtSymbol = React40.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest38(_b, ["color"]);
    return React40.createElement(
      "svg",
      __spreadValues40({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React40.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React40.createElement("path", { d: "M7.389 10.167c1.411 0 2.555-1.244 2.555-2.778S8.8 4.61 7.39 4.61 4.833 5.855 4.833 7.39s1.144 2.778 2.556 2.778" }),
        React40.createElement("path", { d: "M9.944 4.611v4.607c0 1.382 2.077 1.62 3.175-.248.932-1.58.704-3.99-.46-5.577C10.947 1.058 6.99.185 4.114 2.115 1.472 3.89.531 7.478 1.991 10.378c1.444 2.87 4.835 4.262 7.905 3.223" })
      ),
      React40.createElement("defs", null, React40.createElement("clipPath", { id: "a" }, React40.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AtSymbol.displayName = "AtSymbol";

// node_modules/@medusajs/icons/dist/esm/backward-solid.js
var React41 = __toESM(require_react());
var __defProp41 = Object.defineProperty;
var __getOwnPropSymbols41 = Object.getOwnPropertySymbols;
var __hasOwnProp41 = Object.prototype.hasOwnProperty;
var __propIsEnum41 = Object.prototype.propertyIsEnumerable;
var __defNormalProp41 = (obj, key, value) => key in obj ? __defProp41(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues41 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp41.call(b, prop))
      __defNormalProp41(a, prop, b[prop]);
  if (__getOwnPropSymbols41)
    for (var prop of __getOwnPropSymbols41(b)) {
      if (__propIsEnum41.call(b, prop))
        __defNormalProp41(a, prop, b[prop]);
    }
  return a;
};
var __objRest39 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp41.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols41)
    for (var prop of __getOwnPropSymbols41(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum41.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BackwardSolid = React41.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest39(_b, ["color"]);
    return React41.createElement(
      "svg",
      __spreadValues41({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React41.createElement("g", { clipPath: "url(#a)" }, React41.createElement(
        "path",
        {
          fill: color,
          d: "M14.255 3.285a1 1 0 0 0-1-.014l-4.95 2.743V4.152a1 1 0 0 0-.495-.867 1 1 0 0 0-.999-.013L.77 6.619a1.008 1.008 0 0 0 0 1.762l6.041 3.347a1 1 0 0 0 1-.012 1 1 0 0 0 .495-.868V8.986l4.95 2.742a1 1 0 0 0 .999-.012 1 1 0 0 0 .495-.868V4.152a1 1 0 0 0-.495-.867"
        }
      )),
      React41.createElement("defs", null, React41.createElement("clipPath", { id: "a" }, React41.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BackwardSolid.displayName = "BackwardSolid";

// node_modules/@medusajs/icons/dist/esm/bars-arrow-down.js
var React42 = __toESM(require_react());
var __defProp42 = Object.defineProperty;
var __getOwnPropSymbols42 = Object.getOwnPropertySymbols;
var __hasOwnProp42 = Object.prototype.hasOwnProperty;
var __propIsEnum42 = Object.prototype.propertyIsEnumerable;
var __defNormalProp42 = (obj, key, value) => key in obj ? __defProp42(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues42 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp42.call(b, prop))
      __defNormalProp42(a, prop, b[prop]);
  if (__getOwnPropSymbols42)
    for (var prop of __getOwnPropSymbols42(b)) {
      if (__propIsEnum42.call(b, prop))
        __defNormalProp42(a, prop, b[prop]);
    }
  return a;
};
var __objRest40 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp42.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols42)
    for (var prop of __getOwnPropSymbols42(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum42.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BarsArrowDown = React42.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest40(_b, ["color"]);
    return React42.createElement(
      "svg",
      __spreadValues42({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React42.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.611 10.834 2.222 2.222 2.223-2.222M10.833 13.056v-8M1.944 8.166h5.778M1.944 5.056h5.778M1.944 1.944h8.89"
        }
      )
    );
  }
);
BarsArrowDown.displayName = "BarsArrowDown";

// node_modules/@medusajs/icons/dist/esm/bars-three.js
var React43 = __toESM(require_react());
var __defProp43 = Object.defineProperty;
var __getOwnPropSymbols43 = Object.getOwnPropertySymbols;
var __hasOwnProp43 = Object.prototype.hasOwnProperty;
var __propIsEnum43 = Object.prototype.propertyIsEnumerable;
var __defNormalProp43 = (obj, key, value) => key in obj ? __defProp43(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues43 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp43.call(b, prop))
      __defNormalProp43(a, prop, b[prop]);
  if (__getOwnPropSymbols43)
    for (var prop of __getOwnPropSymbols43(b)) {
      if (__propIsEnum43.call(b, prop))
        __defNormalProp43(a, prop, b[prop]);
    }
  return a;
};
var __objRest41 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp43.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols43)
    for (var prop of __getOwnPropSymbols43(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum43.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BarsThree = React43.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest41(_b, ["color"]);
    return React43.createElement(
      "svg",
      __spreadValues43({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React43.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.5 7.5h12M1.5 2.833h12M1.5 12.167h12"
        }
      )
    );
  }
);
BarsThree.displayName = "BarsThree";

// node_modules/@medusajs/icons/dist/esm/beaker.js
var React44 = __toESM(require_react());
var __defProp44 = Object.defineProperty;
var __getOwnPropSymbols44 = Object.getOwnPropertySymbols;
var __hasOwnProp44 = Object.prototype.hasOwnProperty;
var __propIsEnum44 = Object.prototype.propertyIsEnumerable;
var __defNormalProp44 = (obj, key, value) => key in obj ? __defProp44(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues44 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp44.call(b, prop))
      __defNormalProp44(a, prop, b[prop]);
  if (__getOwnPropSymbols44)
    for (var prop of __getOwnPropSymbols44(b)) {
      if (__propIsEnum44.call(b, prop))
        __defNormalProp44(a, prop, b[prop]);
    }
  return a;
};
var __objRest42 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp44.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols44)
    for (var prop of __getOwnPropSymbols44(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum44.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Beaker = React44.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest42(_b, ["color"]);
    return React44.createElement(
      "svg",
      __spreadValues44({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React44.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.005 9.5h6.99M5.944 1.056v4.666l-3.224 6.28a1.333 1.333 0 0 0 1.185 1.943h7.19a1.333 1.333 0 0 0 1.185-1.943l-3.224-6.28V1.056M4.611 1.056h5.778"
        }
      )
    );
  }
);
Beaker.displayName = "Beaker";

// node_modules/@medusajs/icons/dist/esm/bell-alert-done.js
var React45 = __toESM(require_react());
var __defProp45 = Object.defineProperty;
var __getOwnPropSymbols45 = Object.getOwnPropertySymbols;
var __hasOwnProp45 = Object.prototype.hasOwnProperty;
var __propIsEnum45 = Object.prototype.propertyIsEnumerable;
var __defNormalProp45 = (obj, key, value) => key in obj ? __defProp45(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues45 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp45.call(b, prop))
      __defNormalProp45(a, prop, b[prop]);
  if (__getOwnPropSymbols45)
    for (var prop of __getOwnPropSymbols45(b)) {
      if (__propIsEnum45.call(b, prop))
        __defNormalProp45(a, prop, b[prop]);
    }
  return a;
};
var __objRest43 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp45.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols45)
    for (var prop of __getOwnPropSymbols45(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum45.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BellAlertDone = React45.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest43(_b, ["color"]);
    return React45.createElement(
      "svg",
      __spreadValues45({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React45.createElement("g", { clipPath: "url(#a)" }, React45.createElement("circle", { cx: 12.5, cy: 2.5, r: 2.5, fill: "#3B82F6" }), React45.createElement(
        "circle",
        {
          cx: 12.5,
          cy: 2.5,
          r: 2,
          stroke: color,
          strokeOpacity: 0.12
        }
      ), React45.createElement(
        "path",
        {
          fill: color,
          d: "M8.993.575A4.973 4.973 0 0 0 2.528 5.32v4.223c0 .568-.46 1.028-1.028 1.028a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5c-.568 0-1.028-.46-1.028-1.028V6.5a4 4 0 0 1-1.5-.302v3.344c0 .366.078.714.218 1.028H3.81a2.5 2.5 0 0 0 .218-1.028V5.32A3.473 3.473 0 0 1 8.53 2.003c.063-.512.223-.994.462-1.428M8.912 13.04a.44.44 0 0 0-.345-.165H6.434a.444.444 0 0 0-.434.536c.153.73.771 1.242 1.5 1.242.73 0 1.348-.511 1.502-1.242a.45.45 0 0 0-.09-.372"
        }
      )),
      React45.createElement("defs", null, React45.createElement("clipPath", { id: "a" }, React45.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BellAlertDone.displayName = "BellAlertDone";

// node_modules/@medusajs/icons/dist/esm/bell-alert-solid.js
var React46 = __toESM(require_react());
var __defProp46 = Object.defineProperty;
var __getOwnPropSymbols46 = Object.getOwnPropertySymbols;
var __hasOwnProp46 = Object.prototype.hasOwnProperty;
var __propIsEnum46 = Object.prototype.propertyIsEnumerable;
var __defNormalProp46 = (obj, key, value) => key in obj ? __defProp46(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues46 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp46.call(b, prop))
      __defNormalProp46(a, prop, b[prop]);
  if (__getOwnPropSymbols46)
    for (var prop of __getOwnPropSymbols46(b)) {
      if (__propIsEnum46.call(b, prop))
        __defNormalProp46(a, prop, b[prop]);
    }
  return a;
};
var __objRest44 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp46.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols46)
    for (var prop of __getOwnPropSymbols46(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum46.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BellAlertSolid = React46.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest44(_b, ["color"]);
    return React46.createElement(
      "svg",
      __spreadValues46({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React46.createElement(
        "path",
        {
          fill: color,
          d: "M13.5 10.611A1.113 1.113 0 0 1 12.389 9.5V5.278a4.894 4.894 0 0 0-4.89-4.89 4.894 4.894 0 0 0-4.888 4.89V9.5c0 .613-.499 1.111-1.111 1.111a.667.667 0 0 0 0 1.333h12a.667.667 0 0 0 0-1.333M8.567 12.833H6.434A.444.444 0 0 0 6 13.37c.153.731.771 1.242 1.5 1.242.73 0 1.348-.511 1.502-1.242a.445.445 0 0 0-.434-.536z"
        }
      )
    );
  }
);
BellAlertSolid.displayName = "BellAlertSolid";

// node_modules/@medusajs/icons/dist/esm/bell-alert.js
var React47 = __toESM(require_react());
var __defProp47 = Object.defineProperty;
var __getOwnPropSymbols47 = Object.getOwnPropertySymbols;
var __hasOwnProp47 = Object.prototype.hasOwnProperty;
var __propIsEnum47 = Object.prototype.propertyIsEnumerable;
var __defNormalProp47 = (obj, key, value) => key in obj ? __defProp47(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues47 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp47.call(b, prop))
      __defNormalProp47(a, prop, b[prop]);
  if (__getOwnPropSymbols47)
    for (var prop of __getOwnPropSymbols47(b)) {
      if (__propIsEnum47.call(b, prop))
        __defNormalProp47(a, prop, b[prop]);
    }
  return a;
};
var __objRest45 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp47.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols47)
    for (var prop of __getOwnPropSymbols47(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum47.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BellAlert = React47.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest45(_b, ["color"]);
    return React47.createElement(
      "svg",
      __spreadValues47({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React47.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M7.5.347A4.973 4.973 0 0 0 2.528 5.32v4.222c0 .568-.46 1.027-1.028 1.027a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5c-.568 0-1.028-.46-1.028-1.027V5.32A4.973 4.973 0 0 0 7.5.347m3.472 9.195c0 .366.078.713.218 1.027H3.81a2.5 2.5 0 0 0 .218-1.027V5.32a3.473 3.473 0 0 1 6.944 0zm-2.405 3.333a.444.444 0 0 1 .435.536c-.154.73-.771 1.242-1.501 1.242S6.153 14.142 6 13.41a.445.445 0 0 1 .434-.536z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
BellAlert.displayName = "BellAlert";

// node_modules/@medusajs/icons/dist/esm/bolt-solid.js
var React48 = __toESM(require_react());
var __defProp48 = Object.defineProperty;
var __getOwnPropSymbols48 = Object.getOwnPropertySymbols;
var __hasOwnProp48 = Object.prototype.hasOwnProperty;
var __propIsEnum48 = Object.prototype.propertyIsEnumerable;
var __defNormalProp48 = (obj, key, value) => key in obj ? __defProp48(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues48 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp48.call(b, prop))
      __defNormalProp48(a, prop, b[prop]);
  if (__getOwnPropSymbols48)
    for (var prop of __getOwnPropSymbols48(b)) {
      if (__propIsEnum48.call(b, prop))
        __defNormalProp48(a, prop, b[prop]);
    }
  return a;
};
var __objRest46 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp48.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols48)
    for (var prop of __getOwnPropSymbols48(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum48.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BoltSolid = React48.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest46(_b, ["color"]);
    return React48.createElement(
      "svg",
      __spreadValues48({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React48.createElement(
        "path",
        {
          fill: color,
          d: "M12.716 5.003a1.11 1.11 0 0 0-.994-.614H9.364l.967-2.487A1.113 1.113 0 0 0 9.296.389H5.589c-.464 0-.884.292-1.044.728l-2.12 5.779A1.112 1.112 0 0 0 3.47 8.388h3.369l-1.535 5.373a.666.666 0 0 0 1.174.583l6.135-8.177c.253-.339.293-.784.104-1.164"
        }
      )
    );
  }
);
BoltSolid.displayName = "BoltSolid";

// node_modules/@medusajs/icons/dist/esm/bolt.js
var React49 = __toESM(require_react());
var __defProp49 = Object.defineProperty;
var __getOwnPropSymbols49 = Object.getOwnPropertySymbols;
var __hasOwnProp49 = Object.prototype.hasOwnProperty;
var __propIsEnum49 = Object.prototype.propertyIsEnumerable;
var __defNormalProp49 = (obj, key, value) => key in obj ? __defProp49(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues49 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp49.call(b, prop))
      __defNormalProp49(a, prop, b[prop]);
  if (__getOwnPropSymbols49)
    for (var prop of __getOwnPropSymbols49(b)) {
      if (__propIsEnum49.call(b, prop))
        __defNormalProp49(a, prop, b[prop]);
    }
  return a;
};
var __objRest47 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp49.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols49)
    for (var prop of __getOwnPropSymbols49(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum49.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Bolt = React49.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest47(_b, ["color"]);
    return React49.createElement(
      "svg",
      __spreadValues49({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React49.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m5.944 13.945 1.778-6.223H3.47a.444.444 0 0 1-.417-.597L5.17 1.347a.44.44 0 0 1 .417-.291h3.707c.313 0 .527.313.414.605l-1.32 3.395h3.333c.366 0 .575.417.356.71z"
        }
      )
    );
  }
);
Bolt.displayName = "Bolt";

// node_modules/@medusajs/icons/dist/esm/book-open.js
var React50 = __toESM(require_react());
var __defProp50 = Object.defineProperty;
var __getOwnPropSymbols50 = Object.getOwnPropertySymbols;
var __hasOwnProp50 = Object.prototype.hasOwnProperty;
var __propIsEnum50 = Object.prototype.propertyIsEnumerable;
var __defNormalProp50 = (obj, key, value) => key in obj ? __defProp50(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues50 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp50.call(b, prop))
      __defNormalProp50(a, prop, b[prop]);
  if (__getOwnPropSymbols50)
    for (var prop of __getOwnPropSymbols50(b)) {
      if (__propIsEnum50.call(b, prop))
        __defNormalProp50(a, prop, b[prop]);
    }
  return a;
};
var __objRest48 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp50.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols50)
    for (var prop of __getOwnPropSymbols50(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum50.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BookOpen = React50.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest48(_b, ["color"]);
    return React50.createElement(
      "svg",
      __spreadValues50({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React50.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React50.createElement("path", { d: "M7.5 12.96a.9.9 0 0 0 .44-.118 5.6 5.6 0 0 1 2.791-.751 5.5 5.5 0 0 1 2.018.386c.576.227 1.194-.213 1.194-.833V3.571a.88.88 0 0 0-.431-.765 5.5 5.5 0 0 0-2.792-.767c-1.68 0-2.842.775-3.22 1.05" }),
        React50.createElement("path", { d: "M7.5 12.96a.9.9 0 0 1-.44-.118 5.6 5.6 0 0 0-2.791-.751 5.5 5.5 0 0 0-2.018.386c-.576.227-1.195-.21-1.195-.829v-8.08c0-.315.161-.6.432-.76A5.5 5.5 0 0 1 4.28 2.04c1.68 0 2.842.775 3.22 1.05z" })
      ),
      React50.createElement("defs", null, React50.createElement("clipPath", { id: "a" }, React50.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BookOpen.displayName = "BookOpen";

// node_modules/@medusajs/icons/dist/esm/book.js
var React51 = __toESM(require_react());
var __defProp51 = Object.defineProperty;
var __getOwnPropSymbols51 = Object.getOwnPropertySymbols;
var __hasOwnProp51 = Object.prototype.hasOwnProperty;
var __propIsEnum51 = Object.prototype.propertyIsEnumerable;
var __defNormalProp51 = (obj, key, value) => key in obj ? __defProp51(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues51 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp51.call(b, prop))
      __defNormalProp51(a, prop, b[prop]);
  if (__getOwnPropSymbols51)
    for (var prop of __getOwnPropSymbols51(b)) {
      if (__propIsEnum51.call(b, prop))
        __defNormalProp51(a, prop, b[prop]);
    }
  return a;
};
var __objRest49 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp51.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols51)
    for (var prop of __getOwnPropSymbols51(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum51.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Book = React51.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest49(_b, ["color"]);
    return React51.createElement(
      "svg",
      __spreadValues51({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React51.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.611 1.056v9.777M1.944 12.389V2.833c0-.982.796-1.777 1.778-1.777h9.334v9.777"
        }
      ),
      React51.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.167 13.945H3.5a1.556 1.556 0 1 1 0-3.111h9.556c-.57.75-.653 2.264 0 3.11zM7.278 4.167h3.11M7.278 6.834h3.11"
        }
      )
    );
  }
);
Book.displayName = "Book";

// node_modules/@medusajs/icons/dist/esm/bookmarks.js
var React52 = __toESM(require_react());
var __defProp52 = Object.defineProperty;
var __getOwnPropSymbols52 = Object.getOwnPropertySymbols;
var __hasOwnProp52 = Object.prototype.hasOwnProperty;
var __propIsEnum52 = Object.prototype.propertyIsEnumerable;
var __defNormalProp52 = (obj, key, value) => key in obj ? __defProp52(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues52 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp52.call(b, prop))
      __defNormalProp52(a, prop, b[prop]);
  if (__getOwnPropSymbols52)
    for (var prop of __getOwnPropSymbols52(b)) {
      if (__propIsEnum52.call(b, prop))
        __defNormalProp52(a, prop, b[prop]);
    }
  return a;
};
var __objRest50 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp52.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols52)
    for (var prop of __getOwnPropSymbols52(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum52.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Bookmarks = React52.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest50(_b, ["color"]);
    return React52.createElement(
      "svg",
      __spreadValues52({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React52.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.389 13.944-4.222-3.11-4.223 3.11V5.5c0-.982.796-1.778 1.778-1.778h4.89c.981 0 1.777.796 1.777 1.778z"
        }
      ),
      React52.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.528 1.278c.255-.141.548-.222.86-.222h4.89c.982 0 1.778.795 1.778 1.777v8.445"
        }
      )
    );
  }
);
Bookmarks.displayName = "Bookmarks";

// node_modules/@medusajs/icons/dist/esm/bottom-to-top.js
var React53 = __toESM(require_react());
var __defProp53 = Object.defineProperty;
var __getOwnPropSymbols53 = Object.getOwnPropertySymbols;
var __hasOwnProp53 = Object.prototype.hasOwnProperty;
var __propIsEnum53 = Object.prototype.propertyIsEnumerable;
var __defNormalProp53 = (obj, key, value) => key in obj ? __defProp53(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues53 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp53.call(b, prop))
      __defNormalProp53(a, prop, b[prop]);
  if (__getOwnPropSymbols53)
    for (var prop of __getOwnPropSymbols53(b)) {
      if (__propIsEnum53.call(b, prop))
        __defNormalProp53(a, prop, b[prop]);
    }
  return a;
};
var __objRest51 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp53.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols53)
    for (var prop of __getOwnPropSymbols53(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum53.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BottomToTop = React53.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest51(_b, ["color"]);
    return React53.createElement(
      "svg",
      __spreadValues53({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React53.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React53.createElement("path", { d: "m5.5 5.278 2-2-2-2M13.944 7.5h-4M13.944 3.278h-4M13.944 11.722h-4" }),
        React53.createElement("path", { d: "M7.5 3.278H5.278a4.223 4.223 0 0 0 0 8.444h1.555" })
      ),
      React53.createElement("defs", null, React53.createElement("clipPath", { id: "a" }, React53.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BottomToTop.displayName = "BottomToTop";

// node_modules/@medusajs/icons/dist/esm/brackets.js
var React54 = __toESM(require_react());
var __defProp54 = Object.defineProperty;
var __getOwnPropSymbols54 = Object.getOwnPropertySymbols;
var __hasOwnProp54 = Object.prototype.hasOwnProperty;
var __propIsEnum54 = Object.prototype.propertyIsEnumerable;
var __defNormalProp54 = (obj, key, value) => key in obj ? __defProp54(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues54 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp54.call(b, prop))
      __defNormalProp54(a, prop, b[prop]);
  if (__getOwnPropSymbols54)
    for (var prop of __getOwnPropSymbols54(b)) {
      if (__propIsEnum54.call(b, prop))
        __defNormalProp54(a, prop, b[prop]);
    }
  return a;
};
var __objRest52 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp54.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols54)
    for (var prop of __getOwnPropSymbols54(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum54.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Brackets = React54.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest52(_b, ["color"]);
    return React54.createElement(
      "svg",
      __spreadValues54({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React54.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React54.createElement("path", { d: "M5.056 13.055h-.89a1.777 1.777 0 0 1-1.777-1.777V8.944c0-.797-.647-1.444-1.445-1.444.798 0 1.445-.647 1.445-1.445V3.722c0-.982.795-1.778 1.778-1.778h.889M9.944 13.055h.89c.982 0 1.777-.795 1.777-1.777V8.944c0-.797.647-1.444 1.445-1.444a1.445 1.445 0 0 1-1.445-1.445V3.722c0-.982-.795-1.778-1.778-1.778h-.889" })
      ),
      React54.createElement("defs", null, React54.createElement("clipPath", { id: "a" }, React54.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Brackets.displayName = "Brackets";

// node_modules/@medusajs/icons/dist/esm/broom-sparkle.js
var React55 = __toESM(require_react());
var __defProp55 = Object.defineProperty;
var __getOwnPropSymbols55 = Object.getOwnPropertySymbols;
var __hasOwnProp55 = Object.prototype.hasOwnProperty;
var __propIsEnum55 = Object.prototype.propertyIsEnumerable;
var __defNormalProp55 = (obj, key, value) => key in obj ? __defProp55(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues55 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp55.call(b, prop))
      __defNormalProp55(a, prop, b[prop]);
  if (__getOwnPropSymbols55)
    for (var prop of __getOwnPropSymbols55(b)) {
      if (__propIsEnum55.call(b, prop))
        __defNormalProp55(a, prop, b[prop]);
    }
  return a;
};
var __objRest53 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp55.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols55)
    for (var prop of __getOwnPropSymbols55(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum55.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BroomSparkle = React55.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest53(_b, ["color"]);
    return React55.createElement(
      "svg",
      __spreadValues55({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React55.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.072.72a.75.75 0 0 1 0 1.06L9.695 6.157c.432.54.682 1.129.768 1.745.115.828-.072 1.635-.388 2.353-.626 1.42-1.826 2.66-2.73 3.382a2.44 2.44 0 0 1-2.184.448C2.525 13.335.986 11.123.712 8.408a.75.75 0 0 1 .645-.818c.854-.117 1.363-.583 2.44-1.674 1.375-1.393 3.326-1.583 4.767-.75L13.01.72a.75.75 0 0 1 1.06 0M4.895 6.94l-.03.03-.045.045c-.81.82-1.52 1.54-2.52 1.886.374 1.886 1.525 3.244 3.271 3.741.282.08.596.017.838-.177.642-.513 1.412-1.295 1.945-2.16a13.2 13.2 0 0 1-2.23-1.87v-.001A13 13 0 0 1 4.895 6.94m1.326-.725a11.7 11.7 0 0 0 2.726 2.679q.082-.41.03-.784c-.063-.455-.29-.932-.825-1.401a2.25 2.25 0 0 0-1.93-.494",
          clipRule: "evenodd"
        }
      ),
      React55.createElement(
        "path",
        {
          fill: color,
          d: "m14.714 9.991-1.052-.35-.351-1.053c-.114-.34-.677-.34-.79 0l-.352 1.052-1.052.351a.417.417 0 0 0 0 .79l1.052.35.351 1.053a.418.418 0 0 0 .792 0l.35-1.052 1.053-.35a.417.417 0 0 0 0-.79M4.577 2.91l-.788-.263-.263-.789c-.085-.255-.508-.255-.593 0l-.263.79-.788.262a.313.313 0 0 0 0 .593l.788.263.263.789a.312.312 0 0 0 .592 0l.263-.79.788-.262a.313.313 0 0 0 .001-.593M6.875 2.5a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
        }
      )
    );
  }
);
BroomSparkle.displayName = "BroomSparkle";

// node_modules/@medusajs/icons/dist/esm/bug-ant-solid.js
var React56 = __toESM(require_react());
var __defProp56 = Object.defineProperty;
var __getOwnPropSymbols56 = Object.getOwnPropertySymbols;
var __hasOwnProp56 = Object.prototype.hasOwnProperty;
var __propIsEnum56 = Object.prototype.propertyIsEnumerable;
var __defNormalProp56 = (obj, key, value) => key in obj ? __defProp56(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues56 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp56.call(b, prop))
      __defNormalProp56(a, prop, b[prop]);
  if (__getOwnPropSymbols56)
    for (var prop of __getOwnPropSymbols56(b)) {
      if (__propIsEnum56.call(b, prop))
        __defNormalProp56(a, prop, b[prop]);
    }
  return a;
};
var __objRest54 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp56.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols56)
    for (var prop of __getOwnPropSymbols56(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum56.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BugAntSolid = React56.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest54(_b, ["color"]);
    return React56.createElement(
      "svg",
      __spreadValues56({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React56.createElement("g", { clipPath: "url(#a)" }, React56.createElement(
        "path",
        {
          fill: color,
          d: "M11.945 8.833h2a.667.667 0 0 0 0-1.333h-2v-.964A3.114 3.114 0 0 0 14.389 3.5a.667.667 0 0 0-1.333 0 1.78 1.78 0 0 1-1.412 1.739 2.43 2.43 0 0 0-1.477-1.19V3.5A2.67 2.67 0 0 0 7.5.833 2.67 2.67 0 0 0 4.833 3.5v.548a2.44 2.44 0 0 0-1.477 1.19A1.78 1.78 0 0 1 1.944 3.5a.667.667 0 0 0-1.333 0 3.114 3.114 0 0 0 2.445 3.036V7.5h-2a.667.667 0 0 0 0 1.333h2v.445c0 .173.027.34.046.507a3.116 3.116 0 0 0-2.49 3.048.667.667 0 0 0 1.332 0c0-.89.66-1.622 1.514-1.75a4.45 4.45 0 0 0 3.375 2.572v-4.6a.667.667 0 0 1 1.334 0v4.6a4.45 4.45 0 0 0 3.375-2.573 1.776 1.776 0 0 1 1.514 1.751.667.667 0 0 0 1.333 0 3.116 3.116 0 0 0-2.49-3.048c.019-.168.046-.333.046-.507zM6.167 3.944V3.5c0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333v.444z"
        }
      )),
      React56.createElement("defs", null, React56.createElement("clipPath", { id: "a" }, React56.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BugAntSolid.displayName = "BugAntSolid";

// node_modules/@medusajs/icons/dist/esm/bug.js
var React57 = __toESM(require_react());
var __defProp57 = Object.defineProperty;
var __getOwnPropSymbols57 = Object.getOwnPropertySymbols;
var __hasOwnProp57 = Object.prototype.hasOwnProperty;
var __propIsEnum57 = Object.prototype.propertyIsEnumerable;
var __defNormalProp57 = (obj, key, value) => key in obj ? __defProp57(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues57 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp57.call(b, prop))
      __defNormalProp57(a, prop, b[prop]);
  if (__getOwnPropSymbols57)
    for (var prop of __getOwnPropSymbols57(b)) {
      if (__propIsEnum57.call(b, prop))
        __defNormalProp57(a, prop, b[prop]);
    }
  return a;
};
var __objRest55 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp57.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols57)
    for (var prop of __getOwnPropSymbols57(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum57.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Bug = React57.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest55(_b, ["color"]);
    return React57.createElement(
      "svg",
      __spreadValues57({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React57.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React57.createElement("path", { d: "M7.5 13.056v-4M5.5 4.611V3.5a2 2 0 1 1 4 0v1.111M3.722 8.167H1.056M3.722 5.944A2.444 2.444 0 0 1 1.278 3.5M3.722 10.389a2.444 2.444 0 0 0-2.444 2.444M11.278 8.167h2.666M11.278 5.944A2.444 2.444 0 0 0 13.722 3.5M11.278 10.389a2.444 2.444 0 0 1 2.444 2.444" }),
        React57.createElement("path", { d: "M5.5 4.611h4c.981 0 1.778.797 1.778 1.778v2.889A3.78 3.78 0 0 1 7.5 13.056a3.78 3.78 0 0 1-3.778-3.778v-2.89c0-.98.797-1.777 1.778-1.777" })
      ),
      React57.createElement("defs", null, React57.createElement("clipPath", { id: "a" }, React57.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Bug.displayName = "Bug";

// node_modules/@medusajs/icons/dist/esm/building-storefront.js
var React58 = __toESM(require_react());
var __defProp58 = Object.defineProperty;
var __getOwnPropSymbols58 = Object.getOwnPropertySymbols;
var __hasOwnProp58 = Object.prototype.hasOwnProperty;
var __propIsEnum58 = Object.prototype.propertyIsEnumerable;
var __defNormalProp58 = (obj, key, value) => key in obj ? __defProp58(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues58 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp58.call(b, prop))
      __defNormalProp58(a, prop, b[prop]);
  if (__getOwnPropSymbols58)
    for (var prop of __getOwnPropSymbols58(b)) {
      if (__propIsEnum58.call(b, prop))
        __defNormalProp58(a, prop, b[prop]);
    }
  return a;
};
var __objRest56 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp58.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols58)
    for (var prop of __getOwnPropSymbols58(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum58.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BuildingStorefront = React58.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest56(_b, ["color"]);
    return React58.createElement(
      "svg",
      __spreadValues58({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React58.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React58.createElement("path", { d: "M2.833 13.945v-6M12.167 7.944v6M11.65 1.056h-8.3a.89.89 0 0 0-.773.448L1.061 4.167a2.66 2.66 0 0 0 2.418 1.555 2.65 2.65 0 0 0 2.01-.932 2.65 2.65 0 0 0 2.011.932c.807 0 1.52-.365 2.01-.931a2.65 2.65 0 0 0 2.01.931c1.074 0 1.995-.639 2.417-1.555l-1.514-2.663a.89.89 0 0 0-.774-.448M5.944 13.722v-2.666a1.556 1.556 0 0 1 3.112 0v2.666M1.056 13.945h12.888" })
      ),
      React58.createElement("defs", null, React58.createElement("clipPath", { id: "a" }, React58.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingStorefront.displayName = "BuildingStorefront";

// node_modules/@medusajs/icons/dist/esm/building-tax.js
var React59 = __toESM(require_react());
var __defProp59 = Object.defineProperty;
var __getOwnPropSymbols59 = Object.getOwnPropertySymbols;
var __hasOwnProp59 = Object.prototype.hasOwnProperty;
var __propIsEnum59 = Object.prototype.propertyIsEnumerable;
var __defNormalProp59 = (obj, key, value) => key in obj ? __defProp59(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues59 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp59.call(b, prop))
      __defNormalProp59(a, prop, b[prop]);
  if (__getOwnPropSymbols59)
    for (var prop of __getOwnPropSymbols59(b)) {
      if (__propIsEnum59.call(b, prop))
        __defNormalProp59(a, prop, b[prop]);
    }
  return a;
};
var __objRest57 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp59.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols59)
    for (var prop of __getOwnPropSymbols59(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum59.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BuildingTax = React59.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest57(_b, ["color"]);
    return React59.createElement(
      "svg",
      __spreadValues59({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React59.createElement("g", { clipPath: "url(#a)" }, React59.createElement(
        "path",
        {
          fill: color,
          d: "M1 5.694H.25c0 .415.336.75.75.75zm13 0v.75a.75.75 0 0 0 .75-.75zm0-1.444h.75a.75.75 0 0 0-.445-.685zM7.5 1.361l.305-.685a.75.75 0 0 0-.61 0zM1 4.25l-.305-.685a.75.75 0 0 0-.445.685zm5.056 10.139a.75.75 0 0 0 0-1.5zM1 13.639l-.72-.21a.75.75 0 0 0 .72.96zm.632-2.167v-.75a.75.75 0 0 0-.72.54zm4.424.75a.75.75 0 0 0 0-1.5zm8.158-2.792a.75.75 0 1 0-1.06-1.061zM8.73 12.793a.75.75 0 1 0 1.06 1.06zM1 6.444h13v-1.5H1zm13.75-.75V4.25h-1.5v1.444zm-.445-2.13L7.805.677l-.61 1.37 6.5 2.89zM7.195.677l-6.5 2.889.61 1.37 6.5-2.889zM.25 4.25v1.444h1.5V4.25zm5.806 8.639H1v1.5h5.056zm-4.336.96.632-2.167-1.44-.42L.28 13.43zm-.088-1.627h4.424v-1.5H1.632zm.062-6.528v5.778h1.5V5.694zm4.39 5.778V5.694h-1.5v5.778zm7.07-3.103L8.73 12.793l1.06 1.06 4.424-4.423zm-3.876.756c0-.115.093-.208.208-.208v1.5c.713 0 1.292-.579 1.292-1.292zm.208-.208c.115 0 .208.093.208.208h-1.5c0 .713.579 1.292 1.292 1.292zm.208.208a.21.21 0 0 1-.208.208v-1.5c-.713 0-1.292.579-1.292 1.292zm-.208.208a.21.21 0 0 1-.208-.208h1.5c0-.713-.578-1.292-1.292-1.292zm3.764 3.764c0-.115.093-.208.208-.208v1.5c.714 0 1.292-.578 1.292-1.292zm.208-.208c.115 0 .209.093.209.208h-1.5c0 .714.578 1.292 1.291 1.292zm.209.208a.21.21 0 0 1-.209.209v-1.5c-.713 0-1.291.578-1.291 1.291zm-.209.209a.21.21 0 0 1-.208-.209h1.5c0-.713-.578-1.291-1.292-1.291z"
        }
      )),
      React59.createElement("defs", null, React59.createElement("clipPath", { id: "a" }, React59.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingTax.displayName = "BuildingTax";

// node_modules/@medusajs/icons/dist/esm/buildings-mini.js
var React60 = __toESM(require_react());
var __defProp60 = Object.defineProperty;
var __getOwnPropSymbols60 = Object.getOwnPropertySymbols;
var __hasOwnProp60 = Object.prototype.hasOwnProperty;
var __propIsEnum60 = Object.prototype.propertyIsEnumerable;
var __defNormalProp60 = (obj, key, value) => key in obj ? __defProp60(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues60 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp60.call(b, prop))
      __defNormalProp60(a, prop, b[prop]);
  if (__getOwnPropSymbols60)
    for (var prop of __getOwnPropSymbols60(b)) {
      if (__propIsEnum60.call(b, prop))
        __defNormalProp60(a, prop, b[prop]);
    }
  return a;
};
var __objRest58 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp60.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols60)
    for (var prop of __getOwnPropSymbols60(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum60.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BuildingsMini = React60.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest58(_b, ["color"]);
    return React60.createElement(
      "svg",
      __spreadValues60({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React60.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React60.createElement("path", { d: "M6.389 13.944V6.39a.89.89 0 0 1 .889-.889h4.889a.89.89 0 0 1 .889.889v7.555M1.944 13.944V3.422c0-.358.214-.68.543-.819l4-1.691a.89.89 0 0 1 1.235.818v1.548M1.056 13.945h12.888M8.611 8.611v-.444M10.833 8.611v-.444M8.611 11.278v-.445M10.833 11.278v-.445" })
      ),
      React60.createElement("defs", null, React60.createElement("clipPath", { id: "a" }, React60.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingsMini.displayName = "BuildingsMini";

// node_modules/@medusajs/icons/dist/esm/buildings-solid.js
var React61 = __toESM(require_react());
var __defProp61 = Object.defineProperty;
var __getOwnPropSymbols61 = Object.getOwnPropertySymbols;
var __hasOwnProp61 = Object.prototype.hasOwnProperty;
var __propIsEnum61 = Object.prototype.propertyIsEnumerable;
var __defNormalProp61 = (obj, key, value) => key in obj ? __defProp61(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues61 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp61.call(b, prop))
      __defNormalProp61(a, prop, b[prop]);
  if (__getOwnPropSymbols61)
    for (var prop of __getOwnPropSymbols61(b)) {
      if (__propIsEnum61.call(b, prop))
        __defNormalProp61(a, prop, b[prop]);
    }
  return a;
};
var __objRest59 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp61.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols61)
    for (var prop of __getOwnPropSymbols61(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum61.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var BuildingsSolid = React61.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest59(_b, ["color"]);
    return React61.createElement(
      "svg",
      __spreadValues61({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React61.createElement("g", { fill: color, clipPath: "url(#a)" }, React61.createElement("path", { d: "M1.945 14.611a.667.667 0 0 1-.667-.667V3.422c0-.626.372-1.189.95-1.432l4-1.693a1.55 1.55 0 0 1 1.464.136c.437.29.696.775.696 1.297v1.548a.667.667 0 0 1-1.333 0V1.73a.22.22 0 0 0-.1-.186.21.21 0 0 0-.21-.018l-4 1.691a.22.22 0 0 0-.135.205v10.523a.666.666 0 0 1-.665.666" }), React61.createElement("path", { d: "M13.945 13.278h-.223v-6.89c0-.857-.697-1.555-1.555-1.555h-4.89c-.857 0-1.555.698-1.555 1.556v6.889H1.056a.667.667 0 0 0 0 1.333h12.888a.667.667 0 0 0 0-1.333m-4.667-2a.667.667 0 0 1-1.334 0v-.445a.667.667 0 0 1 1.334 0zm0-2.667a.667.667 0 0 1-1.334 0v-.444a.667.667 0 0 1 1.334 0zm2.222 2.667a.667.667 0 0 1-1.333 0v-.445a.667.667 0 0 1 1.333 0zm0-2.667a.667.667 0 0 1-1.333 0v-.444a.667.667 0 0 1 1.333 0z" })),
      React61.createElement("defs", null, React61.createElement("clipPath", { id: "a" }, React61.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingsSolid.displayName = "BuildingsSolid";

// node_modules/@medusajs/icons/dist/esm/buildings.js
var React62 = __toESM(require_react());
var __defProp62 = Object.defineProperty;
var __getOwnPropSymbols62 = Object.getOwnPropertySymbols;
var __hasOwnProp62 = Object.prototype.hasOwnProperty;
var __propIsEnum62 = Object.prototype.propertyIsEnumerable;
var __defNormalProp62 = (obj, key, value) => key in obj ? __defProp62(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues62 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp62.call(b, prop))
      __defNormalProp62(a, prop, b[prop]);
  if (__getOwnPropSymbols62)
    for (var prop of __getOwnPropSymbols62(b)) {
      if (__propIsEnum62.call(b, prop))
        __defNormalProp62(a, prop, b[prop]);
    }
  return a;
};
var __objRest60 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp62.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols62)
    for (var prop of __getOwnPropSymbols62(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum62.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Buildings = React62.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest60(_b, ["color"]);
    return React62.createElement(
      "svg",
      __spreadValues62({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React62.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React62.createElement("path", { d: "M6.389 13.944V6.39a.89.89 0 0 1 .889-.889h4.889a.89.89 0 0 1 .889.889v7.555M1.944 13.944V3.422c0-.358.214-.68.543-.819l4-1.691a.89.89 0 0 1 1.235.818v1.548M1.056 13.945h12.888M8.611 8.611v-.444M10.833 8.611v-.444M8.611 11.278v-.445M10.833 11.278v-.445" })
      ),
      React62.createElement("defs", null, React62.createElement("clipPath", { id: "a" }, React62.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Buildings.displayName = "Buildings";

// node_modules/@medusajs/icons/dist/esm/button.js
var React63 = __toESM(require_react());
var __defProp63 = Object.defineProperty;
var __getOwnPropSymbols63 = Object.getOwnPropertySymbols;
var __hasOwnProp63 = Object.prototype.hasOwnProperty;
var __propIsEnum63 = Object.prototype.propertyIsEnumerable;
var __defNormalProp63 = (obj, key, value) => key in obj ? __defProp63(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues63 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp63.call(b, prop))
      __defNormalProp63(a, prop, b[prop]);
  if (__getOwnPropSymbols63)
    for (var prop of __getOwnPropSymbols63(b)) {
      if (__propIsEnum63.call(b, prop))
        __defNormalProp63(a, prop, b[prop]);
    }
  return a;
};
var __objRest61 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp63.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols63)
    for (var prop of __getOwnPropSymbols63(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum63.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Button = React63.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest61(_b, ["color"]);
    return React63.createElement(
      "svg",
      __spreadValues63({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React63.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.542 7.43V4.793c0-.92-.746-1.667-1.667-1.667h-8.75c-.92 0-1.667.747-1.667 1.667v2.916c0 .92.746 1.667 1.667 1.667h3.067"
        }
      ),
      React63.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.278 7.726 5.712 2.087a.27.27 0 0 1-.01.509l-2.614.836-.837 2.615a.27.27 0 0 1-.509.01L7.933 8.07a.27.27 0 0 1 .345-.345"
        }
      )
    );
  }
);
Button.displayName = "Button";

// node_modules/@medusajs/icons/dist/esm/calendar-mini.js
var React64 = __toESM(require_react());
var __defProp64 = Object.defineProperty;
var __getOwnPropSymbols64 = Object.getOwnPropertySymbols;
var __hasOwnProp64 = Object.prototype.hasOwnProperty;
var __propIsEnum64 = Object.prototype.propertyIsEnumerable;
var __defNormalProp64 = (obj, key, value) => key in obj ? __defProp64(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues64 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp64.call(b, prop))
      __defNormalProp64(a, prop, b[prop]);
  if (__getOwnPropSymbols64)
    for (var prop of __getOwnPropSymbols64(b)) {
      if (__propIsEnum64.call(b, prop))
        __defNormalProp64(a, prop, b[prop]);
    }
  return a;
};
var __objRest62 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp64.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols64)
    for (var prop of __getOwnPropSymbols64(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum64.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CalendarMini = React64.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest62(_b, ["color"]);
    return React64.createElement(
      "svg",
      __spreadValues64({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React64.createElement(
        "path",
        {
          fill: color,
          d: "M6.611 8.611c0-.49.4-.889.889-.889a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.889M10.611 9.5c.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889.89.89 0 0 0-.889.89c0 .489.4.888.89.888M6.611 11.278c0-.49.4-.89.889-.89a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.888M4.389 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M9.722 11.278a.89.89 0 0 1 1.778 0c0 .49-.4.889-.889.889a.89.89 0 0 1-.889-.89"
        }
      ),
      React64.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M4.611.306a.75.75 0 0 1 .75.75v1.027H9.64V1.056a.75.75 0 1 1 1.5 0v1.027h.583a2.53 2.53 0 0 1 2.528 2.528v7.556a2.53 2.53 0 0 1-2.528 2.527H3.278A2.53 2.53 0 0 1 .75 12.167V4.61a2.53 2.53 0 0 1 2.528-2.528h.583V1.056a.75.75 0 0 1 .75-.75M12.75 4.61v.584H2.25V4.61c0-.568.46-1.028 1.028-1.028h8.444c.568 0 1.028.46 1.028 1.028m0 2.084H2.25v5.472c0 .567.46 1.027 1.028 1.027h8.444c.568 0 1.028-.46 1.028-1.027z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
CalendarMini.displayName = "CalendarMini";

// node_modules/@medusajs/icons/dist/esm/calendar-solid.js
var React65 = __toESM(require_react());
var __defProp65 = Object.defineProperty;
var __getOwnPropSymbols65 = Object.getOwnPropertySymbols;
var __hasOwnProp65 = Object.prototype.hasOwnProperty;
var __propIsEnum65 = Object.prototype.propertyIsEnumerable;
var __defNormalProp65 = (obj, key, value) => key in obj ? __defProp65(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues65 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp65.call(b, prop))
      __defNormalProp65(a, prop, b[prop]);
  if (__getOwnPropSymbols65)
    for (var prop of __getOwnPropSymbols65(b)) {
      if (__propIsEnum65.call(b, prop))
        __defNormalProp65(a, prop, b[prop]);
    }
  return a;
};
var __objRest63 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp65.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols65)
    for (var prop of __getOwnPropSymbols65(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum65.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CalendarSolid = React65.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest63(_b, ["color"]);
    return React65.createElement(
      "svg",
      __spreadValues65({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React65.createElement(
        "path",
        {
          fill: color,
          d: "M4.611 3.5a.667.667 0 0 1-.667-.667V1.056a.667.667 0 0 1 1.334 0v1.777a.667.667 0 0 1-.667.667M10.389 3.5a.667.667 0 0 1-.667-.667V1.056a.667.667 0 0 1 1.334 0v1.777a.667.667 0 0 1-.667.667"
        }
      ),
      React65.createElement(
        "path",
        {
          fill: color,
          d: "M11.722 2.167H3.278A2.446 2.446 0 0 0 .833 4.61v7.556a2.446 2.446 0 0 0 2.445 2.444h8.444a2.447 2.447 0 0 0 2.445-2.444V4.61a2.446 2.446 0 0 0-2.445-2.444m0 11.11H3.278a1.113 1.113 0 0 1-1.111-1.11V6.61h10.666v5.556c0 .612-.498 1.11-1.11 1.11"
        }
      ),
      React65.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 7.722a.89.89 0 0 0-.889.89c0 .489.4.888.889.888.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889M10.611 9.5c.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889.89.89 0 0 0-.889.89c0 .489.4.888.89.888M7.5 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M4.389 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M10.611 10.389a.89.89 0 0 0-.889.889.89.89 0 0 0 1.778 0 .89.89 0 0 0-.889-.89"
        }
      )
    );
  }
);
CalendarSolid.displayName = "CalendarSolid";

// node_modules/@medusajs/icons/dist/esm/calendar.js
var React66 = __toESM(require_react());
var __defProp66 = Object.defineProperty;
var __getOwnPropSymbols66 = Object.getOwnPropertySymbols;
var __hasOwnProp66 = Object.prototype.hasOwnProperty;
var __propIsEnum66 = Object.prototype.propertyIsEnumerable;
var __defNormalProp66 = (obj, key, value) => key in obj ? __defProp66(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues66 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp66.call(b, prop))
      __defNormalProp66(a, prop, b[prop]);
  if (__getOwnPropSymbols66)
    for (var prop of __getOwnPropSymbols66(b)) {
      if (__propIsEnum66.call(b, prop))
        __defNormalProp66(a, prop, b[prop]);
    }
  return a;
};
var __objRest64 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp66.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols66)
    for (var prop of __getOwnPropSymbols66(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum66.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Calendar = React66.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest64(_b, ["color"]);
    return React66.createElement(
      "svg",
      __spreadValues66({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React66.createElement(
        "path",
        {
          fill: color,
          d: "M6.611 8.611c0-.49.4-.889.889-.889a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.889M10.611 9.5c.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889.89.89 0 0 0-.889.89c0 .489.4.888.89.888M6.611 11.278c0-.49.4-.89.889-.89a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.888M4.389 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M9.722 11.278a.89.89 0 0 1 1.778 0c0 .49-.4.889-.889.889a.89.89 0 0 1-.889-.89"
        }
      ),
      React66.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M4.611.306a.75.75 0 0 1 .75.75v1.027H9.64V1.056a.75.75 0 1 1 1.5 0v1.027h.583a2.53 2.53 0 0 1 2.528 2.528v7.556a2.53 2.53 0 0 1-2.528 2.527H3.278A2.53 2.53 0 0 1 .75 12.167V4.61a2.53 2.53 0 0 1 2.528-2.528h.583V1.056a.75.75 0 0 1 .75-.75M12.75 4.61v.584H2.25V4.61c0-.568.46-1.028 1.028-1.028h8.444c.568 0 1.028.46 1.028 1.028m0 2.084H2.25v5.472c0 .567.46 1.027 1.028 1.027h8.444c.568 0 1.028-.46 1.028-1.027z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Calendar.displayName = "Calendar";

// node_modules/@medusajs/icons/dist/esm/camera.js
var React67 = __toESM(require_react());
var __defProp67 = Object.defineProperty;
var __getOwnPropSymbols67 = Object.getOwnPropertySymbols;
var __hasOwnProp67 = Object.prototype.hasOwnProperty;
var __propIsEnum67 = Object.prototype.propertyIsEnumerable;
var __defNormalProp67 = (obj, key, value) => key in obj ? __defProp67(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues67 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp67.call(b, prop))
      __defNormalProp67(a, prop, b[prop]);
  if (__getOwnPropSymbols67)
    for (var prop of __getOwnPropSymbols67(b)) {
      if (__propIsEnum67.call(b, prop))
        __defNormalProp67(a, prop, b[prop]);
    }
  return a;
};
var __objRest65 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp67.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols67)
    for (var prop of __getOwnPropSymbols67(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum67.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Camera = React67.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest65(_b, ["color"]);
    return React67.createElement(
      "svg",
      __spreadValues67({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React67.createElement("g", { fill: color, clipPath: "url(#a)" }, React67.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.582 1.869c.24-.64.85-1.063 1.534-1.063h2.768c.684 0 1.295.424 1.534 1.063l.268.714h1.48a2.527 2.527 0 0 1 2.529 2.528v5.778a2.527 2.527 0 0 1-2.528 2.528H2.833a2.527 2.527 0 0 1-2.527-2.528V5.11a2.527 2.527 0 0 1 2.527-2.528h1.48zm1.534.437a.14.14 0 0 0-.13.09l-.45 1.2a.75.75 0 0 1-.703.487h-2c-.568 0-1.027.46-1.027 1.028v5.778c0 .568.46 1.028 1.027 1.028h9.334c.568 0 1.028-.46 1.028-1.028V5.11c0-.568-.46-1.028-1.028-1.028h-2a.75.75 0 0 1-.702-.486l-.451-1.201a.14.14 0 0 0-.13-.09z",
          clipRule: "evenodd"
        }
      ), React67.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.5 6.306a1.694 1.694 0 1 0 0 3.388 1.694 1.694 0 0 0 0-3.388M4.306 8a3.194 3.194 0 1 1 6.389 0 3.194 3.194 0 0 1-6.39 0",
          clipRule: "evenodd"
        }
      ), React67.createElement("path", { d: "M3.278 6.222a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333" })),
      React67.createElement("defs", null, React67.createElement("clipPath", { id: "a" }, React67.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Camera.displayName = "Camera";

// node_modules/@medusajs/icons/dist/esm/caret-maximize-diagonal.js
var React68 = __toESM(require_react());
var __defProp68 = Object.defineProperty;
var __getOwnPropSymbols68 = Object.getOwnPropertySymbols;
var __hasOwnProp68 = Object.prototype.hasOwnProperty;
var __propIsEnum68 = Object.prototype.propertyIsEnumerable;
var __defNormalProp68 = (obj, key, value) => key in obj ? __defProp68(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues68 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp68.call(b, prop))
      __defNormalProp68(a, prop, b[prop]);
  if (__getOwnPropSymbols68)
    for (var prop of __getOwnPropSymbols68(b)) {
      if (__propIsEnum68.call(b, prop))
        __defNormalProp68(a, prop, b[prop]);
    }
  return a;
};
var __objRest66 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp68.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols68)
    for (var prop of __getOwnPropSymbols68(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum68.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CaretMaximizeDiagonal = React68.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest66(_b, ["color"]);
    return React68.createElement(
      "svg",
      __spreadValues68({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React68.createElement(
        "path",
        {
          fill: color,
          d: "M11.944 2.167h-4.13a.887.887 0 0 0-.628 1.517l4.13 4.13a.885.885 0 0 0 .969.192.89.89 0 0 0 .548-.821v-4.13a.89.89 0 0 0-.889-.888M3.684 7.185a.885.885 0 0 0-.969-.193.89.89 0 0 0-.548.822v4.13c0 .49.399.888.889.888h4.13a.887.887 0 0 0 .628-1.517z"
        }
      )
    );
  }
);
CaretMaximizeDiagonal.displayName = "CaretMaximizeDiagonal";

// node_modules/@medusajs/icons/dist/esm/caret-minimize-diagonal.js
var React69 = __toESM(require_react());
var __defProp69 = Object.defineProperty;
var __getOwnPropSymbols69 = Object.getOwnPropertySymbols;
var __hasOwnProp69 = Object.prototype.hasOwnProperty;
var __propIsEnum69 = Object.prototype.propertyIsEnumerable;
var __defNormalProp69 = (obj, key, value) => key in obj ? __defProp69(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues69 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp69.call(b, prop))
      __defNormalProp69(a, prop, b[prop]);
  if (__getOwnPropSymbols69)
    for (var prop of __getOwnPropSymbols69(b)) {
      if (__propIsEnum69.call(b, prop))
        __defNormalProp69(a, prop, b[prop]);
    }
  return a;
};
var __objRest67 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp69.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols69)
    for (var prop of __getOwnPropSymbols69(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum69.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CaretMinimizeDiagonal = React69.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest67(_b, ["color"]);
    return React69.createElement(
      "svg",
      __spreadValues69({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React69.createElement(
        "path",
        {
          fill: color,
          d: "M9.462 1.407a.885.885 0 0 0-.97-.192.89.89 0 0 0-.548.82v4.132c0 .49.4.888.89.888h4.129a.887.887 0 0 0 .628-1.517zM6.167 7.944h-4.13a.887.887 0 0 0-.628 1.517l4.13 4.13a.885.885 0 0 0 .968.193.89.89 0 0 0 .549-.822v-4.13a.89.89 0 0 0-.89-.888"
        }
      )
    );
  }
);
CaretMinimizeDiagonal.displayName = "CaretMinimizeDiagonal";

// node_modules/@medusajs/icons/dist/esm/cash-solid.js
var React70 = __toESM(require_react());
var __defProp70 = Object.defineProperty;
var __getOwnPropSymbols70 = Object.getOwnPropertySymbols;
var __hasOwnProp70 = Object.prototype.hasOwnProperty;
var __propIsEnum70 = Object.prototype.propertyIsEnumerable;
var __defNormalProp70 = (obj, key, value) => key in obj ? __defProp70(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues70 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp70.call(b, prop))
      __defNormalProp70(a, prop, b[prop]);
  if (__getOwnPropSymbols70)
    for (var prop of __getOwnPropSymbols70(b)) {
      if (__propIsEnum70.call(b, prop))
        __defNormalProp70(a, prop, b[prop]);
    }
  return a;
};
var __objRest68 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp70.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols70)
    for (var prop of __getOwnPropSymbols70(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum70.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CashSolid = React70.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest68(_b, ["color"]);
    return React70.createElement(
      "svg",
      __spreadValues70({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React70.createElement("g", { fill: color, clipPath: "url(#a)" }, React70.createElement("path", { d: "M7.61 6.837q-.656-.117-.686-.413c-.014-.15.03-.198.05-.22.113-.125.393-.192.553-.192.372 0 .488.187.531.257a.667.667 0 1 0 1.133-.702 1.8 1.8 0 0 0-1.034-.786.66.66 0 0 0-.656-.614.663.663 0 0 0-.659.627c-.308.096-.62.255-.855.513-.301.333-.436.763-.39 1.245.048.486.342 1.341 1.78 1.597.798.143.804.352.806.463.003.1-.029.182-.1.256-.12.124-.328.197-.556.197-.542 0-.647-.208-.691-.296a.666.666 0 1 0-1.19.602c.185.364.543.779 1.22.947.07.292.321.515.635.515a.66.66 0 0 0 .638-.528c.347-.096.66-.264.897-.506.32-.33.492-.762.48-1.22-.022-.936-.664-1.522-1.906-1.744z" }), React70.createElement("path", { d: "M12.167 2.167H2.833A2.446 2.446 0 0 0 .39 4.61v5.778a2.446 2.446 0 0 0 2.444 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V4.611a2.446 2.446 0 0 0-2.444-2.444m-1.43 9.333H4.263a3.55 3.55 0 0 0-2.54-2.54V6.04a3.55 3.55 0 0 0 2.54-2.54h6.474a3.55 3.55 0 0 0 2.54 2.54v2.92a3.55 3.55 0 0 0-2.54 2.54" })),
      React70.createElement("defs", null, React70.createElement("clipPath", { id: "a" }, React70.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CashSolid.displayName = "CashSolid";

// node_modules/@medusajs/icons/dist/esm/cash.js
var React71 = __toESM(require_react());
var __defProp71 = Object.defineProperty;
var __getOwnPropSymbols71 = Object.getOwnPropertySymbols;
var __hasOwnProp71 = Object.prototype.hasOwnProperty;
var __propIsEnum71 = Object.prototype.propertyIsEnumerable;
var __defNormalProp71 = (obj, key, value) => key in obj ? __defProp71(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues71 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp71.call(b, prop))
      __defNormalProp71(a, prop, b[prop]);
  if (__getOwnPropSymbols71)
    for (var prop of __getOwnPropSymbols71(b)) {
      if (__propIsEnum71.call(b, prop))
        __defNormalProp71(a, prop, b[prop]);
    }
  return a;
};
var __objRest69 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp71.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols71)
    for (var prop of __getOwnPropSymbols71(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum71.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Cash = React71.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest69(_b, ["color"]);
    return React71.createElement(
      "svg",
      __spreadValues71({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React71.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React71.createElement("path", { d: "M8.624 5.918c-.286-.462-.743-.573-1.098-.573-.374 0-1.357.2-1.265 1.142.064.663.688.909 1.233 1.006s1.337.305 1.356 1.103c.017.675-.59 1.135-1.323 1.135-.608 0-1.055-.204-1.286-.661M7.5 4.833v.512M7.5 9.732v.435M3.944 2.833a2.89 2.89 0 0 1-2.888 2.89M11.056 2.833a2.89 2.89 0 0 0 2.888 2.89M3.944 12.167a2.89 2.89 0 0 0-2.888-2.89M11.056 12.167a2.89 2.89 0 0 1 2.888-2.89" }),
        React71.createElement("path", { d: "M12.167 2.833H2.833c-.982 0-1.777.796-1.777 1.778v5.778c0 .982.795 1.778 1.777 1.778h9.334c.982 0 1.777-.796 1.777-1.778V4.61c0-.982-.796-1.778-1.777-1.778" })
      ),
      React71.createElement("defs", null, React71.createElement("clipPath", { id: "a" }, React71.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Cash.displayName = "Cash";

// node_modules/@medusajs/icons/dist/esm/channels-solid.js
var React72 = __toESM(require_react());
var __defProp72 = Object.defineProperty;
var __getOwnPropSymbols72 = Object.getOwnPropertySymbols;
var __hasOwnProp72 = Object.prototype.hasOwnProperty;
var __propIsEnum72 = Object.prototype.propertyIsEnumerable;
var __defNormalProp72 = (obj, key, value) => key in obj ? __defProp72(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues72 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp72.call(b, prop))
      __defNormalProp72(a, prop, b[prop]);
  if (__getOwnPropSymbols72)
    for (var prop of __getOwnPropSymbols72(b)) {
      if (__propIsEnum72.call(b, prop))
        __defNormalProp72(a, prop, b[prop]);
    }
  return a;
};
var __objRest70 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp72.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols72)
    for (var prop of __getOwnPropSymbols72(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum72.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChannelsSolid = React72.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest70(_b, ["color"]);
    return React72.createElement(
      "svg",
      __spreadValues72({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React72.createElement("g", { fill: color, clipPath: "url(#a)" }, React72.createElement("path", { d: "M11.056 11.278a.667.667 0 0 0-.667-.667H9.5a1.113 1.113 0 0 1-1.111-1.11v-4c0-.613.499-1.112 1.111-1.112h.889a.667.667 0 0 0 0-1.333H9.5A2.446 2.446 0 0 0 7.056 5.5v1.333H4.61a.667.667 0 0 0 0 1.334h2.445V9.5A2.446 2.446 0 0 0 9.5 11.945h.889a.667.667 0 0 0 .667-.667" }), React72.createElement("path", { d: "M9.944 3.722a2.222 2.222 0 1 0 4.445 0 2.222 2.222 0 0 0-4.445 0M9.944 11.278a2.222 2.222 0 1 0 4.445 0 2.222 2.222 0 0 0-4.445 0M.611 7.5a2.222 2.222 0 1 0 4.445 0 2.222 2.222 0 0 0-4.445 0" })),
      React72.createElement("defs", null, React72.createElement("clipPath", { id: "a" }, React72.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChannelsSolid.displayName = "ChannelsSolid";

// node_modules/@medusajs/icons/dist/esm/channels.js
var React73 = __toESM(require_react());
var __defProp73 = Object.defineProperty;
var __getOwnPropSymbols73 = Object.getOwnPropertySymbols;
var __hasOwnProp73 = Object.prototype.hasOwnProperty;
var __propIsEnum73 = Object.prototype.propertyIsEnumerable;
var __defNormalProp73 = (obj, key, value) => key in obj ? __defProp73(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues73 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp73.call(b, prop))
      __defNormalProp73(a, prop, b[prop]);
  if (__getOwnPropSymbols73)
    for (var prop of __getOwnPropSymbols73(b)) {
      if (__propIsEnum73.call(b, prop))
        __defNormalProp73(a, prop, b[prop]);
    }
  return a;
};
var __objRest71 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp73.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols73)
    for (var prop of __getOwnPropSymbols73(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum73.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Channels = React73.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest71(_b, ["color"]);
    return React73.createElement(
      "svg",
      __spreadValues73({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React73.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React73.createElement("path", { d: "M7.722 7.5h-3.11M10.389 3.722H9.5c-.982 0-1.778.796-1.778 1.778v4c0 .982.796 1.778 1.778 1.778h.889" }),
        React73.createElement("path", { d: "M10.389 3.722a1.778 1.778 0 1 0 3.555 0 1.778 1.778 0 0 0-3.555 0M10.389 11.278a1.778 1.778 0 1 0 3.556 0 1.778 1.778 0 0 0-3.556 0M1.056 7.5a1.778 1.778 0 1 0 3.555 0 1.778 1.778 0 0 0-3.555 0" })
      ),
      React73.createElement("defs", null, React73.createElement("clipPath", { id: "a" }, React73.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Channels.displayName = "Channels";

// node_modules/@medusajs/icons/dist/esm/chart-bar.js
var React74 = __toESM(require_react());
var __defProp74 = Object.defineProperty;
var __getOwnPropSymbols74 = Object.getOwnPropertySymbols;
var __hasOwnProp74 = Object.prototype.hasOwnProperty;
var __propIsEnum74 = Object.prototype.propertyIsEnumerable;
var __defNormalProp74 = (obj, key, value) => key in obj ? __defProp74(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues74 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp74.call(b, prop))
      __defNormalProp74(a, prop, b[prop]);
  if (__getOwnPropSymbols74)
    for (var prop of __getOwnPropSymbols74(b)) {
      if (__propIsEnum74.call(b, prop))
        __defNormalProp74(a, prop, b[prop]);
    }
  return a;
};
var __objRest72 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp74.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols74)
    for (var prop of __getOwnPropSymbols74(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum74.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChartBar = React74.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest72(_b, ["color"]);
    return React74.createElement(
      "svg",
      __spreadValues74({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React74.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React74.createElement("path", { d: "M7.722 1.944h-.444a.89.89 0 0 0-.89.89v9.333c0 .49.399.888.89.888h.444c.491 0 .89-.397.89-.888V2.833a.89.89 0 0 0-.89-.889M2.833 6.389H2.39a.89.89 0 0 0-.889.889v4.889c0 .49.398.889.889.889h.444c.491 0 .89-.398.89-.89V7.279a.89.89 0 0 0-.89-.89M12.611 7.55h-.444c-.491 0-.889.328-.889.733v4.038c0 .406.398.734.889.734h.444c.491 0 .89-.328.89-.734V8.283c0-.405-.399-.734-.89-.734" })
      ),
      React74.createElement("defs", null, React74.createElement("clipPath", { id: "a" }, React74.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChartBar.displayName = "ChartBar";

// node_modules/@medusajs/icons/dist/esm/chart-pie.js
var React75 = __toESM(require_react());
var __defProp75 = Object.defineProperty;
var __getOwnPropSymbols75 = Object.getOwnPropertySymbols;
var __hasOwnProp75 = Object.prototype.hasOwnProperty;
var __propIsEnum75 = Object.prototype.propertyIsEnumerable;
var __defNormalProp75 = (obj, key, value) => key in obj ? __defProp75(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues75 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp75.call(b, prop))
      __defNormalProp75(a, prop, b[prop]);
  if (__getOwnPropSymbols75)
    for (var prop of __getOwnPropSymbols75(b)) {
      if (__propIsEnum75.call(b, prop))
        __defNormalProp75(a, prop, b[prop]);
    }
  return a;
};
var __objRest73 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp75.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols75)
    for (var prop of __getOwnPropSymbols75(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum75.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChartPie = React75.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest73(_b, ["color"]);
    return React75.createElement(
      "svg",
      __spreadValues75({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React75.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React75.createElement("path", { d: "M13.368 10.167a6.446 6.446 0 1 1-8.535-8.535" }),
        React75.createElement("path", { d: "M13.944 7.5A6.444 6.444 0 0 0 7.5 1.056V7.5z" })
      ),
      React75.createElement("defs", null, React75.createElement("clipPath", { id: "a" }, React75.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChartPie.displayName = "ChartPie";

// node_modules/@medusajs/icons/dist/esm/chat-bubble-left-right-solid.js
var React76 = __toESM(require_react());
var __defProp76 = Object.defineProperty;
var __getOwnPropSymbols76 = Object.getOwnPropertySymbols;
var __hasOwnProp76 = Object.prototype.hasOwnProperty;
var __propIsEnum76 = Object.prototype.propertyIsEnumerable;
var __defNormalProp76 = (obj, key, value) => key in obj ? __defProp76(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues76 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp76.call(b, prop))
      __defNormalProp76(a, prop, b[prop]);
  if (__getOwnPropSymbols76)
    for (var prop of __getOwnPropSymbols76(b)) {
      if (__propIsEnum76.call(b, prop))
        __defNormalProp76(a, prop, b[prop]);
    }
  return a;
};
var __objRest74 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp76.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols76)
    for (var prop of __getOwnPropSymbols76(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum76.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChatBubbleLeftRightSolid = React76.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest74(_b, ["color"]);
    return React76.createElement(
      "svg",
      __spreadValues76({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React76.createElement("g", { fill: color, clipPath: "url(#a)" }, React76.createElement("path", { d: "M12.611 4.389H7.722c-1.102 0-2 .897-2 2v4c0 1.103.898 2 2 2h1.742l2.254 2.049a.67.67 0 0 0 .719.116.67.67 0 0 0 .396-.61v-1.568a2.003 2.003 0 0 0 1.778-1.987v-4c0-1.103-.898-2-2-2" }), React76.createElement("path", { d: "m3.675 10.262-.175.19V9.5a.664.664 0 0 0-.667-.667c-.297 0-.575-.115-.785-.325a1.1 1.1 0 0 1-.325-.785V3.278c0-.613.499-1.111 1.111-1.111H8.39c.506 0 .95.342 1.075.832a.667.667 0 0 0 1.292-.332A2.44 2.44 0 0 0 8.39.833H2.833A2.446 2.446 0 0 0 .39 3.278v4.445c0 .652.254 1.267.716 1.728.3.3.664.512 1.062.624v2.092a.665.665 0 0 0 1.158.45l1.333-1.454a.666.666 0 1 0-.983-.901" })),
      React76.createElement("defs", null, React76.createElement("clipPath", { id: "a" }, React76.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubbleLeftRightSolid.displayName = "ChatBubbleLeftRightSolid";

// node_modules/@medusajs/icons/dist/esm/chat-bubble-left-right.js
var React77 = __toESM(require_react());
var __defProp77 = Object.defineProperty;
var __getOwnPropSymbols77 = Object.getOwnPropertySymbols;
var __hasOwnProp77 = Object.prototype.hasOwnProperty;
var __propIsEnum77 = Object.prototype.propertyIsEnumerable;
var __defNormalProp77 = (obj, key, value) => key in obj ? __defProp77(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues77 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp77.call(b, prop))
      __defNormalProp77(a, prop, b[prop]);
  if (__getOwnPropSymbols77)
    for (var prop of __getOwnPropSymbols77(b)) {
      if (__propIsEnum77.call(b, prop))
        __defNormalProp77(a, prop, b[prop]);
    }
  return a;
};
var __objRest75 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp77.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols77)
    for (var prop of __getOwnPropSymbols77(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum77.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChatBubbleLeftRight = React77.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest75(_b, ["color"]);
    return React77.createElement(
      "svg",
      __spreadValues77({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React77.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React77.createElement("path", { d: "M7.722 5.056h4.89c.735 0 1.332.597 1.332 1.333v4c0 .736-.597 1.333-1.333 1.333h-.444v2.223l-2.445-2.223h-2A1.334 1.334 0 0 1 6.39 10.39v-4c0-.736.597-1.333 1.333-1.333" }),
        React77.createElement("path", { d: "M10.11 2.833A1.78 1.78 0 0 0 8.39 1.5H2.833c-.982 0-1.777.796-1.777 1.778v4.445c0 .981.796 1.778 1.777 1.777v2.667l1.334-1.455" })
      ),
      React77.createElement("defs", null, React77.createElement("clipPath", { id: "a" }, React77.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubbleLeftRight.displayName = "ChatBubbleLeftRight";

// node_modules/@medusajs/icons/dist/esm/chat-bubble.js
var React78 = __toESM(require_react());
var __defProp78 = Object.defineProperty;
var __getOwnPropSymbols78 = Object.getOwnPropertySymbols;
var __hasOwnProp78 = Object.prototype.hasOwnProperty;
var __propIsEnum78 = Object.prototype.propertyIsEnumerable;
var __defNormalProp78 = (obj, key, value) => key in obj ? __defProp78(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues78 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp78.call(b, prop))
      __defNormalProp78(a, prop, b[prop]);
  if (__getOwnPropSymbols78)
    for (var prop of __getOwnPropSymbols78(b)) {
      if (__propIsEnum78.call(b, prop))
        __defNormalProp78(a, prop, b[prop]);
    }
  return a;
};
var __objRest76 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp78.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols78)
    for (var prop of __getOwnPropSymbols78(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum78.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChatBubble = React78.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest76(_b, ["color"]);
    return React78.createElement(
      "svg",
      __spreadValues78({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React78.createElement("g", { clipPath: "url(#a)" }, React78.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.833.75A2.53 2.53 0 0 0 .306 3.278V9.5a2.53 2.53 0 0 0 2.527 2.528h1.028v1.916a.75.75 0 0 0 1.219.586l3.128-2.502h3.959A2.53 2.53 0 0 0 14.695 9.5V3.278A2.53 2.53 0 0 0 12.167.75zM1.806 3.278c0-.568.46-1.028 1.027-1.028h9.334c.568 0 1.028.46 1.028 1.028V9.5c0 .567-.46 1.028-1.028 1.028H7.945a.75.75 0 0 0-.469.164l-2.115 1.692v-1.106a.75.75 0 0 0-.75-.75H2.833c-.567 0-1.027-.46-1.027-1.028zm4.805 3.11a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0m-2.222.89a.89.89 0 0 1 0-1.778.89.89 0 0 1 0 1.778m5.333-.89a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0",
          clipRule: "evenodd"
        }
      )),
      React78.createElement("defs", null, React78.createElement("clipPath", { id: "a" }, React78.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubble.displayName = "ChatBubble";

// node_modules/@medusajs/icons/dist/esm/check-circle-mini-solid.js
var React79 = __toESM(require_react());
var __defProp79 = Object.defineProperty;
var __getOwnPropSymbols79 = Object.getOwnPropertySymbols;
var __hasOwnProp79 = Object.prototype.hasOwnProperty;
var __propIsEnum79 = Object.prototype.propertyIsEnumerable;
var __defNormalProp79 = (obj, key, value) => key in obj ? __defProp79(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues79 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp79.call(b, prop))
      __defNormalProp79(a, prop, b[prop]);
  if (__getOwnPropSymbols79)
    for (var prop of __getOwnPropSymbols79(b)) {
      if (__propIsEnum79.call(b, prop))
        __defNormalProp79(a, prop, b[prop]);
    }
  return a;
};
var __objRest77 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp79.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols79)
    for (var prop of __getOwnPropSymbols79(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum79.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CheckCircleMiniSolid = React79.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest77(_b, ["color"]);
    return React79.createElement(
      "svg",
      __spreadValues79({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React79.createElement("g", { clipPath: "url(#a)" }, React79.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m3.416 5.074-3.778 4.889a.67.67 0 0 1-.502.258h-.025a.67.67 0 0 1-.496-.22l-2-2.222a.668.668 0 0 1 .992-.893l1.465 1.629 3.29-4.257a.667.667 0 0 1 1.055.815z"
        }
      )),
      React79.createElement("defs", null, React79.createElement("clipPath", { id: "a" }, React79.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CheckCircleMiniSolid.displayName = "CheckCircleMiniSolid";

// node_modules/@medusajs/icons/dist/esm/check-circle-solid.js
var React80 = __toESM(require_react());
var __defProp80 = Object.defineProperty;
var __getOwnPropSymbols80 = Object.getOwnPropertySymbols;
var __hasOwnProp80 = Object.prototype.hasOwnProperty;
var __propIsEnum80 = Object.prototype.propertyIsEnumerable;
var __defNormalProp80 = (obj, key, value) => key in obj ? __defProp80(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues80 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp80.call(b, prop))
      __defNormalProp80(a, prop, b[prop]);
  if (__getOwnPropSymbols80)
    for (var prop of __getOwnPropSymbols80(b)) {
      if (__propIsEnum80.call(b, prop))
        __defNormalProp80(a, prop, b[prop]);
    }
  return a;
};
var __objRest78 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp80.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols80)
    for (var prop of __getOwnPropSymbols80(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum80.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CheckCircleSolid = React80.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest78(_b, ["color"]);
    return React80.createElement(
      "svg",
      __spreadValues80({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React80.createElement("g", { clipPath: "url(#a)" }, React80.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m3.416 5.074-3.778 4.889a.67.67 0 0 1-.502.258h-.025a.67.67 0 0 1-.496-.22l-2-2.222a.668.668 0 0 1 .992-.893l1.465 1.629 3.29-4.257a.667.667 0 0 1 1.055.815z"
        }
      )),
      React80.createElement("defs", null, React80.createElement("clipPath", { id: "a" }, React80.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CheckCircleSolid.displayName = "CheckCircleSolid";

// node_modules/@medusajs/icons/dist/esm/check-circle.js
var React81 = __toESM(require_react());
var __defProp81 = Object.defineProperty;
var __getOwnPropSymbols81 = Object.getOwnPropertySymbols;
var __hasOwnProp81 = Object.prototype.hasOwnProperty;
var __propIsEnum81 = Object.prototype.propertyIsEnumerable;
var __defNormalProp81 = (obj, key, value) => key in obj ? __defProp81(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues81 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp81.call(b, prop))
      __defNormalProp81(a, prop, b[prop]);
  if (__getOwnPropSymbols81)
    for (var prop of __getOwnPropSymbols81(b)) {
      if (__propIsEnum81.call(b, prop))
        __defNormalProp81(a, prop, b[prop]);
    }
  return a;
};
var __objRest79 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp81.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols81)
    for (var prop of __getOwnPropSymbols81(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum81.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CheckCircle = React81.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest79(_b, ["color"]);
    return React81.createElement(
      "svg",
      __spreadValues81({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React81.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"
        }
      ),
      React81.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.611 7.722 2 2.223 3.778-4.89"
        }
      )
    );
  }
);
CheckCircle.displayName = "CheckCircle";

// node_modules/@medusajs/icons/dist/esm/check-mini.js
var React82 = __toESM(require_react());
var __defProp82 = Object.defineProperty;
var __getOwnPropSymbols82 = Object.getOwnPropertySymbols;
var __hasOwnProp82 = Object.prototype.hasOwnProperty;
var __propIsEnum82 = Object.prototype.propertyIsEnumerable;
var __defNormalProp82 = (obj, key, value) => key in obj ? __defProp82(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues82 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp82.call(b, prop))
      __defNormalProp82(a, prop, b[prop]);
  if (__getOwnPropSymbols82)
    for (var prop of __getOwnPropSymbols82(b)) {
      if (__propIsEnum82.call(b, prop))
        __defNormalProp82(a, prop, b[prop]);
    }
  return a;
};
var __objRest80 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp82.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols82)
    for (var prop of __getOwnPropSymbols82(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum82.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CheckMini = React82.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest80(_b, ["color"]);
    return React82.createElement(
      "svg",
      __spreadValues82({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React82.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.036 7.679 2.857 3.571 6.071-7.5"
        }
      )
    );
  }
);
CheckMini.displayName = "CheckMini";

// node_modules/@medusajs/icons/dist/esm/check.js
var React83 = __toESM(require_react());
var __defProp83 = Object.defineProperty;
var __getOwnPropSymbols83 = Object.getOwnPropertySymbols;
var __hasOwnProp83 = Object.prototype.hasOwnProperty;
var __propIsEnum83 = Object.prototype.propertyIsEnumerable;
var __defNormalProp83 = (obj, key, value) => key in obj ? __defProp83(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues83 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp83.call(b, prop))
      __defNormalProp83(a, prop, b[prop]);
  if (__getOwnPropSymbols83)
    for (var prop of __getOwnPropSymbols83(b)) {
      if (__propIsEnum83.call(b, prop))
        __defNormalProp83(a, prop, b[prop]);
    }
  return a;
};
var __objRest81 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp83.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols83)
    for (var prop of __getOwnPropSymbols83(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum83.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Check = React83.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest81(_b, ["color"]);
    return React83.createElement(
      "svg",
      __spreadValues83({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React83.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.036 7.679 2.857 3.571 6.071-7.5"
        }
      )
    );
  }
);
Check.displayName = "Check";

// node_modules/@medusajs/icons/dist/esm/chevron-double-left-mini-solid.js
var React84 = __toESM(require_react());
var __defProp84 = Object.defineProperty;
var __getOwnPropSymbols84 = Object.getOwnPropertySymbols;
var __hasOwnProp84 = Object.prototype.hasOwnProperty;
var __propIsEnum84 = Object.prototype.propertyIsEnumerable;
var __defNormalProp84 = (obj, key, value) => key in obj ? __defProp84(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues84 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp84.call(b, prop))
      __defNormalProp84(a, prop, b[prop]);
  if (__getOwnPropSymbols84)
    for (var prop of __getOwnPropSymbols84(b)) {
      if (__propIsEnum84.call(b, prop))
        __defNormalProp84(a, prop, b[prop]);
    }
  return a;
};
var __objRest82 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp84.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols84)
    for (var prop of __getOwnPropSymbols84(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum84.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronDoubleLeftMiniSolid = React84.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest82(_b, ["color"]);
    return React84.createElement(
      "svg",
      __spreadValues84({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React84.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.833 11.278 3.056 7.5l3.777-3.778M11.056 11.278 7.278 7.5l3.778-3.778"
        }
      )
    );
  }
);
ChevronDoubleLeftMiniSolid.displayName = "ChevronDoubleLeftMiniSolid";

// node_modules/@medusajs/icons/dist/esm/chevron-double-left.js
var React85 = __toESM(require_react());
var __defProp85 = Object.defineProperty;
var __getOwnPropSymbols85 = Object.getOwnPropertySymbols;
var __hasOwnProp85 = Object.prototype.hasOwnProperty;
var __propIsEnum85 = Object.prototype.propertyIsEnumerable;
var __defNormalProp85 = (obj, key, value) => key in obj ? __defProp85(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues85 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp85.call(b, prop))
      __defNormalProp85(a, prop, b[prop]);
  if (__getOwnPropSymbols85)
    for (var prop of __getOwnPropSymbols85(b)) {
      if (__propIsEnum85.call(b, prop))
        __defNormalProp85(a, prop, b[prop]);
    }
  return a;
};
var __objRest83 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp85.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols85)
    for (var prop of __getOwnPropSymbols85(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum85.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronDoubleLeft = React85.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest83(_b, ["color"]);
    return React85.createElement(
      "svg",
      __spreadValues85({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React85.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.833 11.278 3.056 7.5l3.777-3.778M11.056 11.278 7.278 7.5l3.778-3.778"
        }
      )
    );
  }
);
ChevronDoubleLeft.displayName = "ChevronDoubleLeft";

// node_modules/@medusajs/icons/dist/esm/chevron-double-right-mini-solid.js
var React86 = __toESM(require_react());
var __defProp86 = Object.defineProperty;
var __getOwnPropSymbols86 = Object.getOwnPropertySymbols;
var __hasOwnProp86 = Object.prototype.hasOwnProperty;
var __propIsEnum86 = Object.prototype.propertyIsEnumerable;
var __defNormalProp86 = (obj, key, value) => key in obj ? __defProp86(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues86 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp86.call(b, prop))
      __defNormalProp86(a, prop, b[prop]);
  if (__getOwnPropSymbols86)
    for (var prop of __getOwnPropSymbols86(b)) {
      if (__propIsEnum86.call(b, prop))
        __defNormalProp86(a, prop, b[prop]);
    }
  return a;
};
var __objRest84 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp86.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols86)
    for (var prop of __getOwnPropSymbols86(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum86.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronDoubleRightMiniSolid = React86.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest84(_b, ["color"]);
    return React86.createElement(
      "svg",
      __spreadValues86({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React86.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 3.722 11.944 7.5l-3.777 3.778M3.944 3.722 7.722 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ChevronDoubleRightMiniSolid.displayName = "ChevronDoubleRightMiniSolid";

// node_modules/@medusajs/icons/dist/esm/chevron-double-right.js
var React87 = __toESM(require_react());
var __defProp87 = Object.defineProperty;
var __getOwnPropSymbols87 = Object.getOwnPropertySymbols;
var __hasOwnProp87 = Object.prototype.hasOwnProperty;
var __propIsEnum87 = Object.prototype.propertyIsEnumerable;
var __defNormalProp87 = (obj, key, value) => key in obj ? __defProp87(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues87 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp87.call(b, prop))
      __defNormalProp87(a, prop, b[prop]);
  if (__getOwnPropSymbols87)
    for (var prop of __getOwnPropSymbols87(b)) {
      if (__propIsEnum87.call(b, prop))
        __defNormalProp87(a, prop, b[prop]);
    }
  return a;
};
var __objRest85 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp87.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols87)
    for (var prop of __getOwnPropSymbols87(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum87.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronDoubleRight = React87.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest85(_b, ["color"]);
    return React87.createElement(
      "svg",
      __spreadValues87({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React87.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 3.722 11.945 7.5l-3.778 3.778M3.944 3.722 7.722 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ChevronDoubleRight.displayName = "ChevronDoubleRight";

// node_modules/@medusajs/icons/dist/esm/chevron-down-mini.js
var React88 = __toESM(require_react());
var __defProp88 = Object.defineProperty;
var __getOwnPropSymbols88 = Object.getOwnPropertySymbols;
var __hasOwnProp88 = Object.prototype.hasOwnProperty;
var __propIsEnum88 = Object.prototype.propertyIsEnumerable;
var __defNormalProp88 = (obj, key, value) => key in obj ? __defProp88(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues88 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp88.call(b, prop))
      __defNormalProp88(a, prop, b[prop]);
  if (__getOwnPropSymbols88)
    for (var prop of __getOwnPropSymbols88(b)) {
      if (__propIsEnum88.call(b, prop))
        __defNormalProp88(a, prop, b[prop]);
    }
  return a;
};
var __objRest86 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp88.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols88)
    for (var prop of __getOwnPropSymbols88(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum88.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronDownMini = React88.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest86(_b, ["color"]);
    return React88.createElement(
      "svg",
      __spreadValues88({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React88.createElement("g", { clipPath: "url(#a)" }, React88.createElement("g", { clipPath: "url(#b)" }, React88.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 5.278 7.5 10.833 1.944 5.278"
        }
      ))),
      React88.createElement("defs", null, React88.createElement("clipPath", { id: "a" }, React88.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React88.createElement("clipPath", { id: "b" }, React88.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
ChevronDownMini.displayName = "ChevronDownMini";

// node_modules/@medusajs/icons/dist/esm/chevron-down.js
var React89 = __toESM(require_react());
var __defProp89 = Object.defineProperty;
var __getOwnPropSymbols89 = Object.getOwnPropertySymbols;
var __hasOwnProp89 = Object.prototype.hasOwnProperty;
var __propIsEnum89 = Object.prototype.propertyIsEnumerable;
var __defNormalProp89 = (obj, key, value) => key in obj ? __defProp89(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues89 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp89.call(b, prop))
      __defNormalProp89(a, prop, b[prop]);
  if (__getOwnPropSymbols89)
    for (var prop of __getOwnPropSymbols89(b)) {
      if (__propIsEnum89.call(b, prop))
        __defNormalProp89(a, prop, b[prop]);
    }
  return a;
};
var __objRest87 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp89.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols89)
    for (var prop of __getOwnPropSymbols89(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum89.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronDown = React89.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest87(_b, ["color"]);
    return React89.createElement(
      "svg",
      __spreadValues89({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React89.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 5.278 7.5 10.833 1.944 5.278"
        }
      )
    );
  }
);
ChevronDown.displayName = "ChevronDown";

// node_modules/@medusajs/icons/dist/esm/chevron-left-mini.js
var React90 = __toESM(require_react());
var __defProp90 = Object.defineProperty;
var __getOwnPropSymbols90 = Object.getOwnPropertySymbols;
var __hasOwnProp90 = Object.prototype.hasOwnProperty;
var __propIsEnum90 = Object.prototype.propertyIsEnumerable;
var __defNormalProp90 = (obj, key, value) => key in obj ? __defProp90(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues90 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp90.call(b, prop))
      __defNormalProp90(a, prop, b[prop]);
  if (__getOwnPropSymbols90)
    for (var prop of __getOwnPropSymbols90(b)) {
      if (__propIsEnum90.call(b, prop))
        __defNormalProp90(a, prop, b[prop]);
    }
  return a;
};
var __objRest88 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp90.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols90)
    for (var prop of __getOwnPropSymbols90(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum90.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronLeftMini = React90.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest88(_b, ["color"]);
    return React90.createElement(
      "svg",
      __spreadValues90({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React90.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.722 13.055 4.167 7.5l5.555-5.556"
        }
      )
    );
  }
);
ChevronLeftMini.displayName = "ChevronLeftMini";

// node_modules/@medusajs/icons/dist/esm/chevron-left.js
var React91 = __toESM(require_react());
var __defProp91 = Object.defineProperty;
var __getOwnPropSymbols91 = Object.getOwnPropertySymbols;
var __hasOwnProp91 = Object.prototype.hasOwnProperty;
var __propIsEnum91 = Object.prototype.propertyIsEnumerable;
var __defNormalProp91 = (obj, key, value) => key in obj ? __defProp91(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues91 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp91.call(b, prop))
      __defNormalProp91(a, prop, b[prop]);
  if (__getOwnPropSymbols91)
    for (var prop of __getOwnPropSymbols91(b)) {
      if (__propIsEnum91.call(b, prop))
        __defNormalProp91(a, prop, b[prop]);
    }
  return a;
};
var __objRest89 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp91.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols91)
    for (var prop of __getOwnPropSymbols91(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum91.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronLeft = React91.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest89(_b, ["color"]);
    return React91.createElement(
      "svg",
      __spreadValues91({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React91.createElement("g", { clipPath: "url(#a)" }, React91.createElement("g", { clipPath: "url(#b)" }, React91.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.722 13.055 4.167 7.5l5.555-5.556"
        }
      ))),
      React91.createElement("defs", null, React91.createElement("clipPath", { id: "a" }, React91.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React91.createElement("clipPath", { id: "b" }, React91.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
ChevronLeft.displayName = "ChevronLeft";

// node_modules/@medusajs/icons/dist/esm/chevron-right-mini.js
var React92 = __toESM(require_react());
var __defProp92 = Object.defineProperty;
var __getOwnPropSymbols92 = Object.getOwnPropertySymbols;
var __hasOwnProp92 = Object.prototype.hasOwnProperty;
var __propIsEnum92 = Object.prototype.propertyIsEnumerable;
var __defNormalProp92 = (obj, key, value) => key in obj ? __defProp92(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues92 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp92.call(b, prop))
      __defNormalProp92(a, prop, b[prop]);
  if (__getOwnPropSymbols92)
    for (var prop of __getOwnPropSymbols92(b)) {
      if (__propIsEnum92.call(b, prop))
        __defNormalProp92(a, prop, b[prop]);
    }
  return a;
};
var __objRest90 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp92.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols92)
    for (var prop of __getOwnPropSymbols92(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum92.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronRightMini = React92.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest90(_b, ["color"]);
    return React92.createElement(
      "svg",
      __spreadValues92({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React92.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.278 1.944 10.833 7.5l-5.555 5.555"
        }
      )
    );
  }
);
ChevronRightMini.displayName = "ChevronRightMini";

// node_modules/@medusajs/icons/dist/esm/chevron-right.js
var React93 = __toESM(require_react());
var __defProp93 = Object.defineProperty;
var __getOwnPropSymbols93 = Object.getOwnPropertySymbols;
var __hasOwnProp93 = Object.prototype.hasOwnProperty;
var __propIsEnum93 = Object.prototype.propertyIsEnumerable;
var __defNormalProp93 = (obj, key, value) => key in obj ? __defProp93(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues93 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp93.call(b, prop))
      __defNormalProp93(a, prop, b[prop]);
  if (__getOwnPropSymbols93)
    for (var prop of __getOwnPropSymbols93(b)) {
      if (__propIsEnum93.call(b, prop))
        __defNormalProp93(a, prop, b[prop]);
    }
  return a;
};
var __objRest91 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp93.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols93)
    for (var prop of __getOwnPropSymbols93(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum93.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronRight = React93.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest91(_b, ["color"]);
    return React93.createElement(
      "svg",
      __spreadValues93({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React93.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.278 1.944 10.833 7.5l-5.555 5.555"
        }
      )
    );
  }
);
ChevronRight.displayName = "ChevronRight";

// node_modules/@medusajs/icons/dist/esm/chevron-up-down.js
var React94 = __toESM(require_react());
var __defProp94 = Object.defineProperty;
var __getOwnPropSymbols94 = Object.getOwnPropertySymbols;
var __hasOwnProp94 = Object.prototype.hasOwnProperty;
var __propIsEnum94 = Object.prototype.propertyIsEnumerable;
var __defNormalProp94 = (obj, key, value) => key in obj ? __defProp94(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues94 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp94.call(b, prop))
      __defNormalProp94(a, prop, b[prop]);
  if (__getOwnPropSymbols94)
    for (var prop of __getOwnPropSymbols94(b)) {
      if (__propIsEnum94.call(b, prop))
        __defNormalProp94(a, prop, b[prop]);
    }
  return a;
};
var __objRest92 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp94.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols94)
    for (var prop of __getOwnPropSymbols94(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum94.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronUpDown = React94.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest92(_b, ["color"]);
    return React94.createElement(
      "svg",
      __spreadValues94({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React94.createElement(
        "path",
        {
          fill: color,
          d: "M4.91 5.75c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293A.7.7 0 0 1 4 4.952a.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108zM10.09 9.25c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455a.7.7 0 0 1-.142-.39.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z"
        }
      )
    );
  }
);
ChevronUpDown.displayName = "ChevronUpDown";

// node_modules/@medusajs/icons/dist/esm/chevron-up-mini.js
var React95 = __toESM(require_react());
var __defProp95 = Object.defineProperty;
var __getOwnPropSymbols95 = Object.getOwnPropertySymbols;
var __hasOwnProp95 = Object.prototype.hasOwnProperty;
var __propIsEnum95 = Object.prototype.propertyIsEnumerable;
var __defNormalProp95 = (obj, key, value) => key in obj ? __defProp95(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues95 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp95.call(b, prop))
      __defNormalProp95(a, prop, b[prop]);
  if (__getOwnPropSymbols95)
    for (var prop of __getOwnPropSymbols95(b)) {
      if (__propIsEnum95.call(b, prop))
        __defNormalProp95(a, prop, b[prop]);
    }
  return a;
};
var __objRest93 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp95.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols95)
    for (var prop of __getOwnPropSymbols95(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum95.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ChevronUpMini = React95.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest93(_b, ["color"]);
    return React95.createElement(
      "svg",
      __spreadValues95({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React95.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 9.722 7.5 4.167l5.556 5.555"
        }
      )
    );
  }
);
ChevronUpMini.displayName = "ChevronUpMini";

// node_modules/@medusajs/icons/dist/esm/circle-arrow-up.js
var React96 = __toESM(require_react());
var __defProp96 = Object.defineProperty;
var __getOwnPropSymbols96 = Object.getOwnPropertySymbols;
var __hasOwnProp96 = Object.prototype.hasOwnProperty;
var __propIsEnum96 = Object.prototype.propertyIsEnumerable;
var __defNormalProp96 = (obj, key, value) => key in obj ? __defProp96(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues96 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp96.call(b, prop))
      __defNormalProp96(a, prop, b[prop]);
  if (__getOwnPropSymbols96)
    for (var prop of __getOwnPropSymbols96(b)) {
      if (__propIsEnum96.call(b, prop))
        __defNormalProp96(a, prop, b[prop]);
    }
  return a;
};
var __objRest94 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp96.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols96)
    for (var prop of __getOwnPropSymbols96(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum96.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleArrowUp = React96.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest94(_b, ["color"]);
    return React96.createElement(
      "svg",
      __spreadValues96({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React96.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.278 6.834 7.5 4.61l2.222 2.223M7.5 4.611v5.778"
        }
      ),
      React96.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"
        }
      )
    );
  }
);
CircleArrowUp.displayName = "CircleArrowUp";

// node_modules/@medusajs/icons/dist/esm/circle-dotted-line.js
var React97 = __toESM(require_react());
var __defProp97 = Object.defineProperty;
var __getOwnPropSymbols97 = Object.getOwnPropertySymbols;
var __hasOwnProp97 = Object.prototype.hasOwnProperty;
var __propIsEnum97 = Object.prototype.propertyIsEnumerable;
var __defNormalProp97 = (obj, key, value) => key in obj ? __defProp97(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues97 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp97.call(b, prop))
      __defNormalProp97(a, prop, b[prop]);
  if (__getOwnPropSymbols97)
    for (var prop of __getOwnPropSymbols97(b)) {
      if (__propIsEnum97.call(b, prop))
        __defNormalProp97(a, prop, b[prop]);
    }
  return a;
};
var __objRest95 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp97.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols97)
    for (var prop of __getOwnPropSymbols97(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum97.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleDottedLine = React97.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest95(_b, ["color"]);
    return React97.createElement(
      "svg",
      __spreadValues97({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React97.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React97.createElement("path", { d: "M3.933 2.132a6.4 6.4 0 0 1 2.322-.956M1.17 6.283a6.4 6.4 0 0 1 .97-2.362M3.933 12.868c.691.46 1.477.791 2.322.956M1.17 8.717c.165.86.5 1.66.97 2.362M8.745 1.176c.845.165 1.63.496 2.322.956M12.86 3.921a6.4 6.4 0 0 1 .97 2.362M8.745 13.824a6.4 6.4 0 0 0 2.322-.956M12.86 11.079c.47-.703.805-1.502.97-2.362" })
      ),
      React97.createElement("defs", null, React97.createElement("clipPath", { id: "a" }, React97.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleDottedLine.displayName = "CircleDottedLine";

// node_modules/@medusajs/icons/dist/esm/circle-filled-solid.js
var React98 = __toESM(require_react());
var __defProp98 = Object.defineProperty;
var __getOwnPropSymbols98 = Object.getOwnPropertySymbols;
var __hasOwnProp98 = Object.prototype.hasOwnProperty;
var __propIsEnum98 = Object.prototype.propertyIsEnumerable;
var __defNormalProp98 = (obj, key, value) => key in obj ? __defProp98(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues98 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp98.call(b, prop))
      __defNormalProp98(a, prop, b[prop]);
  if (__getOwnPropSymbols98)
    for (var prop of __getOwnPropSymbols98(b)) {
      if (__propIsEnum98.call(b, prop))
        __defNormalProp98(a, prop, b[prop]);
    }
  return a;
};
var __objRest96 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp98.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols98)
    for (var prop of __getOwnPropSymbols98(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum98.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleFilledSolid = React98.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest96(_b, ["color"]);
    return React98.createElement(
      "svg",
      __spreadValues98({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React98.createElement("g", { clipPath: "url(#a)" }, React98.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), React98.createElement("circle", { cx: 7.5, cy: 7.5, r: 4.444, fill: color })),
      React98.createElement("defs", null, React98.createElement("clipPath", { id: "a" }, React98.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleFilledSolid.displayName = "CircleFilledSolid";

// node_modules/@medusajs/icons/dist/esm/circle-half-solid.js
var React99 = __toESM(require_react());
var __defProp99 = Object.defineProperty;
var __getOwnPropSymbols99 = Object.getOwnPropertySymbols;
var __hasOwnProp99 = Object.prototype.hasOwnProperty;
var __propIsEnum99 = Object.prototype.propertyIsEnumerable;
var __defNormalProp99 = (obj, key, value) => key in obj ? __defProp99(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues99 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp99.call(b, prop))
      __defNormalProp99(a, prop, b[prop]);
  if (__getOwnPropSymbols99)
    for (var prop of __getOwnPropSymbols99(b)) {
      if (__propIsEnum99.call(b, prop))
        __defNormalProp99(a, prop, b[prop]);
    }
  return a;
};
var __objRest97 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp99.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols99)
    for (var prop of __getOwnPropSymbols99(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum99.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleHalfSolid = React99.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest97(_b, ["color"]);
    return React99.createElement(
      "svg",
      __spreadValues99({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React99.createElement("g", { clipPath: "url(#a)" }, React99.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), React99.createElement("path", { fill: color, d: "M7.5 11.944a4.444 4.444 0 0 0 0-8.888z" })),
      React99.createElement("defs", null, React99.createElement("clipPath", { id: "a" }, React99.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleHalfSolid.displayName = "CircleHalfSolid";

// node_modules/@medusajs/icons/dist/esm/circle-mini-filled-solid.js
var React100 = __toESM(require_react());
var __defProp100 = Object.defineProperty;
var __getOwnPropSymbols100 = Object.getOwnPropertySymbols;
var __hasOwnProp100 = Object.prototype.hasOwnProperty;
var __propIsEnum100 = Object.prototype.propertyIsEnumerable;
var __defNormalProp100 = (obj, key, value) => key in obj ? __defProp100(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues100 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp100.call(b, prop))
      __defNormalProp100(a, prop, b[prop]);
  if (__getOwnPropSymbols100)
    for (var prop of __getOwnPropSymbols100(b)) {
      if (__propIsEnum100.call(b, prop))
        __defNormalProp100(a, prop, b[prop]);
    }
  return a;
};
var __objRest98 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp100.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols100)
    for (var prop of __getOwnPropSymbols100(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum100.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleMiniFilledSolid = React100.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest98(_b, ["color"]);
    return React100.createElement(
      "svg",
      __spreadValues100({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React100.createElement("g", { clipPath: "url(#a)" }, React100.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), React100.createElement("circle", { cx: 7.5, cy: 7.5, r: 4.444, fill: color })),
      React100.createElement("defs", null, React100.createElement("clipPath", { id: "a" }, React100.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleMiniFilledSolid.displayName = "CircleMiniFilledSolid";

// node_modules/@medusajs/icons/dist/esm/circle-mini-solid.js
var React101 = __toESM(require_react());
var __defProp101 = Object.defineProperty;
var __getOwnPropSymbols101 = Object.getOwnPropertySymbols;
var __hasOwnProp101 = Object.prototype.hasOwnProperty;
var __propIsEnum101 = Object.prototype.propertyIsEnumerable;
var __defNormalProp101 = (obj, key, value) => key in obj ? __defProp101(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues101 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp101.call(b, prop))
      __defNormalProp101(a, prop, b[prop]);
  if (__getOwnPropSymbols101)
    for (var prop of __getOwnPropSymbols101(b)) {
      if (__propIsEnum101.call(b, prop))
        __defNormalProp101(a, prop, b[prop]);
    }
  return a;
};
var __objRest99 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp101.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols101)
    for (var prop of __getOwnPropSymbols101(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum101.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleMiniSolid = React101.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest99(_b, ["color"]);
    return React101.createElement(
      "svg",
      __spreadValues101({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React101.createElement("g", { clipPath: "url(#a)" }, React101.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M7.5 1.722a5.778 5.778 0 1 0 0 11.556 5.778 5.778 0 0 0 0-11.556M.389 7.5a7.111 7.111 0 1 1 14.222 0A7.111 7.111 0 0 1 .39 7.5",
          clipRule: "evenodd"
        }
      )),
      React101.createElement("defs", null, React101.createElement("clipPath", { id: "a" }, React101.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleMiniSolid.displayName = "CircleMiniSolid";

// node_modules/@medusajs/icons/dist/esm/circle-minus.js
var React102 = __toESM(require_react());
var __defProp102 = Object.defineProperty;
var __getOwnPropSymbols102 = Object.getOwnPropertySymbols;
var __hasOwnProp102 = Object.prototype.hasOwnProperty;
var __propIsEnum102 = Object.prototype.propertyIsEnumerable;
var __defNormalProp102 = (obj, key, value) => key in obj ? __defProp102(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues102 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp102.call(b, prop))
      __defNormalProp102(a, prop, b[prop]);
  if (__getOwnPropSymbols102)
    for (var prop of __getOwnPropSymbols102(b)) {
      if (__propIsEnum102.call(b, prop))
        __defNormalProp102(a, prop, b[prop]);
    }
  return a;
};
var __objRest100 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp102.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols102)
    for (var prop of __getOwnPropSymbols102(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum102.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleMinus = React102.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest100(_b, ["color"]);
    return React102.createElement(
      "svg",
      __spreadValues102({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React102.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.889 7.778H4.61a.667.667 0 0 1 0-1.334h5.778a.667.667 0 0 1 0 1.334"
        }
      )
    );
  }
);
CircleMinus.displayName = "CircleMinus";

// node_modules/@medusajs/icons/dist/esm/circle-quarter-solid.js
var React103 = __toESM(require_react());
var __defProp103 = Object.defineProperty;
var __getOwnPropSymbols103 = Object.getOwnPropertySymbols;
var __hasOwnProp103 = Object.prototype.hasOwnProperty;
var __propIsEnum103 = Object.prototype.propertyIsEnumerable;
var __defNormalProp103 = (obj, key, value) => key in obj ? __defProp103(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues103 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp103.call(b, prop))
      __defNormalProp103(a, prop, b[prop]);
  if (__getOwnPropSymbols103)
    for (var prop of __getOwnPropSymbols103(b)) {
      if (__propIsEnum103.call(b, prop))
        __defNormalProp103(a, prop, b[prop]);
    }
  return a;
};
var __objRest101 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp103.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols103)
    for (var prop of __getOwnPropSymbols103(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum103.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleQuarterSolid = React103.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest101(_b, ["color"]);
    return React103.createElement(
      "svg",
      __spreadValues103({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React103.createElement("g", { clipPath: "url(#a)" }, React103.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), React103.createElement("path", { fill: color, d: "M11.944 7.5A4.444 4.444 0 0 0 7.5 3.056V7.5z" })),
      React103.createElement("defs", null, React103.createElement("clipPath", { id: "a" }, React103.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleQuarterSolid.displayName = "CircleQuarterSolid";

// node_modules/@medusajs/icons/dist/esm/circle-sliders.js
var React104 = __toESM(require_react());
var __defProp104 = Object.defineProperty;
var __getOwnPropSymbols104 = Object.getOwnPropertySymbols;
var __hasOwnProp104 = Object.prototype.hasOwnProperty;
var __propIsEnum104 = Object.prototype.propertyIsEnumerable;
var __defNormalProp104 = (obj, key, value) => key in obj ? __defProp104(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues104 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp104.call(b, prop))
      __defNormalProp104(a, prop, b[prop]);
  if (__getOwnPropSymbols104)
    for (var prop of __getOwnPropSymbols104(b)) {
      if (__propIsEnum104.call(b, prop))
        __defNormalProp104(a, prop, b[prop]);
    }
  return a;
};
var __objRest102 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp104.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols104)
    for (var prop of __getOwnPropSymbols104(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum104.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleSliders = React104.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest102(_b, ["color"]);
    return React104.createElement(
      "svg",
      __spreadValues104({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React104.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89M8.167 5.5h2.666M4.167 5.5h1.777M5.944 3.944v3.111M9.056 9.5h1.777M4.167 9.5h2.666M9.056 7.944v3.111"
        }
      )
    );
  }
);
CircleSliders.displayName = "CircleSliders";

// node_modules/@medusajs/icons/dist/esm/circle-solid.js
var React105 = __toESM(require_react());
var __defProp105 = Object.defineProperty;
var __getOwnPropSymbols105 = Object.getOwnPropertySymbols;
var __hasOwnProp105 = Object.prototype.hasOwnProperty;
var __propIsEnum105 = Object.prototype.propertyIsEnumerable;
var __defNormalProp105 = (obj, key, value) => key in obj ? __defProp105(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues105 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp105.call(b, prop))
      __defNormalProp105(a, prop, b[prop]);
  if (__getOwnPropSymbols105)
    for (var prop of __getOwnPropSymbols105(b)) {
      if (__propIsEnum105.call(b, prop))
        __defNormalProp105(a, prop, b[prop]);
    }
  return a;
};
var __objRest103 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp105.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols105)
    for (var prop of __getOwnPropSymbols105(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum105.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleSolid = React105.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest103(_b, ["color"]);
    return React105.createElement(
      "svg",
      __spreadValues105({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React105.createElement("g", { clipPath: "url(#a)" }, React105.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M7.5 1.722a5.778 5.778 0 1 0 0 11.556 5.778 5.778 0 0 0 0-11.556M.389 7.5a7.111 7.111 0 1 1 14.222 0A7.111 7.111 0 0 1 .39 7.5",
          clipRule: "evenodd"
        }
      )),
      React105.createElement("defs", null, React105.createElement("clipPath", { id: "a" }, React105.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleSolid.displayName = "CircleSolid";

// node_modules/@medusajs/icons/dist/esm/circle-stack-solid.js
var React106 = __toESM(require_react());
var __defProp106 = Object.defineProperty;
var __getOwnPropSymbols106 = Object.getOwnPropertySymbols;
var __hasOwnProp106 = Object.prototype.hasOwnProperty;
var __propIsEnum106 = Object.prototype.propertyIsEnumerable;
var __defNormalProp106 = (obj, key, value) => key in obj ? __defProp106(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues106 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp106.call(b, prop))
      __defNormalProp106(a, prop, b[prop]);
  if (__getOwnPropSymbols106)
    for (var prop of __getOwnPropSymbols106(b)) {
      if (__propIsEnum106.call(b, prop))
        __defNormalProp106(a, prop, b[prop]);
    }
  return a;
};
var __objRest104 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp106.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols106)
    for (var prop of __getOwnPropSymbols106(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum106.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleStackSolid = React106.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest104(_b, ["color"]);
    return React106.createElement(
      "svg",
      __spreadValues106({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React106.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.611c-3.092 0-6.222.916-6.222 2.667v8.444c0 1.751 3.13 2.667 6.222 2.667s6.222-.916 6.222-2.667V3.278C13.722 1.527 10.592.61 7.5.61M12.39 7.5c0 .388-1.713 1.333-4.889 1.333S2.611 7.888 2.611 7.5V4.985c1.2.632 3.048.96 4.889.96 1.84 0 3.69-.328 4.889-.96zM7.5 13.056c-3.176 0-4.889-.946-4.889-1.334V9.208c1.2.632 3.048.959 4.889.959 1.84 0 3.69-.327 4.889-.96v2.515c0 .388-1.713 1.334-4.889 1.334"
        }
      )
    );
  }
);
CircleStackSolid.displayName = "CircleStackSolid";

// node_modules/@medusajs/icons/dist/esm/circle-stack.js
var React107 = __toESM(require_react());
var __defProp107 = Object.defineProperty;
var __getOwnPropSymbols107 = Object.getOwnPropertySymbols;
var __hasOwnProp107 = Object.prototype.hasOwnProperty;
var __propIsEnum107 = Object.prototype.propertyIsEnumerable;
var __defNormalProp107 = (obj, key, value) => key in obj ? __defProp107(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues107 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp107.call(b, prop))
      __defNormalProp107(a, prop, b[prop]);
  if (__getOwnPropSymbols107)
    for (var prop of __getOwnPropSymbols107(b)) {
      if (__propIsEnum107.call(b, prop))
        __defNormalProp107(a, prop, b[prop]);
    }
  return a;
};
var __objRest105 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp107.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols107)
    for (var prop of __getOwnPropSymbols107(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum107.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleStack = React107.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest105(_b, ["color"]);
    return React107.createElement(
      "svg",
      __spreadValues107({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React107.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 5.278c3.068 0 5.556-.896 5.556-2s-2.488-2-5.556-2-5.556.895-5.556 2 2.488 2 5.556 2"
        }
      ),
      React107.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 3.278v8.444c0 1.105 2.488 2 5.556 2s5.556-.895 5.556-2V3.278"
        }
      ),
      React107.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5c0 1.105 2.488 2 5.556 2s5.556-.895 5.556-2"
        }
      )
    );
  }
);
CircleStack.displayName = "CircleStack";

// node_modules/@medusajs/icons/dist/esm/circle-three-quarters-solid.js
var React108 = __toESM(require_react());
var __defProp108 = Object.defineProperty;
var __getOwnPropSymbols108 = Object.getOwnPropertySymbols;
var __hasOwnProp108 = Object.prototype.hasOwnProperty;
var __propIsEnum108 = Object.prototype.propertyIsEnumerable;
var __defNormalProp108 = (obj, key, value) => key in obj ? __defProp108(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues108 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp108.call(b, prop))
      __defNormalProp108(a, prop, b[prop]);
  if (__getOwnPropSymbols108)
    for (var prop of __getOwnPropSymbols108(b)) {
      if (__propIsEnum108.call(b, prop))
        __defNormalProp108(a, prop, b[prop]);
    }
  return a;
};
var __objRest106 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp108.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols108)
    for (var prop of __getOwnPropSymbols108(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum108.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CircleThreeQuartersSolid = React108.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest106(_b, ["color"]);
    return React108.createElement(
      "svg",
      __spreadValues108({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React108.createElement("g", { fill: color, clipPath: "url(#a)" }, React108.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.5 13.277a5.777 5.777 0 1 0 0-11.554 5.777 5.777 0 0 0 0 11.554m0 1.333A7.11 7.11 0 1 0 7.5.39a7.11 7.11 0 0 0 0 14.22",
          clipRule: "evenodd"
        }
      ), React108.createElement("path", { d: "M7.5 11.944a4.444 4.444 0 1 0 0-8.888V7.5H3.056c0 2.434 2.053 4.444 4.444 4.444" })),
      React108.createElement("defs", null, React108.createElement("clipPath", { id: "a" }, React108.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleThreeQuartersSolid.displayName = "CircleThreeQuartersSolid";

// node_modules/@medusajs/icons/dist/esm/clock-changed-solid-mini.js
var React109 = __toESM(require_react());
var __defProp109 = Object.defineProperty;
var __getOwnPropSymbols109 = Object.getOwnPropertySymbols;
var __hasOwnProp109 = Object.prototype.hasOwnProperty;
var __propIsEnum109 = Object.prototype.propertyIsEnumerable;
var __defNormalProp109 = (obj, key, value) => key in obj ? __defProp109(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues109 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp109.call(b, prop))
      __defNormalProp109(a, prop, b[prop]);
  if (__getOwnPropSymbols109)
    for (var prop of __getOwnPropSymbols109(b)) {
      if (__propIsEnum109.call(b, prop))
        __defNormalProp109(a, prop, b[prop]);
    }
  return a;
};
var __objRest107 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp109.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols109)
    for (var prop of __getOwnPropSymbols109(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum109.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ClockChangedSolidMini = React109.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest107(_b, ["color"]);
    return React109.createElement(
      "svg",
      __spreadValues109({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React109.createElement("g", { fill: color, clipPath: "url(#a)" }, React109.createElement("path", { d: "M14.167 3.278a.66.66 0 0 1-.472-.196l-1.777-1.778a.667.667 0 0 1 .943-.943l1.778 1.778a.667.667 0 0 1-.472 1.139M.833 3.278a.667.667 0 0 1-.471-1.139L2.14.362a.667.667 0 1 1 .943.943L1.305 3.083c-.13.13-.3.196-.47.196zM12.342 11.399a6.2 6.2 0 0 0 1.38-3.899A6.23 6.23 0 0 0 7.5 1.278 6.23 6.23 0 0 0 1.278 7.5a6.2 6.2 0 0 0 1.38 3.899l-1.185 1.185a.667.667 0 0 0 .943.943L3.6 12.342a6.2 6.2 0 0 0 3.899 1.38 6.2 6.2 0 0 0 3.9-1.38l1.185 1.185a.665.665 0 0 0 .942 0 .667.667 0 0 0 0-.943zm-1.835-1.986a.665.665 0 0 1-.92.204L7.143 8.062a.67.67 0 0 1-.309-.563V4.61a.667.667 0 0 1 1.334 0v2.523l2.136 1.36c.31.197.4.609.203.92" })),
      React109.createElement("defs", null, React109.createElement("clipPath", { id: "a" }, React109.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ClockChangedSolidMini.displayName = "ClockChangedSolidMini";

// node_modules/@medusajs/icons/dist/esm/clock-solid-mini.js
var React110 = __toESM(require_react());
var __defProp110 = Object.defineProperty;
var __getOwnPropSymbols110 = Object.getOwnPropertySymbols;
var __hasOwnProp110 = Object.prototype.hasOwnProperty;
var __propIsEnum110 = Object.prototype.propertyIsEnumerable;
var __defNormalProp110 = (obj, key, value) => key in obj ? __defProp110(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues110 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp110.call(b, prop))
      __defNormalProp110(a, prop, b[prop]);
  if (__getOwnPropSymbols110)
    for (var prop of __getOwnPropSymbols110(b)) {
      if (__propIsEnum110.call(b, prop))
        __defNormalProp110(a, prop, b[prop]);
    }
  return a;
};
var __objRest108 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp110.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols110)
    for (var prop of __getOwnPropSymbols110(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum110.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ClockSolidMini = React110.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest108(_b, ["color"]);
    return React110.createElement(
      "svg",
      __spreadValues110({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React110.createElement("g", { fill: color, clipPath: "url(#a)" }, React110.createElement("path", { d: "M14.167 3.278a.66.66 0 0 1-.472-.196l-1.777-1.778a.667.667 0 0 1 .943-.943l1.778 1.778a.667.667 0 0 1-.472 1.139M.833 3.278a.667.667 0 0 1-.471-1.139L2.14.362a.667.667 0 1 1 .943.943L1.305 3.083c-.13.13-.3.196-.47.196zM12.342 11.399a6.2 6.2 0 0 0 1.38-3.899A6.23 6.23 0 0 0 7.5 1.278 6.23 6.23 0 0 0 1.278 7.5a6.2 6.2 0 0 0 1.38 3.899l-1.185 1.185a.667.667 0 0 0 .943.943L3.6 12.342a6.2 6.2 0 0 0 3.899 1.38 6.2 6.2 0 0 0 3.9-1.38l1.185 1.185a.665.665 0 0 0 .942 0 .667.667 0 0 0 0-.943zm-1.835-1.986a.665.665 0 0 1-.92.204L7.143 8.062a.67.67 0 0 1-.309-.563V4.61a.667.667 0 0 1 1.334 0v2.523l2.136 1.36c.31.197.4.609.203.92" })),
      React110.createElement("defs", null, React110.createElement("clipPath", { id: "a" }, React110.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ClockSolidMini.displayName = "ClockSolidMini";

// node_modules/@medusajs/icons/dist/esm/clock-solid.js
var React111 = __toESM(require_react());
var __defProp111 = Object.defineProperty;
var __getOwnPropSymbols111 = Object.getOwnPropertySymbols;
var __hasOwnProp111 = Object.prototype.hasOwnProperty;
var __propIsEnum111 = Object.prototype.propertyIsEnumerable;
var __defNormalProp111 = (obj, key, value) => key in obj ? __defProp111(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues111 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp111.call(b, prop))
      __defNormalProp111(a, prop, b[prop]);
  if (__getOwnPropSymbols111)
    for (var prop of __getOwnPropSymbols111(b)) {
      if (__propIsEnum111.call(b, prop))
        __defNormalProp111(a, prop, b[prop]);
    }
  return a;
};
var __objRest109 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp111.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols111)
    for (var prop of __getOwnPropSymbols111(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum111.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ClockSolid = React111.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest109(_b, ["color"]);
    return React111.createElement(
      "svg",
      __spreadValues111({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React111.createElement("g", { fill: color, clipPath: "url(#a)" }, React111.createElement("path", { d: "M14.167 3.278a.66.66 0 0 1-.472-.196l-1.777-1.778a.667.667 0 0 1 .943-.943l1.778 1.778a.667.667 0 0 1-.472 1.139M.833 3.278a.667.667 0 0 1-.471-1.139L2.14.362a.667.667 0 1 1 .943.943L1.305 3.083c-.13.13-.3.196-.47.196zM12.342 11.399a6.2 6.2 0 0 0 1.38-3.899A6.23 6.23 0 0 0 7.5 1.278 6.23 6.23 0 0 0 1.278 7.5a6.2 6.2 0 0 0 1.38 3.899l-1.185 1.185a.667.667 0 0 0 .943.943L3.6 12.342a6.2 6.2 0 0 0 3.899 1.38 6.2 6.2 0 0 0 3.9-1.38l1.185 1.185a.665.665 0 0 0 .942 0 .667.667 0 0 0 0-.943zm-1.835-1.986a.665.665 0 0 1-.92.204L7.143 8.062a.67.67 0 0 1-.309-.563V4.61a.667.667 0 0 1 1.334 0v2.523l2.136 1.36c.31.197.4.609.203.92" })),
      React111.createElement("defs", null, React111.createElement("clipPath", { id: "a" }, React111.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ClockSolid.displayName = "ClockSolid";

// node_modules/@medusajs/icons/dist/esm/clock.js
var React112 = __toESM(require_react());
var __defProp112 = Object.defineProperty;
var __getOwnPropSymbols112 = Object.getOwnPropertySymbols;
var __hasOwnProp112 = Object.prototype.hasOwnProperty;
var __propIsEnum112 = Object.prototype.propertyIsEnumerable;
var __defNormalProp112 = (obj, key, value) => key in obj ? __defProp112(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues112 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp112.call(b, prop))
      __defNormalProp112(a, prop, b[prop]);
  if (__getOwnPropSymbols112)
    for (var prop of __getOwnPropSymbols112(b)) {
      if (__propIsEnum112.call(b, prop))
        __defNormalProp112(a, prop, b[prop]);
    }
  return a;
};
var __objRest110 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp112.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols112)
    for (var prop of __getOwnPropSymbols112(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum112.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Clock = React112.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest110(_b, ["color"]);
    return React112.createElement(
      "svg",
      __spreadValues112({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React112.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React112.createElement("path", { d: "m12.389.833 1.778 1.778M2.611.833.833 2.611M7.5 13.056a5.556 5.556 0 1 0 0-11.112 5.556 5.556 0 0 0 0 11.112M3.572 11.428l-1.628 1.627M11.428 11.428l1.627 1.627" }),
        React112.createElement("path", { d: "M7.5 4.611V7.5l2.444 1.556" })
      ),
      React112.createElement("defs", null, React112.createElement("clipPath", { id: "a" }, React112.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Clock.displayName = "Clock";

// node_modules/@medusajs/icons/dist/esm/clone-dashed.js
var React113 = __toESM(require_react());
var __defProp113 = Object.defineProperty;
var __getOwnPropSymbols113 = Object.getOwnPropertySymbols;
var __hasOwnProp113 = Object.prototype.hasOwnProperty;
var __propIsEnum113 = Object.prototype.propertyIsEnumerable;
var __defNormalProp113 = (obj, key, value) => key in obj ? __defProp113(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues113 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp113.call(b, prop))
      __defNormalProp113(a, prop, b[prop]);
  if (__getOwnPropSymbols113)
    for (var prop of __getOwnPropSymbols113(b)) {
      if (__propIsEnum113.call(b, prop))
        __defNormalProp113(a, prop, b[prop]);
    }
  return a;
};
var __objRest111 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp113.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols113)
    for (var prop of __getOwnPropSymbols113(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum113.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CloneDashed = React113.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest111(_b, ["color"]);
    return React113.createElement(
      "svg",
      __spreadValues113({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React113.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.056 13.944H2.833a1.78 1.78 0 0 1-1.777-1.777V5.944c0-.981.795-1.777 1.777-1.777h6.223c.981 0 1.777.796 1.777 1.777v6.223c0 .981-.796 1.777-1.777 1.777M5.944 1.055a1.78 1.78 0 0 0-1.648 1.112M9.944 1.056H8.167M13.944 2.834c0-.983-.795-1.778-1.777-1.778M13.945 6.834V5.056M12.833 10.705a1.78 1.78 0 0 0 1.111-1.65"
        }
      )
    );
  }
);
CloneDashed.displayName = "CloneDashed";

// node_modules/@medusajs/icons/dist/esm/cloud-arrow-down.js
var React114 = __toESM(require_react());
var __defProp114 = Object.defineProperty;
var __getOwnPropSymbols114 = Object.getOwnPropertySymbols;
var __hasOwnProp114 = Object.prototype.hasOwnProperty;
var __propIsEnum114 = Object.prototype.propertyIsEnumerable;
var __defNormalProp114 = (obj, key, value) => key in obj ? __defProp114(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues114 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp114.call(b, prop))
      __defNormalProp114(a, prop, b[prop]);
  if (__getOwnPropSymbols114)
    for (var prop of __getOwnPropSymbols114(b)) {
      if (__propIsEnum114.call(b, prop))
        __defNormalProp114(a, prop, b[prop]);
    }
  return a;
};
var __objRest112 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp114.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols114)
    for (var prop of __getOwnPropSymbols114(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum114.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CloudArrowDown = React114.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest112(_b, ["color"]);
    return React114.createElement(
      "svg",
      __spreadValues114({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React114.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React114.createElement("path", { d: "M10.167 10h.444c1.841 0 3.333-1.314 3.333-2.935 0-1.358-1.053-2.49-2.476-2.824C11.303 2.43 9.6 1 7.5 1c-2.209 0-4 1.577-4 3.522 0 .274.044.537.11.793-1.42.052-2.554 1.075-2.554 2.337C1.056 8.95 2.249 10 3.722 10h1.111M9.5 12.11l-2 2-2-2M7.5 14.11V6.554" })
      ),
      React114.createElement("defs", null, React114.createElement("clipPath", { id: "a" }, React114.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CloudArrowDown.displayName = "CloudArrowDown";

// node_modules/@medusajs/icons/dist/esm/cloud-arrow-up.js
var React115 = __toESM(require_react());
var __defProp115 = Object.defineProperty;
var __getOwnPropSymbols115 = Object.getOwnPropertySymbols;
var __hasOwnProp115 = Object.prototype.hasOwnProperty;
var __propIsEnum115 = Object.prototype.propertyIsEnumerable;
var __defNormalProp115 = (obj, key, value) => key in obj ? __defProp115(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues115 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp115.call(b, prop))
      __defNormalProp115(a, prop, b[prop]);
  if (__getOwnPropSymbols115)
    for (var prop of __getOwnPropSymbols115(b)) {
      if (__propIsEnum115.call(b, prop))
        __defNormalProp115(a, prop, b[prop]);
    }
  return a;
};
var __objRest113 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp115.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols115)
    for (var prop of __getOwnPropSymbols115(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum115.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CloudArrowUp = React115.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest113(_b, ["color"]);
    return React115.createElement(
      "svg",
      __spreadValues115({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React115.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React115.createElement("path", { d: "M10.167 11.722h.444a3.333 3.333 0 0 0 3.333-3.333 3.324 3.324 0 0 0-2.476-3.208C11.303 3.124 9.6 1.5 7.5 1.5a4 4 0 0 0-4 4c0 .311.044.61.11.9a2.66 2.66 0 0 0 .112 5.322h1.111" }),
        React115.createElement("path", { d: "m5.5 8.833 2-2 2 2M7.5 6.833v7.2" })
      ),
      React115.createElement("defs", null, React115.createElement("clipPath", { id: "a" }, React115.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CloudArrowUp.displayName = "CloudArrowUp";

// node_modules/@medusajs/icons/dist/esm/code-commit.js
var React116 = __toESM(require_react());
var __defProp116 = Object.defineProperty;
var __getOwnPropSymbols116 = Object.getOwnPropertySymbols;
var __hasOwnProp116 = Object.prototype.hasOwnProperty;
var __propIsEnum116 = Object.prototype.propertyIsEnumerable;
var __defNormalProp116 = (obj, key, value) => key in obj ? __defProp116(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues116 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp116.call(b, prop))
      __defNormalProp116(a, prop, b[prop]);
  if (__getOwnPropSymbols116)
    for (var prop of __getOwnPropSymbols116(b)) {
      if (__propIsEnum116.call(b, prop))
        __defNormalProp116(a, prop, b[prop]);
    }
  return a;
};
var __objRest114 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp116.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols116)
    for (var prop of __getOwnPropSymbols116(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum116.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CodeCommit = React116.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest114(_b, ["color"]);
    return React116.createElement(
      "svg",
      __spreadValues116({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React116.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M.833 7.5h3.959M14.167 7.5h-3.959M7.5 10.209a2.708 2.708 0 1 0 0-5.417 2.708 2.708 0 0 0 0 5.417"
        }
      )
    );
  }
);
CodeCommit.displayName = "CodeCommit";

// node_modules/@medusajs/icons/dist/esm/code-merge.js
var React117 = __toESM(require_react());
var __defProp117 = Object.defineProperty;
var __getOwnPropSymbols117 = Object.getOwnPropertySymbols;
var __hasOwnProp117 = Object.prototype.hasOwnProperty;
var __propIsEnum117 = Object.prototype.propertyIsEnumerable;
var __defNormalProp117 = (obj, key, value) => key in obj ? __defProp117(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues117 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp117.call(b, prop))
      __defNormalProp117(a, prop, b[prop]);
  if (__getOwnPropSymbols117)
    for (var prop of __getOwnPropSymbols117(b)) {
      if (__propIsEnum117.call(b, prop))
        __defNormalProp117(a, prop, b[prop]);
    }
  return a;
};
var __objRest115 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp117.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols117)
    for (var prop of __getOwnPropSymbols117(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum117.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CodeMerge = React117.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest115(_b, ["color"]);
    return React117.createElement(
      "svg",
      __spreadValues117({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React117.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.722 5.056v8.889M9.278 10.611a5.555 5.555 0 0 1-5.556-5.555M3.722 5.056a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
      ),
      React117.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.278 12.61a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
      )
    );
  }
);
CodeMerge.displayName = "CodeMerge";

// node_modules/@medusajs/icons/dist/esm/cog-six-tooth-solid.js
var React118 = __toESM(require_react());
var __defProp118 = Object.defineProperty;
var __getOwnPropSymbols118 = Object.getOwnPropertySymbols;
var __hasOwnProp118 = Object.prototype.hasOwnProperty;
var __propIsEnum118 = Object.prototype.propertyIsEnumerable;
var __defNormalProp118 = (obj, key, value) => key in obj ? __defProp118(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues118 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp118.call(b, prop))
      __defNormalProp118(a, prop, b[prop]);
  if (__getOwnPropSymbols118)
    for (var prop of __getOwnPropSymbols118(b)) {
      if (__propIsEnum118.call(b, prop))
        __defNormalProp118(a, prop, b[prop]);
    }
  return a;
};
var __objRest116 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp118.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols118)
    for (var prop of __getOwnPropSymbols118(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum118.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CogSixToothSolid = React118.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest116(_b, ["color"]);
    return React118.createElement(
      "svg",
      __spreadValues118({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React118.createElement("g", { clipPath: "url(#a)" }, React118.createElement(
        "path",
        {
          fill: color,
          d: "m13.434 5.664-.806-.285a6 6 0 0 0-.318-.657c-.117-.202-.263-.378-.401-.56l.163-.874a1.77 1.77 0 0 0-.853-1.853l-.313-.18a1.77 1.77 0 0 0-2.03.187l-.648.555a5.5 5.5 0 0 0-1.443-.009l-.647-.554a1.77 1.77 0 0 0-2.03-.187l-.313.18a1.77 1.77 0 0 0-.852 1.853l.154.829c-.29.376-.51.8-.697 1.243l-.834.295A1.77 1.77 0 0 0 .389 7.312v.36c0 .747.473 1.416 1.177 1.664l.805.285c.093.223.195.443.318.656.117.203.263.379.402.562l-.163.873a1.77 1.77 0 0 0 .853 1.853l.313.18a1.76 1.76 0 0 0 2.03-.187l.644-.551q.37.05.74.05.354 0 .706-.046l.648.555a1.77 1.77 0 0 0 2.03.187l.313-.18c.647-.373.99-1.117.852-1.853l-.154-.83c.29-.376.51-.799.696-1.242l.835-.295a1.77 1.77 0 0 0 1.177-1.665v-.36c0-.747-.473-1.416-1.177-1.664M7.5 10.167a2.666 2.666 0 1 1 0-5.333 2.666 2.666 0 0 1 0 5.333"
        }
      )),
      React118.createElement("defs", null, React118.createElement("clipPath", { id: "a" }, React118.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CogSixToothSolid.displayName = "CogSixToothSolid";

// node_modules/@medusajs/icons/dist/esm/cog-six-tooth.js
var React119 = __toESM(require_react());
var __defProp119 = Object.defineProperty;
var __getOwnPropSymbols119 = Object.getOwnPropertySymbols;
var __hasOwnProp119 = Object.prototype.hasOwnProperty;
var __propIsEnum119 = Object.prototype.propertyIsEnumerable;
var __defNormalProp119 = (obj, key, value) => key in obj ? __defProp119(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues119 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp119.call(b, prop))
      __defNormalProp119(a, prop, b[prop]);
  if (__getOwnPropSymbols119)
    for (var prop of __getOwnPropSymbols119(b)) {
      if (__propIsEnum119.call(b, prop))
        __defNormalProp119(a, prop, b[prop]);
    }
  return a;
};
var __objRest117 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp119.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols119)
    for (var prop of __getOwnPropSymbols119(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum119.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CogSixTooth = React119.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest117(_b, ["color"]);
    return React119.createElement(
      "svg",
      __spreadValues119({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React119.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React119.createElement("path", { d: "M7.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
        React119.createElement("path", { d: "m12.989 5.97-.826-.292a5 5 0 0 0-.323-.685 5 5 0 0 0-.43-.621l.16-.86a1.43 1.43 0 0 0-.692-1.503l-.312-.18a1.43 1.43 0 0 0-1.647.152l-.663.566a5 5 0 0 0-1.513 0L6.08 1.98a1.43 1.43 0 0 0-1.647-.152l-.312.18a1.43 1.43 0 0 0-.691 1.503l.16.857c-.32.4-.574.841-.758 1.31l-.82.29a1.43 1.43 0 0 0-.956 1.35v.36c0 .608.383 1.15.955 1.35l.826.292c.09.232.194.462.323.684.128.222.275.427.43.622l-.16.86c-.111.597.166 1.2.691 1.503l.312.18a1.43 1.43 0 0 0 1.647-.152l.663-.567a5 5 0 0 0 1.512 0l.663.568a1.43 1.43 0 0 0 1.647.152l.312-.18c.526-.304.803-.906.691-1.502l-.16-.86c.32-.398.575-.84.757-1.308l.822-.29c.572-.202.956-.743.956-1.35v-.36c0-.608-.383-1.149-.956-1.35z" })
      ),
      React119.createElement("defs", null, React119.createElement("clipPath", { id: "a" }, React119.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CogSixTooth.displayName = "CogSixTooth";

// node_modules/@medusajs/icons/dist/esm/command-line-solid.js
var React120 = __toESM(require_react());
var __defProp120 = Object.defineProperty;
var __getOwnPropSymbols120 = Object.getOwnPropertySymbols;
var __hasOwnProp120 = Object.prototype.hasOwnProperty;
var __propIsEnum120 = Object.prototype.propertyIsEnumerable;
var __defNormalProp120 = (obj, key, value) => key in obj ? __defProp120(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues120 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp120.call(b, prop))
      __defNormalProp120(a, prop, b[prop]);
  if (__getOwnPropSymbols120)
    for (var prop of __getOwnPropSymbols120(b)) {
      if (__propIsEnum120.call(b, prop))
        __defNormalProp120(a, prop, b[prop]);
    }
  return a;
};
var __objRest118 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp120.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols120)
    for (var prop of __getOwnPropSymbols120(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum120.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CommandLineSolid = React120.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest118(_b, ["color"]);
    return React120.createElement(
      "svg",
      __spreadValues120({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React120.createElement(
        "path",
        {
          fill: color,
          d: "M11.278 1.278H3.722a2.446 2.446 0 0 0-2.444 2.444v7.556a2.446 2.446 0 0 0 2.444 2.444h7.556a2.447 2.447 0 0 0 2.444-2.444V3.722a2.446 2.446 0 0 0-2.444-2.444M5.082 10.86a.665.665 0 1 1-.942-.943l1.751-1.751L4.14 6.415a.667.667 0 1 1 .943-.943l2.222 2.222c.26.26.26.683 0 .943l-2.222 2.222zm5.307.196H8.167a.667.667 0 0 1 0-1.334h2.222a.667.667 0 0 1 0 1.334"
        }
      )
    );
  }
);
CommandLineSolid.displayName = "CommandLineSolid";

// node_modules/@medusajs/icons/dist/esm/command-line.js
var React121 = __toESM(require_react());
var __defProp121 = Object.defineProperty;
var __getOwnPropSymbols121 = Object.getOwnPropertySymbols;
var __hasOwnProp121 = Object.prototype.hasOwnProperty;
var __propIsEnum121 = Object.prototype.propertyIsEnumerable;
var __defNormalProp121 = (obj, key, value) => key in obj ? __defProp121(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues121 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp121.call(b, prop))
      __defNormalProp121(a, prop, b[prop]);
  if (__getOwnPropSymbols121)
    for (var prop of __getOwnPropSymbols121(b)) {
      if (__propIsEnum121.call(b, prop))
        __defNormalProp121(a, prop, b[prop]);
    }
  return a;
};
var __objRest119 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp121.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols121)
    for (var prop of __getOwnPropSymbols121(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum121.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CommandLine = React121.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest119(_b, ["color"]);
    return React121.createElement(
      "svg",
      __spreadValues121({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React121.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React121.createElement("path", { d: "M11.278 1.944H3.722c-.982 0-1.778.796-1.778 1.778v7.556c0 .981.796 1.777 1.778 1.777h7.556c.982 0 1.778-.796 1.778-1.777V3.722c0-.982-.796-1.778-1.778-1.778M8.167 10.389h2.222" }),
        React121.createElement("path", { d: "m4.611 10.389 2.222-2.222-2.222-2.223" })
      ),
      React121.createElement("defs", null, React121.createElement("clipPath", { id: "a" }, React121.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CommandLine.displayName = "CommandLine";

// node_modules/@medusajs/icons/dist/esm/component-solid.js
var React122 = __toESM(require_react());
var __defProp122 = Object.defineProperty;
var __getOwnPropSymbols122 = Object.getOwnPropertySymbols;
var __hasOwnProp122 = Object.prototype.hasOwnProperty;
var __propIsEnum122 = Object.prototype.propertyIsEnumerable;
var __defNormalProp122 = (obj, key, value) => key in obj ? __defProp122(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues122 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp122.call(b, prop))
      __defNormalProp122(a, prop, b[prop]);
  if (__getOwnPropSymbols122)
    for (var prop of __getOwnPropSymbols122(b)) {
      if (__propIsEnum122.call(b, prop))
        __defNormalProp122(a, prop, b[prop]);
    }
  return a;
};
var __objRest120 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp122.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols122)
    for (var prop of __getOwnPropSymbols122(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum122.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ComponentSolid = React122.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest120(_b, ["color"]);
    return React122.createElement(
      "svg",
      __spreadValues122({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React122.createElement(
        "g",
        {
          fill: color,
          fillRule: "evenodd",
          clipPath: "url(#a)",
          clipRule: "evenodd"
        },
        React122.createElement("path", { d: "M2.815 4.766a.65.65 0 0 1 .92 0L6.008 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.919 0L.54 7.96a.65.65 0 0 1 0-.92zM7.04.54a.65.65 0 0 1 .92 0l2.274 2.276a.65.65 0 0 1 0 .919L7.96 6.01a.65.65 0 0 1-.919 0L4.765 3.735a.65.65 0 0 1 0-.92zM11.265 4.766a.65.65 0 0 1 .92 0L14.46 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.92 0L8.99 7.96a.65.65 0 0 1 0-.92zM7.04 8.99a.65.65 0 0 1 .92 0l2.274 2.275a.65.65 0 0 1 0 .92L7.96 14.459a.65.65 0 0 1-.919 0l-2.275-2.274a.65.65 0 0 1 0-.92z" })
      ),
      React122.createElement("defs", null, React122.createElement("clipPath", { id: "a" }, React122.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComponentSolid.displayName = "ComponentSolid";

// node_modules/@medusajs/icons/dist/esm/component.js
var React123 = __toESM(require_react());
var __defProp123 = Object.defineProperty;
var __getOwnPropSymbols123 = Object.getOwnPropertySymbols;
var __hasOwnProp123 = Object.prototype.hasOwnProperty;
var __propIsEnum123 = Object.prototype.propertyIsEnumerable;
var __defNormalProp123 = (obj, key, value) => key in obj ? __defProp123(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues123 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp123.call(b, prop))
      __defNormalProp123(a, prop, b[prop]);
  if (__getOwnPropSymbols123)
    for (var prop of __getOwnPropSymbols123(b)) {
      if (__propIsEnum123.call(b, prop))
        __defNormalProp123(a, prop, b[prop]);
    }
  return a;
};
var __objRest121 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp123.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols123)
    for (var prop of __getOwnPropSymbols123(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum123.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Component = React123.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest121(_b, ["color"]);
    return React123.createElement(
      "svg",
      __spreadValues123({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React123.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React123.createElement("path", { d: "M3.275 5.225 5.55 7.5 3.275 9.775 1 7.5zM7.5 1l2.275 2.275L7.5 5.55 5.225 3.275zM11.725 5.225 14 7.5l-2.275 2.275L9.45 7.5zM7.5 9.45l2.275 2.275L7.5 14l-2.275-2.275z" })
      ),
      React123.createElement("defs", null, React123.createElement("clipPath", { id: "a" }, React123.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Component.displayName = "Component";

// node_modules/@medusajs/icons/dist/esm/computer-desktop-solid.js
var React124 = __toESM(require_react());
var __defProp124 = Object.defineProperty;
var __getOwnPropSymbols124 = Object.getOwnPropertySymbols;
var __hasOwnProp124 = Object.prototype.hasOwnProperty;
var __propIsEnum124 = Object.prototype.propertyIsEnumerable;
var __defNormalProp124 = (obj, key, value) => key in obj ? __defProp124(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues124 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp124.call(b, prop))
      __defNormalProp124(a, prop, b[prop]);
  if (__getOwnPropSymbols124)
    for (var prop of __getOwnPropSymbols124(b)) {
      if (__propIsEnum124.call(b, prop))
        __defNormalProp124(a, prop, b[prop]);
    }
  return a;
};
var __objRest122 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp124.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols124)
    for (var prop of __getOwnPropSymbols124(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum124.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ComputerDesktopSolid = React124.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest122(_b, ["color"]);
    return React124.createElement(
      "svg",
      __spreadValues124({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React124.createElement("g", { fill: color, clipPath: "url(#a)" }, React124.createElement("path", { d: "M10.59 13.309a10.3 10.3 0 0 0-2.423-.448v-1.583a.667.667 0 0 0-1.334 0v1.583c-.82.053-1.634.2-2.423.448a.666.666 0 1 0 .401 1.272 9 9 0 0 1 5.377 0q.1.03.2.031a.667.667 0 0 0 .2-1.302z" }), React124.createElement("path", { d: "M12.167 11.945H2.833A2.446 2.446 0 0 1 .39 9.5V3.722a2.446 2.446 0 0 1 2.444-2.444h9.334a2.446 2.446 0 0 1 2.444 2.444V9.5a2.446 2.446 0 0 1-2.444 2.444M2.833 2.61c-.612 0-1.11.499-1.11 1.111V9.5c0 .613.498 1.111 1.11 1.111h9.334c.612 0 1.11-.498 1.11-1.111V3.722c0-.612-.498-1.11-1.11-1.11z" })),
      React124.createElement("defs", null, React124.createElement("clipPath", { id: "a" }, React124.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComputerDesktopSolid.displayName = "ComputerDesktopSolid";

// node_modules/@medusajs/icons/dist/esm/computer-desktop.js
var React125 = __toESM(require_react());
var __defProp125 = Object.defineProperty;
var __getOwnPropSymbols125 = Object.getOwnPropertySymbols;
var __hasOwnProp125 = Object.prototype.hasOwnProperty;
var __propIsEnum125 = Object.prototype.propertyIsEnumerable;
var __defNormalProp125 = (obj, key, value) => key in obj ? __defProp125(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues125 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp125.call(b, prop))
      __defNormalProp125(a, prop, b[prop]);
  if (__getOwnPropSymbols125)
    for (var prop of __getOwnPropSymbols125(b)) {
      if (__propIsEnum125.call(b, prop))
        __defNormalProp125(a, prop, b[prop]);
    }
  return a;
};
var __objRest123 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp125.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols125)
    for (var prop of __getOwnPropSymbols125(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum125.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ComputerDesktop = React125.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest123(_b, ["color"]);
    return React125.createElement(
      "svg",
      __spreadValues125({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React125.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.333,
          clipPath: "url(#a)"
        },
        React125.createElement("path", { d: "M4.611 13.944a9.6 9.6 0 0 1 5.778 0M7.5 11.278V13.5M12.167 1.944H2.833c-.982 0-1.777.796-1.777 1.778V9.5c0 .982.795 1.778 1.777 1.778h9.334c.982 0 1.777-.796 1.777-1.778V3.722c0-.982-.796-1.778-1.777-1.778" })
      ),
      React125.createElement("defs", null, React125.createElement("clipPath", { id: "a" }, React125.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComputerDesktop.displayName = "ComputerDesktop";

// node_modules/@medusajs/icons/dist/esm/credit-card-solid.js
var React126 = __toESM(require_react());
var __defProp126 = Object.defineProperty;
var __getOwnPropSymbols126 = Object.getOwnPropertySymbols;
var __hasOwnProp126 = Object.prototype.hasOwnProperty;
var __propIsEnum126 = Object.prototype.propertyIsEnumerable;
var __defNormalProp126 = (obj, key, value) => key in obj ? __defProp126(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues126 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp126.call(b, prop))
      __defNormalProp126(a, prop, b[prop]);
  if (__getOwnPropSymbols126)
    for (var prop of __getOwnPropSymbols126(b)) {
      if (__propIsEnum126.call(b, prop))
        __defNormalProp126(a, prop, b[prop]);
    }
  return a;
};
var __objRest124 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp126.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols126)
    for (var prop of __getOwnPropSymbols126(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum126.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CreditCardSolid = React126.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest124(_b, ["color"]);
    return React126.createElement(
      "svg",
      __spreadValues126({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React126.createElement("g", { fill: color, clipPath: "url(#a)" }, React126.createElement("path", { d: "M14.611 4.611a2.446 2.446 0 0 0-2.444-2.444H2.833A2.446 2.446 0 0 0 .39 4.61v.667H14.61zM.389 10.389a2.446 2.446 0 0 0 2.444 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V6.61H.39zm10.444-1.556h.89a.667.667 0 0 1 0 1.334h-.89a.667.667 0 0 1 0-1.334m-7.555 0h2.666a.667.667 0 0 1 0 1.334H3.278a.667.667 0 0 1 0-1.334" })),
      React126.createElement("defs", null, React126.createElement("clipPath", { id: "a" }, React126.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CreditCardSolid.displayName = "CreditCardSolid";

// node_modules/@medusajs/icons/dist/esm/credit-card.js
var React127 = __toESM(require_react());
var __defProp127 = Object.defineProperty;
var __getOwnPropSymbols127 = Object.getOwnPropertySymbols;
var __hasOwnProp127 = Object.prototype.hasOwnProperty;
var __propIsEnum127 = Object.prototype.propertyIsEnumerable;
var __defNormalProp127 = (obj, key, value) => key in obj ? __defProp127(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues127 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp127.call(b, prop))
      __defNormalProp127(a, prop, b[prop]);
  if (__getOwnPropSymbols127)
    for (var prop of __getOwnPropSymbols127(b)) {
      if (__propIsEnum127.call(b, prop))
        __defNormalProp127(a, prop, b[prop]);
    }
  return a;
};
var __objRest125 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp127.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols127)
    for (var prop of __getOwnPropSymbols127(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum127.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CreditCard = React127.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest125(_b, ["color"]);
    return React127.createElement(
      "svg",
      __spreadValues127({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React127.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React127.createElement("path", { d: "M1.056 5.944h12.888M2.833 12.167h9.334c.982 0 1.777-.796 1.777-1.778V4.61c0-.982-.796-1.778-1.777-1.778H2.833c-.981 0-1.777.796-1.777 1.778v5.778c0 .982.796 1.778 1.777 1.778M3.278 9.5h2.666M10.833 9.5h.89" })
      ),
      React127.createElement("defs", null, React127.createElement("clipPath", { id: "a" }, React127.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CreditCard.displayName = "CreditCard";

// node_modules/@medusajs/icons/dist/esm/cube-solid.js
var React128 = __toESM(require_react());
var __defProp128 = Object.defineProperty;
var __getOwnPropSymbols128 = Object.getOwnPropertySymbols;
var __hasOwnProp128 = Object.prototype.hasOwnProperty;
var __propIsEnum128 = Object.prototype.propertyIsEnumerable;
var __defNormalProp128 = (obj, key, value) => key in obj ? __defProp128(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues128 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp128.call(b, prop))
      __defNormalProp128(a, prop, b[prop]);
  if (__getOwnPropSymbols128)
    for (var prop of __getOwnPropSymbols128(b)) {
      if (__propIsEnum128.call(b, prop))
        __defNormalProp128(a, prop, b[prop]);
    }
  return a;
};
var __objRest126 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp128.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols128)
    for (var prop of __getOwnPropSymbols128(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum128.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CubeSolid = React128.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest126(_b, ["color"]);
    return React128.createElement(
      "svg",
      __spreadValues128({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React128.createElement(
        "path",
        {
          fill: color,
          d: "M13.4 4.095s-.001-.01-.004-.015q-.006-.006-.012-.013c-.21-.359-.509-.666-.879-.88L8.727.996a2.45 2.45 0 0 0-2.454 0L2.496 3.187a2.44 2.44 0 0 0-.88.88q-.005.006-.012.013-.003.008-.004.015a2.44 2.44 0 0 0-.322 1.207v4.396c0 .869.466 1.678 1.218 2.115l3.777 2.191c.376.217.795.325 1.215.327l.012.003q.006-.001.013-.003c.42-.002.84-.11 1.214-.327l3.778-2.191a2.45 2.45 0 0 0 1.217-2.114V5.302c0-.43-.115-.845-.322-1.207M3.165 10.66a1.12 1.12 0 0 1-.554-.962V5.435l4.222 2.449v4.902zm8.67 0-3.668 2.128V7.885l4.222-2.449v4.263c0 .395-.212.763-.554.961"
        }
      )
    );
  }
);
CubeSolid.displayName = "CubeSolid";

// node_modules/@medusajs/icons/dist/esm/currency-dollar-solid.js
var React129 = __toESM(require_react());
var __defProp129 = Object.defineProperty;
var __getOwnPropSymbols129 = Object.getOwnPropertySymbols;
var __hasOwnProp129 = Object.prototype.hasOwnProperty;
var __propIsEnum129 = Object.prototype.propertyIsEnumerable;
var __defNormalProp129 = (obj, key, value) => key in obj ? __defProp129(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues129 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp129.call(b, prop))
      __defNormalProp129(a, prop, b[prop]);
  if (__getOwnPropSymbols129)
    for (var prop of __getOwnPropSymbols129(b)) {
      if (__propIsEnum129.call(b, prop))
        __defNormalProp129(a, prop, b[prop]);
    }
  return a;
};
var __objRest127 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp129.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols129)
    for (var prop of __getOwnPropSymbols129(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum129.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CurrencyDollarSolid = React129.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest127(_b, ["color"]);
    return React129.createElement(
      "svg",
      __spreadValues129({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React129.createElement("g", { clipPath: "url(#a)" }, React129.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m1.871 9.994c-.313.32-.736.538-1.204.645v.25a.667.667 0 0 1-1.334 0v-.247c-.876-.183-1.49-.72-1.748-1.568a.666.666 0 1 1 1.275-.389c.106.346.328.699 1.175.699.355 0 .686-.121.883-.322a.66.66 0 0 0 .194-.49c-.007-.288-.11-.612-1.237-.814-1.758-.314-2.114-1.335-2.17-1.916-.055-.575.104-1.086.46-1.478.318-.349.753-.545 1.17-.653v-.378a.667.667 0 0 1 1.333 0v.358A2.23 2.23 0 0 1 9.73 5.42a.667.667 0 0 1-1.228.518c-.064-.15-.258-.61-.967-.61-.246 0-.683.1-.884.321-.063.07-.145.193-.12.454.013.136.053.549 1.077.732 1.522.273 2.309.977 2.336 2.093a2 2 0 0 1-.573 1.455"
        }
      )),
      React129.createElement("defs", null, React129.createElement("clipPath", { id: "a" }, React129.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CurrencyDollarSolid.displayName = "CurrencyDollarSolid";

// node_modules/@medusajs/icons/dist/esm/currency-dollar.js
var React130 = __toESM(require_react());
var __defProp130 = Object.defineProperty;
var __getOwnPropSymbols130 = Object.getOwnPropertySymbols;
var __hasOwnProp130 = Object.prototype.hasOwnProperty;
var __propIsEnum130 = Object.prototype.propertyIsEnumerable;
var __defNormalProp130 = (obj, key, value) => key in obj ? __defProp130(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues130 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp130.call(b, prop))
      __defNormalProp130(a, prop, b[prop]);
  if (__getOwnPropSymbols130)
    for (var prop of __getOwnPropSymbols130(b)) {
      if (__propIsEnum130.call(b, prop))
        __defNormalProp130(a, prop, b[prop]);
    }
  return a;
};
var __objRest128 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp130.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols130)
    for (var prop of __getOwnPropSymbols130(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum130.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CurrencyDollar = React130.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest128(_b, ["color"]);
    return React130.createElement(
      "svg",
      __spreadValues130({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React130.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React130.createElement("path", { d: "M7.5 13.944a6.444 6.444 0 1 0 0-12.888 6.444 6.444 0 0 0 0 12.888" }),
        React130.createElement("path", { d: "M9.115 5.679c-.35-.83-1.051-1.017-1.581-1.017-.493 0-1.787.262-1.667 1.504.084.872.906 1.196 1.624 1.324s1.761.402 1.787 1.454c.021.888-.778 1.495-1.744 1.495-.923 0-1.565-.359-1.812-1.17M7.5 3.722v.94M7.5 10.44v.838" })
      ),
      React130.createElement("defs", null, React130.createElement("clipPath", { id: "a" }, React130.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CurrencyDollar.displayName = "CurrencyDollar";

// node_modules/@medusajs/icons/dist/esm/cursor-arrow-rays.js
var React131 = __toESM(require_react());
var __defProp131 = Object.defineProperty;
var __getOwnPropSymbols131 = Object.getOwnPropertySymbols;
var __hasOwnProp131 = Object.prototype.hasOwnProperty;
var __propIsEnum131 = Object.prototype.propertyIsEnumerable;
var __defNormalProp131 = (obj, key, value) => key in obj ? __defProp131(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues131 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp131.call(b, prop))
      __defNormalProp131(a, prop, b[prop]);
  if (__getOwnPropSymbols131)
    for (var prop of __getOwnPropSymbols131(b)) {
      if (__propIsEnum131.call(b, prop))
        __defNormalProp131(a, prop, b[prop]);
    }
  return a;
};
var __objRest129 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp131.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols131)
    for (var prop of __getOwnPropSymbols131(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum131.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var CursorArrowRays = React131.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest129(_b, ["color"]);
    return React131.createElement(
      "svg",
      __spreadValues131({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React131.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React131.createElement("path", { d: "m6.696 6.414 6.5 2.23c.198.068.202.346.007.419l-2.915 1.096a.22.22 0 0 0-.13.13l-1.095 2.914a.222.222 0 0 1-.418-.006L6.414 6.696a.223.223 0 0 1 .282-.283zM10.194 10.194l3.744 3.744M6.389 1.056v1.777M10.16 2.617 8.904 3.875M2.617 10.16l1.258-1.257M1.056 6.389h1.777M2.617 2.617l1.258 1.258" })
      ),
      React131.createElement("defs", null, React131.createElement("clipPath", { id: "a" }, React131.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CursorArrowRays.displayName = "CursorArrowRays";

// node_modules/@medusajs/icons/dist/esm/decision-process.js
var React132 = __toESM(require_react());
var __defProp132 = Object.defineProperty;
var __getOwnPropSymbols132 = Object.getOwnPropertySymbols;
var __hasOwnProp132 = Object.prototype.hasOwnProperty;
var __propIsEnum132 = Object.prototype.propertyIsEnumerable;
var __defNormalProp132 = (obj, key, value) => key in obj ? __defProp132(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues132 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp132.call(b, prop))
      __defNormalProp132(a, prop, b[prop]);
  if (__getOwnPropSymbols132)
    for (var prop of __getOwnPropSymbols132(b)) {
      if (__propIsEnum132.call(b, prop))
        __defNormalProp132(a, prop, b[prop]);
    }
  return a;
};
var __objRest130 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp132.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols132)
    for (var prop of __getOwnPropSymbols132(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum132.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DecisionProcess = React132.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest130(_b, ["color"]);
    return React132.createElement(
      "svg",
      __spreadValues132({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React132.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.625 1.875H2.292a.833.833 0 0 0-.834.833v.834c0 .46.373.833.834.833h3.333c.46 0 .833-.373.833-.833v-.834a.833.833 0 0 0-.833-.833M5.625 10.625H2.292a.833.833 0 0 0-.834.833v.834c0 .46.373.833.834.833h3.333c.46 0 .833-.373.833-.833v-.834a.833.833 0 0 0-.833-.833M3.958 6.459v2.083M8.542 3.125h1.666c.46 0 .834.373.834.833v1.667M8.542 11.875h1.666c.46 0 .834-.373.834-.833V9.375M11.042 5.625 14.167 7.5l-3.125 1.875L7.917 7.5z"
        }
      )
    );
  }
);
DecisionProcess.displayName = "DecisionProcess";

// node_modules/@medusajs/icons/dist/esm/descending-sorting.js
var React133 = __toESM(require_react());
var __defProp133 = Object.defineProperty;
var __getOwnPropSymbols133 = Object.getOwnPropertySymbols;
var __hasOwnProp133 = Object.prototype.hasOwnProperty;
var __propIsEnum133 = Object.prototype.propertyIsEnumerable;
var __defNormalProp133 = (obj, key, value) => key in obj ? __defProp133(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues133 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp133.call(b, prop))
      __defNormalProp133(a, prop, b[prop]);
  if (__getOwnPropSymbols133)
    for (var prop of __getOwnPropSymbols133(b)) {
      if (__propIsEnum133.call(b, prop))
        __defNormalProp133(a, prop, b[prop]);
    }
  return a;
};
var __objRest131 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp133.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols133)
    for (var prop of __getOwnPropSymbols133(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum133.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DescendingSorting = React133.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest131(_b, ["color"]);
    return React133.createElement(
      "svg",
      __spreadValues133({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React133.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.611 10.833 2.222 2.223 2.223-2.223M10.833 13.056v-8M1.944 8.167h5.778M1.944 5.056h5.778M1.944 1.944h8.89"
        }
      )
    );
  }
);
DescendingSorting.displayName = "DescendingSorting";

// node_modules/@medusajs/icons/dist/esm/directions.js
var React134 = __toESM(require_react());
var __defProp134 = Object.defineProperty;
var __getOwnPropSymbols134 = Object.getOwnPropertySymbols;
var __hasOwnProp134 = Object.prototype.hasOwnProperty;
var __propIsEnum134 = Object.prototype.propertyIsEnumerable;
var __defNormalProp134 = (obj, key, value) => key in obj ? __defProp134(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues134 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp134.call(b, prop))
      __defNormalProp134(a, prop, b[prop]);
  if (__getOwnPropSymbols134)
    for (var prop of __getOwnPropSymbols134(b)) {
      if (__propIsEnum134.call(b, prop))
        __defNormalProp134(a, prop, b[prop]);
    }
  return a;
};
var __objRest132 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp134.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols134)
    for (var prop of __getOwnPropSymbols134(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum134.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Directions = React134.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest132(_b, ["color"]);
    return React134.createElement(
      "svg",
      __spreadValues134({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React134.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.056v12.889M4.611 13.944h5.778M7.5 5.056H2.952a.9.9 0 0 1-.594-.229L1.123 3.716a.89.89 0 0 1 0-1.322l1.235-1.11a.9.9 0 0 1 .594-.23H7.5M9.718 9.056h2.325c.22 0 .431-.081.595-.229l1.234-1.111a.89.89 0 0 0 0-1.322l-1.234-1.11a.9.9 0 0 0-.595-.23H9.718"
        }
      )
    );
  }
);
Directions.displayName = "Directions";

// node_modules/@medusajs/icons/dist/esm/discord.js
var React135 = __toESM(require_react());
var __defProp135 = Object.defineProperty;
var __getOwnPropSymbols135 = Object.getOwnPropertySymbols;
var __hasOwnProp135 = Object.prototype.hasOwnProperty;
var __propIsEnum135 = Object.prototype.propertyIsEnumerable;
var __defNormalProp135 = (obj, key, value) => key in obj ? __defProp135(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues135 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp135.call(b, prop))
      __defNormalProp135(a, prop, b[prop]);
  if (__getOwnPropSymbols135)
    for (var prop of __getOwnPropSymbols135(b)) {
      if (__propIsEnum135.call(b, prop))
        __defNormalProp135(a, prop, b[prop]);
    }
  return a;
};
var Discord = React135.forwardRef(
  (props, ref) => {
    return React135.createElement(
      "svg",
      __spreadValues135({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React135.createElement(
        "path",
        {
          fill: "#5865F2",
          d: "M9.996 9.58c-.739 0-1.348-.678-1.348-1.511 0-.834.597-1.512 1.348-1.512s1.36.685 1.348 1.512c-.011.826-.59 1.511-1.348 1.511m-4.984 0c-.739 0-1.348-.678-1.348-1.511 0-.834.597-1.512 1.348-1.512s1.36.685 1.349 1.512c-.012.826-.598 1.511-1.349 1.511m7.684-6.85a12.4 12.4 0 0 0-3.052-.946.05.05 0 0 0-.05.023q-.21.38-.38.78a11.4 11.4 0 0 0-3.428 0 8 8 0 0 0-.386-.78.05.05 0 0 0-.05-.023c-1.054.181-2.08.5-3.052.946a.04.04 0 0 0-.02.017C.334 5.652-.199 8.486.062 11.287a.05.05 0 0 0 .02.034 12.4 12.4 0 0 0 3.744 1.894.05.05 0 0 0 .053-.017q.434-.591.766-1.247a.05.05 0 0 0-.027-.065 8 8 0 0 1-1.17-.558.05.05 0 0 1-.025-.04.05.05 0 0 1 .02-.042c.083-.06.158-.12.233-.182a.05.05 0 0 1 .048-.007c2.454 1.12 5.112 1.12 7.537 0a.05.05 0 0 1 .05.006 5 5 0 0 0 .233.182.05.05 0 0 1 .02.042.05.05 0 0 1-.024.04 7.7 7.7 0 0 1-1.166.555.1.1 0 0 0-.017.01.05.05 0 0 0-.014.037q0 .01.005.019.337.651.765 1.246a.047.047 0 0 0 .053.018 12.4 12.4 0 0 0 3.75-1.893.05.05 0 0 0 .02-.034c.312-3.235-.524-6.046-2.217-8.54a.04.04 0 0 0-.023-.015"
        }
      )
    );
  }
);
Discord.displayName = "Discord";

// node_modules/@medusajs/icons/dist/esm/document-series.js
var React136 = __toESM(require_react());
var __defProp136 = Object.defineProperty;
var __getOwnPropSymbols136 = Object.getOwnPropertySymbols;
var __hasOwnProp136 = Object.prototype.hasOwnProperty;
var __propIsEnum136 = Object.prototype.propertyIsEnumerable;
var __defNormalProp136 = (obj, key, value) => key in obj ? __defProp136(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues136 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp136.call(b, prop))
      __defNormalProp136(a, prop, b[prop]);
  if (__getOwnPropSymbols136)
    for (var prop of __getOwnPropSymbols136(b)) {
      if (__propIsEnum136.call(b, prop))
        __defNormalProp136(a, prop, b[prop]);
    }
  return a;
};
var __objRest133 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp136.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols136)
    for (var prop of __getOwnPropSymbols136(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum136.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DocumentSeries = React136.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest133(_b, ["color"]);
    return React136.createElement(
      "svg",
      __spreadValues136({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React136.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.389 11.5H3.5a1.777 1.777 0 0 1-1.778-1.778V2.611c0-.982.796-1.778 1.778-1.778h4.444c.983 0 1.778.796 1.778 1.778v.935"
        }
      ),
      React136.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.389 12.389V5.278c0-.983.795-1.778 1.778-1.778h3.632c.235 0 .462.093.628.26l2.59 2.59c.168.168.26.393.26.629v5.41c0 .982-.795 1.777-1.777 1.777H6.167a1.777 1.777 0 0 1-1.778-1.777"
        }
      ),
      React136.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.278 7.055H10.61a.89.89 0 0 1-.889-.888V3.5"
        }
      )
    );
  }
);
DocumentSeries.displayName = "DocumentSeries";

// node_modules/@medusajs/icons/dist/esm/document-text-solid.js
var React137 = __toESM(require_react());
var __defProp137 = Object.defineProperty;
var __getOwnPropSymbols137 = Object.getOwnPropertySymbols;
var __hasOwnProp137 = Object.prototype.hasOwnProperty;
var __propIsEnum137 = Object.prototype.propertyIsEnumerable;
var __defNormalProp137 = (obj, key, value) => key in obj ? __defProp137(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues137 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp137.call(b, prop))
      __defNormalProp137(a, prop, b[prop]);
  if (__getOwnPropSymbols137)
    for (var prop of __getOwnPropSymbols137(b)) {
      if (__propIsEnum137.call(b, prop))
        __defNormalProp137(a, prop, b[prop]);
    }
  return a;
};
var __objRest134 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp137.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols137)
    for (var prop of __getOwnPropSymbols137(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum137.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DocumentTextSolid = React137.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest134(_b, ["color"]);
    return React137.createElement(
      "svg",
      __spreadValues137({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React137.createElement(
        "path",
        {
          fill: color,
          d: "M13.266 4.324 9.787.844a1.55 1.55 0 0 0-1.1-.455H3.723a2.446 2.446 0 0 0-2.444 2.444v9.334a2.446 2.446 0 0 0 2.444 2.444h7.556a2.446 2.446 0 0 0 2.444-2.444V5.424c0-.416-.162-.807-.456-1.1m-8.655.51H6.39a.667.667 0 0 1 0 1.333H4.61a.667.667 0 0 1 0-1.334M10.39 11.5H4.61a.667.667 0 0 1 0-1.333h5.778a.667.667 0 0 1 0 1.333m0-2.667H4.61a.667.667 0 0 1 0-1.333h5.778a.667.667 0 0 1 0 1.333m1.94-3.555H9.721a.89.89 0 0 1-.889-.89V1.793l.012-.004 3.486 3.485z"
        }
      )
    );
  }
);
DocumentTextSolid.displayName = "DocumentTextSolid";

// node_modules/@medusajs/icons/dist/esm/document-text.js
var React138 = __toESM(require_react());
var __defProp138 = Object.defineProperty;
var __getOwnPropSymbols138 = Object.getOwnPropertySymbols;
var __hasOwnProp138 = Object.prototype.hasOwnProperty;
var __propIsEnum138 = Object.prototype.propertyIsEnumerable;
var __defNormalProp138 = (obj, key, value) => key in obj ? __defProp138(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues138 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp138.call(b, prop))
      __defNormalProp138(a, prop, b[prop]);
  if (__getOwnPropSymbols138)
    for (var prop of __getOwnPropSymbols138(b)) {
      if (__propIsEnum138.call(b, prop))
        __defNormalProp138(a, prop, b[prop]);
    }
  return a;
};
var __objRest135 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp138.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols138)
    for (var prop of __getOwnPropSymbols138(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum138.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DocumentText = React138.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest135(_b, ["color"]);
    return React138.createElement(
      "svg",
      __spreadValues138({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React138.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.611 5.5H6.39M4.611 8.167h5.778M4.611 10.833h5.778M1.944 12.167V2.833c0-.982.796-1.777 1.778-1.777h4.966c.235 0 .462.093.628.26l3.48 3.48c.166.166.26.392.26.628v6.743c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778"
        }
      ),
      React138.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.976 5.056H9.944a.89.89 0 0 1-.888-.89v-3.02"
        }
      )
    );
  }
);
DocumentText.displayName = "DocumentText";

// node_modules/@medusajs/icons/dist/esm/dots-six.js
var React139 = __toESM(require_react());
var __defProp139 = Object.defineProperty;
var __getOwnPropSymbols139 = Object.getOwnPropertySymbols;
var __hasOwnProp139 = Object.prototype.hasOwnProperty;
var __propIsEnum139 = Object.prototype.propertyIsEnumerable;
var __defNormalProp139 = (obj, key, value) => key in obj ? __defProp139(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues139 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp139.call(b, prop))
      __defNormalProp139(a, prop, b[prop]);
  if (__getOwnPropSymbols139)
    for (var prop of __getOwnPropSymbols139(b)) {
      if (__propIsEnum139.call(b, prop))
        __defNormalProp139(a, prop, b[prop]);
    }
  return a;
};
var __objRest136 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp139.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols139)
    for (var prop of __getOwnPropSymbols139(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum139.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DotsSix = React139.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest136(_b, ["color"]);
    return React139.createElement(
      "svg",
      __spreadValues139({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React139.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M4.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M4.306 2.833a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M4.306 12.167a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M8.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M8.306 2.833a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M8.306 12.167a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
DotsSix.displayName = "DotsSix";

// node_modules/@medusajs/icons/dist/esm/drop-cap.js
var React140 = __toESM(require_react());
var __defProp140 = Object.defineProperty;
var __getOwnPropSymbols140 = Object.getOwnPropertySymbols;
var __hasOwnProp140 = Object.prototype.hasOwnProperty;
var __propIsEnum140 = Object.prototype.propertyIsEnumerable;
var __defNormalProp140 = (obj, key, value) => key in obj ? __defProp140(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues140 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp140.call(b, prop))
      __defNormalProp140(a, prop, b[prop]);
  if (__getOwnPropSymbols140)
    for (var prop of __getOwnPropSymbols140(b)) {
      if (__propIsEnum140.call(b, prop))
        __defNormalProp140(a, prop, b[prop]);
    }
  return a;
};
var __objRest137 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp140.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols140)
    for (var prop of __getOwnPropSymbols140(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum140.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var DropCap = React140.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest137(_b, ["color"]);
    return React140.createElement(
      "svg",
      __spreadValues140({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React140.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 12.611h11.112M1.944 9.5h11.112M9.056 6.389h4M9.056 3.278h4M6.568 6.833 4.548 1.5h-.555L1.976 6.833M2.48 5.5h3.583"
        }
      )
    );
  }
);
DropCap.displayName = "DropCap";

// node_modules/@medusajs/icons/dist/esm/ellipse-blue-solid.js
var React141 = __toESM(require_react());
var __defProp141 = Object.defineProperty;
var __getOwnPropSymbols141 = Object.getOwnPropertySymbols;
var __hasOwnProp141 = Object.prototype.hasOwnProperty;
var __propIsEnum141 = Object.prototype.propertyIsEnumerable;
var __defNormalProp141 = (obj, key, value) => key in obj ? __defProp141(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues141 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp141.call(b, prop))
      __defNormalProp141(a, prop, b[prop]);
  if (__getOwnPropSymbols141)
    for (var prop of __getOwnPropSymbols141(b)) {
      if (__propIsEnum141.call(b, prop))
        __defNormalProp141(a, prop, b[prop]);
    }
  return a;
};
var __objRest138 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp141.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols141)
    for (var prop of __getOwnPropSymbols141(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum141.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipseBlueSolid = React141.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest138(_b, ["color"]);
    return React141.createElement(
      "svg",
      __spreadValues141({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React141.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, React141.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), React141.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#60A5FA" })),
      React141.createElement("defs", null, React141.createElement("clipPath", { id: "a" }, React141.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React141.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React141.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React141.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React141.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2048"
          }
        ),
        React141.createElement("feOffset", null),
        React141.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React141.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        React141.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2048"
          }
        ),
        React141.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React141.createElement("feOffset", { dy: 1 }),
        React141.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React141.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React141.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React141.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2048",
            result: "effect2_dropShadow_2733_2048"
          }
        ),
        React141.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2048",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseBlueSolid.displayName = "EllipseBlueSolid";

// node_modules/@medusajs/icons/dist/esm/ellipse-green-solid.js
var React142 = __toESM(require_react());
var __defProp142 = Object.defineProperty;
var __getOwnPropSymbols142 = Object.getOwnPropertySymbols;
var __hasOwnProp142 = Object.prototype.hasOwnProperty;
var __propIsEnum142 = Object.prototype.propertyIsEnumerable;
var __defNormalProp142 = (obj, key, value) => key in obj ? __defProp142(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues142 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp142.call(b, prop))
      __defNormalProp142(a, prop, b[prop]);
  if (__getOwnPropSymbols142)
    for (var prop of __getOwnPropSymbols142(b)) {
      if (__propIsEnum142.call(b, prop))
        __defNormalProp142(a, prop, b[prop]);
    }
  return a;
};
var __objRest139 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp142.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols142)
    for (var prop of __getOwnPropSymbols142(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum142.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipseGreenSolid = React142.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest139(_b, ["color"]);
    return React142.createElement(
      "svg",
      __spreadValues142({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React142.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, React142.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), React142.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#10B981" })),
      React142.createElement("defs", null, React142.createElement("clipPath", { id: "a" }, React142.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React142.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React142.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React142.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React142.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2026"
          }
        ),
        React142.createElement("feOffset", null),
        React142.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React142.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        React142.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2026"
          }
        ),
        React142.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React142.createElement("feOffset", { dy: 1 }),
        React142.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React142.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React142.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React142.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2026",
            result: "effect2_dropShadow_2733_2026"
          }
        ),
        React142.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2026",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseGreenSolid.displayName = "EllipseGreenSolid";

// node_modules/@medusajs/icons/dist/esm/ellipse-grey-solid.js
var React143 = __toESM(require_react());
var __defProp143 = Object.defineProperty;
var __getOwnPropSymbols143 = Object.getOwnPropertySymbols;
var __hasOwnProp143 = Object.prototype.hasOwnProperty;
var __propIsEnum143 = Object.prototype.propertyIsEnumerable;
var __defNormalProp143 = (obj, key, value) => key in obj ? __defProp143(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues143 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp143.call(b, prop))
      __defNormalProp143(a, prop, b[prop]);
  if (__getOwnPropSymbols143)
    for (var prop of __getOwnPropSymbols143(b)) {
      if (__propIsEnum143.call(b, prop))
        __defNormalProp143(a, prop, b[prop]);
    }
  return a;
};
var __objRest140 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp143.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols143)
    for (var prop of __getOwnPropSymbols143(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum143.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipseGreySolid = React143.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest140(_b, ["color"]);
    return React143.createElement(
      "svg",
      __spreadValues143({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React143.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, React143.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), React143.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#71717A" })),
      React143.createElement("defs", null, React143.createElement("clipPath", { id: "a" }, React143.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React143.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React143.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React143.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React143.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2049"
          }
        ),
        React143.createElement("feOffset", null),
        React143.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React143.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        React143.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2049"
          }
        ),
        React143.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React143.createElement("feOffset", { dy: 1 }),
        React143.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React143.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React143.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React143.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2049",
            result: "effect2_dropShadow_2733_2049"
          }
        ),
        React143.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2049",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseGreySolid.displayName = "EllipseGreySolid";

// node_modules/@medusajs/icons/dist/esm/ellipse-mini-solid.js
var React144 = __toESM(require_react());
var __defProp144 = Object.defineProperty;
var __getOwnPropSymbols144 = Object.getOwnPropertySymbols;
var __hasOwnProp144 = Object.prototype.hasOwnProperty;
var __propIsEnum144 = Object.prototype.propertyIsEnumerable;
var __defNormalProp144 = (obj, key, value) => key in obj ? __defProp144(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues144 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp144.call(b, prop))
      __defNormalProp144(a, prop, b[prop]);
  if (__getOwnPropSymbols144)
    for (var prop of __getOwnPropSymbols144(b)) {
      if (__propIsEnum144.call(b, prop))
        __defNormalProp144(a, prop, b[prop]);
    }
  return a;
};
var __objRest141 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp144.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols144)
    for (var prop of __getOwnPropSymbols144(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum144.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipseMiniSolid = React144.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest141(_b, ["color"]);
    return React144.createElement(
      "svg",
      __spreadValues144({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React144.createElement("circle", { cx: 7.5, cy: 7.5, r: 2, fill: color })
    );
  }
);
EllipseMiniSolid.displayName = "EllipseMiniSolid";

// node_modules/@medusajs/icons/dist/esm/ellipse-orange-solid.js
var React145 = __toESM(require_react());
var __defProp145 = Object.defineProperty;
var __getOwnPropSymbols145 = Object.getOwnPropertySymbols;
var __hasOwnProp145 = Object.prototype.hasOwnProperty;
var __propIsEnum145 = Object.prototype.propertyIsEnumerable;
var __defNormalProp145 = (obj, key, value) => key in obj ? __defProp145(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues145 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp145.call(b, prop))
      __defNormalProp145(a, prop, b[prop]);
  if (__getOwnPropSymbols145)
    for (var prop of __getOwnPropSymbols145(b)) {
      if (__propIsEnum145.call(b, prop))
        __defNormalProp145(a, prop, b[prop]);
    }
  return a;
};
var __objRest142 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp145.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols145)
    for (var prop of __getOwnPropSymbols145(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum145.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipseOrangeSolid = React145.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest142(_b, ["color"]);
    return React145.createElement(
      "svg",
      __spreadValues145({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React145.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, React145.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), React145.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#F97316" })),
      React145.createElement("defs", null, React145.createElement("clipPath", { id: "a" }, React145.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React145.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React145.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React145.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React145.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2027"
          }
        ),
        React145.createElement("feOffset", null),
        React145.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React145.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        React145.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2027"
          }
        ),
        React145.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React145.createElement("feOffset", { dy: 1 }),
        React145.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React145.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React145.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React145.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2027",
            result: "effect2_dropShadow_2733_2027"
          }
        ),
        React145.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2027",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseOrangeSolid.displayName = "EllipseOrangeSolid";

// node_modules/@medusajs/icons/dist/esm/ellipse-purple-solid.js
var React146 = __toESM(require_react());
var __defProp146 = Object.defineProperty;
var __getOwnPropSymbols146 = Object.getOwnPropertySymbols;
var __hasOwnProp146 = Object.prototype.hasOwnProperty;
var __propIsEnum146 = Object.prototype.propertyIsEnumerable;
var __defNormalProp146 = (obj, key, value) => key in obj ? __defProp146(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues146 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp146.call(b, prop))
      __defNormalProp146(a, prop, b[prop]);
  if (__getOwnPropSymbols146)
    for (var prop of __getOwnPropSymbols146(b)) {
      if (__propIsEnum146.call(b, prop))
        __defNormalProp146(a, prop, b[prop]);
    }
  return a;
};
var __objRest143 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp146.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols146)
    for (var prop of __getOwnPropSymbols146(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum146.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipsePurpleSolid = React146.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest143(_b, ["color"]);
    return React146.createElement(
      "svg",
      __spreadValues146({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React146.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, React146.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), React146.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#A78BFA" })),
      React146.createElement("defs", null, React146.createElement("clipPath", { id: "a" }, React146.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React146.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React146.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React146.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React146.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_3645_3437"
          }
        ),
        React146.createElement("feOffset", null),
        React146.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React146.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        React146.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_3645_3437"
          }
        ),
        React146.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React146.createElement("feOffset", { dy: 1 }),
        React146.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React146.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React146.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React146.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_3645_3437",
            result: "effect2_dropShadow_3645_3437"
          }
        ),
        React146.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_3645_3437",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipsePurpleSolid.displayName = "EllipsePurpleSolid";

// node_modules/@medusajs/icons/dist/esm/ellipse-red-solid.js
var React147 = __toESM(require_react());
var __defProp147 = Object.defineProperty;
var __getOwnPropSymbols147 = Object.getOwnPropertySymbols;
var __hasOwnProp147 = Object.prototype.hasOwnProperty;
var __propIsEnum147 = Object.prototype.propertyIsEnumerable;
var __defNormalProp147 = (obj, key, value) => key in obj ? __defProp147(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues147 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp147.call(b, prop))
      __defNormalProp147(a, prop, b[prop]);
  if (__getOwnPropSymbols147)
    for (var prop of __getOwnPropSymbols147(b)) {
      if (__propIsEnum147.call(b, prop))
        __defNormalProp147(a, prop, b[prop]);
    }
  return a;
};
var __objRest144 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp147.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols147)
    for (var prop of __getOwnPropSymbols147(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum147.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipseRedSolid = React147.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest144(_b, ["color"]);
    return React147.createElement(
      "svg",
      __spreadValues147({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React147.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, React147.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), React147.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#F43F5E" })),
      React147.createElement("defs", null, React147.createElement("clipPath", { id: "a" }, React147.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React147.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React147.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React147.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React147.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2047"
          }
        ),
        React147.createElement("feOffset", null),
        React147.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React147.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        React147.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2047"
          }
        ),
        React147.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React147.createElement("feOffset", { dy: 1 }),
        React147.createElement("feGaussianBlur", { stdDeviation: 1 }),
        React147.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        React147.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        React147.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2047",
            result: "effect2_dropShadow_2733_2047"
          }
        ),
        React147.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2047",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseRedSolid.displayName = "EllipseRedSolid";

// node_modules/@medusajs/icons/dist/esm/ellipse-solid.js
var React148 = __toESM(require_react());
var __defProp148 = Object.defineProperty;
var __getOwnPropSymbols148 = Object.getOwnPropertySymbols;
var __hasOwnProp148 = Object.prototype.hasOwnProperty;
var __propIsEnum148 = Object.prototype.propertyIsEnumerable;
var __defNormalProp148 = (obj, key, value) => key in obj ? __defProp148(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues148 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp148.call(b, prop))
      __defNormalProp148(a, prop, b[prop]);
  if (__getOwnPropSymbols148)
    for (var prop of __getOwnPropSymbols148(b)) {
      if (__propIsEnum148.call(b, prop))
        __defNormalProp148(a, prop, b[prop]);
    }
  return a;
};
var __objRest145 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp148.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols148)
    for (var prop of __getOwnPropSymbols148(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum148.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipseSolid = React148.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest145(_b, ["color"]);
    return React148.createElement(
      "svg",
      __spreadValues148({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React148.createElement("g", { clipPath: "url(#a)" }, React148.createElement("path", { fill: color, d: "M7.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8" })),
      React148.createElement("defs", null, React148.createElement("clipPath", { id: "a" }, React148.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EllipseSolid.displayName = "EllipseSolid";

// node_modules/@medusajs/icons/dist/esm/ellipsis-horizontal.js
var React149 = __toESM(require_react());
var __defProp149 = Object.defineProperty;
var __getOwnPropSymbols149 = Object.getOwnPropertySymbols;
var __hasOwnProp149 = Object.prototype.hasOwnProperty;
var __propIsEnum149 = Object.prototype.propertyIsEnumerable;
var __defNormalProp149 = (obj, key, value) => key in obj ? __defProp149(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues149 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp149.call(b, prop))
      __defNormalProp149(a, prop, b[prop]);
  if (__getOwnPropSymbols149)
    for (var prop of __getOwnPropSymbols149(b)) {
      if (__propIsEnum149.call(b, prop))
        __defNormalProp149(a, prop, b[prop]);
    }
  return a;
};
var __objRest146 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp149.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols149)
    for (var prop of __getOwnPropSymbols149(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum149.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipsisHorizontal = React149.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest146(_b, ["color"]);
    return React149.createElement(
      "svg",
      __spreadValues149({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React149.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M1.194 7.5a1.194 1.194 0 1 1 2.39 0 1.194 1.194 0 0 1-2.39 0M11.417 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
EllipsisHorizontal.displayName = "EllipsisHorizontal";

// node_modules/@medusajs/icons/dist/esm/ellipsis-vertical.js
var React150 = __toESM(require_react());
var __defProp150 = Object.defineProperty;
var __getOwnPropSymbols150 = Object.getOwnPropertySymbols;
var __hasOwnProp150 = Object.prototype.hasOwnProperty;
var __propIsEnum150 = Object.prototype.propertyIsEnumerable;
var __defNormalProp150 = (obj, key, value) => key in obj ? __defProp150(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues150 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp150.call(b, prop))
      __defNormalProp150(a, prop, b[prop]);
  if (__getOwnPropSymbols150)
    for (var prop of __getOwnPropSymbols150(b)) {
      if (__propIsEnum150.call(b, prop))
        __defNormalProp150(a, prop, b[prop]);
    }
  return a;
};
var __objRest147 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp150.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols150)
    for (var prop of __getOwnPropSymbols150(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum150.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EllipsisVertical = React150.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest147(_b, ["color"]);
    return React150.createElement(
      "svg",
      __spreadValues150({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React150.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M6.306 2.389a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M6.306 12.611a1.194 1.194 0 1 1 2.388 0 1.194 1.194 0 0 1-2.388 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
EllipsisVertical.displayName = "EllipsisVertical";

// node_modules/@medusajs/icons/dist/esm/envelope-solid.js
var React151 = __toESM(require_react());
var __defProp151 = Object.defineProperty;
var __getOwnPropSymbols151 = Object.getOwnPropertySymbols;
var __hasOwnProp151 = Object.prototype.hasOwnProperty;
var __propIsEnum151 = Object.prototype.propertyIsEnumerable;
var __defNormalProp151 = (obj, key, value) => key in obj ? __defProp151(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues151 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp151.call(b, prop))
      __defNormalProp151(a, prop, b[prop]);
  if (__getOwnPropSymbols151)
    for (var prop of __getOwnPropSymbols151(b)) {
      if (__propIsEnum151.call(b, prop))
        __defNormalProp151(a, prop, b[prop]);
    }
  return a;
};
var __objRest148 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp151.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols151)
    for (var prop of __getOwnPropSymbols151(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum151.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EnvelopeSolid = React151.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest148(_b, ["color"]);
    return React151.createElement(
      "svg",
      __spreadValues151({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React151.createElement("g", { fill: color, clipPath: "url(#a)" }, React151.createElement("path", { d: "M7.393 7.346a.22.22 0 0 0 .214 0l6.912-3.807a2.44 2.44 0 0 0-2.352-1.817H2.833A2.44 2.44 0 0 0 .483 3.53z" }), React151.createElement("path", { d: "M8.251 8.513a1.55 1.55 0 0 1-1.502 0L.389 5v5.833a2.446 2.446 0 0 0 2.444 2.445h9.334a2.446 2.446 0 0 0 2.444-2.445V5.011z" })),
      React151.createElement("defs", null, React151.createElement("clipPath", { id: "a" }, React151.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EnvelopeSolid.displayName = "EnvelopeSolid";

// node_modules/@medusajs/icons/dist/esm/envelope.js
var React152 = __toESM(require_react());
var __defProp152 = Object.defineProperty;
var __getOwnPropSymbols152 = Object.getOwnPropertySymbols;
var __hasOwnProp152 = Object.prototype.hasOwnProperty;
var __propIsEnum152 = Object.prototype.propertyIsEnumerable;
var __defNormalProp152 = (obj, key, value) => key in obj ? __defProp152(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues152 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp152.call(b, prop))
      __defNormalProp152(a, prop, b[prop]);
  if (__getOwnPropSymbols152)
    for (var prop of __getOwnPropSymbols152(b)) {
      if (__propIsEnum152.call(b, prop))
        __defNormalProp152(a, prop, b[prop]);
    }
  return a;
};
var __objRest149 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp152.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols152)
    for (var prop of __getOwnPropSymbols152(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum152.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Envelope = React152.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest149(_b, ["color"]);
    return React152.createElement(
      "svg",
      __spreadValues152({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React152.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React152.createElement("path", { d: "M1.056 4.611 7.07 7.93a.89.89 0 0 0 .858 0l6.015-3.318" }),
        React152.createElement("path", { d: "M2.833 12.611h9.334c.982 0 1.777-.796 1.777-1.778V4.167c0-.982-.796-1.778-1.777-1.778H2.833c-.981 0-1.777.796-1.777 1.778v6.666c0 .982.796 1.778 1.777 1.778" })
      ),
      React152.createElement("defs", null, React152.createElement("clipPath", { id: "a" }, React152.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Envelope.displayName = "Envelope";

// node_modules/@medusajs/icons/dist/esm/exclamation-circle-solid.js
var React153 = __toESM(require_react());
var __defProp153 = Object.defineProperty;
var __getOwnPropSymbols153 = Object.getOwnPropertySymbols;
var __hasOwnProp153 = Object.prototype.hasOwnProperty;
var __propIsEnum153 = Object.prototype.propertyIsEnumerable;
var __defNormalProp153 = (obj, key, value) => key in obj ? __defProp153(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues153 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp153.call(b, prop))
      __defNormalProp153(a, prop, b[prop]);
  if (__getOwnPropSymbols153)
    for (var prop of __getOwnPropSymbols153(b)) {
      if (__propIsEnum153.call(b, prop))
        __defNormalProp153(a, prop, b[prop]);
    }
  return a;
};
var __objRest150 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp153.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols153)
    for (var prop of __getOwnPropSymbols153(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum153.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ExclamationCircleSolid = React153.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest150(_b, ["color"]);
    return React153.createElement(
      "svg",
      __spreadValues153({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React153.createElement("g", { clipPath: "url(#a)" }, React153.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m-.667 3.939a.667.667 0 0 1 1.334 0v3.679a.667.667 0 0 1-1.334 0zm.667 7.098a.89.89 0 0 1 0-1.778.89.89 0 0 1 0 1.778"
        }
      )),
      React153.createElement("defs", null, React153.createElement("clipPath", { id: "a" }, React153.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ExclamationCircleSolid.displayName = "ExclamationCircleSolid";

// node_modules/@medusajs/icons/dist/esm/exclamation-circle.js
var React154 = __toESM(require_react());
var __defProp154 = Object.defineProperty;
var __getOwnPropSymbols154 = Object.getOwnPropertySymbols;
var __hasOwnProp154 = Object.prototype.hasOwnProperty;
var __propIsEnum154 = Object.prototype.propertyIsEnumerable;
var __defNormalProp154 = (obj, key, value) => key in obj ? __defProp154(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues154 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp154.call(b, prop))
      __defNormalProp154(a, prop, b[prop]);
  if (__getOwnPropSymbols154)
    for (var prop of __getOwnPropSymbols154(b)) {
      if (__propIsEnum154.call(b, prop))
        __defNormalProp154(a, prop, b[prop]);
    }
  return a;
};
var __objRest151 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp154.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols154)
    for (var prop of __getOwnPropSymbols154(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum154.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ExclamationCircle = React154.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest151(_b, ["color"]);
    return React154.createElement(
      "svg",
      __spreadValues154({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React154.createElement("g", { stroke: color, clipPath: "url(#a)" }, React154.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.944a6.444 6.444 0 1 0 0-12.888 6.444 6.444 0 0 0 0 12.888M7.5 4.328v3.678"
        }
      ), React154.createElement(
        "path",
        {
          strokeWidth: 0.9,
          d: "M7.5 10.976a.44.44 0 0 1 0-.878.44.44 0 0 1 0 .878Z"
        }
      )),
      React154.createElement("defs", null, React154.createElement("clipPath", { id: "a" }, React154.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ExclamationCircle.displayName = "ExclamationCircle";

// node_modules/@medusajs/icons/dist/esm/expand.js
var React155 = __toESM(require_react());
var __defProp155 = Object.defineProperty;
var __getOwnPropSymbols155 = Object.getOwnPropertySymbols;
var __hasOwnProp155 = Object.prototype.hasOwnProperty;
var __propIsEnum155 = Object.prototype.propertyIsEnumerable;
var __defNormalProp155 = (obj, key, value) => key in obj ? __defProp155(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues155 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp155.call(b, prop))
      __defNormalProp155(a, prop, b[prop]);
  if (__getOwnPropSymbols155)
    for (var prop of __getOwnPropSymbols155(b)) {
      if (__propIsEnum155.call(b, prop))
        __defNormalProp155(a, prop, b[prop]);
    }
  return a;
};
var __objRest152 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp155.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols155)
    for (var prop of __getOwnPropSymbols155(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum155.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Expand = React155.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest152(_b, ["color"]);
    return React155.createElement(
      "svg",
      __spreadValues155({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React155.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.5 1.944h1.778c.982 0 1.778.796 1.778 1.778V5.5M5.5 13.056H3.722a1.777 1.777 0 0 1-1.778-1.778V9.5M1.944 5.5V3.722c0-.982.796-1.778 1.778-1.778H5.5M13.056 9.5v1.778c0 .982-.796 1.778-1.778 1.778H9.5"
        }
      )
    );
  }
);
Expand.displayName = "Expand";

// node_modules/@medusajs/icons/dist/esm/eye-mini.js
var React156 = __toESM(require_react());
var __defProp156 = Object.defineProperty;
var __getOwnPropSymbols156 = Object.getOwnPropertySymbols;
var __hasOwnProp156 = Object.prototype.hasOwnProperty;
var __propIsEnum156 = Object.prototype.propertyIsEnumerable;
var __defNormalProp156 = (obj, key, value) => key in obj ? __defProp156(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues156 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp156.call(b, prop))
      __defNormalProp156(a, prop, b[prop]);
  if (__getOwnPropSymbols156)
    for (var prop of __getOwnPropSymbols156(b)) {
      if (__propIsEnum156.call(b, prop))
        __defNormalProp156(a, prop, b[prop]);
    }
  return a;
};
var __objRest153 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp156.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols156)
    for (var prop of __getOwnPropSymbols156(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum156.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EyeMini = React156.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest153(_b, ["color"]);
    return React156.createElement(
      "svg",
      __spreadValues156({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React156.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React156.createElement("path", { d: "M1.356 8.507c-.4-.607-.4-1.406 0-2.014.905-1.371 2.9-3.66 6.144-3.66s5.24 2.288 6.144 3.66c.4.608.4 1.407 0 2.014-.905 1.371-2.9 3.66-6.144 3.66S2.26 9.88 1.356 8.507" }),
        React156.createElement("path", { d: "M7.5 9.945a2.444 2.444 0 1 0 0-4.889 2.444 2.444 0 0 0 0 4.889" })
      ),
      React156.createElement("defs", null, React156.createElement("clipPath", { id: "a" }, React156.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EyeMini.displayName = "EyeMini";

// node_modules/@medusajs/icons/dist/esm/eye-slash-mini.js
var React157 = __toESM(require_react());
var __defProp157 = Object.defineProperty;
var __getOwnPropSymbols157 = Object.getOwnPropertySymbols;
var __hasOwnProp157 = Object.prototype.hasOwnProperty;
var __propIsEnum157 = Object.prototype.propertyIsEnumerable;
var __defNormalProp157 = (obj, key, value) => key in obj ? __defProp157(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues157 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp157.call(b, prop))
      __defNormalProp157(a, prop, b[prop]);
  if (__getOwnPropSymbols157)
    for (var prop of __getOwnPropSymbols157(b)) {
      if (__propIsEnum157.call(b, prop))
        __defNormalProp157(a, prop, b[prop]);
    }
  return a;
};
var __objRest154 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp157.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols157)
    for (var prop of __getOwnPropSymbols157(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum157.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EyeSlashMini = React157.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest154(_b, ["color"]);
    return React157.createElement(
      "svg",
      __spreadValues157({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React157.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React157.createElement("path", { d: "M12.778 5.364c.357.4.645.792.866 1.129.4.607.4 1.406 0 2.013-.905 1.372-2.9 3.66-6.144 3.66q-.732-.002-1.38-.143M3.905 11.095C2.7 10.316 1.86 9.27 1.356 8.506c-.4-.607-.4-1.406 0-2.013.905-1.372 2.9-3.66 6.144-3.66 1.44 0 2.634.45 3.595 1.072" }),
        React157.createElement("path", { d: "M9.792 8.35A2.45 2.45 0 0 1 8.35 9.792M5.771 9.229a2.444 2.444 0 1 1 3.458-3.458M1.278 13.722 13.722 1.278" })
      ),
      React157.createElement("defs", null, React157.createElement("clipPath", { id: "a" }, React157.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EyeSlashMini.displayName = "EyeSlashMini";

// node_modules/@medusajs/icons/dist/esm/eye-slash.js
var React158 = __toESM(require_react());
var __defProp158 = Object.defineProperty;
var __getOwnPropSymbols158 = Object.getOwnPropertySymbols;
var __hasOwnProp158 = Object.prototype.hasOwnProperty;
var __propIsEnum158 = Object.prototype.propertyIsEnumerable;
var __defNormalProp158 = (obj, key, value) => key in obj ? __defProp158(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues158 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp158.call(b, prop))
      __defNormalProp158(a, prop, b[prop]);
  if (__getOwnPropSymbols158)
    for (var prop of __getOwnPropSymbols158(b)) {
      if (__propIsEnum158.call(b, prop))
        __defNormalProp158(a, prop, b[prop]);
    }
  return a;
};
var __objRest155 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp158.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols158)
    for (var prop of __getOwnPropSymbols158(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum158.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var EyeSlash = React158.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest155(_b, ["color"]);
    return React158.createElement(
      "svg",
      __spreadValues158({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React158.createElement("g", { fill: color, clipPath: "url(#a)" }, React158.createElement("path", { d: "M7.5 10.389a2.889 2.889 0 1 0 0-5.778 2.889 2.889 0 0 0 0 5.778" }), React158.createElement("path", { d: "M7.5 12.833a7.3 7.3 0 0 1-1.52-.159.667.667 0 0 1 .28-1.304c.4.087.817.13 1.24.13 2.934 0 4.76-2.106 5.587-3.36a1.18 1.18 0 0 0 0-1.28 9 9 0 0 0-.808-1.052.667.667 0 1 1 .997-.887c.333.375.644.78.924 1.206.55.833.55 1.912 0 2.746-.975 1.48-3.142 3.96-6.7 3.96M3.904 11.761a.66.66 0 0 1-.36-.106C2.234 10.809 1.328 9.675.8 8.873a2.49 2.49 0 0 1 0-2.746c.975-1.48 3.142-3.96 6.7-3.96 1.415 0 2.747.396 3.957 1.178a.666.666 0 1 1-.723 1.12A5.87 5.87 0 0 0 7.5 3.501c-2.934 0-4.76 2.106-5.588 3.36a1.18 1.18 0 0 0 0 1.28c.459.694 1.24 1.674 2.354 2.395a.667.667 0 0 1-.362 1.226" }), React158.createElement("path", { d: "M1.278 14.389a.667.667 0 0 1-.471-1.139L13.25.807a.667.667 0 1 1 .943.943L1.75 14.193c-.13.13-.3.196-.471.196" })),
      React158.createElement("defs", null, React158.createElement("clipPath", { id: "a" }, React158.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EyeSlash.displayName = "EyeSlash";

// node_modules/@medusajs/icons/dist/esm/eye.js
var React159 = __toESM(require_react());
var __defProp159 = Object.defineProperty;
var __getOwnPropSymbols159 = Object.getOwnPropertySymbols;
var __hasOwnProp159 = Object.prototype.hasOwnProperty;
var __propIsEnum159 = Object.prototype.propertyIsEnumerable;
var __defNormalProp159 = (obj, key, value) => key in obj ? __defProp159(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues159 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp159.call(b, prop))
      __defNormalProp159(a, prop, b[prop]);
  if (__getOwnPropSymbols159)
    for (var prop of __getOwnPropSymbols159(b)) {
      if (__propIsEnum159.call(b, prop))
        __defNormalProp159(a, prop, b[prop]);
    }
  return a;
};
var __objRest156 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp159.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols159)
    for (var prop of __getOwnPropSymbols159(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum159.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Eye = React159.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest156(_b, ["color"]);
    return React159.createElement(
      "svg",
      __spreadValues159({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React159.createElement("g", { fill: color, clipPath: "url(#a)" }, React159.createElement("path", { d: "M7.5 12.833c-3.558 0-5.725-2.48-6.7-3.96a2.49 2.49 0 0 1 0-2.747c.975-1.48 3.142-3.96 6.7-3.96s5.725 2.48 6.7 3.96a2.49 2.49 0 0 1 0 2.746c-.975 1.48-3.142 3.961-6.7 3.961m0-9.333c-2.934 0-4.76 2.106-5.588 3.36a1.18 1.18 0 0 0 0 1.28C2.74 9.393 4.566 11.5 7.5 11.5s4.76-2.106 5.588-3.36a1.18 1.18 0 0 0 0-1.28C12.26 5.607 10.434 3.5 7.5 3.5" }), React159.createElement("path", { d: "M7.5 10.389a2.889 2.889 0 1 0 0-5.778 2.889 2.889 0 0 0 0 5.778" })),
      React159.createElement("defs", null, React159.createElement("clipPath", { id: "a" }, React159.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Eye.displayName = "Eye";

// node_modules/@medusajs/icons/dist/esm/face-smile.js
var React160 = __toESM(require_react());
var __defProp160 = Object.defineProperty;
var __getOwnPropSymbols160 = Object.getOwnPropertySymbols;
var __hasOwnProp160 = Object.prototype.hasOwnProperty;
var __propIsEnum160 = Object.prototype.propertyIsEnumerable;
var __defNormalProp160 = (obj, key, value) => key in obj ? __defProp160(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues160 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp160.call(b, prop))
      __defNormalProp160(a, prop, b[prop]);
  if (__getOwnPropSymbols160)
    for (var prop of __getOwnPropSymbols160(b)) {
      if (__propIsEnum160.call(b, prop))
        __defNormalProp160(a, prop, b[prop]);
    }
  return a;
};
var __objRest157 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp160.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols160)
    for (var prop of __getOwnPropSymbols160(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum160.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FaceSmile = React160.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest157(_b, ["color"]);
    return React160.createElement(
      "svg",
      __spreadValues160({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React160.createElement("g", { stroke: color, clipPath: "url(#a)" }, React160.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.944a6.444 6.444 0 1 0 0-12.888 6.444 6.444 0 0 0 0 12.888"
        }
      ), React160.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.832 9.278a3.78 3.78 0 0 1-3.332 2 3.78 3.78 0 0 1-3.332-2"
        }
      ), React160.createElement("path", { d: "M6.111 6.611a.389.389 0 1 1-.778 0 .389.389 0 0 1 .778 0ZM9.667 6.611a.389.389 0 1 1-.778 0 .389.389 0 0 1 .778 0Z" })),
      React160.createElement("defs", null, React160.createElement("clipPath", { id: "a" }, React160.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
FaceSmile.displayName = "FaceSmile";

// node_modules/@medusajs/icons/dist/esm/facebook.js
var React161 = __toESM(require_react());
var __defProp161 = Object.defineProperty;
var __getOwnPropSymbols161 = Object.getOwnPropertySymbols;
var __hasOwnProp161 = Object.prototype.hasOwnProperty;
var __propIsEnum161 = Object.prototype.propertyIsEnumerable;
var __defNormalProp161 = (obj, key, value) => key in obj ? __defProp161(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues161 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp161.call(b, prop))
      __defNormalProp161(a, prop, b[prop]);
  if (__getOwnPropSymbols161)
    for (var prop of __getOwnPropSymbols161(b)) {
      if (__propIsEnum161.call(b, prop))
        __defNormalProp161(a, prop, b[prop]);
    }
  return a;
};
var Facebook = React161.forwardRef(
  (props, ref) => {
    return React161.createElement(
      "svg",
      __spreadValues161({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React161.createElement(
        "path",
        {
          fill: "url(#a)",
          fillRule: "evenodd",
          d: "M.75 7.5c0 3.341 2.43 6.109 5.636 6.682l.04-.032-.006-.001v-4.76H4.733V7.5H6.42V6.016c0-1.688 1.08-2.633 2.633-2.633.472 0 1.012.068 1.484.135V5.24H9.66c-.81 0-1.012.405-1.012.945V7.5h1.788l-.303 1.89H8.648v4.759l-.062.01.028.023c3.206-.573 5.636-3.34 5.636-6.682 0-3.712-3.037-6.75-6.75-6.75S.75 3.788.75 7.5",
          clipRule: "evenodd"
        }
      ),
      React161.createElement("defs", null, React161.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 13.78,
          y2: 0.748,
          gradientUnits: "userSpaceOnUse"
        },
        React161.createElement("stop", { stopColor: "#0062E0" }),
        React161.createElement("stop", { offset: 1, stopColor: "#19AFFF" })
      ))
    );
  }
);
Facebook.displayName = "Facebook";

// node_modules/@medusajs/icons/dist/esm/featured-badge.js
var React162 = __toESM(require_react());
var __defProp162 = Object.defineProperty;
var __getOwnPropSymbols162 = Object.getOwnPropertySymbols;
var __hasOwnProp162 = Object.prototype.hasOwnProperty;
var __propIsEnum162 = Object.prototype.propertyIsEnumerable;
var __defNormalProp162 = (obj, key, value) => key in obj ? __defProp162(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues162 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp162.call(b, prop))
      __defNormalProp162(a, prop, b[prop]);
  if (__getOwnPropSymbols162)
    for (var prop of __getOwnPropSymbols162(b)) {
      if (__propIsEnum162.call(b, prop))
        __defNormalProp162(a, prop, b[prop]);
    }
  return a;
};
var __objRest158 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp162.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols162)
    for (var prop of __getOwnPropSymbols162(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum162.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FeaturedBadge = React162.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest158(_b, ["color"]);
    return React162.createElement(
      "svg",
      __spreadValues162({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React162.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.5, fill: "#3B82F6" }),
      React162.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.5, fill: "url(#a)", fillOpacity: 0.2 }),
      React162.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 7.2,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.6
        }
      ),
      React162.createElement("g", { clipPath: "url(#b)" }, React162.createElement(
        "path",
        {
          fill: "#fff",
          d: "M11.924 6.27a.42.42 0 0 0-.336-.283L9.02 5.614 7.873 3.288c-.14-.285-.607-.285-.747 0L5.978 5.613l-2.566.373a.417.417 0 0 0-.23.71l1.856 1.81-.439 2.557a.417.417 0 0 0 .605.44l2.295-1.208 2.296 1.207a.41.41 0 0 0 .439-.032.42.42 0 0 0 .165-.407l-.438-2.556 1.857-1.81a.42.42 0 0 0 .105-.428z"
        }
      )),
      React162.createElement("defs", null, React162.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 0,
          y2: 15,
          gradientUnits: "userSpaceOnUse"
        },
        React162.createElement("stop", { stopColor: "#fff" }),
        React162.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React162.createElement("clipPath", { id: "b" }, React162.createElement("path", { fill: "#fff", d: "M2.5 2.5h10v10h-10z" })))
    );
  }
);
FeaturedBadge.displayName = "FeaturedBadge";

// node_modules/@medusajs/icons/dist/esm/figma.js
var React163 = __toESM(require_react());
var __defProp163 = Object.defineProperty;
var __getOwnPropSymbols163 = Object.getOwnPropertySymbols;
var __hasOwnProp163 = Object.prototype.hasOwnProperty;
var __propIsEnum163 = Object.prototype.propertyIsEnumerable;
var __defNormalProp163 = (obj, key, value) => key in obj ? __defProp163(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues163 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp163.call(b, prop))
      __defNormalProp163(a, prop, b[prop]);
  if (__getOwnPropSymbols163)
    for (var prop of __getOwnPropSymbols163(b)) {
      if (__propIsEnum163.call(b, prop))
        __defNormalProp163(a, prop, b[prop]);
    }
  return a;
};
var Figma = React163.forwardRef(
  (props, ref) => {
    return React163.createElement(
      "svg",
      __spreadValues163({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React163.createElement("g", { clipPath: "url(#a)" }, React163.createElement(
        "path",
        {
          fill: "#1ABCFE",
          d: "M7.5 7.5a2.227 2.227 0 1 1 4.454 0 2.227 2.227 0 0 1-4.454 0"
        }
      ), React163.createElement(
        "path",
        {
          fill: "#0ACF83",
          d: "M3.046 11.954c0-1.23.997-2.227 2.227-2.227H7.5v2.227a2.227 2.227 0 1 1-4.454 0"
        }
      ), React163.createElement(
        "path",
        {
          fill: "#FF7262",
          d: "M7.5.819v4.454h2.227a2.227 2.227 0 1 0 0-4.454z"
        }
      ), React163.createElement(
        "path",
        {
          fill: "#F24E1E",
          d: "M3.046 3.046c0 1.23.997 2.227 2.227 2.227H7.5V.819H5.273c-1.23 0-2.227.997-2.227 2.227"
        }
      ), React163.createElement(
        "path",
        {
          fill: "#A259FF",
          d: "M3.046 7.5c0 1.23.997 2.227 2.227 2.227H7.5V5.273H5.273c-1.23 0-2.227.997-2.227 2.227"
        }
      )),
      React163.createElement("defs", null, React163.createElement("clipPath", { id: "a" }, React163.createElement("path", { fill: "#fff", d: "M3 .75h9v13.5H3z" })))
    );
  }
);
Figma.displayName = "Figma";

// node_modules/@medusajs/icons/dist/esm/flag-mini.js
var React164 = __toESM(require_react());
var __defProp164 = Object.defineProperty;
var __getOwnPropSymbols164 = Object.getOwnPropertySymbols;
var __hasOwnProp164 = Object.prototype.hasOwnProperty;
var __propIsEnum164 = Object.prototype.propertyIsEnumerable;
var __defNormalProp164 = (obj, key, value) => key in obj ? __defProp164(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues164 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp164.call(b, prop))
      __defNormalProp164(a, prop, b[prop]);
  if (__getOwnPropSymbols164)
    for (var prop of __getOwnPropSymbols164(b)) {
      if (__propIsEnum164.call(b, prop))
        __defNormalProp164(a, prop, b[prop]);
    }
  return a;
};
var __objRest159 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp164.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols164)
    for (var prop of __getOwnPropSymbols164(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum164.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FlagMini = React164.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest159(_b, ["color"]);
    return React164.createElement(
      "svg",
      __spreadValues164({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React164.createElement("g", { clipPath: "url(#a)" }, React164.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#b)"
        },
        React164.createElement("path", { d: "M2.833 2.38c1.032-.718 2.006-1.015 2.917-.875 1.502.23 1.995 1.52 3.5 1.75.9.138 1.872-.148 2.917-.874v5.834c-1.045.727-2.016 1.013-2.917.874-1.504-.23-1.998-1.52-3.5-1.75-.912-.14-1.885.157-2.917.875M2.833 1.278v12.444" })
      )),
      React164.createElement("defs", null, React164.createElement("clipPath", { id: "a" }, React164.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React164.createElement("clipPath", { id: "b" }, React164.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
FlagMini.displayName = "FlagMini";

// node_modules/@medusajs/icons/dist/esm/flying-box.js
var React165 = __toESM(require_react());
var __defProp165 = Object.defineProperty;
var __getOwnPropSymbols165 = Object.getOwnPropertySymbols;
var __hasOwnProp165 = Object.prototype.hasOwnProperty;
var __propIsEnum165 = Object.prototype.propertyIsEnumerable;
var __defNormalProp165 = (obj, key, value) => key in obj ? __defProp165(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues165 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp165.call(b, prop))
      __defNormalProp165(a, prop, b[prop]);
  if (__getOwnPropSymbols165)
    for (var prop of __getOwnPropSymbols165(b)) {
      if (__propIsEnum165.call(b, prop))
        __defNormalProp165(a, prop, b[prop]);
    }
  return a;
};
var __objRest160 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp165.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols165)
    for (var prop of __getOwnPropSymbols165(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum165.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FlyingBox = React165.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest160(_b, ["color"]);
    return React165.createElement(
      "svg",
      __spreadValues165({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React165.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.5v5.333M11.278 4.167H3.722c-.982 0-1.778.796-1.778 1.777v5.334c0 .982.796 1.777 1.778 1.777h7.556c.982 0 1.778-.795 1.778-1.777V5.944c0-.981-.796-1.777-1.778-1.777"
        }
      ),
      React165.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m2.167 5.086 1.288-2.598c.3-.605.917-.988 1.593-.988h4.904c.676 0 1.293.383 1.593.988l1.288 2.599M4.167 10.833h1.777"
        }
      )
    );
  }
);
FlyingBox.displayName = "FlyingBox";

// node_modules/@medusajs/icons/dist/esm/folder-illustration.js
var React166 = __toESM(require_react());
var __defProp166 = Object.defineProperty;
var __getOwnPropSymbols166 = Object.getOwnPropertySymbols;
var __hasOwnProp166 = Object.prototype.hasOwnProperty;
var __propIsEnum166 = Object.prototype.propertyIsEnumerable;
var __defNormalProp166 = (obj, key, value) => key in obj ? __defProp166(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues166 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp166.call(b, prop))
      __defNormalProp166(a, prop, b[prop]);
  if (__getOwnPropSymbols166)
    for (var prop of __getOwnPropSymbols166(b)) {
      if (__propIsEnum166.call(b, prop))
        __defNormalProp166(a, prop, b[prop]);
    }
  return a;
};
var __objRest161 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp166.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols166)
    for (var prop of __getOwnPropSymbols166(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum166.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FolderIllustration = React166.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest161(_b, ["color"]);
    return React166.createElement(
      "svg",
      __spreadValues166({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React166.createElement(
        "path",
        {
          fill: "#60A5FA",
          fillRule: "evenodd",
          d: "M13.935 11.183a2.32 2.32 0 0 1-2.318 2.319H3.383a2.32 2.32 0 0 1-2.318-2.319V3.817a2.32 2.32 0 0 1 2.318-2.319h1.691c.704 0 1.368.32 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.319z",
          clipRule: "evenodd"
        }
      ),
      React166.createElement(
        "path",
        {
          fill: "url(#a)",
          fillOpacity: 0.15,
          fillRule: "evenodd",
          d: "M13.935 11.183a2.32 2.32 0 0 1-2.318 2.319H3.383a2.32 2.32 0 0 1-2.318-2.319V3.817a2.32 2.32 0 0 1 2.318-2.319h1.691c.704 0 1.368.32 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.319z",
          clipRule: "evenodd"
        }
      ),
      React166.createElement(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 0.15,
          strokeWidth: 0.5,
          d: "M7.034 2.955a.25.25 0 0 0 .196.093h4.387c1.142 0 2.068.926 2.068 2.069v6.066a2.07 2.07 0 0 1-2.068 2.069H3.383a2.07 2.07 0 0 1-2.068-2.069V3.817c0-1.143.926-2.069 2.068-2.069h1.691c.628 0 1.22.285 1.613.774z"
        }
      ),
      React166.createElement("g", { filter: "url(#b)" }, React166.createElement(
        "path",
        {
          fill: "#60A5FA",
          d: "M1.065 7.283a2.32 2.32 0 0 1 2.318-2.318h8.234a2.32 2.32 0 0 1 2.318 2.318v3.9a2.32 2.32 0 0 1-2.318 2.318H3.383a2.32 2.32 0 0 1-2.318-2.318z"
        }
      ), React166.createElement(
        "path",
        {
          fill: "url(#c)",
          fillOpacity: 0.2,
          d: "M1.065 7.283a2.32 2.32 0 0 1 2.318-2.318h8.234a2.32 2.32 0 0 1 2.318 2.318v3.9a2.32 2.32 0 0 1-2.318 2.318H3.383a2.32 2.32 0 0 1-2.318-2.318z"
        }
      )),
      React166.createElement("defs", null, React166.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 1.498,
          y2: 13.502,
          gradientUnits: "userSpaceOnUse"
        },
        React166.createElement("stop", null),
        React166.createElement("stop", { offset: 1, stopOpacity: 0 })
      ), React166.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 7.5,
          x2: 7.5,
          y1: 4.965,
          y2: 13.501,
          gradientUnits: "userSpaceOnUse"
        },
        React166.createElement("stop", { stopColor: "#fff" }),
        React166.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React166.createElement(
        "filter",
        {
          id: "b",
          width: 12.87,
          height: 8.537,
          x: 1.065,
          y: 4.965,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React166.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React166.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React166.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React166.createElement("feOffset", { dy: -0.5 }),
        React166.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React166.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
        React166.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_6347_11987" }),
        React166.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React166.createElement("feOffset", { dy: 0.5 }),
        React166.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React166.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" }),
        React166.createElement(
          "feBlend",
          {
            in2: "effect1_innerShadow_6347_11987",
            result: "effect2_innerShadow_6347_11987"
          }
        )
      ))
    );
  }
);
FolderIllustration.displayName = "FolderIllustration";

// node_modules/@medusajs/icons/dist/esm/folder-open-illustration.js
var React167 = __toESM(require_react());
var __defProp167 = Object.defineProperty;
var __getOwnPropSymbols167 = Object.getOwnPropertySymbols;
var __hasOwnProp167 = Object.prototype.hasOwnProperty;
var __propIsEnum167 = Object.prototype.propertyIsEnumerable;
var __defNormalProp167 = (obj, key, value) => key in obj ? __defProp167(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues167 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp167.call(b, prop))
      __defNormalProp167(a, prop, b[prop]);
  if (__getOwnPropSymbols167)
    for (var prop of __getOwnPropSymbols167(b)) {
      if (__propIsEnum167.call(b, prop))
        __defNormalProp167(a, prop, b[prop]);
    }
  return a;
};
var __objRest162 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp167.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols167)
    for (var prop of __getOwnPropSymbols167(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum167.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FolderOpenIllustration = React167.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest162(_b, ["color"]);
    return React167.createElement(
      "svg",
      __spreadValues167({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React167.createElement("g", { clipPath: "url(#a)" }, React167.createElement(
        "path",
        {
          fill: "#60A5FA",
          fillRule: "evenodd",
          d: "M13.935 11.15a2.32 2.32 0 0 1-2.318 2.32H3.383a2.32 2.32 0 0 1-2.318-2.32V3.785a2.32 2.32 0 0 1 2.318-2.318h1.691c.704 0 1.368.319 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.318z",
          clipRule: "evenodd"
        }
      ), React167.createElement(
        "path",
        {
          fill: "url(#b)",
          fillOpacity: 0.15,
          fillRule: "evenodd",
          d: "M13.935 11.15a2.32 2.32 0 0 1-2.318 2.32H3.383a2.32 2.32 0 0 1-2.318-2.32V3.785a2.32 2.32 0 0 1 2.318-2.318h1.691c.704 0 1.368.319 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.318z",
          clipRule: "evenodd"
        }
      ), React167.createElement(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 0.15,
          strokeWidth: 0.5,
          d: "M7.034 2.922a.25.25 0 0 0 .196.094h4.387c1.142 0 2.068.926 2.068 2.068v6.067a2.07 2.07 0 0 1-2.068 2.068H3.383a2.07 2.07 0 0 1-2.068-2.068V3.784c0-1.142.926-2.068 2.068-2.068h1.691c.628 0 1.22.284 1.613.773z"
        }
      ), React167.createElement("g", { fillRule: "evenodd", clipRule: "evenodd", filter: "url(#c)" }, React167.createElement(
        "path",
        {
          fill: "#60A5FA",
          d: "M2.041 5.734h10.917a1.95 1.95 0 0 1 1.884 2.452l-.955 3.578a2.38 2.38 0 0 1-2.302 1.77h-8.17a2.38 2.38 0 0 1-2.303-1.77L.158 8.186A1.95 1.95 0 0 1 2.04 5.734z"
        }
      ), React167.createElement(
        "path",
        {
          fill: "url(#d)",
          fillOpacity: 0.2,
          d: "M2.041 5.734h10.917a1.95 1.95 0 0 1 1.884 2.452l-.955 3.578a2.38 2.38 0 0 1-2.302 1.77h-8.17a2.38 2.38 0 0 1-2.303-1.77L.158 8.186A1.95 1.95 0 0 1 2.04 5.734z"
        }
      ))),
      React167.createElement("defs", null, React167.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 7.5,
          x2: 7.5,
          y1: 1.466,
          y2: 13.469,
          gradientUnits: "userSpaceOnUse"
        },
        React167.createElement("stop", null),
        React167.createElement("stop", { offset: 1, stopOpacity: 0 })
      ), React167.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 7.5,
          x2: 7.5,
          y1: 5.734,
          y2: 13.534,
          gradientUnits: "userSpaceOnUse"
        },
        React167.createElement("stop", { stopColor: "#fff" }),
        React167.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React167.createElement("clipPath", { id: "a" }, React167.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React167.createElement(
        "filter",
        {
          id: "c",
          width: 14.817,
          height: 7.8,
          x: 0.091,
          y: 5.734,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React167.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React167.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React167.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React167.createElement("feOffset", { dy: -0.5 }),
        React167.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React167.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
        React167.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_6347_12110" }),
        React167.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React167.createElement("feOffset", { dy: 0.5 }),
        React167.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React167.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" }),
        React167.createElement(
          "feBlend",
          {
            in2: "effect1_innerShadow_6347_12110",
            result: "effect2_innerShadow_6347_12110"
          }
        )
      ))
    );
  }
);
FolderOpenIllustration.displayName = "FolderOpenIllustration";

// node_modules/@medusajs/icons/dist/esm/folder-open.js
var React168 = __toESM(require_react());
var __defProp168 = Object.defineProperty;
var __getOwnPropSymbols168 = Object.getOwnPropertySymbols;
var __hasOwnProp168 = Object.prototype.hasOwnProperty;
var __propIsEnum168 = Object.prototype.propertyIsEnumerable;
var __defNormalProp168 = (obj, key, value) => key in obj ? __defProp168(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues168 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp168.call(b, prop))
      __defNormalProp168(a, prop, b[prop]);
  if (__getOwnPropSymbols168)
    for (var prop of __getOwnPropSymbols168(b)) {
      if (__propIsEnum168.call(b, prop))
        __defNormalProp168(a, prop, b[prop]);
    }
  return a;
};
var __objRest163 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp168.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols168)
    for (var prop of __getOwnPropSymbols168(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum168.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FolderOpen = React168.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest163(_b, ["color"]);
    return React168.createElement(
      "svg",
      __spreadValues168({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React168.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React168.createElement("path", { d: "M1.875 6.458v-2.5c0-.92.746-1.666 1.667-1.666h1.626c.505 0 .983.229 1.3.623l.502.627h4.488c.921 0 1.667.746 1.667 1.666v1.25" }),
        React168.createElement("path", { d: "M2.252 6.458h10.496c.822 0 1.42.779 1.208 1.572l-.918 3.44a1.666 1.666 0 0 1-1.61 1.238H3.572a1.666 1.666 0 0 1-1.61-1.237L1.045 8.03a1.25 1.25 0 0 1 1.207-1.572z" })
      ),
      React168.createElement("defs", null, React168.createElement("clipPath", { id: "a" }, React168.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
FolderOpen.displayName = "FolderOpen";

// node_modules/@medusajs/icons/dist/esm/folder.js
var React169 = __toESM(require_react());
var __defProp169 = Object.defineProperty;
var __getOwnPropSymbols169 = Object.getOwnPropertySymbols;
var __hasOwnProp169 = Object.prototype.hasOwnProperty;
var __propIsEnum169 = Object.prototype.propertyIsEnumerable;
var __defNormalProp169 = (obj, key, value) => key in obj ? __defProp169(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues169 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp169.call(b, prop))
      __defNormalProp169(a, prop, b[prop]);
  if (__getOwnPropSymbols169)
    for (var prop of __getOwnPropSymbols169(b)) {
      if (__propIsEnum169.call(b, prop))
        __defNormalProp169(a, prop, b[prop]);
    }
  return a;
};
var __objRest164 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp169.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols169)
    for (var prop of __getOwnPropSymbols169(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum169.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Folder = React169.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest164(_b, ["color"]);
    return React169.createElement(
      "svg",
      __spreadValues169({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React169.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.875 7.292V3.958c0-.92.746-1.666 1.667-1.666h1.626c.505 0 .983.229 1.3.623l.502.627h4.488c.921 0 1.667.746 1.667 1.666v2.37"
        }
      ),
      React169.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.542 5.625h7.916c.921 0 1.667.746 1.667 1.667v3.75c0 .92-.746 1.666-1.667 1.666H3.542c-.921 0-1.667-.745-1.667-1.666v-3.75c0-.921.746-1.667 1.667-1.667"
        }
      )
    );
  }
);
Folder.displayName = "Folder";

// node_modules/@medusajs/icons/dist/esm/forward-solid.js
var React170 = __toESM(require_react());
var __defProp170 = Object.defineProperty;
var __getOwnPropSymbols170 = Object.getOwnPropertySymbols;
var __hasOwnProp170 = Object.prototype.hasOwnProperty;
var __propIsEnum170 = Object.prototype.propertyIsEnumerable;
var __defNormalProp170 = (obj, key, value) => key in obj ? __defProp170(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues170 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp170.call(b, prop))
      __defNormalProp170(a, prop, b[prop]);
  if (__getOwnPropSymbols170)
    for (var prop of __getOwnPropSymbols170(b)) {
      if (__propIsEnum170.call(b, prop))
        __defNormalProp170(a, prop, b[prop]);
    }
  return a;
};
var __objRest165 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp170.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols170)
    for (var prop of __getOwnPropSymbols170(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum170.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ForwardSolid = React170.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest165(_b, ["color"]);
    return React170.createElement(
      "svg",
      __spreadValues170({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React170.createElement("g", { clipPath: "url(#a)" }, React170.createElement(
        "path",
        {
          fill: color,
          d: "M14.23 6.619 8.19 3.27a1 1 0 0 0-.998.014 1 1 0 0 0-.497.867v1.862l-4.95-2.742a1 1 0 0 0-.999.013 1 1 0 0 0-.496.867v6.696c0 .36.185.685.496.867.16.094.335.142.511.142.168 0 .334-.043.487-.128l4.95-2.743v1.862c0 .36.186.685.497.867.159.094.335.142.51.142.168 0 .335-.043.488-.128l6.042-3.348a1.008 1.008 0 0 0 0-1.762"
        }
      )),
      React170.createElement("defs", null, React170.createElement("clipPath", { id: "a" }, React170.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ForwardSolid.displayName = "ForwardSolid";

// node_modules/@medusajs/icons/dist/esm/funnel.js
var React171 = __toESM(require_react());
var __defProp171 = Object.defineProperty;
var __getOwnPropSymbols171 = Object.getOwnPropertySymbols;
var __hasOwnProp171 = Object.prototype.hasOwnProperty;
var __propIsEnum171 = Object.prototype.propertyIsEnumerable;
var __defNormalProp171 = (obj, key, value) => key in obj ? __defProp171(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues171 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp171.call(b, prop))
      __defNormalProp171(a, prop, b[prop]);
  if (__getOwnPropSymbols171)
    for (var prop of __getOwnPropSymbols171(b)) {
      if (__propIsEnum171.call(b, prop))
        __defNormalProp171(a, prop, b[prop]);
    }
  return a;
};
var __objRest166 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp171.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols171)
    for (var prop of __getOwnPropSymbols171(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum171.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Funnel = React171.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest166(_b, ["color"]);
    return React171.createElement(
      "svg",
      __spreadValues171({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React171.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.833 12.611-2.666 1.333V7.5L1.944 1.944h11.112L8.833 7.5z"
        }
      )
    );
  }
);
Funnel.displayName = "Funnel";

// node_modules/@medusajs/icons/dist/esm/gatsby-ex.js
var React172 = __toESM(require_react());
var __defProp172 = Object.defineProperty;
var __getOwnPropSymbols172 = Object.getOwnPropertySymbols;
var __hasOwnProp172 = Object.prototype.hasOwnProperty;
var __propIsEnum172 = Object.prototype.propertyIsEnumerable;
var __defNormalProp172 = (obj, key, value) => key in obj ? __defProp172(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues172 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp172.call(b, prop))
      __defNormalProp172(a, prop, b[prop]);
  if (__getOwnPropSymbols172)
    for (var prop of __getOwnPropSymbols172(b)) {
      if (__propIsEnum172.call(b, prop))
        __defNormalProp172(a, prop, b[prop]);
    }
  return a;
};
var __objRest167 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp172.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols172)
    for (var prop of __getOwnPropSymbols172(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum172.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var GatsbyEx = React172.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest167(_b, ["color"]);
    return React172.createElement(
      "svg",
      __spreadValues172({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React172.createElement("g", { clipPath: "url(#a)" }, React172.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.25 7.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0m-12.054.097c0 1.301.53 2.651 1.543 3.664 1.013 1.012 2.363 1.495 3.713 1.543zm.145-1.254 6.316 6.316c2.363-.53 4.147-2.652 4.147-5.159H9.429v.964h2.314c-.338 1.447-1.398 2.652-2.797 3.134L3.402 6.054C4.029 4.366 5.62 3.16 7.5 3.16c1.446 0 2.748.723 3.568 1.832l.723-.627A5.32 5.32 0 0 0 7.5 2.196c-2.507 0-4.629 1.784-5.159 4.147",
          clipRule: "evenodd"
        }
      )),
      React172.createElement("defs", null, React172.createElement("clipPath", { id: "a" }, React172.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GatsbyEx.displayName = "GatsbyEx";

// node_modules/@medusajs/icons/dist/esm/gatsby.js
var React173 = __toESM(require_react());
var __defProp173 = Object.defineProperty;
var __getOwnPropSymbols173 = Object.getOwnPropertySymbols;
var __hasOwnProp173 = Object.prototype.hasOwnProperty;
var __propIsEnum173 = Object.prototype.propertyIsEnumerable;
var __defNormalProp173 = (obj, key, value) => key in obj ? __defProp173(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues173 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp173.call(b, prop))
      __defNormalProp173(a, prop, b[prop]);
  if (__getOwnPropSymbols173)
    for (var prop of __getOwnPropSymbols173(b)) {
      if (__propIsEnum173.call(b, prop))
        __defNormalProp173(a, prop, b[prop]);
    }
  return a;
};
var Gatsby = React173.forwardRef(
  (props, ref) => {
    return React173.createElement(
      "svg",
      __spreadValues173({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React173.createElement("g", { clipPath: "url(#a)" }, React173.createElement(
        "path",
        {
          fill: "#639",
          d: "M7.5 14.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5"
        }
      ), React173.createElement(
        "path",
        {
          fill: "#fff",
          d: "M3.74 11.26c-1.013-1.012-1.544-2.362-1.544-3.663l5.256 5.207c-1.35-.049-2.7-.53-3.713-1.543m4.917 1.399L2.341 6.343C2.87 3.98 4.993 2.197 7.5 2.197c1.784 0 3.327.867 4.29 2.17l-.722.626c-.82-1.109-2.122-1.832-3.568-1.832-1.88 0-3.472 1.205-4.098 2.893l5.544 5.544c1.399-.482 2.46-1.687 2.797-3.134H9.428V7.5h3.375c0 2.507-1.783 4.629-4.146 5.159"
        }
      )),
      React173.createElement("defs", null, React173.createElement("clipPath", { id: "a" }, React173.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Gatsby.displayName = "Gatsby";

// node_modules/@medusajs/icons/dist/esm/gift-solid.js
var React174 = __toESM(require_react());
var __defProp174 = Object.defineProperty;
var __getOwnPropSymbols174 = Object.getOwnPropertySymbols;
var __hasOwnProp174 = Object.prototype.hasOwnProperty;
var __propIsEnum174 = Object.prototype.propertyIsEnumerable;
var __defNormalProp174 = (obj, key, value) => key in obj ? __defProp174(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues174 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp174.call(b, prop))
      __defNormalProp174(a, prop, b[prop]);
  if (__getOwnPropSymbols174)
    for (var prop of __getOwnPropSymbols174(b)) {
      if (__propIsEnum174.call(b, prop))
        __defNormalProp174(a, prop, b[prop]);
    }
  return a;
};
var __objRest168 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp174.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols174)
    for (var prop of __getOwnPropSymbols174(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum174.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var GiftSolid = React174.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest168(_b, ["color"]);
    return React174.createElement(
      "svg",
      __spreadValues174({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React174.createElement("g", { fill: color, clipPath: "url(#a)" }, React174.createElement("path", { d: "M2.167 7.944v4.223A2.446 2.446 0 0 0 4.61 14.61h2.222V7.944zM8.167 7.944v6.667h2.222a2.446 2.446 0 0 0 2.444-2.444V7.944zM13.056 3.5h-.411a2.2 2.2 0 0 0 .188-.889A2.225 2.225 0 0 0 10.611.39C9.046.389 8.065 1.483 7.5 2.468 6.935 1.484 5.954.388 4.389.388a2.225 2.225 0 0 0-2.222 2.223c0 .317.068.616.188.889h-.41c-.858 0-1.556.69-1.556 1.556 0 .865.698 1.555 1.555 1.555h11.112a1.555 1.555 0 1 0 0-3.111M10.61 1.722a.89.89 0 0 1 0 1.778h-2.15c.36-.764 1.045-1.778 2.15-1.778m-7.111.89a.89.89 0 0 1 .889-.89c1.097 0 1.784 1.014 2.147 1.778H4.389a.89.89 0 0 1-.889-.889" })),
      React174.createElement("defs", null, React174.createElement("clipPath", { id: "a" }, React174.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GiftSolid.displayName = "GiftSolid";

// node_modules/@medusajs/icons/dist/esm/gift.js
var React175 = __toESM(require_react());
var __defProp175 = Object.defineProperty;
var __getOwnPropSymbols175 = Object.getOwnPropertySymbols;
var __hasOwnProp175 = Object.prototype.hasOwnProperty;
var __propIsEnum175 = Object.prototype.propertyIsEnumerable;
var __defNormalProp175 = (obj, key, value) => key in obj ? __defProp175(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues175 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp175.call(b, prop))
      __defNormalProp175(a, prop, b[prop]);
  if (__getOwnPropSymbols175)
    for (var prop of __getOwnPropSymbols175(b)) {
      if (__propIsEnum175.call(b, prop))
        __defNormalProp175(a, prop, b[prop]);
    }
  return a;
};
var __objRest169 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp175.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols175)
    for (var prop of __getOwnPropSymbols175(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum175.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Gift = React175.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest169(_b, ["color"]);
    return React175.createElement(
      "svg",
      __spreadValues175({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React175.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React175.createElement("path", { d: "M7.5 4.167v9.777M2.833 2.611c0-.859.697-1.555 1.556-1.555 2.301 0 3.111 3.11 3.111 3.11H4.389a1.556 1.556 0 0 1-1.556-1.555M10.611 4.167H7.5s.81-3.111 3.111-3.111a1.556 1.556 0 0 1 0 3.11M12.167 6.833v5.334c0 .982-.796 1.777-1.778 1.777H4.61a1.777 1.777 0 0 1-1.778-1.777V6.833" }),
        React175.createElement("path", { d: "M13.056 4.167H1.944a.89.89 0 0 0-.888.889v.888c0 .491.398.89.888.89h11.112a.89.89 0 0 0 .888-.89v-.888a.89.89 0 0 0-.889-.89" })
      ),
      React175.createElement("defs", null, React175.createElement("clipPath", { id: "a" }, React175.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Gift.displayName = "Gift";

// node_modules/@medusajs/icons/dist/esm/github.js
var React176 = __toESM(require_react());
var __defProp176 = Object.defineProperty;
var __getOwnPropSymbols176 = Object.getOwnPropertySymbols;
var __hasOwnProp176 = Object.prototype.hasOwnProperty;
var __propIsEnum176 = Object.prototype.propertyIsEnumerable;
var __defNormalProp176 = (obj, key, value) => key in obj ? __defProp176(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues176 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp176.call(b, prop))
      __defNormalProp176(a, prop, b[prop]);
  if (__getOwnPropSymbols176)
    for (var prop of __getOwnPropSymbols176(b)) {
      if (__propIsEnum176.call(b, prop))
        __defNormalProp176(a, prop, b[prop]);
    }
  return a;
};
var Github = React176.forwardRef(
  (props, ref) => {
    return React176.createElement(
      "svg",
      __spreadValues176({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React176.createElement(
        "path",
        {
          fill: "#1B1F23",
          fillRule: "evenodd",
          d: "M7.5.917C3.77.917.75 3.937.75 7.667a6.75 6.75 0 0 0 4.615 6.404c.338.059.464-.144.464-.321 0-.16-.008-.692-.008-1.257-1.696.312-2.135-.414-2.27-.793-.076-.194-.405-.793-.692-.954-.236-.126-.573-.439-.008-.447.531-.008.911.49 1.038.692.607 1.02 1.578.734 1.966.557.059-.439.236-.734.43-.903-1.502-.169-3.071-.751-3.071-3.333 0-.734.261-1.341.692-1.814-.068-.169-.304-.86.067-1.789 0 0 .565-.177 1.856.692a6.3 6.3 0 0 1 1.688-.228c.574 0 1.147.076 1.687.228 1.291-.877 1.857-.692 1.857-.692.37.928.135 1.62.067 1.79.43.472.692 1.07.692 1.813 0 2.59-1.578 3.164-3.08 3.333.245.21.456.616.456 1.249 0 .902-.008 1.628-.008 1.856 0 .177.126.388.464.32a6.76 6.76 0 0 0 4.598-6.403c0-3.73-3.02-6.75-6.75-6.75",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Github.displayName = "Github";

// node_modules/@medusajs/icons/dist/esm/glasses.js
var React177 = __toESM(require_react());
var __defProp177 = Object.defineProperty;
var __getOwnPropSymbols177 = Object.getOwnPropertySymbols;
var __hasOwnProp177 = Object.prototype.hasOwnProperty;
var __propIsEnum177 = Object.prototype.propertyIsEnumerable;
var __defNormalProp177 = (obj, key, value) => key in obj ? __defProp177(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues177 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp177.call(b, prop))
      __defNormalProp177(a, prop, b[prop]);
  if (__getOwnPropSymbols177)
    for (var prop of __getOwnPropSymbols177(b)) {
      if (__propIsEnum177.call(b, prop))
        __defNormalProp177(a, prop, b[prop]);
    }
  return a;
};
var __objRest170 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp177.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols177)
    for (var prop of __getOwnPropSymbols177(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum177.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Glasses = React177.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest170(_b, ["color"]);
    return React177.createElement(
      "svg",
      __spreadValues177({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React177.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.389 9.5a1.112 1.112 0 0 1 2.222 0M1.134 8.857l1.01-5.492A1.778 1.778 0 0 1 4.68 2.133M13.866 8.857l-1.01-5.492a1.778 1.778 0 0 0-2.536-1.232"
        }
      ),
      React177.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.722 12.167a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M11.278 12.167a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"
        }
      )
    );
  }
);
Glasses.displayName = "Glasses";

// node_modules/@medusajs/icons/dist/esm/globe-europe-solid.js
var React178 = __toESM(require_react());
var __defProp178 = Object.defineProperty;
var __getOwnPropSymbols178 = Object.getOwnPropertySymbols;
var __hasOwnProp178 = Object.prototype.hasOwnProperty;
var __propIsEnum178 = Object.prototype.propertyIsEnumerable;
var __defNormalProp178 = (obj, key, value) => key in obj ? __defProp178(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues178 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp178.call(b, prop))
      __defNormalProp178(a, prop, b[prop]);
  if (__getOwnPropSymbols178)
    for (var prop of __getOwnPropSymbols178(b)) {
      if (__propIsEnum178.call(b, prop))
        __defNormalProp178(a, prop, b[prop]);
    }
  return a;
};
var __objRest171 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp178.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols178)
    for (var prop of __getOwnPropSymbols178(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum178.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var GlobeEuropeSolid = React178.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest171(_b, ["color"]);
    return React178.createElement(
      "svg",
      __spreadValues178({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React178.createElement("g", { fill: color, clipPath: "url(#a)" }, React178.createElement("path", { d: "M11.016 2.825c.181.03.368-.02.513-.132l.136-.106A6.4 6.4 0 0 0 7.5 1.057a6.44 6.44 0 0 0-6.075 4.31c.606 1.364 1.388 2.429 2.354 3.135l.212.15q.119.083.23.164l.021.016c.262.196.488.41.603.728.084.233.074.418.06.652-.018.35-.043.783.26 1.286.278.462.638.652.901.79.201.106.294.159.379.287.248.372.124.943.059 1.17l-.033.111c.336.055.677.09 1.028.09a6.44 6.44 0 0 0 6.006-4.119c-.43-.971-.974-1.517-1.658-1.647-.724-.137-1.267.244-1.705.55-.37.256-.61.415-.853.366-.14-.025-.205-.09-.426-.356-.206-.247-.49-.587-.97-.87-.784-.458-1.756-.575-2.898-.35-.113-.32-.197-.784.02-1.224.047-.095.305-.577.774-.707.372-.103.732.073 1.11.259.424.208 1.004.492 1.564.136.627-.4.559-1.15.504-1.753-.04-.436-.086-.93.11-1.174.24-.301.948-.385 1.939-.23z" }), React178.createElement("path", { d: "M7.5 14.611c-3.92 0-7.111-3.19-7.111-7.111S3.579.389 7.5.389s7.111 3.19 7.111 7.111-3.19 7.111-7.111 7.111m0-12.889A5.784 5.784 0 0 0 1.722 7.5 5.784 5.784 0 0 0 7.5 13.278 5.784 5.784 0 0 0 13.278 7.5 5.784 5.784 0 0 0 7.5 1.722" })),
      React178.createElement("defs", null, React178.createElement("clipPath", { id: "a" }, React178.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GlobeEuropeSolid.displayName = "GlobeEuropeSolid";

// node_modules/@medusajs/icons/dist/esm/globe-europe.js
var React179 = __toESM(require_react());
var __defProp179 = Object.defineProperty;
var __getOwnPropSymbols179 = Object.getOwnPropertySymbols;
var __hasOwnProp179 = Object.prototype.hasOwnProperty;
var __propIsEnum179 = Object.prototype.propertyIsEnumerable;
var __defNormalProp179 = (obj, key, value) => key in obj ? __defProp179(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues179 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp179.call(b, prop))
      __defNormalProp179(a, prop, b[prop]);
  if (__getOwnPropSymbols179)
    for (var prop of __getOwnPropSymbols179(b)) {
      if (__propIsEnum179.call(b, prop))
        __defNormalProp179(a, prop, b[prop]);
    }
  return a;
};
var __objRest172 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp179.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols179)
    for (var prop of __getOwnPropSymbols179(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum179.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var GlobeEurope = React179.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest172(_b, ["color"]);
    return React179.createElement(
      "svg",
      __spreadValues179({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React179.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React179.createElement("path", { d: "M4.63 8.288C4.59 8.231 3.87 7.112 4.416 6c.06-.122.43-.844 1.195-1.056 1.132-.314 1.958.816 2.493.475.599-.381-.24-1.916.451-2.781.526-.659 1.685-.61 2.563-.472M4.63 8.288c1.412-.39 2.32-.199 2.926.156.835.489.894 1.171 1.61 1.306 1.034.193 1.64-1.091 2.556-.917.426.081.944.482 1.394 1.829" }),
        React179.createElement("path", { d: "M7.145 13.927c.132-.515.208-1.194-.145-1.723-.376-.565-.907-.46-1.264-1.05-.371-.618.013-1.054-.264-1.82-.26-.72-.854-1.044-1.3-1.37-.743-.543-1.666-1.521-2.39-3.43" }),
        React179.createElement("path", { d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89" })
      ),
      React179.createElement("defs", null, React179.createElement("clipPath", { id: "a" }, React179.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GlobeEurope.displayName = "GlobeEurope";

// node_modules/@medusajs/icons/dist/esm/google.js
var React180 = __toESM(require_react());
var __defProp180 = Object.defineProperty;
var __getOwnPropSymbols180 = Object.getOwnPropertySymbols;
var __hasOwnProp180 = Object.prototype.hasOwnProperty;
var __propIsEnum180 = Object.prototype.propertyIsEnumerable;
var __defNormalProp180 = (obj, key, value) => key in obj ? __defProp180(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues180 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp180.call(b, prop))
      __defNormalProp180(a, prop, b[prop]);
  if (__getOwnPropSymbols180)
    for (var prop of __getOwnPropSymbols180(b)) {
      if (__propIsEnum180.call(b, prop))
        __defNormalProp180(a, prop, b[prop]);
    }
  return a;
};
var Google = React180.forwardRef(
  (props, ref) => {
    return React180.createElement(
      "svg",
      __spreadValues180({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React180.createElement(
        "path",
        {
          fill: "#4280EF",
          d: "M14.117 7.661c0-.456-.045-.926-.118-1.368H7.63v2.604h3.648a3.07 3.07 0 0 1-1.353 2.044l2.177 1.692c1.28-1.192 2.015-2.927 2.015-4.972"
        }
      ),
      React180.createElement(
        "path",
        {
          fill: "#34A353",
          d: "M7.63 14.252c1.824 0 3.354-.604 4.472-1.633l-2.177-1.677c-.603.412-1.383.647-2.295.647-1.765 0-3.25-1.191-3.794-2.78L1.6 10.53a6.74 6.74 0 0 0 6.03 3.722"
        }
      ),
      React180.createElement(
        "path",
        {
          fill: "#F6B704",
          d: "M3.836 8.794a4.1 4.1 0 0 1 0-2.588L1.6 4.47a6.76 6.76 0 0 0 0 6.06z"
        }
      ),
      React180.createElement(
        "path",
        {
          fill: "#E54335",
          d: "M7.63 3.426A3.68 3.68 0 0 1 10.22 4.44L12.146 2.5A6.5 6.5 0 0 0 7.63.749a6.74 6.74 0 0 0-6.03 3.72l2.236 1.736c.544-1.603 2.03-2.78 3.794-2.78"
        }
      )
    );
  }
);
Google.displayName = "Google";

// node_modules/@medusajs/icons/dist/esm/grid-list.js
var React181 = __toESM(require_react());
var __defProp181 = Object.defineProperty;
var __getOwnPropSymbols181 = Object.getOwnPropertySymbols;
var __hasOwnProp181 = Object.prototype.hasOwnProperty;
var __propIsEnum181 = Object.prototype.propertyIsEnumerable;
var __defNormalProp181 = (obj, key, value) => key in obj ? __defProp181(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues181 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp181.call(b, prop))
      __defNormalProp181(a, prop, b[prop]);
  if (__getOwnPropSymbols181)
    for (var prop of __getOwnPropSymbols181(b)) {
      if (__propIsEnum181.call(b, prop))
        __defNormalProp181(a, prop, b[prop]);
    }
  return a;
};
var __objRest173 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp181.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols181)
    for (var prop of __getOwnPropSymbols181(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum181.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var GridList = React181.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest173(_b, ["color"]);
    return React181.createElement(
      "svg",
      __spreadValues181({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React181.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.611 2.834h4.445M8.611 5.5h4.445M8.611 9.5h4.445M8.611 12.167h4.445M5.056 1.944H2.833a.89.89 0 0 0-.889.89v2.221c0 .491.398.89.89.89h2.222c.49 0 .888-.399.888-.89V2.833a.89.89 0 0 0-.888-.889M5.056 9.056H2.833a.89.89 0 0 0-.889.889v2.222c0 .49.398.889.89.889h2.222c.49 0 .888-.398.888-.89V9.946a.89.89 0 0 0-.888-.89"
        }
      )
    );
  }
);
GridList.displayName = "GridList";

// node_modules/@medusajs/icons/dist/esm/hand-truck.js
var React182 = __toESM(require_react());
var __defProp182 = Object.defineProperty;
var __getOwnPropSymbols182 = Object.getOwnPropertySymbols;
var __hasOwnProp182 = Object.prototype.hasOwnProperty;
var __propIsEnum182 = Object.prototype.propertyIsEnumerable;
var __defNormalProp182 = (obj, key, value) => key in obj ? __defProp182(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues182 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp182.call(b, prop))
      __defNormalProp182(a, prop, b[prop]);
  if (__getOwnPropSymbols182)
    for (var prop of __getOwnPropSymbols182(b)) {
      if (__propIsEnum182.call(b, prop))
        __defNormalProp182(a, prop, b[prop]);
    }
  return a;
};
var __objRest174 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp182.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols182)
    for (var prop of __getOwnPropSymbols182(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum182.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var HandTruck = React182.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest174(_b, ["color"]);
    return React182.createElement(
      "svg",
      __spreadValues182({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React182.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.192 2.927 6.465 3.99a.86.86 0 0 0-.591 1.064l.944 3.312a.86.86 0 0 0 1.065.592l3.726-1.063a.86.86 0 0 0 .592-1.064l-.945-3.312a.86.86 0 0 0-1.064-.592M8.328 3.459l.473 1.656M6.876 11.708l7.298-2.081M4.933 10.357 2.77 2.744a.86.86 0 0 0-.828-.626h-.9"
        }
      ),
      React182.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.347 13.313a1.507 1.507 0 1 0 0-3.014 1.507 1.507 0 0 0 0 3.014"
        }
      )
    );
  }
);
HandTruck.displayName = "HandTruck";

// node_modules/@medusajs/icons/dist/esm/hashtag.js
var React183 = __toESM(require_react());
var __defProp183 = Object.defineProperty;
var __getOwnPropSymbols183 = Object.getOwnPropertySymbols;
var __hasOwnProp183 = Object.prototype.hasOwnProperty;
var __propIsEnum183 = Object.prototype.propertyIsEnumerable;
var __defNormalProp183 = (obj, key, value) => key in obj ? __defProp183(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues183 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp183.call(b, prop))
      __defNormalProp183(a, prop, b[prop]);
  if (__getOwnPropSymbols183)
    for (var prop of __getOwnPropSymbols183(b)) {
      if (__propIsEnum183.call(b, prop))
        __defNormalProp183(a, prop, b[prop]);
    }
  return a;
};
var __objRest175 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp183.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols183)
    for (var prop of __getOwnPropSymbols183(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum183.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Hashtag = React183.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest175(_b, ["color"]);
    return React183.createElement(
      "svg",
      __spreadValues183({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React183.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.333,
          d: "M2.833 5.056h10.223M1.944 9.944h10.223M6.285 1.944 4.2 13.056M10.799 1.944 8.715 13.056"
        }
      )
    );
  }
);
Hashtag.displayName = "Hashtag";

// node_modules/@medusajs/icons/dist/esm/heart-broken.js
var React184 = __toESM(require_react());
var __defProp184 = Object.defineProperty;
var __getOwnPropSymbols184 = Object.getOwnPropertySymbols;
var __hasOwnProp184 = Object.prototype.hasOwnProperty;
var __propIsEnum184 = Object.prototype.propertyIsEnumerable;
var __defNormalProp184 = (obj, key, value) => key in obj ? __defProp184(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues184 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp184.call(b, prop))
      __defNormalProp184(a, prop, b[prop]);
  if (__getOwnPropSymbols184)
    for (var prop of __getOwnPropSymbols184(b)) {
      if (__propIsEnum184.call(b, prop))
        __defNormalProp184(a, prop, b[prop]);
    }
  return a;
};
var __objRest176 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp184.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols184)
    for (var prop of __getOwnPropSymbols184(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum184.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var HeartBroken = React184.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest176(_b, ["color"]);
    return React184.createElement(
      "svg",
      __spreadValues184({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React184.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 3.473 5.722 5.722 9.278 7.5 7.5 9.278"
        }
      ),
      React184.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.081 13.03a.9.9 0 0 0 .837 0c1.395-.727 5.803-3.366 5.803-7.655a3.42 3.42 0 0 0-3.4-3.43A3.45 3.45 0 0 0 7.5 3.472a3.45 3.45 0 0 0-2.82-1.529 3.42 3.42 0 0 0-3.401 3.43c0 4.29 4.407 6.929 5.802 7.657"
        }
      )
    );
  }
);
HeartBroken.displayName = "HeartBroken";

// node_modules/@medusajs/icons/dist/esm/heart.js
var React185 = __toESM(require_react());
var __defProp185 = Object.defineProperty;
var __getOwnPropSymbols185 = Object.getOwnPropertySymbols;
var __hasOwnProp185 = Object.prototype.hasOwnProperty;
var __propIsEnum185 = Object.prototype.propertyIsEnumerable;
var __defNormalProp185 = (obj, key, value) => key in obj ? __defProp185(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues185 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp185.call(b, prop))
      __defNormalProp185(a, prop, b[prop]);
  if (__getOwnPropSymbols185)
    for (var prop of __getOwnPropSymbols185(b)) {
      if (__propIsEnum185.call(b, prop))
        __defNormalProp185(a, prop, b[prop]);
    }
  return a;
};
var __objRest177 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp185.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols185)
    for (var prop of __getOwnPropSymbols185(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum185.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Heart = React185.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest177(_b, ["color"]);
    return React185.createElement(
      "svg",
      __spreadValues185({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React185.createElement("g", { clipPath: "url(#a)" }, React185.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.081 13.03a.9.9 0 0 0 .837 0c1.395-.727 5.803-3.366 5.803-7.655a3.42 3.42 0 0 0-3.4-3.43A3.45 3.45 0 0 0 7.5 3.472a3.45 3.45 0 0 0-2.82-1.529 3.42 3.42 0 0 0-3.401 3.43c0 4.29 4.407 6.929 5.802 7.657"
        }
      )),
      React185.createElement("defs", null, React185.createElement("clipPath", { id: "a" }, React185.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Heart.displayName = "Heart";

// node_modules/@medusajs/icons/dist/esm/history.js
var React186 = __toESM(require_react());
var __defProp186 = Object.defineProperty;
var __getOwnPropSymbols186 = Object.getOwnPropertySymbols;
var __hasOwnProp186 = Object.prototype.hasOwnProperty;
var __propIsEnum186 = Object.prototype.propertyIsEnumerable;
var __defNormalProp186 = (obj, key, value) => key in obj ? __defProp186(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues186 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp186.call(b, prop))
      __defNormalProp186(a, prop, b[prop]);
  if (__getOwnPropSymbols186)
    for (var prop of __getOwnPropSymbols186(b)) {
      if (__propIsEnum186.call(b, prop))
        __defNormalProp186(a, prop, b[prop]);
    }
  return a;
};
var __objRest178 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp186.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols186)
    for (var prop of __getOwnPropSymbols186(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum186.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var History = React186.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest178(_b, ["color"]);
    return React186.createElement(
      "svg",
      __spreadValues186({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React186.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.056 7.5a6.445 6.445 0 1 0 .48-2.444"
        }
      ),
      React186.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m1.171 2.438.363 2.618 2.617-.362M7.5 3.722V7.5l2.889 2"
        }
      )
    );
  }
);
History.displayName = "History";

// node_modules/@medusajs/icons/dist/esm/house-star.js
var React187 = __toESM(require_react());
var __defProp187 = Object.defineProperty;
var __getOwnPropSymbols187 = Object.getOwnPropertySymbols;
var __hasOwnProp187 = Object.prototype.hasOwnProperty;
var __propIsEnum187 = Object.prototype.propertyIsEnumerable;
var __defNormalProp187 = (obj, key, value) => key in obj ? __defProp187(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues187 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp187.call(b, prop))
      __defNormalProp187(a, prop, b[prop]);
  if (__getOwnPropSymbols187)
    for (var prop of __getOwnPropSymbols187(b)) {
      if (__propIsEnum187.call(b, prop))
        __defNormalProp187(a, prop, b[prop]);
    }
  return a;
};
var __objRest179 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp187.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols187)
    for (var prop of __getOwnPropSymbols187(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum187.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var HouseStar = React187.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest179(_b, ["color"]);
    return React187.createElement(
      "svg",
      __spreadValues187({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React187.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 7.008v-1.29c0-.277-.13-.539-.351-.707L8.038 1.465a.89.89 0 0 0-1.076 0L2.296 5.01a.89.89 0 0 0-.352.708v6.448c0 .981.796 1.777 1.778 1.777H6.42"
        }
      ),
      React187.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.903 8.708.892 1.808 1.997.29-1.445 1.408.341 1.989-1.785-.939-1.786.939.341-1.989-1.444-1.408 1.996-.29z"
        }
      )
    );
  }
);
HouseStar.displayName = "HouseStar";

// node_modules/@medusajs/icons/dist/esm/house.js
var React188 = __toESM(require_react());
var __defProp188 = Object.defineProperty;
var __getOwnPropSymbols188 = Object.getOwnPropertySymbols;
var __hasOwnProp188 = Object.prototype.hasOwnProperty;
var __propIsEnum188 = Object.prototype.propertyIsEnumerable;
var __defNormalProp188 = (obj, key, value) => key in obj ? __defProp188(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues188 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp188.call(b, prop))
      __defNormalProp188(a, prop, b[prop]);
  if (__getOwnPropSymbols188)
    for (var prop of __getOwnPropSymbols188(b)) {
      if (__propIsEnum188.call(b, prop))
        __defNormalProp188(a, prop, b[prop]);
    }
  return a;
};
var __objRest180 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp188.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols188)
    for (var prop of __getOwnPropSymbols188(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum188.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var House = React188.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest180(_b, ["color"]);
    return React188.createElement(
      "svg",
      __spreadValues188({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React188.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.705 5.011 8.038 1.465a.89.89 0 0 0-1.076 0L2.296 5.01a.89.89 0 0 0-.352.709v6.448c0 .982.796 1.777 1.778 1.777h2.222V10.39a.89.89 0 0 1 .89-.889h1.333a.89.89 0 0 1 .889.889v3.555h2.222c.982 0 1.778-.795 1.778-1.777v-6.45a.89.89 0 0 0-.351-.707"
        }
      )
    );
  }
);
House.displayName = "House";

// node_modules/@medusajs/icons/dist/esm/inbox-solid.js
var React189 = __toESM(require_react());
var __defProp189 = Object.defineProperty;
var __getOwnPropSymbols189 = Object.getOwnPropertySymbols;
var __hasOwnProp189 = Object.prototype.hasOwnProperty;
var __propIsEnum189 = Object.prototype.propertyIsEnumerable;
var __defNormalProp189 = (obj, key, value) => key in obj ? __defProp189(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues189 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp189.call(b, prop))
      __defNormalProp189(a, prop, b[prop]);
  if (__getOwnPropSymbols189)
    for (var prop of __getOwnPropSymbols189(b)) {
      if (__propIsEnum189.call(b, prop))
        __defNormalProp189(a, prop, b[prop]);
    }
  return a;
};
var __objRest181 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp189.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols189)
    for (var prop of __getOwnPropSymbols189(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum189.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var InboxSolid = React189.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest181(_b, ["color"]);
    return React189.createElement(
      "svg",
      __spreadValues189({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React189.createElement("g", { fill: color, clipPath: "url(#a)" }, React189.createElement("path", { d: "M4.807 4.14a.667.667 0 0 0 0 .943l2.222 2.222a.665.665 0 0 0 .942 0l2.222-2.222a.667.667 0 1 0-.943-.943L8.166 5.225v-3.28a.667.667 0 0 0-1.334 0v3.279L5.748 4.139a.667.667 0 0 0-.943 0z" }), React189.createElement("path", { d: "M12.563 2.828a2.43 2.43 0 0 0-2.275-1.55h-.122a.667.667 0 0 0 0 1.333h.122c.46 0 .865.277 1.033.705L12.965 7.5H9.944a.667.667 0 0 0-.667.667v.889c0 .122-.1.222-.222.222H5.944a.22.22 0 0 1-.223-.222v-.89a.667.667 0 0 0-.666-.666h-3.02l1.643-4.184a1.1 1.1 0 0 1 1.034-.705h.121a.667.667 0 0 0 0-1.333h-.121a2.43 2.43 0 0 0-2.276 1.55L.558 7.609a2.4 2.4 0 0 0-.17.895v2.774a2.446 2.446 0 0 0 2.445 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V8.504a2.4 2.4 0 0 0-.169-.895z" })),
      React189.createElement("defs", null, React189.createElement("clipPath", { id: "a" }, React189.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
InboxSolid.displayName = "InboxSolid";

// node_modules/@medusajs/icons/dist/esm/information-circle-solid.js
var React190 = __toESM(require_react());
var __defProp190 = Object.defineProperty;
var __getOwnPropSymbols190 = Object.getOwnPropertySymbols;
var __hasOwnProp190 = Object.prototype.hasOwnProperty;
var __propIsEnum190 = Object.prototype.propertyIsEnumerable;
var __defNormalProp190 = (obj, key, value) => key in obj ? __defProp190(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues190 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp190.call(b, prop))
      __defNormalProp190(a, prop, b[prop]);
  if (__getOwnPropSymbols190)
    for (var prop of __getOwnPropSymbols190(b)) {
      if (__propIsEnum190.call(b, prop))
        __defNormalProp190(a, prop, b[prop]);
    }
  return a;
};
var __objRest182 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp190.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols190)
    for (var prop of __getOwnPropSymbols190(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum190.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var InformationCircleSolid = React190.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest182(_b, ["color"]);
    return React190.createElement(
      "svg",
      __spreadValues190({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React190.createElement("g", { clipPath: "url(#a)" }, React190.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.61 7.5a7.11 7.11 0 1 1-14.22 0 7.11 7.11 0 0 1 14.22 0M8.389 3.945a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0M6.61 6.611a.667.667 0 1 0 0 1.333h.225a.222.222 0 0 1 .217.27l-.408 1.837a1.555 1.555 0 0 0 1.519 1.893h.225a.667.667 0 0 0 0-1.333h-.225a.222.222 0 0 1-.217-.27l.408-1.837a1.555 1.555 0 0 0-1.519-1.893z",
          clipRule: "evenodd"
        }
      )),
      React190.createElement("defs", null, React190.createElement("clipPath", { id: "a" }, React190.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
InformationCircleSolid.displayName = "InformationCircleSolid";

// node_modules/@medusajs/icons/dist/esm/information-circle.js
var React191 = __toESM(require_react());
var __defProp191 = Object.defineProperty;
var __getOwnPropSymbols191 = Object.getOwnPropertySymbols;
var __hasOwnProp191 = Object.prototype.hasOwnProperty;
var __propIsEnum191 = Object.prototype.propertyIsEnumerable;
var __defNormalProp191 = (obj, key, value) => key in obj ? __defProp191(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues191 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp191.call(b, prop))
      __defNormalProp191(a, prop, b[prop]);
  if (__getOwnPropSymbols191)
    for (var prop of __getOwnPropSymbols191(b)) {
      if (__propIsEnum191.call(b, prop))
        __defNormalProp191(a, prop, b[prop]);
    }
  return a;
};
var __objRest183 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp191.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols191)
    for (var prop of __getOwnPropSymbols191(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum191.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var InformationCircle = React191.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest183(_b, ["color"]);
    return React191.createElement(
      "svg",
      __spreadValues191({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React191.createElement("g", { stroke: color, strokeWidth: 1.5, clipPath: "url(#a)" }, React191.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m6.829 6.784.037-.018a.671.671 0 0 1 .95.763l-.633 2.537a.67.67 0 0 0 .951.763l.037-.018M7.5 4.1h.007v.007H7.5z"
        }
      ), React191.createElement("circle", { cx: 7.5, cy: 7.5, r: 6.36 })),
      React191.createElement("defs", null, React191.createElement("clipPath", { id: "a" }, React191.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
InformationCircle.displayName = "InformationCircle";

// node_modules/@medusajs/icons/dist/esm/javascript-ex.js
var React192 = __toESM(require_react());
var __defProp192 = Object.defineProperty;
var __getOwnPropSymbols192 = Object.getOwnPropertySymbols;
var __hasOwnProp192 = Object.prototype.hasOwnProperty;
var __propIsEnum192 = Object.prototype.propertyIsEnumerable;
var __defNormalProp192 = (obj, key, value) => key in obj ? __defProp192(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues192 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp192.call(b, prop))
      __defNormalProp192(a, prop, b[prop]);
  if (__getOwnPropSymbols192)
    for (var prop of __getOwnPropSymbols192(b)) {
      if (__propIsEnum192.call(b, prop))
        __defNormalProp192(a, prop, b[prop]);
    }
  return a;
};
var __objRest184 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp192.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols192)
    for (var prop of __getOwnPropSymbols192(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum192.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var JavascriptEx = React192.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest184(_b, ["color"]);
    return React192.createElement(
      "svg",
      __spreadValues192({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React192.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M3.75.75h7.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3m6.469 10.489c-.633 0-.991-.33-1.266-.778l-1.043.605c.377.742 1.147 1.309 2.338 1.309 1.22 0 2.127-.632 2.127-1.784 0-1.07-.616-1.545-1.706-2.011l-.32-.137c-.552-.238-.79-.394-.79-.778 0-.31.238-.548.614-.548.369 0 .606.155.826.548l1-.64C11.575 6.283 10.988 6 10.172 6c-1.146 0-1.88.73-1.88 1.691 0 1.042.616 1.536 1.542 1.93l.32.136c.586.256.935.411.935.85 0 .367-.34.632-.871.632m-4.974-.008c-.44 0-.624-.302-.826-.659l-1.044.631c.302.64.898 1.17 1.925 1.17 1.137 0 1.916-.604 1.916-1.93v-4.37H5.933v4.353c0 .64-.266.805-.688.805",
          clipRule: "evenodd"
        }
      )
    );
  }
);
JavascriptEx.displayName = "JavascriptEx";

// node_modules/@medusajs/icons/dist/esm/javascript.js
var React193 = __toESM(require_react());
var __defProp193 = Object.defineProperty;
var __getOwnPropSymbols193 = Object.getOwnPropertySymbols;
var __hasOwnProp193 = Object.prototype.hasOwnProperty;
var __propIsEnum193 = Object.prototype.propertyIsEnumerable;
var __defNormalProp193 = (obj, key, value) => key in obj ? __defProp193(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues193 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp193.call(b, prop))
      __defNormalProp193(a, prop, b[prop]);
  if (__getOwnPropSymbols193)
    for (var prop of __getOwnPropSymbols193(b)) {
      if (__propIsEnum193.call(b, prop))
        __defNormalProp193(a, prop, b[prop]);
    }
  return a;
};
var Javascript = React193.forwardRef(
  (props, ref) => {
    return React193.createElement(
      "svg",
      __spreadValues193({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React193.createElement(
        "path",
        {
          fill: "#F7DF1E",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3"
        }
      ),
      React193.createElement(
        "path",
        {
          fill: "#000",
          d: "M8.953 10.461c.275.448.633.778 1.266.778.532 0 .871-.265.871-.632 0-.439-.349-.594-.934-.85l-.32-.137c-.927-.393-1.542-.887-1.542-1.929 0-.96.733-1.691 1.88-1.691.815 0 1.402.283 1.825 1.025l-1 .64c-.22-.393-.457-.548-.826-.548-.376 0-.614.237-.614.548 0 .384.239.54.79.778l.32.137c1.09.466 1.706.942 1.706 2.01 0 1.153-.908 1.785-2.126 1.785-1.192 0-1.962-.567-2.339-1.31zm-4.533.111c.201.357.385.659.825.659.422 0 .688-.165.688-.805V6.073h1.283v4.37c0 1.326-.779 1.93-1.916 1.93-1.027 0-1.622-.53-1.925-1.17z"
        }
      )
    );
  }
);
Javascript.displayName = "Javascript";

// node_modules/@medusajs/icons/dist/esm/key-solid.js
var React194 = __toESM(require_react());
var __defProp194 = Object.defineProperty;
var __getOwnPropSymbols194 = Object.getOwnPropertySymbols;
var __hasOwnProp194 = Object.prototype.hasOwnProperty;
var __propIsEnum194 = Object.prototype.propertyIsEnumerable;
var __defNormalProp194 = (obj, key, value) => key in obj ? __defProp194(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues194 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp194.call(b, prop))
      __defNormalProp194(a, prop, b[prop]);
  if (__getOwnPropSymbols194)
    for (var prop of __getOwnPropSymbols194(b)) {
      if (__propIsEnum194.call(b, prop))
        __defNormalProp194(a, prop, b[prop]);
    }
  return a;
};
var __objRest185 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp194.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols194)
    for (var prop of __getOwnPropSymbols194(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum194.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var KeySolid = React194.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest185(_b, ["color"]);
    return React194.createElement(
      "svg",
      __spreadValues194({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React194.createElement("g", { clipPath: "url(#a)" }, React194.createElement(
        "path",
        {
          fill: color,
          d: "M1.344 14.164a.66.66 0 0 1-.484-.21.68.68 0 0 1-.18-.498l.158-2.531a.67.67 0 0 1 .193-.43L6.01 5.518a4 4 0 0 1-.065-.685A4.227 4.227 0 0 1 10.167.611a4.227 4.227 0 0 1 4.222 4.222 4.227 4.227 0 0 1-4.222 4.223 3.8 3.8 0 0 1-.721-.072l-1.482 1.439a.67.67 0 0 1-.464.188H6.167v1.333a.67.67 0 0 1-.18.456L4.523 13.96a.67.67 0 0 1-.487.21zM11.5 4.389a.89.89 0 1 0-1.779 0 .89.89 0 0 0 1.779 0"
        }
      )),
      React194.createElement("defs", null, React194.createElement("clipPath", { id: "a" }, React194.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
KeySolid.displayName = "KeySolid";

// node_modules/@medusajs/icons/dist/esm/key.js
var React195 = __toESM(require_react());
var __defProp195 = Object.defineProperty;
var __getOwnPropSymbols195 = Object.getOwnPropertySymbols;
var __hasOwnProp195 = Object.prototype.hasOwnProperty;
var __propIsEnum195 = Object.prototype.propertyIsEnumerable;
var __defNormalProp195 = (obj, key, value) => key in obj ? __defProp195(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues195 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp195.call(b, prop))
      __defNormalProp195(a, prop, b[prop]);
  if (__getOwnPropSymbols195)
    for (var prop of __getOwnPropSymbols195(b)) {
      if (__propIsEnum195.call(b, prop))
        __defNormalProp195(a, prop, b[prop]);
    }
  return a;
};
var __objRest186 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp195.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols195)
    for (var prop of __getOwnPropSymbols195(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum195.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Key = React195.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest186(_b, ["color"]);
    return React195.createElement(
      "svg",
      __spreadValues195({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React195.createElement("g", { stroke: color, clipPath: "url(#a)" }, React195.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m1.345 13.497.158-2.53L6.739 5.73a3.6 3.6 0 0 1-.128-.897 3.556 3.556 0 1 1 3.556 3.556c-.322 0-.629-.057-.926-.137L7.5 9.944h-2v2l-1.462 1.559z"
        }
      ), React195.createElement("path", { d: "M10.611 4.778a.389.389 0 1 0 0-.778.389.389 0 0 0 0 .778Z" })),
      React195.createElement("defs", null, React195.createElement("clipPath", { id: "a" }, React195.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Key.displayName = "Key";

// node_modules/@medusajs/icons/dist/esm/keyboard.js
var React196 = __toESM(require_react());
var __defProp196 = Object.defineProperty;
var __getOwnPropSymbols196 = Object.getOwnPropertySymbols;
var __hasOwnProp196 = Object.prototype.hasOwnProperty;
var __propIsEnum196 = Object.prototype.propertyIsEnumerable;
var __defNormalProp196 = (obj, key, value) => key in obj ? __defProp196(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues196 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp196.call(b, prop))
      __defNormalProp196(a, prop, b[prop]);
  if (__getOwnPropSymbols196)
    for (var prop of __getOwnPropSymbols196(b)) {
      if (__propIsEnum196.call(b, prop))
        __defNormalProp196(a, prop, b[prop]);
    }
  return a;
};
var __objRest187 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp196.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols196)
    for (var prop of __getOwnPropSymbols196(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum196.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Keyboard = React196.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest187(_b, ["color"]);
    return React196.createElement(
      "svg",
      __spreadValues196({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React196.createElement("g", { fill: color, clipPath: "url(#a)" }, React196.createElement("path", { d: "M4.746 10.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M6.052 7.861h.444c.246 0 .445.2.445.445v.444a.444.444 0 0 1-.445.445h-.444a.444.444 0 0 1-.445-.445v-.444c0-.246.2-.445.445-.445M4.052 7.861h-.445a.444.444 0 0 0-.444.445v.444c0 .246.199.445.444.445h.445a.444.444 0 0 0 .444-.445v-.444a.444.444 0 0 0-.444-.445M8.496 7.861h.445c.245 0 .444.2.444.445v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.445.444-.445M11.385 7.861h-.444a.444.444 0 0 0-.445.445v.444c0 .246.2.445.444.445h.445a.444.444 0 0 0 .444-.445v-.444a.444.444 0 0 0-.444-.445M4.83 6.084h.444c.245 0 .444.198.444.444v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.444.444-.444M7.718 6.084h-.444a.444.444 0 0 0-.445.444v.444c0 .246.2.445.445.445h.444a.444.444 0 0 0 .445-.445v-.444a.444.444 0 0 0-.445-.444M9.718 6.084h.445c.245 0 .444.198.444.444v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.444.444-.444" }), React196.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M12.817.964a.75.75 0 0 0-1.438-.428.805.805 0 0 1-.772.575H9.052c-1.245 0-2.26.988-2.304 2.223H2.829A2.53 2.53 0 0 0 .302 5.86v5.778a2.53 2.53 0 0 0 2.527 2.528h9.334a2.53 2.53 0 0 0 2.528-2.528V5.861a2.53 2.53 0 0 0-2.528-2.527H8.25a.806.806 0 0 1 .802-.723h1.555a2.305 2.305 0 0 0 2.21-1.647M7.49 4.834h4.672c.568 0 1.028.46 1.028 1.027v5.778c0 .568-.46 1.028-1.027 1.028H2.829c-.567 0-1.027-.46-1.027-1.028V5.861c0-.567.46-1.027 1.027-1.027z",
          clipRule: "evenodd"
        }
      )),
      React196.createElement("defs", null, React196.createElement("clipPath", { id: "a" }, React196.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Keyboard.displayName = "Keyboard";

// node_modules/@medusajs/icons/dist/esm/klarna-ex.js
var React197 = __toESM(require_react());
var __defProp197 = Object.defineProperty;
var __getOwnPropSymbols197 = Object.getOwnPropertySymbols;
var __hasOwnProp197 = Object.prototype.hasOwnProperty;
var __propIsEnum197 = Object.prototype.propertyIsEnumerable;
var __defNormalProp197 = (obj, key, value) => key in obj ? __defProp197(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues197 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp197.call(b, prop))
      __defNormalProp197(a, prop, b[prop]);
  if (__getOwnPropSymbols197)
    for (var prop of __getOwnPropSymbols197(b)) {
      if (__propIsEnum197.call(b, prop))
        __defNormalProp197(a, prop, b[prop]);
    }
  return a;
};
var __objRest188 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp197.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols197)
    for (var prop of __getOwnPropSymbols197(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum197.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var KlarnaEx = React197.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest188(_b, ["color"]);
    return React197.createElement(
      "svg",
      __spreadValues197({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React197.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.25 7.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0M5.906 4.603H4.658v5.425h1.248zm3.125 0H7.8a3.12 3.12 0 0 1-1.259 2.515l-.48.357 1.869 2.547h1.533l-1.72-2.33a4.3 4.3 0 0 0 1.287-3.09m.797 4.005a.821.821 0 1 1 .912 1.366.821.821 0 0 1-.912-1.366",
          clipRule: "evenodd"
        }
      )
    );
  }
);
KlarnaEx.displayName = "KlarnaEx";

// node_modules/@medusajs/icons/dist/esm/klarna.js
var React198 = __toESM(require_react());
var __defProp198 = Object.defineProperty;
var __getOwnPropSymbols198 = Object.getOwnPropertySymbols;
var __hasOwnProp198 = Object.prototype.hasOwnProperty;
var __propIsEnum198 = Object.prototype.propertyIsEnumerable;
var __defNormalProp198 = (obj, key, value) => key in obj ? __defProp198(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues198 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp198.call(b, prop))
      __defNormalProp198(a, prop, b[prop]);
  if (__getOwnPropSymbols198)
    for (var prop of __getOwnPropSymbols198(b)) {
      if (__propIsEnum198.call(b, prop))
        __defNormalProp198(a, prop, b[prop]);
    }
  return a;
};
var Klarna = React198.forwardRef(
  (props, ref) => {
    return React198.createElement(
      "svg",
      __spreadValues198({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React198.createElement(
        "path",
        {
          fill: "#FFB3C7",
          d: "M7.5 14.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5"
        }
      ),
      React198.createElement(
        "path",
        {
          fill: "#000",
          d: "M9.03 4.603H7.802a3.12 3.12 0 0 1-1.259 2.515l-.48.357 1.869 2.547h1.533l-1.72-2.33a4.3 4.3 0 0 0 1.287-3.09M5.906 4.603H4.658v5.425h1.248z"
        }
      ),
      React198.createElement(
        "path",
        {
          fill: "#000",
          d: "M10.285 8.47a.821.821 0 1 0-.001 1.642.821.821 0 0 0 .001-1.642"
        }
      )
    );
  }
);
Klarna.displayName = "Klarna";

// node_modules/@medusajs/icons/dist/esm/klaviyo.js
var React199 = __toESM(require_react());
var __defProp199 = Object.defineProperty;
var __getOwnPropSymbols199 = Object.getOwnPropertySymbols;
var __hasOwnProp199 = Object.prototype.hasOwnProperty;
var __propIsEnum199 = Object.prototype.propertyIsEnumerable;
var __defNormalProp199 = (obj, key, value) => key in obj ? __defProp199(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues199 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp199.call(b, prop))
      __defNormalProp199(a, prop, b[prop]);
  if (__getOwnPropSymbols199)
    for (var prop of __getOwnPropSymbols199(b)) {
      if (__propIsEnum199.call(b, prop))
        __defNormalProp199(a, prop, b[prop]);
    }
  return a;
};
var Klaviyo = React199.forwardRef(
  (props, ref) => {
    return React199.createElement(
      "svg",
      __spreadValues199({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React199.createElement("path", { fill: "url(#a)", d: "M14.25 12H.75V3h13.5l-2.834 4.5z" }),
      React199.createElement("defs", null, React199.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 15.15,
          x2: -1.275,
          y1: 3.626,
          y2: 13.751,
          gradientUnits: "userSpaceOnUse"
        },
        React199.createElement("stop", { stopColor: "#ED7598" }),
        React199.createElement("stop", { offset: 0.456, stopColor: "#F75650" }),
        React199.createElement("stop", { offset: 1, stopColor: "#FFA661" })
      ))
    );
  }
);
Klaviyo.displayName = "Klaviyo";

// node_modules/@medusajs/icons/dist/esm/levels.js
var React200 = __toESM(require_react());
var __defProp200 = Object.defineProperty;
var __getOwnPropSymbols200 = Object.getOwnPropertySymbols;
var __hasOwnProp200 = Object.prototype.hasOwnProperty;
var __propIsEnum200 = Object.prototype.propertyIsEnumerable;
var __defNormalProp200 = (obj, key, value) => key in obj ? __defProp200(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues200 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp200.call(b, prop))
      __defNormalProp200(a, prop, b[prop]);
  if (__getOwnPropSymbols200)
    for (var prop of __getOwnPropSymbols200(b)) {
      if (__propIsEnum200.call(b, prop))
        __defNormalProp200(a, prop, b[prop]);
    }
  return a;
};
var __objRest189 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp200.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols200)
    for (var prop of __getOwnPropSymbols200(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum200.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Levels = React200.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest189(_b, ["color"]);
    return React200.createElement(
      "svg",
      __spreadValues200({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React200.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.389 7.722V2.833M13.056 7.722V1.056M10.389 7.722V1.944M7.722 7.722v-3.11M5.056 7.722V1.056M1.056 11.722 2.61 9.944l1.556 1.778v1.333a.89.89 0 0 1-.89.89H1.945a.89.89 0 0 1-.888-.89zM10.833 11.722l1.556-1.778 1.555 1.778v1.333a.89.89 0 0 1-.888.89h-1.334a.89.89 0 0 1-.889-.89z"
        }
      )
    );
  }
);
Levels.displayName = "Levels";

// node_modules/@medusajs/icons/dist/esm/lifebuoy.js
var React201 = __toESM(require_react());
var __defProp201 = Object.defineProperty;
var __getOwnPropSymbols201 = Object.getOwnPropertySymbols;
var __hasOwnProp201 = Object.prototype.hasOwnProperty;
var __propIsEnum201 = Object.prototype.propertyIsEnumerable;
var __defNormalProp201 = (obj, key, value) => key in obj ? __defProp201(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues201 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp201.call(b, prop))
      __defNormalProp201(a, prop, b[prop]);
  if (__getOwnPropSymbols201)
    for (var prop of __getOwnPropSymbols201(b)) {
      if (__propIsEnum201.call(b, prop))
        __defNormalProp201(a, prop, b[prop]);
    }
  return a;
};
var __objRest190 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp201.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols201)
    for (var prop of __getOwnPropSymbols201(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum201.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Lifebuoy = React201.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest190(_b, ["color"]);
    return React201.createElement(
      "svg",
      __spreadValues201({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React201.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React201.createElement("path", { d: "M4.572 6.407c.315-.847.989-1.52 1.835-1.836M8.593 4.572c.847.316 1.52.989 1.836 1.836M10.428 8.593a3.14 3.14 0 0 1-1.836 1.836M6.407 10.428A3.14 3.14 0 0 1 4.57 8.593M5.387 13.162a6.06 6.06 0 0 1-3.55-3.55M13.162 9.613a6.06 6.06 0 0 1-3.55 3.55M9.613 1.838a6.06 6.06 0 0 1 3.55 3.55M1.838 5.387a6.06 6.06 0 0 1 3.55-3.55" }),
        React201.createElement("path", { d: "m8.592 4.572 1.166-3.124A6.5 6.5 0 0 0 7.5 1.042c-.795 0-1.556.144-2.259.406l1.166 3.124c.34-.127.707-.196 1.092-.196s.753.07 1.093.197zM10.428 8.592l3.124 1.166a6.5 6.5 0 0 0 .406-2.258c0-.795-.144-1.556-.406-2.26l-3.124 1.167c.127.34.196.707.196 1.092s-.07.753-.197 1.093zM6.408 10.428l-1.166 3.124a6.5 6.5 0 0 0 2.259.406c.795 0 1.556-.144 2.259-.406l-1.166-3.124c-.34.127-.707.196-1.092.196s-.753-.07-1.093-.197zM4.573 6.408 1.448 5.242A6.5 6.5 0 0 0 1.043 7.5c0 .795.143 1.556.405 2.26l3.125-1.167a3.1 3.1 0 0 1-.197-1.092c0-.385.07-.753.197-1.093z" })
      ),
      React201.createElement("defs", null, React201.createElement("clipPath", { id: "a" }, React201.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Lifebuoy.displayName = "Lifebuoy";

// node_modules/@medusajs/icons/dist/esm/light-bulb-solid.js
var React202 = __toESM(require_react());
var __defProp202 = Object.defineProperty;
var __getOwnPropSymbols202 = Object.getOwnPropertySymbols;
var __hasOwnProp202 = Object.prototype.hasOwnProperty;
var __propIsEnum202 = Object.prototype.propertyIsEnumerable;
var __defNormalProp202 = (obj, key, value) => key in obj ? __defProp202(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues202 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp202.call(b, prop))
      __defNormalProp202(a, prop, b[prop]);
  if (__getOwnPropSymbols202)
    for (var prop of __getOwnPropSymbols202(b)) {
      if (__propIsEnum202.call(b, prop))
        __defNormalProp202(a, prop, b[prop]);
    }
  return a;
};
var __objRest191 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp202.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols202)
    for (var prop of __getOwnPropSymbols202(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum202.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var LightBulbSolid = React202.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest191(_b, ["color"]);
    return React202.createElement(
      "svg",
      __spreadValues202({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React202.createElement(
        "path",
        {
          fill: color,
          d: "M10.722 1.532A5.15 5.15 0 0 0 6.406.502C4.426.917 2.848 2.536 2.48 4.53c-.395 2.133.544 4.222 2.354 5.326v2.31a2.447 2.447 0 0 0 2.445 2.445h.444a2.447 2.447 0 0 0 2.445-2.444v-2.31A5.08 5.08 0 0 0 12.612 5.5a5.1 5.1 0 0 0-1.889-3.968m-3 11.746h-.444c-.534 0-.96-.386-1.066-.89h2.577c-.106.504-.533.89-1.066.89m1.111-2.222H6.167v-.89h2.666zm.916-5.53L8.167 7.11v1.057a.667.667 0 0 1-1.334 0V7.109L5.251 5.527a.667.667 0 1 1 .943-.943L7.501 5.89l1.307-1.306a.667.667 0 1 1 .943.943z"
        }
      )
    );
  }
);
LightBulbSolid.displayName = "LightBulbSolid";

// node_modules/@medusajs/icons/dist/esm/light-bulb.js
var React203 = __toESM(require_react());
var __defProp203 = Object.defineProperty;
var __getOwnPropSymbols203 = Object.getOwnPropertySymbols;
var __hasOwnProp203 = Object.prototype.hasOwnProperty;
var __propIsEnum203 = Object.prototype.propertyIsEnumerable;
var __defNormalProp203 = (obj, key, value) => key in obj ? __defProp203(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues203 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp203.call(b, prop))
      __defNormalProp203(a, prop, b[prop]);
  if (__getOwnPropSymbols203)
    for (var prop of __getOwnPropSymbols203(b)) {
      if (__propIsEnum203.call(b, prop))
        __defNormalProp203(a, prop, b[prop]);
    }
  return a;
};
var __objRest192 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp203.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols203)
    for (var prop of __getOwnPropSymbols203(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum203.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var LightBulb = React203.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest192(_b, ["color"]);
    return React203.createElement(
      "svg",
      __spreadValues203({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React203.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 9.5V6.833L5.722 5.056M7.5 6.833l1.778-1.777M5.5 11.722h4"
        }
      ),
      React203.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.944 5.5a4.45 4.45 0 0 0-5.402-4.344c-1.718.358-3.09 1.772-3.408 3.496A4.445 4.445 0 0 0 5.5 9.465v2.702c0 .982.796 1.777 1.778 1.777h.444c.982 0 1.778-.795 1.778-1.777V9.465A4.44 4.44 0 0 0 11.944 5.5M5.5 9.5h4"
        }
      )
    );
  }
);
LightBulb.displayName = "LightBulb";

// node_modules/@medusajs/icons/dist/esm/link.js
var React204 = __toESM(require_react());
var __defProp204 = Object.defineProperty;
var __getOwnPropSymbols204 = Object.getOwnPropertySymbols;
var __hasOwnProp204 = Object.prototype.hasOwnProperty;
var __propIsEnum204 = Object.prototype.propertyIsEnumerable;
var __defNormalProp204 = (obj, key, value) => key in obj ? __defProp204(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues204 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp204.call(b, prop))
      __defNormalProp204(a, prop, b[prop]);
  if (__getOwnPropSymbols204)
    for (var prop of __getOwnPropSymbols204(b)) {
      if (__propIsEnum204.call(b, prop))
        __defNormalProp204(a, prop, b[prop]);
    }
  return a;
};
var __objRest193 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp204.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols204)
    for (var prop of __getOwnPropSymbols204(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum204.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Link = React204.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest193(_b, ["color"]);
    return React204.createElement(
      "svg",
      __spreadValues204({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React204.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React204.createElement("path", { d: "m6.44 3.965 1.59-1.591a3.25 3.25 0 1 1 4.597 4.596l-1.591 1.59M3.964 6.44l-1.59 1.59a3.25 3.25 0 1 0 4.596 4.597l1.59-1.591M5.909 9.09 9.091 5.91" })
      ),
      React204.createElement("defs", null, React204.createElement("clipPath", { id: "a" }, React204.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Link.displayName = "Link";

// node_modules/@medusajs/icons/dist/esm/linkedin.js
var React205 = __toESM(require_react());
var __defProp205 = Object.defineProperty;
var __getOwnPropSymbols205 = Object.getOwnPropertySymbols;
var __hasOwnProp205 = Object.prototype.hasOwnProperty;
var __propIsEnum205 = Object.prototype.propertyIsEnumerable;
var __defNormalProp205 = (obj, key, value) => key in obj ? __defProp205(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues205 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp205.call(b, prop))
      __defNormalProp205(a, prop, b[prop]);
  if (__getOwnPropSymbols205)
    for (var prop of __getOwnPropSymbols205(b)) {
      if (__propIsEnum205.call(b, prop))
        __defNormalProp205(a, prop, b[prop]);
    }
  return a;
};
var Linkedin = React205.forwardRef(
  (props, ref) => {
    return React205.createElement(
      "svg",
      __spreadValues205({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React205.createElement(
        "path",
        {
          fill: "#0077B5",
          d: "M11.438.75H3.561A2.813 2.813 0 0 0 .75 3.563v7.874a2.813 2.813 0 0 0 2.813 2.813h7.874a2.81 2.81 0 0 0 2.813-2.812V3.561A2.81 2.81 0 0 0 11.438.75M5.25 11.438H3.563V5.25H5.25zm-.844-6.901a.99.99 0 0 1-.984-.992c0-.548.44-.993.984-.993s.985.445.985.993c0 .547-.44.992-.985.992m7.594 6.9h-1.687V8.285c0-1.894-2.25-1.75-2.25 0v3.153H6.375V5.25h1.688v.993C8.848 4.788 12 4.68 12 7.636z"
        }
      )
    );
  }
);
Linkedin.displayName = "Linkedin";

// node_modules/@medusajs/icons/dist/esm/list-bullet.js
var React206 = __toESM(require_react());
var __defProp206 = Object.defineProperty;
var __getOwnPropSymbols206 = Object.getOwnPropertySymbols;
var __hasOwnProp206 = Object.prototype.hasOwnProperty;
var __propIsEnum206 = Object.prototype.propertyIsEnumerable;
var __defNormalProp206 = (obj, key, value) => key in obj ? __defProp206(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues206 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp206.call(b, prop))
      __defNormalProp206(a, prop, b[prop]);
  if (__getOwnPropSymbols206)
    for (var prop of __getOwnPropSymbols206(b)) {
      if (__propIsEnum206.call(b, prop))
        __defNormalProp206(a, prop, b[prop]);
    }
  return a;
};
var __objRest194 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp206.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols206)
    for (var prop of __getOwnPropSymbols206(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum206.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ListBullet = React206.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest194(_b, ["color"]);
    return React206.createElement(
      "svg",
      __spreadValues206({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React206.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.833 9.5H13.5M6.833 12.611H13.5M6.833 3.278H13.5M6.833 6.389H13.5M2.833 4.611a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M2.833 10.833a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666"
        }
      )
    );
  }
);
ListBullet.displayName = "ListBullet";

// node_modules/@medusajs/icons/dist/esm/list-checkbox.js
var React207 = __toESM(require_react());
var __defProp207 = Object.defineProperty;
var __getOwnPropSymbols207 = Object.getOwnPropertySymbols;
var __hasOwnProp207 = Object.prototype.hasOwnProperty;
var __propIsEnum207 = Object.prototype.propertyIsEnumerable;
var __defNormalProp207 = (obj, key, value) => key in obj ? __defProp207(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues207 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp207.call(b, prop))
      __defNormalProp207(a, prop, b[prop]);
  if (__getOwnPropSymbols207)
    for (var prop of __getOwnPropSymbols207(b)) {
      if (__propIsEnum207.call(b, prop))
        __defNormalProp207(a, prop, b[prop]);
    }
  return a;
};
var __objRest195 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp207.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols207)
    for (var prop of __getOwnPropSymbols207(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum207.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ListCheckbox = React207.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest195(_b, ["color"]);
    return React207.createElement(
      "svg",
      __spreadValues207({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React207.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.611 4.167h5.333M8.611 10.833h5.333M1.495 4.514l1.208 1.208 3.02-3.926M4.611 9.055H2.39a.89.89 0 0 0-.889.89v2.221c0 .492.398.89.889.89H4.61c.491 0 .889-.398.889-.89V9.945a.89.89 0 0 0-.889-.889"
        }
      )
    );
  }
);
ListCheckbox.displayName = "ListCheckbox";

// node_modules/@medusajs/icons/dist/esm/list-tree.js
var React208 = __toESM(require_react());
var __defProp208 = Object.defineProperty;
var __getOwnPropSymbols208 = Object.getOwnPropertySymbols;
var __hasOwnProp208 = Object.prototype.hasOwnProperty;
var __propIsEnum208 = Object.prototype.propertyIsEnumerable;
var __defNormalProp208 = (obj, key, value) => key in obj ? __defProp208(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues208 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp208.call(b, prop))
      __defNormalProp208(a, prop, b[prop]);
  if (__getOwnPropSymbols208)
    for (var prop of __getOwnPropSymbols208(b)) {
      if (__propIsEnum208.call(b, prop))
        __defNormalProp208(a, prop, b[prop]);
    }
  return a;
};
var __objRest196 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp208.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols208)
    for (var prop of __getOwnPropSymbols208(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum208.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ListTree = React208.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest196(_b, ["color"]);
    return React208.createElement(
      "svg",
      __spreadValues208({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React208.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.278 2.253H9.056a.89.89 0 0 0-.89.889v2.222c0 .49.399.889.89.889h2.222c.49 0 .889-.398.889-.89V3.143a.89.89 0 0 0-.89-.89M11.278 9.364H9.056a.89.89 0 0 0-.89.889v2.222c0 .49.399.889.89.889h2.222c.49 0 .889-.398.889-.89v-2.221a.89.89 0 0 0-.89-.89M5.944 4.475H4.167a1.334 1.334 0 0 1-1.334-1.333V.919"
        }
      ),
      React208.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.944 11.586H4.167a1.334 1.334 0 0 1-1.334-1.333V2.919"
        }
      )
    );
  }
);
ListTree.displayName = "ListTree";

// node_modules/@medusajs/icons/dist/esm/loader.js
var React209 = __toESM(require_react());
var __defProp209 = Object.defineProperty;
var __getOwnPropSymbols209 = Object.getOwnPropertySymbols;
var __hasOwnProp209 = Object.prototype.hasOwnProperty;
var __propIsEnum209 = Object.prototype.propertyIsEnumerable;
var __defNormalProp209 = (obj, key, value) => key in obj ? __defProp209(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues209 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp209.call(b, prop))
      __defNormalProp209(a, prop, b[prop]);
  if (__getOwnPropSymbols209)
    for (var prop of __getOwnPropSymbols209(b)) {
      if (__propIsEnum209.call(b, prop))
        __defNormalProp209(a, prop, b[prop]);
    }
  return a;
};
var __objRest197 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp209.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols209)
    for (var prop of __getOwnPropSymbols209(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum209.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Loader = React209.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest197(_b, ["color"]);
    return React209.createElement(
      "svg",
      __spreadValues209({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React209.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React209.createElement("path", { d: "M7.5 1.056v2.222" }),
        React209.createElement("path", { d: "m12.057 2.943-1.571 1.571", opacity: 0.88 }),
        React209.createElement("path", { d: "M13.944 7.5h-2.222", opacity: 0.75 }),
        React209.createElement("path", { d: "m12.057 12.057-1.571-1.571", opacity: 0.63 }),
        React209.createElement("path", { d: "M7.5 13.945v-2.223", opacity: 0.5 }),
        React209.createElement("path", { d: "m2.943 12.057 1.571-1.571", opacity: 0.38 }),
        React209.createElement("path", { d: "M1.056 7.5h2.222", opacity: 0.25 }),
        React209.createElement("path", { d: "m2.943 2.943 1.571 1.571", opacity: 0.13 })
      ),
      React209.createElement("defs", null, React209.createElement("clipPath", { id: "a" }, React209.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Loader.displayName = "Loader";

// node_modules/@medusajs/icons/dist/esm/lock-closed-solid-mini.js
var React210 = __toESM(require_react());
var __defProp210 = Object.defineProperty;
var __getOwnPropSymbols210 = Object.getOwnPropertySymbols;
var __hasOwnProp210 = Object.prototype.hasOwnProperty;
var __propIsEnum210 = Object.prototype.propertyIsEnumerable;
var __defNormalProp210 = (obj, key, value) => key in obj ? __defProp210(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues210 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp210.call(b, prop))
      __defNormalProp210(a, prop, b[prop]);
  if (__getOwnPropSymbols210)
    for (var prop of __getOwnPropSymbols210(b)) {
      if (__propIsEnum210.call(b, prop))
        __defNormalProp210(a, prop, b[prop]);
    }
  return a;
};
var __objRest198 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp210.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols210)
    for (var prop of __getOwnPropSymbols210(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum210.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var LockClosedSolidMini = React210.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest198(_b, ["color"]);
    return React210.createElement(
      "svg",
      __spreadValues210({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React210.createElement(
        "path",
        {
          fill: color,
          d: "M10.389 7.5a.667.667 0 0 1-.667-.667V3.944A2.225 2.225 0 0 0 7.5 1.722a2.225 2.225 0 0 0-2.222 2.222v2.89a.667.667 0 0 1-1.333 0v-2.89A3.56 3.56 0 0 1 7.5.39a3.56 3.56 0 0 1 3.556 3.555v2.89a.667.667 0 0 1-.667.666"
        }
      ),
      React210.createElement(
        "path",
        {
          fill: color,
          d: "M10.833 6.167H4.167A2.446 2.446 0 0 0 1.722 8.61v3.556a2.446 2.446 0 0 0 2.445 2.444h6.666a2.446 2.446 0 0 0 2.445-2.444V8.61a2.446 2.446 0 0 0-2.445-2.444m-2.666 4.666a.667.667 0 0 1-1.334 0v-.889a.667.667 0 0 1 1.334 0z"
        }
      )
    );
  }
);
LockClosedSolidMini.displayName = "LockClosedSolidMini";

// node_modules/@medusajs/icons/dist/esm/lock-closed-solid.js
var React211 = __toESM(require_react());
var __defProp211 = Object.defineProperty;
var __getOwnPropSymbols211 = Object.getOwnPropertySymbols;
var __hasOwnProp211 = Object.prototype.hasOwnProperty;
var __propIsEnum211 = Object.prototype.propertyIsEnumerable;
var __defNormalProp211 = (obj, key, value) => key in obj ? __defProp211(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues211 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp211.call(b, prop))
      __defNormalProp211(a, prop, b[prop]);
  if (__getOwnPropSymbols211)
    for (var prop of __getOwnPropSymbols211(b)) {
      if (__propIsEnum211.call(b, prop))
        __defNormalProp211(a, prop, b[prop]);
    }
  return a;
};
var __objRest199 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp211.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols211)
    for (var prop of __getOwnPropSymbols211(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum211.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var LockClosedSolid = React211.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest199(_b, ["color"]);
    return React211.createElement(
      "svg",
      __spreadValues211({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React211.createElement(
        "path",
        {
          fill: color,
          d: "M10.389 7.5a.667.667 0 0 1-.667-.667V3.944A2.225 2.225 0 0 0 7.5 1.722a2.225 2.225 0 0 0-2.222 2.222v2.89a.667.667 0 0 1-1.334 0v-2.89A3.56 3.56 0 0 1 7.5.39a3.56 3.56 0 0 1 3.556 3.555v2.89a.667.667 0 0 1-.667.666"
        }
      ),
      React211.createElement(
        "path",
        {
          fill: color,
          d: "M10.833 6.167H4.167A2.446 2.446 0 0 0 1.722 8.61v3.556a2.446 2.446 0 0 0 2.445 2.444h6.666a2.446 2.446 0 0 0 2.445-2.444V8.61a2.446 2.446 0 0 0-2.445-2.444m-2.666 4.666a.667.667 0 0 1-1.334 0v-.889a.667.667 0 0 1 1.334 0z"
        }
      )
    );
  }
);
LockClosedSolid.displayName = "LockClosedSolid";

// node_modules/@medusajs/icons/dist/esm/lock-open-solid.js
var React212 = __toESM(require_react());
var __defProp212 = Object.defineProperty;
var __getOwnPropSymbols212 = Object.getOwnPropertySymbols;
var __hasOwnProp212 = Object.prototype.hasOwnProperty;
var __propIsEnum212 = Object.prototype.propertyIsEnumerable;
var __defNormalProp212 = (obj, key, value) => key in obj ? __defProp212(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues212 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp212.call(b, prop))
      __defNormalProp212(a, prop, b[prop]);
  if (__getOwnPropSymbols212)
    for (var prop of __getOwnPropSymbols212(b)) {
      if (__propIsEnum212.call(b, prop))
        __defNormalProp212(a, prop, b[prop]);
    }
  return a;
};
var __objRest200 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp212.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols212)
    for (var prop of __getOwnPropSymbols212(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum212.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var LockOpenSolid = React212.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest200(_b, ["color"]);
    return React212.createElement(
      "svg",
      __spreadValues212({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React212.createElement("g", { fill: color, clipPath: "url(#a)" }, React212.createElement("path", { d: "M6.833 7.5a.667.667 0 0 1-.666-.667V3.944a2.225 2.225 0 0 0-2.223-2.222 2.225 2.225 0 0 0-2.222 2.222v1.112a.667.667 0 0 1-1.333 0V3.944A3.56 3.56 0 0 1 3.944.39 3.56 3.56 0 0 1 7.5 3.944v2.89a.667.667 0 0 1-.667.666" }), React212.createElement("path", { d: "M12.167 6.167H5.5A2.446 2.446 0 0 0 3.056 8.61v3.556A2.446 2.446 0 0 0 5.5 14.61h6.667a2.446 2.446 0 0 0 2.444-2.444V8.61a2.446 2.446 0 0 0-2.444-2.444M9.5 10.833a.667.667 0 0 1-1.333 0v-.889a.667.667 0 0 1 1.333 0z" })),
      React212.createElement("defs", null, React212.createElement("clipPath", { id: "a" }, React212.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
LockOpenSolid.displayName = "LockOpenSolid";

// node_modules/@medusajs/icons/dist/esm/magnifier-alert.js
var React213 = __toESM(require_react());
var __defProp213 = Object.defineProperty;
var __getOwnPropSymbols213 = Object.getOwnPropertySymbols;
var __hasOwnProp213 = Object.prototype.hasOwnProperty;
var __propIsEnum213 = Object.prototype.propertyIsEnumerable;
var __defNormalProp213 = (obj, key, value) => key in obj ? __defProp213(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues213 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp213.call(b, prop))
      __defNormalProp213(a, prop, b[prop]);
  if (__getOwnPropSymbols213)
    for (var prop of __getOwnPropSymbols213(b)) {
      if (__propIsEnum213.call(b, prop))
        __defNormalProp213(a, prop, b[prop]);
    }
  return a;
};
var __objRest201 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp213.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols213)
    for (var prop of __getOwnPropSymbols213(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum213.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var MagnifierAlert = React213.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest201(_b, ["color"]);
    return React213.createElement(
      "svg",
      __spreadValues213({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React213.createElement(
        "path",
        {
          fill: "#212121",
          fillRule: "evenodd",
          d: "M11.551.951a1.64 1.64 0 0 0-2.769 0L6.175 5.068c-.692 1.092.094 2.515 1.385 2.515h.384a.75.75 0 0 0 0-1.5H7.56a.139.139 0 0 1-.118-.213l2.607-4.116a.14.14 0 0 1 .235 0l2.607 4.116a.139.139 0 0 1-.117.213h-.385a.75.75 0 0 0 0 1.5h.385c1.29 0 2.076-1.423 1.384-2.515zm-6.05 2.633a3.695 3.695 0 1 0 3.14 5.64.75.75 0 0 1 1.275.791 5 5 0 0 1-.25.367l3.031 3.032a.75.75 0 1 1-1.06 1.06l-3.033-3.031A5.195 5.195 0 1 1 5.758 2.09a.75.75 0 1 1-.072 1.498 4 4 0 0 0-.186-.005m4.666-.612a.75.75 0 0 1 .75.75V5.5a.75.75 0 1 1-1.5 0V3.722a.75.75 0 0 1 .75-.75M11 7.806a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
MagnifierAlert.displayName = "MagnifierAlert";

// node_modules/@medusajs/icons/dist/esm/magnifying-glass-mini.js
var React214 = __toESM(require_react());
var __defProp214 = Object.defineProperty;
var __getOwnPropSymbols214 = Object.getOwnPropertySymbols;
var __hasOwnProp214 = Object.prototype.hasOwnProperty;
var __propIsEnum214 = Object.prototype.propertyIsEnumerable;
var __defNormalProp214 = (obj, key, value) => key in obj ? __defProp214(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues214 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp214.call(b, prop))
      __defNormalProp214(a, prop, b[prop]);
  if (__getOwnPropSymbols214)
    for (var prop of __getOwnPropSymbols214(b)) {
      if (__propIsEnum214.call(b, prop))
        __defNormalProp214(a, prop, b[prop]);
    }
  return a;
};
var __objRest202 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp214.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols214)
    for (var prop of __getOwnPropSymbols214(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum214.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var MagnifyingGlassMini = React214.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest202(_b, ["color"]);
    return React214.createElement(
      "svg",
      __spreadValues214({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React214.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 13.056 9.53 9.53M6.389 10.833a4.444 4.444 0 1 0 0-8.888 4.444 4.444 0 0 0 0 8.888"
        }
      )
    );
  }
);
MagnifyingGlassMini.displayName = "MagnifyingGlassMini";

// node_modules/@medusajs/icons/dist/esm/magnifying-glass.js
var React215 = __toESM(require_react());
var __defProp215 = Object.defineProperty;
var __getOwnPropSymbols215 = Object.getOwnPropertySymbols;
var __hasOwnProp215 = Object.prototype.hasOwnProperty;
var __propIsEnum215 = Object.prototype.propertyIsEnumerable;
var __defNormalProp215 = (obj, key, value) => key in obj ? __defProp215(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues215 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp215.call(b, prop))
      __defNormalProp215(a, prop, b[prop]);
  if (__getOwnPropSymbols215)
    for (var prop of __getOwnPropSymbols215(b)) {
      if (__propIsEnum215.call(b, prop))
        __defNormalProp215(a, prop, b[prop]);
    }
  return a;
};
var __objRest203 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp215.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols215)
    for (var prop of __getOwnPropSymbols215(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum215.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var MagnifyingGlass = React215.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest203(_b, ["color"]);
    return React215.createElement(
      "svg",
      __spreadValues215({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React215.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 13.056 9.53 9.53M6.389 10.833a4.444 4.444 0 1 0 0-8.888 4.444 4.444 0 0 0 0 8.888"
        }
      )
    );
  }
);
MagnifyingGlass.displayName = "MagnifyingGlass";

// node_modules/@medusajs/icons/dist/esm/map-pin.js
var React216 = __toESM(require_react());
var __defProp216 = Object.defineProperty;
var __getOwnPropSymbols216 = Object.getOwnPropertySymbols;
var __hasOwnProp216 = Object.prototype.hasOwnProperty;
var __propIsEnum216 = Object.prototype.propertyIsEnumerable;
var __defNormalProp216 = (obj, key, value) => key in obj ? __defProp216(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues216 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp216.call(b, prop))
      __defNormalProp216(a, prop, b[prop]);
  if (__getOwnPropSymbols216)
    for (var prop of __getOwnPropSymbols216(b)) {
      if (__propIsEnum216.call(b, prop))
        __defNormalProp216(a, prop, b[prop]);
    }
  return a;
};
var __objRest204 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp216.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols216)
    for (var prop of __getOwnPropSymbols216(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum216.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var MapPin = React216.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest204(_b, ["color"]);
    return React216.createElement(
      "svg",
      __spreadValues216({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React216.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.437 4.814c0 2.319-3.937 6.464-3.937 6.464S3.563 7.134 3.563 4.814c0-2.378 2.035-3.758 3.937-3.758s3.937 1.38 3.937 3.758"
        }
      ),
      React216.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 6.167a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M13.056 13.945H1.944"
        }
      )
    );
  }
);
MapPin.displayName = "MapPin";

// node_modules/@medusajs/icons/dist/esm/map.js
var React217 = __toESM(require_react());
var __defProp217 = Object.defineProperty;
var __getOwnPropSymbols217 = Object.getOwnPropertySymbols;
var __hasOwnProp217 = Object.prototype.hasOwnProperty;
var __propIsEnum217 = Object.prototype.propertyIsEnumerable;
var __defNormalProp217 = (obj, key, value) => key in obj ? __defProp217(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues217 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp217.call(b, prop))
      __defNormalProp217(a, prop, b[prop]);
  if (__getOwnPropSymbols217)
    for (var prop of __getOwnPropSymbols217(b)) {
      if (__propIsEnum217.call(b, prop))
        __defNormalProp217(a, prop, b[prop]);
    }
  return a;
};
var __objRest205 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp217.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols217)
    for (var prop of __getOwnPropSymbols217(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum217.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Map = React217.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest205(_b, ["color"]);
    return React217.createElement(
      "svg",
      __spreadValues217({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React217.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React217.createElement("path", { d: "M5.056 1.982v9.333M9.944 3.685v9.333M1.752 2.679 4.802 2a.9.9 0 0 1 .497.032l4.402 1.601c.159.058.331.07.497.032l2.665-.592a.888.888 0 0 1 1.081.868v7.513c0 .417-.29.778-.696.867l-3.05.679a.9.9 0 0 1-.497-.032l-4.402-1.601a.9.9 0 0 0-.497-.032l-2.665.592a.89.89 0 0 1-1.081-.868V3.546c0-.417.29-.778.696-.867" })
      ),
      React217.createElement("defs", null, React217.createElement("clipPath", { id: "a" }, React217.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Map.displayName = "Map";

// node_modules/@medusajs/icons/dist/esm/mastercard.js
var React218 = __toESM(require_react());
var __defProp218 = Object.defineProperty;
var __getOwnPropSymbols218 = Object.getOwnPropertySymbols;
var __hasOwnProp218 = Object.prototype.hasOwnProperty;
var __propIsEnum218 = Object.prototype.propertyIsEnumerable;
var __defNormalProp218 = (obj, key, value) => key in obj ? __defProp218(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues218 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp218.call(b, prop))
      __defNormalProp218(a, prop, b[prop]);
  if (__getOwnPropSymbols218)
    for (var prop of __getOwnPropSymbols218(b)) {
      if (__propIsEnum218.call(b, prop))
        __defNormalProp218(a, prop, b[prop]);
    }
  return a;
};
var Mastercard = React218.forwardRef(
  (props, ref) => {
    return React218.createElement(
      "svg",
      __spreadValues218({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React218.createElement("path", { fill: "#FF5A00", d: "M9.524 3.815h-4.06v7.37h4.06z" }),
      React218.createElement(
        "path",
        {
          fill: "#EB001B",
          d: "M5.735 7.5c0-1.497.696-2.826 1.765-3.685a4.6 4.6 0 0 0-2.861-1.002C2.075 2.813 0 4.909 0 7.5s2.075 4.688 4.639 4.688A4.6 4.6 0 0 0 7.5 11.185 4.7 4.7 0 0 1 5.735 7.5"
        }
      ),
      React218.createElement(
        "path",
        {
          fill: "#F79E1B",
          d: "M15 7.5c0 2.591-2.075 4.688-4.639 4.688A4.6 4.6 0 0 1 7.5 11.185 4.68 4.68 0 0 0 9.265 7.5 4.72 4.72 0 0 0 7.5 3.815a4.58 4.58 0 0 1 2.86-1.002c2.565 0 4.64 2.11 4.64 4.687"
        }
      )
    );
  }
);
Mastercard.displayName = "Mastercard";

// node_modules/@medusajs/icons/dist/esm/media-play.js
var React219 = __toESM(require_react());
var __defProp219 = Object.defineProperty;
var __getOwnPropSymbols219 = Object.getOwnPropertySymbols;
var __hasOwnProp219 = Object.prototype.hasOwnProperty;
var __propIsEnum219 = Object.prototype.propertyIsEnumerable;
var __defNormalProp219 = (obj, key, value) => key in obj ? __defProp219(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues219 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp219.call(b, prop))
      __defNormalProp219(a, prop, b[prop]);
  if (__getOwnPropSymbols219)
    for (var prop of __getOwnPropSymbols219(b)) {
      if (__propIsEnum219.call(b, prop))
        __defNormalProp219(a, prop, b[prop]);
    }
  return a;
};
var __objRest206 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp219.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols219)
    for (var prop of __getOwnPropSymbols219(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum219.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var MediaPlay = React219.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest206(_b, ["color"]);
    return React219.createElement(
      "svg",
      __spreadValues219({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React219.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.162 2.058 12.6 6.73a.877.877 0 0 1 0 1.54l-8.438 4.672c-.594.33-1.329-.096-1.329-.77V2.828c0-.674.734-1.1 1.33-.77"
        }
      )
    );
  }
);
MediaPlay.displayName = "MediaPlay";

// node_modules/@medusajs/icons/dist/esm/medusa.js
var React220 = __toESM(require_react());
var __defProp220 = Object.defineProperty;
var __getOwnPropSymbols220 = Object.getOwnPropertySymbols;
var __hasOwnProp220 = Object.prototype.hasOwnProperty;
var __propIsEnum220 = Object.prototype.propertyIsEnumerable;
var __defNormalProp220 = (obj, key, value) => key in obj ? __defProp220(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues220 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp220.call(b, prop))
      __defNormalProp220(a, prop, b[prop]);
  if (__getOwnPropSymbols220)
    for (var prop of __getOwnPropSymbols220(b)) {
      if (__propIsEnum220.call(b, prop))
        __defNormalProp220(a, prop, b[prop]);
    }
  return a;
};
var Medusa = React220.forwardRef(
  (props, ref) => {
    return React220.createElement(
      "svg",
      __spreadValues220({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React220.createElement(
        "path",
        {
          fill: "#18181B",
          d: "M12.184 2.941 9.127 1.183a3.22 3.22 0 0 0-3.226 0L2.83 2.94a3.25 3.25 0 0 0-1.606 2.786V9.26c0 1.153.62 2.209 1.606 2.786l3.057 1.772c1 .577 2.226.577 3.226 0l3.057-1.772a3.2 3.2 0 0 0 1.606-2.786V5.727c.028-1.14-.592-2.209-1.592-2.786m-4.677 7.697A3.14 3.14 0 0 1 4.365 7.5a3.14 3.14 0 0 1 3.142-3.138c1.733 0 3.155 1.407 3.155 3.138a3.145 3.145 0 0 1-3.155 3.138"
        }
      )
    );
  }
);
Medusa.displayName = "Medusa";

// node_modules/@medusajs/icons/dist/esm/meta.js
var React221 = __toESM(require_react());
var __defProp221 = Object.defineProperty;
var __getOwnPropSymbols221 = Object.getOwnPropertySymbols;
var __hasOwnProp221 = Object.prototype.hasOwnProperty;
var __propIsEnum221 = Object.prototype.propertyIsEnumerable;
var __defNormalProp221 = (obj, key, value) => key in obj ? __defProp221(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues221 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp221.call(b, prop))
      __defNormalProp221(a, prop, b[prop]);
  if (__getOwnPropSymbols221)
    for (var prop of __getOwnPropSymbols221(b)) {
      if (__propIsEnum221.call(b, prop))
        __defNormalProp221(a, prop, b[prop]);
    }
  return a;
};
var Meta = React221.forwardRef(
  (props, ref) => {
    return React221.createElement(
      "svg",
      __spreadValues221({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React221.createElement("g", { clipPath: "url(#a)" }, React221.createElement(
        "path",
        {
          fill: "#0467DF",
          d: "M4.322 2.519c-1.23 0-2.302.8-3.044 1.946C.44 5.755 0 7.427 0 9.03c0 .441.044.855.131 1.233q.065.274.166.537.097.248.232.476c.435.724 1.136 1.204 2.245 1.204.936 0 1.646-.419 2.479-1.527.474-.633.715-1.016 1.664-2.7l.472-.837.117-.203.114.187 1.345 2.247c.453.757 1.04 1.598 1.544 2.072.653.616 1.245.762 1.912.762.672 0 1.173-.222 1.535-.527a2.3 2.3 0 0 0 .506-.608c.339-.587.538-1.33.538-2.34 0-1.7-.426-3.349-1.303-4.657-.8-1.195-1.848-1.831-2.947-1.831-.654 0-1.305.292-1.908.817-.408.357-.786.807-1.138 1.282-.43-.547-.834-.967-1.223-1.285-.74-.604-1.447-.815-2.16-.815m6.35 1.283c.717 0 1.367.474 1.87 1.25.707 1.092 1.03 2.621 1.03 4 0 .967-.23 1.812-1.15 1.812-.363 0-.642-.144-1.04-.628-.31-.375-.84-1.173-1.77-2.723l-.386-.643q-.376-.63-.784-1.237c.044-.068.088-.14.132-.205.7-1.042 1.323-1.626 2.098-1.626m-6.376.346c.79 0 1.286.494 1.672.903.192.205.46.545.771.987l-.637.98c-.473.726-1.176 1.885-1.773 2.71-.745 1.03-1.131 1.136-1.554 1.136a.99.99 0 0 1-.864-.496c-.165-.267-.29-.707-.29-1.28 0-1.387.393-2.833 1.037-3.804.284-.43.603-.766.958-.958.208-.116.442-.177.68-.178"
        }
      )),
      React221.createElement("defs", null, React221.createElement("clipPath", { id: "a" }, React221.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Meta.displayName = "Meta";

// node_modules/@medusajs/icons/dist/esm/minus-mini.js
var React222 = __toESM(require_react());
var __defProp222 = Object.defineProperty;
var __getOwnPropSymbols222 = Object.getOwnPropertySymbols;
var __hasOwnProp222 = Object.prototype.hasOwnProperty;
var __propIsEnum222 = Object.prototype.propertyIsEnumerable;
var __defNormalProp222 = (obj, key, value) => key in obj ? __defProp222(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues222 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp222.call(b, prop))
      __defNormalProp222(a, prop, b[prop]);
  if (__getOwnPropSymbols222)
    for (var prop of __getOwnPropSymbols222(b)) {
      if (__propIsEnum222.call(b, prop))
        __defNormalProp222(a, prop, b[prop]);
    }
  return a;
};
var __objRest207 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp222.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols222)
    for (var prop of __getOwnPropSymbols222(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum222.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var MinusMini = React222.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest207(_b, ["color"]);
    return React222.createElement(
      "svg",
      __spreadValues222({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React222.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.5 7.5h10"
        }
      )
    );
  }
);
MinusMini.displayName = "MinusMini";

// node_modules/@medusajs/icons/dist/esm/minus.js
var React223 = __toESM(require_react());
var __defProp223 = Object.defineProperty;
var __getOwnPropSymbols223 = Object.getOwnPropertySymbols;
var __hasOwnProp223 = Object.prototype.hasOwnProperty;
var __propIsEnum223 = Object.prototype.propertyIsEnumerable;
var __defNormalProp223 = (obj, key, value) => key in obj ? __defProp223(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues223 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp223.call(b, prop))
      __defNormalProp223(a, prop, b[prop]);
  if (__getOwnPropSymbols223)
    for (var prop of __getOwnPropSymbols223(b)) {
      if (__propIsEnum223.call(b, prop))
        __defNormalProp223(a, prop, b[prop]);
    }
  return a;
};
var __objRest208 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp223.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols223)
    for (var prop of __getOwnPropSymbols223(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum223.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Minus = React223.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest208(_b, ["color"]);
    return React223.createElement(
      "svg",
      __spreadValues223({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React223.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.5 7.5h10"
        }
      )
    );
  }
);
Minus.displayName = "Minus";

// node_modules/@medusajs/icons/dist/esm/moon-solid.js
var React224 = __toESM(require_react());
var __defProp224 = Object.defineProperty;
var __getOwnPropSymbols224 = Object.getOwnPropertySymbols;
var __hasOwnProp224 = Object.prototype.hasOwnProperty;
var __propIsEnum224 = Object.prototype.propertyIsEnumerable;
var __defNormalProp224 = (obj, key, value) => key in obj ? __defProp224(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues224 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp224.call(b, prop))
      __defNormalProp224(a, prop, b[prop]);
  if (__getOwnPropSymbols224)
    for (var prop of __getOwnPropSymbols224(b)) {
      if (__propIsEnum224.call(b, prop))
        __defNormalProp224(a, prop, b[prop]);
    }
  return a;
};
var __objRest209 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp224.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols224)
    for (var prop of __getOwnPropSymbols224(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum224.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var MoonSolid = React224.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest209(_b, ["color"]);
    return React224.createElement(
      "svg",
      __spreadValues224({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React224.createElement("g", { clipPath: "url(#a)" }, React224.createElement(
        "path",
        {
          fill: color,
          d: "M14.349 8.587a.665.665 0 0 0-.745-.033 4.9 4.9 0 0 1-2.548.723 4.894 4.894 0 0 1-4.89-4.889c0-1.019.315-1.997.91-2.832A.667.667 0 0 0 6.41.513 7.11 7.11 0 0 0 .611 7.5c0 3.92 3.19 7.111 7.111 7.111a7.11 7.11 0 0 0 6.876-5.32.67.67 0 0 0-.25-.704"
        }
      )),
      React224.createElement("defs", null, React224.createElement("clipPath", { id: "a" }, React224.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
MoonSolid.displayName = "MoonSolid";

// node_modules/@medusajs/icons/dist/esm/moon.js
var React225 = __toESM(require_react());
var __defProp225 = Object.defineProperty;
var __getOwnPropSymbols225 = Object.getOwnPropertySymbols;
var __hasOwnProp225 = Object.prototype.hasOwnProperty;
var __propIsEnum225 = Object.prototype.propertyIsEnumerable;
var __defNormalProp225 = (obj, key, value) => key in obj ? __defProp225(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues225 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp225.call(b, prop))
      __defNormalProp225(a, prop, b[prop]);
  if (__getOwnPropSymbols225)
    for (var prop of __getOwnPropSymbols225(b)) {
      if (__propIsEnum225.call(b, prop))
        __defNormalProp225(a, prop, b[prop]);
    }
  return a;
};
var __objRest210 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp225.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols225)
    for (var prop of __getOwnPropSymbols225(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum225.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Moon = React225.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest210(_b, ["color"]);
    return React225.createElement(
      "svg",
      __spreadValues225({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React225.createElement("g", { clipPath: "url(#a)" }, React225.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.056 9.945A5.555 5.555 0 0 1 5.5 4.389c0-1.202.385-2.31 1.033-3.22a6.443 6.443 0 0 0 1.19 12.776c2.997 0 5.509-2.05 6.23-4.822a5.5 5.5 0 0 1-2.897.822"
        }
      )),
      React225.createElement("defs", null, React225.createElement("clipPath", { id: "a" }, React225.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Moon.displayName = "Moon";

// node_modules/@medusajs/icons/dist/esm/newspaper.js
var React226 = __toESM(require_react());
var __defProp226 = Object.defineProperty;
var __getOwnPropSymbols226 = Object.getOwnPropertySymbols;
var __hasOwnProp226 = Object.prototype.hasOwnProperty;
var __propIsEnum226 = Object.prototype.propertyIsEnumerable;
var __defNormalProp226 = (obj, key, value) => key in obj ? __defProp226(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues226 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp226.call(b, prop))
      __defNormalProp226(a, prop, b[prop]);
  if (__getOwnPropSymbols226)
    for (var prop of __getOwnPropSymbols226(b)) {
      if (__propIsEnum226.call(b, prop))
        __defNormalProp226(a, prop, b[prop]);
    }
  return a;
};
var __objRest211 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp226.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols226)
    for (var prop of __getOwnPropSymbols226(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum226.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Newspaper = React226.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest211(_b, ["color"]);
    return React226.createElement(
      "svg",
      __spreadValues226({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React226.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React226.createElement("path", { d: "M2.611 13.945a1.556 1.556 0 0 1-1.555-1.556V8.611c0-.245.199-.444.444-.444h.444" }),
        React226.createElement("path", { d: "M4.167 12.389c0 .859-.697 1.556-1.556 1.556h9.556c.982 0 1.777-.796 1.777-1.778V2.833c0-.982-.795-1.777-1.777-1.777H5.944c-.982 0-1.777.795-1.777 1.777z" }),
        React226.createElement("path", { d: "M11.278 3.722H6.833v2.222h4.445zM11.278 8.611H6.833M11.278 11.278H6.833" })
      ),
      React226.createElement("defs", null, React226.createElement("clipPath", { id: "a" }, React226.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Newspaper.displayName = "Newspaper";

// node_modules/@medusajs/icons/dist/esm/next-js.js
var React227 = __toESM(require_react());
var __defProp227 = Object.defineProperty;
var __getOwnPropSymbols227 = Object.getOwnPropertySymbols;
var __hasOwnProp227 = Object.prototype.hasOwnProperty;
var __propIsEnum227 = Object.prototype.propertyIsEnumerable;
var __defNormalProp227 = (obj, key, value) => key in obj ? __defProp227(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues227 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp227.call(b, prop))
      __defNormalProp227(a, prop, b[prop]);
  if (__getOwnPropSymbols227)
    for (var prop of __getOwnPropSymbols227(b)) {
      if (__propIsEnum227.call(b, prop))
        __defNormalProp227(a, prop, b[prop]);
    }
  return a;
};
var NextJs = React227.forwardRef(
  (props, ref) => {
    return React227.createElement(
      "svg",
      __spreadValues227({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React227.createElement(
        "path",
        {
          fill: "#000",
          d: "M7.058.76c-.029.003-.12.012-.204.018-1.915.173-3.71 1.207-4.846 2.795A6.7 6.7 0 0 0 .818 6.52c-.054.37-.06.48-.06.982 0 .503.006.612.06.982a6.77 6.77 0 0 0 4.612 5.449c.438.14.9.237 1.424.295.204.022 1.088.022 1.292 0a6.8 6.8 0 0 0 2.43-.71c.115-.06.138-.076.122-.089-.01-.008-.505-.67-1.098-1.472l-1.078-1.457-1.351-2a192 192 0 0 0-1.36-1.998c-.006-.001-.011.887-.014 1.972-.004 1.9-.005 1.976-.03 2.02a.24.24 0 0 1-.115.12c-.042.022-.08.026-.278.026h-.228l-.06-.038a.25.25 0 0 1-.09-.097l-.027-.059.003-2.643.004-2.644.04-.052a.4.4 0 0 1 .098-.08c.054-.027.075-.03.303-.03.27 0 .314.011.384.088.02.02.751 1.123 1.627 2.45.875 1.328 2.072 3.14 2.66 4.03l1.068 1.618.054-.036a7 7 0 0 0 1.385-1.215 6.7 6.7 0 0 0 1.587-3.448c.054-.37.06-.48.06-.982s-.006-.611-.06-.982A6.77 6.77 0 0 0 9.57 1.071 7 7 0 0 0 8.166.777 17 17 0 0 0 7.058.76m2.76 4.079a.27.27 0 0 1 .134.155c.01.034.013.767.01 2.42l-.003 2.37-.418-.641-.42-.641V6.779c0-1.114.006-1.74.014-1.77a.27.27 0 0 1 .13-.166c.054-.028.074-.03.281-.03.195 0 .23.002.273.026"
        }
      ),
      React227.createElement(
        "path",
        {
          fill: "#000",
          d: "M11.09 13.21c-.046.03-.06.05-.02.027.029-.017.076-.053.069-.054a.3.3 0 0 0-.05.027m-.091.06q-.037.027.005.005c.016-.008.029-.017.029-.02 0-.01-.007-.008-.034.015m-.066.04q-.037.027.005.005c.016-.008.03-.018.03-.02 0-.01-.008-.008-.035.014m-.066.039q-.037.027.005.005c.016-.008.03-.017.03-.02 0-.01-.007-.008-.035.015m-.1.053c-.05.026-.048.037.002.012a.1.1 0 0 0 .04-.027c0-.009-.001-.008-.042.015"
        }
      )
    );
  }
);
NextJs.displayName = "NextJs";

// node_modules/@medusajs/icons/dist/esm/open-rect-arrow-out.js
var React228 = __toESM(require_react());
var __defProp228 = Object.defineProperty;
var __getOwnPropSymbols228 = Object.getOwnPropertySymbols;
var __hasOwnProp228 = Object.prototype.hasOwnProperty;
var __propIsEnum228 = Object.prototype.propertyIsEnumerable;
var __defNormalProp228 = (obj, key, value) => key in obj ? __defProp228(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues228 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp228.call(b, prop))
      __defNormalProp228(a, prop, b[prop]);
  if (__getOwnPropSymbols228)
    for (var prop of __getOwnPropSymbols228(b)) {
      if (__propIsEnum228.call(b, prop))
        __defNormalProp228(a, prop, b[prop]);
    }
  return a;
};
var __objRest212 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp228.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols228)
    for (var prop of __getOwnPropSymbols228(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum228.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var OpenRectArrowOut = React228.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest212(_b, ["color"]);
    return React228.createElement(
      "svg",
      __spreadValues228({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React228.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 1.944h3.11c.983 0 1.779.796 1.779 1.778v7.556c0 .982-.796 1.777-1.778 1.777H8.167M5.056 4.389l-3.112 3.11 3.112 3.112M1.944 7.5h6.667"
        }
      )
    );
  }
);
OpenRectArrowOut.displayName = "OpenRectArrowOut";

// node_modules/@medusajs/icons/dist/esm/paper-clip.js
var React229 = __toESM(require_react());
var __defProp229 = Object.defineProperty;
var __getOwnPropSymbols229 = Object.getOwnPropertySymbols;
var __hasOwnProp229 = Object.prototype.hasOwnProperty;
var __propIsEnum229 = Object.prototype.propertyIsEnumerable;
var __defNormalProp229 = (obj, key, value) => key in obj ? __defProp229(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues229 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp229.call(b, prop))
      __defNormalProp229(a, prop, b[prop]);
  if (__getOwnPropSymbols229)
    for (var prop of __getOwnPropSymbols229(b)) {
      if (__propIsEnum229.call(b, prop))
        __defNormalProp229(a, prop, b[prop]);
    }
  return a;
};
var __objRest213 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp229.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols229)
    for (var prop of __getOwnPropSymbols229(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum229.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PaperClip = React229.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest213(_b, ["color"]);
    return React229.createElement(
      "svg",
      __spreadValues229({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React229.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.264 4.32 5.022 8.562a1.333 1.333 0 1 0 1.885 1.886l4.4-4.4a2.666 2.666 0 1 0-3.771-3.772l-4.4 4.4a4 4 0 0 0 5.656 5.657l4.243-4.243"
        }
      )
    );
  }
);
PaperClip.displayName = "PaperClip";

// node_modules/@medusajs/icons/dist/esm/party.js
var React230 = __toESM(require_react());
var __defProp230 = Object.defineProperty;
var __getOwnPropSymbols230 = Object.getOwnPropertySymbols;
var __hasOwnProp230 = Object.prototype.hasOwnProperty;
var __propIsEnum230 = Object.prototype.propertyIsEnumerable;
var __defNormalProp230 = (obj, key, value) => key in obj ? __defProp230(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues230 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp230.call(b, prop))
      __defNormalProp230(a, prop, b[prop]);
  if (__getOwnPropSymbols230)
    for (var prop of __getOwnPropSymbols230(b)) {
      if (__propIsEnum230.call(b, prop))
        __defNormalProp230(a, prop, b[prop]);
    }
  return a;
};
var __objRest214 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp230.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols230)
    for (var prop of __getOwnPropSymbols230(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum230.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Party = React230.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest214(_b, ["color"]);
    return React230.createElement(
      "svg",
      __spreadValues230({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React230.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m2.433 11.549 2.264-7.44a.817.817 0 0 1 1.36-.34l5.176 5.176a.817.817 0 0 1-.34 1.36l-7.441 2.264a.817.817 0 0 1-1.02-1.02zM5.724 11.876 3.95 6.56M8.6 11 6.254 3.967"
        }
      ),
      React230.createElement(
        "path",
        {
          fill: color,
          d: "m13.824 2.185-.773-.257-.258-.773c-.083-.25-.497-.25-.58 0l-.259.773-.772.257a.307.307 0 0 0 0 .582l.772.257.258.773a.306.306 0 0 0 .58 0l.258-.773.773-.257a.307.307 0 0 0 0-.582M10.563 5.05a.613.613 0 1 0 0-1.225.613.613 0 0 0 0 1.225"
        }
      ),
      React230.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.317 2.959c.15-.109.48-.38.672-.856.25-.623.096-1.178.045-1.34M12.042 6.683c.108-.15.38-.48.855-.672a2 2 0 0 1 1.34-.045"
        }
      )
    );
  }
);
Party.displayName = "Party";

// node_modules/@medusajs/icons/dist/esm/pause-solid.js
var React231 = __toESM(require_react());
var __defProp231 = Object.defineProperty;
var __getOwnPropSymbols231 = Object.getOwnPropertySymbols;
var __hasOwnProp231 = Object.prototype.hasOwnProperty;
var __propIsEnum231 = Object.prototype.propertyIsEnumerable;
var __defNormalProp231 = (obj, key, value) => key in obj ? __defProp231(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues231 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp231.call(b, prop))
      __defNormalProp231(a, prop, b[prop]);
  if (__getOwnPropSymbols231)
    for (var prop of __getOwnPropSymbols231(b)) {
      if (__propIsEnum231.call(b, prop))
        __defNormalProp231(a, prop, b[prop]);
    }
  return a;
};
var __objRest215 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp231.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols231)
    for (var prop of __getOwnPropSymbols231(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum231.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PauseSolid = React231.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest215(_b, ["color"]);
    return React231.createElement(
      "svg",
      __spreadValues231({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React231.createElement(
        "path",
        {
          fill: color,
          d: "M4.167 1.278H2.833c-.859 0-1.555.696-1.555 1.555v9.334c0 .859.696 1.555 1.555 1.555h1.334c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M12.167 1.278h-1.334c-.859 0-1.555.696-1.555 1.555v9.334c0 .859.696 1.555 1.555 1.555h1.334c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555"
        }
      )
    );
  }
);
PauseSolid.displayName = "PauseSolid";

// node_modules/@medusajs/icons/dist/esm/pen-plus.js
var React232 = __toESM(require_react());
var __defProp232 = Object.defineProperty;
var __getOwnPropSymbols232 = Object.getOwnPropertySymbols;
var __hasOwnProp232 = Object.prototype.hasOwnProperty;
var __propIsEnum232 = Object.prototype.propertyIsEnumerable;
var __defNormalProp232 = (obj, key, value) => key in obj ? __defProp232(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues232 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp232.call(b, prop))
      __defNormalProp232(a, prop, b[prop]);
  if (__getOwnPropSymbols232)
    for (var prop of __getOwnPropSymbols232(b)) {
      if (__propIsEnum232.call(b, prop))
        __defNormalProp232(a, prop, b[prop]);
    }
  return a;
};
var __objRest216 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp232.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols232)
    for (var prop of __getOwnPropSymbols232(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum232.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PenPlus = React232.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest216(_b, ["color"]);
    return React232.createElement(
      "svg",
      __spreadValues232({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React232.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.389 13.5s3.199-.505 4.04-1.347c.843-.841 6.514-6.513 6.514-6.513a1.904 1.904 0 1 0-2.694-2.693L3.736 9.46c-.841.842-1.346 4.04-1.346 4.04zM3.278 1.056V5.5M5.5 3.278H1.056"
        }
      )
    );
  }
);
PenPlus.displayName = "PenPlus";

// node_modules/@medusajs/icons/dist/esm/pencil-square-solid.js
var React233 = __toESM(require_react());
var __defProp233 = Object.defineProperty;
var __getOwnPropSymbols233 = Object.getOwnPropertySymbols;
var __hasOwnProp233 = Object.prototype.hasOwnProperty;
var __propIsEnum233 = Object.prototype.propertyIsEnumerable;
var __defNormalProp233 = (obj, key, value) => key in obj ? __defProp233(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues233 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp233.call(b, prop))
      __defNormalProp233(a, prop, b[prop]);
  if (__getOwnPropSymbols233)
    for (var prop of __getOwnPropSymbols233(b)) {
      if (__propIsEnum233.call(b, prop))
        __defNormalProp233(a, prop, b[prop]);
    }
  return a;
};
var __objRest217 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp233.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols233)
    for (var prop of __getOwnPropSymbols233(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum233.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PencilSquareSolid = React233.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest217(_b, ["color"]);
    return React233.createElement(
      "svg",
      __spreadValues233({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React233.createElement("g", { fill: color, clipPath: "url(#a)" }, React233.createElement("path", { d: "M6.833 2.611H1.056a.667.667 0 0 1 0-1.333h5.777a.667.667 0 0 1 0 1.333M3.278 5.722H1.056a.667.667 0 0 1 0-1.333h2.222a.667.667 0 0 1 0 1.333M10.535 2.032 3.593 8.973c-.767.768-1.245 3.028-1.416 3.964a.668.668 0 0 0 .775.776c.936-.17 3.196-.648 3.964-1.416l6.941-6.942a2.353 2.353 0 0 0 0-3.322c-.887-.888-2.434-.888-3.322-.001" })),
      React233.createElement("defs", null, React233.createElement("clipPath", { id: "a" }, React233.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
PencilSquareSolid.displayName = "PencilSquareSolid";

// node_modules/@medusajs/icons/dist/esm/pencil-square.js
var React234 = __toESM(require_react());
var __defProp234 = Object.defineProperty;
var __getOwnPropSymbols234 = Object.getOwnPropertySymbols;
var __hasOwnProp234 = Object.prototype.hasOwnProperty;
var __propIsEnum234 = Object.prototype.propertyIsEnumerable;
var __defNormalProp234 = (obj, key, value) => key in obj ? __defProp234(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues234 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp234.call(b, prop))
      __defNormalProp234(a, prop, b[prop]);
  if (__getOwnPropSymbols234)
    for (var prop of __getOwnPropSymbols234(b)) {
      if (__propIsEnum234.call(b, prop))
        __defNormalProp234(a, prop, b[prop]);
    }
  return a;
};
var __objRest218 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp234.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols234)
    for (var prop of __getOwnPropSymbols234(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum234.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PencilSquare = React234.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest218(_b, ["color"]);
    return React234.createElement(
      "svg",
      __spreadValues234({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React234.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React234.createElement("path", { d: "M2.833 13.056s3.2-.505 4.041-1.347l6.513-6.513a1.904 1.904 0 1 0-2.693-2.693L4.18 9.016c-.842.841-1.347 4.04-1.347 4.04zM6.833 1.944H1.056M3.278 5.056H1.056" })
      ),
      React234.createElement("defs", null, React234.createElement("clipPath", { id: "a" }, React234.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
PencilSquare.displayName = "PencilSquare";

// node_modules/@medusajs/icons/dist/esm/pencil.js
var React235 = __toESM(require_react());
var __defProp235 = Object.defineProperty;
var __getOwnPropSymbols235 = Object.getOwnPropertySymbols;
var __hasOwnProp235 = Object.prototype.hasOwnProperty;
var __propIsEnum235 = Object.prototype.propertyIsEnumerable;
var __defNormalProp235 = (obj, key, value) => key in obj ? __defProp235(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues235 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp235.call(b, prop))
      __defNormalProp235(a, prop, b[prop]);
  if (__getOwnPropSymbols235)
    for (var prop of __getOwnPropSymbols235(b)) {
      if (__propIsEnum235.call(b, prop))
        __defNormalProp235(a, prop, b[prop]);
    }
  return a;
};
var __objRest219 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp235.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols235)
    for (var prop of __getOwnPropSymbols235(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum235.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Pencil = React235.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest219(_b, ["color"]);
    return React235.createElement(
      "svg",
      __spreadValues235({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React235.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m11.903 6.236.985-.986c.521-.52.521-1.365 0-1.885l-1.252-1.253a1.333 1.333 0 0 0-1.885 0l-.986.986zM7.43 4.43 3.187 8.676c-.222.222-.381.5-.462.804l-1.002 3.798 3.798-1.002c.304-.08.582-.24.804-.462l4.244-4.245M8.986 5.986 5.07 9.904"
        }
      )
    );
  }
);
Pencil.displayName = "Pencil";

// node_modules/@medusajs/icons/dist/esm/phone.js
var React236 = __toESM(require_react());
var __defProp236 = Object.defineProperty;
var __getOwnPropSymbols236 = Object.getOwnPropertySymbols;
var __hasOwnProp236 = Object.prototype.hasOwnProperty;
var __propIsEnum236 = Object.prototype.propertyIsEnumerable;
var __defNormalProp236 = (obj, key, value) => key in obj ? __defProp236(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues236 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp236.call(b, prop))
      __defNormalProp236(a, prop, b[prop]);
  if (__getOwnPropSymbols236)
    for (var prop of __getOwnPropSymbols236(b)) {
      if (__propIsEnum236.call(b, prop))
        __defNormalProp236(a, prop, b[prop]);
    }
  return a;
};
var __objRest220 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp236.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols236)
    for (var prop of __getOwnPropSymbols236(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum236.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Phone = React236.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest220(_b, ["color"]);
    return React236.createElement(
      "svg",
      __spreadValues236({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React236.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.389 1.056H4.61c-.982 0-1.778.796-1.778 1.777v9.334c0 .982.796 1.778 1.778 1.778h5.778c.982 0 1.778-.796 1.778-1.778V2.833c0-.981-.796-1.777-1.778-1.777"
        }
      ),
      React236.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.389 1.056v.889H8.61v-.89M6.389 11.256H8.61"
        }
      )
    );
  }
);
Phone.displayName = "Phone";

// node_modules/@medusajs/icons/dist/esm/photo-solid.js
var React237 = __toESM(require_react());
var __defProp237 = Object.defineProperty;
var __getOwnPropSymbols237 = Object.getOwnPropertySymbols;
var __hasOwnProp237 = Object.prototype.hasOwnProperty;
var __propIsEnum237 = Object.prototype.propertyIsEnumerable;
var __defNormalProp237 = (obj, key, value) => key in obj ? __defProp237(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues237 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp237.call(b, prop))
      __defNormalProp237(a, prop, b[prop]);
  if (__getOwnPropSymbols237)
    for (var prop of __getOwnPropSymbols237(b)) {
      if (__propIsEnum237.call(b, prop))
        __defNormalProp237(a, prop, b[prop]);
    }
  return a;
};
var __objRest221 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp237.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols237)
    for (var prop of __getOwnPropSymbols237(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum237.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PhotoSolid = React237.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest221(_b, ["color"]);
    return React237.createElement(
      "svg",
      __spreadValues237({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React237.createElement("g", { fill: color, clipPath: "url(#a)" }, React237.createElement("path", { d: "M11.228 6.952a2.45 2.45 0 0 0-3.457 0l-5.545 5.546c.19.07.393.113.607.113h9.334c.982 0 1.777-.796 1.777-1.778V9.668z" }), React237.createElement("path", { d: "M12.167 13.278H2.833A2.446 2.446 0 0 1 .39 10.833V4.167a2.446 2.446 0 0 1 2.444-2.445h9.334a2.446 2.446 0 0 1 2.444 2.445v6.666a2.446 2.446 0 0 1-2.444 2.445M2.833 3.056c-.612 0-1.11.498-1.11 1.11v6.667c0 .613.498 1.111 1.11 1.111h9.334c.612 0 1.11-.498 1.11-1.11V4.166c0-.613-.498-1.111-1.11-1.111z" }), React237.createElement("path", { d: "M4.611 7.056a1.111 1.111 0 1 0 0-2.223 1.111 1.111 0 0 0 0 2.223" })),
      React237.createElement("defs", null, React237.createElement("clipPath", { id: "a" }, React237.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
PhotoSolid.displayName = "PhotoSolid";

// node_modules/@medusajs/icons/dist/esm/photo.js
var React238 = __toESM(require_react());
var __defProp238 = Object.defineProperty;
var __getOwnPropSymbols238 = Object.getOwnPropertySymbols;
var __hasOwnProp238 = Object.prototype.hasOwnProperty;
var __propIsEnum238 = Object.prototype.propertyIsEnumerable;
var __defNormalProp238 = (obj, key, value) => key in obj ? __defProp238(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues238 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp238.call(b, prop))
      __defNormalProp238(a, prop, b[prop]);
  if (__getOwnPropSymbols238)
    for (var prop of __getOwnPropSymbols238(b)) {
      if (__propIsEnum238.call(b, prop))
        __defNormalProp238(a, prop, b[prop]);
    }
  return a;
};
var __objRest222 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp238.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols238)
    for (var prop of __getOwnPropSymbols238(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum238.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Photo = React238.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest222(_b, ["color"]);
    return React238.createElement(
      "svg",
      __spreadValues238({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React238.createElement("g", { clipPath: "url(#a)" }, React238.createElement("g", { fill: color, clipPath: "url(#b)" }, React238.createElement("path", { d: "M5.722 4.833c0 .49.399.89.889.89s.889-.4.889-.89a.89.89 0 0 0-.89-.889.89.89 0 0 0-.888.89" }), React238.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M5.5 1.194a2.53 2.53 0 0 0-2.528 2.528v4.89A2.53 2.53 0 0 0 5.5 11.138h6.666a2.53 2.53 0 0 0 2.528-2.528V3.722a2.53 2.53 0 0 0-2.528-2.528zM4.472 3.722c0-.567.46-1.028 1.028-1.028h6.666c.568 0 1.028.46 1.028 1.028v2.933L11.77 5.23a1.64 1.64 0 0 0-2.318 0L5.113 9.563a1.03 1.03 0 0 1-.641-.953zm6.237 2.569 2.474 2.474a1.03 1.03 0 0 1-1.017.874H7.161l3.352-3.348a.14.14 0 0 1 .196 0",
          clipRule: "evenodd"
        }
      ), React238.createElement("path", { d: "M1.805 5.5a.75.75 0 0 0-1.5 0v5.778a2.527 2.527 0 0 0 2.528 2.528h7.556a.75.75 0 0 0 0-1.5H2.833c-.568 0-1.028-.46-1.028-1.028z" }))),
      React238.createElement("defs", null, React238.createElement("clipPath", { id: "a" }, React238.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), React238.createElement("clipPath", { id: "b" }, React238.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
Photo.displayName = "Photo";

// node_modules/@medusajs/icons/dist/esm/play-mini-solid.js
var React239 = __toESM(require_react());
var __defProp239 = Object.defineProperty;
var __getOwnPropSymbols239 = Object.getOwnPropertySymbols;
var __hasOwnProp239 = Object.prototype.hasOwnProperty;
var __propIsEnum239 = Object.prototype.propertyIsEnumerable;
var __defNormalProp239 = (obj, key, value) => key in obj ? __defProp239(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues239 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp239.call(b, prop))
      __defNormalProp239(a, prop, b[prop]);
  if (__getOwnPropSymbols239)
    for (var prop of __getOwnPropSymbols239(b)) {
      if (__propIsEnum239.call(b, prop))
        __defNormalProp239(a, prop, b[prop]);
    }
  return a;
};
var __objRest223 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp239.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols239)
    for (var prop of __getOwnPropSymbols239(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum239.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PlayMiniSolid = React239.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest223(_b, ["color"]);
    return React239.createElement(
      "svg",
      __spreadValues239({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React239.createElement(
        "path",
        {
          fill: color,
          d: "M12.926 6.147 4.487 1.475a1.55 1.55 0 0 0-1.555.02c-.478.282-.763.78-.763 1.333v9.344c0 .553.285 1.05.763 1.332.248.146.521.22.796.22.26 0 .52-.067.76-.198l8.436-4.672c.494-.273.8-.792.8-1.353s-.306-1.081-.8-1.354"
        }
      )
    );
  }
);
PlayMiniSolid.displayName = "PlayMiniSolid";

// node_modules/@medusajs/icons/dist/esm/play-solid.js
var React240 = __toESM(require_react());
var __defProp240 = Object.defineProperty;
var __getOwnPropSymbols240 = Object.getOwnPropertySymbols;
var __hasOwnProp240 = Object.prototype.hasOwnProperty;
var __propIsEnum240 = Object.prototype.propertyIsEnumerable;
var __defNormalProp240 = (obj, key, value) => key in obj ? __defProp240(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues240 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp240.call(b, prop))
      __defNormalProp240(a, prop, b[prop]);
  if (__getOwnPropSymbols240)
    for (var prop of __getOwnPropSymbols240(b)) {
      if (__propIsEnum240.call(b, prop))
        __defNormalProp240(a, prop, b[prop]);
    }
  return a;
};
var __objRest224 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp240.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols240)
    for (var prop of __getOwnPropSymbols240(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum240.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PlaySolid = React240.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest224(_b, ["color"]);
    return React240.createElement(
      "svg",
      __spreadValues240({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React240.createElement(
        "path",
        {
          fill: color,
          d: "M12.922 6.147 4.485 1.475a1.55 1.55 0 0 0-1.555.02c-.478.282-.763.78-.763 1.333v9.344c0 .553.285 1.05.763 1.332.248.146.521.22.796.22.26 0 .52-.067.759-.198l8.436-4.672c.495-.273.801-.792.801-1.353s-.306-1.081-.8-1.354"
        }
      )
    );
  }
);
PlaySolid.displayName = "PlaySolid";

// node_modules/@medusajs/icons/dist/esm/plus-mini.js
var React241 = __toESM(require_react());
var __defProp241 = Object.defineProperty;
var __getOwnPropSymbols241 = Object.getOwnPropertySymbols;
var __hasOwnProp241 = Object.prototype.hasOwnProperty;
var __propIsEnum241 = Object.prototype.propertyIsEnumerable;
var __defNormalProp241 = (obj, key, value) => key in obj ? __defProp241(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues241 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp241.call(b, prop))
      __defNormalProp241(a, prop, b[prop]);
  if (__getOwnPropSymbols241)
    for (var prop of __getOwnPropSymbols241(b)) {
      if (__propIsEnum241.call(b, prop))
        __defNormalProp241(a, prop, b[prop]);
    }
  return a;
};
var __objRest225 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp241.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols241)
    for (var prop of __getOwnPropSymbols241(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum241.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PlusMini = React241.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest225(_b, ["color"]);
    return React241.createElement(
      "svg",
      __spreadValues241({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React241.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 2.5v10M2.5 7.5h10"
        }
      )
    );
  }
);
PlusMini.displayName = "PlusMini";

// node_modules/@medusajs/icons/dist/esm/plus.js
var React242 = __toESM(require_react());
var __defProp242 = Object.defineProperty;
var __getOwnPropSymbols242 = Object.getOwnPropertySymbols;
var __hasOwnProp242 = Object.prototype.hasOwnProperty;
var __propIsEnum242 = Object.prototype.propertyIsEnumerable;
var __defNormalProp242 = (obj, key, value) => key in obj ? __defProp242(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues242 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp242.call(b, prop))
      __defNormalProp242(a, prop, b[prop]);
  if (__getOwnPropSymbols242)
    for (var prop of __getOwnPropSymbols242(b)) {
      if (__propIsEnum242.call(b, prop))
        __defNormalProp242(a, prop, b[prop]);
    }
  return a;
};
var __objRest226 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp242.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols242)
    for (var prop of __getOwnPropSymbols242(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum242.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Plus = React242.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest226(_b, ["color"]);
    return React242.createElement(
      "svg",
      __spreadValues242({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React242.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 2.5v10M2.5 7.5h10"
        }
      )
    );
  }
);
Plus.displayName = "Plus";

// node_modules/@medusajs/icons/dist/esm/puzzle-solid.js
var React243 = __toESM(require_react());
var __defProp243 = Object.defineProperty;
var __getOwnPropSymbols243 = Object.getOwnPropertySymbols;
var __hasOwnProp243 = Object.prototype.hasOwnProperty;
var __propIsEnum243 = Object.prototype.propertyIsEnumerable;
var __defNormalProp243 = (obj, key, value) => key in obj ? __defProp243(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues243 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp243.call(b, prop))
      __defNormalProp243(a, prop, b[prop]);
  if (__getOwnPropSymbols243)
    for (var prop of __getOwnPropSymbols243(b)) {
      if (__propIsEnum243.call(b, prop))
        __defNormalProp243(a, prop, b[prop]);
    }
  return a;
};
var __objRest227 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp243.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols243)
    for (var prop of __getOwnPropSymbols243(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum243.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var PuzzleSolid = React243.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest227(_b, ["color"]);
    return React243.createElement(
      "svg",
      __spreadValues243({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React243.createElement(
        "path",
        {
          fill: color,
          d: "M13.201 7.202a.667.667 0 0 0 .966-.595v-1.55a2.446 2.446 0 0 0-2.445-2.445h-1.578c.01-.074.023-.146.023-.222A1.78 1.78 0 0 0 8.389.612 1.78 1.78 0 0 0 6.61 2.39c0 .076.013.148.022.222H5.056A2.446 2.446 0 0 0 2.61 5.057v1.577c-.074-.01-.146-.022-.222-.022A1.78 1.78 0 0 0 .61 8.39c0 .98.797 1.778 1.778 1.778.076 0 .148-.014.222-.023v1.578a2.446 2.446 0 0 0 2.445 2.445h1.55a.67.67 0 0 0 .596-.965 1.3 1.3 0 0 1-.146-.59c0-.736.598-1.334 1.333-1.334s1.333.598 1.333 1.333q0 .297-.147.592a.665.665 0 0 0 .597.964h1.55a2.446 2.446 0 0 0 2.445-2.445v-1.55a.668.668 0 0 0-.966-.596c-.913.458-1.923-.253-1.923-1.186 0-.934 1.008-1.645 1.923-1.187z"
        }
      )
    );
  }
);
PuzzleSolid.displayName = "PuzzleSolid";

// node_modules/@medusajs/icons/dist/esm/puzzle.js
var React244 = __toESM(require_react());
var __defProp244 = Object.defineProperty;
var __getOwnPropSymbols244 = Object.getOwnPropertySymbols;
var __hasOwnProp244 = Object.prototype.hasOwnProperty;
var __propIsEnum244 = Object.prototype.propertyIsEnumerable;
var __defNormalProp244 = (obj, key, value) => key in obj ? __defProp244(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues244 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp244.call(b, prop))
      __defNormalProp244(a, prop, b[prop]);
  if (__getOwnPropSymbols244)
    for (var prop of __getOwnPropSymbols244(b)) {
      if (__propIsEnum244.call(b, prop))
        __defNormalProp244(a, prop, b[prop]);
    }
  return a;
};
var __objRest228 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp244.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols244)
    for (var prop of __getOwnPropSymbols244(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum244.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Puzzle = React244.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest228(_b, ["color"]);
    return React244.createElement(
      "svg",
      __spreadValues244({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React244.createElement("g", { clipPath: "url(#a)" }, React244.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.611 6.833c.33 0 .636.105.889.282v-2.06c0-.98-.796-1.777-1.778-1.777h-2.06a1.556 1.556 0 1 0-2.548 0H5.057c-.983 0-1.778.796-1.778 1.777v2.06a1.556 1.556 0 1 0 0 2.548v2.06c0 .98.795 1.777 1.778 1.777h2.06a1.556 1.556 0 1 1 2.548 0h2.058c.982 0 1.778-.796 1.778-1.778v-2.06a1.556 1.556 0 1 1-.889-2.83"
        }
      )),
      React244.createElement("defs", null, React244.createElement("clipPath", { id: "a" }, React244.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Puzzle.displayName = "Puzzle";

// node_modules/@medusajs/icons/dist/esm/question-mark-circle.js
var React245 = __toESM(require_react());
var __defProp245 = Object.defineProperty;
var __getOwnPropSymbols245 = Object.getOwnPropertySymbols;
var __hasOwnProp245 = Object.prototype.hasOwnProperty;
var __propIsEnum245 = Object.prototype.propertyIsEnumerable;
var __defNormalProp245 = (obj, key, value) => key in obj ? __defProp245(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues245 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp245.call(b, prop))
      __defNormalProp245(a, prop, b[prop]);
  if (__getOwnPropSymbols245)
    for (var prop of __getOwnPropSymbols245(b)) {
      if (__propIsEnum245.call(b, prop))
        __defNormalProp245(a, prop, b[prop]);
    }
  return a;
};
var __objRest229 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp245.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols245)
    for (var prop of __getOwnPropSymbols245(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum245.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var QuestionMarkCircle = React245.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest229(_b, ["color"]);
    return React245.createElement(
      "svg",
      __spreadValues245({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React245.createElement("g", { fill: color, clipPath: "url(#a)" }, React245.createElement("path", { d: "M7.593 4.807c-.538 0-1.018.247-1.234.835a.75.75 0 0 1-1.408-.517c.474-1.291 1.605-1.818 2.642-1.818 1.127 0 2.366.825 2.366 2.357 0 .538-.141.973-.394 1.33-.237.333-.543.554-.763.709l-.016.011c-.464.326-.639.449-.701.804a.75.75 0 1 1-1.478-.259c.173-.984.836-1.44 1.244-1.722l.089-.062c.215-.15.328-.245.401-.35.058-.08.118-.205.118-.46 0-.548-.402-.858-.866-.858M6.425 10.67a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0" }), React245.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M.305 7.5a7.194 7.194 0 1 1 14.39 0 7.194 7.194 0 0 1-14.39 0M7.5 1.806a5.694 5.694 0 1 0 0 11.389 5.694 5.694 0 0 0 0-11.39",
          clipRule: "evenodd"
        }
      )),
      React245.createElement("defs", null, React245.createElement("clipPath", { id: "a" }, React245.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
QuestionMarkCircle.displayName = "QuestionMarkCircle";

// node_modules/@medusajs/icons/dist/esm/question-mark.js
var React246 = __toESM(require_react());
var __defProp246 = Object.defineProperty;
var __getOwnPropSymbols246 = Object.getOwnPropertySymbols;
var __hasOwnProp246 = Object.prototype.hasOwnProperty;
var __propIsEnum246 = Object.prototype.propertyIsEnumerable;
var __defNormalProp246 = (obj, key, value) => key in obj ? __defProp246(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues246 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp246.call(b, prop))
      __defNormalProp246(a, prop, b[prop]);
  if (__getOwnPropSymbols246)
    for (var prop of __getOwnPropSymbols246(b)) {
      if (__propIsEnum246.call(b, prop))
        __defNormalProp246(a, prop, b[prop]);
    }
  return a;
};
var __objRest230 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp246.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols246)
    for (var prop of __getOwnPropSymbols246(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum246.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var QuestionMark = React246.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest230(_b, ["color"]);
    return React246.createElement(
      "svg",
      __spreadValues246({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React246.createElement("g", { fill: color, clipPath: "url(#a)" }, React246.createElement("path", { d: "M7.594 4.807c-.538 0-1.018.247-1.234.835a.75.75 0 0 1-1.408-.517c.474-1.291 1.604-1.818 2.641-1.818 1.128 0 2.367.825 2.367 2.357 0 .538-.142.972-.395 1.33-.237.333-.543.554-.763.708l-.016.012c-.464.326-.639.449-.7.804a.75.75 0 1 1-1.478-.259c.172-.985.835-1.441 1.243-1.722l.09-.062c.214-.151.327-.246.4-.35.058-.08.119-.205.119-.46 0-.549-.403-.858-.867-.858M6.425 10.67a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0" }), React246.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M.306 7.5a7.194 7.194 0 1 1 14.389 0 7.194 7.194 0 0 1-14.39 0M7.5 1.805a5.694 5.694 0 1 0 0 11.39 5.694 5.694 0 0 0 0-11.39",
          clipRule: "evenodd"
        }
      )),
      React246.createElement("defs", null, React246.createElement("clipPath", { id: "a" }, React246.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
QuestionMark.displayName = "QuestionMark";

// node_modules/@medusajs/icons/dist/esm/queue-list.js
var React247 = __toESM(require_react());
var __defProp247 = Object.defineProperty;
var __getOwnPropSymbols247 = Object.getOwnPropertySymbols;
var __hasOwnProp247 = Object.prototype.hasOwnProperty;
var __propIsEnum247 = Object.prototype.propertyIsEnumerable;
var __defNormalProp247 = (obj, key, value) => key in obj ? __defProp247(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues247 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp247.call(b, prop))
      __defNormalProp247(a, prop, b[prop]);
  if (__getOwnPropSymbols247)
    for (var prop of __getOwnPropSymbols247(b)) {
      if (__propIsEnum247.call(b, prop))
        __defNormalProp247(a, prop, b[prop]);
    }
  return a;
};
var __objRest231 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp247.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols247)
    for (var prop of __getOwnPropSymbols247(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum247.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var QueueList = React247.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest231(_b, ["color"]);
    return React247.createElement(
      "svg",
      __spreadValues247({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React247.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.167 1.944H2.833a.89.89 0 0 0-.889.89v3.11c0 .491.398.89.89.89h9.333c.49 0 .889-.399.889-.89v-3.11a.89.89 0 0 0-.89-.89M1.944 9.944h11.112M1.944 13.056h11.112"
        }
      )
    );
  }
);
QueueList.displayName = "QueueList";

// node_modules/@medusajs/icons/dist/esm/react-js-ex.js
var React248 = __toESM(require_react());
var __defProp248 = Object.defineProperty;
var __getOwnPropSymbols248 = Object.getOwnPropertySymbols;
var __hasOwnProp248 = Object.prototype.hasOwnProperty;
var __propIsEnum248 = Object.prototype.propertyIsEnumerable;
var __defNormalProp248 = (obj, key, value) => key in obj ? __defProp248(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues248 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp248.call(b, prop))
      __defNormalProp248(a, prop, b[prop]);
  if (__getOwnPropSymbols248)
    for (var prop of __getOwnPropSymbols248(b)) {
      if (__propIsEnum248.call(b, prop))
        __defNormalProp248(a, prop, b[prop]);
    }
  return a;
};
var __objRest232 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp248.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols248)
    for (var prop of __getOwnPropSymbols248(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum248.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ReactJsEx = React248.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest232(_b, ["color"]);
    return React248.createElement(
      "svg",
      __spreadValues248({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React248.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3M7.5 8.406a.906.906 0 1 0 0-1.812.906.906 0 0 0 0 1.812M6.05 6.648q.246-.425.506-.81a14 14 0 0 1 1.908 0 14 14 0 0 1 .955 1.653 14 14 0 0 1-.955 1.653 14 14 0 0 1-1.908 0A14 14 0 0 1 5.6 7.49q.204-.418.449-.843m-.65-.375q.097-.168.197-.33-.305.045-.588.104.09.274.203.562.092-.168.188-.336m2.11-1.218q-.195 0-.385.005.192-.24.385-.457.192.216.385.457a15 15 0 0 0-.385-.005M6.14 5.12c.275-.385.56-.74.845-1.057a7 7 0 0 0-.359-.315c-.385-.313-.734-.515-1.025-.609s-.481-.069-.603.002c-.123.07-.24.223-.304.522s-.064.702.015 1.192q.036.226.093.469c.418-.09.867-.158 1.338-.204m2.738 0c-.275-.385-.56-.74-.846-1.057q.183-.172.36-.315c.385-.313.734-.515 1.024-.609s.482-.069.604.002c.123.07.24.223.304.522s.064.702-.015 1.192q-.036.226-.093.469c-.418-.09-.867-.158-1.338-.204m2.172-.147a7 7 0 0 1-.107.535q.27.082.517.175c.513.196.954.439 1.274.727.32.289.548.653.548 1.081s-.229.792-.548 1.08-.76.532-1.274.728q-.246.093-.517.175.065.275.107.534c.087.543.097 1.047.007 1.468-.09.42-.291.8-.662 1.014-.37.214-.8.199-1.21.066-.409-.132-.84-.393-1.266-.74a7 7 0 0 1-.41-.36q-.206.195-.41.36c-.426.347-.857.608-1.267.74-.41.133-.84.148-1.21-.066s-.571-.594-.661-1.014-.08-.925.007-1.468a7 7 0 0 1 .107-.535A7 7 0 0 1 3.56 9.3c-.514-.196-.955-.439-1.275-.727-.32-.289-.548-.653-.548-1.081s.229-.792.548-1.08c.32-.29.761-.532 1.275-.728a7 7 0 0 1 .516-.175 7 7 0 0 1-.107-.535c-.087-.542-.097-1.046-.007-1.467.09-.42.291-.8.662-1.014.37-.214.8-.199 1.21-.066.409.132.84.393 1.266.74q.204.165.41.36.206-.195.41-.36c.426-.347.857-.608 1.267-.74.41-.133.839-.148 1.21.065.37.214.571.594.661 1.015s.08.925-.007 1.467m-1.628.97q.305.045.588.104-.09.274-.203.562a15 15 0 0 0-.385-.667m1.317.287c-.132.407-.296.83-.492 1.261.196.43.36.854.492 1.26q.24-.071.453-.153c.463-.177.813-.378 1.04-.583.226-.205.3-.383.3-.524s-.074-.32-.3-.524c-.227-.205-.576-.406-1.04-.583a7 7 0 0 0-.453-.154M9.62 8.71q.096-.168.188-.336.113.287.203.562-.283.06-.588.105zm-.741 1.153c.47-.046.92-.115 1.338-.204q.058.243.093.47c.079.489.079.892.015 1.19-.064.3-.181.452-.304.523-.122.07-.313.096-.604.002-.29-.095-.64-.296-1.024-.609a7 7 0 0 1-.36-.315q.431-.478.846-1.057m-.984.06q-.192.24-.385.457a11 11 0 0 1-.385-.457 15 15 0 0 0 .77 0M5.399 8.709q.097.168.197.33-.305-.045-.588-.104.09-.274.203-.562.092.168.188.336m.741 1.153c-.47-.046-.92-.115-1.338-.204q-.058.244-.093.469c-.079.49-.079.893-.015 1.192s.181.451.304.522c.122.07.313.096.604.002.29-.095.64-.296 1.024-.609q.177-.144.36-.315-.431-.478-.846-1.057M3.826 8.598q.213.082.453.153c.131-.406.296-.83.492-1.26-.196-.43-.36-.854-.492-1.26q-.24.071-.453.153c-.463.177-.812.378-1.04.583-.226.205-.3.382-.3.524 0 .141.074.32.3.524.228.205.577.406 1.04.583",
          clipRule: "evenodd"
        }
      )
    );
  }
);
ReactJsEx.displayName = "ReactJsEx";

// node_modules/@medusajs/icons/dist/esm/react-js.js
var React249 = __toESM(require_react());
var __defProp249 = Object.defineProperty;
var __getOwnPropSymbols249 = Object.getOwnPropertySymbols;
var __hasOwnProp249 = Object.prototype.hasOwnProperty;
var __propIsEnum249 = Object.prototype.propertyIsEnumerable;
var __defNormalProp249 = (obj, key, value) => key in obj ? __defProp249(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues249 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp249.call(b, prop))
      __defNormalProp249(a, prop, b[prop]);
  if (__getOwnPropSymbols249)
    for (var prop of __getOwnPropSymbols249(b)) {
      if (__propIsEnum249.call(b, prop))
        __defNormalProp249(a, prop, b[prop]);
    }
  return a;
};
var ReactJs = React249.forwardRef(
  (props, ref) => {
    return React249.createElement(
      "svg",
      __spreadValues249({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React249.createElement(
        "path",
        {
          fill: "#61DAFB",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3"
        }
      ),
      React249.createElement(
        "path",
        {
          stroke: "#000",
          strokeWidth: 0.75,
          d: "M7.509 9.552c2.98 0 5.397-.923 5.397-2.061S10.49 5.43 7.51 5.43 2.11 6.353 2.11 7.49c0 1.14 2.417 2.062 5.398 2.062Z"
        }
      ),
      React249.createElement(
        "path",
        {
          stroke: "#000",
          strokeWidth: 0.75,
          d: "M5.724 8.521c1.49 2.582 3.498 4.214 4.483 3.644.986-.569.577-3.123-.914-5.705C7.803 3.88 5.795 2.247 4.81 2.816c-.986.57-.577 3.124.914 5.705Z"
        }
      ),
      React249.createElement(
        "path",
        {
          stroke: "#000",
          strokeWidth: 0.75,
          d: "M5.724 6.46c-1.49 2.582-1.9 5.136-.914 5.705.985.57 2.993-1.062 4.483-3.644s1.9-5.136.914-5.705S7.214 3.88 5.724 6.46Z"
        }
      ),
      React249.createElement(
        "path",
        {
          fill: "#000",
          d: "M7.5 8.406a.906.906 0 1 0 0-1.812.906.906 0 0 0 0 1.812"
        }
      )
    );
  }
);
ReactJs.displayName = "ReactJs";

// node_modules/@medusajs/icons/dist/esm/receipt-percent.js
var React250 = __toESM(require_react());
var __defProp250 = Object.defineProperty;
var __getOwnPropSymbols250 = Object.getOwnPropertySymbols;
var __hasOwnProp250 = Object.prototype.hasOwnProperty;
var __propIsEnum250 = Object.prototype.propertyIsEnumerable;
var __defNormalProp250 = (obj, key, value) => key in obj ? __defProp250(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues250 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp250.call(b, prop))
      __defNormalProp250(a, prop, b[prop]);
  if (__getOwnPropSymbols250)
    for (var prop of __getOwnPropSymbols250(b)) {
      if (__propIsEnum250.call(b, prop))
        __defNormalProp250(a, prop, b[prop]);
    }
  return a;
};
var __objRest233 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp250.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols250)
    for (var prop of __getOwnPropSymbols250(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum250.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ReceiptPercent = React250.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest233(_b, ["color"]);
    return React250.createElement(
      "svg",
      __spreadValues250({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React250.createElement("g", { clipPath: "url(#a)" }, React250.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.833 1.593C1.368 1.593.306 2.88.306 4.307v1.474c0 .414.335.75.75.75.375 0 .805.361.805.97 0 .607-.43.968-.805.968a.75.75 0 0 0-.75.75v1.474c0 1.426 1.062 2.715 2.527 2.715h9.334c1.465 0 2.527-1.289 2.527-2.715V9.219a.75.75 0 0 0-.75-.75c-.376 0-.805-.361-.805-.969s.43-.97.805-.97a.75.75 0 0 0 .75-.75V4.308c0-1.426-1.062-2.714-2.527-2.714zM1.806 4.307c0-.743.528-1.214 1.027-1.214h9.334c.499 0 1.027.471 1.027 1.214v.855c-.936.341-1.555 1.303-1.555 2.338s.62 1.997 1.555 2.338v.855c0 .743-.528 1.215-1.027 1.215H2.833c-.499 0-1.027-.472-1.027-1.215v-.855C2.742 9.498 3.36 8.536 3.36 7.5c0-1.035-.62-1.997-1.555-2.338zm8.224.663a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0m-3.419.752a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0m3.556 3.556a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0",
          clipRule: "evenodd"
        }
      )),
      React250.createElement("defs", null, React250.createElement("clipPath", { id: "a" }, React250.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ReceiptPercent.displayName = "ReceiptPercent";

// node_modules/@medusajs/icons/dist/esm/receipt.js
var React251 = __toESM(require_react());
var __defProp251 = Object.defineProperty;
var __getOwnPropSymbols251 = Object.getOwnPropertySymbols;
var __hasOwnProp251 = Object.prototype.hasOwnProperty;
var __propIsEnum251 = Object.prototype.propertyIsEnumerable;
var __defNormalProp251 = (obj, key, value) => key in obj ? __defProp251(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues251 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp251.call(b, prop))
      __defNormalProp251(a, prop, b[prop]);
  if (__getOwnPropSymbols251)
    for (var prop of __getOwnPropSymbols251(b)) {
      if (__propIsEnum251.call(b, prop))
        __defNormalProp251(a, prop, b[prop]);
    }
  return a;
};
var __objRest234 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp251.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols251)
    for (var prop of __getOwnPropSymbols251(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum251.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Receipt = React251.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest234(_b, ["color"]);
    return React251.createElement(
      "svg",
      __spreadValues251({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React251.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React251.createElement("path", { d: "M13.944 1.944H1.056M12.611 4.611v9.333l-2.444-1.333L7.5 13.944l-2.667-1.333-2.444 1.333V4.611M4.611 9.5h3.111M4.611 6.833h3.111M9.944 9.5h.445M9.944 6.833h.445" })
      ),
      React251.createElement("defs", null, React251.createElement("clipPath", { id: "a" }, React251.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Receipt.displayName = "Receipt";

// node_modules/@medusajs/icons/dist/esm/reduce.js
var React252 = __toESM(require_react());
var __defProp252 = Object.defineProperty;
var __getOwnPropSymbols252 = Object.getOwnPropertySymbols;
var __hasOwnProp252 = Object.prototype.hasOwnProperty;
var __propIsEnum252 = Object.prototype.propertyIsEnumerable;
var __defNormalProp252 = (obj, key, value) => key in obj ? __defProp252(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues252 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp252.call(b, prop))
      __defNormalProp252(a, prop, b[prop]);
  if (__getOwnPropSymbols252)
    for (var prop of __getOwnPropSymbols252(b)) {
      if (__propIsEnum252.call(b, prop))
        __defNormalProp252(a, prop, b[prop]);
    }
  return a;
};
var __objRest235 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp252.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols252)
    for (var prop of __getOwnPropSymbols252(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum252.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Reduce = React252.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest235(_b, ["color"]);
    return React252.createElement(
      "svg",
      __spreadValues252({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React252.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.5 1.944v1.778c0 .982-.796 1.778-1.778 1.778H1.944M13.056 5.5h-1.778A1.777 1.777 0 0 1 9.5 3.722V1.944M9.5 13.056v-1.778c0-.982.796-1.778 1.778-1.778h1.778M1.944 9.5h1.778c.982 0 1.778.796 1.778 1.778v1.778"
        }
      )
    );
  }
);
Reduce.displayName = "Reduce";

// node_modules/@medusajs/icons/dist/esm/replay-solid.js
var React253 = __toESM(require_react());
var __defProp253 = Object.defineProperty;
var __getOwnPropSymbols253 = Object.getOwnPropertySymbols;
var __hasOwnProp253 = Object.prototype.hasOwnProperty;
var __propIsEnum253 = Object.prototype.propertyIsEnumerable;
var __defNormalProp253 = (obj, key, value) => key in obj ? __defProp253(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues253 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp253.call(b, prop))
      __defNormalProp253(a, prop, b[prop]);
  if (__getOwnPropSymbols253)
    for (var prop of __getOwnPropSymbols253(b)) {
      if (__propIsEnum253.call(b, prop))
        __defNormalProp253(a, prop, b[prop]);
    }
  return a;
};
var __objRest236 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp253.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols253)
    for (var prop of __getOwnPropSymbols253(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum253.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ReplaySolid = React253.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest236(_b, ["color"]);
    return React253.createElement(
      "svg",
      __spreadValues253({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React253.createElement(
        "path",
        {
          fill: color,
          d: "M12.67 2.535a1.34 1.34 0 0 0-1.348-.018L4.445 6.325A1.35 1.35 0 0 0 3.75 7.5c0 .488.266.938.694 1.175l6.879 3.808a1.35 1.35 0 0 0 1.349-.018 1.33 1.33 0 0 0 .662-1.156V3.692c0-.48-.247-.912-.662-1.156zM2.292 1.667a.625.625 0 0 0-.625.625v10.416a.625.625 0 0 0 1.25 0V2.292a.625.625 0 0 0-.625-.625"
        }
      )
    );
  }
);
ReplaySolid.displayName = "ReplaySolid";

// node_modules/@medusajs/icons/dist/esm/resize.js
var React254 = __toESM(require_react());
var __defProp254 = Object.defineProperty;
var __getOwnPropSymbols254 = Object.getOwnPropertySymbols;
var __hasOwnProp254 = Object.prototype.hasOwnProperty;
var __propIsEnum254 = Object.prototype.propertyIsEnumerable;
var __defNormalProp254 = (obj, key, value) => key in obj ? __defProp254(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues254 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp254.call(b, prop))
      __defNormalProp254(a, prop, b[prop]);
  if (__getOwnPropSymbols254)
    for (var prop of __getOwnPropSymbols254(b)) {
      if (__propIsEnum254.call(b, prop))
        __defNormalProp254(a, prop, b[prop]);
    }
  return a;
};
var __objRest237 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp254.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols254)
    for (var prop of __getOwnPropSymbols254(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum254.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Resize = React254.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest237(_b, ["color"]);
    return React254.createElement(
      "svg",
      __spreadValues254({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React254.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m13.182 8.94-4.243 4.242M12.303 3.818l-8.485 8.485"
        }
      )
    );
  }
);
Resize.displayName = "Resize";

// node_modules/@medusajs/icons/dist/esm/rocket-launch-solid.js
var React255 = __toESM(require_react());
var __defProp255 = Object.defineProperty;
var __getOwnPropSymbols255 = Object.getOwnPropertySymbols;
var __hasOwnProp255 = Object.prototype.hasOwnProperty;
var __propIsEnum255 = Object.prototype.propertyIsEnumerable;
var __defNormalProp255 = (obj, key, value) => key in obj ? __defProp255(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues255 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp255.call(b, prop))
      __defNormalProp255(a, prop, b[prop]);
  if (__getOwnPropSymbols255)
    for (var prop of __getOwnPropSymbols255(b)) {
      if (__propIsEnum255.call(b, prop))
        __defNormalProp255(a, prop, b[prop]);
    }
  return a;
};
var __objRest238 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp255.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols255)
    for (var prop of __getOwnPropSymbols255(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum255.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var RocketLaunchSolid = React255.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest238(_b, ["color"]);
    return React255.createElement(
      "svg",
      __spreadValues255({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React255.createElement("g", { fill: color, clipPath: "url(#a)" }, React255.createElement("path", { d: "M2.615 14.611h-1.56a.667.667 0 0 1-.666-.666v-1.56c0-.871.514-1.668 1.31-2.028a.666.666 0 1 1 .549 1.214.9.9 0 0 0-.526.815v.892h.893c.35 0 .669-.206.814-.525a.667.667 0 0 1 1.214.549 2.23 2.23 0 0 1-2.028 1.31" }), React255.createElement("path", { d: "M11.744 9.022c3.232-3.55 2.877-7.553 2.823-8.006a.67.67 0 0 0-.584-.584c-.455-.056-4.455-.41-8.006 2.823l-.9-.161a3.61 3.61 0 0 0-3.563 1.458L-.156 6.91a.667.667 0 0 0 .783 1.009c.012-.005.95-.348 2.343-.293-.15.39-.258.734-.335 1.013a.67.67 0 0 0 .172.648l2.908 2.908a.67.67 0 0 0 .647.172c.278-.077.622-.184 1.01-.336.052 1.383-.287 2.334-.29 2.344a.666.666 0 0 0 1.007.781l2.36-1.671a3.6 3.6 0 0 0 1.456-3.558l-.162-.903zM9.5 3.944a1.555 1.555 0 1 1 0 3.111 1.555 1.555 0 0 1 0-3.11M1.9 6.316l.703-.992a2.26 2.26 0 0 1 2.241-.917l.03.005a11.7 11.7 0 0 0-1.313 1.932 9.3 9.3 0 0 0-1.66-.029zm7.779 6.08-.995.704a9 9 0 0 0-.028-1.66c.614-.33 1.273-.767 1.931-1.313l.006.033a2.26 2.26 0 0 1-.915 2.236" })),
      React255.createElement("defs", null, React255.createElement("clipPath", { id: "a" }, React255.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
RocketLaunchSolid.displayName = "RocketLaunchSolid";

// node_modules/@medusajs/icons/dist/esm/rocket-launch.js
var React256 = __toESM(require_react());
var __defProp256 = Object.defineProperty;
var __getOwnPropSymbols256 = Object.getOwnPropertySymbols;
var __hasOwnProp256 = Object.prototype.hasOwnProperty;
var __propIsEnum256 = Object.prototype.propertyIsEnumerable;
var __defNormalProp256 = (obj, key, value) => key in obj ? __defProp256(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues256 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp256.call(b, prop))
      __defNormalProp256(a, prop, b[prop]);
  if (__getOwnPropSymbols256)
    for (var prop of __getOwnPropSymbols256(b)) {
      if (__propIsEnum256.call(b, prop))
        __defNormalProp256(a, prop, b[prop]);
    }
  return a;
};
var __objRest239 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp256.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols256)
    for (var prop of __getOwnPropSymbols256(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum256.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var RocketLaunch = React256.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest239(_b, ["color"]);
    return React256.createElement(
      "svg",
      __spreadValues256({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React256.createElement("g", { clipPath: "url(#a)" }, React256.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.265 8.386c3.118-3.271 2.736-7.084 2.704-7.355C13.697 1 9.885.617 6.614 3.735a10.4 10.4 0 0 0-2.842 4.702l2.79 2.79c.706-.193 2.815-.86 4.703-2.841"
        }
      ), React256.createElement(
        "path",
        {
          fill: color,
          d: "M9.743 6.75a1.493 1.493 0 1 0 0-2.985 1.493 1.493 0 0 0 0 2.985"
        }
      ), React256.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.5 12.48c-.234.519-.757.88-1.363.88H1.64v-1.496c0-.606.36-1.13.88-1.364M11.211 8.442l.21 1.175a2.8 2.8 0 0 1-1.138 2.779L8.02 14s.548-1.434.238-3.416M6.558 3.789l-1.172-.21a2.8 2.8 0 0 0-2.784 1.14L1 6.98s1.434-.548 3.416-.238"
        }
      )),
      React256.createElement("defs", null, React256.createElement("clipPath", { id: "a" }, React256.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
RocketLaunch.displayName = "RocketLaunch";

// node_modules/@medusajs/icons/dist/esm/rss.js
var React257 = __toESM(require_react());
var __defProp257 = Object.defineProperty;
var __getOwnPropSymbols257 = Object.getOwnPropertySymbols;
var __hasOwnProp257 = Object.prototype.hasOwnProperty;
var __propIsEnum257 = Object.prototype.propertyIsEnumerable;
var __defNormalProp257 = (obj, key, value) => key in obj ? __defProp257(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues257 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp257.call(b, prop))
      __defNormalProp257(a, prop, b[prop]);
  if (__getOwnPropSymbols257)
    for (var prop of __getOwnPropSymbols257(b)) {
      if (__propIsEnum257.call(b, prop))
        __defNormalProp257(a, prop, b[prop]);
    }
  return a;
};
var __objRest240 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp257.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols257)
    for (var prop of __getOwnPropSymbols257(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum257.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Rss = React257.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest240(_b, ["color"]);
    return React257.createElement(
      "svg",
      __spreadValues257({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React257.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.05 13v-.55a5.5 5.5 0 0 0-5.5-5.5H2M2 2h.55C8.321 2 13 6.679 13 12.45V13m-9.9-.55a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0"
        }
      )
    );
  }
);
Rss.displayName = "Rss";

// node_modules/@medusajs/icons/dist/esm/sanity.js
var React258 = __toESM(require_react());
var __defProp258 = Object.defineProperty;
var __getOwnPropSymbols258 = Object.getOwnPropertySymbols;
var __hasOwnProp258 = Object.prototype.hasOwnProperty;
var __propIsEnum258 = Object.prototype.propertyIsEnumerable;
var __defNormalProp258 = (obj, key, value) => key in obj ? __defProp258(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues258 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp258.call(b, prop))
      __defNormalProp258(a, prop, b[prop]);
  if (__getOwnPropSymbols258)
    for (var prop of __getOwnPropSymbols258(b)) {
      if (__propIsEnum258.call(b, prop))
        __defNormalProp258(a, prop, b[prop]);
    }
  return a;
};
var Sanity = React258.forwardRef(
  (props, ref) => {
    return React258.createElement(
      "svg",
      __spreadValues258({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React258.createElement(
        "path",
        {
          fill: "#F03E2F",
          d: "M4.909 4.862a3.2 3.2 0 0 1-.469-.383c-.513-.512-.776-1.162-.776-2.007V2.15C4.518 1.273 5.834.75 7.403.75c3.034 0 4.79 1.575 5.223 3.791H9.874C9.57 3.667 8.81 2.986 7.426 2.986c-1.363 0-2.327.718-2.517 1.876m-1.525-2.39c0 1.82 1.144 2.904 3.435 3.475l2.427.553c2.168.49 3.488 1.704 3.488 3.684a3.72 3.72 0 0 1-.808 2.385c0-1.975-1.04-3.043-3.55-3.685l-2.382-.532c-1.909-.427-3.381-1.426-3.381-3.577a3.7 3.7 0 0 1 .771-2.303m7.03 7.55c-.165 1.257-1.177 1.966-2.643 1.966-1.302 0-2.277-.532-2.646-1.682h-2.86c.464 2.504 2.548 3.944 5.527 3.944 1.59 0 2.968-.49 3.853-1.372v-.31c0-.933-.244-1.617-.755-2.146a3 3 0 0 0-.476-.4"
        }
      )
    );
  }
);
Sanity.displayName = "Sanity";

// node_modules/@medusajs/icons/dist/esm/scroll-text.js
var React259 = __toESM(require_react());
var __defProp259 = Object.defineProperty;
var __getOwnPropSymbols259 = Object.getOwnPropertySymbols;
var __hasOwnProp259 = Object.prototype.hasOwnProperty;
var __propIsEnum259 = Object.prototype.propertyIsEnumerable;
var __defNormalProp259 = (obj, key, value) => key in obj ? __defProp259(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues259 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp259.call(b, prop))
      __defNormalProp259(a, prop, b[prop]);
  if (__getOwnPropSymbols259)
    for (var prop of __getOwnPropSymbols259(b)) {
      if (__propIsEnum259.call(b, prop))
        __defNormalProp259(a, prop, b[prop]);
    }
  return a;
};
var __objRest241 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp259.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols259)
    for (var prop of __getOwnPropSymbols259(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum259.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ScrollText = React259.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest241(_b, ["color"]);
    return React259.createElement(
      "svg",
      __spreadValues259({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React259.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.611 13.5c.736 0 1.333-.597 1.333-1.333v-.89c0-.245-.199-.444-.444-.444H6.833c-.245 0-.444.2-.444.445v.889a1.334 1.334 0 0 1-2.667 0V2.833a1.334 1.334 0 0 0-2.666 0v1.778c0 .49.398.889.888.889h1.778M12.611 13.5H5.056"
        }
      ),
      React259.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.389 1.5h8.444c.736 0 1.334.597 1.334 1.333v5.778M6.167 4.611h3.555M6.167 7.278h3.555"
        }
      )
    );
  }
);
ScrollText.displayName = "ScrollText";

// node_modules/@medusajs/icons/dist/esm/sendgrid.js
var React260 = __toESM(require_react());
var __defProp260 = Object.defineProperty;
var __getOwnPropSymbols260 = Object.getOwnPropertySymbols;
var __hasOwnProp260 = Object.prototype.hasOwnProperty;
var __propIsEnum260 = Object.prototype.propertyIsEnumerable;
var __defNormalProp260 = (obj, key, value) => key in obj ? __defProp260(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues260 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp260.call(b, prop))
      __defNormalProp260(a, prop, b[prop]);
  if (__getOwnPropSymbols260)
    for (var prop of __getOwnPropSymbols260(b)) {
      if (__propIsEnum260.call(b, prop))
        __defNormalProp260(a, prop, b[prop]);
    }
  return a;
};
var Sendgrid = React260.forwardRef(
  (props, ref) => {
    return React260.createElement(
      "svg",
      __spreadValues260({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React260.createElement(
        "path",
        {
          fill: "#51A9E3",
          d: "M9.75.75h-3.6c-.495 0-.9.405-.9.9v2.7c0 .495.405.9.9.9h2.7c.495 0 .9.405.9.9v2.7c0 .495.405.9.9.9h2.7c.495 0 .9-.405.9-.9V1.2a.45.45 0 0 0-.45-.45zM5.25 14.25h3.6c.495 0 .9-.405.9-.9v-2.7c0-.495-.405-.9-.9-.9h-2.7a.903.903 0 0 1-.9-.9v-2.7c0-.495-.405-.9-.9-.9h-2.7c-.495 0-.9.405-.9.9v7.65c0 .247.202.45.45.45z"
        }
      )
    );
  }
);
Sendgrid.displayName = "Sendgrid";

// node_modules/@medusajs/icons/dist/esm/server-solid.js
var React261 = __toESM(require_react());
var __defProp261 = Object.defineProperty;
var __getOwnPropSymbols261 = Object.getOwnPropertySymbols;
var __hasOwnProp261 = Object.prototype.hasOwnProperty;
var __propIsEnum261 = Object.prototype.propertyIsEnumerable;
var __defNormalProp261 = (obj, key, value) => key in obj ? __defProp261(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues261 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp261.call(b, prop))
      __defNormalProp261(a, prop, b[prop]);
  if (__getOwnPropSymbols261)
    for (var prop of __getOwnPropSymbols261(b)) {
      if (__propIsEnum261.call(b, prop))
        __defNormalProp261(a, prop, b[prop]);
    }
  return a;
};
var __objRest242 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp261.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols261)
    for (var prop of __getOwnPropSymbols261(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum261.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ServerSolid = React261.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest242(_b, ["color"]);
    return React261.createElement(
      "svg",
      __spreadValues261({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React261.createElement("g", { fill: color, clipPath: "url(#a)" }, React261.createElement("path", { d: "m14.497 8.835-1.96-5.885a2.44 2.44 0 0 0-2.319-1.672H4.782a2.44 2.44 0 0 0-2.32 1.672L.505 8.835s-.115.39-.115.665v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V9.5c0-.342-.115-.665-.115-.665m-1.22 2.443a.667.667 0 0 1-.666.666H2.39a.667.667 0 0 1-.667-.666V9.5c0-.368.299-.667.667-.667H12.61c.368 0 .667.299.667.667z" }), React261.createElement("path", { d: "M5.722 9.722H3.278a.667.667 0 0 0 0 1.334h2.444a.667.667 0 0 0 0-1.334" })),
      React261.createElement("defs", null, React261.createElement("clipPath", { id: "a" }, React261.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerSolid.displayName = "ServerSolid";

// node_modules/@medusajs/icons/dist/esm/server-stack-solid.js
var React262 = __toESM(require_react());
var __defProp262 = Object.defineProperty;
var __getOwnPropSymbols262 = Object.getOwnPropertySymbols;
var __hasOwnProp262 = Object.prototype.hasOwnProperty;
var __propIsEnum262 = Object.prototype.propertyIsEnumerable;
var __defNormalProp262 = (obj, key, value) => key in obj ? __defProp262(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues262 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp262.call(b, prop))
      __defNormalProp262(a, prop, b[prop]);
  if (__getOwnPropSymbols262)
    for (var prop of __getOwnPropSymbols262(b)) {
      if (__propIsEnum262.call(b, prop))
        __defNormalProp262(a, prop, b[prop]);
    }
  return a;
};
var __objRest243 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp262.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols262)
    for (var prop of __getOwnPropSymbols262(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum262.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ServerStackSolid = React262.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest243(_b, ["color"]);
    return React262.createElement(
      "svg",
      __spreadValues262({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React262.createElement("g", { fill: color, clipPath: "url(#a)" }, React262.createElement("path", { d: "M12.611 1.278H2.39c-1.103 0-2 .897-2 2v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V3.278c0-1.103-.897-2-2-2M3.278 4.833a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333m2.222 0a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333M12.611 7.944H2.39c-1.103 0-2 .897-2 2v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V9.944c0-1.103-.897-2-2-2M3.278 11.5a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334m2.222 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334" })),
      React262.createElement("defs", null, React262.createElement("clipPath", { id: "a" }, React262.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerStackSolid.displayName = "ServerStackSolid";

// node_modules/@medusajs/icons/dist/esm/server-stack.js
var React263 = __toESM(require_react());
var __defProp263 = Object.defineProperty;
var __getOwnPropSymbols263 = Object.getOwnPropertySymbols;
var __hasOwnProp263 = Object.prototype.hasOwnProperty;
var __propIsEnum263 = Object.prototype.propertyIsEnumerable;
var __defNormalProp263 = (obj, key, value) => key in obj ? __defProp263(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues263 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp263.call(b, prop))
      __defNormalProp263(a, prop, b[prop]);
  if (__getOwnPropSymbols263)
    for (var prop of __getOwnPropSymbols263(b)) {
      if (__propIsEnum263.call(b, prop))
        __defNormalProp263(a, prop, b[prop]);
    }
  return a;
};
var __objRest244 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp263.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols263)
    for (var prop of __getOwnPropSymbols263(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum263.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ServerStack = React263.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest244(_b, ["color"]);
    return React263.createElement(
      "svg",
      __spreadValues263({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React263.createElement("g", { clipPath: "url(#a)" }, React263.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.389 2.08c-.269 0-.583.253-.583.69v1.92c0 .436.314.69.583.69h10.222c.27 0 .584-.254.584-.69V2.77c0-.437-.315-.69-.584-.69zm-2.083.69c0-1.155.88-2.19 2.083-2.19h10.222c1.204 0 2.084 1.035 2.084 2.19v1.92c0 1.154-.88 2.19-2.084 2.19H2.39C1.185 6.88.306 5.843.306 4.69zm4.069.96a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m2.5 0a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-3.3 8.34a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6m3.3-.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-5.07-.96c0-.436.315-.69.584-.69h10.222c.27 0 .584.254.584.69v1.92c0 .437-.315.69-.584.69H2.39c-.269 0-.583-.253-.583-.69zm.584-2.19C1.185 8.12.306 9.158.306 10.31v1.92c0 1.155.88 2.19 2.083 2.19h10.222c1.204 0 2.084-1.035 2.084-2.19v-1.92c0-1.154-.88-2.19-2.084-2.19z",
          clipRule: "evenodd"
        }
      )),
      React263.createElement("defs", null, React263.createElement("clipPath", { id: "a" }, React263.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerStack.displayName = "ServerStack";

// node_modules/@medusajs/icons/dist/esm/server.js
var React264 = __toESM(require_react());
var __defProp264 = Object.defineProperty;
var __getOwnPropSymbols264 = Object.getOwnPropertySymbols;
var __hasOwnProp264 = Object.prototype.hasOwnProperty;
var __propIsEnum264 = Object.prototype.propertyIsEnumerable;
var __defNormalProp264 = (obj, key, value) => key in obj ? __defProp264(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues264 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp264.call(b, prop))
      __defNormalProp264(a, prop, b[prop]);
  if (__getOwnPropSymbols264)
    for (var prop of __getOwnPropSymbols264(b)) {
      if (__propIsEnum264.call(b, prop))
        __defNormalProp264(a, prop, b[prop]);
    }
  return a;
};
var __objRest245 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp264.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols264)
    for (var prop of __getOwnPropSymbols264(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum264.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Server = React264.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest245(_b, ["color"]);
    return React264.createElement(
      "svg",
      __spreadValues264({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React264.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React264.createElement("path", { d: "M12.611 8.167H2.39c-.736 0-1.333.597-1.333 1.333v1.778c0 .736.597 1.333 1.333 1.333H12.61c.736 0 1.333-.597 1.333-1.333V9.5c0-.736-.597-1.333-1.333-1.333" }),
        React264.createElement("path", { d: "m1.136 9.046 1.96-5.886a1.78 1.78 0 0 1 1.687-1.216h5.436c.766 0 1.446.49 1.687 1.216l1.96 5.886M3.278 10.389h2.444" })
      ),
      React264.createElement("defs", null, React264.createElement("clipPath", { id: "a" }, React264.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Server.displayName = "Server";

// node_modules/@medusajs/icons/dist/esm/share.js
var React265 = __toESM(require_react());
var __defProp265 = Object.defineProperty;
var __getOwnPropSymbols265 = Object.getOwnPropertySymbols;
var __hasOwnProp265 = Object.prototype.hasOwnProperty;
var __propIsEnum265 = Object.prototype.propertyIsEnumerable;
var __defNormalProp265 = (obj, key, value) => key in obj ? __defProp265(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues265 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp265.call(b, prop))
      __defNormalProp265(a, prop, b[prop]);
  if (__getOwnPropSymbols265)
    for (var prop of __getOwnPropSymbols265(b)) {
      if (__propIsEnum265.call(b, prop))
        __defNormalProp265(a, prop, b[prop]);
    }
  return a;
};
var __objRest246 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp265.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols265)
    for (var prop of __getOwnPropSymbols265(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum265.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Share = React265.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest246(_b, ["color"]);
    return React265.createElement(
      "svg",
      __spreadValues265({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React265.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.802 6.53 4.506-2.504M4.802 8.47l4.506 2.504M3.056 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.056 5.056a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.056 13.944a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
      )
    );
  }
);
Share.displayName = "Share";

// node_modules/@medusajs/icons/dist/esm/shield-check.js
var React266 = __toESM(require_react());
var __defProp266 = Object.defineProperty;
var __getOwnPropSymbols266 = Object.getOwnPropertySymbols;
var __hasOwnProp266 = Object.prototype.hasOwnProperty;
var __propIsEnum266 = Object.prototype.propertyIsEnumerable;
var __defNormalProp266 = (obj, key, value) => key in obj ? __defProp266(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues266 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp266.call(b, prop))
      __defNormalProp266(a, prop, b[prop]);
  if (__getOwnPropSymbols266)
    for (var prop of __getOwnPropSymbols266(b)) {
      if (__propIsEnum266.call(b, prop))
        __defNormalProp266(a, prop, b[prop]);
    }
  return a;
};
var __objRest247 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp266.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols266)
    for (var prop of __getOwnPropSymbols266(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum266.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ShieldCheck = React266.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest247(_b, ["color"]);
    return React266.createElement(
      "svg",
      __spreadValues266({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React266.createElement(
        "path",
        {
          fill: color,
          d: "M12.64 2 7.974.507c-.31-.1-.638-.099-.948 0L2.36 2a1.55 1.55 0 0 0-1.081 1.482v5.796c0 3.118 4.396 4.781 5.742 5.217a1.56 1.56 0 0 0 .958 0c1.348-.435 5.744-2.098 5.744-5.216V3.482c0-.68-.434-1.275-1.082-1.482m-2.383 3.902-3.02 4a.67.67 0 0 1-.986.086l-1.43-1.333a.667.667 0 0 1 .908-.976l.89.829 2.574-3.41a.667.667 0 0 1 1.064.804"
        }
      )
    );
  }
);
ShieldCheck.displayName = "ShieldCheck";

// node_modules/@medusajs/icons/dist/esm/shipbob.js
var React267 = __toESM(require_react());
var __defProp267 = Object.defineProperty;
var __getOwnPropSymbols267 = Object.getOwnPropertySymbols;
var __hasOwnProp267 = Object.prototype.hasOwnProperty;
var __propIsEnum267 = Object.prototype.propertyIsEnumerable;
var __defNormalProp267 = (obj, key, value) => key in obj ? __defProp267(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues267 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp267.call(b, prop))
      __defNormalProp267(a, prop, b[prop]);
  if (__getOwnPropSymbols267)
    for (var prop of __getOwnPropSymbols267(b)) {
      if (__propIsEnum267.call(b, prop))
        __defNormalProp267(a, prop, b[prop]);
    }
  return a;
};
var Shipbob = React267.forwardRef(
  (props, ref) => {
    return React267.createElement(
      "svg",
      __spreadValues267({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React267.createElement(
        "path",
        {
          fill: "#2470AF",
          d: "m13.488 4.127-.002-.004a1 1 0 0 0-.044-.068l-.012-.016-.04-.048-.023-.025-.034-.034a1 1 0 0 0-.104-.084l-.03-.02q-.02-.013-.043-.026-.039-.021-.078-.037l-.032-.014-.052-.018-.03-.01-.06-.016q-.01-.003-.021-.004l-.076-.012H12.8a.9.9 0 0 0-.541.111L7.5 6.484 4.1 4.567l3.404-1.92 2.27 1.279c.431.243.983.1 1.232-.323a.87.87 0 0 0-.33-1.202L7.955.868a.92.92 0 0 0-.902 0L1.866 3.792a.868.868 0 0 0-.022 1.537L7.05 8.264q.001 0 .002.002a1 1 0 0 0 .083.04l.024.011.052.018a.9.9 0 0 0 .287.048H7.5a1 1 0 0 0 .292-.05q.025-.008.046-.016l.026-.011a1 1 0 0 0 .082-.04h.002l3.854-2.174v3.836l-4.3 2.427-4.304-2.427V7.501a.89.89 0 0 0-.902-.88.89.89 0 0 0-.902.88v2.935c0 .314.171.605.45.762l5.206 2.935a.9.9 0 0 0 .45.117c.155 0 .31-.04.452-.117l5.206-2.935a.88.88 0 0 0 .45-.762v-5.87a.85.85 0 0 0-.12-.44"
        }
      )
    );
  }
);
Shipbob.displayName = "Shipbob";

// node_modules/@medusajs/icons/dist/esm/shopping-bag.js
var React268 = __toESM(require_react());
var __defProp268 = Object.defineProperty;
var __getOwnPropSymbols268 = Object.getOwnPropertySymbols;
var __hasOwnProp268 = Object.prototype.hasOwnProperty;
var __propIsEnum268 = Object.prototype.propertyIsEnumerable;
var __defNormalProp268 = (obj, key, value) => key in obj ? __defProp268(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues268 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp268.call(b, prop))
      __defNormalProp268(a, prop, b[prop]);
  if (__getOwnPropSymbols268)
    for (var prop of __getOwnPropSymbols268(b)) {
      if (__propIsEnum268.call(b, prop))
        __defNormalProp268(a, prop, b[prop]);
    }
  return a;
};
var __objRest248 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp268.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols268)
    for (var prop of __getOwnPropSymbols268(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum268.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ShoppingBag = React268.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest248(_b, ["color"]);
    return React268.createElement(
      "svg",
      __spreadValues268({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React268.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.625 4.16V2.7a1.875 1.875 0 1 1 3.75 0V4.16"
        }
      ),
      React268.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.445 4.16h6.11c.865 0 1.587.66 1.66 1.522l.544 6.25a1.666 1.666 0 0 1-1.66 1.811H3.901a1.666 1.666 0 0 1-1.66-1.81l.543-6.25A1.667 1.667 0 0 1 4.445 4.16"
        }
      )
    );
  }
);
ShoppingBag.displayName = "ShoppingBag";

// node_modules/@medusajs/icons/dist/esm/shopping-cart-solid.js
var React269 = __toESM(require_react());
var __defProp269 = Object.defineProperty;
var __getOwnPropSymbols269 = Object.getOwnPropertySymbols;
var __hasOwnProp269 = Object.prototype.hasOwnProperty;
var __propIsEnum269 = Object.prototype.propertyIsEnumerable;
var __defNormalProp269 = (obj, key, value) => key in obj ? __defProp269(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues269 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp269.call(b, prop))
      __defNormalProp269(a, prop, b[prop]);
  if (__getOwnPropSymbols269)
    for (var prop of __getOwnPropSymbols269(b)) {
      if (__propIsEnum269.call(b, prop))
        __defNormalProp269(a, prop, b[prop]);
    }
  return a;
};
var __objRest249 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp269.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols269)
    for (var prop of __getOwnPropSymbols269(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum269.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ShoppingCartSolid = React269.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest249(_b, ["color"]);
    return React269.createElement(
      "svg",
      __spreadValues269({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React269.createElement(
        "path",
        {
          fill: color,
          d: "M12.267 3.056H3.736l-.157-1.064A1.55 1.55 0 0 0 2.417.71l-1.2-.3a.666.666 0 1 0-.323 1.294l1.2.3a.22.22 0 0 1 .166.183l.917 6.236a1.78 1.78 0 0 0-1.455 1.745c0 .98.798 1.777 1.778 1.777h9.556a.667.667 0 0 0 0-1.333H3.5a.445.445 0 0 1 0-.889h7.581c.67 0 1.263-.426 1.476-1.063l1.185-3.555a1.558 1.558 0 0 0-1.475-2.048M2.833 14.611a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222M12.167 14.611a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222"
        }
      )
    );
  }
);
ShoppingCartSolid.displayName = "ShoppingCartSolid";

// node_modules/@medusajs/icons/dist/esm/shopping-cart.js
var React270 = __toESM(require_react());
var __defProp270 = Object.defineProperty;
var __getOwnPropSymbols270 = Object.getOwnPropertySymbols;
var __hasOwnProp270 = Object.prototype.hasOwnProperty;
var __propIsEnum270 = Object.prototype.propertyIsEnumerable;
var __defNormalProp270 = (obj, key, value) => key in obj ? __defProp270(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues270 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp270.call(b, prop))
      __defNormalProp270(a, prop, b[prop]);
  if (__getOwnPropSymbols270)
    for (var prop of __getOwnPropSymbols270(b)) {
      if (__propIsEnum270.call(b, prop))
        __defNormalProp270(a, prop, b[prop]);
    }
  return a;
};
var __objRest250 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp270.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols270)
    for (var prop of __getOwnPropSymbols270(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum270.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ShoppingCart = React270.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest250(_b, ["color"]);
    return React270.createElement(
      "svg",
      __spreadValues270({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React270.createElement("g", { clipPath: "url(#a)" }, React270.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M1.631.37a.75.75 0 0 0-.364 1.455l1.201.3a.14.14 0 0 1 .104.115l.238 1.615.005.038.663 4.501a1.862 1.862 0 0 0 .416 3.675h9.555a.75.75 0 0 0 0-1.5H3.894a.362.362 0 0 1 0-.722h.403a1 1 0 0 0 .083 0h7.095c.704 0 1.332-.45 1.556-1.121l1.184-3.555a1.64 1.64 0 0 0-1.555-2.157H4.202l-.146-.992A1.64 1.64 0 0 0 2.832.67zm2.792 4.144.564 3.833h6.488c.06 0 .114-.038.132-.094l1.185-3.556a.138.138 0 0 0-.132-.183zM3.227 14.653a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222m10.445-1.111a1.111 1.111 0 1 1-2.223 0 1.111 1.111 0 0 1 2.223 0",
          clipRule: "evenodd"
        }
      )),
      React270.createElement("defs", null, React270.createElement("clipPath", { id: "a" }, React270.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ShoppingCart.displayName = "ShoppingCart";

// node_modules/@medusajs/icons/dist/esm/shopping.js
var React271 = __toESM(require_react());
var __defProp271 = Object.defineProperty;
var __getOwnPropSymbols271 = Object.getOwnPropertySymbols;
var __hasOwnProp271 = Object.prototype.hasOwnProperty;
var __propIsEnum271 = Object.prototype.propertyIsEnumerable;
var __defNormalProp271 = (obj, key, value) => key in obj ? __defProp271(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues271 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp271.call(b, prop))
      __defNormalProp271(a, prop, b[prop]);
  if (__getOwnPropSymbols271)
    for (var prop of __getOwnPropSymbols271(b)) {
      if (__propIsEnum271.call(b, prop))
        __defNormalProp271(a, prop, b[prop]);
    }
  return a;
};
var __objRest251 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp271.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols271)
    for (var prop of __getOwnPropSymbols271(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum271.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Shopping = React271.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest251(_b, ["color"]);
    return React271.createElement(
      "svg",
      __spreadValues271({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React271.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React271.createElement("path", { d: "M8.333 4.842a1.67 1.67 0 0 0-1.307-.633H3.39c-.86 0-1.578.653-1.66 1.508l-.515 5.417a1.667 1.667 0 0 0 1.659 1.825h1.292" }),
        React271.createElement("path", { d: "M8.184 7.125h3.631c.86 0 1.58.655 1.66 1.51l.312 3.334a1.667 1.667 0 0 1-1.66 1.822H7.873c-.982 0-1.751-.845-1.66-1.822l.313-3.334c.08-.856.8-1.51 1.66-1.51M3.542 4.208V2.542a1.666 1.666 0 1 1 3.333 0v1.666" }),
        React271.createElement("path", { d: "M11.458 9.209v.208a1.459 1.459 0 0 1-2.916 0v-.208" })
      ),
      React271.createElement("defs", null, React271.createElement("clipPath", { id: "a" }, React271.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Shopping.displayName = "Shopping";

// node_modules/@medusajs/icons/dist/esm/sidebar-left.js
var React272 = __toESM(require_react());
var __defProp272 = Object.defineProperty;
var __getOwnPropSymbols272 = Object.getOwnPropertySymbols;
var __hasOwnProp272 = Object.prototype.hasOwnProperty;
var __propIsEnum272 = Object.prototype.propertyIsEnumerable;
var __defNormalProp272 = (obj, key, value) => key in obj ? __defProp272(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues272 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp272.call(b, prop))
      __defNormalProp272(a, prop, b[prop]);
  if (__getOwnPropSymbols272)
    for (var prop of __getOwnPropSymbols272(b)) {
      if (__propIsEnum272.call(b, prop))
        __defNormalProp272(a, prop, b[prop]);
    }
  return a;
};
var __objRest252 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp272.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols272)
    for (var prop of __getOwnPropSymbols272(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum272.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SidebarLeft = React272.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest252(_b, ["color"]);
    return React272.createElement(
      "svg",
      __spreadValues272({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React272.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React272.createElement("path", { d: "M12.167 1.75H2.833c-.982 0-1.777.824-1.777 1.84v7.82c0 1.016.795 1.84 1.777 1.84h9.334c.982 0 1.777-.824 1.777-1.84V3.59c0-1.016-.796-1.84-1.777-1.84M3.9 4.5v6" })
      ),
      React272.createElement("defs", null, React272.createElement("clipPath", { id: "a" }, React272.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SidebarLeft.displayName = "SidebarLeft";

// node_modules/@medusajs/icons/dist/esm/sidebar-right.js
var React273 = __toESM(require_react());
var __defProp273 = Object.defineProperty;
var __getOwnPropSymbols273 = Object.getOwnPropertySymbols;
var __hasOwnProp273 = Object.prototype.hasOwnProperty;
var __propIsEnum273 = Object.prototype.propertyIsEnumerable;
var __defNormalProp273 = (obj, key, value) => key in obj ? __defProp273(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues273 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp273.call(b, prop))
      __defNormalProp273(a, prop, b[prop]);
  if (__getOwnPropSymbols273)
    for (var prop of __getOwnPropSymbols273(b)) {
      if (__propIsEnum273.call(b, prop))
        __defNormalProp273(a, prop, b[prop]);
    }
  return a;
};
var __objRest253 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp273.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols273)
    for (var prop of __getOwnPropSymbols273(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum273.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SidebarRight = React273.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest253(_b, ["color"]);
    return React273.createElement(
      "svg",
      __spreadValues273({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React273.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React273.createElement("path", { d: "M2.833 13.25h9.334c.982 0 1.777-.824 1.777-1.84V3.59c0-1.016-.796-1.84-1.777-1.84H2.833c-.981 0-1.777.824-1.777 1.84v7.82c0 1.016.796 1.84 1.777 1.84M11.1 4.5v6" })
      ),
      React273.createElement("defs", null, React273.createElement("clipPath", { id: "a" }, React273.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SidebarRight.displayName = "SidebarRight";

// node_modules/@medusajs/icons/dist/esm/slack.js
var React274 = __toESM(require_react());
var __defProp274 = Object.defineProperty;
var __getOwnPropSymbols274 = Object.getOwnPropertySymbols;
var __hasOwnProp274 = Object.prototype.hasOwnProperty;
var __propIsEnum274 = Object.prototype.propertyIsEnumerable;
var __defNormalProp274 = (obj, key, value) => key in obj ? __defProp274(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues274 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp274.call(b, prop))
      __defNormalProp274(a, prop, b[prop]);
  if (__getOwnPropSymbols274)
    for (var prop of __getOwnPropSymbols274(b)) {
      if (__propIsEnum274.call(b, prop))
        __defNormalProp274(a, prop, b[prop]);
    }
  return a;
};
var Slack = React274.forwardRef(
  (props, ref) => {
    return React274.createElement(
      "svg",
      __spreadValues274({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React274.createElement(
        "path",
        {
          fill: "#E01E5A",
          d: "M3.573 9.309a1.41 1.41 0 0 1-1.412 1.412A1.41 1.41 0 0 1 .749 9.309c0-.78.631-1.412 1.412-1.412h1.412zm.706 0c0-.78.631-1.412 1.412-1.412s1.412.631 1.412 1.412v3.53a1.41 1.41 0 0 1-1.412 1.412 1.41 1.41 0 0 1-1.412-1.412z"
        }
      ),
      React274.createElement(
        "path",
        {
          fill: "#36C5F0",
          d: "M5.693 3.568c-.78 0-1.41-.63-1.41-1.41S4.914.75 5.694.75s1.41.63 1.41 1.41v1.41zm0 .716c.78 0 1.41.63 1.41 1.41s-.63 1.409-1.41 1.409H2.16c-.78 0-1.41-.63-1.41-1.41s.63-1.41 1.41-1.41z"
        }
      ),
      React274.createElement(
        "path",
        {
          fill: "#2EB67D",
          d: "M11.427 5.693c0-.78.631-1.41 1.412-1.41a1.41 1.41 0 1 1 0 2.82h-1.412zm-.706 0c0 .78-.631 1.41-1.412 1.41a1.41 1.41 0 0 1-1.412-1.41V2.16c0-.78.631-1.41 1.412-1.41s1.412.63 1.412 1.41z"
        }
      ),
      React274.createElement(
        "path",
        {
          fill: "#ECB22E",
          d: "M9.307 11.427c.78 0 1.41.631 1.41 1.412a1.41 1.41 0 1 1-2.82 0v-1.412zm0-.706a1.41 1.41 0 0 1-1.41-1.412c0-.78.63-1.412 1.41-1.412h3.534c.78 0 1.41.631 1.41 1.412s-.63 1.412-1.41 1.412z"
        }
      )
    );
  }
);
Slack.displayName = "Slack";

// node_modules/@medusajs/icons/dist/esm/snooze.js
var React275 = __toESM(require_react());
var __defProp275 = Object.defineProperty;
var __getOwnPropSymbols275 = Object.getOwnPropertySymbols;
var __hasOwnProp275 = Object.prototype.hasOwnProperty;
var __propIsEnum275 = Object.prototype.propertyIsEnumerable;
var __defNormalProp275 = (obj, key, value) => key in obj ? __defProp275(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues275 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp275.call(b, prop))
      __defNormalProp275(a, prop, b[prop]);
  if (__getOwnPropSymbols275)
    for (var prop of __getOwnPropSymbols275(b)) {
      if (__propIsEnum275.call(b, prop))
        __defNormalProp275(a, prop, b[prop]);
    }
  return a;
};
var __objRest254 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp275.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols275)
    for (var prop of __getOwnPropSymbols275(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum275.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Snooze = React275.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest254(_b, ["color"]);
    return React275.createElement(
      "svg",
      __spreadValues275({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React275.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React275.createElement("path", { d: "M9.196 5.649h4.22l-3.84 4.63h4.09M3.647 10.186h3.537L4.02 14h3.368H4.02M1.334 1h5.108L1.716 6.697h4.99" })
      ),
      React275.createElement("defs", null, React275.createElement("clipPath", { id: "a" }, React275.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Snooze.displayName = "Snooze";

// node_modules/@medusajs/icons/dist/esm/sparkles-mini-solid.js
var React276 = __toESM(require_react());
var __defProp276 = Object.defineProperty;
var __getOwnPropSymbols276 = Object.getOwnPropertySymbols;
var __hasOwnProp276 = Object.prototype.hasOwnProperty;
var __propIsEnum276 = Object.prototype.propertyIsEnumerable;
var __defNormalProp276 = (obj, key, value) => key in obj ? __defProp276(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues276 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp276.call(b, prop))
      __defNormalProp276(a, prop, b[prop]);
  if (__getOwnPropSymbols276)
    for (var prop of __getOwnPropSymbols276(b)) {
      if (__propIsEnum276.call(b, prop))
        __defNormalProp276(a, prop, b[prop]);
    }
  return a;
};
var __objRest255 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp276.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols276)
    for (var prop of __getOwnPropSymbols276(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum276.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SparklesMiniSolid = React276.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest255(_b, ["color"]);
    return React276.createElement(
      "svg",
      __spreadValues276({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React276.createElement(
        "path",
        {
          fill: color,
          d: "m1.582 3.905 1.123.375.374 1.122a.446.446 0 0 0 .845 0l.374-1.122 1.122-.375a.444.444 0 0 0 0-.842l-1.122-.375-.374-1.122c-.122-.363-.722-.363-.844 0l-.374 1.122-1.123.375a.444.444 0 0 0 0 .842M13.418 11.063l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0 0 .842l1.123.375.374 1.122a.446.446 0 0 0 .844 0l.374-1.122 1.123-.375a.445.445 0 0 0 0-.842M7.967 9.531l-1.801-.713-.713-1.802c-.202-.508-1.038-.508-1.24 0L3.5 8.818l-1.8.713a.668.668 0 0 0 0 1.24l1.8.712.713 1.802a.667.667 0 0 0 1.239 0l.713-1.802 1.8-.713a.667.667 0 0 0 .002-1.239M13.3 4.198l-1.8-.713-.714-1.802c-.201-.508-1.038-.508-1.24 0l-.713 1.802-1.8.713a.668.668 0 0 0 0 1.239l1.8.713.713 1.801a.667.667 0 0 0 1.24 0l.712-1.801 1.801-.713a.668.668 0 0 0 .001-1.24"
        }
      )
    );
  }
);
SparklesMiniSolid.displayName = "SparklesMiniSolid";

// node_modules/@medusajs/icons/dist/esm/sparkles-mini.js
var React277 = __toESM(require_react());
var __defProp277 = Object.defineProperty;
var __getOwnPropSymbols277 = Object.getOwnPropertySymbols;
var __hasOwnProp277 = Object.prototype.hasOwnProperty;
var __propIsEnum277 = Object.prototype.propertyIsEnumerable;
var __defNormalProp277 = (obj, key, value) => key in obj ? __defProp277(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues277 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp277.call(b, prop))
      __defNormalProp277(a, prop, b[prop]);
  if (__getOwnPropSymbols277)
    for (var prop of __getOwnPropSymbols277(b)) {
      if (__propIsEnum277.call(b, prop))
        __defNormalProp277(a, prop, b[prop]);
    }
  return a;
};
var __objRest256 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp277.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols277)
    for (var prop of __getOwnPropSymbols277(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum277.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SparklesMini = React277.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest256(_b, ["color"]);
    return React277.createElement(
      "svg",
      __spreadValues277({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React277.createElement(
        "path",
        {
          stroke: color,
          strokeWidth: 1.5,
          d: "m3.584 2.926.119.355.355.119.253.084-.252.084-.356.119-.118.355-.085.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.355.085-.254zM12.058 11.4l.253.084-.252.084-.355.119-.12.355-.084.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.356.085-.253.084.253.119.356z"
        }
      ),
      React277.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.833 7.262.819 2.07 2.07.819-2.07.818-.819 2.07-.818-2.07-2.07-.818 2.07-.82zM10.167 1.928l.818 2.07 2.07.82-2.07.818-.818 2.07-.819-2.07-2.07-.819L9.348 4z"
        }
      )
    );
  }
);
SparklesMini.displayName = "SparklesMini";

// node_modules/@medusajs/icons/dist/esm/sparkles-solid.js
var React278 = __toESM(require_react());
var __defProp278 = Object.defineProperty;
var __getOwnPropSymbols278 = Object.getOwnPropertySymbols;
var __hasOwnProp278 = Object.prototype.hasOwnProperty;
var __propIsEnum278 = Object.prototype.propertyIsEnumerable;
var __defNormalProp278 = (obj, key, value) => key in obj ? __defProp278(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues278 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp278.call(b, prop))
      __defNormalProp278(a, prop, b[prop]);
  if (__getOwnPropSymbols278)
    for (var prop of __getOwnPropSymbols278(b)) {
      if (__propIsEnum278.call(b, prop))
        __defNormalProp278(a, prop, b[prop]);
    }
  return a;
};
var __objRest257 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp278.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols278)
    for (var prop of __getOwnPropSymbols278(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum278.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SparklesSolid = React278.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest257(_b, ["color"]);
    return React278.createElement(
      "svg",
      __spreadValues278({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React278.createElement(
        "path",
        {
          fill: color,
          d: "m1.582 3.905 1.123.375.374 1.122a.446.446 0 0 0 .844 0l.375-1.122 1.122-.375a.444.444 0 0 0 0-.842l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0-.001.842M13.418 11.063l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0 0 .842l1.123.375.374 1.122a.446.446 0 0 0 .844 0l.374-1.122 1.123-.375a.445.445 0 0 0 0-.842M7.967 9.531l-1.801-.713-.713-1.802c-.202-.508-1.038-.508-1.24 0L3.5 8.818l-1.8.713a.668.668 0 0 0 0 1.24l1.8.712.713 1.802a.667.667 0 0 0 1.239 0l.713-1.802 1.8-.713a.667.667 0 0 0 .002-1.239M13.3 4.198l-1.8-.713-.714-1.802c-.201-.508-1.038-.508-1.24 0l-.713 1.802-1.8.713a.668.668 0 0 0 0 1.239l1.8.713.713 1.802a.667.667 0 0 0 1.24 0l.712-1.802 1.801-.713a.668.668 0 0 0 .001-1.24"
        }
      )
    );
  }
);
SparklesSolid.displayName = "SparklesSolid";

// node_modules/@medusajs/icons/dist/esm/sparkles.js
var React279 = __toESM(require_react());
var __defProp279 = Object.defineProperty;
var __getOwnPropSymbols279 = Object.getOwnPropertySymbols;
var __hasOwnProp279 = Object.prototype.hasOwnProperty;
var __propIsEnum279 = Object.prototype.propertyIsEnumerable;
var __defNormalProp279 = (obj, key, value) => key in obj ? __defProp279(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues279 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp279.call(b, prop))
      __defNormalProp279(a, prop, b[prop]);
  if (__getOwnPropSymbols279)
    for (var prop of __getOwnPropSymbols279(b)) {
      if (__propIsEnum279.call(b, prop))
        __defNormalProp279(a, prop, b[prop]);
    }
  return a;
};
var __objRest258 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp279.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols279)
    for (var prop of __getOwnPropSymbols279(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum279.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Sparkles = React279.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest258(_b, ["color"]);
    return React279.createElement(
      "svg",
      __spreadValues279({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React279.createElement(
        "path",
        {
          stroke: color,
          strokeWidth: 1.5,
          d: "m3.584 2.926.119.355.355.119.253.084-.252.084-.356.119-.118.355-.085.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.355.085-.254zM12.058 11.4l.253.084-.252.084-.355.119-.12.355-.084.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.355.085-.254.084.254.119.355z"
        }
      ),
      React279.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.833 7.262.819 2.07 2.07.819-2.07.818-.819 2.07-.818-2.07-2.07-.818 2.07-.819zM10.167 1.928l.818 2.07 2.07.82-2.07.818-.818 2.07-.819-2.07-2.07-.819L9.348 4z"
        }
      )
    );
  }
);
Sparkles.displayName = "Sparkles";

// node_modules/@medusajs/icons/dist/esm/spinner.js
var React280 = __toESM(require_react());
var __defProp280 = Object.defineProperty;
var __getOwnPropSymbols280 = Object.getOwnPropertySymbols;
var __hasOwnProp280 = Object.prototype.hasOwnProperty;
var __propIsEnum280 = Object.prototype.propertyIsEnumerable;
var __defNormalProp280 = (obj, key, value) => key in obj ? __defProp280(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues280 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp280.call(b, prop))
      __defNormalProp280(a, prop, b[prop]);
  if (__getOwnPropSymbols280)
    for (var prop of __getOwnPropSymbols280(b)) {
      if (__propIsEnum280.call(b, prop))
        __defNormalProp280(a, prop, b[prop]);
    }
  return a;
};
var __objRest259 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp280.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols280)
    for (var prop of __getOwnPropSymbols280(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum280.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Spinner = React280.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest259(_b, ["color"]);
    return React280.createElement(
      "svg",
      __spreadValues280({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React280.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React280.createElement("path", { d: "M7.667 1.056v2.222" }),
        React280.createElement("path", { d: "m12.224 2.943-1.572 1.571", opacity: 0.88 }),
        React280.createElement("path", { d: "M14.111 7.5H11.89", opacity: 0.75 }),
        React280.createElement("path", { d: "m12.224 12.057-1.572-1.571", opacity: 0.63 }),
        React280.createElement("path", { d: "M7.667 13.945v-2.223", opacity: 0.5 }),
        React280.createElement("path", { d: "m3.11 12.057 1.57-1.571", opacity: 0.38 }),
        React280.createElement("path", { d: "M1.222 7.5h2.222", opacity: 0.25 }),
        React280.createElement("path", { d: "m3.11 2.943 1.57 1.571", opacity: 0.13 })
      ),
      React280.createElement("defs", null, React280.createElement("clipPath", { id: "a" }, React280.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Spinner.displayName = "Spinner";

// node_modules/@medusajs/icons/dist/esm/square-blue-solid.js
var React281 = __toESM(require_react());
var __defProp281 = Object.defineProperty;
var __getOwnPropSymbols281 = Object.getOwnPropertySymbols;
var __hasOwnProp281 = Object.prototype.hasOwnProperty;
var __propIsEnum281 = Object.prototype.propertyIsEnumerable;
var __defNormalProp281 = (obj, key, value) => key in obj ? __defProp281(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues281 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp281.call(b, prop))
      __defNormalProp281(a, prop, b[prop]);
  if (__getOwnPropSymbols281)
    for (var prop of __getOwnPropSymbols281(b)) {
      if (__propIsEnum281.call(b, prop))
        __defNormalProp281(a, prop, b[prop]);
    }
  return a;
};
var __objRest260 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp281.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols281)
    for (var prop of __getOwnPropSymbols281(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum281.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareBlueSolid = React281.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest260(_b, ["color"]);
    return React281.createElement(
      "svg",
      __spreadValues281({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React281.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#60A5FA", rx: 2 }),
      React281.createElement(
        "rect",
        {
          width: 7.5,
          height: 7.5,
          x: 3.75,
          y: 3.75,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.5,
          rx: 1.75
        }
      )
    );
  }
);
SquareBlueSolid.displayName = "SquareBlueSolid";

// node_modules/@medusajs/icons/dist/esm/square-green-solid.js
var React282 = __toESM(require_react());
var __defProp282 = Object.defineProperty;
var __getOwnPropSymbols282 = Object.getOwnPropertySymbols;
var __hasOwnProp282 = Object.prototype.hasOwnProperty;
var __propIsEnum282 = Object.prototype.propertyIsEnumerable;
var __defNormalProp282 = (obj, key, value) => key in obj ? __defProp282(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues282 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp282.call(b, prop))
      __defNormalProp282(a, prop, b[prop]);
  if (__getOwnPropSymbols282)
    for (var prop of __getOwnPropSymbols282(b)) {
      if (__propIsEnum282.call(b, prop))
        __defNormalProp282(a, prop, b[prop]);
    }
  return a;
};
var __objRest261 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp282.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols282)
    for (var prop of __getOwnPropSymbols282(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum282.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareGreenSolid = React282.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest261(_b, ["color"]);
    return React282.createElement(
      "svg",
      __spreadValues282({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React282.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#10B981", rx: 2 }),
      React282.createElement(
        "rect",
        {
          width: 7.5,
          height: 7.5,
          x: 3.75,
          y: 3.75,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.5,
          rx: 1.75
        }
      )
    );
  }
);
SquareGreenSolid.displayName = "SquareGreenSolid";

// node_modules/@medusajs/icons/dist/esm/square-grey-solid.js
var React283 = __toESM(require_react());
var __defProp283 = Object.defineProperty;
var __getOwnPropSymbols283 = Object.getOwnPropertySymbols;
var __hasOwnProp283 = Object.prototype.hasOwnProperty;
var __propIsEnum283 = Object.prototype.propertyIsEnumerable;
var __defNormalProp283 = (obj, key, value) => key in obj ? __defProp283(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues283 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp283.call(b, prop))
      __defNormalProp283(a, prop, b[prop]);
  if (__getOwnPropSymbols283)
    for (var prop of __getOwnPropSymbols283(b)) {
      if (__propIsEnum283.call(b, prop))
        __defNormalProp283(a, prop, b[prop]);
    }
  return a;
};
var __objRest262 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp283.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols283)
    for (var prop of __getOwnPropSymbols283(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum283.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareGreySolid = React283.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest262(_b, ["color"]);
    return React283.createElement(
      "svg",
      __spreadValues283({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React283.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#71717A", rx: 2 }),
      React283.createElement(
        "rect",
        {
          width: 7.5,
          height: 7.5,
          x: 3.75,
          y: 3.75,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.5,
          rx: 1.75
        }
      )
    );
  }
);
SquareGreySolid.displayName = "SquareGreySolid";

// node_modules/@medusajs/icons/dist/esm/square-orange-solid.js
var React284 = __toESM(require_react());
var __defProp284 = Object.defineProperty;
var __getOwnPropSymbols284 = Object.getOwnPropertySymbols;
var __hasOwnProp284 = Object.prototype.hasOwnProperty;
var __propIsEnum284 = Object.prototype.propertyIsEnumerable;
var __defNormalProp284 = (obj, key, value) => key in obj ? __defProp284(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues284 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp284.call(b, prop))
      __defNormalProp284(a, prop, b[prop]);
  if (__getOwnPropSymbols284)
    for (var prop of __getOwnPropSymbols284(b)) {
      if (__propIsEnum284.call(b, prop))
        __defNormalProp284(a, prop, b[prop]);
    }
  return a;
};
var __objRest263 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp284.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols284)
    for (var prop of __getOwnPropSymbols284(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum284.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareOrangeSolid = React284.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest263(_b, ["color"]);
    return React284.createElement(
      "svg",
      __spreadValues284({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React284.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#F97316", rx: 2 }),
      React284.createElement(
        "rect",
        {
          width: 7.5,
          height: 7.5,
          x: 3.75,
          y: 3.75,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.5,
          rx: 1.75
        }
      )
    );
  }
);
SquareOrangeSolid.displayName = "SquareOrangeSolid";

// node_modules/@medusajs/icons/dist/esm/square-purple-solid.js
var React285 = __toESM(require_react());
var __defProp285 = Object.defineProperty;
var __getOwnPropSymbols285 = Object.getOwnPropertySymbols;
var __hasOwnProp285 = Object.prototype.hasOwnProperty;
var __propIsEnum285 = Object.prototype.propertyIsEnumerable;
var __defNormalProp285 = (obj, key, value) => key in obj ? __defProp285(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues285 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp285.call(b, prop))
      __defNormalProp285(a, prop, b[prop]);
  if (__getOwnPropSymbols285)
    for (var prop of __getOwnPropSymbols285(b)) {
      if (__propIsEnum285.call(b, prop))
        __defNormalProp285(a, prop, b[prop]);
    }
  return a;
};
var __objRest264 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp285.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols285)
    for (var prop of __getOwnPropSymbols285(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum285.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquarePurpleSolid = React285.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest264(_b, ["color"]);
    return React285.createElement(
      "svg",
      __spreadValues285({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React285.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#A78BFA", rx: 2 }),
      React285.createElement(
        "rect",
        {
          width: 7.5,
          height: 7.5,
          x: 3.75,
          y: 3.75,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.5,
          rx: 1.75
        }
      )
    );
  }
);
SquarePurpleSolid.displayName = "SquarePurpleSolid";

// node_modules/@medusajs/icons/dist/esm/square-red-solid.js
var React286 = __toESM(require_react());
var __defProp286 = Object.defineProperty;
var __getOwnPropSymbols286 = Object.getOwnPropertySymbols;
var __hasOwnProp286 = Object.prototype.hasOwnProperty;
var __propIsEnum286 = Object.prototype.propertyIsEnumerable;
var __defNormalProp286 = (obj, key, value) => key in obj ? __defProp286(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues286 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp286.call(b, prop))
      __defNormalProp286(a, prop, b[prop]);
  if (__getOwnPropSymbols286)
    for (var prop of __getOwnPropSymbols286(b)) {
      if (__propIsEnum286.call(b, prop))
        __defNormalProp286(a, prop, b[prop]);
    }
  return a;
};
var __objRest265 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp286.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols286)
    for (var prop of __getOwnPropSymbols286(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum286.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareRedSolid = React286.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest265(_b, ["color"]);
    return React286.createElement(
      "svg",
      __spreadValues286({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React286.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#F43F5E", rx: 2 }),
      React286.createElement(
        "rect",
        {
          width: 7.5,
          height: 7.5,
          x: 3.75,
          y: 3.75,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.5,
          rx: 1.75
        }
      )
    );
  }
);
SquareRedSolid.displayName = "SquareRedSolid";

// node_modules/@medusajs/icons/dist/esm/square-two-stack-mini.js
var React287 = __toESM(require_react());
var __defProp287 = Object.defineProperty;
var __getOwnPropSymbols287 = Object.getOwnPropertySymbols;
var __hasOwnProp287 = Object.prototype.hasOwnProperty;
var __propIsEnum287 = Object.prototype.propertyIsEnumerable;
var __defNormalProp287 = (obj, key, value) => key in obj ? __defProp287(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues287 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp287.call(b, prop))
      __defNormalProp287(a, prop, b[prop]);
  if (__getOwnPropSymbols287)
    for (var prop of __getOwnPropSymbols287(b)) {
      if (__propIsEnum287.call(b, prop))
        __defNormalProp287(a, prop, b[prop]);
    }
  return a;
};
var __objRest266 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp287.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols287)
    for (var prop of __getOwnPropSymbols287(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum287.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareTwoStackMini = React287.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest266(_b, ["color"]);
    return React287.createElement(
      "svg",
      __spreadValues287({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React287.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React287.createElement("path", { d: "M12.167 4.166H5.944c-.981 0-1.777.796-1.777 1.778v6.222c0 .982.796 1.778 1.777 1.778h6.223c.982 0 1.777-.796 1.777-1.778V5.944c0-.982-.796-1.778-1.777-1.778" }),
        React287.createElement("path", { d: "M1.99 10.165 1.075 4.01a1.78 1.78 0 0 1 1.497-2.02l6.155-.914a1.78 1.78 0 0 1 1.909 1.091" })
      ),
      React287.createElement("defs", null, React287.createElement("clipPath", { id: "a" }, React287.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SquareTwoStackMini.displayName = "SquareTwoStackMini";

// node_modules/@medusajs/icons/dist/esm/square-two-stack-solid.js
var React288 = __toESM(require_react());
var __defProp288 = Object.defineProperty;
var __getOwnPropSymbols288 = Object.getOwnPropertySymbols;
var __hasOwnProp288 = Object.prototype.hasOwnProperty;
var __propIsEnum288 = Object.prototype.propertyIsEnumerable;
var __defNormalProp288 = (obj, key, value) => key in obj ? __defProp288(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues288 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp288.call(b, prop))
      __defNormalProp288(a, prop, b[prop]);
  if (__getOwnPropSymbols288)
    for (var prop of __getOwnPropSymbols288(b)) {
      if (__propIsEnum288.call(b, prop))
        __defNormalProp288(a, prop, b[prop]);
    }
  return a;
};
var __objRest267 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp288.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols288)
    for (var prop of __getOwnPropSymbols288(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum288.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareTwoStackSolid = React288.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest267(_b, ["color"]);
    return React288.createElement(
      "svg",
      __spreadValues288({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React288.createElement(
        "path",
        {
          fill: color,
          d: "M12.167 4.833h-2v-2c0-.857-.698-1.555-1.556-1.555H2.833c-.857 0-1.555.698-1.555 1.555v5.778c0 .858.698 1.556 1.555 1.556h2v2c0 .857.698 1.555 1.556 1.555h5.778c.857 0 1.555-.697 1.555-1.555V6.389c0-.858-.697-1.556-1.555-1.556"
        }
      )
    );
  }
);
SquareTwoStackSolid.displayName = "SquareTwoStackSolid";

// node_modules/@medusajs/icons/dist/esm/square-two-stack.js
var React289 = __toESM(require_react());
var __defProp289 = Object.defineProperty;
var __getOwnPropSymbols289 = Object.getOwnPropertySymbols;
var __hasOwnProp289 = Object.prototype.hasOwnProperty;
var __propIsEnum289 = Object.prototype.propertyIsEnumerable;
var __defNormalProp289 = (obj, key, value) => key in obj ? __defProp289(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues289 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp289.call(b, prop))
      __defNormalProp289(a, prop, b[prop]);
  if (__getOwnPropSymbols289)
    for (var prop of __getOwnPropSymbols289(b)) {
      if (__propIsEnum289.call(b, prop))
        __defNormalProp289(a, prop, b[prop]);
    }
  return a;
};
var __objRest268 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp289.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols289)
    for (var prop of __getOwnPropSymbols289(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum289.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquareTwoStack = React289.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest268(_b, ["color"]);
    return React289.createElement(
      "svg",
      __spreadValues289({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React289.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React289.createElement("path", { d: "M12.167 4.167H5.944c-.981 0-1.777.796-1.777 1.777v6.223c0 .982.796 1.777 1.777 1.777h6.223c.982 0 1.777-.796 1.777-1.777V5.944c0-.981-.796-1.777-1.777-1.777" }),
        React289.createElement("path", { d: "M1.99 10.165 1.075 4.01a1.78 1.78 0 0 1 1.497-2.02l6.155-.914a1.78 1.78 0 0 1 1.909 1.092" })
      ),
      React289.createElement("defs", null, React289.createElement("clipPath", { id: "a" }, React289.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SquareTwoStack.displayName = "SquareTwoStack";

// node_modules/@medusajs/icons/dist/esm/squares-plus-solid.js
var React290 = __toESM(require_react());
var __defProp290 = Object.defineProperty;
var __getOwnPropSymbols290 = Object.getOwnPropertySymbols;
var __hasOwnProp290 = Object.prototype.hasOwnProperty;
var __propIsEnum290 = Object.prototype.propertyIsEnumerable;
var __defNormalProp290 = (obj, key, value) => key in obj ? __defProp290(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues290 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp290.call(b, prop))
      __defNormalProp290(a, prop, b[prop]);
  if (__getOwnPropSymbols290)
    for (var prop of __getOwnPropSymbols290(b)) {
      if (__propIsEnum290.call(b, prop))
        __defNormalProp290(a, prop, b[prop]);
    }
  return a;
};
var __objRest269 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp290.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols290)
    for (var prop of __getOwnPropSymbols290(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum290.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquaresPlusSolid = React290.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest269(_b, ["color"]);
    return React290.createElement(
      "svg",
      __spreadValues290({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React290.createElement(
        "path",
        {
          fill: color,
          d: "M5.056 1.278H2.833c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M12.167 1.278H9.944c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M5.056 8.389H2.833c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V9.944c0-.859-.696-1.555-1.555-1.555M13.278 10.167h-1.556V8.61a.667.667 0 0 0-1.333 0v1.556H8.833a.667.667 0 0 0 0 1.333h1.556v1.556a.667.667 0 0 0 1.333 0V11.5h1.556a.667.667 0 0 0 0-1.333"
        }
      )
    );
  }
);
SquaresPlusSolid.displayName = "SquaresPlusSolid";

// node_modules/@medusajs/icons/dist/esm/squares-plus.js
var React291 = __toESM(require_react());
var __defProp291 = Object.defineProperty;
var __getOwnPropSymbols291 = Object.getOwnPropertySymbols;
var __hasOwnProp291 = Object.prototype.hasOwnProperty;
var __propIsEnum291 = Object.prototype.propertyIsEnumerable;
var __defNormalProp291 = (obj, key, value) => key in obj ? __defProp291(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues291 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp291.call(b, prop))
      __defNormalProp291(a, prop, b[prop]);
  if (__getOwnPropSymbols291)
    for (var prop of __getOwnPropSymbols291(b)) {
      if (__propIsEnum291.call(b, prop))
        __defNormalProp291(a, prop, b[prop]);
    }
  return a;
};
var __objRest270 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp291.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols291)
    for (var prop of __getOwnPropSymbols291(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum291.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SquaresPlus = React291.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest270(_b, ["color"]);
    return React291.createElement(
      "svg",
      __spreadValues291({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React291.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.056 1.944H2.833a.89.89 0 0 0-.889.89v2.221c0 .491.398.89.89.89h2.222c.49 0 .888-.399.888-.89V2.833a.89.89 0 0 0-.888-.889M12.167 1.944H9.944a.89.89 0 0 0-.888.89v2.221c0 .491.398.89.888.89h2.223c.49 0 .889-.399.889-.89V2.833a.89.89 0 0 0-.89-.889M5.056 9.056H2.833a.89.89 0 0 0-.889.889v2.222c0 .49.398.889.89.889h2.222c.49 0 .888-.398.888-.89V9.946a.89.89 0 0 0-.888-.89M11.056 8.611v4.445M13.278 10.833H8.833"
        }
      )
    );
  }
);
SquaresPlus.displayName = "SquaresPlus";

// node_modules/@medusajs/icons/dist/esm/stack-perspective.js
var React292 = __toESM(require_react());
var __defProp292 = Object.defineProperty;
var __getOwnPropSymbols292 = Object.getOwnPropertySymbols;
var __hasOwnProp292 = Object.prototype.hasOwnProperty;
var __propIsEnum292 = Object.prototype.propertyIsEnumerable;
var __defNormalProp292 = (obj, key, value) => key in obj ? __defProp292(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues292 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp292.call(b, prop))
      __defNormalProp292(a, prop, b[prop]);
  if (__getOwnPropSymbols292)
    for (var prop of __getOwnPropSymbols292(b)) {
      if (__propIsEnum292.call(b, prop))
        __defNormalProp292(a, prop, b[prop]);
    }
  return a;
};
var __objRest271 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp292.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols292)
    for (var prop of __getOwnPropSymbols292(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum292.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var StackPerspective = React292.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest271(_b, ["color"]);
    return React292.createElement(
      "svg",
      __spreadValues292({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React292.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m2.389 10.389-.748.25a.444.444 0 0 1-.585-.422V4.783c0-.303.297-.517.585-.421l.748.25M5.944 12.055l-.718.3a.445.445 0 0 1-.615-.41v-8.89c0-.317.323-.532.615-.41l.718.3M8.798 1.124l4.631 2.137c.315.145.516.46.516.807v6.862a.89.89 0 0 1-.516.807l-4.631 2.137a.445.445 0 0 1-.631-.403V1.528c0-.325.336-.54.63-.404"
        }
      )
    );
  }
);
StackPerspective.displayName = "StackPerspective";

// node_modules/@medusajs/icons/dist/esm/star-solid.js
var React293 = __toESM(require_react());
var __defProp293 = Object.defineProperty;
var __getOwnPropSymbols293 = Object.getOwnPropertySymbols;
var __hasOwnProp293 = Object.prototype.hasOwnProperty;
var __propIsEnum293 = Object.prototype.propertyIsEnumerable;
var __defNormalProp293 = (obj, key, value) => key in obj ? __defProp293(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues293 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp293.call(b, prop))
      __defNormalProp293(a, prop, b[prop]);
  if (__getOwnPropSymbols293)
    for (var prop of __getOwnPropSymbols293(b)) {
      if (__propIsEnum293.call(b, prop))
        __defNormalProp293(a, prop, b[prop]);
    }
  return a;
};
var __objRest272 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp293.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols293)
    for (var prop of __getOwnPropSymbols293(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum293.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var StarSolid = React293.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest272(_b, ["color"]);
    return React293.createElement(
      "svg",
      __spreadValues293({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React293.createElement("g", { clipPath: "url(#a)" }, React293.createElement(
        "path",
        {
          fill: color,
          d: "M14.578 5.532a.67.67 0 0 0-.538-.453l-4.106-.597L8.097.76c-.224-.455-.971-.455-1.195 0L5.065 4.481.96 5.078a.667.667 0 0 0-.37 1.137L3.562 9.11 2.86 13.2a.667.667 0 0 0 .967.702L7.5 11.973l3.673 1.931a.66.66 0 0 0 .702-.05.67.67 0 0 0 .265-.653l-.702-4.09 2.971-2.895a.67.67 0 0 0 .17-.684z"
        }
      )),
      React293.createElement("defs", null, React293.createElement("clipPath", { id: "a" }, React293.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
StarSolid.displayName = "StarSolid";

// node_modules/@medusajs/icons/dist/esm/star.js
var React294 = __toESM(require_react());
var __defProp294 = Object.defineProperty;
var __getOwnPropSymbols294 = Object.getOwnPropertySymbols;
var __hasOwnProp294 = Object.prototype.hasOwnProperty;
var __propIsEnum294 = Object.prototype.propertyIsEnumerable;
var __defNormalProp294 = (obj, key, value) => key in obj ? __defProp294(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues294 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp294.call(b, prop))
      __defNormalProp294(a, prop, b[prop]);
  if (__getOwnPropSymbols294)
    for (var prop of __getOwnPropSymbols294(b)) {
      if (__propIsEnum294.call(b, prop))
        __defNormalProp294(a, prop, b[prop]);
    }
  return a;
};
var __objRest273 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp294.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols294)
    for (var prop of __getOwnPropSymbols294(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum294.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Star = React294.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest273(_b, ["color"]);
    return React294.createElement(
      "svg",
      __spreadValues294({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React294.createElement("g", { clipPath: "url(#a)" }, React294.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.056 9.491 5.09l4.453.647-3.222 3.142.761 4.434L7.5 11.22l-3.983 2.093.76-4.434-3.221-3.142 4.453-.647z"
        }
      )),
      React294.createElement("defs", null, React294.createElement("clipPath", { id: "a" }, React294.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Star.displayName = "Star";

// node_modules/@medusajs/icons/dist/esm/stopwatch.js
var React295 = __toESM(require_react());
var __defProp295 = Object.defineProperty;
var __getOwnPropSymbols295 = Object.getOwnPropertySymbols;
var __hasOwnProp295 = Object.prototype.hasOwnProperty;
var __propIsEnum295 = Object.prototype.propertyIsEnumerable;
var __defNormalProp295 = (obj, key, value) => key in obj ? __defProp295(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues295 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp295.call(b, prop))
      __defNormalProp295(a, prop, b[prop]);
  if (__getOwnPropSymbols295)
    for (var prop of __getOwnPropSymbols295(b)) {
      if (__propIsEnum295.call(b, prop))
        __defNormalProp295(a, prop, b[prop]);
    }
  return a;
};
var __objRest274 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp295.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols295)
    for (var prop of __getOwnPropSymbols295(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum295.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Stopwatch = React295.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest274(_b, ["color"]);
    return React295.createElement(
      "svg",
      __spreadValues295({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React295.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.625 1.042h3.75M7.5 1.042v2.083M7.5 13.542a5.208 5.208 0 1 0 0-10.417 5.208 5.208 0 0 0 0 10.417M5.585 6.418 7.5 8.333M11.875 2.292l1.667 1.666"
        }
      )
    );
  }
);
Stopwatch.displayName = "Stopwatch";

// node_modules/@medusajs/icons/dist/esm/stripe.js
var React296 = __toESM(require_react());
var __defProp296 = Object.defineProperty;
var __getOwnPropSymbols296 = Object.getOwnPropertySymbols;
var __hasOwnProp296 = Object.prototype.hasOwnProperty;
var __propIsEnum296 = Object.prototype.propertyIsEnumerable;
var __defNormalProp296 = (obj, key, value) => key in obj ? __defProp296(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues296 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp296.call(b, prop))
      __defNormalProp296(a, prop, b[prop]);
  if (__getOwnPropSymbols296)
    for (var prop of __getOwnPropSymbols296(b)) {
      if (__propIsEnum296.call(b, prop))
        __defNormalProp296(a, prop, b[prop]);
    }
  return a;
};
var Stripe = React296.forwardRef(
  (props, ref) => {
    return React296.createElement(
      "svg",
      __spreadValues296({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React296.createElement(
        "path",
        {
          fill: "#6772E5",
          fillRule: "evenodd",
          d: "M6.596 4.916c0-.546.454-.757 1.188-.757a7.8 7.8 0 0 1 3.481.901V1.765a9.2 9.2 0 0 0-3.481-.64c-2.829 0-4.726 1.482-4.726 3.957 0 3.87 5.316 3.242 5.316 4.91 0 .653-.558.856-1.343.856-1.158 0-2.653-.48-3.825-1.117v3.338c1.207.526 2.509.8 3.825.806 2.908 0 4.912-1.436 4.912-3.954 0-4.178-5.347-3.431-5.347-5.004",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Stripe.displayName = "Stripe";

// node_modules/@medusajs/icons/dist/esm/sun-solid.js
var React297 = __toESM(require_react());
var __defProp297 = Object.defineProperty;
var __getOwnPropSymbols297 = Object.getOwnPropertySymbols;
var __hasOwnProp297 = Object.prototype.hasOwnProperty;
var __propIsEnum297 = Object.prototype.propertyIsEnumerable;
var __defNormalProp297 = (obj, key, value) => key in obj ? __defProp297(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues297 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp297.call(b, prop))
      __defNormalProp297(a, prop, b[prop]);
  if (__getOwnPropSymbols297)
    for (var prop of __getOwnPropSymbols297(b)) {
      if (__propIsEnum297.call(b, prop))
        __defNormalProp297(a, prop, b[prop]);
    }
  return a;
};
var __objRest275 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp297.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols297)
    for (var prop of __getOwnPropSymbols297(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum297.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SunSolid = React297.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest275(_b, ["color"]);
    return React297.createElement(
      "svg",
      __spreadValues297({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React297.createElement("g", { fill: color, clipPath: "url(#a)" }, React297.createElement("path", { d: "M7.5 2.333c.357 0 .646-.289.646-.646v-.86a.646.646 0 0 0-1.292 0v.86c0 .357.29.646.646.646M11.61 4.036a.64.64 0 0 0 .457-.19l.608-.608a.646.646 0 0 0-.913-.914l-.61.609a.646.646 0 0 0 .458 1.103M14.174 6.854h-.861a.646.646 0 0 0 0 1.292h.86a.646.646 0 0 0 0-1.292M12.067 11.154a.646.646 0 1 0-.914.913l.609.61a.644.644 0 0 0 .912 0 .646.646 0 0 0 0-.915l-.608-.608M7.5 12.667a.646.646 0 0 0-.646.646v.86a.646.646 0 0 0 1.292 0v-.86a.646.646 0 0 0-.646-.646M2.934 11.154l-.61.608a.646.646 0 0 0 .914.914l.608-.609a.646.646 0 0 0-.912-.913M2.333 7.5a.646.646 0 0 0-.645-.646H.826a.646.646 0 0 0 0 1.292h.862c.356 0 .645-.29.645-.646M2.933 3.846a.644.644 0 0 0 .913 0 .646.646 0 0 0 0-.913l-.609-.61a.646.646 0 1 0-.913.915zM7.5 11.806a4.306 4.306 0 1 0 0-8.611 4.306 4.306 0 0 0 0 8.61" })),
      React297.createElement("defs", null, React297.createElement("clipPath", { id: "a" }, React297.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SunSolid.displayName = "SunSolid";

// node_modules/@medusajs/icons/dist/esm/sun.js
var React298 = __toESM(require_react());
var __defProp298 = Object.defineProperty;
var __getOwnPropSymbols298 = Object.getOwnPropertySymbols;
var __hasOwnProp298 = Object.prototype.hasOwnProperty;
var __propIsEnum298 = Object.prototype.propertyIsEnumerable;
var __defNormalProp298 = (obj, key, value) => key in obj ? __defProp298(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues298 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp298.call(b, prop))
      __defNormalProp298(a, prop, b[prop]);
  if (__getOwnPropSymbols298)
    for (var prop of __getOwnPropSymbols298(b)) {
      if (__propIsEnum298.call(b, prop))
        __defNormalProp298(a, prop, b[prop]);
    }
  return a;
};
var __objRest276 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp298.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols298)
    for (var prop of __getOwnPropSymbols298(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum298.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Sun = React298.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest276(_b, ["color"]);
    return React298.createElement(
      "svg",
      __spreadValues298({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React298.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React298.createElement("path", { d: "M7.5 1.042v.833M12.067 2.933l-.59.59M13.958 7.5h-.833M12.067 12.067l-.59-.59M7.5 13.958v-.833M2.933 12.067l.59-.59M1.042 7.5h.833M2.933 2.933l.59.59M7.5 11.042a3.542 3.542 0 1 0 0-7.084 3.542 3.542 0 0 0 0 7.084" })
      ),
      React298.createElement("defs", null, React298.createElement("clipPath", { id: "a" }, React298.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Sun.displayName = "Sun";

// node_modules/@medusajs/icons/dist/esm/swatch-solid.js
var React299 = __toESM(require_react());
var __defProp299 = Object.defineProperty;
var __getOwnPropSymbols299 = Object.getOwnPropertySymbols;
var __hasOwnProp299 = Object.prototype.hasOwnProperty;
var __propIsEnum299 = Object.prototype.propertyIsEnumerable;
var __defNormalProp299 = (obj, key, value) => key in obj ? __defProp299(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues299 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp299.call(b, prop))
      __defNormalProp299(a, prop, b[prop]);
  if (__getOwnPropSymbols299)
    for (var prop of __getOwnPropSymbols299(b)) {
      if (__propIsEnum299.call(b, prop))
        __defNormalProp299(a, prop, b[prop]);
    }
  return a;
};
var __objRest277 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp299.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols299)
    for (var prop of __getOwnPropSymbols299(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum299.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SwatchSolid = React299.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest277(_b, ["color"]);
    return React299.createElement(
      "svg",
      __spreadValues299({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React299.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M1 2.25C1 1.56 1.56 1 2.25 1h3.5C6.44 1 7 1.56 7 2.25V11a3 3 0 1 1-6 0zm3 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5",
          clipRule: "evenodd"
        }
      ),
      React299.createElement(
        "path",
        {
          fill: color,
          d: "M6.646 14h6.104c.69 0 1.25-.56 1.25-1.25v-3.5C14 8.56 13.44 8 12.75 8h-.093l-5.828 5.829q-.09.089-.183.17m1.346-2.75 4.316-4.316a1.25 1.25 0 0 0 0-1.767L9.833 2.69a1.25 1.25 0 0 0-1.767 0l-.067.066V11q0 .126-.006.25z"
        }
      )
    );
  }
);
SwatchSolid.displayName = "SwatchSolid";

// node_modules/@medusajs/icons/dist/esm/swatch.js
var React300 = __toESM(require_react());
var __defProp300 = Object.defineProperty;
var __getOwnPropSymbols300 = Object.getOwnPropertySymbols;
var __hasOwnProp300 = Object.prototype.hasOwnProperty;
var __propIsEnum300 = Object.prototype.propertyIsEnumerable;
var __defNormalProp300 = (obj, key, value) => key in obj ? __defProp300(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues300 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp300.call(b, prop))
      __defNormalProp300(a, prop, b[prop]);
  if (__getOwnPropSymbols300)
    for (var prop of __getOwnPropSymbols300(b)) {
      if (__propIsEnum300.call(b, prop))
        __defNormalProp300(a, prop, b[prop]);
    }
  return a;
};
var __objRest278 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp300.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols300)
    for (var prop of __getOwnPropSymbols300(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum300.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Swatch = React300.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest278(_b, ["color"]);
    return React300.createElement(
      "svg",
      __spreadValues300({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React300.createElement("g", { clipPath: "url(#a)" }, React300.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.793 13.207A2.7 2.7 0 0 0 3.708 14m-1.915-.793A2.7 2.7 0 0 0 3.708 14m-1.915-.793A2.7 2.7 0 0 1 1 11.29V1.812C1 1.364 1.364 1 1.813 1h3.791c.449 0 .813.364.813.812v2.941M3.708 14a2.7 2.7 0 0 0 1.916-.793M3.708 14a2.7 2.7 0 0 0 1.916-.793M3.708 14h9.48a.813.813 0 0 0 .812-.813V9.396a.813.813 0 0 0-.812-.813h-2.941m-4.623 4.624 4.623-4.624m-4.623 4.624a2.7 2.7 0 0 0 .793-1.916V4.753m3.83 3.83 2.079-2.08a.81.81 0 0 0 0-1.148L9.645 2.673a.81.81 0 0 0-1.148 0l-2.08 2.08m-2.709 6.538h.006v.006h-.006z"
        }
      )),
      React300.createElement("defs", null, React300.createElement("clipPath", { id: "a" }, React300.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Swatch.displayName = "Swatch";

// node_modules/@medusajs/icons/dist/esm/tag-illustration.js
var React301 = __toESM(require_react());
var __defProp301 = Object.defineProperty;
var __getOwnPropSymbols301 = Object.getOwnPropertySymbols;
var __hasOwnProp301 = Object.prototype.hasOwnProperty;
var __propIsEnum301 = Object.prototype.propertyIsEnumerable;
var __defNormalProp301 = (obj, key, value) => key in obj ? __defProp301(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues301 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp301.call(b, prop))
      __defNormalProp301(a, prop, b[prop]);
  if (__getOwnPropSymbols301)
    for (var prop of __getOwnPropSymbols301(b)) {
      if (__propIsEnum301.call(b, prop))
        __defNormalProp301(a, prop, b[prop]);
    }
  return a;
};
var __objRest279 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp301.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols301)
    for (var prop of __getOwnPropSymbols301(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum301.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TagIllustration = React301.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest279(_b, ["color"]);
    return React301.createElement(
      "svg",
      __spreadValues301({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React301.createElement("g", { filter: "url(#a)" }, React301.createElement(
        "path",
        {
          fill: "#60A5FA",
          d: "M12.863 6.686 8.315 2.138A2.16 2.16 0 0 0 6.777 1.5H2.884c-.763 0-1.384.62-1.384 1.384v3.893c0 .581.226 1.127.638 1.538l4.548 4.548c.41.412.957.637 1.537.637s1.128-.226 1.538-.637l3.102-3.102c.412-.41.637-.957.637-1.538 0-.58-.226-1.127-.637-1.537"
        }
      ), React301.createElement(
        "path",
        {
          fill: "url(#b)",
          fillOpacity: 0.2,
          d: "M12.863 6.686 8.315 2.138A2.16 2.16 0 0 0 6.777 1.5H2.884c-.763 0-1.384.62-1.384 1.384v3.893c0 .581.226 1.127.638 1.538l4.548 4.548c.41.412.957.637 1.537.637s1.128-.226 1.538-.637l3.102-3.102c.412-.41.637-.957.637-1.538 0-.58-.226-1.127-.637-1.537"
        }
      )),
      React301.createElement(
        "path",
        {
          stroke: "#000",
          strokeOpacity: 0.15,
          strokeWidth: 0.5,
          d: "M6.863 12.687 2.313 8.137a1.9 1.9 0 0 1-.564-1.361V2.884c0-.625.509-1.134 1.134-1.134h3.893c.515 0 .997.2 1.361.564l4.549 4.548c.363.364.563.847.563 1.361 0 .515-.2.998-.563 1.361l-3.103 3.103a1.9 1.9 0 0 1-1.36.563c-.515 0-.998-.2-1.361-.563Z"
        }
      ),
      React301.createElement("g", { filter: "url(#c)" }, React301.createElement(
        "path",
        {
          fill: "#60A5FA",
          d: "M5.257 6.246a.99.99 0 0 1-.989-.989.99.99 0 0 1 .989-.989.99.99 0 0 1 .989.99.99.99 0 0 1-.989.988m3.385 3.979a.59.59 0 0 1-.838 0L6.222 8.643a.593.593 0 1 1 .84-.84l1.581 1.582a.593.593 0 0 1 0 .84m1.582-1.582a.59.59 0 0 1-.838 0L7.804 7.06a.593.593 0 1 1 .84-.84l1.581 1.582a.593.593 0 0 1 0 .84"
        }
      ), React301.createElement(
        "path",
        {
          fill: "url(#d)",
          fillOpacity: 0.15,
          d: "M5.257 6.246a.99.99 0 0 1-.989-.989.99.99 0 0 1 .989-.989.99.99 0 0 1 .989.99.99.99 0 0 1-.989.988m3.385 3.979a.59.59 0 0 1-.838 0L6.222 8.643a.593.593 0 1 1 .84-.84l1.581 1.582a.593.593 0 0 1 0 .84m1.582-1.582a.59.59 0 0 1-.838 0L7.804 7.06a.593.593 0 1 1 .84-.84l1.581 1.582a.593.593 0 0 1 0 .84"
        }
      )),
      React301.createElement("defs", null, React301.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 7.5,
          x2: 7.5,
          y1: 1.5,
          y2: 13.5,
          gradientUnits: "userSpaceOnUse"
        },
        React301.createElement("stop", { stopColor: "#fff" }),
        React301.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React301.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 7.333,
          x2: 7.333,
          y1: 4.268,
          y2: 10.399,
          gradientUnits: "userSpaceOnUse"
        },
        React301.createElement("stop", null),
        React301.createElement("stop", { offset: 1, stopOpacity: 0 })
      ), React301.createElement(
        "filter",
        {
          id: "a",
          width: 12,
          height: 12,
          x: 1.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React301.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React301.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React301.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React301.createElement("feOffset", { dy: -0.5 }),
        React301.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React301.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" }),
        React301.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_9148_1663" })
      ), React301.createElement(
        "filter",
        {
          id: "c",
          width: 6.13,
          height: 6.13,
          x: 4.268,
          y: 4.268,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        React301.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        React301.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        React301.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React301.createElement("feOffset", { dy: -0.5 }),
        React301.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React301.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" }),
        React301.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_9148_1663" }),
        React301.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        React301.createElement("feOffset", { dy: 0.5 }),
        React301.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        React301.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" }),
        React301.createElement(
          "feBlend",
          {
            in2: "effect1_innerShadow_9148_1663",
            result: "effect2_innerShadow_9148_1663"
          }
        )
      ))
    );
  }
);
TagIllustration.displayName = "TagIllustration";

// node_modules/@medusajs/icons/dist/esm/tag-solid.js
var React302 = __toESM(require_react());
var __defProp302 = Object.defineProperty;
var __getOwnPropSymbols302 = Object.getOwnPropertySymbols;
var __hasOwnProp302 = Object.prototype.hasOwnProperty;
var __propIsEnum302 = Object.prototype.propertyIsEnumerable;
var __defNormalProp302 = (obj, key, value) => key in obj ? __defProp302(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues302 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp302.call(b, prop))
      __defNormalProp302(a, prop, b[prop]);
  if (__getOwnPropSymbols302)
    for (var prop of __getOwnPropSymbols302(b)) {
      if (__propIsEnum302.call(b, prop))
        __defNormalProp302(a, prop, b[prop]);
    }
  return a;
};
var __objRest280 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp302.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols302)
    for (var prop of __getOwnPropSymbols302(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum302.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TagSolid = React302.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest280(_b, ["color"]);
    return React302.createElement(
      "svg",
      __spreadValues302({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React302.createElement(
        "path",
        {
          fill: color,
          d: "M13.603 6.66 8.492 1.55A2.43 2.43 0 0 0 6.764.833H2.389C1.53.833.833 1.531.833 2.39v4.374c0 .653.254 1.267.717 1.729l5.11 5.111a2.44 2.44 0 0 0 1.729.715c.626 0 1.251-.238 1.728-.715l3.486-3.486a2.42 2.42 0 0 0 .716-1.728c0-.653-.254-1.267-.716-1.728m-8.548-.493a1.113 1.113 0 0 1-1.11-1.111c0-.613.498-1.112 1.11-1.112s1.112.5 1.112 1.112-.5 1.11-1.112 1.11"
        }
      )
    );
  }
);
TagSolid.displayName = "TagSolid";

// node_modules/@medusajs/icons/dist/esm/tag.js
var React303 = __toESM(require_react());
var __defProp303 = Object.defineProperty;
var __getOwnPropSymbols303 = Object.getOwnPropertySymbols;
var __hasOwnProp303 = Object.prototype.hasOwnProperty;
var __propIsEnum303 = Object.prototype.propertyIsEnumerable;
var __defNormalProp303 = (obj, key, value) => key in obj ? __defProp303(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues303 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp303.call(b, prop))
      __defNormalProp303(a, prop, b[prop]);
  if (__getOwnPropSymbols303)
    for (var prop of __getOwnPropSymbols303(b)) {
      if (__propIsEnum303.call(b, prop))
        __defNormalProp303(a, prop, b[prop]);
    }
  return a;
};
var __objRest281 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp303.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols303)
    for (var prop of __getOwnPropSymbols303(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum303.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Tag = React303.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest281(_b, ["color"]);
    return React303.createElement(
      "svg",
      __spreadValues303({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React303.createElement("g", { clipPath: "url(#a)" }, React303.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.25 2.389a.14.14 0 0 1 .139-.139h4.375c.272 0 .534.108.727.301l5.11 5.111a1.027 1.027 0 0 1 0 1.453l-3.486 3.487a1.027 1.027 0 0 1-1.453 0L2.552 7.49a1.03 1.03 0 0 1-.302-.727zM2.389.75A1.64 1.64 0 0 0 .75 2.389v4.375c0 .67.267 1.313.74 1.787l5.112 5.111a2.527 2.527 0 0 0 3.574 0l3.486-3.486a2.527 2.527 0 0 0 0-3.574L8.552 1.49A2.53 2.53 0 0 0 6.763.75zm3.778 4.305a1.111 1.111 0 1 1-2.223 0 1.111 1.111 0 0 1 2.223 0",
          clipRule: "evenodd"
        }
      )),
      React303.createElement("defs", null, React303.createElement("clipPath", { id: "a" }, React303.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Tag.displayName = "Tag";

// node_modules/@medusajs/icons/dist/esm/tailwind.js
var React304 = __toESM(require_react());
var __defProp304 = Object.defineProperty;
var __getOwnPropSymbols304 = Object.getOwnPropertySymbols;
var __hasOwnProp304 = Object.prototype.hasOwnProperty;
var __propIsEnum304 = Object.prototype.propertyIsEnumerable;
var __defNormalProp304 = (obj, key, value) => key in obj ? __defProp304(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues304 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp304.call(b, prop))
      __defNormalProp304(a, prop, b[prop]);
  if (__getOwnPropSymbols304)
    for (var prop of __getOwnPropSymbols304(b)) {
      if (__propIsEnum304.call(b, prop))
        __defNormalProp304(a, prop, b[prop]);
    }
  return a;
};
var Tailwind = React304.forwardRef(
  (props, ref) => {
    return React304.createElement(
      "svg",
      __spreadValues304({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React304.createElement("g", { clipPath: "url(#a)" }, React304.createElement(
        "path",
        {
          fill: "#38BDF8",
          fillRule: "evenodd",
          d: "M7.5 3q-3 0-3.75 3 1.125-1.5 2.625-1.125c.57.143.978.557 1.43 1.015.735.746 1.586 1.61 3.445 1.61q3 0 3.75-3-1.125 1.5-2.625 1.125c-.57-.143-.978-.557-1.43-1.015C10.21 3.864 9.36 3 7.5 3M3.75 7.5q-3 0-3.75 3Q1.125 9 2.625 9.375c.57.143.978.557 1.43 1.015C4.79 11.136 5.64 12 7.5 12q3 0 3.75-3-1.125 1.5-2.625 1.125c-.57-.143-.978-.557-1.43-1.015C6.46 8.364 5.61 7.5 3.75 7.5",
          clipRule: "evenodd"
        }
      )),
      React304.createElement("defs", null, React304.createElement("clipPath", { id: "a" }, React304.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Tailwind.displayName = "Tailwind";

// node_modules/@medusajs/icons/dist/esm/target.js
var React305 = __toESM(require_react());
var __defProp305 = Object.defineProperty;
var __getOwnPropSymbols305 = Object.getOwnPropertySymbols;
var __hasOwnProp305 = Object.prototype.hasOwnProperty;
var __propIsEnum305 = Object.prototype.propertyIsEnumerable;
var __defNormalProp305 = (obj, key, value) => key in obj ? __defProp305(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues305 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp305.call(b, prop))
      __defNormalProp305(a, prop, b[prop]);
  if (__getOwnPropSymbols305)
    for (var prop of __getOwnPropSymbols305(b)) {
      if (__propIsEnum305.call(b, prop))
        __defNormalProp305(a, prop, b[prop]);
    }
  return a;
};
var __objRest282 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp305.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols305)
    for (var prop of __getOwnPropSymbols305(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum305.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Target = React305.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest282(_b, ["color"]);
    return React305.createElement(
      "svg",
      __spreadValues305({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React305.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.5 7.5 2.708-2.708M10.208 4.791V2.916L12.292.833v1.875h1.875l-2.084 2.083z"
        }
      ),
      React305.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.633 1.568a6 6 0 0 0-1.133-.11A6.042 6.042 0 1 0 13.542 7.5c0-.388-.04-.766-.11-1.134"
        }
      ),
      React305.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.04 4.012a3.5 3.5 0 0 0-.54-.054A3.542 3.542 0 1 0 11.042 7.5c0-.185-.028-.364-.054-.541"
        }
      )
    );
  }
);
Target.displayName = "Target";

// node_modules/@medusajs/icons/dist/esm/tax-exclusive.js
var React306 = __toESM(require_react());
var __defProp306 = Object.defineProperty;
var __getOwnPropSymbols306 = Object.getOwnPropertySymbols;
var __hasOwnProp306 = Object.prototype.hasOwnProperty;
var __propIsEnum306 = Object.prototype.propertyIsEnumerable;
var __defNormalProp306 = (obj, key, value) => key in obj ? __defProp306(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues306 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp306.call(b, prop))
      __defNormalProp306(a, prop, b[prop]);
  if (__getOwnPropSymbols306)
    for (var prop of __getOwnPropSymbols306(b)) {
      if (__propIsEnum306.call(b, prop))
        __defNormalProp306(a, prop, b[prop]);
    }
  return a;
};
var __objRest283 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp306.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols306)
    for (var prop of __getOwnPropSymbols306(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum306.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TaxExclusive = React306.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest283(_b, ["color"]);
    return React306.createElement(
      "svg",
      __spreadValues306({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React306.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.713.838a1.61 1.61 0 0 1 1.574 0l4.521 2.531h.001c.507.286.823.823.823 1.407v.356c0 .89-.722 1.611-1.611 1.611l-9.042.001c-.89 0-1.611-.722-1.611-1.611v-.357c0-.582.314-1.12.823-1.406zm.842 1.309a.11.11 0 0 0-.108 0L2.924 4.678a.11.11 0 0 0-.056.097v.357c0 .061.05.111.111.111h9.042c.06 0 .11-.05.11-.112v-.356a.11.11 0 0 0-.056-.098zM2.979 7.396a.75.75 0 0 1 .75.75v3.986h1.514V8.146a.75.75 0 0 1 1.5 0v3.986h.41c.414 0 .78.344.78.759 0 .414-.366.741-.78.741H2.117a.75.75 0 0 1 0-1.5h.111V8.146a.75.75 0 0 1 .75-.75M9.338 8.72a.75.75 0 0 1 1.06 0l1.623 1.622 1.622-1.622a.75.75 0 1 1 1.06 1.06l-1.621 1.623 1.622 1.622a.75.75 0 0 1-1.06 1.061l-1.623-1.623-1.623 1.623a.75.75 0 0 1-1.06-1.06l1.622-1.623L9.338 9.78a.75.75 0 0 1 0-1.06",
          clipRule: "evenodd"
        }
      ),
      React306.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 4.701a.861.861 0 1 0 0-1.722.861.861 0 0 0 0 1.722"
        }
      )
    );
  }
);
TaxExclusive.displayName = "TaxExclusive";

// node_modules/@medusajs/icons/dist/esm/tax-inclusive.js
var React307 = __toESM(require_react());
var __defProp307 = Object.defineProperty;
var __getOwnPropSymbols307 = Object.getOwnPropertySymbols;
var __hasOwnProp307 = Object.prototype.hasOwnProperty;
var __propIsEnum307 = Object.prototype.propertyIsEnumerable;
var __defNormalProp307 = (obj, key, value) => key in obj ? __defProp307(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues307 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp307.call(b, prop))
      __defNormalProp307(a, prop, b[prop]);
  if (__getOwnPropSymbols307)
    for (var prop of __getOwnPropSymbols307(b)) {
      if (__propIsEnum307.call(b, prop))
        __defNormalProp307(a, prop, b[prop]);
    }
  return a;
};
var __objRest284 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp307.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols307)
    for (var prop of __getOwnPropSymbols307(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum307.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TaxInclusive = React307.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest284(_b, ["color"]);
    return React307.createElement(
      "svg",
      __spreadValues307({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React307.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.713.838a1.61 1.61 0 0 1 1.574 0l4.521 2.531h.001c.507.286.823.823.823 1.407v.356c0 .89-.722 1.611-1.611 1.611l-9.042.001c-.89 0-1.611-.722-1.611-1.611v-.357c0-.582.314-1.12.824-1.406zm.842 1.309a.11.11 0 0 0-.108 0L2.925 4.678a.11.11 0 0 0-.057.097v.357c0 .061.05.111.111.111h9.042c.06 0 .11-.05.11-.112v-.356a.11.11 0 0 0-.056-.098zM2.979 7.396a.75.75 0 0 1 .75.75v3.986h1.514V8.146a.75.75 0 0 1 1.5 0v3.986h.346c.414 0 .812.337.812.75 0 .415-.398.75-.812.75H2.118a.75.75 0 0 1 0-1.5h.111V8.146a.75.75 0 0 1 .75-.75m6.028 0a.75.75 0 0 1 .75.75v1.292a.75.75 0 0 1-1.5 0V8.146a.75.75 0 0 1 .75-.75m5.588.733a.75.75 0 0 1 .2 1.042l-3.215 4.736a.75.75 0 0 1-1.16.1l-1.522-1.579a.75.75 0 0 1 1.08-1.041l.88.913 2.695-3.971a.75.75 0 0 1 1.042-.2",
          clipRule: "evenodd"
        }
      ),
      React307.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 4.701a.861.861 0 1 0 0-1.722.861.861 0 0 0 0 1.722"
        }
      )
    );
  }
);
TaxInclusive.displayName = "TaxInclusive";

// node_modules/@medusajs/icons/dist/esm/text-highlight.js
var React308 = __toESM(require_react());
var __defProp308 = Object.defineProperty;
var __getOwnPropSymbols308 = Object.getOwnPropertySymbols;
var __hasOwnProp308 = Object.prototype.hasOwnProperty;
var __propIsEnum308 = Object.prototype.propertyIsEnumerable;
var __defNormalProp308 = (obj, key, value) => key in obj ? __defProp308(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues308 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp308.call(b, prop))
      __defNormalProp308(a, prop, b[prop]);
  if (__getOwnPropSymbols308)
    for (var prop of __getOwnPropSymbols308(b)) {
      if (__propIsEnum308.call(b, prop))
        __defNormalProp308(a, prop, b[prop]);
    }
  return a;
};
var __objRest285 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp308.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols308)
    for (var prop of __getOwnPropSymbols308(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum308.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TextHighlight = React308.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest285(_b, ["color"]);
    return React308.createElement(
      "svg",
      __spreadValues308({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React308.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.318 13.055h6.849M8.201 10.276 3.86 8.084a.888.888 0 0 1-.333-1.295L6.874 1.88a1.78 1.78 0 0 1 2.27-.586l1.384.699a1.78 1.78 0 0 1 .877 2.174L9.442 9.775a.89.89 0 0 1-1.24.5zM8.41 10.384a4.57 4.57 0 0 0-2.891 2.275l-.992-.5-.992-.501a4.57 4.57 0 0 0 .113-3.677"
        }
      ),
      React308.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m5.518 12.659-.2.396H2.833l.702-1.398"
        }
      )
    );
  }
);
TextHighlight.displayName = "TextHighlight";

// node_modules/@medusajs/icons/dist/esm/text.js
var React309 = __toESM(require_react());
var __defProp309 = Object.defineProperty;
var __getOwnPropSymbols309 = Object.getOwnPropertySymbols;
var __hasOwnProp309 = Object.prototype.hasOwnProperty;
var __propIsEnum309 = Object.prototype.propertyIsEnumerable;
var __defNormalProp309 = (obj, key, value) => key in obj ? __defProp309(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues309 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp309.call(b, prop))
      __defNormalProp309(a, prop, b[prop]);
  if (__getOwnPropSymbols309)
    for (var prop of __getOwnPropSymbols309(b)) {
      if (__propIsEnum309.call(b, prop))
        __defNormalProp309(a, prop, b[prop]);
    }
  return a;
};
var __objRest286 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp309.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols309)
    for (var prop of __getOwnPropSymbols309(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum309.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Text = React309.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest286(_b, ["color"]);
    return React309.createElement(
      "svg",
      __spreadValues309({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React309.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React309.createElement("path", { d: "M7.783 11.278 4.609 3.722h-.158l-3.173 7.556M2.024 9.5h5.012M9.93 6.82c.432-.466 1.047-.653 1.672-.653 1.048 0 1.897.85 1.897 1.897v3.214" }),
        React309.createElement("path", { d: "M11.056 8.611H13.5v.222a2.445 2.445 0 0 1-2.444 2.445 1.334 1.334 0 0 1 0-2.667" })
      ),
      React309.createElement("defs", null, React309.createElement("clipPath", { id: "a" }, React309.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Text.displayName = "Text";

// node_modules/@medusajs/icons/dist/esm/thumb-down.js
var React310 = __toESM(require_react());
var __defProp310 = Object.defineProperty;
var __getOwnPropSymbols310 = Object.getOwnPropertySymbols;
var __hasOwnProp310 = Object.prototype.hasOwnProperty;
var __propIsEnum310 = Object.prototype.propertyIsEnumerable;
var __defNormalProp310 = (obj, key, value) => key in obj ? __defProp310(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues310 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp310.call(b, prop))
      __defNormalProp310(a, prop, b[prop]);
  if (__getOwnPropSymbols310)
    for (var prop of __getOwnPropSymbols310(b)) {
      if (__propIsEnum310.call(b, prop))
        __defNormalProp310(a, prop, b[prop]);
    }
  return a;
};
var __objRest287 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp310.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols310)
    for (var prop of __getOwnPropSymbols310(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum310.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ThumbDown = React310.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest287(_b, ["color"]);
    return React310.createElement(
      "svg",
      __spreadValues310({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React310.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React310.createElement("path", { d: "M4.21 8.564c0 .427.154.84.432 1.162l3.79 4.388c.76-.38 1.111-1.269.818-2.065L8.21 9.225h3.913a1.777 1.777 0 0 0 1.718-2.232l-1.059-4a1.78 1.78 0 0 0-1.718-1.323H5.988c-.983 0-1.778.795-1.778 1.778M3.321 1.67H1.988a.89.89 0 0 0-.89.889v5.778c0 .49.399.888.89.888H3.32c.49 0 .889-.397.889-.888V2.559a.89.89 0 0 0-.889-.89" })
      ),
      React310.createElement("defs", null, React310.createElement("clipPath", { id: "a" }, React310.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ThumbDown.displayName = "ThumbDown";

// node_modules/@medusajs/icons/dist/esm/thumb-up.js
var React311 = __toESM(require_react());
var __defProp311 = Object.defineProperty;
var __getOwnPropSymbols311 = Object.getOwnPropertySymbols;
var __hasOwnProp311 = Object.prototype.hasOwnProperty;
var __propIsEnum311 = Object.prototype.propertyIsEnumerable;
var __defNormalProp311 = (obj, key, value) => key in obj ? __defProp311(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues311 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp311.call(b, prop))
      __defNormalProp311(a, prop, b[prop]);
  if (__getOwnPropSymbols311)
    for (var prop of __getOwnPropSymbols311(b)) {
      if (__propIsEnum311.call(b, prop))
        __defNormalProp311(a, prop, b[prop]);
    }
  return a;
};
var __objRest288 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp311.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols311)
    for (var prop of __getOwnPropSymbols311(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum311.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ThumbUp = React311.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest288(_b, ["color"]);
    return React311.createElement(
      "svg",
      __spreadValues311({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React311.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React311.createElement("path", { d: "M4.21 6.445c0-.427.154-.84.432-1.162L8.432.895c.76.38 1.111 1.269.818 2.065L8.21 5.783h3.913a1.777 1.777 0 0 1 1.718 2.233l-1.059 4a1.78 1.78 0 0 1-1.718 1.323H5.988a1.777 1.777 0 0 1-1.778-1.778M3.321 5.783H1.988a.89.89 0 0 0-.89.89v5.777c0 .491.399.889.89.889H3.32c.49 0 .889-.398.889-.889V6.672a.89.89 0 0 0-.889-.889" })
      ),
      React311.createElement("defs", null, React311.createElement("clipPath", { id: "a" }, React311.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ThumbUp.displayName = "ThumbUp";

// node_modules/@medusajs/icons/dist/esm/thumbnail-badge.js
var React312 = __toESM(require_react());
var __defProp312 = Object.defineProperty;
var __getOwnPropSymbols312 = Object.getOwnPropertySymbols;
var __hasOwnProp312 = Object.prototype.hasOwnProperty;
var __propIsEnum312 = Object.prototype.propertyIsEnumerable;
var __defNormalProp312 = (obj, key, value) => key in obj ? __defProp312(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues312 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp312.call(b, prop))
      __defNormalProp312(a, prop, b[prop]);
  if (__getOwnPropSymbols312)
    for (var prop of __getOwnPropSymbols312(b)) {
      if (__propIsEnum312.call(b, prop))
        __defNormalProp312(a, prop, b[prop]);
    }
  return a;
};
var __objRest289 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp312.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols312)
    for (var prop of __getOwnPropSymbols312(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum312.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ThumbnailBadge = React312.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest289(_b, ["color"]);
    return React312.createElement(
      "svg",
      __spreadValues312({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React312.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.5, fill: "#3B82F6" }),
      React312.createElement("circle", { cx: 7.5, cy: 7.5, r: 7.5, fill: "url(#a)", fillOpacity: 0.2 }),
      React312.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 7.2,
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.6
        }
      ),
      React312.createElement("g", { fill: "#fff", clipPath: "url(#b)" }, React312.createElement("path", { d: "M3.75 9.892a.696.696 0 0 1-.694-.694V5.802a.696.696 0 0 1 .914-.659l.467.156a.417.417 0 0 1-.264.79l-.285-.094v3.01l.285-.095a.416.416 0 1 1 .264.791l-.467.156a.7.7 0 0 1-.22.036M5.972 10.972a.695.695 0 0 1-.694-.694V4.722a.693.693 0 0 1 .961-.64l.45.186a.417.417 0 0 1-.321.77l-.256-.107v5.139l.256-.107a.417.417 0 0 1 .32.77l-.449.186a.7.7 0 0 1-.267.053M11.38 4.473 8.485 3.137a.694.694 0 0 0-.986.63v7.466a.69.69 0 0 0 .694.695.7.7 0 0 0 .292-.065l2.893-1.335a.98.98 0 0 0 .565-.883v-4.29a.98.98 0 0 0-.565-.882" })),
      React312.createElement("defs", null, React312.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 0,
          y2: 15,
          gradientUnits: "userSpaceOnUse"
        },
        React312.createElement("stop", { stopColor: "#fff" }),
        React312.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), React312.createElement("clipPath", { id: "b" }, React312.createElement("path", { fill: "#fff", d: "M2.5 2.5h10v10h-10z" })))
    );
  }
);
ThumbnailBadge.displayName = "ThumbnailBadge";

// node_modules/@medusajs/icons/dist/esm/timeline-vertical.js
var React313 = __toESM(require_react());
var __defProp313 = Object.defineProperty;
var __getOwnPropSymbols313 = Object.getOwnPropertySymbols;
var __hasOwnProp313 = Object.prototype.hasOwnProperty;
var __propIsEnum313 = Object.prototype.propertyIsEnumerable;
var __defNormalProp313 = (obj, key, value) => key in obj ? __defProp313(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues313 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp313.call(b, prop))
      __defNormalProp313(a, prop, b[prop]);
  if (__getOwnPropSymbols313)
    for (var prop of __getOwnPropSymbols313(b)) {
      if (__propIsEnum313.call(b, prop))
        __defNormalProp313(a, prop, b[prop]);
    }
  return a;
};
var __objRest290 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp313.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols313)
    for (var prop of __getOwnPropSymbols313(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum313.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TimelineVertical = React313.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest290(_b, ["color"]);
    return React313.createElement(
      "svg",
      __spreadValues313({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React313.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React313.createElement("path", { d: "M2.389 1.056v4.888M2.389 13.944V9.056M13.056 1.5H7.278a.89.89 0 0 0-.89.889v2.667c0 .49.399.888.89.888h5.778c.49 0 .888-.398.888-.888V2.389a.89.89 0 0 0-.889-.889M2.389 9.055a1.556 1.556 0 1 0 0-3.11 1.556 1.556 0 0 0 0 3.11M13.056 9.056H7.278a.89.89 0 0 0-.89.888v2.667c0 .491.399.889.89.889h5.778c.49 0 .888-.398.888-.889V9.944a.89.89 0 0 0-.889-.888" })
      ),
      React313.createElement("defs", null, React313.createElement("clipPath", { id: "a" }, React313.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
TimelineVertical.displayName = "TimelineVertical";

// node_modules/@medusajs/icons/dist/esm/tools-solid.js
var React314 = __toESM(require_react());
var __defProp314 = Object.defineProperty;
var __getOwnPropSymbols314 = Object.getOwnPropertySymbols;
var __hasOwnProp314 = Object.prototype.hasOwnProperty;
var __propIsEnum314 = Object.prototype.propertyIsEnumerable;
var __defNormalProp314 = (obj, key, value) => key in obj ? __defProp314(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues314 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp314.call(b, prop))
      __defNormalProp314(a, prop, b[prop]);
  if (__getOwnPropSymbols314)
    for (var prop of __getOwnPropSymbols314(b)) {
      if (__propIsEnum314.call(b, prop))
        __defNormalProp314(a, prop, b[prop]);
    }
  return a;
};
var __objRest291 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp314.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols314)
    for (var prop of __getOwnPropSymbols314(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum314.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var ToolsSolid = React314.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest291(_b, ["color"]);
    return React314.createElement(
      "svg",
      __spreadValues314({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React314.createElement("g", { fill: color, clipPath: "url(#a)" }, React314.createElement("path", { d: "M13.944 7.056H12.39V4.344l.8-1.402a.67.67 0 0 0 .062-.514L12.807.872a.67.67 0 0 0-.641-.483h-.89a.666.666 0 0 0-.64.483l-.444 1.556a.67.67 0 0 0 .06.514l.802 1.402v2.712H9.498a.667.667 0 0 0 0 1.333h.222v4.667c0 .857.698 1.555 1.556 1.555h.889c.858 0 1.555-.698 1.555-1.555V8.389h.223a.667.667 0 0 0 0-1.333zm-1.555 6c0 .122-.1.222-.222.222h-.89a.22.22 0 0 1-.221-.222V8.389h1.333zM6.3 1.012a.667.667 0 0 0-1.023.564v2.592c0 .122-.1.222-.222.222H3.277a.22.22 0 0 1-.222-.222V1.575a.666.666 0 0 0-1.023-.564A3.98 3.98 0 0 0 .167 4.39c0 1.437.771 2.752 2 3.461v5.206c0 .857.698 1.555 1.555 1.555h.89c.857 0 1.555-.698 1.555-1.556V7.85c1.228-.71 2-2.024 2-3.461 0-1.376-.698-2.64-1.867-3.377" })),
      React314.createElement("defs", null, React314.createElement("clipPath", { id: "a" }, React314.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ToolsSolid.displayName = "ToolsSolid";

// node_modules/@medusajs/icons/dist/esm/tools.js
var React315 = __toESM(require_react());
var __defProp315 = Object.defineProperty;
var __getOwnPropSymbols315 = Object.getOwnPropertySymbols;
var __hasOwnProp315 = Object.prototype.hasOwnProperty;
var __propIsEnum315 = Object.prototype.propertyIsEnumerable;
var __defNormalProp315 = (obj, key, value) => key in obj ? __defProp315(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues315 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp315.call(b, prop))
      __defNormalProp315(a, prop, b[prop]);
  if (__getOwnPropSymbols315)
    for (var prop of __getOwnPropSymbols315(b)) {
      if (__propIsEnum315.call(b, prop))
        __defNormalProp315(a, prop, b[prop]);
    }
  return a;
};
var __objRest292 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp315.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols315)
    for (var prop of __getOwnPropSymbols315(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum315.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Tools = React315.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest292(_b, ["color"]);
    return React315.createElement(
      "svg",
      __spreadValues315({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React315.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React315.createElement("path", { d: "M7.5 4.389a3.33 3.33 0 0 0-2-3.052v3.274H2.833V1.337a3.33 3.33 0 0 0-2 3.052 3.33 3.33 0 0 0 2 3.052v5.615c0 .49.399.889.89.889h.888a.89.89 0 0 0 .889-.89V7.442a3.33 3.33 0 0 0 2-3.052M13.056 7.722v5.334a.89.89 0 0 1-.89.888h-.888a.89.89 0 0 1-.89-.889V7.723M9.5 7.722h4.444M11.722 7.722V1.5M11.722 4.167l.89-1.556-.445-1.555h-.89l-.444 1.555z" })
      ),
      React315.createElement("defs", null, React315.createElement("clipPath", { id: "a" }, React315.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Tools.displayName = "Tools";

// node_modules/@medusajs/icons/dist/esm/top-to-bottom.js
var React316 = __toESM(require_react());
var __defProp316 = Object.defineProperty;
var __getOwnPropSymbols316 = Object.getOwnPropertySymbols;
var __hasOwnProp316 = Object.prototype.hasOwnProperty;
var __propIsEnum316 = Object.prototype.propertyIsEnumerable;
var __defNormalProp316 = (obj, key, value) => key in obj ? __defProp316(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues316 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp316.call(b, prop))
      __defNormalProp316(a, prop, b[prop]);
  if (__getOwnPropSymbols316)
    for (var prop of __getOwnPropSymbols316(b)) {
      if (__propIsEnum316.call(b, prop))
        __defNormalProp316(a, prop, b[prop]);
    }
  return a;
};
var __objRest293 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp316.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols316)
    for (var prop of __getOwnPropSymbols316(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum316.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TopToBottom = React316.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest293(_b, ["color"]);
    return React316.createElement(
      "svg",
      __spreadValues316({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React316.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React316.createElement("path", { d: "m9.5 9.722-2 2 2 2M1.056 7.5h4M1.056 11.722h4M1.056 3.278h4" }),
        React316.createElement("path", { d: "M7.5 11.722h2.222a4.223 4.223 0 0 0 0-8.444H8.167" })
      ),
      React316.createElement("defs", null, React316.createElement("clipPath", { id: "a" }, React316.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
TopToBottom.displayName = "TopToBottom";

// node_modules/@medusajs/icons/dist/esm/trash.js
var React317 = __toESM(require_react());
var __defProp317 = Object.defineProperty;
var __getOwnPropSymbols317 = Object.getOwnPropertySymbols;
var __hasOwnProp317 = Object.prototype.hasOwnProperty;
var __propIsEnum317 = Object.prototype.propertyIsEnumerable;
var __defNormalProp317 = (obj, key, value) => key in obj ? __defProp317(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues317 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp317.call(b, prop))
      __defNormalProp317(a, prop, b[prop]);
  if (__getOwnPropSymbols317)
    for (var prop of __getOwnPropSymbols317(b)) {
      if (__propIsEnum317.call(b, prop))
        __defNormalProp317(a, prop, b[prop]);
    }
  return a;
};
var __objRest294 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp317.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols317)
    for (var prop of __getOwnPropSymbols317(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum317.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Trash = React317.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest294(_b, ["color"]);
    return React317.createElement(
      "svg",
      __spreadValues317({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React317.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 3.278h11.112M5.5 3.278V1.944a.89.89 0 0 1 .889-.888H8.61a.89.89 0 0 1 .889.888v1.334M11.722 5.5v6.667c0 .982-.795 1.777-1.777 1.777h-4.89a1.777 1.777 0 0 1-1.777-1.777V5.5M5.944 7.278v4M9.056 7.278v4"
        }
      )
    );
  }
);
Trash.displayName = "Trash";

// node_modules/@medusajs/icons/dist/esm/triangle-down-mini.js
var React318 = __toESM(require_react());
var __defProp318 = Object.defineProperty;
var __getOwnPropSymbols318 = Object.getOwnPropertySymbols;
var __hasOwnProp318 = Object.prototype.hasOwnProperty;
var __propIsEnum318 = Object.prototype.propertyIsEnumerable;
var __defNormalProp318 = (obj, key, value) => key in obj ? __defProp318(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues318 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp318.call(b, prop))
      __defNormalProp318(a, prop, b[prop]);
  if (__getOwnPropSymbols318)
    for (var prop of __getOwnPropSymbols318(b)) {
      if (__propIsEnum318.call(b, prop))
        __defNormalProp318(a, prop, b[prop]);
    }
  return a;
};
var __objRest295 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp318.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols318)
    for (var prop of __getOwnPropSymbols318(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum318.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TriangleDownMini = React318.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest295(_b, ["color"]);
    return React318.createElement(
      "svg",
      __spreadValues318({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React318.createElement(
        "path",
        {
          fill: color,
          d: "M10.09 5c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455A.7.7 0 0 1 4 5.797a.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z"
        }
      )
    );
  }
);
TriangleDownMini.displayName = "TriangleDownMini";

// node_modules/@medusajs/icons/dist/esm/triangle-left-mini.js
var React319 = __toESM(require_react());
var __defProp319 = Object.defineProperty;
var __getOwnPropSymbols319 = Object.getOwnPropertySymbols;
var __hasOwnProp319 = Object.prototype.hasOwnProperty;
var __propIsEnum319 = Object.prototype.propertyIsEnumerable;
var __defNormalProp319 = (obj, key, value) => key in obj ? __defProp319(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues319 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp319.call(b, prop))
      __defNormalProp319(a, prop, b[prop]);
  if (__getOwnPropSymbols319)
    for (var prop of __getOwnPropSymbols319(b)) {
      if (__propIsEnum319.call(b, prop))
        __defNormalProp319(a, prop, b[prop]);
    }
  return a;
};
var __objRest296 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp319.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols319)
    for (var prop of __getOwnPropSymbols319(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum319.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TriangleLeftMini = React319.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest296(_b, ["color"]);
    return React319.createElement(
      "svg",
      __spreadValues319({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React319.createElement(
        "path",
        {
          fill: color,
          d: "M10 10.09c0 .163-.037.323-.108.463a.85.85 0 0 1-.293.335.7.7 0 0 1-.397.111.7.7 0 0 1-.39-.141l-3.454-2.59a.9.9 0 0 1-.263-.33 1.04 1.04 0 0 1 0-.876.9.9 0 0 1 .263-.33l3.455-2.59A.7.7 0 0 1 9.203 4a.7.7 0 0 1 .396.112.85.85 0 0 1 .293.335c.07.14.108.3.108.463z"
        }
      )
    );
  }
);
TriangleLeftMini.displayName = "TriangleLeftMini";

// node_modules/@medusajs/icons/dist/esm/triangle-right-mini-hover.js
var React320 = __toESM(require_react());
var __defProp320 = Object.defineProperty;
var __getOwnPropSymbols320 = Object.getOwnPropertySymbols;
var __hasOwnProp320 = Object.prototype.hasOwnProperty;
var __propIsEnum320 = Object.prototype.propertyIsEnumerable;
var __defNormalProp320 = (obj, key, value) => key in obj ? __defProp320(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues320 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp320.call(b, prop))
      __defNormalProp320(a, prop, b[prop]);
  if (__getOwnPropSymbols320)
    for (var prop of __getOwnPropSymbols320(b)) {
      if (__propIsEnum320.call(b, prop))
        __defNormalProp320(a, prop, b[prop]);
    }
  return a;
};
var __objRest297 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp320.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols320)
    for (var prop of __getOwnPropSymbols320(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum320.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TriangleRightMiniHover = React320.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest297(_b, ["color"]);
    return React320.createElement(
      "svg",
      __spreadValues320({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React320.createElement(
        "path",
        {
          fill: color,
          d: "M9 4.91c0-.163.037-.323.108-.464a.85.85 0 0 1 .293-.334A.7.7 0 0 1 9.798 4a.7.7 0 0 1 .39.142l3.454 2.59c.11.082.2.195.263.33a1.04 1.04 0 0 1 0 .876.9.9 0 0 1-.263.33l-3.455 2.59a.7.7 0 0 1-.39.141.7.7 0 0 1-.396-.111.85.85 0 0 1-.293-.335c-.07-.14-.108-.3-.108-.464z"
        }
      )
    );
  }
);
TriangleRightMiniHover.displayName = "TriangleRightMiniHover";

// node_modules/@medusajs/icons/dist/esm/triangle-right-mini.js
var React321 = __toESM(require_react());
var __defProp321 = Object.defineProperty;
var __getOwnPropSymbols321 = Object.getOwnPropertySymbols;
var __hasOwnProp321 = Object.prototype.hasOwnProperty;
var __propIsEnum321 = Object.prototype.propertyIsEnumerable;
var __defNormalProp321 = (obj, key, value) => key in obj ? __defProp321(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues321 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp321.call(b, prop))
      __defNormalProp321(a, prop, b[prop]);
  if (__getOwnPropSymbols321)
    for (var prop of __getOwnPropSymbols321(b)) {
      if (__propIsEnum321.call(b, prop))
        __defNormalProp321(a, prop, b[prop]);
    }
  return a;
};
var __objRest298 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp321.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols321)
    for (var prop of __getOwnPropSymbols321(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum321.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TriangleRightMini = React321.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest298(_b, ["color"]);
    return React321.createElement(
      "svg",
      __spreadValues321({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React321.createElement(
        "path",
        {
          fill: color,
          d: "M5 4.91c0-.163.037-.323.108-.464a.85.85 0 0 1 .293-.334A.7.7 0 0 1 5.798 4a.7.7 0 0 1 .39.142l3.454 2.59c.11.082.2.195.263.33a1.04 1.04 0 0 1 0 .876.9.9 0 0 1-.263.33l-3.455 2.59a.7.7 0 0 1-.39.141.7.7 0 0 1-.396-.111.85.85 0 0 1-.293-.335c-.07-.14-.108-.3-.108-.464z"
        }
      )
    );
  }
);
TriangleRightMini.displayName = "TriangleRightMini";

// node_modules/@medusajs/icons/dist/esm/triangle-up-mini.js
var React322 = __toESM(require_react());
var __defProp322 = Object.defineProperty;
var __getOwnPropSymbols322 = Object.getOwnPropertySymbols;
var __hasOwnProp322 = Object.prototype.hasOwnProperty;
var __propIsEnum322 = Object.prototype.propertyIsEnumerable;
var __defNormalProp322 = (obj, key, value) => key in obj ? __defProp322(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues322 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp322.call(b, prop))
      __defNormalProp322(a, prop, b[prop]);
  if (__getOwnPropSymbols322)
    for (var prop of __getOwnPropSymbols322(b)) {
      if (__propIsEnum322.call(b, prop))
        __defNormalProp322(a, prop, b[prop]);
    }
  return a;
};
var __objRest299 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp322.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols322)
    for (var prop of __getOwnPropSymbols322(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum322.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TriangleUpMini = React322.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest299(_b, ["color"]);
    return React322.createElement(
      "svg",
      __spreadValues322({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React322.createElement(
        "path",
        {
          fill: color,
          d: "M4.91 10c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293A.7.7 0 0 1 4 9.202a.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108z"
        }
      )
    );
  }
);
TriangleUpMini.displayName = "TriangleUpMini";

// node_modules/@medusajs/icons/dist/esm/triangles-mini.js
var React323 = __toESM(require_react());
var __defProp323 = Object.defineProperty;
var __getOwnPropSymbols323 = Object.getOwnPropertySymbols;
var __hasOwnProp323 = Object.prototype.hasOwnProperty;
var __propIsEnum323 = Object.prototype.propertyIsEnumerable;
var __defNormalProp323 = (obj, key, value) => key in obj ? __defProp323(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues323 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp323.call(b, prop))
      __defNormalProp323(a, prop, b[prop]);
  if (__getOwnPropSymbols323)
    for (var prop of __getOwnPropSymbols323(b)) {
      if (__propIsEnum323.call(b, prop))
        __defNormalProp323(a, prop, b[prop]);
    }
  return a;
};
var __objRest300 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp323.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols323)
    for (var prop of __getOwnPropSymbols323(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum323.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TrianglesMini = React323.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest300(_b, ["color"]);
    return React323.createElement(
      "svg",
      __spreadValues323({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React323.createElement(
        "path",
        {
          fill: color,
          d: "M4.91 5.75c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293A.7.7 0 0 1 4 4.952a.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108zM10.09 9.25c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455a.7.7 0 0 1-.142-.39.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z"
        }
      )
    );
  }
);
TrianglesMini.displayName = "TrianglesMini";

// node_modules/@medusajs/icons/dist/esm/trophy.js
var React324 = __toESM(require_react());
var __defProp324 = Object.defineProperty;
var __getOwnPropSymbols324 = Object.getOwnPropertySymbols;
var __hasOwnProp324 = Object.prototype.hasOwnProperty;
var __propIsEnum324 = Object.prototype.propertyIsEnumerable;
var __defNormalProp324 = (obj, key, value) => key in obj ? __defProp324(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues324 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp324.call(b, prop))
      __defNormalProp324(a, prop, b[prop]);
  if (__getOwnPropSymbols324)
    for (var prop of __getOwnPropSymbols324(b)) {
      if (__propIsEnum324.call(b, prop))
        __defNormalProp324(a, prop, b[prop]);
    }
  return a;
};
var __objRest301 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp324.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols324)
    for (var prop of __getOwnPropSymbols324(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum324.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Trophy = React324.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest301(_b, ["color"]);
    return React324.createElement(
      "svg",
      __spreadValues324({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React324.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.944 10.389s0 2.611 3.334 3.555H3.722C7.056 13 7.056 10.39 7.056 10.39M4.199 7.5c-3.393 0-3.143-4.666-3.143-4.666h1.988M10.801 7.5c3.394 0 3.143-4.666 3.143-4.666h-1.988"
        }
      ),
      React324.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.944 1.056c-.555 5.805-2.027 9.083-4.222 9.333h-.444c-2.195-.25-3.667-3.528-4.222-9.333z"
        }
      )
    );
  }
);
Trophy.displayName = "Trophy";

// node_modules/@medusajs/icons/dist/esm/truck-fast.js
var React325 = __toESM(require_react());
var __defProp325 = Object.defineProperty;
var __getOwnPropSymbols325 = Object.getOwnPropertySymbols;
var __hasOwnProp325 = Object.prototype.hasOwnProperty;
var __propIsEnum325 = Object.prototype.propertyIsEnumerable;
var __defNormalProp325 = (obj, key, value) => key in obj ? __defProp325(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues325 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp325.call(b, prop))
      __defNormalProp325(a, prop, b[prop]);
  if (__getOwnPropSymbols325)
    for (var prop of __getOwnPropSymbols325(b)) {
      if (__propIsEnum325.call(b, prop))
        __defNormalProp325(a, prop, b[prop]);
    }
  return a;
};
var __objRest302 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp325.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols325)
    for (var prop of __getOwnPropSymbols325(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum325.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TruckFast = React325.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest302(_b, ["color"]);
    return React325.createElement(
      "svg",
      __spreadValues325({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React325.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React325.createElement("path", { d: "M3.472 12.938a1.41 1.41 0 1 0 0-2.82 1.41 1.41 0 0 0 0 2.82M9.312 12.938a1.41 1.41 0 1 0 0-2.82 1.41 1.41 0 0 0 0 2.82M7.918 11.326H4.882M4.076 2.465h3.625c.89 0 1.612.721 1.612 1.611v6.042" }),
        React325.createElement("path", { d: "M9.313 4.882h1.775c.274 0 .53.14.677.37l1.447 2.25c.084.13.128.281.128.436v1.777a1.61 1.61 0 0 1-1.61 1.611h-1.008M9.313 7.701h3.95M2.465 4.882H5.89M.854 7.299h3.424" })
      ),
      React325.createElement("defs", null, React325.createElement("clipPath", { id: "a" }, React325.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
TruckFast.displayName = "TruckFast";

// node_modules/@medusajs/icons/dist/esm/typescript-ex.js
var React326 = __toESM(require_react());
var __defProp326 = Object.defineProperty;
var __getOwnPropSymbols326 = Object.getOwnPropertySymbols;
var __hasOwnProp326 = Object.prototype.hasOwnProperty;
var __propIsEnum326 = Object.prototype.propertyIsEnumerable;
var __defNormalProp326 = (obj, key, value) => key in obj ? __defProp326(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues326 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp326.call(b, prop))
      __defNormalProp326(a, prop, b[prop]);
  if (__getOwnPropSymbols326)
    for (var prop of __getOwnPropSymbols326(b)) {
      if (__propIsEnum326.call(b, prop))
        __defNormalProp326(a, prop, b[prop]);
    }
  return a;
};
var __objRest303 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp326.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols326)
    for (var prop of __getOwnPropSymbols326(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum326.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var TypescriptEx = React326.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest303(_b, ["color"]);
    return React326.createElement(
      "svg",
      __spreadValues326({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React326.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M3.75.75h7.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3m4.711 11.281v-1.376q.35.315.757.471.408.157.824.157.245 0 .426-.047a1 1 0 0 0 .304-.131.522.522 0 0 0 .242-.445.56.56 0 0 0-.096-.323 1.1 1.1 0 0 0-.262-.262 2.7 2.7 0 0 0-.394-.232 13 13 0 0 0-.492-.228q-.672-.3-1.002-.735-.33-.434-.33-1.049 0-.481.18-.827.18-.345.49-.57.31-.223.718-.329Q10.234 6 10.69 6q.45 0 .795.058t.638.178v1.286a2 2 0 0 0-.314-.19 2.4 2.4 0 0 0-.709-.214 2.4 2.4 0 0 0-.338-.026q-.22 0-.4.045a1 1 0 0 0-.304.127.6.6 0 0 0-.192.195.5.5 0 0 0-.068.256q0 .155.076.277t.216.233.34.215.452.217q.345.154.619.328t.47.394q.195.22.3.5.105.282.104.656 0 .516-.182.866a1.55 1.55 0 0 1-.494.568 2.1 2.1 0 0 1-.727.311 4 4 0 0 1-.874.095q-.472 0-.898-.086a2.6 2.6 0 0 1-.739-.258m-.51-4.765H6.31v5.027H5.009V7.266H3.375V6.137h4.577z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
TypescriptEx.displayName = "TypescriptEx";

// node_modules/@medusajs/icons/dist/esm/typescript.js
var React327 = __toESM(require_react());
var __defProp327 = Object.defineProperty;
var __getOwnPropSymbols327 = Object.getOwnPropertySymbols;
var __hasOwnProp327 = Object.prototype.hasOwnProperty;
var __propIsEnum327 = Object.prototype.propertyIsEnumerable;
var __defNormalProp327 = (obj, key, value) => key in obj ? __defProp327(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues327 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp327.call(b, prop))
      __defNormalProp327(a, prop, b[prop]);
  if (__getOwnPropSymbols327)
    for (var prop of __getOwnPropSymbols327(b)) {
      if (__propIsEnum327.call(b, prop))
        __defNormalProp327(a, prop, b[prop]);
    }
  return a;
};
var Typescript = React327.forwardRef(
  (props, ref) => {
    return React327.createElement(
      "svg",
      __spreadValues327({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React327.createElement(
        "path",
        {
          fill: "#3178C6",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3"
        }
      ),
      React327.createElement(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M8.462 10.656v1.375q.312.172.738.258t.898.086q.46 0 .874-.095a2.1 2.1 0 0 0 .727-.311q.312-.217.494-.568.182-.35.182-.866 0-.375-.104-.655a1.6 1.6 0 0 0-.3-.501 2.2 2.2 0 0 0-.47-.394 5 5 0 0 0-.619-.328 8 8 0 0 1-.452-.217 2.3 2.3 0 0 1-.34-.215.9.9 0 0 1-.216-.233.5.5 0 0 1-.076-.277.5.5 0 0 1 .068-.256.6.6 0 0 1 .192-.195 1 1 0 0 1 .304-.127q.18-.045.4-.045.16 0 .338.026a2.5 2.5 0 0 1 .709.215q.17.081.314.189V6.236a3 3 0 0 0-.638-.178A5 5 0 0 0 10.69 6q-.456 0-.864.105t-.718.33q-.31.222-.49.569-.18.345-.18.827 0 .615.33 1.05.33.434 1.002.734.264.117.492.228.229.112.394.232.166.12.262.262a.56.56 0 0 1 .037.57.56.56 0 0 1-.183.198 1 1 0 0 1-.304.13 1.7 1.7 0 0 1-.426.048q-.416 0-.824-.157a2.4 2.4 0 0 1-.756-.47M6.31 7.265h1.642V6.137H3.375v1.13h1.634v5.026h1.3z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Typescript.displayName = "Typescript";

// node_modules/@medusajs/icons/dist/esm/user-group.js
var React328 = __toESM(require_react());
var __defProp328 = Object.defineProperty;
var __getOwnPropSymbols328 = Object.getOwnPropertySymbols;
var __hasOwnProp328 = Object.prototype.hasOwnProperty;
var __propIsEnum328 = Object.prototype.propertyIsEnumerable;
var __defNormalProp328 = (obj, key, value) => key in obj ? __defProp328(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues328 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp328.call(b, prop))
      __defNormalProp328(a, prop, b[prop]);
  if (__getOwnPropSymbols328)
    for (var prop of __getOwnPropSymbols328(b)) {
      if (__propIsEnum328.call(b, prop))
        __defNormalProp328(a, prop, b[prop]);
    }
  return a;
};
var __objRest304 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp328.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols328)
    for (var prop of __getOwnPropSymbols328(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum328.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var UserGroup = React328.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest304(_b, ["color"]);
    return React328.createElement(
      "svg",
      __spreadValues328({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React328.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React328.createElement("path", { d: "M7.5 7.5a1.556 1.556 0 1 0 0-3.111 1.556 1.556 0 0 0 0 3.111M5.012 12.77c-.38-.115-.636-.494-.552-.883a3.112 3.112 0 0 1 6.08 0c.084.388-.17.768-.552.883a8.6 8.6 0 0 1-4.976 0M11.194 4.194a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333M11.065 6.137q.064-.002.13-.003c1.3 0 2.394.892 2.7 2.098.102.397-.163.793-.558.908a7.7 7.7 0 0 1-1.869.299M3.806 4.194a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333M3.935 6.137l-.13-.003a2.79 2.79 0 0 0-2.7 2.098c-.102.397.163.793.558.908a7.7 7.7 0 0 0 1.869.299" })
      ),
      React328.createElement("defs", null, React328.createElement("clipPath", { id: "a" }, React328.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
UserGroup.displayName = "UserGroup";

// node_modules/@medusajs/icons/dist/esm/user-mini.js
var React329 = __toESM(require_react());
var __defProp329 = Object.defineProperty;
var __getOwnPropSymbols329 = Object.getOwnPropertySymbols;
var __hasOwnProp329 = Object.prototype.hasOwnProperty;
var __propIsEnum329 = Object.prototype.propertyIsEnumerable;
var __defNormalProp329 = (obj, key, value) => key in obj ? __defProp329(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues329 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp329.call(b, prop))
      __defNormalProp329(a, prop, b[prop]);
  if (__getOwnPropSymbols329)
    for (var prop of __getOwnPropSymbols329(b)) {
      if (__propIsEnum329.call(b, prop))
        __defNormalProp329(a, prop, b[prop]);
    }
  return a;
};
var __objRest305 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp329.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols329)
    for (var prop of __getOwnPropSymbols329(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum329.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var UserMini = React329.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest305(_b, ["color"]);
    return React329.createElement(
      "svg",
      __spreadValues329({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React329.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 5.944a2.444 2.444 0 1 0 0-4.888 2.444 2.444 0 0 0 0 4.888M11.733 13.292c.764-.24 1.166-1.085.842-1.818A5.55 5.55 0 0 0 7.5 8.167a5.55 5.55 0 0 0-5.075 3.307c-.324.733.078 1.577.842 1.818a14.1 14.1 0 0 0 8.466 0"
        }
      )
    );
  }
);
UserMini.displayName = "UserMini";

// node_modules/@medusajs/icons/dist/esm/user.js
var React330 = __toESM(require_react());
var __defProp330 = Object.defineProperty;
var __getOwnPropSymbols330 = Object.getOwnPropertySymbols;
var __hasOwnProp330 = Object.prototype.hasOwnProperty;
var __propIsEnum330 = Object.prototype.propertyIsEnumerable;
var __defNormalProp330 = (obj, key, value) => key in obj ? __defProp330(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues330 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp330.call(b, prop))
      __defNormalProp330(a, prop, b[prop]);
  if (__getOwnPropSymbols330)
    for (var prop of __getOwnPropSymbols330(b)) {
      if (__propIsEnum330.call(b, prop))
        __defNormalProp330(a, prop, b[prop]);
    }
  return a;
};
var __objRest306 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp330.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols330)
    for (var prop of __getOwnPropSymbols330(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum330.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var User = React330.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest306(_b, ["color"]);
    return React330.createElement(
      "svg",
      __spreadValues330({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React330.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 5.944a2.444 2.444 0 1 0 0-4.888 2.444 2.444 0 0 0 0 4.888M11.733 13.292c.764-.24 1.166-1.085.842-1.818A5.55 5.55 0 0 0 7.5 8.167a5.55 5.55 0 0 0-5.075 3.307c-.324.733.078 1.577.842 1.818a14.1 14.1 0 0 0 8.466 0"
        }
      )
    );
  }
);
User.displayName = "User";

// node_modules/@medusajs/icons/dist/esm/users-solid.js
var React331 = __toESM(require_react());
var __defProp331 = Object.defineProperty;
var __getOwnPropSymbols331 = Object.getOwnPropertySymbols;
var __hasOwnProp331 = Object.prototype.hasOwnProperty;
var __propIsEnum331 = Object.prototype.propertyIsEnumerable;
var __defNormalProp331 = (obj, key, value) => key in obj ? __defProp331(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues331 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp331.call(b, prop))
      __defNormalProp331(a, prop, b[prop]);
  if (__getOwnPropSymbols331)
    for (var prop of __getOwnPropSymbols331(b)) {
      if (__propIsEnum331.call(b, prop))
        __defNormalProp331(a, prop, b[prop]);
    }
  return a;
};
var __objRest307 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp331.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols331)
    for (var prop of __getOwnPropSymbols331(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum331.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var UsersSolid = React331.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest307(_b, ["color"]);
    return React331.createElement(
      "svg",
      __spreadValues331({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React331.createElement("g", { fill: color, clipPath: "url(#a)" }, React331.createElement("path", { d: "M4.792 7.5a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583M10 5.417a2.292 2.292 0 1 0 0-4.584 2.292 2.292 0 0 0 0 4.584M14.33 9.248A4.65 4.65 0 0 0 10 6.25c-1.18 0-2.293.46-3.133 1.233 1.545.591 2.821 1.808 3.425 3.408.093.246.135.502.151.758a10.8 10.8 0 0 0 2.971-.538c.38-.127.695-.406.868-.766.166-.35.184-.74.049-1.097zM9.122 11.332a4.65 4.65 0 0 0-4.33-2.999 4.65 4.65 0 0 0-4.33 2.999c-.135.357-.118.746.049 1.096.172.36.487.64.867.766a10.77 10.77 0 0 0 6.827 0c.38-.127.695-.406.868-.766.166-.35.184-.74.049-1.096" })),
      React331.createElement("defs", null, React331.createElement("clipPath", { id: "a" }, React331.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
UsersSolid.displayName = "UsersSolid";

// node_modules/@medusajs/icons/dist/esm/users.js
var React332 = __toESM(require_react());
var __defProp332 = Object.defineProperty;
var __getOwnPropSymbols332 = Object.getOwnPropertySymbols;
var __hasOwnProp332 = Object.prototype.hasOwnProperty;
var __propIsEnum332 = Object.prototype.propertyIsEnumerable;
var __defNormalProp332 = (obj, key, value) => key in obj ? __defProp332(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues332 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp332.call(b, prop))
      __defNormalProp332(a, prop, b[prop]);
  if (__getOwnPropSymbols332)
    for (var prop of __getOwnPropSymbols332(b)) {
      if (__propIsEnum332.call(b, prop))
        __defNormalProp332(a, prop, b[prop]);
    }
  return a;
};
var __objRest308 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp332.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols332)
    for (var prop of __getOwnPropSymbols332(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum332.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Users = React332.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest308(_b, ["color"]);
    return React332.createElement(
      "svg",
      __spreadValues332({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React332.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React332.createElement("path", { d: "M4.701 6.854a1.722 1.722 0 1 0 0-3.444 1.722 1.722 0 0 0 0 3.444M8.024 12.772c.45-.151.715-.64.548-1.084a4.135 4.135 0 0 0-7.74 0c-.167.444.098.934.548 1.084a10.486 10.486 0 0 0 6.644 0M10.083 4.701a1.722 1.722 0 1 0 0-3.444 1.722 1.722 0 0 0 0 3.444M10.728 11.14a10.5 10.5 0 0 0 2.678-.521c.45-.15.714-.64.547-1.084a4.135 4.135 0 0 0-6.146-1.997" })
      ),
      React332.createElement("defs", null, React332.createElement("clipPath", { id: "a" }, React332.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Users.displayName = "Users";

// node_modules/@medusajs/icons/dist/esm/vercel.js
var React333 = __toESM(require_react());
var __defProp333 = Object.defineProperty;
var __getOwnPropSymbols333 = Object.getOwnPropertySymbols;
var __hasOwnProp333 = Object.prototype.hasOwnProperty;
var __propIsEnum333 = Object.prototype.propertyIsEnumerable;
var __defNormalProp333 = (obj, key, value) => key in obj ? __defProp333(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues333 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp333.call(b, prop))
      __defNormalProp333(a, prop, b[prop]);
  if (__getOwnPropSymbols333)
    for (var prop of __getOwnPropSymbols333(b)) {
      if (__propIsEnum333.call(b, prop))
        __defNormalProp333(a, prop, b[prop]);
    }
  return a;
};
var Vercel = React333.forwardRef(
  (props, ref) => {
    return React333.createElement(
      "svg",
      __spreadValues333({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React333.createElement(
        "path",
        {
          fill: "#000",
          d: "M6.84.767a6.9 6.9 0 0 0-3.575 1.468c-.34.274-.897.847-1.142 1.175A6.9 6.9 0 0 0 .809 6.56a8 8 0 0 0-.04 1.517c.11 1.143.475 2.2 1.069 3.1a6.76 6.76 0 0 0 4.725 3.014c.388.058 1.13.077 1.517.04 1.143-.111 2.198-.475 3.098-1.07a6.76 6.76 0 0 0 3.013-4.728c.058-.388.077-1.13.04-1.518-.135-1.383-.628-2.608-1.472-3.656a8.6 8.6 0 0 0-1.175-1.143A6.9 6.9 0 0 0 8.437.801C8.117.754 7.152.733 6.84.767M9.24 6.966a633 633 0 0 1 1.665 2.922c0 .005-1.502.01-3.338.01s-3.338-.005-3.338-.013c0-.02 3.333-5.85 3.34-5.84.003.003.758 1.318 1.67 2.92"
        }
      )
    );
  }
);
Vercel.displayName = "Vercel";

// node_modules/@medusajs/icons/dist/esm/verified-badge.js
var React334 = __toESM(require_react());
var __defProp334 = Object.defineProperty;
var __getOwnPropSymbols334 = Object.getOwnPropertySymbols;
var __hasOwnProp334 = Object.prototype.hasOwnProperty;
var __propIsEnum334 = Object.prototype.propertyIsEnumerable;
var __defNormalProp334 = (obj, key, value) => key in obj ? __defProp334(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues334 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp334.call(b, prop))
      __defNormalProp334(a, prop, b[prop]);
  if (__getOwnPropSymbols334)
    for (var prop of __getOwnPropSymbols334(b)) {
      if (__propIsEnum334.call(b, prop))
        __defNormalProp334(a, prop, b[prop]);
    }
  return a;
};
var __objRest309 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp334.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols334)
    for (var prop of __getOwnPropSymbols334(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum334.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var VerifiedBadge = React334.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest309(_b, ["color"]);
    return React334.createElement(
      "svg",
      __spreadValues334({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React334.createElement(
        "path",
        {
          fill: "#3B82F6",
          fillRule: "evenodd",
          d: "M4.887 1.192A3.45 3.45 0 0 1 7.5 0a3.45 3.45 0 0 1 2.613 1.192 3.45 3.45 0 0 1 2.69 1.005 3.46 3.46 0 0 1 1.006 2.69 3.455 3.455 0 0 1 .88 4.05c-.206.45-.506.851-.88 1.176a3.46 3.46 0 0 1-1.006 2.69 3.45 3.45 0 0 1-2.69 1.005 3.455 3.455 0 0 1-4.05.88 3.45 3.45 0 0 1-1.176-.88 3.45 3.45 0 0 1-2.69-1.004 3.45 3.45 0 0 1-1.006-2.69A3.45 3.45 0 0 1 0 7.5a3.45 3.45 0 0 1 1.192-2.613 3.45 3.45 0 0 1 1.005-2.69 3.45 3.45 0 0 1 2.69-1.005",
          clipRule: "evenodd"
        }
      ),
      React334.createElement(
        "path",
        {
          fill: "url(#a)",
          fillOpacity: 0.2,
          fillRule: "evenodd",
          d: "M4.887 1.192A3.45 3.45 0 0 1 7.5 0a3.45 3.45 0 0 1 2.613 1.192 3.45 3.45 0 0 1 2.69 1.005 3.46 3.46 0 0 1 1.006 2.69 3.455 3.455 0 0 1 .88 4.05c-.206.45-.506.851-.88 1.176a3.46 3.46 0 0 1-1.006 2.69 3.45 3.45 0 0 1-2.69 1.005 3.455 3.455 0 0 1-4.05.88 3.45 3.45 0 0 1-1.176-.88 3.45 3.45 0 0 1-2.69-1.004 3.45 3.45 0 0 1-1.006-2.69A3.45 3.45 0 0 1 0 7.5a3.45 3.45 0 0 1 1.192-2.613 3.45 3.45 0 0 1 1.005-2.69 3.45 3.45 0 0 1 2.69-1.005",
          clipRule: "evenodd"
        }
      ),
      React334.createElement(
        "path",
        {
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.6,
          d: "m4.866 1.49.15.011.098-.113A3.15 3.15 0 0 1 7.5.3a3.15 3.15 0 0 1 2.387 1.088l.098.113.15-.01a3.15 3.15 0 0 1 2.457.918 3.16 3.16 0 0 1 .918 2.457l-.01.15.113.098A3.16 3.16 0 0 1 14.7 7.5a3.15 3.15 0 0 1-1.088 2.386l-.113.099.01.15a3.16 3.16 0 0 1-.918 2.456 3.15 3.15 0 0 1-2.457.918l-.15-.01-.098.113A3.15 3.15 0 0 1 7.5 14.7a3.15 3.15 0 0 1-2.386-1.088l-.099-.114-.15.011a3.15 3.15 0 0 1-2.457-.917 3.15 3.15 0 0 1-.918-2.458l.01-.15-.113-.098A3.15 3.15 0 0 1 .3 7.5a3.15 3.15 0 0 1 1.088-2.387l.113-.098-.01-.15a3.15 3.15 0 0 1 .918-2.456 3.15 3.15 0 0 1 2.457-.918Z"
        }
      ),
      React334.createElement(
        "path",
        {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.584 7.792 2.333 2.333 3.5-5.25"
        }
      ),
      React334.createElement("defs", null, React334.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 0,
          y2: 15,
          gradientUnits: "userSpaceOnUse"
        },
        React334.createElement("stop", { stopColor: "#fff" }),
        React334.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ))
    );
  }
);
VerifiedBadge.displayName = "VerifiedBadge";

// node_modules/@medusajs/icons/dist/esm/visa.js
var React335 = __toESM(require_react());
var __defProp335 = Object.defineProperty;
var __getOwnPropSymbols335 = Object.getOwnPropertySymbols;
var __hasOwnProp335 = Object.prototype.hasOwnProperty;
var __propIsEnum335 = Object.prototype.propertyIsEnumerable;
var __defNormalProp335 = (obj, key, value) => key in obj ? __defProp335(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues335 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp335.call(b, prop))
      __defNormalProp335(a, prop, b[prop]);
  if (__getOwnPropSymbols335)
    for (var prop of __getOwnPropSymbols335(b)) {
      if (__propIsEnum335.call(b, prop))
        __defNormalProp335(a, prop, b[prop]);
    }
  return a;
};
var Visa = React335.forwardRef(
  (props, ref) => {
    return React335.createElement(
      "svg",
      __spreadValues335({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React335.createElement("g", { clipPath: "url(#a)" }, React335.createElement(
        "path",
        {
          fill: "#1A1F71",
          d: "M5.695 5.164 3.731 9.849H2.45l-.966-3.74c-.059-.23-.11-.314-.288-.41C.904 5.54.423 5.391 0 5.298l.029-.135H2.09a.565.565 0 0 1 .559.477l.51 2.712 1.262-3.19zm5.02 3.156c.006-1.237-1.71-1.305-1.697-1.858.003-.168.163-.347.513-.392.41-.04.823.033 1.196.21l.212-.994a3.3 3.3 0 0 0-1.133-.208c-1.198 0-2.042.637-2.05 1.549-.007.674.603 1.05 1.062 1.275.473.23.631.377.629.582-.003.315-.376.453-.725.459-.61.009-.963-.165-1.245-.296l-.22 1.026c.284.13.806.244 1.348.249 1.273 0 2.106-.629 2.11-1.602m3.164 1.529H15l-.978-4.685h-1.035a.55.55 0 0 0-.516.344l-1.819 4.34h1.273l.253-.7h1.555zm-1.352-1.66.637-1.76.368 1.76zm-5.1-3.025L6.425 9.849H5.213l1.003-4.685z"
        }
      )),
      React335.createElement("defs", null, React335.createElement("clipPath", { id: "a" }, React335.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Visa.displayName = "Visa";

// node_modules/@medusajs/icons/dist/esm/wand-sparkle.js
var React336 = __toESM(require_react());
var __defProp336 = Object.defineProperty;
var __getOwnPropSymbols336 = Object.getOwnPropertySymbols;
var __hasOwnProp336 = Object.prototype.hasOwnProperty;
var __propIsEnum336 = Object.prototype.propertyIsEnumerable;
var __defNormalProp336 = (obj, key, value) => key in obj ? __defProp336(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues336 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp336.call(b, prop))
      __defNormalProp336(a, prop, b[prop]);
  if (__getOwnPropSymbols336)
    for (var prop of __getOwnPropSymbols336(b)) {
      if (__propIsEnum336.call(b, prop))
        __defNormalProp336(a, prop, b[prop]);
    }
  return a;
};
var __objRest310 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp336.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols336)
    for (var prop of __getOwnPropSymbols336(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum336.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var WandSparkle = React336.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest310(_b, ["color"]);
    return React336.createElement(
      "svg",
      __spreadValues336({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React336.createElement("g", { clipPath: "url(#a)" }, React336.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.786 2.214-8.582 8.582a.89.89 0 0 0 0 1.257l.743.742a.89.89 0 0 0 1.257 0l8.582-8.58a.89.89 0 0 0 0-1.258l-.743-.743a.89.89 0 0 0-1.257 0M8.733 4.267l2 2"
        }
      ), React336.createElement(
        "path",
        {
          fill: color,
          d: "m5.938 2.604-.84-.28-.282-.842c-.09-.272-.54-.272-.632 0l-.28.842-.841.28a.334.334 0 0 0 0 .633l.84.28.281.842a.333.333 0 0 0 .632 0l.28-.842.841-.28a.334.334 0 0 0 .001-.633M14.307 10.158l-1.123-.374-.374-1.123c-.122-.363-.722-.363-.843 0l-.375 1.123-1.122.374a.444.444 0 0 0 0 .843l1.122.374.375 1.122a.446.446 0 0 0 .844 0l.374-1.122L14.308 11a.445.445 0 0 0 0-.843M7.722 1.722a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333"
        }
      )),
      React336.createElement("defs", null, React336.createElement("clipPath", { id: "a" }, React336.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
WandSparkle.displayName = "WandSparkle";

// node_modules/@medusajs/icons/dist/esm/webshipper.js
var React337 = __toESM(require_react());
var __defProp337 = Object.defineProperty;
var __getOwnPropSymbols337 = Object.getOwnPropertySymbols;
var __hasOwnProp337 = Object.prototype.hasOwnProperty;
var __propIsEnum337 = Object.prototype.propertyIsEnumerable;
var __defNormalProp337 = (obj, key, value) => key in obj ? __defProp337(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues337 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp337.call(b, prop))
      __defNormalProp337(a, prop, b[prop]);
  if (__getOwnPropSymbols337)
    for (var prop of __getOwnPropSymbols337(b)) {
      if (__propIsEnum337.call(b, prop))
        __defNormalProp337(a, prop, b[prop]);
    }
  return a;
};
var Webshipper = React337.forwardRef(
  (props, ref) => {
    return React337.createElement(
      "svg",
      __spreadValues337({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React337.createElement(
        "path",
        {
          fill: "#0B2770",
          d: "M2.844 3.771c-.189.078-.313.342-.28.595a.7.7 0 0 0 .095.27.5.5 0 0 0 .174.152l.051.027.473.005c.46.006.475.007.517.03a.4.4 0 0 1 .164.142c.203.288.12.718-.165.866l-.052.027-1.346.005-1.346.006-.044.024a.4.4 0 0 0-.162.138.67.67 0 0 0-.078.593c.04.122.15.246.253.288.052.021.096.021 2.04.021 1.68 0 1.996.003 2.044.016.131.036.231.135.29.29a.44.44 0 0 1 .039.203.6.6 0 0 1-.014.183c-.04.169-.144.305-.273.356-.053.022-.087.022-1.449.022-.867 0-1.416.005-1.453.011-.24.044-.402.361-.341.668.04.194.172.355.323.39.033.008.27.012.694.012.698 0 .685 0 .783.062a.5.5 0 0 1 .097.094.65.65 0 0 1 .064.654.6.6 0 0 1-.166.199c-.1.065.007.061-1.778.061-1.442 0-1.643.003-1.687.017-.22.075-.354.368-.298.65.039.194.164.352.31.391.037.01.94.012 3.767.01l3.719-.003.085-.03c.319-.111.55-.343.71-.71.157-.357 1.123-2.52 1.126-2.52.003.001.261.578.575 1.283s.593 1.325.62 1.377c.147.288.398.5.68.579a1 1 0 0 0 .37.011 1 1 0 0 0 .461-.227c.095-.082.252-.292.307-.41.081-.173 2.123-4.759 2.148-4.825a1.83 1.83 0 0 0 .049-1.089c-.127-.453-.402-.774-.77-.899a1 1 0 0 0-.428-.02 1 1 0 0 0-.288.112 1.3 1.3 0 0 0-.414.438c-.023.042-.305.664-.626 1.384s-.587 1.31-.591 1.31-.263-.576-.577-1.28-.592-1.321-.619-1.373a1.3 1.3 0 0 0-.41-.462.9.9 0 0 0-.488-.145c-.29 0-.56.143-.766.408-.096.124-.124.178-.295.563-.36.813-1.003 2.25-1.005 2.247l-.566-1.276a77 77 0 0 0-.611-1.36c-.163-.295-.42-.501-.704-.565-.066-.015-.256-.017-1.483-.016-1.34 0-1.409.001-1.455.02"
        }
      )
    );
  }
);
Webshipper.displayName = "Webshipper";

// node_modules/@medusajs/icons/dist/esm/window.js
var React338 = __toESM(require_react());
var __defProp338 = Object.defineProperty;
var __getOwnPropSymbols338 = Object.getOwnPropertySymbols;
var __hasOwnProp338 = Object.prototype.hasOwnProperty;
var __propIsEnum338 = Object.prototype.propertyIsEnumerable;
var __defNormalProp338 = (obj, key, value) => key in obj ? __defProp338(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues338 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp338.call(b, prop))
      __defNormalProp338(a, prop, b[prop]);
  if (__getOwnPropSymbols338)
    for (var prop of __getOwnPropSymbols338(b)) {
      if (__propIsEnum338.call(b, prop))
        __defNormalProp338(a, prop, b[prop]);
    }
  return a;
};
var __objRest311 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp338.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols338)
    for (var prop of __getOwnPropSymbols338(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum338.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Window = React338.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest311(_b, ["color"]);
    return React338.createElement(
      "svg",
      __spreadValues338({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React338.createElement("g", { fill: color, clipPath: "url(#a)" }, React338.createElement("path", { d: "M3.125 4.166a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25M5.209 4.166a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25" }), React338.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.709.708A2.417 2.417 0 0 0 .292 3.125v7.083a2.417 2.417 0 0 0 2.417 2.417h4.885a.75.75 0 0 0 0-1.5H2.709a.917.917 0 0 1-.917-.917V6.375h10.583V7.48a.75.75 0 0 0 1.5 0V3.125A2.417 2.417 0 0 0 11.46.708zm9.666 4.167H1.792v-1.75c0-.506.41-.917.917-.917h8.75c.506 0 .916.41.916.917z",
          clipRule: "evenodd"
        }
      ), React338.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M9.11 7.434c-.78-.282-1.548.473-1.258 1.263l1.808 4.949c.32.88 1.575.854 1.86-.039l.607-1.897 1.898-.607c.891-.285.916-1.539.037-1.86l-4.95-1.808zm1.44 4.28-.908-2.488 2.488.908-.828.265a.75.75 0 0 0-.486.486z",
          clipRule: "evenodd"
        }
      )),
      React338.createElement("defs", null, React338.createElement("clipPath", { id: "a" }, React338.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Window.displayName = "Window";

// node_modules/@medusajs/icons/dist/esm/x-circle-solid.js
var React339 = __toESM(require_react());
var __defProp339 = Object.defineProperty;
var __getOwnPropSymbols339 = Object.getOwnPropertySymbols;
var __hasOwnProp339 = Object.prototype.hasOwnProperty;
var __propIsEnum339 = Object.prototype.propertyIsEnumerable;
var __defNormalProp339 = (obj, key, value) => key in obj ? __defProp339(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues339 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp339.call(b, prop))
      __defNormalProp339(a, prop, b[prop]);
  if (__getOwnPropSymbols339)
    for (var prop of __getOwnPropSymbols339(b)) {
      if (__propIsEnum339.call(b, prop))
        __defNormalProp339(a, prop, b[prop]);
    }
  return a;
};
var __objRest312 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp339.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols339)
    for (var prop of __getOwnPropSymbols339(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum339.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var XCircleSolid = React339.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest312(_b, ["color"]);
    return React339.createElement(
      "svg",
      __spreadValues339({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React339.createElement("g", { clipPath: "url(#a)" }, React339.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.916 9.084a.667.667 0 0 1-.943.943L7.5 8.443l-1.973 1.973a.665.665 0 0 1-.943 0 .667.667 0 0 1 0-.943L6.558 7.5 4.584 5.527a.667.667 0 1 1 .944-.943L7.5 6.557l1.973-1.973a.667.667 0 0 1 .943.943L8.444 7.5l1.973 1.973z"
        }
      )),
      React339.createElement("defs", null, React339.createElement("clipPath", { id: "a" }, React339.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
XCircleSolid.displayName = "XCircleSolid";

// node_modules/@medusajs/icons/dist/esm/x-circle.js
var React340 = __toESM(require_react());
var __defProp340 = Object.defineProperty;
var __getOwnPropSymbols340 = Object.getOwnPropertySymbols;
var __hasOwnProp340 = Object.prototype.hasOwnProperty;
var __propIsEnum340 = Object.prototype.propertyIsEnumerable;
var __defNormalProp340 = (obj, key, value) => key in obj ? __defProp340(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues340 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp340.call(b, prop))
      __defNormalProp340(a, prop, b[prop]);
  if (__getOwnPropSymbols340)
    for (var prop of __getOwnPropSymbols340(b)) {
      if (__propIsEnum340.call(b, prop))
        __defNormalProp340(a, prop, b[prop]);
    }
  return a;
};
var __objRest313 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp340.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols340)
    for (var prop of __getOwnPropSymbols340(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum340.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var XCircle = React340.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest313(_b, ["color"]);
    return React340.createElement(
      "svg",
      __spreadValues340({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React340.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        React340.createElement("path", { d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89M5.056 5.056l4.888 4.889M9.944 5.056 5.056 9.945" })
      ),
      React340.createElement("defs", null, React340.createElement("clipPath", { id: "a" }, React340.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
XCircle.displayName = "XCircle";

// node_modules/@medusajs/icons/dist/esm/x-mark-mini.js
var React341 = __toESM(require_react());
var __defProp341 = Object.defineProperty;
var __getOwnPropSymbols341 = Object.getOwnPropertySymbols;
var __hasOwnProp341 = Object.prototype.hasOwnProperty;
var __propIsEnum341 = Object.prototype.propertyIsEnumerable;
var __defNormalProp341 = (obj, key, value) => key in obj ? __defProp341(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues341 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp341.call(b, prop))
      __defNormalProp341(a, prop, b[prop]);
  if (__getOwnPropSymbols341)
    for (var prop of __getOwnPropSymbols341(b)) {
      if (__propIsEnum341.call(b, prop))
        __defNormalProp341(a, prop, b[prop]);
    }
  return a;
};
var __objRest314 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp341.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols341)
    for (var prop of __getOwnPropSymbols341(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum341.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var XMarkMini = React341.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest314(_b, ["color"]);
    return React341.createElement(
      "svg",
      __spreadValues341({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React341.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m11.25 3.75-7.5 7.5M3.75 3.75l7.5 7.5"
        }
      )
    );
  }
);
XMarkMini.displayName = "XMarkMini";

// node_modules/@medusajs/icons/dist/esm/x-mark.js
var React342 = __toESM(require_react());
var __defProp342 = Object.defineProperty;
var __getOwnPropSymbols342 = Object.getOwnPropertySymbols;
var __hasOwnProp342 = Object.prototype.hasOwnProperty;
var __propIsEnum342 = Object.prototype.propertyIsEnumerable;
var __defNormalProp342 = (obj, key, value) => key in obj ? __defProp342(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues342 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp342.call(b, prop))
      __defNormalProp342(a, prop, b[prop]);
  if (__getOwnPropSymbols342)
    for (var prop of __getOwnPropSymbols342(b)) {
      if (__propIsEnum342.call(b, prop))
        __defNormalProp342(a, prop, b[prop]);
    }
  return a;
};
var __objRest315 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp342.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols342)
    for (var prop of __getOwnPropSymbols342(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum342.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var XMark = React342.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest315(_b, ["color"]);
    return React342.createElement(
      "svg",
      __spreadValues342({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React342.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m11.25 3.75-7.5 7.5M3.75 3.75l7.5 7.5"
        }
      )
    );
  }
);
XMark.displayName = "XMark";

// node_modules/@medusajs/icons/dist/esm/x.js
var React343 = __toESM(require_react());
var __defProp343 = Object.defineProperty;
var __getOwnPropSymbols343 = Object.getOwnPropertySymbols;
var __hasOwnProp343 = Object.prototype.hasOwnProperty;
var __propIsEnum343 = Object.prototype.propertyIsEnumerable;
var __defNormalProp343 = (obj, key, value) => key in obj ? __defProp343(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues343 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp343.call(b, prop))
      __defNormalProp343(a, prop, b[prop]);
  if (__getOwnPropSymbols343)
    for (var prop of __getOwnPropSymbols343(b)) {
      if (__propIsEnum343.call(b, prop))
        __defNormalProp343(a, prop, b[prop]);
    }
  return a;
};
var X = React343.forwardRef(
  (props, ref) => {
    return React343.createElement(
      "svg",
      __spreadValues343({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      React343.createElement(
        "path",
        {
          fill: "#000",
          fillRule: "evenodd",
          d: "M.75 1.172h4.43l3.15 4.396 3.81-4.396h1.688L9.094 6.634l5.156 7.194H9.82L6.67 9.432l-3.81 4.396H1.171l4.734-5.462zm9.72 11.39L3.214 2.438H4.53l7.256 10.125z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
X.displayName = "X";

export {
  AcademicCapSolid,
  AcademicCap,
  AdjustmentsDone,
  Adjustments,
  AiAssistentLuminosity,
  AiAssistent,
  Amazon,
  Apple,
  ArchiveBox,
  ArrowDownCircle,
  ArrowDownLeftMini,
  ArrowDownLeft,
  ArrowDownMini,
  ArrowDownRightMini,
  ArrowDownTray,
  ArrowDown,
  ArrowLeftMini,
  ArrowLeft,
  ArrowLongDown,
  ArrowLongLeft,
  ArrowLongRight,
  ArrowLongUp,
  ArrowPathMini,
  ArrowPath,
  ArrowRightDown,
  ArrowRightMini,
  ArrowRightOnRectangle,
  ArrowRight,
  ArrowUpCircleSolid,
  ArrowUpDown,
  ArrowUpMini,
  ArrowUpRightMicro,
  ArrowUpRightMini,
  ArrowUpRightOnBox,
  ArrowUpTray,
  ArrowUturnLeft,
  ArrowsPointingOutMini,
  ArrowsPointingOut,
  ArrowsReduceDiagonal,
  AtSymbol,
  BackwardSolid,
  BarsArrowDown,
  BarsThree,
  Beaker,
  BellAlertDone,
  BellAlertSolid,
  BellAlert,
  BoltSolid,
  Bolt,
  BookOpen,
  Book,
  Bookmarks,
  BottomToTop,
  Brackets,
  BroomSparkle,
  BugAntSolid,
  Bug,
  BuildingStorefront,
  BuildingTax,
  BuildingsMini,
  BuildingsSolid,
  Buildings,
  Button,
  CalendarMini,
  CalendarSolid,
  Calendar,
  Camera,
  CaretMaximizeDiagonal,
  CaretMinimizeDiagonal,
  CashSolid,
  Cash,
  ChannelsSolid,
  Channels,
  ChartBar,
  ChartPie,
  ChatBubbleLeftRightSolid,
  ChatBubbleLeftRight,
  ChatBubble,
  CheckCircleMiniSolid,
  CheckCircleSolid,
  CheckCircle,
  CheckMini,
  Check,
  ChevronDoubleLeftMiniSolid,
  ChevronDoubleLeft,
  ChevronDoubleRightMiniSolid,
  ChevronDoubleRight,
  ChevronDownMini,
  ChevronDown,
  ChevronLeftMini,
  ChevronLeft,
  ChevronRightMini,
  ChevronRight,
  ChevronUpDown,
  ChevronUpMini,
  CircleArrowUp,
  CircleDottedLine,
  CircleFilledSolid,
  CircleHalfSolid,
  CircleMiniFilledSolid,
  CircleMiniSolid,
  CircleMinus,
  CircleQuarterSolid,
  CircleSliders,
  CircleSolid,
  CircleStackSolid,
  CircleStack,
  CircleThreeQuartersSolid,
  ClockChangedSolidMini,
  ClockSolidMini,
  ClockSolid,
  Clock,
  CloneDashed,
  CloudArrowDown,
  CloudArrowUp,
  CodeCommit,
  CodeMerge,
  CogSixToothSolid,
  CogSixTooth,
  CommandLineSolid,
  CommandLine,
  ComponentSolid,
  Component,
  ComputerDesktopSolid,
  ComputerDesktop,
  CreditCardSolid,
  CreditCard,
  CubeSolid,
  CurrencyDollarSolid,
  CurrencyDollar,
  CursorArrowRays,
  DecisionProcess,
  DescendingSorting,
  Directions,
  Discord,
  DocumentSeries,
  DocumentTextSolid,
  DocumentText,
  DotsSix,
  DropCap,
  EllipseBlueSolid,
  EllipseGreenSolid,
  EllipseGreySolid,
  EllipseMiniSolid,
  EllipseOrangeSolid,
  EllipsePurpleSolid,
  EllipseRedSolid,
  EllipseSolid,
  EllipsisHorizontal,
  EllipsisVertical,
  EnvelopeSolid,
  Envelope,
  ExclamationCircleSolid,
  ExclamationCircle,
  Expand,
  EyeMini,
  EyeSlashMini,
  EyeSlash,
  Eye,
  FaceSmile,
  Facebook,
  FeaturedBadge,
  Figma,
  FlagMini,
  FlyingBox,
  FolderIllustration,
  FolderOpenIllustration,
  FolderOpen,
  Folder,
  ForwardSolid,
  Funnel,
  GatsbyEx,
  Gatsby,
  GiftSolid,
  Gift,
  Github,
  Glasses,
  GlobeEuropeSolid,
  GlobeEurope,
  Google,
  GridList,
  HandTruck,
  Hashtag,
  HeartBroken,
  Heart,
  History,
  HouseStar,
  House,
  InboxSolid,
  InformationCircleSolid,
  InformationCircle,
  JavascriptEx,
  Javascript,
  KeySolid,
  Key,
  Keyboard,
  KlarnaEx,
  Klarna,
  Klaviyo,
  Levels,
  Lifebuoy,
  LightBulbSolid,
  LightBulb,
  Link,
  Linkedin,
  ListBullet,
  ListCheckbox,
  ListTree,
  Loader,
  LockClosedSolidMini,
  LockClosedSolid,
  LockOpenSolid,
  MagnifierAlert,
  MagnifyingGlassMini,
  MagnifyingGlass,
  MapPin,
  Map,
  Mastercard,
  MediaPlay,
  Medusa,
  Meta,
  MinusMini,
  Minus,
  MoonSolid,
  Moon,
  Newspaper,
  NextJs,
  OpenRectArrowOut,
  PaperClip,
  Party,
  PauseSolid,
  PenPlus,
  PencilSquareSolid,
  PencilSquare,
  Pencil,
  Phone,
  PhotoSolid,
  Photo,
  PlayMiniSolid,
  PlaySolid,
  PlusMini,
  Plus,
  PuzzleSolid,
  Puzzle,
  QuestionMarkCircle,
  QuestionMark,
  QueueList,
  ReactJsEx,
  ReactJs,
  ReceiptPercent,
  Receipt,
  Reduce,
  ReplaySolid,
  Resize,
  RocketLaunchSolid,
  RocketLaunch,
  Rss,
  Sanity,
  ScrollText,
  Sendgrid,
  ServerSolid,
  ServerStackSolid,
  ServerStack,
  Server,
  Share,
  ShieldCheck,
  Shipbob,
  ShoppingBag,
  ShoppingCartSolid,
  ShoppingCart,
  Shopping,
  SidebarLeft,
  SidebarRight,
  Slack,
  Snooze,
  SparklesMiniSolid,
  SparklesMini,
  SparklesSolid,
  Sparkles,
  Spinner,
  SquareBlueSolid,
  SquareGreenSolid,
  SquareGreySolid,
  SquareOrangeSolid,
  SquarePurpleSolid,
  SquareRedSolid,
  SquareTwoStackMini,
  SquareTwoStackSolid,
  SquareTwoStack,
  SquaresPlusSolid,
  SquaresPlus,
  StackPerspective,
  StarSolid,
  Star,
  Stopwatch,
  Stripe,
  SunSolid,
  Sun,
  SwatchSolid,
  Swatch,
  TagIllustration,
  TagSolid,
  Tag,
  Tailwind,
  Target,
  TaxExclusive,
  TaxInclusive,
  TextHighlight,
  Text,
  ThumbDown,
  ThumbUp,
  ThumbnailBadge,
  TimelineVertical,
  ToolsSolid,
  Tools,
  TopToBottom,
  Trash,
  TriangleDownMini,
  TriangleLeftMini,
  TriangleRightMiniHover,
  TriangleRightMini,
  TriangleUpMini,
  TrianglesMini,
  Trophy,
  TruckFast,
  TypescriptEx,
  Typescript,
  UserGroup,
  UserMini,
  User,
  UsersSolid,
  Users,
  Vercel,
  VerifiedBadge,
  Visa,
  WandSparkle,
  Webshipper,
  Window,
  XCircleSolid,
  XCircle,
  XMarkMini,
  XMark,
  X
};
//# sourceMappingURL=chunk-M4QH5KFS.js.map
