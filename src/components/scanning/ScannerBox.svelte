<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { backInOut } from 'svelte/easing';
	import Scanner from './Scanner.svelte';
	import Typography from '../general/Typography.svelte';
	import type { Html5QrcodeResult } from 'html5-qrcode';

	const dispatch = createEventDispatcher();
	export let visible = false;
	$: failText = '';

	const handleCloseScanner = () => {
		dispatch('closeScanner');
	};

	const handleSuccessfulScan = ({ detail }: { detail: { id: string; fullResult: Html5QrcodeResult } }) => {
		dispatch('successfulScan', detail);
	};

	const handleScanFail = ({ detail }: { detail: string }) => {
		failText = detail;
	};
</script>

{#if visible}
	<section
		class="fixed bottom-0 left-0 md:left-[25%] z-20 bg-slate-200 border-2 w-full md:w-3/6 border-slate-400"
		transition:fly={{ y: 100, easing: backInOut }}
	>
		<Typography
			variant="h6"
			className="p-4">{failText}</Typography
		>
		<div
			id="reader"
			class="p-4 w-full"
		>
			<Scanner
				on:successfulScan={handleSuccessfulScan}
				on:closeScanner={handleCloseScanner}
				on:scanFail={handleScanFail}
			/>
		</div>
	</section>
	<button
		class="fixed left-0 top-0 z-10 w-full h-full bg-black opacity-50"
		transition:fade
		on:click={handleCloseScanner}
	/>
{/if}
