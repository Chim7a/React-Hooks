import React, { useReducer } from "react";
import { Link } from "react-router";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return { count: state.count + 1 };
    }
    case "SUBTRACT": {
      return { count: state.count - 1 };
    }
    case "RESET": {
      return { count: 0 };
    }
    default: {
      console.log("Wrong action called");
    }
  }
}
function Home() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <section className="container mx-auto grid h-screen place-items-center text-center">
        <div>
          <h1 className="text-4xl font-bold">{state.count}</h1>
          <button
            className="text-green-600 border p-2"
            onClick={() => dispatch({ type: "SUBTRACT" })}
          >
            -
          </button>
          {/* Reset button */}
          <button
            className="text-green-600 border p-2"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
          <button
            className="text-green-600 border p-2"
            onClick={() => dispatch({ type: "ADD" })}
          >
            +
          </button>
        </div>
        <div className="grid gap-3">
          <h1 className="text-5xl font-semibold mb-3">Welcome to Pet Store</h1>
          <p className="text-lg text-gray-500 font-light ">
            Express your love for pets today and buy one.
          </p>
          <Link
            className=" mx-auto p-3 w-fit rounded-md font-semibold bg-black tracking-wide text-white"
            to={"/marketplace"}
          >
            Adopt Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
