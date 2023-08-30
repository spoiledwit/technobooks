<script>
  import CTA from "../cta.svelte";
  import Card from "../card.svelte";
  import ServicesDialog from "./services-dialog.svelte";

  import MdKeyboardArrowDown from "svelte-icons/md/MdKeyboardArrowDown.svelte";

  let isDropdownOpen = false;
</script>

<nav
  class=" flex justify-between w-full h-20 items-center px-4 md:px-12 xl:px-24"
>
  <a href="/" class=" hidden md:block">
    <h1
      class=" w-[272px] text-3xl text-gray-50 whitespace-nowrap font-bold tracking-tight"
    >
      TechnoBooks
    </h1>
  </a>

  <Card
    className=" py-2 w-[calc(100%-32px)] md:w-min md:mx-0 fixed top-4 left-1/2 z-[9999] -translate-x-1/2 px-8"
  >
    <ul class=" flex w-full md:w-min justify-between md:gap-12 text-gray-50">
      <li class=" hover:text-red-400 transition-all cursor-pointer">
        <a href="/">Home</a>
      </li>
      <li
        class=" relative"
        on:mouseenter={() => (isDropdownOpen = true)}
        on:mouseleave={() => (isDropdownOpen = false)}
      >
        <a
          href="/"
          class={`${
            isDropdownOpen ? "text-red-400" : ""
          } flex gap-1 items-center transition-all cursor-pointer`}
        >
          <p>Services</p>
          <div class={`${isDropdownOpen ? " rotate-180" : ""} w-3`}>
            <MdKeyboardArrowDown />
          </div></a
        >
        <ServicesDialog open={isDropdownOpen} />
      </li>
      <li class=" hover:text-red-400 transition-all cursor-pointer">
        <a href="/about">About</a>
      </li>
      <li class=" hover:text-red-400 transition-all cursor-pointer">
        <a href="/privacy-policy">Privacy</a>
      </li>
    </ul>
  </Card>

  <div class=" hidden md:block">
    <div class=" h-10 flex gap-4">
      <button
        class=" w-32 h-full hover:bg-red-300/25 rounded-md flex items-center justify-center text-gray-50 font-bold cursor-pointer transition-all"
        >Log In</button
      >
      <CTA className=" w-32">Sign up</CTA>
    </div>
  </div>
</nav>
