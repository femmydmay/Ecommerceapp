import React, { useState } from "react";
import "../components/Card.css";

const Cardprofile = () => {
  const [name, setName] = useState("Olufemi Domingo");
  const [job, setJob] = useState("Software Developer");
  const [about, setAbout] = useState(
    "I must explain. I as a  Software Developer design and builds computer programs that power mobile devices, desktop computers, and even cars. I not only identify user needs but also create new applications for any given market while making improvements based on feedback from users."
  );
  return (
    <div className="flex w-80 h-10 justify-center m-auto pt-10">
      <div className="Card ">
        <div className="upper-container">
          <div className="image-container">
            <img
              className="image"
              src="./femisuit.jpg"
              alt=""
              height="100px"
            ></img>
          </div>
        </div>
        <div className="lower-container">
          <h1> {name} </h1>
          <h4> {job} </h4>
          <h3> {about} </h3>
          <br />
          <button> visit profile </button>
        </div>
      </div>
    </div>
  );
};

export default Cardprofile;
