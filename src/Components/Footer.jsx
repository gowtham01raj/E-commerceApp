import { FooterLogo, Logolink } from "../utils/content";




export const Footer = () => (
  <div>
    <div className="footer-logo">
      <h1>For better experience,download the Swiggy app now</h1>
      <img
        className="playstore"
        alt="playstore"
        src={FooterLogo}
      />
    </div>
    <div className="footerlogo2">
        {/* <img src={Logolink} alt="footerLogolink"/> */}
        <span>© 2025 Swiggy Limited</span>
    </div>
  </div>
);
