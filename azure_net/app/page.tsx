'use client';

import { Fira_Mono } from 'next/font/google';

import { Suspense, useEffect } from "react";
import Cursor from "./components/cursor";

const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {

  useEffect(() => {
  const keyDownHandler = (event: KeyboardEvent) => handleInput(event);
  document.addEventListener("keydown", keyDownHandler);

  return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <html
      lang="en"
      className={`h-full antialiased ${firaMono.className}`}
    >
    <head>
      <script type = "text/typescript" src="command_prompt.ts"></script> 
    </head>
    <body className="min-h-full flex flex-col console_background">
    <div className="console" >
  <header>
    <p>
      guest@azurewater
    </p>
  </header>
  <div className="consolebody" id="msg">
    <div id="message_body">
      <Suspense fallback={<div>Initialising...</div>}>
      <span>
        {'> '}
      </span>
      <span id = "input" className="input"></span>
      <Cursor />

      </Suspense>
    </div>
  </div>
</div>
</body>
</html>
  );
}


const handleInput = (event: KeyboardEvent) => {
    const input = document.getElementById("input");
    if (input)
    {
      if (event.key.length === 1)
      {
        input.innerText += event.key;
      }
      else if (event.key === "Backspace")
      {
        input.innerText = input?.innerText.slice(0, -1);
      }
      else if (event.key === "Enter")
      {
        //showText
      }
      //console.log(event.key);
    }
}