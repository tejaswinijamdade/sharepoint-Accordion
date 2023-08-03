import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

// import * as strings from "MyTestWpsWebPartStrings";
import MyTestWps from "./components/MyTestWps";
import { IMyTestWpsProps } from "./components/IMyTestWpsProps";
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneHorizontalRule,
  PropertyPaneLabel,
  PropertyPaneSlider,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";

import {
  PropertyFieldColorPicker,
  PropertyFieldColorPickerStyle,
} from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

export default class MyWebPartWebPart extends BaseClientSideWebPart<IMyTestWpsProps> {
  public render(): void {
    const element: React.ReactElement<IMyTestWpsProps> = React.createElement(
      MyTestWps,
      {
        // displayMode: this.displayMode,
        title: this.properties.title,
        context: this.properties.context,
        content: this.properties.content,
        description: this.properties.description,
        accordionTitleColor:this.properties.accordionTitleColor,
        accordionContentColor:this.properties.accordionContentColor,
        ContentFontFamily:this.properties.ContentFontFamily,
        contentFontSize:this.properties.contentFontSize,
        aContentBgColor:this.properties.aContentBgColor,
        contentFontWeight:this .properties.contentFontWeight,
        atBgColor:this.properties.atBgColor,
        titleFontSize:this.properties.titleFontSize,
        titleFontWeight:this.properties.titleFontWeight,
        titleFontFamily:this.properties.titleFontFamily,
        aBorderColor:this.properties.aBorderColor,
        aBorderRad:this.properties.aBorderRad
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  /*Configure the right pael props*/
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Custom Accordion",
          },
          groups: [
            {
              groupName: "Accordion",
              groupFields: [
                PropertyPaneTextField("title", {
                  label: "Accordion Title",
                }),
                PropertyPaneTextField("description", {
                  label: "Accordion Content",
                  multiline: true,
                }),
                PropertyPaneHorizontalRule(),
                PropertyFieldColorPicker('accordionTitleColor', {
                  label: 'Accordion Title Color',
                  selectedColor: this.properties.accordionTitleColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'accordionTitleColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyFieldColorPicker('atBgColor', {
                  label: 'Accordion Title Background Color',
                  selectedColor: this.properties.atBgColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'atBgColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyPaneSlider('titleFontSize', {
                  label: 'Choose Title Fontsize',
                  min: 12,
                  max: 100,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneDropdown('titleFontWeight', {
                  label: 'Title Font weight',
                  options: [
                    { key: 'normal', text: 'Normal' },
                    { key: 'bold', text: 'Bold' },
                    { key: '100', text: '100' },
                    { key: '200', text: '200' },
                    { key: '300', text: '300' },
                    { key: '400', text: '400' },
                    { key: '500', text: '500' },
                    { key: '600', text: '600' },
                    { key: '700', text: '700' },
                    { key: '800', text: '800' },
                    { key: '900', text: '900' }
                  ]
                }),
                PropertyPaneTextField('titleFontFamily', {
                  label: 'Accordion Title Font Family (Enter manually)'
                }),
                PropertyPaneDropdown('titleFontFamily', {
                  label: 'Accordion Title Font Family',
                  options: [{ key: 'Arial', text: 'Arial' },
                  { key: 'Arial Black', text: 'Arial Black' },
                  { key: 'Arial Narrow', text: 'Arial Narrow' },
                  { key: 'Book Antiqua', text: 'Book Antiqua' },
                  { key: 'Calibri', text: 'Calibri' },
                  { key: 'Cambria', text: 'Cambria' },
                  { key: 'Candara', text: 'Candara' },
                  { key: 'Comic Sans MS', text: 'Comic Sans MS' },
                  { key: 'Courier New', text: 'Courier New' },
                  { key: 'Georgia', text: 'Georgia' },
                  { key: 'Helvetica', text: 'Helvetica' },
                  { key: 'Lucida Console', text: 'Lucida Console' },
                  { key: 'Lucida Sans Unicode', text: 'Lucida Sans Unicode' },
                  { key: 'Monospace', text: 'Monospace' },
                  { key: 'MS Sans Serif', text: 'MS Sans Serif' },
                  { key: 'MS Serif', text: 'MS Serif' },
                  { key: 'Palatino Linotype', text: 'Palatino Linotype' },
                  { key: 'Segoe UI', text: 'Segoe UI' },
                  { key: 'Tahoma', text: 'Tahoma' },
                  { key: 'Times New Roman', text: 'Times New Roman' },
                  { key: 'Trebuchet MS', text: 'Trebuchet MS' },
                  { key: 'Verdana', text: 'Verdana' },]
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneSlider('contentFontSize', {
                  label: 'Choose Content Fontsize',
                  min: 10,
                  max: 100,
                  step: 1,
                  showValue: true
                }),
                PropertyFieldColorPicker('accordionContentColor', {
                  label: 'Accordion Content Color',
                  selectedColor: this.properties.accordionContentColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'accordionContentColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyFieldColorPicker('aContentBgColor', {
                  label: 'Accordion Content Background Color',
                  selectedColor: this.properties.aContentBgColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'aContentBgColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyPaneDropdown('contentFontWeight', {
                  label: 'Content Font weight',
                  options: [
                    { key: 'normal', text: 'Normal' },
                    { key: 'bold', text: 'Bold' },
                    { key: '100', text: '100' },
                    { key: '200', text: '200' },
                    { key: '300', text: '300' },
                    { key: '400', text: '400' },
                    { key: '500', text: '500' },
                    { key: '600', text: '600' },
                    { key: '700', text: '700' },
                    { key: '800', text: '800' },
                    { key: '900', text: '900' }
                  ]
                }),
                PropertyPaneTextField('ContentFontFamily', {
                  label: 'Accordion Content Font Family (Enter manually)'
                }),
                PropertyPaneDropdown('ContentFontFamily', {
                  label: 'Accordion Content Font Family',
                  options: [{ key: 'Arial', text: 'Arial' },
                  { key: 'Arial Black', text: 'Arial Black' },
                  { key: 'Arial Narrow', text: 'Arial Narrow' },
                  { key: 'Book Antiqua', text: 'Book Antiqua' },
                  { key: 'Calibri', text: 'Calibri' },
                  { key: 'Cambria', text: 'Cambria' },
                  { key: 'Candara', text: 'Candara' },
                  { key: 'Comic Sans MS', text: 'Comic Sans MS' },
                  { key: 'Courier New', text: 'Courier New' },
                  { key: 'Georgia', text: 'Georgia' },
                  { key: 'Helvetica', text: 'Helvetica' },
                  { key: 'Lucida Console', text: 'Lucida Console' },
                  { key: 'Lucida Sans Unicode', text: 'Lucida Sans Unicode' },
                  { key: 'Monospace', text: 'Monospace' },
                  { key: 'MS Sans Serif', text: 'MS Sans Serif' },
                  { key: 'MS Serif', text: 'MS Serif' },
                  { key: 'Palatino Linotype', text: 'Palatino Linotype' },
                  { key: 'Segoe UI', text: 'Segoe UI' },
                  { key: 'Tahoma', text: 'Tahoma' },
                  { key: 'Times New Roman', text: 'Times New Roman' },
                  { key: 'Trebuchet MS', text: 'Trebuchet MS' },
                  { key: 'Verdana', text: 'Verdana' },]
                }),
                PropertyPaneHorizontalRule(),
                PropertyFieldColorPicker('aBorderColor', {
                  label: 'Accordion Content Background Color',
                  selectedColor: this.properties.aBorderColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  key: 'aBorderColor',
                  style: PropertyFieldColorPickerStyle.Inline,
                  alphaSliderHidden: false,
                  iconName: 'Precipitation',
                  disabled: false,                  
                }),
                PropertyPaneSlider('aBorderRad', {
                  label: 'Accordion Border Radius',
                  min: 0,
                  max: 100,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneLabel(null, {
                  text: ' ** Note : If you want to remove any style, keep the property field blank. ** '
                })  
              ],
            },
          ],
        },
      ],  
    };
  }
}
