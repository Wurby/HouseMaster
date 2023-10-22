<script lang="ts">
	import { addCategory, deleteCategory } from '../dashboard/item/db/category';
	import Typography from '../general/Typography.svelte';
	import Button from '../general/Button.svelte';
	import { auth, firestore } from '../../firebase/firebase';
	import { collectionStore } from 'sveltefire';
	import type Category from '../dashboard/item/types/category';
	import { fade } from 'svelte/transition';

	const ref = `users/${auth.currentUser?.uid}/categories`;
	const categories = collectionStore<Category>(firestore, ref);

	$: formField = {
		category: '',
		id: '',
	};

	$: formFieldValidation = {
		message: '',
		error: false,
	};

	const resetForm = () => {
		formField.category = '';
		formField.id = '';
	};

	const handleAddCategory = () => {
		if (formField.category == '') {
			formFieldValidation.message = 'Category cannot be empty';
			formFieldValidation.error = true;
			resetForm();
		} else if ($categories.find((category) => category.category == formField.category)) {
			formFieldValidation.message = 'Category already exists';
			formFieldValidation.error = true;
			resetForm();
		} else {
			addCategory(formField)
				.then(() => {
					formFieldValidation.message = '';
					formFieldValidation.error = false;
					resetForm();
				})
				.catch((error) => {
					console.error(error);
					formFieldValidation.message = 'Something went wrong';
					formFieldValidation.error = true;
				});
		}
	};

	const handleRemoveCategory = (category: Category) => {
		deleteCategory(category).catch((error) => {
			console.log(error);
		});
	};
</script>

<section class="w-full h-full flex flex-col gap-2">
	<header class="w-full">
		<Typography
			variant="h4"
			className="w-full pl-2">Add a Category</Typography
		>
		<div class="h-0.5 w-4/6 bg-slate-300"></div>
	</header>
	<body class="w-full grow">
		<div class="flex flex-wrap w-full gap-2 divide-x-2 my-2">
			{#if $categories.length == 0}
				<Typography
					variant="h5"
					className="text-center px-2">No Categories added</Typography
				>
			{/if}
			{#each $categories as itemCategory}
				<div
					class="flex"
					in:fade={{ duration: 300 }}
				>
					<Typography
						className="text-center px-2"
						variant="h5">{itemCategory.category}</Typography
					>
					{#if itemCategory.id != ''}
						<Button
							onClick={() => handleRemoveCategory(itemCategory)}
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
					{/if}
				</div>
			{/each}
		</div>
		<label class="relative flex w-full h-8">
			<input
				type="text"
				id="category"
				placeholder=" "
				on:keydown={(e) => {
					if (e.key == 'Enter') {
						handleAddCategory();
					}
				}}
				class="absolute h-8 text-sm w-full bg-slate-100 px-2 peer focus:outline-none border-x-2 border-b-2 border-t-2 border-slate-300 text-ellipsis"
				bind:value={formField.category}
			/>
			<div
				class="absolute flex w-full h-8 text-2xs text-slate-400 -translate-y-4 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-2xs transition-all duration-300 ease-in-out"
			>
				<span class="my-auto bg-slate-100 ml-1 px-2 rounded-full">Category</span>
			</div>
		</label>
		{#if formFieldValidation.error}
			<Typography
				variant="h3"
				className="text-center px-2 text-pink-300">{formFieldValidation.message}</Typography
			>
		{/if}
	</body>
	<footer class="w-full flex justify-end">
		<Button onClick={handleAddCategory}>Add Category</Button>
	</footer>
</section>
