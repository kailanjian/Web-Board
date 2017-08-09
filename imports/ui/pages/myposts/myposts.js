import { Posts } from '/imports/api/posts/posts.js';

import '../../components/addpost/addpost.js';

import './myposts.html';

Template.App_myposts.onCreated(function() {
  Meteor.subscribe('posts.all');
});

Template.App_myposts.helpers({
  posts() {
    return Posts.find({poster: Meteor.userId()});
  }
});