// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const OrderUpdate = async (req, res) => {
  try {
    const { query: { orderId }, body: data } = req
    const updatedOrder = await prisma.order.update({
      where: {
        id: Number(orderId) },
      data
    })
    return res.status(200).json(updatedOrder)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(OrderUpdate)

export default OrderUpdate
