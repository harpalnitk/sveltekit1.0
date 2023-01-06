<script>

  import Button from "$lib/Button.svelte";

</script>
<div class='grid container'>
    <div class="what">
        <h3>What We Do?</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, sapiente? Assumenda suscipit consequatur voluptatum quos fugiat iste voluptatibus, perferendis maiores, magni nulla totam magnam recusandae vero nemo perspiciatis ea nostrum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos, cum voluptas voluptates hic delectus, vel asperiores aspernatur fugiat officiis, itaque atque vero quo provident.</p>
    <Button class='secondary' id='a-button' size='small'>Call to Action >></Button>
    </div>
    <div class='contact'>
        <h3>Contact Us</h3>
        <p><strong>Start Bootstrap</strong></p>
        <p>3481 Melrose Place</p>
        <p>Beverly Hills, CA 90210</p>
        <p>P: (123) 456-7890</p>
        <p>E:<a href="mailto:name@example.com">name@example.com</a></p> 
    </div>
</div>

<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 2em;
    }
    .what{
        grid-column: span 8;
    }
    .contact{
        grid-column: span 4;
    }
    h3{
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: 500;
        border-bottom: 1px solid #ddd;

    }
    a{
        text-decoration: none;
        color: var(--primary-color);
    }
    a:hover{
        text-decoration: underline;
    }
</style>