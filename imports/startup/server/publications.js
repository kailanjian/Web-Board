import { Meteor } from 'meteor/meteor';

Meteor.publish('users.profiles', function() {
  console.log("Publishing profiles...");
  console.log(Meteor.users.find({}), {fields: {profile: 1}});
  return Meteor.users.find({}, {fields: {profile: 1}});
});