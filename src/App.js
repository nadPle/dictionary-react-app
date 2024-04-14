import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/nadPle/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          by Nadine Plepel
        </footer>
      </div>
    </div>
  );
}

export default App;
