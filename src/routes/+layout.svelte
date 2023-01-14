<script>
  import Button from '$lib/Button.svelte';
import {loginWithGoogle} from '../components/Auth.svelte';

   import '../style.css';
  import Footer from '../components/Footer.svelte';
 
    import Navbar from '../components/Navbar.svelte';
</script>
<!-- <button on:click={loginWithGoogle}>Login with Google</button> -->
<div class="app">
  <Navbar/>
  <slot/>
  <Footer/>
</div>

<style>
  .app{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

