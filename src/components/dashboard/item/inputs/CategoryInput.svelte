<script lang="ts">
	import { collectionStore } from 'sveltefire';
	import type Item from '../types/item';
	import type Category from '../types/category';
	import { auth, firestore } from '../../../../firebase/firebase';
	import Typography from '../../../general/Typography.svelte';

	const ref = `users/${auth.currentUser?.uid}/categories`;
	const categories = collectionStore<Category>(firestore, ref);

	export let formField: Item;
</script>

{#if $categories.length === 0}
	<Typography variant="h6">No categories found</Typography>
	<Typography
		href="/settings"
		className="text-xs"
		variant="link">Add a category</Typography
	>
{:else}
	<label class="relative flex w-full h-full">
		<select
			id="category"
			required
			placeholder=" "
			class="absolute h-8 text-xs w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
			bind:value={formField.category}
		>
			{#each $categories as category}
				<option value={category.category}>{category.category}</option>
			{/each}
		</select>
		<div
			class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out pointer-events-none"
		>
			<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full"
				><span class="text-pink-300">* </span>Category</span
			>
		</div>
	</label>
{/if}
