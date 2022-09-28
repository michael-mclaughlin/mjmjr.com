import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
import axios from 'axios';
import { Card } from './components/elements/card';
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
import { Image } from './components/elements/image';
import { Grid } from './components/layout/grid-container';
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
            <SectionContainerFlex
                styleProps={{ flexFlow: 'row wrap' }}
                className="user-container"
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
