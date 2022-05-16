<script>
    import Mainnet from "../tabs/mainnet.svelte";
    import Polygon from "../tabs/polygon.svelte";
    import Tab from "../components/Tab.svelte";

    const _tabItems = [
        { 
            label: "Mainnet",
            value: 1,
            component: Mainnet
        },
        {
            label: "Polygon",
            value: 2,
            component: Polygon 
        }
    ];
</script>

<Tab {_tabItems}/>


    
   