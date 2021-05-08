import React, { useState } from 'react';
import { Paper, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Question from '../components/Question';
import background from '../assets/background.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '82vh',
        [theme.breakpoints.down('sm')]: {
            height: '95vh'
        },
        padding: '1em'
    },
    paper: {
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%'
        },
        margin: 'auto',
        background: 'rgba(255, 255, 255, 0.5)',
        padding: '1em'
    }
}));

function Survey() {
    const [questionId, setQuestionId] = useState(1)
    const zoom = true

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Zoom in={zoom}>
                <Paper className={classes.paper}>
                    <Question id={questionId} setId={setQuestionId}/>
                </Paper>
            </Zoom>
        </div>
    )
};

export default Survey
