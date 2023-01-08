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
