<script>
    export let data;

    const {posts} = data;
    
</script>
<div class="container">
<h2>Blog Posts</h2>
<ul>
    {#each posts as post}
    <li>
        <a href="/blog/{post.id}">{post.title}</a>
    </li>
{/each}
</ul>

</div>

<style>
    li{
        margin-bottom: 0.5em;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
</style>