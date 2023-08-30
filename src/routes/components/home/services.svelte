<script lang="ts">
  import FaTeamspeak from "svelte-icons/fa/FaTeamspeak.svelte";
  import FaHandsHelping from "svelte-icons/fa/FaHandsHelping.svelte";
  import FaNetworkWired from "svelte-icons/fa/FaNetworkWired.svelte";
  import FaBattleNet from "svelte-icons/fa/FaBattleNet.svelte";
  import MdLockOutline from "svelte-icons/md/MdLockOutline.svelte";
  import MdGTranslate from "svelte-icons/md/MdGTranslate.svelte";
  import DiWebplatform from "svelte-icons/di/DiWebplatform.svelte";
  import DiAndroid from "svelte-icons/di/DiAndroid.svelte";
  import DiCodeBadge from "svelte-icons/di/DiCodeBadge.svelte";
  import DiMarkdown from "svelte-icons/di/DiMarkdown.svelte";

  const technicalServices = [
    {
      id: 7,
      href: "web",
      head: "Web Design",
      content:
        "Our expert web design team combines creativity and functionality to create stunning websites that captivate your audience.",
    },
    {
      id: 8,
      href: "digital-marketing",
      head: "Digital Marketing",
      content:
        "Our team of digital marketing experts excels in creating tailored strategies that drive targeted traffic, increase brand visibility, and generate measurable results.",
    },
    {
      id: 9,
      href: "software-development",
      head: "Software Development",
      content:
        "Transform your business operations with our custom software development solutions.",
    },
    {
      id: 10,
      href: "app-development",
      head: "App Development",
      content:
        "Our skilled app development team possesses a deep understanding of the latest mobile technologies and platforms.",
    },
  ];
  const financialServices = [
    {
      id: 1,
      href: "recording-financial-transactions",
      head: "Recording Financial Transactions",
      content:
        "Our meticulous bookkeeping ensures accurate transaction recording, organized ledgers, seamless bank reconciliations, and expert accounts management.",
    },
    {
      id: 2,
      href: "balance-sheets",
      head: "Financial Statement",
      content:
        "Crafting transparent financial insights, our services include precise balance sheets, comprehensive income statements, and insightful cash flow statements.",
    },
    {
      id: 3,
      href: "corporate-tax-planning",
      head: "Taxation Services",
      content:
        "Navigating taxes effortlessly: from VAT returns to corporate tax planning and compliance, our experts ensure accurate reporting.",
    },
    {
      id: 4,
      href: "payroll-processing",
      head: "Payroll Services",
      content:
        "Seamless payroll management: from processing to benefits administration, ensuring accurate tax forms and employee satisfaction.",
    },
    {
      id: 5,
      href: "financial-ratio-analysis",
      head: "Financial Analysis & Reporting",
      content:
        "Expert financial insights: ratios, budgets, forecasts, tailored reports.",
    },
    {
      id: 6,
      href: "external-and-internal-audits",
      head: "Auditing & Assurance",
      content:
        "Thorough auditing for financial integrity: external and internal assessments to ensure accurate records and confident decision-making.",
    },
  ];

  function getIcon(id: number) {
    switch (id) {
      case 1:
        return FaTeamspeak;
      case 2:
        return FaHandsHelping;
      case 3:
        return FaNetworkWired;
      case 4:
        return FaBattleNet;
      case 5:
        return MdLockOutline;
      case 6:
        return MdGTranslate;
      case 7:
        return DiWebplatform;
      case 8:
        return DiMarkdown;
      case 9:
        return DiCodeBadge;
      case 10:
        return DiAndroid;
    }
  }
</script>

<div
  class=" flex flex-col overflow-x-hidden gap-12 items-center w-full px-4 md:px-20 lg:px-40 xl:px-60"
>
  <h2 class=" text-5xl md:text-7xl font-serif text-red-200 text-center">
    Services We Provide
  </h2>

  <div
    class=" mt-20 relative gap-12 w-full grid grid-cols-1 md:grid-cols-2 items-center lg:px-20 xl:px-40"
  >
    <div class=" w-screen h-96 -top-8 left-1/2 absolute">
      <h3 class=" text-bg text-white/20 w-min -translate-x-1/2">Technical</h3>
    </div>
    {#each technicalServices as s (s.id)}
      <a
        href={`/services/${s.href}`}
        class=" z-10 card bg-gradient-radial text-gray-500 from-gray-400 hover:from-red-500 to-transparent h-full p-[2px] transition-all"
      >
        <div class=" rounded-xl h-full bg-zinc-900 flex flex-col p-4 gap-4">
          <div class=" w-20 aspect-square">
            <svelte:component this={getIcon(s.id)} />
          </div>

          <div class=" h-full" />

          <h3 class=" transition-all font-bold tracking-tight text-xl">
            {s.head}
          </h3>
          <p class=" text-sm transition-all">
            {s.content}
          </p>
          <div class=" h-full" />
        </div>
      </a>
    {/each}
  </div>

  <div
    class=" relative mt-20 gap-12 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center"
  >
    <div class=" w-screen h-96 -top-8 left-1/2 absolute">
      <h3 class=" text-bg text-white/20 w-min -translate-x-1/2">Financial</h3>
    </div>
    {#each financialServices as s (s.id)}
      <a
        href={`/services/${s.href}`}
        class=" card z-10 bg-gradient-radial text-gray-500 from-gray-400 hover:from-red-500 to-transparent h-full p-[2px] transition-all"
      >
        <div class=" rounded-xl h-full bg-zinc-900 flex flex-col p-4 gap-4">
          <div class=" w-20 aspect-square">
            <svelte:component this={getIcon(s.id)} />
          </div>

          <div class=" h-full" />

          <h3 class=" transition-all font-bold tracking-tight text-xl">
            {s.head}
          </h3>
          <p class=" text-sm transition-all">
            {s.content}
          </p>
          <div class=" h-full" />
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .card:hover > div > p {
    color: #9ca3af;
  }
  .card:hover {
    color: #ef4444;
  }
  .card:hover > div > h3 {
    color: #d1d5db;
  }
  .card > div > h3 {
    color: #9ca3af;
  }
  .text-bg {
    font-size: 120px;
    line-height: 12px;
  }
</style>
