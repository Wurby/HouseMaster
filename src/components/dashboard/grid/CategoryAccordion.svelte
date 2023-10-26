<script lang="ts">
	import { fade } from 'svelte/transition';
	import Typography from '../../general/Typography.svelte';
	import ItemComponent from '../item/ItemComponent.svelte';
	import MobileItemComponent from '../item/MobileItemComponent.svelte';
	import type Item from '../item/types/item';

	export let category = '';
	export let mobileColumnHeaders: string[] = [];
	export let columnHeaders: string[] = [];
	export let items: Item[];
	export let handleRemoveItem: (item: Item) => void;
	export let variant: 'mobile' | 'desktop';
</script>

{#if variant === 'mobile'}
	<section
		class="w-full"
		in:fade|global={{ delay: 450 }}
		out:fade|global
	>
		<section class=" px-2 flex h-8 w-full gap-2 border-2 border-slate-500 bg-slate-400 items-center">
			<Typography variant="h4">{category}</Typography>
		</section>
		<section class="flex h-8 w-full border-x-2 border-b-2 border-slate-400 bg-slate-300">
			<div class="flex h-8 w-full gap-2 divide-x-2 divide-slate-400">
				{#each mobileColumnHeaders as columnHeader}
					<div class="flex-1 text-center my-auto text-2xs w-28">{columnHeader}</div>
				{/each}
			</div>
		</section>
		{#each items as item, index}
			<MobileItemComponent
				removeItem={handleRemoveItem}
				className={index % 2 == 1 ? 'bg-slate-200' : ''}
				{item}
			/>
		{/each}
	</section>
{:else}
	<section
		class="w-full"
		in:fade|global={{ delay: 450 }}
		out:fade|global
	>
		<section class=" px-2 flex h-8 w-full gap-2 border-2 border-slate-500 bg-slate-400 items-center">
			<Typography variant="h4">{category}</Typography>
		</section>
		<section
			class="flex h-8 w-full gap-2 divide-x-2 divide-slate-400 border-x-2 border-b-2 border-slate-400 bg-slate-300"
		>
			{#each columnHeaders as columnHeader}
				<div class="flex-1 text-center my-auto text-2xs w-28">{columnHeader}</div>
			{/each}
		</section>
		{#each items as item, index}
			<ItemComponent
				removeItem={handleRemoveItem}
				className={index % 2 == 1 ? 'bg-slate-200' : ''}
				{item}
			/>
		{/each}
	</section>
{/if}
