import * as React from "react";
// import styles from './MyTestWps.module.scss';
import { IMyTestWpsProps } from "./IMyTestWpsProps";
// import { escape } from '@microsoft/sp-lodash-subset';
// import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";

import PnPTelemetry from "@pnp/telemetry-js";
import Accordion from "./accordion/Accordion";

export default class MyTestWps extends React.Component<IMyTestWpsProps, {}> {
  public render(): React.ReactElement<IMyTestWpsProps> {
    const {
      title,
      description,
      accordionTitleColor, atBgColor, titleFontSize, titleFontFamily, titleFontWeight,
      accordionContentColor,ContentFontFamily, aBorderColor, aBorderRad
    } = this.props;
    const telemetry = PnPTelemetry.getInstance();
    telemetry.optOut();

    return (
      <>
        <Accordion title={title} accordionTitleColor={accordionTitleColor} aBorderRad={aBorderRad} aBorderColor={aBorderColor} atBgColor={atBgColor} titleFontWeight={titleFontWeight} titleFontSize={titleFontSize} titleFontFamily={titleFontFamily} accordionContentColor={accordionContentColor} ContentFontFamily={ContentFontFamily} 
                  contentFontSize={""} aContentBgColor={""} contentFontWeight={""}>
              <div style={{color:this.props.accordionContentColor,backgroundColor:this.props.aContentBgColor,
                            fontFamily:this.props.ContentFontFamily,fontSize:this.props.contentFontSize, fontWeight:this.props.contentFontWeight}}>
                {description}
              </div>
        </Accordion>
      </> 
    );
  }
}
 