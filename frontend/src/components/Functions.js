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