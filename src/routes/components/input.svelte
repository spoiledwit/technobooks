<script lang="ts">
  export let id: string;
  export let name: string;
  export let label: string;
  export let placeholder: string;
  export let type: string = "text";
  export let required: boolean = false;
</script>

<div>
  <label for={id} class="block mb-2 text-sm font-medium text-gray-700"
    >{label}</label
  >
  <div class="relative mb-6">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
    >
      <slot name="icon" />
    </div>
    <input
      {type}
      {id}
      {name}
      {required}
      class=" border-2 border-gray-300 text-gray-700 text-sm rounded-lg ring-0 focus:border-primary-red block w-full pl-10 p-2.5 bg-white/[0.05] outline-0 transition-all"
      {placeholder}
    />
  </div>
</div>
