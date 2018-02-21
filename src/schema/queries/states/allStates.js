import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
  } from 'graphql';
import models from './../../../db/models'
import stateTp from './../../types/stateTp';

export default {
    type: new GraphQLList(stateTp),    
    resolve(root, args) {
        return models.States.findAll();
    }
};