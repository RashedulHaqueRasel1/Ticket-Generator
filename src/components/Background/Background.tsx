import React from "react";

export default function Background() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
 
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background-desktop.png')",
        }}
      />

 
      <img
        src="/images/pattern-squiggly-line-top.svg"
        alt=""
        className="absolute top-16 right-0 w-xl h-xl pointer-events-none"
      />

 
      <img
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
        alt=""
        className="absolute bottom-0 left-0 w-2xl h-2xl pointer-events-none"
      />
    </div>
  );
}
