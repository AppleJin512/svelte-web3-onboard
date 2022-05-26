<script>
    import { txnsValue } from './../store.js';
    
</script>

<h2 class="ml-4 mt-8">Latest 5 Transactions on {new Date(Number($txnsValue.timestamp) * 1000)}</h2>

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
            {#each $txnsValue.txns as {hash, from, to, value, gas, gasPrice}}
            <tr class="">
                <td class="px-4 py-3 border-r">{hash.slice(0, 20)}...</td>
                <td class="px-4 py-3 border-r">{from.slice(0, 16)}...</td>
                <td class="px-4 py-3 border-r">{to.slice(0, 16)}...</td>
                <td class="px-4 py-3 border-r">{value}</td>
                <td class="px-4 py-3">{ (Number(gas) * Number(gasPrice) / 1000000000 / 1000000000).toFixed(8)}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>