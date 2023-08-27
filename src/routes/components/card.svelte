<script lang="ts">
  export let className: string = "";
</script>

<div
  class={" border-2 border-slate-300 rounded-md bg-gradient-to-tr from-slate-100 from-50% to-slate-200 p-4" +
    className}
>
  <slot />
</div>
