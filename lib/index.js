'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var defaultPallet = {
    // Text
    text: '#20343B',
    accentText: 'Black',
    // Pallet
    primary: '#DC5ECB',
    offPrimary: '#FFD5F9',
    error: '#FF1B51',
    offError: '#FFB9CA',
    // Background
    offwhite: '#fbfaff',
    grey: '#E0E0E0',
    background: '#fff',
};
var getCurrentPallet = function () {
    return defaultPallet;
};
var setCurrentPallet = function (pallet) {
    defaultPallet = pallet;
};
var randomColor = function () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

var ColorPallet = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get defaultPallet () { return defaultPallet; },
    getCurrentPallet: getCurrentPallet,
    setCurrentPallet: setCurrentPallet,
    randomColor: randomColor
});

function MouseTracker(props) {
    var _a = react.useState(false); _a[0]; var setHover = _a[1];
    var _b = react.useState(false); _b[0]; var setClick = _b[1];
    var changeHover = function (hover) {
        setHover(hover);
        if (props.changeHover)
            props.changeHover(hover);
    };
    var changeClick = function (click) {
        setClick(click);
        if (props.changeClick)
            props.changeClick(click);
        if (!click)
            setHover(false);
    };
    var style = {
        width: 'fit-content',
        height: 'fit-content',
        display: 'inherit'
    };
    return jsxRuntime.jsx("div", __assign({ onMouseEnter: function () { return changeHover(true); }, onMouseLeave: function () { return changeHover(false); }, onMouseDown: function () { return changeClick(true); }, onMouseUp: function () { return changeClick(false); }, onClick: props.onClick, style: __assign(__assign({}, style), props.style) }, { children: props.children }));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$a = ".button-plain {\n  margin: 0px 10px;\n  padding: 9px 14px 6px 14px;\n  display: inline-block;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  user-select: none;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 15px;\n\n  letter-spacing: 1px;\n  text-transform: uppercase;\n\n}";
styleInject(css_248z$a);

var PlainButton = function (_) {
    var primary = _.primary, pallet = _.pallet, danger = _.danger, text = _.text, onClick = _.onClick, props = _.props, disabled = _.disabled;
    if (!pallet)
        pallet = defaultPallet;
    var _a = react.useState(false), hover = _a[0], setHover = _a[1];
    var _b = react.useState(false), click = _b[0], setClick = _b[1];
    var style = __assign({}, props);
    if (primary) {
        style.color = click ? pallet.offwhite : pallet.accentText;
        style.background = click ? pallet.primary : 'none';
        style.background = hover && !click ? pallet.offPrimary : style.background;
        style.border = "1px solid ".concat(pallet.primary);
    }
    else if (danger) {
        style.color = click ? pallet.offwhite : pallet.accentText;
        style.background = click ? pallet.error : 'none';
        style.background = hover && !click ? pallet.offError : style.background;
        style.border = "1px solid ".concat(pallet.error);
    }
    else if (disabled) {
        style.color = pallet.accentText;
        style.background = pallet.grey;
        style.opacity = 0.5;
        style.border = "1px solid ".concat(pallet.offwhite);
        style.cursorEffects = 'none';
        style.cursor = 'not-allowed';
    }
    else {
        style.color = pallet.accentText;
        style.background = click ? pallet.grey : 'none';
        style.background = hover && !click ? pallet.offwhite : style.background;
        style.border = "1px solid ".concat(pallet.grey);
    }
    return jsxRuntime.jsx("div", __assign({ className: "button-plain", style: style }, { children: jsxRuntime.jsx(MouseTracker, __assign({ changeHover: setHover, changeClick: setClick, onClick: disabled ? undefined : onClick }, { children: text })) }));
};

function GetChildren(props) {
    if (!props.children)
        return [];
    if (Array.isArray(props.children))
        return props.children;
    return [props.children];
}
function ExtractNodesOfType(name, nodes) {
    var yes = [];
    var no = [];
    nodes.forEach(function (node) {
        if (node.type.name === name)
            yes.push(node);
        else
            no.push(node);
    });
    return [yes, no];
}

var css_248z$9 = ".turboComp-footer {\n  display: relative;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  width: 100%;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-top: 50px;\n}\n";
styleInject(css_248z$9);

var Footer = function (props) {
    var children = GetChildren(props);
    var pallet = getCurrentPallet();
    var style = __assign({ background: pallet.grey }, props.style);
    return jsxRuntime.jsx("div", __assign({ style: style, className: 'turboComp-footer' }, { children: children }));
};

var css_248z$8 = ".turboComp-footer-button {\n  display: inline-block;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.turboComp-footer-button:hover {\n  text-decoration: underline;\n}";
styleInject(css_248z$8);

var FooterButton = function (props) {
    return jsxRuntime.jsx("div", __assign({ className: "turboComp-footer-button turboComp-smalltext", style: props.style, onClick: props.onClick }, { children: props.text }));
};

var css_248z$7 = ".turboComp-footer-sectiontext {\n  margin-bottom: 10px !important;\n  opacity: 0.5;\n}\n\n.turboComp-footer-sectioncontent {\n  display: flex;\n  align-items: left;\n  justify-content: center;\n  flex-direction: column;\n  width: 200px;\n  height: 100%;\n}";
styleInject(css_248z$7);

var FooterSection = function (props) {
    return jsxRuntime.jsxs("div", __assign({ style: props.style }, { children: [jsxRuntime.jsxs("div", __assign({ className: 'turboComp-smalltext turboComp-footer-sectiontext' }, { children: [" ", props.text, " "] })), jsxRuntime.jsxs("div", __assign({ className: 'turboComp-footer-sectioncontent' }, { children: [" ", props.children, " "] }))] }));
};

var css_248z$6 = ".turboComp-header {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  text-transform: uppercase;\n  margin-bottom: 50px;\n}\n\n\n.turboComp-header-navs {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  width: 100%;\n  height: 100%;\n}\n\n.turboComp-header-title {\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.turboComp-header-other {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: left;\n  justify-content: left;\n  width: 100%;\n  height: 100%;\n  line-height: 40px;\n  pointer-events: none;\n}";
styleInject(css_248z$6);

var Header = function (props) {
    var children = GetChildren(props);
    var _a = ExtractNodesOfType('HeaderNav', children), Navs = _a[0], Other = _a[1];
    var style = __assign({}, props.style);
    return jsxRuntime.jsxs("div", __assign({ style: style, className: 'turboComp-header' }, { children: [jsxRuntime.jsx("div", __assign({ className: 'turboComp-header-navs' }, { children: Navs })), jsxRuntime.jsx("div", __assign({ className: 'turboComp-header-title' }, { children: props.title })), jsxRuntime.jsx("div", __assign({ className: 'turboComp-header-other' }, { children: Other }))] }));
};

var css_248z$5 = ".turboComp-header-nav {\n  position: relative;\n  margin: 0px 10px;\n  padding: 4px 10px;\n  display: inline-block;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  user-select: none;\n  width: fit-content;\n  font-family: 'Roboto', sans-serif;\n  text-transform: uppercase;\n  font-weight: 300;\n  letter-spacing: 1px;\n}\n\n.turboComp-header-nav-indicator {\n  position: absolute;\n  left: 5px;\n  right: 5px;\n  bottom: 0px;\n  height: 2px;\n  z-index: 2;\n  border-radius: 2px;\n  transition: all 0.1s ease-in-out;\n}";
styleInject(css_248z$5);

var HeaderNav = function (props) {
    var pallet = getCurrentPallet();
    var _a = react.useState(false), hover = _a[0], setHover = _a[1];
    var _b = react.useState(false); _b[0]; var setClick = _b[1];
    var style = __assign({}, props);
    var indicatorStyle = {};
    if (props.active) {
        style.color = pallet.accentText;
        indicatorStyle.background = pallet.primary;
    }
    else {
        style.color = pallet.text;
        indicatorStyle.background = hover ? pallet.grey : undefined;
    }
    return jsxRuntime.jsxs("div", __assign({ className: "turboComp-header-nav", style: style }, { children: [jsxRuntime.jsx("div", { className: "turboComp-header-nav-indicator", style: indicatorStyle }), jsxRuntime.jsx(MouseTracker, __assign({ changeHover: setHover, changeClick: setClick, onClick: props.onClick }, { children: props.text }))] }));
};

var css_248z$4 = ".turboComp-root {\n  font-family: 'Roboto', sans-serif;\n}\n\n.turboComp-smalltext {\n  position: relative;\n  margin: 0px 10px;\n  padding: 4px 10px;\n  transition: all 0.1s ease-in-out;\n  user-select: none;\n  width: fit-content;\n  font-size: 10pt;\n  text-transform: uppercase;\n  font-weight: 300;\n}";
styleInject(css_248z$4);

var StyleProvider = function (props) {
    var children = GetChildren(props);
    if (props.pallet)
        setCurrentPallet(props.pallet);
    return jsxRuntime.jsx("div", __assign({ style: props.style, className: "turboComp-root" }, { children: children }));
};

var css_248z$3 = ".turboComp-debug {\n  position: relative;\n  text-align: center;\n}";
styleInject(css_248z$3);

var Debug = function (props) {
    var style = __assign(__assign({}, props.style), { width: props.width || '100%', height: props.height || '100%', background: randomColor() });
    return jsxRuntime.jsx("div", { className: 'turboComp-debug', style: style });
};

var css_248z$2 = ".turboComp-position {\n  position: relative;\n}";
styleInject(css_248z$2);

var Position = function (props) {
    var style = __assign({}, props.style);
    if (props.mode === 'center') {
        style.display = 'flex';
        style.justifyContent = 'center';
        style.alignItems = 'center';
    }
    return jsxRuntime.jsx("div", __assign({ className: 'turboComp-position', style: style }, { children: props.children }));
};

var css_248z$1 = ".turboComp-card {\n  position: relative;\n  width:fit-content;\n  height:fit-content;\n  margin: 10px;\n  padding: 20px;\n  border-radius: 5px;\n  line-height: 25px;\n}\n\n.turboComp-card-divider {\n  position: absolute;\n  width: calc(100% + 40px);\n  height: 1px;\n  top: 17px;\n  left: -20px;\n}\n\n.turboComp-card-buttons {\n  position: relative;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: right;\n}\n\n.turboComp-card-buttonpos {\n  position: absolute;\n  right: -10px;\n  bottom: -5px;\n}\n\n.turboComp-card-label {\n  position: absolute;\n  top : -11px;\n  height: 14px;\n  left: 20px;\n  line-height: 14px;\n  padding: 4px 10px;\n  border-radius: 10px;\n  font-size: 12px;\n  text-transform: capitalize;\n}";
styleInject(css_248z$1);

var Card = function (props) {
    var children = GetChildren(props);
    var pallet = getCurrentPallet();
    var _a = ExtractNodesOfType('PlainButton', children), Buttons = _a[0], Other = _a[1];
    var style = __assign({ border: "1px solid ".concat(pallet.grey) }, props.style);
    var styleTitle = {
        color: pallet.text,
        border: "1px solid ".concat(pallet.grey),
        background: pallet.background,
    };
    var divstyle = {
        background: pallet.grey,
    };
    var buttonsBase = Buttons.length > 0 ?
        jsxRuntime.jsxs("div", __assign({ className: 'turboComp-card-buttons' }, { children: [jsxRuntime.jsx("div", { className: 'turboComp-card-divider', style: divstyle }), jsxRuntime.jsx("div", __assign({ className: 'turboComp-card-buttonpos' }, { children: Buttons }))] }))
        : null;
    var labelTop = props.title ?
        jsxRuntime.jsx("div", __assign({ className: 'turboComp-card-label', style: styleTitle }, { children: props.title }))
        : null;
    return jsxRuntime.jsxs("div", __assign({ className: 'turboComp-card', style: style }, { children: [Other, buttonsBase, labelTop] }));
};

var css_248z = ".turboComp-collect {\n  position: relative;\n}";
styleInject(css_248z);

var Collect = function (props) {
    var style = __assign({}, props.style);
    if (props.mode === 'row') {
        style.display = 'flex';
        style.justifyContent = props.center ? 'center' : 'left';
        style.alignItems = 'left';
    }
    if (props.mode === 'column') {
        style.display = 'flex';
        style.flexDirection = 'column';
        style.alignItems = props.center ? 'center' : 'left';
    }
    return jsxRuntime.jsx("div", __assign({ className: 'turboComp-position', style: style }, { children: props.children }));
};

exports.Card = Card;
exports.Collect = Collect;
exports.Color = ColorPallet;
exports.Debug = Debug;
exports.Footer = Footer;
exports.FooterButton = FooterButton;
exports.FooterSection = FooterSection;
exports.Header = Header;
exports.HeaderNav = HeaderNav;
exports.PlainButton = PlainButton;
exports.Position = Position;
exports.StyleProvider = StyleProvider;
//# sourceMappingURL=index.js.map
