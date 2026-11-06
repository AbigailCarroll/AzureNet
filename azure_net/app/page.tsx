import { Fira_Mono } from 'next/font/google';

import { Suspense } from "react";
import Cursor from "./components/cursor";

const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${firaMono.className}`}
    >
    <head>
      <script type = "text/typescript" src="command_prompt.ts"></script> 
    </head>
    <body className="min-h-full flex flex-col console_background">
    <div className="console">
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
       <Cursor/>
      <div className="cursor" id="cursor">
      </div>
      </Suspense>
    </div>
  </div>
</div>
</body>
</html>
  );
}