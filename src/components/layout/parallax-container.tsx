import React from 'react';
import styled from 'styled-components';

interface ParallaxFlexProps {
    children?: React.ReactNode;
    className: string;
    styleProps?: StyleProps;
    id?: string;
    img?: string;
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

interface StyleProps {
    flexFlow?: FlexFlow | string;
    alignItems?: AlignItems | string;
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
    fontSize?: string;
    minHeight?: string;
    letterSpacing?: string;
    cursor?: string;
    textDecoration?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    border?: string;
    background?: string;
    backgroundSize?: string;
    backgroundAttachment?: string;
    transform?: string;
    backgroundRepeat?: string;
}
export const ParallaxContainer: React.FC<ParallaxFlexProps> = (
    props: ParallaxFlexProps
) => {
    const { children, className, styleProps } = props;
    return (
        <Container style={styleProps} className={className}>
            {children}
        </Container>
    );
};

const Container = styled.div``;
