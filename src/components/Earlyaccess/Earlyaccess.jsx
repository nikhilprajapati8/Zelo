import "./earlyaccess.css"
import EarlyaccessImg from "../../assets/undraw_searching_re_3ra9 1.png"
import { motion } from "framer-motion"

const Earlyaccess = () => {
  return (
    <motion.section
      initial={{ position: "relative", opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="earlyAccess" >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}


        className="earlyaccess-Img">
        <img src={EarlyaccessImg} alt="Early-access-img" />
      </motion.div>
      <motion.div

        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}

        className="earlyacess-Content">


        <p>Request early access to get started</p>
        <h3>&quot;Escape. Explore. Experience. <br /> Book your adventure today.&quot;</h3>
        <p>Begin your adventure. Book now and create memories that will last a lifetime. Let&lsquo;s start planning your dream vacation</p>
      </motion.div>
    </motion.section>
  )
}

export default Earlyaccess