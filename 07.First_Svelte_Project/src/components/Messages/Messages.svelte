<script>
  import FirstMessage from "./FirstMessage.svelte";

    let messageList = $state([]);
    let messageInput = $state("");

    function addMessage(){
        messageList.push(messageInput);
        messageInput = "";
    }
</script>

<h2>Messages</h2>
<input bind:value={messageInput} placeholder="Type your message">
<button onclick={addMessage}>Submit</button>
<p>{messageList}</p>

<FirstMessage firstMessage={messageList[0]} />