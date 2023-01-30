//this hook will run on server for every
//incoming request

import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {

//URL
console.log(event.route.id);
//protect some routes
//hooks will work only if there is a server file in the route
//so using hooks is not the best method for protecting
//routes
if(event.route.id?.startsWith("/(app)")){
    const access = event.cookies.get("access");
    if(!(access=== "true"))
    throw redirect(302,"/login");
}

    const theme = event.cookies.get("siteTheme");
  
    const response = await resolve(event, {
        transformPageChunk: ({ html }) =>
        html.replace('data-theme=""', `data-theme="${theme}"`),
    });
    return response;
  };