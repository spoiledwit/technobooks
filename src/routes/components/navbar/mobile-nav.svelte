<script lang="ts">
  import Accordion from "../accordion.svelte";
  import MdDragHandle from "svelte-icons/md/MdDragHandle.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";
  import logo from "../../../assets/logo2.png"
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

<div class=" md:hidden w-min z-[60] flex justify-end">
  <img src="{logo}" alt="Logo" class="mx-4 top-10 left-0 w-[70px] absolute my-2"/>
  {#if isMobileNavOpen}
    <div
      transition:fly={{ y: 32, duration: 120 }}
      class=" w-screen pt-20 px-4 h-screen bg-zinc-100 border-b border-gray-400 text-white fixed overflow-y-scroll top-0 left-0 gap-8"
    >
      <ul class=" flex flex-col">
        <li>
          <a
            on:click={closeDialog}
            class=" py-[6px] tracking-wider text-lg text-gray-700"
            href="/"
          >
            Home
          </a>
        </li>

        <!-- Financial services -->
        <li>
          {#each Object.entries(financeNav) as e, index}
            <Accordion
              open={accordionIndex === index}
              onClick={() => handleClick(index)}
            >
              <h3
                class=" py-[6px] tracking-wider text-lg text-gray-700"
                slot="head"
              >
                {toTitleCase(e[0])}
              </h3>
              <div slot="content" class=" flex flex-col">
                {#each e[1] as service}
                  <a
                    class=" text-primary-gray py-[2px]"
                    href={`/services/${service}`}
                    on:click={closeDialog}>{toTitleCase(service)}</a
                  >
                {/each}
              </div>
            </Accordion>
          {/each}
        </li>

        <!-- IT services -->
        <li>
          {#each Object.entries(techNav) as e}
            <a
              class=" text-primary-gray py-[2px]"
              href={`/services/${e[0]}`}
              on:click={closeDialog}
              ><h3 class=" py-[6px] tracking-wider text-lg text-gray-700">
                {e[1]}
              </h3>
            </a>
          {/each}
        </li>

        <li class=" mt-[2px]">
          <a
            on:click={closeDialog}
            class=" tracking-wider text-lg text-gray-700"
            href="/about"
          >
            About
          </a>
        </li>
        <li class=" mt-2">
          <a
            on:click={closeDialog}
            class=" tracking-wider text-lg text-gray-700"
            href="/privacy-policy"
          >
            Privacy
          </a>
        </li>
        <li class=" mt-2">
          <a
            on:click={closeDialog}
            class=" tracking-wider text-lg text-gray-700"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  {/if}
  <button on:click={toggleMobileNav} class="fixed right-4 top-16 p-1 w-9">
    {#if isMobileNavOpen}
      <p class="text-primary-gray">
        <MdClose />
      </p>
    {:else}
      <p class=" text-gray-500">
        <MdDragHandle />
      </p>
    {/if}
  </button>
</div>
