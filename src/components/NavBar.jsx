import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import ilab from "../assets/logo-ilab.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="/About">
          <Image src={ilab} height="40px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav variant="underline" defaultActiveKey="">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/About">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
          <Button className="custom-btnlogin" href="#">
            Login
          </Button>
          <Button className="custom-btnsignup" href="#">
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;

//     <Nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top p-0">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="#">
//           <img src={ilab} height="50px" alt="logo" />
//         </a>
//         <Button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </Button>
//         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div class="navbar-nav mx-auto">
//             <a class="nav-link active" aria-current="page" href="#">
//               HOME
//             </a>
//             <a class="nav-link" href="#">
//               ABOUT US
//             </a>
//             <a class="nav-link" href="#">
//               CONTACT
//             </a>
//           </div>
//           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
//             <Button class="btn custom-btn-login" type="button">
//               SIGN UP
//             </Button>
//             <Button class="btn custom-btn-signup" type="button">
//               LOGIN
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Nav>
