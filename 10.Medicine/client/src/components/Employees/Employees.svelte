<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "../../stores/generalStore.js";

  let employees = $state([]);

    console.log("from .env", import.meta.env.VITE_BASE_URL)
    console.log("from store", $BASE_URL)

  onMount(() => {
    fetch($BASE_URL + "/employees")
      .then((response) => response.json())
      .then((result) => {
        employees = result.data;
      })
      .catch((error) => console.error(error));
  });
</script>

<h3>Employees Available</h3>
{#each employees as employee}
  <h4>{employee}</h4>
{/each}
<h4>...</h4>
