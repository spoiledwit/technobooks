<script lang="ts">
  import client1 from "../../../assets/img/client1.webp";
  import client2 from "../../../assets/img/client2.webp";
  import Heading from "../heading.svelte";

  const testimonials = [
    {
      client: {
        name: "Jeff Thompson",
        position: "Founder of FashionFusion",
        link: "#",
      },
      text: "Working with Technobooks was an absolute pleasure. They grasped our vision from the start and created an e-commerce website that perfectly captures our brand essence. The user-friendly interface and stunning visuals have helped us grow our online sales.",
      image: client1,
    },
    {
      client: {
        name: "Micheal Johnson",
        position: "Marketing Director at Globex Corporation",
        link: "#",
      },
      text: "Technobooks Solutions played a pivotal role in our digital transformation. Their digital marketing strategies generated impressive results, driving more qualified leads to our website and boosting our online visibility. Their expertise and professionalism are unparalleled.",
      image: client2,
    },
  ];
</script>

<div class=" flex flex-col gap-12">
  <Heading className=" self-center">Hear From Our Clients</Heading>
  <div class=" flex flex-col gap-8 px-4 md:px-20 lg:px-40 xl:px-60">
    {#each testimonials as t}
      <div
        class=" flex flex-col md:flex-row gap-2 md:gap-8 items-center w-full"
      >
        <a href={t.client.link} class=" flex items-center gap-4">
          <img
            loading="lazy"
            alt={`${t.client.name} profile picture`}
            src={t.image}
            class=" w-24 md:w-32 rounded-full aspect-square object-cover object-center"
          />
          <h4 class=" text-xl md:w-96 text-gray-700 tracking-tight">
            {t.client.name}, {t.client.position}
          </h4>
        </a>
        <div
          class=" flex flex-col-reverse md:flex-row gap-2 md:gap-8 items-center"
        >
          <p class=" text-primary-gray w-full">{t.text}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .card {
  }
</style>
