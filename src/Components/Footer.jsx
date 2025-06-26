import { FooterLogo, Logolink } from "../utils/content";




export const Footer = () => (
  <div>
    <div className="footer-logo flex flex-wrap">
      <h1>For better experience,download the Swiggy app now</h1>
      <img
        className="playstore"
        alt="playstore"
        src={FooterLogo}
      />
    </div>
    <div className="footerlogo2 w-[200px]">
        {/* <img src={Logolink} alt="footerLogolink"/> */}
        <span className="items-center justify-center">© 2025 Swiggy Limited</span>
    </div>
  </div>
);
