'use client';

import { Fira_Mono } from 'next/font/google';

import { Suspense, useEffect } from "react";
import Cursor from "./components/cursor";
import parseInput from "./interpreter";

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
      guest@azurenet
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

var typing_enabled: boolean = true;

const handleInput = (event: KeyboardEvent) => 
  {
    const input = document.getElementById("input");
    if (input && typing_enabled)
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
        printText(createNewLine(), "Lorem Ipsum", 50);
        parseInput();
      }
      //console.log(event.key);
    }
}

const showText = (target: HTMLElement, text: string) =>
  {
    if (!target) return;
    target.innerText = text;
  }

const printText = (target: HTMLElement, text: string, interval: number) => 
  {
    typing_enabled = false;
    if (!target) return;
    if (text.length > 0)
    {
      target.append(text[0]);
      setTimeout(() => printText(target, text.slice(1), interval), interval);
    }
    else if (text.length == 0)
    {
      typing_enabled = true;
    }
    return;

  }

const createNewLine = () =>
{
  var div: HTMLElement = document.createElement("div");
  div.id = "text_div";
  div.className = "text_div";
  document.getElementById("message_body")?.prepend(div);
  return div;
}
