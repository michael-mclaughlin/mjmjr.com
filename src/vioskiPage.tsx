import { Link } from "react-router-dom";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
import { Grid } from './components/layout/grid-container';
import { codeVioski } from './utils/objects/links/code-links-vioski';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vioskiVideo from './video/vioski-video.mp4';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import { Card } from "./components/composed/card";

const App = () => {
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
                        <li className="contact-info-item"><Link className="contact-info-link go-back-link" to="/">&#x2190; Go Back</Link></li>
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
                    <p className="examples-context-text">Vioski is an international contemporary custom furniture design and manufacturing studio based out of California. They cater to high end personal clients as well as corporate furniture installations for companies like Splunk and InnOcean.</p>
                    <p className="examples-context-text">They asked me to completely revamp their legacy website (in 2016) because they were getting a lot of feedback from clients that their website doesn't match the level and quality of the furniture.</p>
                    <p className="examples-context-text">Users also provided feedback that they were not able to navigate the website to find things easily.</p>
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
                    <p 
                        className="examples-context-text"
                        >
                           I was given a 1 month time-box to get the new site into production so I had to cut a couple of corners to get this done.  I didn't do any persona's or affinity mapping because I did not have access to their client base contact information.  What I had to do is do competitive market analysis of other companies and find out how their websites work, then, compare and contrast those sites to the legacy Vioski site to inform what changes and updates that need to be made.
                    </p>
                    <p 
                        className="examples-context-text"
                        >
                            I proceeded to create a basic timeline which helped organize my work and process while giving the stakeholders of the Website routine updates and demos of the site.  I did this by creating a live prototype using github.io features which the stakeholders had access to at all times.  If they wanted to see the changes that I was working on each day they could because every change I made was pushed to the repo and updated live automatically to the prototype.
                    </p>
                    <p 
                        className="examples-context-text"
                        >
                            I had a fairly easy time redesigning the website because the content gave me a good amount of information that I needed to complete the redesign.
                            I was able to use minimalist design techniques combined with content centric design principles to pull the new website together.
                            The results from the competitive analysis also gave me a good amount of insight into what works for improvements.  Below is a video of the prototype...the website is not currently in production anymore due to company reorganization.
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
                            margin: '2.5rem 0 1.25rem 0',
                            padding: '0 2.5rem',
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        The Outcome
                    </h2>
                    <p className="examples-context-text">
                        The website was released in 2016 to improved reviews from their client base and their furniture representatives.  They were able to increase sales by 2.5% month over month for 1 year. Every month after that stayed stable for the next 2 years at the first year ending percentage.
                        In total sales increased in the year end of 2016 to over $150,000.00 more than the previous year.
                    </p>
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
                    <Link className="go-home-link" to="/">&#x2190; Go Back</Link>
                </DivContainerFlex>
            </SectionContainerFlex>
        </AppContainer>
    );
};
export default App;
