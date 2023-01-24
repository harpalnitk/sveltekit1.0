<script>
    import { enhance } from "$app/forms";
  
    export let data;
  //We’re grabbing the tags as before from our
  // layout group’s loader and the to-do item 
  //from our page’s loader.
    $: ({ todo, tags } = data);
    $: currentTags = todo.tags.map(id => tags[id]);
  </script>
  <!-- If you noticed the use:enhance, that simply 
  tells SvelteKit to use progressive enhancement
   and Ajax to submit our form. You’ll likely
    always use that -->
  <form use:enhance method="post" action="?/editTodo">
    <input name="id" type="hidden" value="{todo.id}" />
    <input name="title" value="{todo.title}" />
  
    <div>
      {#each currentTags as tag}
      <span style="{`color:" ${tag.color};`}">{tag.name}</span>
      {/each}
    </div>
  
    <button>Save</button>
  </form>

  <style>
	form {
		margin: 30px;
	}
	input {
		width: 300px;
	}
	button {
		margin-top: 20px;
	}
	input,
	button {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid black;
	}
	span + span {
		margin-left: 5px;
	}
</style>
