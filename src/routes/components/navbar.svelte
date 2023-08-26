<script>
  import CTA from "./cta.svelte";
  import Card from "./card.svelte";
</script>

<nav
  class=" flex justify-between w-full h-20 items-center px-4 md:px-12 xl:px-24"
>
  <a href="/" class=" hidden md:block">
    <h1
      class=" w-[272px] text-3xl text-gray-900 whitespace-nowrap font-bold tracking-tight"
    >
      TechnoBooks
    </h1>
  </a>

  <Card
    className=" py-2 w-full md:w-min md:mx-0 fixed top-4 left-1/2 z-[9999] -translate-x-1/2 px-8"
  >
    <ul class=" flex w-full md:w-min justify-between md:gap-12 text-gray-900">
      <li class=" hover:text-green-500 transition-all cursor-pointer">Home</li>
      <li class=" hover:text-green-500 transition-all cursor-pointer">
        Products
      </li>
      <li class=" hover:text-green-500 transition-all cursor-pointer">
        Pricing
      </li>
      <li class=" hover:text-green-500 transition-all cursor-pointer">
        Contact
      </li>
    </ul>
  </Card>

  <div class=" hidden md:block">
    <div class=" h-10 flex gap-4">
      <button
        class=" w-32 h-full hover:bg-green-500/20 rounded-md flex items-center justify-center text-gray-900 font-bold cursor-pointer transition-all"
        >Log In</button
      >
      <CTA className=" w-32">Sign up</CTA>
    </div>
  </div>
</nav>
