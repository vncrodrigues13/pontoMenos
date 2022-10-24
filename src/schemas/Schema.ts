import User from '../entity/User'

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
} = require('graphql')

// Project Type

// const UserType = new GraphQLObjectType({
//   name: 'UserType',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     cpf: { type: GraphQLString },
//     client: {
//       type: User,
//       resolve (parent, args) {
//         return 'Hello world'
//       }
//     }
//   })
// })

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    client: {
      type: User,
      resolve (parent, args) {
        return 'Hello world'
      }
    }
  })
})

// Client Type

// const ClientType = new GraphQLObjectType({
//   name: 'Client',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     phone: { type: GraphQLString }
//   })
// })

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    test: {
      type: GraphQLString,
      resolve () {
        return 'testando vini'
      }
    }
  }
})

// Mutations
const mutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addProject: {
//       type: UserType,
//       args: {
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         description: { type: new GraphQLNonNull(GraphQLString) },
//         status: {
//           type: new GraphQLEnumType({
//             name: 'ProjectStatus',
//             values: {
//               new: { value: 'Not Started' },
//               progress: { value: 'In Progress' },
//               completed: { value: 'Completed' }
//             }
//           }),
//           defaultValue: 'Not Started'
//         },
//         clientId: { type: new GraphQLNonNull(GraphQLID) }
//       },
//       resolve (parent, args) {
//         return 'saved project'
//       }
//     },
//     // Delete a project
//     deleteProject: {
//       type: UserType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) }
//       },
//       resolve (parent, args) {
//         return 'deleted project'
//       }
//     },
//     // Update a project
//     updateProject: {
//       type: UserType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         status: {
//           type: new GraphQLEnumType({
//             name: 'ProjectStatusUpdate',
//             values: {
//               new: { value: 'Not Started' },
//               progress: { value: 'In Progress' },
//               completed: { value: 'Completed' }
//             }
//           })
//         }
//       },
//       resolve (parent, args) {
//         return 'updated project'
//       }
//     }
//   }
})

export default new GraphQLSchema({
  query: RootQuery,
  mutation: mutationType
})
