<script lang="ts">
  import { toTitleCase } from "$lib/utils";
  import { fly } from "svelte/transition";
  import MdClose from "svelte-icons/md/MdClose.svelte";

  export let open: boolean;

  import nav from "../../navs/services.json";
  import { cubicOut } from "svelte/easing";
</script>

{#if open}
  <div
    transition:fly={{ duration: 150, easing: cubicOut, y: 16 }}
    class=" hidden md:block absolute left-0 -translate-x-[40%]"
  >
    <div
      class=" flex gap-8 mt-4 border-[1px] border-zinc-700 bg-zinc-900 rounded-md shadow-2xl shadow-black/70 px-4 py-8"
    >
      {#each Object.entries(nav) as category}
        <div class=" flex flex-col gap-2">
          <p class=" text-gray-300 font-bold text-sm whitespace-nowrap">
            {toTitleCase(category[0])}
          </p>
          {#each category[1] as service}
            <a
              href={`services/${service}`}
              class=" text-sm text-gray-400 hover:text-gray-200 transition-all"
            >
              {toTitleCase(service)}
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <dialog
    class="block z-[999999] fixed -top-[18px] -left-[18px] bg-zinc-900 md:hidden w-screen h-[101vh]"
  >
    <!-- <div class=" flex flex-col p-4">
      <button
        on:click={() => (open = false)}
        class="w-9 p-1 text-white self-end"
      >
        <MdClose />
      </button>
    </div> -->
  </dialog>
{/if}
