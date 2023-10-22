<script lang="ts">
	export let variant: string = 'p';
	export let href: string = '';
	export let className: string = '';

	const possibleVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'link', 'button', 'subtitle'];
	$: classes = setClass();

	const setClass = () => {
		switch (variant) {
			case 'h1':
				return 'text-6xl font-thin';
			case 'h2':
				return 'text-4xl font-thin';
			case 'h3':
				return 'text-2xl font-thin';
			case 'h4':
				return 'text-xl font-thin';
			case 'p':
				return 'text-lg font-thin';
			case 'span':
				return 'text-lg font-thin';
			case 'link':
				return 'text-lg font-thin hover:underline hover:text-slate-400 border-b-2 border-slate-300 hover:border-none';
			case 'h5':
				return 'text-sm font-thin';
			case 'h6':
				return 'text-xs font-thin';
			case 'subtitle':
				return 'text-xs font-thin';
			case 'button':
				return 'text-sm font-thin';
		}
	};
</script>

{#each possibleVariants as possibleVariant}
	{#if variant === possibleVariant}
		{#if variant === 'link'}
			<a
				class={`${classes} ${className}`}
				{href}><slot /></a
			>
		{:else if variant === 'subtitle'}
			<p class={`${classes} ${className}`}><slot /></p>
		{:else if variant === 'button'}
			<p class={`${classes} ${className}`}><slot /></p>
		{:else}
			<svelte:element
				this={variant}
				class={`${classes} ${className}`}
			>
				<slot />
			</svelte:element>
		{/if}
	{/if}
{/each}
