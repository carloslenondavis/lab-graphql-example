import {
    GraphQLNonNull
  } from 'graphql';
import models from './../../../db/models';
import stateTp from './../../types/stateTp';
import statesInp from './../../inputs/statesInp';

export default {
    type: stateTp,
    args: {
        state: {
            type: new GraphQLNonNull(statesInp)
        }
    },
    resolve(root, args) {
        return models.States.build({
            uuid: args.state.uuid,
            name: args.state.name
        }).save().then(function(newState){
            return models.States.findById(newState.uuid);
        })
    }
};