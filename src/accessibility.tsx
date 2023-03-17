import { Link } from "react-router-dom";
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { HeaderFlex } from './components/layout/header-flex';
import { FooterContainerFlex } from './components/layout/footer-container-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import { Link as Links } from './components/elements/link';
import { links } from './utils/objects/links/links';
// import { Card } from './components/composed/card';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// import { Popup } from './components/composed/popup';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
import cypressOne from './images/cypress-axe-one.png';
import cypressTwo from './images/cypress-axe-two.png';


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
                    alignItems: 'center',
                    padding: '10rem 2.5rem',
                }}
            >
                <DivContainerFlex className="accessibility-examples-container" styleProps={{flexFlow: 'column'}}>
                    <Link to="/">Go home</Link>
                    <img src={cypressOne} alt="first image of cypress axe" style={{ width: '100%', marginBottom: '1rem' }}/>
                    <img src={cypressTwo} alt="second image of cypress axe" style={{ width: '100%', marginTop: '1rem' }}/>
                </DivContainerFlex>
            </SectionContainerFlex>
            <FooterContainerFlex className="footer-container" styleProps={{height: '100vh', backgroundColor: '#1a1a1a'}}>
                Thanks for connecting with me.
            </FooterContainerFlex>
        </AppContainer>
    );
};
export default App;
