import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Footer() {
return (
<footer className="footer ">
<div className="container">
<div className="row d-flex align-items-center justify-content-center">
<div className="col-md-4">
<div className="footer-section">
<h4>Contact Us</h4>
<div className="social-icons">
<a href="#">
<FontAwesomeIcon icon={faFacebook} />
</a>
<a href="#">
<FontAwesomeIcon icon={faTwitter} />
</a>
<a href="#">
<FontAwesomeIcon icon={faInstagram} />
</a>
</div>
</div>
</div>
<div className="col-md-4">
<div className="footer-section">
<h4>Opening Times</h4>
<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
<p>Saturday: 10:00 AM - 4:00 PM</p>
</div>
</div>
<div className="col-md-4">
<div className="footer-section">
<h4>Stay Informed</h4>
<div className="input-group mb-3">
<input
type="email"
className="form-control"
placeholder="Your Email"
aria-label="Your Email"
aria-describedby="newsletter-button"
/>
<div className="input-group-append">
<button
className="btn btn-outline-light"
type="button"
id="newsletter-button"
>
Sign Up
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
);
}
export default Footer;


