<script lang="ts">
  export let className = "";
  export let open = false;
  export let onClick: () => void;
  import { slide } from "svelte/transition";

  import MdKeyboardArrowDown from "svelte-icons/md/MdKeyboardArrowDown.svelte";
  import MdKeyboardArrowUp from "svelte-icons/md/MdKeyboardArrowUp.svelte";
</script>

<div class={` ${className}`}>
  <button class=" flex justify-between w-full" on:click={onClick}>
    <div class=" mr-1">
      <slot name="head" />
    </div>
    <div class=" w-5 aspect-square">
      {#if open}
        <MdKeyboardArrowUp />
      {:else}
        <MdKeyboardArrowDown />
      {/if}
    </div>
  </button>

  {#if open}
    <div class="p-1" transition:slide={{ duration: 120 }}>
      <slot name="content" />
    </div>
  {/if}
</div>
