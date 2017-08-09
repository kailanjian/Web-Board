import { Meteor } from 'meteor/meteor';
import { Posts } from '/imports/api/posts/posts.js';
import '../../components/display/display.js';

import './all.html';

Template.App_all.onCreated(function() {
  Meteor.subscribe('posts.all');
});

Template.App_all.helpers({
  posts() {
    return Posts.find({});
  }
});