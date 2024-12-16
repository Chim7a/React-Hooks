import React, { useCallback, useMemo, useState } from "react";

function Contact() {
  const [count, setCount] = useState(0);

  console.log("Hello " + count);

  //   function complexLogicToReWrite() {
  //     //   complex code logic here
  //     console.log("Complex was called");
  //   }

  const complexLogicToReWrite = useCallback(() => {
    //   complex code logic here
    console.log("Complex was called");
  }, []);

  const storedValue = useMemo(() => {
    return count;
  }, []);

  return (
    <div>
      <div className="container mx-auto my-16">
        <button onClick={complexLogicToReWrite}>Run complex</button>
        <h1>{count}</h1>
        <h1 className="text-red-600">{storedValue}</h1>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Count now!
        </button>
      </div>
    </div>
  );
}

export default Contact;
