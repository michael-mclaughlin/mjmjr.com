import React, { useState, useRef, useEffect } from 'react';
import { DivContainerFlex } from '../layout/div-container-flex';
import styled from 'styled-components';

type Position = 'left' | 'right' | 'top' | 'bottom';
type HasHeader = true | false;

export const Popup: React.FC<{
    className?: string;
    id?: string;
    children?: React.ReactNode;
    query?: string;
    dataCy?: string;
    openComponent: React.ReactNode;
    closeComponent: React.ReactNode;
    width?: string;
    height?: string;
    fontSize?: string;
    position: Position;
    hasHeader: HasHeader;
}> = ({
    query,
    dataCy,
    children,
    className,
    openComponent,
    closeComponent,
    width,
    height,
    fontSize,
    position,
    hasHeader,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const queryPopupRef = useRef<HTMLDivElement>(null);
    function useOutsideAlerter(ref: React.RefObject<Node>): void {
        useEffect(() => {
            function handleOutsideClick(event: MouseEvent): void {
                if (
                    ref.current &&
                    !ref.current?.contains(event.target as Node)
                ) {
                    setOpen(false);
                }
            }
            document.addEventListener('click', handleOutsideClick);

            return () =>
                document.removeEventListener('click', handleOutsideClick);
        }, [ref]);
    }
    useOutsideAlerter(queryPopupRef);

    const conditionalRenderingOfPopup = (): React.ReactElement | null => {
        if (position === null) {
            return null;
        }
        switch (position) {
            case 'bottom':
                return (
                    <BoxContainer
                        styleProps={{ width: `${width}`, height: `${height}`}}
                        className="parent-container"
                    >
                        {hasHeader === true && (
                            <DivContainerFlex
                                styleProps={{
                                    borderRadius: '0.25rem',
                                    padding: '1.5rem 1.5rem 0.5rem',
                                    fontSize: '0.75rem',
                                    color: '#000000',
                                    minHeight: '2.75rem',
                                    height: 'fit-content',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    letterSpacing: '0.25px',
                                    width: '100%',
                                }}
                                className="container"
                            >
                                <h3
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        lineHeight: '24px',
                                        margin: 0,
                                    }}
                                >
                                    {query}
                                </h3>
                                <div
                                    onClick={() => setOpen(false)}
                                    role="button"
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                    }}
                                >
                                    <DivContainerFlex
                                        styleProps={{
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: '0.75rem',
                                            textDecoration: 'none',
                                            width: '1.5rem',
                                            height: '1.5rem',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            marginRight: '1.5rem',
                                        }}
                                        id="view-link"
                                        className="container"
                                    ></DivContainerFlex>
                                </div>
                            </DivContainerFlex>
                        )}

                        <DivContainerFlex
                            styleProps={{
                                flexFlow: 'column',
                                fontSize: '0.75rem',

                                letterSpacing: '0.25px',
                                color: '#000000',
                                padding: '0 1.5rem 1.5rem 1.5rem',
                                ...(hasHeader === false && noHeaderStyles),
                            }}
                            className="container"
                        >
                            {children}
                        </DivContainerFlex>
                    </BoxContainer>
                );
            case 'top':
                return (
                    <TopBoxContainer
                        styleProps={{ width: `${width}`, height: `${height}`}}
                        className="parent-container"
                    >
                        {hasHeader === true && (
                            <DivContainerFlex
                                styleProps={{
                                    borderRadius: '0.25rem',
                                    padding: '1.5rem 1.5rem 0.5rem',
                                    fontSize: '0.75rem',
                                    color: '#000000',
                                    minHeight: '2.75rem',
                                    height: 'fit-content',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    letterSpacing: '0.25px',
                                    width: '100%',
                                }}
                                className="container"
                            >
                                <h3
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        lineHeight: '24px',
                                        margin: 0,
                                    }}
                                >
                                    {query}
                                </h3>
                                <div
                                    onClick={() => setOpen(false)}
                                    role="button"
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                    }}
                                >
                                    <DivContainerFlex
                                        styleProps={{
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: '0.75rem',
                                            textDecoration: 'none',
                                            width: '1.5rem',
                                            height: '1.5rem',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            marginRight: '1.5rem',
                                        }}
                                        id="view-link"
                                        className="container"
                                    ></DivContainerFlex>
                                </div>
                            </DivContainerFlex>
                        )}
                        <DivContainerFlex
                            styleProps={{
                                flexFlow: 'column',
                                fontSize: '0.75rem',
                                letterSpacing: '0.25px',
                                color: '#000000',
                                padding: '0 1.5rem 1.5rem 1.5rem',
                                ...(hasHeader === false && noHeaderStyles),
                            }}
                            className="container"
                        >
                            {children}
                        </DivContainerFlex>
                    </TopBoxContainer>
                );
            case 'left':
                return (
                    <LeftBoxContainer
                        styleProps={{ width: `${width}`, height: `${height}` }}
                        className="parent-container"
                    >
                        {hasHeader === true && (
                            <DivContainerFlex
                                styleProps={{
                                    borderRadius: '0.25rem',
                                    padding: '0.5rem 1.5rem 0.5rem',
                                    fontSize: '0.75rem',
                                    color: '#000000',
                                    minHeight: '2.75rem',
                                    height: 'fit-content',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    letterSpacing: '0.25px',
                                    width: '100%',
                                    border: '1px solid red',
                                }}
                                className="container"
                            >
                                <h3
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        lineHeight: '24px',
                                        margin: 0,
                                    }}
                                >
                                    {query}
                                </h3>
                                <div
                                    onClick={() => setOpen(false)}
                                    role="button"
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                    }}
                                >
                                    <DivContainerFlex
                                        styleProps={{
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: '0.75rem',
                                            textDecoration: 'none',
                                            width: '1.5rem',
                                            height: '1.5rem',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            marginRight: '1.5rem',
                                        }}
                                        id="view-link"
                                        className="container"
                                    ></DivContainerFlex>
                                </div>
                            </DivContainerFlex>
                        )}
                        <DivContainerFlex
                            styleProps={{
                                flexFlow: 'column',
                                fontSize: '0.75rem',
                                letterSpacing: '0.25px',
                                color: '#000000',
                                padding: '0 1.5rem 1.5rem 1.5rem',
                                ...(hasHeader === false && noHeaderStyles),
                            }}
                            className="container"
                        >
                            {children}
                        </DivContainerFlex>
                    </LeftBoxContainer>
                );
            case 'right':
                return (
                    <RightBoxContainer
                        styleProps={{ width: `${width}`, height: `${height}` }}
                        className="parent-container"
                    >
                        {hasHeader === true && (
                            <DivContainerFlex
                                styleProps={{
                                    borderRadius: '0.25rem',
                                    padding: '1.5rem 1.5rem 0.5rem',
                                    fontSize: '0.75rem',
                                    color: '#000000',
                                    minHeight: '2.75rem',
                                    height: 'fit-content',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    letterSpacing: '0.25px',
                                    width: '100%',
                                }}
                                className="container"
                            >
                                <h3
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        lineHeight: '24px',
                                        margin: 0,
                                    }}
                                >
                                    {query}
                                </h3>
                                <div
                                    onClick={() => setOpen(false)}
                                    role="button"
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                    }}
                                >
                                    <DivContainerFlex
                                        styleProps={{
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: '0.75rem',
                                            textDecoration: 'none',
                                            width: '1.5rem',
                                            height: '1.5rem',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            marginRight: '1.5rem',
                                        }}
                                        id="view-link"
                                        className="container"
                                    >
                                        <DivContainerFlex
                                            styleProps={{
                                                flexFlow: 'row nowrap',
                                                color: '#000000',
                                            }}
                                            className="container"
                                        >
                                            this is text
                                        </DivContainerFlex>
                                    </DivContainerFlex>
                                </div>
                            </DivContainerFlex>
                        )}
                        <DivContainerFlex
                            styleProps={{
                                flexFlow: 'column',
                                fontSize: '0.75rem',
                                letterSpacing: '0.25px',
                                color: '#000000',
                                padding: '0 1.5rem 1.5rem 1.5rem',
                                ...(hasHeader === false && noHeaderStyles),
                            }}
                            className="container"
                        >
                            {children}
                        </DivContainerFlex>
                    </RightBoxContainer>
                );
        }
    };

    return (
        <div
            data-cy={dataCy}
            className={className}
            style={{ justifyContent: 'center', width: 'fit-content' }}
            ref={queryPopupRef}
        >
            <div onClick={() => setOpen((prev) => !prev)} role="button">
                <DivContainerFlex
                    styleProps={{
                        backgroundColor: 'transparent',
                        padding: 'unset',
                        cursor: 'pointer',
                        fontSize: `${fontSize}`,
                        textDecoration: 'none',
                        height: '26px',
                        alignItems: 'center',
                    }}
                    id="view-link"
                    className="container"
                >
                    <DivContainerFlex
                        styleProps={{
                            flexFlow: 'row nowrap',
                            padding: '0.5rem 0'
                        }}
                        className="container open-close-button"
                    >
                        {open ? closeComponent : openComponent}
                    </DivContainerFlex>
                </DivContainerFlex>
            </div>
            {open ? (
                <DivContainerFlex
                    styleProps={{
                        position: 'relative',
                        width: '100%',
                        justifyContent: 'center',
                        ...(position === 'left' && leftAndRight),
                        ...(position === 'right' && leftAndRight),
                    }}
                    className="container"
                >
                    {conditionalRenderingOfPopup()}
                </DivContainerFlex>
            ) : null}
        </div>
    );
};

