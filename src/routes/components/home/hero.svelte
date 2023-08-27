<script>
  import Card from "../card.svelte";

  import amazon from "../../../assets/img/amazon.png";
  import vercel from "../../../assets/img/vercel.png";
  import google from "../../../assets/img/google.png";
  import meta from "../../../assets/img/meta.png";
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
  import hero from "../../../assets/img/hero.png";
</script>

<div
  class=" w-full md:h-[70vh] grid grid-cols-[24] grid-rows-[13] bg-grid"
  style="mask-image: linear-gradient(to bottom, transparent, black);
  webkit-mask-image: linear-gradient(to bottom, transparent, black);
  "
>
  <!-- background -->
  <img
    alt="hero background"
    src={hero}
    class=" absolute pointer-events-none hue-rotate-[300deg] w-screen rotate-180"
  />
  <div
    class=" absolute w-screen bottom-0 left-0 -translate-x-1/2 translate-y-1/3"
  />

  <div class=" flex flex-col md:flex-row px-4 md:px-20 gap-8 md:gap-32">
    <div class=" flex flex-col gap-12 w-full h-full justify-center">
      <h1 class=" text-7xl text-center md:text-start text-gray-900">
        The Future of Payments <span class=" font-serif text-green-900"
          >Is Here</span
        >
      </h1>
      <p class=" text-gray-900 text-center md:text-start">
        Payments, subscriptions, taxes and analytics are all part of the
        equation when it comes to running a business in the modern world.
      </p>

      <div class=" flex flex-col md:flex-row items-center gap-8 w-full">
        <input
          class=" h-12 w-96 bg-zinc-100/50 ring-0 outline-0 focus:border-green-500 rounded-md px-4 border-[1px] border-zinc-700 text-zinc-400 placeholder:text-zinc-600"
          placeholder="Enter your email..."
        />
        <CTA className="w-48 h-12">Get Started</CTA>
      </div>

      <!-- sponsers -->
      <div
        class=" flex flex-wrap gap-4 md:gap-12 w-full items-center justify-center"
      >
        <img
          alt="sponser amazon"
          src={amazon}
          class=" w-28 h-24 grayscale invert-[0.5]"
        />
        <img
          alt="sponser vercel"
          src={vercel}
          class=" w-28 h-24 grayscale invert-[0.5]"
        />
        <img
          alt="sponser google"
          src={google}
          class=" w-28 h-24 grayscale invert-[0.5]"
        />
        <img alt="sponser mate" src={meta} class=" w-32 h-24 grayscale" />
      </div>
    </div>

    <!-- Ornate Cards -->
    <div class=" flex flex-col gap-4 w-full max-w-3xl items-end justify-center">
      <div class=" flex w-full gap-4">
        <div class=" w-[54.6%] flex flex-col items-end gap-4">
          <Card className=" w-full h-20 flex gap-4">
            <div
              class=" text-white w-12 aspect-square grid place-items-center rounded-md bg-gradient-to-tr from-teal-500 from-50% to-cyan-500 p-2"
            >
              <FaLandmark />
            </div>
            <section class=" flex flex-col h-full justify-evenly">
              <h4 class=" text-gray-900">Payment is submitted</h4>
              <p class=" text-gray-500 text-xs">3 hours ago</p>
            </section>
          </Card>
          <Card className=" h-[187px] w-5/6 relative overflow-hidden">
            <img
              src={chart}
              alt="sample chart"
              class=" absolute bottom-0 -left-4 scale-x-[1.2] hue-rotate-[300deg]"
            />
            <div
              class=" absolute w-full h-full top-0 left-0 p-4 flex flex-col gap-2"
            >
              <h3 class=" text-gray-900 text-sm">MRP</h3>
              <div class=" flex justify-between font-bold w-full items-center">
                <p class=" text-lg text-gray-900">$ 3223.0</p>
                <p class=" text-xs text-green-500">+4.6%</p>
                <div />
              </div>
            </div>
          </Card>
        </div>
        <Card className=" w-[45.4%] h-full flex flex-col gap-4">
          <h3 class=" text-gray-900">Overview</h3>
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
          <h3 class=" text-gray-900">Enable Currencies</h3>
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
        <Card className=" w-[45%] h-full flex flex-col gap-2">
          <div class=" flex w-full justify-between items-center">
            <div class=" flex flex-col w-full gap-2">
              <h3 class=" text-gray-900">Checkout</h3>

              <div class=" w-2/3 h-3 rounded-full bg-gray-300" />
            </div>
            <p class=" text-gray-500 italic font-bold">$320.0</p>
          </div>
          <input
            disabled
            placeholder="Enter your card number"
            class=" mt-2 h-10 px-4 bg-gray-300/30 rounded-md w-full placeholder:text-gray-400"
          />
          <div class=" mt-2 flex w-full gap-2">
            <div class=" w-4 h-4 border-[1px] border-slate-400 rounded-sm" />
            <div class=" flex flex-col gap-2 w-full">
              <div class=" w-full h-3 rounded-full bg-gray-300" />
              <div class=" w-1/2 h-3 rounded-full bg-slate-300" />
            </div>
          </div>
          <CTA
            disabled
            className=" mt-4 w-full h-10 disabled:hover:bg-green-500"
            >Pay by Card</CTA
          >
        </Card>
      </div>
    </div>
  </div>
</div>
