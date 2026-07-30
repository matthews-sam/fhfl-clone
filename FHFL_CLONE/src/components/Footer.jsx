import './Footer.css'
import Logo_white from '../assets/images/Logo_white.png'

const Footer = () => {
    return ( 
        <section className="footer">
            <footer className="footer-contents">
                <div className="footer-row the-boxed-content-area">
                    <div className="footer-row-1">
                        <img src={Logo_white} alt="" className="footer-row-1-img"/>
                    </div>
                    <div className="footer-row-2">
                        <div className="footer-location">
                            <i className="fa fa-location-dot"></i>
                            <p>3rd Floor Sinoki House, Samuel Ademulegun Avenue, Central Business District, Abuja</p>
                        </div>
                        <div className="footer-envelope">
                            <i className="icofont-envelope"></i>
                            <p>info@fhfl.com.ng</p>
                        </div>
                        <div className="footer-phone">
                            <i className="icofont-phone"></i>
                            <p>+234 (0) 813 988 0390 and +234 (0) 906 000 8043</p>
                        </div>
                    </div>
                    <div className="footer-row-3">
                        <div className="footer-row-3-a">
                            <h4>Follow us:</h4>
                            <a href="#">
                            <i className="fa-brands fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                            <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                                <span>Facebook</span>
                            </a>
                        </div>
                        <div className="footer-row-3-b">
                            <h4>Quick Links:</h4>
                            <a href="#">
                                Scam Alert
                            </a>
                            <a href="#">
                                Tender
                            </a>
                            <a href="#">
                                FAQs
                            </a>
                            <a href="#">
                                Careers
                            </a>    
                            <a href="#">
                                Contact    
                            </a>                        
                        </div>
                    </div>
                </div>
            </footer>
        </section>
     );
}
 
export default Footer;