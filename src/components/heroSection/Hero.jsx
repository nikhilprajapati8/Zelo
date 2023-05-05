import "./hero.css"
import { motion } from 'framer-motion';
import tripImg from "../../assets/trip.png"

const Hero = () => {

  return (
    <section className="Hero">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring", stiffness: 130 }}
        className="hero-content">

        <h2 className="hero-head">Can&apos;t decide a <br /> place for <span className="hero-vacation">vacation?</span> </h2>
        <h1 className="hero-main_zelo">Try Zelo</h1>
        <h4 className="hero-main_content">Zelo helps you find best <br /> location for your  trip <br /> in no time </h4>
        <button className="hero-footer_button ">Book <span className="book-trip">a trip</span></button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring", stiffness: 130 }}
        className="trip-svg">

        <img src={tripImg} alt="trip" />
      </motion.div>
    </section>
  )
}

export default Hero