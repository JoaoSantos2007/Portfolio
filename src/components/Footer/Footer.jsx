import "./Footer.css"
import { ReactComponent as FavoriteIcon } from "../../assets/images/favorite.svg"
import { ReactComponent as BranchIcon } from "../../assets/images/branch.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__link" href="https://github.com/JoaoSantos2007/Portfolio" rel="noopener noreferrer" target="_blank">
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
  )
}

export default Footer