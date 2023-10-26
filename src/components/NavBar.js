import ilab from "../assets/logo-ilab.png";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top p-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={ilab} height="50px" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <a class="nav-link active" aria-current="page" href="#">
              HOME
            </a>
            <a class="nav-link" href="#">
              ABOUT US
            </a>
            <a class="nav-link" href="#">
              CONTACT
            </a>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn custom-btn-login" type="button">
              SIGN UP
            </button>
            <button class="btn custom-btn-signup" type="button">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
