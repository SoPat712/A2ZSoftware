import logo from './logo.svg';
import './App.css';

//make scrollable webpage

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>, save, and reload.
        </p>
        <a

          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
      </header>
    </div>
  );
}
export default App;
