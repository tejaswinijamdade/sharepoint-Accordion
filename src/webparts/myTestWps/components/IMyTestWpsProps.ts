import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IMyTestWpsProps {
  title: string;
  content: string;
  context: WebPartContext;
  description:string;
  accordionTitleColor:string;
  accordionContentColor:string;
  ContentFontFamily:string;
  contentFontSize:number;
  aContentBgColor:string;
  contentFontWeight:string;
  atBgColor:string;
  titleFontSize:number;
  titleFontWeight:string;
  titleFontFamily:string;
  aBorderColor:string;
  aBorderRad:number;
}
