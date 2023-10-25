<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';
	import Grid from '../../components/dashboard/grid/Grid.svelte';
	import AddItemInline from '../../components/dashboard/item/AddItemInline.svelte';
	import Typography from '../../components/general/Typography.svelte';
	import Button from '../../components/general/Button.svelte';
	import Modal from '../../components/modal/Modal.svelte';
	import QuickAdd from '../../components/dashboard/item/QuickAdd.svelte';
	import type { Html5QrcodeResult } from 'html5-qrcode';
	import ScannerBox from '../../components/scanning/ScannerBox.svelte';

	$: addItemVisible = false;
	$: mobileAddItemVisible = false;
	$: barcodeScannerVisible = false;

	const handleSuccessfulBarcodeScan = ({ detail }: { detail: { id: string; fullResult: Html5QrcodeResult } }) => {
		console.log(detail.id, detail.fullResult);
	};
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
		on:modalResponse={() => {
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
		<section class="flex place-self-end justify-between gap-4 my-4">
			<Button
				className=" fill-slate-500 "
				variant="icon"
				onClick={() => (barcodeScannerVisible = !barcodeScannerVisible)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 512 512"
					><path
						d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"
					/></svg
				>
			</Button>
			<Button
				className=" fill-slate-500 hidden md:block"
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
				className=" fill-slate-500 md:hidden "
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
		</section>
		<Grid />
		<AddItemInline visible={addItemVisible} />
		<ScannerBox
			visible={barcodeScannerVisible}
			on:successfulScan={handleSuccessfulBarcodeScan}
			on:closeScanner={() => (barcodeScannerVisible = !barcodeScannerVisible)}
		/>
	</section>
</SignedIn>
<SignedOut>
	<Typography
		variant="h1"
		className="text-center">Please sign in to view your dashboard</Typography
	>
</SignedOut>
