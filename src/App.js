import './App.css';
import {Route, Routes} from "react-router-dom";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/timer" element={<Timer />}/>
      </Routes>
    </div>
  );
}

export default App;
