import rss from '@astrojs/rss';
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: 'nelailen | A Mess',
    description: 'My astrocious journey learning to build a website with Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}