<script lang="ts">
	import { slide } from 'svelte/transition';
	import addItem from './db/addItem';
	import CategoryInput from './inputs/CategoryInput.svelte';
	import FavoriteCheck from './inputs/FavoriteCheck.svelte';
	import UnitInput from './inputs/UnitInput.svelte';
	import type Item from './types/item';

	export let visible = false;

	$: formField = {
		id: '',
		name: '',
		description: '',
		category: '',
		quantity: null,
		unitOfMeasurement: [],
		location: '',
		expirationDate: '',
		restockDate: '',
		notes: '',
		favorite: false,
		dateAdded: new Date().toISOString().slice(0, 10),
	} as Item;

	const handleSubmit = () => {
		addItem(formField).catch((error) => {
			console.log(error);
		});
		console.log(formField);
		visible = false;
	};
</script>

{#if visible}
	<section
		class="w-full mt-4"
		transition:slide={{ duration: 150, delay: 200, axis: 'y' }}
	>
		<form
			class="w-full flex flex-wrap gap-1"
			on:submit={handleSubmit}
		>
			<div class="w-28">
				<label class="relative flex w-28 h-8">
					<input
						type="text"
						required
						id="title"
						placeholder=" "
						class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
						bind:value={formField.name}
					/>
					<div
						class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
					>
						<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full"
							><span class="text-pink-400">*</span> Name</span
						>
					</div>
				</label>
			</div>

			<div class="w-28">
				<label class="relative flex w-28 h-8">
					<input
						type="text"
						id="description"
						placeholder=" "
						class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
						bind:value={formField.description}
					/>
					<div
						class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
					>
						<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Description</span>
					</div>
				</label>
			</div>

			<div class="w-28">
				<CategoryInput {formField} />
			</div>

			<div class="w-28">
				<UnitInput {formField} />
			</div>

			<div class="w-28">
				<label class="relative flex w-full h-full">
					<input
						type="text"
						required
						inputmode="numeric"
						pattern="^\d+$"
						autocorrect="off"
						id="quantity"
						placeholder=" "
						class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
						bind:value={formField.quantity}
					/>
					<div
						class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
					>
						<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full"
							><span class="text-pink-400">*</span> Quantity</span
						>
					</div>
				</label>
			</div>

			<div class="w-28">
				<label class="relative flex w-full h-full">
					<input
						type="text"
						id="location"
						required
						placeholder=" "
						class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
						bind:value={formField.location}
					/>
					<div
						class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
					>
						<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full"
							><span class="text-pink-400">*</span> Location</span
						>
					</div>
				</label>
			</div>

			<div class="grow">
				<label class="relative flex w-full h-full">
					<input
						type="date"
						id="expirationDate"
						placeholder=" "
						class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
						bind:value={formField.expirationDate}
					/>
					<div
						class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
					>
						<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Expiration Date</span>
					</div>
				</label>
			</div>

			<div class="grow">
				<label class="relative flex w-full h-full">
					<input
						type="date"
						id="restockDate"
						placeholder=" "
						class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
						bind:value={formField.restockDate}
					/>
					<div
						class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
					>
						<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Restock Date</span>
					</div>
				</label>
			</div>

			<div class="grow">
				<label class="flex relative w-full h-full">
					<input
						type="text"
						placeholder=" "
						id="notes"
						class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
						bind:value={formField.notes}
					/>
					<div
						class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
					>
						<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Notes</span>
					</div>
				</label>
			</div>

			<div class="flex h-8 border-2 border-slate-300 m-auto px-1">
				<FavoriteCheck {formField} />

				<button
					type="submit"
					class="w-6 h-6 m-auto"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="fill-slate-400"
						height="100%"
						width="100%"
						viewBox="0 0 448 512"
					>
						<path
							d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
						/>
					</svg>
				</button>
			</div>
		</form>
	</section>
{/if}
