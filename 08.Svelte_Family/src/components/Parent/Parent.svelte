<script>
    import Child from "../Child/child.svelte";
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    const {name: parentName, children} = $props();
    
    function handleShowLove(childName) {
        console.log(`${parentName} is showing love for... ${childName}`);
    }




    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪"]);
    let ateLastCookieChild = $state();
    function handleEatCookie(childName) {

        if(cookieJar.length !== 0 ) {
            console.log(`${childName} eating cookie :))`)
            cookieJar.shift();
            ateLastCookieChild = childName;
        } else {
            console.log(`no more cookies for ${childName}. ${ateLastCookieChild} ate the last cookie`);
        }
    }



    function refillCookieJar() {
        cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];
    } 


    // Had to make this function when using Standard Store.
    // function wipeFridgeMessages() {
    //     fridgeMessages.set([])
    // }



</script>

<h1>{parentName}</h1>

<button onclick={refillCookieJar}>Refill cookie jar</button>
<button onclick={fridgeMessages.wipe}>Wipe Fridge Messages</button>

<p >
    {#each cookieJar as cookie}
    {cookie}
    {/each}
</p>

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}
