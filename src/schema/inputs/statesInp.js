import { 
    GraphQLInputObjectType,    
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'StateInput',
    description: 'the state for each task',
    fields: () => ({
        uuid: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'states uuid'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'states name'
        }        
    })
});
