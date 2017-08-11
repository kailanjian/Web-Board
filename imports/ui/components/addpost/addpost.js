import './addpost.html';

import { Posts } from '/imports/api/posts/posts.js';
import { ReactiveVar } from 'meteor/reactive-var';

Template.addpost.onCreated(function() {
  this.isLinkValid = new ReactiveVar(false);
  this.isLinkValidating = new ReactiveVar(false);

  this.validateLink = function(link) {
    var pattern = /https?:\/\/[^\.]+\..+/
    this.isLinkValid.set(pattern.test(link));
  }

  this.isPictureValid = new ReactiveVar(false);
  this.isPictureValidating = new ReactiveVar(false);
  
  this.validatePicture = function(link) {
    var pattern = /https?:\/\/[^\.]+\..+/
    this.isPictureValid.set(pattern.test(link));
  }

});

Template.addpost.helpers({
  isLinkValid() {
    console.log("link validation helper");
    return Template.instance().isLinkValid.get();
  },
  isLinkValidating() {
    console.log("link validating helper");
    return Template.instance().isLinkValidating.get();
  },
  isPictureValid() {
    return Template.instance().isPictureValid.get();
  },
  isPictureValidating() {
    return Template.instance().isPictureValidating.get();
  }
})


Template.addpost.events({
  // Form Submit
  "submit #form-addpost"(event, template) {
    event.preventDefault();

    const link = template.find("#input-link").value;
    const image = template.find("#input-image").value;
    const description = template.find("#input-description").value;
    Meteor.call("posts.insert", link, image, description);
    
    template.isLinkValidating.set(false);
    template.isPictureValidating.set(false);

    template.find("#form-addpost").reset();
  },
  // Blur and Key up for link input
  "blur #input-link"(event, template) {
    template.isLinkValidating.set(true);
    const link = template.find("#input-link").value;
    template.validateLink(link);
  },
  "keyup #input-link"(event, template) {
    const link = template.find("#input-link").value;
    console.log(template.find("#input-link"));
    if (template.isLinkValidating.get()) {
      template.validateLink(link);
    }
  },
  // Blur and key up for image input
  "blur #input-image"(event, template) {
    template.isPictureValidating.set(true);
    const link = template.find("#input-image").value;
    template.validatePicture(link);
  },
  "keyup #input-image"(event, template) {
    const link = template.find("#input-image").value;
    if (template.isPictureValidating.get()) {
      template.validatePicture(link);
    }
  },
});