<script>
  import CTA from "../cta.svelte";

  import Carousel from "svelte-carousel";

  import hero1 from "../../../assets/img/home-hero-1.webp";
  import hero2 from "../../../assets/img/home-hero-2.webp";
  import hero4 from "../../../assets/img/home-hero-4.jpg";
</script>

<div class=" w-full h-screen relative overflow-hidden pb-12 flex">
  <div class=" w-full h-[90vh] bg-gray-800 absolute top-0 left-0">
    <Carousel
      arrows={false}
      infinite={true}
      autoplay={true}
      autoplayDuration={2500}
    >
      <img draggable="false" alt="hero 2" src={hero2} class=" w-full h-full" />
      <img
        draggable="false"
        alt="hero 1"
        src={hero1}
        class=" w-full h-full -scale-x-[1.0]"
      />
      <img
        draggable="false"
        alt="hero 3"
        src={hero4}
        class=" w-full h-full brightness-75"
      />
    </Carousel>
  </div>

  <div class="flex z-10 flex-col md:flex-row px-4 md:px-20 gap-8 md:gap-32">
    <div class=" flex flex-col gap-12 w-full h-full justify-center leading">
      <h1 class="text-5xl md:text-7xl text-center md:text-start text-gray-300">
        Bridging Finance and <br /> Technology for <br />
        <strong class=" text-red-300"> Business Growth </strong>
      </h1>
      <p class=" text-gray-300 text-center md:text-start">
        Seamless IT and Financial Solutions for Your Success. Navigate the
        Future with Confidence.
      </p>

      <div class=" flex flex-col md:flex-row items-center gap-8 w-full">
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
