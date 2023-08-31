<script>
  import Card from "../card.svelte";
  import MdCheck from "svelte-icons/md/MdCheck.svelte";
  import amazon from "../../../assets/img/amazon.webp";
  import vercel from "../../../assets/img/vercel.webp";
  import google from "../../../assets/img/google.webp";
  import meta from "../../../assets/img/meta.webp";
  import CTA from "../cta.svelte";
  import StatsRow from "../stats-row.svelte";
  import CurrencyRow from "../currency-row.svelte";

  import FaAlignLeft from "svelte-icons/fa/FaAlignLeft.svelte";
  import FaCloudMoonRain from "svelte-icons/fa/FaCloudMoonRain.svelte";
  import FaRegClock from "svelte-icons/fa/FaRegClock.svelte";
  import FaNintendoSwitch from "svelte-icons/fa/FaNintendoSwitch.svelte";
  import FaLandmark from "svelte-icons/fa/FaLandmark.svelte";
  import FaFlagUsa from "svelte-icons/fa/FaFlagUsa.svelte";
  import FaCanadianMapleLeaf from "svelte-icons/fa/FaCanadianMapleLeaf.svelte";
  import FaEuroSign from "svelte-icons/fa/FaEuroSign.svelte";
  import FaPhoenixFramework from "svelte-icons/fa/FaPhoenixFramework.svelte";

  import chart from "../../../assets/chart.svg";
  import hero from "../../../assets/img/hero.webp";
</script>

<div
  class=" w-full pt-20 md:h-[70vh] grid grid-cols-[24] grid-rows-[13] bg-grid"
  style="mask-image: linear-gradient(to bottom, transparent, black);
  webkit-mask-image: linear-gradient(to bottom, transparent, black);
  "
>
  <!-- background -->
  <img
    loading="lazy"
    alt="hero background"
    src={hero}
    class=" absolute scale-[2] md:scale-100 pointer-events-none hue-rotate-[175deg] w-screen rotate-90 md:rotate-180"
  />
  <div
    class=" absolute w-screen bottom-0 left-0 -translate-x-1/2 translate-y-1/3"
  />

  <div class=" flex flex-col md:flex-row px-4 md:px-20 gap-8 md:gap-32">
    <div class=" flex flex-col gap-12 w-full h-full justify-center">
      <h1 class=" text-5xl md:text-7xl text-center md:text-start text-gray-300">
        Harmonizing IT and Finance for Limitless
        <span class=" font-serif text-red-200">Success</span>
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

      <div
        class=" flex flex-wrap gap-4 md:gap-12 w-full items-center justify-center"
      >
        <img
          loading="lazy"
          alt="sponser amazon"
          src={amazon}
          class=" w-28 h-24 grayscale invert-[0.5]"
        />
        <img
          loading="lazy"
          alt="sponser vercel"
          src={vercel}
          class=" w-28 h-24 grayscale invert-[0.5]"
        />
        <img
          loading="lazy"
          alt="sponser google"
          src={google}
          class=" w-28 h-24 grayscale invert-[0.5]"
        />
        <img
          loading="lazy"
          alt="sponser mate"
          src={meta}
          class=" w-32 h-24 grayscale"
        />
      </div>
    </div>

    <!-- Ornate Cards -->
    <div class=" flex flex-col gap-4 w-full max-w-3xl items-end justify-center">
      <div class=" flex w-full gap-4">
        <div class=" w-[54.6%] flex flex-col items-end gap-4">
          <Card className=" w-full h-20 flex gap-4">
            <div
              class=" text-stone-200 w-12 aspect-square grid place-items-center rounded-md bg-red-500 p-2"
            >
              <FaLandmark />
            </div>
            <section class=" flex flex-col h-full justify-evenly">
              <h4 class=" text-gray-300">Balance Sheet is Ready!</h4>
              <p class=" text-gray-400 text-xs">3 min ago</p>
            </section>
          </Card>
          <Card className=" h-[187px] w-full md:w-5/6 relative overflow-hidden">
            <img
              src={chart}
              alt="sample chart"
              class=" absolute bottom-0 -left-4 scale-x-[1.2] hue-rotate-[160deg]"
            />
            <div
              class=" absolute w-full h-full top-0 left-0 p-4 flex flex-col gap-2"
            >
              <h3 class=" text-gray-300 text-sm">MRP</h3>
              <div class=" flex justify-between font-bold w-full items-center">
                <p class=" text-lg text-gray-300">$ 3223.0</p>
                <p class=" text-xs text-red-400 -mt-2">+4.6%</p>
                <div />
              </div>
            </div>
          </Card>
        </div>
        <Card className=" w-[45.4%] h-full flex flex-col gap-4">
          <h3 class=" text-gray-300">Overview</h3>
          <StatsRow>
            <FaAlignLeft />
          </StatsRow>
          <StatsRow>
            <FaCloudMoonRain />
          </StatsRow>
          <StatsRow>
            <FaNintendoSwitch />
          </StatsRow>
          <StatsRow>
            <FaRegClock />
          </StatsRow>
        </Card>
      </div>
      <div class=" flex w-full gap-4">
        <Card className=" w-[45%] h-full flex flex-col gap-4">
          <h3 class=" text-gray-300">Choose Services</h3>
          <CurrencyRow>
            <FaFlagUsa />
          </CurrencyRow>
          <CurrencyRow checked>
            <FaCanadianMapleLeaf />
          </CurrencyRow>
          <CurrencyRow>
            <FaEuroSign />
          </CurrencyRow>
          <CurrencyRow>
            <FaPhoenixFramework />
          </CurrencyRow>
        </Card>
        <Card className=" w-1/2 md:w-[45%] h-full flex flex-col gap-2">
          <div class=" flex w-full justify-between items-center">
            <div class=" flex flex-col w-full gap-2">
              <h3 class=" text-gray-300">Tests</h3>
            </div>
            <p class=" text-gray-500 italic font-bold">12/12</p>
          </div>

          <div class=" flex gap-1 items-center">
            <div class=" text-green-400 w-5 aspect-square">
              <MdCheck />
            </div>
            <div class=" w-2/3 h-3 rounded-full bg-neutral-700" />
          </div>
          <div class=" flex gap-1 items-center">
            <div class=" text-green-400 w-5 aspect-square">
              <MdCheck />
            </div>
            <div class=" w-2/3 h-3 rounded-full bg-neutral-700" />
          </div>
          <div class=" flex gap-1 items-center">
            <div class=" text-green-400 w-5 aspect-square">
              <MdCheck />
            </div>
            <div class=" w-2/3 h-3 rounded-full bg-neutral-700" />
          </div>
          <div class=" mt-2 flex w-full gap-2">
            <div class=" w-4 h-4 border-[1px] border-slate-400 rounded-sm" />
            <div class=" flex flex-col gap-2 w-full">
              <div class=" w-full h-3 rounded-full bg-neutral-700" />
              <div class=" w-1/2 h-3 rounded-full bg-zinc-700" />
            </div>
          </div>
          <CTA
            disabled
            className=" mt-4 w-full h-10 bg-green-500 hover:bg-green-500"
            >Deploy</CTA
          >
        </Card>
      </div>
    </div>
  </div>
</div>
