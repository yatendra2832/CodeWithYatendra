import React from "react";
import NoteCard from "../components/NoteCard";
const Notes = () => {
  return (
    <>
      <h2 class="text-center text-primary my-4">
        Download Notes by CodeWithYatendra
      </h2>

      <div className="row ">
        <NoteCard logoSrc="images/language_logo/htmllogo.png" title="HTML" />
        <NoteCard logoSrc="images/language_logo/csslogo.png" title="CSS" />
        <NoteCard
          logoSrc="images/language_logo/javascriptlogo.png"
          title="Javascript"
        />
      </div>
      <div className="row">
        <NoteCard
          logoSrc="images/language_logo/pythonlogo.png"
          title="Python"
        />
        <NoteCard logoSrc="images/language_logo/clogo.png" title="C" />
        <NoteCard logoSrc="images/language_logo/c++logo.png" title="C++" />
      </div>
      <div className="row">
        <NoteCard logoSrc="images/language_logo/javalogo.png" title="Java" />
        <NoteCard
          logoSrc="images/language_logo/reactjslogo.png"
          title="ReactJs"
        />
        <NoteCard logoSrc="images/language_logo/phplogo.png" title="PHP" />
      </div>
    </>
  );
};

export default Notes;
