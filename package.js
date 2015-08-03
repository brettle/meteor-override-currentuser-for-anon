Package.describe({
  name: 'brettle:override-currentuser-for-anon',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Overrides Blaze's currentUser helper so that it returns null for anon user.",
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:brettle/meteor-override-currentuser-for-anon.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('blaze');
  api.use('accounts-base');
  api.use('underscore');
  api.addFiles('override-currentuser-for-anon.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('brettle:override-currentuser-for-anon');
  api.use('blaze');
  api.use('spacebars');
  api.addFiles('override-currentuser-for-anon-tests.js', 'client');
});
