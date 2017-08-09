import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

/*
posts consists of the following structure
{
  poster: [id of poster]
  posterName: [name of poster]
  link: [link to site]
  image: [preview image]
  description: [short descriptiondd]
  votes: [num votes]
}
*/