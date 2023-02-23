import React from "react";
import Card from "./Card";

export default function RenderCards({ posts }) {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card photo={post.photo} owner={post.name} prompt={post.prompt} />
        ))
      ) : (
        <h4 className="text-secondary mt-5">Sorry! No posts to show</h4>
      )}
    </>
  );
}
