import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
  } from 'graphql';
import models from './../../../db/models';
import taskTp from './../../types/taskTp';
import taskInp from './../../inputs/taskInp';

export default {
    type: taskTp,
    args: {
        task: {
            type: new GraphQLNonNull(taskInp)
        }
    },
    resolve(root, args) {
        return models.Tasks.build({
            uuid: args.task.uuid,
            title: args.task.title,
            description: args.task.description,
            stateId: args.task.stateId
        }).save().then(function(newTask){
            return models.Tasks.findById(newTask.uuid);
        })
    }
}