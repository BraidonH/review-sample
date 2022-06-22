import { React, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review-container">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="bttn-container">
        <button
          className="prev-btn"
          onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            setIndex((prev) =>
              prev < people.length - 1 ? prev + 1 : people.length - 1
            )
          }
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => setIndex(Math.floor(Math.random() * people.length))}
      >
        surprise me
      </button>
    </article>
  );
}
