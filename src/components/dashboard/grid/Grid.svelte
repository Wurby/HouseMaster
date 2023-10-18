<script lang="ts">
  import { collectionStore } from "sveltefire";
  import { firestore } from "../../../firebase/firebase";
  import type Item from "../item/types/item";
  import { auth } from "../../../firebase/firebase";
  import removeItem from "../item/db/removeItem";

  import ItemComponent from "../item/ItemComponent.svelte";

  const columnHeaders = [
    "Name",
    "Description",
    "Category",
    "Quantity",
    "Unit of Measurement",
    "Location",
    "Expiration Date",
    "Restock Date",
    "Notes",
    "Favorite",
    "Date Added",
  ];

  const ref = `users/${auth.currentUser?.uid}/items`;
  const items = collectionStore<Item>(firestore, ref);

  const handleRemoveItem = (item: Item) => {
    console.log("removing item", item);
    removeItem(item).catch((error) => {
      console.error(error);
    });
  };
</script>

<section
  class="flex h-8 w-full gap-2 divide-x-2 divide-slate-400 border-x-2 border-y-2 border-slate-400 bg-slate-300"
>
  {#each columnHeaders as columnHeader}
    <div class="flex-1 text-center my-auto text-2xs w-28">{columnHeader}</div>
  {/each}
</section>
{#each $items as item, index}
  <ItemComponent
    removeItem={handleRemoveItem}
    className={index % 2 == 1 ? "bg-slate-200" : ""}
    {item}
  />
{/each}
