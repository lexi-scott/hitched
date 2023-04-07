import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import RsvpForm from "../../components/RsvpForm";
import RsvpInfo from "../../components/RsvpInfo";

const Rsvp = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Let's Connect" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <RsvpForm />
          </div>
          <div className="col-12 col-lg-6">
            <RsvpInfo name="Lexi Scott" location={location} email={email} />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Rsvp;
