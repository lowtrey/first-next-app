const Post = ({ id }) => <h1>You're Looking At Post #{id}</h1>;

Post.getInitialProps = async ({ query }) => {
  return query;
};

export default Post;