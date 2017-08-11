import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './posts.js';

Meteor.methods({
  'posts.insert'(link, image, description) {
    check(link, String);
    check(image, String);
    check(description, String);

    if (Meteor.user()) {
      return Posts.insert({
        poster: Meteor.userId(),
        posterName: Meteor.user().profile.name,
        link: link,
        image: image,
        description: description,
        votes: 0,
      });
    } else {
      throw new Meteor.Error("faild to insert");
    }
  },
  'posts.remove'(postId) {
    check(postId, String);
    if (Posts.findOne(postId).poster == Meteor.userId())
      return Posts.remove(postId);
    else
      throw new Meteor.Error("unauthorized", "trying to remove post you are not authorized to");
  }
});