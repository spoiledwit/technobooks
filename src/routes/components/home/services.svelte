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
  import FaSearchengin from "svelte-icons/fa/FaSearchengin.svelte";
  import FaMapMarkedAlt from "svelte-icons/fa/FaMapMarkedAlt.svelte";
  import Heading from "../heading.svelte";

  const technicalServices = [
    {
      id: 7,
      href: "web",
      head: "Web Design",
      content:
        "Unlock your online potential with our Web Development services. Our team crafts stunning, responsive websites that captivate your audience and drive conversions. From design to deployment, we handle the technicalities, allowing you to focus on your business's growth and success.",
    },
    {
      id: 8,
      href: "digital-marketing",
      head: "Digital Marketing",
      content:
        "Amplify your online presence through our Digital Marketing services. We harness the power of data-driven strategies, creative content, and targeted campaigns to expand your brand's reach and drive results. Let us handle your digital marketing efforts, while you focus on growing your business and achieving your goals.",
    },
    {
      id: 9,
      href: "software-development",
      head: "Software Development",
      content:
        "Turn your innovative ideas into functional reality with our Custom Software Development solutions. Our expert team will create tailored software applications that streamline your processes and boost efficiency. From concept to deployment, we handle the entire development journey, leaving you free to concentrate on your core business objectives.",
    },
    {
      id: 10,
      href: "app-development",
      head: "App Development",
      content:
        "Our skilled app development team possesses a deep understanding of the latest mobile technologies and platforms.",
    },
    {
      id: 11,
      href: "seo",
      head: "Search Engine Optimizations",
      content:
        "Boost your online presence with our comprehensive SEO services. We conduct in-depth keyword research, on-page and off-page optimization, and provide regular performance reports to ensure your website stays at the top of search results.",
    },
    {
      id: 12,
      href: "social-media-management",
      head: "Social Media Management",
      content:
        "Elevate your brand on social media with our management services. We create engaging content, interact with your audience, and deliver performance insights, so you can focus on business growth. Let us handle your online presence while you reap the rewards.",
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
      case 11:
        return FaSearchengin;
      case 12:
        return FaMapMarkedAlt;
    }
  }
</script>

<div
  class=" flex flex-col overflow-x-hidden gap-0 items-center w-full px-4 md:px-20 lg:px-40 xl:px-60"
>
  <Heading>Services We Provide</Heading>

  <h3 class=" mt-20 whitespace-nowrap text-6xl text-bg text-black/20 w-min">
    IT Services
  </h3>
  <!-- Technical Services -->
  <div
    class=" relative md:mt-12 gap-4 md:gap-12 w-full grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center"
  >
    {#each technicalServices as s (s.id)}
      <a
        href={`/services/${s.href}`}
        class=" z-10 w-full card bg-gradient-radial text-gray-500 from-gray-400 hover:from-primary-red to-transparent h-full p-[2px] transition-all"
      >
        <div class=" rounded-xl h-full bg-zinc-100 flex flex-col p-4 gap-4">
          <div class=" w-20 aspect-square">
            <svelte:component this={getIcon(s.id)} />
          </div>

          <div class=" h-full" />

          <h3 class=" transition-all font-bold tracking-tight text-xl">
            {s.head}
          </h3>
          <p class=" text-sm text-primary-gray transition-all">
            {s.content}
          </p>
          <div class=" h-full" />
        </div>
      </a>
    {/each}
  </div>

  <!-- Financial Services -->
  <h3 class=" text-6xl mt-20 text-bg text-black/20 w-min">Financial</h3>
  <div
    class=" relative md:mt-12 gap-12 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center"
  >
    {#each financialServices as s (s.id)}
      <a
        href={`/services/${s.href}`}
        class=" card z-10 bg-gradient-radial text-gray-500 from-primary-gray hover:from-red-600 to-transparent h-full p-[2px] transition-all"
      >
        <div class=" rounded-xl h-full bg-zinc-100 flex flex-col p-4 gap-4">
          <div class=" w-20 aspect-square">
            <svelte:component this={getIcon(s.id)} />
          </div>

          <div class=" h-full" />

          <h3 class=" transition-all font-bold tracking-tight text-xl">
            {s.head}
          </h3>
          <p class=" text-sm text-primary-gray transition-all">
            {s.content}
          </p>
          <div class=" h-full" />
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .card:hover {
    color: #ef4444;
  }
  @media (max-width: 768px) {
    .card {
      color: #ef4444;
    }
    .card > div > h3 {
      color: #727272;
    }
  }
  @media (min-width: 768px) {
    .card > div > h3 {
      color: #9ca3af;
    }
  }
  .card:hover > div > h3 {
    color: #727272;
  }
  @media (min-width: 768px) {
    .text-bg {
      font-size: 120px;
      line-height: 12px;
    }
  }
</style>
