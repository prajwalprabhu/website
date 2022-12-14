import React from "react";
import googleLogo from "../assets/google.png";
import igLogo from "../assets/ig.png";
import ghLogo from "../assets/gh.png";
import gmailLogo from "../assets/gmail.png";
function Footer() {
  const accounts = [
    {
      logo: googleLogo,
      userName: "prajwalprabhu",
      url: "https://g.dev/prajwalprabhu",
    },
    {
      logo: igLogo,
      userName: "prajwalprabhu_03",
      url: "https://www.instagram.com/prajwalprabhu_03/",
    },
    {
      logo: ghLogo,
      userName: "prajwalprabhu",
      url: "https://github.com/prajwalprabhu",
    },
    {
      logo: gmailLogo,
      userName: "T Prajwal Prabhu",
      url: "mailto:prajwalprabhu.tellar@gmail.com",
    },
  ];
  return (
    <div className="flex flex-col">
      {accounts.map((account, i) => (
        <div key={i}>
          <img
            className="h-9 w-9 inline-block"
            src={account.logo}
            alt="Google Developer Profile"
          />
          <a
            href={account.url}
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-purple-500 no-underline hover:underline font-bold hover:text-purple-400"
          >
            {account.userName}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Footer;
