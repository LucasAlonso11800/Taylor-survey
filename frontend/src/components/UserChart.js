import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { countries } from '../songs';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        fontSize: '1.375rem',
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
        textDecoration: 'underline 2px #9a0036',
    }
}))

function UserChart({ chartData }) {
    const ageLabels = ['< 18', '18-25', '25-35', '35-50', '> 50'];
    const ageVotes = new Array(ageLabels.length).fill(0);

    const countryVotes = new Array(countries.length).fill(0);

    for (let i = 0; i < chartData.length; i++) {
        ageLabels.forEach((label, index) => {
            if (label === chartData[i].age) ageVotes[index]++;
        });
        countries.forEach((label, index) => {
            if (label === chartData[i].country) countryVotes[index]++;
        });
    };

    const indexOfFilteredCountries = [];
    const filteredCountryVote = [];

    countryVotes.forEach((country, index) => {
        if (country > 0) {
            indexOfFilteredCountries.push(index)
            filteredCountryVote.push(country)
        }
    });

    const filteredCountryList = [];
    for (let i = 0; i < indexOfFilteredCountries.length; i++) {
        countries.forEach((country, index) => {
            if (index === indexOfFilteredCountries[i]) {
                filteredCountryList.push(country);
            }
        })
    };

    const max = Math.max(...filteredCountryVote);
    const maxIndex = filteredCountryVote.indexOf(max);

    const USA = filteredCountryList.splice(maxIndex, 1);
    const usaVote = filteredCountryVote.splice(maxIndex, 1);

    let ageChartData = {};
    let countryChartData = {};
    let usaChartData = {};

    (function createChart() {
        ageChartData = {
            labels: ageLabels,
            datasets: [
                {
                    label: 'People in this range',
                    data: ageVotes,
                    backgroundColor: '#69b2db'
                }
            ]
        };
        countryChartData = {
            labels: filteredCountryList,
            datasets: [
                {
                    label: 'People from this country',
                    data: filteredCountryVote,
                    backgroundColor: '#69b2db',
                    indexAxis: 'y'
                }
            ]
        };
        usaChartData = {
            labels: [USA],
            datasets: [
                {
                    label: 'People from the USA',
                    data: usaVote,
                    backgroundColor: '#69b2db'
                }
            ]
        };
    })();

    const classes = useStyles();

    return (
        <>
            <Typography className={classes.title}>
                Ages & countrys
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <Bar
                        data={countryChartData}
                        options={{
                            maintainAspectRatio: false,
                            animation: false
                        }}
                    />
                </Grid>
                <Grid item xs={6} container>
                    <Grid item xs={12}>
                        <Bar
                            data={usaChartData}
                            options={{
                                maintainAspectRatio: false,
                                animation: false
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Bar
                            data={ageChartData}
                            options={{
                                maintainAspectRatio: false,
                                animation: false
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default UserChart;
