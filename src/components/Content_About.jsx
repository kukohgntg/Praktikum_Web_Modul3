import Image from "react-bootstrap/Image";
import hero from "../assets/hero.jpg";
import Carousel from "react-bootstrap/Carousel";

const Contain_About = () => {
  return (
    <Carousel id="carouselExampleCaptions">
      <Carousel.Item>
        <Image src={hero} className="d-block w-100" alt="..." />
        <Carousel.Caption className="carousel-caption d-none d-md-block top-50 text-start">
          <h5 className="fs-1">Ini About</h5>
          <p className="fs-2">ini rute ke aboutt ya kakkk</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Contain_About;
