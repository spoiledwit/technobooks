<script lang="ts">
  import "../app.css";
  import Navbar from "./components/navbar.svelte";
</script>

<div class=" min-h-screen bg-slate-50 h-full w-full">
  <Navbar />
  <slot />
</div>
