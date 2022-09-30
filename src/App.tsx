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
import { Link } from './components/elements/link';
import { skills } from './utils/objects/skills/skills';
import { links } from './utils/objects/links/links';
import { Popup } from './components/composed/popup';
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
                        {links.map((link) => {
                            return (
                                <li className="contact-info-item">
                                    <Link
                                        href={link.href}
                                        className="contact-info-link"
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
            <SectionContainerFlex className="skills-container">
                <DivContainerFlex
                    className="inset-div"
                    styleProps={{
                        color: '#000000',
                        padding: '1rem',
                        width: '100%',
                        backgroundColor: '#ffffff',
                        alignItems: 'center',
                    }}
                >
                    <Grid
                        className="skills-grid"
                        styleProps={{
                            gridTemplateColumns: 'repeat(6, 1fr)',
                            width: '100%',
                            gap: '0.25rem',
                            height: '65vh',
                        }}
                    >
                        {skills.map((skill) => {
                            return (
                                <p className="skills-details-text">{skill}</p>
                            );
                        })}
                    </Grid>
                </DivContainerFlex>
            </SectionContainerFlex>
            <SectionContainerFlex
                styleProps={{
                    flexFlow: 'row wrap',
                    backgroundColor: '#000000',
                    padding: '4rem 1rem',
                    alignItems: 'center',
                }}
                className="grid-example-container"
            >
                <h2
                    style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        width: '100%',
                        fontSize: '2.5rem',
                    }}
                >
                    Retreving data from an api and displaying it to bowser
                </h2>
                <Grid
                    className="grid-container"
                    styleProps={{
                        width: '100%',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridTemplateRows: 'repeat(1, 1fr)',
                    }}
                >
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
            <SectionContainerFlex
                className="component-example-container"
                styleProps={{
                    backgroundColor: '#ffffff',
                    border: '1px sold red',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid
                    className="grid-container"
                    styleProps={{
                        width: '100%',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridTemplateRows: 'repeat(1, 1fr)',
                        margin: '0 6rem',
                    }}
                >
                    <Popup
                        openComponent={<div>Open</div>}
                        closeComponent={<div>Close</div>}
                        width="15rem"
                        position="bottom"
                        hasHeader={false}
                    >
                        <div style={{ width: 'fit-content' }}>
                            Content Goes here
                        </div>
                    </Popup>
                    <Popup
                        openComponent={<div>Open</div>}
                        closeComponent={<div>Close</div>}
                        width="15rem"
                        position="left"
                        hasHeader={true}
                        query="Title goes here"
                    >
                        <div style={{ width: 'fit-content' }}>
                            Content Goes here
                        </div>
                    </Popup>
                </Grid>
            </SectionContainerFlex>
            <FooterContainerFlex className="form-container">
                Thanks for connecting with me.
            </FooterContainerFlex>
        </AppContainer>
    );
};
export default App;
