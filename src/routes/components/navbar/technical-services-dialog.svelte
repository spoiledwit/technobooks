<script lang="ts">
  import { toTitleCase } from "$lib/utils";
  import { fly } from "svelte/transition";

  export let open: boolean;

  import nav from "../../navs/technical-services.json";
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
      {#each Object.entries(nav) as [path, name]}
        <div class=" flex flex-col gap-2">
          <p class=" text-gray-700 font-bold text-sm whitespace-nowrap">
            {name}
          </p>
          <a
            on:click={() => (open = false)}
            href={`/services/${path}`}
            class=" text-sm text-gray-600 hover:text-black transition-all"
          >
            {name}
          </a>
        </div>
      {/each}
    </div>
  </div>
{/if}
