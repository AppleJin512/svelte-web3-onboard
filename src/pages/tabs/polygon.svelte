<script>
	import { onMount } from "svelte";
	import TxnTable from "../components/TxnTable.svelte";
	import { getPriceData, getLatestTxns } from "../../api/polygon"; // import our mainnet api calls
	import CanvasChart from "../components/CanvasChart.svelte";
	
	let matic = {
		prices:	[],
		title: '',
	};

	let txnsValue = {
	 	timestamp: '',
	 	txns: [],
	};
	let isLoading = true;

	onMount(async () => {
		const resPrice = await getPriceData();
		matic.prices = resPrice.prices;
		matic.title = '(Polygon) MATIC PRICE';
		const resTxns = await getLatestTxns();
		txnsValue.timestamp = resTxns.timestamp;
		txnsValue.txns = resTxns.txns;
		isLoading = false;
	});
	
</script>
{#if isLoading}
	<p class="ml-4 mt-4">waiting...</p>
{:else}
	<CanvasChart prices={matic} />
	<TxnTable data={txnsValue} />
{/if}