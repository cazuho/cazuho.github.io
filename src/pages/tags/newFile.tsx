import BaseLayout from '../../layouts/BaseLayout.astro';
import BlogPost from '../../components/BlogPost.astro';
import { filteredPosts } from './[tag].astro';

<Fragment>
<BaseLayout pageTitle={tag}>
<p>{tag}のタグが付いた記事</p>
<ul>
{filteredPosts.map((post) => <Fragment><BlogPost url={post.url} title={post.frontmatter.title} /></Fragment>)}
</ul>
</BaseLayout>
</Fragment>;
