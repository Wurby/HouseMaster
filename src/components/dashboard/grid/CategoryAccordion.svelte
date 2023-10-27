<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import Typography from '../../general/Typography.svelte';
	import ItemComponent from '../item/ItemComponent.svelte';
	import MobileItemComponent from '../item/MobileItemComponent.svelte';
	import type Item from '../item/types/item';
	import Button from '../../general/Button.svelte';
	import { flip } from 'svelte/animate';

	export let category = '';
	export let mobileColumnHeaders: string[] = [];
	export let columnHeaders: string[] = [];
	export let items: Item[];
	export let handleRemoveItem: (item: Item) => void;
	export let variant: 'mobile' | 'desktop';
	$: collapsed = true;

	const handleCollapse = () => {
		collapsed = !collapsed;
	};
</script>

{#if variant === 'mobile'}
	<section
		class="w-full"
		in:fade|global={{ delay: 450 }}
		out:fade|global
	>
		<section
			class="px-2 flex h-8 w-full justify-between gap-2 border-2 border-slate-500 bg-slate-400 items-center"
			on:click={handleCollapse}
			on:keydown={handleCollapse}
			role="button"
			tabindex="0"
		>
			<Typography variant="h4">{category}</Typography>

			<div class="h-full fill-slate-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-full h-full"
					viewBox="0 0 448 512"
					><path
						d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
					/></svg
				>
			</div>
		</section>
		{#if !collapsed}
			<section
				class="w-full"
				transition:fly={{ duration: 400, y: -10 }}
			>
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
		{/if}
	</section>
{:else}
	<section
		class="w-full"
		in:fade|global={{ delay: 450 }}
		out:fade|global
	>
		<section
			class=" px-2 flex justify-between h-8 w-full gap-2 border-2 border-slate-500 bg-slate-400 items-center"
			role="button"
			tabindex="0"
			on:click={handleCollapse}
			on:keydown={handleCollapse}
		>
			<Typography variant="h4">{category}</Typography>

			<div class="h-full fill-slate-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-full h-full"
					viewBox="0 0 448 512"
					><path
						d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
					/></svg
				>
			</div>
		</section>
		{#if !collapsed}
			<div
				class="w-full"
				transition:fly={{ duration: 400, y: -10 }}
			>
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
			</div>
		{/if}
	</section>
{/if}
