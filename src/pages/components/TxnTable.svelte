<script>
    export let data = {};
    
    const date_time = new Date(Number(data.timestamp) * 1000);
    let tableData = [
        {
            hash : '',
            from : '',
            to : '',
            value: '',
            txnFee: ''
        },
    ];
    tableData = data.txns.map(tx => ({
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: tx.value,
        txnFee: (Number(tx.gas) * Number(tx.gasPrice) / 1000000000 / 1000000000).toFixed(12)
    }));
</script>

<h2 class="ml-4 mt-8">Latest 5 Transactions on {date_time}</h2>
<div class="ml-4 mt-2 w-fit">
    <table class="border-collapse border border-slate-200">
        <thead class="text-left text-xs text-gray-700 bg-gray-50">
            <tr >
                <th scope="col" class="px-4 py-3 border-r border-b">Txn Hash</th>
                <th scope="col" class="px-4 py-3 border-r border-b">From</th>
                <th scope="col" class="px-4 py-3 border-r border-b">To</th>
                <th scope="col" class="px-4 py-3 border-r border-b">Value</th>
                <th scope="col" class="px-4 py-3 border-b">Txn Fee</th>
            </tr>
        </thead>
        <tbody>
            {#each tableData as {hash, from, to, value, txnFee}}
            <tr class="">
                <td class="px-4 py-3 border-r">{hash.slice(0, 25)}...</td>
                <td class="px-4 py-3 border-r">{from.slice(0, 20)}...</td>
                <td class="px-4 py-3 border-r">{to.slice(0, 20)}...</td>
                <td class="px-4 py-3 border-r">{value}</td>
                <td class="px-4 py-3">{txnFee}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>



