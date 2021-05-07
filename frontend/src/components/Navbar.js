import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.dark,
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        padding: '1.25em'
    },
    link: {
        textDecoration: 'none',
        fontSize: '1rem',
        color: '#ffffff'
    }
}));

function Navbar() {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <Button className={classes.button}>
                    <Link to='/' className={classes.link}>Taylor Swift Survey</Link>
                </Button>
                <Button className={classes.button}>
                    <Link to='/results' className={classes.link}>See results</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;
