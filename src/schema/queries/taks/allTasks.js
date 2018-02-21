import {
    GraphQLList
  } from 'graphql';
import models from './../../../db/models'
import taskTp from './../../types/taskTp';

export default {
    //TODO: Investigate how to implement sequelize model include with graphql-sequelize resolver    
    type: new GraphQLList(taskTp),    
    resolve(root, args) {
        return models.Tasks.findAll({
            include: [{
                model: models.States
            }]
        });
    }
};