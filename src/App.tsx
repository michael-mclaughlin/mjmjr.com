import { HashLink as Link } from "react-router-hash-link";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { FooterContainerFlex } from './components/layout/footer-container-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
import { code } from './utils/objects/links/code-links';
import { work } from './utils/objects/links/work-links';
import { introsTitles } from './utils/objects/links/intro-titles'
import { about } from './utils/objects/links/about';
import { ParallaxContainer } from './components/layout/parallax-container';
import { Grid } from './components/layout/grid-container';
import { Card } from './components/composed/card';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import JotformEmbed from 'react-jotform-embed';
import { Popup } from './components/composed/popup';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import img from './images/climbing-wall.png';
import codeImage from './images/code.jpg';
import workImage from './images/online-web-design.jpg';
import { footerInfos } from "./utils/objects/links/footer-info";
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
            <ParallaxContainer
                className="parallax-skills"
                styleProps={{
                    background: `center / cover content-box url(${img})`,
                    backgroundAttachment: 'fixed',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <DivContainerFlex
                    className="skills-text-container"
                    styleProps={{
                        flexFlow: 'column',
                        width: '100%',
                        marginTop: '10rem',
                        background: 'linear-gradient(0deg, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 95%',
                    }}
                >
                    <DivContainerFlex
                        className="about-me-text"
                        styleProps={{
                            flexFlow: 'column',
                        }}
                    >
                        <h2 className="skills-details-text-heading">
                            I enjoy designing and developing new web experiences
                            to excite and improve a user's daily life.
                        </h2>
                        <DivContainerFlex
                            className="about-me-text-container"
                            styleProps={{ flexFlow: 'column', width: '100%', marginBottom: '10rem' }}
                        >
                            {about.map((ab)=> {
                                return <p className="about-me-text" key={ab.id}>{ab.text}</p>
                            })}
                            
                               
                        </DivContainerFlex>
                    </DivContainerFlex>
                </DivContainerFlex>
            </ParallaxContainer>
            <SectionContainerFlex className='body-of-work'>
            <ParallaxContainer
                className="parallax-skills"
                styleProps={{
                    background: `center / cover content-box url(${workImage})`,
                    backgroundAttachment: 'fixed',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <DivContainerFlex
                    className="skills-text-container"
                    styleProps={{
                        flexFlow: 'column',
                        width: '100%',
                        marginTop: '10rem',
                        background: 'linear-gradient(0deg, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%',
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
                        Work Samples
                    </h2>
                    <p className="code-sample-text-explanation">Here are a few examples of work. The UX Roadmapping and the UI Development cards have proprietary information related to working at Indeed so they are not publicly available. Please click the 'Request a Demo' link for a demo.</p>
                        <DivContainerFlex
                            className="about-me-text-container"
                            styleProps={{ flexFlow: 'column', width: '100%', marginBottom: '10rem' }}
                        >
                            <Grid className='code-sample-container-grid'>
                            {work.map((workLink, index) => {
                                return (
                                    <Card 
                                        className='code-example-card' 
                                        id={workLink.text} title={workLink.text} 
                                        key={workLink.text + index}
                                        footerFlexFlowDirection='row-reverse' 
                                        footerChildren={
                                            workLink.jotFormSrc ? <Popup className="jotform-popup" openComponent='Request a Demo' closeComponent='Close' position='left' hasHeader={false} width='350px' height='400px'>
                                                                    <JotformEmbed src={workLink.jotFormSrc}></JotformEmbed>
                                                                </Popup> : 
                                                                    <Link className="work-links-routing" to={workLink.to}>{workLink.text + ` Demo`} &#8594;</Link>
                                                                } 
                                        styleProps={{backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px'}}>
                                        <p>{workLink.explanation}</p>
                                    </Card>
                                     );
                                })}
                            </Grid>
                        </DivContainerFlex>
                    </DivContainerFlex>
                </DivContainerFlex>
            </ParallaxContainer>
            </SectionContainerFlex>
            <ParallaxContainer
                className="parallax-skills"
                styleProps={{
                    background: `center / cover content-box url(${codeImage})`,
                    backgroundAttachment: 'fixed',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <DivContainerFlex
                    className="skills-text-container"
                    styleProps={{
                        flexFlow: 'column',
                        width: '100%',
                        marginTop: '10rem',
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
                    <p className="code-sample-text-explanation">Here are all of the components code I wrote to make this website portfolio happen. I have supplied a component list for others to use as they see fit. I believe in sharing code in an open sourced way so enjoy! All of the components are written in TypeScript and styled components.</p>
                        <DivContainerFlex
                            className="about-me-text-container"
                            styleProps={{ flexFlow: 'column', width: '100%', marginBottom: '10rem' }}
                        >
                            <Grid className='code-sample-container-grid'>
                                {code.map((codeLink, index) => {
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
            </ParallaxContainer>
            <FooterContainerFlex className="footer-container" styleProps={{height: '100vh', backgroundColor: '#1a1a1a', flexFlow: 'column'}}>
                {footerInfos.map((info, index) => {
                        return (
                            <DivContainerFlex className="footer-info-container">
                                {info.jotFormSrc 
                                    ? 
                                    <Links className="footer-contact-link" target="_blank" href={info.jotFormSrc}>Contact Me</Links> 
                                    : <h2 className={`footerTitles-${index}`}                                                                                                                    
                                        key={info.text + index}
                                        id={info.text + index}
                                    >
                                        {info.text}
                                    </h2>
                                }
                            </DivContainerFlex>
                            
                        )
                    })}
            </FooterContainerFlex>
        </AppContainer>
    );
};
export default App;
