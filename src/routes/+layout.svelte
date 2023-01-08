<script>
  import Button from '$lib/Button.svelte';
import {loginWithGoogle} from '../components/Auth.svelte';

   import '../style.css';
  import Footer from './Footer.svelte';
  import Hero from './Hero.svelte';
    import Navbar from './Navbar.svelte';
</script>
<Navbar/>
<Hero/>
<button on:click={loginWithGoogle}>Login with Google</button>

    <slot/>
    <Footer/>
