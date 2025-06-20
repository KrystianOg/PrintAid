import {
  _extends
} from "./chunk-HQ6ZTAWL.js";
import {
  require_jsx_runtime
} from "./chunk-X3VLT5EQ.js";
import {
  require_react
} from "./chunk-2CLD7BNN.js";
import {
  __toESM
} from "./chunk-WOOG5QLI.js";

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/@uiw/react-json-view/esm/index.js
var import_react15 = __toESM(require_react());

// node_modules/@uiw/react-json-view/esm/store.js
var import_react7 = __toESM(require_react());

// node_modules/@uiw/react-json-view/esm/store/ShowTools.js
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var initialState = {};
var Context = (0, import_react.createContext)(initialState);
var reducer = (state, action) => _extends({}, state, action);
var useShowToolsStore = () => {
  return (0, import_react.useContext)(Context);
};
var DispatchShowTools = (0, import_react.createContext)(() => {
});
DispatchShowTools.displayName = "JVR.DispatchShowTools";
function useShowTools() {
  return (0, import_react.useReducer)(reducer, initialState);
}
function useShowToolsDispatch() {
  return (0, import_react.useContext)(DispatchShowTools);
}
var ShowTools = (_ref) => {
  var {
    initial,
    dispatch,
    children
  } = _ref;
  return (0, import_jsx_runtime.jsx)(Context.Provider, {
    value: initial,
    children: (0, import_jsx_runtime.jsx)(DispatchShowTools.Provider, {
      value: dispatch,
      children
    })
  });
};
ShowTools.displayName = "JVR.ShowTools";

// node_modules/@uiw/react-json-view/esm/store/Expands.js
var import_react2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var initialState2 = {};
var Context2 = (0, import_react2.createContext)(initialState2);
var reducer2 = (state, action) => _extends({}, state, action);
var useExpandsStore = () => {
  return (0, import_react2.useContext)(Context2);
};
var DispatchExpands = (0, import_react2.createContext)(() => {
});
DispatchExpands.displayName = "JVR.DispatchExpands";
function useExpands() {
  return (0, import_react2.useReducer)(reducer2, initialState2);
}
function useExpandsDispatch() {
  return (0, import_react2.useContext)(DispatchExpands);
}
var Expands = (_ref) => {
  var {
    initial,
    dispatch,
    children
  } = _ref;
  return (0, import_jsx_runtime2.jsx)(Context2.Provider, {
    value: initial,
    children: (0, import_jsx_runtime2.jsx)(DispatchExpands.Provider, {
      value: dispatch,
      children
    })
  });
};
Expands.displayName = "JVR.Expands";

// node_modules/@uiw/react-json-view/esm/store/Types.js
var import_react3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var initialState3 = {
  Str: {
    as: "span",
    "data-type": "string",
    style: {
      color: "var(--w-rjv-type-string-color, #cb4b16)"
    },
    className: "w-rjv-type",
    children: "string"
  },
  Url: {
    as: "a",
    style: {
      color: "var(--w-rjv-type-url-color, #0969da)"
    },
    "data-type": "url",
    className: "w-rjv-type",
    children: "url"
  },
  Undefined: {
    style: {
      color: "var(--w-rjv-type-undefined-color, #586e75)"
    },
    as: "span",
    "data-type": "undefined",
    className: "w-rjv-type",
    children: "undefined"
  },
  Null: {
    style: {
      color: "var(--w-rjv-type-null-color, #d33682)"
    },
    as: "span",
    "data-type": "null",
    className: "w-rjv-type",
    children: "null"
  },
  Map: {
    style: {
      color: "var(--w-rjv-type-map-color, #268bd2)",
      marginRight: 3
    },
    as: "span",
    "data-type": "map",
    className: "w-rjv-type",
    children: "Map"
  },
  Nan: {
    style: {
      color: "var(--w-rjv-type-nan-color, #859900)"
    },
    as: "span",
    "data-type": "nan",
    className: "w-rjv-type",
    children: "NaN"
  },
  Bigint: {
    style: {
      color: "var(--w-rjv-type-bigint-color, #268bd2)"
    },
    as: "span",
    "data-type": "bigint",
    className: "w-rjv-type",
    children: "bigint"
  },
  Int: {
    style: {
      color: "var(--w-rjv-type-int-color, #268bd2)"
    },
    as: "span",
    "data-type": "int",
    className: "w-rjv-type",
    children: "int"
  },
  Set: {
    style: {
      color: "var(--w-rjv-type-set-color, #268bd2)",
      marginRight: 3
    },
    as: "span",
    "data-type": "set",
    className: "w-rjv-type",
    children: "Set"
  },
  Float: {
    style: {
      color: "var(--w-rjv-type-float-color, #859900)"
    },
    as: "span",
    "data-type": "float",
    className: "w-rjv-type",
    children: "float"
  },
  True: {
    style: {
      color: "var(--w-rjv-type-boolean-color, #2aa198)"
    },
    as: "span",
    "data-type": "bool",
    className: "w-rjv-type",
    children: "bool"
  },
  False: {
    style: {
      color: "var(--w-rjv-type-boolean-color, #2aa198)"
    },
    as: "span",
    "data-type": "bool",
    className: "w-rjv-type",
    children: "bool"
  },
  Date: {
    style: {
      color: "var(--w-rjv-type-date-color, #268bd2)"
    },
    as: "span",
    "data-type": "date",
    className: "w-rjv-type",
    children: "date"
  }
};
var Context3 = (0, import_react3.createContext)(initialState3);
var reducer3 = (state, action) => _extends({}, state, action);
var useTypesStore = () => {
  return (0, import_react3.useContext)(Context3);
};
var DispatchTypes = (0, import_react3.createContext)(() => {
});
DispatchTypes.displayName = "JVR.DispatchTypes";
function useTypes() {
  return (0, import_react3.useReducer)(reducer3, initialState3);
}
function useTypesDispatch() {
  return (0, import_react3.useContext)(DispatchTypes);
}
function Types(_ref) {
  var {
    initial,
    dispatch,
    children
  } = _ref;
  return (0, import_jsx_runtime3.jsx)(Context3.Provider, {
    value: initial,
    children: (0, import_jsx_runtime3.jsx)(DispatchTypes.Provider, {
      value: dispatch,
      children
    })
  });
}
Types.displayName = "JVR.Types";

// node_modules/@uiw/react-json-view/esm/store/Symbols.js
var import_react5 = __toESM(require_react());

// node_modules/@uiw/react-json-view/esm/arrow/TriangleArrow.js
var import_react4 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded = ["style"];
function TriangleArrow(props) {
  var {
    style
  } = props, reset = _objectWithoutPropertiesLoose(props, _excluded);
  var defaultStyle = _extends({
    cursor: "pointer",
    height: "1em",
    width: "1em",
    userSelect: "none",
    display: "inline-flex"
  }, style);
  return (0, import_jsx_runtime4.jsx)("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "var(--w-rjv-arrow-color, currentColor)",
    style: defaultStyle
  }, reset, {
    children: (0, import_jsx_runtime4.jsx)("path", {
      d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
    })
  }));
}
TriangleArrow.displayName = "JVR.TriangleArrow";

