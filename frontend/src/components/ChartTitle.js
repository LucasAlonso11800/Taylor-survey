import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4em'
    },
    title: {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
        textDecoration: 'underline 2px #9a0036',
        margin: '0 2em'
    }
}));

function ChartTitle({ title, index, setIndex }) {
    const classes = useStyles();
    return (
        <Container className={classes.titleContainer}>
            {index > 0 ?
                <FaChevronCircleLeft
                    size={32}
                    onClick={() => setIndex(index - 1)}
                />
                : <></>}
            <Typography className={classes.title}>{title}</Typography>
            {index < 8 ?
                <FaChevronCircleRight
                    size={32}
                    onClick={() => setIndex(index + 1)} />
                : <></>}
        </Container>
    )
};

export default ChartTitle;
