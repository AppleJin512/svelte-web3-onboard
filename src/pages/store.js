import { writable } from 'svelte/store';

export const txnsValue = new writable({
    timestamp: '',
    txns: [],
});


export const chartdata = new writable({
    labels: [],
    datasets: [
        {
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: ['#00b0e8'],
            tension: 0.1,
            borderWidth: 2
        }
    ]
});

