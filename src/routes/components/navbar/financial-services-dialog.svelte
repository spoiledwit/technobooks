<script lang="ts">
  import { toTitleCase } from "$lib/utils";
  import { fly } from "svelte/transition";

  export let open: boolean;

  import nav from "../../navs/financial-services.json";
  import { cubicOut } from "svelte/easing";
</script>

{#if open}
  <div
    transition:fly={{ duration: 150, easing: cubicOut, y: -16 }}
    class=" absolute left-0 -translate-x-[40%]"
  >
    <div
      class=" flex gap-8 mt-4 border-2 border-zinc-400 bg-zinc-100 rounded-md shadow-2xl shadow-black/30 px-4 py-8"
    >
      {#each Object.entries(nav) as e}
        <div class=" flex flex-col gap-2">
          <p class=" text-gray-700 font-bold text-sm whitespace-nowrap">
            {toTitleCase(e[0])}
          </p>
          {#each e[1] as service}
            <a
              on:click={() => (open = false)}
              href={`/services/${service}`}
              class=" text-sm text-gray-600 hover:text-black transition-all"
            >
              {toTitleCase(service)}
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/if}
