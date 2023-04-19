// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const UserShow = async (req, res) => {
  try {
    const { query: { userId } } = req
    const foundUser = await prisma.user.findUnique({
      where: { id: Number(userId) }
    })
    return res.status(200).json(foundUser)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default UserShow
