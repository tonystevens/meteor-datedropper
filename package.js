Package.describe({
  name: "tonystevens:datedropper",
  version: "1.0.0",
  summary: "Fancy date picker for text input. A Meteor wrapper for Datedropper3 from Felice Gattuso",
  git: "https://github.com/tonystevens/meteor-datedropper",
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.4.2");
  api.use('jquery@1.11.10', 'client');

  api.addFiles('datedropper.js', 'client');
  api.addFiles('datedropper.css', 'client');

  api.addFiles('src/datedropper.svg', 'client');
  api.addFiles('src/datedropper.eot', 'client');
  api.addFiles('src/datedropper.ttf', 'client');
  api.addFiles('src/datedropper.woff', 'client');
});
