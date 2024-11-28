import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer__StyledCredit-sc-4jwnt4-2 fLSMpu">
        <a href="https://github.com/bchiang7/v4" rel="noopener noreferrer" target="_blank">
          <div>Designed by Brittany Chiang &amp; Built by João Santos</div>
          <div class="github-stats">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><title>Star</title><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>7,606</span>
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><title>Git Fork</title><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
              <span>3,789</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer