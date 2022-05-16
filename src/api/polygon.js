export const getPriceData = async () => {
	
	const to_time = (Number(new Date()) / 1000).toFixed(0);
	const from_time = to_time - 1800;

	try {
		const response = await fetch(`https://api.coingecko.com/api/v3/coins/matic-network/market_chart/range?vs_currency=usd&from=${from_time.toString()}&to=${to_time.toString()}`)
			.then(res => {
				return res.json();
			})    
				
		return response;
	} catch (error) {
		console.error(error);
	}
} 

export const getLatestTxns = async () => {
	
	try {
		const last_block_no = await fetch(`https://api.polygonscan.com/api?module=proxy&action=eth_blockNumber&apikey=1D475YWCPK3ARKTWAAN22XIBS3INPVJHK1`)
			.then(res => {
				return res.json();
			})
		
		const response = await fetch(`https://api.polygonscan.com/api?module=proxy&action=eth_getBlockByNumber&tag=${last_block_no.result}&boolean=true&apikey=1D475YWCPK3ARKTWAAN22XIBS3INPVJHK1`)
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