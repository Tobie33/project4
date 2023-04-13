// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const CompanyCreate = async (req, res) => {
  try {
    const { body: data } = req
    const newCompany = await prisma.company.create({ data })
    return res.status(201).json(newCompany)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default CompanyCreate
