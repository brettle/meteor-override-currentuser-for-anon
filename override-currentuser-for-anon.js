
Blaze.Template.registerHelper('currentUser', function () {
  var user = Meteor.user();
  if (user && user.services) {
    var serviceKeys = _.keys(user.services);
    serviceKeys = _.without(serviceKeys, 'resume');
    if (serviceKeys.length > 0) {
      return user;
    }
  }
  return null;
});
