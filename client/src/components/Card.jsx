import React, { useState } from "react";
import CardLabel from "./CardLabel";
export default function Card({ photo, prompt, owner }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onClick={() => (ishover == false ? setIsHover(true) : setIsHover(false))}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="image-home-container p-0"
    >
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className="d-flex flex-column justify-content-end image-home"
      >
        {isHover && <CardLabel prompt={prompt} owner={owner} />}
      </div>
    </div>
  );
}