// node_modules/@uiw/react-json-view/esm/store/Symbols.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var initialState4 = {
  Arrow: {
    as: "span",
    className: "w-rjv-arrow",
    style: {
      transform: "rotate(0deg)",
      transition: "all 0.3s"
    },
    children: (0, import_jsx_runtime5.jsx)(TriangleArrow, {})
  },
  Colon: {
    as: "span",
    style: {
      color: "var(--w-rjv-colon-color, var(--w-rjv-color))",
      marginLeft: 0,
      marginRight: 2
    },
    className: "w-rjv-colon",
    children: ":"
  },
  Quote: {
    as: "span",
    style: {
      color: "var(--w-rjv-quotes-color, #236a7c)"
    },
    className: "w-rjv-quotes",
    children: '"'
  },
  ValueQuote: {
    as: "span",
    style: {
      color: "var(--w-rjv-quotes-string-color, #cb4b16)"
    },
    className: "w-rjv-quotes",
    children: '"'
  },
  BracketsLeft: {
    as: "span",
    style: {
      color: "var(--w-rjv-brackets-color, #236a7c)"
    },
    className: "w-rjv-brackets-start",
    children: "["
  },
  BracketsRight: {
    as: "span",
    style: {
      color: "var(--w-rjv-brackets-color, #236a7c)"
    },
    className: "w-rjv-brackets-end",
    children: "]"
  },
  BraceLeft: {
    as: "span",
    style: {
      color: "var(--w-rjv-curlybraces-color, #236a7c)"
    },
    className: "w-rjv-curlybraces-start",
    children: "{"
  },
  BraceRight: {
    as: "span",
    style: {
      color: "var(--w-rjv-curlybraces-color, #236a7c)"
    },
    className: "w-rjv-curlybraces-end",
    children: "}"
  }
};
var Context4 = (0, import_react5.createContext)(initialState4);
var reducer4 = (state, action) => _extends({}, state, action);
var useSymbolsStore = () => {
  return (0, import_react5.useContext)(Context4);
};
var DispatchSymbols = (0, import_react5.createContext)(() => {
});
DispatchSymbols.displayName = "JVR.DispatchSymbols";
function useSymbols() {
  return (0, import_react5.useReducer)(reducer4, initialState4);
}
function useSymbolsDispatch() {
  return (0, import_react5.useContext)(DispatchSymbols);
}
var Symbols = (_ref) => {
  var {
    initial,
    dispatch,
    children
  } = _ref;
  return (0, import_jsx_runtime5.jsx)(Context4.Provider, {
    value: initial,
    children: (0, import_jsx_runtime5.jsx)(DispatchSymbols.Provider, {
      value: dispatch,
      children
    })
  });
};
Symbols.displayName = "JVR.Symbols";

// node_modules/@uiw/react-json-view/esm/store/Section.js
var import_react6 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var initialState5 = {
  Copied: {
    className: "w-rjv-copied",
    style: {
      height: "1em",
      width: "1em",
      cursor: "pointer",
      verticalAlign: "middle",
      marginLeft: 5
    }
  },
  CountInfo: {
    as: "span",
    className: "w-rjv-object-size",
    style: {
      color: "var(--w-rjv-info-color, #0000004d)",
      paddingLeft: 8,
      fontStyle: "italic"
    }
  },
  CountInfoExtra: {
    as: "span",
    className: "w-rjv-object-extra",
    style: {
      paddingLeft: 8
    }
  },
  Ellipsis: {
    as: "span",
    style: {
      cursor: "pointer",
      color: "var(--w-rjv-ellipsis-color, #cb4b16)",
      userSelect: "none"
    },
    className: "w-rjv-ellipsis",
    children: "..."
  },
  Row: {
    as: "div",
    className: "w-rjv-line"
  },
  KeyName: {
    as: "span",
    className: "w-rjv-object-key"
  }
};
var Context5 = (0, import_react6.createContext)(initialState5);
var reducer5 = (state, action) => _extends({}, state, action);
var useSectionStore = () => {
  return (0, import_react6.useContext)(Context5);
};
var DispatchSection = (0, import_react6.createContext)(() => {
});
DispatchSection.displayName = "JVR.DispatchSection";
function useSection() {
  return (0, import_react6.useReducer)(reducer5, initialState5);
}
function useSectionDispatch() {
  return (0, import_react6.useContext)(DispatchSection);
}
var Section = (_ref) => {
  var {
    initial,
    dispatch,
    children
  } = _ref;
  return (0, import_jsx_runtime6.jsx)(Context5.Provider, {
    value: initial,
    children: (0, import_jsx_runtime6.jsx)(DispatchSection.Provider, {
      value: dispatch,
      children
    })
  });
};
Section.displayName = "JVR.Section";

// node_modules/@uiw/react-json-view/esm/store.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var initialState6 = {
  objectSortKeys: false,
  indentWidth: 15
};
var Context6 = (0, import_react7.createContext)(initialState6);
Context6.displayName = "JVR.Context";
var DispatchContext = (0, import_react7.createContext)(() => {
});
DispatchContext.displayName = "JVR.DispatchContext";
function reducer6(state, action) {
  return _extends({}, state, action);
}
var useStore = () => {
  return (0, import_react7.useContext)(Context6);
};
var useDispatchStore = () => {
  return (0, import_react7.useContext)(DispatchContext);
};
var Provider = (_ref) => {
  var {
    children,
    initialState: init,
    initialTypes
  } = _ref;
  var [state, dispatch] = (0, import_react7.useReducer)(reducer6, Object.assign({}, initialState6, init));
  var [showTools, showToolsDispatch] = useShowTools();
  var [expands, expandsDispatch] = useExpands();
  var [types, typesDispatch] = useTypes();
  var [symbols, symbolsDispatch] = useSymbols();
  var [section, sectionDispatch] = useSection();
  (0, import_react7.useEffect)(() => dispatch(_extends({}, init)), [init]);
  return (0, import_jsx_runtime7.jsx)(Context6.Provider, {
    value: state,
    children: (0, import_jsx_runtime7.jsx)(DispatchContext.Provider, {
      value: dispatch,
      children: (0, import_jsx_runtime7.jsx)(ShowTools, {
        initial: showTools,
        dispatch: showToolsDispatch,
        children: (0, import_jsx_runtime7.jsx)(Expands, {
          initial: expands,
          dispatch: expandsDispatch,
          children: (0, import_jsx_runtime7.jsx)(Types, {
            initial: _extends({}, types, initialTypes),
            dispatch: typesDispatch,
            children: (0, import_jsx_runtime7.jsx)(Symbols, {
              initial: symbols,
              dispatch: symbolsDispatch,
              children: (0, import_jsx_runtime7.jsx)(Section, {
                initial: section,
                dispatch: sectionDispatch,
                children
              })
            })
          })
        })
      })
    })
  });
};
function useDispatch() {
  return (0, import_react7.useContext)(DispatchContext);
}
Provider.displayName = "JVR.Provider";

// node_modules/@uiw/react-json-view/esm/Container.js
var import_react14 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

