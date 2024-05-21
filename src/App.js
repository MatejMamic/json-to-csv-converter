import logo from "./logo.svg";
import "./App.css";
import JsonFileInput from "./components/jsonFileInput/JsonFileInput";
import JsonToCsvConverter from "./components/jsonFileInput/jsonToCsvConverter/JsonToCsvConverter";

function App() {
  return (
    <div className="App">
      <JsonFileInput />
      <JsonToCsvConverter />
    </div>
  );
}

export default App;
