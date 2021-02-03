import { Model } from 'sequelize'

import { encrypt } from '../utils/security'
console.log()
export default class User extends Model {
  static initialize (
    sequelize,
    DataTypes
  ) {
    super.init(
      {
        id: {
          primaryKey: true,
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4()
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isAlphanumeric: {
              args: true,
              msg: 'The user just accepts alphanumeric characters'
            },
            len: {
              args: [4, 20],
              msg: 'The username must be from 4 to 20 characters'
            }
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              args: true,
              msg: 'Invalid email'
            }
          }
        },
        privilege: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'user'
        },
        active: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      },
      {
        hooks: {
          beforeCreate: (user) => {
            user.password = encrypt(user.password)
          }
        },
        sequelize,
        paranoid: true,
        tableName: 'users'
      }
    )
  }

  static associate (models) {
    this.hasMany(models.Post, {
      as: 'posts',
      sourceKey: 'id',
      foreignKey: 'userId'
    })
  }
}
