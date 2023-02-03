import { getTodo, updateTodo, wait } from '$lib/data/todoData';
//we’ll need to add a form action for our /list page. Actions can
//  only go in .server pages, so we’ll add a +page.server.js in our 
//  /list folder. (Yes, a +page.server.js file can co-exist next to
//      a +page.js file.)
export const actions = {
	async editTodo({ request, cookies }) {
		const formData = await request.formData();

		const id = formData.get('id');
		const newTitle = formData.get('title');

		await wait(250);
		updateTodo(id, newTitle);
//We’re grabbing the form data, forcing a delay,
// updating our todo, and then, most importantly, 
//clearing our cache bust cookie.
		cookies.set('todos-cache', +new Date(), { path: '/', httpOnly: false });
	}

    //Reload your page, then edit one of the to-do items. You 
    // should see the table value update after a moment. If you 
    // look in the Network tab in DevToold, you’ll see a fetch
    //  to the /todos endpoint, which returns your new data.
};