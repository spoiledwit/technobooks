<script lang="ts">
  import "../app.css";
  import Footer from "./components/footer.svelte";
  import Navbar from "./components/navbar/navbar.svelte";
  import FaFacebook from "svelte-icons/fa/FaFacebook.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import InfoHeader from "./components/navbar/infoHeader.svelte";
</script>

<div class=" min-h-screen bg-zinc-100 h-full w-full">
  <div class="flex absolute right-10 top-10" />
  <InfoHeader />
  <Navbar />
  <slot />
  <Footer />

  <div
    class="fixed hidden glass p-2 bg-white/50 top-1/2 right-10 transform -translate-y-1/2 md:flex flex-col items-center space-y-4 z-50"
  >
    <!-- Facebook -->
    <a
      href="https://www.facebook.com/profile.php?id=61550876102941"
      target="_blank"
      class=" w-5 aspect-square text-gray-400 hover:text-gray-500 transition duration-150"
    >
      <FaFacebook />
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com" class=" w-5 aspect-square text-gray-400 hover:text-gray-500 transition duration-150" target="_blank">
      <FaInstagram />
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com" class=" w-5 aspect-square text-gray-400 hover:text-gray-500 transition duration-150" target="_blank">
      <FaLinkedin />
    </a>
  </div>
</div>
