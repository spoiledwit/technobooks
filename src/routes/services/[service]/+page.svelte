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
  import iot from "../../../assets/img/iot.jpg";
  import customSoftware from "../../../assets/img/custom-software.jpg";
  import devOps from "../../../assets/img/devops.jpg";
  import { toTitleCase } from "$lib/utils";

  export let data: {
    category: string;
    name: string;
    tagline: string;
    content: string;
  };

  function getImageSource() {
    switch (data.category) {
      case "bookkeeping services":
        return bookkeeping;
      case "financial statement preparation":
        return financialStatement;
      case "taxation services":
        return taxation;
      case "payroll services":
        return payroll;
      case "financial analysis and reporting":
        return analysis;
      case "auditing and assurance":
        return auditing;
      default:
        return blockchain;
    }
  }
</script>

<main class=" flex flex-col w-full">
  <!-- hero -->
  <div
    class=" relative w-full md:px-20 h-[50vh] md:h-[80vh] flex justify-center items-center"
  >
    <div
      class=" w-full h-full flex items-center justify-center md:rounded-3xl overflow-hidden"
    >
      <img
        alt="bookkeeping services hero"
        src={getImageSource()}
        class=" h-full md:aspect-[1920/1200] bg-cover object-cover md:rounded-3xl"
      />
    </div>

    <div
      class=" absolute top-0 left-0 flex items-end justify-center h-full w-full"
    >
      <h1
        class=" text-4xl md:text-5xl mx-2 mb-12 text-center max-w-3xl text-gray-50 tracking-tight"
      >
        {toTitleCase(data.category)}: {data.name}
      </h1>
    </div>
  </div>

  <section
    class=" flex-col flex prose prose-headings:text-gray-200 prose-strong:text-gray-200 font-normal text-gray-300 px-4 md:px-28 lg:px-64 xl:px-96 min-w-full my-20"
  >
    <h2 class=" text-3xl md:text-center self-center tracking-tight font-normal">
      {data.tagline}
    </h2>
    {@html data.content}
  </section>
</main>
