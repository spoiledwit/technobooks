<script lang="ts">
  import CTA from "../cta.svelte";
  import DesktopNav from "./desktop-nav.svelte";
  import MobileNav from "./mobile-nav.svelte";
  import logo2 from "../../../assets/logo2.png";
</script>

<nav
  class=" flex justify-between w-full md:h-20 items-center px-4 md:px-12 xl:px-24"
>
  <!-- LOGO -->
  <a href="/" class=" hidden md:block">
    <span
      class=" w-[272px] text-xl text-primary-gray whitespace-nowrap font-bold tracking-tight"
    >
      <img src={logo2} alt="logo" class=" w-[75px] inline-block mr-2" />
      <span >
        <span class=" text-primary-red">Technobooks</span> 
        <span>
          Consultants</span>
        </span>
      </span>
  </a>

  <!-- Navigation Menu -->
  <DesktopNav />
  <MobileNav />

  <!-- CTA -->
  <div class=" hidden md:block">
    <div class=" h-10 flex gap-4">
      <CTA className="px-10">
        <a href="/contact">
          Contact
        </a>
      </CTA>
    </div>
  </div>
</nav>
