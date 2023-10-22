<script>
	import '../app.css';
	import { FirebaseApp, SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth, firestore, storage } from '../firebase/firebase';
	import Typography from '../components/general/Typography.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<FirebaseApp
	{auth}
	{firestore}
	{storage}
>
	<nav class="absolute top-0 flex gap-4 px-4 w-full bg-slate-500 h-16">
		<a
			href="/"
			class="my-auto">Home</a
		>
		<SignedOut>
			<a
				href="/login"
				class="my-auto"
			>
				<button class="w-16 h-8 bg-slate-300 rounded-sm ring-2 ring-slate-200"> Login </button>
			</a>
			<a
				href="/signup"
				class="my-auto"
			>
				<button class="w-16 h-8 bg-slate-300 rounded-sm ring-2 ring-slate-200"> Signup </button>
			</a>
		</SignedOut>
		<SignedIn let:signOut>
			<a
				href="/dashboard"
				class="my-auto">Dashboard</a
			>
			<a
				href="/settings"
				class="my-auto">Settings</a
			>
			<button
				class="w-16 h-8 bg-slate-300 rounded-sm ring-2 ring-slate-200 my-auto"
				on:click={signOut}
			>
				Logout
			</button>
		</SignedIn>
	</nav>
	<main class="flex justify-center w-full h-screen bg-slate-100">
		<section class="w-full md:max-w-5xl">
			<div class="w-full h-20" />

			<SignedOut>
				<section class="text-center m-4">
					<Typography variant="h1">House Master</Typography>
				</section>
			</SignedOut>

			<slot />
		</section>
	</main>
</FirebaseApp>
