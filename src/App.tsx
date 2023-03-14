// import React, { useState} from 'react'
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { FooterContainerFlex } from './components/layout/footer-container-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link } from './components/elements/link';
import { links } from './utils/objects/links/links';
import { code } from './utils/objects/links/code-links';
import { work } from './utils/objects/links/work-links';
import { about } from './utils/objects/links/about';
import { ParallaxContainer } from './components/layout/parallax-container';
import { Grid } from './components/layout/grid-container';
import { Card } from './components/composed/card';
// import { Popup } from './components/composed/popup';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import img from './images/climbing-wall.png';
import codeImage from './images/code.jpg';


const App = () => {
    // const [values, setValues] = useState({password: "password", showPassword: false});
    // const handleClickShowPassword = () => {
    //     setValues({...values, showPassword: !values.showPassword});
    // }
    // const handleMouseDownShowPassword = (event: React.MouseEvent) => {
    //     event.preventDefault();
    // }
    // const handlePasswordChange = (prop: string, event: { target: {value: string}}) => {
    //     setValues({...values, [prop]: event?.target.value})
    // }
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
                    padding: '2rem',
                }}
            >
                <div>
                    <h2
                        style={{
                            color: '#ffffff',
                            margin: 0,
                            padding: 0,
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        UX Design
                    </h2>
                    <h2
                        style={{
                            color: '#ffffff',
                            margin: 0,
                            padding: 0,
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        Visual Design
                    </h2>
                    <h2
                        style={{
                            color: '#ff0060',
                            margin: 0,
                            padding: 0,
                            fontSize: '6rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        Design Technologist
                    </h2>
                    <h2
                        style={{
                            color: '#ffffff',
                            margin: 0,
                            padding: 0,
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        Web Accessibility
                    </h2>
                    <h2
                        style={{
                            color: '#ffffff',
                            margin: 0,
                            padding: 0,
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                        }}
                    >
                        UI Development
                    </h2>
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
                        background: 'linear-gradient(0deg, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 95%',
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
                {work.map((workLink) => {
                    return (
                        <Card 
                            className='code-example-card' 
                            id={workLink.text} title={workLink.text} 
                            footerFlexFlowDirection='row-reverse' 
                            footerChildren={
                            <Link
                                href={workLink.href}
                                className="code-sample-link"
                                target="_blank"
                                styleProps={{textAlign: 'right'}} 
                            >
                                Go to the code
                                </Link>} 
                            styleProps={{backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px'}}>
                            <p>{workLink.explanation}</p>
                        </Card>
                    );
                })}
                <Card id='vioski-demo' title='Vioski Furniture' className='vioski-demo card' footerChildren={'link to prototype'}>
                    <div>here you go</div>
                </Card>
                <Card id='indeed-roadmapping' title='UX Roadmapping' className='experimentation-roadmapping-demo card' footerChildren={
<a href="mailto:mjmjr@fastmail.com.com?subject=Requesting%20a%20demo">Request a Demo</a>}>
                    <div>here you go</div>
                </Card>
                <Card id='indeed-ui-development' title='UI Development' className='ui-development-demo card' footerChildren={
<a href="mailto:mjmjr@fastmail.com?subject=Requesting%20a%20demo">Request a Demo</a>}>
                    <div>here you go</div>
                </Card>
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
                        background: 'linear-gradient(0deg, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 95%',
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
                            padding: 0,
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
                                {code.map((codeLink) => {
                                    return (
                                        
                                        <Card 
                                            className='code-example-card' 
                                            id={codeLink.text} title={codeLink.text} 
                                            footerFlexFlowDirection='row-reverse' 
                                            footerChildren={
                                            <Link
                                                href={codeLink.href}
                                                className="code-sample-link"
                                                target="_blank"
                                                styleProps={{textAlign: 'right'}} 
                                            >
                                                Go to the code
                                                </Link>} 
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
            <FooterContainerFlex className="form-container">
                {/* <Popup openComponent='Open' closeComponent='Close' position='top' hasHeader={true} width='5rem'></Popup> */}
                Thanks for connecting with me.
            </FooterContainerFlex>
        </AppContainer>
    );
};
export default App;
