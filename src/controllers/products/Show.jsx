// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const ProductShow = async (req, res) => {
  try {
    const { query: { productId } } = req
    const foundProduct = await prisma.product.findUnique({
      where: { id: Number(productId) }
    })
    return res.status(200).json(foundProduct)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default ProductShow
