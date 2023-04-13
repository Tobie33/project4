// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const CompanyDelete = async (req, res) => {
  try {
    const { query: { companyId } } = req
    const deletedCompany = await prisma.company.delete({
      where: { id: Number(companyId) }
    })
    return res.status(200).json(deletedCompany)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyCreate)

export default CompanyDelete
