/**@type {import('./$types').Actions} */
export const actions = {
default: async ({cookies}) =>{
  console.log(cookies);
  cookies.set("access","true");  
}
}