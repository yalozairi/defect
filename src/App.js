import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'
import defectLogoSpin from "./media/DefectLogoSpin.mp4"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer url={defectLogoSpin} width='100%' height='100%' playing={true} loop={true} pip={false}/>
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
      </header>
    </div>
  );
}

export default App;
