import React from 'react';
import styled from 'styled-components';

interface SectionContainerFlexProps {
    children: React.ReactNode;
    className: string;
    styleProps?: FlexProps;
}
type FlexFlow =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'row wrap'
    | 'row nowrap';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';
type JustifyContent =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

type JustifySelf = 'stretch' | 'center' | 'start' | 'end';
type Position =
    | 'static'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'sticky'
    | 'initial'
    | 'inherit';

interface FlexProps {
    flexFlow?: FlexFlow;
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
    justifySelf?: JustifySelf;
    position?: Position;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    boxShadow?: string;
    border?: string;
    background?: string;
}
export const SectionContainerFlex: React.FC<SectionContainerFlexProps> = (
    props: SectionContainerFlexProps
) => {
    const { children, className, styleProps } = props;
    return (
        <Section style={styleProps} className={className}>
            {children}
        </Section>
    );
};

const Section = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
`;
