import { useHistory } from "react-router-dom";
import { useAuth } from "./auth";
import { HashLink as Link } from "react-router-hash-link";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import { Grid } from "./components/layout/grid-container";
import { Card } from "./components/composed/card";
import {scrollToTop} from './utils/functions/scrollTo';
import { uiLinks } from "./utils/objects/links/ui-links";

const UIPage = () => {
    scrollToTop();
    interface UIData {
        text: string;
        explanation: string;
        video: string;
    }
    const auth = useAuth();
    const history = useHistory();
    const handleLogOut = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        auth.logout();
        history.push('/');
    }
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
                        <li className="contact-info-item"><Link className="contact-info-link go-back-link" to="/#UI Development">&#x2190; Go Back</Link></li>
                        <li className="contact-info-item"><Link className="contact-info-link go-back-link" to="" onClick={handleLogOut}>&#x2190; Log Out</Link></li>
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
                    <p className="examples-context-text">Users provided a good amount of feedback that there needed to be UI interaction improvements to make the application more successful. Product and design triaged the requests. They then, came up with designs and handed them to me for development. Here are just a few of the components.</p>
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
                        The Outcome
                    </h2>
                    <p className="examples-context-text">I developed using TypeScript and react.js to make all of the components.</p>
                </DivContainerFlex>
                        {
                            <Grid className='code-sample-container-grid' styleProps={{padding: '1rem 0.5rem 2.5rem'}}>
                            {uiLinks.map((data: UIData, index: number) => {
                                return (
                                    
                                    <Card 
                                        className='about-me-text ui-video-text' 
                                        id={data.text} 
                                        title={data.text}
                                        key={data.text + index}
                                        footerFlexFlowDirection='row-reverse' 
                                        styleProps={{backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px', color: '#ffffff'}}>
                                            <video src={data.video} key={data.text + index} width="300px" height="auto" controls/>
                                            <p>{data.explanation}</p>
                                    </Card>
                                )
                            })}
                        </Grid>
                        }
                <DivContainerFlex className="go-to-home-link-container bottom-page-link">
                    <Link className="go-home-link" to="/#UI Development">&#x2190; Go Back</Link>
                </DivContainerFlex>
            </SectionContainerFlex>
        </AppContainer>
    );
};
export default UIPage;
