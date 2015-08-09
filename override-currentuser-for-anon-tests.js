Tinytest.add('override-currentuser-for-anon - currentUser and meteorCurrentUser', function (test) {
  // Define a template that looks up currentUser and tests it
  var template = new Blaze.Template("test", function() {
    var view = this;
    var actualCurrentUser = view.lookup("currentUser")();
    test.equal(actualCurrentUser, expectedCurrentUser);
    var actualMeteorCurrentUser = view.lookup("meteorCurrentUser")();
    test.equal(actualMeteorCurrentUser, expectedMeteorCurrentUser);
    return Spacebars.mustache(actualCurrentUser); // We don't need the output
  });

  // Stub Meteor.user
  var origMeteorUser = Meteor.user;
  Meteor.user = function() {
    return user;
  }

  // Create a user object for our stub to return.
  var user = {
    emails: [ {address: true} ], // not a string
    username: true, // not a string
    profile: {
      name: true // not a string
    }
  };
  var expectedCurrentUser = user;
  var expectedMeteorCurrentUser = user;

  // Test a marginally anonymous user.
  expectedCurrentUser = null;
  Blaze.toHTML(template);

  // Test non-anonymous users
  expectedCurrentUser = user;

  // Test a non-anonymous user with only a profile.name
  delete user.emails;
  delete user.username;
  user.profile.name = 'Test User';
  Blaze.toHTML(template);

  // Test a non-anonymous user with only an email address
  delete user.profile;
  user.emails = [ { address: 'test@example.com' }];
  Blaze.toHTML(template);

  // Test a non-anonymous user with only a username
  delete user.emails;
  user.username = 'testuser';
  Blaze.toHTML(template);

  // Unstub Meteor.user
  Meteor.user = origMeteorUser;
});
