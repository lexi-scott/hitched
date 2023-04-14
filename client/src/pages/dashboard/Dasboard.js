import DashboardInfo from "../../components/DashboardInfo";
import PageHeader from "../../components/PageHeader";
import auth from "../../utils/auth";
const Dashboard = () => {
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
        description="Here are all the pesky little details at..."
      />
      <DashboardInfo />
    </section>
  );
};

export default Dashboard;
