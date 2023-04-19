// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const UserIndex = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({})
    return res.status(200).json(allUsers)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default UserIndex
