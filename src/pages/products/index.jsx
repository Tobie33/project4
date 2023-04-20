import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import useSWR from 'swr'
import ProductPageNav from '@/components/_ProductNav'
import Head from 'next/head'

export default function ProductPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: products } = useSWR('api/product', fetcher)

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div id="products" className="d-flex mx-5">
        {
      products?.map((product) => (
        <Card style={{ width: '15rem' }} className="m-4">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <ul>
              <li>
                Price: {product.price}
              </li>
              <li>
                Originated: {product.origin.name}
              </li>
              <li>
                Company: {product.company.name}
              </li>
            </ul>
            <Button variant="primary" type="submit">Add it in your cart!</Button>
          </Card.Body>
        </Card>
      )
      )
    }
      </div>
    </>
  )
}

ProductPage.Layout = ProductPageNav
