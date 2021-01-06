import React from "react";

const Home = ({ user }) => {
  if (!user.username) {
    return (
      <div className="text-center mt-5">
        <h1>You are not authorized yet!</h1>
      </div>
    );
  }

  return (
    <div className="text-center mt-5">
      <h1>Here is your content:</h1>
      {new Array(10).fill(0).map((el,idx) => <li key={idx}>Hello world</li>)}
    </div>
  );
};

export default Home;
