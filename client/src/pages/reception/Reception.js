import ReceptionInfo from "../../components/ReceptionInfo";
import PageHeader from "../../components/PageHeader";

const Reception = ({ name, location, brand, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="Reception" description="Let's keep the party going!!" />
      <ReceptionInfo name={name} location={location} brand={brand} email={email} availability={availability}/>

    </section>
  );
};

export default Reception;
