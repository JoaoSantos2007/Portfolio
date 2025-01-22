import "./Footer.css";
import { ReactComponent as FavoriteIcon } from "../../assets/images/favorite.svg";
import { ReactComponent as BranchIcon } from "../../assets/images/branch.svg";
import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as AluraIcon } from "../../assets/images/alura.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <ul className="footer__social-list">
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://github.com/JoaoSantos2007"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="footer__social-svg" />
            </a>
          </li>
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://www.instagram.com/joaos.santos7"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="footer__social-svg" />
            </a>
          </li>
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://cursos.alura.com.br/user/joaosantos2007"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <AluraIcon className="footer__social-svg" />
            </a>
          </li>
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/joaosantos2007/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="footer__social-svg" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__inner">
        <a
          className="footer__link"
          href="https://github.com/JoaoSantos2007/Portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Developed by João Pedro Tomaz dos Santos</div>
          <div className="footer__stats">
            <span>
              <FavoriteIcon />
              <span>0</span>
            </span>
            <span>
              <BranchIcon />
              <span>0</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
