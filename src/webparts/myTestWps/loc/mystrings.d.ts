declare interface IMyTestWpsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  TitleFieldLabel: string;
  DescriptionFieldLabel: string;
}

declare module 'MyTestWpsWebPartStrings' {
  const strings: IMyTestWpsWebPartStrings;
  export = strings;
}
