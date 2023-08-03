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
import * as React from "react";
// import { escape } from '@microsoft/sp-lodash-subset';
// import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";
import PnPTelemetry from "@pnp/telemetry-js";
import Accordion from "./accordion/Accordion";
var MyTestWps = /** @class */ (function (_super) {
    __extends(MyTestWps, _super);
    function MyTestWps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestWps.prototype.render = function () {
        var _a = this.props, title = _a.title, description = _a.description, accordionTitleColor = _a.accordionTitleColor, atBgColor = _a.atBgColor, titleFontSize = _a.titleFontSize, titleFontFamily = _a.titleFontFamily, titleFontWeight = _a.titleFontWeight, accordionContentColor = _a.accordionContentColor, ContentFontFamily = _a.ContentFontFamily, aBorderColor = _a.aBorderColor, aBorderRad = _a.aBorderRad;
        var telemetry = PnPTelemetry.getInstance();
        telemetry.optOut();
        return (React.createElement(React.Fragment, null,
            React.createElement(Accordion, { title: title, accordionTitleColor: accordionTitleColor, aBorderRad: aBorderRad, aBorderColor: aBorderColor, atBgColor: atBgColor, titleFontWeight: titleFontWeight, titleFontSize: titleFontSize, titleFontFamily: titleFontFamily, accordionContentColor: accordionContentColor, ContentFontFamily: ContentFontFamily, contentFontSize: "", aContentBgColor: "", contentFontWeight: "" },
                React.createElement("div", { style: { color: this.props.accordionContentColor, backgroundColor: this.props.aContentBgColor,
                        fontFamily: this.props.ContentFontFamily, fontSize: this.props.contentFontSize, fontWeight: this.props.contentFontWeight } }, description))));
    };
    return MyTestWps;
}(React.Component));
export default MyTestWps;
//# sourceMappingURL=MyTestWps.js.map