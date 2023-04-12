import { HashLink as Link } from "react-router-hash-link";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
import CyAxeOne from './images/cypress-axe-one.png';
import CyAxeTwo from './images/cypress-axe-two.png';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import {scrollToTop} from './utils/functions/scrollTo';


const AccessibilityPage = () => {
    scrollToTop();
    return (
        <AppContainer className="App">
            <HeaderFlex
                className="app-header accessibility-header"
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
                    </ul>
                </div>
            </HeaderFlex>
            <SectionContainerFlex
                className="accessibility-page-container"
                styleProps={{
                    backgroundColor: '#000000',
                    padding: '14rem 0',
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
                       className="accessibility-about-me-heading"
                        style={{
                            color: '#ffffff',
                            margin: '0 0 1.25rem 0',
                            padding: '0 2.5rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                            fontSize: '2rem',
                        }}
                    >
                        The Problem
                    </h2>
                    <p className="examples-context-text">We wanted to use cypress integration testing to help detect any accessibility issues (programmatically) as a first step in doing our accessibility evaluations.</p>
                    <p className="examples-context-text">The second part of the problem is that none of the automation engineers and QA's understood how to work with the cypress/cypress-axe/pa11y combo.</p>
                </DivContainerFlex>
                <DivContainerFlex
                        className="about-me-text"
                        styleProps={{
                            flexFlow: 'column',
                        }}
                    >
                       <h2
                        className="accessibility-about-me-heading"
                        style={{
                            color: '#ffffff',
                            margin: '3.5rem 0 1.25rem 0',
                            padding: '0 2.5rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                            fontSize: '2rem',
                        }}
                    >
                        The Solution
                    </h2>
                    <p className="examples-context-text">I designed and developed a full tutorial repo with interactivity to help solve this problem.  The repo had interactive examples where any user could clone the repo and learn following the instructions, examples and comments within the integration files to learn how to code within the integration tests and run the app so see the errors within the terminal.</p>
                </DivContainerFlex>
                <DivContainerFlex className="accessibility-examples-container" styleProps={{flexFlow: 'column', padding: '2.5rem'}}>
                    <img src={CyAxeOne} alt="cypress example with pa11y in terminal" style={{ margin: '0.75rem 0'}}/>
                    <img src={CyAxeTwo} alt="cypress example with integration tests in terminal" style={{ margin: '0.75rem 0'}}/>
                </DivContainerFlex>
                <DivContainerFlex
                        className="about-me-text"
                        styleProps={{
                            flexFlow: 'column',
                        }}
                    >
                       <h2
                        className="accessibility-about-me-heading"
                        style={{
                            color: '#ffffff',
                            margin: '2.5rem 0 1.25rem 0',
                            padding: '0 2.5rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                            fontSize: '2rem',
                        }}
                    >
                        The Outcome
                    </h2>
                    <p className="examples-context-text">Indeed leadership asked me to work with the internal accessibility council once a stable version was ready for release. They got the repo approved to be part of the internal training resources that Indeed provided to all new Automation Engineers and QA's within the company.</p>
                </DivContainerFlex>
                <DivContainerFlex className="go-to-home-link-container bottom-page-link" styleProps={{marginTop: '2.5rem'}}>
                    <Link className="go-home-link" to="/#Web Accessibility">&#x2190; Go Back</Link>
                </DivContainerFlex>
            </SectionContainerFlex>
        </AppContainer>
    );
};
export default AccessibilityPage;
