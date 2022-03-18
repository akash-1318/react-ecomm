import "./App.css";
import Home from "./pages/home/home";
import MockMan from "mockman-js";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
