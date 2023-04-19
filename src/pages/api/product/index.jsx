import nc from '@/controllers/_helpers/nc'
import ProductCreate from '@/controllers/products/Create'
import ProductIndex from '@/controllers/products/Index'

export default nc()
  .post(ProductCreate)
  .get(ProductIndex)
