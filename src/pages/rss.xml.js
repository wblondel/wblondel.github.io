// import rss from '@astrojs/rss';
// import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// TODO: Get posts from Vrite

// export async function get(context) {
// 	const posts = await getCollection('blog');
// 	return rss({
// 		title: SITE_TITLE,
// 		description: SITE_DESCRIPTION,
// 		site: context.site,
// 		items: posts.map((post) => ({
// 			...post.data,
// 			link: `/blog/${post.slug}/`,
// 		})),
// 	});
// }
