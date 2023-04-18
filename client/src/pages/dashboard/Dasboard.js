//import components and query
import DashboardInfo from "../../components/DashboardInfo";
import PageHeader from "../../components/PageHeader";
import { QUERY_USERS } from "../../utils/queries";
import { useQuery } from "@apollo/client";



const Dashboard = () => {

  // here we will use date from query
  const { data } = useQuery(QUERY_USERS);

  // if not a single object then use [] list option
  const userData = data?.users || [];
  console.log(userData)

  //return PageHeader and Dashboard infor components in browser view to use
  return (
    <section className="about">
      <PageHeader title="The Couple's Dashboard" description="Here are all the pesky little details..." />
      <DashboardInfo userData={userData} />

    </section>

  );
};
export default Dashboard;
