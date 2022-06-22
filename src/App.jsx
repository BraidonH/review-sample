import { useState } from "react";
import Review from "./Review";
import { MdOutlineRateReview } from "react-icons/md";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <section className="container">
        <div className="title">
          <header>Reviews Sample</header>
          <MdOutlineRateReview className="review" />
        </div>
        <Review className="review-component" />
      </section>
    </main>
  );
}

export default App;
