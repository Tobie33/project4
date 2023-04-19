// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const ProductIndex = async (req, res) => {
  try {
    const foundProducts = await prisma.product.findMany({})
    return res.status(200).json(foundProducts)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default ProductIndex
