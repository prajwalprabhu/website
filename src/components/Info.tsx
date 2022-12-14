import React from "react";

function Info() {
  const contribs = [
    {
      name: "Modular Font Editor K/Math",
      link: "https://github.com/MFEK/math.rlib",
      desc: "Math library of font editing tools written in Rust",
    },
    {
      name: "Modular Font Editor K/Pathops",
      link: "https://github.com/MFEK/pathops",
      desc: "A utility for applying path operations to contours (in UFO .glif format).",
    },
    {
      name: "servirtium-rust",
      link: "https://github.com/servirtium/servirtium-rust",
      desc: "A Rust implementation of Servirtium, a library that helps test interactions with APIs",
    },
    {
      name: "WorldBank Climate Data Api Client",
      link: "https://github.com/servirtium/demo-rust-climate-tck",
      desc: "A simple API client for retrieving data from the World Bank Climate Data Api. Currently, it supports only getting average annual rainfall values.",
    },
  ];
  return (
    <div>
      <p className="text-center ">
        Heyy <br />
        Soooooo my name is as you all might have seen it in the top{" "}
        <b>T Prajwal Prabhu</b>
        <br />
        Currently I am a student of{" "}
        <b>Manipal Institue of Technology , Manipal </b> 2025 batch of{" "}
        <b>B.Tech in Computer and Communication </b> <br />
        So as I mentioned I'm a student but it is one side of the story I'm
        highly interested in software development and bike riding .
        <br />
        My favorite language or technology are Rust , Typescript ,... Checkout
        my
        <a
          href="https://github.com/prajwalprabhu"
          target="_blank"
          rel="noreferrer"
          className="mx-1 text-purple-500 no-underline hover:underline font-bold hover:text-purple-400"
        >
          Github
        </a>
        for more info :) <br />
        My Contributions <br />
      </p>
      <div className="grid grid-cols-2  justify-center">
        {contribs.map((contrib) => (
          <div
            key={contrib.name}
            className="m-2 p-2 rounded border border-blue-500"
          >
            <a
              href={contrib.link}
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-purple-500 no-underline hover:underline font-bold hover:text-purple-400"
            >
              {contrib.name}
            </a>
            <p>{contrib.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;
