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
