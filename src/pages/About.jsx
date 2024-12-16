import React, { useEffect, useRef } from "react";

function About() {
  const HEADING_TEXT_REF = useRef(null);

  useEffect(() => {
    HEADING_TEXT_REF.current.className = "Mike";
    HEADING_TEXT_REF.current.style.fontSize = "5rem";
    HEADING_TEXT_REF.current.style.color = "red";
    HEADING_TEXT_REF.current.innerText = "This is awesome";
  });
  return (
    <>
      <section className="container mx-auto">
        <h1 ref={HEADING_TEXT_REF} className="chima">
          Learn about us
        </h1>
        <p>This is awesome</p>
      </section>
    </>
  );
}

export default About;
