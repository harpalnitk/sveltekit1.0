//import { getTodos, getTags } from "$lib/data/todoData";

// export function load() {
//     //Notice that we are not await-ing calls 
//     //to our getTodos and getTags async functions.
    
//     //Instead, we return the raw promises from load, and 
//     //SvelteKit does the necessary work to await them
//   const todos = getTodos();
//  // const tags = getTags(); //moved to group layout file

//   return {
//     todos,
//     //tags,
//   };
// }

// The above +page.server.js file changed to page.js file to implement caching
//and todos are now fetched from a api call from the server

import { writable } from 'svelte/store';

import { getCurrentCookieValue } from '$lib/util/cookieUtils.js';


//Our universal loader is what calls our
//  /todos endpoint. This runs on the server 
//  or the client, and we need to read that 
//  cache value we just set up in the root layout, on 
//  initial app load, no matter where
//   we are. It’s relatively easy if we’re on
//    the server: we can call await parent()
//     to get the data from parent layouts. 
//     But on the client, we’ll need to use 
//     some gross code to parse document.cookie
export async function load({ fetch, parent, url, setHeaders, depends  }) {



	depends('reload:todos');

	const parentData = await parent();
//getCurrentCookieValue('todos-cache') has a check in it to see if 
// we’re on the client (by checking the type of document), and returns 
// nothing if we are, at which point we know we’re on the server. Then
//  it uses the value from our layout.
	const cacheBust = getCurrentCookieValue('todos-cache') || parentData.todosCacheBust; //parentData.todosCacheBust is a value loaded in base layout file at root of app
	const search = url.searchParams.get('search') || '';
    //console.log('cacheBust', cacheBust)
	const resp = await fetch(`/api/todos?search=${encodeURIComponent(search)}&cache=${cacheBust}`);
	const todos = await resp.json();

	// return {
	// 	todos
	// };

	// Above code changed to stores for immediate updates

	return {
		todos: writable(todos),
	};
}