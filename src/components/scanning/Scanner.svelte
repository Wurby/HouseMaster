<script lang="ts">
	import { Html5QrcodeScanner } from 'html5-qrcode';
	import { onDestroy, onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Html5QrcodeResult } from 'html5-qrcode';

	const dispatch = createEventDispatcher();

	$: scanner = null as Html5QrcodeScanner | null;

	onMount(() => {
		scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: { width: 250, height: 250 } }, false);

		function onScanFailure(error: string) {
			dispatch('scanFail', error);
		}

		function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
			scanner?.clear();
			dispatch('successfulScan', { id: decodedText, fullResult: decodedResult });
			dispatch('closeScanner');
		}

		scanner.render(onScanSuccess, onScanFailure);
	});

	onDestroy(() => {
		scanner?.clear();
	});
</script>
