<script>
    const { name, isGirl, familySheep, onShowLove, onEatCookie } = $props();
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    let fridgeMessageInput = $state("");

    function writeMessageOnFridge() {
        const newFridgeMessage = {
            creator: name,
            message: fridgeMessageInput
        }

        //Two ways to write to a store. .set() takes data
        // fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);

        // .update() takes a callback function.
        fridgeMessages.update((fridgeMessagesValue) => {
            fridgeMessagesValue.push(newFridgeMessage);
            return fridgeMessagesValue;
        })

        fridgeMessageInput = "";
    }


</script>

<div 
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep"}
    >
    <p>{name}</p>
    <button onclick={ () => onShowLove(name)}>Show love</button>
    <button onclick={() => onEatCookie(name)}>Eat cookie</button>
    
    <br>

    <input bind:value={fridgeMessageInput} type="text">
    <button onclick={writeMessageOnFridge}>Write message</button>
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