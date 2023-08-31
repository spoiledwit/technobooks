<script lang="ts">
  import Accordion from "../accordion.svelte";
  import MdDragHandle from "svelte-icons/md/MdDragHandle.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";

  import financeNav from "../../navs/financial-services.json";
  import techNav from "../../navs/technical-services.json";
  import { toTitleCase } from "$lib/utils";
  import { fly } from "svelte/transition";

  let isMobileNavOpen = false;
  let accordionIndex = -1;

  function toggleMobileNav() {
    isMobileNavOpen = !isMobileNavOpen;
  }
  function closeDialog() {
    isMobileNavOpen = false;
  }
  function handleClick(index: number) {
    console.log(index);

    if (accordionIndex === index) {
      accordionIndex = -1;
    } else {
      accordionIndex = index;
    }
  }
</script>

<div class=" md:hidden mt-4 w-min z-[60] flex justify-end">
  {#if isMobileNavOpen}
    <div
      transition:fly={{ y: 32, duration: 120 }}
      class=" w-screen pt-20 px-4 h-screen bg-zinc-900 text-white absolute overflow-y-scroll top-0 left-0 gap-8"
    >
      <ul class=" flex flex-col">
        <li>
          <a
            on:click={closeDialog}
            class=" py-[6px] tracking-wider text-lg text-gray-300"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          {#each Object.entries(financeNav) as e, index}
            <Accordion
              open={accordionIndex === index}
              onClick={() => handleClick(index)}
            >
              <h3
                class=" py-[6px] tracking-wider text-lg text-gray-300"
                slot="head"
              >
                {toTitleCase(e[0])}
              </h3>
              <div slot="content" class=" flex flex-col">
                {#each e[1] as service}
                  <a
                    class=" text-gray-400 py-[2px]"
                    href={`/services/${service}`}
                    on:click={closeDialog}>{toTitleCase(service)}</a
                  >
                {/each}
              </div>
            </Accordion>
          {/each}
        </li>
        <li>
          {#each Object.entries(techNav) as e, i}
            {@const index = i + Object.keys(financeNav).length}
            <Accordion
              open={accordionIndex === index}
              onClick={() => handleClick(index)}
            >
              <h3
                class=" py-[6px] tracking-wider text-lg text-gray-300"
                slot="head"
              >
                {toTitleCase(e[0])}
              </h3>
              <div slot="content" class=" flex flex-col">
                {#each e[1] as service}
                  <a
                    class=" text-gray-400 py-[2px]"
                    href={`/services/${service}`}
                    on:click={closeDialog}>{toTitleCase(service)}</a
                  >
                {/each}
              </div>
            </Accordion>
          {/each}
        </li>
        <li>
          <a
            on:click={closeDialog}
            class=" py-[6px] tracking-wider text-lg text-gray-300"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            on:click={closeDialog}
            class=" py-[6px] tracking-wider text-lg text-gray-300"
            href="/privacy-policy"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            on:click={closeDialog}
            class=" py-[6px] tracking-wider text-lg text-gray-300"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  {/if}
  <button
    on:click={toggleMobileNav}
    class="absolute right-4 p-1 w-9 text-gray-400"
  >
    {#if isMobileNavOpen}
      <MdClose />
    {:else}
      <MdDragHandle />
    {/if}
  </button>
</div>
