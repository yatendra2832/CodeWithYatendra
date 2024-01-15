import React, { Link } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import WatchLater from "./WatchLater";
import CourseCard from "../components/CourseCard";
const Courses = () => {
  return (
    <>
      {/* Premium Courses */}
      <h2 className="text-center text-primary fw-bold fs-1">Premium Courses</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
        {/* Web Dev Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/webdevlopement.png"
          title="Web Dev Tutorials for Beginners"
          description="This is one of my favorite courses. In this series, you'll learn about HTML, CSS, JavaScript, and everything needed to be a job-ready web developer. Just hop on, man."
        />

        {/* Tailwind Course */}
        <CourseCard
          imgSrc="images/course_thumbnail/tailwind.png"
          title="Tailwind Course in Hindi"
          description="Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn Tailwind CSS from scratch for free!"
        />

        {/* Ultimate JavaScript Course */}
        <CourseCard
          imgSrc="images/course_thumbnail/javascript.png"
          title="Ultimate JavaScript Course"
          description="This latest JavaScript course comes with a premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy"
        />

        {/* Python Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/python.png"
          title="Python Tutorials - 100 Days of Code"
          description="Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to Python!"
        />

        {/* React Js Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/reactjs.png"
          title="React Js Tutorials for Beginners"
          description="React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn React from the ground up!"
        />

        {/* Next.js Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/nextjs.png"
          title="Next.js Tutorials for Beginners"
          description="Complete Next.js Course by CodeWithHarry in Hindi - Learn Next.js from Scratch."
        />

        {/* C Language Practice Programs */}
        <CourseCard
          imgSrc="images/course_thumbnail/c.png"
          title="C Language Practice Programs"
          description="This series contains programs for you to practice C Programming and related concepts. It has videos that will provide you with a proper explanation of the program and its logic."
        />

        {/* Basic Python Programs */}
        <CourseCard
          imgSrc="images/course_thumbnail/python1.png"
          title="Basic Python Programs With Code"
          description="This series contains basic Python programs. It's a concise and precise course, so if you have a couple of minutes or an hour, just get started. This course will surely add some value."
        />

        {/* C++ Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/c++.png"
          title="C++ Tutorials For Beginners"
          description="This course contains all the concepts and exercises of the C++ language. If you're a mere beginner, you can start your coding journey with this course and ace your exams."
        />

        {/* Python Django Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/django.png"
          title="Python Django Tutorials For Beginners"
          description="Django is a Python-based free and open-source web framework. If you already know Python and want to try web development, you can go with Django."
        />

        {/* Android Development Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/android.png"
          title="Android Development Tutorials"
          description="Android Development is one of the booming career options nowadays, and many people are learning Android because it feels so good to create own app. You can also grab this opportunity by enrolling in this course."
        />

        {/* Java Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/java.png"
          title="Java Tutorials For Beginners"
          description="If you don't know programming and want to start your career by learning Java as your first language, you can start with this course as it is for absolute beginners."
        />
      </div>

      {/* More Courses */}
      <h2 className="text-center text-primary my-4">More Courses</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
        {/* Data Structures and Algorithms */}
        <CourseCard
          imgSrc="images/course_thumbnail/dsa.png"
          title="Data Structures and Algorithms Course"
          description="Data Structure and Algorithm is one of the most crucial things to learn. This course will give you a complete understanding of Data Structure and its implementation."
        />

        {/* PHP Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/php.png"
          title="PHP Tutorials For Beginners"
          description="PHP is a general-purpose scripting language geared towards web development. This course will give you a complete and proper understanding of PHP concepts."
        />

        {/* Git and GitHub Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/git.png"
          title="Git and GitHub Tutorials For Beginners"
          description="If you're serious about coding and want to make a career out of it, then do learn Git and GitHub because it is something that you'll use at every phase of your job."
        />

        {/* Data Science and Big Data Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/datascience.png"
          title="Data Science and Big Data Tutorials"
          description="This course will give you a gist of Data Science and Big Data. I'm sure you must have heard about Data Scientist. This series contains the content to become one of them."
        />

        {/* ML Tutorials */}
        <CourseCard
          imgSrc="images/course_thumbnail/machinelearning.png"
          title="ML Tutorials For Beginners"
          description="Machine Learning is one of the exciting topics nowadays. And if you want to get a glimpse of ML, don't think twice. Just get started with this course."
        />

        {/* Web Dev Using Flask and Python */}
        <CourseCard
          imgSrc="images/course_thumbnail/flask.png"
          title="Web Dev Using Flask and Python"
          description="This course will teach you everything you need to know about web development using Flask. It will lead you through each and every concept of Flask and will give you a good initial start."
        />
      </div>
      {/* End of Course Cards */}
    </>
  );
};

export default Courses;
