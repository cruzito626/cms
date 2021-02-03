import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import { POSTGRES } from '../config'

const basename = path.basename(__filename)

const db = {}
const sequelize = new Sequelize(POSTGRES)

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default
    model.initialize(sequelize, Sequelize)
    db[model.name] = model
  })

Object.values(db)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(db))

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
