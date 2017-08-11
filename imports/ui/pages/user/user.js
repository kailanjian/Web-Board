import './user.html';

import { Meteor } from 'meteor/meteor';
import { Posts } from '/imports/api/posts/posts.js';

import '../../components/display/display.js';

// for convenience
const userId = FlowRouter.getParam("userId");

Template.App_user.onCreated(function() {
  Meteor.subscribe('posts.all');
  Meteor.subscribe('users.profiles');

  const userId = FlowRouter.getParam("userId");
  this.data.displayFilter = userId;
  
  // why is this only yielding one user??
});

Template.App_user.helpers({
  posts() {
    return Posts.find({});
  },
  userId() {
    return FlowRouter.getParam("userId");
  },
  username() {
    console.log("USERNAME HELPER");
    if (Meteor.users.findOne({_id: FlowRouter.getParam("userId")})) {
      return Meteor.users.findOne({_id: FlowRouter.getParam("userId")}).profile.name;
    } else {
      return "...";
    }
  }
});