import React from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    label: {
        marginTop: '1em',
        marginBottom: '0.5em',
        color: '#69b2db'
    },
    select: {
        margin: '0 1em'
    }
}))

function QuestionsSet({ album, songArray, favourite, setFavourite, worst, setWorst, underrated, setUnderrated, friday, setFriday, sunday, setSunday }) {
    const classes = useStyles();
    return (
        <>
            <InputLabel htmlFor='favourite' className={classes.label}>1) What's your favourite {album}?</InputLabel>
            <Select inputProps={{ id: 'favourite' }} value={favourite} onChange={e => setFavourite(e.target.value)} className={classes.select}>
                {songArray.map(song => {
                    return <MenuItem value={song} key={song}>{song}</MenuItem>
                })}
            </Select>
            <InputLabel htmlFor='worst' className={classes.label}>2) What's the worst {album}?</InputLabel>
            <Select inputProps={{ id: 'worst' }} value={worst} onChange={e => setWorst(e.target.value)} className={classes.select}>
                {songArray.map(song => {
                    return <MenuItem value={song} key={song}>{song}</MenuItem>
                })}
            </Select>
            <InputLabel htmlFor='underrated' className={classes.label}>3) What's the most underrated {album}?</InputLabel>
            <Select inputProps={{ id: 'underrated' }} value={underrated} onChange={e => setUnderrated(e.target.value)} className={classes.select}>
                {songArray.map(song => {
                    return <MenuItem value={song} key={song}>{song}</MenuItem>
                })}
            </Select>
            <InputLabel htmlFor='friday' className={classes.label}>4) What's the best {album} for a Friday/Saturday night?</InputLabel>
            <Select inputProps={{ id: 'friday' }} value={friday} onChange={e => setFriday(e.target.value)} className={classes.select}>
                {songArray.map(song => {
                    return <MenuItem value={song} key={song}>{song}</MenuItem>
                })}
            </Select>
            <InputLabel htmlFor='sunday' className={classes.label}>5) What's the best {album} for a Sunday afternoon?</InputLabel>
            <Select inputProps={{ id: 'sunday' }} value={sunday} onChange={e => setSunday(e.target.value)} className={classes.select}>
                {songArray.map(song => {
                    return <MenuItem value={song} key={song}>{song}</MenuItem>
                })}
            </Select>
        </>
    )
}

export default QuestionsSet
