Package.describe({
  name: 'brettle:override-currentuser-for-anon',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: "Deprecated. Use brettle:accounts-anonymous-ui instead.",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/brettle/meteor-override-currentuser-for-anon.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
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
