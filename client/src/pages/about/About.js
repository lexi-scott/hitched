import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import auth from "../../utils/auth";
const About = ({ name, location, brand, email, availability }) => {
  if (!auth.loggedIn()) {
    window.location.replace("/");
  }

  return (
    <section className="about">
      <PageHeader
        title="About Us"
        description="Thank you for learning a little more"
      />
      <AboutMe
        name={name}
        location={location}
        brand={brand}
        email={email}
        availability={availability}
      />
    </section>
  );
};

export default About;
