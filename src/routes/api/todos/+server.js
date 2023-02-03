import { json } from '@sveltejs/kit';
import { getTodos } from '$lib/data/todoData';

export async function GET({ url, setHeaders, request }) {
	const search = url.searchParams.get('search') || '';
// /Let’s get started by adding some caching to our /api/todos endpoint.
//but all this function says is to cache these API calls for 60 seconds

//since this is caching via the browser’s native caching, these 
// calls could (depending on how you manage the cache busting we’ll 
// 	be looking at) continue to cache even if you reload the 
// 	page (unlike the initial server-side load, which always 
// 		calls the endpoint fresh, even if it did it within 
// 		the last 60 seconds).

// Obviously data can change anytime, so we need a way to purge
//  this cache manually, which we’ll look at next.
setHeaders({
		'cache-control': 'max-age=60'//60 seconds
	});

	const todos = await getTodos(search);

	return json(todos);
}