<script lang="ts">
  import CTA from "../cta.svelte";
  import DesktopNav from "./desktop-nav.svelte";
  import MobileNav from "./mobile-nav.svelte";
</script>

<nav
  class=" flex justify-between w-full md:h-20 items-center px-4 md:px-12 xl:px-24"
>
  <!-- LOGO -->
  <a href="/" class=" hidden md:block">
    <h1
      class=" w-[272px] text-3xl text-gray-300 whitespace-nowrap font-bold tracking-tight"
    >
      TechnoBooks
    </h1>
  </a>

  <!-- Navigation Menu -->
  <DesktopNav />
  <MobileNav />

  <!-- CTA -->
  <div class=" hidden md:block">
    <div class=" h-10 flex gap-4">
      <button
        class=" w-32 h-full hover:bg-red-300/25 rounded-md flex items-center justify-center text-gray-300 font-bold cursor-pointer transition-all"
        >Log In</button
      >
      <CTA className=" w-32">Sign up</CTA>
    </div>
  </div>
</nav>
