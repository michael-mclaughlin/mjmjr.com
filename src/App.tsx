import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
import axios from 'axios';
import { Card } from './components/elements/card';
import { AppContainer } from './components/layout/app-container';
import { SectionContainerFlex } from './components/layout/section-container-flex';
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
            params: { s: 'Avengers Endgame', r: 'json', page: '1' },
            headers: {
                'X-RapidAPI-Key':
                    '3aa438caadmsh2c5c4513101ec61p17d727jsnfedea0cc8536',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
            },
        };

        const response = await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
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

    return (
        <AppContainer className="App">
            <SectionContainerFlex
                flexProps={{ flexFlow: 'row' }}
                className="user-container"
            >
                {userData?.Search.map((d, index) => {
                    return (
                        <Card
                            id={`${d.imdbID}-${index}`}
                            className="movie-card"
                            title={d.Title}
                            footerChildren={
                                <div>
                                    <div>{d.imdbID}</div>
                                    <div>{d.Year}</div>
                                </div>
                            }
                        >
                            {<img src={d.Poster} alt={d.Title} />}
                        </Card>
                    );
                })}
            </SectionContainerFlex>
        </AppContainer>
    );
};

export default App;
