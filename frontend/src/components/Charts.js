import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';


function Charts({ chartData, songList, title, album }) {
    const useStyles = makeStyles((theme) => ({
        title: {
            textAlign: 'center',
            fontSize: '1.375rem',
            fontWeight: 'bold',
            color: theme.palette.secondary.dark,
            textDecoration: 'underline 2px #9a0036',
            margin: '1em 0'
        },
        gridContainer: {
            paddingBottom: '2em',
            borderBottom: album ? '' : '2px solid #9a0036',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'space-around',
            }
        }
    }));

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
    let favouriteChartData = {};
    let worstChartData = {};
    let underratedChartData = {};
    let fridayChartData = {};
    let sundayChartData = {};

    function generateDatasets(arr, str){
        return (
            {
                labels: songList,
                datasets: [
                    {
                        label: `Most voted ${str} songs`,
                        data: arr,
                        borderColor: '#69b2db'
                    }
                ]
            }
        )
    }

    (function createCharts() {
        favouriteChartData = generateDatasets(favourites, 'favourite')
        worstChartData = generateDatasets(worst, 'worst');
        underratedChartData = generateDatasets(underrated, 'underrated');
        fridayChartData = generateDatasets(friday, 'friday');
        sundayChartData = generateDatasets(sunday, 'sunday');
    })();

    const classes = useStyles();

    function generateOptions(str){
        return (
            {
                plugins: {
                    title: {
                        display: true,
                        text: album ? `${str} albums` : `${str} songs`,
                        position: 'top',
                        align: 'center',
                        color: '#9a0036',
                        font: {
                            size: '14px'
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        )
    }

    return (
        <>
            <Typography className={classes.title}>
                {title}
            </Typography>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={favouriteChartData}
                        options={generateOptions('Favourite')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={worstChartData}
                        options={generateOptions('Worst')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={underratedChartData}
                        options={generateOptions('Underrated')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={fridayChartData}
                        options={generateOptions('Friday')}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Doughnut
                        data={sundayChartData}
                        options={generateOptions('Sunday')}
                    />
                </Grid>
            </Grid>
        </>
    )
};

export default Charts;