export const getPriceData = async () => {

	const to_time = Number(new Date()) / 1000;
	const from_time = to_time - 2000;
	
	try {
		const response = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${from_time.toFixed(0)}&to=${to_time.toFixed(0)}`)
			.then(res => {
				return res.json();
			})
		//console.log("response", response);
		return response;
	} catch (error) {
		console.error(error);
	}
} 

export const getLatestTxns = async () => {
	
	try {
		const last_block_no = await fetch(`https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=9KCYFK17ITAW47V5EZY4ZUH1M1Q8B3DJX6`)
			.then(res => {
				return res.json();
			})
		
		const response = await fetch(`https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${last_block_no.result}&boolean=true&apikey=9KCYFK17ITAW47V5EZY4ZUH1M1Q8B3DJX6`)
		 	.then(res => {
		 		return res.json();
		 	})
	
			let result = {
				timestamp: '',
				txns: [],
			};
			result.timestamp = response.result.timestamp;
			result.txns = response.result.transactions.slice(-5);
		
			return result;

	} catch (error) {
		console.log(error);
	}
}