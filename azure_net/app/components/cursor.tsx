'use client'

import { useEffect, useState } from "react";

let cursorInterval: number = 600;

export default function Cursor()
{
    useEffect(() => {
        setTimeout(Hide, cursorInterval);
    }, []);
    return(
    <span id="cursor" className="blink">
          {'_'}
      </span>
    );
}


//setTimeout(Hide, cursorInterval);

function Hide()
{
    const cursorElement = document.getElementById("cursor");
    cursorElement?.toggleAttribute("hidden");
    setTimeout(Hide, cursorInterval);
}