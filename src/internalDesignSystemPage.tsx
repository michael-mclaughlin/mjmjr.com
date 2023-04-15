import { HashLink as Link } from "react-router-hash-link";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
import { Card } from "./components/composed/card";
import { idsLinks } from './utils/objects/links/ids-links';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import {scrollToTop} from './utils/functions/scrollTo';
import { Grid } from "./components/layout/grid-container";


const App = () => {
    scrollToTop();
    return (
        <AppContainer className="App">
            <HeaderFlex
                className="app-header"
                styleProps={{
                    backgroundColor: '#000000',
                    padding: '1rem',
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
                    <Link className="home-link" to="/">Mike Mclaughlin</Link>
                </h1>
                <div className="contact-info-container">
                    <ul className="contact-info-list">
                        {links.map((link) => {
                            return (
                                <li className="contact-info-item">
                                    <Links
                                        href={link.href}
                                        className="contact-info-link"
                                        target="_blank"
                                    >
                                        {link.text}
                                    </Links>
                                </li>
                            );
                        })}
                        {/* <li className="contact-info-item"><Link className="contact-info-link go-back-link" to="/#Internal Design System">&#x2190; Go Back</Link></li> */}
                    </ul>
                </div>
            </HeaderFlex>
            <SectionContainerFlex
                className="accessibility-page-container"
                styleProps={{
                    backgroundColor: '#000000',
                    padding: '10rem 0',
                    flexFlow: 'column',
                }}
            >
                <DivContainerFlex
                        className="about-me-text"
                        styleProps={{
                            flexFlow: 'column',
                        }}
                    >
                       <h2
                        style={{
                            color: '#ffffff',
                            margin: '0 0 1.25rem 0',
                            padding: '0 2.5rem',
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        The Problem
                    </h2>
                    <p className="examples-context-text"
                        >
                            The client facing design system wasn't flexible for the needs of internal applications so I was asked by Product leadership to spin up a new Internal design system to have an internal component library of more flexible components.
                    </p>
                </DivContainerFlex>
                <DivContainerFlex
                        className="about-me-text"
                        styleProps={{
                            flexFlow: 'column',
                        }}
                    >
                       <h2
                        style={{
                            color: '#ffffff',
                            margin: '3.5rem 0 1.25rem 0',
                            padding: '0 2.5rem',
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        The Solution
                    </h2>
                    <p className="examples-context-text">I developed an internal design system using storybook, Typescript, ReactJS, SCSS and StyledComponents that were individually releasable through npm packages.</p>
                </DivContainerFlex>
                <DivContainerFlex className="accessibility-examples-container" styleProps={{flexFlow: 'column', padding: '2.5rem'}}>
                        {
                            <Grid className='code-sample-container-grid' styleProps={{padding: '1rem 0.5rem 2.5rem'}}>
                            {idsLinks.map((ids, index) => {
                                return (
                                    <Card id={ids.text + index} 
                                        title={ids.text} 
                                        key={ids.text + index} 
                                        className="about-me-text ids-cards" 
                                        styleProps={{backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px', color: '#ffffff'}}
                                    >
                                        <div style={{ width: '100%', height: '12rem', overflow: 'auto'}}>
                                        <img src={ids.src2} alt={ids.alt} style={{ width: '100%', margin: '0.5rem 0'}}/>
                                        <img src={ids.src} alt={ids.alt} style={{width: '100%', margin: '0.5rem 0'}}/>
                                        </div>
                                        
                                        <p>{ids.explanation}</p>
                                    </Card>
                                )
                            })}
                        </Grid>
                        }
                    
                </DivContainerFlex>
                <DivContainerFlex
                        className="about-me-text"
                        styleProps={{
                            flexFlow: 'column',
                        }}
                    >
                       <h2
                        style={{
                            color: '#ffffff',
                            margin: '2.5rem 0 1.25rem 0',
                            padding: '0 2.5rem',
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        The Outcome
                    </h2>
                    <p className="examples-context-text">All internal applications now have a more flexible component library for new features that were more configurable and customizable.</p>
                </DivContainerFlex>
                <DivContainerFlex className="go-to-home-link-container bottom-page-link">
                    <Link className="go-home-link" to="/#Internal Design System">&#x2190; Go Back</Link>
                </DivContainerFlex>
            </SectionContainerFlex>
        </AppContainer>
    );
};
export default App;
