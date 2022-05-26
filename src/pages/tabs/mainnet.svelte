<script>
	import { onDestroy, onMount } from "svelte";
	import Chart from 'chart.js/auto/auto.js';
	
	import { txnsValue, chartdata } from './../store.js';
		
	import TxnTable from "../components/TxnTable.svelte";
	import { getPriceData, getLatestTxns } from "../../api/mainnet"; 

	$: config = {
        type: 'line',
        data: $chartdata,
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
                    text: '(Ethereum) ETHER PRICE'
                }
            }
        }
    };
	var chart = null;
	const get_chart = async () => {	
			
		const resPrice = await getPriceData();
		if (resPrice == null) return;

		$chartdata.labels = [];
		$chartdata.datasets[0].data = [];

		for (let i in resPrice.prices) {
            const date = new Date(Number(resPrice.prices[i][0]));
            const hour = date.getHours();
            const minute = date.getMinutes();
			$chartdata.labels[i] = `${hour}:${minute}`;
            $chartdata.datasets[0].data[i] = Number(resPrice.prices[i][1]); 
        }
		
		var ctx ="mainnet";
		if (chart) chart.destroy();	
		chart = new Chart(ctx, config);
		
	}

	const get_txns = async () => {
		const resTxns = await getLatestTxns();
		if (resTxns == null) return;
		$txnsValue.timestamp = '';
		$txnsValue.txns = [];
		$txnsValue.timestamp = resTxns.timestamp;
		$txnsValue.txns = resTxns.txns;
	}

	let chart_interval;
	let txns_interval;
	
	onMount(() => {
		get_chart();
		chart_interval = setInterval(get_chart, 30000);		
		get_txns();
		txns_interval = setInterval(get_txns, 5000);		
	});

	onDestroy(() => { 
		clearInterval(chart_interval);
		clearInterval(txns_interval);
	});

</script>

<h2 class="ml-4 mt-8">Price Chart (30 mins)</h2>
<div class="max-w-3xl border rounded-lg ml-4 mt-2">
	<canvas id="mainnet" class="px-8 py-4"/>
</div>

<TxnTable/>
	