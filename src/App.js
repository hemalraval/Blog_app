
function App() {

  const xx = {
    name:"a",
    age:44
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="component">
        <h3>My Component</h3>
        <h1>{ xx.name }</h1>
      </div>
    </div>
  );
} 

export default App;
