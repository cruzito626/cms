import Post from '../../../models/post'
import Tag from '../../../models/tag'

export default (_, args) => {
  return Post.findAll({
    include: [{
      model: Tag,
      as: 'tags'
    }]
  })
}
