import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'

import blackie from 'public/images/blackie.jpg'
import green from 'public/images/green.jpg'
import whitey from 'public/images/whitey.jpg'

function UncontrolledExample() {
  return (
    <Carousel id="image-displays">
      <Carousel.Item>
        <Image src={whitey} alt="First slide" className="display-pics w-100 d-block" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={blackie} alt="Second slide" className="display-pics w-100 d-block" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={green} alt="Third slide" className="display-pics w-100 d-block" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample
