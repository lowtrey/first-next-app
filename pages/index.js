const Index = () => {
  return (
    <div>
      <h1>Our Index Page!!!</h1>
    </div>
  );
};
Index.getInitialProps = async () => {
  console.log('GET INITIAL PROPS!!');
};

export default Index;