import { socials, links } from "../constants/footerData";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4>My Other Projects</h4>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <div>
          {" "}
          <p>©{new Date().getFullYear()} WidgetHub. All Rights Reserved.</p>
        </div>
        <div className="Socials">
          {socials.map((social) => (
            <a key={social.id} href={social.url} target="_blank">
              <social.Logo />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
