# brettle:override-currentuser-for-anon

[![Build Status](https://travis-ci.org/brettle/meteor-override-currentuser-for-anon.svg?branch=master)](https://travis-ci.org/brettle/meteor-override-currentuser-for-anon)

*This package is deprecated. Use `brettle:accounts-anonymous-ui` instead.*

Meteor package that overrides Blaze's `currentUser` helper so that it returns null
for anon users.

This fools some accounts UI packages (e.g. `accounts-ui`) into displaying the
sign-in options when an anonymous use is logged in. An anonymous user is defined
as a user whose only service is "resume" (i.e. no password, no 3rd-party OAuth
account, etc.).

This package also adds `meteorCurrentUser` helper which just returns the
Meteor.user() like the `currentUser` helper would return if it was not overriden.

# Acknowledgements

Based on [idea I saw in the artwells:accounts-guest package](https://github.com/artwells/meteor-accounts-guest/blob/master/accounts-guest-client.js#L7).
