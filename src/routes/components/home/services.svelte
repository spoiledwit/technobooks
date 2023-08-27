<script lang="ts">
  import FaTeamspeak from "svelte-icons/fa/FaTeamspeak.svelte";
  import FaHandsHelping from "svelte-icons/fa/FaHandsHelping.svelte";
  import FaNetworkWired from "svelte-icons/fa/FaNetworkWired.svelte";
  import FaBattleNet from "svelte-icons/fa/FaBattleNet.svelte";
  import MdLockOutline from "svelte-icons/md/MdLockOutline.svelte";
  import MdGTranslate from "svelte-icons/md/MdGTranslate.svelte";

  const services = [
    {
      id: 1,
      head: "Consultancy",
      content:
        "Today's IT organizations face immense challenges. They must deliver game-changing cloud, big data and analytics capabilities. But they’re also expected to drive innovation and growth with declining budgets. As a result, more than ever, IT infrastructure matters become a must.Site surveying / auditing and consultation (including liaison with outsourcing) to fully identify and understand your organisation’s business and technical network objectives it is our responsibility.",
    },
    {
      id: 2,
      head: "Online Support",
      content:
        "The 24/7 IT Support Center is the first point of contact for many IT applications and services . Our IT staff are available seven days a week, and are ready to help address any computer or technical concerns you have! in case of viruses problems  or if you have any problem with your operating system. connect your computer to the internet, then you can contact the team at our support center for assistance.",
    },
    {
      id: 3,
      head: "Network Services",
      content:
        "The network is the backbone of every modern business.\nTECHNOBOOK's Network Services embrace everything from straightforward point-to-point connectivity to full network design. Our 'enhanced MPLS' network service meets a fundamental business need - that your network must be much more than 'just a piece of wire'.\nLocal Area Network (LAN) and Wide Area Network (WAN) product supply and installation e.g. Switch / Wi-Fi / Router / Firewall / VoIP / Application Accelerator / either centrally or locally purchased, complete with 24hr on-site maintenance service level agreements (SLA’s) including business continuity and sparing option",
    },
    {
      id: 4,
      head: "Data Services",
      content:
        "As you collect more and more data from the marketplace, your customers and from every part of your organization, you need the tools to store it, secure it and, most importantly, extract have a backup from it.\nWe will help you to keep your database organized, managed and saved.",
    },
    {
      id: 5,
      head: "Security",
      content:
        "\nToday, the security landscape has grown substantially more complex. The evolution of a highly networked, data-intensive computing model has introduced significant security risks to IT infrastructures. And, the increasing prevalence of social, mobile, virtualization and cloud technologies present a profound security challenge.\nWe will provide you with the proper solution to have a secured network and workstations from any outside/inside attack.",
    },
    {
      id: 6,
      head: "I.T & Hospitable Training",
      content:
        "world of cutting-edge expertise designed to empower individuals and organizations in the dynamic realm of technology. Our expert-led programs offer personalized curricula, hands-on labs, flexible learning options, and certification preparation, ensuring you stay ahead in an ever-evolving landscape. With a proven record of success, we invite you to join our community, enhance your skills, and embrace limitless opportunities for growth in the digital age. Elevate your journey with us.",
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
    }
  }
</script>

<div
  class=" flex flex-col gap-12 items-center w-full px-4 md:px-20 lg:px-40 xl:px-60"
>
  <h2 class=" text-5xl text-gray-900 text-center">Services We Provide</h2>

  <div
    class=" gap-12 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center"
  >
    {#each services as s, i (s.id)}
      <div
        class=" rounded-xl h-full shadow-2xl shadow-black/10 bg-white flex flex-col p-4 gap-4"
      >
        <div class=" w-20 aspect-square text-gray-700">
          <svelte:component this={getIcon(s.id)} />
        </div>

        <div class=" h-full" />

        <h3 class=" text-gray-700 font-bold tracking-tight text-xl">
          {s.head}
        </h3>
        <p class=" text-gray-500 text-sm">
          {s.content}
        </p>
        <div class=" h-full" />
      </div>
    {/each}
  </div>
</div>
