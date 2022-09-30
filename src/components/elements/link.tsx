import React from 'react';
import styled from 'styled-components';

interface LinkProps {
    children?: React.ReactNode;
    className: string;
    styleProps?: StyleProps;
    href: string;
    download?: boolean | string;
    ping?: string;
    rel?: Referrer | string;
    target?: Target;
    role?: Role;
    type?: string;
    id?: string;
}

type Role =
    | 'button'
    | 'checkbox'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'option'
    | 'radio'
    | 'switch'
    | 'tab'
    | 'treeitem';
type Target = '_self' | '_blank' | '_parent' | '_top';
type Referrer =
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin '
    | 'prigin-with-cors-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
    | 'noopener noreferrer';

type TextDecoration =
    | 'none'
    | 'underline'
    | 'overline'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';

type Display =
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'flow-root'
    | 'none'
    | 'contents'
    | 'unset';
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
type Position =
    | 'static'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'sticky'
    | 'initial'
    | 'inherit';

interface StyleProps {
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    textDecoration?: TextDecoration | string;
    display?: Display | string;
    flexFlow?: FlexFlow;
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
    justifySelf?: JustifySelf;
    position?: Position;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    boxShadow?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
}
export const Link: React.FC<LinkProps> = (props: LinkProps) => {
    const {
        children,
        styleProps,
        href,
        download,
        ping,
        rel,
        target,
        role,
        type,
    } = props;
    return (
        <LinkContainer
            style={styleProps}
            href={href}
            download={download}
            ping={ping}
            rel={rel}
            type={type}
            target={target}
            role={role}
        >
            {children}
        </LinkContainer>
    );
};

const LinkContainer = styled.a`
    display: flex;
    flex-flow: row nowrap;
    transition: font-size 0.5s, color 0.5s, border-bottom 0.5s;
    text-decoration: none;
    border-bottom: 0.25rem solid transparent;
    color: #ffffff;
    &:hover {
        font-size: 2rem;
        border-bottom: 0.25rem solid #ff0060;
    }
`;
