<script lang="ts">
	import type Category from '../types/category';
	import type Item from '../types/item';

	export let formField: Item;
</script>

<label class="relative flex w-full h-full">
	<input
		type="text"
		id="category"
		placeholder=" "
		class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
		bind:value={formField.category}
	/>
	<div
		class="absolute flex w-full h-full text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
	>
		<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Category</span>
	</div>
</label>
