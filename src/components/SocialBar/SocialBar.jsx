import "./SocialBar.css";
import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as AluraIcon } from "../../assets/images/alura.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin.svg";

const SocialBar = () => {
  return (
    <div orientation="left" className="socialBar">
      <ul className="socialBar__list">
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://github.com/JoaoSantos2007"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="socialBar__svg" />
          </a>
        </li>
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://www.instagram.com/joaos.santos7"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="socialBar__svg" />
          </a>
        </li>
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://cursos.alura.com.br/user/joaosantos2007"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <AluraIcon className="socialBar__svg" />
          </a>
        </li>
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://www.linkedin.com/in/joaosantos2007/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className="socialBar__svg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
