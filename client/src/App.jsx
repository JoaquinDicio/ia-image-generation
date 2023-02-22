import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { NavBar } from "./index.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="bg-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
