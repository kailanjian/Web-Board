import { Meteor } from 'meteor/meteor';
import { Profiles } from '../profiles.js';

Meteor.publish('profiles.user', function() {
  return Profiles.find({userId: Meteor.userId()});
});