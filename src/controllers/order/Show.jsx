// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const OrderShow = async (req, res) => {
  try {
    const { query: { orderId } } = req
    const foundOrder = await prisma.order.findUnique({
      where: { id: Number(orderId) }
    })
    return res.status(200).json(foundOrder)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default OrderShow
