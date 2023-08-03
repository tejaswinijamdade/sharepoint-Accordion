import * as React from 'react';
import styles from './Accordion.module.scss';

export interface IAccordionProps {
  title: string;
  children: React.ReactNode;
  accordionTitleColor:string;
  accordionContentColor:string;
  ContentFontFamily:string;
  contentFontSize:string;
  aContentBgColor:string;
  contentFontWeight:string;
  atBgColor:string;
  titleFontSize:number;
  titleFontWeight:string;
  titleFontFamily:string;
  aBorderColor:string;
  aBorderRad:number;
}

export interface IAccordionState {
  expanded: boolean;
}

export default class Accordion extends React.Component<IAccordionProps, IAccordionState> {
  constructor(props: IAccordionProps) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  private toggleAccordion = (): void => { 
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  public render(): React.ReactElement<IAccordionProps> {
    const { title, children, accordionTitleColor, aBorderColor, atBgColor, titleFontSize, titleFontWeight, titleFontFamily, aBorderRad } = this.props;
    const { expanded } = this.state;

    return (
      <div className={styles.accordion} style={{borderColor:aBorderColor, borderRadius:aBorderRad}}>
        <div className={styles.accordionHeader} onClick={this.toggleAccordion} style={{borderRadius:aBorderRad}}>
          <div className={styles.accordionTitle} style={{color:accordionTitleColor, backgroundColor: atBgColor, fontSize: titleFontSize, fontWeight: titleFontWeight, fontFamily:titleFontFamily}}>{title}</div>
          <div className={`${styles.accordionIcon} ${expanded ? styles.expanded : ''}`}>&#9660;</div>
        </div>
        {expanded && <div className={styles.accordionContent}>{children}</div>}
      </div>
    );
  } 
} 
