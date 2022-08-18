import { useState } from "react";
import "./App.css";
import TripLists from "./components/TripLists";

function App() {
  const [showTrips, setShowTrips] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>hide trips</button>
      {showTrips && <TripLists />}
    </div>
  );
}

export default App;
