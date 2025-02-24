// src/app/page.js
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Cursor from "./Cursor";

export default function Page({ darkMode }) {
  return (
    <div>
      <Home />
      <Services />
      <Footer />
      <Contact />
    </div>
  );
}
