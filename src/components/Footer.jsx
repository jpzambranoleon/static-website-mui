import {
  Call,
  Facebook,
  Instagram,
  LocationOn,
  Mail,
  Twitter,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              Desinic
            </a>

            <p className="text">
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt
              sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
              felis.
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <Facebook
                    fontSize="large"
                    name="logo-facebook"
                    sx={{ display: "block", pointerEvents: "none" }}
                  />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <Instagram
                    fontSize="large"
                    name="logo-instagram"
                    sx={{ display: "block", pointerEvents: "none" }}
                  />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <Twitter
                    fontSize="large"
                    name="logo-twitter"
                    sx={{ display: "block", pointerEvents: "none" }}
                  />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our links</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Team
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our Services</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Strategy & Research
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Web Development
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Web Solution
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Digital Marketing
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                App Design
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Other links</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Support
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <Call
                  name="call"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <div>
                <a href="tel:+2484214313" className="footer-item-link">
                  +248-421-4313
                </a>
                <a href="tel:+2486871365" className="footer-item-link">
                  +248-687-1365
                </a>
              </div>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <Mail
                  name="mail"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <div>
                <a href="mailto:info@desinic.com" className="footer-item-link">
                  info@desinic.com
                </a>
                <a href="mailto:help@desinic.com" className="footer-item-link">
                  help@desinic.com
                </a>
              </div>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <LocationOn
                  name="location"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <address className="footer-item-link">
                Pontiac, Michigan, United States of America
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2022{" "}
          <a href="#" className="copyright-link">
            codewithsadee
          </a>
          . All Right Reserved
        </p>
      </div>
    </footer>
  );
}
