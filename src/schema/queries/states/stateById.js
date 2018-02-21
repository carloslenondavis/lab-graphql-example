import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
import models from './../../../db/models'
import stateTp from './../../types/stateTp';

export default {
    type: stateTp,
    args: {
        uuid: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.States.findById(args.uuid);
    }
};