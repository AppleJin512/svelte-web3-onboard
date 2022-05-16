<script>
    export let _tabItems = [];
   
    const handleClick = tabValue => () => (options.activeTabValue = tabValue);

    const options = {
        activeTabValue: 1,
        activeClasses: 'inline-block px-4 py-2 rounded-t-lg border-b-2 font-semibold text-blue-400 dark:border-blue-400',
        inactiveClasses: 'inline-block px-4 py-2 text-blue-400 rounded-t-lg hover:text-blue-300',
    };    
</script>

<div class="lg:mx-16 lg:mt-8 pt-4">
    <ul class="flex flex border-b border-blue-100 mb-0 text-lg font-medium text-center" id="myTab" data-tabs-toggle="" role="tablist">
        {#each _tabItems as item}
        <li class="" role="presentation">
            <button on:click={handleClick(item.value)} class={options.activeTabValue === item.value ? options.activeClasses : options.inactiveClasses} id="" data-tabs-target="" type="" role="tab" aria-controls="" aria-selected="false">{item.label}</button>
        </li>
        {/each}
    </ul>
    {#each _tabItems as item}
        {#if options.activeTabValue == item.value}
            <div class="min-h-full">
                <svelte:component this={item.component}/>
            </div>
        {/if}
    {/each}
</div>
