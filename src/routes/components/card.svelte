<script lang="ts">
  export let className: string = "";
</script>

<div
  class={" border-2 border-zinc-400 rounded-md bg-gradient-to-tr from-zinc-100 from-50% to-zinc-200 p-4" +
    className}
>
  <slot />
</div>
