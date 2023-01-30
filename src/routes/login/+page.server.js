import { redirect } from '@sveltejs/kit';

/**@type {import('./$types').Actions} */
export const actions = {
default: async ({cookies,request}) =>{

  const formData = await request.formData();
 const email = formData.get('email');
 const password = formData.get('password');
 
 
  console.log(cookies);
  if(email==='rick@gmail.com' && password === "password"){
    
    //while setting cookie we have to ensure that it is an http cookie
    //and not a cookie that can be accessed by javascript
    cookies.set("access","true", { path:'/', sameSite:'strict' });  
    throw redirect(302,"/dashboard");
  }

  return{
    email,
    message:"Email or Password is not invalid",
  }
}
}