// node_modules/@uiw/react-json-view/esm/symbol/index.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded2 = ["isNumber", "value", "parentValue", "keyName", "keys"];
var _excluded22 = ["as", "render"];
var _excluded3 = ["as", "render"];
var _excluded4 = ["as", "render"];
var _excluded5 = ["as", "style", "render"];
var _excluded6 = ["as", "render"];
var _excluded7 = ["as", "render"];
var _excluded8 = ["as", "render"];
var _excluded9 = ["as", "render"];
var Quote = (props) => {
  var {
    Quote: Comp = {}
  } = useSymbolsStore();
  var {
    isNumber,
    value,
    parentValue,
    keyName,
    keys
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  if (isNumber) return null;
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded22);
  var Elm = as || "span";
  var elmProps = _extends({}, other, reset);
  var result = {
    value,
    parentValue,
    keyName,
    keys: keys || (keyName ? [keyName] : [])
  };
  var child = render && typeof render === "function" && render(elmProps, result);
  if (child) return child;
  return (0, import_jsx_runtime8.jsx)(Elm, _extends({}, elmProps));
};
Quote.displayName = "JVR.Quote";
var ValueQuote = (props) => {
  var {
    ValueQuote: Comp = {}
  } = useSymbolsStore();
  var other = _extends({}, (_objectDestructuringEmpty(props), props));
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded3);
  var Elm = as || "span";
  var elmProps = _extends({}, other, reset);
  var child = render && typeof render === "function" && render(elmProps, {});
  if (child) return child;
  return (0, import_jsx_runtime8.jsx)(Elm, _extends({}, elmProps));
};
ValueQuote.displayName = "JVR.ValueQuote";
var Colon = (props) => {
  var {
    value,
    parentValue,
    keyName,
    keys
  } = props;
  var {
    Colon: Comp = {}
  } = useSymbolsStore();
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded4);
  var Elm = as || "span";
  var child = render && typeof render === "function" && render(reset, {
    value,
    parentValue,
    keyName,
    keys: keys || (keyName ? [keyName] : [])
  });
  if (child) return child;
  return (0, import_jsx_runtime8.jsx)(Elm, _extends({}, reset));
};
Colon.displayName = "JVR.Colon";
var Arrow = (props) => {
  var {
    Arrow: Comp = {}
  } = useSymbolsStore();
  var expands = useExpandsStore();
  var {
    expandKey,
    style: resetStyle,
    value,
    parentValue,
    keyName,
    keys
  } = props;
  var isExpanded = !!expands[expandKey];
  var {
    as,
    style,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded5);
  var Elm = as || "span";
  var isRender = render && typeof render === "function";
  var elmProps = _extends({}, reset, {
    "data-expanded": isExpanded,
    style: _extends({}, style, resetStyle)
  });
  var result = {
    value,
    parentValue,
    keyName,
    keys: keys || (keyName ? [keyName] : [])
  };
  var child = isRender && render(elmProps, result);
  if (child) return child;
  return (0, import_jsx_runtime8.jsx)(Elm, _extends({}, reset, {
    style: _extends({}, style, resetStyle)
  }));
};
Arrow.displayName = "JVR.Arrow";
var BracketsOpen = (props) => {
  var {
    isBrackets,
    value,
    parentValue,
    keyName,
    keys
  } = props;
  var {
    BracketsLeft: BracketsLeft2 = {},
    BraceLeft: BraceLeft2 = {}
  } = useSymbolsStore();
  var result = {
    value,
    parentValue,
    keyName,
    keys: keys || (keyName ? [keyName] : [])
  };
  if (isBrackets) {
    var {
      as,
      render: _render
    } = BracketsLeft2, reset = _objectWithoutPropertiesLoose(BracketsLeft2, _excluded6);
    var BracketsLeftComp = as || "span";
    var _child = _render && typeof _render === "function" && _render(reset, result);
    if (_child) return _child;
    return (0, import_jsx_runtime8.jsx)(BracketsLeftComp, _extends({}, reset));
  }
  var {
    as: elm,
    render
  } = BraceLeft2, resetProps = _objectWithoutPropertiesLoose(BraceLeft2, _excluded7);
  var BraceLeftComp = elm || "span";
  var child = render && typeof render === "function" && render(resetProps, result);
  if (child) return child;
  return (0, import_jsx_runtime8.jsx)(BraceLeftComp, _extends({}, resetProps));
};
BracketsOpen.displayName = "JVR.BracketsOpen";
var BracketsClose = (props) => {
  var {
    isBrackets,
    isVisiable,
    value,
    parentValue,
    keyName,
    keys
  } = props;
  var result = {
    value,
    parentValue,
    keyName,
    keys: keys || (keyName ? [keyName] : [])
  };
  if (!isVisiable) return null;
  var {
    BracketsRight: BracketsRight2 = {},
    BraceRight: BraceRight2 = {}
  } = useSymbolsStore();
  if (isBrackets) {
    var {
      as,
      render: _render2
    } = BracketsRight2, _reset = _objectWithoutPropertiesLoose(BracketsRight2, _excluded8);
    var BracketsRightComp = as || "span";
    var _child2 = _render2 && typeof _render2 === "function" && _render2(_reset, result);
    if (_child2) return _child2;
    return (0, import_jsx_runtime8.jsx)(BracketsRightComp, _extends({}, _reset));
  }
  var {
    as: elm,
    render
  } = BraceRight2, reset = _objectWithoutPropertiesLoose(BraceRight2, _excluded9);
  var BraceRightComp = elm || "span";
  var child = render && typeof render === "function" && render(reset, result);
  if (child) return child;
  return (0, import_jsx_runtime8.jsx)(BraceRightComp, _extends({}, reset));
};
BracketsClose.displayName = "JVR.BracketsClose";

// node_modules/@uiw/react-json-view/esm/comps/NestedClose.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var NestedClose = (props) => {
  var _expands$expandKey;
  var {
    value,
    expandKey,
    level,
    keys = []
  } = props;
  var expands = useExpandsStore();
  var isArray = Array.isArray(value);
  var {
    collapsed,
    shouldExpandNodeInitially
  } = useStore();
  var isMySet = value instanceof Set;
  var defaultExpanded = typeof collapsed === "boolean" ? collapsed : typeof collapsed === "number" ? level > collapsed : false;
  var isExpanded = (_expands$expandKey = expands[expandKey]) != null ? _expands$expandKey : defaultExpanded;
  var len = Object.keys(value).length;
  if (expands[expandKey] === void 0 && shouldExpandNodeInitially && shouldExpandNodeInitially(isExpanded, {
    value,
    keys,
    level
  })) {
    return null;
  }
  if (isExpanded || len === 0) {
    return null;
  }
  var style = {
    paddingLeft: 4
  };
  return (0, import_jsx_runtime9.jsx)("div", {
    style,
    children: (0, import_jsx_runtime9.jsx)(BracketsClose, {
      isBrackets: isArray || isMySet,
      isVisiable: true
    })
  });
};
NestedClose.displayName = "JVR.NestedClose";

// node_modules/@uiw/react-json-view/esm/comps/KeyValues.js
var import_react13 = __toESM(require_react());

