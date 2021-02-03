import Post from '../../../models/post'
import Tag from '../../../models/tag'

export default (_, { post }) => {
  return Post.create(post, {
    include: [{
      model: Tag,
      as: 'tags'
    }]
  })
}
