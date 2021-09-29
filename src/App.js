import './App.css';
import Dictionary from "./Dictionary";
import Toggle from "./Toggle";

function App() {

  return (
    <div className="App">
      <Toggle />
      <div className="container">
        <header className="text-center"><h1>Dictionary</h1></header>
        <Dictionary defaultWord="coffee" />
        <footer className="text-center mt-5"><small><a href="https://github.com/aligberg/dictionary-project">Open-sourced code</a> by Ali Greenberg</small></footer>
      </div>
    </div>
  );
}

export default App;
