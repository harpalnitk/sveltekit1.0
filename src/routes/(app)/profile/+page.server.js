// import { redirect } from "@sveltejs/kit"

// export const load = async ()=>{
//     //302: code for temporary redirect
//     throw redirect(302, '/login')
// }

//ABOVE IMPLENETED IN HOOKS NOW
// BUt hooks run only if route has page.server.js file
//hence bringing it back

import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = ({cookies})=>{
const access = cookies.get('access') === "true";
if(!access){
    throw redirect(302,"/login");
}
}