import { useState } from "react";

const Home = () => {

  const[name, setName] = useState("Mario");

  const handleClick = () => {
    setName("Hemal");
  };

    return (
      <div className="home">
        <h2>Homepage</h2>
        <h1>My name is: { name }</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }
   
  export default Home;