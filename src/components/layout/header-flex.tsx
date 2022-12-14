import React from 'react';
import styled from 'styled-components';

interface HeaderFlexProps {
    children?: React.ReactNode;
    className: string;
    styleProps?: FlexProps;
}
type FlexFlow =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'wrap'
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
    backgroundColor?: string;
    border?: string;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    position?: Position;
    color?: string;
    borderRadius?: string;
    boxShadow?: string;
}

export const HeaderFlex: React.FC<HeaderFlexProps> = (
    props: HeaderFlexProps
) => {
    const { children, className, styleProps } = props;
    return (
        <HeaderContainer style={styleProps} className={className}>
            {children}
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    margin: 0;
    padding: 0;
    display: flex;
`;
