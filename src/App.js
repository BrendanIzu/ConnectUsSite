import './App.css';
import Counter from './components/counter';
import Offerings from './components/offerings';
import Navbar from './components/navbar';

function App() {
  return (
    <body>
      <div className='fixed-top'>
        <Navbar/>
      </div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </body>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
