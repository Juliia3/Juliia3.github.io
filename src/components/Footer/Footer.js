import "./footer.scss";
import inst from "../../assets/images/inst.svg";
import instMob from "../../assets/images/instagram-mob.svg";
import facebook from "../../assets/images/facebook.svg";
import facebookMob from "../../assets/images/facebook-mob.svg";
import youtube from "../../assets/images/youtube.svg";
import youtubeMob from "../../assets/images/youtube-mob.svg";
import linkedin from "../../assets/images/linkedin.svg";
import linkedinMob from "../../assets/images/linkedin-mob.svg";
import email from "../../assets/images/email.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__mobile">
          <img src={instMob} />
          <img src={facebookMob} />
          <img src={youtubeMob} />
          <img src={linkedinMob} />
        </div>
        <div className="footer__title">
          <h3 className="footer-title">©2024 PirateBlood Studios </h3>
        </div>

        <div className="footer__text-block">
          <div>
            <h3 className="footer-title">Socials</h3>
            <div className="footer__list">
              <p className="footer__media">
                <img className="footer__icon" src={inst} />
                Instagram
              </p>
              <p className="footer__media">
                <img className="footer__icon" src={facebook} />
                Facebook
              </p>
              <p className="footer__media">
                <img className="footer__icon" src={youtube} />
                YouTube
              </p>
              <p className="footer__media">
                <img className="footer__icon" src={linkedin} />
                LinkedIn
              </p>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Get in touch</h3>
            <p className="footer__media">
              <img className="footer__icon" src={email} />
              jaime@pirateblood.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
