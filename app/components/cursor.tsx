'use client'

import { useEffect, useState } from "react";

let cursorInterval: number = 600;

export default function Cursor()
{
    useEffect(() => {
        setTimeout(Blink, cursorInterval);
    }, []);
    return(
    <span id="cursor" className="blink">
          {'_'}
      </span>
    );
}


function Blink()
{
    const cursorElement = document.getElementById("cursor");
    cursorElement?.toggleAttribute("hidden");
    setTimeout(Blink, cursorInterval);
}