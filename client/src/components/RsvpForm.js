import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from '@apollo/client';
//import { SAVE_RSVP} from '../utils/mutations';
//import { fieldNameFromStoreName } from "@apollo/client/cache";


const styles = {
  counter: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    rowGap: '20px',
  },

  counterOutput: {
    fontSize: '30px',
    color: 'white',
    margin: '20px',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: '20px'
  },

}

const RsvpForm = () => {

  const [isHover, setIsHover] = useState(false);
  const [guestResponse, setGuestResponse] = useState(true);
  const [numGuests, setNumGuests] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  const [guestSpecialFood, setGuestSpecialFood] = useState("");
  const [guestFoodAllergy, setGuestFoodAllergy] = useState("");
  //const [saveRsvp] = useMutation(SAVE_RSVP);


  const [ref, inView] = useInView({

    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(false);


  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const controlBtn = {
    fontSize: '15px',
    fontFace: 'bold',
    padding: '10px 10px',
    backgroundColor: isHover ? '#e3be2f' : 'transparent',
    color: isHover ? 'white' : '#e3be2f',
    border: '1px solid #e3be2f',
    cursor: 'pointer',
    transition: '0.2s ease-in-out'
  };

  //handle counter
  //increase counter
  const increase = (e) => {
    if (e.target.name === "guests")
      setNumGuests(count => count + 1);
    else
      setNumChildren(count => count + 1)
  };

  //decrease counter
  const decrease = (e) => {
    if (e.target.name === "guests") {
      if (numGuests > 0) {
        setNumGuests(count => count - 1);
      }
    }
    else {
      if (numChildren > 0) {
        setNumChildren(count => count - 1);
      }
    }
  };

  //handle radio button changes
  const onChangeValue = (e) => {
    console.log(e.target.value, e.target.name);

    if(e.target.name === "response"){
    if (e.target.value === "No") {
      setGuestResponse(false)
    } else{
      setGuestResponse(true)
    }
  }

  if(e.target.name === "specialFood"){
    if (e.target.value === "Vegetarian") {
      setGuestSpecialFood("Vegetarian")
    } else if (e.target.value === "Vegan"){
      setGuestSpecialFood('Vegan')
    } else {
      setGuestSpecialFood('None')
    }
  }

  if(e.target.name === "foodAllergy"){
    setGuestFoodAllergy(e.target.value)
  }
    
  }

  //submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("IN SUBMIT", guestResponse, numGuests, numChildren, guestSpecialFood, guestFoodAllergy);

   
  };

  return (
    <motion.form
      action=""
      ref={ref}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <h4 className="contentTitle">Let us know your plans...</h4>
      <div className="col-12 formGroup">
        <label style={{ color: "white" }}>Will you be joining us?</label>
        <div onChange={onChangeValue} style={{ display: "inline-block", marginLeft: "20px" }}>
          <label style={{ color: "white", marginRight: "10px" }}><input type="radio" value="Yes" name="response" style={{ margin: "10px 0" }} defaultChecked/> Yes</label>
          <label style={{ color: "white" }}><input type="radio" value="No" name="response" style={{ margin: "10px 0" }} /> No</label>
        </div>
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <label style={{ color: "white" }}>Number of Guests:</label>

        <div className="btnContainer">
          <button className="controlBtn" name="guests" onClick={decrease} style={controlBtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>-</button>
          <span className="counterOutput" style={styles.counterOutput} name="guests">{numGuests}</span>
          <button className="controlBtn" name="guests" onClick={increase} style={controlBtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>+</button>
        </div>
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <label style={{ color: "white" }}>Number of Children:</label>
        <div className="btnContainer">
          <button className="controlBtn" name="children" onClick={decrease} style={controlBtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>-</button>
          <span className="counterOutput" style={styles.counterOutput} name="guests">{numChildren}</span>
          <button className="controlBtn" name="children" onClick={increase} style={controlBtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>+</button>
        </div>
      </div>
      <div className="col-12 formGroup" style={{ marginTop: "20px" }}>
        <label style={{ color: "white" }}>Please choose your special meal preference:</label>
        <div onChange={onChangeValue} style={{ display: "inline-block" }}><span> &n</span>
          <label style={{ color: "white", marginRight: "10px" }}><input type="radio" value="Vegetarian" name="specialFood" style={{ margin: "10px 0" }} />Vegetarian</label>
          <label style={{ color: "white", marginRight: "10px" }}><input type="radio" value="Vegan" name="specialFood" style={{ margin: "10px 0" }} /> Vegan</label>
          <label style={{ color: "white" }}><input type="radio" value="None" name="specialFood" style={{ margin: "10px 0" }} defaultChecked/> None</label>
        </div>
      </div>
      <div className="col-12 formGroup">
        <label style={{ color: "white" }}>Please let us know of any food allergies:</label>
        <textarea
          className="formControl"
          onChange={onChangeValue}
          value={guestFoodAllergy}
          name="foodAllergy"
          id="allergy"
          rows="5"
          placeholder="None"
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
      </div>
    </motion.form>
  );
};

export default RsvpForm;
