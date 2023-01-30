import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = ({cookies})=>{
const access = cookies.get('access') === "true";
if(!access){
    throw redirect(302,"/login");
}
}