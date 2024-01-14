import { useEffect, useRef } from "react";
import Typed from "typed.js";
const LearnSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "C++",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "C",
        "PHP",
        "JAVA",
        "typescript",
        "SQL",
        "React JS",
        "React Native",
        "Flutter",
        "Node JS",
        "Express JS",
        "MongoDB",
        "MySQL",
        "Bootstrap",
        "Tailwind",
        "Material UI",
      ], // Add your learning topics here
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typedInstance = new Typed(typedRef.current, options);

    return () => {
      // Clean up the Typed instance when the component unmounts
      typedInstance.destroy();
    };
  }, []);

  return (
    <h3 className="mb-0 my-2">
      Learn <span className="text-primary" ref={typedRef}></span>
    </h3>
  );
};

export default LearnSection;
