import React from "react";
import Typed from "typed.js";
import LearnSection from "../components/LearnSection";
const Home = () => {
  return (
    <>
      {/* start box */}
      <div className="row  m-2">
        <div className="col-md-6 w-100 my-4 px-4">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col  p-4 d-flex flex-column position-static ">
              <h3 className="mb-0 my-2">
                Welcome to{" "}
                <span className="text-primary fw-bold">CodeWithYatendra</span>
              </h3>
              <LearnSection />

              <p className="card-text mb-auto my-4 fs-5">
                Confused on which course to take? I have got you covered. Browse
                courses and find out the best course for you.
                <br />
                Its free! Code With Yatendra is my attempt to teach basics and
                <br />
                those coding techniques to people in short time which took me
                ages to learn.
              </p>
              <div className="row d-flex  my-4">
                <div className="col col-md-6 col-sm-12">
                  <button className="btn btn-primary mx-2 mb-0 my-0 w-100">
                    Free Courses
                  </button>
                </div>
                <div className="col col-md-6 col-sm-12">
                  {" "}
                  <button className="btn btn-outline-dark mx-2 mb-0 my-0 w-100">
                    Explore Blog
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-md-6 d-none d-md-block ">
              <img
                src="/images/about.png"
                className="bd-placeholder-img hoverable w-100"
                width="800"
                height="400"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* start box  end*/}

      {/* Main container */}
      <div className="row p-2 my-4">
        <h2 className="text-center  text-primary fs-2 fw-bold">
          Recommended Courses
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 my-4">
          <div className="col">
            <div className="card">
              <img
                src="images/course_thumbnail/python.png"
                className="card-img-top"
                alt="python"
                width={"320"}
                height={"200"}
              />
              <div className="card-body">
                <h5 className="card-title ">
                  Python Tutorials-100Days of Code
                </h5>
                <p className="card-text">
                  Python is one of the most demanded programming languages in
                  the job market. Surprisingly, it is equally easy to learn and
                  master Python. Let's commit your 100 days
                </p>
                <div className="container d-flex justify-content-center">
                  <button className="btn btn-primary border rounded-5 w-50">
                    Start Watching
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="images/course_thumbnail/javascript.png"
                className="card-img-top"
                alt="Js"
                width={"320"}
                height={"200"}
              />
              <div className="card-body">
                <h5 className="card-title">Ultimate JavaScript Course</h5>
                <p className="card-text">
                  This latest JavaScript course comes with premium curriculum
                  that covers everything from basics to advance. On top of that,
                  you will get my handwritten notes of JS for completely free.
                </p>
                <div className="container d-flex justify-content-center">
                  <button className="btn btn-primary border rounded-5 w-50">
                    Start Watching
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="images/course_thumbnail/reactjs.png"
                className="card-img-top"
                alt="reactjs"
                width={"320"}
                height={"200"}
              />
              <div className="card-body">
                <h5 className="card-title">React JS Tutorials For Beginners</h5>
                <p className="card-text">
                  React is a free and open-source front-end JavaScript library.
                  This series will cover React from starting to the end. We will
                  learn react from the ground up!.
                </p>
                <div className="container d-flex justify-content-center">
                  <button className="btn btn-primary border rounded-5 w-50">
                    Start Watching
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main container End */}
      {/* Testimonials page */}

      <h2 className="text-center my-4 text-primary fw-bold fs-1">
        Testimonials
      </h2>
      <div className="row align-items-md-stretch px-4 ">
        <div className="col-md-6  col-sm-12 my-4 ">
          <div className="h-100 p-5 text-bg-light border rounded-3 shadow">
            <p className="fs-5 fst-italic">
              "I don't have words to thank this man, I'm really grateful to have
              this channel and website in my daily routine. If you're a mere
              beginner, then you can trust this guy and can put your time into
              his content. I can assure you that it'll be worth it."
            </p>
            <p className="fs-5 fw-semibold fst-italic">
              Neeraj Kumar(Web Developer)
            </p>
            <p className="fs-6 "></p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 my-4">
          <div className="h-100 p-5 bg-light border rounded-3 shadow">
            <p className="fs-5 fst-italic">
              "For everyone who wants to level up their #Coding and #Dev skills
              - seriously, this channel is for you! Both basic and advanced
              stacks are covered on this channel, and one can learn according to
              his skill levels. And the icing on the cake is, everything is
              available for free."
            </p>
            <p className="fs-5 fw-semibold fst-italic">
              Ravi Yadav (Web Developer)
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials page End */}
    </>
  );
};

export default Home;
