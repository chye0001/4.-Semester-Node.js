<script>
    import Child from "../Child/child.svelte";
    const {name, children} = $props();
    
</script>

<h1>{name}</h1>

{#each children as child (child.name)}
    <Child {...child}/>
{/each}