// node_modules/@uiw/react-json-view/esm/types/index.js
var import_react8 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded10 = ["as", "render"];
var _excluded23 = ["as", "render"];
var _excluded32 = ["as", "render"];
var _excluded42 = ["as", "render"];
var _excluded52 = ["as", "render"];
var _excluded62 = ["as", "render"];
var _excluded72 = ["as", "render"];
var _excluded82 = ["as", "render"];
var _excluded92 = ["as", "render"];
var _excluded0 = ["as", "render"];
var _excluded1 = ["as", "render"];
var _excluded102 = ["as", "render"];
var _excluded11 = ["as", "render"];
var bigIntToString = (bi) => {
  if (bi === void 0) {
    return "0n";
  } else if (typeof bi === "string") {
    try {
      bi = BigInt(bi);
    } catch (e) {
      return "0n";
    }
  }
  return bi ? bi.toString() + "n" : "0n";
};
var SetComp = (_ref) => {
  var {
    value,
    keyName
  } = _ref;
  var {
    Set: Comp = {},
    displayDataTypes
  } = useTypesStore();
  var isSet = value instanceof Set;
  if (!isSet || !displayDataTypes) return null;
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded10);
  var isRender = render && typeof render === "function";
  var type = isRender && render(reset, {
    type: "type",
    value,
    keyName
  });
  if (type) return type;
  var Elm = as || "span";
  return (0, import_jsx_runtime10.jsx)(Elm, _extends({}, reset));
};
SetComp.displayName = "JVR.SetComp";
var MapComp = (_ref2) => {
  var {
    value,
    keyName
  } = _ref2;
  var {
    Map: Comp = {},
    displayDataTypes
  } = useTypesStore();
  var isMap = value instanceof Map;
  if (!isMap || !displayDataTypes) return null;
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded23);
  var isRender = render && typeof render === "function";
  var type = isRender && render(reset, {
    type: "type",
    value,
    keyName
  });
  if (type) return type;
  var Elm = as || "span";
  return (0, import_jsx_runtime10.jsx)(Elm, _extends({}, reset));
};
MapComp.displayName = "JVR.MapComp";
var defalutStyle = {
  opacity: 0.75,
  paddingRight: 4
};
var TypeString = (_ref3) => {
  var {
    children = "",
    keyName
  } = _ref3;
  var {
    Str = {},
    displayDataTypes
  } = useTypesStore();
  var {
    shortenTextAfterLength: length = 30,
    stringEllipsis = "..."
  } = useStore();
  var {
    as,
    render
  } = Str, reset = _objectWithoutPropertiesLoose(Str, _excluded32);
  var childrenStr = children;
  var [shorten, setShorten] = (0, import_react8.useState)(length && childrenStr.length > length);
  (0, import_react8.useEffect)(() => setShorten(length && childrenStr.length > length), [length]);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, Str.style || {});
  if (length > 0) {
    reset.style = _extends({}, reset.style, {
      cursor: childrenStr.length <= length ? "initial" : "pointer"
    });
    if (childrenStr.length > length) {
      reset.onClick = () => {
        setShorten(!shorten);
      };
    }
  }
  var text = shorten ? "" + childrenStr.slice(0, length) + stringEllipsis : childrenStr;
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var cls = shorten ? "w-rjv-value w-rjv-value-short" : "w-rjv-value";
  var child = isRender && render(_extends({}, reset, {
    children: text,
    className: cls
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
      children: [(0, import_jsx_runtime10.jsx)(ValueQuote, {}), (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
        className: cls,
        children: text
      })), (0, import_jsx_runtime10.jsx)(ValueQuote, {})]
    })]
  });
};
TypeString.displayName = "JVR.TypeString";
var TypeTrue = (_ref4) => {
  var {
    children,
    keyName
  } = _ref4;
  var {
    True: True2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = True2, reset = _objectWithoutPropertiesLoose(True2, _excluded42);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, True2.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      className: "w-rjv-value",
      children: children == null ? void 0 : children.toString()
    }))]
  });
};
TypeTrue.displayName = "JVR.TypeTrue";
var TypeFalse = (_ref5) => {
  var {
    children,
    keyName
  } = _ref5;
  var {
    False: False2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = False2, reset = _objectWithoutPropertiesLoose(False2, _excluded52);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, False2.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      className: "w-rjv-value",
      children: children == null ? void 0 : children.toString()
    }))]
  });
};
TypeFalse.displayName = "JVR.TypeFalse";
var TypeFloat = (_ref6) => {
  var {
    children,
    keyName
  } = _ref6;
  var {
    Float: Float2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = Float2, reset = _objectWithoutPropertiesLoose(Float2, _excluded62);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, Float2.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      className: "w-rjv-value",
      children: children == null ? void 0 : children.toString()
    }))]
  });
};
TypeFloat.displayName = "JVR.TypeFloat";
var TypeInt = (_ref7) => {
  var {
    children,
    keyName
  } = _ref7;
  var {
    Int: Int2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = Int2, reset = _objectWithoutPropertiesLoose(Int2, _excluded72);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, Int2.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      className: "w-rjv-value",
      children: children == null ? void 0 : children.toString()
    }))]
  });
};
TypeInt.displayName = "JVR.TypeInt";
var TypeBigint = (_ref8) => {
  var {
    children,
    keyName
  } = _ref8;
  var {
    Bigint: CompBigint = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = CompBigint, reset = _objectWithoutPropertiesLoose(CompBigint, _excluded82);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, CompBigint.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      className: "w-rjv-value",
      children: bigIntToString(children == null ? void 0 : children.toString())
    }))]
  });
};
TypeBigint.displayName = "JVR.TypeFloat";
var TypeUrl = (_ref9) => {
  var {
    children,
    keyName
  } = _ref9;
  var {
    Url: Url2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = Url2, reset = _objectWithoutPropertiesLoose(Url2, _excluded92);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, Url2.style);
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children: children == null ? void 0 : children.href,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsxs)("a", _extends({
      href: children == null ? void 0 : children.href,
      target: "_blank"
    }, reset, {
      className: "w-rjv-value",
      children: [(0, import_jsx_runtime10.jsx)(ValueQuote, {}), children == null ? void 0 : children.href, (0, import_jsx_runtime10.jsx)(ValueQuote, {})]
    }))]
  });
};
TypeUrl.displayName = "JVR.TypeUrl";
var TypeDate = (_ref0) => {
  var {
    children,
    keyName
  } = _ref0;
  var {
    Date: CompData = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = CompData, reset = _objectWithoutPropertiesLoose(CompData, _excluded0);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, CompData.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var childStr = children instanceof Date ? children.toLocaleString() : children;
  var child = isRender && render(_extends({}, reset, {
    children: childStr,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      className: "w-rjv-value",
      children: childStr
    }))]
  });
};
TypeDate.displayName = "JVR.TypeDate";
var TypeUndefined = (_ref1) => {
  var {
    children,
    keyName
  } = _ref1;
  var {
    Undefined: Undefined2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = Undefined2, reset = _objectWithoutPropertiesLoose(Undefined2, _excluded1);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, Undefined2.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child]
  });
};
TypeUndefined.displayName = "JVR.TypeUndefined";
var TypeNull = (_ref10) => {
  var {
    children,
    keyName
  } = _ref10;
  var {
    Null: Null2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = Null2, reset = _objectWithoutPropertiesLoose(Null2, _excluded102);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, Null2.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children,
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child]
  });
};
TypeNull.displayName = "JVR.TypeNull";
var TypeNan = (_ref11) => {
  var {
    children,
    keyName
  } = _ref11;
  var {
    Nan: Nan2 = {},
    displayDataTypes
  } = useTypesStore();
  var {
    as,
    render
  } = Nan2, reset = _objectWithoutPropertiesLoose(Nan2, _excluded11);
  var Comp = as || "span";
  var style = _extends({}, defalutStyle, Nan2.style || {});
  var isRender = render && typeof render === "function";
  var type = isRender && render(_extends({}, reset, {
    style
  }), {
    type: "type",
    value: children,
    keyName
  });
  var child = isRender && render(_extends({}, reset, {
    children: children == null ? void 0 : children.toString(),
    className: "w-rjv-value"
  }), {
    type: "value",
    value: children,
    keyName
  });
  return (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, {
    children: [displayDataTypes && (type || (0, import_jsx_runtime10.jsx)(Comp, _extends({}, reset, {
      style
    }))), child]
  });
};
TypeNan.displayName = "JVR.TypeNan";

// node_modules/@uiw/react-json-view/esm/comps/Value.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var isFloat = (n) => Number(n) === n && n % 1 !== 0 || isNaN(n);
var Value = (props) => {
  var {
    value,
    keyName
  } = props;
  var reset = {
    keyName
  };
  if (value instanceof URL) {
    return (0, import_jsx_runtime11.jsx)(TypeUrl, _extends({}, reset, {
      children: value
    }));
  }
  if (typeof value === "string") {
    return (0, import_jsx_runtime11.jsx)(TypeString, _extends({}, reset, {
      children: value
    }));
  }
  if (value === true) {
    return (0, import_jsx_runtime11.jsx)(TypeTrue, _extends({}, reset, {
      children: value
    }));
  }
  if (value === false) {
    return (0, import_jsx_runtime11.jsx)(TypeFalse, _extends({}, reset, {
      children: value
    }));
  }
  if (value === null) {
    return (0, import_jsx_runtime11.jsx)(TypeNull, _extends({}, reset, {
      children: value
    }));
  }
  if (value === void 0) {
    return (0, import_jsx_runtime11.jsx)(TypeUndefined, _extends({}, reset, {
      children: value
    }));
  }
  if (value instanceof Date) {
    return (0, import_jsx_runtime11.jsx)(TypeDate, _extends({}, reset, {
      children: value
    }));
  }
  if (typeof value === "number" && isNaN(value)) {
    return (0, import_jsx_runtime11.jsx)(TypeNan, _extends({}, reset, {
      children: value
    }));
  } else if (typeof value === "number" && isFloat(value)) {
    return (0, import_jsx_runtime11.jsx)(TypeFloat, _extends({}, reset, {
      children: value
    }));
  } else if (typeof value === "bigint") {
    return (0, import_jsx_runtime11.jsx)(TypeBigint, _extends({}, reset, {
      children: value
    }));
  } else if (typeof value === "number") {
    return (0, import_jsx_runtime11.jsx)(TypeInt, _extends({}, reset, {
      children: value
    }));
  }
  return null;
};
Value.displayName = "JVR.Value";

