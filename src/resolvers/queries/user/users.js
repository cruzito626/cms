import Post from '../../../models/post'
import Tag from '../../../models/tag'
import User from '../../../models/user'

export default (_, args) => {
  return User.findAll({
    include: [{
      model: Post,
      as: 'posts',
      include: [{
        model: Tag,
        as: 'tags'
      }]
    }]
  })
}
