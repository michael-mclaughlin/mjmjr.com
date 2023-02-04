import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { FooterContainerFlex } from './components/layout/footer-container-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link } from './components/elements/link';
import { links } from './utils/objects/links/links';
import { about } from './utils/objects/links/about'
import { ParallaxContainer } from './components/layout/parallax-container';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
// import img from './images/close-up-leaf.png';
import img from './images/climbing-wall.png';


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
                    padding: '2rem',
                }}
            >
                <div>
                    {/* <p
                        style={{
                            color: '#ffffff',
                            fontSize: '2rem',
                            margin: 0,
                            padding: 0,
                            fontWeight: 600,
                            letterSpacing: '1px',
                        }}
                    >
                        Hello, <br /> My name is Mike and
                    </p> */}
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
                    // filter: 'grayscale(100%)',
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
            <FooterContainerFlex className="form-container">
                Thanks for connecting with me.
            </FooterContainerFlex>
        </AppContainer>
    );
};
export default App;