// node_modules/@uiw/react-json-view/esm/utils/useRender.js
var import_react9 = __toESM(require_react());
function useSymbolsRender(currentProps, props, key) {
  var dispatch = useSymbolsDispatch();
  var cls = [currentProps.className, props.className].filter(Boolean).join(" ");
  var reset = _extends({}, currentProps, props, {
    className: cls,
    style: _extends({}, currentProps.style, props.style),
    children: props.children || currentProps.children
  });
  (0, import_react9.useEffect)(() => dispatch({
    [key]: reset
  }), [props]);
}
function useTypesRender(currentProps, props, key) {
  var dispatch = useTypesDispatch();
  var cls = [currentProps.className, props.className].filter(Boolean).join(" ");
  var reset = _extends({}, currentProps, props, {
    className: cls,
    style: _extends({}, currentProps.style, props.style),
    children: props.children || currentProps.children
  });
  (0, import_react9.useEffect)(() => dispatch({
    [key]: reset
  }), [props]);
}
function useSectionRender(currentProps, props, key) {
  var dispatch = useSectionDispatch();
  var cls = [currentProps.className, props.className].filter(Boolean).join(" ");
  var reset = _extends({}, currentProps, props, {
    className: cls,
    style: _extends({}, currentProps.style, props.style),
    children: props.children || currentProps.children
  });
  (0, import_react9.useEffect)(() => dispatch({
    [key]: reset
  }), [props]);
}

// node_modules/@uiw/react-json-view/esm/section/KeyName.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded12 = ["as", "render"];
var KeyName = (props) => {
  var {
    KeyName: Comp = {}
  } = useSectionStore();
  useSectionRender(Comp, props, "KeyName");
  return null;
};
KeyName.displayName = "JVR.KeyName";
var KeyNameComp = (props) => {
  var {
    children,
    value,
    parentValue,
    keyName,
    keys
  } = props;
  var isNumber = typeof children === "number";
  var style = {
    color: isNumber ? "var(--w-rjv-key-number, #268bd2)" : "var(--w-rjv-key-string, #002b36)"
  };
  var {
    KeyName: Comp = {}
  } = useSectionStore();
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded12);
  reset.style = _extends({}, reset.style, style);
  var Elm = as || "span";
  var child = render && typeof render === "function" && render(_extends({}, reset, {
    children
  }), {
    value,
    parentValue,
    keyName,
    keys: keys || (keyName ? [keyName] : [])
  });
  if (child) return child;
  return (0, import_jsx_runtime12.jsx)(Elm, _extends({}, reset, {
    children
  }));
};
KeyNameComp.displayName = "JVR.KeyNameComp";

// node_modules/@uiw/react-json-view/esm/section/Row.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded13 = ["children", "value", "parentValue", "keyName", "keys"];
var _excluded24 = ["as", "render", "children"];
var Row = (props) => {
  var {
    Row: Comp = {}
  } = useSectionStore();
  useSectionRender(Comp, props, "Row");
  return null;
};
Row.displayName = "JVR.Row";
var RowComp = (props) => {
  var {
    children,
    value,
    parentValue,
    keyName,
    keys
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  var {
    Row: Comp = {}
  } = useSectionStore();
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded24);
  var Elm = as || "div";
  var child = render && typeof render === "function" && render(_extends({}, other, reset, {
    children
  }), {
    value,
    keyName,
    parentValue,
    keys
  });
  if (child) return child;
  return (0, import_jsx_runtime13.jsx)(Elm, _extends({}, other, reset, {
    children
  }));
};
RowComp.displayName = "JVR.RowComp";

