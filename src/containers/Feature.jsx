import "./feature.css"
import { motion } from "framer-motion";
import PropTypes from 'prop-types';




const Feature = ({description,imgUrl}) => {
  return (
    <div className="feature" >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="feature-content"  >
        <div className="feature-circle" />
        <p>{description}</p>
      </motion.div>


      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}


        className="feature-img"
      >
        <img src={imgUrl} alt="features-img" />
      </motion.div>

    </div>
  )
}


Feature.propTypes = {
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default Feature