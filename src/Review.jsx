import { React, useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPeopleArrows,
  FaQuoteRight,
} from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);

  //object destructering for values with people array
  const { name, job, image, text } = people[index];

  //will show previous reviewer within array using ternary operator
  const next = () => {
    setIndex((index) => {
      return index < people.length - 1 ? index + 1 : index;
    });
  };

  //will show previous reviewer within array using ternary operator
  const prev = () => {
    setIndex((index) => {
      return index > 0 ? index - 1 : index;
    });
  };

  //returns random reviewer within array using Math() floor and random with array length set as range
  const randomPerson = () => {
    return Math.floor(Math.random() * people.length);
  };

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
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => setIndex(randomPerson)}>
        surprise me
      </button>
    </article>
  );
}
