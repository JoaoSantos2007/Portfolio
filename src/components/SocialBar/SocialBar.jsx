import "./SocialBar.css"
import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin.svg";

const SocialBar = () => {
  return (
    <div orientation="left" className="side__StyledSideElement-sc-1duznzb-0 hOvuuP">
      <ul className="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
        <li>
          <a href="https://github.com/JoaoSantos2007" aria-label="GitHub" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/joaos.santos7" aria-label="Instagram" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bchiang7" aria-label="Twitter" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bchiang7" aria-label="Linkedin" target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialBar