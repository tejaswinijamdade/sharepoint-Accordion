import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IMyTestWpsProps } from "./components/IMyTestWpsProps";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
export default class MyWebPartWebPart extends BaseClientSideWebPart<IMyTestWpsProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=MyTestWpsWebPart.d.ts.map