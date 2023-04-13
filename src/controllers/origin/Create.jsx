// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const OriginCreate = async (req, res) => {
  try {
    const { body: data } = req
    const newOrigin = await prisma.origin.create({ data })
    return res.status(201).json(newOrigin)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(OriginCreate)

export default OriginCreate
