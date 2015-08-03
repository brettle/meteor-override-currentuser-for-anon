Tinytest.add('override-currentuser-for-anon', function (test) {
  // Define a template that looks up currentUser and tests it
  var template = new Blaze.Template("test", function() {
    var view = this;
    var actualCurrentUser = view.lookup("currentUser")();
    test.equal(actualCurrentUser, expectedCurrentUser);
    return Spacebars.mustache(actualCurrentUser); // We don't need the output
  });

  // Stub Meteor.user
  var origMeteorUser = Meteor.user;
  Meteor.user = function() {
    return user;
  }

  // Create a user object for our stub to return.
  var user = {
    profile: {
      name: "Test User"
    },
    services: {
      google: {
        id: "test"
      }
    }
  };

  // Test a non-anonymous user.
  var expectedCurrentUser = user;
  Blaze.toHTML(template);

  // Test a non-anonymous user with a resume service.
  user.services.resume = { loginTokens: "etc" };
  Blaze.toHTML(template);

  // Test an anonymous user (i.e. with only a resume service).
  delete user.services.google;
  expectedCurrentUser = null;
  Blaze.toHTML(template);

  // Unstub Meteor.user
  Meteor.user = origMeteorUser;
});
