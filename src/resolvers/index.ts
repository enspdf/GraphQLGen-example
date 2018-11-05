import { Resolvers } from '../generated/graphqlgen'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { Post } from './Post'
import { User } from './User'
import { Pet } from './Pet'

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Post,
  User,
  Pet
}
