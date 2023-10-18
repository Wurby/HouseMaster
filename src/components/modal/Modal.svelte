<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Typography from "../general/Typography.svelte";
  import Button from "../general/Button.svelte";

  type Variant = "info" | "confirm" | "addItem";

  export let title: string;
  export let variant: Variant = "info";
  export let visible: boolean = false;

  const dispatch = createEventDispatcher();

  const handleCloseModal = (confirmed: boolean = false) => {
    if (confirmed) {
      dispatch("modalResponse", "confirm");
      visible = false;
    } else if (!confirmed) {
      dispatch("modalResponse", "cancel");
      visible = false;
    } else {
      visible = false;
    }
  };
</script>

{#if visible}
  <section
    class="fixed inset-0 z-20 flex justify-center items-center pointer-events-none"
  >
    <div
      class="flex flex-wrap bg-slate-100 rounded-lg shadow-lg border-2 border-slate-300 p-4 w-5/12 pointer-events-auto"
    >
      <header
        class="flex w-full justify-between items-center mb-4 mx-12 border-b-2 border-slate-400"
      >
        <Typography variant="h3" className="w-full text-center pb-2"
          >{title}</Typography
        >
      </header>
      <section class="grow w-full">
        <slot />
      </section>
      <section class="pt-4 w-full flex justify-center gap-4">
        {#if variant == "info"}
          <Button variant="primary" onClick={() => handleCloseModal(false)}
            >Ok</Button
          >
        {/if}
        {#if variant == "confirm"}
          <Button variant="secondary" onClick={() => handleCloseModal(false)}
            >Cancel</Button
          >
          <Button variant="primary" onClick={() => handleCloseModal(true)}
            >Confirm</Button
          >
        {/if}
      </section>
    </div>
  </section>
  <button
    class="fixed left-0 top-0 z-10 w-full h-full bg-black opacity-50"
    on:click={() => handleCloseModal(false)}
  />
{/if}
