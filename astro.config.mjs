import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
	integrations: [mdx()],
	vite: {
		// plugins: [tailwindcss()],
		resolve: {
			alias: {
				$lib: '/src',
				$components: '/src/components'
			}
		}
	}
});
