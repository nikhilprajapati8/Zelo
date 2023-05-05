import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-sections">
        <div className="footer-logo">
          <div className="zelo-logo">Zelo</div>
          <h3>Experience the <br /> Extraordinary with Zelo</h3>
        </div>

        <div className="footer-section-content">
          <div className="footer-links">

            <h4>Links</h4>
            <a href="#">Overons</a>
            <a href="https://twitter.com/082004Nikhil" target="_blank" rel="noreferrer">Social Media</a>
            <a href="#">Counters</a>
            <a href="tel:+918449551864">Contact</a>
          </div>
          <div className="footer-company">

            <h4>Company</h4>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="tel:+918449551864">Contact</a>
          </div>
          <div className="footer-socials">

            <h4>Get in touch</h4>
            <a href="https://twitter.com/082004Nikhil" target="_blank" rel="noreferrer">https://twitter.com/082004Nikhil</a>
            <a href="tel:+918449551864">+918449551864</a>
            <a href="mailto:nikhilprajapati1080@gmail.com">nikhilprajapati1080@gmail.com</a>
          </div>

        </div>
      </div>
      <div className="footer-rights">

        <p>©️ 2023 Zelo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer