<script>
  import "../app.css";
</script>

<nav class="flex gap-4 px-4 w-full bg-slate-500 h-16">
  <a href="/" class="my-auto">Home</a>
  <a href="/login" class="my-auto">
    <button class="w-16 h-8 bg-slate-300 rounded-sm ring-2 ring-slate-200"
      >Login</button
    ></a
  >
</nav>
<slot />
