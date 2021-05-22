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
        padding: '2em 1em',
    }
}));

function Results() {
    const [index, setIndex] = useState(0);
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

    const chartsArray = [
        <Charts chartData={fearlessData} songList={fearless} title={'Fearless'} index={index} setIndex={setIndex} />,
        <Charts chartData={speakNowData} songList={speakNow} title={'Speak Now'} index={index} setIndex={setIndex} />,
        <Charts chartData={redData} songList={red} title={'Red'} index={index} setIndex={setIndex} />,
        <Charts chartData={nineteen89Data} songList={nineteenEightyNine} title={'1989'} index={index} setIndex={setIndex} />,
        <Charts chartData={reputationData} songList={reputation} title={'Reputation'} index={index} setIndex={setIndex} />,
        <Charts chartData={loverData} songList={lover} title={'Lover'} index={index} setIndex={setIndex} />,
        <Charts chartData={folkloreData} songList={folklore} title={'folklore'} index={index} setIndex={setIndex} />,
        <Charts chartData={evermoreData} songList={evermore} title={'evermore'} index={index} setIndex={setIndex} />,
        <Charts chartData={albumData} songList={albums} title={'Albums'} album={true} index={index} setIndex={setIndex} />
    ];

    // GETTING ALBUM DATA
    useEffect(() => {
        axios.get('https://taylor-survey.herokuapp.com/answer')
            .then(res => {
                const newFearlessData = [];
                const newSpeakNowData = [];
                const newRedData = [];
                const newNineteen89Data = [];
                const newReputationData = [];
                const newLoverData = [];
                const newFolkloreData = [];
                const newEvermoreData = [];
                const newAlbumData = [];

                res.data.forEach(answer => {
                    switch (answer.question) {
                        case '2': newFearlessData.push(answer)
                            break
                        case '3': newSpeakNowData.push(answer)
                            break
                        case '4': newRedData.push(answer)
                            break
                        case '5': newNineteen89Data.push(answer)
                            break
                        case '6': newReputationData.push(answer)
                            break
                        case '7': newLoverData.push(answer)
                            break
                        case '8': newFolkloreData.push(answer)
                            break
                        case '9': newEvermoreData.push(answer)
                            break
                        case '10': newAlbumData.push(answer)
                            break
                        default: return
                    }
                });

                setFearlessData(newFearlessData)
                setSpeakNowData(newSpeakNowData)
                setRedData(newRedData)
                setNineteen89Data(newNineteen89Data)
                setReputationData(newReputationData)
                setLoverData(newLoverData)
                setFolkloreData(newFolkloreData)
                setEvermoreData(newEvermoreData)
                setAlbumData(newAlbumData)
            })
            .catch(err => console.log(err))
    }, []);

    // GETTING USER DATA
    useEffect(() => {
        axios.get('https://taylor-survey.herokuapp.com/userData')
            .then(res => setUserData(res.data))
            .catch(err => console.log(err))
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <UserChart chartData={userData} />
                {chartsArray[index]}
            </Container>
        </div>
    )
};

export default Results;