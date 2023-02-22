import React from "react";

export default function Card({ photo, prompt, owner }) {
  return (
    <div className="image-home-container col p-0">
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className="image-home"
      ></div>
    </div>
  );
}
