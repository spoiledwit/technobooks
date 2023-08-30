<script lang="ts">
  import "../app.css";
  import Footer from "./components/footer.svelte";
  import Navbar from "./components/navbar/navbar.svelte";
</script>

<div class=" min-h-screen bg-zinc-900 h-full w-full">
  <Navbar />
  <slot />
  <Footer />
</div>
