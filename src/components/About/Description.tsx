import { ReactElement } from "react";

export default function about(): ReactElement {
  return (
    <div className="w-fit rounded-md border-2 border-neutral-700 bg-neutral-800 p-3 ">
      <div className="flex max-w-[24rem] flex-col space-y-2 text-white">
        <h1 className="text-center text-lg font-bold">About Me</h1>
        <p>
          I am currently studying Computer Science, and making projects in my
          free time. Feel free to contact me about anything. My main project at
          the moment is gm-server, an open-source framework for interfacing
          between Java servers and Gamemaker: Studio game clients.
        </p>
        <br />
        <div className="space-y-0 rounded-md border-2 border-neutral-600 bg-neutral-700 p-2">
          <p>💻 Junior Software Enginner</p>
          <p>🎓 University of Adelaide</p>
          <p>🏸 Badminton Coach</p>
          <span>
            <span>🐟 Avid </span>
            <a
              href="https://www.instagram.com/ninding.femo/"
              className="text-sky-500 hover:text-sky-600"
            >
              Snorkeller
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
