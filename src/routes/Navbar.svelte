<script>
    import {page} from '$app/stores';
const navs = [
    {title:'Home',href:'/'},
    {title:'About',href:'/about'},
    {title:'Services',href:'/services'},
    {title:'Contact Us',href:'/contact'},
];

    $: routeId = $page.route.id
</script>

<nav>
    <div class="container">
        <h1>Start Bootstrap</h1>
        <ul>
            {#each navs as {title,href}}
            <li><a {href} class:active = {routeId == href}>{title}</a></li>
            {/each}
           
     
          
        </ul>
    </div>

</nav>


<style>
    .container{
        display: flex;
        align-items: center;
    }
    nav{
      padding: 0.5em;
        background: #343e40;
        color: white;
    }
    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0;
        margin-left: auto;
        font-size: 1em;
    }
    li{
        margin-right: 20px;
    }
    h1{
margin: 0;
font-size: 1.3em;
font-weight: normal;
    }
    a{
        text-decoration: none;
        color: #aaa;
    }
    .active{
        color: white;
    }
</style>

