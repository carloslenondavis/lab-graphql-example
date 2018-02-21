import {
    GraphQLNonNull
  } from 'graphql';
import models from './../../../db/models';
import stateTp from './../../types/stateTp';
import statesInp from './../../inputs/statesInp';

export default {
    type: stateTp,
    args: {        
        states: {
            type: new GraphQLNonNull(statesInp)
        }
    },
    resolve(root, args) {
        return models.States.update(
            args.states,
            {
                where: {
                    uuid: args.states.uuid
                },
                returning: true
            }
        ).then((result) => {
            var modelUpdated = result[1][0].dataValues;           
            return models.States.findById(modelUpdated.uuid)
        });
    }
};