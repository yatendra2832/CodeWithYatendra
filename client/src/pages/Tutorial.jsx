import React from "react";
import TutorialCard from "../components/TutorialCard";

const Tutorial = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  ">
        <TutorialCard
          imgSrc={"images/language_logo/c++logo.png"}
          tutorialName={"C++"}
        />
        <TutorialCard
          imgSrc={"images/language_logo/clogo.png"}
          tutorialName={"C"}
        />
        <TutorialCard
          imgSrc={"images/language_logo/csslogo.png"}
          tutorialName={"CSS"}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  ">
        <TutorialCard
          imgSrc={"images/language_logo/htmllogo.png"}
          tutorialName={"HTML"}
        />
        <TutorialCard
          imgSrc={"images/language_logo/javascriptlogo.png"}
          tutorialName={"Javascript"}
        />
        <TutorialCard
          imgSrc={"images/language_logo/phplogo.png"}
          tutorialName={"PHP"}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  ">
        <TutorialCard
          imgSrc={"images/language_logo/pythonlogo.png"}
          tutorialName={"Python"}
        />
        <TutorialCard
          imgSrc={"images/language_logo/reactjslogo.png"}
          tutorialName={"ReactJs"}
        />
        <TutorialCard
          imgSrc={"images/language_logo/javalogo.png"}
          tutorialName={"Java"}
        />
      </div>
    </>
  );
};

export default Tutorial;
