import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='container' src='src\assets\8cf2de649147e8f3f705d07d0e2c2e62.png'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='container' src='src\assets\photo-1485871981521-5b1fd3805eee.png'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='container' src='src\assets\photo-1496442226666-8d4d0e62e6e9.png'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;