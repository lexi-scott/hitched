import DashboardInfo from "../../components/DashboardInfo";
import PageHeader from "../../components/PageHeader";

const Dashboard = () => {
  return (
    <section className="about">
      <PageHeader title="The Couple's Dashboard" description="Here are all the pesky little details at..." />
      <DashboardInfo/>
    </section>
  );
};

export default Dashboard;
