import * as React from 'react';
export interface IAccordionProps {
    title: string;
    children: React.ReactNode;
    accordionTitleColor: string;
    accordionContentColor: string;
    ContentFontFamily: string;
    contentFontSize: string;
    aContentBgColor: string;
    contentFontWeight: string;
    atBgColor: string;
    titleFontSize: number;
    titleFontWeight: string;
    titleFontFamily: string;
    aBorderColor: string;
    aBorderRad: number;
}
export interface IAccordionState {
    expanded: boolean;
}
export default class Accordion extends React.Component<IAccordionProps, IAccordionState> {
    constructor(props: IAccordionProps);
    private toggleAccordion;
    render(): React.ReactElement<IAccordionProps>;
}
//# sourceMappingURL=Accordion.d.ts.map