var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './Accordion.module.scss';
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleAccordion = function () {
            _this.setState(function (prevState) { return ({
                expanded: !prevState.expanded,
            }); });
        };
        _this.state = {
            expanded: false,
        };
        return _this;
    }
    Accordion.prototype.render = function () {
        var _a = this.props, title = _a.title, children = _a.children, accordionTitleColor = _a.accordionTitleColor, aBorderColor = _a.aBorderColor, atBgColor = _a.atBgColor, titleFontSize = _a.titleFontSize, titleFontWeight = _a.titleFontWeight, titleFontFamily = _a.titleFontFamily, aBorderRad = _a.aBorderRad;
        var expanded = this.state.expanded;
        return (React.createElement("div", { className: styles.accordion, style: { borderColor: aBorderColor, borderRadius: aBorderRad } },
            React.createElement("div", { className: styles.accordionHeader, onClick: this.toggleAccordion, style: { borderRadius: aBorderRad } },
                React.createElement("div", { className: styles.accordionTitle, style: { color: accordionTitleColor, backgroundColor: atBgColor, fontSize: titleFontSize, fontWeight: titleFontWeight, fontFamily: titleFontFamily } }, title),
                React.createElement("div", { className: "".concat(styles.accordionIcon, " ").concat(expanded ? styles.expanded : '') }, "\u25BC")),
            expanded && React.createElement("div", { className: styles.accordionContent }, children)));
    };
    return Accordion;
}(React.Component));
export default Accordion;
//# sourceMappingURL=Accordion.js.map