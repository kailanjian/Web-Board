import { Posts } from '/imports/api/posts/posts.js';

import '../../components/addpost/addpost.js';

import './myposts.html';

Template.App_myposts.onCreated(function() {
  if (!Meteor.user()) {
    FlowRouter.go("App.notFound");;
  }
  Meteor.subscribe('posts.all');
  this.displayFilter = Meteor.userId();
  this.data.displayFilter = Meteor.userId();
});

Template.App_myposts.helpers({
  posts() {
    return Posts.find({poster: Meteor.userId()});
  }
});