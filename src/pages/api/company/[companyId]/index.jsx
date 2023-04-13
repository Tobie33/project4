import nc from '@/controllers/_helpers/nc'
import CompanyUpdate from '@/controllers/company/Update'
import CompanyDelete from '@/controllers/company/Delete'
import CompanyShow from '@/controllers/company/Show'

export default nc()
  .put(CompanyUpdate)
  .delete(CompanyDelete)
  .get(CompanyShow)
