import { HashLink as Link } from "react-router-hash-link";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
import JMBuilderOutsideSWE from './images/jm-build-develop-swe-jobseeker.jpg';
import ABExperimentCreation from './images/ab-exp-creation.jpg';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import { examplesContextBuilder, experienceMapText, outcomeText } from "./utils/objects/links/examples-context-text";
import {scrollToTop} from './utils/functions/scrollTo';


const App = () => {
    scrollToTop();
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
                        <li className="contact-info-item"><Link className="contact-info-link go-back-link" to="/#UX Roadmapping">&#x2190; Go Back</Link></li>
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
                    <p className="examples-context-text">There was an a proprietary Indeed developed called Experimentation Platform that helped different users at Indeed track down, monitor and manipulate experiments that were tried in production within the UI, UX and new feature development for an application.</p>
                    <p className="examples-context-text">The tool had not been evaluated for updates in 10 years or so.  I was asked by the UX team to help create new workflows, experience maps and roadmaps for this update.</p>
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
                    {examplesContextBuilder.map((exampleText) => {
                        return (
                            <p className={exampleText.className}>{exampleText.text}</p>
                        );
                    })}
                </DivContainerFlex>
                <DivContainerFlex className="accessibility-examples-container" styleProps={{flexFlow: 'column', padding: '2.5rem'}}>
                    <h3 style={{fontSize: '2rem', color: '#ffffff'}}>Builder: SWE from another team</h3>
                    <img src={JMBuilderOutsideSWE} alt="experience map for a software engineer that is on  another internal team"/>
                </DivContainerFlex>
                <DivContainerFlex
                        className="about-me-text"
                        styleProps={{
                            flexFlow: 'column',
                        }}
                    >
                        {experienceMapText.map((exampleText) => {
                            return (
                                <p className={exampleText.className}>{exampleText.text}</p>
                            );
                        })}
                </DivContainerFlex>
                <DivContainerFlex className="accessibility-examples-container" styleProps={{flexFlow: 'column', padding: '2.5rem'}}>
                    <h3 style={{fontSize: '2rem', color: '#ffffff'}}>Experience Map: Creation phase of experiment</h3>
                    <img src={ABExperimentCreation} alt="experience map for the creation phase of an experiment"/>
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
                    {outcomeText.map((outcome) => {
                        return (
                            <p className={outcome.className}>{outcome.text}</p>
                        );
                    })}
                </DivContainerFlex>
                <DivContainerFlex className="go-to-home-link-container bottom-page-link">
                    <Link className="go-home-link" to="/#UX Roadmapping">&#x2190; Go Back</Link>
                </DivContainerFlex>
            </SectionContainerFlex>
        </AppContainer>
    );
};
export default App;
