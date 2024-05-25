import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Desktop from "../pages/desktop";
import Listing from "../pages/listing";
import About from "../pages/about";
import Contact from "../pages/contact";
import Blog from "../pages/blog";
import Comment from "../pages/comment";
const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
