<script lang="ts">
	import { collectionStore } from 'sveltefire';
	import { firestore } from '../../../firebase/firebase';
	import type Item from '../item/types/item';
	import { auth } from '../../../firebase/firebase';
	import removeItem from '../item/db/removeItem';

	import ItemComponent from '../item/ItemComponent.svelte';
	import MobileItemComponent from '../item/MobileItemComponent.svelte';
	import { derived, writable } from 'svelte/store';
	import Typography from '../../general/Typography.svelte';
	import { onMount } from 'svelte';
	import Button from '../../general/Button.svelte';
	import CategoryAccordion from './CategoryAccordion.svelte';
	import { fade } from 'svelte/transition';

	export let categoryView = false;

	const columnHeaders = [
		'Name',
		'Description',
		'Category',
		'Quantity',
		'Unit of Measurement',
		'Location',
		'Expiration Date',
		'Restock Date',
		'Notes',
		'Favorite',
		'Date Added',
	];

	const mobileColumnHeaders = ['Name', 'Category', 'Quantity', 'Location', 'Expiration Date'];

	const ref = `users/${auth.currentUser?.uid}/items`;
	const items = collectionStore<Item>(firestore, ref);
	const itemsByCategory = writable<Record<string, Item[]>>({});

	const groupItemsByCategory = () => {
		items.subscribe(($items) => {
			const grouped = $items.reduce(
				(acc, item) => {
					const category = item.category;
					if (!acc[category]) {
						acc[category] = [];
					}
					acc[category].push(item);
					return acc;
				},
				{} as { [key: string]: Item[] }
			);
			itemsByCategory.set(grouped);
		});
	};

	onMount(() => {
		groupItemsByCategory();
	});

	const handleRemoveItem = (item: Item) => {
		removeItem(item).catch((error) => {
			console.error(error);
		});
	};
</script>

{#if categoryView}
	<!-- MobileView -->
	<section
		class="w-full h-full flex flex-col gap-8 md:hidden"
		transition:fade|global
	>
		{#each Object.entries($itemsByCategory) as [category, items]}
			<CategoryAccordion
				{items}
				{mobileColumnHeaders}
				{category}
				{handleRemoveItem}
				variant="mobile"
			/>
		{/each}
	</section>

	<!-- DesktopView -->
	<section
		class="w-full h-full flex-col gap-8 hidden md:flex"
		transition:fade|global
	>
		{#each Object.entries($itemsByCategory) as [category, items]}
			<CategoryAccordion
				{items}
				{columnHeaders}
				{category}
				{handleRemoveItem}
				variant="desktop"
			/>
		{/each}
	</section>
{:else}
	<!-- MobileView -->
	<section
		class="w-full h-full flex flex-col md:hidden"
		in:fade|global={{ delay: 450 }}
		out:fade|global
	>
		<div class="flex h-8 w-full gap-2 divide-x-2 divide-slate-400 border-2 border-slate-400 bg-slate-300">
			{#each mobileColumnHeaders as columnHeader}
				<div class="flex-1 text-center my-auto text-2xs w-28">{columnHeader}</div>
			{/each}
		</div>
		{#each $items as item, index}
			<MobileItemComponent
				removeItem={handleRemoveItem}
				className={index % 2 == 1 ? 'bg-slate-200' : ''}
				{item}
			/>
		{/each}
	</section>

	<!-- DesktopView -->
	<section
		class="w-full h-full hidden md:flex flex-col"
		in:fade|global={{ delay: 450 }}
		out:fade|global
	>
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
				className={index % 2 == 1 ? 'bg-slate-200' : ''}
				{item}
			/>
		{/each}
	</section>
{/if}
