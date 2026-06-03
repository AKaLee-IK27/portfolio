import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const postsEn = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  const postsVi = (await getCollection('blog-vi')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  const allPosts = [...postsEn.map((p) => ({ ...p, lang: 'en' as const })), ...postsVi.map((p) => ({ ...p, lang: 'vi' as const }))].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: 'Anh Khoi Le — Blog',
    description: 'Thoughts on engineering, tooling, and building software.',
    site: context.site ?? 'https://anhkhoile.vercel.app',
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.lang}/${post.id}/`,
    })),
  });
}
