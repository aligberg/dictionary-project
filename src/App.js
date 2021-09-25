import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center"><h1>Dictionary</h1></header>
        <Dictionary />
        <footer className="text-center"><small>Coded by Ali Greenberg</small></footer>
      </div>
    </div>
  );
}

export default App;
