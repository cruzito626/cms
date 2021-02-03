import { Model } from 'sequelize'

export default class Tag extends Model {
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
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        paranoid: true,
        tableName: 'tags'
      }
    )
  }
}
