import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layouts/index';

const Content = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.image} />
  </div>
)


const Post = props => {
  console.log('post =>', props);
  const { show } = props;
  return (
    <Layout>
      <Content name={show.name} summary={show.summary} image={show.image ? show.image.medium : ''} />
    </Layout>
  );
};


Post.getInitialProps = async function (context) {
  const { id } = context.query;
  // const req_id = id ? id : props.url.query.title;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show }
}

export default Post;