import nc from '@/controllers/_helpers/nc'
import UserIndex from '@/controllers/user/Index'
import UserShow from '@/controllers/user/Show'

export default nc()
  .get(UserIndex)
  .get(UserShow)
