<script>
  import FaFacebook from "svelte-icons/fa/FaFacebook.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
</script>

<div class="bg-primary-red h-[37px] items-center w-full flex text-white md:px-28 px-3 justify-between">
  <a href="tel:+971521508056" class="text-white mr-10 md:ml-auto hover:text-gray-100 text-[16px] transition duration-150" target="_blank">
    +971 547802470
  </a> 
    <div class="flex gap-2">
    <!-- Facebook -->
    <a
      href="https://www.facebook.com/profile.php?id=61550876102941"
      target="_blank"
      class=" w-6 aspect-square text-white hover:text-gray-100 transition duration-150"
    >
      <FaFacebook />
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com" class=" w-6 aspect-square  text-white hover:text-gray-100 transition duration-150" target="_blank">
      <FaInstagram />
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com" class=" w-6 aspect-square text-white hover:text-gray-100 transition duration-150" target="_blank">
      <FaLinkedin />
    </a>
  </div>
  </div>
  