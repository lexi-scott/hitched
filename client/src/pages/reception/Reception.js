import ReceptionInfo from "../../components/ReceptionInfo";
import PageHeader from "../../components/PageHeader";
import auth from "../../utils/auth";
const Reception = ({ name, location, brand, email, availability }) => {
  if (!auth.loggedIn()) {
    return (
      <h1 className="d-flex flex-row justify-content-center">
        Access Denied!, please log in{" "}
      </h1>
    );
  }

  return (
    <section className="about">
      <PageHeader
        title="Reception"
        description="Let's keep the party going!!"
      />
      <ReceptionInfo
        name={name}
        location={location}
        brand={brand}
        email={email}
        availability={availability}
      />
    </section>
  );
};

export default Reception;
