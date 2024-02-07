<script>
  /** @type {import("../api.js").NobelPrize}*/
  export let nobelPrize;
</script>

<section>
  <h2 class="category">{nobelPrize.category}</h2>
  {#each nobelPrize.laureates ?? [] as laureate}
    <p class="name">{laureate.firstname} {laureate.surname}</p>
    <small>{laureate.motivation}</small>
  {/each}
</section>

<style>
  section {
    margin: 0.5em;
    padding: 0.5em;
    cursor: text;
  }

  .category {
    font-size: 1em;
    font-weight: 400;
    color: #a5a5a5;
    margin-top: 0;
    text-transform: capitalize;
  }

  .name {
    font-weight: bold;
    margin-bottom: 0;
  }
</style>
