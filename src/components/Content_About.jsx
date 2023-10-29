import { Carousel, Image } from "react-bootstrap";
import hero from "../assets/hero.jpg";

const Contain_About = () => {
  return (
    <Carousel id="carouselExampleCaptions">
      <Carousel.Item>
        <Image src={hero} className="d-block w-100" alt="..." />
        <Carousel.Caption className="carousel-caption d-none d-md-block top-50 text-start">
          <h1>About Us</h1>
          <p>
            Lab Informatika di Universitas Malang (UMM) merupakan pusat inovasi
            dan penelitian di bidang teknologi informasi. Kami bertujuan untuk
            menyediakan fasilitas terbaik bagi mahasiswa, dosen, dan peneliti
            untuk mengembangkan pengetahuan dalam berbagai bidang informatika.
          </p>
          <p>
            Dengan fasilitas modern dan tim ahli yang berpengalaman, kami
            mendorong kolaborasi, pembelajaran, dan penelitian dalam topik-topik
            seperti kecerdasan buatan, pemrosesan data, jaringan komputer, dan
            pengembangan perangkat lunak.
          </p>
          <p>
            Visi kami adalah menjadi pusat unggulan dalam pengembangan teknologi
            informasi yang berkelanjutan dan berdampak luas bagi masyarakat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Contain_About;
