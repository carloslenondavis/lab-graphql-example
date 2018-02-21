import { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString    
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import stateTp from './stateTp';
import models from './../../db/models';

export default new GraphQLObjectType({
    name: 'TaskTp',
    description: 'Each user task',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: 'task autonumeric id'
        },
        uuid: {
            type: GraphQLID,
            description: 'task uuid'
        },
        title: {
            type: GraphQLString,
            description: 'task title'
        },
        description: {
            type: GraphQLString,
            description: 'task description'
        },
        stateId: {
            type: GraphQLID,
            description: 'task state'
        },
        states: {
            type: stateTp,
            resolve: resolver(models.States)
        }
    })
});