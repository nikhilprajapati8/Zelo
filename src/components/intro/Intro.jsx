import "./intro.css"
import { motion } from "framer-motion";

const Intro = () => {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="Intro">
      <div className="what-is-zelo">
        <h2>What is Zelo?</h2>
      </div>
      <p>
        Welcome to <span className="zelo">Zelo</span>, the ultimate destination for those seeking to find the best vacation locations around the world. We understand that planning a vacation can be a daunting task, but we are here to make it easy for you. Our mission is to provide you with the most comprehensive and up-to-date information on top vacation destinations, so you can make an informed decision about where to go.
      </p>

    </motion.section>
  )
}

export default Intro