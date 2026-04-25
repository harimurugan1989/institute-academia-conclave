import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Objectives  from "./components/Objectives";
import Themes      from "./components/Themes";
import Activities  from "./components/Activities";
import Participants from "./components/Participants";
import Speakers    from "./components/Speakers";
import Committee   from "./components/Committee";
import Register    from "./components/Register";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

export default function App() {
  return (
    <div className="font-body text-nitj-text">
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Themes />
      <Activities />
      <Participants />
      <Speakers />
      <Committee />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}