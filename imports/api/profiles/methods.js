import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Profiles } from './profiles.js';
import { Posts } from '../posts/posts.js';

Meteor.methods({
  'profiles.new'(){
    if (Meteor.user()) {
      console.log("inserting new profile...");
      return Profiles.insert({
        userId: Meteor.userId(),
        votes: []
      });
    } else {
      throw new Meteor.Error("failed to create profile for user");
    }
  },
  'profiles.vote'(postId) {
    if (Meteor.user()) {
      const votes = Profiles.findOne({userId: Meteor.userId()}).votes;
      if (!votes.includes(postId)) {
        const voteCount = Posts.findOne(postId).votes;
        Posts.update(postId, {$set: {votes: voteCount + 1}});
        return Profiles.update({userId: Meteor.userId()}, {$set: {votes: votes.concat([postId])}});

      }
    }
  }
});
