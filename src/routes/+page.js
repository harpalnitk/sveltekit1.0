//use page.server.js if in cards u do not want to 
//show user from where images are being fetched


export const load = async()=>{
    const getPosts = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        const filteredData = data.slice(0,3);
       // console.log(filteredData);
        return filteredData;
    }

    return {
        posts: getPosts(),
    }

}