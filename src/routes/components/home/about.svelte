<script>
  import about from "../../../assets/finance1.png";
  import office from "../../../assets/finaneCover1.jpg";
</script>

<div class=" flex flex-col md:flex-row px-4 md:px-20 lg:px-40 xl:px-60">
  <div class=" w-full h-full rounded-md bg-white/10">
    <img loading="lazy" alt="about us" src={about} class=" rounded-xl" />
  </div>
  <div
    class=" hidden md:block mx-10 -mb-72 bg-gradient-to-t from-transparent via-red-500 to-transparent min-h-full w-px"
  />
  <div class=" w-full mt-12 md:mt-0 rounded-md bg-zinc-900">
    <h2
      class=" text-red-200 text-center md:text-start font-serif text-5xl md:text-7xl mb-8 tracking-tight"
    >
      About Us
    </h2>
    <p class=" text-gray-300 leading-7 text-lg text-justify md:text-start">
      Technobooks is a cutting-edge accounts & technology company that provides
      innovative solutions for businesses of all sizes. Founded in 2022, we are
      dedicated to helping our clients achieve their goals through our
      customized and effective technology solutions. With over a decade of
      experience, we have built a reputation for delivering high-quality
      services to our clients.
    </p>
  </div>
</div>
<div
  class=" flex flex-col md:flex-row gap-16 w-full px-4 md:px-20 lg:px-40 xl:px-60"
>
  <div
    class=" h-32 md:h-40 p-[2px] bg-gradient-radial from-red-500 rounded-xl to-transparent w-full"
  >
    <div
      class=" flex justify-between items-center px-16 w-full h-full bg-zinc-900 rounded-xl"
    >
      <section class=" flex flex-col items-center gap-2">
        <p class=" text-3xl text-gray-300">2022</p>
        <h3 class=" text-xl text-gray-300">Founded</h3>
      </section>
      <section class=" flex flex-col items-center gap-2">
        <p class=" text-3xl text-gray-300">23</p>
        <h3 class=" text-xl text-gray-300">Projects</h3>
      </section>
      <section class=" flex flex-col items-center gap-2">
        <p class=" text-3xl text-gray-300">10</p>
        <h3 class=" text-xl text-gray-300">Awards</h3>
      </section>
    </div>
  </div>
  <div class=" w-full h-32 md:h-40">
    <img alt="office" src={office} class=" rounded-xl w-full h-full" />
  </div>
</div>
