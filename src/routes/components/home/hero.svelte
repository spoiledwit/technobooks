<script>
  import CTA from "../cta.svelte";
	let bgImage = 'https://scontent.flyp1-1.fna.fbcdn.net/v/t1.6435-9/116254608_114519363681211_6842813986291018124_n.jpg?stp=c98.0.1035.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=0WxDe6SjLlkAX_MhFaI&_nc_ht=scontent.flyp1-1.fna&oh=00_AfCCL7geWaCNsreRgnI1wNRgc-VPu56uYK9KEaCVCyf2kA&oe=651DF2B1';
</script>

<div
  class=" w-full h-screen relative overflow-hidden pb-12"
  style="background-image: url('{bgImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  "
  >

  <div
    class="mt-40"
  />

  <div class="flex flex-col md:flex-row px-4 md:px-20 gap-8 md:gap-32">
    <div class=" flex flex-col gap-12 w-full h-full justify-center leading">
      <h1 class="text-5xl md:text-7xl text-center md:text-start text-gray-300">
        Bridging Finance and <br> Technology for <br> <strong class=" text-red-300"> Business Growth </strong>
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
    </div>
    <div>
  </div>

  </div>
</div>
