//We can create a +layout.server.js file at the very root of 
// our routes folder. This will run on application startup, and 
// is a perfect place to set an initial cookie value

export function load({ cookies, isDataRequest }) {

    //You may have noticed the isDataRequest value. Remember, layouts will 
    // re-run anytime client code calls invalidate(), or anytime
    //  we run a server action (assuming we don’t turn off 
    //     default behavior). isDataRequest indicates those re-runs,
    //      and so we only set the cookie if that’s false; otherwise, 
    //      we send along what’s already there.

    console.log('todo-cache cookis set on app startup -> isDataRequest: ', isDataRequest);
	const initialRequest = !isDataRequest;

	const cacheValue = initialRequest ? +new Date() : cookies.get('todos-cache');

	if (initialRequest) {
        //The httpOnly: false flag is also significant. This allows our 
        // client code to read these cookie values in document.cookie.
        //  This would normally be a security concern, but in our case 
        //  these are meaningless numbers that allow us to cache or 
        //  cache bust.
        
        //for browser case
		cookies.set('todos-cache', cacheValue, { path: '/', httpOnly: false });
	}

	return {
        //for server case
		todosCacheBust: cacheValue
	};
}