import ilab from "../assets/logo-ilab.png";
import facebook from "../assets/logo-facebook.png";
import twitter from "../assets/logo-twitter.png";
import instagram from "../assets/logo-instagram.png";

const Footer = () => {
  return (
    <div class="m-5">
      <div class="container text-start">
        <div class="row align-baseline">
          <div class="col align-self-center">
            <div class="container text-center">
              <p>
                <img src={ilab} alt="" />
              </p>
              <p class="text-muted">Copyright &copy; 2022 Infinite Learning</p>
            </div>
          </div>
          <div class="col align-self-center">
            <p class="text-muted">Services</p>
            <p>Email Marketing</p>
            <p>Campaigns</p>
            <p>Branding</p>
            <p>Offline</p>
          </div>
          <div class="col align-self-center">
            <p class="text-muted">About</p>
            <p>Our Story</p>
            <p>Benefits</p>
            <p>Team</p>
            <p>Carres</p>
          </div>
          <div class="col align-self-auto">
            <p class="text-muted">Follow Us</p>
            <p>
              <img src={facebook} class="m-3" height="20px" alt="" />
              Facebook
            </p>
            <p>
              <img src={twitter} class="m-2" height="20px" alt="" />
              Twitter
            </p>
            <p>
              <img src={instagram} class="m-2" height="20px" alt="" />
              Instagram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
