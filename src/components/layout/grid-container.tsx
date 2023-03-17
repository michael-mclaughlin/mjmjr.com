import React from 'react';
import styled from 'styled-components';
interface GridProps {
    className: string;
    children: React.ReactNode;
    styleProps?: StyleProps;
    gridTemplateColumns?: string;
}

interface StyleProps {
    gridTemplateColumns?: GridProps["gridTemplateColumns"];
    gridTemplateRows?: string;
    gridTemplateAreas?: string;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    position?: Position;
    color?: string;
    borderRadius?: string;
    boxShadow?: string;
    gap?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}

type Position =
    | 'static'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'sticky'
    | 'initial'
    | 'inherit';
export const Grid: React.FC<GridProps> = (props: GridProps) => {
    const { className, children, styleProps } = props;
    return (
        <GridContainer style={styleProps} className={className}>
            {children}
        </GridContainer>
    );
};

const GridContainer = styled.div`
    margin: 0;
    padding: 1rem 2.5rem;
    display: grid;
    gap: 1rem;
`;
