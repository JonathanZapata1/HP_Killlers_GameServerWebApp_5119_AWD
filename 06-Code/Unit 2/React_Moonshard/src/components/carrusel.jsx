import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/components/carrousel.css';
import '../assets/css/components/main.css';

import img1 from '../assets/img/slide1.jpg'
import img2 from '../assets/img/slide2.jpg'
import img3 from '../assets/img/slide3.jpg'

const Carru = () => (
    <div className="position-carrousel grid-item item1">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={img2}
          alt="Second slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
  export default Carru
