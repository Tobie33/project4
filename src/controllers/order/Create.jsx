// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const OrderCreate = async (req, res) => {
  try {
    const { body: { userId } } = req
    const newOrder = await prisma.order.create({
      data: {
        userId: Number(userId)
      }
    })
    return res.status(201).json(newOrder)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(OrderCreate)

export default OrderCreate
