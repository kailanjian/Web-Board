import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts.js';

Meteor.publish('posts.all', function () {
  return Posts.find();
});

Meteor.publish('posts.user', function() {
  return Posts.find({poster: Meteor.userId()});
});