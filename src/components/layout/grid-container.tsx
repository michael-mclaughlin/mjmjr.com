import React from 'react';
import styled from 'styled-components';
interface GridProps {
    className: string;
    children: React.ReactNode;
    styleProps?: StyleProps;
}

interface StyleProps {
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridTemplateAreas?: string;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
}
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
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    background-color: #00468b;
`;
