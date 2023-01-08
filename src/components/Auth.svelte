<script context='module'>
  import {initAuth} from './../auth/index.js';
    export const {user,loginWithGoogle} = initAuth();
user.subscribe(u=> console.log(u));
</script>