<script>
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

</script>

<h3 id="welcome-mat">Home sweet home</h3>

<h4>fridgeMessages</h4>
{#each $fridgeMessages as fridgeMessage}
<p>{fridgeMessage.creator} {fridgeMessage.message}</p>
{/each}

<slot></slot>

<style>
    #welcome-mat{
        background-color: rgb(95, 58, 10);
        font-weight: bold;
        padding: 20px;
        border-radius: 0 0 12px 12px;
    }
</style>
