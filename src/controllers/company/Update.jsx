// import nc from '@/controllers/_helpers/nc'
import handleErrors from '@/controllers/_helpers/handleErrors'
import prisma from '@/controllers/_helpers/prisma'

const CompanyUpdate = async (req, res) => {
  try {
    const { query: { companyId }, body: data } = req
    const updatedCompany = await prisma.company.update({
      where: {
        id: Number(companyId) },
      data
    })
    return res.status(200).json(updatedCompany)
  } catch (err) {
    return handleErrors(res, err)
  }
}

// export default nc()
//   .use(CompanyUpdate)

export default CompanyUpdate
