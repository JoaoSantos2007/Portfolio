import "./SocialBar.css"
import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin.svg";

const SocialBar = () => {
  return (
    <div orientation="left" class="side__StyledSideElement-sc-1duznzb-0 hOvuuP">
    <ul class="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
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
      <li>
        <a href="https://codepen.io/bchiang7" aria-label="Codepen" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><title>CodePen</title><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
        </a>
        </li>
        </ul>
        </div>
  )
}

export default SocialBar