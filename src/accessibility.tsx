// import React, { useState} from 'react'
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { FooterContainerFlex } from './components/layout/footer-container-flex';
// import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link } from './components/elements/link';
import { links } from './utils/objects/links/links';
// import { code } from './utils/objects/links/code-links';
// import { work } from './utils/objects/links/work-links';
import { introsTitles } from './utils/objects/links/intro-titles'
// import { about } from './utils/objects/links/about';
// import { ParallaxContainer } from './components/layout/parallax-container';
// import { Grid } from './components/layout/grid-container';
// import { Card } from './components/composed/card';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import JotformEmbed from 'react-jotform-embed';
// import { Popup } from './components/composed/popup';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
// import img from './images/climbing-wall.png';
// import codeImage from './images/code.jpg';
// import workImage from './images/online-web-design.jpg';


const App = () => {
    return (
        <AppContainer className="App">
            <HeaderFlex
                className="app-header"
                styleProps={{
                    backgroundColor: '#000000',
                    padding: '1rem',
                    height: '2rem',
                    justifyContent: 'space-between',
                    position: 'fixed',
                    width: '100%',
                }}
            >
                <h1
                    style={{
                        color: '#ffffff',
                        margin: '0 0 0 1.75rem',
                        padding: 0,
                        fontSize: '1.5rem',
                        letterSpacing: '1px',
                        height: 'inherit',
                    }}
                >
                    Mike Mclaughlin
                </h1>
                <div className="contact-info-container">
                    <ul className="contact-info-list">
                        {links.map((link) => {
                            return (
                                <li className="contact-info-item">
                                    <Link
                                        href={link.href}
                                        className="contact-info-link"
                                        target="_blank"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </HeaderFlex>
            <SectionContainerFlex
                className="hero-container"
                styleProps={{
                    backgroundColor: '#000000',
                    height: '100vh',
                    alignItems: 'center',
                    padding: '2rem 2.5rem',
                }}
            >
                <div>
                    {introsTitles.map((title, index) => {
                        return (
                            <h2
                            className="introsTitles"
                            key={title.text + index}
                            id={title.text + index}
                    >
                        {title.text}
                    </h2>
                        )
                    })}
                </div>
            </SectionContainerFlex>
            <FooterContainerFlex className="footer-container" styleProps={{height: '100vh', backgroundColor: '#1a1a1a'}}>
                Thanks for connecting with me.
            </FooterContainerFlex>
        </AppContainer>
    );
};
export default App;
