import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Dave & Buster",
    location: "Napa, CA",
    tagline: "Say Yes on October 10, 2023",
    email: "daveandbustermarried@mail.com",
    availability: "Save the Date!",
    brand:
      "We met at Subway and fell in love because the worker said they were out of mayo and both of us got so angy we decided we should spend our lives together being miserable!!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