const BoxContainer = styled(DivContainerFlex)`
    box-shadow: 0px 8px 16px 0px rgba(45, 45, 45, 0.12);
    border-radius: 0.25rem;
    border: 1px solid #cccccc;
    font-size: 1rem;
    background-color: #ffffff;
    z-index: 2;
    align-items: center;
    position: absolute;
    flex-flow: column;
    min-width: 12rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    overflow: auto;
    &::before {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 48%;
        content: '';
        width: 12px;
        height: 12px;
        background-color: #ffffff;
        transform: translateY(-50%) rotate(45deg);
        border-top: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
    }
`;

const TopBoxContainer = styled(DivContainerFlex)`
    box-shadow: 0px -4px 16px 0px rgba(45, 45, 45, 0.12);
    border-radius: 0.25rem;
    border: 1px solid #cccccc;
    font-size: 1rem;
    background-color: #ffffff;
    z-index: 2;
    align-items: center;
    position: absolute;
    flex-flow: column;
    min-width: 12rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    bottom: 100%;
    overflow: auto;
    &::before {
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 48%;
        content: '';
        width: 12px;
        height: 12px;
        background-color: #ffffff;
        transform: translateY(50%) rotate(225deg);
        border-top: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
    }
`;

const LeftBoxContainer = styled(DivContainerFlex)`
    box-shadow: -4px 0px 16px 0px rgba(45, 45, 45, 0.12);
    border-radius: 0.25rem;
    border: 1px solid #cccccc;
    font-size: 1rem;
    background-color: #ffffff;
    z-index: 2;
    align-items: center;
    position: absolute;
    flex-flow: column;
    min-width: 12rem;
    margin-right: 1rem;
    margin-bottom: 1.2rem;
    border-radius: 0.5rem;
    right: 100%;
    overflow: auto;
    &::before {
        position: absolute;
        z-index: -1;
        bottom: 52%;
        right: -6px;
        content: '';
        width: 12px;
        height: 12px;
        background-color: #ffffff;
        transform: translateY(50%) rotate(135deg);
        border-top: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
    }
`;

const RightBoxContainer = styled(DivContainerFlex)`
    box-shadow: 4px 0px 16px 0px rgba(45, 45, 45, 0.12);
    border-radius: 0.25rem;
    border: 1px solid #cccccc;
    font-size: 1rem;
    background-color: #ffffff;
    z-index: 2;
    align-items: center;
    position: absolute;
    flex-flow: column;
    min-width: 12rem;
    margin-left: 1rem;
    margin-bottom: 1.2rem;
    border-radius: 0.5rem;
    left: 100%;
    overflow: auto;
    &::before {
        position: absolute;
        z-index: -1;
        bottom: 51%;
        left: -6px;
        content: '';
        width: 12px;
        height: 12px;
        background-color: #ffffff;
        transform: translateY(50%) rotate(315deg);
        border-top: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
    }
`;

const leftAndRight = {
    flexFlow: 'row nowrap',
    alignItems: 'center',
};

const noHeaderStyles = {
    padding: '1.5rem',
};
