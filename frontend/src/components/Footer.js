import React from 'react';
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
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography className={classes.quote}>
                'I see sparks fly whenever you smile'
            </Typography>
            <Typography className={classes.author}>
                Taylor Swift
            </Typography>
        </Paper>
    )
};

export default Footer;
