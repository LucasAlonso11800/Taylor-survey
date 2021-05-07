import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import background from '../assets/background.jpg';
import { fearless, speakNow, red, nineteenEightyNine, reputation, lover, folklore, evermore, albums } from '../songs';

import Charts from '../components/Charts';
import UserChart from '../components/UserChart';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        background: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        minHeight: '82vh',
    },
    container: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        padding: '2em 0',
    }
}));

function Results() {
    const [userData, setUserData] = useState([]);
    const [fearlessData, setFearlessData] = useState([]);
    const [speakNowData, setSpeakNowData] = useState([]);
    const [redData, setRedData] = useState([]);
    const [nineteen89Data, setNineteen89Data] = useState([]);
    const [reputationData, setReputationData] = useState([]);
    const [loverData, setLoverData] = useState([]);
    const [folkloreData, setFolkloreData] = useState([]);
    const [evermoreData, setEvermoreData] = useState([]);
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        axios.get('https://taylor-survey.herokuapp.com/answer')
            .then(res => {
                res.data.forEach(answer => {
                    switch(answer.question){
                        case '2': setFearlessData(album => [...album, answer])
                            break
                        case '3': setSpeakNowData(album => [...album, answer])
                            break
                        case '4': setRedData(album => [...album, answer]);
                            break
                        case '5': setNineteen89Data(album => [...album, answer])
                            break
                        case '6': setReputationData(album => [...album, answer])
                            break
                        case '7': setLoverData(album => [...album, answer])
                            break
                        case '8': setFolkloreData(album => [...album, answer])
                            break
                        case '9': setEvermoreData(album => [...album, answer])
                            break
                        case '10': setAlbumData(album => [...album, answer])
                            break
                        default: return
                    }
                });
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        axios.get('https://taylor-survey.herokuapp.com/userData')
            .then(res => {
                setUserData(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <UserChart chartData={userData}/>
                <Charts chartData={fearlessData} songList={fearless} title={'Fearless'}/>
                <Charts chartData={speakNowData} songList={speakNow} title={'Speak Now'}/>
                <Charts chartData={redData} songList={red} title={'Red'}/>
                <Charts chartData={nineteen89Data} songList={nineteenEightyNine} title={'1989'}/>
                <Charts chartData={reputationData} songList={reputation} title={'Reputation'}/>
                <Charts chartData={loverData} songList={lover} title={'Lover'}/>
                <Charts chartData={folkloreData} songList={folklore} title={'folklore'}/>
                <Charts chartData={evermoreData} songList={evermore} title={'evermore'}/>
                <Charts chartData={albumData} songList={albums} title={'Albums'} album={true}/>
            </Container>
        </div>
    )
};

export default Results;