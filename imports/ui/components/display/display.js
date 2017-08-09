import { Meteor } from 'meteor/meteor';
import { Posts } from '/imports/api/posts/posts.js';

import { Profiles } from '/imports/api/profiles/profiles.js';

import './display.html'

import 'imagesloaded';

var $grid;
Template.block.onCreated(function() {
});

Template.block.onRendered(function() {
  console.log("rendered block");
  if (blockCount == 0) {
    console.log("creating grid...");
    $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      masonry: {
        gutter: 20
      }
    });
    console.log($grid);
  }
  blockCount++;
  $grid.imagesLoaded(function() {
    $grid.isotope("reloadItems").isotope();
  });
});

Template.display.onCreated(function() {
  Meteor.subscribe("profiles.user");

  blockCount = 0;
});

Template.display.onDestroyed(function() {
  console.log("destroyed display");
  $grid.isotope('destroy');
});

// displays all subscribed posts
Template.display.onRendered(function() {
});

Template.display.helpers({
  posts() {
    return Posts.find({});
  }
});

Template.display.events({
  "click .button-votes"(event, template) {
    event.preventDefault();

    Meteor.call('profiles.vote', this._id);

  },
  "click .remove-button"(event, template) {
    event.preventDefault();
  
    Meteor.call("posts.remove", this._id, function(err) {
      $grid.isotope("reloadItems").isotope();
    });
  }
})