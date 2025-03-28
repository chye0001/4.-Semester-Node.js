<script>
    const { name, isGirl, familySheep } = $props();

</script>

<div 
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep"}>
    <p>{name}</p>
</div>

<style>
    .is-boy{
        background-color: salmon;
        margin: 1rem;
    }

    .is-girl{
        background-color: chartreuse;
    }

    .not-a-sheep{
        border: 0.5em solid goldenrod;
    }

    .black-sheep{
        border: 0.5em solid palegreen;
    }

    .gray-sheep{
        border: 0.5em solid palevioletred;
    }
</style>