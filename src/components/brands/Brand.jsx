import "./brand.css"
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"
import atlassian from "../../assets/atlassian.png"
import { motion } from "framer-motion";


const Brand = () => {



  return (
    <section className="brands" id="brand">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="brand-names">

        <div>
          <img src={google} alt="google" />
        </div>
        <div>

          <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={atlassian} alt="atlassian" />
        </div>
        <div>

          <img src={dropbox} alt="dropbox" />
        </div>
        <div>

          <img src={shopify} alt="shopify" />
        </div>

      </motion.div>
    </section>
  )
}

export default Brand