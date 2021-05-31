import React, { useState } from 'react';
import { Button, FormGroup, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { answerQuestion } from './Functions';

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
        const isFirstQuestion = id === 1;
        const isMiddleQuestion = id > 1 && id < 10;
        const isLastQuestion = id === 10;

        if (isFirstQuestion) {
            (async function axiosPostAnswer() {
                const data = await answerQuestion('userData', { age, country });
                if (data.isAxiosError) return setError(true);

                setError(false);
                setId(id + 1)
            })();
        };

        if (isMiddleQuestion) {
            (async function axiosPostAnswer() {
                const data = await answerQuestion('answer', { question: id, favourite, worst, underrated, friday, sunday });
                if (data.isAxiosError) return setError(true);

                setFavourite('')
                setWorst('')
                setUnderrated('')
                setFriday('')
                setSunday('')
                setError(false)
                setId(id + 1)
            })();
        };

        if (isLastQuestion) {
            (async function axiosPostAnswer() {
                const data = await answerQuestion('answer', { question: id, favourite, worst, underrated, friday, sunday });
                if (data.isAxiosError) return setError(true);

                setFavourite('')
                setWorst('')
                setUnderrated('')
                setFriday('')
                setSunday('')
                setError(false)
                window.location = '/results'
            })();
        };
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
                :
                <QuestionsSet
                    album={id === 2 ? 'Fearless song' :
                        id === 3 ? 'Speak Now song' :
                            id === 4 ? 'Red song' :
                                id === 5 ? '1989 song' :
                                    id === 6 ? 'Reputation song' :
                                        id === 7 ? 'Lover song' :
                                            id === 8 ? 'Folklore song' :
                                                id === 9 ? 'Evermore song' :
                                                    id === 10 ? "Taylor's album" : <></>}
                    songArray={id === 2 ? fearless :
                        id === 3 ? speakNow :
                            id === 4 ? red :
                                id === 5 ? nineteenEightyNine :
                                    id === 6 ? reputation :
                                        id === 7 ? lover :
                                            id === 8 ? folklore :
                                                id === 9 ? evermore :
                                                    id === 10 ? albums : <></>}
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
            }
            <Button type='button' onClick={handleSubmit} className={classes.button}>Send answer</Button>
        </FormGroup>
    )
};

export default Question;