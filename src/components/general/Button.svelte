<script lang="ts">
	import { onMount } from 'svelte';
	import Typography from './Typography.svelte';

	type Variant = 'primary' | 'secondary' | 'icon';
	type IconColor = 'fill-slate-400' | 'fill-slate-300' | 'fill-pink-300';

	export let variant: Variant = 'primary';
	export let className: string = '';
	export let onClick: () => void;
	export let iconColor: IconColor = 'fill-slate-400';
	export let type: 'button' | 'submit' | 'reset' = 'button';

	$: classes = '';

	onMount(() => {
		if (variant === 'primary') {
			classes = `rounded-full px-2 ring-1 ring-slate-500 bg-slate-300 hover:bg-slate-800 hover:text-white active:translate-y-px shadow-md ${className}`;
		}
		if (variant === 'secondary') {
			classes = `rounded-full px-2 ring-1 ring-slate-500 bg-slate-200 hover:bg-slate-800 hover:text-white active:translate-y-px shadow-md ${className}`;
		}
		if (variant === 'icon') {
			classes = `rounded-full w-5 h-5 p-0.5 ring-1 ring-slate-500 active:translate-y-px shadow-md ${className}`;
		}
	});
</script>

{#if variant != 'icon'}
	<button
		class={classes}
		{type}
		on:click={onClick}
	>
		<Typography variant="button">
			<slot />
		</Typography>
	</button>
{:else}
	<button
		class={classes + ' ' + iconColor}
		{type}
		on:click={onClick}
	>
		<slot />
	</button>
{/if}
