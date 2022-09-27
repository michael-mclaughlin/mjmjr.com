import React from 'react';
import styled from 'styled-components';
interface CardProps {
    id: string;
    title: string;
    children: React.ReactNode;
    footerChildren?: React.ReactNode;
    className: string;
}
export const Card: React.FC<CardProps> = (
    props: CardProps
): React.ReactElement | null => {
    const { id, title, children, footerChildren, className } = props;
    return (
        <ArticleContainer id={id} className={className}>
            <Header>
                <Heading>{title}</Heading>
            </Header>
            <Main>
                <Section>
                    <div>{children}</div>
                </Section>
            </Main>
            <Footer>
                <div>{footerChildren}</div>
            </Footer>
        </ArticleContainer>
    );
};

const ArticleContainer = styled.article`
    display: flex;
    flex-flow: column;
    border: 1px solid #cccccc;
    padding: 1rem;
    width: fit-content;
`;

const Heading = styled.h3`
    margin: 0;
`;

const Header = styled.header`
    border-bottom: 1px solid #cccccc;
    padding: 0.25rem 0;
`;

const Main = styled.main``;

const Section = styled.section`
    margin: 0.25rem 0;
`;
const Footer = styled.footer`
    padding: 0.25rem 0;
`;
