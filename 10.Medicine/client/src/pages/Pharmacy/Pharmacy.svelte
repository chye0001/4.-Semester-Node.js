<script>
  // good practice
  // libary function
  // external dependencies
  // then costume function in the end

  import { onMount } from "svelte";
  import Employees from "../../components/Employees/Employees.svelte";
  import { BASE_URL } from "../../stores/generalStore";
  import { fetchGet, fetchPost } from "../../util/fetch";

  let pills = $state([]);

  onMount(async () => {
    pills = (await fetchGet($BASE_URL + "/api/pills")).data;
    console.log(pills);
  })

  async function fillPrescription() {
    fetchPost($BASE_URL + "/api/pills", {
      name: "Ibuprofen"
    })

    pills = (await fetchGet($BASE_URL + "/api/pills")).data
    console.log("called");
    
  }
</script>

<h1>Pharmacy</h1>

<Employees></Employees>
{#each pills as pill}
  <h3>{pill.name}</h3>
{/each}

<button onclick={fillPrescription}>Fill Prescription</button>