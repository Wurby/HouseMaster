<script lang="ts">
	import { collectionStore } from 'sveltefire';
	import type Item from '../types/item';
	import { auth, firestore } from '../../../../firebase/firebase';
	import Typography from '../../../general/Typography.svelte';
	import type UnitOfMeasurement from '../types/unit';

	const ref = `users/${auth.currentUser?.uid}/units`;
	const units = collectionStore<UnitOfMeasurement>(firestore, ref);

	export let formField: Item;
</script>

{#if $units.length === 0}
	<Typography variant="h6">No sizes found</Typography>
	<Typography
		href="/settings"
		className="text-xs"
		variant="link">Add a Size</Typography
	>
{:else}
	<label class="relative flex w-full h-full">
		<select
			id="unit"
			required
			placeholder=" "
			class="absolute h-8 text-xs w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
			bind:value={formField.unitOfMeasurement}
		>
			{#each $units as unit}
				<option value={unit.unit}>{unit.unit}</option>
			{/each}
		</select>
		<div
			class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out pointer-events-none"
		>
			<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full"><span class="text-pink-300">* </span>Size</span>
		</div>
	</label>
{/if}
