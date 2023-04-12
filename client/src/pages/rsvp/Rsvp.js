import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import RsvpForm from "../../components/RsvpForm";
import RsvpInfo from "../../components/RsvpInfo";

import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../../utils/queries";
const Rsvp = () => {
  const { data } = useQuery(QUERY_ME);

  const userData = data?.me || data?.user || {};

  console.log(userData);

  return (
    <section className="contact">
      <PageHeader title="RSVP" description="Let's Connect" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <RsvpForm />
          </div>
          <div className="col-12 col-lg-6">
            <RsvpInfo
              name={userData.username}
              email={userData.email}
              rsvp={userData.rsvp}
            />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Rsvp;
