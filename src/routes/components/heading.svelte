<script>
  export let className = "";
</script>

<div class={" flex flex-col items-center gap-0 w-auto mb-8 " + className}>
  <h2
    class=" text-primary-red text-center md:text-start font-serif text-5xl md:text-7xl tracking-tight"
  >
    <slot />
  </h2>
  <div
    class=" w-[80%] rounded-full h-[2px] bg-gradient-to-r from-transparent via-primary-red to-transparent"
  />
</div>
