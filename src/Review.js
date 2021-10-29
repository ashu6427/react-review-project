import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setindex] = useState(0);
  //for this project we will be using destructuring
  const { name, job, image, text } = people[index];

  const checknumbers = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };

  const prevstate = () => {
    console.log("going to previous state");
    // const newindex = index - 1;
    // setindex(newindex);
    //you can set up this above functionality

    setindex((currentindex) => {
      const newindex = currentindex - 1;
      return checknumbers(newindex);
    });
  };

  const nextstate = () => {
    console.log("next state");
    // const newindex = index + 1;
    // setindex(newindex);

    setindex((currentindex) => {
      const newindex = currentindex + 1;
      return checknumbers(newindex);
    });
  };

  const randomperson = () => {
    console.log("randomperson invoked");
    let randomvalue = Math.floor(Math.random() * people.length);
    if (randomvalue === index) {
      randomvalue = index + 1;
    }
    setindex(checknumbers(randomvalue));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h3 className="author">{name}</h3>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button className="prev-btn" onClick={prevstate}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextstate}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomperson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