// node_modules/@uiw/react-json-view/esm/utils/useHighlight.js
var import_react10 = __toESM(require_react());
function usePrevious(value) {
  var ref = (0, import_react10.useRef)();
  (0, import_react10.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}
function useHighlight(_ref) {
  var {
    value,
    highlightUpdates,
    highlightContainer
  } = _ref;
  var prevValue = usePrevious(value);
  var isHighlight = (0, import_react10.useMemo)(() => {
    if (!highlightUpdates || prevValue === void 0) return false;
    if (typeof value !== typeof prevValue) {
      return true;
    }
    if (typeof value === "number") {
      if (isNaN(value) && isNaN(prevValue)) return false;
      return value !== prevValue;
    }
    if (Array.isArray(value) !== Array.isArray(prevValue)) {
      return true;
    }
    if (typeof value === "object" || typeof value === "function") {
      return false;
    }
    if (value !== prevValue) {
      return true;
    }
  }, [highlightUpdates, value]);
  (0, import_react10.useEffect)(() => {
    if (highlightContainer && highlightContainer.current && isHighlight && "animate" in highlightContainer.current) {
      highlightContainer.current.animate([{
        backgroundColor: "var(--w-rjv-update-color, #ebcb8b)"
      }, {
        backgroundColor: ""
      }], {
        duration: 1e3,
        easing: "ease-in"
      });
    }
  }, [isHighlight, value, highlightContainer]);
}

// node_modules/@uiw/react-json-view/esm/comps/Copied.js
var import_react11 = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded14 = ["keyName", "value", "parentValue", "expandKey", "keys"];
var _excluded25 = ["as", "render"];
var Copied = (props) => {
  var {
    keyName,
    value,
    parentValue,
    expandKey,
    keys
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  var {
    onCopied,
    enableClipboard
  } = useStore();
  var showTools = useShowToolsStore();
  var isShowTools = showTools[expandKey];
  var [copied, setCopied] = (0, import_react11.useState)(false);
  var {
    Copied: Comp = {}
  } = useSectionStore();
  if (enableClipboard === false || !isShowTools) return null;
  var click = (event) => {
    event.stopPropagation();
    var copyText = "";
    if (typeof value === "number" && value === Infinity) {
      copyText = "Infinity";
    } else if (typeof value === "number" && isNaN(value)) {
      copyText = "NaN";
    } else if (typeof value === "bigint") {
      copyText = bigIntToString(value);
    } else if (value instanceof Date) {
      copyText = value.toLocaleString();
    } else {
      copyText = JSON.stringify(value, (_, v) => typeof v === "bigint" ? bigIntToString(v) : v, 2);
    }
    onCopied && onCopied(copyText, value);
    setCopied(true);
    var _clipboard = navigator.clipboard || {
      writeText(text) {
        return new Promise((reslove, reject) => {
          var textarea = document.createElement("textarea");
          textarea.style.position = "absolute";
          textarea.style.opacity = "0";
          textarea.style.left = "-99999999px";
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          if (!document.execCommand("copy")) {
            reject();
          } else {
            reslove();
          }
          textarea.remove();
        });
      }
    };
    _clipboard.writeText(copyText).then(() => {
      var timer = setTimeout(() => {
        setCopied(false);
        clearTimeout(timer);
      }, 3e3);
    }).catch((error) => {
    });
  };
  var svgProps = {
    style: {
      display: "inline-flex"
    },
    fill: copied ? "var(--w-rjv-copied-success-color, #28a745)" : "var(--w-rjv-copied-color, currentColor)",
    onClick: click
  };
  var {
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded25);
  var elmProps = _extends({}, reset, other, svgProps, {
    style: _extends({}, reset.style, other.style, svgProps.style)
  });
  var isRender = render && typeof render === "function";
  var child = isRender && render(_extends({}, elmProps, {
    "data-copied": copied
  }), {
    value,
    keyName,
    keys,
    parentValue
  });
  if (child) return child;
  if (copied) {
    return (0, import_jsx_runtime14.jsx)("svg", _extends({
      viewBox: "0 0 32 36"
    }, elmProps, {
      children: (0, import_jsx_runtime14.jsx)("path", {
        d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,15.2249049 C29.1403264,13.8627542 29.9736597,13.1778155 30,13.1700887 C30,11.9705278 30,10.0804982 30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,26.1114493 L27.5,28.4926435 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M28.5589286,16 L32,19.6 L21.0160714,30.5382252 L13.5303571,24.2571429 L17.1303571,20.6571429 L21.0160714,24.5428571 L28.5589286,16 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"
      })
    }));
  }
  return (0, import_jsx_runtime14.jsx)("svg", _extends({
    viewBox: "0 0 32 36"
  }, elmProps, {
    children: (0, import_jsx_runtime14.jsx)("path", {
      d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,20 L30,20 L30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,29 L27.5,29 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M22.5,21.5 L22.5,16.5 L12.5,24 L22.5,31.5 L22.5,26.5 L32,26.5 L32,21.5 L22.5,21.5 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"
    })
  }));
};
Copied.displayName = "JVR.Copied";

// node_modules/@uiw/react-json-view/esm/comps/useIdCompat.js
var import_react12 = __toESM(require_react());
function useIdCompat() {
  var idRef = (0, import_react12.useRef)(null);
  if (idRef.current === null) {
    idRef.current = "custom-id-" + Math.random().toString(36).substr(2, 9);
  }
  return idRef.current;
}

// node_modules/@uiw/react-json-view/esm/comps/KeyValues.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var KeyValues = (props) => {
  var _expands$expandKey;
  var {
    value,
    expandKey = "",
    level,
    keys = []
  } = props;
  var expands = useExpandsStore();
  var {
    objectSortKeys,
    indentWidth,
    collapsed,
    shouldExpandNodeInitially
  } = useStore();
  var isMyArray = Array.isArray(value);
  var defaultExpanded = typeof collapsed === "boolean" ? collapsed : typeof collapsed === "number" ? level > collapsed : false;
  var isExpanded = (_expands$expandKey = expands[expandKey]) != null ? _expands$expandKey : defaultExpanded;
  if (expands[expandKey] === void 0 && shouldExpandNodeInitially && shouldExpandNodeInitially(isExpanded, {
    value,
    keys,
    level
  })) {
    return null;
  }
  if (isExpanded) {
    return null;
  }
  var entries = isMyArray ? Object.entries(value).map((m) => [Number(m[0]), m[1]]) : Object.entries(value);
  if (objectSortKeys) {
    entries = objectSortKeys === true ? entries.sort((_ref, _ref2) => {
      var [a] = _ref;
      var [b] = _ref2;
      return typeof a === "string" && typeof b === "string" ? a.localeCompare(b) : 0;
    }) : entries.sort((_ref3, _ref4) => {
      var [a, valA] = _ref3;
      var [b, valB] = _ref4;
      return typeof a === "string" && typeof b === "string" ? objectSortKeys(a, b, valA, valB) : 0;
    });
  }
  var style = {
    borderLeft: "var(--w-rjv-border-left-width, 1px) var(--w-rjv-line-style, solid) var(--w-rjv-line-color, #ebebeb)",
    paddingLeft: indentWidth,
    marginLeft: 6
  };
  return (0, import_jsx_runtime15.jsx)("div", {
    className: "w-rjv-wrap",
    style,
    children: entries.map((_ref5, idx) => {
      var [key, val] = _ref5;
      return (0, import_jsx_runtime15.jsx)(KeyValuesItem, {
        parentValue: value,
        keyName: key,
        keys: [...keys, key],
        value: val,
        level
      }, idx);
    })
  });
};
KeyValues.displayName = "JVR.KeyValues";
var KayName = (props) => {
  var {
    keyName,
    parentValue,
    keys,
    value
  } = props;
  var {
    highlightUpdates
  } = useStore();
  var isNumber = typeof keyName === "number";
  var highlightContainer = (0, import_react13.useRef)(null);
  useHighlight({
    value,
    highlightUpdates,
    highlightContainer
  });
  var compProps = {
    keyName,
    value,
    keys,
    parentValue
  };
  return (0, import_jsx_runtime15.jsxs)(import_react13.Fragment, {
    children: [(0, import_jsx_runtime15.jsxs)("span", {
      ref: highlightContainer,
      children: [(0, import_jsx_runtime15.jsx)(Quote, _extends({
        isNumber,
        "data-placement": "left"
      }, compProps)), (0, import_jsx_runtime15.jsx)(KeyNameComp, _extends({}, compProps, {
        children: keyName
      })), (0, import_jsx_runtime15.jsx)(Quote, _extends({
        isNumber,
        "data-placement": "right"
      }, compProps))]
    }), (0, import_jsx_runtime15.jsx)(Colon, _extends({}, compProps))]
  });
};
KayName.displayName = "JVR.KayName";
var KeyValuesItem = (props) => {
  var {
    keyName,
    value,
    parentValue,
    level = 0,
    keys = []
  } = props;
  var dispatch = useShowToolsDispatch();
  var subkeyid = useIdCompat();
  var isMyArray = Array.isArray(value);
  var isMySet = value instanceof Set;
  var isMyMap = value instanceof Map;
  var isDate = value instanceof Date;
  var isUrl = value instanceof URL;
  var isMyObject = value && typeof value === "object" && !isMyArray && !isMySet && !isMyMap && !isDate && !isUrl;
  var isNested = isMyObject || isMyArray || isMySet || isMyMap;
  if (isNested) {
    var myValue = isMySet ? Array.from(value) : isMyMap ? Object.fromEntries(value) : value;
    return (0, import_jsx_runtime15.jsx)(Container, {
      keyName,
      value: myValue,
      parentValue,
      initialValue: value,
      keys,
      level: level + 1
    });
  }
  var reset = {
    onMouseEnter: () => dispatch({
      [subkeyid]: true
    }),
    onMouseLeave: () => dispatch({
      [subkeyid]: false
    })
  };
  return (0, import_jsx_runtime15.jsxs)(RowComp, _extends({
    className: "w-rjv-line",
    value,
    keyName,
    keys,
    parentValue
  }, reset, {
    children: [(0, import_jsx_runtime15.jsx)(KayName, {
      keyName,
      value,
      keys,
      parentValue
    }), (0, import_jsx_runtime15.jsx)(Value, {
      keyName,
      value
    }), (0, import_jsx_runtime15.jsx)(Copied, {
      keyName,
      value,
      keys,
      parentValue,
      expandKey: subkeyid
    })]
  }));
};
KeyValuesItem.displayName = "JVR.KeyValuesItem";

// node_modules/@uiw/react-json-view/esm/section/CountInfoExtra.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded15 = ["value", "keyName"];
var _excluded26 = ["as", "render"];
var CountInfoExtra = (props) => {
  var {
    CountInfoExtra: Comp = {}
  } = useSectionStore();
  useSectionRender(Comp, props, "CountInfoExtra");
  return null;
};
CountInfoExtra.displayName = "JVR.CountInfoExtra";
var CountInfoExtraComps = (props) => {
  var {
    value = {},
    keyName
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  var {
    CountInfoExtra: Comp = {}
  } = useSectionStore();
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded26);
  if (!render && !reset.children) return null;
  var Elm = as || "span";
  var isRender = render && typeof render === "function";
  var elmProps = _extends({}, reset, other);
  var child = isRender && render(elmProps, {
    value,
    keyName
  });
  if (child) return child;
  return (0, import_jsx_runtime16.jsx)(Elm, _extends({}, elmProps));
};
CountInfoExtraComps.displayName = "JVR.CountInfoExtraComps";

// node_modules/@uiw/react-json-view/esm/section/CountInfo.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded16 = ["value", "keyName"];
var _excluded27 = ["as", "render"];
var CountInfo = (props) => {
  var {
    CountInfo: Comp = {}
  } = useSectionStore();
  useSectionRender(Comp, props, "CountInfo");
  return null;
};
CountInfo.displayName = "JVR.CountInfo";
var CountInfoComp = (props) => {
  var {
    value = {},
    keyName
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  var {
    displayObjectSize
  } = useStore();
  var {
    CountInfo: Comp = {}
  } = useSectionStore();
  if (!displayObjectSize) return null;
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded27);
  var Elm = as || "span";
  reset.style = _extends({}, reset.style, props.style);
  var len = Object.keys(value).length;
  if (!reset.children) {
    reset.children = len + " item" + (len === 1 ? "" : "s");
  }
  var elmProps = _extends({}, reset, other);
  var isRender = render && typeof render === "function";
  var child = isRender && render(_extends({}, elmProps, {
    "data-length": len
  }), {
    value,
    keyName
  });
  if (child) return child;
  return (0, import_jsx_runtime17.jsx)(Elm, _extends({}, elmProps));
};
CountInfoComp.displayName = "JVR.CountInfoComp";

// node_modules/@uiw/react-json-view/esm/section/Ellipsis.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded17 = ["as", "render"];
var Ellipsis = (props) => {
  var {
    Ellipsis: Comp = {}
  } = useSectionStore();
  useSectionRender(Comp, props, "Ellipsis");
  return null;
};
Ellipsis.displayName = "JVR.Ellipsis";
var EllipsisComp = (_ref) => {
  var {
    isExpanded,
    value,
    keyName
  } = _ref;
  var {
    Ellipsis: Comp = {}
  } = useSectionStore();
  var {
    as,
    render
  } = Comp, reset = _objectWithoutPropertiesLoose(Comp, _excluded17);
  var Elm = as || "span";
  var child = render && typeof render === "function" && render(_extends({}, reset, {
    "data-expanded": isExpanded
  }), {
    value,
    keyName
  });
  if (child) return child;
  if (!isExpanded || typeof value === "object" && Object.keys(value).length == 0) return null;
  return (0, import_jsx_runtime18.jsx)(Elm, _extends({}, reset));
};
EllipsisComp.displayName = "JVR.EllipsisComp";

// node_modules/@uiw/react-json-view/esm/comps/NestedOpen.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var NestedOpen = (props) => {
  var _expands$expandKey;
  var {
    keyName,
    expandKey,
    keys = [],
    initialValue,
    value,
    parentValue,
    level
  } = props;
  var expands = useExpandsStore();
  var dispatchExpands = useExpandsDispatch();
  var {
    onExpand,
    collapsed,
    shouldExpandNodeInitially
  } = useStore();
  var isArray = Array.isArray(value);
  var isMySet = value instanceof Set;
  var defaultExpanded = typeof collapsed === "boolean" ? collapsed : typeof collapsed === "number" ? level > collapsed : false;
  var isObject = typeof value === "object";
  var isExpanded = (_expands$expandKey = expands[expandKey]) != null ? _expands$expandKey : defaultExpanded;
  var shouldExpand = shouldExpandNodeInitially && shouldExpandNodeInitially(isExpanded, {
    value,
    keys,
    level
  });
  if (expands[expandKey] === void 0 && shouldExpand !== void 0) {
    isExpanded = shouldExpand;
  }
  var click = () => {
    var opt = {
      expand: !isExpanded,
      value,
      keyid: expandKey,
      keyName
    };
    onExpand && onExpand(opt);
    dispatchExpands({
      [expandKey]: opt.expand
    });
  };
  var style = {
    display: "inline-flex",
    alignItems: "center"
  };
  var arrowStyle = {
    transform: "rotate(" + (!isExpanded ? "0" : "-90") + "deg)",
    transition: "all 0.3s"
  };
  var len = Object.keys(value).length;
  var showArrow = len !== 0 && (isArray || isMySet || isObject);
  var reset = {
    style
  };
  if (showArrow) {
    reset.onClick = click;
  }
  var compProps = {
    keyName,
    value,
    keys,
    parentValue
  };
  return (0, import_jsx_runtime19.jsxs)("span", _extends({}, reset, {
    children: [showArrow && (0, import_jsx_runtime19.jsx)(Arrow, _extends({
      style: arrowStyle,
      expandKey
    }, compProps)), (keyName || typeof keyName === "number") && (0, import_jsx_runtime19.jsx)(KayName, _extends({}, compProps)), (0, import_jsx_runtime19.jsx)(SetComp, {
      value: initialValue,
      keyName
    }), (0, import_jsx_runtime19.jsx)(MapComp, {
      value: initialValue,
      keyName
    }), (0, import_jsx_runtime19.jsx)(BracketsOpen, _extends({
      isBrackets: isArray || isMySet
    }, compProps)), (0, import_jsx_runtime19.jsx)(EllipsisComp, {
      keyName,
      value,
      isExpanded
    }), (0, import_jsx_runtime19.jsx)(BracketsClose, _extends({
      isVisiable: isExpanded || !showArrow,
      isBrackets: isArray || isMySet
    }, compProps)), (0, import_jsx_runtime19.jsx)(CountInfoComp, {
      value,
      keyName
    }), (0, import_jsx_runtime19.jsx)(CountInfoExtraComps, {
      value,
      keyName
    }), (0, import_jsx_runtime19.jsx)(Copied, {
      keyName,
      value,
      expandKey,
      parentValue,
      keys
    })]
  }));
};
NestedOpen.displayName = "JVR.NestedOpen";

