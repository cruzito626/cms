import models from './models'
import server from './server'

import {
  PORT
} from './config'

models.sequelize.sync({ alter: true, force: false }).then(() => {
  server.listen(PORT).then(({ url }) => console.log(`Running on ${url}`))
})
