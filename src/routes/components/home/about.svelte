<script>
  import about from "../../../assets/img/home-about.png";
  import office from "../../../assets/img/office.jpg";
</script>

<div class=" flex flex-col md:flex-row px-4 md:px-20 lg:px-40 xl:px-60">
  <div class=" w-full rounded-md bg-white/10">
    <img loading="lazy" alt="about us" src={about} class=" rounded-xl" />
  </div>
  <div
    class=" mx-10 -mb-72 bg-gradient-to-t from-transparent via-red-500 to-transparent min-h-full w-px"
  />
  <div class=" w-full rounded-md bg-zinc-900">
    <h2
      class=" text-red-200 font-serif text-5xl md:text-7xl mb-8 tracking-tight"
    >
      About Us
    </h2>
    <p class=" text-gray-300 leading-7 text-lg">
      Technobooks is a cutting-edge accounts & technology company that provides
      innovative solutions for businesses of all sizes. Founded in 2022, we are
      dedicated to helping our clients achieve their goals through our
      customized and effective technology solutions. With over a decade of
      experience, we have built a reputation for delivering high-quality
      services to our clients.
    </p>
  </div>
</div>
<div class=" flex gap-16 w-full h-40 px-4 md:px-20 lg:px-40 xl:px-60">
  <div
    class=" p-[2px] bg-gradient-radial from-red-500 rounded-xl to-transparent w-full h-full"
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
  <div class=" w-full h-full">
    <img alt="office" src={office} class=" rounded-xl w-full h-full" />
  </div>
</div>
