import axios from 'axios';

export function generateDatasets(labels, arr, str) {
    return ({
        labels: labels,
        datasets: [
            {
                label: `Most voted ${str} songs`,
                data: arr,
                borderColor: '#69b2db'
            }]
    })
};

export function generateOptions(isAlbum, str) {
    return ({
        animation: false,
        plugins: {
            title: {
                display: true,
                text: isAlbum ? `${str} albums` : `${str} songs`,
                position: 'top',
                align: 'center',
                color: '#9a0036',
                font: {
                    size: '14px'
                }
            },
            legend: { display: false }
        }
    })
};

export async function getData(endpoint) {
    try {
        const result = await axios.get(`https://taylor-survey.herokuapp.com/${endpoint}`)
        return result.data
    }
    catch (err) {
        throw err;
    }
};

export async function answerQuestion(endpoint, postData) {
    try {
        const result = await axios.post(`http://localhost:5000/${endpoint}`, postData )
        return result.data
    }
    catch (err) {
        return err;
    }
};