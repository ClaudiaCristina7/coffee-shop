import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__texture" aria-hidden="true" />
      <div className="footer__inner">
        <h2 className="footer__logo">Cafeteria</h2>

        <div className="footer__columns">
          <div className="footer__column">
            <a href="#about">About us</a>
            <a href="#reviews">Reviews</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="footer__column">
            <a href="#customer-care">Customer care</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className="footer__column">
            <span className="footer__heading">Get In Touch</span>
            <a href="mailto:Cafeteria@gmail.com">Cafeteria@gmail.com</a>
            <a href="tel:+916574267">+916574267</a>
          </div>
        </div>

        <p className="footer__copy">© {new Date().getFullYear()} Cafeteria. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
