import registryData from "./registryData.json";
import Gift from "../../components/Gift";
import PageHeader from "../../components/PageHeader";
import RegistryLinks from "../../components/RegistryLinks";
import auth from "../../utils/auth";
const Portfolio = () => {
  if (!auth.loggedIn()) {
    window.location.replace("/");
  }
  const GiftList = () =>
    registryData.map((registry, i) => (
      <Gift
        key={i}
        id={registry.id}
        gift={registry.gift}
        experiences={registry.experiences}
        image={registry.image}
        color={registry.bgcolor}
        learnMore={registry.learnMore}
        give={registry.give}
        text={registry.text}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Registry" description="Thank you for viewing our" />
      <div className="row">
        <GiftList />
        <RegistryLinks />
      </div>
    </section>
  );
};

export default Portfolio;
