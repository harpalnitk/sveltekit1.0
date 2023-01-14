//use page.server.js if in cards u do not want to 
//show user from where images are being fetched


export const load = async({ fetch })=>{
    const getPosts = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        const filteredData = data.slice(0,3);
       // console.log(filteredData);
        return filteredData;
    }

    // const getPostsFromApi = async ()=>{
    //     const res = await fetch('http://localhost:5173/api/posts.json');
    //     const data = await res.json();
    //     return data;
    // }

    //USING relative URL 
    const getPostsFromApi = async ()=>{
        const res = await fetch('/api/posts.json');
        const data = await res.json();
        return data;
    }

    return {
        posts: getPosts(),
        postsFromApi: getPostsFromApi()
    }

}