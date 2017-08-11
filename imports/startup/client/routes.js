import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/about/about.js';
import '../../ui/pages/myposts/myposts.js';
import '../../ui/pages/all/all.js';
import '../../ui/pages/user/user.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.all',
  action() {
    BlazeLayout.render('App_body', { main: 'App_all' });
  },
});

FlowRouter.route('/about', {
  name: 'App.about',
  action() {
    BlazeLayout.render('App_body', { main: 'App_about' });
  },
});

FlowRouter.route('/all', {
  name: 'App.all',
  action() {
    BlazeLayout.render('App_body', { main: 'App_all' });
  },
});

FlowRouter.route('/myposts', {
  name: 'App.myposts',
  action() {
    BlazeLayout.render('App_body', { main: 'App_myposts' });
  },
});

FlowRouter.notFound = {
  name: "App.notFound",
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route('/user/:userId', {
    // do some action for this route
    action(params, queryParams) {
        const userId = params.userId;
        BlazeLayout.render('App_body', { main: 'App_user'});
    },

    name: "App.user" // optional
});
