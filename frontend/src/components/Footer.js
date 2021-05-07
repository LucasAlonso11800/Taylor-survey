import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.dark,
        padding: '0.5em',
        borderRadius: '0'
    },
    quote: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#ffffff'
    },
    author: {
        textAlign: 'center',
        color: '#ffffff'
    }
}));

function Footer() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        axios.get('https://api.taylor.rest/')
            .then(res => {
                setQuote(res.data.quote)
                setAuthor(res.data.author)
            })
            .catch(err => console.log(err))
    }, []);

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography className={classes.quote}>
                '{quote}'
            </Typography>
            <Typography className={classes.author}>
                {author}
            </Typography>
        </Paper>
    )
};

export default Footer;
