import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/composed/card';
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { Image } from './components/elements/image';
import { Grid } from './components/layout/grid-container';
import { HeaderFlex } from './components/layout/header-flex';
import { FooterContainerFlex } from './components/layout/footer-container-flex';
import { DivContainerFlex } from './components/layout/div-container-flex';
import './scss/App.scss';

interface Data {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
interface AllData {
    Search: Array<Data>;
    totalResults: number;
}
const App = () => {
    const [userData, setUserData] = useState<AllData>();
    const getInfoWithAxios = async () => {
        const options = {
            method: 'GET',
            url: 'https://movie-database-alternative.p.rapidapi.com/',
            params: { s: 'movie', r: 'json', page: '1' },
            headers: {
                'X-RapidAPI-Key':
                    '3aa438caadmsh2c5c4513101ec61p17d727jsnfedea0cc8536',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
            },
        };

        const response = await axios
            .request(options)
            .then(function (response) {
                setUserData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        return response;
    };
    useEffect(() => {
        getInfoWithAxios();
    }, []);

    console.log('userData', userData);

    const poster = userData?.Search.map((d) => d.Poster);
    const posterArray = poster || [];
    const posterNAArray: string[] = [];
    const findNAPoster = () => {
        for (let i = 0; i < posterArray.length; i++) {
            if (posterArray[i] === 'N/A') {
                posterNAArray.push(posterArray[i]);
            }
        }
    };
    findNAPoster();
    const notAvailable = posterNAArray.find((img) => img);
    return (
        <AppContainer className="App">
            <HeaderFlex
                className="app-header"
                styleProps={{
                    backgroundColor: '#000000',
                    padding: '1rem',
                    height: '2rem',
                    justifyContent: 'space-between',
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
                        <li className="contact-info-item">
                            <a
                                href="javascript:void(
                                        window.open(
                                        'https://form.jotform.com/222714074095151',
                                        'blank',
                                        'scrollbars=yes,
                                        toolbar=no,
                                        width=700,
                                        height=500,
                                        margin=auto'
                                        )
                                    )
                                    "
                                className="contact-info-link"
                            >
                                Email
                            </a>
                        </li>
                        <li className="contact-info-item">
                            <a
                                href="https://github.com/michael-mclaughlin"
                                className="contact-info-link"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </HeaderFlex>
            <SectionContainerFlex
                className="hero-container"
                styleProps={{
                    backgroundColor: '#000000',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    <h2
                        style={{
                            color: '#ffffff',
                            margin: 0,
                            padding: 0,
                            fontSize: '5rem',
                        }}
                    >
                        Design Technologist
                    </h2>
                </div>
            </SectionContainerFlex>
            <SectionContainerFlex className="introduction-container">
                <DivContainerFlex
                    className="inset-div"
                    styleProps={{
                        flexFlow: 'row wrap',
                        color: '#000000',
                        padding: '1rem',
                        width: '100%',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <p
                        style={{
                            margin: '0.5rem 0',
                        }}
                        className="introduction-details-text"
                    >
                        UX Design
                    </p>

                    <p
                        style={{
                            margin: '0.5rem 0',
                        }}
                        className="introduction-details-text"
                    >
                        UX Development
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        Visual design
                    </p>

                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        CCP(AWS)
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        React
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        TypeScript
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        Javascript
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        jQuery
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        SCSS
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        Styled Components
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        Sketch
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        Adobe Creative Suite
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        Cypress.io
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        AxeCore
                    </p>
                    <p
                        style={{
                            margin: '0.5rem 0',
                            fontFamily: 'Verdana',
                        }}
                        className="introduction-details-text"
                    >
                        Pally
                    </p>
                </DivContainerFlex>
            </SectionContainerFlex>
            <SectionContainerFlex
                styleProps={{
                    flexFlow: 'row wrap',
                    backgroundColor: '#003971',
                    padding: '1rem',
                }}
                className="grid-example-container"
            >
                <h2 style={{ color: '#ff0060' }}>
                    Retreving data from an api and displaying it to bowser
                </h2>
                <Grid className="grid-container" styleProps={{ width: '100%' }}>
                    {userData?.Search.map((d, index) => {
                        return (
                            <Card
                                key={`${d.imdbID}-${index}`}
                                id={`${d.imdbID}-${index}`}
                                className="movie-card"
                                title={d.Title}
                                headingSize="1rem"
                                footerChildren={
                                    <div className="metadata-container">
                                        <div>{d.imdbID}</div>
                                        <div>{d.Year}</div>
                                        <div>{d.Type}</div>
                                    </div>
                                }
                            >
                                {d.Poster === notAvailable ? (
                                    'No data avaliable'
                                ) : (
                                    <Image
                                        src={d.Poster}
                                        alt={d.Title}
                                        width="6.25rem"
                                    />
                                )}
                            </Card>
                        );
                    })}
                </Grid>
            </SectionContainerFlex>
            <FooterContainerFlex className="form-container">
                Thanks for connecting with me.
            </FooterContainerFlex>
        </AppContainer>
    );
};
export default App;
