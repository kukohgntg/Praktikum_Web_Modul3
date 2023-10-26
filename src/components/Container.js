import hero from "../assets/hero.jpg";
const Container = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={hero} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block top-50 text-start">
            <h5 class="fs-1">Selamat Datang</h5>
            <p class="fs-2">di website praktikum pemrograman website</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container;
