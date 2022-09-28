import React from 'react';
import styled from 'styled-components';
interface CardProps {
    id: string;
    title: string;
    children: React.ReactNode;
    footerChildren?: React.ReactNode;
    className: string;
    headingSize?: string;
    styleProps?: StyleProps;
}

interface StyleProps {
    width?: string;
    height?: string;
    boxShadow?: string;
}
export const Card: React.FC<CardProps> = (
    props: CardProps
): React.ReactElement | null => {
    const {
        id,
        title,
        children,
        footerChildren,
        className,
        headingSize,
        styleProps,
    } = props;
    return (
        <ArticleContainer style={styleProps} id={id} className={className}>
            <Header>
                <Heading style={{ fontSize: `${headingSize}` }}>
                    {title}
                </Heading>
            </Header>
            <Main>
                <Section>
                    <ChildrenContainer>{children}</ChildrenContainer>
                </Section>
            </Main>
            <Footer>
                <FooterChildContainer className="footer-children-div">
                    {footerChildren}
                </FooterChildContainer>
            </Footer>
        </ArticleContainer>
    );
};

const ArticleContainer = styled.article`
    display: flex;
    flex-flow: column;
    border: 1px solid #f4e9e9;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.35);
    background-color: #ffffff;
`;

const Heading = styled.h3`
    margin: 0;
    padding: 0;
`;

const Header = styled.header`
    /* border-bottom: 1px solid #cccccc; */
    padding: 0 0 0.5rem 0;
`;

const Main = styled.main`
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
`;

const Section = styled.section`
    margin: 1rem 0;
`;
const Footer = styled.footer`
    padding: 0.25rem 0;
    height: 100%;
`;
const FooterChildContainer = styled.div`
    display: flex;
    height: inherit;
`;

const ChildrenContainer = styled.div``;
