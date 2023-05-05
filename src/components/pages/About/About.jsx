import "./about.css"
import { motion } from "framer-motion"

const About = () => {
      return (
            <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring", stiffness: 130 }}
                  viewport={{ once: true }}

                  className="about">
                  <p>

                        Welcome to Zelo, a vibrant and dynamic frontend site created to showcase my web development skills! This site is not a real business and does not offer any services, but it includes many exciting sections that demonstrate my expertise in using cutting-edge technologies to create engaging user interfaces.
                  </p>

                  <p>

                        Explore the site to discover its many features, such as the stunning animations powered by Framer Motion, and the smooth and efficient performance made possible by Vite and React. You&lsquo;ll also find a branding section that features the logos of some well-known companies, including Google, Slack, Dropbox, Atlassian, and Shopify. These logos are used purely for illustrative purposes, to showcase Zelo&lsquo;s design capabilities and the use of their names and logos is done in a respectful and truthful manner that does not involve any misrepresentation or defamation.
                  </p>
                  <p>


                        Whether you&lsquo;re a fellow developer interested in learning more about my process, or a potential employer looking for a talented and creative web developer, I hope you&lsquo;ll find Zelo to be an exciting and inspiring showcase of my skills. Thank you for visiting, and please don&lsquo;t hesitate to get in touch if you have any questions or feedback!
                  </p>
            </motion.div>
      )
}

export default About