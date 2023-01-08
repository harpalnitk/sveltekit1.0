import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		//this is needed because in preprocessing SEO  optimizations are lost
		preserve: ['ld+json']
	  }),
	kit: {
		adapter: adapter()
	}
};

export default config;
