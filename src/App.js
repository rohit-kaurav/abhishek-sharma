import logo from './logo.svg';
import './App.css';
import './navbar/navbar';
import Navbar from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title="MyNav"></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, this is Abhishek Sharma
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          And I am your Wedding Planner
        </a>
      </header>
    </div>
  );
}

export default App;
