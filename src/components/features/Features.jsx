import "./features.css"
import Feature from '../../containers/Feature'
import featureOneImg from "../../assets/undraw_cabin_hkfr 1.png"
import featureTwoImg from "../../assets/undraw_travelers_re_y25a 1.png"
import featureThreeImg from "../../assets/undraw_beach_day_cser 1.png"
import { motion } from "framer-motion";


const Features = () => {

  return (
    <section  className="features" >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="features-heading">

        <h2>Life is an <span className="adventure-heading">adventure</span>,<br /> and we&apos;re  here to help you make the most of it. </h2>

      </motion.div>


      <Feature description="Comprehensive travel information - We offer detailed information on a wide range of vacation destinations, including popular tourist attractions, local customs, travel tips, and recommended accommodations." imgUrl={featureOneImg} />

      <Feature description="Special deals and discounts - We offer special deals and discounts on vacation packages, flights, accommodations, and activities to help users save money on their vacations." imgUrl={featureTwoImg} />


      <Feature description="Customer support - Our dedicated customer support team is available to help users with any issues they encounter while booking their vacations, or to answer any questions they may have about the website or the vacation locations." imgUrl={featureThreeImg} />


    </section>
  )
}

export default Features