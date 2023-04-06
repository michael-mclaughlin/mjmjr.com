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
// import {uiWork} from './utils/objects/links/ui-video-data';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import deleteRenameTabPerViz from "./video/delete-rename-tab-per-viz-final.mp4";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tabPerVizFinal from "./video/tab-per-viz-final.mp4";
const App = () => {
    scrollToTop();
    interface UIData {
        text: string;
        explanation: string;
        video: string;
    }
    const uiVideoArray = [{
        video: deleteRenameTabPerViz,
        text: 'Rename and Delete tabs per visualization component',
        explanation: "Users wanted to be able to see several data visualizations in a tabbed format. The also wanted to be able to rename and delete tabs that could be saved to the database for data persistance.",
    },
    {
        video: tabPerVizFinal,
        text: "Individual Tabs per Visualization",
        explanation: "Users wanted a way to keep track of their tabs and visualizations immediate usable from the UI. I used React Router v5 and NavLinks to map out the visualization names and map them to the correct visualization."
    } 
]
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
                        <li className="contact-info-item"><Link className="contact-info-link go-back-link" to="/#UI Development">&#x2190; Go Back</Link></li>
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
                    <p className="examples-context-text">I designed and developed a full tutorial repo with interactivity to help solve this problem.  The repo had interactive examples where any user could clone the repo and learn following the instructions, examples and comments within the integration files to learn how to code within the integration tests and run the app so see the errors within the terminal.</p>
                </DivContainerFlex>
                        {
                            <Grid className='code-sample-container-grid'>
                            {uiVideoArray.map((data: UIData, index: number) => {
                                return (
                                    
                                    <Card 
                                        className='code-example-card' 
                                        id={data.text} 
                                        title={data.text}
                                        key={data.text + index}
                                        footerFlexFlowDirection='row-reverse' 
                                        styleProps={{backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px'}}>
                                            <video src={data.video} key={data.text + index} width="300px" height="auto" controls/>
                                            <p>{data.explanation}</p>
                                    </Card>
                                )
                            })}
                        </Grid>
                        }
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
                    <p className="examples-context-text">Indeed leadership asked me to work with the internal accessibility council once a stable version was ready for release. They got the repo approved to be part of the internal training resources that Indeed provided to all new Automation Engineers and QA's within the company.</p>
                </DivContainerFlex>
                <DivContainerFlex className="go-to-home-link-container bottom-page-link">
                    <Link className="go-home-link" to="/#UI Development">&#x2190; Go Back</Link>
                </DivContainerFlex>
            </SectionContainerFlex>
        </AppContainer>
    );
};
export default App;
