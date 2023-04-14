
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


// const styles = {
//   ul: {
//     columnCount: 7,
//   }
// }


const DashboardInfo = ({ userData }) => {
  console.log(userData)

  const [ref, inView] = useInView({
    threshold: 0.2,

    triggerOnce: true,
  });


  return (


    <div className="aboutContainer container">
      <div className="row">
        {/* <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div> */}
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <div>

              <div className="column">
                Guest
                <ul className="list-group">
                  {console.log(50, userData)}

                  {userData.map(item => (
                    <li className="list-group-item" key={item.id}>
                      {item.username}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="column" >
                Email
                <ul className="list-group">
                  {userData.map(item => (
                    <li className="list-group-item" key={item.id}>
                      {item.email}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="column" >
                Attending
              </div>

              <div className="column" >
                Adults
              </div>

              <div className="column" >
                Children
              </div>

              <div className="column" >
                Diet
              </div>

              <div className="column" >
                Allergy
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardInfo;
