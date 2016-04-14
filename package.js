Package.describe({
  name: 'valedaemon:autoform-materialize-tags',
  version: '0.0.1',
  summary: 'Autoform tags, materialize style (i.e., chips)',
  git: 'https://github.com/valedaemon/autoform-materialize-tags.git',
  documentation: 'README.md'
});

Npm.depends({
  "materialize-tags": "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('templating@1.0.0');
  api.use('jquery');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles(['autoform-materialize-tags.js', 'autoform-materialize-tags.html'], 'client');
  api.mainModule('autoform-materialize-tags.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.use('valedaemon:autoform-materialize-tags');
  api.mainModule('autoform-materialize-tags-tests.js');
});
