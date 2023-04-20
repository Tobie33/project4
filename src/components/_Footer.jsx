import brand from 'public/images/brand.png'
import Image from 'next/image'

const Footer = () => (
  <div id="footer" className="d-flex align-items-center justify-content-around p-5">
    <div className="">
      <h4>More About us</h4>
      <ul className="mt-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Service</a>
        </li>
      </ul>
    </div>
    <div className=""><Image src={brand} alt="First slide" /></div>
  </div>
)

export default Footer
