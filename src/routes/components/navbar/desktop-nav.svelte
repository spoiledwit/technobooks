<script lang="ts">
  import Card from "../card.svelte";
  import FinancialServicesDialog from "./financial-services-dialog.svelte";

  import MdKeyboardArrowDown from "svelte-icons/md/MdKeyboardArrowDown.svelte";
  import TechnicalServicesDialog from "./technical-services-dialog.svelte";

  let currentDialog = -1;

  function handleMouseEnter(index: number) {
    if (window.screen.width > 768) {
      currentDialog = index;
    }
  }
  function handleMouseLeave() {
    if (window.screen.width > 768) {
      currentDialog = -1;
    }
  }
  function handleClick(index: number) {
    if (window.screen.width <= 768) {
      currentDialog = index;
    }
  }
</script>

<Card
  className=" hidden md:block py-2 w-[calc(100%-32px)] md:w-min md:mx-0 fixed top-4 left-1/2 z-[9999] -translate-x-1/2 px-8"
>
  <ul
    class=" flex text-lg w-full md:w-min justify-between md:gap-12 text-gray-700"
  >
    <li class=" hover:text-primary-red transition-all cursor-pointer">
      <a href="/">Home</a>
    </li>
    <li
      class=" relative"
      on:mouseenter={() => handleMouseEnter(0)}
      on:mouseleave={() => handleMouseLeave()}
    >
      <button
        on:click={() => handleClick(0)}
        class={`${
          currentDialog === 0 ? "text-primary-red" : ""
        } flex gap-1 items-center transition-all cursor-pointer`}
      >
        <p>Finance</p>
        <div class={`${currentDialog === 0 ? " rotate-180" : ""} w-3`}>
          <MdKeyboardArrowDown />
        </div>
      </button>
      <FinancialServicesDialog open={currentDialog === 0} />
    </li>
    <li
      class=" relative"
      on:mouseenter={() => handleMouseEnter(1)}
      on:mouseleave={() => handleMouseLeave()}
    >
      <button
        on:click={() => handleClick(1)}
        class={`${
          currentDialog === 1 ? "text-primary-red" : ""
        } flex gap-1 items-center transition-all cursor-pointer`}
      >
        <p class="pl-2">IT</p>
        <div class={`${currentDialog === 1 ? " rotate-180" : ""} w-3`}>
          <MdKeyboardArrowDown />
        </div>
      </button>
      <TechnicalServicesDialog open={currentDialog === 1} />
    </li>
    <li class=" hover:text-primary-red transition-all cursor-pointer">
      <a href="/about">About</a>
    </li>
    <li class=" hover:text-primary-red transition-all cursor-pointer">
      <a href="/privacy-policy">Privacy</a>
    </li>
    <li class=" hover:text-primary-red transition-all cursor-pointer">
      <a href="/contact">Contact</a>
    </li>
  </ul>
</Card>
