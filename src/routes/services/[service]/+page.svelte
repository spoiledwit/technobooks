<script lang="ts">
  import bookkeeping from "../../../assets/img/bookkeeping.jpg";
  import financialStatement from "../../../assets/img/financial-statement.jpg";
  import payroll from "../../../assets/img/payroll.jpg";
  import auditing from "../../../assets/img/auditing.jpg";
  import taxation from "../../../assets/img/taxation.png";
  import analysis from "../../../assets/img/analysis.jpg";
  import web from "../../../assets/img/web.jpg";
  import app from "../../../assets/img/app.jpg";
  import blockchain from "../../../assets/img/blockchain.jpg";
  import customSoftware from "../../../assets/img/custom-software.jpg";
  import digitalMarketing from "../../../assets/img/digital-marketing.jpg";
  import { toKebabCase, toTitleCase } from "$lib/utils";
  import { page } from "$app/stores";
  import beam from "../../../assets/img/1-beam.png";

  export let data: {
    category: string;
    name: string;
    tagline: string;
    content: string;
  };

  let imageSource = blockchain;
  function setImageSource() {
    switch (data.category) {
      case "bookkeeping services":
        imageSource = bookkeeping;
        break;
      case "financial statement preparation":
        imageSource = financialStatement;
        break;
      case "taxation services":
        imageSource = taxation;
        break;
      case "payroll services":
        imageSource = payroll;
        break;
      case "financial analysis and reporting":
        imageSource = analysis;
        break;
      case "auditing and assurance":
        imageSource = auditing;
        break;
      case "web":
        imageSource = web;
        break;
      case "app-development":
        imageSource = app;
        break;
      case "software-development":
        imageSource = customSoftware;
        break;
      case "digital-marketing":
        imageSource = digitalMarketing;
        break;
    }
  }

  let title: string;
  function setTitle() {
    console.log(data.category);
    console.log(data.name);

    if (toKebabCase(data.category) === toKebabCase(data.name)) {
      title = data.name;
    } else {
      title = `${toTitleCase(data.category)}: ${data.name}`;
    }
  }

  $: $page.url.pathname, setImageSource();
  $: $page.url.pathname, setTitle();
</script>

<main class=" flex flex-col w-full">
  <!-- hero -->
  <div
    class=" relative w-full md:px-20 h-[50vh] md:h-[80vh] flex justify-center items-center"
  >
    <div class=" w-full h-full z-10 absolute opacity-20">
      <img
        alt="hero beam background"
        src={beam}
        class=" w-full h-full object-fill hue-rotate-[30deg]"
      />
    </div>

    <div
      class=" z-40 h-full flex items-center justify-center md:rounded-3xl overflow-hidden"
    >
      <img
        loading="lazy"
        alt="bookkeeping services hero"
        src={imageSource}
        class=" h-full md:aspect-[1920/1200] bg-cover object-cover md:rounded-3xl"
      />
    </div>

    <div
      class=" absolute top-0 z-50 left-0 flex items-end justify-center h-full w-full"
    />
  </div>
  <h1
    class=" text-4xl mt-8 self-center md:text-5xl mx-2 mb-12 text-center max-w-3xl text-gray-300 tracking-tight"
  >
    {title}
  </h1>

  <section
    class=" relative overflow-x-hidden flex-col flex prose prose-headings:text-gray-200 prose-strong:text-gray-200 font-normal text-gray-300 px-4 md:px-28 lg:px-64 xl:px-96 min-w-full mb-20"
  >
    <div class=" overflow-hidden w-screen h-full">
      <div
        class=" opacity-25 rotate-[10deg] w-screen h-12 md:h-20 scale-x-150 absolute -right-8 top-2/3 bg-red-500 blur-3xl"
      />
    </div>

    <h2 class=" text-3xl md:text-center self-center tracking-tight font-normal">
      {data.tagline}
    </h2>
    {@html data.content}
  </section>
</main>
