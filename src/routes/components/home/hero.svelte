<script lang="ts">
  import CTA from "../cta.svelte";

  import hero1 from "../../../assets/img/home-hero-1.jpg";
  import hero2 from "../../../assets/img/home-hero-2.webp";
  import hero3 from "../../../assets/img/home-hero-3.jpg";
  import { onMount } from "svelte";

  import Siema from "siema";

  let slider: Siema;
  onMount(() => {
    slider = new Siema({
      selector: ".siema",
      duration: 200,
      easing: "ease-in-out",
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });

    const interval = setInterval(() => {
      slider.next();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class=" w-full h-screen relative overflow-hidden pb-12 flex">
  <div class=" siema w-full absolute h-[90vh]">
    <div class=" bg-zinc-900 w-full h-[90vh] relative">
      <section
        class=" absolute z-10 w-full top-1/2 max-w-2xl -translate-y-1/2 md:left-20"
      >
        <h1
          class="text-5xl md:text-7xl text-center md:text-start tracking-tight text-gray-50"
        >
          Elevate Your Tech, Elevate Your
          <strong class=" text-primary-red"> Business </strong>
        </h1>
        <p class=" text-gray-50 text-center mt-4 md:text-start">
          Your Trusted Partner in Delivering Complete IT Excellence: Tailored
          Solutions, Unparalleled Support, and Technological Innovation.
        </p>
      </section>
      <img
        loading="lazy"
        draggable="false"
        alt="hero 2"
        src={hero2}
        class=" w-full hue-rotate-[140deg] object-cover h-[90vh]"
      />
    </div>
    <div class="  w-full h-[90vh] relative overflow-hidden bg-black">
      <section
        class=" absolute z-10 w-full top-1/2 max-w-2xl -translate-y-1/2 md:left-20"
      >
        <h1
          class="text-5xl md:text-7xl text-center md:text-start tracking-tight text-gray-50"
        >
          Bridging Finance and Technology for
          <strong class=" text-primary-red"> Business Growth </strong>
        </h1>
        <p class=" text-gray-50 text-center mt-4 md:text-start">
          Seamless IT and Financial Solutions for Your Success. Navigate the
          Future with Confidence.
        </p>
      </section>

      <img
        loading="lazy"
        draggable="false"
        alt="hero 3"
        src={hero3}
        class=" w-full md:translate-x-[15%] object-cover -scale-x-100 h-[90vh]"
      />
    </div>
    <div class=" overflow-hidden bg-black w-full h-[90vh] relative">
      <section
        class=" z-10 absolute w-full top-1/2 max-w-2xl -translate-y-1/2 md:left-20"
      >
        <h1
          class="text-5xl md:text-7xl text-center md:text-start tracking-tight text-gray-50"
        >
          Empowering Your Digital
          <strong class=" text-primary-red"> Potential </strong>
        </h1>
        <p class=" text-gray-50 text-center mt-4 md:text-start">
          Unlock Comprehensive IT Solutions for Seamless Success in the Digital
          Age. Your Trusted Partner in Navigating the Ever-Evolving IT
          Landscape.
        </p>
      </section>
      <img
        loading="eager"
        draggable="false"
        alt="hero 1"
        src={hero1}
        class=" translate-x-[50%] md:translate-x-[15%] w-full object-cover h-[90vh]"
      />
    </div>
  </div>

  <div
    class="flex z-10 w-full md:w-auto flex-col md:flex-row px-4 md:px-20 gap-8 md:gap-32"
  >
    <div class=" flex flex-col gap-12 w-full h-full justify-end leading">
      <div
        class=" flex mb-20 md:mb-32 flex-col md:flex-row items-center gap-8 w-full"
      >
        <a
          href="/contact"
          class=" w-48 h-12 rounded-md flex items-center justify-center text-white font-bold bg-primary-red hover:bg-red-500 transition-all"
          >Contact Us</a
        >
      </div>
    </div>
    <div />
  </div>
</div>
