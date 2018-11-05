import { QueryResolvers } from '../generated/graphqlgen'

export const Query: QueryResolvers.Type = {
  feed: (parent, args, ctx) => {
    return ctx.data.posts.filter(post => post.published)
  },

  drafts: (parent, args, ctx) => {
    return ctx.data.posts.filter(post => !post.published)
  },

  post: (parent, {id}, ctx) => {
    return ctx.data.posts.find(post => post.id === id)!
  },
}