// node_modules/@uiw/react-json-view/esm/Container.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded18 = ["className", "children", "parentValue", "keyid", "level", "value", "initialValue", "keys", "keyName"];
var Container = (0, import_react14.forwardRef)((props, ref) => {
  var {
    className = "",
    parentValue,
    level = 1,
    value,
    initialValue,
    keys,
    keyName
  } = props, elmProps = _objectWithoutPropertiesLoose(props, _excluded18);
  var dispatch = useShowToolsDispatch();
  var subkeyid = useIdCompat();
  var defaultClassNames = [className, "w-rjv-inner"].filter(Boolean).join(" ");
  var reset = {
    onMouseEnter: () => dispatch({
      [subkeyid]: true
    }),
    onMouseLeave: () => dispatch({
      [subkeyid]: false
    })
  };
  return (0, import_jsx_runtime20.jsxs)("div", _extends({
    className: defaultClassNames,
    ref
  }, elmProps, reset, {
    children: [(0, import_jsx_runtime20.jsx)(NestedOpen, {
      expandKey: subkeyid,
      value,
      level,
      keys,
      parentValue,
      keyName,
      initialValue
    }), (0, import_jsx_runtime20.jsx)(KeyValues, {
      expandKey: subkeyid,
      value,
      level,
      keys,
      parentValue,
      keyName
    }), (0, import_jsx_runtime20.jsx)(NestedClose, {
      expandKey: subkeyid,
      value,
      level,
      keys
    })]
  }));
});
Container.displayName = "JVR.Container";

// node_modules/@uiw/react-json-view/esm/symbol/BraceLeft.js
var BraceLeft = (props) => {
  var {
    BraceLeft: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "BraceLeft");
  return null;
};
BraceLeft.displayName = "JVR.BraceLeft";

// node_modules/@uiw/react-json-view/esm/symbol/BraceRight.js
var BraceRight = (props) => {
  var {
    BraceRight: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "BraceRight");
  return null;
};
BraceRight.displayName = "JVR.BraceRight";

// node_modules/@uiw/react-json-view/esm/symbol/BracketsLeft.js
var BracketsLeft = (props) => {
  var {
    BracketsLeft: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "BracketsLeft");
  return null;
};
BracketsLeft.displayName = "JVR.BracketsLeft";

