import { getTodos, getTags } from "$lib/data/todoData";

export function load() {
    //Notice that we are not await-ing calls 
    //to our getTodos and getTags async functions.
    
    //Instead, we return the raw promises from load, and 
    //SvelteKit does the necessary work to await them
  const todos = getTodos();
 // const tags = getTags(); //moved to group layout file

  return {
    todos,
    //tags,
  };
}