<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "./Typography.svelte";

  type Variant = "primary" | "secondary" | "icon";

  export let variant: Variant = "primary";
  export let className: string = "";
  export let onClick: () => void;

  $: classes = "";

  onMount(() => {
    if (variant === "secondary") {
      classes = `rounded-full px-2 ring-1 ring-slate-500 bg-slate-300 hover:bg-slate-800 hover:text-white active:translate-y-px shadow-md ${className}`;
    }
    if (variant === "primary") {
      classes = `rounded-full px-2 ring-1 ring-slate-500 bg-slate-200 hover:bg-slate-800 hover:text-white active:translate-y-px shadow-md ${className}`;
    }
    if (variant === "icon") {
      classes = `rounded-full w-6 h-6 p-1 ring-1 ring-slate-500 active:translate-y-px shadow-md ${className}`;
    }
  });
</script>

{#if variant != "icon"}
  <button class={classes} on:click={onClick}>
    <Typography variant="button">
      <slot />
    </Typography>
  </button>
{:else}
  <button class={classes} on:click={onClick}>
    <slot />
  </button>
{/if}
