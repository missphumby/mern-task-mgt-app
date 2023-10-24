const Home = (props) => {
  // const { msgAlert, user } = props
  console.log("props in home", props);

  return (
    <div className="homePage">
      <div
        className="container-fluid"
        style={{
          backgroundImage: ` url("https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <div class="mind">
          <div class="inner-div">
            <h2>Let's Practice Mindfullness</h2>

            <button class="btn btn-success">
              <a href="./sign-up">Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
