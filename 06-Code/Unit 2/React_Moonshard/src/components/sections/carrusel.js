import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/stylesComp.css'
import img1 from '../img/slide1.jpg'
import img2 from '../img/slide2.jpg'
import img3 from '../img/slide3.jpg'

const Carru = () => (
    <div>
      <div className='position'>
        <div className='container-fluid' >
          <div className="row">
            <div className="col-sm-12">
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                  />
  
                  <Carousel.Caption>
                 
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                   <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
  export default Carru
