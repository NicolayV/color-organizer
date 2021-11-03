import "./App.css";
import StarRaiting from "./components/StarRaiting";

function App() {
  return (
    <StarRaiting
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={(e) => alert("double click")}
    />
  );
}

export default App;
