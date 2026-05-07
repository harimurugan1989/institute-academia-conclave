import { Routes, Route } from "react-router-dom";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Objectives   from "./components/Objectives";
import Themes       from "./components/Themes";
import Activities   from "./components/Activities";
import Participants from "./components/Participants";
import Speakers     from "./components/Speakers";
import Committee    from "./components/Committee";
import Register     from "./components/Register";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import RegisterPage  from "./pages/RegisterPage";
import SponsorsPage  from "./pages/SponsorsPage";
import Sponsors      from "./components/Sponsors";

function HomePage() {
  return (
    <div className="font-body text-nitj-text">
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Themes />
      <Speakers />
      <Activities />
      <Sponsors />
      <Participants />
      <Committee />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/"          element={<HomePage />} />
      <Route path="/register"  element={<RegisterPage />} />
      <Route path="/sponsors"  element={<SponsorsPage />} />
    </Routes>
  );
}
