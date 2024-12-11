import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <section className="container mx-auto grid h-screen place-items-center text-center">
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
