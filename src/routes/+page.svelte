<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';
	import Typography from '../components/general/Typography.svelte';
</script>

<section class="flex flex-wrap justify-center py-16">
	<Typography
		variant="h1"
		className="w-full text-center">Welcome to HouseMaster</Typography
	>
	<div class="w-4/6 h-0.5 bg-slate-400 justify-self-center"></div>
	<Typography
		variant="h4"
		className="w-full text-center">Your Home Management Assistant</Typography
	>
</section>

<section>
	<SignedOut>
		<Typography
			variant="h2"
			className="w-full text-center">Please sign in to view your dashboard</Typography
		>
	</SignedOut>
	<SignedIn>
		<section
			class="flex shadow-lg shadow-slate-300 border-2 border-b-slate-300 border-t-slate-200 border-x-slate-200 rounded-md"
		>
			<div class="h-64 w-1/6 bg-gradient-to-l from-slate-200 to-slate-100 rounded-l-md"></div>
			<div
				class="h-64 p-4 flex flex-col w-4/6 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 shadow-slate-100"
			>
				<Typography
					variant="h2"
					className="m-auto w-full text-center"
					>HouseMaster helps you know what's in your pantry and fridge at a glance.</Typography
				>
				<Typography
					variant="p"
					className="m-auto w-full text-center"
					>Track your grocery list, manage expiration dates, know when you're running short on cleaning
					supplies. Know when you're out before you need it.</Typography
				>
			</div>
			<div class="h-64 w-1/6 bg-gradient-to-r from-slate-200 to-slate-100 rounded-r-md"></div>
		</section>
		<div class="flex w-full justify-around py-12">
			<Typography
				href="/dashboard"
				variant="link">Visit Dashboard</Typography
			>
			<Typography
				href="/settings"
				variant="link">Configure HouseMaster</Typography
			>
		</div>
	</SignedIn>
</section>
