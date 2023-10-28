import ilab from "../assets/logo-ilab.png";
import facebook from "../assets/logo-facebook.png";
import twitter from "../assets/logo-twitter.png";
import instagram from "../assets/logo-instagram.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <div className="m-5">
      <Container className="text-start">
        <Row className="align-baseline">
          <Col className="align-self-center">
            <Container className="text-center">
              <p>
                <Image src={ilab} />
              </p>
              <p className="text-muted">
                Copyright &copy; 2022 Infinite Learning
              </p>
            </Container>
          </Col>
          <Col className="align-self-center">
            <p className="text-muted">Services</p>
            <p>Email Marketing</p>
            <p>Campaigns</p>
            <p>Branding</p>
            <p>Offline</p>
          </Col>
          <Col className="align-self-center">
            <p className="text-muted">About</p>
            <p>Our Story</p>
            <p>Benefits</p>
            <p>Team</p>
            <p>Carres</p>
          </Col>
          <Col className="align-self-auto">
            <p className="text-muted">Follow Us</p>
            <p>
              <Image src={facebook} className="m-3" height="20px" alt="" />
              Facebook
            </p>
            <p>
              <Image src={twitter} className="m-2" height="20px" alt="" />
              Twitter
            </p>
            <p>
              <Image src={instagram} className="m-2" height="20px" alt="" />
              Instagram
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;

//     <div class="m-5">
//       <div class="container text-start">
//         <div class="row align-baseline">
//           <div class="col align-self-center">
//             <div class="container text-center">
//               <p>
//                 <img src={ilab} alt="" />
//               </p>
//               <p class="text-muted">Copyright &copy; 2022 Infinite Learning</p>
//             </div>
//           </div>
//           <div class="col align-self-center">
//             <p class="text-muted">Services</p>
//             <p>Email Marketing</p>
//             <p>Campaigns</p>
//             <p>Branding</p>
//             <p>Offline</p>
//           </div>
//           <div class="col align-self-center">
//             <p class="text-muted">About</p>
//             <p>Our Story</p>
//             <p>Benefits</p>
//             <p>Team</p>
//             <p>Carres</p>
//           </div>
//           <div class="col align-self-auto">
//             <p class="text-muted">Follow Us</p>
//             <p>
//               <img src={facebook} class="m-3" height="20px" alt="" />
//               Facebook
//             </p>
//             <p>
//               <img src={twitter} class="m-2" height="20px" alt="" />
//               Twitter
//             </p>
//             <p>
//               <img src={instagram} class="m-2" height="20px" alt="" />
//               Instagram
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
