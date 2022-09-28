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
    | 'no-wrap';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';
type JustifyContent =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

type JustifySelf = 'stretch' | 'center' | 'start' | 'end';
interface FlexProps {
    flexFlow?: FlexFlow;
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
    justifySelf?: JustifySelf;
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