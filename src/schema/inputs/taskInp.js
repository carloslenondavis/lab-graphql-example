import { 
    GraphQLInputObjectType,    
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'TaskInput',
    description: 'the task input',
    fields: () => ({
        uuid: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'task uuid'
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'task title'
        },        
        description: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'task description'
        },
        stateId: {
            type: new GraphQLNonNull(GraphQLID),
            description: "task state"
        }      
    })
});
