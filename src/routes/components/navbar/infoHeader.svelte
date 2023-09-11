<script>
  import FaFacebook from "svelte-icons/fa/FaFacebook.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
</script>

<div class="bg-primary-red h-[30px] items-center w-full flex text-white md:px-28 px-3 justify-between">
    
    <a href="mailto:info@tbcgulf.com" class="text-white hover:text-gray-100 text-xs md:text-[14px] transition duration-150" target="_blank">
        info@tbcgulf.com
    </a> 
    <div class="flex gap-2">
    <!-- Facebook -->
    <a
      href="https://www.facebook.com/profile.php?id=61550876102941"
      target="_blank"
      class=" w-5 aspect-square text-white hover:text-gray-100 transition duration-150"
    >
      <FaFacebook />
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com" class=" w-5 aspect-square  text-white hover:text-gray-100 transition duration-150" target="_blank">
      <FaInstagram />
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com" class=" w-5 aspect-square text-white hover:text-gray-100 transition duration-150" target="_blank">
      <FaLinkedin />
    </a>
  </div>
  </div>
  