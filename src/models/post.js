import { Model } from 'sequelize'

export default class Post extends Model {
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
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        slug: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        readingTime: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '3 min'
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        language: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'es'
        },
        image: {
          type: DataTypes.STRING
        },
        published: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
      },
      {
        sequelize,
        paranoid: true,
        tableName: 'posts'
      }
    )
  }

  static associate (models) {
    this.hasMany(models.Tag, {
      sourceKey: 'id',
      foreignKey: 'postId',
      as: 'tags'
    })
  }
}
