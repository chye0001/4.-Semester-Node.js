<script>
    import { onMount } from 'svelte'; // internal libaries block

    import io from 'socket.io-client'; // eksternal libaries block
    
    import { colorsList } from '../../stores/colorsListStore.js'; // costume/own resoureces block

    import ColorsList from '../../components/ColorsList/ColorsList.svelte'; //components block

    // variables block
    let socket;
    let pickedColor = "#ff0000";

    onMount(() => {
        socket = io("http://localhost:8080", {
            withCredentials: true
        });

        socket.on("server-sends-color", (data) => {
            //dont do this in a framwork, do it the framework way, in this context - the svelte way
            document.body.style.backgroundColor = data.pickedColor;


            colorsList.update((colorsListArray) => {
                colorsListArray.push( {pickedColor: data.pickedColor, nickname: data.nickname});
                return colorsListArray;
            });
        })
    })


    function submitColor() {
        // console.log(pickedColor)
        socket.emit("client-sends-color", {pickedColor});
    }
</script>



<input type="color" bind:value={pickedColor}>
<button onclick={submitColor}>Submit color</button>

<ColorsList/>
