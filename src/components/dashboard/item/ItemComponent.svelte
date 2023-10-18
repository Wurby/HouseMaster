<script lang="ts">
  import Button from "../../general/Button.svelte";
  import Typography from "../../general/Typography.svelte";
  import Modal from "../../modal/Modal.svelte";
  import type Item from "./types/item";
  export let className = "";
  export let removeItem: (item: Item) => void;
  export let item: Item;

  $: modalVisible = false;

  const handleRemoveItem = (modalResponse: CustomEvent<string>) => {
    if (modalResponse.detail === "confirm") {
      removeItem(item);
      modalVisible = false;
    }
    modalVisible = false;
  };
</script>

<div class="relative">
  <Modal
    on:modalResponse={(modalResponse) => handleRemoveItem(modalResponse)}
    visible={modalVisible}
    variant="confirm"
    title="Delete Item"
  >
    <Typography>Are you sure you want to remove this item?</Typography>
  </Modal>
  <Button
    onClick={() => (modalVisible = true)}
    className="absolute -right-7 top-1 fill-pink-300"
    variant="icon"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="h-full w-full"
      ><path
        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
      /></svg
    >
  </Button>
  <section
    class={`flex h-8 w-full gap-2 divide-x-2 border-x-2 border-b-2 border-slate-300 text-ellipsis overflow-hidden hover:overflow-visible ${className}`}
  >
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.name ? item.name : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.description ? item.description : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.category ? item.category : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.quantity ? item.quantity : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.unitOfMeasurement ? item.unitOfMeasurement : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.location ? item.location : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.expirationDate ? item.expirationDate : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.restockDate ? item.restockDate : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.notes ? item.notes : "-"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.favorite ? "Yes" : "No"}
    </div>
    <div
      class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
    >
      {item.dateAdded ? item.dateAdded : "-"}
    </div>
  </section>
</div>
