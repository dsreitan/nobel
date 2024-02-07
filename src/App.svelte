<script>
  import { getNobelPrizes } from "./api.js";
  import NobelPrize from "./lib/NobelPrize.svelte";
  import ReloadPrompt from "./lib/ReloadPrompt.svelte";

  /** @type {Record<string, import("./api.js").NobelPrize[]>}*/
  let nobelPrizes = {};

  getNobelPrizes().then((json) => {
    // @ts-ignore
    nobelPrizes = Object.groupBy(
      json,
      (/** @type {{ year: import("./api.js").NobelPrize["year"]; }} */ { year }) => year
    );
  });
</script>

<main>
  <h1>Nobel prize winners</h1>

  {#each Object.keys(nobelPrizes) as year}
    <details>
      <summary>{year}</summary>
      {#each nobelPrizes[year] as nobelPrize}
        <NobelPrize {nobelPrize} />
      {/each}
    </details>
  {/each}

  <ReloadPrompt />
</main>

<style>
  details {
    cursor: pointer;
  }
</style>
