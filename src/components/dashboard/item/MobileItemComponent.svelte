<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '../../general/Button.svelte';
	import Typography from '../../general/Typography.svelte';
	import Modal from '../../modal/Modal.svelte';
	import type Item from './types/item';
	export let className = '';
	export let removeItem: (item: Item) => void;
	export let item: Item;

	$: modalVisible = false;

	const handleRemoveItem = (modalResponse: CustomEvent<string>) => {
		if (modalResponse.detail === 'confirm') {
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
		className="absolute -right-7 top-1"
		variant="icon"
		iconColor="fill-pink-300"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			class="h-full w-full"
			><path
				d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
			/></svg
		>
	</Button>
	<section
		class={`flex h-8 w-full gap-2 divide-x-2 border-x-2 border-b-2 border-slate-300 text-ellipsis overflow-hidden hover:overflow-visible ${className}`}
		transition:fade={{ duration: 300, delay: 150 }}
	>
		<div
			class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
		>
			{item.name ? item.name : '-'}
		</div>

		<div
			class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
		>
			{item.category ? item.category : '-'}
		</div>
		<div
			class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
		>
			{item.quantity ? item.quantity : '-'}
		</div>

		<div
			class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
		>
			{item.location ? item.location : '-'}
		</div>
		<div
			class="flex-1 text-center my-auto text-2xs w-28 hover:bg-slate-200 hover:rounded-md text-ellipsis hover:ring-1 hover:ring-slate-500 hover:text-lg hover:p-2 hover:shadow-lg hover:shadow-slate-600"
		>
			{item.expirationDate ? item.expirationDate : '-'}
		</div>
	</section>
</div>
