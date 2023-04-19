const AboutPageNav = ({ children }) => (
  <div>
    <ul className="mt-5 nav nav-fill">
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
    <div className="text-center">{children}</div>
  </div>
)

export default AboutPageNav
