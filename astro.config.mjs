import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://aurasatz.com',
	integrations: [mdx(), sitemap()],
	vite: {
		// plugins: [tailwindcss()],
		resolve: {
			alias: {
				$lib: '/src',
				$components: '/src/components',
				$assets: '/src/assets'
			}
		}
	}
});
