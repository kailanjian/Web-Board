import { Mongo } from 'meteor/mongo';

export const Profiles = new Mongo.Collection('profiles');

/*
profiles consists of the following structure
{
  userId: [user id],
  votes: [array of post ids user has voted on]
}
*/