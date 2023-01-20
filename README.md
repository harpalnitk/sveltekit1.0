git push -u origin main

OR

git push origin HEAD:main

in vite.config.js below code is added
	server:{
		fs:{
        // Allow serving files from one level up to the project root
		allow:[".."],
		},

        because we have placed styles.css in static folder ; to access styles.css in our project


## TO USE SASS

npm install --save-dev svelte-preprocess
npm install -D sass

and in svelte.config.js add 

	preprocess: preprocess({
		//this is needed because in preprocessing SEO  optimizations are lost
		preserve: ['ld+json']
	  }),

### Deployed on vercel
to deploy we need to add adapters in svelte project
default adapter is import adapter from '@sveltejs/adapter-auto';

however for vercel deployment we can use adapter-auto

## steps to deploy
1. log in to vercel using github 
2. add new project from github
3. import
4. deploy

### Dark Mode Toggle
local storage and session storage are
not available on server
therefore we use cookies for storing dark-mode flag
cookies accessible to the server because they
come along with each request to the server

## user can also set dark mode for all websites through
browsers rendering tab
we have to take care of that also in our code




