import Greeting from "./component/Greeting";
import "./App.css";
import Async from "./component/Async";

function App() {
  return (
    <div className="App">
      <Async />
      <Greeting />
    </div>
  );
}

export default App;
