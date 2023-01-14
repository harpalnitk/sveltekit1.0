import { fail } from "@sveltejs/kit";
import {object, string, number, date, InferType} from 'yup';

export const actions = {
    // default: async (event)=>{   //we will destructure event to get request object
    default: async ({request})=>{
        //console.log(request);
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        console.log({name,email,message});

       


        //Form validation

        const contactFormSchema = object({
            name: string().min(2, "Too short name").required("We only accept named users"),
            email: string().required().email(),
            message: string().required(),
        });
        try {
            // abortEarly:false will validate all and not stop at first error
            const result = await contactFormSchema.validate({name,email,message},{abortEarly: false});
            console.log({result});

           const preFilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfbqlGTXHRqCt31bKGXngTuPIC6BsRuTC9evKOkLRYKa7X3Xg/formResponse?usp=pp_url&entry.1478523527=${name}&entry.508529157=${email}&entry.1395239427=${message}&submit=Submit`;
            const res = await fetch(preFilledLink);
            console.log(res);

            if(res.status !== 200){
                //show internal server error
            }
            return{
                success:true,
                status:'Form is submitted',
            }
        } catch (error) {
            console.log({error});
            const errors = error.inner.reduce((acc, err) => {
                return { ...acc, [err.path]: err.message };
              }, {});
              return {
                errors,
                name,
                email,
                message,
              };
        }
     
        // if(!name){
        //     return fail(400,{error:'name is missing',email,message});
        // }
        // if(!email){
        //     return fail(400,{error:'email is missing',name,message});
        // }
        // if(!message){
        //     return fail(400,{error:'message is missing',email,name});
        // }

         // do something withthe data

 
    }
}