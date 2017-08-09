import { Meteor } from 'meteor/meteor';
import { Profiles } from '/imports/api/profiles/profiles.js'

import './nav.html';

Template.nav.onCreated(function() {
  Meteor.subscribe("profiles.user");
})

Template.nav.helpers({
  isLoggedIn() {
    return Meteor.user() ? true : false;
  }
});

Template.nav.events({
  "click .nav-login"(event, template) {
    console.log("nav clicked");

    Meteor.loginWithTwitter({},function(err) {
      if (err) {
        console.log("login error");
        console.log(err);
      } else {
        if (Profiles.find({userId: Meteor.userId()}).count() < 1) {
          Meteor.call("profiles.new");
        }
        console.log("login success!");
      }
    });
  },
  "click .nav-logout"(event, template) {
    Meteor.logout(function(err) {
      if (err) {
        // TODO ERR handling
      } else {
        // logged out
      }
    });
  }
});