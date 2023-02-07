//https://css-tricks.com/caching-data-in-sveltekit/

//It’s relatively easy if we’re on the
//  server: we can call await parent() to
//   get the data from parent layouts. 
//   But on the client, we’ll need to 
//   use some gross code to parse 
//   document.cookie:
export function getCookieLookup() {
	if (typeof document !== 'object') {
		//means we are on the server
		return {};
	}

	return document.cookie.split('; ').reduce((lookup, v) => {
		const parts = v.split('=');
		lookup[parts[0]] = parts[1];

		return lookup;
	}, {});
}

export const getCurrentCookieValue = name => {
	const cookies = getCookieLookup();
	return cookies[name] ?? '';
};