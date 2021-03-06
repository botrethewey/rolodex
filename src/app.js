import $ from 'jquery';
import _ from 'underscore';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';
var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: "J Junior",
    phone: "1234567890",
    email: "jj@example.com"
  }, {
    name: "J Senior",
    phone: "1234567890",
    email: "js@example.com"
  }, {
    name: "Jen Java",
    phone: "1234567890",
    email: "jjava@example.com"
  }, {
    name: "Julia June",
    phone: "1234567890",
    email: "jjune@example.com"
  }, {
    name: "Jane Joe",
    phone: "1234567890",
    email: "jjoe@example.com"
  }, {
    name: "Jarvis Jail",
    phone: "1234567890",
    email: "jjail@example.com"
  }, {
    name: "J Jones",
    phone: "1234567890",
    email: "jjones@example.com"
  }, {
    name: "Joe James",
    phone: "1234567890",
    email: "jjames@example.com"
  }
];

var myRolodex = new Rolodex(contactData);

$(document).ready(function(){
  var myRolodexView = new RolodexView({
    model: myRolodex,
    template:_.template($("#tmpl-contact-card").html()),
    contactDetailsTemplate:_.template($('#tmpl-contact-details').html()),
    el: '#application'
  });

  myRolodexView.render();
});

