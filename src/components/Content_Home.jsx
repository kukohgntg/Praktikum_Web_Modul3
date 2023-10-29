import { Carousel, Image } from "react-bootstrap";
import hero from "../assets/hero.jpg";

const Content_Home = () => {
  return (
    <Carousel id="carouselExampleCaptions">
      <Carousel.Item>
        <Image src={hero} className="d-block w-100" alt="..." />
        <Carousel.Caption className="carousel-caption d-none d-md-block top-50 text-start">
          <h5 className="fs-1">Selamat Datang</h5>
          <p className="fs-2">di website praktikum pemrograman website</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Content_Home;

// <div id="carouselExampleCaptions" class="carousel slide">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={hero} class="d-block w-100" alt="..." />
//       <div class="carousel-caption d-none d-md-block top-50 text-start">
//         <h5 class="fs-1">Selamat Datang</h5>
//         <p class="fs-2">di website praktikum pemrograman website</p>
//       </div>
//     </div>
//   </div>
// </div>
