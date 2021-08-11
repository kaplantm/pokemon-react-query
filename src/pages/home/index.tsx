import React from "react";
import { useQuery } from "react-query";
// TODO: now scss?
function HomePage() {
  // TODO: now enter name and play
  // TODO: now context
  const query = useQuery("todos", getTodos);
  return <h1>Home</h1>;
}

export default HomePage;
