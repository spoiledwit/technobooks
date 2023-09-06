<script lang="ts">
  import "../app.css";
  import Footer from "./components/footer.svelte";
  import Navbar from "./components/navbar/navbar.svelte";
  import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
</script>

<div class=" min-h-screen bg-zinc-900 h-full w-full">
  <div class="flex absolute right-10 top-10">

  </div>
  <Navbar />
  <slot />
  <Footer /> 
  
  <div class="fixed glass p-2 top-1/2 right-10 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
    <!-- Facebook -->
    <a href="https://www.facebook.com/profile.php?id=61550876102941" target="_blank" class=" w-5 aspect-square text-gray-300">
      <FaFacebook />
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com" class=" w-5 aspect-square text-gray-300">
      <FaInstagram size="32" color="#fff" />
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com" class=" w-5 aspect-square text-gray-300">
      <FaLinkedin size="32" color="#fff" />
    </a>
  </div>
</div>