<script lang="ts">
  import ContactForm from "./components/contact-form.svelte";
  import Hero from "./components/home/hero.svelte";
  import Services from "./components/home/services.svelte";
  import beams from "../assets/img/1-beams.webp";
  import About from "./components/home/about.svelte";
  import Testimonials from "./components/navbar/testimonials.svelte";
</script>

<div class=" flex flex-col gap-24 md:gap-32">
  <Hero />
  <About />
  <Services />
  <Testimonials />

  <div
    class=" h-max relative overflow-hidden pb-12"
    style="mask-image: linear-gradient(to top, transparent, black); webkit-mask-image: linear-gradient(to top, transparent, black"
  >
    <div
      class=" w-full pointer-events-none dark:opacity-50 h-full absolute grid grid-cols-[24] grid-rows-[13] bg-grid"
    />
    <img
      loading="lazy"
      draggable="false"
      class=" absolute pointer-events-none top-0 z-10 right-0 h-full w-full md:w-1/2 rotate-45 hue-rotate-[105deg]"
      src={beams}
      alt="beams"
    />
    <ContactForm className="z-50" />
  </div>
</div>
<div class=" h-20" />