// node_modules/@uiw/react-json-view/esm/symbol/BracketsRight.js
var BracketsRight = (props) => {
  var {
    BracketsRight: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "BracketsRight");
  return null;
};
BracketsRight.displayName = "JVR.BracketsRight";

// node_modules/@uiw/react-json-view/esm/symbol/Arrow.js
var Arrow2 = (props) => {
  var {
    Arrow: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "Arrow");
  return null;
};
Arrow2.displayName = "JVR.Arrow";

// node_modules/@uiw/react-json-view/esm/symbol/Colon.js
var Colon2 = (props) => {
  var {
    Colon: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "Colon");
  return null;
};
Colon2.displayName = "JVR.Colon";

// node_modules/@uiw/react-json-view/esm/symbol/Quote.js
var Quote2 = (props) => {
  var {
    Quote: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "Quote");
  return null;
};
Quote2.displayName = "JVR.Quote";

// node_modules/@uiw/react-json-view/esm/symbol/ValueQuote.js
var ValueQuote2 = (props) => {
  var {
    ValueQuote: Comp = {}
  } = useSymbolsStore();
  useSymbolsRender(Comp, props, "ValueQuote");
  return null;
};
ValueQuote2.displayName = "JVR.ValueQuote";

// node_modules/@uiw/react-json-view/esm/types/Bigint.js
var Bigint = (props) => {
  var {
    Bigint: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Bigint");
  return null;
};
Bigint.displayName = "JVR.Bigint";

// node_modules/@uiw/react-json-view/esm/types/Date.js
var Date2 = (props) => {
  var {
    Date: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Date");
  return null;
};
Date2.displayName = "JVR.Date";

// node_modules/@uiw/react-json-view/esm/types/False.js
var False = (props) => {
  var {
    False: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "False");
  return null;
};
False.displayName = "JVR.False";

// node_modules/@uiw/react-json-view/esm/types/Float.js
var Float = (props) => {
  var {
    Float: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Float");
  return null;
};
Float.displayName = "JVR.Float";

// node_modules/@uiw/react-json-view/esm/types/Int.js
var Int = (props) => {
  var {
    Int: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Int");
  return null;
};
Int.displayName = "JVR.Int";

// node_modules/@uiw/react-json-view/esm/types/Map.js
var Map2 = (props) => {
  var {
    Map: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Map");
  return null;
};
Map2.displayName = "JVR.Map";

// node_modules/@uiw/react-json-view/esm/types/Nan.js
var Nan = (props) => {
  var {
    Nan: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Nan");
  return null;
};
Nan.displayName = "JVR.Nan";

// node_modules/@uiw/react-json-view/esm/types/Null.js
var Null = (props) => {
  var {
    Null: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Null");
  return null;
};
Null.displayName = "JVR.Null";

// node_modules/@uiw/react-json-view/esm/types/Set.js
var Set2 = (props) => {
  var {
    Set: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Set");
  return null;
};
Set2.displayName = "JVR.Set";

// node_modules/@uiw/react-json-view/esm/types/String.js
var StringText = (props) => {
  var {
    Str: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Str");
  return null;
};
StringText.displayName = "JVR.StringText";

// node_modules/@uiw/react-json-view/esm/types/True.js
var True = (props) => {
  var {
    True: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "True");
  return null;
};
True.displayName = "JVR.True";

// node_modules/@uiw/react-json-view/esm/types/Undefined.js
var Undefined = (props) => {
  var {
    Undefined: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Undefined");
  return null;
};
Undefined.displayName = "JVR.Undefined";

// node_modules/@uiw/react-json-view/esm/types/Url.js
var Url = (props) => {
  var {
    Url: Comp = {}
  } = useTypesStore();
  useTypesRender(Comp, props, "Url");
  return null;
};
Url.displayName = "JVR.Url";

// node_modules/@uiw/react-json-view/esm/section/Copied.js
var Copied2 = (props) => {
  var {
    Copied: Comp = {}
  } = useSectionStore();
  useSectionRender(Comp, props, "Copied");
  return null;
};
Copied2.displayName = "JVR.Copied";

// node_modules/@uiw/react-json-view/esm/index.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded19 = ["className", "style", "value", "children", "collapsed", "shouldExpandNodeInitially", "indentWidth", "displayObjectSize", "shortenTextAfterLength", "stringEllipsis", "highlightUpdates", "enableClipboard", "displayDataTypes", "objectSortKeys", "onExpand", "onCopied"];
var JsonView = (0, import_react15.forwardRef)((props, ref) => {
  var {
    className = "",
    style,
    value,
    children,
    collapsed,
    shouldExpandNodeInitially,
    indentWidth = 15,
    displayObjectSize = true,
    shortenTextAfterLength = 30,
    stringEllipsis,
    highlightUpdates = true,
    enableClipboard = true,
    displayDataTypes = true,
    objectSortKeys = false,
    onExpand,
    onCopied
  } = props, elmProps = _objectWithoutPropertiesLoose(props, _excluded19);
  var defaultStyle = _extends({
    lineHeight: 1.4,
    fontFamily: "var(--w-rjv-font-family, Menlo, monospace)",
    color: "var(--w-rjv-color, #002b36)",
    backgroundColor: "var(--w-rjv-background-color, #00000000)",
    fontSize: 13
  }, style);
  var cls = ["w-json-view-container", "w-rjv", className].filter(Boolean).join(" ");
  return (0, import_jsx_runtime21.jsxs)(Provider, {
    initialState: {
      value,
      objectSortKeys,
      indentWidth,
      shouldExpandNodeInitially,
      displayObjectSize,
      collapsed,
      enableClipboard,
      shortenTextAfterLength,
      stringEllipsis,
      highlightUpdates,
      onCopied,
      onExpand
    },
    initialTypes: {
      displayDataTypes
    },
    children: [(0, import_jsx_runtime21.jsx)(Container, _extends({
      value
    }, elmProps, {
      ref,
      className: cls,
      style: defaultStyle
    })), children]
  });
});
JsonView.Bigint = Bigint;
JsonView.Date = Date2;
JsonView.False = False;
JsonView.Float = Float;
JsonView.Int = Int;
JsonView.Map = Map2;
JsonView.Nan = Nan;
JsonView.Null = Null;
JsonView.Set = Set2;
JsonView.String = StringText;
JsonView.True = True;
JsonView.Undefined = Undefined;
JsonView.Url = Url;
JsonView.ValueQuote = ValueQuote2;
JsonView.Arrow = Arrow2;
JsonView.Colon = Colon2;
JsonView.Quote = Quote2;
JsonView.Ellipsis = Ellipsis;
JsonView.BraceLeft = BraceLeft;
JsonView.BraceRight = BraceRight;
JsonView.BracketsLeft = BracketsLeft;
JsonView.BracketsRight = BracketsRight;
JsonView.Copied = Copied2;
JsonView.CountInfo = CountInfo;
JsonView.CountInfoExtra = CountInfoExtra;
JsonView.KeyName = KeyName;
JsonView.Row = Row;
JsonView.displayName = "JVR.JsonView";
var esm_default = JsonView;
export {
  Arrow,
  BracketsClose,
  BracketsOpen,
  Colon,
  Context6 as Context,
  Expands,
  Provider,
  Quote,
  ShowTools,
  Symbols,
  Types,
  ValueQuote,
  esm_default as default,
  initialState6 as initialState,
  reducer6 as reducer,
  useDispatch,
  useDispatchStore,
  useExpands,
  useExpandsDispatch,
  useExpandsStore,
  useShowTools,
  useShowToolsDispatch,
  useShowToolsStore,
  useStore,
  useSymbols,
  useSymbolsDispatch,
  useSymbolsStore,
  useTypes,
  useTypesDispatch,
  useTypesStore
};
//# sourceMappingURL=@uiw_react-json-view.js.map
