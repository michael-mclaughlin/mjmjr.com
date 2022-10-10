import React from 'react';
import styled from 'styled-components';
import { DivContainerFlex } from './../layout/div-container-flex';
import { TextField } from '@mui/material';
interface FormProps {
    id: string;
    title: string;
    children?: React.ReactNode;
    footerChildren?: React.ReactNode;
    className: string;
    headingSize?: string;
    action?: string;
    method?: string;
    styleProps?: StyleProps;
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
}
export const Form: React.FC<FormProps> = (
    props: FormProps
): React.ReactElement | null => {
    const {
        id,
        title,
        children,
        footerChildren,
        className,
        headingSize,
        action,
        method,
        styleProps,
    } = props;
    return (
        <DivContainerFlex id={id} className={className} styleProps={styleProps}>
            <Header>
                <Heading style={{ fontSize: `${headingSize}` }}>
                    {title}
                </Heading>
            </Header>
            <DivContainerFlex className="">
                <FormContainer action={action} method={method}>
                    <DivContainerFlex
                        className="form-title-container"
                        styleProps={{ flexFlow: 'column', padding: '1rem' }}
                    >
                        <TextField
                            variant="outlined"
                            id="title"
                            label="Add a Title"
                            type="text"
                            required
                        />
                        <TextField
                            variant="outlined"
                            id="year"
                            label="Add a Year"
                            type="text"
                            required
                        />
                        <TextField
                            variant="outlined"
                            id="imdbID"
                            label="Add an ID"
                            type="text"
                            required
                        />
                        <TextField
                            variant="outlined"
                            id="poster-url"
                            label="Add an Poster url"
                            type="text"
                            required
                        />
                    </DivContainerFlex>
                </FormContainer>
            </DivContainerFlex>
            <Footer>
                <FooterChildContainer className="footer-children-div">
                    {footerChildren}
                </FooterChildContainer>
            </Footer>
        </DivContainerFlex>
    );
};
const Heading = styled.h3`
    margin: 0;
    padding: 0;
`;

const Header = styled.header`
    padding: 0 0 0.5rem 0;
`;

const Footer = styled.footer`
    padding: 0.25rem 0;
    height: 100%;
`;
const FooterChildContainer = styled.div`
    display: flex;
    height: inherit;
`;

const FormContainer = styled.form``;
