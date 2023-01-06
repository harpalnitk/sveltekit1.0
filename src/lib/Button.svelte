<script>
export let size = 'medium';
</script>
<!-- for taking class = secondary and id = a-button inputs $$restProps are used -->
<button class:small={size === 'small'} class:medium={size === 'medium'} {...$$restProps}>
    <slot></slot>
</button>
<style>
    button{
       
        border: none;
        border-radius: 0.25em;
        background: var(--primary-color);
        color: white;
       
    }
    .medium{
        padding: 1em 1.5em;
        font-size: 1em;
    }
    .small{
        padding: 0.25em 0.5em;
        font-size: 0.8em;
    }
</style>