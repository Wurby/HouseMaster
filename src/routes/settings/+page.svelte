<script lang="ts">

	import { SignedIn, SignedOut } from "sveltefire";
import Typography from "../../components/general/Typography.svelte";
	import AddCategory from "../../components/settings/AddCategory.svelte";
	import AddUnit from "../../components/settings/AddUnit.svelte";

const componentCards = [
    AddCategory,
    AddUnit
];
</script>

<SignedIn>
	<section class="flex flex-wrap justify-center gap-8 md:max-w-5xl">
		<Typography
			variant="h1"
			className="w-full h-16">User Settings</Typography
		>
		{#each componentCards as component}
			<section class="p-4 flex flex-col gap-4 w-96 h-64 border-2 border-slate-300 shadow-md">
				<svelte:component this={component} />
			</section>
		{/each}
	</section>
</SignedIn>
<SignedOut>
	<Typography
		variant="h1"
		className="text-center">Please sign in to view your settings</Typography
	>
</SignedOut>
