import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/registry/Portfolio";
import Rsvp from "../pages/rsvp/Rsvp";
import Social from "../pages/social/Social";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Landing
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/rsvp" element={<Rsvp />} />
      <Route path="/registry" element={<Portfolio />} />
      <Route path="/social" element={<Social />} />
    </Routes>
  );
};

export default AnimatedRoutes;
