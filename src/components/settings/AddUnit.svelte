<script lang="ts">
    import type Category from "../dashboard/item/types/category";
    import { addCategory } from "../dashboard/item/db/category";
	import Typography from "../general/Typography.svelte";
	import Button from "../general/Button.svelte";

    $: formField = <Category>{
        category: "",
        id: "",
    };

const handleAddCategory = (category: Category) => {
    addCategory(category).catch((error) => {
        console.log(error);
    });
    console.log(category);
};
</script>

<Typography>Add a Unit of Measurement</Typography>
<form class="flex h-full w-full">
	<label class="relative flex w-full h-full">
		<input
			type="text"
			id="category"
			placeholder=" "
			class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
			bind:value={formField.category}
		/>
		<div
			class="absolute flex w-full h-8 text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
		>
			<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Unit of Measurement</span>
		</div>
	</label>
	{formField.category}
	<Button
		className="self-end"
		onClick={() => handleAddCategory}>Add</Button
	>
</form>
