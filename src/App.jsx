import { useState } from "react";
import { MdOutlineRateReview } from "react-icons/md";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>Reviews Sample</header>
      <MdOutlineRateReview className="review" />
    </div>
  );
}

export default App;
