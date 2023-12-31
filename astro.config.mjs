import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { vritePlugin } from '@vrite/sdk/astro';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { VRITE_ACCESS_TOKEN, VRITE_CONTENT_GROUP_ID } = loadEnv(
	import.meta.env.MODE,
	process.cwd(),
	''
);

// https://astro.build/config
export default defineConfig({
	site: 'https://wblondel.github.io',
	integrations: [
		mdx(),
		sitemap(),
		vritePlugin({
			accessToken: VRITE_ACCESS_TOKEN,
			contentGroupId: VRITE_CONTENT_GROUP_ID,
		}),
	],
});
