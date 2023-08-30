<script lang="ts">
  export let className: string = "";
</script>

<div
  class={" border-2 border-zinc-800 rounded-md bg-gradient-to-tr from-zinc-900 from-50% to-zinc-800 p-4" +
    className}
>
  <slot />
</div>
