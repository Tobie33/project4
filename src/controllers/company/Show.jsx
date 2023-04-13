// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const CompanyShow = async (req, res) => {
  try {
    const { query: { companyId } } = req
    const foundCompany = await prisma.company.findUnique({
      where: { id: Number(companyId) }
    })
    return res.status(200).json(foundCompany)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default CompanyShow
