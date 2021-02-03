import User from '../../../models/user'

export default (_, { user }) => {
  return User.create(user)
}
