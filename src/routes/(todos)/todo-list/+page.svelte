<script>
    export let data;
    //After Edir : How did the new title show up like that? It was automatic. Once
    //  we redirected to the /list page, SvelteKit automatically
    //   re-ran all of our loaders just like it would have done
    //    regardless
    $: ({ todos, tags } = data);
  </script>
  
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
      {#each todos as t}
      <tr>
        <td>{t.title}</td>
        <td>{t.tags.map((id) => tags[id].name).join(', ')}</td>
        <td>{t.assigned}</td>
        <td><a href="/todo-detail?id={t.id}">Edit</a></td>
      </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    th {
      text-align: left;
    }
  </style>