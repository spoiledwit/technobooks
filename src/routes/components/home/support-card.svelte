<script lang="ts">
  export let index: number;
</script>

<div
  class=" rounded-xl flex flex-col items-center gap-6 shadow-2xl shadow-black/10"
>
  <slot name="icon" />
  <div
    class=" bg-white h-min relative flex flex-col items-center gap-4 rounded-xl px-4 pb-8"
  >
    <div
      class="bg-slate-100 p-4 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl h-14 aspect-square grid place-items-center"
    >
      <p class=" text-xl text-gray-700 font-bold">
        {index}
      </p>
    </div>
    <h3
      class=" text-xl text-center mt-12 font-bold text-gray-700 tracking-tight"
    >
      <slot name="head" />
    </h3>
    <p class=" text-sm text-center text-gray-500">
      <slot name="content" />
    </p>
  </div>
</div>
