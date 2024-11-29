"use client"

import React from "react";
import Typewriter from "typewriter-effect";

const Typewrite = ({texts}: { texts: string[] }) => {
  return (
    <div>
      <Typewriter
        options={{
          autoStart: true,
          strings: [...texts],
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewrite;
