import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '/imports/startup/server/index.js';
import '/imports/api/landing/users.js';
import '/imports/api/landing/server/publications.js';
import '/imports/api/message/messages.js';
import '/imports/api/message/messageRooms.js';
import '/imports/api/message/server/publications.js';
import '/imports/api/profile/images.js';
import '/imports/api/profile/server/publications.js';

Meteor.startup(() => {
  // code to run on server at startup
  

});
