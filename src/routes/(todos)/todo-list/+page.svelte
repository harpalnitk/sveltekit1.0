<script>
  import { enhance } from "$app/forms";
  import { page } from '$app/stores';
  import { invalidate } from '$app/navigation';
    export let data;
    //After Edir : How did the new title show up like that? It was automatic. Once
    //  we redirected to the /list page, SvelteKit automatically
    //   re-ran all of our loaders just like it would have done
    //    regardless
    $: ({ todos, tags } = data);
    $: currentSearch = $page.url.searchParams.get('search') || '';

    //This will run before a submit.

    //This function provides a data object with our form data.
    //  We return an async function that will run after our edit
    //   is done. The docs explain all of this, but by doing this,
    //    we shut off SvelteKit’s default form handling that would
    //     have re-run our loader. This is exactly what we want! 
    //     (We could easily get that default behavior back, as 
    //     the docs explain.)

    function executeSave({ data }) {
  const id = data.get("id");
  const title = data.get("title");

  // We now call update on our todos array since it’s a store.
  //  And that’s that. After editing a to-do item, our changes
  //   show up immediately and our cache is cleared (as before
  //   , since we set a new cookie value in our editTodo form 
  //   action). So, if we search and then navigate back to 
  //   this page, we’ll get fresh data from our loader, which
  //    will correctly exclude any updated to-do items that
  //     were updated.
  return async () => {
    todos.update(list =>
      list.map(todo => {
        if (todo.id == id) {
          return Object.assign({}, todo, { title });
        } else {
          return todo;
        }
      })
    );
  };
}

//RELOAD TODO FUNCTION

// We’re setting a new reloading variable to true at 
// the start of this action. And then, in order to
//  override the default behavior of invalidating 
//  everything, we return an async function. This 
//  function will run when our server action is finished
//   (which just sets a new cookie).


//Without this async function returned, SvelteKit would invalidate
//  everything. Since we’re providing this function, it will
//   invalidate nothing, so it’s up to us to tell it what to
//    reload. We do this with the invalidate function. We call
//     it with a value of reload:todos. This function returns 
//     a promise, which resolves when the invalidation is complete,
//      at which point we set reloading back to false.
let reloading = false;
	const reloadTodos = () => {
		reloading = true;
		return async () => {
			invalidate('reload:todos').then(() => {
				reloading = false;
			});
		};
	};
  </script>

<div class="search-form">
  <form action="/todo-list">
    <label>Search</label>
    <input 
    autofocus 
    name="search" 
    on:blur={evt => (evt.target.value = currentSearch)}
    value={currentSearch}/>
  </form>
</div>
<div class="reload-container">
	{#if reloading}
		<span>Reloading ...</span>
	{/if}
	<form method="POST" action="?/reloadTodos" use:enhance={reloadTodos}>
		<button>Reload todos</button>
	</form>
</div>
  <table cellspacing="10" cellpadding="10">
    <thead>
      <tr>
        <th>Task</th>
        <th>Tags</th>
        <th>Assigned</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <!-- {#each todos as t} -->
      {#each $todos as t}
      <tr>
        <td>{t.title}</td>
        <td>{t.tags.map((id) => tags[id].name).join(', ')}</td>
        <td>{t.assigned}</td>
        <td><a href="/todo-detail?id={t.id}">Edit</a></td>
      </tr>
      <tr>
				<td colspan="4">
					<!-- <form use:enhance method="post" action="?/editTodo"> -->
            <!-- with writable todos above changes to-->
            <form
  use:enhance={executeSave}
  on:submit={runInvalidate}
  method="post"
  action="?/editTodo"
>
						<input name="id" value={t.id} type="hidden" />
						<input name="title" value={t.title} />
						<button>Save</button>
					</form>
				</td>
			</tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    th {
      text-align: left;
    }
    .search-form,
	.reload-container {
		margin: 20px;
	}
  </style>