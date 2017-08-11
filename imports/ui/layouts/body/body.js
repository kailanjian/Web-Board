import './body.html';

import '../../components/nav/nav.js';

Template.body.onCreated(function() {
  console.log(this);
});