import React from 'react';
import styled from 'styled-components';

interface DivContainerFlexProps {
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
    position?: Position;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    boxShadow?: string;
}

type Position =
    | 'static'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'sticky'
    | 'initial'
    | 'inherit';

export const DivContainerFlex: React.FC<DivContainerFlexProps> = (
    props: DivContainerFlexProps
) => {
    const { children, className, styleProps } = props;
    return (
        <Container style={styleProps} className={className}>
            {children}
        </Container>
    );
};

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
`;
