<script>
  import CTA from "../cta.svelte";

  import hero1 from "../../../assets/img/home-hero-1.webp";
  import hero2 from "../../../assets/img/home-hero-2.webp";
  import hero4 from "../../../assets/img/home-hero-4.jpg";
  import { onMount } from "svelte";

  import Siema from "siema";

  let slider;
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
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class=" w-full h-screen relative overflow-hidden pb-12 flex">
  <div class=" siema w-full absolute h-[90vh]">
    <div class="  w-full h-[90vh] relative">
      <section
        class=" z-10 absolute w-full top-1/2 max-w-2xl -translate-y-1/2 md:left-20"
      >
        <h1
          class="text-5xl md:text-7xl text-center md:text-start text-gray-300"
        >
          Bridging Finance and Technology for
          <strong class=" text-red-300"> Business Growth </strong>
        </h1>
        <p class=" text-gray-300 text-center mt-4 md:text-start">
          Seamless IT and Financial Solutions for Your Success. Navigate the
          Future with Confidence.
        </p>
      </section>
      <img
        draggable="false"
        alt="hero 2"
        src={hero2}
        class=" w-full object-cover h-[90vh]"
      />
    </div>
    <div class="  w-full h-[90vh] relative">
      <section
        class=" absolute z-10 w-full top-1/2 max-w-2xl -translate-y-1/2 md:left-20"
      >
        <h1
          class="text-5xl md:text-7xl text-center md:text-start text-gray-300"
        >
          Bridging Finance and Technology for
          <strong class=" text-red-300"> Business Growth </strong>
        </h1>
        <p class=" text-gray-300 text-center mt-4 md:text-start">
          Seamless IT and Financial Solutions for Your Success. Navigate the
          Future with Confidence.
        </p>
      </section>
      <img
        draggable="false"
        alt="hero 1"
        src={hero1}
        class=" w-full object-cover h-[90vh] -scale-x-[1.0]"
      />
    </div>
    <div class="  w-full h-[90vh] relative">
      <section
        class=" absolute z-10 w-full top-1/2 max-w-2xl -translate-y-1/2 md:left-20"
      >
        <h1
          class="text-5xl md:text-7xl text-center md:text-start text-gray-300"
        >
          Bridging Finance and Technology for
          <strong class=" text-red-300"> Business Growth </strong>
        </h1>
        <p class=" text-gray-300 text-center mt-4 md:text-start">
          Seamless IT and Financial Solutions for Your Success. Navigate the
          Future with Confidence.
        </p>
      </section>

      <img
        draggable="false"
        alt="hero 3"
        src={hero4}
        class=" w-full object-cover h-[90vh] brightness-75"
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
        <input
          class=" h-12 w-full md:w-96 bg-white/[0.03] ring-0 outline-0 focus:border-red-500 rounded-md px-4 border-[1px] border-gray-500 text-gray-300 placeholder:text-gray-500"
          placeholder="Enter your email..."
        />
        <CTA className="w-48 h-12">Get Started</CTA>
      </div>
    </div>
    <div />
  </div>
</div>
