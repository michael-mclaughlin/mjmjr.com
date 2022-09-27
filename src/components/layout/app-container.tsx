import React from 'react';
import styled from 'styled-components';

interface AppContainerProps {
    children: React.ReactNode;
    className: string;
}

export const AppContainer: React.FC<AppContainerProps> = (
    props: AppContainerProps
) => {
    const { children } = props;
    return <Body>{children}</Body>;
};

const Body = styled.body`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column;
`;
