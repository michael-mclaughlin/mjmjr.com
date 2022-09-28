import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/composed/card';
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { Image } from './components/elements/image';
import { Grid } from './components/layout/grid-container';
import { HeaderFlex } from './components/layout/header-flex';
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
            params: { s: 'string', r: 'json', page: '1' },
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
                    justifyContent: 'space-between',
                }}
            >
                <div className="logo-heading-container">
                    <h1
                        style={{
                            color: '#ffffff',
                            margin: 0,
                            padding: 0,
                            fontSize: '1.5rem',
                            letterSpacing: '1px',
                        }}
                    >
                        mjmjr
                    </h1>
                    <p
                        className="heading-description"
                        style={{ color: '#ffffff' }}
                    >
                        A custom portfolio of frontend development and design
                        work
                    </p>
                </div>
                <div className="contact-info-container">
                    <ul className="contact-info-list">
                        <li className="contact-info-item">Mike Mclaughlin</li>
                        <li className="contact-info-item">
                            mjmjr@fastmail.com
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
                styleProps={{ flexFlow: 'row wrap' }}
                className="grid-example-container"
            >
                <Grid className="grid-container">
                    {userData?.Search.map((d, index) => {
                        return (
                            <Card
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
        </AppContainer>
    );
};
export default App;
