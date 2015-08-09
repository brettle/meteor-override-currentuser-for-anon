
Blaze.Template.registerHelper('currentUser', function () {
  var user = Meteor.user();
  if (! user) {
    return null;
  }
  // If the user has a username, a profile.name, or at least one email address,
  // then they aren't anonymous, so return them.
  if (typeof(user.username) === 'string'
      || user.profile && typeof(user.profile.name) === 'string'
      || (user.emails && user.emails.length > 0
          && typeof(user.emails[0].address) === 'string')) {
    return user;
  }
  // The user is anonymous, so return null
  return null;
});

Blaze.Template.registerHelper('meteorCurrentUser', function () {
  return Meteor.user();
});
