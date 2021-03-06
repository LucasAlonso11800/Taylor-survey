import React from 'react';
import { Grid } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { generateOptions, generateDatasets } from './Functions';
import ChartTitle from './ChartTitle';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingBottom: '2em',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-around',
        }
    }
}));

function Charts({ chartData, songList, title, album, index, setIndex }) {
    const favourites = new Array(songList.length).fill(0);
    const worst = new Array(songList.length).fill(0);
    const underrated = new Array(songList.length).fill(0);
    const friday = new Array(songList.length).fill(0);
    const sunday = new Array(songList.length).fill(0);

    for (let i = 0; i < chartData.length; i++) {
        songList.forEach((song, index) => {
            switch (song) {
                case chartData[i].favourite: favourites[index]++
                    break
                case chartData[i].worst: worst[index]++
                    break
                case chartData[i].underrated: underrated[index]++
                    break
                case chartData[i].friday: friday[index]++
                    break
                case chartData[i].sunday: sunday[index]++
                    break
                default: return
            }
        })
    };

    const classes = useStyles();

    return (
        <>
            <ChartTitle title={title} index={index} setIndex={setIndex} />
            <Grid container className={classes.gridContainer}>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={generateDatasets(songList, favourites, 'favourite')}
                        options={generateOptions(album, 'Favourite')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={generateDatasets(songList, worst, 'worst')}
                        options={generateOptions(album, 'Worst')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={generateDatasets(songList, underrated, 'underrated')}
                        options={generateOptions(album, 'Underrated')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={generateDatasets(songList, friday, 'friday')}
                        options={generateOptions(album, 'Friday')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={generateDatasets(songList, sunday, 'sunday')}
                        options={generateOptions(album, 'Sunday')}
                    />
                </Grid>
            </Grid>
        </>
    )
};

export default Charts;