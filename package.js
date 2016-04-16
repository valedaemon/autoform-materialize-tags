Package.describe({
  name: 'valedaemon:autoform-materialize-tags',
  version: '0.0.1',
  summary: 'Autoform tags, materialize style (i.e., chips)',
  git: 'https://github.com/valedaemon/autoform-materialize-tags.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use(['aldeed:autoform@4.0.0 || 5.0.0', 'templating', 'blaze', 'jquery'], 'client');
  api.addFiles(['lib/dist/js/materialize-tags.js','lib/dist/css/materialize-tags.min.css','autoform-materialize-tags.html', 'autoform-materialize-tags.js'], 'client');
});
