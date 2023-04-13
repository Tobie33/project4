import nc from '@/controllers/_helpers/nc'

import OrderCreate from '@/controllers/order/Create'
import OrderDelete from '@/controllers/order/Delete'
import OrderShow from '@/controllers/order/Show'
import OrderUpdate from '@/controllers/order/Update'

export default nc()
  .post(OrderCreate)
  .put(OrderUpdate)
  .get(OrderShow)
  .delete(OrderDelete)
