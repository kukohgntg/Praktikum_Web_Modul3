import { Carousel, Image } from "react-bootstrap";
import hero from "../assets/hero.jpg";

const Contain_Contact = () => {
  return (
    <Carousel id="carouselExampleCaptions">
      <Carousel.Item>
        <Image src={hero} className="d-block w-100" alt="..." />
        <Carousel.Caption className="carousel-caption d-none d-md-block top-50 text-start">
          <h1>Contact Us</h1>
          <p>
            <strong>Address :</strong> Jl. Raya Tlogomas No.246, Jawa Timur
            65144, Indonesia
          </p>
          <p>
            <strong>Phone :</strong> (0341) 464318, ext 252 - SMS/WA/Telegram
            (Quick Response) +62 896-896-01317
          </p>
          <p>
            <strong>Email 1 :</strong> lab.informatika@umm.ac.id
          </p>
          <p>
            <strong>Email 2 :</strong> lab.informatika.umm@gmail.com
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Contain_Contact;
