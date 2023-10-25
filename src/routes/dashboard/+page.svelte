<script>
	import { SignedIn, SignedOut } from 'sveltefire';
	import Grid from '../../components/dashboard/grid/Grid.svelte';
	import AddItemInline from '../../components/dashboard/item/AddItemInline.svelte';
	import Typography from '../../components/general/Typography.svelte';
	import Button from '../../components/general/Button.svelte';
	import Modal from '../../components/modal/Modal.svelte';
	import QuickAdd from '../../components/dashboard/item/QuickAdd.svelte';

	$: addItemVisible = false;
	$: mobileAddItemVisible = false;
</script>

<SignedIn>
	<Typography
		variant="h1"
		className="w-full">Your Inventory</Typography
	>

	<Modal
		title="Quick Add"
		variant="quickAddItem"
		visible={mobileAddItemVisible}
		on:modalResponse={(e) => {
			mobileAddItemVisible = false;
		}}
	>
		<QuickAdd
			on:modalResponse={() => {
				mobileAddItemVisible = false;
			}}
		/>
	</Modal>
	<section class="flex flex-col self-center">
		<Button
			className="place-self-end fill-slate-500 my-2 hidden md:block"
			variant="icon"
			onClick={() => (addItemVisible = !addItemVisible)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				class="h-full w-full"
				><path
					d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
				/></svg
			>
		</Button>
		<Button
			className="place-self-end fill-slate-500 my-2 md:hidden "
			variant="icon"
			onClick={() => (mobileAddItemVisible = !mobileAddItemVisible)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				class="h-full w-full"
				><path
					d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
				/></svg
			>
		</Button>
		<Grid />
		<AddItemInline visible={addItemVisible} />
	</section>
</SignedIn>
<SignedOut>
	<Typography
		variant="h1"
		className="text-center">Please sign in to view your dashboard</Typography
	>
</SignedOut>
