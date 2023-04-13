// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const ProductCreate = async (req, res) => {
  try {
    const { body: { originId, companyId, price, ...body } } = req
    const newProduct = await prisma.product.create({
      data: {
        originId: Number(originId),
        companyId: Number(companyId),
        price: parseFloat(price),
        ...body
      }
    })
    return res.status(201).json(newProduct)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(ProductCreate)

export default ProductCreate
