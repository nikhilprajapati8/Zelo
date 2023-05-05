import "./cta.css"
import { motion } from "framer-motion"

const Cta = () => {
  return (
    <motion.section

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}

      className="cta">
      <div className="cta-content">
        <p>Request early access to get started</p>
        <h3>Begin your journey towards a memorable vacation</h3>
      </div>
      <div className="cta-button">
        <button className="cta-footer_button ">Get started</button>

      </div>

    </motion.section>
  )
}

export default Cta