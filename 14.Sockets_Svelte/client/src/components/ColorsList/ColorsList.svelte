<script>
    import { colorsList } from '../../stores/colorsListStore.js';
</script>

{#each $colorsList as {nickname, pickedColor}}
    <div style={`background-color: ${pickedColor}`}>{nickname}: {pickedColor}</div>
{/each}