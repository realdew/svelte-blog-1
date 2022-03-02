//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		})
	}
};

export default config;
