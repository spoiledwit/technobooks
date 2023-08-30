<script lang="ts">
  export let className: string = "";
  export let disabled: boolean = false;
  export let type: "button" | "reset" | "submit" = "button";
</script>

<button
  {type}
  {disabled}
  class={" rounded-md flex items-center justify-center text-white font-bold bg-red-500 hover:bg-red-400 transition-all " +
    className}
>
  <slot />
</button>
