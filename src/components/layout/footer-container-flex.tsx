import React from 'react';
import styled from 'styled-components';

interface FooterContainerFlexProps {
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
    color?: string;
    borderRadius?: string;
    boxShadow?: string;
    height?: string;
    backgroundColor?: string;
}
type Position =
    | 'static'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'sticky'
    | 'initial'
    | 'inherit';

export const FooterContainerFlex: React.FC<FooterContainerFlexProps> = (
    props: FooterContainerFlexProps
) => {
    const { children, className, styleProps } = props;
    return (
        <Footer style={styleProps} className={className}>
            {children}
        </Footer>
    );
};

const Footer = styled.footer`
    margin: 0;
    padding: 0;
    display: flex;
`;
