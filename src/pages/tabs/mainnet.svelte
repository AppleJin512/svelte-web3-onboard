<script>
	import { onMount } from "svelte";
	import CanvasChart from "../components/CanvasChart.svelte";
	import TxnTable from "../components/TxnTable.svelte";
	import { getPriceData, getLatestTxns } from "../../api/mainnet"; // import our mainnet api calls
	
	let ether = {
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
		ether.prices = resPrice.prices;
		ether.title = '(Ethereum) ETHER PRICE';
		const resTxns = await getLatestTxns();
		txnsValue.timestamp = resTxns.timestamp;
		txnsValue.txns = resTxns.txns;
		isLoading = false;
	});
</script>
{#if isLoading}
	<p class="ml-4 mt-4">waiting...</p>
{:else}
	<CanvasChart prices={ether} />
	<TxnTable data={txnsValue} />
{/if}