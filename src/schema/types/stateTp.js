import { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'StateTp',
    description: 'the states for each task',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: 'states autonumeric id'
        },
        uuid: {
            type: GraphQLID,
            description: 'states uuid'
        },
        name: {
            type: GraphQLString,
            description: 'states name'
        }
    })
});