<script>
  import "../app.css";
  import { FirebaseApp, SignedIn, SignedOut, userStore } from "sveltefire";
  import { auth, firestore, storage } from "../firebase/firebase";
  import Typography from "../components/general/Typography.svelte";

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<FirebaseApp {auth} {firestore} {storage}>
  <main class="flex flex-wrap w-full h-screen bg-slate-100">
    <nav class="absolute top-0 flex gap-4 px-4 w-full bg-slate-500 h-16">
      <a href="/" class="my-auto">Home</a>
      <SignedOut>
        <a href="/login" class="my-auto">
          <button
            class="w-16 h-8 bg-slate-300 rounded-sm ring-2 ring-slate-200"
          >
            Login
          </button>
        </a>
        <a href="/signup" class="my-auto">
          <button
            class="w-16 h-8 bg-slate-300 rounded-sm ring-2 ring-slate-200"
          >
            Signup
          </button>
        </a>
      </SignedOut>
      <SignedIn let:signOut>
        <a href="/dashboard" class="my-auto">Dashboard</a>
        <button
          class="w-16 h-8 bg-slate-300 rounded-sm ring-2 ring-slate-200 my-auto"
          on:click={signOut}
        >
          Logout
        </button>
      </SignedIn>
    </nav>
    <section class="flex flex-wrap h-full w-full">
      <div class="w-full h-16" />
      <section class="flex flex-col w-full h-full">
        <SignedOut>
          <section class="text-center m-4">
            <Typography variant="h1">House Master</Typography>
          </section>
        </SignedOut>

        <slot />
      </section>
    </section>
  </main>
</FirebaseApp>
