import "./App.css";
import Rightbar from "./components/rightbar/Rightbar";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="HomeContainer">
        <Rightbar />
        <HomePage className="home" />
      </div>
    </div>
  );
}

export default App;
