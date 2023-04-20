import ProductPageNav from '@/components/_ProductNav'
import Head from 'next/head'

export default function OrderPage() {
  return (
    <>
      <Head>
        <title>Order</title>
      </Head>
      <div>
        <h1 className="text-center mt-3">You have nothing in the cart!</h1>
      </div>
    </>
  )
}

OrderPage.Layout = ProductPageNav
