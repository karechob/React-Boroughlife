import Carousel from "react-bootstrap/Carousel";

function Carrousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ objectFit: "contain" }}
            src="src\assets\8cf2de649147e8f3f705d07d0e2c2e62.png"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "contain" }}
            src="src\assets\manhattan-usa-us-united.jpg"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "contain" }}
            src="src\assets\wallpapersden.com_sunrise-over-lower-manhattan_1920x1080.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
