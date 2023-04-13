import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Registry from "../pages/registry/Registry";
import Rsvp from "../pages/rsvp/Rsvp";
import Social from "../pages/social/Social";
import auth from "../utils/auth";
import ErrorLogIn from "../pages/ErrorLogin";

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
      <Route path="/registry" element={<Registry />} />
      <Route path="/social" element={<Social />} />
      <Route path="/errorLogin" element={<ErrorLogIn />} />
    </Routes>
  );
};

export default AnimatedRoutes;
