import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layouts/index';


const PostLink = props => (
  <li>
    <Link as={`/blog/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Blog = props => {
  console.log('blog props', props.items)
  return (
    <Layout>
      <h1>Blog</h1>
      { props && props.items.map((item, index) => (
        <PostLink key={index} id={item.show.id} name={item.show.name} />
      )) }
    </Layout>
  );
};

Blog.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    items: data
  }
}

export default Blog;