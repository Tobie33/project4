const AboutPageNav = ({ children }) => (
  <>
    <div id="inside-navs">
      <ul className="p-1 text-center nav nav-fill">
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
    <div className="text-center m-4 d-flex flex-column" id="about-us">{children}</div>
  </>

)

export default AboutPageNav
