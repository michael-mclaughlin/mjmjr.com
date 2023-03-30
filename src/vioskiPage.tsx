import { HashLink as Link } from "react-router-hash-link";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
import { Grid } from './components/layout/grid-container';
import { Card } from "./components/composed/card";
import { codeVioski } from './utils/objects/links/code-links-vioski';
import { examplesContextProblem, 
         examplesContextSolution,
         examplesContextOutcome
       } from './utils/objects/links/examples-context-text-vioski';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vioskiVideo from './video/vioski-video.mp4';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import {scrollToTop} from './utils/functions/scrollTo';

const App = () => {
    scrollToTop();
    interface codeLinksVioski {
        text: string;
        href: string;
        explanation: string;
    }
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
                        <li className="contact-info-item"><Link className="contact-info-link go-back-link" to="/#Vioski Furniture">&#x2190; Go Back</Link></li>
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
                    {examplesContextProblem.map((problem) => {
                        return (
                            <p className={problem.className}>{problem.text}</p>
                        )
                    })}
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
                    {examplesContextSolution.map((solution)=>{
                        return (
                            <p className={solution.className}>{solution.text}</p>
                        );
                    })}
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
                    {examplesContextOutcome.map((outcome) => {
                        return (
                            <p className={outcome.className}>{outcome.text}</p>
                        );
                    })}
                </DivContainerFlex>
                <DivContainerFlex className="accessibility-examples-container" styleProps={{flexFlow: 'column', padding: '2.5rem'}}>
                <video src={vioskiVideo} width="auto" height="auto" controls/>
                </DivContainerFlex>
                <DivContainerFlex
                    className="skills-text-container"
                    styleProps={{
                        flexFlow: 'column',
                        width: '100%',
                        marginTop: '2.5rem',
                        background: 'linear-gradient(0deg, rgba(0,0,0,1) 93%, rgba(0,0,0,0) 95%',
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
                            margin: 0,
                            padding: '0 2.5rem',
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        Code Samples
                    </h2>
                    <p className="code-sample-text-explanation">Here is some of the code that I wrote for this website. I believe in open sourced code sharing so please if you see something you like please don't hesitate to copy the code and Enjoy!</p>
                        <DivContainerFlex
                            className="about-me-text-container"
                            styleProps={{ flexFlow: 'column', width: '100%', marginBottom: '2.5rem' }}
                        >
                            <Grid className='code-sample-container-grid'>
                                {codeVioski.map((codeLink: codeLinksVioski, index: number) => {
                                    return (
                                        
                                        <Card 
                                            className='code-example-card' 
                                            id={codeLink.text} 
                                            title={codeLink.text}
                                            key={codeLink.text + index}
                                            footerFlexFlowDirection='row-reverse' 
                                            footerChildren={
                                            <Links
                                                href={codeLink.href}
                                                className="code-sample-link"
                                                target="_blank"
                                                styleProps={{textAlign: 'right'}} 
                                            >
                                                Go to the code &#8594;
                                                </Links>} 
                                            styleProps={{backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px'}}>
                                            <p>{codeLink.explanation}</p>
                                        </Card>
                                    )
                                })}
                            </Grid>
                        </DivContainerFlex>
                    </DivContainerFlex>
                </DivContainerFlex>
                <DivContainerFlex className="go-to-home-link-container bottom-page-link">
                    <Link className="go-home-link" to="/#Vioski Furniture">&#x2190; Go Back</Link>
                </DivContainerFlex>
            </SectionContainerFlex>
        </AppContainer>
    );
};
export default App;
