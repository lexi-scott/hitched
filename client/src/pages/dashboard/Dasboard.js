import DashboardInfo from "../../components/DashboardInfo";
import PageHeader from "../../components/PageHeader";
import { QUERY_USERS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import auth from "../../utils/auth";

const Dashboard = () => {
  const { data } = useQuery(QUERY_USERS);
  // if not a single object then use [] list option
  const userData = data?.users || [];
  console.log(userData);

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
        title="The Couple's Dashboard"
        description="Here are all the pesky little details..."
      />

      <DashboardInfo userData={userData} />
    </section>
  );
};
export default Dashboard;
