<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto/auto.js';

    export let prices;

    let chartshow;
    const data = {
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
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            borderRadius: '30',
            responsive: true,
            cutout: '25%',
            spacing: 2,
            plugins: {
                legend: {
                    position: 'false',
                    display: true,
                    labels: {
                        usePointStyle: false,
                        padding: 5,
                        font: {
                            size: 10
                        }
                    }
                },
                title: {
                    display: true,
                    text: prices.title
                }
            }
        }
    };
    for (let price of prices.prices) {
        const date = new Date(Number(price[0]));
        const hour = date.getHours();
        const minute = date.getMinutes();
        data.labels.push(`${hour}:${minute}`);
        data.datasets[0].data.push(Number(price[1]));        
    }
    onMount(()=> {
        const ctx = chartshow.getContext('2d');
        var myChart = new Chart(ctx, config);
    })
    
</script>

<h2 class="ml-4 mt-8">Price Chart (30 mins)</h2>
<div class="max-w-3xl border rounded-lg ml-4 mt-2">
    <canvas bind:this={chartshow} class="px-8 py-4"/>
</div>
