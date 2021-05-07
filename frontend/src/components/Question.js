import React, { useState } from 'react';
import axios from 'axios';
import { Button, FormGroup, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { fearless, speakNow, red, nineteenEightyNine, reputation, lover, folklore, evermore, albums, countries } from '../songs';
import QuestionsSet from './QuestionsSet';

const useStyles = makeStyles(() => ({
    title: {
        textAlign: 'center',
        fontSize: '1.375rem',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#69b2db',
    },
    alert: {
        margin: '1em 0'
    },
    label: {
        color: '#69b2db',
        margin: '0.5em 0'
    },
    button: {
        marginTop: '1em',
        color: '#69b2db',
        fontWeight: 'bold'
    }
}));

function Question({ id, setId }) {
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [favourite, setFavourite] = useState('');
    const [worst, setWorst] = useState('');
    const [underrated, setUnderrated] = useState('');
    const [friday, setFriday] = useState('');
    const [sunday, setSunday] = useState('');
    const [error, setError] = useState(false);

    const classes = useStyles();

    function handleSubmit(e) {
        e.preventDefault();

        if (id === 1) {
            axios.post('https://taylor-survey.herokuapp.com/userData', { age, country })
                .then(res => {
                    console.log(res.data)
                    setError(false)
                    setId(id + 1)
                })
                .catch(err => { if (err) setError(true) })
        }
        else if (id > 1 && id < 10) {
            axios.post('https://taylor-survey.herokuapp.com/nswer', {
                question: id, favourite, worst, underrated, friday, sunday
            })
                .then(res => {
                    console.log(res.data)
                    setFavourite('')
                    setWorst('')
                    setUnderrated('')
                    setFriday('')
                    setSunday('')
                    setError(false)
                    setId(id + 1)
                })
                .catch(err => { if (err) setError(true) })
        }
        else {
            axios.post('https://taylor-backend.herokuapp.com/answer', {
                question: id, favourite, worst, underrated, friday, sunday
            })
                .then(res => {
                    console.log(res.data)
                    setFavourite('')
                    setWorst('')
                    setUnderrated('')
                    setFriday('')
                    setSunday('')
                    setError(false)
                    window.location = '/results'
                })
                .catch(err => { if (err) setError(true) })
        }
    };

    return (
        <FormGroup>
            <Typography className={classes.title}>Question {id}</Typography>
            {error ?
                <Alert severity="error" className={classes.alert}>
                    <AlertTitle>Missing answers</AlertTitle>
                    Please answer every question
                </Alert>
                : <> </>}

            {id === 1 ?
                <>
                    <InputLabel htmlFor='age' className={classes.label}>Select your age</InputLabel>
                    <Select inputProps={{ id: 'age' }} value={age} onChange={e => setAge(e.target.value)} required>
                        <MenuItem value={'< 18'}>Minor than 18</MenuItem>
                        <MenuItem value={'18-25'}>18 - 25</MenuItem>
                        <MenuItem value={'25-35'}>25 - 35</MenuItem>
                        <MenuItem value={'35-50'}>35 - 50</MenuItem>
                        <MenuItem value={'> 50'}>Older than 50</MenuItem>
                    </Select>
                    <InputLabel htmlFor='country' className={classes.label}>Select your country</InputLabel>
                    <Select inputProps={{ id: 'country' }} value={country} onChange={e => setCountry(e.target.value)} required>
                        {countries.map(country => {
                            return <MenuItem value={country} key={country}>{country}</MenuItem>
                        })}
                    </Select>
                </>
                : id === 2 ?
                    <QuestionsSet
                        album='Fearless song'
                        songArray={fearless}
                        favourite={favourite}
                        setFavourite={setFavourite}
                        worst={worst}
                        setWorst={setWorst}
                        underrated={underrated}
                        setUnderrated={setUnderrated}
                        friday={friday}
                        setFriday={setFriday}
                        sunday={sunday}
                        setSunday={setSunday}
                    />
                    : id === 3 ?
                        <QuestionsSet
                            album='Speak Now song'
                            songArray={speakNow}
                            favourite={favourite}
                            setFavourite={setFavourite}
                            worst={worst}
                            setWorst={setWorst}
                            underrated={underrated}
                            setUnderrated={setUnderrated}
                            friday={friday}
                            setFriday={setFriday}
                            sunday={sunday}
                            setSunday={setSunday}
                        />
                        : id === 4 ?
                            <QuestionsSet
                                album='Red song'
                                songArray={red}
                                favourite={favourite}
                                setFavourite={setFavourite}
                                worst={worst}
                                setWorst={setWorst}
                                underrated={underrated}
                                setUnderrated={setUnderrated}
                                friday={friday}
                                setFriday={setFriday}
                                sunday={sunday}
                                setSunday={setSunday}
                            />
                            : id === 5 ?
                                <QuestionsSet
                                    album='1989 song'
                                    songArray={nineteenEightyNine}
                                    favourite={favourite}
                                    setFavourite={setFavourite}
                                    worst={worst}
                                    setWorst={setWorst}
                                    underrated={underrated}
                                    setUnderrated={setUnderrated}
                                    friday={friday}
                                    setFriday={setFriday}
                                    sunday={sunday}
                                    setSunday={setSunday}
                                />
                                : id === 6 ?
                                    <QuestionsSet
                                        album='Reputation song'
                                        songArray={reputation}
                                        favourite={favourite}
                                        setFavourite={setFavourite}
                                        worst={worst}
                                        setWorst={setWorst}
                                        underrated={underrated}
                                        setUnderrated={setUnderrated}
                                        friday={friday}
                                        setFriday={setFriday}
                                        sunday={sunday}
                                        setSunday={setSunday}
                                    />
                                    : id === 7 ?
                                        <QuestionsSet
                                            album='Lover song'
                                            songArray={lover}
                                            favourite={favourite}
                                            setFavourite={setFavourite}
                                            worst={worst}
                                            setWorst={setWorst}
                                            underrated={underrated}
                                            setUnderrated={setUnderrated}
                                            friday={friday}
                                            setFriday={setFriday}
                                            sunday={sunday}
                                            setSunday={setSunday}
                                        />
                                        : id === 8 ?
                                            <QuestionsSet
                                                album='Folklore song'
                                                songArray={folklore}
                                                favourite={favourite}
                                                setFavourite={setFavourite}
                                                worst={worst}
                                                setWorst={setWorst}
                                                underrated={underrated}
                                                setUnderrated={setUnderrated}
                                                friday={friday}
                                                setFriday={setFriday}
                                                sunday={sunday}
                                                setSunday={setSunday}
                                            />
                                            : id === 9 ?
                                                <QuestionsSet
                                                    album='Evermore song'
                                                    songArray={evermore}
                                                    favourite={favourite}
                                                    setFavourite={setFavourite}
                                                    worst={worst}
                                                    setWorst={setWorst}
                                                    underrated={underrated}
                                                    setUnderrated={setUnderrated}
                                                    friday={friday}
                                                    setFriday={setFriday}
                                                    sunday={sunday}
                                                    setSunday={setSunday}
                                                />
                                                : id === 10 ?
                                                    <QuestionsSet
                                                        album="Taylor's album"
                                                        songArray={albums}
                                                        favourite={favourite}
                                                        setFavourite={setFavourite}
                                                        worst={worst}
                                                        setWorst={setWorst}
                                                        underrated={underrated}
                                                        setUnderrated={setUnderrated}
                                                        friday={friday}
                                                        setFriday={setFriday}
                                                        sunday={sunday}
                                                        setSunday={setSunday}
                                                    />
                                                    : <></>
            }
            <Button type='button' onClick={handleSubmit} className={classes.button}>Send answer</Button>
        </FormGroup>
    )
};

export default Question;
