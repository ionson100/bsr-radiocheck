import React, { Component } from 'react';

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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var RadioCheck = /** @class */ (function (_super) {
    __extends(RadioCheck, _super);
    function RadioCheck(props) {
        var _this = _super.call(this, props) || this;
        _this.mRefCheckBox = React.createRef();
        _this.innerChange = _this.innerChange.bind(_this);
        return _this;
    }
    Object.defineProperty(RadioCheck.prototype, "Checked", {
        get: function () {
            return this.mRefCheckBox.current.checked;
        },
        set: function (value) {
            this.mRefCheckBox.current.checked = value;
        },
        enumerable: false,
        configurable: true
    });
    RadioCheck.prototype.componentDidMount = function () {
        if (this.props.checked) {
            this.mRefCheckBox.current.checked = true;
        }
    };
    RadioCheck.prototype.renderLabelLeft = function () {
        var _a;
        var pos = (_a = this.props.position) !== null && _a !== void 0 ? _a : "right";
        if (pos === 'left') {
            return React.createElement("div", { className: 'cb-bsr-label', style: this.props.styleLabel }, this.props.labelContent);
        }
        else {
            return null;
        }
    };
    RadioCheck.prototype.renderLabelRight = function () {
        var _a;
        var pos = (_a = this.props.position) !== null && _a !== void 0 ? _a : "right";
        if (pos === 'right') {
            return React.createElement("div", { className: 'cb-bsr-label', style: this.props.styleLabel }, this.props.labelContent);
        }
        else {
            return null;
        }
    };
    RadioCheck.prototype.GetInput = function () {
        return this.mRefCheckBox.current;
    };
    RadioCheck.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'cb-bsr-wrapper', style: this.props.styleWrapper, onMouseUp: function (e) {
                e.preventDefault();
                e.stopPropagation();
                var name = e.target.nodeName;
                if (name === 'INPUT') {
                    return;
                }
                else {
                    var bool = !_this.mRefCheckBox.current.checked;
                    _this.mRefCheckBox.current.checked = bool;
                    if (_this.props.onChange) {
                        _this.props.onChange(_this.mRefCheckBox.current, bool);
                    }
                }
            } },
            this.renderLabelLeft(),
            React.createElement("input", { id: this.props.id, onChange: this.innerChange, ref: this.mRefCheckBox, className: this.props.className, "data-bsr-check": this.props.dataUser, name: this.props.name, style: this.props.style, type: !this.props.type ? "checkbox" : this.props.type }),
            this.renderLabelRight()));
    };
    RadioCheck.prototype.innerChange = function (event) {
        if (this.props.onChange) {
            this.props.onChange(this.mRefCheckBox.current, event.target.checked);
        }
    };
    return RadioCheck;
}(Component));

export { RadioCheck };
