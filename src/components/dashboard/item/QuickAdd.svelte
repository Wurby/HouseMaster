<script lang="ts">
	import Button from '../../general/Button.svelte';
	import addItem from './db/addItem';
	import CategoryInput from './inputs/CategoryInput.svelte';
	import type Item from './types/item';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const defaultFormField = {
		name: '',
		category: '',
		quantity: null,
		location: '',
		expirationDate: '',
	};

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

	const handleAdd = () => {
		addItem(formField)
			.then(() => {
				formField = { ...formField, ...defaultFormField };
				dispatch('modalResponse', 'close');
			})
			.catch((error) => {
				console.log(error);
			});
		console.log(formField);
	};

	const handleQuickAdd = () => {
		addItem(formField)
			.then(() => {
				formField = { ...formField, ...defaultFormField };
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<form
	class="w-full h-full"
	on:submit|preventDefault={() => handleAdd()}
>
	<section class="flex flex-col gap-4 w-full h-full p-4">
		<div class="w-full h-8">
			<label class="relative flex w-full h-8">
				<input
					type="text"
					required
					id="title"
					placeholder=" "
					class="absolute h-8 text-base w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
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
		<div class="w-full h-8">
			<CategoryInput {formField} />
		</div>
		<div class="w-full h-8">
			<label class="relative flex w-full h-full">
				<input
					type="text"
					required
					inputmode="numeric"
					pattern="^\d+$"
					autocorrect="off"
					id="quantity"
					placeholder=" "
					class="absolute h-8 text-base w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
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
		<div class="w-full h-8">
			<label class="relative flex w-full h-full">
				<input
					type="text"
					id="location"
					required
					placeholder=" "
					class="absolute h-8 text-base w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
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
		<div class="w-full h-8">
			<label class="relative flex w-full h-full">
				<input
					type="date"
					id="expirationDate"
					placeholder=" "
					class="absolute h-8 text-base w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
					bind:value={formField.expirationDate}
				/>
				<div
					class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
				>
					<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Expiration Date</span>
				</div>
			</label>
		</div>
		<div class="w-full flex justify-end gap-4">
			<Button
				variant="secondary"
				onClick={() => dispatch('modalResponse', 'cancel')}>Cancel</Button
			>
			<Button
				variant="secondary"
				type="button"
				onClick={() => handleQuickAdd()}>Quick Add</Button
			>
			<Button
				variant="primary"
				type="submit"
				onClick={() => console.log(formField)}>Add</Button
			>
		</div>
	</section>
</form>
