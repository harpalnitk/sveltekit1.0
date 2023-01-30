<script>
  export let form;
  console.log(form);
</script>
<div class="container">
  <h2>Login</h2>
  {#if form?.message}
     <p class='red'>{form.message}</p>
  {/if}
  <form method="POST">
    <div><input type="email" name='email' value={form?.email || ""}></div>
    <div><input type="password" name='password'></div>
    <button>Login</button>
  </form>
</div>

<style>
  .red{
    color: red;}
</style>