const ProductPageNav = ({ children }) => (
  <>
    <div id="inside-navs">
      <ul className="p-1 nav nav-fill">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/products">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/order">Order</a>
        </li>
      </ul>
    </div>
    {children}
  </>

)

export default ProductPageNav
