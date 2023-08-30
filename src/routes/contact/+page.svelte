<script>
  import beams from "../../assets/img/1-beams.webp";
  import ContactForm from "../components/contact-form.svelte";
</script>

<div
  class=" min-h-[calc(100vh-80px)] relative overflow-hidden"
  style="mask-image: linear-gradient(to top, transparent, black); webkit-mask-image: linear-gradient(to top, transparent, black"
>
  <div
    class=" w-full pointer-events-none dark:opacity-50 h-full absolute grid grid-cols-[24] grid-rows-[13] bg-grid"
  />
  <img loading="lazy"
    loading="lazy"
    draggable="false"
    class=" absolute pointer-events-none top-0 z-10 right-0 h-full w-full md:w-1/2 rotate-45 hue-rotate-[225deg]"
    src={beams}
    alt="beams"
  />
  <ContactForm className="z-50 my-12" />
</div>
