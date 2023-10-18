<script lang="ts">
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../../firebase/firebase";
  import { userStore } from "sveltefire";

  let email = "";
  let password = "";
  $: errorCode = "";
  $: errorMessage = "";
  $: user = userStore(auth);

  const handleSignin = () => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
    });
  };
</script>

{#if $user}
  <p class="text-center text-3xl">Welcome {$user?.email}</p>
{:else}
  <section
    class="mx-auto flex flex-col bg-slate-300 p-4 ring-1 ring-slate-600 gap-4 shadow-md shadow-slate-400"
  >
    <p class="text-center text-3xl">Create Account</p>
    <form class="flex flex-col gap-4" on:submit|preventDefault={handleSignin}>
      <input
        type="email"
        placeholder="Email"
        required
        id="email"
        autocomplete="email"
        class="w-64 h-8 bg-slate-200 p-2"
        bind:value={email}
      />
      <input
        type="password"
        placeholder="Password"
        required
        autocomplete="current-password"
        id="password"
        class="w-64 h-8 bg-slate-200 p-2"
        bind:value={password}
      />
      <p class="text-red-500">{errorCode} {errorMessage}</p>
      <button
        class="text-md px-4 h-8 w-48 bg-slate-200 self-center hover:bg-slate-100 active:translate-y-px"
        >Create Account</button
      >
    </form>
  </section>
{/if}
