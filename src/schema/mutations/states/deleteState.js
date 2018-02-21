import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
  } from 'graphql';
import models from './../../../db/models';
import stateTp from './../../types/stateTp';

export default {
    type: stateTp,
    args: {
        uuid: {
            type: GraphQLID
        }
    },
    resolve(root, args){
        models.States.destroy(
            {
                where: {
                    uuid: args.uuid
                }
            }
        ).then((rowAffected) => rowAffected);
    }
}